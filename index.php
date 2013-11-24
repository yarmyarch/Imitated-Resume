<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="description" content="“罗誉家”仿facebook主页制作的个人简历-哈皮前端攻城师" />
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="asset/css/resume-all.css" />
<style type="text/css" id="ExtralCss"></style>
<title id="Title">罗誉家</title>
<script type="text/javascript">
var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-30956439-1']);_gaq.push(['_setDomainName', 'yarmyarch.com']);_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
</script>
</head>
<body>
<div class="header-menu">
    <div class="header-wrap">
        <a hidefocus="true" href="javascript:void(0);" class="logo"></a>
        <div class="sign-wrap" id="SearchWrap">
            <span id="Search"></span>
            <a class="search-btn"></a>
        </div>
        <div class="clear"></div>
    </div>
</div>
<div class="main-wrap">
    <div class="left-bar">
        <div class="avatar"></div>
        <div class="side-menu-wrap">
            <a hidefocus="true" href="javascript:void(0);" id="InfoPointer" class="side-menu-item side-menu-act"><span class="icon icon-info"></span><span id="Info"></span></a>
            <a hidefocus="true" href="javascript:void(0);" id="PostPointer" class="side-menu-item"><span class="icon icon-wall"></span><span id="Wall"></span></a>
            <a hidefocus="true" href="javascript:void(0);" id="PhotosPointer" class="side-menu-item"><span class="icon icon-photos"></span><span id="Photos"></span></a>
            <a hidefocus="true" href="javascript:void(0);" id="NotesPointer" class="side-menu-item"><span class="icon icon-notes"></span><span id="Notes"></span></a>
            <a hidefocus="true" href="javascript:void(0);" id="FriendsPointer" class="side-menu-item"><span class="icon icon-friends"></span><span id="Friends"></span></a>
        </div>
        <div class="friends-list" id="FriendList">
            <a hidefocus="true" href="javascript:void(0);" class="link-title friends-count" id="FriendsCount"></a>
        </div>
        <a hidefocus="true" href="javascript:void(0);" id="AddBadge"></a>
    </div>
    <div class="mid-bar">
        <div class="profile-wrap">
            <div class="profile">
                <div id="Name"></div>
                <div class="clear"></div>
                <div class="profile-item">
                    <div class="profile-img" id="ProfileWork"></div><div class="profile-text" id="Work"></div>
                </div>
                <div class="profile-item">
                    <div class="profile-img" id="ProfileLearn"></div><div class="profile-text" id="Study"></div>
                </div>
                <div class="profile-item">
                    <div class="profile-img" id="ProfileLives"></div><div class="profile-text" id="Lives"></div>
                </div>
                <div class="profile-item">
                    <div class="profile-img" id="ProfileFrom"></div><div class="profile-text" id="From"></div>
                </div>
                <div class="profile-item">
                    <div class="profile-img" id="ProfileBorn"></div><div class="profile-text" id="Born"></div>
                </div>
                <div id="Forward" class="convertor convertor-hide"></div>
                <div id="Backward" class="convertor convertor-hide"></div>
                <div class="clear"></div>
            </div>
            <div class="language-btn">
                <a hidefocus="true" href="#EN" class="btn" id="LanguageENBtn" title="WTF are these strange symbols! ">English version</a>
                <a hidefocus="true" href="#CH" class="btn" id="LanguageCHBtn" title="什么破玩意，英语这么烂还准备英文简历！">切换至中文版</a>
            </div>
            <div class="clear"></div>
        </div>
        <div class="right-content">
            <div class="ad-title" id="AdTitle"></div>
            <a id="AdAnZhong" hidefocus="true" target="_blank" class="ad-item">
                <div class="link-title" id="AdAnZhongTitle"></div>
                <div class="ad-avatar" id="AdAnZhongAvatar"></div>
                <div class="ad-content" id="AdAnZhongContent"></div>
            </a>
            <a id="AdNwpu" hidefocus="true" target="_blank" class="ad-item">
                <div class="link-title" id="AdNwpuTitle"></div>
                <div class="ad-avatar" id="AdNwpuAvatar"></div>
                <div class="ad-content" id="AdNwpuContent"></div>
            </a>
            <a id="AdBaidu" hidefocus="true" target="_blank" class="ad-item ad-item-last">
                <div class="link-title" id="AdBaiduTitle"></div>
                <div class="ad-avatar" id="AdBaiduAvatar"></div>
                <div class="ad-content" id="AdBaiduContent"></div>
            </a>
        </div>
        <div class="mid-content mid-content-hide" id="MidContentInfo"></div>
        <div class="mid-content mid-content-hide" id="MidContentPost">
            <div class="status">
                <div class="status-item"><span class="icon icon-status"></span><span id="UpdateStatus">　</span></div>
                <div class="status-wrap">
                    <div class="stratus-arrow"></div>
                    <div class="status-content" id="Signatures">　</div>
                </div>
            </div>
            <div class="wall-content" id="WallContent">
            </div>
            <div class="no-more" id="NoMore"></div>
        </div>
        <div class="mid-content mid-content-hide" id="MidContentPhotos"></div>
        <div class="mid-content mid-content-hide" id="MidContentFriends"></div>
    </div>
    <div class="copy-right"><div id="CopyRightInfo"><a href="mailto:yarmyarch@live.cn">yarmyarch@live.cn</a> &copy; 2012</div><div id="CopyRightText"></div></div>
    <div class="clear"></div>
</div>
<div class="top-btn" id="GoTopBtnWrap"><div id="GoTopBtn"></div></div>
<div id="FloatPhoto" class="float-hide"></div>
<script type="text/javascript" src="asset/js/Resume-all.js"></script>
<script type="text/javascript">
Resume && Resume.init();
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F3aba8cb898edf476907dc409467ffe02' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>
</html>