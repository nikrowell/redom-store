!function(a,b){typeof exports==='object'&&typeof module!=='undefined'?module.exports=b():typeof define==='function'&&define.amd?define(b):(a['redom-store']=b())}(this,(function(){'use strict';var a=function a(){this.data={}};a.prototype.get=function b(a){if(!a){return this.data}var c=a.split('.'),d=this.data;for(var e=0;e<c.length;e++){var f=c[e];if(f in d)d=d[f];else{return}}return d};a.prototype.set=function c(a,b){var d=a.split('.'),e=this.data=Object.assign({},this.data);for(var f=0;f<d.length;f++){var g=d[f];f===d.length-1?(e[g]=b):(e=e[g]=Object.assign({},e[g]))}};return a}))