parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KAEt":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,o){"function"==typeof e&&e.amd?e([],o):"undefined"!=typeof exports?o():(o(),t.FileSaver={})}(this,function(){"use strict";function e(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){i(n.response,t,o)},n.onerror=function(){console.error("could not download file")},n.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof t&&t.global===t?t:void 0,i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(t,i,r){var c=a.URL||a.webkitURL,s=document.createElement("a");i=i||t.name||"download",s.download=i,s.rel="noopener","string"==typeof t?(s.href=t,s.origin===location.origin?n(s):o(s.href)?e(t,i,r):n(s,s.target="_blank")):(s.href=c.createObjectURL(t),setTimeout(function(){c.revokeObjectURL(s.href)},4e4),setTimeout(function(){n(s)},0))}:"msSaveOrOpenBlob"in navigator?function(t,a,i){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(t,i),a);else if(o(t))e(t,a,i);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout(function(){n(r)})}}:function(t,o,n,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,o,n);var r="application/octet-stream"===t.type,c=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||r&&c)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},l.readAsDataURL(t)}else{var u=a.URL||a.webkitURL,f=u.createObjectURL(t);i?i.location=f:location.href=f,i=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});a.saveAs=i.saveAs=i,"undefined"!=typeof module&&(module.exports=i)});
},{}],"Focm":[function(require,module,exports) {
var e=require("file-saver");function a(a,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/json;charset=utf-8",t=new Blob([o],{type:r});e.saveAs(t,a)}module.exports=a;
},{"file-saver":"KAEt"}]},{},["Focm"], "writeFile")
//# sourceMappingURL=/writeFile.js.map