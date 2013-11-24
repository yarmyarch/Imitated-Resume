var LC = {
    EN : {
        /**
         *support some tags resolved as params from LC.PARAM
         *tags should be written like this : <tagType#paramName#>
         *it would be known as some actions should be taken using LC.PARAM.tagType.paramName
         */
        ID_TEXT : {
            //value of language-key have a type of String by default, it means the handler should deal with it as innerHTML
            //it auso may be an object, by which the key would be translated as the attribute of matched dom
            
            //special elements
            title : "Luo Yujia",
            //head
            Search : "<jump#Searching for : Web (front-end) development engineer#>",
            Signatures : "You could be whatever you wanted to",
            //left side bar
            Wall : "Wall",
            Info : "Info",
            Photos : "Photos",
            Notes : "Notes",
            Friends : "Friends",
            Subscriptions : "Subcriptions",
            FriendsCount : "Friends (<count#friends#>)",
            AddBadge : "Can't add Badge to Your Site",
            //mid content
            //-profiles
            Name : "Luo Yujia",
            Work : "Worked at <a#baidu#>",
            Study : "Studied at <a#nwpu#>",
            Lives : "Lives in <a#beijing#>",
            From : "From <a#anyue#>",
            Born : "Born on August 2, 1988",
            UpdateStatus : "upgrade status",
            CopyRightText : "No copyrights reserved, any copying, transferring or any other usage is ok.",
            AdTitle : "Sponsored",
            AdNwpuTitle : "In NWPU, your dreams come true!",
            AdNwpuContent : "NPU encourages and provideswith the faculty members opportunities to continue learning, keeping current with the research and development within their fields of expertise.",
            AdAnZhongTitle : "National model high school, Anyue",
            AdAnZhongContent : "Searching for a job as a foreign teacher with a first-tier citie's salary in a small but beautiful town? We have all you want! It's just a distance about 3.5 hours of driving from both ChengDu and ChongQing!",
            AdBaiduTitle : "Join us, defeat google!",
            AdBaiduContent : "Share your talent here, in Silicon Valley, for the new grown Internet center, China! Call +86 185-7662-6334 for detail.",
            NoMore : "There are no more posts to show.",
            
            AdNwpu : {
                href : "http://www.nwpu.edu.cn/english/"
            },
            AdAnZhong : {
                href : "http://www.ayzx.sc.cn/Index.asp",
                title : "I have no much to say about my high school except for love, as you may not have the interest knowing it. Or, you could try to read it's website in Chinese by clicking here."
            },
            AdBaidu : {
                href : "http://hr.baidu.com",
                title : "All right, I'm just fooling."
            },
            SearchWrap : {
                title : "Search for jobs as FE in facebook!"
            },
            NotesPointer : {
                title : "No \"notes\" at the moment. You may want to view \"Photos\" to know more about me and my friends."
            },
            Forward : {
                title : "forward"
            },
            Backward : {
                title : "backward"
            }
        },
        
        /**
         *fuck ie 6, you know it.
         */
        FUCK_IE6 : {
            notes : [
            "IE6 must die!!",
            "Oh my fuck, it's IE6! It's time to get out of the cave man!",
            "IE6... Are you kidding me? No, you are killing me!",
            "Give it up, I'll never let you in with IE6 in your hand!",
            "Hum... I consider IE6 should disappear at once, you agree with me ya?"
            ],
            locations : [
                "http://www.google.cn/chrome/intl/en-US/landing_chrome.html",
                "http://www.mozilla.org/en-US/",
                "http://info.msn.com.cn/ie9/",
                "http://www.opera.com/",
                "http://www.apple.com/safari/"
            ]
        },
        
        /**
         *other text that may be used in other places
         */
        NORMAL_TEXT : {
            and : "and",
            //used in LC.XX.HTML.COMMENT_LIKE
            like : " liked this.",
            more : "view more %count% comments.",
            activity : "RECENT ACTIVITY",
            likeLink : "Like",
            commentLink : "Comment",
            shareLink : "Share",
            defaultComent : "This guy is lazy and left nothing.",
            floatImgTitle : "Click to toggle auto float photo.",
            clostFloatPhoto : "Click to close float photo. Open it by clicking the picture."
        },
        
        PARAM : {
            a : {
                
                baidu : {
                    href : "http://zh.wikipedia.org/wiki/%E7%99%BE%E5%BA%A6",
                    text : "Baidu",
                    title : "Something like google in China"
                },
                baiduCom : {
                    href : "http://www.baidu.com",
                    text : "Baidu",
                    title : "Ecom"
                },
                nwpu : {
                    href : "http://www.nwpu.edu.cn/english/",
                    text : "NWPU",
                    title : "NorthWestern Polytechnical University, College of Software and Microelectronics"
                },
                beijing : {
                    href : "http://ditu.google.cn/maps?hl=zh-CN&q=%E4%B8%AD%E5%9B%BD%E5%8C%97%E4%BA%AC%E5%B8%82&tab=wl",
                    text : "Beijing, China",
                    title : "See “Beijing, China” in google map"
                },
                anyue : {
                    href : "http://images.google.com/search?hl=zh-CN&newwindow=1&biw=1280&bih=706&gbv=2&tbm=isch&sa=1&q=%E5%9B%9B%E5%B7%9D%E5%AE%89%E5%B2%B3&oq=%E5%9B%9B%E5%B7%9D%E5%AE%89%E5%B2%B3&aq=f&aqi=g-g1g-gS9&aql=&gs_sm=3&gs_upl=127778l129356l0l129605l10l10l0l0l0l1l317l1096l0.4.1.1l6l0",
                    text : "Anyue, Sichuan, China",
                    title : "Famous for lemon and buddha"
                },
                bridge : {
                    href : "http://qiao.baidu.com",
                    text : "Baidu Bridge",
                    title : "An im tool used between website owners and visitors."
                },
                club : {
                    href : "http://club.baidu.com",
                    text : "Entrepreneur's Club",
                    title : "The club that helps Internet entrepreneurs to grow up by building cooperations between them."
                },
                lipu : {
                    href : "http://baike.baidu.com/view/882533.html?wtp=tt",
                    text : "failed",
                    title : "Alcohol do harm to health."
                },
                xian : {
                    href : "http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E8%A5%BF%E5%AE%89",
                    text : "Xi'an, China",
                    title : "Also known as ChangAn, one of the world-famous ancient capital of world's greatest civilizations."
                },
                fengchao : {
                    href : "http://www.baidu.com/s?bs=fengchao&f=8&rsv_bp=1&wd=%B7%EF%B3%B2&inputT=1789",
                    text : "Phoenix Nest",
                    title : "A PPC that released by Baidu, The largest Chinese search engine in the world."
                },
                holmes : {
                    href : "http://tongji.baidu.com/web/welcome/login",
                    text : "Baidu Analytics",
                    title : "Again, something like Google Analytics..."
                },
                paper : {
                    href : "http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=5474261&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D5474261",
                    text : "\"Bottom-up Digital Music Simulation System Under Program Control\"",
                    title : "Multimedia and Information Technology (MMIT), 2010 Second International Conference on"
                },
                guochuang : {
                    href : "http://innovation.hust.edu.cn/innovation/index.jsp",
                    text : "Innovative Experimental Program of the National College Students",
                    title : "The first batch of NPU with the name of Digital Music Simulation System"
                },
                ssd_1 : {
                    href : "http://icarnegie.com/",
                    text : "SSD series of courses from Icarnegie",
                    title : "Introduction to Information Systems, Introduction to Computer Systems, Object-Oriented Programming and Design, User-Centered Design and Testing"
                },
                ssd_2 : {
                    href : "http://icarnegie.com/",
                    text : "SSD series of courses from Icarnegie",
                    title : "Data Structures and Algorithms, System-Level Programming, Database Systems, Networks and Distributed Computing, Software Specification/Testing and Maintenance, Software Project Organization and Management"
                },
                anbo : {
                    href : "http://www.ambow.com.cn/",
                    text : "Ambow Education Holding Ltd.",
                    title : "Coding peasants production base in KunShan, JiangSu"
                },
                dasai : {
                    href : "http://news.cqu.edu.cn/news/article/article_11283.html",
                    text : "National Undergraduate software innovation competition",
                    title : "It's such a pity that ZhongPingping was not at the scene."
                },
                anzhong : {
                    href : "http://www.ayzx.sc.cn/",
                    text : "Anyue middle school of Sichuan Province",
                    title : "A middle school that was almost a hungred year old."
                },
                yuezhong : {
                    href : "http://www.aysyzx.com/",
                    text : "Anyue ShiYan middle school of Sichuan Province",
                    title : "Not so good as Anyue middle school."
                },
                helloWorld : {
                    href : "http://en.wikipedia.org/wiki/Hello_world_program",
                    text : '<b><span class="ani-red">H</span><span class="ani-orange">e</span><span class="ani-yellow">ll</span><span class="ani-green">o</span> \
                            <span class="ani-cyan">W</span><span class="ani-blue">o</span><span class="ani-magenta">rl</span><span class="ani-red">d</span><span class="ani-orange">!</span></b>',
                    title : "Oh My Fuck! I seem to see something about somebody's tragically future..."
                },
                baiduPlaza : {
                    href : "http://map.baidu.com/?newmap=1&s=con%26wd%3D%E7%99%BE%E5%BA%A6%E5%A4%A7%E5%8E%A6%26c%3D131&fr=alamg&ext=1&from=alamap",
                    text : 'Baidu Headquarters',
                    title : "Baidu Campus No. 10 Shangdi 10th Street Haidian District Beijing, 100085."
                },
                "985" : {
                    href : "http://baike.baidu.com/view/59436.htm",
                    text : '985 Project',
                    title : ""
                },
                "211" : {
                    href : "http://baike.baidu.com/view/7085.htm",
                    text : '211 Project',
                    title : ""
                },
                "facebook" : {
                    href : "http://facebook.com/yarmyarch",
                    text : 'http://facebook.com/yarmyarch',
                    title : "View my page of facebook, though there's nothing inside..."
                },
                "mail" : {
                    href : "mailto:yarmyarch@live.cn",
                    text : 'yarmyarch@live.cn',
                    title : "Mail to me."
                },
                "qq" : {
                    href : "http://user.qzone.qq.com/328560190",
                    text : '328560190',
                    title : "View my QZone"
                },
                "renren" : {
                    href : "http://www.renren.com/221627751",
                    text : 'http://www.renren.com/221627751',
                    title : "Know me from something like facebook in China"
                },
                "photoshop" : {
                    href : "http://www.adobe.com/products/photoshop.html",
                    text : 'photoshop',
                    title : "Know more about Photoshop CS5, the latest version of Photoshop."
                },
                "3dmax" : {
                    href : "http://www.autodesk.com.cn/adsk/servlet/pc/index?siteID=1170359&id=15565035",
                    text : '3D Studio Max',
                    title : "Know more about the famous 3D animation software owned by Autodesk, 3ds Max"
                },
                "zbrush" : {
                    href : "http://www.pixologic.com/home.php",
                    text : 'Zbrush',
                    title : "A digital sculpting and painting program that has revolutionized the 3D industry with its powerful features and intuitive workflows."
                },
                "XJTU" : {
                    href : "http://www.xjtu.edu.cn/",
                    text : "XJTU",
                    title : "Xi'an Jiaotong University"
                }
            },
            /**
             *Friend list here.
             *there should exist an avatar in the file system matched by the name(key of the detail object) of the friend.
             */
            friend : {
                me : {
                    name : "Luo Yujia"
                },
                dad : {
                    name : "Dad",
                    likes : "Super Mario, Acoustics, Mobile Phone, Digital products, Rock music",
                    heSaid : "Happy new year friends! Wish you a good luck!",
                    remark : "Just 20 years older than me, managing some architectural projects.",
                    tags : ["To earn money", "To support the family", "To work hard", "Genius son!"]
                },
                mom : {
                    name : "Mom",
                    likes : 'Super Mario, Mahjong, Clothes, Mobile Phone, <span title="A talk show">Happy Camp</span>',
                    sheSaid : "You and your brother, get married soon! I need the grandson!",
                    remark : "Just 20 years older than me too, the biggest interest is to make food with the money gained by playing mahjong.",
                    tags : ["No mahjong today!", "Price of food rose again", "Who stole my vegetables!", "Be health and peace", "Genius son!"]
                },
                she : {
                    name : "Zhong Pingping",
                    likes : "Badminton, Billiards, Karaoke, Child, Clothes, Shoes, Watching Films",
                    sheSaid : "Shopping is a part of life!",
                    remark : "Fiancee that haven't been proposed formally",
                    tags : ["Extremely intelligent", "Meticulous friend", "I want Clothes!", "I love you, mom!", "Mr. pingping"]
                },
                liyue : {
                    name : "Li yue",
                    likes : "Get up at 7 o'clock, English, Badminton, Dota, Karaoke, Working in Laboratory",
                    heSaid : "One more month!",
                    concern : "Study abroad, Reach PhD, Academic, Papers, Cooking, Health care, Girl friend",
                    remark : "Almost all events that happened in my college lift is related with this guy. Holy shit.",
                    tags : ["Monkey", "Ray of light", "What a big tree", "A life-long friend", "Great mentor", "Finance office teacher killer", "God-like singer Jacky Cheung", "Principle", "Aura"]
                },
                yanghaibing : {
                    name : "Yang Haibing",
                    likes : "Swimming, Karaoke, Social dance, a little coding",
                    heSaid : "The cherry Blossom, the crowd, all of this, seems have nothing to do with me.",
                    concern : "Kernel of Linux, C++, Distributed storage, EMC, Muslim church",
                    remark : "The first sight that made he remembered by me, is when we were at the regular meeting of the propaganda department, he Stoke his tongue at me.",
                    tags : ["Allah is watching in the sky", "Kitten", "Spoony", "Paramecium", "Good youth", "Low-key", "Metrosexual man"]
                },
                machunyan : {
                    name : "Ma Chunyan",
                    sheSaid : "You! The next question! 3 seconds! Uh! All right, sit down please! Anybody else!",
                    remark : "Long live, teacher Ma!",
                    tags : ["Goddess", "SSD3", "Another beautiful day", "Family first, the careen"]
                },
                liangxiao : {
                    name : "Liang xiao",
                    likes : "Art and Design, Transformers, Photography, Pants folded to 90 degrees, ほりきたまき(Maki Horikita), Female and heavy taste",
                    concern : "CSS3、HTML5、photoShop、ios development、tencent、sogou、MediaV、ect.",
                    heSaid : "If I could fly, I'll never come back. The target is, the deep sky.",
                    tags : ["Selected", "Flyer", "Artistic temperament", "LOLI lover", "Mensao male", "Female!!!", "Richy", "Pure blue character"]
                },
                bridge : {
                    name : "Boss of Bridge",
                    sex : "Male",
                    likes : "Female, heavy taste",
                    heSaid : "Female, heavy taste",
                    concern : "Female, heavy taste",
                    remark : "Female, heavy taste",
                    tags : ["Free", "Online customer service", "Only", "The universe", "Promotions", "Female!!!"]
                },
                baidu : {
                    name : "Baidu",
                    sex : "Female",
                    likes : "Website traffic, Advertisement, Profit, Nasdaq trend, State's inspection",
                    concern : "Intermediate layers, Clouds, Mobil apps, New profit point, Financial report, Shareholder",
                    tags : ["Simple and reliable", "Promot your products in Baidu", "Robin Li", "Income", "Box Computing"]
                },
                nwpu : {
                    name : "NPU",
                    sex : "Unknown",
                    heSaid : "Q:What's the gap between <a#XJTU#> and those World-class Nniversities? A:Go to the other side of Xi'an city and have a look, it's about 20 minutes' driving distance.",
                    tags : ["公诚勇毅", "三实一新", "Aviation", "Aerospace", "Navigation", "World-class Nniversities"]
                }
            },
            infoWork : {
                baidu : {
                    href : "http://www.facebook.com/pages/%E7%99%BE%E5%BA%A6/112703288742573",
                    src : 'imgs/friends/baidu.png',
                    text : 'Baidu',
                    title : 'View the detail of Baidu in facebook'
                },
                nwpu : {
                    href : "http://www.facebook.com/pages/%E8%A5%BF%E5%8C%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6/104087876295872",
                    src : 'imgs/friends/nwpu.png',
                    text : 'NorthWestern Polytechnical University',
                    title : "View the detail of NPU in facebook"
                }
            },
            entertainment : {
                music : ["bandari", "hevia", "yanni", "himekami"],
                games : ["torchlight", "diablo", "civilization", "fireEmblem"]
            }
        },
        
        FRIEND_INFO_MAPPING : {
            name : "Name",
            sex : "Gender",
            likes : "Likes",
            heSaid : "He said",
            concern : "Concerns",
            remark : "Remark",
            sheSaid : "She said"
        },
    
        /**
         *Post list. Each element of the array is an object
         */
        POST : [
            {
                genre : "normal",
                friendId : "me",
                date : "September 26, 2012 at 10:10",
                likedBy : ["she"],
                comments : [
                    {
                        friendId : "she",
                        content : "Do whatever you like baby, follow your heart.",
                        date : "October 12, 2012 at 13:35"
                    }
                ],
                //card singal
                isCard : true,
                //configurations for card post
                card : "freelancer",
                title : "Now start working as a freelancer.",
                cardContent : "At last I started this trip. I'd like to say nothiong else, but 竹杖芒鞋轻胜马，一蓑烟雨任平生。"
            }, {
                genre : "normal",
                floatPhoto : "baidu",
                friendId : "baidu",
                date : "September 26, 2012 at 10:10",
                likedBy : ["dad", "mom", "she"],
                comments : [
                    {
                        friendId : "she",
                        content : "Top!",
                        date : "September 26, 2012 at 17:10"
                    }, {
                        friendId : "liyue",
                        content : "Holy shit again!",
                        date : "September 26, 2012 at 18:36"
                    }, {
                        friendId : "liangxiao",
                        content : "Man you impressed me.",
                        date : "September 26, 2012 at 18:37"
                    }
                ],
                //card singal
                isCard : true,
                //configurations for card post
                card : "T5",
                title : "Promoted to Technology Level 5",
                cardContent : "Well good luck to you man."
            }, {
                genre : "normal",
                floatPhoto : "baidu",
                friendId : "baidu",
                date : "November 5, 2011 at 10:10",
                likedBy : ["dad", "mom"],
                comments : [
                    {
                        friendId : "me",
                        content : "Top!",
                        date : "November 5, 2011 at 10:12"
                    }, {
                        friendId : "she",
                        content : "Top!",
                        date : "November 5, 2011 at 10:13"
                    }, {
                        friendId : "liyue",
                        content : "Holy shit!",
                        date : "November 5, 2011 at 10:14"
                    }
                ],
                //card singal
                isCard : true,
                //configurations for card post
                card : "T4",
                title : "Promoted to Technology Level 4",
                cardContent : "Congratulations, <friend#me#>! Your outstanding performance within your work proved that you have got the ability as a \"Senior Engineer\". Hoping you could create more success in the futhre! "
            }, {
                genre : "activity",
                type : "code",
                content : "Yujia is now coding for <a#bridge#> ver2.6.0."
            }, {
                genre : "normal",
                friendId : "bridge",
                date : "September 20, 2011 at 10:10",
                isCard : true,
                card : "bridge2.5",
                title : "Baidu Bridge ver 2.5 released",
                cardContent : "Thanks to the great effort of <friend#me#> and other engineers, <a#bridge#> ver2.5 was released! We can now afford more functions and enhance conversion rate for our users."
            }, {
                genre : "normal",
                friendId : "baidu",
                date : "September 5, 2011 at 10:10",
                isCard : true,
                card : "lv2",
                title : "Innovation Award From Ecom, Level 2",
                cardContent : "Dear <friend#me#>, Your originality about \"Floating web-im\" within Bridge ver2.5 improved user experience obviously, decreased about 30% of the loading time! We are looking forward more excellent innovations in your follow-up."
            }, {
                genre : "activity",
                type : "prise",
                content : "Yujia was promoted to Technology Level 3, \"Web Front-end engineer\"."
            }, {
                genre : "activity",
                type : "code",
                content : "Yujia finished the design and development of <a#bridge#> ver2.0."
            }, {
                genre : "normal",
                friendId : "me",
                date : "September 25, 2010 at 10:10",
                //~ content : "@<friend#liyue#>, @<friend#yanghaibing#>, another friend of ours and I were in the lounge of Baidu Hall. <friend#liyue#> said: \"I have drawn no much prize in my life by far, if I accidentally hit the jackpot with this bottle of green tea, we start our entrepreneurship several years later    !\". He then opened it, \"Another bottle\" engraved inside."
                content : "@<friend#liyue#>, @<friend#yanghaibing#>, another friend of ours and I were in the lounge of Baidu Hall. <friend#liyue#> said: \"I have drawn no much prize in my life by far, if I can gain another bottle prize this time, we shall start our own business several years later!\". He then opened it, \"Another bottle\" engraved inside."
            }, {
                genre : "activity",
                type : "code",
                content : "Yujia finished the CMS system deployment and front-end development of <a#club#> ver1.0."
            }, {
                genre : "normal",
                friendId : "me",
                inline : "true",
                content : "became a full-time employee of \"<a#baiduCom#>\", and said:<br>\"Simple and reliable, live happily, work happily.\"",  
                date : "July 1, 2010 at 10:10"
            }, {
                genre : "normal",
                friendId : "me",
                date : "June 29, 2010 at 10:10",
                inline : "true",
                content : "Yujia updated his address to  <a#beijing#>."
            }, {
                genre : "normal",
                friendId : "nwpu",
                date : "June 28, 2010 at 10:10",
                isCard : true,
                card : "graduate",
                title : "Congratulations on gradulation",
                cardContent : "Dear <friend#me#>, today is the last day when you are in <a#nwpu#>. Congratulations on your graduation and hope the future will bring you success and a whole wide world of happiness."
            }, {
                genre : "normal",
                friendId : "me",
                date : "June 24, 2010 at 10:10",
                content : "Nice afternoon, without class, forever."
            }, {
                genre : "normal",
                friendId : "me",
                date : "June 12, 2010 at 10:10",
                content : "Life is long, while corners flash."
            }, {
                genre : "activity",
                type : "study",
                content : "Yujia finished his gradulation design named \"Web front-end MVC architecture-based application development\"."
            }, {
                genre : "activity",
                type : "play",
                content : "Yujia enjoied many farewell dinner with his friends, <a#lipu#>."
            }, {
                genre : "normal",
                friendId : "me",
                date : "June 1, 2010 at 10:10",
                inline : "true",
                content : "Yujia updated his address to <a#xian#> and said :<br>\"At school now, prepare for graduation!\""
            }, {
                genre : "normal",
                friendId : "bridge",
                date : "April 1, 2010 at 10:10",
                isCard : true,
                card : "bridge1.0",
                title : "Baidu Bridge ver 1.0 released",
                cardContent : "Thanks to the great effort of <friend#me#> and other engineers, <a#bridge#> beta version was released!"
            }, {
                genre : "normal",
                friendId : "me",
                date : "March 24, 2011 at 10:10",
                content : "It really compressed me that, google declared to get out of China just a few days after I joined Baidu."
            }, {
                genre : "activity",
                type : "code",
                content : "Yujia is now coding for <a#bridge#> ver1.0.0."
            }, {
                genre : "activity",
                type : "code",
                content : "Yujia is now coding for \"Query Report\" of <a#fengchao#>."
            }, {
                genre : "activity",
                type : "addFriend",
                content : "Yujia is now friends with <friend#bridge#>"
            }, {
                genre : "normal",
                friendId : "she",
                date : "March 4, 2011 at 10:10",
                content : "力拔山兮气盖世，壮士一去兮不复返。"
            }, {
                genre : "normal",
                friendId : "baidu",
                date : "March 3, 2011 at 10:10",
                isCard : true,
                card : "offer",
                title : "Internship offer from Baidu",
                cardContent : "Dear <friend#me#>, welcome to practice in <a#baidu#>! As a intern, you may join the development of many products such as <a#holmes#>, <a#bridge#>, <a#fengchao#> and so on. Prove and enjoy yourself!"
            }, {
                genre : "activity",
                type : "newAddress",
                content : "Yujia updated his address to <a#beijing#>。"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "Yujia is now friends with <friend#baidu#>."
            }, {
                genre : "normal",
                friendId : "machunyan",
                date : "February 21, 2010 at 10:10",
                //~ content : "What you are doing at the right time, was closely related to what you have done, and will also have a result in what your future."
                content : "What you are doing currently is closely related to what you have done, and will also have effect on your work one day."
            }, {
                genre : "normal",
                friendId : "me",
                date : "January 16, 2010 at 10:10",
                content : "Thanks to the great help of <friend#machunyan#> and <friend#liyue#>, our paper <a#paper#> was published at last, which means the whole work of <a#guochuang#> was finished successfully."
            }, {
                genre : "normal",
                friendId : "baidu",
                date : "November 2, 2009 at 10:10",
                isCard : true,
                card : "offer",
                title : "Offer letter from Baidu",
                cardContent : "Dear <friend#me#>: Thank you for participating in the recruitment activities of our company. We are glad to inform you that you have already passed our assessment, and you are to be hired as a full-time staff. Please contact us about your labor contract if possible."
            }, {
                genre : "activity",
                type : "work",
                content : "Yujia joined the summer training on J2EE holded by <a#anbo#>."
            }, {
                genre : "activity",
                type : "study",
                content : 'Yujia is now concentrating on <span style="font-weight:bold;"><a#ssd_2#>, Principle of Computer Organization, Digital Circuits, Compiler Principle, Data Structure and Algorithms</span>, etc.'
            }, {
                genre : "activity",
                type : "prise",
                content : "Yujia won the first prize scholarship."
            }, {
                genre : "activity",
                type : "study",
                content : 'Yujia organized a seminar on J2EE to junior grades, and achieve good results.'
            }, {
                genre : "normal",
                friendId : "nwpu",
                date : "December 25, 2008 at 23:30",
                isCard : true,
                card : "prise",
                title : "National College Students Software Innovation Competition, 2nd prise",
                cardContent : 'Dear <friend#me#>, by your outstanding performance and innovative ideas, the "DreamLine Studio" gained the second prise. Thanks to instructor <friend#machunyan#>, and hopes that you could make more success in the futhre!'
            }, {
                genre : "activity",
                type : "addFriend",
                content : "Yujia is now friends with <friend#she#>."
            }, {
                genre : "activity",
                type : "study",
                content : "Yujia and <friend#liyue#> joined <a#guochuang#>。"
            }, {
                genre : "activity",
                type : "study",
                content : "Yujia built up \"DreamLine Studio\" together with <friend#liyue#>."
            }, {
                genre : "activity",
                type : "study",
                content : 'Yujia is now concentrating on <span style="font-weight:bold;"><a#ssd_1#>, Higher Mathematics, Linear Algebra, Discrete Mathematics, Higher Physics</span> and so on.'
            }, {
                genre : "normal",
                friendId : "liyue",
                date : "February 12, 2007 at 10:10",
                content : "I was told that <a#guochuang#> is choosing teams, teach me JAVA, hero!"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "Yujia is now friends with <friend#liyue#>, <friend#yanghaibing#> and <friend#machunyan#>."
            }, {
                genre : "activity",
                type : "newAddress",
                content : "Yujia updated his address to <a#xian#>."
            }, {
                genre : "normal",
                friendId : "nwpu",
                date : "June 1, 2006 at 10:10",
                isCard : true,
                card : "offer",
                title : "Offer Letter from NPU",
                cardContent : "Mr. <friend#me#>: Congratulations to you for admission by School of Software and Microelectronics of NorthWestern Polytechnical University! We are waiting for you with our open arms, and hope your dreams come true in <a#nwpu#>!"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "Yujia is now friends with <friend#nwpu#>."
            }, {
                genre : "activity",
                type : "study",
                content : "Finished his study of junior middle school, graduated from <a#anzhong#>."
            }, {
                genre : "activity",
                type : "study",
                content : "Finished his study of junior middle school, graduated from <a#yuezhong#>."
            }, {
                genre : "activity",
                type : "play",
                content : "Yujia travaled his rich and colorful childhood."
            }, {
                genre : "activity",
                type : "newAddress",
                content : "Yujia updated his address to <a#anyue#>。"
            }, {
                genre : "normal",
                friendId : "me",
                date : "August 2, 1988 at 13:14",
                content : "You choosed, you bear, you struggle. <friend#dad#> and <friend#mom#>, I can't tell my appreciation for bring me to the earth, and what's more, <a#helloWorld#>",
                likedBy : ["dad", "mom"]
            }, {
                genre : "activity",
                type : "addFriend",
                content : "Yujia is now friends with <friend#dad#>."
            }, {
                genre : "activity",
                type : "addFriend",
                content : "Yujia is now friends with <friend#mom#>."
            }, {
                genre : "activity",
                type : "gift",
                content : "Yujia was born."
            }
        ],
        //~ POST : [
            //~ {
                //~ genre : "normal",
                //~ friendId : "me",
                //~ content : "Holy shit!!!!",
                //~ date : "February 9, 2011 at 12:55pm",
                //~ likedBy : ["dad", "mom", "me"],
                //~ comments : [
                    //~ {
                        //~ friendId : "me",
                        //~ content : "I can't agree with you any more!",
                        //~ date : "February 9, 2011 at 12:55pm"
                    //~ }
                //~ ],
                //~ //card singal
                //~ isCard : true,
                //~ //configurations for card post
                //~ card : "offer",
                //~ title : "Offer from baidu",
                //~ cardContent : "We are gradly to announce you that you have already been accepted by Baidu, Congratulations!"
            //~ }, {
                //~ genre : "normal",
                //~ friendId : "me",
                //~ content : "Holy shit!!!!",
                //~ date : "February 9, 2011 at 12:55pm",
                //~ likedBy : ["dad", "mom", "me"],
                //~ comments : [
                    //~ {
                        //~ friendId : "me",
                        //~ content : "I can't agree with you any more!",
                        //~ date : "February 9, 2011 at 12:55pm"
                    //~ }
                //~ ]
            //~ }, {
                //~ genre : "activity",
                //~ type : "addFriend",
                //~ content : "<friend#me#> is now friends with <friend#mom#>"
            //~ }, {
                //~ genre : "activity",
                //~ type : "addFriend",
                //~ content : "<friend#me#> is now friends with <friend#dad#>"
            //~ }
        //~ ],
        
        /**
         *Comments of photots.
         *At the same time, the MidContentPhotos wrap may be initialized from this configuration.
         *To ensure the photo be displayed correctly, there should be a scaled picture in "imgs/scale-photos/XXX", XXX stands for the key.
         *If some a photo was not supposed be displayed in the wrap, set the "hidden" attribute as "true".
         *Some items of this configuration contains a "title" with nothing else, it means it should be displayed as a depart line.
         *photos are departed with groups.
         */
        PHOTOS : {
            //will not be displayed in "MidContentPhotos"
            "ents/photos/" : {
                "hidden" : true,
                "bandari" : {
                    title : "Sorry that I can't find it's official website, so please visit 班得瑞全球中文网",
                    href : "http://www.bandari.net/",
                    content : "Pure world without dust in my ears n, sounds from sky, Bandri.",
                    friendId : "me",
                    date : "April 13, 2012 at 14:00"
                },
                "hevia" : {
                    title : "find more informations about Hevia in youtube",
                    href : "http://www.youtube.com/artist/Hevia",
                    content : "Busindre Reel, I consider it telling a story of struggle, an old man who travaled his life of setbacks, is now sitting in an old chair facing the sunset, enjoying his hard-won beauty.",
                    friendId : "me",
                    date : "April 13, 2012 at 14:00"
                },
                "yanni" : {
                    title : "know more about yanni from his official website",
                    href : "http://yanni.com/default.aspx",
                    content : "Travel the world with Yanni and his crew as they perform for different cultures, experience the rich history of each country on tour, taste a wide array of ethnic cuisines and much more.",
                    friendId : "me",
                    date : "April 13, 2012 at 14:00"
                },
                "himekami" : {
                    title : "Listen Himekami-千年の祈り from youtube",
                    href : "http://www.youtube.com/watch?v=Ppoqn28jqc8&feature=fvwrel",
                    content : "All gifts from nature should be respected, all harvests should be appreciate, all labors should be paid.",
                    friendId : "me",
                    date : "April 13, 2012 at 14:00"
                },
                "torchlight" : {
                    title : "Visite Runic Games",
                    href : "http://www.torchlightgame.com/",
                    content : "Waiting for Torchlight II, hoping it's not another \"<span title=\'Also known as jump down 100 floors if you're a man?\'>To Hell with Johnny</a>\" liked game.",
                    friendId : "me",
                    date : "April 13, 2012 at 14:00"
                },
                "diablo" : {
                    title : "Know more about Diablo III",
                    href : "http://us.battle.net/d3/en/",
                    content : "Diablo III, you know it.",
                    friendId : "me",
                    date : "April 13, 2012 at 16:00"
                },
                "civilization" : {
                    title : "Know more about Sid Meiers Barbarian V",
                    href : "http://www.civilization5.com/",
                    content : "It's really reasonable that we call it \"Barbarian V\"... It's first add-on packs is coming out soom.",
                    friendId : "me",
                    date : "April 13, 2012 at 16:00"
                },
                "fireEmblem" : {
                    title : "http://www.nintendo.co.jp/fe/",
                    href : "http://www.nintendo.co.jp/fe/",
                    content : "As greate as \"Dragon Quest\", the game that accompanied my whole childhood.",
                    friendId : "me",
                    date : "April 13, 2012 at 16:00"
                }
            },
            "friends/photos/" : {
                title : "I and my friends",
                "me" : {
                    content : "ZhongPingping and I, in \"Olympic National Forest Park\".",
                    friendId : "me",
                    date : "April 16, 2011 at 14:21"
                },
                "dad" : {
                    content : "Dad in hometown, with his loving sunglasses.",
                    friendId : "me",
                    date : "July 25, 2011 at 10:10"
                },
                "mom" : {
                    content : "My maternal grandmother is the same beautiful as my mother when I first meet her.",
                    friendId : "me",
                    date : "July 25, 2011 at 10:10"
                },
                "she" : {
                    content : "It's the time when we first having a date along a pure river nearby our university. She was wearing a cute jacket that could never be found now.",
                    friendId : "me",
                    date : "September 16, 2008 at 10:10"
                },
                "machunyan" : {
                    content : "The one and the only one who is respected by all her students as a college teacher. I always felt sorry about having not been one of her qualified students.",
                    friendId : "me",
                    date : "June 24, 2010 at 10:10"
                },
                "liyue" : {
                    content : "Be appreciate for those who could never be forgotten even known by casually. Thank god, my fate have'nt let me down during my college career. Liyue wanted to go abroad, best wishes for both of us.",
                    friendId : "me",
                    date : "March 18, 2012 at 10:10"
                },
                "yanghaibing" : {
                    content : "Be appreciate for those who could never be forgotten even known by casually. Thank god, my fate have'nt let me down during my college career. Haibing is now studing hard for his Master's degree.",
                    friendId : "me",
                    date : "March 18, 2012 at 10:10"
                },
                "nwpu" : {
                    content : "All right I admit that the library of my university is magnificent, but not like this one which was psed so ugly.",
                    friendId : "me",
                    date : "October 24, 2006 at 10:10"
                },
                "liangxiao" : {
                    content : "No enough words could explain my respect and appreciate for my second tutor in Baidu who helped me become a true engineer.",
                    friendId : "me",
                    date : "April 16, 2011 at 14:21"
                },
                "baidu" : {
                    content : "Baidu headquarters, in use since November, 2009.",
                    friendId : "me",
                    date : "November 16, 2009 at 14:21"
                },
                "bridge" : {
                    content : "Baidu Bridge, online customer service product for free, but only for those who the promotions of baidu.",
                    friendId : "me",
                    date : "April 1, 2011 at 10:10"
                }
            },
            "cards/photos/" : {
                title : "Flying memories",
                "graduate" : {
                    content : "I love you forever, dispite distance, my brothers.",
                    friendId : "me",
                    date : "June 28, 2010 at 14:30"
                },
                "prise" : {
                    content : "It's the Christmas day of 2008, <friend#liyue#>, I and another team member was aworded the 2nd price at ChongQing University. All our efforts was paid off after a month of extreme Programming. Some of regretful, for <friend#she#>'s absence.",
                    friendId : "me",
                    date : "December 25, 2008 at 23:30"
                },
                "bridge1.0" : {
                    content : "Hundreds pages of MRD, thousands of design drafts, 6 months of coding, Uncountable nights of fighting, we meet it——Bridge1.0.",
                    friendId : "me",
                    date : "April 1, 2010 at 10:10"
                },
                "bridge2.5" : {
                    content : "It's a version that all developers have devoted a great deal of efforts and talent with. It allowed users to make there own pages, hoping it could do a simple and reliable help for those who can't even affort a simple website.",
                    friendId : "me",
                    date : "November 16, 2011 at 10:10"
                }
            }
        },
        
        INFO : [
            {
                title : "Work and Education",
                items : [
                    {
                        title : "Employers",
                        content : "<infoWork#baidu#>"
                    }, {
                        title : "College",
                        content : "<infoWork#nwpu#>"
                    }
                ]
            }, {
                title : "Basic Information",
                items : [
                    {
                        title : "Gender",
                        content : "Male"
                    }, {
                        title : "Interested in",
                        content : "Men and women"
                    }, {
                        title : "Zodiac",
                        content : "Dragon"
                    }, {
                        title : "Constellation",
                        content : "Virgo"
                    }
                ]
            }, {
                title : "Concentrated Technology",
                items : [
                    {
                        title : "Web Development",
                        content : 'Experienced in <span style="font-weight:bold;">Javascript, css, html</span>;<br>\
                            Extremely interested in some forefront technologies such as <span style="font-weight:bold;" title="Specially wanted to gain more experiences on game developing with HTML5">html5, css3</span> and mobile development;<br>\
                            Familiar with <span style="font-weight:bold;">Java</span>, comprehended in <span style="font-weight:bold;">Sturts2, Spring and Hibernate</span> framworks;<br>\
                            Understand <span style="font-weight:bold;">Php</span> and <span style="font-weight:bold;">python</span>, and is able to develop independently;<br>\
                            Know common used <span style="font-weight:bold;">design pattrens</span>, hold some distinctive views on <span style="font-weight:bold;">System Design</span> and <span style="font-weight:bold;">Performance Optimization</span> of Front End Development.'
                    }, {
                        title : "Art and Design",
                        content : 'Familiar with and was well trained in using <span style="font-weight:bold;"><a#photoshop#></span>;<br>\
                            Like <span style="font-weight:bold;"><a#3dmax#></span> and <span style="font-weight:bold;"><a#zbrush#></span><br>\
                            Be able to use <span style="font-weight:bold;">Action script3</span>'
                    }
                ]
            }, {
                title : "Arts and Entertainments",
                items : [
                    {
                        title : "Sports",
                        content : "Badminton, riding, gobang, anaerobic exercise"
                    }, {
                        title : "Musics",
                        //see PARAM.entertainment.music
                        content : "<entertainment#music#>"
                    }, {
                        title : "Games",
                        content : "<entertainment#games#>"
                    }
                ]
            }, {
                title : "Contact Information",
                items : [
                    {
                        title : "Email",
                        content : "<a#mail#>"
                    }, {
                        title : "Telephone",
                        content : "+86 185-7662-6334"
                    }, {
                        title : "Facebook",
                        content : "<a#facebook#>"
                    }, {
                        title : "Something like facebook in China",
                        content : "<a#renren#>"
                    }, {
                        title : "QQ",
                        content : "<a#qq#>"
                    }
                ]
            }
        ]
    },
    CH : {
        FUCK_IE6 : {
            notes : [
            "IE6去死吧！！",
            "我靠，你还在用IE6啊！赶紧投身高科技的怀抱吧！",
            "尼玛。。。IE6，你在开玩笑么。。。",
            "死了这条心吧，IE6，嘎嘎嘎！",
            "我觉着IE6真心该噶屁了，你也赞同吧？"
            ],
            locations : [
                "http://www.google.cn/chrome/intl/zh-CN/landing_chrome.html",
                "http://www.firefox.com.cn/download/",
                "http://info.msn.com.cn/ie9/",
                "http://www.opera.com/",
                "http://www.apple.com.cn/safari/"
            ]
        },
        ID_TEXT : {
            title : "罗誉家",
            Search : "<jump#搜索：Web(前端)研发工程师#>",
            Signatures : "成亦难败亦难天下笑我，成也罢败也罢我笑天下",
            Wall : "涂鸦墙",
            Info : "信息",
            Photos : "照片",
            Notes : "博客",
            Friends : "朋友",
            Subscriptions : "订阅",
            FriendsCount : "朋友 (<count#friends#>)",
            Father : "老爸",
            Mother : "老妈",
            AddBadge : "不能添加电子名片",
            Name : "罗誉家",
            Work : "曾在<a#baidu#>工作",
            Study : "曾就读<a#nwpu#>",
            Lives : "住在<a#beijing#>",
            From : "来自<a#anyue#>",
            Born : "生于 1988年8月2日",
            UpdateStatus : "更新状态",
            CopyRightText : "版权没有，翻版不究。转载注明出处。",
            AdTitle : "赞助商链接",
            AdNwpuTitle : "报考西工大，梦想从这里起航！",
            AdNwpuContent : "西北工业大学是我国唯一一所以发展航空、航天、航海工程教育和科学研究为特色，是国家“985工程”和“211工程”重点建设的高校之一。学校坐落在中外历史文化名城西安市，隶属于工业和信息化部（原隶属于国防科学技术工业委员会）。",
            AdAnZhongTitle : "国家级示范高中 四川省安岳中学",
            AdAnZhongContent : "四川省安岳中学是有着近百年历史的川东名校，其前身是始建于1714年的凤山书院，1913年设立为完全中学，1965年成为内江地区首批重点中学，1999年被批准为省重点中学，2002年6月被批准为四川省示范性普通高中，在不到两年的时间内顺利地被批准为国家级示范高中。",
            AdBaiduTitle : "众里寻你“签”百度！",
            AdBaiduContent : "百度，全球最大的中文搜索引擎、最大的中文网站。2000年1月创立于北京中关村。",
            NoMore : "没有更多新鲜事",
            
            AdNwpu : {
                href : "http://www.nwpu.edu.cn"
            },
            AdAnZhong : {
                href : "http://www.ayzx.sc.cn/Index.asp"
            },
            AdBaidu : {
                href : "http://hr.baidu.com"
            },
            SearchWrap : {
                title : "在facebook搜索“web研发工程师”职位！"
            },
            NotesPointer : {
                title : "暂无“博客”相关信息，您可以尝试查看“照片”了解我和的朋友们。"
            },
            Forward : {
                title : "前进"
            },
            Backward : {
                title : "后退"
            }
        },
        NORMAL_TEXT : {
            and : "和",
            like : " 觉得这很赞！",
            more : "查看全部%count%条留言",
            activity : "近期动态",
            likeLink : "赞",
            commentLink : "评论",
            shareLink : "分享",
            defaultComent : "这家伙很懒，什么也没留下。",
            floatImgTitle : "点击关闭/开启自动显示浮层",
            clostFloatPhoto : "点击关浮层，点击图片可再次打开"
        },
        PARAM : {
            a : {
                baidu : {
                    href : "http://www.baidu.com",
                    text : "百度",
                    title : "全球最大的中文搜索引擎"
                },
                baiduCom : {
                    href : "http://www.baidu.com",
                    text : "百度在线网络技术（北京）有限公司",
                    title : "商务搜索部"
                },
                nwpu : {
                    href : "http://www.baidu.com/s?wd=%CE%F7%B9%A4%B4%F3",
                    text : "西北工业大学",
                    title : "软件与微电子学院"
                },
                beijing : {
                    href : "http://map.baidu.com/m?word=%B1%B1%BE%A9",
                    text : "中国北京",
                    title : "在百度地图中查看“中国北京”"
                },
                anyue : {
                    href : "http://www.anyue.gov.cn/",
                    text : "四川安岳",
                    title : "中国柠檬之乡、石刻天府"
                },
                bridge : {
                    href : "http://qiao.baidu.com",
                    text : "百度商桥",
                    title : "面向百度推广用户全面开放的在线沟通工具"
                },
                club : {
                    href : "http://club.baidu.com",
                    text : "创业者俱乐部",
                    title : "帮助互联网创业者健康发展、扶持互联网创新力量、拓展互联网创业者合作与发展空间。"
                },
                lipu : {
                    href : "http://baike.baidu.com/view/882533.html?wtp=tt",
                    text : "立仆",
                    title : "酗酒有害身体健康。"
                },
                xian : {
                    href : "http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E8%A5%BF%E5%AE%89",
                    text : "中国西安",
                    title : "也称“长安”，举世闻名的世界四大文明古都之一。"
                },
                fengchao : {
                    href : "http://www.baidu.com/s?bs=fengchao&f=8&rsv_bp=1&wd=%B7%EF%B3%B2&inputT=1789",
                    text : "凤巢",
                    title : "全球最大的中文搜索引擎百度正式推出的“搜索推广专业版”"
                },
                holmes : {
                    href : "http://tongji.baidu.com/web/welcome/login",
                    text : "百度统计",
                    title : "免费的专业流量分析工具"
                },
                paper : {
                    href : "http://www.xactad.org/ArticleShow.asp?ArticleID=5153",
                    text : "《可控式数字音乐系统模拟的研究与实现》",
                    title : "计算机技术与发展，2010年 第20卷 第9期 应用开发研究栏目"
                },
                guochuang : {
                    href : "http://innovation.hust.edu.cn/innovation/index.jsp",
                    text : "国家大学生创新性实验计划",
                    title : "2007年度首批国创西工大课题：“数字音乐模拟系统”"
                },
                ssd_1 : {
                    href : "http://icarnegie.com/",
                    text : "卡耐基梅隆大学SSD",
                    title : "计算机系统导论、信息系统导论、面向对象编程与设计、以用户为中心的设计与测试"
                },
                ssd_2 : {
                    href : "http://icarnegie.com/",
                    text : "卡耐基梅隆大学SSD",
                    title : "数据结构与运算、系统级别编程、数据库系统、网络与分配计算、软件规范/测试与维护、软件项目组织与管理"
                },
                anbo : {
                    href : "http://www.ambow.com.cn/",
                    text : "安博教育",
                    title : "昆山码农生产基地"
                },
                dasai : {
                    href : "http://news.cqu.edu.cn/news/article/article_11283.html",
                    text : "全国大学生软件创新竞赛",
                    title : "参赛队员之一钟萍萍由于某些原因没有亲临现场，真是可惜啊。"
                },
                anzhong : {
                    href : "http://www.ayzx.sc.cn/",
                    text : "四川省安岳中学",
                    title : "也称秦九韶中学，民间称之“安中”"
                },
                yuezhong : {
                    href : "http://www.aysyzx.com/",
                    text : "四川安岳实验中学",
                    title : "民间称之“岳中”，就是比“安中”差一点点"
                },
                helloWorld : {
                    href : "http://baike.baidu.com/view/47227.htm",
                    text : '<b><span class="ani-red">H</span><span class="ani-orange">e</span><span class="ani-yellow">ll</span><span class="ani-green">o</span> \
                            <span class="ani-cyan">W</span><span class="ani-blue">o</span><span class="ani-magenta">rl</span><span class="ani-red">d</span><span class="ani-orange">!</span></b>',
                    title : "尼玛，难道这就是传说中的注定码农命！？"
                },
                baiduPlaza : {
                    href : "http://map.baidu.com/?newmap=1&s=con%26wd%3D%E7%99%BE%E5%BA%A6%E5%A4%A7%E5%8E%A6%26c%3D131&fr=alamg&ext=1&from=alamap",
                    text : '百度大厦',
                    title : "北京市海淀区上地10街10号，100085"
                },
                "985" : {
                    href : "http://baike.baidu.com/view/59436.htm",
                    text : '985工程',
                    title : ""
                },
                "211" : {
                    href : "http://baike.baidu.com/view/7085.htm",
                    text : '211工程',
                    title : ""
                },
                "facebook" : {
                    href : "http://facebook.com/yarmyarch",
                    text : 'http://facebook.com/yarmyarch',
                    title : "查看我的facebook主页——虽然里头啥也没有..."
                },
                "mail" : {
                    href : "mailto:yarmyarch@live.cn",
                    text : 'yarmyarch@live.cn',
                    title : "给我发邮件"
                },
                "qq" : {
                    href : "http://user.qzone.qq.com/328560190",
                    text : '328560190',
                    title : "查看我的QZone"
                },
                "renren" : {
                    href : "http://www.renren.com/221627751",
                    text : 'http://www.renren.com/221627751',
                    title : "查看我的校内空间"
                },
                "photoshop" : {
                    href : "http://www.adobe.com/products/photoshop.html",
                    text : 'photoshop',
                    title : "了解最新版本Photoshop CS5"
                },
                "3dmax" : {
                    href : "http://www.autodesk.com.cn/adsk/servlet/pc/index?siteID=1170359&id=15565035",
                    text : '3D Studio Max',
                    title : "了解来自Autodesk的三维动画制作软件，3ds Max"
                },
                "zbrush" : {
                    href : "http://www.pixologic.com/home.php",
                    text : 'Zbrush',
                    title : "一款“改变了整个3D制作产业”的数字雕刻和绘画软件"
                }
            },
            friend : {
                me : {
                    name : "罗誉家"
                },
                dad : {
                    name : "老爸",
                    likes : "超级玛丽、音响、手机、数码、摇滚",
                    heSaid : "朋友们新年快乐，祝新的一年万事如意！",
                    remark : "老爸比我大整整20岁，建筑工程管理。他经常带着墨镜是有原因的...",
                    tags : ["好好挣钱", "好好养家", "努力工作", "易哥", "儿子是天才"]
                },
                mom : {
                    name : "老妈",
                    likes : "超级玛丽、麻将、衣服、手机、快乐大本营",
                    sheSaid : "儿子你和弟弟赶紧结婚生娃让我抱孙子啊。",
                    remark : "老妈也比我大20岁，每天最大的乐趣就是拿打牌赢了的钱买菜回家做饭。",
                    tags : ["今天不打牌了", "菜价又涨了", "谁偷我的菜！", "家人健康平安", "儿子是天才"]
                },
                she : {
                    name : "钟萍萍",
                    likes : "羽毛球、台球、K歌、组织活动、小孩、衣服、鞋子、看电影，等等等等",
                    sheSaid : "逛街是生命的一部分！",
                    remark : "还没正式求婚的未婚妻",
                    tags : ["冰雪聪明", "无微不至的朋友", "我要买衣服！", "妈妈我爱你", "萍萍哥"]
                },
                liyue : {
                    name : "李樾",
                    likes : "7点起床、英语、羽毛球、dota、K歌、蹲教研室",
                    heSaid : "祝我最爱的大外女生日快乐，有梦想，常开心！",
                    concern : "出国留学、读博士、学术、论文、艺术家、厨艺、养生保健、女朋友",
                    remark : "大学几年干过的所有牛B事情都和这个厮有关，牛B不需要解释。",
                    tags : ["猴子", "光芒万丈", "好大一棵树", "一辈子的好基友", "良师益友", "财务处老师杀手", "歌神张学友", "原则", "有灵气"]
                },
                yanghaibing : {
                    name : "杨海兵",
                    likes : "游泳、K歌、交际舞、拐卖小学妹",
                    heSaid : "盛开的樱花,扰攘的人群,但是好像跟我无关。",
                    concern : "Linux内核开发、浪潮、EMC",
                    remark : "对海兵的第一印象，是在宣传部例会上，我冲他打了个招呼，他冲我吐了吐舌头。",
                    tags : ["阿拉在天上看着呢", "小猫", "公狗腰，痴情种子", "草履虫", "有为青年", "低调", "型男"]
                },
                machunyan : {
                    name : "马春燕",
                    sheSaid : "你，起来回答一下这个问题，还有三秒，好，你坐下！",
                    remark : "马老师万岁。",
                    tags : ["女神", "SSD3", "睁开眼又是美好的一天", "家庭第一，事业第二"]
                },
                liangxiao : {
                    name : "梁宵",
                    likes : "美术设计、变形金刚、摄影、裤子折成90度、掘北真哭、女、重口味",
                    concern : "CSS3、HTML5、photoShop、ios development、tencent、sogou、MediaV、ect.",
                    heSaid : "如果能够展翅高飞， 我说过不会再回来， 目标是， 那蔚蓝的天空~",
                    tags : ["Selected", "三国杀80级", "艺术气质", "LOLI控", "闷骚男", "女！！！", "瑞琦", "纯蓝色性格"]
                },
                bridge : {
                    name : "商桥大掌柜",
                    sex : "男",
                    likes : "女、重口味",
                    heSaid : "女、重口味",
                    concern : "女、重口味",
                    remark : "女、重口味",
                    tags : ["免费", "在线客服", "唯一", "宇宙", "推广", "女！！！"]
                },
                baidu : {
                    name : "百度在线网络技术（北京）有限公司",
                    sex : "未知",
                    likes : "流量、广告、变现、纳斯达克走势、国家机关考察、重口味",
                    concern : "中间页、云端、移动产品、新的收入增长点、财报、股东",
                    tags : ["简单可依赖", "信OP，得永生", "来百度推广您的产品", "度娘", "人生可以走直线", "收入"]
                },
                nwpu : {
                    name : "西北工业大学",
                    heSaid : "问：西交大离世界一流大学有多远？答：从交大南门坐k700路上行，30分钟后在西工大站下车就到了。",
                    remark : "有人说不是自己上了大学，而是自己被大学上了，我只能理解为，他们的家伙不够硬。",
                    tags : ["公诚勇毅", "三实一新", "航空", "航天", "航海", "南山脚下", "友谊西路"]
                }
            },
            infoWork : {
                baidu : {
                    href : "http://www.facebook.com/pages/%E7%99%BE%E5%BA%A6/112703288742573",
                    src : 'imgs/friends/baidu.png',
                    text : '百度',
                    title : "在facebook中查看“百度”"
                },
                nwpu : {
                    href : "http://www.facebook.com/pages/%E8%A5%BF%E5%8C%97%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6/104087876295872",
                    src : 'imgs/friends/nwpu.png',
                    text : '西北工业大学',
                    title : "在facebook中查看“西北工业大学”"
                }
            },
            entertainment : {
                music : ["bandari", "hevia", "yanni", "himekami"],
                games : ["torchlight", "diablo", "civilization", "fireEmblem"]
            }
        },
        FRIEND_INFO_MAPPING : {
            name : "姓名",
            sex : "性别",
            likes : "爱好",
            heSaid : "他说",
            concern : "正在关注",
            remark : "备注",
            sheSaid : "她说"
        },
        POST : [
            {
                genre : "normal",
                friendId : "mom",
                date : "2012年1月8日20:10",
                content : "儿子，要是车票不好买就别回来算了吧……",
                comments : [
                    {
                        friendId : "me",
                        content : "没事的妈，我一年也就回一次啊，挺想念外公外婆的哈哈。",
                        date : "2012年1月8日20:12"
                    }, {
                        friendId : "mom",
                        content : "你回来一趟要好几天呐",
                        date : "2012年1月8日20:15"
                    }, {
                        friendId : "me",
                        content : "一年也就这么几天，你就准了孩儿吧。",
                        date : "2012年1月8日20:15"
                    }, {
                        friendId : "me",
                        content : "我刚刚在12306网上抢到车票了啊妈！哈哈！太棒了",
                        date : "2012年1月9日08:03"
                    }, {
                        friendId : "she",
                        content : "求靠谱解决方案！",
                        date : "2012年1月9日08:06"
                    }, {
                        friendId : "me",
                        content : "12306网站有漏洞啊，查看javascript源码就能找到提交请求的方法了，这个一会上班了我详细跟你说。另外，你直接让我给你买票不就好了~~",
                        date : "2012年1月9日08:10"
                    }, {
                        friendId : "she",
                        content : "好吧~~阿姨新年愉快啊！今年我家房子刚盖完，就不来看您了。",
                        date : "2012年1月9日08:12"
                    }
                ]
            }, {
                genre : "normal",
                floatPhoto : "baidu",
                friendId : "baidu",
                date : "2011年11月5日10:10",
                likedBy : ["dad", "mom"],
                comments : [
                    {
                        friendId : "me",
                        content : "我顶！",
                        date : "2011年11月5日10:12"
                    }, {
                        friendId : "she",
                        content : "我顶！",
                        date : "2011年11月5日10:13"
                    }, {
                        friendId : "liyue",
                        content : "我顶！",
                        date : "2011年11月5日10:14"
                    }
                ],
                //card singal
                isCard : true,
                //configurations for card post
                card : "T4",
                title : "晋升至T4",
                cardContent : "祝贺你，<friend#me#>！你在百度的卓越表现充分证明了你符合百度技术职称体系Level4——“高级工程师”的考核标准，期待你在后续工作、学习过程中能为百度创造更多的财富！"
            }, {
                genre : "activity",
                type : "code",
                content : "誉家正在开发<a#bridge#>2.6.0版本。"
            }, {
                genre : "normal",
                friendId : "bridge",
                date : "2011年9月20日10:10",
                isCard : true,
                card : "bridge2.5",
                title : "百度商桥2.5版本上线",
                cardContent : "感谢前端工程师<friend#me#>及其他工程师的努力协作，<a#bridge#>已经成长至2.5.0版本，为我们的客户带来了更多更丰富的功能，进一步提升了转化率！"
            }, {
                genre : "normal",
                friendId : "baidu",
                date : "2011年9月5日10:10",
                isCard : true,
                card : "lv2",
                title : "Ecom创新奖 Level2",
                cardContent : "亲爱的<friend#me#>同学，你在<a#bridge#>2.5版本中提出的浮层形式跨域webim解决方案有效的提升了用户体验，webim的加载时长缩短了30%！期待你在后续工作中涌现更多的的优秀创意！"
            }, {
                genre : "activity",
                type : "prise",
                content : "誉家晋升至百度技术职称体系Level3——“web前端工程师”。"
            }, {
                genre : "activity",
                type : "code",
                content : "誉家完成了<a#bridge#>2.0版本前端设计、开发工作。"
            }, {
                genre : "normal",
                friendId : "me",
                date : "2010年9月25日10:10",
                content : "@<friend#liyue#>、@<friend#yanghaibing#>我和另外一个哥们聚在百度大厅休息室。<friend#liyue#>说：“我这辈子从来没中过什么奖，这绿茶，要是中了，咱就创业！”。打开一看，瓶盖里赫然写着“再来一瓶”。"
            }, {
                genre : "activity",
                type : "code",
                content : "誉家完成了<a#club#>1.0版本前端开发及CMS系统部署工作。"
            }, {
                genre : "normal",
                friendId : "me",
                //contents should be at the same line as friend name.
                inline : "true",
                content : "成为了“<a#baiduCom#>”的一名正式员工，并说道：<br>“简单可依赖，开心工作，开心生活。”",  
                date : "2010年7月1日10:10"
            }, {
                genre : "normal",
                friendId : "me",
                date : "2010年6月29日10:10",
                inline : "true",
                content : "将他的现居城市更新为<a#beijing#>。"
            }, {
                genre : "normal",
                friendId : "nwpu",
                date : "2010年6月28日10:10",
                isCard : true,
                card : "graduate",
                title : "祝贺毕业",
                cardContent : "残阳柳下，赤刹芳华。亲爱的<friend#me#>同学，今天是你在<a#nwpu#>学习、生活的最后一天。母校不能帮助你更多，望你时刻铭记“公诚勇毅”校训，秉承“三实一新”校风，成为建设社会的栋梁之才。今天你以西工大为荣，明天母校以你为傲！"
            }, {
                genre : "normal",
                friendId : "me",
                date : "2010年6月26日10:10",
                content : "今天天气不错，挺风和日丽的，我们下午没有课......我们明天也没有课，永远也再不会有了。"
            }, {
                genre : "normal",
                friendId : "me",
                date : "2010年6月12日10:10",
                content : "人走过的路会很长，但拐角的地方仅是一瞬。"
            }, {
                genre : "activity",
                type : "study",
                content : "誉家完成了主题为《基于Web前端MVC架构的应用研发》的毕业设计。"
            }, {
                genre : "activity",
                type : "play",
                content : "誉家高兴地与朋友们吃各种散伙饭，<a#lipu#>。"
            }, {
                genre : "normal",
                friendId : "me",
                date : "2010年6月1日10:10",
                inline : "true",
                content : "将他的现居城市更新为<a#xian#>，并说道：<br>“回学校了，开始认认真真做毕设！”"
            }, {
                genre : "normal",
                friendId : "bridge",
                date : "2010年4月1日10:10",
                isCard : true,
                card : "bridge1.0",
                title : "百度商桥1.0版本上线！",
                cardContent : "感谢实习前端工程师<friend#me#>及其他工程师的努力协作，<a#bridge#>1.0 beta版本正式上线！经历了6个月、三次大升级、数十位工程师的努力，百度商桥诞生了。大家亲切的称之为“小桥”，希望它能架起你与网站访客之间的桥梁，能够见字如面、畅快沟通、高效交易；也希望它美丽动人、冰雪聪明，如小乔一样令大家爱不释手。"
            }, {
                genre : "normal",
                friendId : "me",
                date : "2010年3月24日10:10",
                content : "刚到百度不久呢，google就宣布要撤离中国。这让我感到了非常大的压力。"
            }, {
                genre : "activity",
                type : "code",
                content : "誉家开始参与<a#bridge#>1.0.0版本开发。"
            }, {
                genre : "activity",
                type : "code",
                content : "誉家正在开发<a#fengchao#>中的“搜索词报告”功能。"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "誉家现在已成为<friend#bridge#>的朋友。"
            }, {
                genre : "normal",
                friendId : "she",
                date : "2011年3月4日10:10",
                content : "力拔山兮气盖世，壮士一去兮不复返。"
            }, {
                genre : "normal",
                friendId : "baidu",
                date : "2011年3月3日10:10",
                isCard : true,
                card : "offer",
                title : "来自百度的实习offer",
                cardContent : "亲爱的<friend#me#>同学，欢迎你来到<a#baidu#>实习！你将参与<a#holmes#>、<a#bridge#>、<a#fengchao#>等诸多产品线的前端开发工作，希望你能快速学习、尽快融入工作状态，期待你的活跃表现！"
            }, {
                genre : "activity",
                type : "newAddress",
                content : "誉家将他的现居城市更新为<a#beijing#>。"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "誉家现在已成为<friend#baidu#>的朋友。"
            }, {
                genre : "normal",
                friendId : "machunyan",
                date : "2010年2月21日10:10",
                content : "你现在所做的任何一件事情都是与你以前做的任何一件事情密切相关的，并且也都将密切影响你的将来。"
            }, {
                genre : "normal",
                friendId : "me",
                date : "2010年1月16日10:10",
                content : "论文<a#paper#>终于发表了，<a#guochuang#>的工作也终于告一段落了。辛苦马老师@<friend#machunyan#>和大树@<friend#liyue#>这些天以来的鼓励和帮助！"
            }, {
                genre : "normal",
                friendId : "baidu",
                date : "2009年11月2日10:10",
                isCard : true,
                card : "offer",
                title : "录用通知书",
                cardContent : "尊敬的<friend#me#>先生：感谢您参加我公司的招聘活动，我们非常高兴地通知您，您已经通过了公司的笔试/面试考核，公司拟录用您为正式员工并拟与您签订正式劳动合同。"
            }, {
                genre : "activity",
                type : "work",
                content : "誉家参与了<a#anbo#>提供的暑期实训，带领同学们获得“优秀团队”称号。"
            }, {
                genre : "activity",
                type : "study",
                content : '誉家现在正在努力学习<span style="font-weight:bold;"><a#ssd_2#>系列、计算机组成原理、数字电路、编译原理</span>等课程。'
            }, {
                genre : "activity",
                type : "prise",
                content : "誉家荣获<a#nwpu#>提供的一等奖学金。"
            }, {
                genre : "activity",
                type : "study",
                content : "誉家在软件与微电子学院举办了“J2EE系列讲座”，取得良好效果。"
            }, {
                genre : "normal",
                friendId : "nwpu",
                date : "2008年12月25日23:30",
                isCard : true,
                card : "prise",
                title : "首届全国大学生软件创新竞赛二等奖",
                cardContent : "<friend#me#>同学，凭借“个人数字音乐平台”的优秀创意，你和<friend#liyue#>等创立的“梦弦工作室”团队的出色表现得到了“<a#dasai#>”评委们的一致认可，荣获第二名佳绩。感谢<friend#machunyan#>老师的殷勤指导，希望你们团队能够再创佳绩。"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "誉家现在已成为<friend#she#>的朋友。"
            }, {
                genre : "activity",
                type : "study",
                content : "誉家与<friend#liyue#>等同学申报了<a#guochuang#>。"
            }, {
                genre : "activity",
                type : "study",
                content : "誉家与<friend#liyue#>一起成立了“梦弦工作室”。"
            }, {
                genre : "activity",
                type : "study",
                content : '誉家现在正在努力学习<span style="font-weight:bold;"><a#ssd_1#>系列、高等数学、线性代数、离散数学、大学物理</span>等课程。'
            }, {
                genre : "normal",
                friendId : "liyue",
                date : "2007年2月12日10:10",
                content : "听说大创的国家队就要开始选拔了啊，教我学Java吧英雄！"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "誉家现在已成为<friend#liyue#>、<friend#yanghaibing#>和<friend#machunyan#>的朋友。"
            }, {
                genre : "activity",
                type : "newAddress",
                content : "誉家将他的现居城市更新为<a#xian#>。"
            }, {
                genre : "normal",
                friendId : "nwpu",
                date : "2006年6月1日10:10",
                isCard : true,
                card : "offer",
                title : "录取通知书",
                cardContent : "<friend#me#>同学：祝贺你被我校“软件工程”专业录取！请你于2006年8月28日凭本通知书来校报到。<a#nwpu#>欢迎你！天高任鸟飞，海阔凭鱼跃，你的梦想将从这里起航！"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "誉家现在已成为<friend#nwpu#>的朋友。"
            }, {
                genre : "activity",
                type : "study",
                content : "誉家完成了高中阶段学习，已从<a#anzhong#>毕业。"
            }, {
                genre : "activity",
                type : "study",
                content : "誉家完成了初中阶段学习，已从<a#yuezhong#>毕业。"
            }, {
                genre : "activity",
                type : "play",
                content : "誉家经历了他懵懂无知年少轻狂风驰电掣和风拂面电闪雷鸣打架抄作业考第一打游戏机跌到粪坑摔破皮不长胡子分泌失调各种悲剧狂野又平淡的青葱岁月。"
            }, {
                genre : "activity",
                type : "newAddress",
                content : "誉家将他的现居城市更新为<a#anyue#>。"
            }, {
                genre : "normal",
                friendId : "me",
                date : "1988年8月2日13:14",
                content : "既然选择远方，便只顾风雨兼程。<friend#dad#>、<friend#mom#>，感谢你们辛苦把我生下来，我爱你们！另外，<a#helloWorld#>",
                likedBy : ["dad", "mom"]
            }, {
                genre : "activity",
                type : "addFriend",
                content : "誉家现在已成为<friend#dad#>的朋友。"
            }, {
                genre : "activity",
                type : "addFriend",
                content : "誉家现在已成为<friend#mom#>的朋友。"
            }, {
                genre : "activity",
                type : "gift",
                content : "誉家出生了。"
            }
        ],
        PHOTOS : {
            //will not be displayed in "MidContentPhotos"
            "ents/photos/" : {
                "hidden" : true,
                "bandari" : {
                    title : "班得瑞全球中文网",
                    href : "http://music.bandari.net/",
                    content : "戴上耳机，世界与我无关。聆听来自自然的声音，Bandri",
                    friendId : "me",
                    date : "2012年4月8日23:30"
                },
                "hevia" : {
                    title : "在google音乐中查找Hevia",
                    //~ href : "http://www.youtube.com/artist/Hevia",
                    href : "http://www.google.cn/music/artist?id=A2c4c5af27dbf4f8f",
                    content : "Hevia的苏格兰风笛经典名曲。扬帆起航，晴空万里间回望一眼，只剩夕阳，赤刹芳华。如歌人生，Busindre Reel",
                    friendId : "me",
                    date : "2012年4月8日23:30"
                },
                "yanni" : {
                    title : "访问雅尼官方网站",
                    href : "http://yanni.com/default.aspx",
                    content : "找出你压在箱底的丝绸礼服或者是燕尾服吧，坐在音乐厅的包厢里，打开一瓶卡波奈萨维格诺葡萄酒，然后沉浸在雅尼的无限空间里。一个更好的世界就在你手上。",
                    friendId : "me",
                    date : "2012年4月8日23:30"
                },
                "himekami" : {
                    title : "姬神-千年之祈（来自优酷）",
                    href : "http://v.youku.com/v_show/id_XMTA3ODIyNDg0.html",
                    content : "对自然的赐予，我们总是应当充满敬畏。所有的生命都應該得到尊重，姬神——千年之祈",
                    friendId : "me",
                    date : "2012年4月8日23:30"
                },
                "torchlight" : {
                    title : "访问Runic Games",
                    href : "http://www.torchlightgame.com/",
                    content : "是男人就下一百层。。。等待Torchlight2中，哈哈！",
                    friendId : "me",
                    date : "2012年4月8日23:30"
                },
                "diablo" : {
                    title : "访问暴雪《暗黑3》官方网站",
                    href : "http://us.battle.net/d3/en/",
                    content : "暗黑3，你懂的。",
                    friendId : "me",
                    date : "2012年4月8日23:30"
                },
                "civilization" : {
                    title : "了解“席德梅尔”的《野蛮5》",
                    href : "http://www.civilization5.com/",
                    content : "回合制策略类游戏，目前更新至第五代。第一部资料片还没出，静等中。刚刚过神。5代也被称作“野蛮5”，当然是有原因的......",
                    friendId : "me",
                    date : "2012年4月8日23:30"
                },
                "fireEmblem" : {
                    title : "论坛“火花天龙剑”收录了《火焰之纹章》各种版本",
                    href : "http://www.fireemblem.net/fe/feindex.html",
                    content : "从FC时代一直开始玩，与《勇者斗恶龙》系列伴随我整个童年的游戏。",
                    friendId : "me",
                    date : "2012年4月8日23:30"
                }
            },
            "friends/photos/" : {
                title : "我和我的朋友们",
                "me" : {
                    content : "我和萍萍在“奥林匹克国家森林公园”。",
                    friendId : "me",
                    date : "2011年4月16日14:21"
                },
                "dad" : {
                    content : "敬爱的老爸在故乡。",
                    friendId : "me",
                    date : "2011年7月25日10:10"
                },
                "mom" : {
                    content : "亲爱的老妈和外婆在故乡。我刚认识我外婆的时候外婆跟现在的妈妈一样年轻漂亮。",
                    friendId : "me",
                    date : "2011年7月25日10:10"
                },
                "she" : {
                    content : "我和她刚认识的时候，在西工大新校区的小河边上。她穿着的特别漂亮的小运动服不知道去哪了~",
                    friendId : "me",
                    date : "2008年9月16日10:10"
                },
                "machunyan" : {
                    content : "马老师我最敬重的老师，没有之一。老实说其实自己心中有愧，没有当好她的学生。",
                    friendId : "me",
                    date : "2010年6月24日10:10"
                },
                "liyue" : {
                    content : "对于那些不经意间就认识却再也无法忘却的朋友们，我们总是应当心存感激。幸运的是命运总是没有让我失望，尤其是在我的大学生涯。大树目前正在为出国和论文的事努力奋斗。共勉。",
                    friendId : "me",
                    date : "2012年3月18日10:10"
                },
                "nwpu" : {
                    content : "我承认西工大本部的图书馆确实非常漂亮，不过这张图P得也太假了。",
                    friendId : "me",
                    date : "2006年10月24日10:10"
                },
                "liangxiao" : {
                    content : "真正意义上的第二导师，曾帮助过我太多，不胜言语。",
                    friendId : "me",
                    date : "2011年4月16日14:21"
                },
                "baidu" : {
                    content : "位于北京上地十街的百度大厦，2009年11月正式投入使用。",
                    friendId : "me",
                    date : "2009年11月16日14:21"
                },
                "bridge" : {
                    content : "“百度商桥”，免费在线客服产品。",
                    friendId : "me",
                    date : "2010年4月1日10:10"
                }
            },
            "cards/photos/" : {
                title : "一些美好的记忆",
                "graduate" : {
                    content : "天涯海角，我永远爱你们，兄弟们。",
                    friendId : "me",
                    date : "2010年6月28日14:30"
                },
                "prise" : {
                    content : "2008年的圣诞节，我、大树和老蒋在重庆大学的颁奖现场。虽然以0.2分惜败，但我们很开心，接近一个月的关小黑屋式极限编程终于有了回报。可惜萍萍当时不在。",
                    friendId : "me",
                    date : "2008年12月25日23:30"
                },
                "bridge1.0" : {
                    content : "辛苦了6个月，数万张设计稿，上百页MRD，数不尽个加班的通宵，商桥1.0终于上线了。",
                    friendId : "me",
                    date : "2010年4月1日10:10"
                },
                "bridge2.5" : {
                    content : "我和许多同事们倾注了很大心血的一个版本，允许客户定义自己的中间页面，期望该产品能够为那些没有网站也想做推广的企业主提供一个简单可依赖的开始。",
                    friendId : "me",
                    date : "2008年12月25日23:30"
                }
            }
        },
        INFO : [
            {
                title : "工作和学历",
                items : [
                    {
                        title : "雇主",
                        content : "<infoWork#baidu#>"
                    }, {
                        title : "大学",
                        content : "<infoWork#nwpu#>"
                    }
                ]
            }, {
                title : "基本信息",
                items : [
                    {
                        title : "性别",
                        content : "男"
                    }, {
                        title : "兴趣对象",
                        content : "男性和女性"
                    }, {
                        title : "生肖",
                        content : "辰龙"
                    }, {
                        title : "星座",
                        content : "处女"
                    }
                ]
            }, {
                title : "专注的技术领域",
                items : [
                    {
                        title : "Web开发",
                        content : '熟练掌握<span style="font-weight:bold;">Javascript、css、html；</span><br>\
                            对<span style="font-weight:bold;" title="尤其希望能够在html5游戏开发领域具备一定的技术积累">html5、css3</span>等前端前沿技术和移动开发有浓厚兴趣；<br>\
                            熟悉<span style="font-weight:bold;">Java</span>，理解<span style="font-weight:bold;">Sturts2、Spring、Hibernate</span>框架；<br>\
                            了解<span style="font-weight:bold;">Php、python</span>，具备独立开发能力；<br>\
                            了解常用<span style="font-weight:bold;">设计模式</span>，对<span style="font-weight:bold;">前端架构、性能优化</span>具有独到的理解；'
                    }, {
                        title : "美工和设计",
                        content : '熟悉并擅长使用<span style="font-weight:bold;"><a#photoshop#></span>；<br>\
                            喜欢<span style="font-weight:bold;"><a#3dmax#>、<a#zbrush#></span><br>\
                            了解Action script3\
                        '
                    }
                ]
            }, {
                title : "艺术和娱乐",
                items : [
                    {
                        title : "运动",
                        content : "羽毛球、骑行、五子棋、无氧运动"
                    }, {
                        title : "音乐",
                        //see PARAM.entertainment.music
                        content : "<entertainment#music#>"
                    }, {
                        title : "游戏",
                        content : "<entertainment#games#>"
                    }
                ]
            }, {
                title : "联系信息",
                items : [
                    {
                        title : "常用邮箱",
                        content : "<a#mail#>"
                    }, {
                        title : "手机",
                        content : "+86 185-7662-6334"
                    }, {
                        title : "Facebook",
                        content : "<a#facebook#>"
                    }, {
                        title : "人人",
                        content : "<a#renren#>"
                    }, {
                        title : "QQ",
                        content : "<a#qq#>"
                    }
                ]
            }
        ]
    },
        
    HTML : {
        /**
         *Used for creating a friend's card
         *@param id name of the friend
         *@param name display name of the friend
         *@param isLast the last one contains no bottom border
         */
        FRIEND : '<a hidefocus="true" href="javascript:void(0);" title="点击查看“%name%”的详细信息" <loateFriend#%id%#> class="link-title friend-item" id="%id%" style="background-image:url(imgs/friends/%id%.png);">%name%</a>',
        PARAM_A : '<a hidefocus="true" href="%href%" title="%title%" target="_blank">%text%</a>',
        POST : {
            /**
             *@param body should be replaced by LC.HTML.POST.XXX_BODY, XXX may be ACTIVITY and NORMAL
             */
            FRAME : '<div class="post%isLast%">\
                    %body%\
                    <div class="clear"></div>\
                </div>',
            
            /**
             *@param items item list filled with some ACTIVITY_ITEM
             *@param activity should be replaced by LC.XX.NORMAL_TEXT.activity
             */
            ACTIVITY_BODY : '<div class="post-avatar activiti-avatar"></div>\
                <div class="post-body">\
                    <div class="activity-title">%activity%</div>\
                    %activityItems%\
                </div>',
            
            /**
             *@param type activity type, such as "addFriend" and so on.
             *different type may not hold the same params that should be replaced.
             *@param content item content.
             */
            ACTIVITY_ITEM : '<div class="activity-item">\
                    <span class="icon icon-%type%"></span>\
                    %content%\
                </div>',
            
            /**
             *card and normal posts share the same body, their difference exists in contents.
             *this tag is supported by floatPhoto, it means the tag should be appended by an ommouseover event and an click event,
             *and the tag that trigglers the float photo should contanls a className.
             *@param friendId name of the friend
             *@param friendName display name of the friend
             *@param content post content, will be filled with CARD_CONTENT if it's a card post, otherwise pure text only.
             *@param inlineType Is the contents at the same line as the name. replace it with "div" or "span", you know it.
             *@param date such as "January 7 at 5:25am"
             *@param comments comment list, filled with COMMENT
             *@param likeLink should be filled with LC.XX.NORMAL_TEXT.like
             *@param commentLink should be filled with LC.XX.NORMAL_TEXT.comment
             *@param shareLink should be filled with LC.XX.NORMAL_TEXT.share
             *@param photoName this tag was supposed be supported by floatPhotoWrap, so the url of float photo is necessary.
             */
            NORMAL_BODY : '<div class="post-avatar" <floatPhoto#friends/photos/%friendId%#> style="background:url(imgs/friends/%friendId%.png);"></div>\
                <div class="post-body">\
                    <a hidefocus="true" href="javascript:void(0);" <loateFriend#%friendId%#> class="link-title">%friendName%</a>\
                    <%inlineType% class="post-content">\
                        %content%\
                    </%inlineType%>\
                    <div class="post-action">\
                        <a hidefocus="true" href="javascript:void(0);">%likeLink%</a> · <a hidefocus="true" href="javascript:void(0);">%commentLink%</a> · <a hidefocus="true" href="javascript:void(0);">%shareLink%</a> · <span class="date-link">%date%</span>\
                    </div>\
                    %comments%\
                </div>',
            
            /**
             *@param items comment items, filled with several COMMENT_ITEM
             */
            COMMENT : '<div class="post-comment">\
                    <div class="gray-arrow"></div>\
                    %items%\
                </div>',
            
            /**
             *@param friends friendlist
             *@param like should be filled with LC.XX.NORMAL_TEXT.like
             */
            COMMENT_LIKE : '<div class="comment-item post-like">\
                    <div class="icon icon-post-like"></div>%friends%%like%\
                </div>',
            
            /**
             *@param friendId name of the friend
             *@param friendName display name of the friend
             *@param content comment contents, may be pure text or something like attributes in LC.LANGUAGE.XX
             *@param date such as "February 9, 2011 at 12:55pm" or something
             */
            COMMENT_ITEM : '<div class="comment-item">\
                    <div class="com-avatar" style="background:url(imgs/friends/small/%friendId%.png);"></div>\
                    <div class="com-content">\
                        <a hidefocus="true" href="javascript:void(0);" <loateFriend#%friendId%#> class="link-title">%friendName%</a>\
                        %content%<br>\
                        <span class="date-link">%date%</span>\
                    </div>\
                    <div class="clear"></div>\
                </div>',
            
            /**
             *will be used in NORMAL_BODY if the post is a card post.
             *this tag is supported by floatPhoto.
             *@param card card name, will be used to display the card picture.
             *@param title card title
             *@param content card content, pure text here.
             *@param floatphoto float photos for the card if exist.
             *@param photoName this tag was supposed be supported by floatPhotoWrap, so the url of float photo is necessary.
             */
            CARD_CONTENT : '%content%\
                <a hidefocus="true" href="javascript:void(0);" class="card-pic" <floatPhoto#cards/photos/%card%#> style="background:url(imgs/cards/%card%.png);"></a>\
                <div class="card-text">\
                    <a hidefocus="true" href="javascript:void(0);" class="link-title">%title%</a><br>\
                    %cardContent%\
                </div>\
                <div class="clear"></div>',
            
            /**
             *@param randId create a random id for the element
             *@param height total height of the element
             *@param more should be filled with LC.XX.NORMAL_TEXT.more, which holds another param.
             *@param count used by LC.XX.NORMAL_TEXT.more, the count of remaining comment counts.
             *@param items the same with the "%items%" in COMMENT
             */
            VIEW_MORE : '<div class="view-more" id="%randId%">\
                <div class="comment-item post-like">\
                    <div class="icon icon-post-more"></div>%more%\
                </div>\
                %items%\
            </div>'
        },
        FRIEND_NAME : '<a hidefocus="true" <loateFriend#%friendId%#> href="javascript:void(0);">%friendName%</a>',
        EXTRAL_CSS : '<style type="text/css">%css%</style>',
            
        /**
         *@param photo name of photo, for the reason of picture's size, it's recommended that the ext-name is ".jpg".
         *@param comments should be replaced by LC.HTML.PHOTO_COMMENT if the param "photo" was configured in LC[XX].PHOTOS
         *@param extralEvent if the tag should be supposed by extral events
         *@param title tips
         *@param href
         *@param aTitle
         */
        FLOAT_PHOTO_A : '<a hidefocus="true" href="%href%" title="%aTitle%" target="_blank"><img id="FloatPhotoImg" src="imgs/%photo%.jpg" %extralEvent% /></a>\
            <a hidefocus="true" href="javascript:void(0);" title="%title%" id="CloseFloatPhoto" onclick="javascript:Resume.toggleFloat(event, \'CloseFloatPhoto\', \'%photo%\');"></a>\
            %comments%',
        /**
         *@param photo name of photo, for the reason of picture's size, it's recommended that the ext-name is ".jpg".
         *@param comments should be replaced by LC.HTML.PHOTO_COMMENT if the param "photo" was configured in LC[XX].PHOTOS
         *@param extralEvent if the tag should be supposed by extral events
         *@param title tips
         */
        FLOAT_PHOTO : '<img id="FloatPhotoImg" src="imgs/%photo%.jpg" %extralEvent% />\
            <a hidefocus="true" href="javascript:void(0);" title="%title%" id="CloseFloatPhoto" onclick="javascript:Resume.toggleFloat(event, \'CloseFloatPhoto\', \'%photo%\');"></a>\
            %comments%',
        
        /**
         *@param title title
         */
        PHOTO_GROUP : '<div class="info-title pit-hide" id="%id%">%title%</div>%content%',
        
        /**
         *@param content content of comment, with tags maybe.
         *@param friendId author of this comment, is "me" by default.
         *@param date you know it.
         */
        PHOTO_COMMENT : '<div id="FloatPhotoComment" class="photo-comment">\
            <div style="background:url(imgs/friends/small/%friendId%.png) no-repeat;" class="fpc-content">\
                %content%\
                <div class="date-link">%date%</div>\
            </div>\
        </div>',
        
        /**
         *this tag is supported by floatPhoto.
         *@param photo name of photo.
         */
        PHOTO_ITEM : '<div class="photo-item" id="_PI_%photo%"><img class="photo-item-img" <floatPhoto#%photo%#> src="imgs/scale-photos/%photo%.png"/></div>',
        CLEAR : '<div class="clear"></div>',
        
        /**
         *@param friendId also used to confirm tag wrap's id here
         *@param info friend information list, be replaced with LC.HTML.FRIEND_INFO_ITEM
         *@param tags tags
         *@param className tag display style, should be choosed randomly from FRIEND_TAG_STYLE.
         *@param isLast the last element contains no border, margin and padding.
         */
        FRIEND_ITEM : '<div class="friend-detail-item%isLast%" id="_FDI_%friendId%">\
                <div class="friend-avatar" style="background:url(imgs/scale-photos/friends/photos/%friendId%.png);" onmouseover="Resume.showFriendTags(\'%friendId%\');"></div>\
                <table class="firend-info">%info%</table>\
                <div class="friend-tag fts-%className%" id="_FT_%friendId%">%tags%</div>\
                <div class="clear"></div>\
            </div>',
        
        /**
         *@param key key
         *@param value contents
         */
        FRIEND_INFO_ITEM : '<tr><td class="friend-title">%key%</td><td>%value%</td></tr>',
        FRIEND_INFO_TITLE : '<tr><td class="friend-title" colspan=2>%key%</td></tr>',
        
        /**
         *@param tag tag content.
         *@param className tag item display style, should be choosed randomly from FRIEND_TAG_ITEM_STYLE.
         *@param id used to confirm the item of the tag.
         *@param bottom used to confirm the location of tag, incase it out of range, 
         *a css injection should be added for each tag, use offsetLeft and offsetTop to match the case.
         *@param color random color
         *@param fontSize random fontSize
         */
        FRIEND_TAG_ITEM : '<div id="%id%" style="right:%right%px;bottom:%bottom%px;color:%color%;font-size:%fontSize%px;" class="tag-item tis-%className%">%tag%</div>',
        
        /**
         *@param title 
         *@param subItems should be replaced with a group of LC.HTML.SUB_INFO_ITEM
         */
        INFO_ITEM : '<div class="info-item">\
                <div class="info-title">\
                    %title%\
                </div>\
                %subItems%\
            </div>',

        /**
         *@param isLast the last info item of current item(should be replced with "sii-last" if possible)
         *@param content contents that should be replaced by configurations of LC[XX].INFO[%info-title%][%sub-info-title%],
         *and maybe there exist a renderer for %sub-info-title%.
         */
        SUB_INFO_ITEM : '<div class="sub-info-item%isLast%">\
                <div class="sub-info-title">%subTitle%</div>\
                <div class="sub-info-content">\
                    %content%\
                </div>\
            </div>',
        
        /**
         *@param href the same as it within PARAM_A
         *@param title the same as it within PARAM_A
         *@param src url of image
         *@param text display text
         */
        INFO_WORK_A : '<a hidefocus="true" class="info-work" href="%href%" title="%title%" target="_blank">\
                <img src="%src%" class="info-work-img" />\
                <span class="info-work-txt">%text%</span>\
            </a>'
    },
    CSS : {        
        /**
         *style for tags and items
         */
        FRIEND_TAG_STYLE : ["normal", "pink", "reflect", "dark"],
        FRIEND_TAG_ITEM_STYLE : ["normal", "light-shadow", "dark-shadow", "dark", "light"]
    },
    /**
     *tag Proliferate range
     */
    FRIEND_TAG_WIDTH : 337,
    FRIEND_TAG_HEIGHT : 98,
    FLOAT_PHOTO_WIDTH : 720,
    FLOAT_PHOTO_HEIGHT : 540
}