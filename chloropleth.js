!function(n){function r(t){if(e[t])return e[t].exports;var f=e[t]={exports:{},id:t,loaded:!1};return n[t].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}var e={};return r.m=n,r.c=e,r.p="",r(0)}([function(n,r,e){var t=e(31),f=e(12),u={defaults:e(26),extend:e(27)};t.choropleth=n.exports=function(n,r){r=r||{},u.defaults(r,{valueProperty:"value",scale:["white","red"],steps:5,mode:"q"});var e=r.style,a=n.features.map(function(n){return"function"==typeof r.valueProperty?r.valueProperty(n):n.properties[r.valueProperty]}),o=f.limits(a,r.mode,r.steps-1),c=r.colors||f.scale(r.scale).colors(r.steps);return t.geoJson(n,u.extend(r,{limits:o,colors:c,style:function(n){var t,f={};if(t="function"==typeof r.valueProperty?r.valueProperty(n):n.properties[r.valueProperty],!isNaN(t))for(var a=0;a<o.length;a++)if(t<=o[a]){f.fillColor=c[a];break}switch(typeof e){case"function":return u.extend(e(),f);case"object":return u.extend(e,f);default:return f}}}))}},function(n,r){function e(n){return"number"==typeof n&&n>-1&&n%1==0&&t>=n}var t=9007199254740991;n.exports=e},function(n,r){function e(n){var r=typeof n;return!!n&&("object"==r||"function"==r)}n.exports=e},function(n,r,e){function t(n){return null!=n&&u(f(n))}var f=e(21),u=e(1);n.exports=t},function(n,r){function e(n,r){return n="number"==typeof n||t.test(n)?+n:-1,r=null==r?f:r,n>-1&&n%1==0&&r>n}var t=/^\d+$/,f=9007199254740991;n.exports=e},function(n,r){function e(n){return!!n&&"object"==typeof n}n.exports=e},function(n,r){function e(n,r){if("function"!=typeof n)throw new TypeError(t);return r=f(void 0===r?n.length-1:+r||0,0),function(){for(var e=arguments,t=-1,u=f(e.length-r,0),a=Array(u);++t<u;)a[t]=e[r+t];switch(r){case 0:return n.call(this,a);case 1:return n.call(this,e[0],a);case 2:return n.call(this,e[0],e[1],a)}var o=Array(r+1);for(t=-1;++t<r;)o[t]=e[t];return o[r]=a,n.apply(this,o)}}var t="Expected a function",f=Math.max;n.exports=e},function(n,r,e){function t(n,r){var e=null==n?void 0:n[r];return f(e)?e:void 0}var f=e(25);n.exports=t},function(n,r,e){function t(n){return u(n)&&f(n)&&o.call(n,"callee")&&!c.call(n,"callee")}var f=e(3),u=e(5),a=Object.prototype,o=a.hasOwnProperty,c=a.propertyIsEnumerable;n.exports=t},function(n,r,e){var t=e(7),f=e(1),u=e(5),a="[object Array]",o=Object.prototype,c=o.toString,i=t(Array,"isArray"),l=i||function(n){return u(n)&&f(n.length)&&c.call(n)==a};n.exports=l},function(n,r,e){var t=e(14),f=e(15),u=e(19),a=u(function(n,r,e){return e?t(n,r,e):f(n,r)});n.exports=a},function(n,r,e){var t=e(7),f=e(3),u=e(2),a=e(23),o=t(Object,"keys"),c=o?function(n){var r=null==n?void 0:n.constructor;return"function"==typeof r&&r.prototype===n||"function"!=typeof n&&f(n)?a(n):u(n)?o(n):[]}:a;n.exports=c},function(n,r,e){var t,f;(function(n){/**
	 * @license
	 *
	 * chroma.js - JavaScript library for color conversions
	 * 
	 * Copyright (c) 2011-2015, Gregor Aisch
	 * All rights reserved.
	 * 
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 * 
	 * 1. Redistributions of source code must retain the above copyright notice, this
	 *    list of conditions and the following disclaimer.
	 * 
	 * 2. Redistributions in binary form must reproduce the above copyright notice,
	 *    this list of conditions and the following disclaimer in the documentation
	 *    and/or other materials provided with the distribution.
	 * 
	 * 3. The name Gregor Aisch may not be used to endorse or promote products
	 *    derived from this software without specific prior written permission.
	 * 
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	
