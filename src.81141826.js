parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
function e(e){document.querySelector("#city").innerHTML=e.data.name,document.querySelector("#temperature").innerHTML=Math.round(e.data.main.temp),document.querySelector("#humidity").innerHTML=e.data.main.humidity,document.querySelector("#wind").innerHTML=Math.round(e.data.wind.speed),document.querySelector("#description").innerHTML=e.data.weather[0].main}function t(t){var n="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("702fe62f2fbce5e579315224a6920257","&units=metric");axios.get(n).then(e)}function n(e){e.preventDefault(),t(document.querySelector("#city-input").value)}function r(t){var n="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude,"&appid=").concat("702fe62f2fbce5e579315224a6920257","&units=metric");axios.get(n).then(e)}function a(e){e.preventDefault(),navigator.geolocation.getCurrentPosition(r)}var c=document.querySelector("#search-form");c.addEventListener("submit",n);var o=document.querySelector("#current-location-button");function u(e){var t=e.getHours();t<10&&(t="0".concat(t));var n=e.getMinutes();n<10&&(n="0".concat(n));var r=e.getDay();return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][r]," ").concat(t,":").concat(n)}function i(e){e.preventDefault();var t=document.querySelector("#city"),n=document.querySelector("#city-input");t.innerHTML=n.value}function d(e){e.preventDefault(),document.querySelector("#temperature").innerHTML=66}function l(e){e.preventDefault(),document.querySelector("#temperature").innerHTML=19}o.addEventListener("click",a),t("New York");var m=document.querySelector("#date"),y=new Date;m.innerHTML=u(y);var p=document.querySelector("#fahrenheit-link");p.addEventListener("click",d);var s=document.querySelector("#celsius-link");s.addEventListener("click",l);
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-mdnn1/src.81141826.js.map