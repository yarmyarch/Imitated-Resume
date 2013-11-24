var Resume = (function() {
    
    var self;
    
    var buf = {
        
        //page varibles
        
        //all text in page
        localText : false,
        language : "",
        //last side menu item that was focused, default value is "PostPointer"
        lastFocusedItem : "InfoPointer",
        //There is only one content wrap allowed in the page at the same time. default value is "MidContentPost"
        currentContentId : "MidContentInfo",
        currentPageParam : "",
        //Record the ori friend list innerHTML, used for upgrading language selection
        oriFriendListHtml : "",
        //initialized when the function "fillInFriendList" was called, and uesd by "initPage"
        friendCount : 0,
        //There may exist some elements own the style that could not be definituded before they are been rendered.
        //These styles together with id of the element will be recored here, wainting for defining at the bottom of method "initPage"
        //, var method defined in handlerList.cssInjection.
        //each item in this array should hold two arguments : method and id, like this, {method : "test", id : "test"}.
        extralCss : [],
        //record the mouse position before showing the float photo
        mouseX : 0,
        mouseY : 0,
        //tag that used to prevent float photo from appear multiple times.
        existFloatPhoto : false,
        //if this value was turned false, the floatPhoto will not show.
        allowFloat : true,
        //When MidContentPhotos was hidden before it was completly shown, set this buffer as "true" to prevent unfinished pictures' animotion.
        haltConvert : {},
        //record the route of user
        convertStack : [],
        //point to current page index in convertStack
        convertStackPointer : 0,
        //record the scrollHeight of middle contens to prevent the changes made from padding and border.
        midContentHeight : {},
        
        //record hadnlers binded for util.addListener, used for util.removeListener.
        bintHandlers : {},
        
        //unstatic doms mapping
        friendTagList : {},
        //~ friendTagItemList : {},
        photoList : {},
        //friend items in MidContentFriends
        friendDetailList : {},
        //used to load the float pictures.
        floatImg : false,
        //create buffers for images to make the page more smooth
        imageBuffers : {},
        
        //functional buffer varibles
        //buffer for util.contains
        getEBCNBuffer : {},
        containsBuffer : {},
        getStyleBuffer : {},
        getPositionBuffer : {}
    };
    
    //Would be inited in controller.initView
    var view = {
        //hasned by id of side menu item
        sideMenuItems : {},
        midContents : {},
        //Wrap used to show float photos
        floatPhotoWrap : false,
        browser : {
            ie : /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || + RegExp['\x241']) : undefined,
            opera : /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ?  + ( RegExp["\x246"] || RegExp["\x242"] ) : undefined,
            isWebkit : /webkit/i.test(navigator.userAgent),
            isGecko : /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent),
            isStrike :  document.compatMode == "CSS1Compat"
        }
    };
    
    var util = {
        
        getElementsByClassName : function(className, tagName) {
            
            //check buf first
            var _buf = buf,
                elems, tmpElems,
                key = className + "_" + tagName;
            if (_buf.getEBCNBuffer[key]) return _buf.getEBCNBuffer[key];
            
            elems = document.getElementsByClassName && document.getElementsByClassName(className);
            
            if (elems) return elems;
            tagName = tagName || "div";
            tmpElems = document.getElementsByTagName(tagName);
            elems = [];
            for (var i = 0, len = tmpElems.length; i < len; ++i) {
                tmpElems[i].className.match(className) && elems.push(tmpElems[i]);
            }
            return _buf.getEBCNBuffer[key] = elems;
        },
        
        /**
         * function used for replacing tags (such as "<a#Baidu#>") with params given by LC.PARAM.
         */
        replaceTag : function(oriText) {
            
            //replace tag if exist
            var reg = /<(\w+)#(.*?)#>/,
                matchStr = oriText.match(reg),
                tagType,
                paramName,
                result = oriText,
                params,
                handler,
                _lc = LC,
                _buf = buf,
                _hl = handlerList;
            while (matchStr) {
                tagType = matchStr[1];
                paramName = matchStr[2];
                
                //Get param from LC.PARAM, default is {} if not exist.
                //The handler, if exist, will still be execurted
                params = _lc[_buf.language].PARAM[tagType];
                params = params && params[paramName] || {};
                handler = _hl.LCParamHandler[tagType];
                result = result.replace(reg, handler ? handler(paramName, params) : "")
                matchStr = result.match(reg);
            }
            return result;
        },
        
        createCommentItem : function(_lc, _buf, source, from, to, post) {
            
            var result = [], i,
                from = from - 0 || 0,
                to = to - 0 || post.comments.length;
            for (i = from; i < to; ++i) {
                result.push(source.COMMENT_ITEM
                    .replace(/%friendId%/ig, post.comments[i].friendId)
                    .replace(/%friendName%/, _lc[_buf.language].PARAM.friend[post.comments[i].friendId].name)
                    .replace(/%content%/, post.comments[i].content)
                    .replace(/%date%/, post.comments[i].date)
                );
            }
            return util.replaceTag(result.join(""));
        },
        
        /**
         *get mouse position
         */
        getPageX : function (event) { 
            var result = event.pageX, 
                doc = document; 
            if (!result && result !== 0) { 
                result = (event.clientX || 0)  
                    + (doc.documentElement.scrollLeft  
                    || doc.body.scrollLeft); 
            } 
            return result; 
        },
        
        /**
         *get mouse position
         */
        getPageY : function (event) { 
            var result = event.pageY, 
                doc = document; 
            if (!result && result !== 0) { 
                result = (event.clientY || 0)  
                    + (doc.documentElement.scrollTop
                    || doc.body.scrollTop); 
            } 
            return result; 
        },
        
        contains : function(container, contained) {
            
            //read buf first
            var bufId = contained.id && (container.id + "_" + contained.id),
                _buf = buf,
                result;
            if (bufId && bufId in _buf.containsBuffer) return _buf.containsBuffer[bufId];
            
            result = container.contains
                ? container != contained && container.contains(contained)
                : !!(container.compareDocumentPosition(contained) & 16);
            bufId && (_buf.containsBuffer[bufId] = result);
            
            return result;
        },
        
        /**
         *@return 0 when there exist no result.
         */
        getRandomInt : function(min, max, unEqualMin, unEqualMax) {
            
            //if (0,1)... no result!
            if (unEqualMin && unEqualMax && max - min <= 1) return 0;
            var result = min + Math.random() * (max - min);
            unEqualMin && (result = Math.ceil(result));
            unEqualMax && (result = Math.floor(result));
            return Math.round(result);
        },
        
        addListener : function(element, type, handler) {            
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler);
            }
        },
        
        removeListener : function(element, type, handler) {
            
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent('on' + type, handler);
            }
        },
        
        validateId : function(element) {
            
            return element.id || (element.id = "_RI_" + util.getRandId());
        },
        
        getStyle : function (element, key) {
            
            //check buffer first
            var _buf = buf,
                id = util.validateId(element),
                result = _buf.getStyleBuffer[id],
                doc = document,
                styles;
            if (result) return result;
            
            if (result = element.style[key]) {
                
            } else if (result = element.currentStyle ? element.currentStyle[key] : "") {
                
            } else if (doc.defaultView && doc.defaultView.getComputedStyle) {
                styles = doc.defaultView.getComputedStyle(element, null);
                if (styles) {
                    return result = styles[key] || styles.getPropertyValue(key);
                }
            }
            return _buf.getStyleBuffer[id] = result || "";
        },
        
        /**
         *from tangram.baidu.com
         */
        getPosition : function (element) {
            
            //check buffer first
            var _buf = buf,
                id = util.validateId(element),
                result = _buf.getPositionBuffer[id];
            if (result) return result;
            
            result = {"left":0,"top":0};
            var doc = document,
                browser = view.browser,
            
                BUGGY_GECKO_BOX_OBJECT = browser.isGecko > 0 && 
                                         doc.getBoxObjectFor &&
                                         getStyle(element, 'position') == 'absolute' &&
                                         (element.style.top === '' || element.style.left === ''),
                viewport = (browser.ie && !browser.isStrict) ? doc.body : doc.documentElement,
                parent,
                box;
            
            if(element == viewport){
                return result;
            }

            if(element.getBoundingClientRect){ // IE and Gecko 1.9+
                
                box = element.getBoundingClientRect();

                result.left = Math.floor(box.left) + Math.max(doc.documentElement.scrollLeft, doc.body.scrollLeft);
                result.top  = Math.floor(box.top)  + Math.max(doc.documentElement.scrollTop,  doc.body.scrollTop);
                
                result.left -= doc.documentElement.clientLeft;
                result.top  -= doc.documentElement.clientTop;
                
                var htmlDom = doc.body,
                    htmlBorderLeftWidth = parseInt(util.getStyle(htmlDom, 'borderLeftWidth')),
                    htmlBorderTopWidth = parseInt(util.getStyle(htmlDom, 'borderTopWidth'));
                if(browser.ie && !browser.isStrict){
                    result.left -= isNaN(htmlBorderLeftWidth) ? 2 : htmlBorderLeftWidth;
                    result.top  -= isNaN(htmlBorderTopWidth) ? 2 : htmlBorderTopWidth;
                }
            } else { // safari/opera/firefox
                parent = element;

                do {
                    result.left += parent.offsetLeft;
                    result.top  += parent.offsetTop;
              
                    if (browser.isWebkit > 0 && util.getStyle(parent, 'position') == 'fixed') {
                        result.left += doc.body.scrollLeft;
                        result.top  += doc.body.scrollTop;
                        break;
                    }
                    
                    parent = parent.offsetParent;
                } while (parent && parent != element);

                if(browser.opera > 0 || (browser.isWebkit > 0 && getStyle(element, 'position') == 'absolute')){
                    result.top  -= doc.body.offsetTop;
                }

                parent = element.offsetParent;
                while (parent && parent != doc.body) {
                    result.left -= parent.scrollLeft;
                    if (!browser.opera || parent.tagName != 'TR') {
                        result.top -= parent.scrollTop;
                    }
                    parent = parent.offsetParent;
                }
            }

            return _buf.getPositionBuffer[id] = result;
        },
        /**
         *get the nature attribute of an element, such as height or width
         *this method was totally used to get the width/height for float photo wrap,
         *while the image may be wrapped by a <a> tag.
         */
        getAttribute : function(elem, attribute) {
            
            if (elem[attribute]) return elem[attribute];
            for (var i = 0, len = elem.childNodes.length; i < len; ++i) {
                return util.getAttribute(elem.childNodes[i], attribute);
            }
        },
        
        /**
         *return a random string constructed with number and letters in low case.
         */
        getRandId : function() {
            return (Math.random()).toString(36).substring(2);
        }
    };
    
    var handlerList = {
        
        /**
         *return html code for data configured by LC.PARAM
         */
        LCParamHandler : {
            /**
             *tag <a> uses 3 params, href、title and text.
             */
            a : function(key, param) {
                return LC.HTML.PARAM_A
                    .replace(/%href%/, (param && param.href || "javascript:void(0);"))
                    .replace(/%title%/, (param && param.title || ""))
                    .replace(/%text%/, (param && param.text || ""));
            },
            count : function(key, params) {
                
                return buf.friendCount;
            },
            friend : function(key, param) {
                return LC.HTML.PARAM_A
                    .replace(/%href%/, 'javascript:void(0);" onclick="javascript:Resume.locateFriend(\'' + key + '\');"')
                    .replace(/%title%/, "")
                    .replace(/%text%/, param.name);
            },
            floatPhoto : function(key, param) {
                if (LC[buf.language].PHOTOS[key.match(/(.+\/).+/)[1]][key.match(/.+\/(.+)/)[1]]) {
                    return 'id="_FP_%randId%" title="%title%" onmouseover="javascript:Resume.showFloatPhoto(event, \'_FP_%randId%\', \'%photoName%\');" onclick="javascript:Resume.toggleFloat(event, \'_FP_%randId%\', \'%photoName%\');"'
                        .replace(/%title%/ig, LC[buf.language].NORMAL_TEXT.floatImgTitle)
                        //~ .replace(/%title%/ig, "")
                        .replace(/%randId%/ig, util.getRandId())
                        .replace(/%photoName%/ig, key);
                } else {
                    return '';
                }
            },
            jump : function(key, param) {
                
                var html = [];
                for (var i = 0, len = key.length; i < len; ++i) {
                    html.push(['<span class="jumper" onmouseover="javascript:Resume.jump(this);">', key[i], '</span>'].join(""));
                }
                return html.join("");
            },
            loateFriend : function(key) {
                return 'onclick="javascript:Resume.locateFriend(\'%friendId%\');"'.replace(/%friendId%/, key);
            },
            
            /**
             *renderer for MidContentInfo/Work and Education
             */
            infoWork : function(key, param) {
                
                return LC.HTML.INFO_WORK_A
                    .replace(/%href%/, param && param.href || "javascript:void(0);")
                    .replace(/%title%/, param && param.title || "")
                    .replace(/%src%/, param && param.src || "imgs/friends/baidu.png")
                    .replace(/%text%/, param && param.text || "");
            },
            
            entertainment : function(key, param) {
                
                var html = [], i;
                for (i in param) {
                    html.push('<img src="imgs/ents/%image%.png" class="info-ent-img%isLast%" <floatPhoto#ents/photos/%image%#> />'
                        .replace(/%image%/ig, param[i])
                        //4 pictures in a line
                        .replace(/%isLast%/ig, ((+ i + 1) % 4 == 0 ? " no-margin" : ""))
                    );
                }
                return html.join("");
            }
        },
        
        postCreater : {
            
            /**
             *create an activity item
             */
            activity : function(source, post) {
                
                return util.replaceTag(source.ACTIVITY_ITEM
                    .replace(/%type%/, post.type)
                    .replace(/%content%/, post.content));
            },
            
            /**
             *card posts could be seen as a special normal post.
             */
            normal : function(source, post, isLast) {
                
                var comments = [],
                    likedBy = [],
                    _lc = LC,
                    _buf = buf,
                    i, len,
                    content = post.content,
                    randId;
                
                //create comment html
                //create "liked by" first
                if (post.likedBy) {
                    for (i = 0, len = post.likedBy.length; i < len; ++i) {
                        likedBy.push(_lc.HTML.FRIEND_NAME.replace(/%friendName%/, _lc[_buf.language].PARAM.friend[post.likedBy[i]].name));
                        //if there exist 3 or more people liked this item, it should be should like this : a, b and c ...
                        if (i < len - 2) {
                            likedBy.push(", ");
                        } else if (i == len - 2) {
                            likedBy.push([" " + _lc[_buf.language].NORMAL_TEXT.and + " "]);
                        }
                    }
                    comments.push(source.COMMENT_LIKE
                        .replace(/%friends%/, likedBy.join(""))
                        .replace(/%like%/, _lc[_buf.language].NORMAL_TEXT.like)
                    );
                }
                
                //then comment list
                //if there exist more than 2 comments, show "more" link.
                if(post.comments) {
                    len = post.comments.length;
                    if (len > 2) {
                        randId = "_VM_" + util.getRandId();
                        comments.push(source.VIEW_MORE
                            .replace(/%more%/, _lc[_buf.language].NORMAL_TEXT.more
                                .replace(/%count%/, len - 2))
                            .replace(/%randId%/, randId)
                            .replace(/%items%/, util.createCommentItem(_lc, _buf, source, 0, len - 2, post))
                        );
                        //record the css that should be completed after all innerHTML was filled in
                        _buf.extralCss.push({method : "viewMore", id : randId});
                        comments.push(util.createCommentItem(_lc, _buf, source, len - 2, len, post));
                    } else {
                        comments.push(util.createCommentItem(_lc, _buf, source, 0, len, post));
                    }
                }
                
                //if it's a card post, replace content with 
                if (post.isCard) {
                    
                    content = source.CARD_CONTENT
                        .replace(/%content%/, post.content || "")
                        .replace(/%card%/ig, post.card)
                        .replace(/%title%/, post.title)
                        .replace(/%cardContent%/, post.cardContent);
                }
                
                return util.replaceTag(source.FRAME
                    .replace(/%isLast%/, isLast ? " no-border" : "")
                    .replace(/%body%/, source.NORMAL_BODY
                        .replace(/%likeLink%/, _lc[_buf.language].NORMAL_TEXT.likeLink)
                        .replace(/%commentLink%/, _lc[_buf.language].NORMAL_TEXT.commentLink)
                        .replace(/%shareLink%/, _lc[_buf.language].NORMAL_TEXT.shareLink)
                        .replace(/%friendId%/ig, post.friendId)
                        .replace(/%friendName%/, _lc[_buf.language].PARAM.friend[post.friendId].name)
                        .replace(/%content%/, content)
                        .replace(/%inlineType%/ig, post.inline ? "span" : "div")
                        .replace(/%date%/, post.date)
                        //if exist no comments, source.COMMENT shouldn't be uesd here.
                        .replace(/%comments%/, source.COMMENT.replace(/%items%/, comments.join("")))
                    )
                );
            }
        },
        
        cssInjection : {
            viewMore : function(id) {
                
                var elem = document.getElementById(id);
                if (!elem) return "";
                return '#%id%:hover{height:%height%px;}'
                    .replace(/%id%/, id)
                    .replace(/%height%/, elem.scrollHeight);
            },
            midContent : function(id) {
                
                var elem = document.getElementById(id),
                    _buf = buf,
                    bufferHeight = buf.midContentHeight[_buf.language];
                
                if (!elem) return "";
                !bufferHeight && (bufferHeight = buf.midContentHeight[_buf.language] = {});
                if (!bufferHeight[id]) {
                    //create a temporarily dom to culculate the true height, in case it would be disturbed by injected css.
                    var tempElem = document.createElement("div");
                    tempElem.innerHTML = elem.innerHTML;
                    tempElem.className = "mid-content";
                    tempElem.style.height = "0px";
                    tempElem.style.padding = "0";
                    tempElem.style.margin = "0";
                    tempElem.style.border = "0";
                    tempElem.style.overFlow = "hidden";
                    tempElem.id = "Fu" + (+new Date());
                    document.body.appendChild(tempElem);
                    
                    bufferHeight[id] = tempElem.scrollHeight;
                    //~ bufferHeight[id] = elem.scrollHeight;
                    
                    document.body.removeChild(tempElem);
                    delete tempElem;
                }
                return '#%id%{height:%height%px;}#%id%.mid-content-hide{height:0px;}'
                    .replace(/%id%/ig, id)
                    .replace(/%height%/, bufferHeight[id]);
            },
            tagItem : function(id) {
                
                var elem = document.getElementById(id);
                //merge the top or left attributes in case that the elemement is out of range.
                elem.offsetLeft <= 0 && (elem.style.right = util.getRandomInt(0, (LC.FRIEND_TAG_WIDTH - elem.scrollWidth)) + "px");
                elem.offsetTop <= 0 && (elem.style.bottom = util.getRandomInt(0, (LC.FRIEND_TAG_HEIGHT - elem.scrollHeight)) + "px");
                return "";
            }
        },
        
        /**
         *The function  will try to hide the float photo if user's mouse is on document
         */
        hideFloatPhotoHandler : function(id) {
            return function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                //user's mouse is on the avatar or the float photo
                if (target.id == id || target.id == "FloatPhoto" || util.contains(view.floatPhotoWrap, target)) {
                    //show photo comment if exist
                    var photoComment = document.getElementById("FloatPhotoComment");
                    if (target.id == "FloatPhotoImg") {
                        if (photoComment) {
                            photoComment.className = "photo-comment photo-comment-show";
                        }
                    }
                    return;
                }
                else self.hideFloatPhoto(id);
            }
        },
        
        hideFriendTagHandler : function(friendId) {
            return function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement,
                    _buf = buf,
                    id = "_FDI_" + friendId;
                if (target.id == id || util.contains(document.getElementById(id), target)) return;
                else self.hideFriendTags(friendId);
            }
        },
        
        /**
         *callback for mid contents be activated.
         *for example, when the MidContentPhotos displayed, the animotions for pictures will start playing.
         */
        contentActiveHandler : {
            
            /**
             *Play the animotion for pictures
             */
            MidContentPhotos : function() {
                
                var photos = [], 
                    i, j, pointer = 0,
                    _lc = LC, 
                    _buf = buf,
                    id, 
                    tmpPhotos =  _lc[_buf.language].PHOTOS,
                    className,
                    convertor = function() {
                        
                        //check if contentHideHandler.MidContentPhotos was executed before the converts have finished.
                        if (_buf.haltConvert["MidContentPhotos"]) return;
                        if (pointer < photos.length) {
                            setTimeout(function() {
                                if (_buf.haltConvert["MidContentPhotos"]) return;
                                
                                id = photos[pointer];
                                //The animotion for photos item title or photo items
                                !id.match(/_PIT_/) 
                                        && (id = "_PI_".concat(id), className = "photo-item photo-item-show") 
                                    || (className = "info-title");
                                
                                !_buf.photoList[id] && (_buf.photoList[id] = document.getElementById(id));
                                _buf.photoList[id] && (_buf.photoList[id].className = className);
                                
                                ++pointer;
                                convertor();
                            //400ms for the first time.
                            }, pointer == 0 ? 400 : 100);
                        }
                    };
                
                _buf.haltConvert["MidContentPhotos"] = false;
                for (i in tmpPhotos) {
                    if (tmpPhotos[i].hidden) continue;
                    for (j in tmpPhotos[i]) {
                        if (tmpPhotos[i][j].hidden) continue;
                        //if it was not set hidden, show it.
                        if (tmpPhotos[i][j].content) photos.push(i.concat(j));
                        //The animotion for photos item title
                        else photos.push("_PIT_".concat(i));
                    }
                }
                convertor();
            },
            
            /**
             *Play the animotion for friendLists, the same as for MidContentPhotos
             */
            MidContentFriends : function(friendId) {
                
                var friends = [], 
                    i, pointer = 0,
                    _lc = LC, 
                    _buf = buf,
                    id,
                    convertor = function() {
                        
                        //check if contentHideHandler.MidContentPhotos was executed before the converts have finished.
                        if (_buf.haltConvert["MidContentFriends"]) return;
                        if (pointer < friends.length) {
                            setTimeout(function() {
                                if (_buf.haltConvert["MidContentFriends"]) return;
                                
                                id = "_FDI_".concat(friends[pointer]);
                                !_buf.friendDetailList[id] && (_buf.friendDetailList[id] = document.getElementById(id));
                                
                                _buf.friendDetailList[id] && (_buf.friendDetailList[id].className 
                                    = (pointer == friends.length - 1 ) ? "friend-detail-item fdi-show fdi-last" : "friend-detail-item fdi-show");
                                
                                //at the same time when the element is visible,
                                //scroll the screen to the located(by pageParam, it should be friend id here) friend item
                                friends[pointer] == friendId && handlerList.innerConvertHandler["MidContentFriends"](friendId);
                                
                                ++pointer;
                                convertor();
                            //400ms for the first time, because the page convert animotion cost .4s.
                            //before the conversion was finished, util.getPosition for the first friend detail item may return a wrong value.
                            }, pointer == 0 ? 400 : 100);
                        }
                    };
                
                _buf.haltConvert["MidContentFriends"] = false;
                for (i in _lc[_buf.language].PARAM.friend) {
                    friends.push(i);
                }
                convertor();
            }
        },
        
        /**
         *callback for mid contents be hidden.
         */
        contentHideHandler : {
            
            /**
             *Play the animotion for pictures
             */
            MidContentPhotos : function() {
                
                var _lc = LC,
                    _buf = buf,
                    id, i, j, 
                    photos = _lc[_buf.language].PHOTOS;
                //XXXXXX
                //I use a setTimeout here because in firefox, when className of sub elements are changed at the same tiem with that of it's parent element,
                //animotions for it's parentNode may not take action.
                //I don't know if there exist other solutions. if you know, please tell me with yarmyarch@live.cn, many 3x.
                setTimeout(function() {
                    
                    for (i in photos) {
                        
                        if (photos[i].hidden) continue;
                        for (j in photos[i]) {
                            
                            if (photos[i][j].hidden) continue;
                            //The animotion for photos item title(_PIT_XXX) or photo items
                            photos[i][j].content 
                                && (id = "_PI_" + i + j, className = "photo-item photo-item-hide") 
                            || (id = "_PIT_" + i, className = "info-title pit-hide");
                            
                            !_buf.photoList[id] && (_buf.photoList[id] = document.getElementById(id));
                            _buf.photoList[id] && (_buf.photoList[id].className = className);
                        }
                    }
                }, 6);
                //prevent unfinished converts.
                _buf.haltConvert["MidContentPhotos"] = true;
            },
            
            /**
             *Play the animotion for pictures
             */
            MidContentFriends : function() {
                
                var _lc = LC,
                    _buf = buf,
                    elem;
                setTimeout(function() {                    
                    for (var i in _lc[_buf.language].PARAM.friend) {
                        elem = document.getElementById("_FDI_".concat(i));
                        elem && (elem.className  = "friend-detail-item fdi-hide");
                    }
                }, 6);
                //prevent unfinished converts.
                _buf.haltConvert["MidContentFriends"] = true;
            }
        },
        
        innerConvertHandler : {
            
            /**
             *locate friend detail item
             */
            MidContentFriends : function(friendId) {
                
                var _buf = buf,
                    elem = _buf.friendDetailList["_FDI_".concat(friendId)],
                    top,
                    viewHeight,
                    viewTop;
                if (elem) {
                    top = util.getPosition(elem).top;
                    top = Math.max(Math.round(top - 120), 0);
                    //view top
                    viewTop = + (document.documentElement.scrollTop || document.body.scrollTop);
                    
                    //Chrome may get the wrong value var document.documentElement.scrollTop (document.body.top would be returned instead)
                    SlideUtil.slide(document.documentElement, "scrollTop", viewTop, top, 0.1, function(offset) {
                        offset && (document.body.scrollTop = document.body.scrollTop + offset);
                    }, 1);
                }
            }
        }
    };
    
    var controller = {
        
        /**
         *Init attributes of varible "view" here
         */
        initView : function() {
            
            //init side memu items of left side block
            var sideMenuItems = util.getElementsByClassName("side-menu-item", "a"),
                id;
            for (var i = 0, len = sideMenuItems.length; i < len; ++i) {
                id = sideMenuItems[i].id;
                view.sideMenuItems[id] = sideMenuItems[i];
                id = "MidContent".concat(id.replace(/Pointer/, ""));
                view.midContents[id] = document.getElementById(id);
            }
            view.floatPhotoWrap = document.getElementById("FloatPhoto");
            view.backwardBtn = document.getElementById("Backward");
            view.forwardBtn = document.getElementById("Forward");
            view.topBtn = document.getElementById("GoTopBtnWrap");
            view.extralCss = document.getElementById("ExtralCss");
        },
        
        initLanguage : function(language) {
            
            var _lc = LC, _buf = buf;
            if (_buf.language == language) return;
            
            //Insert innerHTML with LC.ID_TEXT by location.hash or localStorage, default is EN
            _buf.language = ((language || location.hash.match(/\w+/) || (window.localStorage && window.localStorage["language"]) || "EN") + "").toUpperCase();
            var localText = (_lc[_buf.language] || _lc[_buf.language = "EN"]).ID_TEXT;
            
            //Save current selection into localStorage
            window.localStorage && (window.localStorage["language"] = _buf.language);
            
            //Fill in the page with localText
            controller.initPage(localText);
        },
        
        initEvent : function() {
            
            document.getElementById("LanguageENBtn").onclick = function() {
                
                controller.initLanguage("EN");
            };
            
            document.getElementById("LanguageCHBtn").onclick = function() {
                
                controller.initLanguage("CH");
            };
            
            view.forwardBtn.onclick = function() {
                
                var _buf = buf,
                    _hl = handlerList;
                
                //end of the view stack, do notiong.
                if (_buf.convertStackPointer >= _buf.convertStack.length - 1) return;
                
                controller.convertPageHandler(_buf.convertStack[++_buf.convertStackPointer], "", 1);
            };
            
            view.backwardBtn.onclick = function() {
                
                var _buf = buf,
                    _hl = handlerList;
                
                //top of the view stack, do notiong.
                if (_buf.convertStackPointer == 0) return;
                
                //if current content is not in the stack, record it.
                if (_buf.convertStackPointer == _buf.convertStack.length) {
                    _buf.convertStack.push(_buf.currentContentId.replace(/MidContent/, ""));
                }
                controller.convertPageHandler(_buf.convertStack[--_buf.convertStackPointer], "", 1);
            };
            
            //slide the scrollbar
            view.topBtn.onclick = function() {
                
                var viewTop = + (document.documentElement.scrollTop || document.body.scrollTop);
                SlideUtil.slide(document.documentElement, "scrollTop", viewTop, 0, 0.1, function(offset) {
                    offset && (document.body.scrollTop = document.body.scrollTop + offset);
                }, 1);
            };
            
            //"scroll to top" button
            document.onscroll = function(e) {
                
                var srollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (srollTop <= 120) {
                    view.topBtn.className = "top-btn";
                    return;
                }
                view.topBtn.className = "top-btn top-btn-show";
            };
            
            //Create buffer for hudge images that would be showed up within floatPhowoWrap
            window.onload = function() {
                
                var _buf = buf,
                    _lc = LC,
                    photoGroups = _lc[_buf.language].PHOTOS,
                    i, j;
                
                //buffer for floatFhoto
                    //photos for "friends" and "cards" are all saved within LC[buf.language].PHOTOS,
                    //and will be used in FloatPhoto
                for (i in photoGroups) {
                    for (j in photoGroups[i]) {
                        photoGroups[i][j].content && !_buf.imageBuffers[j] && (_buf.imageBuffers[j] = controller.createFloatPhotoElement(i.concat(j), 1));
                    }
                }
                
                //no other buffers here right now.
            }
        },
        
        /**
         *Fill in the page with localText, while the text may be desided by locaction.hash or localStorage
         */
        initPage : function(text) {
            
            var elem, matchStr, tagType, paramName, id, attribute, _buf = buf;
            
            //fill in friend list here
            controller.fillInFriendList(LC[_buf.language].PARAM.friend);
            
            //clean page buffer
            controller.cleanup();
            
            for (id in text) {
                
                //special elements
                if (id == "title") {
                    document.title = text[id];
                    continue;
                }
                
                elem = document.getElementById(id);
                if (!elem) continue;
                
                //translate those items into the attribute of elem
                if (text[id] + "" === text[id]) {
                    //text[id] is a String / weak judgement method
                    elem.innerHTML = util.replaceTag(text[id]);
                } else {
                    for (attribute in text[id]) elem[attribute] = util.replaceTag(text[id][attribute]);
                }
            }
            
            controller.fillInInfo();
            
            controller.fillInPosts();
            
            controller.fillInPhotos();
            
            controller.fillInFriends();
            
            _buf.extralCss.push({method : "midContent", id : "MidContentInfo"});
            _buf.extralCss.push({method : "midContent", id : "MidContentPost"});
            _buf.extralCss.push({method : "midContent", id : "MidContentPhotos"});
            _buf.extralCss.push({method : "midContent", id : "MidContentFriends"});
            
            controller.fillInCss();
            
            //show default midContents
            view.midContents[_buf.currentContentId].className = "mid-content mid-content-show";
            //if the code above is active, the the overFlow of midContent should be set as "hidden", the initial className of _buf.currentContentId should be set "mid-content-hide".
        },
        
        /**
         *clear buffer for current language contents.
         *attributes such as dom collections should be reset while the language changes, as .
         */
        cleanup : function() {
            
            var _buf = buf,
                cssElem = view.extralCss;
            _buf.extralCss = [];
            _buf.photoList = {};
            _buf.haltConvert = {};
            _buf.friendTagList = {};
            _buf.photoList = {};
            _buf.friendDetailList = {};
        },
        
        /**
         *init the friendList in left side block.
         *friendlist exist in the configration of LC[buf.language].PARAM.friend
         *This function will also init the attribute buf.friendCount
         */
        fillInFriendList : function(friends) {
            
            var friendHtml = LC.HTML.FRIEND,
                friendList = document.getElementById("FriendList"),
                html = [],
                friendCount = 0,
                _buf = buf;
            html.push(_buf.oriFriendListHtml || (_buf.oriFriendListHtml = friendList.innerHTML));
            for (var friendId in friends) {
                if (friendId == "me") continue;
                ++friendCount;
                html[html.length] = friendHtml
                    .replace(/%id%/ig, friendId)
                    .replace(/%name%/ig, friends[friendId].name);
            }
            _buf.friendCount = friendCount;
            friendList.innerHTML = util.replaceTag(html.join(""));
        },
        
        fillInFriends : function() {
            
            var _lc = LC,
                _buf = buf,
                friendItem = [],
                friendInfo = [],
                friends = _lc[_buf.language].PARAM.friend,
                friendId, i,
                key, value, friendCounter = 0;
            for (friendId in friends) {
                
                //MidContentInfo
                if (friendId == "me") continue;
                ++friendCounter;
                friendInfo = [];
                for (i in friends[friendId]) {
                    
                    //tags should be built independently
                    if (i == "tags") continue;
                    
                    value = friends[friendId][i];
                    
                    //if key is Name, show bold type
                    if (i == "name") {
                        friendInfo.push(_lc.HTML.FRIEND_INFO_TITLE
                            .replace(/%key%/, '<b style="color:#3B5998;">%name%</b>'.replace(/%name%/, value))
                        );
                    } else {
                        friendInfo.push(_lc.HTML.FRIEND_INFO_ITEM
                            .replace(/%key%/, (_lc[_buf.language].FRIEND_INFO_MAPPING[i] || i).concat("："))
                            .replace(/%value%/, value)
                        );
                    }
                }
                friendItem.push(_lc.HTML.FRIEND_ITEM
                    .replace(/%friendId%/ig, friendId)
                    .replace(/%tags%/, controller.buildFriendTag(friendId))
                    .replace(/%info%/, friendInfo.join(""))
                    //id ∈ [) for array
                    .replace(/%className%/, _lc.CSS.FRIEND_TAG_STYLE[util.getRandomInt(0, _lc.CSS.FRIEND_TAG_STYLE.length, false, true)])
                    .replace(/%isLast%/, (friendCounter == _buf.friendCount ? " fdi-last" : ""))
                );
            }
            view.midContents["MidContentFriends"].innerHTML = util.replaceTag(friendItem.join(""));
        },
        
        /**
         *init MidContentInfo wrap with LC[buf.language].INFO
         */
        fillInInfo : function() {
            
            var html = [],
                subHtml,
                _buf = buf,
                _lc = LC,
                informations = _lc[_buf.language].INFO,
                info,
                subInfo,
                renderer;
            
            for (var i in informations) {
                info = informations[i];
                subHtml = [];
                for (var j = 0, len = info.items.length; j < len; ++j) {
                    subInfo = info.items[j];
                    subHtml.push(_lc.HTML.SUB_INFO_ITEM
                        .replace(/%isLast%/, (j == len - 1) ? " no-border" : "")
                        .replace(/%subTitle%/, subInfo.title)
                        //if there exist a renderer for current content, render it; or usee the content directly.
                        .replace(/%content%/, subInfo.content)
                    );
                }
                html.push(_lc.HTML.INFO_ITEM
                    .replace(/%title%/, info.title)
                    .replace(/%subItems%/, subHtml.join(""))
                );
            }
            
            view.midContents["MidContentInfo"].innerHTML = util.replaceTag(html.join(""));
        },
        
        /**
         *Create a post with a avatar, a name, a picture, a title, some contents, maybe a "like" icon and the date.
         *No nested comments supported.
         *If a post doesn't hold a "title" and a picture, it should be a normal post;
         *What's more, if the post even doesn't hold a avatar and a name, then it should be an activity post.
         */
        fillInPosts : function() {
            
            var _lc = LC,
                _buf = buf,
                html = [],
                wall = document.getElementById("WallContent"),
                source = _lc.HTML.POST,
                posts = _lc[_buf.language].POST,
                genre, tmpHtml;
            for (var i = 0, len = posts.length; i < len; ++i) {
                //if there exist lot's of activity at the same time, bind then together.
                tmpHtml = [];
                genre = posts[i].genre;
                while (genre == "activity") {
                    //create next activity item if exist
                    tmpHtml.push(handlerList.postCreater[genre](source, posts[i], i == len - 1));
                    if (posts[i + 1] && posts[i + 1].genre == "activity") ++i;
                    else break;
                }
                if (tmpHtml.length) {
                    //activitys handled
                    html.push(source.FRAME
                        .replace(/%isLast%/, (i == len - 1) ? " no-border" : "")
                        .replace(/%body%/, source.ACTIVITY_BODY
                            .replace(/%activity%/, _lc[_buf.language].NORMAL_TEXT.activity, i == len - 1)
                            .replace(/%activityItems%/, tmpHtml.join(""))));
                } else {
                    //other kind of post
                    html.push(handlerList.postCreater[genre](source, posts[i]));
                }
            }
            wall.innerHTML = html.join("");
        },
        
        /**
         *To complement styles that could not be defined before some an element is already exist in the page.
         */
        fillInCss : function() {
            
            var _lc = LC, _buf = buf, 
                result = [], 
                text, 
                cssElem = view.extralCss;
            
            for (var i in _buf.extralCss) {
                text = handlerList.cssInjection[_buf.extralCss[i].method](_buf.extralCss[i].id);
                text && result.push(text + "\n");
            }
            text = result.join("");
            if (cssElem.styleSheet) {//for IE
                cssElem.styleSheet.cssText = text;
            } else {
                //~ text = document.createTextNode(text);
                //~ cssElem.appendChild(text);
                cssElem.innerHTML = text;
            }
        },
        
        /**
         *init "MidContentPhotos" wrap with LC.PHOTOTS
         */
        fillInPhotos : function() {
            
            var _lc = LC,
                _buf = buf,
                html = [], 
                photoGroups = _lc[_buf.language].PHOTOS,
                photoHtml, i, j;
            for (i in photoGroups) {
                if (photoGroups[i].hidden) continue;
                photoHtml = [];
                for (j in photoGroups[i]) {
                    if (photoGroups[i][j].hidden) continue;
                    if (photoGroups[i][j].content) photoHtml.push(_lc.HTML.PHOTO_ITEM.replace(/%photo%/ig, i.concat(j)));
                }
                photoHtml.push(_lc.HTML.CLEAR);
                html.push(_lc.HTML.PHOTO_GROUP
                    .replace(/%id%/, "_PIT_" + i)
                    .replace(/%title%/, photoGroups[i].title)
                    .replace(/%content%/, photoHtml.join(""))
                );
            }
            html.push(_lc.HTML.CLEAR);
            view.midContents["MidContentPhotos"].innerHTML = util.replaceTag(html.join(""));
        },
        
        uniqueSideMenuItem : function() {
            
            var items = view.sideMenuItems,
                _buf = buf,
                _hl = handlerList;
            
            //bind mouseover event
            for (var i in items) {
                items[i].onmouseover = function(id) {
                    return function(e) {
                        controller.convertPageHandler(id);
                    }
                }(i.replace(/Pointer/, ""));
                
                //execute init functions.
                if (i != _buf.lastFocusedItem) {
                    i = "MidContent".concat(i.replace(/Pointer/, ""));
                    _hl.contentHideHandler[i] && _hl.contentHideHandler[i]();
                } else {
                    i = "MidContent".concat(i.replace(/Pointer/, ""));
                    _hl.contentActiveHandler[i] && _hl.contentActiveHandler[i]();
                }
            }
        },
        
        /**
         *when side menu was focused, try to update mid content to current user choise.
         *@param id content id, such as "Friends" or "Posts".
         *side bar menu id = id + "Pointer",
         *middle content id = "MidContent" + id
         *@param pageParam varibles used within a specific middle content, such as friend id used in "MidContentFriends"
         *@param historyContent is this convert trigglered by "Forward" or "Backward" button.
         */
        convertPageHandler : function(id, pageParam, historyContent){
                
            var _buf = buf;
            if (_buf.lastFocusedItem == id) return;
        
            var _view = view,
                _hl = handlerList,
                sideBarId = id.concat("Pointer"),
                newContentId = "MidContent".concat(id),
                newContentWrap = _view.midContents[newContentId];
            
            _view.sideMenuItems[_buf.lastFocusedItem].className = "side-menu-item";
            _view.sideMenuItems[sideBarId].className = "side-menu-item side-menu-act";
            
            //show content wrap or if possible
            if (newContentWrap && _buf.currentContentId != newContentId) {
                //hide last content wrap and show the new one
                _view.midContents[_buf.currentContentId].className = "mid-content mid-content-hide";
                newContentWrap.className = "mid-content mid-content-show";
                
                //triggler callback when the new page is active, and old page hidden.
                _hl.contentActiveHandler[newContentId] && _hl.contentActiveHandler[newContentId](pageParam);
                _hl.contentHideHandler[_buf.currentContentId] && _hl.contentHideHandler[_buf.currentContentId](pageParam);
                
                //record view stack, used for viewing forwards or backwards
                if (!historyContent || _buf.convertStackPointer == _buf.convertStack.length) {
                    _buf.convertStack = _buf.convertStack.splice(0, _buf.convertStackPointer);
                    _buf.convertStack = _buf.convertStack.concat(_buf.currentContentId.replace(/MidContent/, ""));
                    _buf.convertStackPointer = _buf.convertStack.length;
                }
                
                //update buffer for current page.
                _buf.currentContentId = newContentId;
                _buf.currentHistoryContent = pageParam;
            } else if (newContentWrap && _buf.currentPageParam != pageParam) {
                //show inner page conversion if possible, such as friend detail locating
                handlerList.innerConvertHandler[_buf.currentContentId] && handlerList.innerConvertHandler[_buf.currentContentId](pageParam);
                _buf.currentPageParam = pageParam;
            }
            
            //update buffer
            _buf.lastFocusedItem = sideBarId;
            
            //refresh backward and forward button
            controller.refreshConvertBtn(_buf.convertStackPointer);
        },
        
        refreshConvertBtn : function(index) {
            
            var _buf = buf;
            view.backwardBtn.className = (index == 0 ? "convertor convertor-hide" : "convertor");
            view.forwardBtn.className = (index >= _buf.convertStack.length - 1 ? "convertor convertor-hide" : "convertor");
        },
        
        buildFriendTag : function(friendId) {
            
            var _lc = LC,
                _buf = buf,
                tags = _lc[_buf.language].PARAM.friend[friendId].tags,
                html = [],
                id;
            
            if (!tags) return "";
            for (var i in tags) {
                id = "_FTI_" + friendId + "_" + i;
                html.push(_lc.HTML.FRIEND_TAG_ITEM
                    .replace(/%tag%/, tags[i])
                    ////id ∈ [) for array
                    .replace(/%className%/, _lc.CSS.FRIEND_TAG_ITEM_STYLE[util.getRandomInt(0, _lc.CSS.FRIEND_TAG_ITEM_STYLE.length, false, true)])
                    .replace(/%id%/, id)
                    .replace(/%right%/, util.getRandomInt(0, _lc.FRIEND_TAG_WIDTH))
                    .replace(/%bottom%/, util.getRandomInt(0, _lc.FRIEND_TAG_HEIGHT))
                    .replace(/%color%/, "hsl(%h%, %s%%, %l%%);"
                        .replace(/%h%/, util.getRandomInt(0, 360))
                        .replace(/%s%/, util.getRandomInt(0, 100))
                        .replace(/%l%/, util.getRandomInt(0, 50))
                    )
                    .replace(/%fontSize%/, util.getRandomInt(12, 18))
                );
                //prepare for css injection, in case that those tags out of range.
                _buf.extralCss.push({method : "tagItem", id : id});
            }
            return html.join("");
        },
        
        createFloatPhotoElement : function(photoName, isBuffer) {
            
            var elem = document.createElement("div"),
                _lc = LC,
                comment = _lc[buf.language].PHOTOS[photoName.match(/(.+\/).+/)[1]][photoName.match(/.+\/(.+)/)[1]],
                html;
            
            
            html = comment.href ? _lc.HTML.FLOAT_PHOTO_A : _lc.HTML.FLOAT_PHOTO;
            html = html
                .replace(/%title%/, _lc[buf.language].NORMAL_TEXT.clostFloatPhoto)
                .replace(/%photo%/ig, photoName)
                //if is buffer, the event of showint float photo should not be trigglered at once.
                .replace(/%extralEvent%/, isBuffer ? "" : 'onload="Resume.floatPhotoReady();"')
                .replace(/%comments%/, comment ? 
                    _lc.HTML.PHOTO_COMMENT
                        .replace(/%content%/, comment.content || _lc.NORMAL_TEXT.defaultComment)
                        .replace(/%friendId%/, comment.author || "me")
                        .replace(/%date%/, comment.date || "") 
                    : ""
                );
            //if the float should be a hyperlink...
            html = comment.href ? 
                html
                    .replace(/%href%/, comment.href)
                    .replace(/%aTitle%/, comment.title || "")
                : html;
            
            //check if there exist comments for this photo.
            //comments are configured in LC[buf.language].PHOTO[photoName]
            elem.innerHTML = util.replaceTag(html);
            return elem;
        },
        
        /**
         *Fuck IE6.
         */
        fuckIE6 : function() {
            
            var notes = LC[buf.language].FUCK_IE6.notes,
                locations = LC[buf.language].FUCK_IE6.locations;
            alert(notes[util.getRandomInt(0, notes.length, false, true)]);
            window.location = locations[util.getRandomInt(0, locations.length, false, true)];
        }
    };
    
    return self = {
        
        init : function() {
            
            controller.initView();
            
            controller.initLanguage();
            
            if (view.browser.ie == 6) {
                controller.fuckIE6();
                return;
            }
            
            controller.initEvent();
            
            //There could only exist one "side-menu-item" be selected at a time
            controller.uniqueSideMenuItem();
        },
        
        /**
         *Function used to show the float photo
         */
        showFloatPhoto : function(e, id, photoName) {
            
            var _buf = buf,
                _lc = LC,
                comment = _lc[_buf.language].PHOTOS[photoName.match(/(.+\/).+/)[1]][photoName.match(/.+\/(.+)/)[1]],
                e = e || window.event,
                target = e.target || e.srcElement;
            
            //if the floatPhoto is not allowed showing, return.
            if (!_buf.allowFloat) return;
            
            //if there already exist a float photo and this event is not from another avatar, do nothing.
            if (_buf.existFloatPhoto && target.className != target.className || _buf.existFloatPhoto == id ) return;
            //close this tag while executing hideFloatPhoto.
            _buf.existFloatPhoto = id;
            
            //bind the event on document, stop hidding when the event is coming from the element or view.floatPhotoWrap.
            document.onmouseover = handlerList.hideFloatPhotoHandler(id);
            
            //record mouse position
            _buf.mouseX = util.getPageX(e);
            _buf.mouseY = util.getPageY(e);
            
            //if there exist buffer(judged by the clientWidth of it's img child), execute floatPhotoReady automatically, 
            //otherwise load the picture
            if (!_buf.imageBuffers[photoName] || !util.getAttribute(_buf.imageBuffers[photoName], "width")){
                delete _buf.imageBuffers[photoName];
                _buf.imageBuffers[photoName] = _buf.floatImg = controller.createFloatPhotoElement(photoName);
            } else {
                _buf.floatImg = _buf.imageBuffers[photoName];
                self.floatPhotoReady();
            }
        },
        
        toggleFloat : function(e, id, photoName) {
            
            var _buf = buf,
                _lc = LC,
                e = e || window.event,
                target = e.target || e.srcElement;
            
            _buf.allowFloat = !_buf.allowFloat;
            if (_buf.allowFloat) {
                self.showFloatPhoto(e, id, photoName);
            } else {
                self.hideFloatPhoto(id);
            }
        },
        
        floatPhotoReady : function() {
            
            if (!buf.existFloatPhoto) return;
            var floatPhotoWrap = view.floatPhotoWrap,
                _buf = buf,
                _lc = LC,
                _view = view,
                //imgWidth here may be the nature size of the picture.
                //to fix it, we may use a new css rule, 
                //  but I don't know if it would take effective before the dom was appended into document in other browsers(Chrome does, :)).
                //so I desided to culculate the value var some configuration about the max size of the image from LC.FLOAT_PHOTO_WIDTH and LC.FLOAT_PHOTO_HEIGHT
                imgWidth = util.getAttribute(_buf.floatImg, "width"),
                imgHeight = util.getAttribute(_buf.floatImg, "height"),
                //Dooooooooo not ask me why i have written this, ask god please!
                offsetRage = Math.min(_lc.FLOAT_PHOTO_WIDTH / imgWidth, _lc.FLOAT_PHOTO_HEIGHT / imgHeight, 1),
                left = _buf.mouseX,
                viewWidth = (document.documentElement || ducument.body).clientWidth;
            
            //culculate the true size(left only, used to fix it with the seen area) of picture(after been appended)
            //Dooooooooo not ask me why i have written this, ask god please!
            imgWidth = offsetRage * imgWidth;
            imgHeight = offsetRage * imgHeight;
            
            _view.floatPhotoWrap.innerHTML = "";
            _view.floatPhotoWrap.appendChild(_buf.floatImg);
            delete _buf.floatImg;
            _view.floatPhotoWrap.className = "float-show";
            
            //locate the position
            //if current mouseX is at the right side of the screen, float the photo to the left.
            if (left > viewWidth / 2) {
                //24 is the width of border
                left = left - imgWidth - 24;
                left < 0 && (left = 0);
            };
            //fix the position in case the picture will flow out of the screen
            //24 is the size of border
            if (left + imgWidth + 24 > viewWidth) {
                left = viewWidth - imgWidth - 24;
                left < 0 && (left = 0);
            };
            
            floatPhotoWrap.style.left = left + "px";
            floatPhotoWrap.style.marginTop = ["-",  ~~ (imgHeight / 2) , "px"].join("");
        },
        
        hideFloatPhoto : function(id) {
            
            buf.existFloatPhoto = false;
            var _view = view;
            //clear comments' style
            document.getElementById("FloatPhotoComment") && (document.getElementById("FloatPhotoComment").className = "photo-comment");
            _view.floatPhotoWrap.className = "float-hide";
            //clear events
            document.onmouseover = "";
        },
        
        jump : function(elem) {
            
            elem.className = "jumper-ani";
            setTimeout(function() {
                elem.className = "jumper";
            }, 600);
        },
        
        showFriendTags : function(friendId) {
            
            var _lc = LC,
                _buf = buf,
                tags = _lc[_buf.language].PARAM.friend.tags,
                i, 
                id = "_FT_" + friendId;
                //~ friendTagItemId;
            
            //if there is already exist the tag shown for the friend, do nothing.
            if (_buf.bintHandlers[id]) return;
            
            //play animotions for friend tag
            !_buf.friendTagList[id] 
                && (_buf.friendTagList[id] = document.getElementById(id));
            _buf.friendTagList[id].className 
                = "friend-tag fts-%className% friend-tag-show"
                    .replace(/%className%/, _lc.CSS.FRIEND_TAG_STYLE[util.getRandomInt(
                        0, _lc.CSS.FRIEND_TAG_STYLE.length, false, true
                    )]);
            
            //animotions for each tag itemss
            //~ for (i in tags) {
                //~ friendTagItemId = "_FTI_" + friendId + "_" + i;
                //~ !_buf.friendTagItemList[friendTagItemId] 
                    //~ && (_buf.friendTagItemList[friendTagItemId] = document.getElementById(friendTagItemId));
                //~ !_buf.friendTagItemClassName[friendTagItemId] 
                    //~ && (_buf.friendTagItemClassName[friendTagItemId] = _buf.friendTagList[friendTagItemId].className);
                //~ _buf.friendTagItemList[friendTagItemId].className 
                    //~ = _buf.friendTagItemClassName[friendTagItemId].concat(" tag-item-show");
            //~ }
            
            //bind hide action
            util.addListener(document, "mouseover", _buf.bintHandlers[id] = handlerList.hideFriendTagHandler(friendId));
        },
        
        hideFriendTags : function(friendId) {
            
            var _lc = LC,
                _buf = buf,
                tags = _lc[_buf.language].PARAM.friend.tags,
                i, 
                id = "_FT_" + friendId;
                //~ friendTagItemId;
            
            !_buf.friendTagList[id] && (_buf.friendTagList[id] = document.getElementById(id));
            _buf.friendTagList[id].className = "friend-tag";
            
            //animotions for tags
            //~ for (i in tags) {
                //~ friendTagItemId = "_FTI_" + friendId + "_" + i;
                //~ !_buf.friendTagItemList[friendTagItemId] && (_buf.friendTagItemList[id] = document.getElementById(friendTagItemId));
                //~ _buf.friendTagList[friendTagItemId].className = _buf.friendTagItemClassName[friendTagItemId];
            //~ }
            
            util.removeListener(document, "mouseover", _buf.bintHandlers[id]);
            delete buf.bintHandlers[id];
        },
        
        locateFriend : function(friendId) {
            
            if (friendId == "me") {
                //locate "info" content
                controller.convertPageHandler("Info");
                return;
            }
            controller.convertPageHandler("Friends", friendId);
        }
    };
})();

//photo页面新增完成的项目、遇到的问题等的链接；