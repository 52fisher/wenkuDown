// ==UserScript==
// @name         百度文库文档直接下载（blpack）
// @namespace    https://github.com/52fisher/wenkuDown
// @version      1.3
// @description  文库直接下载
// @author       fisher
// @updateURL    https://github.com/52fisher/wenkuDown/raw/master/wenku-blpack-down.user.js
// @downloadURL  https://github.com/52fisher/wenkuDown/raw/master/wenku-blpack-down.user.js
// @match        https://wenku.baidu.com/view/*
// @require      http://www.jq22.com/demo/jQuery-dialogBox20151123/js/jquery.dialogBox.js
// @grant        GM_addStyle

// ==/UserScript==

GM_addStyle('#blpack-down{cursor: pointer;display: inline-block;vertical-align: top;padding: 7px 15px;margin-left: 4px;box-sizing: border-box;line-height: 40px;font-size: 18px;min-width: 130px;text-align: center;color: #fff;background-color: #0099CC;}.dialog-box{font:12px \5fae\8f6f\96c5\9ed1;height:auto;position:fixed;top:30%;left:50%;z-index:99999;display:none}.show{display:block}.normal{background:#fff}.correct{border-top:4px solid #66be8c;background:#f8fffb}.error{border-top:4px solid #f5694b;background:#fff8f7}.dialog-box-container{position:relative;margin:0 auto;border-radius:5px;box-shadow:0 0 10px #bbb}.dialog-box-title{height:36px;line-height:36px;padding:0 15px}.dialog-box-title h3{font-size:14px;font-weight:700;margin:0;float:left}.dialog-box-close{font-size:24px;margin-left:20px;font-weight:400;float:right;cursor:pointer;display:inline-block;float:right}.dialog-box-close:hover{color:#f5694b}.dialog-box-content{font-family:microsoft yahei;padding:20px;line-height:24px;margin:0}.dialog-btn{height:30px;padding:0 20px 20px;text-align:center}.dialog-btn span{width:90px;height:30px;line-height:30px;text-align:center;display:inline-block;border-radius:3px;margin:0 10px;cursor:pointer}.dialog-btn-cancel{background:#ddd}.dialog-btn-cancel:hover{background:#d6d6d6}.dialog-btn-confirm{color:#fff;background:#66be8c}.dialog-btn-confirm:hover{background:#58b781}#dialog-box-mask{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99998;opacity:.3;filter:alpha(opacity=30);background:#000;display:none;-webkit-transition:all .3s;-moz-transition:all .3s;transition:all .3s}#dialog-box-iframe body{margin:0;padding:0;border:0}.effect-fade .dialog-box-container{-webkit-transform:scale(.6);-ms-transform:scale(.6);transform:scale(.6);opacity:0;transition:all .3s}.show.effect-fade .dialog-box-container{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}.effect-newspaper .dialog-box-container{-webkit-transform:scale(0) rotate(720deg);-ms-transform:scale(0) rotate(720deg);transform:scale(0) rotate(720deg);opacity:0;-webkit-transition:all .3s;transition:all .3s}.show.effect-newspaper .dialog-box-container{-webkit-transform:scale(1) rotate(0deg);-ms-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}.effect-fall{-webkit-perspective:1300px;perspective:1300px}.effect-fall .dialog-box-container{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(600px) rotateX(20deg);-ms-transform:translateZ(600px) rotateX(20deg);transform:translateZ(600px) rotateX(20deg);opacity:0}.show.effect-fall .dialog-box-container{-webkit-transition:all .3s ease-in;transition:all .3s ease-in;-webkit-transform:translateZ(0px) rotateX(0deg);-ms-transform:translateZ(0px) rotateX(0deg);transform:translateZ(0px) rotateX(0deg);opacity:1}.effect-scaled .dialog-box-container{-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);opacity:0;-webkit-transition:all .3s;transition:all .3s}.show.effect-scaled .dialog-box-container{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}.effect-flip-horizontal{-webkit-perspective:1300px;-moz-perspective:1300px;perspective:1300px}.effect-flip-horizontal .dialog-box-container{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateY(-70deg);-ms-transform:rotateY(-70deg);transform:rotateY(-70deg);-webkit-transition:all .3s;transition:all .3s;opacity:0}.show.effect-flip-horizontal .dialog-box-container{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);opacity:1}.effect-flip-vertical{-webkit-perspective:1300px;-moz-perspective:1300px;perspective:1300px}.effect-flip-vertical .dialog-box-container{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateX(-70deg);-ms-transform:rotateX(-70deg);transform:rotateX(-70deg);-webkit-transition:all .3s;transition:all .3s;opacity:0}.show.effect-flip-vertical .dialog-box-container{-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}.effect-sign{-webkit-perspective:1300px;perspective:1300px}.effect-sign .dialog-box-container{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:rotateX(-60deg);-ms-transform:rotateX(-60deg);transform:rotateX(-60deg);-webkit-transform-origin:50% 0;transform-origin:50% 0;opacity:0;-webkit-transition:all .3s;transition:all .3s}.show.effect-sign .dialog-box-container{-webkit-transform:rotateX(0deg);-ms-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}')
$('h1.with-top-banner').before('<div id="blpack-down">免费文档下载</div>');
$('body').append('<div id="blpack-dialogBox" style=""></div>');

// login in
$('#blpack-down').bind('click',function(){
    var usracc = localStorage.getItem('wenkuusracc'),
        usrpwd = localStorage.getItem('wenkuusrpwd'),
        docid = location.pathname.match(/\/.+\/(\w+)/)[1];
    if (usracc.length < 5 || usrpwd.length < 5) { // need login
        $('#blpack-dialogBox').dialogBox({
            hasClose: true,
            hasBtn: true,
            confirmValue: '登录',
            confirm: function(){
                var usracc = $('#wkname').val();
                var usrpwd = $('#wkpwd').val();
                var o = {usrname: usracc, usrpass: usrpwd,taskid: "login"};
                $.post("https://t.52fisher.cn/forward.php",o,function(e) {
                    console.log(e)
                        if (e.result == "fail") {
                            alert(e.msg);
                            return
                        }
                        localStorage.setItem('wenkuusracc', usracc);
                        localStorage.setItem('wenkuusrpwd', usrpwd);
                        alert("登录成功");
                    },'JSON');
            },
            cancelValue: '取消',
            title: '登录',
            content: '<label for="wkname" style="display:block;margin-bottom:10px;">账号：<input id="wkname" value="" palceholder="blpack的账号"style="height:28px;width:160px" autofocus ></label><label for="wkpwd" style="display:block">密码：<input id="wkpwd" value="" palceholder="blpack的密码" style="height:28px;width:160px"></label>'
        });
    }
    var o = {usrname: usracc,usrpass: usrpwd,docinfo: docid,taskid: "up_down_doc1"};
    $.post("https://t.52fisher.cn/forward.php",o,function (e) {
            console.log(e);
            if (e.result == "fail") {
                alert("提交失败");
                return ;
            }
            window.open(e.url);
        },"json");


})