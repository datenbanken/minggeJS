/*  MingGeJs类库1.9.1(Min版本)
 *  
 *  你会用JQUERY，那你也会用这个类库，因为语法都是一样的,那有开发文档吗？和JQUERY一样，要开发文档干嘛？
 *
 *  MingGeJs的运行绝对比JQUERY快，因为够精简，MingGejs是你的最佳选择，请多多支持，
 *
 *  作者：明哥先生-QQ399195513 QQ群：461550716 官网：www.shearphoto.com
 */
!function(a,b,c){var d,e,f,g,h,i,j="1.9.1",k="readystatechange",l="on"+k,m="[object Object]",n="[object Array]",o="getElementById",p="getElementsByTagName",q="getElementsByClassName",r="querySelectorAll",s="documentElement",t="#MingGe#NotNode",u="MingGeAnimate",v="MingGeBind",w="mingGeAnimateList",x="isMingGeAnimate",y=document,z=a.setTimeout,A=encodeURIComponent,B=y.createElement("div"),C=!!y[q],D=!!y[r],E=function(){},F=Array.prototype.slice,G=Object.prototype.toString,H=/^(?:#([\w\u00c0-\uFFFF\-]+)|(\w+)|\.([\w\u00c0-\uFFFF\-]+))$/,I=/^\[\s?([\w\u00c0-\uFFFF\-]+)\s?(?:=\s?[\"\'](.+?)[\"\']\s?)?\]$/,J=/[^\,]+/g,K=/[^\s]+/g,L=/^[\w\u00c0-\uFFFF\-]+/,M={"class":"className",id:"id",value:"value",checked:"checked",disabled:"disabled",readonly:"readonly"},N={checked:1,disabled:1,readonly:1,value:1},O=/input|button|textarea|select|option/i,P={fast:200,slow:600,normal:400},Q=function(a){try{return a.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")}catch(b){return a}},R=function(a,b){return lb.isObjArr(a)&&lb.isObjArr(b)&&lb.each(b,function(b,c){a[b]=c}),a},S=/alpha\([^)]*\)/,T=/^\s*(matrix3d|translate3d|translateX|translateY|translateZ|scale3d|scaleX|scaleY|scaleZ|rotate3d|rotateX|rotateY|rotateZ|perspective|matrix|translate|translateX|translateY|scale|scaleX|scaleY|rotate|skew|skewX|skewY)\s*$/i,U=function(a){a=a.toLowerCase();var b=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},V=function(b){lb.each.call(this.nodeList,function(){var c,d,e,g=f.getElem(this,v+f.key,[b]);if(lb.isArray(g))for(e=g.length-1;e>-1;e--)c=g[e],lb.isObject(c)&&lb.isFunction(d=c.callback)&&(f.removeEvent(this,b,{isOne:!0,callback:d}),d.call(this,a.event))})},W=function(a){var b=H.exec(a),c=!1;return null===b?(b=a.match(I))&&(c=[null,null,b,{Attr:!0}]):c=b[1]?[o,"id",b[1],{Id:!0}]:b[2]?[p,"tagName",b[2],{Tag:!0}]:[q,"className",b[3],{Class:!0}],c},X=function(a){return a.replace(/[\t\r\n\f\v]/g,function(a){return{"\t":"\\t","\r":"\\r","\n":"\\n","\f":"\\f","\v":"\\v"}[a]}).replace(/[\x00-\x1f\x7f-\x9f\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,function(a){return"\\u"+("000"+a.charCodeAt(0).toString(16)).slice(-4)}).replace(/\\([\}\]])/g,function(a,b){return b})},Y=function(a){return a.replace(/[\]\}\"\\\/]/g,function(a){return"\\"+a})},Z=function(a){var b=0,c=[];if(a.item||lb.isArray(a))for(;b<a.length;b++)-1==lb.inArray(a[b],c)&&c.push(a[b]);return c},$=function(a,b){var c,d,e,f,g,h,i,j,k,l;if(b?(d="s",g=" ",e="<<@>>",f=K):(d=g=",",e="<<，>>",f=J),h=new RegExp("\\[[^\\[\\]]*(\\"+d+")[^\\[\\]]*\\]","g"),i=new RegExp("\\"+d,"g"),j=new RegExp(e,"g"),a=a.replace(h,function(a){return c=!0,a.replace(i,e)}),k=a.match(f),k&&c)for(l=0;l<k.length;l++)k[l]=k[l].replace(j,g);return k},_=function(a){var b,a=a.replace(/((?:\[[^\[\]]+\])+)([\w\u00c0-\uFFFF\-]+)/g,function(a,c,d){return b=!0,"<<<"+d+">>>"+c});return b?(a=a.replace(/([\.#]?[\w\u00c0-\uFFFF\-]+)<<<(.+?)>>>/g,function(a,b,c){return/^\w/.test(b)?b.toLowerCase()==c.toLowerCase()?b:t:c+b}).replace(/(<<<|>>>)/g,""),_(a)):a},ab=function(a,b){var c,d,e,f;if(!/^\w/.test(b))return a+b;if(c=$(a,!0)){if(d=c.length-1,e=c[d].match(L),!e)return c[d]=b+c[d],c.join(" ");if(f=b.match(L),e[0].toLowerCase()==f[0].toLowerCase())return b=b.replace(L,""),a+b}return t},bb=function(a,b,c){var d,e,f,g,h,i=$(a),j=$(b);if(i&&j){for(e="",f=" "==c,g=0;g<i.length;g++)for(d=i[g]+c,h=0;h<j.length;h++)e+=f?d+j[h]+",":ab(d,j[h])+",";return""==e?t:e.replace(/,+$/,"")}},cb=function(a,b,c,d,e){if("000"===a.queryTwo)return-1;if(lb.isElem(a.queryOne)){if(d)return-1;var f,g="#"+(a.queryOne.id||(f=!0,a.queryOne.id="tempMingGeId2015")),h=b.queryTwo=lb.isString(a.queryTwo)?bb(a.queryTwo,c,e):c,i=bb(g,h,e);return b.nodeList=ib(a.queryOne[r](i)),b.queryOne=a.queryOne,f&&a.queryOne.removeAttribute("id"),b}},db=function(b,c,d,e){var f,g,h,i,j,k;try{if(b=_(b),d){if(c.queryOne==a)return e;if(c.queryOne==y)return d.find?lb(b):e;if(c.queryOne&&b){if(h=d.filter,i=h?"":" ",g=cb(c,e,b,h,i))return g;f=bb(c.queryOne,b,i)}e.nodeList=ib(y[r](f)),e.queryOne=f}else k=/^#([\w\u00c0-\uFFFF\-]+)$/.exec(b),e.nodeList=k?(j=y[o](k[1]))?[j]:[]:ib(y[r](b)),e.queryOne=b}catch(l){console.log(l.message)}return e},eb=function(a,b,c){var d,e,f,g,h,i=new lb;if(lb.isString(a)){if(a=Q(a),D&&-1!=(d=db(a,b,c,i)))return d;if(e=$(a),f=[],e){if(g=e.length,1===g)return i=fb(e[0],b,c),i.nodeList=Z(i.nodeList),i;for(h=0;g>h;h++)f=f.concat(fb(e[h],b,c).nodeList);return i.nodeList=Z(f),i}return i}return c?i:i.init(a||0,y)},fb=function(a,b,c){var d,e,f=$(a,!0);if(f){if(d=f.length,c&&c.filter&&d>1)return new lb;for(e=0;d>e;e++)b=gb(f[e],e,b,c)}return b},gb=function(a,b,c,d){var e,f=a.match(/(\[.+?\]|[\.#]?([\w\u00c0-\uFFFF\-]+))/g);if(f)for(e=0;e<f.length;e++)c=0==b?0==e?d?d.find?hb.find.call(c,f[0]):hb.filter.call(c,f[0]):(new lb).init(f[0],y):hb.filter.call(c,f[e]):0==e?hb.find.call(c,f[0]):hb.filter.call(c,f[e]);return c},hb={setAttr:function(a,b,c){var d,e=M[b.toLowerCase()];e&&(!N[e]||(d=a.tagName)&&O.test(d))?a[e]=c:a.setAttribute&&a.setAttribute(b,c)},getAttr:function(a,b){var c,d=M[b.toLowerCase()];return d&&(!N[d]||(c=a.tagName)&&O.test(c))?""===a[d]?null:a[d]:a.getAttribute&&a.getAttribute(b)},show:function(a){"none"==a.style.display?(a.style.display="","none"==hb.original(a,"display")&&(a.style.display=hb.getDisplay(a.tagName))):a.style.display=hb.getDisplay(a.tagName)},createKey:function(a){return lb.isTxt(a)||(a=""),a+Math.random().toString().slice(2)},attrSelect:function(a,b,c){for(var d,e,f=a[1],g=a[2],h=0;d=c[h++];)e=hb.getAttr(d,f),null!==e&&e!==!1&&(g&&String(e)==g||!g)&&b.nodeList.push(d)},forEve:function(a,b,c,d,e,g){var h,i,j;hb.fnFunc("bindFn",b,[a,c,d,g])||(e?(i=e,h=this.mouse(c,d,b)):(i=b,h=c),j={},j[i]=this.bindCallback.call(a,h,i,d,e,g),f.writeEvent(a,b,{isOne:d,callback:c,event:j}))},bindCallback:function(b,c,d,e,g){var i=this;return function(j){j||(j=a.event),hb.runCallback(i,j,g,h.add?j.target:j.srcElement,b,e&&i)&&d&&!e&&f.removeEvent(i,c,{callback:b})}},isMouse:function(a){var b={mouseenter:"mouseover",mouseleave:"mouseout"}[a];return b||null},mouse:function(b,c,d){return function(e,g){for(var i=e[h.add?"relatedTarget":"mouseenter"==d?"fromElement":"toElement"];i&&i!=this;)try{i=i.parentNode}catch(j){break}i!=this&&this!=a&&this!=y&&(c&&f.removeEvent(g,d,{callback:b}),b.call(this,e))}},runCallback:function(a,b,c,d,e,f){var g,h,i,j=!1;if(c){if(d)for(h=c[1].filter(c[0]).nodeList.concat(c[1].find(c[0]).nodeList),i=0;g=h[i++];)try{(g==d||lb.inArray(d,g.getElementsByTagName(d.tagName))>-1)&&(e.call(g,b,f),j=!0)}catch(k){console.log(k.message)}}else e.call(a,b,f),j=!0;return j},tap:function(b,d){var e,g,h,i,j,k,l,m;this.XY=[],e="doubleTap"==d?"dblclick":"click",g=this,h=b[0],i=b[1],j=b[2]===!0,k=b[3],l=function(b){g.touch(b||a.event,h,i,j,k,d)},m={},m[e]=l,m.touchstart=l,m.touchend=l,f.writeEvent(h,d,{isOne:j,callback:i,event:m}),b=m=c},tapPrototype:{eveTime:0,touch:function(a,b,c,d,e,g){var i,j,k=a.touches,l=!0;if(k){if(k=k[0])return a.preventDefault(),this.XY[0]=k.pageX,this.XY[1]=k.pageY,void 0;if(k=a.changedTouches){if(k=k[0],"doubleTap"==g&&(this.eveTime&&(j=Date.now()-this.eveTime,this.eveTime=0),!j||j>800||0>j))return this.eveTime=Date.now(),void 0;(l=Math.abs(k.pageX-this.XY[0])<30||Math.abs(k.pageY-this.XY[1])<30)&&(i=k.target),this.XY=[]}}else i=h.add?a.target:a.srcElement;l&&hb.runCallback(b,a,e,i,c)&&d&&f.removeEvent(b,g,{isOne:!0,callback:c})}},setScroll_LT:function(a,b){if(d)d[a]=b;else{var c=y[s],e=y.body;c?(c[a]=b,c[a]?d=c:e&&(e[a]=b,e[a]&&(d=e))):e&&(d=e,e[a]=b)}},getScroll_LT:function(a){var b,c,e;return d?d[a]:(b=y[s],c=y.body,b?(e=b[a])?(d=b,e):(e=c&&c[a],e?(d=c,e):0):c?(d=c,c[a]):0)},setS:function(b,c){return lb.isUndefined(c)?hb.getCS.call(this,b,!0):(c=parseFloat(c),lb.isNumber(c)&&lb.each.call(this.nodeList,function(){try{this==a||this==y?hb.setScroll_LT(b,c):this[b]=c}catch(d){console.log(d.message)}}),this)},winWH:function(a){var b=y[s]||y.body||!1,c="scroll"+a,d="client"+a;return b?Math.max(b[c],b[d]):0},getCS:function(b,c){var d=this.nodeList[0];if(d==a||d==y)return c?hb.getScroll_LT(b):(y[s]||y.body||[])[b]||0;try{return d[b]}catch(e){return console.log(e.message),void 0}},getFilter:function(a){var b;return(b=hb.original(a,"filter"))?(b=/opacity\s*=\s*([0-9]+)/.exec(b),b=b?.01*parseInt(b[1]):1):b=1,b},getDisplay:function(a){if(/^(div|ul|p|h1|h2|h3|h4|h5|h6|dd|dt|dl|ol|table|nav|form|hr)$/i.test(a))return"block";if(/^(span|ul|b|a|em|strong|img|label)$/i.test(a))return"inline";if(/^li$/i.test(a))return"list-item";if(/^(input|button|textarea)$/i.test(a))return"inline-block";if("TD"==a)return"table-cell";if("TR"==a)return"table-row";var b=y.createElement(a),c=y.body,d=!1;return c&&(b.style.visibility="hidden",c.appendChild(b),d=hb.original(b,"display"),c.removeChild(b)),d},seachIndex:function(a,b){return a[0]in b?a[0]:a[1]in b?a[1]:!1},isIndex:function(a,b){return a in b},jsonp:function(b){var d,e,f,g,h,i=Q(b.url),j=Q(b.jsonp),k=Q(b.jsonpCallback),l=b.success,m=b.timeout,n=b.error,o=b.data,p=lb.isTxt(j),q=lb.isString(k)?A(e=k):e=hb.createKey("MingGe");try{if(j=p?A(j):"callback",i=i.replace(/([^\?&\\\/]+?)\s*=\s*\?+$/,function(a,b){return d=!0,(p?j:b)+"="+q}),d||(i=lb.urlRevise(i,j+"="+q)),i=lb.urlRevise(i,lb.objToUrl(o)),null==a[e])return lb.isFunction(b.complete)&&b.complete(),g=function(){h&&h[0].removeChild(h[1]),lb.delVar(a,e)},a[e]=function(a){f&&(clearTimeout(f),f=c),lb.isFunction(l)&&l(hb.JsonString.StringToJson(a)||a,"success"),g()},h=lb.createScript(i),m||(m=3e4),f=z(function(){lb.isFunction(n)&&n(505),g()},m),!0}catch(r){lb.isFunction(n)&&n(500)}return!1},fnFunc:function(a,b,c){var d=b&&lb[a][b];return d&&lb.isFunction(d)?(d.apply(lb[a],c),!0):void 0},htmlVal:function(a,b){if(lb.isUndefined(b))return this.nodeList[0]?this.nodeList[0][a]:null;if(!lb.isTxt(b))try{b=b.toString()}catch(c){b=""}return lb.each.call(this.nodeList,function(){hb.isIndex(a,this)&&(this[a]=b)}),this},original:function(b,c){var d=b.currentStyle||a.getComputedStyle(b,null);return d.getPropertyValue?d.getPropertyValue(lb.styleName(c,!0)):d.getAttribute(c)},find:function(a){var b,c,d=0,e=new lb;if(c=kb(a))for(;b=this.nodeList[d++];)jb.call(e,b,c);return e},filter:function(a){var b,c,d,e=0,f=new lb;if(f.queryOne=this.queryOne,c=W(a),!c)return f;if(c[3].Attr)return hb.attrSelect(c[2],f,this.nodeList),f;for(d=new RegExp("(^|\\s)"+c[2]+"(\\s|$)",c[3].Tag&&"i");b=this.nodeList[e++];)d.test(b[c[1]])&&f.nodeList.push(b);return f},animate:function(a,b,d,e){e=Q(e),e=lb.isString(e)&&/^(linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier\s*\(.+\))$/.test(e)?e:"ease-out";var g,h=hb.transition+"TimingFunction",i={},j=this,k=function(){g&&(clearInterval(g),g=c);for(var a,b,e=0;a=j.nodeList[e++];)try{f.getAnimate(a,[x])&&(b=a.style,b[hb.transition]=b[h]=null,d.call(a))}catch(i){console.log(i.message)}};return i[hb.transition]=b+"ms",i[h]=e,this.css(i),z(function(){j.css(a)},5),g=setInterval(hb.timeCompute(Date.now(),b-1,k),5),this},matchSetAttr:function(a,b){var c,d,e,f;if(b&&(d=y.createElement("div"),d.innerHTML="<div "+b+" ></div>",d=d.getElementsByTagName("div")[0])){for(e=b.match(/[\w\u00c0-\uFFFF\-]+\s*=/g),f=0;f<e.length;f++)e[f]=e[f].replace(/\=$/,""),c=hb.getAttr(d,e[f]),null===c||hb.setAttr(a,e[f],c);return!0}},cmdFun:function(a){try{return{"外前":"beforeBegin",beforeBegin:"beforeBegin","外后":"afterEnd",afterEnd:"afterEnd","内前":"afterBegin",afterBegin:"afterBegin"}[a=lb.trim(a)]||"beforeEnd"}catch(b){return"beforeEnd"}},insertHTML:function(a,b){return b=hb.cmdFun(b),a=Q(a),lb.isTxt(a)&&this.each(function(){try{this.insertAdjacentHTML(b,a)}catch(c){console.log(c.message)}}),this},createNode:function(a,b){var c,d,e,f,g=new lb;return lb.isString(a)&&(c=Q(a).match(/^([\w]+)$|\<([\w]+)(.*?)\>(?:(.*)<\/\s*[\w]+\s*\>)?/),c&&(c[1]?f=c[1]:c[2]&&(f=c[2],d=c[3],e=c[4]),b=hb.cmdFun(b),this.each(function(){var a,c=this.parentNode;if(c&&this.insertBefore&&this.appendChild){switch(a=y.createElement(f),b){case"beforeBegin":c.insertBefore(a,this);break;case"afterBegin":this.insertBefore(a,this.firstChild);break;case"afterEnd":c.insertBefore(a,this.nextSibling);break;default:this.appendChild(a)}hb.matchSetAttr(a,d),e&&hb.isIndex("innerHTML",a)&&(a.innerHTML=e),g.nodeList.push(a)}}),g.queryOne=B,g.queryTwo="000")),g},timeCompute:function(a,b,c){return function(){var d=Date.now()-a;(d>b||0>d)&&c()}},ajax:function(){this.erromsg=this.timeout=this.stop=this.xmlhttp=!1,this.transit=!0},ajaxPrototype:{get:function(a,b,c){return this.simplify(a,"get",!0,b,c,2e4,!0)},post:function(a,b,c){return this.simplify(a,"post",!0,b,c,2e4,!1)},getJSON:function(a,b,c){return this.simplify(a,"get",!0,b,c,2e4,!0,/[\?&]+.+\s*=\s*\?/.test(a)?"jsonp":"json")},simplify:function(a,b,c,d,e,f,g,h){if(lb.isFunction(d)){var i=e;e=d,d=i||null}return this.ajax({url:a,type:b,dataType:h,timeout:f,async:c,lock:!0,cache:g,complete:!1,data:d,success:e}),this},Del:function(a,b,c){this.stop!==!0&&(this.delAjaxEve(a),this.delProgress(a),this.timeout&&(clearTimeout(this.timeout),this.timeout=!1),this.erromsg=b,this.transit=!0,lb.isFunction(c.error)&&c.error(b))},handle:function(a,b){if(4==a.readyState){if(this.stop===!0)return;if(this.transit=!0,this.timeout&&(clearTimeout(this.timeout),this.timeout=!1),200==a.status){this.delProgress(a),this.delAjaxEve(a);var c=Q(a.responseText);lb.isFunction(b.success)&&("JSON"==b.dataType&&(c=hb.JsonString.StringToJson(c)||c),b.success(c,"success"))}else this.Del(a,"状态："+a.status,b)}else 0==a.readyState&&this.Del(a,0,b)},delProgress:function(a){var b="progressFunc",c=a[b];c&&(i(a.upload,"progress",c),lb.delVar(a,b))},delAjaxEve:function(a){lb.delVar(a,l)},out:function(a,b){this.delAjaxEve(b),this.delProgress(b),this.transit=!0,this.erromsg=504,this.stop=!0,lb.isFunction(a.error)&&a.error(504)},ajax:function(b){var c,d,e,f,g;if(lb.isString(b.url)){if(this.stop=this.erromsg=!1,b=lb.extend({type:"GET",timeout:2e4,async:!0},b),c=parseFloat(Q(b.timeout)),b.timeout=0/0==c?2e4:c,lb.isString(b.dataType)&&"JSONP"==(b.dataType=Q(b.dataType.toUpperCase())))return hb.jsonp(b)||console.log('Operation failed, please check "jsonpCallback" settings'),void 0;if(!b.lock||this.transit){b.async=b.async===!0,this.transit=!1,lb.isString(b.type)&&(b.type=b.type.toUpperCase()),d=a.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),e=!0,b.data=lb.objToUrl(b.data),lb.isTxt(b.data)?(b.data=Q(b.data),""===b.data&&(b.data=null)):"[object FormData]"==G.call(b.data)?(lb.isFunction(b.progress)&&(d.progressFunc=b.progress,h(d.upload,"progress",b.progress)),e=!1,b.type="POST"):b.data=null,f=b.data,g=this,lb.isFunction(b.complete)&&b.complete(),b.async&&(d[l]=function(){g.handle(d,b)}),b.timeout&&b.async&&(this.timeout=z(function(){g.timeout=!1,g.out(b,d)},b.timeout));try{switch(b.type){case"POST":d.open("POST",b.url,b.async),e&&d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");break;default:d.open("GET",lb.urlRevise(b.url,f),b.async),f=null,b.cache===!0||d.setRequestHeader("If-Modified-Since","0")}d.send(f)}catch(i){return this.Del(d,i,b),void 0}!b.async&&g.handle(d,b)}}}},JsonString:{_json_:null,JsonToString:function(a){try{this._json_=[],this._read_(a,!0);var b=X(this._json_.join("").replace(/,([\}\]])/g,function(a,b){return b}));return this._json_=null,b}catch(c){return console.log("Format does not match, conversion fails"),!1}},StringToJson:function(b,c){if(lb.isString(b)){try{if(null==c&&/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):new Function("return ("+b+")")();if(c){var d=new Function("return ("+b+")")();if(lb.isObjArr(d))return d}}catch(e){console.log(e.message)}return!1}},_addjson_:function(a,b,c){this._json_.push(a==m?b:c)},_addstring_:function(a){var b=typeof a;return"string"===b?'"'+Y(a)+'"':"number"===b&&0/0!=a?a:null==a?"null":"boolean"===b?a.toString():lb.isObjArr(a)?!1:'""'},_read_:function(a,b){var c,d,e=lb.isObjArr(a);if(b&&!e)return console.log("Your incoming is not an array or JSON"),this._json_=null;this._addjson_(e,"{","[");for(c in a)a.hasOwnProperty(c)&&(d=this._addstring_(a[c]),d===!1?(this._addjson_(e,'"'+Y(c)+'":',""),this._read_(a[c])):this._addjson_(e,'"'+Y(c)+'":'+d+",",d+","));b=b?"":",",this._addjson_(e,"}"+b,"]"+b)}},style:function(a,b,c){var d,e,f,g,h,i;return c=lb.isTxt(c)?Q(c):"",T.test(b)?(e=new RegExp(""+b+"\\s?\\((.*)\\)","i"),f=a[hb.transform],c?b+="("+c+")":b="",d=[hb.transform,f?e.test(f)?f.replace(e,b):f+" "+b:b]):"opacity"==b?("opacity"==hb.opacity?(i=parseFloat(c,10),d=["opacity",isNaN(i)?null:i]):(g=a.filter,h="NaN"==parseInt(c,10)+""?"":"alpha(opacity="+100*c+")",d=S.test(g)?["filter",g.replace(S,h)]:["filter",h]),d):[b,c]},ready:function(b){function c(){try{var d=function(){"complete"===y.readyState&&(h(y,k,d),b())},e=a.frameElement}catch(f){return h(y,k,d),void 0}if(null!=e)return h(y,k,d),void 0;try{y[s].doScroll("left")}catch(d){return z(c,13),void 0}b()}var d;lb.isFunction(b)&&(y.addEventListener?(d=function(){y.removeEventListener("DOMContentLoaded",d,!1),b()},y.addEventListener("DOMContentLoaded",d,!1)):c())}},ib=function(a){var b,c;try{return F.call(a)}catch(d){for(b=[],c=0;c<a.length;c++)b[c]=a[c];return b}},jb=function(a,b){var c,d,e,f,g,h;if(b[1][3].Attr)return hb.attrSelect(b[1][2],this,a[p]("*"));if(b[0]||b[1][3].Id&&y===a)return c=b[1][2],d=a[b[1][0]]("MingGeAllelem2015"===c?"*":c),d&&(d=b[1][3].Id?[d]:ib(d),this.nodeList=this.nodeList.concat(d)),void 0;for(f=a[p]("*"),g=0,h=new RegExp("(^|\\s)"+b[1][2]+"(\\s|$)");e=f[g++];)h.test(e[b[1][1]])&&this.nodeList.push(e)},kb=function(a){var b=W(a);return b?[b[3].Tag||C&&b[3].Class,b]:!1},lb=a.MingGe=function(b){return this==a||this.MingGe?eb(b):(this.nodeList=[],void 0)};lb.bindFn={},lb.fn=lb.prototype={version:"你使用的版本是MingGejs"+j,init:function(a,b){var c;return lb.isFunction(a)?(hb.ready(a),this):("object"==typeof a?(this.queryOne=a,this.nodeList=[a]):(c=kb(a))&&jb.call(this,b,c),this)},is:function(a){switch(a=Q(a)){case":animate":return!!f.getAnimate(this.nodeList[0],[x]);case":XXX":return}},offset:function(){var a=this.nodeList[0];return a&&a.getBoundingClientRect?a.getBoundingClientRect():[]},append:function(a){return hb.createNode.call(this,a,"beforeEnd")},insertBefore:function(a){return hb.createNode.call(this,a,"afterBegin")},createNode:hb.createNode,load:function(a,b){if(lb.isFunction(a))return this.bind("load",a);if(lb.isString(a)){var c=this,d=function(a){c.each(function(){var b=hb.seachIndex(["value","innerHTML"],this);b&&(this[b]=a)})};lb[null==b?"get":"post"](a,b,d)}else 0==arguments.length&&V.call(this,"load");return this},insertHTML:hb.insertHTML,stop:function(){return null==hb.transition&&(hb.transition=lb.html5Attribute("transition")),hb.transition?this.each(function(){if(f.getAnimate(this,[x])){f.delAnimate(this);var a=hb.transition+"TimingFunction",b=this.style;b[hb.transition]=b[a]=null}}):this},fadeToggle:function(a,b){return this.each(function(){"none"==hb.original(this,"display")?lb(this).fadeIn(a,b):lb(this).fadeOut(a,b)})},attr:function(a,b){var c,d=this.nodeList[0],e=lb.isUndefined(b);return d?lb.isObject(a)?(lb.each.call(this.nodeList,function(){c=this,lb.each(a,function(a,b){lb.isString(a)&&(lb.isTxt(b)||lb.isBoolean(b))&&hb.setAttr(c,a,b)})}),this):e?lb.isString(a)?hb.getAttr(d,a):null:(lb.isString(a)&&(lb.isTxt(b)||lb.isBoolean(b))&&lb.each.call(this.nodeList,function(){hb.setAttr(this,a,b)}),this):e?null:this},fadeOut:function(a,b){var c=new lb;return null==hb.transition&&(hb.transition=lb.html5Attribute("transition")),this.each(function(){1==this.nodeType&&("none"==hb.original(this,"display")||f.getAnimate(this,[x])||c.nodeList.push(this))}),hb.transition?c.animate({opacity:0},a,function(){lb(this).css({display:"none",opacity:null}),lb.isFunction(b)&&b.call(this)},"ease"):c.css("display","none"),this},hide:function(){return lb.each.call(this.nodeList,function(){1==this.nodeType&&"none"!=hb.original(this,"display")&&(this.style.display="none")}),this},getFormData:function(b,c){var d,e,f,g,h,i,j,k,l,m;if(lb.isString(b)){if(!lb.isFunction(a.FormData))return null;for(c=parseInt(c),h=new FormData,i=lb.isNumber(c),j=this.nodeList,k=0,l=[];k<j.length;k++)if(d=j[k],e=d.files)for(g=e.length,i&&g>c&&(g=c),m=0;g>m;m++)l.push(f=b+"_"+k+"_"+m),h.append(f,e[m]);return{data:h,name:l}}},show:function(){return lb.each.call(this.nodeList,function(){1==this.nodeType&&"none"==hb.original(this,"display")&&hb.show(this)}),this},fadeIn:function(a,b){null==hb.transition&&(hb.transition=lb.html5Attribute("transition"));var c=new lb;return this.each(function(){if(1==this.nodeType&&"none"==hb.original(this,"display")){if(f.getAnimate(this,[x]))return;hb.transition&&lb(this).css("opacity",0),c.nodeList.push(this),hb.show(this)}}),hb.transition&&z(function(){c.animate({opacity:1},a,function(){lb(this).css("opacity",null),lb.isFunction(b)&&b.call(this)},"ease")},5),this},animate:function(a,b,c,d){var e,g,h,i,j,k,l,m,n;if(null==hb.transition&&(hb.transition=lb.html5Attribute("transition")),!hb.transition)return this.css(a),this;if(!lb.isObject(a))return this;for(g=typeof b,("number"!==g||0/0==b)&&("string"===g?(b=Q(b),P[b]?b=P[b]:(b=parseFloat(b),lb.isNumber(b)||(b=500))):("function"===g&&(c=b),b=500)),lb.isFunction(c)||(h=d,d=c,c=lb.isFunction(h)?h:E),e=function(){var a,b,d=f.getAnimate(this,[w]);lb.isArray(d)&&d.length>0?(b=new lb,b.nodeList=[this],a=d[0],d.splice(0,1),hb.animate.apply(b,a)):f.delAnimate(this),c.call(this)},k=0,l=new lb,m=[a,b,e,d];i=this.nodeList[k++];)1==i.nodeType&&(n=f.getAnimate(i),n&&n[x]?n[w]?n[w].push(m):n[w]=[m]:(f.setAnimate(i,[x,1]),l.nodeList.push(i),j||(j=!0)));return j&&hb.animate.apply(l,m),this},empty:function(){return this.each(function(){if(1==this.nodeType){var a=hb.seachIndex(["value","innerHTML"],this);a&&(this[a]="")}})},remove:function(){var a=[];return this.each(function(){try{this.parentNode.removeChild(this),lb(this).unbind().stop()}catch(b){a.push(this)}}),this.nodeList=a,a=null,this},on:function(a,b,c,d){return lb.isFunction(b)&&(d=c,c=b),this.bind(a,c,d,b)},bind:function(a,b,d,e){var f,g,h,i,j=0;if(d=d===!0,e=lb.isString(e)?[e,this]:c,lb.isString(a)&&lb.isFunction(b))for(a=Q(a),g=hb.isMouse(a);f=this.nodeList[j++];)hb.forEve(f,a,b,d,g,e);else if(lb.isObject(a))for(;f=this.nodeList[j++];)for(i in a)h=Q(i),lb.isString(i)&&lb.isFunction(a[i])&&hb.forEve(f,h,a[i],d,hb.isMouse(h),e);return this},unbind:function(a,b){var d,e,g=0,h=typeof a;if("function"==h)b=a,a=c;else if(e=typeof b,"string"!=h&&"undefined"!=h||"function"!=e&&"undefined"!=e)return this;for(a=Q(a);d=this.nodeList[g++];)f.removeEvent(d,a,{callback:b});return this},one:function(a,b){return this.bind(a,b,!0)},queryOne:!1,queryTwo:!1,nodeList:[],ready:function(a){return hb.ready(a),this},parent:function(a){for(var b,c,d=0,e=new lb;b=this.nodeList[d++];)(c=b.parentNode)&&e.nodeList.push(c);return e.nodeList=Z(e.nodeList),e.queryOne=B,e.queryTwo="000",a?e.filter(a):e},addClass:function(a){return lb.isString(a)&&(a=Q(a),this.each(function(){if(1===this.nodeType){var b=this.className||"";b=Z(Q(b+" "+a).split(/\s+/)).join(" "),""==b||(this.className=b)}})),this},hasClass:function(a){var b,c,d;try{if(lb.isString(a))for(c=this.nodeList,a=" "+Q(a)+" ",d=0;d<c.length;d++)if(b=c[d].className,b&&-1!=(" "+b+" ").indexOf(a))return!0}catch(e){console.log(e.message)}return!1},removeAttr:function(a){return lb.isString(a)&&(a=Q(a),this.each(function(){this.removeAttribute&&this.removeAttribute(a)})),this},removeClass:function(a){return lb.isString(a)?(a="("+Q(a).replace(RegExp("\\s+","g"),"|")+")",this.each(function(){if(1===this.nodeType){var b=this.className;if(b)try{this.className=b=Q(b.replace(/\s+/g,"  ").replace(RegExp("(^|\\s)"+a+"($|\\s)","g")," ")),""==b&&(this.removeAttribute?this.removeAttribute("class"):this.className="")}catch(c){console.log(c.message)}}})):lb.isUndefined(a)&&this.each(function(){1===this.nodeType&&this.className&&(this.removeAttribute?this.removeAttribute("class"):this.className="")}),a="",this},children:function(a){return this.find(a||(D?"*":"MingGeAllelem2015"))},find:function(a){return eb(a,this,{find:!0})},filter:function(a){var b=eb(a,this,{filter:!0});return lb.isElem(this.queryOne)&&(!this.queryTwo&&b.nodeList[0]?(b.queryOne=b.nodeList[0],b.queryTwo=!1):b.queryOne=b.queryTwo=!1),b},index:function(b){try{return b?lb.inArray(b.nodeType||b==a?b:b.nodeList[0],this.nodeList):lb.inArray(this.nodeList[0],this.nodeList[0].parentNode[p]("*"))}catch(c){return-1}},eq:function(a){var b=new lb;return b=null==a?this:(a=0>a?this.nodeList.length+a:a,this.nodeList[a]&&(b.nodeList=[b.queryOne=this.nodeList[a]]),b)},size:function(){return this.nodeList.length},each:function(a){if(lb.isFunction(a))for(var b=this.nodeList.length,c=0;b>c;c++)try{a.call(this.nodeList[c],c,b)}catch(d){console.log(d.message)}return this},clientWidth:function(){return hb.getCS.call(this,"clientWidth")},clientHeight:function(){return hb.getCS.call(this,"clientHeight")},scrollWidth:function(){return hb.getCS.call(this,"scrollWidth")},scrollHeight:function(){return hb.getCS.call(this,"scrollHeight")},scrollLeft:function(a){return hb.setS.call(this,"scrollLeft",a)},scrollTop:function(a){return hb.setS.call(this,"scrollTop",a)},val:function(a){return hb.htmlVal.call(this,"value",a)},html:function(a){return hb.htmlVal.call(this,"innerHTML",a)},text:function(a){return hb.htmlVal.call(this,hb.isIndex("textContent",B)?"textContent":"innerText",a)},css:function(a,b){var c,d,e,f,g=0,h={},i=typeof a;if(null==hb.opacity&&(hb.opacity=lb.html5Attribute("opacity")||"filter"),null==hb.transform&&(hb.transform=lb.html5Attribute("transform")),"string"===i){if(a=lb.styleName(Q(a)),lb.isUndefined(b))return(c=this.nodeList[0])&&lb.isElem(c)?T.test(a)?(f=c.style[hb.transform],f?(g=new RegExp(""+a+"\\s?\\((.*)\\)","i").exec(f),g&&g[1]):null):"opacity"!=a&&"filter"!=a||"filter"!=hb.opacity?hb.original(c,a):hb.getFilter(c):null;for(;c=this.nodeList[g++];)try{e=c.style,h=hb.style(e,a,b),e[h[0]]=h[1]}catch(j){console.log(j.message)}}else if(lb.isObject(a))for(;c=this.nodeList[g++];){e=c.style;for(d in a)try{1==g&&(h[d]=hb.style(e,lb.styleName(d),a[d])),e[h[d][0]]=h[d][1]}catch(j){console.log(j.message)}}return this},get:function(a){return null==a?this.nodeList:(a=0>a?this.nodeList.length+a:a,this.nodeList[a])}},lb.fn.extend=lb.extend=lb.bindFn.extend=function(){var a,b,c,d,e=arguments.length;if(1===e&&G.call(arguments[0])===m){for(a in arguments[0])a in this||(this[a]=arguments[0][a]);return!0}if(e>1){for(b=arguments,c=1,d=lb.copyObject(b[0]);e>c;c++)d=R(d,b[c]);return d}return!1},hb.ajax.prototype=hb.ajaxPrototype,lb.extend({data:function(a){return lb.isUndefined?f:new e(a)},copyObject:function(a){if(lb.isObjArr(a)){var b,c=a.constructor();for(b in a)a.hasOwnProperty(b)&&(c[b]=arguments.callee(a[b]));return c}},isObjArr:function(a,b){var c=b||G.call(a);return(lb.isObject(a,c)||c===n)&&c},listNodeToArray:ib,trim:Q,parseJSON:function(a,b){return hb.JsonString.StringToJson(a,b)},toJSON:function(a){return hb.JsonString.JsonToString(a)},setVar:function(c){lb.delVar(a,b),a[c]=lb},isElem:function(a){return!(!a||1!=a.nodeType||!a[p])},isObject:function(a,b){return"object"==typeof a&&(b||G.call(a))==m&&a==m},isArray:function(a,b){return(b||G.call(a))===n},isFunction:function(a,b){return"[object Function]"===(b||G.call(a))},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b)&&null!=a[b])return!1;return!0},createScript:function(a){var b,c=y[p]("head").item(0);return c?(b=y.createElement("script"),lb.isString(a)&&(b.src=a),c.appendChild(b),[c,b]):void 0},post:function(a,b,c){return(new hb.ajax).post(a,b,c)},get:function(a,b,c){return(new hb.ajax).get(a,b,c)},getJSON:function(a,b,c){return(new hb.ajax).getJSON(a,b,c)},ajax:function(a){var b=new hb.ajax;return lb.isObject(a)&&b.ajax(a),b},styleName:function(a,b){try{return b?a.replace(/([A-Z])/g,function(a,b){return"-"+b}):a.replace(/-([a-z])/gi,function(a,b){return b.toUpperCase()})}catch(c){return console.log(c.message),a}},delVar:function(a,b){var d;if(b in a){try{d=delete a[b]}catch(e){}try{d||(a[b]=c)}catch(e){a[b]=E}return!0}return!1},delEmptyOBjArr:function(a){var b,d,e,f=lb.delEmptyOBjArr,g=G.call(a),h=lb.isArray(a,g),i=lb.isObject(a,g);if(h||i){if(b=!0,d=!1,h)for(e=a.length-1;e>-1;e--)b=!1,null==a[e]?(d=!0,a.splice(e,1)):null==(a[e]=f(a[e]))&&(d=!0);else if(i)for(e in a)a.hasOwnProperty(e)&&(b=!1,null==a[e]?(d=!0,lb.delVar(a,e)):null==(a[e]=f(a[e]))&&(d=!0));b?a=c:d&&(a=f(a))}return a},isBoolean:function(a){return"boolean"==typeof a},userAgent:U(navigator.userAgent),isIe:function(){return"msie"===this.userAgent.browser?this.userAgent.version.charAt(0):!1},isTxt:function(a){var b=typeof a;return"string"==b||"number"==b&&0/0!==a},isNumber:function(a){return!(null===a||isNaN(a))},isUndefined:function(a){return"undefined"==typeof a},isString:function(a){return"string"==typeof a},removArray:Z,each:function(a,b){var c,d=0;if(lb.isFunction(a))for(;c=this[d++];)a.call(c);else if(lb.isObjArr(a)&&lb.isFunction(b)){for(d in a)if(a.hasOwnProperty&&a.hasOwnProperty(d))try{b(d,a[d])}catch(e){console.log(e.message)}return!0}return!1},appendIframe:function(b,c){var d,e=y.createElement("iframe"),f=!1;return c||((b==y||b==a)&&(b=y.body),lb.isNumber(b.nodeType)&&(b.appendChild(e),f=!0)),d=e.contentWindow,{elem:e,WIN:d,DOC:d.document,is:f}},objToUrl:function(a){var b="";return lb.each(a,function(a,c){lb.isTxt(c)&&(b+=A(a)+"="+A(c)+"&")}),b.replace(/&+$/,"")},getMobile:function(){var a=navigator.userAgent,b=a.match(/(Android)\s+([\d.]+)/),c=a.match(/(iPad).*OS\s([\d_]+)/),d=!c&&a.match(/(iPhone\sOS)\s([\d_]+)/),e=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),f=(e&&a.match(/TouchPad/),a.match(/Kindle\/([\d.]+)/)),g=a.match(/Silk\/([\d._]+)/),h=a.match(/(BlackBerry).*Version\/([\d.]+)/);return{webkit:"webkit"==this.userAgent.browser,android:b&&b[2],ipad:c&&c[2].replace(/_/g,"."),iphone:d&&d[2].replace(/_/g,"."),webos:e&&e[2],kindle:f&&f[1],silk:g?g[1]:b&&a.match(/Kindle Fire/),blackberry:h&&h[2]}},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},urlRevise:function(a,b){return""!==b&&lb.isTxt(b)&&(a+=/\?/.test(a)?"&"+b:"?"+b),a},window:{},isHtml5:function(){return!!y.createElement("canvas").getContext},_protected:hb,html5Attribute:function(a){var b,c,d,e,f;try{for(b=!1,c=lb.isString(a)?lb.styleName(a):"transform",a=c.replace(/^\w/,a.charAt(0).toUpperCase()),d=B.style,e=[c,"Ms"+a,"Moz"+a,"Webkit"+a,"O"+a],f=0;5>f;f++)if(e[f]in d){b=e[f];break}}catch(g){console.log(g.message)}return b}}),hb.tap.prototype=hb.tapPrototype,lb.bindFn.extend({tap:function(){new hb.tap(arguments,"tap")},doubleTap:function(){new hb.tap(arguments,"doubleTap")}}),e=function(a){var b=G.call(a);(this.isObject=lb.isObject(a,b))||lb.isArray(a,b)?this.dataCache=a:(this.isObject=!0,this.dataCache={})},e.prototype={isObject:null,eachCache:function(a,b,c){for(var d=0;c>d;d++)try{a=a[b[d]]}catch(e){break}return a},searchCache:function(){var a=arguments,b=a.length;return this.eachCache(this.dataCache,a,b)},getElem:function(b,c,d){return b&&(b==a&&(b=lb.window),c=b[c])?(d=lb.isArray(d)?[c].concat(d):[c],this.searchCache.apply(this,d)):void 0},delElem:function(b,c,d,e){var f,g;return b&&(b==a&&(b=lb.window),f=c,c=b[c])?(d=lb.isArray(d)?[c].concat(d):[c],g=this.delCache.apply(this,d),e&&this.delEmpty(),(!this.dataCache[c]||lb.isEmptyObject(this.dataCache[c]))&&lb.delVar(b,f),g):void 0},setElem:function(b,c,d){if(b){if(b==a&&(b=lb.window),!b[c]){var e=hb.createKey();if(this.dataCache[e])return this.setElem.apply(this,arguments);this.dataCache[e]={},b[c]=e}if(lb.isArray(d))return this.setCache.apply(this,[b[c]].concat(d))}},setCache:function(){var a,b=arguments,c=this.dataCache,d=b.length,e=d-2;if(d>1){for(a=0;e>a;a++)lb.isObjArr(c[b[a]])||(c[b[a]]={}),c=c[b[a]];
return c[b[e]]=b[d-1],!0}},delEmpty:function(){return lb.delEmptyOBjArr(this.dataCache)||(this.dataCache=this.isObject?{}:[])},key:hb.createKey(),eventHandle:function(a,b,c){var d,e,f,g=!1,j=b.event;if(lb.isObject(b)&&lb.isObject(j)&&(c==h&&lb.isFunction(b.callback)||c==i))for(f in j)j.hasOwnProperty(f)&&(lb.isArray(j[f])?(d=j[f][1]||a,e=j[f][0]):(d=a,e=j[f]),lb.isFunction(e)&&(g=c(d,Q(f),e)));return g},writeEvent:function(a,b,c){var d,e,f=this.eventHandle(a,c,h);return f&&(d=v+this.key,e=this.getElem(a,d,[b]),lb.isArray(e)?e.push(c):this.setElem(a,d,[b,[c]])),f},forDelEvent:function(a,b,c,d,e){var f,g=!1,h=e.callback,j=e.isOne;for(f=0;f<a.length;f++)if(a[f].callback==h||!h){if(j===!0&&a[f].isOne!==!0)continue;this.eventHandle(b,a[f],i),this.delElem(b,c,[d,f]),g=!0}return g},delAnimate:function(a){return this.delElem(a,u+this.key)},getAnimate:function(a,b){return this.getElem(a,u+this.key,b)},setAnimate:function(a,b){this.setElem(a,u+this.key,b)},removeEvent:function(b,c,d){var e,f,g,h=v+this.key,i=!1;if(lb.isString(c))e=this.getElem(b,h,[c]),lb.isArray(e)&&(i=this.forDelEvent(e,b,h,c,d));else if(f=this.getElem(b,h))for(g in f)f.hasOwnProperty(g)&&lb.isArray(f[g])&&this.forDelEvent(f[g],b,h,g,d)&&(i=!0);return this.delEmpty(),b==a&&(b=lb.window),b[h]&&!this.dataCache[b[h]]&&lb.delVar(b,h),i},delCache:function(){var a=arguments,b=a.length-1,c=this.eachCache(this.dataCache,a,b);return c&&a[b]in c?b=lb.delVar(c,a[b]):void 0}},f=new e({}),lb.each(["width","height","top","left"],function(b,c){lb.fn[c]=function(b,c){return function(d){if(null==d){var e=this.nodeList[0],f="offset"+c;if(!e)return null;if(e==a||e==y){if("Width"==c)return hb.winWH("Width");if("Height"==c)return hb.winWH("Height");if(!(e=y.body))return null}return f in e?e[f]:null}return/^[0-9]+$/.test(d)&&(d+="px"),this.css(b,d)}}(c,c.replace(/^\w/,c.charAt(0).toUpperCase()))}),lb.fn.off=lb.fn.unbind,g=function(a){return function(b,c,d){var e,f="on"+c;if(!(f in b))return!1;if(e=a?["removeEventListener","detachEvent"]:["addEventListener","attachEvent"],b[e[0]])b[e[0]](c,d,!1);else if(b[e[1]])b[e[1]](f,d);else if(a)try{b[f]=null}catch(g){b[f]=E,console.log(g.message)}else b[f]=d;return!0}},h=lb.addEvent=g(),i=lb.delEvent=g(!0),g=c,y.addEventListener?h.add=1:y.attachEvent&&(h.att=1),Date.now||(Date.now=function(){return(new Date).getTime()}),a.console&&console.log||(a.console={log:function(){}}),function(a){for(var b,d=0;b=a[d++];)lb.fn[b]=function(a){return function(b){return lb.isUndefined(b)?(V.call(this,a),this):this.bind(a,b)}}(b);a=d=c}(["blur","focus","focusin","focusout","resize","scroll","unload","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","error","touchstart","touchmove","touchend","touchcancel","tap","doubleTap","input","propertychange"]),a[b]=lb}(window,"$");