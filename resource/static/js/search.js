/* jdf-1.0.0/ search.js Date:2017-02-09 17:08:53 */
window.searchlog=window.searchlog||function(){var a="//sstat."+pageConfig.FN_getDomain()+"/scslog?args=";var b="{keyword}^#psort#^#page#^#cid#^"+encodeURIComponent(document.referrer);var c="2";var d="";var e="";var f=function(){var f="";var g="";var h="";var i="0";if(arguments.length>0)if(0==arguments[0])f=a+c+"^"+b+"^^^58^^"+e+"^"+d;else if(1==arguments[0]){f=10!=c?a+"1^"+b+"^":a+"11^"+b+"^";for(var j=1;j<arguments.length;j++)f+=encodeURI(arguments[j])+"^";arguments.length>3&&"51"==arguments[3]&&(g=arguments[1]),arguments.length>3&&"55"==arguments[3]&&(h=arguments[1]),arguments.length>3&&"56"==arguments[3]&&(i=arguments[1]);for(var j=0,k=5-arguments.length;k>j;j++)f+="^";f+=e+"^"+d}f=f.replace("#cid#",g),f=f.replace("#psort#",h),f=f.replace("#page#",i),$.getScript(f);try{JA.tracker.ngloader("search.000006",{url:window.location.href})}catch(l){}};return f}();function search(a){var b,c="//172.28.25.11:8102/search.html?q={keyword}&enc={enc}{additional}";var d=search.additinal||"";var e=document.getElementById(a);var f=e.value;if(f=f.replace(/^\s*(.*?)\s*$/,"$1"),f.length>100&&(f=f.substring(0,100)),""==f)return void(window.location.href=window.location.href);var g=0;"undefined"!=typeof window.pageConfig&&"undefined"!=typeof window.pageConfig.searchType&&(g=window.pageConfig.searchType);var h="&cid{level}={cid}";var i="string"==typeof search.cid?search.cid:"";var j="string"==typeof search.cLevel?search.cLevel:"";var k="string"==typeof search.ev_val?search.ev_val:"";switch(g){case 0:break;case 1:j="-1",d+="&book=y";break;case 2:j="-1",d+="&mvd=music";break;case 3:j="-1",d+="&mvd=movie";break;case 4:j="-1",d+="&mvd=education";break;case 5:var l="&other_filters=%3Bcid1%2CL{cid1}M{cid1}[cid2]";switch(j){case"51":h=l.replace(/\[cid2]/,""),h=h.replace(/\{cid1}/g,"5272");break;case"52":h=l.replace(/\{cid1}/g,"5272"),h=h.replace(/\[cid2]/,"%3Bcid2%2CL{cid}M{cid}");break;case"61":h=l.replace(/\[cid2]/,""),h=h.replace(/\{cid1}/g,"5273");break;case"62":h=l.replace(/\{cid1}/g,"5273"),h=h.replace(/\[cid2]/,"%3Bcid2%2CL{cid}M{cid}");break;case"71":h=l.replace(/\[cid2]/,""),h=h.replace(/\{cid1}/g,"5274");break;case"72":h=l.replace(/\{cid1}/g,"5274"),h=h.replace(/\[cid2]/,"%3Bcid2%2CL{cid}M{cid}");break;case"81":h=l.replace(/\[cid2]/,""),h=h.replace(/\{cid1}/g,"5275");break;case"82":h=l.replace(/\{cid1}/g,"5275"),h=h.replace(/\[cid2]/,"%3Bcid2%2CL{cid}M{cid}")}c="//search-e.jd.com/searchDigitalBook?ajaxSearch=0&enc=utf-8&key={keyword}&page=1{additional}";break;case 6:j="-1",c="//music.jd.com/8_0_desc_0_0_1_15.html?key={keyword}";break;case 7:c="//s-e.jd.com/Search?key={keyword}&enc=utf-8";break;case 8:c="//search.jd.hk/Search?keyword={keyword}&enc=utf-8";break;case 9:d+="&market=1"}if("string"==typeof i&&""!=i&&"string"==typeof j){var m=/^(?:[1-8])?([1-3])$/;j="-1"==j?"":m.test(j)?RegExp.$1:"";var n=h.replace(/\{level}/,j);n=n.replace(/\{cid}/g,i),d+=n}if("string"==typeof k&&""!=k&&(d+="&ev="+k),f=encodeURIComponent(f),b=c.replace(/\{keyword}/,f),b=b.replace(/\{enc}/,"utf-8"),b=b.replace(/\{additional}/,d),"object"==typeof $o&&("string"==typeof $o.lastKeyword&&(b+="&wq="+encodeURIComponent($o.lastKeyword)),"string"==typeof $o.pvid&&(b+="&pvid="+$o.pvid)),b.indexOf("/search.jd.com/")>0)try{JA.tracker.ngloader("search.000009",{key:f,posid:a,target:b})}catch(o){}("undefined"==typeof search.isSubmitted||0==search.isSubmitted)&&(setTimeout(function(){window.location.href=b},50),search.isSubmitted=!0)}var $o=function(a){var b=$("#key");if(!(b.length<1)){var c={};c.replace=function(a,b){return a.replace(/#{(.*?)}/g,function(){var a=arguments[1];return"undefined"!=typeof b[a]?b[a]:arguments[0]})},c.genPvid=function(){var a=parseInt(readCookie("__jdu")||"");return a||(a=Math.round(1e12*Math.random())),(a.toString(36)+"."+(new Date).getTime().toString(36)).split("").reverse().join("")},c.getQueryString=function(b,c){var d=new RegExp("(^|\\?|&)"+b+"=([^&]*)(\\s|&|$)","i");var e=c?c:a.location.search;return d.test(e)?RegExp.$2:""},String.prototype.isEmpty=function(){return 0==this.length},c.textSelect=function(a,b,c){if("string"==typeof a&&(a=document.getElementById(a)),a){var d=1*b,e=1*c,f=a.value.length;if(f)if(d||(d=0),e||(e=f),d>f&&(d=f),0>d&&(d=f+d),0>e&&(e=f+e),a.createTextRange){var g=a.createTextRange();g.moveStart("character",-f),g.moveEnd("character",-f),g.moveStart("character",d),g.moveEnd("character",e),g.select()}else a.setSelectionRange(d,e),a.focus()}},c.getSelectText=function(a){return document.selection?document.selection.createRange().text:a?a.value.substring(a.selectionStart,a.selectionEnd):""};var d='<a style="color:#005AA0" onclick="$o.del(event)">\u5220\u9664</a>';var e="\u641c\u7d22\u5386\u53f2",f="\u7ea6#{amount}\u4e2a\u5546\u54c1",g='history="1"',h='style="color:#005AA0"';var i='<li id="d_#{id}" suggest-pos="#{suggest_pos}" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></li>';var j='<li class="brand-search"><div id="d_#{id}" class="info J_shop_box" style="cursor:default;">#{guide}</div>#{categorys}</li>';var k='<li class="fore1"><div id="d_#{id}" suggest-pos="#{suggest_pos}" class="fore1" title="#{title}" onclick="$o.clickItem(this)" #{history_mark}><div class="search-item" #{history_style}>#{keyword}</div><div class="search-count">#{search_count}</div></div>#{categorys}</li>';var l='<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" cid="#{cid}" cLevel="#{cLevel}" onclick="$o.clickItem(this)"><div class="search-item">\u5728<strong>#{cname}</strong>\u5206\u7c7b\u4e2d\u641c\u7d22</div><div class="search-count">\u7ea6#{amount}\u4e2a\u5546\u54c1</div></div>';var n='<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" gp="1" onclick="$o.clickItem(this)"><div class="search-item">\u5728<strong> \u5168\u7403\u8d2d </strong>\u4e2d\u641c\u7d22</div><div class="search-count">\u7ea6#{amount}\u4e2a\u5546\u54c1</div></div>';var o='<div id="d_#{id}" suggest-pos="#{suggest_pos}" class="#{className}" title="#{title}" act="#{act_value}" onclick="$o.clickItem(this)"><div class="search-item">\u5728#{act_name}\u4e2d\u641c\u7d22</div><div class="search-count">\u7ea6#{amount}\u4e2a\u5546\u54c1</div></div>';var p='<div id="d_#{id}" class="bs-item J_shop_box"><a class="logo" href="//mall.jd.com/index-#{shop_id}.html"><img width="90" height="30" src="#{shop_logo}"/></a><a class="name" href="//mall.jd.com/index-#{shop_id}.html">#{shop_name}</a></div>';var q=c.genPvid();var r="//dd-search.jd.com/?ver=2&zip=1&key=#{keyword}&pvid="+q+"&t=#{time}";var s="#FFDFC6";var t="#FFF";var u=$("#shelper");var v=null!=navigator.userAgent.toLowerCase().match(/chrome/);r+=function(){var d="&curr_url="+encodeURIComponent(a.location.host+a.location.pathname),e="";if(a.QUERY_KEYWORD&&(d+="&search_key="+encodeURIComponent(a.QUERY_KEYWORD)),a.pageConfig&&a.pageConfig.product&&a.pageConfig.product.cat)e="&cid1="+(a.pageConfig.product.cat[0]||""),e+="&cid2="+(a.pageConfig.product.cat[1]||""),e+="&cid3="+(a.pageConfig.product.cat[2]||"");else if("list.jd.com"==a.location.host)if(a.pageConfig&&a.pageConfig.queryParam)e="&cid1="+(a.pageConfig.queryParam.c1||""),e+="&cid2="+(a.pageConfig.queryParam.c2||""),e+="&cid3="+(a.pageConfig.queryParam.c3||"");else{var f=decodeURIComponent(c.getQueryString("cat")).split(",");e="&cid1="+(f[0]||""),e="&cid2="+(f[1]||""),e="&cid3="+(f[2]||"")}return d+e}(a.location.href);function w(){this.length=0,this.index=-1,this.iLastModified=0,this.lastKeyword=!1,this.keep_keyword="",this.pvid=q,this.enable_remind=!0,this.IME=!1}w.prototype.init=function(){this.length=0,this.index=-1,this.version=0,search.additinal=""},w.prototype.hideTip=function(){this.init(),this.lastKeyword=!1;var a=c.getSelectText(b[0]);this.keep_keyword&&a&&this.keep_keyword+a==b.val()&&b.val(this.keep_keyword),u.html("").hide()},w.prototype.clickItem=function(a){var c=a.getAttribute("cid"),d="&suggest="+a.getAttribute("suggest-pos")+"."+this.version;search.cid=null!=c&&""!=c?c:null;var e=a.getAttribute("cLevel");search.cLevel=null!=e&&""!=e?e:null;var f=a.getAttribute("title");null==f||$.trim(f).isEmpty()||b.val(f),null!==a.getAttribute("pm_type")&&(d+="&prom_type=0"),null!==a.getAttribute("gp")&&(d+="&gp=1"),null!==a.getAttribute("act")&&(d+=a.getAttribute("act")),search.additinal=d,search("key")},w.prototype.mouseenter=function(a){var a=$(a);a.attr("history")&&a.find(".search-count").html(d),a.hasClass("J_shop_box")?a.find(".name").css("text-decoration","underline"):a.css("background",s);var b=a.attr("id").split("_"),c=parseInt(b[1],10);if(c!=this.index){if(this.index>-1){var f=$("#d_"+this.index);f.css("background",t),f.attr("history")&&f.find(".search-count").html(e),f.hasClass("J_shop_box")&&f.find(".name").css("text-decoration","none")}this.index=c}},w.prototype.mouseleave=function(a){a.css("background",t),a.attr("history")&&a.find(".search-count").html(e)},w.prototype.selectItemNode=function(a){var c=this,f=$("#d_"+c.index+":visible");f.css("background-color",t),f.attr("history")&&f.find(".search-count").html(e),f.hasClass("J_shop_box")&&f.find(".name").css("text-decoration","none"),-1==c.index&&-1==a&&(a=0),c.index=(c.length+c.index+a)%c.length;var g=$("#d_"+c.index),h="&suggest="+g.attr("suggest-pos")+"."+c.version;if(g.length>0){g.attr("history")&&g.find(".search-count").html(d),g.hasClass("J_shop_box")?g.find(".name").css("text-decoration","underline"):g.css("background-color",s);var i=g.attr("title");null==i||$.trim(i).isEmpty()||b.val(i);var j=g.attr("cid");search.cid=null!=j&&""!=j?j:null;var k=g.attr("cLevel");search.cLevel=null!=k&&""!=k?k:null,"undefined"!=typeof g.attr("pm_type")&&(h+="&prom_type=0"),"undefined"!=typeof g.attr("gp")&&(h+="&gp=1"),"undefined"!=typeof g.attr("act")&&(h+=g.attr("act")),search.additinal=h}},w.prototype.input=function(){var a=this;a.timeoutId&&clearTimeout(a.timeoutId),a.timeoutId=setTimeout(function(){var d=$.trim(b.val());if(d===a.lastKeyword||!(d||readCookie("_pst")||readCookie("_tp")))return!1;a.lastKeyword=d;var e=c.replace(r,{keyword:encodeURIComponent(d),time:(new Date).getTime()});$.ajax({url:e,dataType:"jsonp",scriptCharset:"utf-8",jsonp:"callback",cache:!0,success:function(b){return function(c){a.iLastModified>b||(a.iLastModified=b,c&&a.onloadItems(c))}}((new Date).getTime())})},150)},w.prototype.keydown_up=function(c){var d=this;var e=c||a.event;0==b.length&&(b=$("#key")),0==u.length&&(u=$("tie"));var f=e.keyCode;switch(f){case 38:d.selectItemNode(-1);break;case 40:d.selectItemNode(1);break;case 27:d.hideTip();break;case 37:break;case 39:break;default:d.IME=229==f,8==f||46==f?d.disableRemind():d.enable_remind=!0,$.browser.mozilla||d.input()}},w.prototype.onloadItems=function(d){if(0==d.length)return this.hideTip(),!1;this.init();{var q=this,r=a.pageConfig&&a.pageConfig.searchType?a.pageConfig.searchType:0,s=1,t=sCategoriesHtml="",v=iLen=iItemLen=0,w=d.length,x=$.trim(b.val());x.toUpperCase()}for(d[w-1]&&d[w-1].version&&(q.version=d[w-1].version);w>v;v++){var z=d[v];if(z.rem&&q.remindKey(z.rem.rei,z.rem.req),!(!z||!z.key&&!z.sho||z.sho&&0!=iItemLen||z.key==x&&0!=iItemLen)){var A=$.trim(z.key),B=z.his?e:c.replace(f,{amount:z.qre}),C=z.his?g:"",D=z.his?h:"",E=A.indexOf(x),F=A;if(x.length&&0==E&&!z.his&&(F=x+"<strong>"+A.substring(E+x.length)+"</strong>"),0==iItemLen){if(z.sho){if("object"==typeof z.sho&&z.sho.length&&z.sho[0].sid){var G=z.sho[0];sCategoriesHtml+=c.replace(p,{id:++iLen,shop_id:G.sid,shop_name:G.sna,shop_logo:"//img30.360buyimg.com/n1/s90x30_"+G.spi}),t+=c.replace(j,{id:0,guide:G.ssq,categorys:sCategoriesHtml}),iItemLen++}continue}if((0==r||1==r)&&(z.acq&&z.acu&&(sCategoriesHtml+=c.replace(o,{id:++iLen,title:A,className:"item1",act_name:z.acp?'<img src="//img11.360buyimg.com/img/'+z.acp+'">':"<strong> "+z.acq+" </strong>",act_value:z.acu,amount:z.acc,suggest_pos:s+".acq.0"})),z.wor&&(sCategoriesHtml+=c.replace(n,{id:++iLen,title:A,className:"item1",amount:z.wor,suggest_pos:s+".wor.0"}))),z.ci&&z.ci.length>0)for(var H=0,I=z.ci.length;I>H;H++){var J=z.ci[H].cid;if(0==r){if("string"==typeof J&&/^[1-8]4$/.test(J))continue}else if(5==r){if("string"==typeof J&&!/^[5-8]2$/.test(J))continue}else if(1==r||2==r||3==r||4==r)continue;sCategoriesHtml+=c.replace(l,{id:++iLen,title:A,cid:J,cLevel:z.ci[H].cle,className:"item1",cname:z.ci[H].cna,amount:z.ci[H].cre,suggest_pos:s+".cid."+(H+1)})}0==iLen&&(iLen=-1)}t+=0==iItemLen&&iLen>0?c.replace(k,{id:0,title:A,keyword:F,suggest_pos:s++ +(z.his?".his.0":".def.0"),categorys:sCategoriesHtml,search_count:B,history_mark:C,history_style:D}):c.replace(i,{id:++iLen,title:A,keyword:F,suggest_pos:s++ +(z.his?".his.0":".def.0"),search_count:B,history_mark:C,history_style:D}),iItemLen++}}q.length=++iLen,""!=t?(t+='<li class="close" onclick="$o.hideTip()">\u5173\u95ed</li>',u.html(t).show(),u.find('[id^="d_"]').bind("mouseleave",function(){q.mouseleave($(this))}).bind("mouseenter",function(){q.mouseenter($(this))})):u.html("").hide()},w.prototype.disableRemind=function(){search.additinal="&suggest=1.rem.0."+this.version,this.enable_remind=!1},w.prototype.remindKey=function(a,d){b.val()==a&&this.enable_remind&&(v&&this.IME&&/\w/.test(a.substr(-1))||(b.val(d),this.keep_keyword=a,search.additinal="&suggest=1.rem.1."+this.version,c.textSelect("key",a.length)))},w.prototype.bind_input=function(){$.browser.mozilla?(b.bind("keydown",function(a){x.keydown_up(a)}),b.bind("input",function(a){x.input(a)})):b.bind("keydown",function(a){x.keydown_up(a)}),b.focus(function(){setTimeout(function(){x.input()},10)}),u.parent().bind("mouseenter",function(){x.e_position=!0,x.timeoutId&&clearTimeout(x.timeoutId)}).bind("mouseleave",function(){x.e_position=!1,x.timeoutId=setTimeout(function(){x.hideTip()},500)}),$(document).click(function(){x.e_position||x.hideTip()})},w.prototype.del=function(c){var d=this;c=c?c:a.event,a.event?(c.cancelBubble=!0,c.returnValue=!1):(c.stopPropagation(),c.preventDefault());var e=$(c.srcElement?c.srcElement:c.target),f=e.parent().parent().attr("title");$.ajax({url:"//search.jd.com/suggest.php?op=del&callback=?&key="+encodeURIComponent(f),dataType:"jsonp",scriptCharset:"utf-8",beforeSend:function(){e.parents("li").hide()},success:function(){d.lastKeyword=!1,b.focus()}})};var x=new w;return x.bind_input(),x}}(window);