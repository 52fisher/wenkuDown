# wenkuDown

blpack提供了一个非常方便的下载百度文库文档的方案。作者也在其官网提供了wenkuapp.crx的插件，然而这对于firefox党一点都不友好，尽管可以使用webAPI进行插件的自签名转换，但转换后的扩展在firefox上存在着各种各样的问题。于是，此repo诞生了，采用了js脚本的方式，对于各大浏览器都由很好的兼容效果。


## 食用指南

### 适用浏览器（点击直接进入）

支持绝大多数浏览器，在使用之前只需要安装一个用户脚本管理器

根据使用的浏览器不同，可用的用户脚本管理器也有所不同。


    Chrome：Tampermonkey / Violent monkey
    Firefox：Greasemonkey / Tampermonkey / Violentmonkey
    Safari：Tampermonkey
    Microsoft Edge：Tampermonkey
    Opera：Tampermonkey
    或 Violentmonkey
    Maxthon：Violentmonkey
    Dolphin：Tampermonkey
    UC：Tampermonkey
    Qupzilla：（不需要额外软件）
    AdGuard：（不需要额外软件）


### 常见浏览器商店链接
[搜狗浏览器](http://ie.sogou.com/app/search/Tampermonkey) / [360安全浏览器](https://ext.se.360.cn/webstore/search/tampermonkey) / [360极速浏览器](https://ext.chrome.360.cn/webstore/search/tampermonkey) / [火狐浏览器](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/) / [QQ浏览器](http://appcenter.browser.qq.com/search/detail?key=Tampermonkey&id=dhdgffkkebhmkfjojejmpbldmpobfkfo&title=Tampermonkey) / [UC浏览器](https://extensions.uc.cn/newindex.htm#!detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Safari浏览器](http://tampermonkey.net/?browser=safari) / [Edge浏览器](https://www.microsoft.com/zh-cn/store/p/tampermonkey/9nblggh5162s?rtc=1) / [遨游浏览器](http://extension.maxthon.com/detail/index.php?view_id=1680) / [Opera浏览器](https://addons.opera.com/zh-cn/extensions/details/tampermonkey-beta/?display=en)

## 安装
[点我安装]()


## 警告

本脚本为非官方脚本，由于官网与百度文库的协议存在跨域问题，所以使用了url转发作为两者沟通的桥梁，在此过程中保证不保存任何用户的信息，介意者勿用。