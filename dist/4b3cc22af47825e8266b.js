function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}!function(e,t){"function"==typeof define&&define.amd?define(["b"],(function(r){return e.returnExportsGlobal=t()})):"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=t(require("b")):e.OpenLocationCode=t()}(this,(function(){var e={CODE_PRECISION_NORMAL:10,CODE_PRECISION_EXTRA:11},t="23456789CFGHJMPQRVWX",r=20,n=Math.pow(r,4),o=Math.pow(r,3),i=[20,1,.05,.0025,125e-6],a=Math.pow(5,4),u=Math.pow(4,4),f=o*Math.pow(5,5),l=o*Math.pow(4,5);e.getAlphabet=function(){return t};var h=e.isValid=function(e){if(!e||"string"!=typeof e)return!1;if(-1==e.indexOf("+"))return!1;if(e.indexOf("+")!=e.lastIndexOf("+"))return!1;if(1==e.length)return!1;if(e.indexOf("+")>8||e.indexOf("+")%2==1)return!1;if(e.indexOf("0")>-1){if(e.indexOf("+")<8)return!1;if(0==e.indexOf("0"))return!1;var r=e.match(new RegExp("(0+)","g"));if(r.length>1||r[0].length%2==1||r[0].length>6)return!1;if("+"!=e.charAt(e.length-1))return!1}if(e.length-e.indexOf("+")-1==1)return!1;for(var n=0,o=(e=e.replace(new RegExp("\\++"),"").replace(new RegExp("0+"),"")).length;n<o;n++){var i=e.charAt(n).toUpperCase();if("+"!=i&&-1==t.indexOf(i))return!1}return!0},d=e.isShort=function(e){return!!h(e)&&e.indexOf("+")>=0&&e.indexOf("+")<8},s=e.isFull=function(e){return!(!h(e)||d(e)||t.indexOf(e.charAt(0).toUpperCase())*r>=180||e.length>1&&t.indexOf(e.charAt(1).toUpperCase())*r>=360)},p=e.encode=function(n,o,i){if(n=Number(n),o=Number(o),i=void 0===i?e.CODE_PRECISION_NORMAL:Math.min(15,Number(i)),isNaN(n)||isNaN(o)||isNaN(i))throw new Error("ValueError: Parameters are not numbers");if(i<2||i<10&&i%2==1)throw new Error("IllegalArgumentException: Invalid Open Location Code length");n=g(n),o=C(o),90==n&&(n-=M(i));var a="",u=Math.floor(Math.round((n+90)*f*1e6)/1e6),h=Math.floor(Math.round((o+180)*l*1e6)/1e6);if(i>10)for(var d=0;d<5;d++)a=t.charAt(u%5*4+h%4)+a,u=Math.floor(u/5),h=Math.floor(h/4);else u=Math.floor(u/Math.pow(5,5)),h=Math.floor(h/Math.pow(4,5));for(d=0;d<5;d++)a=t.charAt(h%r)+a,a=t.charAt(u%r)+a,u=Math.floor(u/r),h=Math.floor(h/r);return a=a.substring(0,8)+"+"+a.substring(8),i>=8?a.substring(0,i+1):a.substring(0,i)+Array(8-i+1).join("0")+"+"},c=e.decode=function(e){if(!s(e))throw new Error("IllegalArgumentException: Passed Open Location Code is not a valid full code: "+e);e=e.replace("+","").replace(/0/g,"").toLocaleUpperCase("en-US");for(var i=-90*o,h=-180*o,d=0,p=0,c=Math.min(e.length,10),g=n,M=0;M<c;M+=2)i+=t.indexOf(e.charAt(M))*g,h+=t.indexOf(e.charAt(M+1))*g,M<c-2&&(g/=r);var C=g/o,w=g/o;if(e.length>10){var b=a,O=u;for(c=Math.min(e.length,15),M=10;M<c;M++){var x=t.indexOf(e.charAt(M));d+=Math.floor(x/4)*b,p+=x%4*O,M<c-1&&(b/=5,O/=4)}C=b/f,w=O/l}var E=i/o+d/f,N=h/o+p/l;return new m(Math.round(1e14*E)/1e14,Math.round(1e14*N)/1e14,Math.round(1e14*(E+C))/1e14,Math.round(1e14*(N+w))/1e14,Math.min(e.length,15))};e.recoverNearest=function(e,t,r){if(!d(e)){if(s(e))return e.toUpperCase();throw new Error("ValueError: Passed short code is not valid: "+e)}if(t=Number(t),r=Number(r),isNaN(t)||isNaN(r))throw new Error("ValueError: Reference position are not numbers");t=g(t),r=C(r);var n=8-(e=e.toUpperCase()).indexOf("+"),o=Math.pow(20,2-n/2),i=o/2,a=c(p(t,r).substr(0,n)+e);return t+i<a.latitudeCenter&&a.latitudeCenter-o>=-90?a.latitudeCenter-=o:t-i>a.latitudeCenter&&a.latitudeCenter+o<=90&&(a.latitudeCenter+=o),r+i<a.longitudeCenter?a.longitudeCenter-=o:r-i>a.longitudeCenter&&(a.longitudeCenter+=o),p(a.latitudeCenter,a.longitudeCenter,a.codeLength)},e.shorten=function(e,t,r){if(!s(e))throw new Error("ValueError: Passed code is not valid and full: "+e);if(-1!=e.indexOf("0"))throw new Error("ValueError: Cannot shorten padded codes: "+e);e=e.toUpperCase();var n=c(e);if(n.codeLength<6)throw new Error("ValueError: Code length must be at least 6");if(t=Number(t),r=Number(r),isNaN(t)||isNaN(r))throw new Error("ValueError: Reference position are not numbers");t=g(t),r=C(r);for(var o=Math.max(Math.abs(n.latitudeCenter-t),Math.abs(n.longitudeCenter-r)),a=i.length-2;a>=1;a--)if(o<.3*i[a])return e.substring(2*(a+1));return e};var g=function(e){return Math.min(90,Math.max(-90,e))},M=function(e){return e<=10?Math.pow(r,Math.floor(e/-2+2)):Math.pow(r,-3)/Math.pow(5,e-10)},C=function(e){for(;e<-180;)e+=360;for(;e>=180;)e-=360;return e},m=e.CodeArea=function(t,r,n,o,i){return new e.CodeArea.fn.Init(t,r,n,o,i)};return m.fn=m.prototype={Init:function(e,t,r,n,o){this.latitudeLo=e,this.longitudeLo=t,this.latitudeHi=r,this.longitudeHi=n,this.codeLength=o,this.latitudeCenter=Math.min(e+(r-e)/2,90),this.longitudeCenter=Math.min(t+(n-t)/2,180)}},m.fn.Init.prototype=m.fn,e}));