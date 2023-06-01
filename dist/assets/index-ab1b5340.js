var ft=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var mt=ft(exports=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const styles="";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="148",CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,TwoPassDoubleSide=3,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",KeepStencilOp=7680,AlwaysStencilFunc=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let r=0,n=o.length;r<n;r++)o[r].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD$1=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_lut[i&255]+_lut[i>>8&255]+_lut[i>>16&255]+_lut[i>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[s&255]+_lut[s>>8&255]+_lut[s>>16&255]+_lut[s>>24&255]).toLowerCase()}function clamp(i,e,t){return Math.max(e,Math.min(t,i))}function euclideanModulo(i,e){return(i%e+e)%e}function lerp(i,e,t){return(1-t)*i+t*e}function isPowerOfTwo(i){return(i&i-1)===0&&i!==0}function floorPowerOfTwo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function denormalize(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function normalize(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),r=this.x-e.x,n=this.y-e.y;return this.x=r*s-n*o+e.x,this.y=r*o+n*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,s,o,r,n,p,d,l){const u=this.elements;return u[0]=e,u[1]=o,u[2]=p,u[3]=t,u[4]=r,u[5]=d,u[6]=s,u[7]=n,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,r=this.elements,n=s[0],p=s[3],d=s[6],l=s[1],u=s[4],c=s[7],g=s[2],h=s[5],M=s[8],m=o[0],f=o[3],y=o[6],v=o[1],b=o[4],S=o[7],O=o[2],x=o[5],C=o[8];return r[0]=n*m+p*v+d*O,r[3]=n*f+p*b+d*x,r[6]=n*y+p*S+d*C,r[1]=l*m+u*v+c*O,r[4]=l*f+u*b+c*x,r[7]=l*y+u*S+c*C,r[2]=g*m+h*v+M*O,r[5]=g*f+h*b+M*x,r[8]=g*y+h*S+M*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],r=e[3],n=e[4],p=e[5],d=e[6],l=e[7],u=e[8];return t*n*u-t*p*l-s*r*u+s*p*d+o*r*l-o*n*d}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],r=e[3],n=e[4],p=e[5],d=e[6],l=e[7],u=e[8],c=u*n-p*l,g=p*d-u*r,h=l*r-n*d,M=t*c+s*g+o*h;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/M;return e[0]=c*m,e[1]=(o*l-u*s)*m,e[2]=(p*s-o*n)*m,e[3]=g*m,e[4]=(u*t-o*d)*m,e[5]=(o*r-p*t)*m,e[6]=h*m,e[7]=(s*d-l*t)*m,e[8]=(n*t-s*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,r,n,p){const d=Math.cos(r),l=Math.sin(r);return this.set(s*d,s*l,-s*(d*n+l*p)+n+e,-o*l,o*d,-o*(-l*n+d*p)+p+t,0,0,1),this}scale(e,t){return this.premultiply(_m3.makeScale(e,t)),this}rotate(e){return this.premultiply(_m3.makeRotation(-e)),this}translate(e,t){return this.premultiply(_m3.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function createElementNS(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function SRGBToLinear(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function LinearToSRGB(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const FN={[SRGBColorSpace]:{[LinearSRGBColorSpace]:SRGBToLinear},[LinearSRGBColorSpace]:{[SRGBColorSpace]:LinearToSRGB}},ColorManagement={legacyMode:!0,get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(FN[e]&&FN[e][t]!==void 0){const s=FN[e][t];return i.r=s(i.r),i.g=s(i.g),i.b=s(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},_colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_rgb$1={r:0,g:0,b:0},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function toComponents(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Color{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&s===void 0?this.set(e):this.setRGB(e,t,s)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=ColorManagement.workingColorSpace){return this.r=e,this.g=t,this.b=s,ColorManagement.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=ColorManagement.workingColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),s=clamp(s,0,1),t===0)this.r=this.g=this.b=s;else{const r=s<=.5?s*(1+t):s+t-s*t,n=2*s-r;this.r=hue2rgb(n,r,e+1/3),this.g=hue2rgb(n,r,e),this.b=hue2rgb(n,r,e-1/3)}return ColorManagement.toWorkingColorSpace(this,o),this}setStyle(e,t=SRGBColorSpace){function s(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const n=o[1],p=o[2];switch(n){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ColorManagement.toWorkingColorSpace(this,t),s(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ColorManagement.toWorkingColorSpace(this,t),s(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p)){const d=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return s(r[4]),this.setHSL(d,l,u,t)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=o[1],n=r.length;if(n===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ColorManagement.toWorkingColorSpace(this,t),this;if(n===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ColorManagement.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=SRGBColorSpace){const s=_colorKeywords[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),e),clamp(_rgb$1.r*255,0,255)<<16^clamp(_rgb$1.g*255,0,255)<<8^clamp(_rgb$1.b*255,0,255)<<0}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),t);const s=_rgb$1.r,o=_rgb$1.g,r=_rgb$1.b,n=Math.max(s,o,r),p=Math.min(s,o,r);let d,l;const u=(p+n)/2;if(p===n)d=0,l=0;else{const c=n-p;switch(l=u<=.5?c/(n+p):c/(2-n-p),n){case s:d=(o-r)/c+(o<r?6:0);break;case o:d=(r-s)/c+2;break;case r:d=(s-o)/c+4;break}d/=6}return e.h=d,e.s=l,e.l=u,e}getRGB(e,t=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),t),e.r=_rgb$1.r,e.g=_rgb$1.g,e.b=_rgb$1.b,e}getStyle(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb$1),e),e!==SRGBColorSpace?`color(${e} ${_rgb$1.r} ${_rgb$1.g} ${_rgb$1.b})`:`rgb(${_rgb$1.r*255|0},${_rgb$1.g*255|0},${_rgb$1.b*255|0})`}offsetHSL(e,t,s){return this.getHSL(_hslA),_hslA.h+=e,_hslA.s+=t,_hslA.l+=s,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const s=lerp(_hslA.h,_hslB.h,t),o=lerp(_hslA.s,_hslB.s,t),r=lerp(_hslA.l,_hslB.l,t);return this.setHSL(s,o,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Color.NAMES=_colorKeywords;let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const s=_canvas.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),r=o.data;for(let n=0;n<r.length;n++)r[n]=SRGBToLinear(r[n]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(SRGBToLinear(t[s]/255)*255):t[s]=SRGBToLinear(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Source{constructor(e=null){this.isSource=!0,this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let n=0,p=o.length;n<p;n++)o[n].isDataTexture?r.push(serializeImage(o[n].image)):r.push(serializeImage(o[n]))}else r=serializeImage(o);s.url=r}return t||(e.images[this.uuid]=s),s}}function serializeImage(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ImageUtils.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,s=ClampToEdgeWrapping,o=ClampToEdgeWrapping,r=LinearFilter,n=LinearMipmapLinearFilter,p=RGBAFormat,d=UnsignedByteType,l=Texture.DEFAULT_ANISOTROPY,u=LinearEncoding){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.wrapS=s,this.wrapT=o,this.magFilter=r,this.minFilter=n,this.anisotropy=l,this.format=p,this.internalFormat=null,this.type=d,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(e=0,t=0,s=0,o=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,r=this.w,n=e.elements;return this.x=n[0]*t+n[4]*s+n[8]*o+n[12]*r,this.y=n[1]*t+n[5]*s+n[9]*o+n[13]*r,this.z=n[2]*t+n[6]*s+n[10]*o+n[14]*r,this.w=n[3]*t+n[7]*s+n[11]*o+n[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,r;const d=e.elements,l=d[0],u=d[4],c=d[8],g=d[1],h=d[5],M=d[9],m=d[2],f=d[6],y=d[10];if(Math.abs(u-g)<.01&&Math.abs(c-m)<.01&&Math.abs(M-f)<.01){if(Math.abs(u+g)<.1&&Math.abs(c+m)<.1&&Math.abs(M+f)<.1&&Math.abs(l+h+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,S=(h+1)/2,O=(y+1)/2,x=(u+g)/4,C=(c+m)/4,_=(M+f)/4;return b>S&&b>O?b<.01?(s=0,o=.707106781,r=.707106781):(s=Math.sqrt(b),o=x/s,r=C/s):S>O?S<.01?(s=.707106781,o=0,r=.707106781):(o=Math.sqrt(S),s=x/o,r=_/o):O<.01?(s=.707106781,o=.707106781,r=0):(r=Math.sqrt(O),s=C/r,o=_/r),this.set(s,o,r,t),this}let v=Math.sqrt((f-M)*(f-M)+(c-m)*(c-m)+(g-u)*(g-u));return Math.abs(v)<.001&&(v=1),this.x=(f-M)/v,this.y=(c-m)/v,this.z=(g-u)/v,this.w=Math.acos((l+h+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(e=1,t=1,s={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const o={width:e,height:t,depth:1};this.texture=new Texture(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps!==void 0?s.generateMipmaps:!1,this.texture.internalFormat=s.internalFormat!==void 0?s.internalFormat:null,this.texture.minFilter=s.minFilter!==void 0?s.minFilter:LinearFilter,this.depthBuffer=s.depthBuffer!==void 0?s.depthBuffer:!0,this.stencilBuffer=s.stencilBuffer!==void 0?s.stencilBuffer:!1,this.depthTexture=s.depthTexture!==void 0?s.depthTexture:null,this.samples=s.samples!==void 0?s.samples:0}setSize(e,t,s=1){(this.width!==e||this.height!==t||this.depth!==s)&&(this.width=e,this.height=t,this.depth=s,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,r,n,p){let d=s[o+0],l=s[o+1],u=s[o+2],c=s[o+3];const g=r[n+0],h=r[n+1],M=r[n+2],m=r[n+3];if(p===0){e[t+0]=d,e[t+1]=l,e[t+2]=u,e[t+3]=c;return}if(p===1){e[t+0]=g,e[t+1]=h,e[t+2]=M,e[t+3]=m;return}if(c!==m||d!==g||l!==h||u!==M){let f=1-p;const y=d*g+l*h+u*M+c*m,v=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const O=Math.sqrt(b),x=Math.atan2(O,y*v);f=Math.sin(f*x)/O,p=Math.sin(p*x)/O}const S=p*v;if(d=d*f+g*S,l=l*f+h*S,u=u*f+M*S,c=c*f+m*S,f===1-p){const O=1/Math.sqrt(d*d+l*l+u*u+c*c);d*=O,l*=O,u*=O,c*=O}}e[t]=d,e[t+1]=l,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,s,o,r,n){const p=s[o],d=s[o+1],l=s[o+2],u=s[o+3],c=r[n],g=r[n+1],h=r[n+2],M=r[n+3];return e[t]=p*M+u*c+d*h-l*g,e[t+1]=d*M+u*g+l*c-p*h,e[t+2]=l*M+u*h+p*g-d*c,e[t+3]=u*M-p*c-d*g-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const s=e._x,o=e._y,r=e._z,n=e._order,p=Math.cos,d=Math.sin,l=p(s/2),u=p(o/2),c=p(r/2),g=d(s/2),h=d(o/2),M=d(r/2);switch(n){case"XYZ":this._x=g*u*c+l*h*M,this._y=l*h*c-g*u*M,this._z=l*u*M+g*h*c,this._w=l*u*c-g*h*M;break;case"YXZ":this._x=g*u*c+l*h*M,this._y=l*h*c-g*u*M,this._z=l*u*M-g*h*c,this._w=l*u*c+g*h*M;break;case"ZXY":this._x=g*u*c-l*h*M,this._y=l*h*c+g*u*M,this._z=l*u*M+g*h*c,this._w=l*u*c-g*h*M;break;case"ZYX":this._x=g*u*c-l*h*M,this._y=l*h*c+g*u*M,this._z=l*u*M-g*h*c,this._w=l*u*c+g*h*M;break;case"YZX":this._x=g*u*c+l*h*M,this._y=l*h*c+g*u*M,this._z=l*u*M-g*h*c,this._w=l*u*c-g*h*M;break;case"XZY":this._x=g*u*c-l*h*M,this._y=l*h*c-g*u*M,this._z=l*u*M+g*h*c,this._w=l*u*c+g*h*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],r=t[8],n=t[1],p=t[5],d=t[9],l=t[2],u=t[6],c=t[10],g=s+p+c;if(g>0){const h=.5/Math.sqrt(g+1);this._w=.25/h,this._x=(u-d)*h,this._y=(r-l)*h,this._z=(n-o)*h}else if(s>p&&s>c){const h=2*Math.sqrt(1+s-p-c);this._w=(u-d)/h,this._x=.25*h,this._y=(o+n)/h,this._z=(r+l)/h}else if(p>c){const h=2*Math.sqrt(1+p-s-c);this._w=(r-l)/h,this._x=(o+n)/h,this._y=.25*h,this._z=(d+u)/h}else{const h=2*Math.sqrt(1+c-s-p);this._w=(n-o)/h,this._x=(r+l)/h,this._y=(d+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,r=e._z,n=e._w,p=t._x,d=t._y,l=t._z,u=t._w;return this._x=s*u+n*p+o*l-r*d,this._y=o*u+n*d+r*p-s*l,this._z=r*u+n*l+s*d-o*p,this._w=n*u-s*p-o*d-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,r=this._z,n=this._w;let p=n*e._w+s*e._x+o*e._y+r*e._z;if(p<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,p=-p):this.copy(e),p>=1)return this._w=n,this._x=s,this._y=o,this._z=r,this;const d=1-p*p;if(d<=Number.EPSILON){const h=1-t;return this._w=h*n+t*this._w,this._x=h*s+t*this._x,this._y=h*o+t*this._y,this._z=h*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(d),u=Math.atan2(l,p),c=Math.sin((1-t)*u)/l,g=Math.sin(t*u)/l;return this._w=n*c+this._w*g,this._x=s*c+this._x*g,this._y=o*c+this._y*g,this._z=r*c+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=Math.random(),t=Math.sqrt(1-e),s=Math.sqrt(e),o=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(o),s*Math.sin(r),s*Math.cos(r),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,s=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[3]*s+r[6]*o,this.y=r[1]*t+r[4]*s+r[7]*o,this.z=r[2]*t+r[5]*s+r[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,r=e.elements,n=1/(r[3]*t+r[7]*s+r[11]*o+r[15]);return this.x=(r[0]*t+r[4]*s+r[8]*o+r[12])*n,this.y=(r[1]*t+r[5]*s+r[9]*o+r[13])*n,this.z=(r[2]*t+r[6]*s+r[10]*o+r[14])*n,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,r=e.x,n=e.y,p=e.z,d=e.w,l=d*t+n*o-p*s,u=d*s+p*t-r*o,c=d*o+r*s-n*t,g=-r*t-n*s-p*o;return this.x=l*d+g*-r+u*-p-c*-n,this.y=u*d+g*-n+c*-r-l*-p,this.z=c*d+g*-p+l*-n-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[4]*s+r[8]*o,this.y=r[1]*t+r[5]*s+r[9]*o,this.z=r[2]*t+r[6]*s+r[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,r=e.z,n=t.x,p=t.y,d=t.z;return this.x=o*d-r*p,this.y=r*n-s*d,this.z=s*p-o*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(clamp(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(t),this.y=s*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,s=1/0,o=1/0,r=-1/0,n=-1/0,p=-1/0;for(let d=0,l=e.length;d<l;d+=3){const u=e[d],c=e[d+1],g=e[d+2];u<t&&(t=u),c<s&&(s=c),g<o&&(o=g),u>r&&(r=u),c>n&&(n=c),g>p&&(p=g)}return this.min.set(t,s,o),this.max.set(r,n,p),this}setFromBufferAttribute(e){let t=1/0,s=1/0,o=1/0,r=-1/0,n=-1/0,p=-1/0;for(let d=0,l=e.count;d<l;d++){const u=e.getX(d),c=e.getY(d),g=e.getZ(d);u<t&&(t=u),c<s&&(s=c),g<o&&(o=g),u>r&&(r=u),c>n&&(n=c),g>p&&(p=g)}return this.min.set(t,s,o),this.max.set(r,n,p),this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0)if(t&&s.attributes!=null&&s.attributes.position!==void 0){const r=s.attributes.position;for(let n=0,p=r.count;n<p;n++)_vector$b.fromBufferAttribute(r,n).applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b)}else s.boundingBox===null&&s.computeBoundingBox(),_box$3.copy(s.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3);const o=e.children;for(let r=0,n=o.length;r<n;r++)this.expandByObject(o[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$4.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _vector$b.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(i,e,t,s,o){for(let r=0,n=i.length-3;r<=n;r+=3){_testAxis.fromArray(i,r);const p=o.x*Math.abs(_testAxis.x)+o.y*Math.abs(_testAxis.y)+o.z*Math.abs(_testAxis.z),d=e.dot(_testAxis),l=t.dot(_testAxis),u=s.dot(_testAxis);if(Math.max(-Math.max(d,l,u),Math.min(d,l,u))>p)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):_box$2.setFromPoints(e).getCenter(s);let o=0;for(let r=0,n=e.length;r<n;r++)o=Math.max(o,s.distanceToSquared(e[r]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_v1$6.subVectors(e,this.center);const t=_v1$6.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(_v1$6,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_v2$3.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(e.center).sub(_v2$3))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(s).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.direction).multiplyScalar(t).add(this.origin),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const r=e.distanceTo(t)*.5,n=-this.direction.dot(_segDir),p=_diff.dot(this.direction),d=-_diff.dot(_segDir),l=_diff.lengthSq(),u=Math.abs(1-n*n);let c,g,h,M;if(u>0)if(c=n*d-p,g=n*p-d,M=r*u,c>=0)if(g>=-M)if(g<=M){const m=1/u;c*=m,g*=m,h=c*(c+n*g+2*p)+g*(n*c+g+2*d)+l}else g=r,c=Math.max(0,-(n*g+p)),h=-c*c+g*(g+2*d)+l;else g=-r,c=Math.max(0,-(n*g+p)),h=-c*c+g*(g+2*d)+l;else g<=-M?(c=Math.max(0,-(-n*r+p)),g=c>0?-r:Math.min(Math.max(-r,-d),r),h=-c*c+g*(g+2*d)+l):g<=M?(c=0,g=Math.min(Math.max(-r,-d),r),h=g*(g+2*d)+l):(c=Math.max(0,-(n*r+p)),g=c>0?r:Math.min(Math.max(-r,-d),r),h=-c*c+g*(g+2*d)+l);else g=n>0?-r:r,c=Math.max(0,-(n*g+p)),h=-c*c+g*(g+2*d)+l;return s&&s.copy(this.direction).multiplyScalar(c).add(this.origin),o&&o.copy(_segDir).multiplyScalar(g).add(_segCenter),h}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const s=_vector$a.dot(this.direction),o=_vector$a.dot(_vector$a)-s*s,r=e.radius*e.radius;if(o>r)return null;const n=Math.sqrt(r-o),p=s-n,d=s+n;return p<0&&d<0?null:p<0?this.at(d,t):this.at(p,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,r,n,p,d;const l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,g=this.origin;return l>=0?(s=(e.min.x-g.x)*l,o=(e.max.x-g.x)*l):(s=(e.max.x-g.x)*l,o=(e.min.x-g.x)*l),u>=0?(r=(e.min.y-g.y)*u,n=(e.max.y-g.y)*u):(r=(e.max.y-g.y)*u,n=(e.min.y-g.y)*u),s>n||r>o||((r>s||isNaN(s))&&(s=r),(n<o||isNaN(o))&&(o=n),c>=0?(p=(e.min.z-g.z)*c,d=(e.max.z-g.z)*c):(p=(e.max.z-g.z)*c,d=(e.min.z-g.z)*c),s>d||p>o)||((p>s||s!==s)&&(s=p),(d<o||o!==o)&&(o=d),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,s,o,r){_edge1.subVectors(t,e),_edge2.subVectors(s,e),_normal$1.crossVectors(_edge1,_edge2);let n=this.direction.dot(_normal$1),p;if(n>0){if(o)return null;p=1}else if(n<0)p=-1,n=-n;else return null;_diff.subVectors(this.origin,e);const d=p*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(d<0)return null;const l=p*this.direction.dot(_edge1.cross(_diff));if(l<0||d+l>n)return null;const u=-p*_diff.dot(_normal$1);return u<0?null:this.at(u/n,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,s,o,r,n,p,d,l,u,c,g,h,M,m,f){const y=this.elements;return y[0]=e,y[4]=t,y[8]=s,y[12]=o,y[1]=r,y[5]=n,y[9]=p,y[13]=d,y[2]=l,y[6]=u,y[10]=c,y[14]=g,y[3]=h,y[7]=M,y[11]=m,y[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/_v1$5.setFromMatrixColumn(e,0).length(),r=1/_v1$5.setFromMatrixColumn(e,1).length(),n=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*r,t[5]=s[5]*r,t[6]=s[6]*r,t[7]=0,t[8]=s[8]*n,t[9]=s[9]*n,t[10]=s[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,r=e.z,n=Math.cos(s),p=Math.sin(s),d=Math.cos(o),l=Math.sin(o),u=Math.cos(r),c=Math.sin(r);if(e.order==="XYZ"){const g=n*u,h=n*c,M=p*u,m=p*c;t[0]=d*u,t[4]=-d*c,t[8]=l,t[1]=h+M*l,t[5]=g-m*l,t[9]=-p*d,t[2]=m-g*l,t[6]=M+h*l,t[10]=n*d}else if(e.order==="YXZ"){const g=d*u,h=d*c,M=l*u,m=l*c;t[0]=g+m*p,t[4]=M*p-h,t[8]=n*l,t[1]=n*c,t[5]=n*u,t[9]=-p,t[2]=h*p-M,t[6]=m+g*p,t[10]=n*d}else if(e.order==="ZXY"){const g=d*u,h=d*c,M=l*u,m=l*c;t[0]=g-m*p,t[4]=-n*c,t[8]=M+h*p,t[1]=h+M*p,t[5]=n*u,t[9]=m-g*p,t[2]=-n*l,t[6]=p,t[10]=n*d}else if(e.order==="ZYX"){const g=n*u,h=n*c,M=p*u,m=p*c;t[0]=d*u,t[4]=M*l-h,t[8]=g*l+m,t[1]=d*c,t[5]=m*l+g,t[9]=h*l-M,t[2]=-l,t[6]=p*d,t[10]=n*d}else if(e.order==="YZX"){const g=n*d,h=n*l,M=p*d,m=p*l;t[0]=d*u,t[4]=m-g*c,t[8]=M*c+h,t[1]=c,t[5]=n*u,t[9]=-p*u,t[2]=-l*u,t[6]=h*c+M,t[10]=g-m*c}else if(e.order==="XZY"){const g=n*d,h=n*l,M=p*d,m=p*l;t[0]=d*u,t[4]=-c,t[8]=l*u,t[1]=g*c+m,t[5]=n*u,t[9]=h*c-M,t[2]=M*c-h,t[6]=p*u,t[10]=m*c+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,s){const o=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(s,_z),_x.lengthSq()===0&&(Math.abs(s.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(s,_z)),_x.normalize(),_y.crossVectors(_z,_x),o[0]=_x.x,o[4]=_y.x,o[8]=_z.x,o[1]=_x.y,o[5]=_y.y,o[9]=_z.y,o[2]=_x.z,o[6]=_y.z,o[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,r=this.elements,n=s[0],p=s[4],d=s[8],l=s[12],u=s[1],c=s[5],g=s[9],h=s[13],M=s[2],m=s[6],f=s[10],y=s[14],v=s[3],b=s[7],S=s[11],O=s[15],x=o[0],C=o[4],_=o[8],T=o[12],R=o[1],A=o[5],G=o[9],k=o[13],L=o[2],P=o[6],q=o[10],X=o[14],N=o[3],K=o[7],Z=o[11],z=o[15];return r[0]=n*x+p*R+d*L+l*N,r[4]=n*C+p*A+d*P+l*K,r[8]=n*_+p*G+d*q+l*Z,r[12]=n*T+p*k+d*X+l*z,r[1]=u*x+c*R+g*L+h*N,r[5]=u*C+c*A+g*P+h*K,r[9]=u*_+c*G+g*q+h*Z,r[13]=u*T+c*k+g*X+h*z,r[2]=M*x+m*R+f*L+y*N,r[6]=M*C+m*A+f*P+y*K,r[10]=M*_+m*G+f*q+y*Z,r[14]=M*T+m*k+f*X+y*z,r[3]=v*x+b*R+S*L+O*N,r[7]=v*C+b*A+S*P+O*K,r[11]=v*_+b*G+S*q+O*Z,r[15]=v*T+b*k+S*X+O*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],r=e[12],n=e[1],p=e[5],d=e[9],l=e[13],u=e[2],c=e[6],g=e[10],h=e[14],M=e[3],m=e[7],f=e[11],y=e[15];return M*(+r*d*c-o*l*c-r*p*g+s*l*g+o*p*h-s*d*h)+m*(+t*d*h-t*l*g+r*n*g-o*n*h+o*l*u-r*d*u)+f*(+t*l*c-t*p*h-r*n*c+s*n*h+r*p*u-s*l*u)+y*(-o*p*u-t*d*c+t*p*g+o*n*c-s*n*g+s*d*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],r=e[3],n=e[4],p=e[5],d=e[6],l=e[7],u=e[8],c=e[9],g=e[10],h=e[11],M=e[12],m=e[13],f=e[14],y=e[15],v=c*f*l-m*g*l+m*d*h-p*f*h-c*d*y+p*g*y,b=M*g*l-u*f*l-M*d*h+n*f*h+u*d*y-n*g*y,S=u*m*l-M*c*l+M*p*h-n*m*h-u*p*y+n*c*y,O=M*c*d-u*m*d-M*p*g+n*m*g+u*p*f-n*c*f,x=t*v+s*b+o*S+r*O;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/x;return e[0]=v*C,e[1]=(m*g*r-c*f*r-m*o*h+s*f*h+c*o*y-s*g*y)*C,e[2]=(p*f*r-m*d*r+m*o*l-s*f*l-p*o*y+s*d*y)*C,e[3]=(c*d*r-p*g*r-c*o*l+s*g*l+p*o*h-s*d*h)*C,e[4]=b*C,e[5]=(u*f*r-M*g*r+M*o*h-t*f*h-u*o*y+t*g*y)*C,e[6]=(M*d*r-n*f*r-M*o*l+t*f*l+n*o*y-t*d*y)*C,e[7]=(n*g*r-u*d*r+u*o*l-t*g*l-n*o*h+t*d*h)*C,e[8]=S*C,e[9]=(M*c*r-u*m*r-M*s*h+t*m*h+u*s*y-t*c*y)*C,e[10]=(n*m*r-M*p*r+M*s*l-t*m*l-n*s*y+t*p*y)*C,e[11]=(u*p*r-n*c*r-u*s*l+t*c*l+n*s*h-t*p*h)*C,e[12]=O*C,e[13]=(u*m*o-M*c*o+M*s*g-t*m*g-u*s*f+t*c*f)*C,e[14]=(M*p*o-n*m*o-M*s*d+t*m*d+n*s*f-t*p*f)*C,e[15]=(n*c*o-u*p*o+u*s*d-t*c*d-n*s*g+t*p*g)*C,this}scale(e){const t=this.elements,s=e.x,o=e.y,r=e.z;return t[0]*=s,t[4]*=o,t[8]*=r,t[1]*=s,t[5]*=o,t[9]*=r,t[2]*=s,t[6]*=o,t[10]*=r,t[3]*=s,t[7]*=o,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),r=1-s,n=e.x,p=e.y,d=e.z,l=r*n,u=r*p;return this.set(l*n+s,l*p-o*d,l*d+o*p,0,l*p+o*d,u*p+s,u*d-o*n,0,l*d-o*p,u*d+o*n,r*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,r,n){return this.set(1,s,r,0,e,1,n,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,r=t._x,n=t._y,p=t._z,d=t._w,l=r+r,u=n+n,c=p+p,g=r*l,h=r*u,M=r*c,m=n*u,f=n*c,y=p*c,v=d*l,b=d*u,S=d*c,O=s.x,x=s.y,C=s.z;return o[0]=(1-(m+y))*O,o[1]=(h+S)*O,o[2]=(M-b)*O,o[3]=0,o[4]=(h-S)*x,o[5]=(1-(g+y))*x,o[6]=(f+v)*x,o[7]=0,o[8]=(M+b)*C,o[9]=(f-v)*C,o[10]=(1-(g+m))*C,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let r=_v1$5.set(o[0],o[1],o[2]).length();const n=_v1$5.set(o[4],o[5],o[6]).length(),p=_v1$5.set(o[8],o[9],o[10]).length();this.determinant()<0&&(r=-r),e.x=o[12],e.y=o[13],e.z=o[14],_m1$2.copy(this);const l=1/r,u=1/n,c=1/p;return _m1$2.elements[0]*=l,_m1$2.elements[1]*=l,_m1$2.elements[2]*=l,_m1$2.elements[4]*=u,_m1$2.elements[5]*=u,_m1$2.elements[6]*=u,_m1$2.elements[8]*=c,_m1$2.elements[9]*=c,_m1$2.elements[10]*=c,t.setFromRotationMatrix(_m1$2),s.x=r,s.y=n,s.z=p,this}makePerspective(e,t,s,o,r,n){const p=this.elements,d=2*r/(t-e),l=2*r/(s-o),u=(t+e)/(t-e),c=(s+o)/(s-o),g=-(n+r)/(n-r),h=-2*n*r/(n-r);return p[0]=d,p[4]=0,p[8]=u,p[12]=0,p[1]=0,p[5]=l,p[9]=c,p[13]=0,p[2]=0,p[6]=0,p[10]=g,p[14]=h,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,r,n){const p=this.elements,d=1/(t-e),l=1/(s-o),u=1/(n-r),c=(t+e)*d,g=(s+o)*l,h=(n+r)*u;return p[0]=2*d,p[4]=0,p[8]=0,p[12]=-c,p[1]=0,p[5]=2*l,p[9]=0,p[13]=-g,p[2]=0,p[6]=0,p[10]=-2*u,p[14]=-h,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$1=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,s=0,o=Euler.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,r=o[0],n=o[4],p=o[8],d=o[1],l=o[5],u=o[9],c=o[2],g=o[6],h=o[10];switch(t){case"XYZ":this._y=Math.asin(clamp(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-n,r)):(this._x=Math.atan2(g,l),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(p,h),this._z=Math.atan2(d,l)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-c,h),this._z=Math.atan2(-n,l)):(this._y=0,this._z=Math.atan2(d,r));break;case"ZYX":this._y=Math.asin(-clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._z=Math.atan2(d,r)):(this._x=0,this._z=Math.atan2(-n,l));break;case"YZX":this._z=Math.asin(clamp(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(p,h));break;case"XZY":this._z=Math.asin(-clamp(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(g,l),this._y=Math.atan2(p,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return _matrix$1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$1,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Euler.DefaultOrder="XYZ";Euler.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DefaultUp.clone();const e=new Vector3,t=new Euler,s=new Quaternion,o=new Vector3(1,1,1);function r(){s.setFromEuler(t,!1)}function n(){t.setFromQuaternion(s,void 0,!1)}t._onChange(r),s._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DefaultMatrixWorldAutoUpdate,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?_target.copy(e):_target.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),o&&(_m1$1.extractRotation(o.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const n=this.children[s].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let s=[];this[e]===t&&s.push(this);for(let o=0,r=this.children.length;o<r;o++){const n=this.children[o].getObjectsByProperty(e,t);n.length>0&&(s=s.concat(n))}return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++){const r=t[s];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let r=0,n=o.length;r<n;r++){const p=o[r];p.matrixWorldAutoUpdate===!0&&p.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function r(p,d){return p[d.uuid]===void 0&&(p[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const d=p.shapes;if(Array.isArray(d))for(let l=0,u=d.length;l<u;l++){const c=d[l];r(e.shapes,c)}else r(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let d=0,l=this.material.length;d<l;d++)p.push(r(e.materials,this.material[d]));o.material=p}else o.material=r(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const d=this.animations[p];o.animations.push(r(e.animations,d))}}if(t){const p=n(e.geometries),d=n(e.materials),l=n(e.textures),u=n(e.images),c=n(e.shapes),g=n(e.skeletons),h=n(e.animations),M=n(e.nodes);p.length>0&&(s.geometries=p),d.length>0&&(s.materials=d),l.length>0&&(s.textures=l),u.length>0&&(s.images=u),c.length>0&&(s.shapes=c),g.length>0&&(s.skeletons=g),h.length>0&&(s.animations=h),M.length>0&&(s.nodes=M)}return s.object=o,s;function n(p){const d=[];for(const l in p){const u=p[l];delete u.metadata,d.push(u)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Object3D.DefaultUp=new Vector3(0,1,0);Object3D.DefaultMatrixAutoUpdate=!0;Object3D.DefaultMatrixWorldAutoUpdate=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,t=new Vector3,s=new Vector3){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),_v0$1.subVectors(e,t),o.cross(_v0$1);const r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(e,t,s,o,r){_v0$1.subVectors(o,t),_v1$3.subVectors(s,t),_v2$2.subVectors(e,t);const n=_v0$1.dot(_v0$1),p=_v0$1.dot(_v1$3),d=_v0$1.dot(_v2$2),l=_v1$3.dot(_v1$3),u=_v1$3.dot(_v2$2),c=n*l-p*p;if(c===0)return r.set(-2,-1,-1);const g=1/c,h=(l*d-p*u)*g,M=(n*u-p*d)*g;return r.set(1-h-M,M,h)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,t,s,o,r,n,p,d){return this.getBarycoord(e,t,s,o,_v3$1),d.set(0,0),d.addScaledVector(r,_v3$1.x),d.addScaledVector(n,_v3$1.y),d.addScaledVector(p,_v3$1.z),d}static isFrontFacing(e,t,s,o){return _v0$1.subVectors(s,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,s,o,r){return Triangle.getUV(e,this.a,this.b,this.c,t,s,o,r)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,r=this.c;let n,p;_vab.subVectors(o,s),_vac.subVectors(r,s),_vap.subVectors(e,s);const d=_vab.dot(_vap),l=_vac.dot(_vap);if(d<=0&&l<=0)return t.copy(s);_vbp.subVectors(e,o);const u=_vab.dot(_vbp),c=_vac.dot(_vbp);if(u>=0&&c<=u)return t.copy(o);const g=d*c-u*l;if(g<=0&&d>=0&&u<=0)return n=d/(d-u),t.copy(s).addScaledVector(_vab,n);_vcp.subVectors(e,r);const h=_vab.dot(_vcp),M=_vac.dot(_vcp);if(M>=0&&h<=M)return t.copy(r);const m=h*l-d*M;if(m<=0&&l>=0&&M<=0)return p=l/(l-M),t.copy(s).addScaledVector(_vac,p);const f=u*M-h*c;if(f<=0&&c-u>=0&&h-M>=0)return _vbc.subVectors(r,o),p=(c-u)/(c-u+(h-M)),t.copy(o).addScaledVector(_vbc,p);const y=1/(f+m+g);return n=m*y,p=g*y,t.copy(s).addScaledVector(_vab,n).addScaledVector(_vac,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const o=this[t];if(o===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(s.blending=this.blending),this.side!==FrontSide&&(s.side=this.side),this.vertexColors&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=this.transparent),s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.stencilWrite=this.stencilWrite,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(s.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(s.wireframe=this.wireframe),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=this.flatShading),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(r){const n=[];for(const p in r){const d=r[p];delete d.metadata,n.push(d)}return n}if(t){const r=o(e.textures),n=o(e.images);r.length>0&&(s.textures=r),n.length>0&&(s.images=n)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let r=0;r!==o;++r)s[r]=t[r].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),s=normalize(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),s=normalize(s,this.array),o=normalize(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,r){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),s=normalize(s,this.array),o=normalize(o,this.array),r=normalize(r,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,s){super(new Float32Array(e),t,s)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const r=new Matrix3().getNormalMatrix(e);s.applyNormalMatrix(r),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,t,s){return _m1.makeTranslation(e,t,s),this.applyMatrix4(_m1),this}scale(e,t,s){return _m1.makeScale(e,t,s),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let s=0,o=e.length;s<o;s++){const r=e[s];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];_box$1.setFromBufferAttribute(r),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const s=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const p=t[r];_boxMorphTargets.setFromBufferAttribute(p),this.morphTargetsRelative?(_vector$8.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$8),_vector$8.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$8)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(s);let o=0;for(let r=0,n=e.count;r<n;r++)_vector$8.fromBufferAttribute(e,r),o=Math.max(o,s.distanceToSquared(_vector$8));if(t)for(let r=0,n=t.length;r<n;r++){const p=t[r],d=this.morphTargetsRelative;for(let l=0,u=p.count;l<u;l++)_vector$8.fromBufferAttribute(p,l),d&&(_offset.fromBufferAttribute(e,l),_vector$8.add(_offset)),o=Math.max(o,s.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,o=t.position.array,r=t.normal.array,n=t.uv.array,p=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*p),4));const d=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<p;R++)l[R]=new Vector3,u[R]=new Vector3;const c=new Vector3,g=new Vector3,h=new Vector3,M=new Vector2,m=new Vector2,f=new Vector2,y=new Vector3,v=new Vector3;function b(R,A,G){c.fromArray(o,R*3),g.fromArray(o,A*3),h.fromArray(o,G*3),M.fromArray(n,R*2),m.fromArray(n,A*2),f.fromArray(n,G*2),g.sub(c),h.sub(c),m.sub(M),f.sub(M);const k=1/(m.x*f.y-f.x*m.y);isFinite(k)&&(y.copy(g).multiplyScalar(f.y).addScaledVector(h,-m.y).multiplyScalar(k),v.copy(h).multiplyScalar(m.x).addScaledVector(g,-f.x).multiplyScalar(k),l[R].add(y),l[A].add(y),l[G].add(y),u[R].add(v),u[A].add(v),u[G].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:s.length}]);for(let R=0,A=S.length;R<A;++R){const G=S[R],k=G.start,L=G.count;for(let P=k,q=k+L;P<q;P+=3)b(s[P+0],s[P+1],s[P+2])}const O=new Vector3,x=new Vector3,C=new Vector3,_=new Vector3;function T(R){C.fromArray(r,R*3),_.copy(C);const A=l[R];O.copy(A),O.sub(C.multiplyScalar(C.dot(A))).normalize(),x.crossVectors(_,A);const k=x.dot(u[R])<0?-1:1;d[R*4]=O.x,d[R*4+1]=O.y,d[R*4+2]=O.z,d[R*4+3]=k}for(let R=0,A=S.length;R<A;++R){const G=S[R],k=G.start,L=G.count;for(let P=k,q=k+L;P<q;P+=3)T(s[P+0]),T(s[P+1]),T(s[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,h=s.count;g<h;g++)s.setXYZ(g,0,0,0);const o=new Vector3,r=new Vector3,n=new Vector3,p=new Vector3,d=new Vector3,l=new Vector3,u=new Vector3,c=new Vector3;if(e)for(let g=0,h=e.count;g<h;g+=3){const M=e.getX(g+0),m=e.getX(g+1),f=e.getX(g+2);o.fromBufferAttribute(t,M),r.fromBufferAttribute(t,m),n.fromBufferAttribute(t,f),u.subVectors(n,r),c.subVectors(o,r),u.cross(c),p.fromBufferAttribute(s,M),d.fromBufferAttribute(s,m),l.fromBufferAttribute(s,f),p.add(u),d.add(u),l.add(u),s.setXYZ(M,p.x,p.y,p.z),s.setXYZ(m,d.x,d.y,d.z),s.setXYZ(f,l.x,l.y,l.z)}else for(let g=0,h=t.count;g<h;g+=3)o.fromBufferAttribute(t,g+0),r.fromBufferAttribute(t,g+1),n.fromBufferAttribute(t,g+2),u.subVectors(n,r),c.subVectors(o,r),u.cross(c),s.setXYZ(g+0,u.x,u.y,u.z),s.setXYZ(g+1,u.x,u.y,u.z),s.setXYZ(g+2,u.x,u.y,u.z);this.normalizeNormals(),s.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(p,d){const l=p.array,u=p.itemSize,c=p.normalized,g=new l.constructor(d.length*u);let h=0,M=0;for(let m=0,f=d.length;m<f;m++){p.isInterleavedBufferAttribute?h=d[m]*p.data.stride+p.offset:h=d[m]*u;for(let y=0;y<u;y++)g[M++]=l[h++]}return new BufferAttribute(g,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,s=this.index.array,o=this.attributes;for(const p in o){const d=o[p],l=e(d,s);t.setAttribute(p,l)}const r=this.morphAttributes;for(const p in r){const d=[],l=r[p];for(let u=0,c=l.length;u<c;u++){const g=l[u],h=e(g,s);d.push(h)}t.morphAttributes[p]=d}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let p=0,d=n.length;p<d;p++){const l=n[p];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const l in d)d[l]!==void 0&&(e[l]=d[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const l=s[d];e.data.attributes[d]=l.toJSON(e.data)}const o={};let r=!1;for(const d in this.morphAttributes){const l=this.morphAttributes[d],u=[];for(let c=0,g=l.length;c<g;c++){const h=l[c];u.push(h.toJSON(e.data))}u.length>0&&(o[d]=u,r=!0)}r&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere={center:p.center.toArray(),radius:p.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const l in o){const u=o[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],c=r[l];for(let g=0,h=c.length;g<h;g++)u.push(c[g].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let l=0,u=n.length;l<u;l++){const c=n[l];this.addGroup(c.start,c.count,c.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$2=new Matrix4,_ray$2=new Ray,_sphere$3=new Sphere,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=o.length;r<n;r++){const p=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=r}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,r=s.morphAttributes.position,n=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(r&&p){_morphA.set(0,0,0);for(let d=0,l=r.length;d<l;d++){const u=p[d],c=r[d];u!==0&&(_tempA.fromBufferAttribute(c,e),n?_morphA.addScaledVector(_tempA,u):_morphA.addScaledVector(_tempA.sub(t),u))}t.add(_morphA)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const s=this.geometry,o=this.material,r=this.matrixWorld;if(o===void 0||(s.boundingSphere===null&&s.computeBoundingSphere(),_sphere$3.copy(s.boundingSphere),_sphere$3.applyMatrix4(r),e.ray.intersectsSphere(_sphere$3)===!1)||(_inverseMatrix$2.copy(r).invert(),_ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),s.boundingBox!==null&&_ray$2.intersectsBox(s.boundingBox)===!1))return;let n;const p=s.index,d=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv2,c=s.groups,g=s.drawRange;if(p!==null)if(Array.isArray(o))for(let h=0,M=c.length;h<M;h++){const m=c[h],f=o[m.materialIndex],y=Math.max(m.start,g.start),v=Math.min(p.count,Math.min(m.start+m.count,g.start+g.count));for(let b=y,S=v;b<S;b+=3){const O=p.getX(b),x=p.getX(b+1),C=p.getX(b+2);n=checkBufferGeometryIntersection(this,f,e,_ray$2,l,u,O,x,C),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const h=Math.max(0,g.start),M=Math.min(p.count,g.start+g.count);for(let m=h,f=M;m<f;m+=3){const y=p.getX(m),v=p.getX(m+1),b=p.getX(m+2);n=checkBufferGeometryIntersection(this,o,e,_ray$2,l,u,y,v,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(d!==void 0)if(Array.isArray(o))for(let h=0,M=c.length;h<M;h++){const m=c[h],f=o[m.materialIndex],y=Math.max(m.start,g.start),v=Math.min(d.count,Math.min(m.start+m.count,g.start+g.count));for(let b=y,S=v;b<S;b+=3){const O=b,x=b+1,C=b+2;n=checkBufferGeometryIntersection(this,f,e,_ray$2,l,u,O,x,C),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const h=Math.max(0,g.start),M=Math.min(d.count,g.start+g.count);for(let m=h,f=M;m<f;m+=3){const y=m,v=m+1,b=m+2;n=checkBufferGeometryIntersection(this,o,e,_ray$2,l,u,y,v,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function checkIntersection(i,e,t,s,o,r,n,p){let d;if(e.side===BackSide?d=s.intersectTriangle(n,r,o,!0,p):d=s.intersectTriangle(o,r,n,e.side===FrontSide,p),d===null)return null;_intersectionPointWorld.copy(p),_intersectionPointWorld.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_intersectionPointWorld);return l<t.near||l>t.far?null:{distance:l,point:_intersectionPointWorld.clone(),object:i}}function checkBufferGeometryIntersection(i,e,t,s,o,r,n,p,d){i.getVertexPosition(n,_vA$1),i.getVertexPosition(p,_vB$1),i.getVertexPosition(d,_vC$1);const l=checkIntersection(i,e,t,s,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(l){o&&(_uvA$1.fromBufferAttribute(o,n),_uvB$1.fromBufferAttribute(o,p),_uvC$1.fromBufferAttribute(o,d),l.uv=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),r&&(_uvA$1.fromBufferAttribute(r,n),_uvB$1.fromBufferAttribute(r,p),_uvC$1.fromBufferAttribute(r,d),l.uv2=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2));const u={a:n,b:p,c:d,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,u.normal),l.face=u}return l}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,s=1,o=1,r=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:r,depthSegments:n};const p=this;o=Math.floor(o),r=Math.floor(r),n=Math.floor(n);const d=[],l=[],u=[],c=[];let g=0,h=0;M("z","y","x",-1,-1,s,t,e,n,r,0),M("z","y","x",1,-1,s,t,-e,n,r,1),M("x","z","y",1,1,e,s,t,o,n,2),M("x","z","y",1,-1,e,s,-t,o,n,3),M("x","y","z",1,-1,e,t,s,o,r,4),M("x","y","z",-1,-1,e,t,-s,o,r,5),this.setIndex(d),this.setAttribute("position",new Float32BufferAttribute(l,3)),this.setAttribute("normal",new Float32BufferAttribute(u,3)),this.setAttribute("uv",new Float32BufferAttribute(c,2));function M(m,f,y,v,b,S,O,x,C,_,T){const R=S/C,A=O/_,G=S/2,k=O/2,L=x/2,P=C+1,q=_+1;let X=0,N=0;const K=new Vector3;for(let Z=0;Z<q;Z++){const z=Z*A-k;for(let H=0;H<P;H++){const Q=H*R-G;K[m]=Q*v,K[f]=z*b,K[y]=L,l.push(K.x,K.y,K.z),K[m]=0,K[f]=0,K[y]=x>0?1:-1,u.push(K.x,K.y,K.z),c.push(H/C),c.push(1-Z/_),X+=1}}for(let Z=0;Z<_;Z++)for(let z=0;z<C;z++){const H=g+z+P*Z,Q=g+z+P*(Z+1),te=g+(z+1)+P*(Z+1),re=g+(z+1)+P*Z;d.push(H,Q,re),d.push(Q,te,re),N+=6}p.addGroup(h,N,T),h+=N,g+=X}}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const o=i[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function mergeUniforms(i){const e={};for(let t=0;t<i.length;t++){const s=cloneUniforms(i[t]);for(const o in s)e[o]=s[o]}return e}function cloneUniformsGroups(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function getUnlitUniformColorSpace(i){return i.getRenderTarget()===null&&i.outputEncoding===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const n=this.uniforms[o].value;n&&n.isTexture?t.uniforms[o]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[o]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[o]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[o]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[o]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[o]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[o]={type:"m4",value:n.toArray()}:t.uniforms[o]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD$1*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD$1*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,s,o,r,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=r,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD$1*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,r=-.5*o;const n=this.view;if(this.view!==null&&this.view.enabled){const d=n.fullWidth,l=n.fullHeight;r+=n.offsetX*o/d,t-=n.offsetY*s/l,o*=n.width/d,s*=n.height/l}const p=this.filmOffset;p!==0&&(r+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,t,t-s,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s;const o=new PerspectiveCamera(fov,aspect,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(1,0,0),this.add(o);const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const n=new PerspectiveCamera(fov,aspect,e,t);n.layers=this.layers,n.up.set(0,0,-1),n.lookAt(0,1,0),this.add(n);const p=new PerspectiveCamera(fov,aspect,e,t);p.layers=this.layers,p.up.set(0,0,1),p.lookAt(0,-1,0),this.add(p);const d=new PerspectiveCamera(fov,aspect,e,t);d.layers=this.layers,d.up.set(0,1,0),d.lookAt(0,0,1),this.add(d);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const s=this.renderTarget,[o,r,n,p,d,l]=this.children,u=e.getRenderTarget(),c=e.toneMapping,g=e.xr.enabled;e.toneMapping=NoToneMapping,e.xr.enabled=!1;const h=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0),e.render(t,o),e.setRenderTarget(s,1),e.render(t,r),e.setRenderTarget(s,2),e.render(t,n),e.setRenderTarget(s,3),e.render(t,p),e.setRenderTarget(s,4),e.render(t,d),s.texture.generateMipmaps=h,e.setRenderTarget(s,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=c,e.xr.enabled=g,s.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,s,o,r,n,p,d,l,u){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,s,o,r,n,p,d,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new CubeTexture(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new BoxGeometry(5,5,5),r=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:BackSide,blending:NoBlending});r.uniforms.tEquirect.value=t;const n=new Mesh(o,r),p=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,n),t.minFilter=p,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,s,o){const r=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,s,o);e.setRenderTarget(r)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=_vector1.subVectors(s,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const s=e.delta(_vector1),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:t.copy(s).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||_normalMatrix.getNormalMatrix(e),o=this.coplanarPoint(_vector1).applyMatrix4(e),r=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$2=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,s=new Plane,o=new Plane,r=new Plane,n=new Plane){this.planes=[e,t,s,o,r,n]}set(e,t,s,o,r,n){const p=this.planes;return p[0].copy(e),p[1].copy(t),p[2].copy(s),p[3].copy(o),p[4].copy(r),p[5].copy(n),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e){const t=this.planes,s=e.elements,o=s[0],r=s[1],n=s[2],p=s[3],d=s[4],l=s[5],u=s[6],c=s[7],g=s[8],h=s[9],M=s[10],m=s[11],f=s[12],y=s[13],v=s[14],b=s[15];return t[0].setComponents(p-o,c-d,m-g,b-f).normalize(),t[1].setComponents(p+o,c+d,m+g,b+f).normalize(),t[2].setComponents(p+r,c+l,m+h,b+y).normalize(),t[3].setComponents(p-r,c-l,m-h,b-y).normalize(),t[4].setComponents(p-n,c-u,m-M,b-v).normalize(),t[5].setComponents(p+n,c+u,m+M,b+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSprite(e){return _sphere$2.center.set(0,0,0),_sphere$2.radius=.7071067811865476,_sphere$2.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(_vector$7.x=o.normal.x>0?e.max.x:e.min.x,_vector$7.y=o.normal.y>0?e.max.y:e.min.y,_vector$7.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let i=null,e=!1,t=null,s=null;function o(r,n){t(r,n),s=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function WebGLAttributes(i,e){const t=e.isWebGL2,s=new WeakMap;function o(l,u){const c=l.array,g=l.usage,h=i.createBuffer();i.bindBuffer(u,h),i.bufferData(u,c,g),l.onUploadCallback();let M;if(c instanceof Float32Array)M=5126;else if(c instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)M=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=5123;else if(c instanceof Int16Array)M=5122;else if(c instanceof Uint32Array)M=5125;else if(c instanceof Int32Array)M=5124;else if(c instanceof Int8Array)M=5120;else if(c instanceof Uint8Array)M=5121;else if(c instanceof Uint8ClampedArray)M=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:M,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,c){const g=u.array,h=u.updateRange;i.bindBuffer(c,l),h.count===-1?i.bufferSubData(c,0,g):(t?i.bufferSubData(c,h.offset*g.BYTES_PER_ELEMENT,g,h.offset,h.count):i.bufferSubData(c,h.offset*g.BYTES_PER_ELEMENT,g.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function n(l){return l.isInterleavedBufferAttribute&&(l=l.data),s.get(l)}function p(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=s.get(l);u&&(i.deleteBuffer(u.buffer),s.delete(l))}function d(l,u){if(l.isGLBufferAttribute){const g=s.get(l);(!g||g.version<l.version)&&s.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const c=s.get(l);c===void 0?s.set(l,o(l,u)):c.version<l.version&&(r(c.buffer,l,u),c.version=l.version)}return{get:n,remove:p,update:d}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const r=e/2,n=t/2,p=Math.floor(s),d=Math.floor(o),l=p+1,u=d+1,c=e/p,g=t/d,h=[],M=[],m=[],f=[];for(let y=0;y<u;y++){const v=y*g-n;for(let b=0;b<l;b++){const S=b*c-r;M.push(S,-v,0),m.push(0,0,1),f.push(b/p),f.push(1-y/d)}}for(let y=0;y<d;y++)for(let v=0;v<p;v++){const b=v+l*y,S=v+l*(y+1),O=v+1+l*(y+1),x=v+1+l*y;h.push(b,S,x),h.push(S,O,x)}this.setIndex(h),this.setAttribute("position",new Float32BufferAttribute(M,3)),this.setAttribute("normal",new Float32BufferAttribute(m,3)),this.setAttribute("uv",new Float32BufferAttribute(f,2))}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex="vec3 transformed = vec3( position );",beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,encodings_fragment,encodings_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,output_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,uv2_pars_fragment,uv2_pars_vertex,uv2_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},uv2Transform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(i,e,t,s,o,r,n){const p=new Color(0);let d=r===!0?0:1,l,u,c=null,g=0,h=null;function M(f,y){let v=!1,b=y.isScene===!0?y.background:null;b&&b.isTexture&&(b=(y.backgroundBlurriness>0?t:e).get(b));const S=i.xr,O=S.getSession&&S.getSession();O&&O.environmentBlendMode==="additive"&&(b=null),b===null?m(p,d):b&&b.isColor&&(m(b,1),v=!0),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,C,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=b.encoding!==sRGBEncoding,(c!==b||g!==b.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,c=b,g=b.version,h=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=b.encoding!==sRGBEncoding,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(c!==b||g!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,c=b,g=b.version,h=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function m(f,y){f.getRGB(_rgb,getUnlitUniformColorSpace(i)),s.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,y,n)}return{getClearColor:function(){return p},setClearColor:function(f,y=1){p.set(f),d=y,m(p,d)},getClearAlpha:function(){return d},setClearAlpha:function(f){d=f,m(p,d)},render:M}}function WebGLBindingStates(i,e,t,s){const o=i.getParameter(34921),r=s.isWebGL2?null:e.get("OES_vertex_array_object"),n=s.isWebGL2||r!==null,p={},d=f(null);let l=d,u=!1;function c(L,P,q,X,N){let K=!1;if(n){const Z=m(X,q,P);l!==Z&&(l=Z,h(l.object)),K=y(L,X,q,N),K&&v(L,X,q,N)}else{const Z=P.wireframe===!0;(l.geometry!==X.id||l.program!==q.id||l.wireframe!==Z)&&(l.geometry=X.id,l.program=q.id,l.wireframe=Z,K=!0)}N!==null&&t.update(N,34963),(K||u)&&(u=!1,_(L,P,q,X),N!==null&&i.bindBuffer(34963,t.get(N).buffer))}function g(){return s.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function h(L){return s.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function M(L){return s.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function m(L,P,q){const X=q.wireframe===!0;let N=p[L.id];N===void 0&&(N={},p[L.id]=N);let K=N[P.id];K===void 0&&(K={},N[P.id]=K);let Z=K[X];return Z===void 0&&(Z=f(g()),K[X]=Z),Z}function f(L){const P=[],q=[],X=[];for(let N=0;N<o;N++)P[N]=0,q[N]=0,X[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:X,object:L,attributes:{},index:null}}function y(L,P,q,X){const N=l.attributes,K=P.attributes;let Z=0;const z=q.getAttributes();for(const H in z)if(z[H].location>=0){const te=N[H];let re=K[H];if(re===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;Z++}return l.attributesNum!==Z||l.index!==X}function v(L,P,q,X){const N={},K=P.attributes;let Z=0;const z=q.getAttributes();for(const H in z)if(z[H].location>=0){let te=K[H];te===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(te=L.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),N[H]=re,Z++}l.attributes=N,l.attributesNum=Z,l.index=X}function b(){const L=l.newAttributes;for(let P=0,q=L.length;P<q;P++)L[P]=0}function S(L){O(L,0)}function O(L,P){const q=l.newAttributes,X=l.enabledAttributes,N=l.attributeDivisors;q[L]=1,X[L]===0&&(i.enableVertexAttribArray(L),X[L]=1),N[L]!==P&&((s.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,P),N[L]=P)}function x(){const L=l.newAttributes,P=l.enabledAttributes;for(let q=0,X=P.length;q<X;q++)P[q]!==L[q]&&(i.disableVertexAttribArray(q),P[q]=0)}function C(L,P,q,X,N,K){s.isWebGL2===!0&&(q===5124||q===5125)?i.vertexAttribIPointer(L,P,q,N,K):i.vertexAttribPointer(L,P,q,X,N,K)}function _(L,P,q,X){if(s.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const N=X.attributes,K=q.getAttributes(),Z=P.defaultAttributeValues;for(const z in K){const H=K[z];if(H.location>=0){let Q=N[z];if(Q===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const te=Q.normalized,re=Q.itemSize,$=t.get(Q);if($===void 0)continue;const Fe=$.buffer,pe=$.type,ye=$.bytesPerElement;if(Q.isInterleavedBufferAttribute){const se=Q.data,we=se.stride,ve=Q.offset;if(se.isInstancedInterleavedBuffer){for(let me=0;me<H.locationSize;me++)O(H.location+me,se.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<H.locationSize;me++)S(H.location+me);i.bindBuffer(34962,Fe);for(let me=0;me<H.locationSize;me++)C(H.location+me,re/H.locationSize,pe,te,we*ye,(ve+re/H.locationSize*me)*ye)}else{if(Q.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)O(H.location+se,Q.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let se=0;se<H.locationSize;se++)S(H.location+se);i.bindBuffer(34962,Fe);for(let se=0;se<H.locationSize;se++)C(H.location+se,re/H.locationSize,pe,te,re*ye,re/H.locationSize*se*ye)}}else if(Z!==void 0){const te=Z[z];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(H.location,te);break;case 3:i.vertexAttrib3fv(H.location,te);break;case 4:i.vertexAttrib4fv(H.location,te);break;default:i.vertexAttrib1fv(H.location,te)}}}}x()}function T(){G();for(const L in p){const P=p[L];for(const q in P){const X=P[q];for(const N in X)M(X[N].object),delete X[N];delete P[q]}delete p[L]}}function R(L){if(p[L.id]===void 0)return;const P=p[L.id];for(const q in P){const X=P[q];for(const N in X)M(X[N].object),delete X[N];delete P[q]}delete p[L.id]}function A(L){for(const P in p){const q=p[P];if(q[L.id]===void 0)continue;const X=q[L.id];for(const N in X)M(X[N].object),delete X[N];delete q[L.id]}}function G(){k(),u=!0,l!==d&&(l=d,h(l.object))}function k(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:c,reset:G,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:S,disableUnusedAttributes:x}}function WebGLBufferRenderer(i,e,t,s){const o=s.isWebGL2;let r;function n(l){r=l}function p(l,u){i.drawArrays(r,l,u),t.update(u,r,1)}function d(l,u,c){if(c===0)return;let g,h;if(o)g=i,h="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[h](r,l,u,c),t.update(u,r,c)}this.setMode=n,this.render=p,this.renderInstances=d}function WebGLCapabilities(i,e,t){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const n=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let p=t.precision!==void 0?t.precision:"highp";const d=r(p);d!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",d,"instead."),p=d);const l=n||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,c=i.getParameter(34930),g=i.getParameter(35660),h=i.getParameter(3379),M=i.getParameter(34076),m=i.getParameter(34921),f=i.getParameter(36347),y=i.getParameter(36348),v=i.getParameter(36349),b=g>0,S=n||e.has("OES_texture_float"),O=b&&S,x=n?i.getParameter(36183):0;return{isWebGL2:n,drawBuffers:l,getMaxAnisotropy:o,getMaxPrecision:r,precision:p,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:g,maxTextureSize:h,maxCubemapSize:M,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:O,maxSamples:x}}function WebGLClipping(i){const e=this;let t=null,s=0,o=!1,r=!1;const n=new Plane,p=new Matrix3,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(c,g,h){const M=c.length!==0||g||s!==0||o;return o=g,t=u(c,h,0),s=c.length,M},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(c,g,h){const M=c.clippingPlanes,m=c.clipIntersection,f=c.clipShadows,y=i.get(c);if(!o||M===null||M.length===0||r&&!f)r?u(null):l();else{const v=r?0:s,b=v*4;let S=y.clippingState||null;d.value=S,S=u(M,g,b,h);for(let O=0;O!==b;++O)S[O]=t[O];y.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function l(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function u(c,g,h,M){const m=c!==null?c.length:0;let f=null;if(m!==0){if(f=d.value,M!==!0||f===null){const y=h+m*4,v=g.matrixWorldInverse;p.getNormalMatrix(v),(f===null||f.length<y)&&(f=new Float32Array(y));for(let b=0,S=h;b!==m;++b,S+=4)n.copy(c[b]).applyMatrix4(v,p),n.normal.toArray(f,S),f[S+3]=n.constant}d.value=f,d.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function WebGLCubeMaps(i){let e=new WeakMap;function t(n,p){return p===EquirectangularReflectionMapping?n.mapping=CubeReflectionMapping:p===EquirectangularRefractionMapping&&(n.mapping=CubeRefractionMapping),n}function s(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){const p=n.mapping;if(p===EquirectangularReflectionMapping||p===EquirectangularRefractionMapping)if(e.has(n)){const d=e.get(n).texture;return t(d,n.mapping)}else{const d=n.image;if(d&&d.height>0){const l=new WebGLCubeRenderTarget(d.height/2);return l.fromEquirectangularTexture(i,n),e.set(n,l),n.addEventListener("dispose",o),t(l.texture,n.mapping)}else return null}}return n}function o(n){const p=n.target;p.removeEventListener("dispose",o);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function r(){e=new WeakMap}return{get:s,dispose:r}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,s=1,o=-1,r=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=r,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,r,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=r,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let r=s-e,n=s+e,p=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,n=r+l*this.view.width,p-=u*this.view.offsetY,d=p-u*this.view.height}this.projectionMatrix.makeOrthographic(r,n,p,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,s,o,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget();const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,encoding:LinearEncoding,depthBuffer:!1},o=_createRenderTarget(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,s);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(r)),this._blurMaterial=_getBlurShader(r,e,t)}return o}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,s,o){const p=new PerspectiveCamera(90,1,t,s),d=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,g=u.toneMapping;u.getClearColor(_clearColor),u.toneMapping=NoToneMapping,u.autoClear=!1;const h=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),M=new Mesh(new BoxGeometry,h);let m=!1;const f=e.background;f?f.isColor&&(h.color.copy(f),e.background=null,m=!0):(h.color.copy(_clearColor),m=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(p.up.set(0,d[y],0),p.lookAt(l[y],0,0)):v===1?(p.up.set(0,0,d[y]),p.lookAt(0,l[y],0)):(p.up.set(0,d[y],0),p.lookAt(0,0,l[y]));const b=this._cubeSize;_setViewport(o,v*b,y>2?b:0,b,b),u.setRenderTarget(o),m&&u.render(M,p),u.render(e,p)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=g,u.autoClear=c,e.background=f}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const r=o?this._cubemapMaterial:this._equirectMaterial,n=new Mesh(this._lodPlanes[0],r),p=r.uniforms;p.envMap.value=e;const d=this._cubeSize;_setViewport(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(n,_flatCamera)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),n=_axisDirections[(o-1)%_axisDirections.length];this._blur(e,o-1,o,r,n)}t.autoClear=s}_blur(e,t,s,o,r){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,s,o,"latitudinal",r),this._halfBlur(n,e,s,s,o,"longitudinal",r)}_halfBlur(e,t,s,o,r,n,p){const d=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Mesh(this._lodPlanes[o],l),g=l.uniforms,h=this._sizeLods[s]-1,M=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*MAX_SAMPLES-1),m=r/M,f=isFinite(r)?1+Math.floor(u*m):MAX_SAMPLES;f>MAX_SAMPLES&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${MAX_SAMPLES}`);const y=[];let v=0;for(let C=0;C<MAX_SAMPLES;++C){const _=C/m,T=Math.exp(-_*_/2);y.push(T),C===0?v+=T:C<f&&(v+=2*T)}for(let C=0;C<y.length;C++)y[C]=y[C]/v;g.envMap.value=e.texture,g.samples.value=f,g.weights.value=y,g.latitudinal.value=n==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-s;const S=this._sizeLods[o],O=3*S*(o>b-LOD_MIN?o-b+LOD_MIN:0),x=4*(this._cubeSize-S);_setViewport(t,O,x,3*S,2*S),d.setRenderTarget(t),d.render(c,_flatCamera)}}function _createPlanes(i){const e=[],t=[],s=[];let o=i;const r=i-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let n=0;n<r;n++){const p=Math.pow(2,o);t.push(p);let d=1/p;n>i-LOD_MIN?d=EXTRA_LOD_SIGMA[n-i+LOD_MIN-1]:n===0&&(d=0),s.push(d);const l=1/(p-2),u=-l,c=1+l,g=[u,u,c,u,c,c,u,u,c,c,u,c],h=6,M=6,m=3,f=2,y=1,v=new Float32Array(m*M*h),b=new Float32Array(f*M*h),S=new Float32Array(y*M*h);for(let x=0;x<h;x++){const C=x%3*2/3-1,_=x>2?0:-1,T=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];v.set(T,m*M*x),b.set(g,f*M*x);const R=[x,x,x,x,x,x];S.set(R,y*M*x)}const O=new BufferGeometry;O.setAttribute("position",new BufferAttribute(v,m)),O.setAttribute("uv",new BufferAttribute(b,f)),O.setAttribute("faceIndex",new BufferAttribute(S,y)),e.push(O),o>LOD_MIN&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function _createRenderTarget(i,e,t){const s=new WebGLRenderTarget(i,e,t);return s.texture.mapping=CubeUVReflectionMapping,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function _setViewport(i,e,t,s,o){i.viewport.set(e,t,s,o),i.scissor.set(e,t,s,o)}function _getBlurShader(i,e,t){const s=new Float32Array(MAX_SAMPLES),o=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(i){let e=new WeakMap,t=null;function s(p){if(p&&p.isTexture){const d=p.mapping,l=d===EquirectangularReflectionMapping||d===EquirectangularRefractionMapping,u=d===CubeReflectionMapping||d===CubeRefractionMapping;if(l||u)if(p.isRenderTargetTexture&&p.needsPMREMUpdate===!0){p.needsPMREMUpdate=!1;let c=e.get(p);return t===null&&(t=new PMREMGenerator(i)),c=l?t.fromEquirectangular(p,c):t.fromCubemap(p,c),e.set(p,c),c.texture}else{if(e.has(p))return e.get(p).texture;{const c=p.image;if(l&&c&&c.height>0||u&&c&&o(c)){t===null&&(t=new PMREMGenerator(i));const g=l?t.fromEquirectangular(p):t.fromCubemap(p);return e.set(p,g),p.addEventListener("dispose",r),g.texture}else return null}}}return p}function o(p){let d=0;const l=6;for(let u=0;u<l;u++)p[u]!==void 0&&d++;return d===l}function r(p){const d=p.target;d.removeEventListener("dispose",r);const l=e.get(d);l!==void 0&&(e.delete(d),l.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:n}}function WebGLExtensions(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(s){s.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(s){const o=t(s);return o===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function WebGLGeometries(i,e,t,s){const o={},r=new WeakMap;function n(c){const g=c.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",n),delete o[g.id];const h=r.get(g);h&&(e.remove(h),r.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function p(c,g){return o[g.id]===!0||(g.addEventListener("dispose",n),o[g.id]=!0,t.memory.geometries++),g}function d(c){const g=c.attributes;for(const M in g)e.update(g[M],34962);const h=c.morphAttributes;for(const M in h){const m=h[M];for(let f=0,y=m.length;f<y;f++)e.update(m[f],34962)}}function l(c){const g=[],h=c.index,M=c.attributes.position;let m=0;if(h!==null){const v=h.array;m=h.version;for(let b=0,S=v.length;b<S;b+=3){const O=v[b+0],x=v[b+1],C=v[b+2];g.push(O,x,x,C,C,O)}}else{const v=M.array;m=M.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const O=b+0,x=b+1,C=b+2;g.push(O,x,x,C,C,O)}}const f=new(arrayNeedsUint32(g)?Uint32BufferAttribute:Uint16BufferAttribute)(g,1);f.version=m;const y=r.get(c);y&&e.remove(y),r.set(c,f)}function u(c){const g=r.get(c);if(g){const h=c.index;h!==null&&g.version<h.version&&l(c)}else l(c);return r.get(c)}return{get:p,update:d,getWireframeAttribute:u}}function WebGLIndexedBufferRenderer(i,e,t,s){const o=s.isWebGL2;let r;function n(g){r=g}let p,d;function l(g){p=g.type,d=g.bytesPerElement}function u(g,h){i.drawElements(r,h,p,g*d),t.update(h,r,1)}function c(g,h,M){if(M===0)return;let m,f;if(o)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,h,p,g*d,M),t.update(h,r,M)}this.setMode=n,this.setIndex=l,this.render=u,this.renderInstances=c}function WebGLInfo(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(r,n,p){switch(t.calls++,n){case 4:t.triangles+=p*(r/3);break;case 1:t.lines+=p*(r/2);break;case 3:t.lines+=p*(r-1);break;case 2:t.lines+=p*r;break;case 0:t.points+=p*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function o(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function numericalSort(i,e){return i[0]-e[0]}function absNumericalSort(i,e){return Math.abs(e[1])-Math.abs(i[1])}function WebGLMorphtargets(i,e,t){const s={},o=new Float32Array(8),r=new WeakMap,n=new Vector4,p=[];for(let l=0;l<8;l++)p[l]=[l,0];function d(l,u,c,g){const h=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=m!==void 0?m.length:0;let y=r.get(u);if(y===void 0||y.count!==f){let q=function(){L.dispose(),r.delete(u),u.removeEventListener("dispose",q)};var M=q;y!==void 0&&y.texture.dispose();const S=u.morphAttributes.position!==void 0,O=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let R=0;S===!0&&(R=1),O===!0&&(R=2),x===!0&&(R=3);let A=u.attributes.position.count*R,G=1;A>e.maxTextureSize&&(G=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const k=new Float32Array(A*G*4*f),L=new DataArrayTexture(k,A,G,f);L.type=FloatType,L.needsUpdate=!0;const P=R*4;for(let X=0;X<f;X++){const N=C[X],K=_[X],Z=T[X],z=A*G*4*X;for(let H=0;H<N.count;H++){const Q=H*P;S===!0&&(n.fromBufferAttribute(N,H),k[z+Q+0]=n.x,k[z+Q+1]=n.y,k[z+Q+2]=n.z,k[z+Q+3]=0),O===!0&&(n.fromBufferAttribute(K,H),k[z+Q+4]=n.x,k[z+Q+5]=n.y,k[z+Q+6]=n.z,k[z+Q+7]=0),x===!0&&(n.fromBufferAttribute(Z,H),k[z+Q+8]=n.x,k[z+Q+9]=n.y,k[z+Q+10]=n.z,k[z+Q+11]=Z.itemSize===4?n.w:1)}}y={count:f,texture:L,size:new Vector2(A,G)},r.set(u,y),u.addEventListener("dispose",q)}let v=0;for(let S=0;S<h.length;S++)v+=h[S];const b=u.morphTargetsRelative?1:1-v;g.getUniforms().setValue(i,"morphTargetBaseInfluence",b),g.getUniforms().setValue(i,"morphTargetInfluences",h),g.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),g.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{const m=h===void 0?0:h.length;let f=s[u.id];if(f===void 0||f.length!==m){f=[];for(let O=0;O<m;O++)f[O]=[O,0];s[u.id]=f}for(let O=0;O<m;O++){const x=f[O];x[0]=O,x[1]=h[O]}f.sort(absNumericalSort);for(let O=0;O<8;O++)O<m&&f[O][1]?(p[O][0]=f[O][0],p[O][1]=f[O][1]):(p[O][0]=Number.MAX_SAFE_INTEGER,p[O][1]=0);p.sort(numericalSort);const y=u.morphAttributes.position,v=u.morphAttributes.normal;let b=0;for(let O=0;O<8;O++){const x=p[O],C=x[0],_=x[1];C!==Number.MAX_SAFE_INTEGER&&_?(y&&u.getAttribute("morphTarget"+O)!==y[C]&&u.setAttribute("morphTarget"+O,y[C]),v&&u.getAttribute("morphNormal"+O)!==v[C]&&u.setAttribute("morphNormal"+O,v[C]),o[O]=_,b+=_):(y&&u.hasAttribute("morphTarget"+O)===!0&&u.deleteAttribute("morphTarget"+O),v&&u.hasAttribute("morphNormal"+O)===!0&&u.deleteAttribute("morphNormal"+O),o[O]=0)}const S=u.morphTargetsRelative?1:1-b;g.getUniforms().setValue(i,"morphTargetBaseInfluence",S),g.getUniforms().setValue(i,"morphTargetInfluences",o)}}return{update:d}}function WebGLObjects(i,e,t,s){let o=new WeakMap;function r(d){const l=s.render.frame,u=d.geometry,c=e.get(d,u);return o.get(c)!==l&&(e.update(c),o.set(c,l)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),c}function n(){o=new WeakMap}function p(d){const l=d.target;l.removeEventListener("dispose",p),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:n}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(i,e,t){const s=i[0];if(s<=0||s>0)return i;const o=e*t;let r=arrayCacheF32[o];if(r===void 0&&(r=new Float32Array(o),arrayCacheF32[o]=r),e!==0){s.toArray(r,0);for(let n=1,p=0;n!==e;++n)p+=t,i[n].toArray(r,p)}return r}function arraysEqual(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function copyArray(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function allocTexUnits(i,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function setValueV1f(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;i.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(arraysEqual(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,s))return;mat2array.set(s),i.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,s)}}function setValueM3(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(arraysEqual(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,s))return;mat3array.set(s),i.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,s)}}function setValueM4(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(arraysEqual(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,s))return;mat4array.set(s),i.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,s)}}function setValueV1i(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2iv(this.addr,e),copyArray(t,e)}}function setValueV3i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;i.uniform3iv(this.addr,e),copyArray(t,e)}}function setValueV4i(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4iv(this.addr,e),copyArray(t,e)}}function setValueV1ui(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;i.uniform2uiv(this.addr,e),copyArray(t,e)}}function setValueV3ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(arraysEqual(t,e))return;i.uniform3uiv(this.addr,e),copyArray(t,e)}}function setValueV4ui(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;i.uniform4uiv(this.addr,e),copyArray(t,e)}}function setValueT1(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2D(e||emptyTexture,o)}function setValueT3D1(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||empty3dTexture,o)}function setValueT6(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||emptyCubeTexture,o)}function setValueT2DArray1(i,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(i.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||emptyArrayTexture,o)}function getSingularSetter(i){switch(i){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(i,e){i.uniform1fv(this.addr,e)}function setValueV2fArray(i,e){const t=flatten(e,this.size,2);i.uniform2fv(this.addr,t)}function setValueV3fArray(i,e){const t=flatten(e,this.size,3);i.uniform3fv(this.addr,t)}function setValueV4fArray(i,e){const t=flatten(e,this.size,4);i.uniform4fv(this.addr,t)}function setValueM2Array(i,e){const t=flatten(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(i,e){const t=flatten(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(i,e){const t=flatten(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(i,e){i.uniform1iv(this.addr,e)}function setValueV2iArray(i,e){i.uniform2iv(this.addr,e)}function setValueV3iArray(i,e){i.uniform3iv(this.addr,e)}function setValueV4iArray(i,e){i.uniform4iv(this.addr,e)}function setValueV1uiArray(i,e){i.uniform1uiv(this.addr,e)}function setValueV2uiArray(i,e){i.uniform2uiv(this.addr,e)}function setValueV3uiArray(i,e){i.uniform3uiv(this.addr,e)}function setValueV4uiArray(i,e){i.uniform4uiv(this.addr,e)}function setValueT1Array(i,e,t){const s=this.cache,o=e.length,r=allocTexUnits(t,o);arraysEqual(s,r)||(i.uniform1iv(this.addr,r),copyArray(s,r));for(let n=0;n!==o;++n)t.setTexture2D(e[n]||emptyTexture,r[n])}function setValueT3DArray(i,e,t){const s=this.cache,o=e.length,r=allocTexUnits(t,o);arraysEqual(s,r)||(i.uniform1iv(this.addr,r),copyArray(s,r));for(let n=0;n!==o;++n)t.setTexture3D(e[n]||empty3dTexture,r[n])}function setValueT6Array(i,e,t){const s=this.cache,o=e.length,r=allocTexUnits(t,o);arraysEqual(s,r)||(i.uniform1iv(this.addr,r),copyArray(s,r));for(let n=0;n!==o;++n)t.setTextureCube(e[n]||emptyCubeTexture,r[n])}function setValueT2DArrayArray(i,e,t){const s=this.cache,o=e.length,r=allocTexUnits(t,o);arraysEqual(s,r)||(i.uniform1iv(this.addr,r),copyArray(s,r));for(let n=0;n!==o;++n)t.setTexture2DArray(e[n]||emptyArrayTexture,r[n])}function getPureArraySetter(i){switch(i){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let r=0,n=o.length;r!==n;++r){const p=o[r];p.setValue(e,t[p.id],s)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(i,e){i.seq.push(e),i.map[e.id]=e}function parseUniform(i,e,t){const s=i.name,o=s.length;for(RePathPart.lastIndex=0;;){const r=RePathPart.exec(s),n=RePathPart.lastIndex;let p=r[1];const d=r[2]==="]",l=r[3];if(d&&(p=p|0),l===void 0||l==="["&&n+2===o){addUniform(t,l===void 0?new SingleUniform(p,i,e):new PureArrayUniform(p,i,e));break}else{let c=t.map[p];c===void 0&&(c=new StructuredUniform(p),addUniform(t,c)),t=c}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,35718);for(let o=0;o<s;++o){const r=e.getActiveUniform(t,o),n=e.getUniformLocation(t,r.name);parseUniform(r,n,this)}}setValue(e,t,s,o){const r=this.map[t];r!==void 0&&r.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let r=0,n=t.length;r!==n;++r){const p=t[r],d=s[p.id];d.needsUpdate!==!1&&p.setValue(e,d.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,r=e.length;o!==r;++o){const n=e[o];n.id in t&&s.push(n)}return s}}function WebGLShader(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}let programIdCount=0;function handleSource(i,e){const t=i.split(`
`),s=[],o=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let n=o;n<r;n++){const p=n+1;s.push(`${p===e?">":" "} ${p}: ${t[n]}`)}return s.join(`
`)}function getEncodingComponents(i){switch(i){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function getShaderErrors(i,e,t){const s=i.getShaderParameter(e,35713),o=i.getShaderInfoLog(e).trim();if(s&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const n=parseInt(r[1]);return t.toUpperCase()+`

`+o+`

`+handleSource(i.getShaderSource(e),n)}else return o}function getTexelEncodingFunction(i,e){const t=getEncodingComponents(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function getToneMappingFunction(i,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateExtensions(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function fetchAttributeLocations(i,e){const t={},s=i.getProgramParameter(e,35721);for(let o=0;o<s;o++){const r=i.getActiveAttrib(e,o),n=r.name;let p=1;r.type===35674&&(p=2),r.type===35675&&(p=3),r.type===35676&&(p=4),t[n]={type:r.type,location:i.getAttribLocation(e,n),locationSize:p}}return t}function filterEmptyLine(i){return i!==""}function replaceLightNums(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(i){return i.replace(includePattern,includeReplacer)}function includeReplacer(i,e){const t=ShaderChunk[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(i){return i.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(i,e,t,s){let o="";for(let r=parseInt(e);r<parseInt(t);r++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function generatePrecision(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function WebGLProgram(i,e,t,s){const o=i.getContext(),r=t.defines;let n=t.vertexShader,p=t.fragmentShader;const d=generateShadowMapTypeDefine(t),l=generateEnvMapTypeDefine(t),u=generateEnvMapModeDefine(t),c=generateEnvMapBlendingDefine(t),g=generateCubeUVSize(t),h=t.isWebGL2?"":generateExtensions(t),M=generateDefines(r),m=o.createProgram();let f,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[M].filter(filterEmptyLine).join(`
`),f.length>0&&(f+=`
`),y=[h,M].filter(filterEmptyLine).join(`
`),y.length>0&&(y+=`
`)):(f=[generatePrecision(t),"#define SHADER_NAME "+t.shaderName,M,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),y=[h,generatePrecision(t),"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.encodings_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),n=resolveIncludes(n),n=replaceLightNums(n,t),n=replaceClippingPlaneNums(n,t),p=resolveIncludes(p),p=replaceLightNums(p,t),p=replaceClippingPlaneNums(p,t),n=unrollLoops(n),p=unrollLoops(p),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=v+f+n,S=v+y+p,O=WebGLShader(o,35633,b),x=WebGLShader(o,35632,S);if(o.attachShader(m,O),o.attachShader(m,x),t.index0AttributeName!==void 0?o.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(m,0,"position"),o.linkProgram(m),i.debug.checkShaderErrors){const T=o.getProgramInfoLog(m).trim(),R=o.getShaderInfoLog(O).trim(),A=o.getShaderInfoLog(x).trim();let G=!0,k=!0;if(o.getProgramParameter(m,35714)===!1){G=!1;const L=getShaderErrors(o,O,"vertex"),P=getShaderErrors(o,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+L+`
`+P)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||A==="")&&(k=!1);k&&(this.diagnostics={runnable:G,programLog:T,vertexShader:{log:R,prefix:f},fragmentShader:{log:A,prefix:y}})}o.deleteShader(O),o.deleteShader(x);let C;this.getUniforms=function(){return C===void 0&&(C=new WebGLUniforms(o,m)),C};let _;return this.getAttributes=function(){return _===void 0&&(_=fetchAttributeLocations(o,m)),_},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=O,this.fragmentShader=x,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(s),n=this._getShaderCacheForMaterial(e);return n.has(o)===!1&&(n.add(o),o.usedTimes++),n.has(r)===!1&&(n.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new WebGLShaderStage(e),t.set(e,s)),s}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(i,e,t,s,o,r,n){const p=new Layers,d=new WebGLShaderCache,l=[],u=o.isWebGL2,c=o.logarithmicDepthBuffer,g=o.vertexTextures;let h=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_,T,R,A,G){const k=A.fog,L=G.geometry,P=_.isMeshStandardMaterial?A.environment:null,q=(_.isMeshStandardMaterial?t:e).get(_.envMap||P),X=q&&q.mapping===CubeUVReflectionMapping?q.image.height:null,N=M[_.type];_.precision!==null&&(h=o.getMaxPrecision(_.precision),h!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=K!==void 0?K.length:0;let z=0;L.morphAttributes.position!==void 0&&(z=1),L.morphAttributes.normal!==void 0&&(z=2),L.morphAttributes.color!==void 0&&(z=3);let H,Q,te,re;if(N){const we=ShaderLib[N];H=we.vertexShader,Q=we.fragmentShader}else H=_.vertexShader,Q=_.fragmentShader,d.update(_),te=d.getVertexShaderID(_),re=d.getFragmentShaderID(_);const $=i.getRenderTarget(),Fe=_.alphaTest>0,pe=_.clearcoat>0,ye=_.iridescence>0;return{isWebGL2:u,shaderID:N,shaderName:_.type,vertexShader:H,fragmentShader:Q,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:g,outputEncoding:$===null?i.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:LinearEncoding,map:!!_.map,matcap:!!_.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:X,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===ObjectSpaceNormalMap,tangentSpaceNormalMap:_.normalMapType===TangentSpaceNormalMap,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===sRGBEncoding,clearcoat:pe,clearcoatMap:pe&&!!_.clearcoatMap,clearcoatRoughnessMap:pe&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!_.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!_.iridescenceMap,iridescenceThicknessMap:ye&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===NormalBlending,alphaMap:!!_.alphaMap,alphaTest:Fe,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!L.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!k,useFog:_.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:c,skinning:G.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:NoToneMapping,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===DoubleSide,flipSided:_.side===BackSide,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||s.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(y(T,_),v(T,_),T.push(i.outputEncoding)),T.push(_.customProgramCacheKey),T.join()}function y(_,T){_.push(T.precision),_.push(T.outputEncoding),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.combine),_.push(T.vertexUvs),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function v(_,T){p.disableAll(),T.isWebGL2&&p.enable(0),T.supportsVertexTextures&&p.enable(1),T.instancing&&p.enable(2),T.instancingColor&&p.enable(3),T.map&&p.enable(4),T.matcap&&p.enable(5),T.envMap&&p.enable(6),T.lightMap&&p.enable(7),T.aoMap&&p.enable(8),T.emissiveMap&&p.enable(9),T.bumpMap&&p.enable(10),T.normalMap&&p.enable(11),T.objectSpaceNormalMap&&p.enable(12),T.tangentSpaceNormalMap&&p.enable(13),T.clearcoat&&p.enable(14),T.clearcoatMap&&p.enable(15),T.clearcoatRoughnessMap&&p.enable(16),T.clearcoatNormalMap&&p.enable(17),T.iridescence&&p.enable(18),T.iridescenceMap&&p.enable(19),T.iridescenceThicknessMap&&p.enable(20),T.displacementMap&&p.enable(21),T.specularMap&&p.enable(22),T.roughnessMap&&p.enable(23),T.metalnessMap&&p.enable(24),T.gradientMap&&p.enable(25),T.alphaMap&&p.enable(26),T.alphaTest&&p.enable(27),T.vertexColors&&p.enable(28),T.vertexAlphas&&p.enable(29),T.vertexUvs&&p.enable(30),T.vertexTangents&&p.enable(31),T.uvsVertexOnly&&p.enable(32),_.push(p.mask),p.disableAll(),T.fog&&p.enable(0),T.useFog&&p.enable(1),T.flatShading&&p.enable(2),T.logarithmicDepthBuffer&&p.enable(3),T.skinning&&p.enable(4),T.morphTargets&&p.enable(5),T.morphNormals&&p.enable(6),T.morphColors&&p.enable(7),T.premultipliedAlpha&&p.enable(8),T.shadowMapEnabled&&p.enable(9),T.physicallyCorrectLights&&p.enable(10),T.doubleSided&&p.enable(11),T.flipSided&&p.enable(12),T.useDepthPacking&&p.enable(13),T.dithering&&p.enable(14),T.specularIntensityMap&&p.enable(15),T.specularColorMap&&p.enable(16),T.transmission&&p.enable(17),T.transmissionMap&&p.enable(18),T.thicknessMap&&p.enable(19),T.sheen&&p.enable(20),T.sheenColorMap&&p.enable(21),T.sheenRoughnessMap&&p.enable(22),T.decodeVideoTexture&&p.enable(23),T.opaque&&p.enable(24),_.push(p.mask)}function b(_){const T=M[_.type];let R;if(T){const A=ShaderLib[T];R=UniformsUtils.clone(A.uniforms)}else R=_.uniforms;return R}function S(_,T){let R;for(let A=0,G=l.length;A<G;A++){const k=l[A];if(k.cacheKey===T){R=k,++R.usedTimes;break}}return R===void 0&&(R=new WebGLProgram(i,T,_,r),l.push(R)),R}function O(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),_.destroy()}}function x(_){d.remove(_)}function C(){d.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:S,releaseProgram:O,releaseShaderCache:x,programs:l,dispose:C}}function WebGLProperties(){let i=new WeakMap;function e(r){let n=i.get(r);return n===void 0&&(n={},i.set(r,n)),n}function t(r){i.delete(r)}function s(r,n,p){i.get(r)[n]=p}function o(){i=new WeakMap}return{get:e,remove:t,update:s,dispose:o}}function painterSortStable(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function reversePainterSortStable(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function WebGLRenderList(){const i=[];let e=0;const t=[],s=[],o=[];function r(){e=0,t.length=0,s.length=0,o.length=0}function n(c,g,h,M,m,f){let y=i[e];return y===void 0?(y={id:c.id,object:c,geometry:g,material:h,groupOrder:M,renderOrder:c.renderOrder,z:m,group:f},i[e]=y):(y.id=c.id,y.object=c,y.geometry=g,y.material=h,y.groupOrder=M,y.renderOrder=c.renderOrder,y.z=m,y.group=f),e++,y}function p(c,g,h,M,m,f){const y=n(c,g,h,M,m,f);h.transmission>0?s.push(y):h.transparent===!0?o.push(y):t.push(y)}function d(c,g,h,M,m,f){const y=n(c,g,h,M,m,f);h.transmission>0?s.unshift(y):h.transparent===!0?o.unshift(y):t.unshift(y)}function l(c,g){t.length>1&&t.sort(c||painterSortStable),s.length>1&&s.sort(g||reversePainterSortStable),o.length>1&&o.sort(g||reversePainterSortStable)}function u(){for(let c=e,g=i.length;c<g;c++){const h=i[c];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:s,transparent:o,init:r,push:p,unshift:d,finish:u,sort:l}}function WebGLRenderLists(){let i=new WeakMap;function e(s,o){const r=i.get(s);let n;return r===void 0?(n=new WebGLRenderList,i.set(s,[n])):o>=r.length?(n=new WebGLRenderList,r.push(n)):n=r[o],n}function t(){i=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return i[e.id]=t,t}}}function ShadowUniformsCache(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function WebGLLights(i,e){const t=new UniformsCache,s=ShadowUniformsCache(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)o.probe.push(new Vector3);const r=new Vector3,n=new Matrix4,p=new Matrix4;function d(u,c){let g=0,h=0,M=0;for(let A=0;A<9;A++)o.probe[A].set(0,0,0);let m=0,f=0,y=0,v=0,b=0,S=0,O=0,x=0,C=0,_=0;u.sort(shadowCastingAndTexturingLightsFirst);const T=c!==!0?Math.PI:1;for(let A=0,G=u.length;A<G;A++){const k=u[A],L=k.color,P=k.intensity,q=k.distance,X=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=L.r*P*T,h+=L.g*P*T,M+=L.b*P*T;else if(k.isLightProbe)for(let N=0;N<9;N++)o.probe[N].addScaledVector(k.sh.coefficients[N],P);else if(k.isDirectionalLight){const N=t.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const K=k.shadow,Z=s.get(k);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,o.directionalShadow[m]=Z,o.directionalShadowMap[m]=X,o.directionalShadowMatrix[m]=k.shadow.matrix,S++}o.directional[m]=N,m++}else if(k.isSpotLight){const N=t.get(k);N.position.setFromMatrixPosition(k.matrixWorld),N.color.copy(L).multiplyScalar(P*T),N.distance=q,N.coneCos=Math.cos(k.angle),N.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),N.decay=k.decay,o.spot[y]=N;const K=k.shadow;if(k.map&&(o.spotLightMap[C]=k.map,C++,K.updateMatrices(k),k.castShadow&&_++),o.spotLightMatrix[y]=K.matrix,k.castShadow){const Z=s.get(k);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,o.spotShadow[y]=Z,o.spotShadowMap[y]=X,x++}y++}else if(k.isRectAreaLight){const N=t.get(k);N.color.copy(L).multiplyScalar(P),N.halfWidth.set(k.width*.5,0,0),N.halfHeight.set(0,k.height*.5,0),o.rectArea[v]=N,v++}else if(k.isPointLight){const N=t.get(k);if(N.color.copy(k.color).multiplyScalar(k.intensity*T),N.distance=k.distance,N.decay=k.decay,k.castShadow){const K=k.shadow,Z=s.get(k);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,o.pointShadow[f]=Z,o.pointShadowMap[f]=X,o.pointShadowMatrix[f]=k.shadow.matrix,O++}o.point[f]=N,f++}else if(k.isHemisphereLight){const N=t.get(k);N.skyColor.copy(k.color).multiplyScalar(P*T),N.groundColor.copy(k.groundColor).multiplyScalar(P*T),o.hemi[b]=N,b++}}v>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,o.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=UniformsLib.LTC_HALF_1,o.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=g,o.ambient[1]=h,o.ambient[2]=M;const R=o.hash;(R.directionalLength!==m||R.pointLength!==f||R.spotLength!==y||R.rectAreaLength!==v||R.hemiLength!==b||R.numDirectionalShadows!==S||R.numPointShadows!==O||R.numSpotShadows!==x||R.numSpotMaps!==C)&&(o.directional.length=m,o.spot.length=y,o.rectArea.length=v,o.point.length=f,o.hemi.length=b,o.directionalShadow.length=S,o.directionalShadowMap.length=S,o.pointShadow.length=O,o.pointShadowMap.length=O,o.spotShadow.length=x,o.spotShadowMap.length=x,o.directionalShadowMatrix.length=S,o.pointShadowMatrix.length=O,o.spotLightMatrix.length=x+C-_,o.spotLightMap.length=C,o.numSpotLightShadowsWithMaps=_,R.directionalLength=m,R.pointLength=f,R.spotLength=y,R.rectAreaLength=v,R.hemiLength=b,R.numDirectionalShadows=S,R.numPointShadows=O,R.numSpotShadows=x,R.numSpotMaps=C,o.version=nextVersion++)}function l(u,c){let g=0,h=0,M=0,m=0,f=0;const y=c.matrixWorldInverse;for(let v=0,b=u.length;v<b;v++){const S=u[v];if(S.isDirectionalLight){const O=o.directional[g];O.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(y),g++}else if(S.isSpotLight){const O=o.spot[M];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),O.direction.sub(r),O.direction.transformDirection(y),M++}else if(S.isRectAreaLight){const O=o.rectArea[m];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(y),p.identity(),n.copy(S.matrixWorld),n.premultiply(y),p.extractRotation(n),O.halfWidth.set(S.width*.5,0,0),O.halfHeight.set(0,S.height*.5,0),O.halfWidth.applyMatrix4(p),O.halfHeight.applyMatrix4(p),m++}else if(S.isPointLight){const O=o.point[h];O.position.setFromMatrixPosition(S.matrixWorld),O.position.applyMatrix4(y),h++}else if(S.isHemisphereLight){const O=o.hemi[f];O.direction.setFromMatrixPosition(S.matrixWorld),O.direction.transformDirection(y),f++}}}return{setup:d,setupView:l,state:o}}function WebGLRenderState(i,e){const t=new WebGLLights(i,e),s=[],o=[];function r(){s.length=0,o.length=0}function n(c){s.push(c)}function p(c){o.push(c)}function d(c){t.setup(s,c)}function l(c){t.setupView(s,c)}return{init:r,state:{lightsArray:s,shadowsArray:o,lights:t},setupLights:d,setupLightsView:l,pushLight:n,pushShadow:p}}function WebGLRenderStates(i,e){let t=new WeakMap;function s(r,n=0){const p=t.get(r);let d;return p===void 0?(d=new WebGLRenderState(i,e),t.set(r,[d])):n>=p.length?(d=new WebGLRenderState(i,e),p.push(d)):d=p[n],d}function o(){t=new WeakMap}return{get:s,dispose:o}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Vector3,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(i,e,t){let s=new Frustum;const o=new Vector2,r=new Vector2,n=new Vector4,p=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),d=new MeshDistanceMaterial,l={},u=t.maxTextureSize,c={0:BackSide,1:FrontSide,2:DoubleSide},g=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),h=g.clone();h.defines.HORIZONTAL_PASS=1;const M=new BufferGeometry;M.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Mesh(M,g),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap,this.render=function(S,O,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const C=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),R=i.state;R.setBlending(NoBlending),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let A=0,G=S.length;A<G;A++){const k=S[A],L=k.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;o.copy(L.mapSize);const P=L.getFrameExtents();if(o.multiply(P),r.copy(L.mapSize),(o.x>u||o.y>u)&&(o.x>u&&(r.x=Math.floor(u/P.x),o.x=r.x*P.x,L.mapSize.x=r.x),o.y>u&&(r.y=Math.floor(u/P.y),o.y=r.y*P.y,L.mapSize.y=r.y)),L.map===null){const X=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};L.map=new WebGLRenderTarget(o.x,o.y,X),L.map.texture.name=k.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const q=L.getViewportCount();for(let X=0;X<q;X++){const N=L.getViewport(X);n.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),R.viewport(n),L.updateMatrices(k,X),s=L.getFrustum(),b(O,x,L.camera,k,this.type)}L.isPointLightShadow!==!0&&this.type===VSMShadowMap&&y(L,x),L.needsUpdate=!1}f.needsUpdate=!1,i.setRenderTarget(C,_,T)};function y(S,O){const x=e.update(m);g.defines.VSM_SAMPLES!==S.blurSamples&&(g.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,g.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new WebGLRenderTarget(o.x,o.y)),g.uniforms.shadow_pass.value=S.map.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(O,null,x,g,m,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(O,null,x,h,m,null)}function v(S,O,x,C,_,T){let R=null;const A=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)R=A;else if(R=x.isPointLight===!0?d:p,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const G=R.uuid,k=O.uuid;let L=l[G];L===void 0&&(L={},l[G]=L);let P=L[k];P===void 0&&(P=R.clone(),L[k]=P),R=P}return R.visible=O.visible,R.wireframe=O.wireframe,T===VSMShadowMap?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:c[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(x.matrixWorld),R.nearDistance=C,R.farDistance=_),R}function b(S,O,x,C,_){if(S.visible===!1)return;if(S.layers.test(O.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===VSMShadowMap)&&(!S.frustumCulled||s.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);const A=e.update(S),G=S.material;if(Array.isArray(G)){const k=A.groups;for(let L=0,P=k.length;L<P;L++){const q=k[L],X=G[q.materialIndex];if(X&&X.visible){const N=v(S,X,C,x.near,x.far,_);i.renderBufferDirect(x,null,A,N,S,q)}}}else if(G.visible){const k=v(S,G,C,x.near,x.far,_);i.renderBufferDirect(x,null,A,k,S,null)}}const R=S.children;for(let A=0,G=R.length;A<G;A++)b(R[A],O,x,C,_)}}function WebGLState(i,e,t){const s=t.isWebGL2;function o(){let B=!1;const j=new Vector4;let J=null;const ae=new Vector4(0,0,0,0);return{setMask:function(le){J!==le&&!B&&(i.colorMask(le,le,le,le),J=le)},setLocked:function(le){B=le},setClear:function(le,Ce,Ge,ze,Qe){Qe===!0&&(le*=ze,Ce*=ze,Ge*=ze),j.set(le,Ce,Ge,ze),ae.equals(j)===!1&&(i.clearColor(le,Ce,Ge,ze),ae.copy(j))},reset:function(){B=!1,J=null,ae.set(-1,0,0,0)}}}function r(){let B=!1,j=null,J=null,ae=null;return{setTest:function(le){le?Fe(2929):pe(2929)},setMask:function(le){j!==le&&!B&&(i.depthMask(le),j=le)},setFunc:function(le){if(J!==le){switch(le){case NeverDepth:i.depthFunc(512);break;case AlwaysDepth:i.depthFunc(519);break;case LessDepth:i.depthFunc(513);break;case LessEqualDepth:i.depthFunc(515);break;case EqualDepth:i.depthFunc(514);break;case GreaterEqualDepth:i.depthFunc(518);break;case GreaterDepth:i.depthFunc(516);break;case NotEqualDepth:i.depthFunc(517);break;default:i.depthFunc(515)}J=le}},setLocked:function(le){B=le},setClear:function(le){ae!==le&&(i.clearDepth(le),ae=le)},reset:function(){B=!1,j=null,J=null,ae=null}}}function n(){let B=!1,j=null,J=null,ae=null,le=null,Ce=null,Ge=null,ze=null,Qe=null;return{setTest:function(ke){B||(ke?Fe(2960):pe(2960))},setMask:function(ke){j!==ke&&!B&&(i.stencilMask(ke),j=ke)},setFunc:function(ke,Je,Ye){(J!==ke||ae!==Je||le!==Ye)&&(i.stencilFunc(ke,Je,Ye),J=ke,ae=Je,le=Ye)},setOp:function(ke,Je,Ye){(Ce!==ke||Ge!==Je||ze!==Ye)&&(i.stencilOp(ke,Je,Ye),Ce=ke,Ge=Je,ze=Ye)},setLocked:function(ke){B=ke},setClear:function(ke){Qe!==ke&&(i.clearStencil(ke),Qe=ke)},reset:function(){B=!1,j=null,J=null,ae=null,le=null,Ce=null,Ge=null,ze=null,Qe=null}}}const p=new o,d=new r,l=new n,u=new WeakMap,c=new WeakMap;let g={},h={},M=new WeakMap,m=[],f=null,y=!1,v=null,b=null,S=null,O=null,x=null,C=null,_=null,T=!1,R=null,A=null,G=null,k=null,L=null;const P=i.getParameter(35661);let q=!1,X=0;const N=i.getParameter(7938);N.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(N)[1]),q=X>=1):N.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),q=X>=2);let K=null,Z={};const z=i.getParameter(3088),H=i.getParameter(2978),Q=new Vector4().fromArray(z),te=new Vector4().fromArray(H);function re(B,j,J){const ae=new Uint8Array(4),le=i.createTexture();i.bindTexture(B,le),i.texParameteri(B,10241,9728),i.texParameteri(B,10240,9728);for(let Ce=0;Ce<J;Ce++)i.texImage2D(j+Ce,0,6408,1,1,0,6408,5121,ae);return le}const $={};$[3553]=re(3553,3553,1),$[34067]=re(34067,34069,6),p.setClear(0,0,0,1),d.setClear(1),l.setClear(0),Fe(2929),d.setFunc(LessEqualDepth),Ue(!1),Xe(CullFaceBack),Fe(2884),je(NoBlending);function Fe(B){g[B]!==!0&&(i.enable(B),g[B]=!0)}function pe(B){g[B]!==!1&&(i.disable(B),g[B]=!1)}function ye(B,j){return h[B]!==j?(i.bindFramebuffer(B,j),h[B]=j,s&&(B===36009&&(h[36160]=j),B===36160&&(h[36009]=j)),!0):!1}function se(B,j){let J=m,ae=!1;if(B)if(J=M.get(j),J===void 0&&(J=[],M.set(j,J)),B.isWebGLMultipleRenderTargets){const le=B.texture;if(J.length!==le.length||J[0]!==36064){for(let Ce=0,Ge=le.length;Ce<Ge;Ce++)J[Ce]=36064+Ce;J.length=le.length,ae=!0}}else J[0]!==36064&&(J[0]=36064,ae=!0);else J[0]!==1029&&(J[0]=1029,ae=!0);ae&&(t.isWebGL2?i.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function we(B){return f!==B?(i.useProgram(B),f=B,!0):!1}const ve={[AddEquation]:32774,[SubtractEquation]:32778,[ReverseSubtractEquation]:32779};if(s)ve[MinEquation]=32775,ve[MaxEquation]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(ve[MinEquation]=B.MIN_EXT,ve[MaxEquation]=B.MAX_EXT)}const me={[ZeroFactor]:0,[OneFactor]:1,[SrcColorFactor]:768,[SrcAlphaFactor]:770,[SrcAlphaSaturateFactor]:776,[DstColorFactor]:774,[DstAlphaFactor]:772,[OneMinusSrcColorFactor]:769,[OneMinusSrcAlphaFactor]:771,[OneMinusDstColorFactor]:775,[OneMinusDstAlphaFactor]:773};function je(B,j,J,ae,le,Ce,Ge,ze){if(B===NoBlending){y===!0&&(pe(3042),y=!1);return}if(y===!1&&(Fe(3042),y=!0),B!==CustomBlending){if(B!==v||ze!==T){if((b!==AddEquation||x!==AddEquation)&&(i.blendEquation(32774),b=AddEquation,x=AddEquation),ze)switch(B){case NormalBlending:i.blendFuncSeparate(1,771,1,771);break;case AdditiveBlending:i.blendFunc(1,1);break;case SubtractiveBlending:i.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case NormalBlending:i.blendFuncSeparate(770,771,1,771);break;case AdditiveBlending:i.blendFunc(770,1);break;case SubtractiveBlending:i.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,O=null,C=null,_=null,v=B,T=ze}return}le=le||j,Ce=Ce||J,Ge=Ge||ae,(j!==b||le!==x)&&(i.blendEquationSeparate(ve[j],ve[le]),b=j,x=le),(J!==S||ae!==O||Ce!==C||Ge!==_)&&(i.blendFuncSeparate(me[J],me[ae],me[Ce],me[Ge]),S=J,O=ae,C=Ce,_=Ge),v=B,T=!1}function We(B,j){B.side===DoubleSide?pe(2884):Fe(2884);let J=B.side===BackSide;j&&(J=!J),Ue(J),B.blending===NormalBlending&&B.transparent===!1?je(NoBlending):je(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),d.setFunc(B.depthFunc),d.setTest(B.depthTest),d.setMask(B.depthWrite),p.setMask(B.colorWrite);const ae=B.stencilWrite;l.setTest(ae),ae&&(l.setMask(B.stencilWriteMask),l.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),l.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Fe(32926):pe(32926)}function Ue(B){R!==B&&(B?i.frontFace(2304):i.frontFace(2305),R=B)}function Xe(B){B!==CullFaceNone?(Fe(2884),B!==A&&(B===CullFaceBack?i.cullFace(1029):B===CullFaceFront?i.cullFace(1028):i.cullFace(1032))):pe(2884),A=B}function Ie(B){B!==G&&(q&&i.lineWidth(B),G=B)}function Ae(B,j,J){B?(Fe(32823),(k!==j||L!==J)&&(i.polygonOffset(j,J),k=j,L=J)):pe(32823)}function Ke(B){B?Fe(3089):pe(3089)}function qe(B){B===void 0&&(B=33984+P-1),K!==B&&(i.activeTexture(B),K=B)}function w(B,j,J){J===void 0&&(K===null?J=33984+P-1:J=K);let ae=Z[J];ae===void 0&&(ae={type:void 0,texture:void 0},Z[J]=ae),(ae.type!==B||ae.texture!==j)&&(K!==J&&(i.activeTexture(J),K=J),i.bindTexture(B,j||$[B]),ae.type=B,ae.texture=j)}function F(){const B=Z[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function U(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(B){Q.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Q.copy(B))}function ce(B){te.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function Re(B,j){let J=c.get(j);J===void 0&&(J=new WeakMap,c.set(j,J));let ae=J.get(B);ae===void 0&&(ae=i.getUniformBlockIndex(j,B.name),J.set(B,ae))}function Le(B,j){const ae=c.get(j).get(B);u.get(j)!==ae&&(i.uniformBlockBinding(j,ae,B.__bindingPointIndex),u.set(j,ae))}function Pe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),s===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},K=null,Z={},h={},M=new WeakMap,m=[],f=null,y=!1,v=null,b=null,S=null,O=null,x=null,C=null,_=null,T=!1,R=null,A=null,G=null,k=null,L=null,Q.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),p.reset(),d.reset(),l.reset()}return{buffers:{color:p,depth:d,stencil:l},enable:Fe,disable:pe,bindFramebuffer:ye,drawBuffers:se,useProgram:we,setBlending:je,setMaterial:We,setFlipSided:Ue,setCullFace:Xe,setLineWidth:Ie,setPolygonOffset:Ae,setScissorTest:Ke,activeTexture:qe,bindTexture:w,unbindTexture:F,compressedTexImage2D:U,compressedTexImage3D:ee,texImage2D:fe,texImage3D:de,updateUBOMapping:Re,uniformBlockBinding:Le,texStorage2D:Y,texStorage3D:ge,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:_e,compressedTexSubImage3D:ne,scissor:he,viewport:ce,reset:Pe}}function WebGLTextures(i,e,t,s,o,r,n){const p=o.isWebGL2,d=o.maxTextures,l=o.maxCubemapSize,u=o.maxTextureSize,c=o.maxSamples,g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new WeakMap;let m;const f=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,F){return y?new OffscreenCanvas(w,F):createElementNS("canvas")}function b(w,F,U,ee){let ie=1;if((w.width>ee||w.height>ee)&&(ie=ee/Math.max(w.width,w.height)),ie<1||F===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const oe=F?floorPowerOfTwo:Math.floor,_e=oe(ie*w.width),ne=oe(ie*w.height);m===void 0&&(m=v(_e,ne));const Y=U?v(_e,ne):m;return Y.width=_e,Y.height=ne,Y.getContext("2d").drawImage(w,0,0,_e,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+ne+")."),Y}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return isPowerOfTwo(w.width)&&isPowerOfTwo(w.height)}function O(w){return p?!1:w.wrapS!==ClampToEdgeWrapping||w.wrapT!==ClampToEdgeWrapping||w.minFilter!==NearestFilter&&w.minFilter!==LinearFilter}function x(w,F){return w.generateMipmaps&&F&&w.minFilter!==NearestFilter&&w.minFilter!==LinearFilter}function C(w){i.generateMipmap(w)}function _(w,F,U,ee,ie=!1){if(p===!1)return F;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe=F;return F===6403&&(U===5126&&(oe=33326),U===5131&&(oe=33325),U===5121&&(oe=33321)),F===33319&&(U===5126&&(oe=33328),U===5131&&(oe=33327),U===5121&&(oe=33323)),F===6408&&(U===5126&&(oe=34836),U===5131&&(oe=34842),U===5121&&(oe=ee===sRGBEncoding&&ie===!1?35907:32856),U===32819&&(oe=32854),U===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function T(w,F,U){return x(w,U)===!0||w.isFramebufferTexture&&w.minFilter!==NearestFilter&&w.minFilter!==LinearFilter?Math.log2(Math.max(F.width,F.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?F.mipmaps.length:1}function R(w){return w===NearestFilter||w===NearestMipmapNearestFilter||w===NearestMipmapLinearFilter?9728:9729}function A(w){const F=w.target;F.removeEventListener("dispose",A),k(F),F.isVideoTexture&&M.delete(F)}function G(w){const F=w.target;F.removeEventListener("dispose",G),P(F)}function k(w){const F=s.get(w);if(F.__webglInit===void 0)return;const U=w.source,ee=f.get(U);if(ee){const ie=ee[F.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(w),Object.keys(ee).length===0&&f.delete(U)}s.remove(w)}function L(w){const F=s.get(w);i.deleteTexture(F.__webglTexture);const U=w.source,ee=f.get(U);delete ee[F.__cacheKey],n.memory.textures--}function P(w){const F=w.texture,U=s.get(w),ee=s.get(F);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),n.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(U.__webglFramebuffer[ie]),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ie=0;ie<U.__webglColorRenderbuffer.length;ie++)U.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[ie]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ie=0,oe=F.length;ie<oe;ie++){const _e=s.get(F[ie]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),n.memory.textures--),s.remove(F[ie])}s.remove(F),s.remove(w)}let q=0;function X(){q=0}function N(){const w=q;return w>=d&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+d),q+=1,w}function K(w){const F=[];return F.push(w.wrapS),F.push(w.wrapT),F.push(w.wrapR||0),F.push(w.magFilter),F.push(w.minFilter),F.push(w.anisotropy),F.push(w.internalFormat),F.push(w.format),F.push(w.type),F.push(w.generateMipmaps),F.push(w.premultiplyAlpha),F.push(w.flipY),F.push(w.unpackAlignment),F.push(w.encoding),F.join()}function Z(w,F){const U=s.get(w);if(w.isVideoTexture&&Ke(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(U,w,F);return}}t.bindTexture(3553,U.__webglTexture,33984+F)}function z(w,F){const U=s.get(w);if(w.version>0&&U.__version!==w.version){pe(U,w,F);return}t.bindTexture(35866,U.__webglTexture,33984+F)}function H(w,F){const U=s.get(w);if(w.version>0&&U.__version!==w.version){pe(U,w,F);return}t.bindTexture(32879,U.__webglTexture,33984+F)}function Q(w,F){const U=s.get(w);if(w.version>0&&U.__version!==w.version){ye(U,w,F);return}t.bindTexture(34067,U.__webglTexture,33984+F)}const te={[RepeatWrapping]:10497,[ClampToEdgeWrapping]:33071,[MirroredRepeatWrapping]:33648},re={[NearestFilter]:9728,[NearestMipmapNearestFilter]:9984,[NearestMipmapLinearFilter]:9986,[LinearFilter]:9729,[LinearMipmapNearestFilter]:9985,[LinearMipmapLinearFilter]:9987};function $(w,F,U){if(U?(i.texParameteri(w,10242,te[F.wrapS]),i.texParameteri(w,10243,te[F.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,te[F.wrapR]),i.texParameteri(w,10240,re[F.magFilter]),i.texParameteri(w,10241,re[F.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(F.wrapS!==ClampToEdgeWrapping||F.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,R(F.magFilter)),i.texParameteri(w,10241,R(F.minFilter)),F.minFilter!==NearestFilter&&F.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(F.magFilter===NearestFilter||F.minFilter!==NearestMipmapLinearFilter&&F.minFilter!==LinearMipmapLinearFilter||F.type===FloatType&&e.has("OES_texture_float_linear")===!1||p===!1&&F.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(F.anisotropy>1||s.get(F).__currentAnisotropy)&&(i.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,o.getMaxAnisotropy())),s.get(F).__currentAnisotropy=F.anisotropy)}}function Fe(w,F){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,F.addEventListener("dispose",A));const ee=F.source;let ie=f.get(ee);ie===void 0&&(ie={},f.set(ee,ie));const oe=K(F);if(oe!==w.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:i.createTexture(),usedTimes:0},n.memory.textures++,U=!0),ie[oe].usedTimes++;const _e=ie[w.__cacheKey];_e!==void 0&&(ie[w.__cacheKey].usedTimes--,_e.usedTimes===0&&L(F)),w.__cacheKey=oe,w.__webglTexture=ie[oe].texture}return U}function pe(w,F,U){let ee=3553;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(ee=35866),F.isData3DTexture&&(ee=32879);const ie=Fe(w,F),oe=F.source;t.bindTexture(ee,w.__webglTexture,33984+U);const _e=s.get(oe);if(oe.version!==_e.__version||ie===!0){t.activeTexture(33984+U),i.pixelStorei(37440,F.flipY),i.pixelStorei(37441,F.premultiplyAlpha),i.pixelStorei(3317,F.unpackAlignment),i.pixelStorei(37443,0);const ne=O(F)&&S(F.image)===!1;let Y=b(F.image,ne,!1,u);Y=qe(F,Y);const ge=S(Y)||p,fe=r.convert(F.format,F.encoding);let de=r.convert(F.type),he=_(F.internalFormat,fe,de,F.encoding,F.isVideoTexture);$(ee,F,ge);let ce;const Re=F.mipmaps,Le=p&&F.isVideoTexture!==!0,Pe=_e.__version===void 0||ie===!0,B=T(F,Y,ge);if(F.isDepthTexture)he=6402,p?F.type===FloatType?he=36012:F.type===UnsignedIntType?he=33190:F.type===UnsignedInt248Type?he=35056:he=33189:F.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),F.format===DepthFormat&&he===6402&&F.type!==UnsignedShortType&&F.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),F.type=UnsignedIntType,de=r.convert(F.type)),F.format===DepthStencilFormat&&he===6402&&(he=34041,F.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),F.type=UnsignedInt248Type,de=r.convert(F.type))),Pe&&(Le?t.texStorage2D(3553,1,he,Y.width,Y.height):t.texImage2D(3553,0,he,Y.width,Y.height,0,fe,de,null));else if(F.isDataTexture)if(Re.length>0&&ge){Le&&Pe&&t.texStorage2D(3553,B,he,Re[0].width,Re[0].height);for(let j=0,J=Re.length;j<J;j++)ce=Re[j],Le?t.texSubImage2D(3553,j,0,0,ce.width,ce.height,fe,de,ce.data):t.texImage2D(3553,j,he,ce.width,ce.height,0,fe,de,ce.data);F.generateMipmaps=!1}else Le?(Pe&&t.texStorage2D(3553,B,he,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,fe,de,Y.data)):t.texImage2D(3553,0,he,Y.width,Y.height,0,fe,de,Y.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Le&&Pe&&t.texStorage3D(35866,B,he,Re[0].width,Re[0].height,Y.depth);for(let j=0,J=Re.length;j<J;j++)ce=Re[j],F.format!==RGBAFormat?fe!==null?Le?t.compressedTexSubImage3D(35866,j,0,0,0,ce.width,ce.height,Y.depth,fe,ce.data,0,0):t.compressedTexImage3D(35866,j,he,ce.width,ce.height,Y.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,j,0,0,0,ce.width,ce.height,Y.depth,fe,de,ce.data):t.texImage3D(35866,j,he,ce.width,ce.height,Y.depth,0,fe,de,ce.data)}else{Le&&Pe&&t.texStorage2D(3553,B,he,Re[0].width,Re[0].height);for(let j=0,J=Re.length;j<J;j++)ce=Re[j],F.format!==RGBAFormat?fe!==null?Le?t.compressedTexSubImage2D(3553,j,0,0,ce.width,ce.height,fe,ce.data):t.compressedTexImage2D(3553,j,he,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,j,0,0,ce.width,ce.height,fe,de,ce.data):t.texImage2D(3553,j,he,ce.width,ce.height,0,fe,de,ce.data)}else if(F.isDataArrayTexture)Le?(Pe&&t.texStorage3D(35866,B,he,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,fe,de,Y.data)):t.texImage3D(35866,0,he,Y.width,Y.height,Y.depth,0,fe,de,Y.data);else if(F.isData3DTexture)Le?(Pe&&t.texStorage3D(32879,B,he,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,fe,de,Y.data)):t.texImage3D(32879,0,he,Y.width,Y.height,Y.depth,0,fe,de,Y.data);else if(F.isFramebufferTexture){if(Pe)if(Le)t.texStorage2D(3553,B,he,Y.width,Y.height);else{let j=Y.width,J=Y.height;for(let ae=0;ae<B;ae++)t.texImage2D(3553,ae,he,j,J,0,fe,de,null),j>>=1,J>>=1}}else if(Re.length>0&&ge){Le&&Pe&&t.texStorage2D(3553,B,he,Re[0].width,Re[0].height);for(let j=0,J=Re.length;j<J;j++)ce=Re[j],Le?t.texSubImage2D(3553,j,0,0,fe,de,ce):t.texImage2D(3553,j,he,fe,de,ce);F.generateMipmaps=!1}else Le?(Pe&&t.texStorage2D(3553,B,he,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,fe,de,Y)):t.texImage2D(3553,0,he,fe,de,Y);x(F,ge)&&C(ee),_e.__version=oe.version,F.onUpdate&&F.onUpdate(F)}w.__version=F.version}function ye(w,F,U){if(F.image.length!==6)return;const ee=Fe(w,F),ie=F.source;t.bindTexture(34067,w.__webglTexture,33984+U);const oe=s.get(ie);if(ie.version!==oe.__version||ee===!0){t.activeTexture(33984+U),i.pixelStorei(37440,F.flipY),i.pixelStorei(37441,F.premultiplyAlpha),i.pixelStorei(3317,F.unpackAlignment),i.pixelStorei(37443,0);const _e=F.isCompressedTexture||F.image[0].isCompressedTexture,ne=F.image[0]&&F.image[0].isDataTexture,Y=[];for(let j=0;j<6;j++)!_e&&!ne?Y[j]=b(F.image[j],!1,!0,l):Y[j]=ne?F.image[j].image:F.image[j],Y[j]=qe(F,Y[j]);const ge=Y[0],fe=S(ge)||p,de=r.convert(F.format,F.encoding),he=r.convert(F.type),ce=_(F.internalFormat,de,he,F.encoding),Re=p&&F.isVideoTexture!==!0,Le=oe.__version===void 0||ee===!0;let Pe=T(F,ge,fe);$(34067,F,fe);let B;if(_e){Re&&Le&&t.texStorage2D(34067,Pe,ce,ge.width,ge.height);for(let j=0;j<6;j++){B=Y[j].mipmaps;for(let J=0;J<B.length;J++){const ae=B[J];F.format!==RGBAFormat?de!==null?Re?t.compressedTexSubImage2D(34069+j,J,0,0,ae.width,ae.height,de,ae.data):t.compressedTexImage2D(34069+j,J,ce,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+j,J,0,0,ae.width,ae.height,de,he,ae.data):t.texImage2D(34069+j,J,ce,ae.width,ae.height,0,de,he,ae.data)}}}else{B=F.mipmaps,Re&&Le&&(B.length>0&&Pe++,t.texStorage2D(34067,Pe,ce,Y[0].width,Y[0].height));for(let j=0;j<6;j++)if(ne){Re?t.texSubImage2D(34069+j,0,0,0,Y[j].width,Y[j].height,de,he,Y[j].data):t.texImage2D(34069+j,0,ce,Y[j].width,Y[j].height,0,de,he,Y[j].data);for(let J=0;J<B.length;J++){const le=B[J].image[j].image;Re?t.texSubImage2D(34069+j,J+1,0,0,le.width,le.height,de,he,le.data):t.texImage2D(34069+j,J+1,ce,le.width,le.height,0,de,he,le.data)}}else{Re?t.texSubImage2D(34069+j,0,0,0,de,he,Y[j]):t.texImage2D(34069+j,0,ce,de,he,Y[j]);for(let J=0;J<B.length;J++){const ae=B[J];Re?t.texSubImage2D(34069+j,J+1,0,0,de,he,ae.image[j]):t.texImage2D(34069+j,J+1,ce,de,he,ae.image[j])}}}x(F,fe)&&C(34067),oe.__version=ie.version,F.onUpdate&&F.onUpdate(F)}w.__version=F.version}function se(w,F,U,ee,ie){const oe=r.convert(U.format,U.encoding),_e=r.convert(U.type),ne=_(U.internalFormat,oe,_e,U.encoding);s.get(F).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,ne,F.width,F.height,F.depth,0,oe,_e,null):t.texImage2D(ie,0,ne,F.width,F.height,0,oe,_e,null)),t.bindFramebuffer(36160,w),Ae(F)?g.framebufferTexture2DMultisampleEXT(36160,ee,ie,s.get(U).__webglTexture,0,Ie(F)):(ie===3553||ie>=34069&&ie<=34074)&&i.framebufferTexture2D(36160,ee,ie,s.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(w,F,U){if(i.bindRenderbuffer(36161,w),F.depthBuffer&&!F.stencilBuffer){let ee=33189;if(U||Ae(F)){const ie=F.depthTexture;ie&&ie.isDepthTexture&&(ie.type===FloatType?ee=36012:ie.type===UnsignedIntType&&(ee=33190));const oe=Ie(F);Ae(F)?g.renderbufferStorageMultisampleEXT(36161,oe,ee,F.width,F.height):i.renderbufferStorageMultisample(36161,oe,ee,F.width,F.height)}else i.renderbufferStorage(36161,ee,F.width,F.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(F.depthBuffer&&F.stencilBuffer){const ee=Ie(F);U&&Ae(F)===!1?i.renderbufferStorageMultisample(36161,ee,35056,F.width,F.height):Ae(F)?g.renderbufferStorageMultisampleEXT(36161,ee,35056,F.width,F.height):i.renderbufferStorage(36161,34041,F.width,F.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const ee=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let ie=0;ie<ee.length;ie++){const oe=ee[ie],_e=r.convert(oe.format,oe.encoding),ne=r.convert(oe.type),Y=_(oe.internalFormat,_e,ne,oe.encoding),ge=Ie(F);U&&Ae(F)===!1?i.renderbufferStorageMultisample(36161,ge,Y,F.width,F.height):Ae(F)?g.renderbufferStorageMultisampleEXT(36161,ge,Y,F.width,F.height):i.renderbufferStorage(36161,Y,F.width,F.height)}}i.bindRenderbuffer(36161,null)}function ve(w,F){if(F&&F.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(F.depthTexture).__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),Z(F.depthTexture,0);const ee=s.get(F.depthTexture).__webglTexture,ie=Ie(F);if(F.depthTexture.format===DepthFormat)Ae(F)?g.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):i.framebufferTexture2D(36160,36096,3553,ee,0);else if(F.depthTexture.format===DepthStencilFormat)Ae(F)?g.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):i.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function me(w){const F=s.get(w),U=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!F.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ve(F.__webglFramebuffer,w)}else if(U){F.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,F.__webglFramebuffer[ee]),F.__webglDepthbuffer[ee]=i.createRenderbuffer(),we(F.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(36160,F.__webglFramebuffer),F.__webglDepthbuffer=i.createRenderbuffer(),we(F.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function je(w,F,U){const ee=s.get(w);F!==void 0&&se(ee.__webglFramebuffer,w,w.texture,36064,3553),U!==void 0&&me(w)}function We(w){const F=w.texture,U=s.get(w),ee=s.get(F);w.addEventListener("dispose",G),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=F.version,n.memory.textures++);const ie=w.isWebGLCubeRenderTarget===!0,oe=w.isWebGLMultipleRenderTargets===!0,_e=S(w)||p;if(ie){U.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)U.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(U.__webglFramebuffer=i.createFramebuffer(),oe)if(o.drawBuffers){const ne=w.texture;for(let Y=0,ge=ne.length;Y<ge;Y++){const fe=s.get(ne[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),n.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(p&&w.samples>0&&Ae(w)===!1){const ne=oe?F:[F];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const ge=ne[Y];U.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(36161,U.__webglColorRenderbuffer[Y]);const fe=r.convert(ge.format,ge.encoding),de=r.convert(ge.type),he=_(ge.internalFormat,fe,de,ge.encoding,w.isXRRenderTarget===!0),ce=Ie(w);i.renderbufferStorageMultisample(36161,ce,he,w.width,w.height),i.framebufferRenderbuffer(36160,36064+Y,36161,U.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),we(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),$(34067,F,_e);for(let ne=0;ne<6;ne++)se(U.__webglFramebuffer[ne],w,F,36064,34069+ne);x(F,_e)&&C(34067),t.unbindTexture()}else if(oe){const ne=w.texture;for(let Y=0,ge=ne.length;Y<ge;Y++){const fe=ne[Y],de=s.get(fe);t.bindTexture(3553,de.__webglTexture),$(3553,fe,_e),se(U.__webglFramebuffer,w,fe,36064+Y,3553),x(fe,_e)&&C(3553)}t.unbindTexture()}else{let ne=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(p?ne=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,ee.__webglTexture),$(ne,F,_e),se(U.__webglFramebuffer,w,F,36064,ne),x(F,_e)&&C(ne),t.unbindTexture()}w.depthBuffer&&me(w)}function Ue(w){const F=S(w)||p,U=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,ie=U.length;ee<ie;ee++){const oe=U[ee];if(x(oe,F)){const _e=w.isWebGLCubeRenderTarget?34067:3553,ne=s.get(oe).__webglTexture;t.bindTexture(_e,ne),C(_e),t.unbindTexture()}}}function Xe(w){if(p&&w.samples>0&&Ae(w)===!1){const F=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],U=w.width,ee=w.height;let ie=16384;const oe=[],_e=w.stencilBuffer?33306:36096,ne=s.get(w),Y=w.isWebGLMultipleRenderTargets===!0;if(Y)for(let ge=0;ge<F.length;ge++)t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,ne.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ne.__webglFramebuffer);for(let ge=0;ge<F.length;ge++){oe.push(36064+ge),w.depthBuffer&&oe.push(_e);const fe=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(fe===!1&&(w.depthBuffer&&(ie|=256),w.stencilBuffer&&(ie|=1024)),Y&&i.framebufferRenderbuffer(36008,36064,36161,ne.__webglColorRenderbuffer[ge]),fe===!0&&(i.invalidateFramebuffer(36008,[_e]),i.invalidateFramebuffer(36009,[_e])),Y){const de=s.get(F[ge]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,de,0)}i.blitFramebuffer(0,0,U,ee,0,0,U,ee,ie,9728),h&&i.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let ge=0;ge<F.length;ge++){t.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ge,36161,ne.__webglColorRenderbuffer[ge]);const fe=s.get(F[ge]).__webglTexture;t.bindFramebuffer(36160,ne.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ge,3553,fe,0)}t.bindFramebuffer(36009,ne.__webglMultisampledFramebuffer)}}function Ie(w){return Math.min(c,w.samples)}function Ae(w){const F=s.get(w);return p&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function Ke(w){const F=n.render.frame;M.get(w)!==F&&(M.set(w,F),w.update())}function qe(w,F){const U=w.encoding,ee=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===_SRGBAFormat||U!==LinearEncoding&&(U===sRGBEncoding?p===!1?e.has("EXT_sRGB")===!0&&ee===RGBAFormat?(w.format=_SRGBAFormat,w.minFilter=LinearFilter,w.generateMipmaps=!1):F=ImageUtils.sRGBToLinear(F):(ee!==RGBAFormat||ie!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),F}this.allocateTextureUnit=N,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=je,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ae}function WebGLUtils(i,e,t){const s=t.isWebGL2;function o(r,n=null){let p;if(r===UnsignedByteType)return 5121;if(r===UnsignedShort4444Type)return 32819;if(r===UnsignedShort5551Type)return 32820;if(r===ByteType)return 5120;if(r===ShortType)return 5122;if(r===UnsignedShortType)return 5123;if(r===IntType)return 5124;if(r===UnsignedIntType)return 5125;if(r===FloatType)return 5126;if(r===HalfFloatType)return s?5131:(p=e.get("OES_texture_half_float"),p!==null?p.HALF_FLOAT_OES:null);if(r===AlphaFormat)return 6406;if(r===RGBAFormat)return 6408;if(r===LuminanceFormat)return 6409;if(r===LuminanceAlphaFormat)return 6410;if(r===DepthFormat)return 6402;if(r===DepthStencilFormat)return 34041;if(r===RGBFormat)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===_SRGBAFormat)return p=e.get("EXT_sRGB"),p!==null?p.SRGB_ALPHA_EXT:null;if(r===RedFormat)return 6403;if(r===RedIntegerFormat)return 36244;if(r===RGFormat)return 33319;if(r===RGIntegerFormat)return 33320;if(r===RGBAIntegerFormat)return 36249;if(r===RGB_S3TC_DXT1_Format||r===RGBA_S3TC_DXT1_Format||r===RGBA_S3TC_DXT3_Format||r===RGBA_S3TC_DXT5_Format)if(n===sRGBEncoding)if(p=e.get("WEBGL_compressed_texture_s3tc_srgb"),p!==null){if(r===RGB_S3TC_DXT1_Format)return p.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===RGBA_S3TC_DXT1_Format)return p.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===RGBA_S3TC_DXT3_Format)return p.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===RGBA_S3TC_DXT5_Format)return p.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(p=e.get("WEBGL_compressed_texture_s3tc"),p!==null){if(r===RGB_S3TC_DXT1_Format)return p.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===RGBA_S3TC_DXT1_Format)return p.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===RGBA_S3TC_DXT3_Format)return p.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===RGBA_S3TC_DXT5_Format)return p.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===RGB_PVRTC_4BPPV1_Format||r===RGB_PVRTC_2BPPV1_Format||r===RGBA_PVRTC_4BPPV1_Format||r===RGBA_PVRTC_2BPPV1_Format)if(p=e.get("WEBGL_compressed_texture_pvrtc"),p!==null){if(r===RGB_PVRTC_4BPPV1_Format)return p.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===RGB_PVRTC_2BPPV1_Format)return p.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===RGBA_PVRTC_4BPPV1_Format)return p.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===RGBA_PVRTC_2BPPV1_Format)return p.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===RGB_ETC1_Format)return p=e.get("WEBGL_compressed_texture_etc1"),p!==null?p.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===RGB_ETC2_Format||r===RGBA_ETC2_EAC_Format)if(p=e.get("WEBGL_compressed_texture_etc"),p!==null){if(r===RGB_ETC2_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ETC2:p.COMPRESSED_RGB8_ETC2;if(r===RGBA_ETC2_EAC_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:p.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===RGBA_ASTC_4x4_Format||r===RGBA_ASTC_5x4_Format||r===RGBA_ASTC_5x5_Format||r===RGBA_ASTC_6x5_Format||r===RGBA_ASTC_6x6_Format||r===RGBA_ASTC_8x5_Format||r===RGBA_ASTC_8x6_Format||r===RGBA_ASTC_8x8_Format||r===RGBA_ASTC_10x5_Format||r===RGBA_ASTC_10x6_Format||r===RGBA_ASTC_10x8_Format||r===RGBA_ASTC_10x10_Format||r===RGBA_ASTC_12x10_Format||r===RGBA_ASTC_12x12_Format)if(p=e.get("WEBGL_compressed_texture_astc"),p!==null){if(r===RGBA_ASTC_4x4_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:p.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===RGBA_ASTC_5x4_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:p.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===RGBA_ASTC_5x5_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:p.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===RGBA_ASTC_6x5_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:p.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===RGBA_ASTC_6x6_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:p.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===RGBA_ASTC_8x5_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:p.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===RGBA_ASTC_8x6_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:p.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===RGBA_ASTC_8x8_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:p.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===RGBA_ASTC_10x5_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:p.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===RGBA_ASTC_10x6_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:p.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===RGBA_ASTC_10x8_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:p.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===RGBA_ASTC_10x10_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:p.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===RGBA_ASTC_12x10_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:p.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===RGBA_ASTC_12x12_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:p.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===RGBA_BPTC_Format)if(p=e.get("EXT_texture_compression_bptc"),p!==null){if(r===RGBA_BPTC_Format)return n===sRGBEncoding?p.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:p.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===UnsignedInt248Type?s?34042:(p=e.get("WEBGL_depth_texture"),p!==null?p.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:o}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,r=null,n=null;const p=this._targetRay,d=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,s),y=this._getHandJoint(l,m);f!==null&&(y.matrix.fromArray(f.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=f.radius),y.visible=f!==null}const u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],g=u.position.distanceTo(c.position),h=.02,M=.005;l.inputState.pinching&&g>h+M?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&g<=h-M&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,s),r!==null&&(d.matrix.fromArray(r.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),r.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(r.linearVelocity)):d.hasLinearVelocity=!1,r.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(r.angularVelocity)):d.hasAngularVelocity=!1));p!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&r!==null&&(o=r),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return p!==null&&(p.visible=o!==null),d!==null&&(d.visible=r!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Group;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class DepthTexture extends Texture{constructor(e,t,s,o,r,n,p,d,l,u){if(u=u!==void 0?u:DepthFormat,u!==DepthFormat&&u!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&u===DepthFormat&&(s=UnsignedIntType),s===void 0&&u===DepthStencilFormat&&(s=UnsignedInt248Type),super(null,o,r,n,p,d,u,s,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=p!==void 0?p:NearestFilter,this.minFilter=d!==void 0?d:NearestFilter,this.flipY=!1,this.generateMipmaps=!1}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const s=this;let o=null,r=1,n=null,p="local-floor",d=null,l=null,u=null,c=null,g=null,h=null;const M=t.getContextAttributes();let m=null,f=null;const y=[],v=[],b=new Set,S=new Map,O=new PerspectiveCamera;O.layers.enable(1),O.viewport=new Vector4;const x=new PerspectiveCamera;x.layers.enable(2),x.viewport=new Vector4;const C=[O,x],_=new ArrayCamera;_.layers.enable(1),_.layers.enable(2);let T=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let H=y[z];return H===void 0&&(H=new WebXRController,y[z]=H),H.getTargetRaySpace()},this.getControllerGrip=function(z){let H=y[z];return H===void 0&&(H=new WebXRController,y[z]=H),H.getGripSpace()},this.getHand=function(z){let H=y[z];return H===void 0&&(H=new WebXRController,y[z]=H),H.getHandSpace()};function A(z){const H=v.indexOf(z.inputSource);if(H===-1)return;const Q=y[H];Q!==void 0&&Q.dispatchEvent({type:z.type,data:z.inputSource})}function G(){o.removeEventListener("select",A),o.removeEventListener("selectstart",A),o.removeEventListener("selectend",A),o.removeEventListener("squeeze",A),o.removeEventListener("squeezestart",A),o.removeEventListener("squeezeend",A),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",k);for(let z=0;z<y.length;z++){const H=v[z];H!==null&&(v[z]=null,y[z].disconnect(H))}T=null,R=null,e.setRenderTarget(m),g=null,c=null,u=null,o=null,f=null,Z.stop(),s.isPresenting=!1,s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){p=z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||n},this.setReferenceSpace=function(z){d=z},this.getBaseLayer=function(){return c!==null?c:g},this.getBinding=function(){return u},this.getFrame=function(){return h},this.getSession=function(){return o},this.setSession=async function(z){if(o=z,o!==null){if(m=e.getRenderTarget(),o.addEventListener("select",A),o.addEventListener("selectstart",A),o.addEventListener("selectend",A),o.addEventListener("squeeze",A),o.addEventListener("squeezestart",A),o.addEventListener("squeezeend",A),o.addEventListener("end",G),o.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:o.renderState.layers===void 0?M.antialias:!0,alpha:M.alpha,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(o,t,H),o.updateRenderState({baseLayer:g}),f=new WebGLRenderTarget(g.framebufferWidth,g.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,encoding:e.outputEncoding,stencilBuffer:M.stencil})}else{let H=null,Q=null,te=null;M.depth&&(te=M.stencil?35056:33190,H=M.stencil?DepthStencilFormat:DepthFormat,Q=M.stencil?UnsignedInt248Type:UnsignedIntType);const re={colorFormat:32856,depthFormat:te,scaleFactor:r};u=new XRWebGLBinding(o,t),c=u.createProjectionLayer(re),o.updateRenderState({layers:[c]}),f=new WebGLRenderTarget(c.textureWidth,c.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(c.textureWidth,c.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:M.stencil,encoding:e.outputEncoding,samples:M.antialias?4:0});const $=e.properties.get(f);$.__ignoreDepthValues=c.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),d=null,n=await o.requestReferenceSpace(p),Z.setContext(o),Z.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}};function k(z){for(let H=0;H<z.removed.length;H++){const Q=z.removed[H],te=v.indexOf(Q);te>=0&&(v[te]=null,y[te].disconnect(Q))}for(let H=0;H<z.added.length;H++){const Q=z.added[H];let te=v.indexOf(Q);if(te===-1){for(let $=0;$<y.length;$++)if($>=v.length){v.push(Q),te=$;break}else if(v[$]===null){v[$]=Q,te=$;break}if(te===-1)break}const re=y[te];re&&re.connect(Q)}}const L=new Vector3,P=new Vector3;function q(z,H,Q){L.setFromMatrixPosition(H.matrixWorld),P.setFromMatrixPosition(Q.matrixWorld);const te=L.distanceTo(P),re=H.projectionMatrix.elements,$=Q.projectionMatrix.elements,Fe=re[14]/(re[10]-1),pe=re[14]/(re[10]+1),ye=(re[9]+1)/re[5],se=(re[9]-1)/re[5],we=(re[8]-1)/re[0],ve=($[8]+1)/$[0],me=Fe*we,je=Fe*ve,We=te/(-we+ve),Ue=We*-we;H.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ue),z.translateZ(We),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Xe=Fe+We,Ie=pe+We,Ae=me-Ue,Ke=je+(te-Ue),qe=ye*pe/Ie*Xe,w=se*pe/Ie*Xe;z.projectionMatrix.makePerspective(Ae,Ke,qe,w,Xe,Ie)}function X(z,H){H===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(H.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(o===null)return;_.near=x.near=O.near=z.near,_.far=x.far=O.far=z.far,(T!==_.near||R!==_.far)&&(o.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,R=_.far);const H=z.parent,Q=_.cameras;X(_,H);for(let re=0;re<Q.length;re++)X(Q[re],H);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),z.matrix.copy(_.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const te=z.children;for(let re=0,$=te.length;re<$;re++)te[re].updateMatrixWorld(!0);Q.length===2?q(_,O,x):_.projectionMatrix.copy(O.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(c!==null)return c.fixedFoveation;if(g!==null)return g.fixedFoveation},this.setFoveation=function(z){c!==null&&(c.fixedFoveation=z),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=z)},this.getPlanes=function(){return b};let N=null;function K(z,H){if(l=H.getViewerPose(d||n),h=H,l!==null){const Q=l.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let te=!1;Q.length!==_.cameras.length&&(_.cameras.length=0,te=!0);for(let re=0;re<Q.length;re++){const $=Q[re];let Fe=null;if(g!==null)Fe=g.getViewport($);else{const ye=u.getViewSubImage(c,$);Fe=ye.viewport,re===0&&(e.setRenderTargetTextures(f,ye.colorTexture,c.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(f))}let pe=C[re];pe===void 0&&(pe=new PerspectiveCamera,pe.layers.enable(re),pe.viewport=new Vector4,C[re]=pe),pe.matrix.fromArray($.transform.matrix),pe.projectionMatrix.fromArray($.projectionMatrix),pe.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),re===0&&_.matrix.copy(pe.matrix),te===!0&&_.cameras.push(pe)}}for(let Q=0;Q<y.length;Q++){const te=v[Q],re=y[Q];te!==null&&re!==void 0&&re.update(te,H,d||n)}if(N&&N(z,H),H.detectedPlanes){s.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let Q=null;for(const te of b)H.detectedPlanes.has(te)||(Q===null&&(Q=[]),Q.push(te));if(Q!==null)for(const te of Q)b.delete(te),S.delete(te),s.dispatchEvent({type:"planeremoved",data:te});for(const te of H.detectedPlanes)if(!b.has(te))b.add(te),S.set(te,H.lastChangedTime),s.dispatchEvent({type:"planeadded",data:te});else{const re=S.get(te);te.lastChangedTime>re&&(S.set(te,te.lastChangedTime),s.dispatchEvent({type:"planechanged",data:te}))}}h=null}const Z=new WebGLAnimation;Z.setAnimationLoop(K),this.setAnimationLoop=function(z){N=z},this.dispose=function(){}}}function WebGLMaterials(i,e){function t(m,f){f.color.getRGB(m.fogColor.value,getUnlitUniformColorSpace(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),u(m,f)):f.isMeshPhongMaterial?(o(m,f),l(m,f)):f.isMeshStandardMaterial?(o(m,f),c(m,f),f.isMeshPhysicalMaterial&&g(m,f,b)):f.isMeshMatcapMaterial?(o(m,f),h(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),M(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&n(m,f)):f.isPointsMaterial?p(m,f,y,v):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===BackSide&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===BackSide&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const S=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*S}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let v;f.map?v=f.map:f.specularMap?v=f.specularMap:f.displacementMap?v=f.displacementMap:f.normalMap?v=f.normalMap:f.bumpMap?v=f.bumpMap:f.roughnessMap?v=f.roughnessMap:f.metalnessMap?v=f.metalnessMap:f.alphaMap?v=f.alphaMap:f.emissiveMap?v=f.emissiveMap:f.clearcoatMap?v=f.clearcoatMap:f.clearcoatNormalMap?v=f.clearcoatNormalMap:f.clearcoatRoughnessMap?v=f.clearcoatRoughnessMap:f.iridescenceMap?v=f.iridescenceMap:f.iridescenceThicknessMap?v=f.iridescenceThicknessMap:f.specularIntensityMap?v=f.specularIntensityMap:f.specularColorMap?v=f.specularColorMap:f.transmissionMap?v=f.transmissionMap:f.thicknessMap?v=f.thicknessMap:f.sheenColorMap?v=f.sheenColorMap:f.sheenRoughnessMap&&(v=f.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let b;f.aoMap?b=f.aoMap:f.lightMap&&(b=f.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function n(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function p(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function l(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===BackSide&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function h(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:s}}function WebGLUniformsGroups(i,e,t,s){let o={},r={},n=[];const p=t.isWebGL2?i.getParameter(35375):0;function d(v,b){const S=b.program;s.uniformBlockBinding(v,S)}function l(v,b){let S=o[v.id];S===void 0&&(M(v),S=u(v),o[v.id]=S,v.addEventListener("dispose",f));const O=b.program;s.updateUBOMapping(v,O);const x=e.render.frame;r[v.id]!==x&&(g(v),r[v.id]=x)}function u(v){const b=c();v.__bindingPointIndex=b;const S=i.createBuffer(),O=v.__size,x=v.usage;return i.bindBuffer(35345,S),i.bufferData(35345,O,x),i.bindBuffer(35345,null),i.bindBufferBase(35345,b,S),S}function c(){for(let v=0;v<p;v++)if(n.indexOf(v)===-1)return n.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(v){const b=o[v.id],S=v.uniforms,O=v.__cache;i.bindBuffer(35345,b);for(let x=0,C=S.length;x<C;x++){const _=S[x];if(h(_,x,O)===!0){const T=_.__offset,R=Array.isArray(_.value)?_.value:[_.value];let A=0;for(let G=0;G<R.length;G++){const k=R[G],L=m(k);typeof k=="number"?(_.__data[0]=k,i.bufferSubData(35345,T+A,_.__data)):k.isMatrix3?(_.__data[0]=k.elements[0],_.__data[1]=k.elements[1],_.__data[2]=k.elements[2],_.__data[3]=k.elements[0],_.__data[4]=k.elements[3],_.__data[5]=k.elements[4],_.__data[6]=k.elements[5],_.__data[7]=k.elements[0],_.__data[8]=k.elements[6],_.__data[9]=k.elements[7],_.__data[10]=k.elements[8],_.__data[11]=k.elements[0]):(k.toArray(_.__data,A),A+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,T,_.__data)}}i.bindBuffer(35345,null)}function h(v,b,S){const O=v.value;if(S[b]===void 0){if(typeof O=="number")S[b]=O;else{const x=Array.isArray(O)?O:[O],C=[];for(let _=0;_<x.length;_++)C.push(x[_].clone());S[b]=C}return!0}else if(typeof O=="number"){if(S[b]!==O)return S[b]=O,!0}else{const x=Array.isArray(S[b])?S[b]:[S[b]],C=Array.isArray(O)?O:[O];for(let _=0;_<x.length;_++){const T=x[_];if(T.equals(C[_])===!1)return T.copy(C[_]),!0}}return!1}function M(v){const b=v.uniforms;let S=0;const O=16;let x=0;for(let C=0,_=b.length;C<_;C++){const T=b[C],R={boundary:0,storage:0},A=Array.isArray(T.value)?T.value:[T.value];for(let G=0,k=A.length;G<k;G++){const L=A[G],P=m(L);R.boundary+=P.boundary,R.storage+=P.storage}if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,C>0){x=S%O;const G=O-x;x!==0&&G-R.boundary<0&&(S+=O-x,T.__offset=S)}S+=R.storage}return x=S%O,x>0&&(S+=O-x),v.__size=S,v.__cache={},this}function m(v){const b={boundary:0,storage:0};return typeof v=="number"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function f(v){const b=v.target;b.removeEventListener("dispose",f);const S=n.indexOf(b.__bindingPointIndex);n.splice(S,1),i.deleteBuffer(o[b.id]),delete o[b.id],delete r[b.id]}function y(){for(const v in o)i.deleteBuffer(o[v]);n=[],o={},r={}}return{bind:d,update:l,dispose:y}}function createCanvasElement(){const i=createElementNS("canvas");return i.style.display="block",i}function WebGLRenderer(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:createCanvasElement(),t=i.context!==void 0?i.context:null,s=i.depth!==void 0?i.depth:!0,o=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,n=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,p=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,d=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let c=null,g=null;const h=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=LinearEncoding,this.physicallyCorrectLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const m=this;let f=!1,y=0,v=0,b=null,S=-1,O=null;const x=new Vector4,C=new Vector4;let _=null,T=e.width,R=e.height,A=1,G=null,k=null;const L=new Vector4(0,0,T,R),P=new Vector4(0,0,T,R);let q=!1;const X=new Frustum;let N=!1,K=!1,Z=null;const z=new Matrix4,H=new Vector2,Q=new Vector3,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return b===null?A:1}let $=t;function Fe(E,I){for(let W=0;W<E.length;W++){const D=E[W],V=e.getContext(D,I);if(V!==null)return V}return null}try{const E={alpha:!0,depth:s,stencil:o,antialias:r,premultipliedAlpha:n,preserveDrawingBuffer:p,powerPreference:d,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${REVISION}`),e.addEventListener("webglcontextlost",he,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Re,!1),$===null){const I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),$=Fe(I,E),$===null)throw Fe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,ye,se,we,ve,me,je,We,Ue,Xe,Ie,Ae,Ke,qe,w,F,U,ee,ie,oe,_e,ne,Y,ge;function fe(){pe=new WebGLExtensions($),ye=new WebGLCapabilities($,pe,i),pe.init(ye),ne=new WebGLUtils($,pe,ye),se=new WebGLState($,pe,ye),we=new WebGLInfo,ve=new WebGLProperties,me=new WebGLTextures($,pe,se,ve,ye,ne,we),je=new WebGLCubeMaps(m),We=new WebGLCubeUVMaps(m),Ue=new WebGLAttributes($,ye),Y=new WebGLBindingStates($,pe,Ue,ye),Xe=new WebGLGeometries($,Ue,we,Y),Ie=new WebGLObjects($,Xe,Ue,we),ie=new WebGLMorphtargets($,ye,me),F=new WebGLClipping(ve),Ae=new WebGLPrograms(m,je,We,pe,ye,Y,F),Ke=new WebGLMaterials(m,ve),qe=new WebGLRenderLists,w=new WebGLRenderStates(pe,ye),ee=new WebGLBackground(m,je,We,se,Ie,u,n),U=new WebGLShadowMap(m,Ie,ye),ge=new WebGLUniformsGroups($,we,ye,se),oe=new WebGLBufferRenderer($,pe,we,ye),_e=new WebGLIndexedBufferRenderer($,pe,we,ye),we.programs=Ae.programs,m.capabilities=ye,m.extensions=pe,m.properties=ve,m.renderLists=qe,m.shadowMap=U,m.state=se,m.info=we}fe();const de=new WebXRManager(m,$);this.xr=de,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(E){E!==void 0&&(A=E,this.setSize(T,R,!1))},this.getSize=function(E){return E.set(T,R)},this.setSize=function(E,I,W){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,R=I,e.width=Math.floor(E*A),e.height=Math.floor(I*A),W!==!1&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(T*A,R*A).floor()},this.setDrawingBufferSize=function(E,I,W){T=E,R=I,A=W,e.width=Math.floor(E*W),e.height=Math.floor(I*W),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(L)},this.setViewport=function(E,I,W,D){E.isVector4?L.set(E.x,E.y,E.z,E.w):L.set(E,I,W,D),se.viewport(x.copy(L).multiplyScalar(A).floor())},this.getScissor=function(E){return E.copy(P)},this.setScissor=function(E,I,W,D){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,I,W,D),se.scissor(C.copy(P).multiplyScalar(A).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(E){se.setScissorTest(q=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,I=!0,W=!0){let D=0;E&&(D|=16384),I&&(D|=256),W&&(D|=1024),$.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",he,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),qe.dispose(),w.dispose(),ve.dispose(),je.dispose(),We.dispose(),Ie.dispose(),Y.dispose(),ge.dispose(),Ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",ae),de.removeEventListener("sessionend",le),Z&&(Z.dispose(),Z=null),Ce.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=we.autoReset,I=U.enabled,W=U.autoUpdate,D=U.needsUpdate,V=U.type;fe(),we.autoReset=E,U.enabled=I,U.autoUpdate=W,U.needsUpdate=D,U.type=V}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){const I=E.target;I.removeEventListener("dispose",Le),Pe(I)}function Pe(E){B(E),ve.remove(E)}function B(E){const I=ve.get(E).programs;I!==void 0&&(I.forEach(function(W){Ae.releaseProgram(W)}),E.isShaderMaterial&&Ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,W,D,V,ue){I===null&&(I=te);const be=V.isMesh&&V.matrixWorld.determinant()<0,Me=ct(E,I,W,D,V);se.setMaterial(D,be);let Se=W.index,Ee=1;D.wireframe===!0&&(Se=Xe.getWireframeAttribute(W),Ee=2);const Oe=W.drawRange,xe=W.attributes.position;let Be=Oe.start*Ee,Ve=(Oe.start+Oe.count)*Ee;ue!==null&&(Be=Math.max(Be,ue.start*Ee),Ve=Math.min(Ve,(ue.start+ue.count)*Ee)),Se!==null?(Be=Math.max(Be,0),Ve=Math.min(Ve,Se.count)):xe!=null&&(Be=Math.max(Be,0),Ve=Math.min(Ve,xe.count));const Ze=Ve-Be;if(Ze<0||Ze===1/0)return;Y.setup(V,D,Me,W,Se);let et,De=oe;if(Se!==null&&(et=Ue.get(Se),De=_e,De.setIndex(et)),V.isMesh)D.wireframe===!0?(se.setLineWidth(D.wireframeLinewidth*re()),De.setMode(1)):De.setMode(4);else if(V.isLine){let Te=D.linewidth;Te===void 0&&(Te=1),se.setLineWidth(Te*re()),V.isLineSegments?De.setMode(1):V.isLineLoop?De.setMode(2):De.setMode(3)}else V.isPoints?De.setMode(0):V.isSprite&&De.setMode(4);if(V.isInstancedMesh)De.renderInstances(Be,Ze,V.count);else if(W.isInstancedBufferGeometry){const Te=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ot=Math.min(W.instanceCount,Te);De.renderInstances(Be,Ze,ot)}else De.render(Be,Ze)},this.compile=function(E,I){function W(D,V,ue){D.transparent===!0&&D.side===TwoPassDoubleSide?(D.side=BackSide,D.needsUpdate=!0,Ye(D,V,ue),D.side=FrontSide,D.needsUpdate=!0,Ye(D,V,ue),D.side=TwoPassDoubleSide):Ye(D,V,ue)}g=w.get(E),g.init(),M.push(g),E.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(g.pushLight(D),D.castShadow&&g.pushShadow(D))}),g.setupLights(m.physicallyCorrectLights),E.traverse(function(D){const V=D.material;if(V)if(Array.isArray(V))for(let ue=0;ue<V.length;ue++){const be=V[ue];W(be,E,D)}else W(V,E,D)}),M.pop(),g=null};let j=null;function J(E){j&&j(E)}function ae(){Ce.stop()}function le(){Ce.start()}const Ce=new WebGLAnimation;Ce.setAnimationLoop(J),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(E){j=E,de.setAnimationLoop(E),E===null?Ce.stop():Ce.start()},de.addEventListener("sessionstart",ae),de.addEventListener("sessionend",le),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(I),I=de.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,I,b),g=w.get(E,M.length),g.init(),M.push(g),z.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),X.setFromProjectionMatrix(z),K=this.localClippingEnabled,N=F.init(this.clippingPlanes,K,I),c=qe.get(E,h.length),c.init(),h.push(c),Ge(E,I,0,m.sortObjects),c.finish(),m.sortObjects===!0&&c.sort(G,k),N===!0&&F.beginShadows();const W=g.state.shadowsArray;if(U.render(W,E,I),N===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(c,E),g.setupLights(m.physicallyCorrectLights),I.isArrayCamera){const D=I.cameras;for(let V=0,ue=D.length;V<ue;V++){const be=D[V];ze(c,E,be,be.viewport)}}else ze(c,E,I);b!==null&&(me.updateMultisampleRenderTarget(b),me.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(m,E,I),Y.resetDefaultState(),S=-1,O=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,h.pop(),h.length>0?c=h[h.length-1]:c=null};function Ge(E,I,W,D){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){D&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);const be=Ie.update(E),Me=E.material;Me.visible&&c.push(E,be,Me,W,Q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==we.render.frame&&(E.skeleton.update(),E.skeleton.frame=we.render.frame),!E.frustumCulled||X.intersectsObject(E))){D&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);const be=Ie.update(E),Me=E.material;if(Array.isArray(Me)){const Se=be.groups;for(let Ee=0,Oe=Se.length;Ee<Oe;Ee++){const xe=Se[Ee],Be=Me[xe.materialIndex];Be&&Be.visible&&c.push(E,be,Be,W,Q.z,xe)}}else Me.visible&&c.push(E,be,Me,W,Q.z,null)}}const ue=E.children;for(let be=0,Me=ue.length;be<Me;be++)Ge(ue[be],I,W,D)}function ze(E,I,W,D){const V=E.opaque,ue=E.transmissive,be=E.transparent;g.setupLightsView(W),ue.length>0&&Qe(V,I,W),D&&se.viewport(x.copy(D)),V.length>0&&ke(V,I,W),ue.length>0&&ke(ue,I,W),be.length>0&&ke(be,I,W),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Qe(E,I,W){const D=ye.isWebGL2;Z===null&&(Z=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:D&&r===!0?4:0})),m.getDrawingBufferSize(H),D?Z.setSize(H.x,H.y):Z.setSize(floorPowerOfTwo(H.x),floorPowerOfTwo(H.y));const V=m.getRenderTarget();m.setRenderTarget(Z),m.clear();const ue=m.toneMapping;m.toneMapping=NoToneMapping,ke(E,I,W),m.toneMapping=ue,me.updateMultisampleRenderTarget(Z),me.updateRenderTargetMipmap(Z),m.setRenderTarget(V)}function ke(E,I,W){const D=I.isScene===!0?I.overrideMaterial:null;for(let V=0,ue=E.length;V<ue;V++){const be=E[V],Me=be.object,Se=be.geometry,Ee=D===null?be.material:D,Oe=be.group;Me.layers.test(W.layers)&&Je(Me,I,W,Se,Ee,Oe)}}function Je(E,I,W,D,V,ue){E.onBeforeRender(m,I,W,D,V,ue),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(m,I,W,D,E,ue),V.transparent===!0&&V.side===TwoPassDoubleSide?(V.side=BackSide,V.needsUpdate=!0,m.renderBufferDirect(W,I,D,V,E,ue),V.side=FrontSide,V.needsUpdate=!0,m.renderBufferDirect(W,I,D,V,E,ue),V.side=TwoPassDoubleSide):m.renderBufferDirect(W,I,D,V,E,ue),E.onAfterRender(m,I,W,D,V,ue)}function Ye(E,I,W){I.isScene!==!0&&(I=te);const D=ve.get(E),V=g.state.lights,ue=g.state.shadowsArray,be=V.state.version,Me=Ae.getParameters(E,V.state,ue,I,W),Se=Ae.getProgramCacheKey(Me);let Ee=D.programs;D.environment=E.isMeshStandardMaterial?I.environment:null,D.fog=I.fog,D.envMap=(E.isMeshStandardMaterial?We:je).get(E.envMap||D.environment),Ee===void 0&&(E.addEventListener("dispose",Le),Ee=new Map,D.programs=Ee);let Oe=Ee.get(Se);if(Oe!==void 0){if(D.currentProgram===Oe&&D.lightsStateVersion===be)return pt(E,Me),Oe}else Me.uniforms=Ae.getUniforms(E),E.onBuild(W,Me,m),E.onBeforeCompile(Me,m),Oe=Ae.acquireProgram(Me,Se),Ee.set(Se,Oe),D.uniforms=Me.uniforms;const xe=D.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(xe.clippingPlanes=F.uniform),pt(E,Me),D.needsLights=gt(E),D.lightsStateVersion=be,D.needsLights&&(xe.ambientLightColor.value=V.state.ambient,xe.lightProbe.value=V.state.probe,xe.directionalLights.value=V.state.directional,xe.directionalLightShadows.value=V.state.directionalShadow,xe.spotLights.value=V.state.spot,xe.spotLightShadows.value=V.state.spotShadow,xe.rectAreaLights.value=V.state.rectArea,xe.ltc_1.value=V.state.rectAreaLTC1,xe.ltc_2.value=V.state.rectAreaLTC2,xe.pointLights.value=V.state.point,xe.pointLightShadows.value=V.state.pointShadow,xe.hemisphereLights.value=V.state.hemi,xe.directionalShadowMap.value=V.state.directionalShadowMap,xe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,xe.spotShadowMap.value=V.state.spotShadowMap,xe.spotLightMatrix.value=V.state.spotLightMatrix,xe.spotLightMap.value=V.state.spotLightMap,xe.pointShadowMap.value=V.state.pointShadowMap,xe.pointShadowMatrix.value=V.state.pointShadowMatrix);const Be=Oe.getUniforms(),Ve=WebGLUniforms.seqWithValue(Be.seq,xe);return D.currentProgram=Oe,D.uniformsList=Ve,Oe}function pt(E,I){const W=ve.get(E);W.outputEncoding=I.outputEncoding,W.instancing=I.instancing,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function ct(E,I,W,D,V){I.isScene!==!0&&(I=te),me.resetTextureUnits();const ue=I.fog,be=D.isMeshStandardMaterial?I.environment:null,Me=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:LinearEncoding,Se=(D.isMeshStandardMaterial?We:je).get(D.envMap||be),Ee=D.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!D.normalMap&&!!W.attributes.tangent,xe=!!W.morphAttributes.position,Be=!!W.morphAttributes.normal,Ve=!!W.morphAttributes.color,Ze=D.toneMapped?m.toneMapping:NoToneMapping,et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,De=et!==void 0?et.length:0,Te=ve.get(D),ot=g.state.lights;if(N===!0&&(K===!0||E!==O)){const $e=E===O&&D.id===S;F.setState(D,E,$e)}let Ne=!1;D.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ot.state.version||Te.outputEncoding!==Me||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||Te.envMap!==Se||D.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==F.numPlanes||Te.numIntersection!==F.numIntersection)||Te.vertexAlphas!==Ee||Te.vertexTangents!==Oe||Te.morphTargets!==xe||Te.morphNormals!==Be||Te.morphColors!==Ve||Te.toneMapping!==Ze||ye.isWebGL2===!0&&Te.morphTargetsCount!==De)&&(Ne=!0):(Ne=!0,Te.__version=D.version);let tt=Te.currentProgram;Ne===!0&&(tt=Ye(D,I,V));let dt=!1,rt=!1,nt=!1;const He=tt.getUniforms(),it=Te.uniforms;if(se.useProgram(tt.program)&&(dt=!0,rt=!0,nt=!0),D.id!==S&&(S=D.id,rt=!0),dt||O!==E){if(He.setValue($,"projectionMatrix",E.projectionMatrix),ye.logarithmicDepthBuffer&&He.setValue($,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),O!==E&&(O=E,rt=!0,nt=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const $e=He.map.cameraPosition;$e!==void 0&&$e.setValue($,Q.setFromMatrixPosition(E.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&He.setValue($,"isOrthographic",E.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||V.isSkinnedMesh)&&He.setValue($,"viewMatrix",E.matrixWorldInverse)}if(V.isSkinnedMesh){He.setOptional($,V,"bindMatrix"),He.setOptional($,V,"bindMatrixInverse");const $e=V.skeleton;$e&&(ye.floatVertexTextures?($e.boneTexture===null&&$e.computeBoneTexture(),He.setValue($,"boneTexture",$e.boneTexture,me),He.setValue($,"boneTextureSize",$e.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const at=W.morphAttributes;if((at.position!==void 0||at.normal!==void 0||at.color!==void 0&&ye.isWebGL2===!0)&&ie.update(V,W,D,tt),(rt||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,He.setValue($,"receiveShadow",V.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(it.envMap.value=Se,it.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),rt&&(He.setValue($,"toneMappingExposure",m.toneMappingExposure),Te.needsLights&&ut(it,nt),ue&&D.fog===!0&&Ke.refreshFogUniforms(it,ue),Ke.refreshMaterialUniforms(it,D,A,R,Z),WebGLUniforms.upload($,Te.uniformsList,it,me)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(WebGLUniforms.upload($,Te.uniformsList,it,me),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&He.setValue($,"center",V.center),He.setValue($,"modelViewMatrix",V.modelViewMatrix),He.setValue($,"normalMatrix",V.normalMatrix),He.setValue($,"modelMatrix",V.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const $e=D.uniformsGroups;for(let st=0,ht=$e.length;st<ht;st++)if(ye.isWebGL2){const lt=$e[st];ge.update(lt,tt),ge.bind(lt,tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tt}function ut(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function gt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,I,W){ve.get(E.texture).__webglTexture=I,ve.get(E.depthTexture).__webglTexture=W;const D=ve.get(E);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=W===void 0,D.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const W=ve.get(E);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,W=0){b=E,y=I,v=W;let D=!0,V=null,ue=!1,be=!1;if(E){const Se=ve.get(E);Se.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),D=!1):Se.__webglFramebuffer===void 0?me.setupRenderTarget(E):Se.__hasExternalTextures&&me.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(be=!0);const Oe=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(V=Oe[I],ue=!0):ye.isWebGL2&&E.samples>0&&me.useMultisampledRTT(E)===!1?V=ve.get(E).__webglMultisampledFramebuffer:V=Oe,x.copy(E.viewport),C.copy(E.scissor),_=E.scissorTest}else x.copy(L).multiplyScalar(A).floor(),C.copy(P).multiplyScalar(A).floor(),_=q;if(se.bindFramebuffer(36160,V)&&ye.drawBuffers&&D&&se.drawBuffers(E,V),se.viewport(x),se.scissor(C),se.setScissorTest(_),ue){const Se=ve.get(E.texture);$.framebufferTexture2D(36160,36064,34069+I,Se.__webglTexture,W)}else if(be){const Se=ve.get(E.texture),Ee=I||0;$.framebufferTextureLayer(36160,36064,Se.__webglTexture,W||0,Ee)}S=-1},this.readRenderTargetPixels=function(E,I,W,D,V,ue,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Me=Me[be]),Me){se.bindFramebuffer(36160,Me);try{const Se=E.texture,Ee=Se.format,Oe=Se.type;if(Ee!==RGBAFormat&&ne.convert(Ee)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xe=Oe===HalfFloatType&&(pe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Oe!==UnsignedByteType&&ne.convert(Oe)!==$.getParameter(35738)&&!(Oe===FloatType&&(ye.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-D&&W>=0&&W<=E.height-V&&$.readPixels(I,W,D,V,ne.convert(Ee),ne.convert(Oe),ue)}finally{const Se=b!==null?ve.get(b).__webglFramebuffer:null;se.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(E,I,W=0){const D=Math.pow(2,-W),V=Math.floor(I.image.width*D),ue=Math.floor(I.image.height*D);me.setTexture2D(I,0),$.copyTexSubImage2D(3553,W,0,0,E.x,E.y,V,ue),se.unbindTexture()},this.copyTextureToTexture=function(E,I,W,D=0){const V=I.image.width,ue=I.image.height,be=ne.convert(W.format),Me=ne.convert(W.type);me.setTexture2D(W,0),$.pixelStorei(37440,W.flipY),$.pixelStorei(37441,W.premultiplyAlpha),$.pixelStorei(3317,W.unpackAlignment),I.isDataTexture?$.texSubImage2D(3553,D,E.x,E.y,V,ue,be,Me,I.image.data):I.isCompressedTexture?$.compressedTexSubImage2D(3553,D,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,be,I.mipmaps[0].data):$.texSubImage2D(3553,D,E.x,E.y,be,Me,I.image),D===0&&W.generateMipmaps&&$.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(E,I,W,D,V=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,be=E.max.y-E.min.y+1,Me=E.max.z-E.min.z+1,Se=ne.convert(D.format),Ee=ne.convert(D.type);let Oe;if(D.isData3DTexture)me.setTexture3D(D,0),Oe=32879;else if(D.isDataArrayTexture)me.setTexture2DArray(D,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,D.flipY),$.pixelStorei(37441,D.premultiplyAlpha),$.pixelStorei(3317,D.unpackAlignment);const xe=$.getParameter(3314),Be=$.getParameter(32878),Ve=$.getParameter(3316),Ze=$.getParameter(3315),et=$.getParameter(32877),De=W.isCompressedTexture?W.mipmaps[0]:W.image;$.pixelStorei(3314,De.width),$.pixelStorei(32878,De.height),$.pixelStorei(3316,E.min.x),$.pixelStorei(3315,E.min.y),$.pixelStorei(32877,E.min.z),W.isDataTexture||W.isData3DTexture?$.texSubImage3D(Oe,V,I.x,I.y,I.z,ue,be,Me,Se,Ee,De.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Oe,V,I.x,I.y,I.z,ue,be,Me,Se,De.data)):$.texSubImage3D(Oe,V,I.x,I.y,I.z,ue,be,Me,Se,Ee,De),$.pixelStorei(3314,xe),$.pixelStorei(32878,Be),$.pixelStorei(3316,Ve),$.pixelStorei(3315,Ze),$.pixelStorei(32877,et),V===0&&D.generateMipmaps&&$.generateMipmap(Oe),se.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?me.setTextureCube(E,0):E.isData3DTexture?me.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?me.setTexture2DArray(E,0):me.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){y=0,v=0,b=null,se.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class DataTexture extends Texture{constructor(e=null,t=1,s=1,o,r,n,p,d,l=NearestFilter,u=NearestFilter,c,g){super(null,n,p,d,l,u,o,r,c,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SphereGeometry extends BufferGeometry{constructor(e=1,t=32,s=16,o=0,r=Math.PI*2,n=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:r,thetaStart:n,thetaLength:p},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const d=Math.min(n+p,Math.PI);let l=0;const u=[],c=new Vector3,g=new Vector3,h=[],M=[],m=[],f=[];for(let y=0;y<=s;y++){const v=[],b=y/s;let S=0;y==0&&n==0?S=.5/t:y==s&&d==Math.PI&&(S=-.5/t);for(let O=0;O<=t;O++){const x=O/t;c.x=-e*Math.cos(o+x*r)*Math.sin(n+b*p),c.y=e*Math.cos(n+b*p),c.z=e*Math.sin(o+x*r)*Math.sin(n+b*p),M.push(c.x,c.y,c.z),g.copy(c).normalize(),m.push(g.x,g.y,g.z),f.push(x+S,1-b),v.push(l++)}u.push(v)}for(let y=0;y<s;y++)for(let v=0;v<t;v++){const b=u[y][v+1],S=u[y][v],O=u[y+1][v],x=u[y+1][v+1];(y!==0||n>0)&&h.push(b,S,x),(y!==s-1||d<Math.PI)&&h.push(S,O,x)}this.setIndex(h),this.setAttribute("position",new Float32BufferAttribute(M,3)),this.setAttribute("normal",new Float32BufferAttribute(m,3)),this.setAttribute("uv",new Float32BufferAttribute(f,2))}static fromJSON(e){return new SphereGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class TorusKnotGeometry extends BufferGeometry{constructor(e=1,t=.4,s=64,o=8,r=2,n=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:s,radialSegments:o,p:r,q:n},s=Math.floor(s),o=Math.floor(o);const p=[],d=[],l=[],u=[],c=new Vector3,g=new Vector3,h=new Vector3,M=new Vector3,m=new Vector3,f=new Vector3,y=new Vector3;for(let b=0;b<=s;++b){const S=b/s*r*Math.PI*2;v(S,r,n,e,h),v(S+.01,r,n,e,M),f.subVectors(M,h),y.addVectors(M,h),m.crossVectors(f,y),y.crossVectors(m,f),m.normalize(),y.normalize();for(let O=0;O<=o;++O){const x=O/o*Math.PI*2,C=-t*Math.cos(x),_=t*Math.sin(x);c.x=h.x+(C*y.x+_*m.x),c.y=h.y+(C*y.y+_*m.y),c.z=h.z+(C*y.z+_*m.z),d.push(c.x,c.y,c.z),g.subVectors(c,h).normalize(),l.push(g.x,g.y,g.z),u.push(b/s),u.push(O/o)}}for(let b=1;b<=s;b++)for(let S=1;S<=o;S++){const O=(o+1)*(b-1)+(S-1),x=(o+1)*b+(S-1),C=(o+1)*b+S,_=(o+1)*(b-1)+S;p.push(O,x,_),p.push(x,C,_)}this.setIndex(p),this.setAttribute("position",new Float32BufferAttribute(d,3)),this.setAttribute("normal",new Float32BufferAttribute(l,3)),this.setAttribute("uv",new Float32BufferAttribute(u,2));function v(b,S,O,x,C){const _=Math.cos(b),T=Math.sin(b),R=O/S*b,A=Math.cos(R);C.x=x*(2+A)*.5*_,C.y=x*(2+A)*T*.5,C.z=x*Math.sin(R)*.5}}static fromJSON(e){return new TorusKnotGeometry(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class MeshStandardMaterial extends Material{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MeshPhysicalMaterial extends MeshStandardMaterial{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vector2(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return clamp(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Color(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Color(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Color(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Cache={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class LoadingManager{constructor(e,t,s){const o=this;let r=!1,n=0,p=0,d;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(u){p++,r===!1&&o.onStart!==void 0&&o.onStart(u,n,p),r=!0},this.itemEnd=function(u){n++,o.onProgress!==void 0&&o.onProgress(u,n,p),n===p&&(r=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(u){o.onError!==void 0&&o.onError(u)},this.resolveURL=function(u){return d?d(u):u},this.setURLModifier=function(u){return d=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){const c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,g=l.length;c<g;c+=2){const h=l[c],M=l[c+1];if(h.global&&(h.lastIndex=0),h.test(u))return M}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(e){this.manager=e!==void 0?e:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(o,r){s.load(e,o,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const loading={};class HttpError extends Error{constructor(e,t){super(e),this.response=t}}class FileLoader extends Loader{constructor(e){super(e)}load(e,t,s,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Cache.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(loading[e]!==void 0){loading[e].push({onLoad:t,onProgress:s,onError:o});return}loading[e]=[],loading[e].push({onLoad:t,onProgress:s,onError:o});const n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),p=this.mimeType,d=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=loading[e],c=l.body.getReader(),g=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),h=g?parseInt(g):0,M=h!==0;let m=0;const f=new ReadableStream({start(y){v();function v(){c.read().then(({done:b,value:S})=>{if(b)y.close();else{m+=S.byteLength;const O=new ProgressEvent("progress",{lengthComputable:M,loaded:m,total:h});for(let x=0,C=u.length;x<C;x++){const _=u[x];_.onProgress&&_.onProgress(O)}y.enqueue(S),v()}})}}});return new Response(f)}else throw new HttpError(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(d){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,p));case"json":return l.json();default:if(p===void 0)return l.text();{const c=/charset="?([^;"\s]*)"?/i.exec(p),g=c&&c[1]?c[1].toLowerCase():void 0,h=new TextDecoder(g);return l.arrayBuffer().then(M=>h.decode(M))}}}).then(l=>{Cache.add(e,l);const u=loading[e];delete loading[e];for(let c=0,g=u.length;c<g;c++){const h=u[c];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=loading[e];if(u===void 0)throw this.manager.itemError(e),l;delete loading[e];for(let c=0,g=u.length;c<g;c++){const h=u[c];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class DataTextureLoader extends Loader{constructor(e){super(e)}load(e,t,s,o){const r=this,n=new DataTexture,p=new FileLoader(this.manager);return p.setResponseType("arraybuffer"),p.setRequestHeader(this.requestHeader),p.setPath(this.path),p.setWithCredentials(r.withCredentials),p.load(e,function(d){const l=r.parse(d);l&&(l.image!==void 0?n.image=l.image:l.data!==void 0&&(n.image.width=l.width,n.image.height=l.height,n.image.data=l.data),n.wrapS=l.wrapS!==void 0?l.wrapS:ClampToEdgeWrapping,n.wrapT=l.wrapT!==void 0?l.wrapT:ClampToEdgeWrapping,n.magFilter=l.magFilter!==void 0?l.magFilter:LinearFilter,n.minFilter=l.minFilter!==void 0?l.minFilter:LinearFilter,n.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(n.encoding=l.encoding),l.flipY!==void 0&&(n.flipY=l.flipY),l.format!==void 0&&(n.format=l.format),l.type!==void 0&&(n.type=l.type),l.mipmaps!==void 0&&(n.mipmaps=l.mipmaps,n.minFilter=LinearMipmapLinearFilter),l.mipmapCount===1&&(n.minFilter=LinearFilter),l.generateMipmaps!==void 0&&(n.generateMipmaps=l.generateMipmaps),n.needsUpdate=!0,t&&t(n,l))},s,o),n}}const _tables=_generateTables();function _generateTables(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),s=new Uint32Array(512),o=new Uint32Array(512);for(let d=0;d<256;++d){const l=d-127;l<-27?(s[d]=0,s[d|256]=32768,o[d]=24,o[d|256]=24):l<-14?(s[d]=1024>>-l-14,s[d|256]=1024>>-l-14|32768,o[d]=-l-1,o[d|256]=-l-1):l<=15?(s[d]=l+15<<10,s[d|256]=l+15<<10|32768,o[d]=13,o[d|256]=13):l<128?(s[d]=31744,s[d|256]=64512,o[d]=24,o[d|256]=24):(s[d]=31744,s[d|256]=64512,o[d]=13,o[d|256]=13)}const r=new Uint32Array(2048),n=new Uint32Array(64),p=new Uint32Array(64);for(let d=1;d<1024;++d){let l=d<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[d]=l|u}for(let d=1024;d<2048;++d)r[d]=939524096+(d-1024<<13);for(let d=1;d<31;++d)n[d]=d<<23;n[31]=1199570944,n[32]=2147483648;for(let d=33;d<63;++d)n[d]=2147483648+(d-32<<23);n[63]=3347054592;for(let d=1;d<64;++d)d!==32&&(p[d]=1024);return{floatView:e,uint32View:t,baseTable:s,shiftTable:o,mantissaTable:r,exponentTable:n,offsetTable:p}}function toHalfFloat(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=clamp(i,-65504,65504),_tables.floatView[0]=i;const e=_tables.uint32View[0],t=e>>23&511;return _tables.baseTable[t]+((e&8388607)>>_tables.shiftTable[t])}function fromHalfFloat(i){const e=i>>10;return _tables.uint32View[0]=_tables.mantissaTable[_tables.offsetTable[e]+(i&1023)]+_tables.exponentTable[e],_tables.floatView[0]}var DataUtils=Object.freeze({__proto__:null,toHalfFloat,fromHalfFloat});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);class RGBELoader extends DataTextureLoader{constructor(e){super(e),this.type=HalfFloatType}parse(e){const p=function(b,S){switch(b){case 1:console.error("THREE.RGBELoader Read Error: "+(S||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(S||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(S||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(S||""))}return-1},c=`
`,g=function(b,S,O){S=S||1024;let C=b.pos,_=-1,T=0,R="",A=String.fromCharCode.apply(null,new Uint16Array(b.subarray(C,C+128)));for(;0>(_=A.indexOf(c))&&T<S&&C<b.byteLength;)R+=A,T+=A.length,C+=128,A+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(C,C+128)));return-1<_?(O!==!1&&(b.pos+=T+_+1),R+A.slice(0,_)):!1},h=function(b){const S=/^#\?(\S+)/,O=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,x=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*FORMAT=(\S+)\s*$/,_=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let R,A;if(b.pos>=b.byteLength||!(R=g(b)))return p(1,"no header found");if(!(A=R.match(S)))return p(3,"bad initial token");for(T.valid|=1,T.programtype=A[1],T.string+=R+`
`;R=g(b),R!==!1;){if(T.string+=R+`
`,R.charAt(0)==="#"){T.comments+=R+`
`;continue}if((A=R.match(O))&&(T.gamma=parseFloat(A[1])),(A=R.match(x))&&(T.exposure=parseFloat(A[1])),(A=R.match(C))&&(T.valid|=2,T.format=A[1]),(A=R.match(_))&&(T.valid|=4,T.height=parseInt(A[1],10),T.width=parseInt(A[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:p(3,"missing image size specifier"):p(3,"missing format specifier")},M=function(b,S,O){const x=S;if(x<8||x>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);if(x!==(b[2]<<8|b[3]))return p(3,"wrong scanline width");const C=new Uint8Array(4*S*O);if(!C.length)return p(4,"unable to allocate buffer space");let _=0,T=0;const R=4*x,A=new Uint8Array(4),G=new Uint8Array(R);let k=O;for(;k>0&&T<b.byteLength;){if(T+4>b.byteLength)return p(1);if(A[0]=b[T++],A[1]=b[T++],A[2]=b[T++],A[3]=b[T++],A[0]!=2||A[1]!=2||(A[2]<<8|A[3])!=x)return p(3,"bad rgbe scanline format");let L=0,P;for(;L<R&&T<b.byteLength;){P=b[T++];const X=P>128;if(X&&(P-=128),P===0||L+P>R)return p(3,"bad scanline data");if(X){const N=b[T++];for(let K=0;K<P;K++)G[L++]=N}else G.set(b.subarray(T,T+P),L),L+=P,T+=P}const q=x;for(let X=0;X<q;X++){let N=0;C[_]=G[X+N],N+=x,C[_+1]=G[X+N],N+=x,C[_+2]=G[X+N],N+=x,C[_+3]=G[X+N],_+=4}k--}return C},m=function(b,S,O,x){const C=b[S+3],_=Math.pow(2,C-128)/255;O[x+0]=b[S+0]*_,O[x+1]=b[S+1]*_,O[x+2]=b[S+2]*_,O[x+3]=1},f=function(b,S,O,x){const C=b[S+3],_=Math.pow(2,C-128)/255;O[x+0]=DataUtils.toHalfFloat(Math.min(b[S+0]*_,65504)),O[x+1]=DataUtils.toHalfFloat(Math.min(b[S+1]*_,65504)),O[x+2]=DataUtils.toHalfFloat(Math.min(b[S+2]*_,65504)),O[x+3]=DataUtils.toHalfFloat(1)},y=new Uint8Array(e);y.pos=0;const v=h(y);if(v!==-1){const b=v.width,S=v.height,O=M(y.subarray(y.pos),b,S);if(O!==-1){let x,C,_;switch(this.type){case FloatType:_=O.length/4;const T=new Float32Array(_*4);for(let A=0;A<_;A++)m(O,A*4,T,A*4);x=T,C=FloatType;break;case HalfFloatType:_=O.length/4;const R=new Uint16Array(_*4);for(let A=0;A<_;A++)f(O,A*4,R,A*4);x=R,C=HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:b,height:S,data:x,header:v.string,gamma:v.gamma,exposure:v.exposure,type:C}}}return null}setDataType(e){return this.type=e,this}load(e,t,s,o){function r(n,p){switch(n.type){case FloatType:case HalfFloatType:n.encoding=LinearEncoding,n.minFilter=LinearFilter,n.magFilter=LinearFilter,n.generateMipmaps=!1,n.flipY=!0;break}t&&t(n,p)}return super.load(e,r,s,o)}}var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vision={},fileset_resolver={};let supportsSimd;Object.defineProperty(fileset_resolver,"__esModule",{value:!0}),fileset_resolver.FilesetResolver=void 0;const WASM_SIMD_CHECK=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function isSimdSupported(){if(supportsSimd===void 0)try{await WebAssembly.instantiate(WASM_SIMD_CHECK),supportsSimd=!0}catch{supportsSimd=!1}return supportsSimd}async function createFileset(i,e=""){const t=await isSimdSupported()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${i}_${t}.js`,wasmBinaryPath:`${e}/${i}_${t}.wasm`}}class FilesetResolver$1{static isSimdSupported(){return isSimdSupported()}static forAudioTasks(e){return createFileset("audio",e)}static forTextTasks(e){return createFileset("text",e)}static forVisionTasks(e){return createFileset("vision",e)}}fileset_resolver.FilesetResolver=FilesetResolver$1;var drawing_utils={};Object.defineProperty(drawing_utils,"__esModule",{value:!0}),drawing_utils.DrawingUtils=void 0;const DEFAULT_OPTIONS={color:"white",lineWidth:4,radius:6};function addDefaultOptions(i){return i=i||{},Object.assign(Object.assign(Object.assign({},DEFAULT_OPTIONS),{fillColor:i.color}),i)}function resolve(i,e){return i instanceof Function?i(e):i}class DrawingUtils$1{constructor(e){this.ctx=e}static clamp(e,t,s){const o=Math.min(t,s),r=Math.max(t,s);return Math.max(o,Math.min(r,e))}static lerp(e,t,s,o,r){const n=o*(1-(e-t)/(s-t))+r*(1-(s-e)/(s-t));return DrawingUtils$1.clamp(n,o,r)}drawLandmarks(e,t){if(!e)return;const s=this.ctx,o=addDefaultOptions(t);s.save();const r=s.canvas;let n=0;for(const p of e){s.fillStyle=resolve(o.fillColor,{index:n,from:p}),s.strokeStyle=resolve(o.color,{index:n,from:p}),s.lineWidth=resolve(o.lineWidth,{index:n,from:p});const d=new Path2D;d.arc(p.x*r.width,p.y*r.height,resolve(o.radius,{index:n,from:p}),0,2*Math.PI),s.fill(d),s.stroke(d),++n}s.restore()}drawConnectors(e,t,s){if(!e||!t)return;const o=this.ctx,r=addDefaultOptions(s);o.save();const n=o.canvas;let p=0;for(const d of t){o.beginPath();const l=e[d.start],u=e[d.end];l&&u&&(o.strokeStyle=resolve(r.color,{index:p,from:l,to:u}),o.lineWidth=resolve(r.lineWidth,{index:p,from:l,to:u}),o.moveTo(l.x*n.width,l.y*n.height),o.lineTo(u.x*n.width,u.y*n.height)),++p,o.stroke()}o.restore()}drawBoundingBox(e,t){const s=this.ctx,o=addDefaultOptions(t);s.save(),s.beginPath(),s.lineWidth=resolve(o.lineWidth,{}),s.strokeStyle=resolve(o.color,{}),s.fillStyle=resolve(o.fillColor,{}),s.moveTo(e.originX,e.originY),s.lineTo(e.originX+e.width,e.originY),s.lineTo(e.originX+e.width,e.originY+e.height),s.lineTo(e.originX,e.originY+e.height),s.lineTo(e.originX,e.originY),s.stroke(),s.fill(),s.restore()}}drawing_utils.DrawingUtils=DrawingUtils$1;var image={},image_shader_context={};Object.defineProperty(image_shader_context,"__esModule",{value:!0}),image_shader_context.MPImageShaderContext=image_shader_context.assertNotNull=void 0;const VERTEX_SHADER=`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,FRAGMENT_SHADER=`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
   void main() {
     gl_FragColor = texture2D(inputTexture, vTex);
   }
 `;function assertNotNull(i,e){if(i===null)throw new Error(`Unable to obtain required WebGL resource: ${e}`);return i}image_shader_context.assertNotNull=assertNotNull;class MPImageShaderBuffers{constructor(e,t,s,o){this.gl=e,this.vertexArrayObject=t,this.vertexBuffer=s,this.textureBuffer=o}bind(){this.gl.bindVertexArray(this.vertexArrayObject)}unbind(){this.gl.bindVertexArray(null)}close(){this.gl.deleteVertexArray(this.vertexArrayObject),this.gl.deleteBuffer(this.vertexBuffer),this.gl.deleteBuffer(this.textureBuffer)}}class MPImageShaderContext{compileShader(e,t){const s=this.gl,o=assertNotNull(s.createShader(t),"Failed to create WebGL shader");if(s.shaderSource(o,e),s.compileShader(o),!s.getShaderParameter(o,s.COMPILE_STATUS)){const r=s.getShaderInfoLog(o);throw new Error(`Could not compile WebGL shader: ${r}`)}return s.attachShader(this.program,o),o}setupShaders(){const e=this.gl;if(this.program=assertNotNull(e.createProgram(),"Failed to create WebGL program"),this.vertexShader=this.compileShader(VERTEX_SHADER,e.VERTEX_SHADER),this.fragmentShader=this.compileShader(FRAGMENT_SHADER,e.FRAGMENT_SHADER),e.linkProgram(this.program),!e.getProgramParameter(this.program,e.LINK_STATUS)){const t=e.getProgramInfoLog(this.program);throw new Error(`Error during program linking: ${t}`)}this.aVertex=e.getAttribLocation(this.program,"aVertex"),this.aTex=e.getAttribLocation(this.program,"aTex")}createBuffers(e){const t=this.gl,s=assertNotNull(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(s);const o=assertNotNull(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,o),t.enableVertexAttribArray(this.aVertex),t.vertexAttribPointer(this.aVertex,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const r=assertNotNull(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(this.aTex),t.vertexAttribPointer(this.aTex,2,t.FLOAT,!1,0,0);const n=e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0];return t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new MPImageShaderBuffers(t,s,o,r)}getShaderBuffers(e){return e?(this.shaderBuffersFlipVertically||(this.shaderBuffersFlipVertically=this.createBuffers(!0)),this.shaderBuffersFlipVertically):(this.shaderBuffersPassthrough||(this.shaderBuffersPassthrough=this.createBuffers(!1)),this.shaderBuffersPassthrough)}maybeInitGL(e){if(this.gl){if(e!==this.gl)throw new Error("Cannot change GL context once initialized")}else this.gl=e}run(e,t,s){this.maybeInitGL(e),this.program||this.setupShaders();const o=this.getShaderBuffers(t);e.useProgram(this.program),o.bind();const r=s();return o.unbind(),r}bindFramebuffer(e,t){this.maybeInitGL(e),this.framebuffer||(this.framebuffer=assertNotNull(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}unbindFramebuffer(){var e;(e=this.gl)===null||e===void 0||e.bindFramebuffer(this.gl.FRAMEBUFFER,null)}close(){if(this.program){const e=this.gl;e.deleteProgram(this.program),e.deleteShader(this.vertexShader),e.deleteShader(this.fragmentShader)}this.framebuffer&&this.gl.deleteFramebuffer(this.framebuffer),this.shaderBuffersPassthrough&&this.shaderBuffersPassthrough.close(),this.shaderBuffersFlipVertically&&this.shaderBuffersFlipVertically.close()}}image_shader_context.MPImageShaderContext=MPImageShaderContext,Object.defineProperty(image,"__esModule",{value:!0}),image.MPImage=void 0;const image_shader_context_1$2=image_shader_context;var MPImageType;(function(i){i[i.IMAGE_DATA=0]="IMAGE_DATA",i[i.IMAGE_BITMAP=1]="IMAGE_BITMAP",i[i.WEBGL_TEXTURE=2]="WEBGL_TEXTURE"})(MPImageType||(MPImageType={}));class MPImage$1{constructor(e,t,s,o,r,n,p){this.containers=e,this.ownsImageBitmap=t,this.ownsWebGLTexture=s,this.canvas=o,this.shaderContext=r,this.width=n,this.height=p}hasImageData(){return!!this.getContainer(MPImageType.IMAGE_DATA)}hasImageBitmap(){return!!this.getContainer(MPImageType.IMAGE_BITMAP)}hasWebGLTexture(){return!!this.getContainer(MPImageType.WEBGL_TEXTURE)}getAsImageData(){return this.convertToImageData()}getAsImageBitmap(){return this.convertToImageBitmap()}getAsWebGLTexture(){return this.convertToWebGLTexture()}getContainer(e){switch(e){case MPImageType.IMAGE_DATA:return this.containers.find(t=>t instanceof ImageData);case MPImageType.IMAGE_BITMAP:return this.containers.find(t=>typeof ImageBitmap<"u"&&t instanceof ImageBitmap);case MPImageType.WEBGL_TEXTURE:return this.containers.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw new Error(`Type is not supported: ${e}`)}}clone(){const e=[];for(const t of this.containers){let s;if(t instanceof ImageData)s=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const o=this.getGL(),r=this.getShaderContext();o.activeTexture(o.TEXTURE1),s=(0,image_shader_context_1$2.assertNotNull)(o.createTexture(),"Failed to create texture"),o.bindTexture(o.TEXTURE_2D,s),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,this.width,this.height,0,o.RGBA,o.UNSIGNED_BYTE,null),r.bindFramebuffer(o,s),r.run(o,!1,()=>{this.bindTexture(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLE_FAN,0,4),this.unbindTexture()}),r.unbindFramebuffer(),this.unbindTexture()}else{if(!(t instanceof ImageBitmap))throw new Error(`Type is not supported: ${t}`);this.convertToWebGLTexture(),this.bindTexture(),s=this.copyTextureToBitmap(),this.unbindTexture()}e.push(s)}return new MPImage$1(e,this.hasImageBitmap(),this.hasWebGLTexture(),this.canvas,this.shaderContext,this.width,this.height)}getOffscreenCanvas(){if(!(this.canvas instanceof OffscreenCanvas))throw new Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return this.canvas}getGL(){if(!this.canvas)throw new Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return this.gl||(this.gl=(0,image_shader_context_1$2.assertNotNull)(this.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),this.gl}getShaderContext(){return this.shaderContext||(this.shaderContext=new image_shader_context_1$2.MPImageShaderContext),this.shaderContext}convertToImageBitmap(){let e=this.getContainer(MPImageType.IMAGE_BITMAP);return e||(this.convertToWebGLTexture(),e=this.convertWebGLTextureToImageBitmap(),this.containers.push(e),this.ownsImageBitmap=!0),e}convertToImageData(){let e=this.getContainer(MPImageType.IMAGE_DATA);if(!e){const t=this.getGL(),s=this.getShaderContext(),o=new Uint8Array(this.width*this.height*4),r=this.convertToWebGLTexture();s.bindFramebuffer(t,r),t.readPixels(0,0,this.width,this.height,t.RGBA,t.UNSIGNED_BYTE,o),s.unbindFramebuffer(),e=new ImageData(new Uint8ClampedArray(o.buffer),this.width,this.height),this.containers.push(e)}return e}convertToWebGLTexture(){let e=this.getContainer(MPImageType.WEBGL_TEXTURE);if(!e){const t=this.getGL();e=this.bindTexture();const s=this.getContainer(MPImageType.IMAGE_BITMAP)||this.convertToImageData();t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,s),this.unbindTexture()}return e}bindTexture(){const e=this.getGL();e.viewport(0,0,this.width,this.height),e.activeTexture(e.TEXTURE0);let t=this.getContainer(MPImageType.WEBGL_TEXTURE);return t||(t=(0,image_shader_context_1$2.assertNotNull)(e.createTexture(),"Failed to create texture"),this.containers.push(t),this.ownsWebGLTexture=!0),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),t}unbindTexture(){this.gl.bindTexture(this.gl.TEXTURE_2D,null)}copyTextureToBitmap(){const e=this.getGL();return this.getShaderContext().run(e,!0,()=>this.runWithResizedCanvas(()=>(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),this.getOffscreenCanvas().transferToImageBitmap())))}convertWebGLTextureToImageBitmap(){this.bindTexture();const e=this.copyTextureToBitmap();return this.unbindTexture(),e}runWithResizedCanvas(e){const t=this.canvas;if(t.width===this.width&&t.height===this.height)return e();const s=t.width,o=t.height;t.width=this.width,t.height=this.height;const r=e();return t.width=s,t.height=o,r}close(){this.ownsImageBitmap&&this.getContainer(MPImageType.IMAGE_BITMAP).close(),this.ownsWebGLTexture&&this.getGL().deleteTexture(this.getContainer(MPImageType.WEBGL_TEXTURE))}}image.MPImage=MPImage$1;var mask={};Object.defineProperty(mask,"__esModule",{value:!0}),mask.MPMask=void 0;const image_shader_context_1$1=image_shader_context;var MPMaskType;(function(i){i[i.UINT8_ARRAY=0]="UINT8_ARRAY",i[i.FLOAT32_ARRAY=1]="FLOAT32_ARRAY",i[i.WEBGL_TEXTURE=2]="WEBGL_TEXTURE"})(MPMaskType||(MPMaskType={}));class MPMask$1{constructor(e,t,s,o,r,n){this.containers=e,this.ownsWebGLTexture=t,this.canvas=s,this.shaderContext=o,this.width=r,this.height=n}hasUint8Array(){return!!this.getContainer(MPMaskType.UINT8_ARRAY)}hasFloat32Array(){return!!this.getContainer(MPMaskType.FLOAT32_ARRAY)}hasWebGLTexture(){return!!this.getContainer(MPMaskType.WEBGL_TEXTURE)}getAsUint8Array(){return this.convertToUint8Array()}getAsFloat32Array(){return this.convertToFloat32Array()}getAsWebGLTexture(){return this.convertToWebGLTexture()}getContainer(e){switch(e){case MPMaskType.UINT8_ARRAY:return this.containers.find(t=>t instanceof Uint8Array);case MPMaskType.FLOAT32_ARRAY:return this.containers.find(t=>t instanceof Float32Array);case MPMaskType.WEBGL_TEXTURE:return this.containers.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw new Error(`Type is not supported: ${e}`)}}clone(){const e=[];for(const t of this.containers){let s;if(t instanceof Uint8Array)s=new Uint8Array(t);else if(t instanceof Float32Array)s=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw new Error(`Type is not supported: ${t}`);{const o=this.getGL(),r=this.getShaderContext();o.activeTexture(o.TEXTURE1),s=(0,image_shader_context_1$1.assertNotNull)(o.createTexture(),"Failed to create texture"),o.bindTexture(o.TEXTURE_2D,s),o.texImage2D(o.TEXTURE_2D,0,o.R32F,this.width,this.height,0,o.RED,o.FLOAT,null),o.bindTexture(o.TEXTURE_2D,null),r.bindFramebuffer(o,s),r.run(o,!1,()=>{this.bindTexture(),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),o.drawArrays(o.TRIANGLE_FAN,0,4),this.unbindTexture()}),r.unbindFramebuffer(),this.unbindTexture()}}e.push(s)}return new MPMask$1(e,this.hasWebGLTexture(),this.canvas,this.shaderContext,this.width,this.height)}getGL(){if(!this.canvas)throw new Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");if(this.gl||(this.gl=(0,image_shader_context_1$1.assertNotNull)(this.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),!this.gl.getExtension("EXT_color_buffer_float"))throw new Error("Missing required EXT_color_buffer_float extension");return this.gl}getShaderContext(){return this.shaderContext||(this.shaderContext=new image_shader_context_1$1.MPImageShaderContext),this.shaderContext}convertToFloat32Array(){let e=this.getContainer(MPMaskType.FLOAT32_ARRAY);if(!e){const t=this.getContainer(MPMaskType.UINT8_ARRAY);if(t)e=new Float32Array(t).map(s=>s/255);else{const s=this.getGL(),o=this.getShaderContext();e=new Float32Array(this.width*this.height);const r=this.convertToWebGLTexture();o.bindFramebuffer(s,r),s.readPixels(0,0,this.width,this.height,s.RED,s.FLOAT,e),o.unbindFramebuffer()}this.containers.push(e)}return e}convertToUint8Array(){let e=this.getContainer(MPMaskType.UINT8_ARRAY);if(!e){const t=this.convertToFloat32Array();e=new Uint8Array(t.map(s=>255*s)),this.containers.push(e)}return e}convertToWebGLTexture(){let e=this.getContainer(MPMaskType.WEBGL_TEXTURE);if(!e){const t=this.getGL();e=this.bindTexture();const s=this.convertToFloat32Array();t.texImage2D(t.TEXTURE_2D,0,t.R32F,this.width,this.height,0,t.RED,t.FLOAT,s),this.unbindTexture()}return e}bindTexture(){const e=this.getGL();e.viewport(0,0,this.width,this.height),e.activeTexture(e.TEXTURE0);let t=this.getContainer(MPMaskType.WEBGL_TEXTURE);return t||(t=(0,image_shader_context_1$1.assertNotNull)(e.createTexture(),"Failed to create texture"),this.containers.push(t),this.ownsWebGLTexture=!0),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),t}unbindTexture(){this.gl.bindTexture(this.gl.TEXTURE_2D,null)}close(){this.ownsWebGLTexture&&this.getGL().deleteTexture(this.getContainer(MPMaskType.WEBGL_TEXTURE))}}mask.MPMask=MPMask$1;var face_detector={},calculator_pb={},googleProtobuf={};(function(exports){var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.findInternal=function(i,e,t){i instanceof String&&(i=String(i));for(var s=i.length,o=0;o<s;o++){var r=i[o];if(e.call(t,r,o,i))return{i:o,v:r}}return{i:-1,v:void 0}},$jscomp.ASSUME_ES5=!1,$jscomp.ASSUME_NO_NATIVE_MAP=!1,$jscomp.ASSUME_NO_NATIVE_SET=!1,$jscomp.SIMPLE_FROUND_POLYFILL=!1,$jscomp.defineProperty=$jscomp.ASSUME_ES5||typeof Object.defineProperties=="function"?Object.defineProperty:function(i,e,t){i!=Array.prototype&&i!=Object.prototype&&(i[e]=t.value)},$jscomp.getGlobal=function(i){return typeof window<"u"&&window===i?i:commonjsGlobal!==void 0&&commonjsGlobal!=null?commonjsGlobal:i},$jscomp.global=$jscomp.getGlobal(commonjsGlobal),$jscomp.polyfill=function(i,e,t,s){if(e){for(t=$jscomp.global,i=i.split("."),s=0;s<i.length-1;s++){var o=i[s];o in t||(t[o]={}),t=t[o]}(e=e(s=t[i=i[i.length-1]]))!=s&&e!=null&&$jscomp.defineProperty(t,i,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Array.prototype.findIndex",function(i){return i||function(e,t){return $jscomp.findInternal(this,e,t).i}},"es6","es3"),$jscomp.checkStringArgs=function(i,e,t){if(i==null)throw new TypeError("The 'this' value for String.prototype."+t+" must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype."+t+" must not be a regular expression");return i+""},$jscomp.polyfill("String.prototype.endsWith",function(i){return i||function(e,t){var s=$jscomp.checkStringArgs(this,e,"endsWith");e+="",t===void 0&&(t=s.length),t=Math.max(0,Math.min(0|t,s.length));for(var o=e.length;0<o&&0<t;)if(s[--t]!=e[--o])return!1;return 0>=o}},"es6","es3"),$jscomp.polyfill("Array.prototype.find",function(i){return i||function(e,t){return $jscomp.findInternal(this,e,t).v}},"es6","es3"),$jscomp.polyfill("String.prototype.startsWith",function(i){return i||function(e,t){var s=$jscomp.checkStringArgs(this,e,"startsWith");e+="";var o=s.length,r=e.length;t=Math.max(0,Math.min(0|t,s.length));for(var n=0;n<r&&t<o;)if(s[t++]!=e[n++])return!1;return n>=r}},"es6","es3"),$jscomp.polyfill("String.prototype.repeat",function(i){return i||function(e){var t=$jscomp.checkStringArgs(this,null,"repeat");if(0>e||1342177279<e)throw new RangeError("Invalid count value");e|=0;for(var s="";e;)1&e&&(s+=t),(e>>>=1)&&(t+=t);return s}},"es6","es3");var COMPILED=!0,goog=goog||{};goog.global=commonjsGlobal||self,goog.exportPath_=function(i,e,t){i=i.split("."),t=t||goog.global,i[0]in t||t.execScript===void 0||t.execScript("var "+i[0]);for(var s;i.length&&(s=i.shift());)i.length||e===void 0?t=t[s]&&t[s]!==Object.prototype[s]?t[s]:t[s]={}:t[s]=e},goog.define=function(i,e){return e},goog.FEATURESET_YEAR=2012,goog.DEBUG=!0,goog.LOCALE="en",goog.TRUSTED_SITE=!0,goog.STRICT_MODE_COMPATIBLE=!1,goog.DISALLOW_TEST_ONLY_CODE=!goog.DEBUG,goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING=!1,goog.provide=function(i){if(goog.isInModuleLoader_())throw Error("goog.provide cannot be used within a module.");goog.constructNamespace_(i)},goog.constructNamespace_=function(i,e){goog.exportPath_(i,e)},goog.getScriptNonce=function(i){return i&&i!=goog.global?goog.getScriptNonce_(i.document):(goog.cspNonce_===null&&(goog.cspNonce_=goog.getScriptNonce_(goog.global.document)),goog.cspNonce_)},goog.NONCE_PATTERN_=/^[\w+/_-]+[=]{0,2}$/,goog.cspNonce_=null,goog.getScriptNonce_=function(i){return(i=i.querySelector&&i.querySelector("script[nonce]"))&&(i=i.nonce||i.getAttribute("nonce"))&&goog.NONCE_PATTERN_.test(i)?i:""},goog.VALID_MODULE_RE_=/^[a-zA-Z_$][a-zA-Z0-9._$]*$/,goog.module=function(i){if(typeof i!="string"||!i||i.search(goog.VALID_MODULE_RE_)==-1)throw Error("Invalid module identifier");if(!goog.isInGoogModuleLoader_())throw Error("Module "+i+" has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");if(goog.moduleLoaderState_.moduleName)throw Error("goog.module may only be called once per module.");goog.moduleLoaderState_.moduleName=i},goog.module.get=function(i){return goog.module.getInternal_(i)},goog.module.getInternal_=function(i){return null},goog.ModuleType={ES6:"es6",GOOG:"goog"},goog.moduleLoaderState_=null,goog.isInModuleLoader_=function(){return goog.isInGoogModuleLoader_()||goog.isInEs6ModuleLoader_()},goog.isInGoogModuleLoader_=function(){return!!goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.GOOG},goog.isInEs6ModuleLoader_=function(){if(goog.moduleLoaderState_&&goog.moduleLoaderState_.type==goog.ModuleType.ES6)return!0;var i=goog.global.$jscomp;return!!i&&typeof i.getCurrentModulePath=="function"&&!!i.getCurrentModulePath()},goog.module.declareLegacyNamespace=function(){goog.moduleLoaderState_.declareLegacyNamespace=!0},goog.declareModuleId=function(i){if(goog.moduleLoaderState_)goog.moduleLoaderState_.moduleName=i;else{var e=goog.global.$jscomp;if(!e||typeof e.getCurrentModulePath!="function")throw Error('Module with namespace "'+i+'" has been loaded incorrectly.');e=e.require(e.getCurrentModulePath()),goog.loadedModules_[i]={exports:e,type:goog.ModuleType.ES6,moduleId:i}}},goog.setTestOnly=function(i){if(goog.DISALLOW_TEST_ONLY_CODE)throw i=i||"",Error("Importing test-only code into non-debug environment"+(i?": "+i:"."))},goog.forwardDeclare=function(i){},goog.getObjectByName=function(i,e){i=i.split("."),e=e||goog.global;for(var t=0;t<i.length;t++)if((e=e[i[t]])==null)return null;return e},goog.globalize=function(i,e){for(var t in e=e||goog.global,i)e[t]=i[t]},goog.addDependency=function(i,e,t,s){},goog.ENABLE_DEBUG_LOADER=!0,goog.logToConsole_=function(i){goog.global.console&&goog.global.console.error(i)},goog.require=function(i){},goog.requireType=function(i){return{}},goog.basePath="",goog.nullFunction=function(){},goog.abstractMethod=function(){throw Error("unimplemented abstract method")},goog.addSingletonGetter=function(i){i.instance_=void 0,i.getInstance=function(){return i.instance_?i.instance_:(goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=i),i.instance_=new i)}},goog.instantiatedSingletons_=[],goog.LOAD_MODULE_USING_EVAL=!0,goog.SEAL_MODULE_EXPORTS=goog.DEBUG,goog.loadedModules_={},goog.DEPENDENCIES_ENABLED=!COMPILED,goog.TRANSPILE="detect",goog.ASSUME_ES_MODULES_TRANSPILED=!1,goog.TRANSPILE_TO_LANGUAGE="",goog.TRANSPILER="transpile.js",goog.hasBadLetScoping=null,goog.useSafari10Workaround=function(){if(goog.hasBadLetScoping==null){try{var a=!eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')}catch(i){a=!1}goog.hasBadLetScoping=a}return goog.hasBadLetScoping},goog.workaroundSafari10EvalBug=function(i){return"(function(){"+i+`
;})();
`},goog.loadModule=function(i){var e=goog.moduleLoaderState_;try{if(goog.moduleLoaderState_={moduleName:"",declareLegacyNamespace:!1,type:goog.ModuleType.GOOG},goog.isFunction(i))var t=i.call(void 0,{});else{if(typeof i!="string")throw Error("Invalid module definition");goog.useSafari10Workaround()&&(i=goog.workaroundSafari10EvalBug(i)),t=goog.loadModuleFromSource_.call(void 0,i)}var s=goog.moduleLoaderState_.moduleName;if(typeof s!="string"||!s)throw Error('Invalid module name "'+s+'"');goog.moduleLoaderState_.declareLegacyNamespace?goog.constructNamespace_(s,t):goog.SEAL_MODULE_EXPORTS&&Object.seal&&typeof t=="object"&&t!=null&&Object.seal(t),goog.loadedModules_[s]={exports:t,type:goog.ModuleType.GOOG,moduleId:goog.moduleLoaderState_.moduleName}}finally{goog.moduleLoaderState_=e}},goog.loadModuleFromSource_=function(a){return eval(a),{}},goog.normalizePath_=function(i){i=i.split("/");for(var e=0;e<i.length;)i[e]=="."?i.splice(e,1):e&&i[e]==".."&&i[e-1]&&i[e-1]!=".."?i.splice(--e,2):e++;return i.join("/")},goog.loadFileSync_=function(i){if(goog.global.CLOSURE_LOAD_FILE_SYNC)return goog.global.CLOSURE_LOAD_FILE_SYNC(i);try{var e=new goog.global.XMLHttpRequest;return e.open("get",i,!1),e.send(),e.status==0||e.status==200?e.responseText:null}catch{return null}},goog.transpile_=function(i,e,t){var s=goog.global.$jscomp;s||(goog.global.$jscomp=s={});var o=s.transpile;if(!o){var r=goog.basePath+goog.TRANSPILER,n=goog.loadFileSync_(r);if(n){if(function(){(0,eval)(n+`
//# sourceURL=`+r)}.call(goog.global),goog.global.$gwtExport&&goog.global.$gwtExport.$jscomp&&!goog.global.$gwtExport.$jscomp.transpile)throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: '+JSON.stringify(goog.global.$gwtExport));goog.global.$jscomp.transpile=goog.global.$gwtExport.$jscomp.transpile,o=(s=goog.global.$jscomp).transpile}}return o||(o=s.transpile=function(p,d){return goog.logToConsole_(d+" requires transpilation but no transpiler was found."),p}),o(i,e,t)},goog.typeOf=function(i){var e=typeof i;if(e=="object"){if(!i)return"null";if(i instanceof Array)return"array";if(i instanceof Object)return e;var t=Object.prototype.toString.call(i);if(t=="[object Window]")return"object";if(t=="[object Array]"||typeof i.length=="number"&&i.splice!==void 0&&i.propertyIsEnumerable!==void 0&&!i.propertyIsEnumerable("splice"))return"array";if(t=="[object Function]"||i.call!==void 0&&i.propertyIsEnumerable!==void 0&&!i.propertyIsEnumerable("call"))return"function"}else if(e=="function"&&i.call===void 0)return"object";return e},goog.isArray=function(i){return goog.typeOf(i)=="array"},goog.isArrayLike=function(i){var e=goog.typeOf(i);return e=="array"||e=="object"&&typeof i.length=="number"},goog.isDateLike=function(i){return goog.isObject(i)&&typeof i.getFullYear=="function"},goog.isFunction=function(i){return goog.typeOf(i)=="function"},goog.isObject=function(i){var e=typeof i;return e=="object"&&i!=null||e=="function"},goog.getUid=function(i){return Object.prototype.hasOwnProperty.call(i,goog.UID_PROPERTY_)&&i[goog.UID_PROPERTY_]||(i[goog.UID_PROPERTY_]=++goog.uidCounter_)},goog.hasUid=function(i){return!!i[goog.UID_PROPERTY_]},goog.removeUid=function(i){i!==null&&"removeAttribute"in i&&i.removeAttribute(goog.UID_PROPERTY_);try{delete i[goog.UID_PROPERTY_]}catch{}},goog.UID_PROPERTY_="closure_uid_"+(1e9*Math.random()>>>0),goog.uidCounter_=0,goog.getHashCode=goog.getUid,goog.removeHashCode=goog.removeUid,goog.cloneObject=function(i){var e=goog.typeOf(i);if(e=="object"||e=="array"){if(typeof i.clone=="function")return i.clone();for(var t in e=e=="array"?[]:{},i)e[t]=goog.cloneObject(i[t]);return e}return i},goog.bindNative_=function(i,e,t){return i.call.apply(i.bind,arguments)},goog.bindJs_=function(i,e,t){if(!i)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,s),i.apply(e,o)}}return function(){return i.apply(e,arguments)}},goog.bind=function(i,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_,goog.bind.apply(null,arguments)},goog.partial=function(i,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),i.apply(this,s)}},goog.mixin=function(i,e){for(var t in e)i[t]=e[t]},goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date},goog.globalEval=function(i){if(goog.global.execScript)goog.global.execScript(i,"JavaScript");else{if(!goog.global.eval)throw Error("goog.globalEval not available");if(goog.evalWorksForGlobals_==null){try{goog.global.eval("var _evalTest_ = 1;")}catch{}if(goog.global._evalTest_!==void 0){try{delete goog.global._evalTest_}catch{}goog.evalWorksForGlobals_=!0}else goog.evalWorksForGlobals_=!1}if(goog.evalWorksForGlobals_)goog.global.eval(i);else{var e=goog.global.document,t=e.createElement("script");t.type="text/javascript",t.defer=!1,t.appendChild(e.createTextNode(i)),e.head.appendChild(t),e.head.removeChild(t)}}},goog.evalWorksForGlobals_=null,goog.getCssName=function(i,e){if(String(i).charAt(0)==".")throw Error('className passed in goog.getCssName must not start with ".". You passed: '+i);var t=function(o){return goog.cssNameMapping_[o]||o},s=function(o){o=o.split("-");for(var r=[],n=0;n<o.length;n++)r.push(t(o[n]));return r.join("-")};return s=goog.cssNameMapping_?goog.cssNameMappingStyle_=="BY_WHOLE"?t:s:function(o){return o},i=e?i+"-"+s(e):s(i),goog.global.CLOSURE_CSS_NAME_MAP_FN?goog.global.CLOSURE_CSS_NAME_MAP_FN(i):i},goog.setCssNameMapping=function(i,e){goog.cssNameMapping_=i,goog.cssNameMappingStyle_=e},goog.getMsg=function(i,e,t){return t&&t.html&&(i=i.replace(/</g,"&lt;")),e&&(i=i.replace(/\{\$([^}]+)}/g,function(s,o){return e!=null&&o in e?e[o]:s})),i},goog.getMsgWithFallback=function(i,e){return i},goog.exportSymbol=function(i,e,t){goog.exportPath_(i,e,t)},goog.exportProperty=function(i,e,t){i[e]=t},goog.inherits=function(i,e){function t(){}t.prototype=e.prototype,i.superClass_=e.prototype,i.prototype=new t,i.prototype.constructor=i,i.base=function(s,o,r){for(var n=Array(arguments.length-2),p=2;p<arguments.length;p++)n[p-2]=arguments[p];return e.prototype[o].apply(s,n)}},goog.scope=function(i){if(goog.isInModuleLoader_())throw Error("goog.scope is not supported within a module.");i.call(goog.global)},goog.defineClass=function(i,e){var t=e.constructor,s=e.statics;return t&&t!=Object.prototype.constructor||(t=function(){throw Error("cannot instantiate an interface (no constructor defined).")}),t=goog.defineClass.createSealingConstructor_(t,i),i&&goog.inherits(t,i),delete e.constructor,delete e.statics,goog.defineClass.applyProperties_(t.prototype,e),s!=null&&(s instanceof Function?s(t):goog.defineClass.applyProperties_(t,s)),t},goog.defineClass.SEAL_CLASS_INSTANCES=goog.DEBUG,goog.defineClass.createSealingConstructor_=function(i,e){if(!goog.defineClass.SEAL_CLASS_INSTANCES)return i;var t=!goog.defineClass.isUnsealable_(e),s=function(){var o=i.apply(this,arguments)||this;return o[goog.UID_PROPERTY_]=o[goog.UID_PROPERTY_],this.constructor===s&&t&&Object.seal instanceof Function&&Object.seal(o),o};return s},goog.defineClass.isUnsealable_=function(i){return i&&i.prototype&&i.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]},goog.defineClass.OBJECT_PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.defineClass.applyProperties_=function(i,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);for(var s=0;s<goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;s++)t=goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[s],Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t])},goog.tagUnsealableClass=function(i){},goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_="goog_defineClass_legacy_unsealable",goog.TRUSTED_TYPES_POLICY_NAME="",goog.identity_=function(i){return i},goog.createTrustedTypesPolicy=function(i){var e=null,t=goog.global.trustedTypes||goog.global.TrustedTypes;if(!t||!t.createPolicy)return e;try{e=t.createPolicy(i,{createHTML:goog.identity_,createScript:goog.identity_,createScriptURL:goog.identity_,createURL:goog.identity_})}catch(s){goog.logToConsole_(s.message)}return e},goog.TRUSTED_TYPES_POLICY_=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#base"):null,goog.object={},goog.object.is=function(i,e){return i===e?i!==0||1/i==1/e:i!=i&&e!=e},goog.object.forEach=function(i,e,t){for(var s in i)e.call(t,i[s],s,i)},goog.object.filter=function(i,e,t){var s,o={};for(s in i)e.call(t,i[s],s,i)&&(o[s]=i[s]);return o},goog.object.map=function(i,e,t){var s,o={};for(s in i)o[s]=e.call(t,i[s],s,i);return o},goog.object.some=function(i,e,t){for(var s in i)if(e.call(t,i[s],s,i))return!0;return!1},goog.object.every=function(i,e,t){for(var s in i)if(!e.call(t,i[s],s,i))return!1;return!0},goog.object.getCount=function(i){var e,t=0;for(e in i)t++;return t},goog.object.getAnyKey=function(i){for(var e in i)return e},goog.object.getAnyValue=function(i){for(var e in i)return i[e]},goog.object.contains=function(i,e){return goog.object.containsValue(i,e)},goog.object.getValues=function(i){var e,t=[],s=0;for(e in i)t[s++]=i[e];return t},goog.object.getKeys=function(i){var e,t=[],s=0;for(e in i)t[s++]=e;return t},goog.object.getValueByKeys=function(i,e){var t=goog.isArrayLike(e),s=t?e:arguments;for(t=t?0:1;t<s.length;t++){if(i==null)return;i=i[s[t]]}return i},goog.object.containsKey=function(i,e){return i!==null&&e in i},goog.object.containsValue=function(i,e){for(var t in i)if(i[t]==e)return!0;return!1},goog.object.findKey=function(i,e,t){for(var s in i)if(e.call(t,i[s],s,i))return s},goog.object.findValue=function(i,e,t){return(e=goog.object.findKey(i,e,t))&&i[e]},goog.object.isEmpty=function(i){for(var e in i)return!1;return!0},goog.object.clear=function(i){for(var e in i)delete i[e]},goog.object.remove=function(i,e){var t;return(t=e in i)&&delete i[e],t},goog.object.add=function(i,e,t){if(i!==null&&e in i)throw Error('The object already contains the key "'+e+'"');goog.object.set(i,e,t)},goog.object.get=function(i,e,t){return i!==null&&e in i?i[e]:t},goog.object.set=function(i,e,t){i[e]=t},goog.object.setIfUndefined=function(i,e,t){return e in i?i[e]:i[e]=t},goog.object.setWithReturnValueIfNotSet=function(i,e,t){return e in i?i[e]:(t=t(),i[e]=t)},goog.object.equals=function(i,e){for(var t in i)if(!(t in e)||i[t]!==e[t])return!1;for(var s in e)if(!(s in i))return!1;return!0},goog.object.clone=function(i){var e,t={};for(e in i)t[e]=i[e];return t},goog.object.unsafeClone=function(i){var e=goog.typeOf(i);if(e=="object"||e=="array"){if(goog.isFunction(i.clone))return i.clone();for(var t in e=e=="array"?[]:{},i)e[t]=goog.object.unsafeClone(i[t]);return e}return i},goog.object.transpose=function(i){var e,t={};for(e in i)t[i[e]]=e;return t},goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.object.extend=function(i,e){for(var t,s,o=1;o<arguments.length;o++){for(t in s=arguments[o])i[t]=s[t];for(var r=0;r<goog.object.PROTOTYPE_FIELDS_.length;r++)t=goog.object.PROTOTYPE_FIELDS_[r],Object.prototype.hasOwnProperty.call(s,t)&&(i[t]=s[t])}},goog.object.create=function(i){var e=arguments.length;if(e==1&&Array.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(e%2)throw Error("Uneven number of arguments");for(var t={},s=0;s<e;s+=2)t[arguments[s]]=arguments[s+1];return t},goog.object.createSet=function(i){var e=arguments.length;if(e==1&&Array.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var t={},s=0;s<e;s++)t[arguments[s]]=!0;return t},goog.object.createImmutableView=function(i){var e=i;return Object.isFrozen&&!Object.isFrozen(i)&&(e=Object.create(i),Object.freeze(e)),e},goog.object.isImmutableView=function(i){return!!Object.isFrozen&&Object.isFrozen(i)},goog.object.getAllPropertyNames=function(i,e,t){if(!i)return[];if(!Object.getOwnPropertyNames||!Object.getPrototypeOf)return goog.object.getKeys(i);for(var s={};i&&(i!==Object.prototype||e)&&(i!==Function.prototype||t);){for(var o=Object.getOwnPropertyNames(i),r=0;r<o.length;r++)s[o[r]]=!0;i=Object.getPrototypeOf(i)}return goog.object.getKeys(s)},goog.object.getSuperClass=function(i){return(i=Object.getPrototypeOf(i.prototype))&&i.constructor};var jspb={asserts:{}};jspb.asserts.doAssertFailure=function(i,e,t,s){var o="Assertion failed";if(t){o+=": "+t;var r=s}else i&&(o+=": "+i,r=e);throw Error(""+o,r||[])},jspb.asserts.assert=function(i,e,t){for(var s=[],o=2;o<arguments.length;++o)s[o-2]=arguments[o];return i||jspb.asserts.doAssertFailure("",null,e,s),i},jspb.asserts.assertString=function(i,e,t){for(var s=[],o=2;o<arguments.length;++o)s[o-2]=arguments[o];return typeof i!="string"&&jspb.asserts.doAssertFailure("Expected string but got %s: %s.",[goog.typeOf(i),i],e,s),i},jspb.asserts.assertArray=function(i,e,t){for(var s=[],o=2;o<arguments.length;++o)s[o-2]=arguments[o];return Array.isArray(i)||jspb.asserts.doAssertFailure("Expected array but got %s: %s.",[goog.typeOf(i),i],e,s),i},jspb.asserts.fail=function(i,e){for(var t=[],s=1;s<arguments.length;++s)t[s-1]=arguments[s];throw Error("Failure"+(i?": "+i:""),t)},jspb.asserts.assertInstanceof=function(i,e,t,s){for(var o=[],r=3;r<arguments.length;++r)o[r-3]=arguments[r];return i instanceof e||jspb.asserts.doAssertFailure("Expected instanceof %s but got %s.",[jspb.asserts.getType(e),jspb.asserts.getType(i)],t,o),i},jspb.asserts.getType=function(i){return i instanceof Function?i.displayName||i.name||"unknown type name":i instanceof Object?i.constructor.displayName||i.constructor.name||Object.prototype.toString.call(i):i===null?"null":typeof i},jspb.BinaryConstants={},jspb.ConstBinaryMessage=function(){},jspb.BinaryMessage=function(){},jspb.BinaryConstants.FieldType={INVALID:-1,DOUBLE:1,FLOAT:2,INT64:3,UINT64:4,INT32:5,FIXED64:6,FIXED32:7,BOOL:8,STRING:9,GROUP:10,MESSAGE:11,BYTES:12,UINT32:13,ENUM:14,SFIXED32:15,SFIXED64:16,SINT32:17,SINT64:18,FHASH64:30,VHASH64:31},jspb.BinaryConstants.WireType={INVALID:-1,VARINT:0,FIXED64:1,DELIMITED:2,START_GROUP:3,END_GROUP:4,FIXED32:5},jspb.BinaryConstants.FieldTypeToWireType=function(i){var e=jspb.BinaryConstants.FieldType,t=jspb.BinaryConstants.WireType;switch(i){case e.INT32:case e.INT64:case e.UINT32:case e.UINT64:case e.SINT32:case e.SINT64:case e.BOOL:case e.ENUM:case e.VHASH64:return t.VARINT;case e.DOUBLE:case e.FIXED64:case e.SFIXED64:case e.FHASH64:return t.FIXED64;case e.STRING:case e.MESSAGE:case e.BYTES:return t.DELIMITED;case e.FLOAT:case e.FIXED32:case e.SFIXED32:return t.FIXED32;default:return t.INVALID}},jspb.BinaryConstants.INVALID_FIELD_NUMBER=-1,jspb.BinaryConstants.FLOAT32_EPS=1401298464324817e-60,jspb.BinaryConstants.FLOAT32_MIN=11754943508222875e-54,jspb.BinaryConstants.FLOAT32_MAX=34028234663852886e22,jspb.BinaryConstants.FLOAT64_EPS=5e-324,jspb.BinaryConstants.FLOAT64_MIN=22250738585072014e-324,jspb.BinaryConstants.FLOAT64_MAX=17976931348623157e292,jspb.BinaryConstants.TWO_TO_20=1048576,jspb.BinaryConstants.TWO_TO_23=8388608,jspb.BinaryConstants.TWO_TO_31=2147483648,jspb.BinaryConstants.TWO_TO_32=4294967296,jspb.BinaryConstants.TWO_TO_52=4503599627370496,jspb.BinaryConstants.TWO_TO_63=9223372036854776e3,jspb.BinaryConstants.TWO_TO_64=18446744073709552e3,jspb.BinaryConstants.ZERO_HASH="\0\0\0\0\0\0\0\0",goog.debug={},goog.debug.Error=function(i){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var e=Error().stack;e&&(this.stack=e)}i&&(this.message=String(i)),this.reportErrorToServer=!0},goog.inherits(goog.debug.Error,Error),goog.debug.Error.prototype.name="CustomError",goog.dom={},goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12},goog.asserts={},goog.asserts.ENABLE_ASSERTS=goog.DEBUG,goog.asserts.AssertionError=function(i,e){goog.debug.Error.call(this,goog.asserts.subs_(i,e)),this.messagePattern=i},goog.inherits(goog.asserts.AssertionError,goog.debug.Error),goog.asserts.AssertionError.prototype.name="AssertionError",goog.asserts.DEFAULT_ERROR_HANDLER=function(i){throw i},goog.asserts.errorHandler_=goog.asserts.DEFAULT_ERROR_HANDLER,goog.asserts.subs_=function(i,e){for(var t="",s=(i=i.split("%s")).length-1,o=0;o<s;o++)t+=i[o]+(o<e.length?e[o]:"%s");return t+i[s]},goog.asserts.doAssertFailure_=function(i,e,t,s){var o="Assertion failed";if(t){o+=": "+t;var r=s}else i&&(o+=": "+i,r=e);i=new goog.asserts.AssertionError(""+o,r||[]),goog.asserts.errorHandler_(i)},goog.asserts.setErrorHandler=function(i){goog.asserts.ENABLE_ASSERTS&&(goog.asserts.errorHandler_=i)},goog.asserts.assert=function(i,e,t){return goog.asserts.ENABLE_ASSERTS&&!i&&goog.asserts.doAssertFailure_("",null,e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertExists=function(i,e,t){return goog.asserts.ENABLE_ASSERTS&&i==null&&goog.asserts.doAssertFailure_("Expected to exist: %s.",[i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.fail=function(i,e){goog.asserts.ENABLE_ASSERTS&&goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure"+(i?": "+i:""),Array.prototype.slice.call(arguments,1)))},goog.asserts.assertNumber=function(i,e,t){return goog.asserts.ENABLE_ASSERTS&&typeof i!="number"&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(i),i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertString=function(i,e,t){return goog.asserts.ENABLE_ASSERTS&&typeof i!="string"&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(i),i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertFunction=function(i,e,t){return goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(i)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(i),i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertObject=function(i,e,t){return goog.asserts.ENABLE_ASSERTS&&!goog.isObject(i)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(i),i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertArray=function(i,e,t){return goog.asserts.ENABLE_ASSERTS&&!Array.isArray(i)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(i),i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertBoolean=function(i,e,t){return goog.asserts.ENABLE_ASSERTS&&typeof i!="boolean"&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(i),i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertElement=function(i,e,t){return!goog.asserts.ENABLE_ASSERTS||goog.isObject(i)&&i.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(i),i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertInstanceof=function(i,e,t,s){return!goog.asserts.ENABLE_ASSERTS||i instanceof e||goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.",[goog.asserts.getType_(e),goog.asserts.getType_(i)],t,Array.prototype.slice.call(arguments,3)),i},goog.asserts.assertFinite=function(i,e,t){return!goog.asserts.ENABLE_ASSERTS||typeof i=="number"&&isFinite(i)||goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.",[i],e,Array.prototype.slice.call(arguments,2)),i},goog.asserts.assertObjectPrototypeIsIntact=function(){for(var i in Object.prototype)goog.asserts.fail(i+" should not be enumerable in Object.prototype.")},goog.asserts.getType_=function(i){return i instanceof Function?i.displayName||i.name||"unknown type name":i instanceof Object?i.constructor.displayName||i.constructor.name||Object.prototype.toString.call(i):i===null?"null":typeof i},goog.array={},goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE,goog.array.ASSUME_NATIVE_FUNCTIONS=2012<goog.FEATURESET_YEAR,goog.array.peek=function(i){return i[i.length-1]},goog.array.last=goog.array.peek,goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.indexOf)?function(i,e,t){return goog.asserts.assert(i.length!=null),Array.prototype.indexOf.call(i,e,t)}:function(i,e,t){if(t=t==null?0:0>t?Math.max(0,i.length+t):t,typeof i=="string")return typeof e!="string"||e.length!=1?-1:i.indexOf(e,t);for(;t<i.length;t++)if(t in i&&i[t]===e)return t;return-1},goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.lastIndexOf)?function(i,e,t){return goog.asserts.assert(i.length!=null),Array.prototype.lastIndexOf.call(i,e,t??i.length-1)}:function(i,e,t){if(0>(t=t??i.length-1)&&(t=Math.max(0,i.length+t)),typeof i=="string")return typeof e!="string"||e.length!=1?-1:i.lastIndexOf(e,t);for(;0<=t;t--)if(t in i&&i[t]===e)return t;return-1},goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.forEach)?function(i,e,t){goog.asserts.assert(i.length!=null),Array.prototype.forEach.call(i,e,t)}:function(i,e,t){for(var s=i.length,o=typeof i=="string"?i.split(""):i,r=0;r<s;r++)r in o&&e.call(t,o[r],r,i)},goog.array.forEachRight=function(i,e,t){var s=i.length,o=typeof i=="string"?i.split(""):i;for(--s;0<=s;--s)s in o&&e.call(t,o[s],s,i)},goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.filter)?function(i,e,t){return goog.asserts.assert(i.length!=null),Array.prototype.filter.call(i,e,t)}:function(i,e,t){for(var s=i.length,o=[],r=0,n=typeof i=="string"?i.split(""):i,p=0;p<s;p++)if(p in n){var d=n[p];e.call(t,d,p,i)&&(o[r++]=d)}return o},goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.map)?function(i,e,t){return goog.asserts.assert(i.length!=null),Array.prototype.map.call(i,e,t)}:function(i,e,t){for(var s=i.length,o=Array(s),r=typeof i=="string"?i.split(""):i,n=0;n<s;n++)n in r&&(o[n]=e.call(t,r[n],n,i));return o},goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduce)?function(i,e,t,s){return goog.asserts.assert(i.length!=null),s&&(e=goog.bind(e,s)),Array.prototype.reduce.call(i,e,t)}:function(i,e,t,s){var o=t;return goog.array.forEach(i,function(r,n){o=e.call(s,o,r,n,i)}),o},goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.reduceRight)?function(i,e,t,s){return goog.asserts.assert(i.length!=null),goog.asserts.assert(e!=null),s&&(e=goog.bind(e,s)),Array.prototype.reduceRight.call(i,e,t)}:function(i,e,t,s){var o=t;return goog.array.forEachRight(i,function(r,n){o=e.call(s,o,r,n,i)}),o},goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.some)?function(i,e,t){return goog.asserts.assert(i.length!=null),Array.prototype.some.call(i,e,t)}:function(i,e,t){for(var s=i.length,o=typeof i=="string"?i.split(""):i,r=0;r<s;r++)if(r in o&&e.call(t,o[r],r,i))return!0;return!1},goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||Array.prototype.every)?function(i,e,t){return goog.asserts.assert(i.length!=null),Array.prototype.every.call(i,e,t)}:function(i,e,t){for(var s=i.length,o=typeof i=="string"?i.split(""):i,r=0;r<s;r++)if(r in o&&!e.call(t,o[r],r,i))return!1;return!0},goog.array.count=function(i,e,t){var s=0;return goog.array.forEach(i,function(o,r,n){e.call(t,o,r,n)&&++s},t),s},goog.array.find=function(i,e,t){return 0>(e=goog.array.findIndex(i,e,t))?null:typeof i=="string"?i.charAt(e):i[e]},goog.array.findIndex=function(i,e,t){for(var s=i.length,o=typeof i=="string"?i.split(""):i,r=0;r<s;r++)if(r in o&&e.call(t,o[r],r,i))return r;return-1},goog.array.findRight=function(i,e,t){return 0>(e=goog.array.findIndexRight(i,e,t))?null:typeof i=="string"?i.charAt(e):i[e]},goog.array.findIndexRight=function(i,e,t){var s=i.length,o=typeof i=="string"?i.split(""):i;for(--s;0<=s;s--)if(s in o&&e.call(t,o[s],s,i))return s;return-1},goog.array.contains=function(i,e){return 0<=goog.array.indexOf(i,e)},goog.array.isEmpty=function(i){return i.length==0},goog.array.clear=function(i){if(!Array.isArray(i))for(var e=i.length-1;0<=e;e--)delete i[e];i.length=0},goog.array.insert=function(i,e){goog.array.contains(i,e)||i.push(e)},goog.array.insertAt=function(i,e,t){goog.array.splice(i,t,0,e)},goog.array.insertArrayAt=function(i,e,t){goog.partial(goog.array.splice,i,t,0).apply(null,e)},goog.array.insertBefore=function(i,e,t){var s;arguments.length==2||0>(s=goog.array.indexOf(i,t))?i.push(e):goog.array.insertAt(i,e,s)},goog.array.remove=function(i,e){var t;return(t=0<=(e=goog.array.indexOf(i,e)))&&goog.array.removeAt(i,e),t},goog.array.removeLast=function(i,e){return 0<=(e=goog.array.lastIndexOf(i,e))&&(goog.array.removeAt(i,e),!0)},goog.array.removeAt=function(i,e){return goog.asserts.assert(i.length!=null),Array.prototype.splice.call(i,e,1).length==1},goog.array.removeIf=function(i,e,t){return 0<=(e=goog.array.findIndex(i,e,t))&&(goog.array.removeAt(i,e),!0)},goog.array.removeAllIf=function(i,e,t){var s=0;return goog.array.forEachRight(i,function(o,r){e.call(t,o,r,i)&&goog.array.removeAt(i,r)&&s++}),s},goog.array.concat=function(i){return Array.prototype.concat.apply([],arguments)},goog.array.join=function(i){return Array.prototype.concat.apply([],arguments)},goog.array.toArray=function(i){var e=i.length;if(0<e){for(var t=Array(e),s=0;s<e;s++)t[s]=i[s];return t}return[]},goog.array.clone=goog.array.toArray,goog.array.extend=function(i,e){for(var t=1;t<arguments.length;t++){var s=arguments[t];if(goog.isArrayLike(s)){var o=i.length||0,r=s.length||0;i.length=o+r;for(var n=0;n<r;n++)i[o+n]=s[n]}else i.push(s)}},goog.array.splice=function(i,e,t,s){return goog.asserts.assert(i.length!=null),Array.prototype.splice.apply(i,goog.array.slice(arguments,1))},goog.array.slice=function(i,e,t){return goog.asserts.assert(i.length!=null),2>=arguments.length?Array.prototype.slice.call(i,e):Array.prototype.slice.call(i,e,t)},goog.array.removeDuplicates=function(i,e,t){e=e||i;var s=function(d){return goog.isObject(d)?"o"+goog.getUid(d):(typeof d).charAt(0)+d};t=t||s,s={};for(var o=0,r=0;r<i.length;){var n=i[r++],p=t(n);Object.prototype.hasOwnProperty.call(s,p)||(s[p]=!0,e[o++]=n)}e.length=o},goog.array.binarySearch=function(i,e,t){return goog.array.binarySearch_(i,t||goog.array.defaultCompare,!1,e)},goog.array.binarySelect=function(i,e,t){return goog.array.binarySearch_(i,e,!0,void 0,t)},goog.array.binarySearch_=function(i,e,t,s,o){for(var r,n=0,p=i.length;n<p;){var d=n+(p-n>>>1),l=t?e.call(o,i[d],d,i):e(s,i[d]);0<l?n=d+1:(p=d,r=!l)}return r?n:-n-1},goog.array.sort=function(i,e){i.sort(e||goog.array.defaultCompare)},goog.array.stableSort=function(i,e){for(var t=Array(i.length),s=0;s<i.length;s++)t[s]={index:s,value:i[s]};var o=e||goog.array.defaultCompare;for(goog.array.sort(t,function(r,n){return o(r.value,n.value)||r.index-n.index}),s=0;s<i.length;s++)i[s]=t[s].value},goog.array.sortByKey=function(i,e,t){var s=t||goog.array.defaultCompare;goog.array.sort(i,function(o,r){return s(e(o),e(r))})},goog.array.sortObjectsByKey=function(i,e,t){goog.array.sortByKey(i,function(s){return s[e]},t)},goog.array.isSorted=function(i,e,t){e=e||goog.array.defaultCompare;for(var s=1;s<i.length;s++){var o=e(i[s-1],i[s]);if(0<o||o==0&&t)return!1}return!0},goog.array.equals=function(i,e,t){if(!goog.isArrayLike(i)||!goog.isArrayLike(e)||i.length!=e.length)return!1;var s=i.length;t=t||goog.array.defaultCompareEquality;for(var o=0;o<s;o++)if(!t(i[o],e[o]))return!1;return!0},goog.array.compare3=function(i,e,t){t=t||goog.array.defaultCompare;for(var s=Math.min(i.length,e.length),o=0;o<s;o++){var r=t(i[o],e[o]);if(r!=0)return r}return goog.array.defaultCompare(i.length,e.length)},goog.array.defaultCompare=function(i,e){return i>e?1:i<e?-1:0},goog.array.inverseDefaultCompare=function(i,e){return-goog.array.defaultCompare(i,e)},goog.array.defaultCompareEquality=function(i,e){return i===e},goog.array.binaryInsert=function(i,e,t){return 0>(t=goog.array.binarySearch(i,e,t))&&(goog.array.insertAt(i,e,-(t+1)),!0)},goog.array.binaryRemove=function(i,e,t){return 0<=(e=goog.array.binarySearch(i,e,t))&&goog.array.removeAt(i,e)},goog.array.bucket=function(i,e,t){for(var s={},o=0;o<i.length;o++){var r=i[o],n=e.call(t,r,o,i);n!==void 0&&(s[n]||(s[n]=[])).push(r)}return s},goog.array.toObject=function(i,e,t){var s={};return goog.array.forEach(i,function(o,r){s[e.call(t,o,r,i)]=o}),s},goog.array.range=function(i,e,t){var s=[],o=0,r=i;if(e!==void 0&&(o=i,r=e),0>(t=t||1)*(r-o))return[];if(0<t)for(i=o;i<r;i+=t)s.push(i);else for(i=o;i>r;i+=t)s.push(i);return s},goog.array.repeat=function(i,e){for(var t=[],s=0;s<e;s++)t[s]=i;return t},goog.array.flatten=function(i){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(Array.isArray(s))for(var o=0;o<s.length;o+=8192){var r=goog.array.slice(s,o,o+8192);r=goog.array.flatten.apply(null,r);for(var n=0;n<r.length;n++)e.push(r[n])}else e.push(s)}return e},goog.array.rotate=function(i,e){return goog.asserts.assert(i.length!=null),i.length&&(0<(e%=i.length)?Array.prototype.unshift.apply(i,i.splice(-e,e)):0>e&&Array.prototype.push.apply(i,i.splice(0,-e))),i},goog.array.moveItem=function(i,e,t){goog.asserts.assert(0<=e&&e<i.length),goog.asserts.assert(0<=t&&t<i.length),e=Array.prototype.splice.call(i,e,1),Array.prototype.splice.call(i,t,0,e[0])},goog.array.zip=function(i){if(!arguments.length)return[];for(var e=[],t=arguments[0].length,s=1;s<arguments.length;s++)arguments[s].length<t&&(t=arguments[s].length);for(s=0;s<t;s++){for(var o=[],r=0;r<arguments.length;r++)o.push(arguments[r][s]);e.push(o)}return e},goog.array.shuffle=function(i,e){e=e||Math.random;for(var t=i.length-1;0<t;t--){var s=Math.floor(e()*(t+1)),o=i[t];i[t]=i[s],i[s]=o}},goog.array.copyByIndex=function(i,e){var t=[];return goog.array.forEach(e,function(s){t.push(i[s])}),t},goog.array.concatMap=function(i,e,t){return goog.array.concat.apply([],goog.array.map(i,e,t))},goog.crypt={},goog.crypt.stringToByteArray=function(i){for(var e=[],t=0,s=0;s<i.length;s++){var o=i.charCodeAt(s);255<o&&(e[t++]=255&o,o>>=8),e[t++]=o}return e},goog.crypt.byteArrayToString=function(i){if(8192>=i.length)return String.fromCharCode.apply(null,i);for(var e="",t=0;t<i.length;t+=8192){var s=goog.array.slice(i,t,t+8192);e+=String.fromCharCode.apply(null,s)}return e},goog.crypt.byteArrayToHex=function(i,e){return goog.array.map(i,function(t){return 1<(t=t.toString(16)).length?t:"0"+t}).join(e||"")},goog.crypt.hexToByteArray=function(i){goog.asserts.assert(i.length%2==0,"Key string length must be multiple of 2");for(var e=[],t=0;t<i.length;t+=2)e.push(parseInt(i.substring(t,t+2),16));return e},goog.crypt.stringToUtf8ByteArray=function(i){for(var e=[],t=0,s=0;s<i.length;s++){var o=i.charCodeAt(s);128>o?e[t++]=o:(2048>o?e[t++]=o>>6|192:((64512&o)==55296&&s+1<i.length&&(64512&i.charCodeAt(s+1))==56320?(o=65536+((1023&o)<<10)+(1023&i.charCodeAt(++s)),e[t++]=o>>18|240,e[t++]=o>>12&63|128):e[t++]=o>>12|224,e[t++]=o>>6&63|128),e[t++]=63&o|128)}return e},goog.crypt.utf8ByteArrayToString=function(i){for(var e=[],t=0,s=0;t<i.length;){var o=i[t++];if(128>o)e[s++]=String.fromCharCode(o);else if(191<o&&224>o){var r=i[t++];e[s++]=String.fromCharCode((31&o)<<6|63&r)}else if(239<o&&365>o){r=i[t++];var n=i[t++];o=((7&o)<<18|(63&r)<<12|(63&n)<<6|63&i[t++])-65536,e[s++]=String.fromCharCode(55296+(o>>10)),e[s++]=String.fromCharCode(56320+(1023&o))}else r=i[t++],n=i[t++],e[s++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&n)}return e.join("")},goog.crypt.xorByteArray=function(i,e){goog.asserts.assert(i.length==e.length,"XOR array lengths must match");for(var t=[],s=0;s<i.length;s++)t.push(i[s]^e[s]);return t},goog.dom.asserts={},goog.dom.asserts.assertIsLocation=function(i){if(goog.asserts.ENABLE_ASSERTS){var e=goog.dom.asserts.getWindow_(i);e&&(!i||!(i instanceof e.Location)&&i instanceof e.Element)&&goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s",goog.dom.asserts.debugStringForType_(i))}return i},goog.dom.asserts.assertIsElementType_=function(i,e){if(goog.asserts.ENABLE_ASSERTS){var t=goog.dom.asserts.getWindow_(i);t&&t[e]!==void 0&&(i&&(i instanceof t[e]||!(i instanceof t.Location||i instanceof t.Element))||goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s",e,goog.dom.asserts.debugStringForType_(i)))}return i},goog.dom.asserts.assertIsHTMLAnchorElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLAnchorElement")},goog.dom.asserts.assertIsHTMLButtonElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLButtonElement")},goog.dom.asserts.assertIsHTMLLinkElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLLinkElement")},goog.dom.asserts.assertIsHTMLImageElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLImageElement")},goog.dom.asserts.assertIsHTMLAudioElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLAudioElement")},goog.dom.asserts.assertIsHTMLVideoElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLVideoElement")},goog.dom.asserts.assertIsHTMLInputElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLInputElement")},goog.dom.asserts.assertIsHTMLTextAreaElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLTextAreaElement")},goog.dom.asserts.assertIsHTMLCanvasElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLCanvasElement")},goog.dom.asserts.assertIsHTMLEmbedElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLEmbedElement")},goog.dom.asserts.assertIsHTMLFormElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLFormElement")},goog.dom.asserts.assertIsHTMLFrameElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLFrameElement")},goog.dom.asserts.assertIsHTMLIFrameElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLIFrameElement")},goog.dom.asserts.assertIsHTMLObjectElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLObjectElement")},goog.dom.asserts.assertIsHTMLScriptElement=function(i){return goog.dom.asserts.assertIsElementType_(i,"HTMLScriptElement")},goog.dom.asserts.debugStringForType_=function(i){if(!goog.isObject(i))return i===void 0?"undefined":i===null?"null":typeof i;try{return i.constructor.displayName||i.constructor.name||Object.prototype.toString.call(i)}catch{return"<object could not be stringified>"}},goog.dom.asserts.getWindow_=function(i){try{var e=i&&i.ownerDocument,t=e&&(e.defaultView||e.parentWindow);if((t=t||goog.global).Element&&t.Location)return t}catch{}return null},goog.functions={},goog.functions.constant=function(i){return function(){return i}},goog.functions.FALSE=function(){return!1},goog.functions.TRUE=function(){return!0},goog.functions.NULL=function(){return null},goog.functions.identity=function(i,e){return i},goog.functions.error=function(i){return function(){throw Error(i)}},goog.functions.fail=function(i){return function(){throw i}},goog.functions.lock=function(i,e){return e=e||0,function(){return i.apply(this,Array.prototype.slice.call(arguments,0,e))}},goog.functions.nth=function(i){return function(){return arguments[i]}},goog.functions.partialRight=function(i,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=Array.prototype.slice.call(arguments);return s.push.apply(s,t),i.apply(this,s)}},goog.functions.withReturnValue=function(i,e){return goog.functions.sequence(i,goog.functions.constant(e))},goog.functions.equalTo=function(i,e){return function(t){return e?i==t:i===t}},goog.functions.compose=function(i,e){var t=arguments,s=t.length;return function(){var o;s&&(o=t[s-1].apply(this,arguments));for(var r=s-2;0<=r;r--)o=t[r].call(this,o);return o}},goog.functions.sequence=function(i){var e=arguments,t=e.length;return function(){for(var s,o=0;o<t;o++)s=e[o].apply(this,arguments);return s}},goog.functions.and=function(i){var e=arguments,t=e.length;return function(){for(var s=0;s<t;s++)if(!e[s].apply(this,arguments))return!1;return!0}},goog.functions.or=function(i){var e=arguments,t=e.length;return function(){for(var s=0;s<t;s++)if(e[s].apply(this,arguments))return!0;return!1}},goog.functions.not=function(i){return function(){return!i.apply(this,arguments)}},goog.functions.create=function(i,e){var t=function(){};return t.prototype=i.prototype,t=new t,i.apply(t,Array.prototype.slice.call(arguments,1)),t},goog.functions.CACHE_RETURN_VALUE=!0,goog.functions.cacheReturnValue=function(i){var e,t=!1;return function(){return goog.functions.CACHE_RETURN_VALUE?(t||(e=i(),t=!0),e):i()}},goog.functions.once=function(i){var e=i;return function(){if(e){var t=e;e=null,t()}}},goog.functions.debounce=function(i,e,t){var s=0;return function(o){goog.global.clearTimeout(s);var r=arguments;s=goog.global.setTimeout(function(){i.apply(t,r)},e)}},goog.functions.throttle=function(i,e,t){var s=0,o=!1,r=[],n=function(){s=0,o&&(o=!1,p())},p=function(){s=goog.global.setTimeout(n,e),i.apply(t,r)};return function(d){r=arguments,s?o=!0:p()}},goog.functions.rateLimit=function(i,e,t){var s=0,o=function(){s=0};return function(r){s||(s=goog.global.setTimeout(o,e),i.apply(t,arguments))}},goog.dom.HtmlElement=function(){},goog.dom.TagName=function(i){this.tagName_=i},goog.dom.TagName.prototype.toString=function(){return this.tagName_},goog.dom.TagName.A=new goog.dom.TagName("A"),goog.dom.TagName.ABBR=new goog.dom.TagName("ABBR"),goog.dom.TagName.ACRONYM=new goog.dom.TagName("ACRONYM"),goog.dom.TagName.ADDRESS=new goog.dom.TagName("ADDRESS"),goog.dom.TagName.APPLET=new goog.dom.TagName("APPLET"),goog.dom.TagName.AREA=new goog.dom.TagName("AREA"),goog.dom.TagName.ARTICLE=new goog.dom.TagName("ARTICLE"),goog.dom.TagName.ASIDE=new goog.dom.TagName("ASIDE"),goog.dom.TagName.AUDIO=new goog.dom.TagName("AUDIO"),goog.dom.TagName.B=new goog.dom.TagName("B"),goog.dom.TagName.BASE=new goog.dom.TagName("BASE"),goog.dom.TagName.BASEFONT=new goog.dom.TagName("BASEFONT"),goog.dom.TagName.BDI=new goog.dom.TagName("BDI"),goog.dom.TagName.BDO=new goog.dom.TagName("BDO"),goog.dom.TagName.BIG=new goog.dom.TagName("BIG"),goog.dom.TagName.BLOCKQUOTE=new goog.dom.TagName("BLOCKQUOTE"),goog.dom.TagName.BODY=new goog.dom.TagName("BODY"),goog.dom.TagName.BR=new goog.dom.TagName("BR"),goog.dom.TagName.BUTTON=new goog.dom.TagName("BUTTON"),goog.dom.TagName.CANVAS=new goog.dom.TagName("CANVAS"),goog.dom.TagName.CAPTION=new goog.dom.TagName("CAPTION"),goog.dom.TagName.CENTER=new goog.dom.TagName("CENTER"),goog.dom.TagName.CITE=new goog.dom.TagName("CITE"),goog.dom.TagName.CODE=new goog.dom.TagName("CODE"),goog.dom.TagName.COL=new goog.dom.TagName("COL"),goog.dom.TagName.COLGROUP=new goog.dom.TagName("COLGROUP"),goog.dom.TagName.COMMAND=new goog.dom.TagName("COMMAND"),goog.dom.TagName.DATA=new goog.dom.TagName("DATA"),goog.dom.TagName.DATALIST=new goog.dom.TagName("DATALIST"),goog.dom.TagName.DD=new goog.dom.TagName("DD"),goog.dom.TagName.DEL=new goog.dom.TagName("DEL"),goog.dom.TagName.DETAILS=new goog.dom.TagName("DETAILS"),goog.dom.TagName.DFN=new goog.dom.TagName("DFN"),goog.dom.TagName.DIALOG=new goog.dom.TagName("DIALOG"),goog.dom.TagName.DIR=new goog.dom.TagName("DIR"),goog.dom.TagName.DIV=new goog.dom.TagName("DIV"),goog.dom.TagName.DL=new goog.dom.TagName("DL"),goog.dom.TagName.DT=new goog.dom.TagName("DT"),goog.dom.TagName.EM=new goog.dom.TagName("EM"),goog.dom.TagName.EMBED=new goog.dom.TagName("EMBED"),goog.dom.TagName.FIELDSET=new goog.dom.TagName("FIELDSET"),goog.dom.TagName.FIGCAPTION=new goog.dom.TagName("FIGCAPTION"),goog.dom.TagName.FIGURE=new goog.dom.TagName("FIGURE"),goog.dom.TagName.FONT=new goog.dom.TagName("FONT"),goog.dom.TagName.FOOTER=new goog.dom.TagName("FOOTER"),goog.dom.TagName.FORM=new goog.dom.TagName("FORM"),goog.dom.TagName.FRAME=new goog.dom.TagName("FRAME"),goog.dom.TagName.FRAMESET=new goog.dom.TagName("FRAMESET"),goog.dom.TagName.H1=new goog.dom.TagName("H1"),goog.dom.TagName.H2=new goog.dom.TagName("H2"),goog.dom.TagName.H3=new goog.dom.TagName("H3"),goog.dom.TagName.H4=new goog.dom.TagName("H4"),goog.dom.TagName.H5=new goog.dom.TagName("H5"),goog.dom.TagName.H6=new goog.dom.TagName("H6"),goog.dom.TagName.HEAD=new goog.dom.TagName("HEAD"),goog.dom.TagName.HEADER=new goog.dom.TagName("HEADER"),goog.dom.TagName.HGROUP=new goog.dom.TagName("HGROUP"),goog.dom.TagName.HR=new goog.dom.TagName("HR"),goog.dom.TagName.HTML=new goog.dom.TagName("HTML"),goog.dom.TagName.I=new goog.dom.TagName("I"),goog.dom.TagName.IFRAME=new goog.dom.TagName("IFRAME"),goog.dom.TagName.IMG=new goog.dom.TagName("IMG"),goog.dom.TagName.INPUT=new goog.dom.TagName("INPUT"),goog.dom.TagName.INS=new goog.dom.TagName("INS"),goog.dom.TagName.ISINDEX=new goog.dom.TagName("ISINDEX"),goog.dom.TagName.KBD=new goog.dom.TagName("KBD"),goog.dom.TagName.KEYGEN=new goog.dom.TagName("KEYGEN"),goog.dom.TagName.LABEL=new goog.dom.TagName("LABEL"),goog.dom.TagName.LEGEND=new goog.dom.TagName("LEGEND"),goog.dom.TagName.LI=new goog.dom.TagName("LI"),goog.dom.TagName.LINK=new goog.dom.TagName("LINK"),goog.dom.TagName.MAIN=new goog.dom.TagName("MAIN"),goog.dom.TagName.MAP=new goog.dom.TagName("MAP"),goog.dom.TagName.MARK=new goog.dom.TagName("MARK"),goog.dom.TagName.MATH=new goog.dom.TagName("MATH"),goog.dom.TagName.MENU=new goog.dom.TagName("MENU"),goog.dom.TagName.MENUITEM=new goog.dom.TagName("MENUITEM"),goog.dom.TagName.META=new goog.dom.TagName("META"),goog.dom.TagName.METER=new goog.dom.TagName("METER"),goog.dom.TagName.NAV=new goog.dom.TagName("NAV"),goog.dom.TagName.NOFRAMES=new goog.dom.TagName("NOFRAMES"),goog.dom.TagName.NOSCRIPT=new goog.dom.TagName("NOSCRIPT"),goog.dom.TagName.OBJECT=new goog.dom.TagName("OBJECT"),goog.dom.TagName.OL=new goog.dom.TagName("OL"),goog.dom.TagName.OPTGROUP=new goog.dom.TagName("OPTGROUP"),goog.dom.TagName.OPTION=new goog.dom.TagName("OPTION"),goog.dom.TagName.OUTPUT=new goog.dom.TagName("OUTPUT"),goog.dom.TagName.P=new goog.dom.TagName("P"),goog.dom.TagName.PARAM=new goog.dom.TagName("PARAM"),goog.dom.TagName.PICTURE=new goog.dom.TagName("PICTURE"),goog.dom.TagName.PRE=new goog.dom.TagName("PRE"),goog.dom.TagName.PROGRESS=new goog.dom.TagName("PROGRESS"),goog.dom.TagName.Q=new goog.dom.TagName("Q"),goog.dom.TagName.RP=new goog.dom.TagName("RP"),goog.dom.TagName.RT=new goog.dom.TagName("RT"),goog.dom.TagName.RTC=new goog.dom.TagName("RTC"),goog.dom.TagName.RUBY=new goog.dom.TagName("RUBY"),goog.dom.TagName.S=new goog.dom.TagName("S"),goog.dom.TagName.SAMP=new goog.dom.TagName("SAMP"),goog.dom.TagName.SCRIPT=new goog.dom.TagName("SCRIPT"),goog.dom.TagName.SECTION=new goog.dom.TagName("SECTION"),goog.dom.TagName.SELECT=new goog.dom.TagName("SELECT"),goog.dom.TagName.SMALL=new goog.dom.TagName("SMALL"),goog.dom.TagName.SOURCE=new goog.dom.TagName("SOURCE"),goog.dom.TagName.SPAN=new goog.dom.TagName("SPAN"),goog.dom.TagName.STRIKE=new goog.dom.TagName("STRIKE"),goog.dom.TagName.STRONG=new goog.dom.TagName("STRONG"),goog.dom.TagName.STYLE=new goog.dom.TagName("STYLE"),goog.dom.TagName.SUB=new goog.dom.TagName("SUB"),goog.dom.TagName.SUMMARY=new goog.dom.TagName("SUMMARY"),goog.dom.TagName.SUP=new goog.dom.TagName("SUP"),goog.dom.TagName.SVG=new goog.dom.TagName("SVG"),goog.dom.TagName.TABLE=new goog.dom.TagName("TABLE"),goog.dom.TagName.TBODY=new goog.dom.TagName("TBODY"),goog.dom.TagName.TD=new goog.dom.TagName("TD"),goog.dom.TagName.TEMPLATE=new goog.dom.TagName("TEMPLATE"),goog.dom.TagName.TEXTAREA=new goog.dom.TagName("TEXTAREA"),goog.dom.TagName.TFOOT=new goog.dom.TagName("TFOOT"),goog.dom.TagName.TH=new goog.dom.TagName("TH"),goog.dom.TagName.THEAD=new goog.dom.TagName("THEAD"),goog.dom.TagName.TIME=new goog.dom.TagName("TIME"),goog.dom.TagName.TITLE=new goog.dom.TagName("TITLE"),goog.dom.TagName.TR=new goog.dom.TagName("TR"),goog.dom.TagName.TRACK=new goog.dom.TagName("TRACK"),goog.dom.TagName.TT=new goog.dom.TagName("TT"),goog.dom.TagName.U=new goog.dom.TagName("U"),goog.dom.TagName.UL=new goog.dom.TagName("UL"),goog.dom.TagName.VAR=new goog.dom.TagName("VAR"),goog.dom.TagName.VIDEO=new goog.dom.TagName("VIDEO"),goog.dom.TagName.WBR=new goog.dom.TagName("WBR"),goog.dom.tags={},goog.dom.tags.VOID_TAGS_={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},goog.dom.tags.isVoidTag=function(i){return goog.dom.tags.VOID_TAGS_[i]===!0},goog.html={},goog.html.trustedtypes={},goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY=goog.TRUSTED_TYPES_POLICY_NAME?goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME+"#html"):null,goog.string={},goog.string.TypedString=function(){},goog.string.Const=function(i,e){this.stringConstValueWithSecurityContract__googStringSecurityPrivate_=i===goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_&&e||"",this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_=goog.string.Const.TYPE_MARKER_},goog.string.Const.prototype.implementsGoogStringTypedString=!0,goog.string.Const.prototype.getTypedStringValue=function(){return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_},goog.DEBUG&&(goog.string.Const.prototype.toString=function(){return"Const{"+this.stringConstValueWithSecurityContract__googStringSecurityPrivate_+"}"}),goog.string.Const.unwrap=function(i){return i instanceof goog.string.Const&&i.constructor===goog.string.Const&&i.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_===goog.string.Const.TYPE_MARKER_?i.stringConstValueWithSecurityContract__googStringSecurityPrivate_:(goog.asserts.fail("expected object of type Const, got '"+i+"'"),"type_error:Const")},goog.string.Const.from=function(i){return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,i)},goog.string.Const.TYPE_MARKER_={},goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_={},goog.string.Const.EMPTY=goog.string.Const.from(""),goog.html.SafeScript=function(){this.privateDoNotAccessOrElseSafeScriptWrappedValue_="",this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeScript.prototype.implementsGoogStringTypedString=!0,goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeScript.fromConstant=function(i){return(i=goog.string.Const.unwrap(i)).length===0?goog.html.SafeScript.EMPTY:goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(i)},goog.html.SafeScript.fromConstantAndArgs=function(i,e){for(var t=[],s=1;s<arguments.length;s++)t.push(goog.html.SafeScript.stringify_(arguments[s]));return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("("+goog.string.Const.unwrap(i)+")("+t.join(", ")+");")},goog.html.SafeScript.fromJson=function(i){return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(i))},goog.html.SafeScript.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString()},goog.DEBUG&&(goog.html.SafeScript.prototype.toString=function(){return"SafeScript{"+this.privateDoNotAccessOrElseSafeScriptWrappedValue_+"}"}),goog.html.SafeScript.unwrap=function(i){return goog.html.SafeScript.unwrapTrustedScript(i).toString()},goog.html.SafeScript.unwrapTrustedScript=function(i){return i instanceof goog.html.SafeScript&&i.constructor===goog.html.SafeScript&&i.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?i.privateDoNotAccessOrElseSafeScriptWrappedValue_:(goog.asserts.fail("expected object of type SafeScript, got '"+i+"' of type "+goog.typeOf(i)),"type_error:SafeScript")},goog.html.SafeScript.stringify_=function(i){return JSON.stringify(i).replace(/</g,"\\x3c")},goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse=function(i){return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(i)},goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_=function(i){return this.privateDoNotAccessOrElseSafeScriptWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(i):i,this},goog.html.SafeScript.EMPTY=goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(""),goog.fs={},goog.fs.url={},goog.fs.url.createObjectUrl=function(i){return goog.fs.url.getUrlObject_().createObjectURL(i)},goog.fs.url.revokeObjectUrl=function(i){goog.fs.url.getUrlObject_().revokeObjectURL(i)},goog.fs.url.UrlObject_=function(){},goog.fs.url.UrlObject_.prototype.createObjectURL=function(i){},goog.fs.url.UrlObject_.prototype.revokeObjectURL=function(i){},goog.fs.url.getUrlObject_=function(){var i=goog.fs.url.findUrlObject_();if(i!=null)return i;throw Error("This browser doesn't seem to support blob URLs")},goog.fs.url.findUrlObject_=function(){return goog.global.URL!==void 0&&goog.global.URL.createObjectURL!==void 0?goog.global.URL:goog.global.webkitURL!==void 0&&goog.global.webkitURL.createObjectURL!==void 0?goog.global.webkitURL:goog.global.createObjectURL!==void 0?goog.global:null},goog.fs.url.browserSupportsObjectUrls=function(){return goog.fs.url.findUrlObject_()!=null},goog.fs.blob={},goog.fs.blob.getBlob=function(i){var e=goog.global.BlobBuilder||goog.global.WebKitBlobBuilder;if(e!==void 0){e=new e;for(var t=0;t<arguments.length;t++)e.append(arguments[t]);return e.getBlob()}return goog.fs.blob.getBlobWithProperties(goog.array.toArray(arguments))},goog.fs.blob.getBlobWithProperties=function(i,e,t){var s=goog.global.BlobBuilder||goog.global.WebKitBlobBuilder;if(s!==void 0){s=new s;for(var o=0;o<i.length;o++)s.append(i[o],t);return s.getBlob(e)}if(goog.global.Blob!==void 0)return s={},e&&(s.type=e),t&&(s.endings=t),new Blob(i,s);throw Error("This browser doesn't seem to support creating Blobs")},goog.i18n={},goog.i18n.bidi={},goog.i18n.bidi.FORCE_RTL=!1,goog.i18n.bidi.IS_RTL=goog.i18n.bidi.FORCE_RTL||(goog.LOCALE.substring(0,2).toLowerCase()=="ar"||goog.LOCALE.substring(0,2).toLowerCase()=="fa"||goog.LOCALE.substring(0,2).toLowerCase()=="he"||goog.LOCALE.substring(0,2).toLowerCase()=="iw"||goog.LOCALE.substring(0,2).toLowerCase()=="ps"||goog.LOCALE.substring(0,2).toLowerCase()=="sd"||goog.LOCALE.substring(0,2).toLowerCase()=="ug"||goog.LOCALE.substring(0,2).toLowerCase()=="ur"||goog.LOCALE.substring(0,2).toLowerCase()=="yi")&&(goog.LOCALE.length==2||goog.LOCALE.substring(2,3)=="-"||goog.LOCALE.substring(2,3)=="_")||3<=goog.LOCALE.length&&goog.LOCALE.substring(0,3).toLowerCase()=="ckb"&&(goog.LOCALE.length==3||goog.LOCALE.substring(3,4)=="-"||goog.LOCALE.substring(3,4)=="_")||7<=goog.LOCALE.length&&(goog.LOCALE.substring(2,3)=="-"||goog.LOCALE.substring(2,3)=="_")&&(goog.LOCALE.substring(3,7).toLowerCase()=="adlm"||goog.LOCALE.substring(3,7).toLowerCase()=="arab"||goog.LOCALE.substring(3,7).toLowerCase()=="hebr"||goog.LOCALE.substring(3,7).toLowerCase()=="nkoo"||goog.LOCALE.substring(3,7).toLowerCase()=="rohg"||goog.LOCALE.substring(3,7).toLowerCase()=="thaa")||8<=goog.LOCALE.length&&(goog.LOCALE.substring(3,4)=="-"||goog.LOCALE.substring(3,4)=="_")&&(goog.LOCALE.substring(4,8).toLowerCase()=="adlm"||goog.LOCALE.substring(4,8).toLowerCase()=="arab"||goog.LOCALE.substring(4,8).toLowerCase()=="hebr"||goog.LOCALE.substring(4,8).toLowerCase()=="nkoo"||goog.LOCALE.substring(4,8).toLowerCase()=="rohg"||goog.LOCALE.substring(4,8).toLowerCase()=="thaa"),goog.i18n.bidi.Format={LRE:"‪",RLE:"‫",PDF:"‬",LRM:"‎",RLM:"‏"},goog.i18n.bidi.Dir={LTR:1,RTL:-1,NEUTRAL:0},goog.i18n.bidi.RIGHT="right",goog.i18n.bidi.LEFT="left",goog.i18n.bidi.I18N_RIGHT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.LEFT:goog.i18n.bidi.RIGHT,goog.i18n.bidi.I18N_LEFT=goog.i18n.bidi.IS_RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,goog.i18n.bidi.toDir=function(i,e){return typeof i=="number"?0<i?goog.i18n.bidi.Dir.LTR:0>i?goog.i18n.bidi.Dir.RTL:e?null:goog.i18n.bidi.Dir.NEUTRAL:i==null?null:i?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR},goog.i18n.bidi.ltrChars_="A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\uD801\uD804-\uD839\uD83C-\uDBFF豈-﬜︀-﹯﻽-￿",goog.i18n.bidi.rtlChars_="֑-ۯۺ-ࣿ‏\uD802-\uD803\uD83A-\uD83Bיִ-﷿ﹰ-ﻼ",goog.i18n.bidi.htmlSkipReg_=/<[^>]*>|&[^;]+;/g,goog.i18n.bidi.stripHtmlIfNeeded_=function(i,e){return e?i.replace(goog.i18n.bidi.htmlSkipReg_,""):i},goog.i18n.bidi.rtlCharReg_=new RegExp("["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.ltrCharReg_=new RegExp("["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.hasAnyRtl=function(i,e){return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(i,e))},goog.i18n.bidi.hasRtlChar=goog.i18n.bidi.hasAnyRtl,goog.i18n.bidi.hasAnyLtr=function(i,e){return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(i,e))},goog.i18n.bidi.ltrRe_=new RegExp("^["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.rtlRe_=new RegExp("^["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.isRtlChar=function(i){return goog.i18n.bidi.rtlRe_.test(i)},goog.i18n.bidi.isLtrChar=function(i){return goog.i18n.bidi.ltrRe_.test(i)},goog.i18n.bidi.isNeutralChar=function(i){return!goog.i18n.bidi.isLtrChar(i)&&!goog.i18n.bidi.isRtlChar(i)},goog.i18n.bidi.ltrDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.rtlChars_+"]*["+goog.i18n.bidi.ltrChars_+"]"),goog.i18n.bidi.rtlDirCheckRe_=new RegExp("^[^"+goog.i18n.bidi.ltrChars_+"]*["+goog.i18n.bidi.rtlChars_+"]"),goog.i18n.bidi.startsWithRtl=function(i,e){return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(i,e))},goog.i18n.bidi.isRtlText=goog.i18n.bidi.startsWithRtl,goog.i18n.bidi.startsWithLtr=function(i,e){return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(i,e))},goog.i18n.bidi.isLtrText=goog.i18n.bidi.startsWithLtr,goog.i18n.bidi.isRequiredLtrRe_=/^http:\/\/.*/,goog.i18n.bidi.isNeutralText=function(i,e){return i=goog.i18n.bidi.stripHtmlIfNeeded_(i,e),goog.i18n.bidi.isRequiredLtrRe_.test(i)||!goog.i18n.bidi.hasAnyLtr(i)&&!goog.i18n.bidi.hasAnyRtl(i)},goog.i18n.bidi.ltrExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.ltrChars_+"][^"+goog.i18n.bidi.rtlChars_+"]*$"),goog.i18n.bidi.rtlExitDirCheckRe_=new RegExp("["+goog.i18n.bidi.rtlChars_+"][^"+goog.i18n.bidi.ltrChars_+"]*$"),goog.i18n.bidi.endsWithLtr=function(i,e){return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(i,e))},goog.i18n.bidi.isLtrExitText=goog.i18n.bidi.endsWithLtr,goog.i18n.bidi.endsWithRtl=function(i,e){return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(i,e))},goog.i18n.bidi.isRtlExitText=goog.i18n.bidi.endsWithRtl,goog.i18n.bidi.rtlLocalesRe_=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,goog.i18n.bidi.isRtlLanguage=function(i){return goog.i18n.bidi.rtlLocalesRe_.test(i)},goog.i18n.bidi.bracketGuardTextRe_=/(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,goog.i18n.bidi.guardBracketInText=function(i,e){return e=(e===void 0?goog.i18n.bidi.hasAnyRtl(i):e)?goog.i18n.bidi.Format.RLM:goog.i18n.bidi.Format.LRM,i.replace(goog.i18n.bidi.bracketGuardTextRe_,e+"$&"+e)},goog.i18n.bidi.enforceRtlInHtml=function(i){return i.charAt(0)=="<"?i.replace(/<\w+/,"$& dir=rtl"):`
<span dir=rtl>`+i+"</span>"},goog.i18n.bidi.enforceRtlInText=function(i){return goog.i18n.bidi.Format.RLE+i+goog.i18n.bidi.Format.PDF},goog.i18n.bidi.enforceLtrInHtml=function(i){return i.charAt(0)=="<"?i.replace(/<\w+/,"$& dir=ltr"):`
<span dir=ltr>`+i+"</span>"},goog.i18n.bidi.enforceLtrInText=function(i){return goog.i18n.bidi.Format.LRE+i+goog.i18n.bidi.Format.PDF},goog.i18n.bidi.dimensionsRe_=/:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g,goog.i18n.bidi.leftRe_=/left/gi,goog.i18n.bidi.rightRe_=/right/gi,goog.i18n.bidi.tempRe_=/%%%%/g,goog.i18n.bidi.mirrorCSS=function(i){return i.replace(goog.i18n.bidi.dimensionsRe_,":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_,"%%%%").replace(goog.i18n.bidi.rightRe_,goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_,goog.i18n.bidi.RIGHT)},goog.i18n.bidi.doubleQuoteSubstituteRe_=/([\u0591-\u05f2])"/g,goog.i18n.bidi.singleQuoteSubstituteRe_=/([\u0591-\u05f2])'/g,goog.i18n.bidi.normalizeHebrewQuote=function(i){return i.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_,"$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_,"$1׳")},goog.i18n.bidi.wordSeparatorRe_=/\s+/,goog.i18n.bidi.hasNumeralsRe_=/[\d\u06f0-\u06f9]/,goog.i18n.bidi.rtlDetectionThreshold_=.4,goog.i18n.bidi.estimateDirection=function(i,e){var t=0,s=0,o=!1;for(i=goog.i18n.bidi.stripHtmlIfNeeded_(i,e).split(goog.i18n.bidi.wordSeparatorRe_),e=0;e<i.length;e++){var r=i[e];goog.i18n.bidi.startsWithRtl(r)?(t++,s++):goog.i18n.bidi.isRequiredLtrRe_.test(r)?o=!0:goog.i18n.bidi.hasAnyLtr(r)?s++:goog.i18n.bidi.hasNumeralsRe_.test(r)&&(o=!0)}return s==0?o?goog.i18n.bidi.Dir.LTR:goog.i18n.bidi.Dir.NEUTRAL:t/s>goog.i18n.bidi.rtlDetectionThreshold_?goog.i18n.bidi.Dir.RTL:goog.i18n.bidi.Dir.LTR},goog.i18n.bidi.detectRtlDirectionality=function(i,e){return goog.i18n.bidi.estimateDirection(i,e)==goog.i18n.bidi.Dir.RTL},goog.i18n.bidi.setElementDirAndAlign=function(i,e){i&&(e=goog.i18n.bidi.toDir(e))&&(i.style.textAlign=e==goog.i18n.bidi.Dir.RTL?goog.i18n.bidi.RIGHT:goog.i18n.bidi.LEFT,i.dir=e==goog.i18n.bidi.Dir.RTL?"rtl":"ltr")},goog.i18n.bidi.setElementDirByTextDirectionality=function(i,e){switch(goog.i18n.bidi.estimateDirection(e)){case goog.i18n.bidi.Dir.LTR:i.dir="ltr";break;case goog.i18n.bidi.Dir.RTL:i.dir="rtl";break;default:i.removeAttribute("dir")}},goog.i18n.bidi.DirectionalString=function(){},goog.html.TrustedResourceUrl=function(i,e){this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_=i===goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_&&e||"",this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString=!0,goog.html.TrustedResourceUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString()},goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.TrustedResourceUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR},goog.html.TrustedResourceUrl.prototype.cloneWithParams=function(i,e){var t=goog.html.TrustedResourceUrl.unwrap(this),s=(t=goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(t))[3]||"";return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(t[1]+goog.html.TrustedResourceUrl.stringifyParams_("?",t[2]||"",i)+goog.html.TrustedResourceUrl.stringifyParams_("#",s,e))},goog.DEBUG&&(goog.html.TrustedResourceUrl.prototype.toString=function(){return"TrustedResourceUrl{"+this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_+"}"}),goog.html.TrustedResourceUrl.unwrap=function(i){return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(i).toString()},goog.html.TrustedResourceUrl.unwrapTrustedScriptURL=function(i){return i instanceof goog.html.TrustedResourceUrl&&i.constructor===goog.html.TrustedResourceUrl&&i.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?i.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_:(goog.asserts.fail("expected object of type TrustedResourceUrl, got '"+i+"' of type "+goog.typeOf(i)),"type_error:TrustedResourceUrl")},goog.html.TrustedResourceUrl.format=function(i,e){var t=goog.string.Const.unwrap(i);if(!goog.html.TrustedResourceUrl.BASE_URL_.test(t))throw Error("Invalid TrustedResourceUrl format: "+t);return i=t.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_,function(s,o){if(!Object.prototype.hasOwnProperty.call(e,o))throw Error('Found marker, "'+o+'", in format string, "'+t+'", but no valid label mapping found in args: '+JSON.stringify(e));return(s=e[o])instanceof goog.string.Const?goog.string.Const.unwrap(s):encodeURIComponent(String(s))}),goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.TrustedResourceUrl.FORMAT_MARKER_=/%{(\w+)}/g,goog.html.TrustedResourceUrl.BASE_URL_=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,goog.html.TrustedResourceUrl.URL_PARAM_PARSER_=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,goog.html.TrustedResourceUrl.formatWithParams=function(i,e,t,s){return goog.html.TrustedResourceUrl.format(i,e).cloneWithParams(t,s)},goog.html.TrustedResourceUrl.fromConstant=function(i){return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(i))},goog.html.TrustedResourceUrl.fromConstants=function(i){for(var e="",t=0;t<i.length;t++)e+=goog.string.Const.unwrap(i[t]);return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.TrustedResourceUrl.fromSafeScript=function(i){return i=goog.fs.blob.getBlobWithProperties([goog.html.SafeScript.unwrap(i)],"text/javascript"),i=goog.fs.url.createObjectUrl(i),goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse=function(i){return i=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(i):i,new goog.html.TrustedResourceUrl(goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,i)},goog.html.TrustedResourceUrl.stringifyParams_=function(i,e,t){if(t==null)return e;if(typeof t=="string")return t?i+encodeURIComponent(t):"";for(var s in t){var o=t[s];o=Array.isArray(o)?o:[o];for(var r=0;r<o.length;r++){var n=o[r];n!=null&&(e||(e=i),e+=(e.length>i.length?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(String(n)))}}return e},goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_={},goog.string.internal={},goog.string.internal.startsWith=function(i,e){return i.lastIndexOf(e,0)==0},goog.string.internal.endsWith=function(i,e){var t=i.length-e.length;return 0<=t&&i.indexOf(e,t)==t},goog.string.internal.caseInsensitiveStartsWith=function(i,e){return goog.string.internal.caseInsensitiveCompare(e,i.substr(0,e.length))==0},goog.string.internal.caseInsensitiveEndsWith=function(i,e){return goog.string.internal.caseInsensitiveCompare(e,i.substr(i.length-e.length,e.length))==0},goog.string.internal.caseInsensitiveEquals=function(i,e){return i.toLowerCase()==e.toLowerCase()},goog.string.internal.isEmptyOrWhitespace=function(i){return/^[\s\xa0]*$/.test(i)},goog.string.internal.trim=goog.TRUSTED_SITE&&String.prototype.trim?function(i){return i.trim()}:function(i){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(i)[1]},goog.string.internal.caseInsensitiveCompare=function(i,e){return(i=String(i).toLowerCase())<(e=String(e).toLowerCase())?-1:i==e?0:1},goog.string.internal.newLineToBr=function(i,e){return i.replace(/(\r\n|\r|\n)/g,e?"<br />":"<br>")},goog.string.internal.htmlEscape=function(i,e){if(e)i=i.replace(goog.string.internal.AMP_RE_,"&amp;").replace(goog.string.internal.LT_RE_,"&lt;").replace(goog.string.internal.GT_RE_,"&gt;").replace(goog.string.internal.QUOT_RE_,"&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;").replace(goog.string.internal.NULL_RE_,"&#0;");else{if(!goog.string.internal.ALL_RE_.test(i))return i;i.indexOf("&")!=-1&&(i=i.replace(goog.string.internal.AMP_RE_,"&amp;")),i.indexOf("<")!=-1&&(i=i.replace(goog.string.internal.LT_RE_,"&lt;")),i.indexOf(">")!=-1&&(i=i.replace(goog.string.internal.GT_RE_,"&gt;")),i.indexOf('"')!=-1&&(i=i.replace(goog.string.internal.QUOT_RE_,"&quot;")),i.indexOf("'")!=-1&&(i=i.replace(goog.string.internal.SINGLE_QUOTE_RE_,"&#39;")),i.indexOf("\0")!=-1&&(i=i.replace(goog.string.internal.NULL_RE_,"&#0;"))}return i},goog.string.internal.AMP_RE_=/&/g,goog.string.internal.LT_RE_=/</g,goog.string.internal.GT_RE_=/>/g,goog.string.internal.QUOT_RE_=/"/g,goog.string.internal.SINGLE_QUOTE_RE_=/'/g,goog.string.internal.NULL_RE_=/\x00/g,goog.string.internal.ALL_RE_=/[\x00&<>"']/,goog.string.internal.whitespaceEscape=function(i,e){return goog.string.internal.newLineToBr(i.replace(/  /g," &#160;"),e)},goog.string.internal.contains=function(i,e){return i.indexOf(e)!=-1},goog.string.internal.caseInsensitiveContains=function(i,e){return goog.string.internal.contains(i.toLowerCase(),e.toLowerCase())},goog.string.internal.compareVersions=function(i,e){var t=0;i=goog.string.internal.trim(String(i)).split("."),e=goog.string.internal.trim(String(e)).split(".");for(var s=Math.max(i.length,e.length),o=0;t==0&&o<s;o++){var r=i[o]||"",n=e[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],n=/(\d*)(\D*)(.*)/.exec(n)||["","","",""],r[0].length==0&&n[0].length==0)break;t=r[1].length==0?0:parseInt(r[1],10);var p=n[1].length==0?0:parseInt(n[1],10);t=goog.string.internal.compareElements_(t,p)||goog.string.internal.compareElements_(r[2].length==0,n[2].length==0)||goog.string.internal.compareElements_(r[2],n[2]),r=r[3],n=n[3]}while(t==0)}return t},goog.string.internal.compareElements_=function(i,e){return i<e?-1:i>e?1:0},goog.html.SafeUrl=function(i,e){this.privateDoNotAccessOrElseSafeUrlWrappedValue_=i===goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_&&e||"",this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeUrl.INNOCUOUS_STRING="about:invalid#zClosurez",goog.html.SafeUrl.prototype.implementsGoogStringTypedString=!0,goog.html.SafeUrl.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString()},goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.SafeUrl.prototype.getDirection=function(){return goog.i18n.bidi.Dir.LTR},goog.DEBUG&&(goog.html.SafeUrl.prototype.toString=function(){return"SafeUrl{"+this.privateDoNotAccessOrElseSafeUrlWrappedValue_+"}"}),goog.html.SafeUrl.unwrap=function(i){return i instanceof goog.html.SafeUrl&&i.constructor===goog.html.SafeUrl&&i.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?i.privateDoNotAccessOrElseSafeUrlWrappedValue_:(goog.asserts.fail("expected object of type SafeUrl, got '"+i+"' of type "+goog.typeOf(i)),"type_error:SafeUrl")},goog.html.SafeUrl.fromConstant=function(i){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(i))},goog.html.SAFE_MIME_TYPE_PATTERN_=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,goog.html.SafeUrl.isSafeMimeType=function(i){return goog.html.SAFE_MIME_TYPE_PATTERN_.test(i)},goog.html.SafeUrl.fromBlob=function(i){return i=goog.html.SafeUrl.isSafeMimeType(i.type)?goog.fs.url.createObjectUrl(i):goog.html.SafeUrl.INNOCUOUS_STRING,goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.SafeUrl.fromMediaSource=function(i){return goog.asserts.assert("MediaSource"in goog.global,"No support for MediaSource"),i=i instanceof MediaSource?goog.fs.url.createObjectUrl(i):goog.html.SafeUrl.INNOCUOUS_STRING,goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.DATA_URL_PATTERN_=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,goog.html.SafeUrl.fromDataUrl=function(i){var e=(i=i.replace(/(%0A|%0D)/g,"")).match(goog.html.DATA_URL_PATTERN_);return e=e&&goog.html.SafeUrl.isSafeMimeType(e[1]),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e?i:goog.html.SafeUrl.INNOCUOUS_STRING)},goog.html.SafeUrl.fromTelUrl=function(i){return goog.string.internal.caseInsensitiveStartsWith(i,"tel:")||(i=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.SIP_URL_PATTERN_=/^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i,goog.html.SafeUrl.fromSipUrl=function(i){return goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(i))||(i=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.SafeUrl.fromFacebookMessengerUrl=function(i){return goog.string.internal.caseInsensitiveStartsWith(i,"fb-messenger://share")||(i=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.SafeUrl.fromWhatsAppUrl=function(i){return goog.string.internal.caseInsensitiveStartsWith(i,"whatsapp://send")||(i=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.SafeUrl.fromSmsUrl=function(i){return goog.string.internal.caseInsensitiveStartsWith(i,"sms:")&&goog.html.SafeUrl.isSmsUrlBodyValid_(i)||(i=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.SafeUrl.isSmsUrlBodyValid_=function(i){var e=i.indexOf("#");if(0<e&&(i=i.substring(0,e)),!(e=i.match(/[?&]body=/gi)))return!0;if(1<e.length)return!1;if(!(i=i.match(/[?&]body=([^&]*)/)[1]))return!0;try{decodeURIComponent(i)}catch{return!1}return/^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(i)},goog.html.SafeUrl.fromSshUrl=function(i){return goog.string.internal.caseInsensitiveStartsWith(i,"ssh://")||(i=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)},goog.html.SafeUrl.sanitizeChromeExtensionUrl=function(i,e){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//,i,e)},goog.html.SafeUrl.sanitizeFirefoxExtensionUrl=function(i,e){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//,i,e)},goog.html.SafeUrl.sanitizeEdgeExtensionUrl=function(i,e){return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//,i,e)},goog.html.SafeUrl.sanitizeExtensionUrl_=function(i,e,t){return(i=i.exec(e))?(i=i[1],(t instanceof goog.string.Const?[goog.string.Const.unwrap(t)]:t.map(function(s){return goog.string.Const.unwrap(s)})).indexOf(i)==-1&&(e=goog.html.SafeUrl.INNOCUOUS_STRING)):e=goog.html.SafeUrl.INNOCUOUS_STRING,goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeUrl.fromTrustedResourceUrl=function(i){return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(i))},goog.html.SAFE_URL_PATTERN_=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,goog.html.SafeUrl.SAFE_URL_PATTERN=goog.html.SAFE_URL_PATTERN_,goog.html.SafeUrl.sanitize=function(i){return i instanceof goog.html.SafeUrl?i:(i=typeof i=="object"&&i.implementsGoogStringTypedString?i.getTypedStringValue():String(i),goog.html.SAFE_URL_PATTERN_.test(i)||(i=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i))},goog.html.SafeUrl.sanitizeAssertUnchanged=function(i,e){return i instanceof goog.html.SafeUrl?i:(i=typeof i=="object"&&i.implementsGoogStringTypedString?i.getTypedStringValue():String(i),e&&/^data:/i.test(i)&&(e=goog.html.SafeUrl.fromDataUrl(i)).getTypedStringValue()==i?e:(goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(i),"%s does not match the safe URL pattern",i)||(i=goog.html.SafeUrl.INNOCUOUS_STRING),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(i)))},goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse=function(i){return new goog.html.SafeUrl(goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,i)},goog.html.SafeUrl.ABOUT_BLANK=goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank"),goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_={},goog.html.SafeStyle=function(){this.privateDoNotAccessOrElseSafeStyleWrappedValue_="",this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeStyle.prototype.implementsGoogStringTypedString=!0,goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeStyle.fromConstant=function(i){return(i=goog.string.Const.unwrap(i)).length===0?goog.html.SafeStyle.EMPTY:(goog.asserts.assert(goog.string.internal.endsWith(i,";"),"Last character of style string is not ';': "+i),goog.asserts.assert(goog.string.internal.contains(i,":"),`Style string must contain at least one ':', to specify a "name: value" pair: `+i),goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(i))},goog.html.SafeStyle.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_},goog.DEBUG&&(goog.html.SafeStyle.prototype.toString=function(){return"SafeStyle{"+this.privateDoNotAccessOrElseSafeStyleWrappedValue_+"}"}),goog.html.SafeStyle.unwrap=function(i){return i instanceof goog.html.SafeStyle&&i.constructor===goog.html.SafeStyle&&i.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?i.privateDoNotAccessOrElseSafeStyleWrappedValue_:(goog.asserts.fail("expected object of type SafeStyle, got '"+i+"' of type "+goog.typeOf(i)),"type_error:SafeStyle")},goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse=function(i){return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(i)},goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_=function(i){return this.privateDoNotAccessOrElseSafeStyleWrappedValue_=i,this},goog.html.SafeStyle.EMPTY=goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(""),goog.html.SafeStyle.INNOCUOUS_STRING="zClosurez",goog.html.SafeStyle.create=function(i){var e,t="";for(e in i){if(!/^[-_a-zA-Z0-9]+$/.test(e))throw Error("Name allows only [-_a-zA-Z0-9], got: "+e);var s=i[e];s!=null&&(t+=e+":"+(s=Array.isArray(s)?goog.array.map(s,goog.html.SafeStyle.sanitizePropertyValue_).join(" "):goog.html.SafeStyle.sanitizePropertyValue_(s))+";")}return t?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(t):goog.html.SafeStyle.EMPTY},goog.html.SafeStyle.sanitizePropertyValue_=function(i){if(i instanceof goog.html.SafeUrl)return'url("'+goog.html.SafeUrl.unwrap(i).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(i=i instanceof goog.string.Const?goog.string.Const.unwrap(i):goog.html.SafeStyle.sanitizePropertyValueString_(String(i)),/[{;}]/.test(i))throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.",[i]);return i},goog.html.SafeStyle.sanitizePropertyValueString_=function(i){var e=i.replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_,"$1").replace(goog.html.SafeStyle.URL_RE_,"url");return goog.html.SafeStyle.VALUE_RE_.test(e)?goog.html.SafeStyle.COMMENT_RE_.test(i)?(goog.asserts.fail("String value disallows comments, got: "+i),goog.html.SafeStyle.INNOCUOUS_STRING):goog.html.SafeStyle.hasBalancedQuotes_(i)?goog.html.SafeStyle.hasBalancedSquareBrackets_(i)?goog.html.SafeStyle.sanitizeUrl_(i):(goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: "+i),goog.html.SafeStyle.INNOCUOUS_STRING):(goog.asserts.fail("String value requires balanced quotes, got: "+i),goog.html.SafeStyle.INNOCUOUS_STRING):(goog.asserts.fail("String value allows only "+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+" and simple functions, got: "+i),goog.html.SafeStyle.INNOCUOUS_STRING)},goog.html.SafeStyle.hasBalancedQuotes_=function(i){for(var e=!0,t=!0,s=0;s<i.length;s++){var o=i.charAt(s);o=="'"&&t?e=!e:o=='"'&&e&&(t=!t)}return e&&t},goog.html.SafeStyle.hasBalancedSquareBrackets_=function(i){for(var e=!0,t=/^[-_a-zA-Z0-9]$/,s=0;s<i.length;s++){var o=i.charAt(s);if(o=="]"){if(e)return!1;e=!0}else if(o=="["){if(!e)return!1;e=!1}else if(!e&&!t.test(o))return!1}return e},goog.html.SafeStyle.VALUE_ALLOWED_CHARS_=`[-,."'%_!# a-zA-Z0-9\\[\\]]`,goog.html.SafeStyle.VALUE_RE_=new RegExp("^"+goog.html.SafeStyle.VALUE_ALLOWED_CHARS_+"+$"),goog.html.SafeStyle.URL_RE_=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,goog.html.SafeStyle.ALLOWED_FUNCTIONS_="calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" "),goog.html.SafeStyle.FUNCTIONS_RE_=new RegExp("\\b("+goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|")+")\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),goog.html.SafeStyle.COMMENT_RE_=/\/\*/,goog.html.SafeStyle.sanitizeUrl_=function(i){return i.replace(goog.html.SafeStyle.URL_RE_,function(e,t,s,o){var r="";return s=s.replace(/^(['"])(.*)\1$/,function(n,p,d){return r=p,d}),e=goog.html.SafeUrl.sanitize(s).getTypedStringValue(),t+r+e+r+o})},goog.html.SafeStyle.concat=function(i){var e="",t=function(s){Array.isArray(s)?goog.array.forEach(s,t):e+=goog.html.SafeStyle.unwrap(s)};return goog.array.forEach(arguments,t),e?goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e):goog.html.SafeStyle.EMPTY},goog.html.SafeStyleSheet=function(){this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_="",this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_},goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString=!0,goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeStyleSheet.createRule=function(i,e){if(goog.string.internal.contains(i,"<"))throw Error("Selector does not allow '<', got: "+i);var t=i.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(t))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+i);if(!goog.html.SafeStyleSheet.hasBalancedBrackets_(t))throw Error("() and [] in selector must be balanced, got: "+i);return e instanceof goog.html.SafeStyle||(e=goog.html.SafeStyle.create(e)),i=i+"{"+goog.html.SafeStyle.unwrap(e).replace(/</g,"\\3C ")+"}",goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(i)},goog.html.SafeStyleSheet.hasBalancedBrackets_=function(i){for(var e={"(":")","[":"]"},t=[],s=0;s<i.length;s++){var o=i[s];if(e[o])t.push(e[o]);else if(goog.object.contains(e,o)&&t.pop()!=o)return!1}return t.length==0},goog.html.SafeStyleSheet.concat=function(i){var e="",t=function(s){Array.isArray(s)?goog.array.forEach(s,t):e+=goog.html.SafeStyleSheet.unwrap(s)};return goog.array.forEach(arguments,t),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)},goog.html.SafeStyleSheet.fromConstant=function(i){return(i=goog.string.Const.unwrap(i)).length===0?goog.html.SafeStyleSheet.EMPTY:(goog.asserts.assert(!goog.string.internal.contains(i,"<"),"Forbidden '<' character in style sheet string: "+i),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(i))},goog.html.SafeStyleSheet.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_},goog.DEBUG&&(goog.html.SafeStyleSheet.prototype.toString=function(){return"SafeStyleSheet{"+this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_+"}"}),goog.html.SafeStyleSheet.unwrap=function(i){return i instanceof goog.html.SafeStyleSheet&&i.constructor===goog.html.SafeStyleSheet&&i.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?i.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_:(goog.asserts.fail("expected object of type SafeStyleSheet, got '"+i+"' of type "+goog.typeOf(i)),"type_error:SafeStyleSheet")},goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse=function(i){return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(i)},goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_=function(i){return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_=i,this},goog.html.SafeStyleSheet.EMPTY=goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(""),goog.labs={},goog.labs.userAgent={},goog.labs.userAgent.util={},goog.labs.userAgent.util.getNativeUserAgentString_=function(){var i=goog.labs.userAgent.util.getNavigator_();return i&&(i=i.userAgent)?i:""},goog.labs.userAgent.util.getNavigator_=function(){return goog.global.navigator},goog.labs.userAgent.util.userAgent_=goog.labs.userAgent.util.getNativeUserAgentString_(),goog.labs.userAgent.util.setUserAgent=function(i){goog.labs.userAgent.util.userAgent_=i||goog.labs.userAgent.util.getNativeUserAgentString_()},goog.labs.userAgent.util.getUserAgent=function(){return goog.labs.userAgent.util.userAgent_},goog.labs.userAgent.util.matchUserAgent=function(i){var e=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.contains(e,i)},goog.labs.userAgent.util.matchUserAgentIgnoreCase=function(i){var e=goog.labs.userAgent.util.getUserAgent();return goog.string.internal.caseInsensitiveContains(e,i)},goog.labs.userAgent.util.extractVersionTuples=function(i){for(var e,t=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,s=[];e=t.exec(i);)s.push([e[1],e[2],e[3]||void 0]);return s},goog.labs.userAgent.browser={},goog.labs.userAgent.browser.matchOpera_=function(){return goog.labs.userAgent.util.matchUserAgent("Opera")},goog.labs.userAgent.browser.matchIE_=function(){return goog.labs.userAgent.util.matchUserAgent("Trident")||goog.labs.userAgent.util.matchUserAgent("MSIE")},goog.labs.userAgent.browser.matchEdgeHtml_=function(){return goog.labs.userAgent.util.matchUserAgent("Edge")},goog.labs.userAgent.browser.matchEdgeChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("Edg/")},goog.labs.userAgent.browser.matchOperaChromium_=function(){return goog.labs.userAgent.util.matchUserAgent("OPR")},goog.labs.userAgent.browser.matchFirefox_=function(){return goog.labs.userAgent.util.matchUserAgent("Firefox")||goog.labs.userAgent.util.matchUserAgent("FxiOS")},goog.labs.userAgent.browser.matchSafari_=function(){return goog.labs.userAgent.util.matchUserAgent("Safari")&&!(goog.labs.userAgent.browser.matchChrome_()||goog.labs.userAgent.browser.matchCoast_()||goog.labs.userAgent.browser.matchOpera_()||goog.labs.userAgent.browser.matchEdgeHtml_()||goog.labs.userAgent.browser.matchEdgeChromium_()||goog.labs.userAgent.browser.matchOperaChromium_()||goog.labs.userAgent.browser.matchFirefox_()||goog.labs.userAgent.browser.isSilk()||goog.labs.userAgent.util.matchUserAgent("Android"))},goog.labs.userAgent.browser.matchCoast_=function(){return goog.labs.userAgent.util.matchUserAgent("Coast")},goog.labs.userAgent.browser.matchIosWebview_=function(){return(goog.labs.userAgent.util.matchUserAgent("iPad")||goog.labs.userAgent.util.matchUserAgent("iPhone"))&&!goog.labs.userAgent.browser.matchSafari_()&&!goog.labs.userAgent.browser.matchChrome_()&&!goog.labs.userAgent.browser.matchCoast_()&&!goog.labs.userAgent.browser.matchFirefox_()&&goog.labs.userAgent.util.matchUserAgent("AppleWebKit")},goog.labs.userAgent.browser.matchChrome_=function(){return(goog.labs.userAgent.util.matchUserAgent("Chrome")||goog.labs.userAgent.util.matchUserAgent("CriOS"))&&!goog.labs.userAgent.browser.matchEdgeHtml_()},goog.labs.userAgent.browser.matchAndroidBrowser_=function(){return goog.labs.userAgent.util.matchUserAgent("Android")&&!(goog.labs.userAgent.browser.isChrome()||goog.labs.userAgent.browser.isFirefox()||goog.labs.userAgent.browser.isOpera()||goog.labs.userAgent.browser.isSilk())},goog.labs.userAgent.browser.isOpera=goog.labs.userAgent.browser.matchOpera_,goog.labs.userAgent.browser.isIE=goog.labs.userAgent.browser.matchIE_,goog.labs.userAgent.browser.isEdge=goog.labs.userAgent.browser.matchEdgeHtml_,goog.labs.userAgent.browser.isEdgeChromium=goog.labs.userAgent.browser.matchEdgeChromium_,goog.labs.userAgent.browser.isOperaChromium=goog.labs.userAgent.browser.matchOperaChromium_,goog.labs.userAgent.browser.isFirefox=goog.labs.userAgent.browser.matchFirefox_,goog.labs.userAgent.browser.isSafari=goog.labs.userAgent.browser.matchSafari_,goog.labs.userAgent.browser.isCoast=goog.labs.userAgent.browser.matchCoast_,goog.labs.userAgent.browser.isIosWebview=goog.labs.userAgent.browser.matchIosWebview_,goog.labs.userAgent.browser.isChrome=goog.labs.userAgent.browser.matchChrome_,goog.labs.userAgent.browser.isAndroidBrowser=goog.labs.userAgent.browser.matchAndroidBrowser_,goog.labs.userAgent.browser.isSilk=function(){return goog.labs.userAgent.util.matchUserAgent("Silk")},goog.labs.userAgent.browser.getVersion=function(){function i(o){return o=goog.array.find(o,s),t[o]||""}var e=goog.labs.userAgent.util.getUserAgent();if(goog.labs.userAgent.browser.isIE())return goog.labs.userAgent.browser.getIEVersion_(e);e=goog.labs.userAgent.util.extractVersionTuples(e);var t={};goog.array.forEach(e,function(o){t[o[0]]=o[1]});var s=goog.partial(goog.object.containsKey,t);return goog.labs.userAgent.browser.isOpera()?i(["Version","Opera"]):goog.labs.userAgent.browser.isEdge()?i(["Edge"]):goog.labs.userAgent.browser.isEdgeChromium()?i(["Edg"]):goog.labs.userAgent.browser.isChrome()?i(["Chrome","CriOS","HeadlessChrome"]):(e=e[2])&&e[1]||""},goog.labs.userAgent.browser.isVersionOrHigher=function(i){return 0<=goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(),i)},goog.labs.userAgent.browser.getIEVersion_=function(i){var e=/rv: *([\d\.]*)/.exec(i);if(e&&e[1])return e[1];e="";var t=/MSIE +([\d\.]+)/.exec(i);if(t&&t[1])if(i=/Trident\/(\d.\d)/.exec(i),t[1]=="7.0")if(i&&i[1])switch(i[1]){case"4.0":e="8.0";break;case"5.0":e="9.0";break;case"6.0":e="10.0";break;case"7.0":e="11.0"}else e="7.0";else e=t[1];return e},goog.html.SafeHtml=function(){this.privateDoNotAccessOrElseSafeHtmlWrappedValue_="",this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_=goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_,this.dir_=null},goog.html.SafeHtml.ENABLE_ERROR_MESSAGES=goog.DEBUG,goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE=!0,goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString=!0,goog.html.SafeHtml.prototype.getDirection=function(){return this.dir_},goog.html.SafeHtml.prototype.implementsGoogStringTypedString=!0,goog.html.SafeHtml.prototype.getTypedStringValue=function(){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString()},goog.DEBUG&&(goog.html.SafeHtml.prototype.toString=function(){return"SafeHtml{"+this.privateDoNotAccessOrElseSafeHtmlWrappedValue_+"}"}),goog.html.SafeHtml.unwrap=function(i){return goog.html.SafeHtml.unwrapTrustedHTML(i).toString()},goog.html.SafeHtml.unwrapTrustedHTML=function(i){return i instanceof goog.html.SafeHtml&&i.constructor===goog.html.SafeHtml&&i.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_===goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_?i.privateDoNotAccessOrElseSafeHtmlWrappedValue_:(goog.asserts.fail("expected object of type SafeHtml, got '"+i+"' of type "+goog.typeOf(i)),"type_error:SafeHtml")},goog.html.SafeHtml.htmlEscape=function(i){if(i instanceof goog.html.SafeHtml)return i;var e=typeof i=="object",t=null;return e&&i.implementsGoogI18nBidiDirectionalString&&(t=i.getDirection()),i=e&&i.implementsGoogStringTypedString?i.getTypedStringValue():String(i),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(i),t)},goog.html.SafeHtml.htmlEscapePreservingNewlines=function(i){return i instanceof goog.html.SafeHtml?i:(i=goog.html.SafeHtml.htmlEscape(i),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(i)),i.getDirection()))},goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces=function(i){return i instanceof goog.html.SafeHtml?i:(i=goog.html.SafeHtml.htmlEscape(i),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(i)),i.getDirection()))},goog.html.SafeHtml.from=goog.html.SafeHtml.htmlEscape,goog.html.SafeHtml.comment=function(i){return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!--"+goog.string.internal.htmlEscape(i)+"-->",null)},goog.html.SafeHtml.VALID_NAMES_IN_TAG_=/^[a-zA-Z0-9-]+$/,goog.html.SafeHtml.URL_ATTRIBUTES_={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},goog.html.SafeHtml.create=function(i,e,t){return goog.html.SafeHtml.verifyTagName(String(i)),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(i),e,t)},goog.html.SafeHtml.verifyTagName=function(i){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(i))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"Invalid tag name <"+i+">.":"");if(i.toUpperCase()in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"Tag name <"+i+"> is not allowed for SafeHtml.":"")},goog.html.SafeHtml.createIframe=function(i,e,t,s){i&&goog.html.TrustedResourceUrl.unwrap(i);var o={};return o.src=i||null,o.srcdoc=e&&goog.html.SafeHtml.unwrap(e),i=goog.html.SafeHtml.combineAttributes(o,{sandbox:""},t),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",i,s)},goog.html.SafeHtml.createSandboxIframe=function(i,e,t,s){if(!goog.html.SafeHtml.canUseSandboxIframe())throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?"The browser does not support sandboxed iframes.":"");var o={};return o.src=i?goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(i)):null,o.srcdoc=e||null,o.sandbox="",i=goog.html.SafeHtml.combineAttributes(o,{},t),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe",i,s)},goog.html.SafeHtml.canUseSandboxIframe=function(){return goog.global.HTMLIFrameElement&&"sandbox"in goog.global.HTMLIFrameElement.prototype},goog.html.SafeHtml.createScriptSrc=function(i,e){return goog.html.TrustedResourceUrl.unwrap(i),i=goog.html.SafeHtml.combineAttributes({src:i},{},e),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",i)},goog.html.SafeHtml.createScript=function(i,e){for(var t in e){var s=t.toLowerCase();if(s=="language"||s=="src"||s=="text"||s=="type")throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Cannot set "'+s+'" attribute':"")}for(t="",i=goog.array.concat(i),s=0;s<i.length;s++)t+=goog.html.SafeScript.unwrap(i[s]);return i=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t,goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script",e,i)},goog.html.SafeHtml.createStyle=function(i,e){e=goog.html.SafeHtml.combineAttributes({type:"text/css"},{},e);var t="";i=goog.array.concat(i);for(var s=0;s<i.length;s++)t+=goog.html.SafeStyleSheet.unwrap(i[s]);return i=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(t,goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style",e,i)},goog.html.SafeHtml.createMetaRefresh=function(i,e){return i=goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(i)),(goog.labs.userAgent.browser.isIE()||goog.labs.userAgent.browser.isEdge())&&goog.string.internal.contains(i,";")&&(i="'"+i.replace(/'/g,"%27")+"'"),goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta",{"http-equiv":"refresh",content:(e||0)+"; url="+i})},goog.html.SafeHtml.getAttrNameAndValue_=function(i,e,t){if(t instanceof goog.string.Const)t=goog.string.Const.unwrap(t);else if(e.toLowerCase()=="style"){if(!goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "style" not supported.':"");t=goog.html.SafeHtml.getStyleValue_(t)}else{if(/^on/i.test(e))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "'+e+'" requires goog.string.Const value, "'+t+'" given.':"");if(e.toLowerCase()in goog.html.SafeHtml.URL_ATTRIBUTES_)if(t instanceof goog.html.TrustedResourceUrl)t=goog.html.TrustedResourceUrl.unwrap(t);else if(t instanceof goog.html.SafeUrl)t=goog.html.SafeUrl.unwrap(t);else{if(typeof t!="string")throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Attribute "'+e+'" on tag "'+i+'" requires goog.html.SafeUrl, goog.string.Const, or string, value "'+t+'" given.':"");t=goog.html.SafeUrl.sanitize(t).getTypedStringValue()}}return t.implementsGoogStringTypedString&&(t=t.getTypedStringValue()),goog.asserts.assert(typeof t=="string"||typeof t=="number","String or number value expected, got "+typeof t+" with value: "+t),e+'="'+goog.string.internal.htmlEscape(String(t))+'"'},goog.html.SafeHtml.getStyleValue_=function(i){if(!goog.isObject(i))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'The "style" attribute requires goog.html.SafeStyle or map of style properties, '+typeof i+" given: "+i:"");return i instanceof goog.html.SafeStyle||(i=goog.html.SafeStyle.create(i)),goog.html.SafeStyle.unwrap(i)},goog.html.SafeHtml.createWithDir=function(i,e,t,s){return(e=goog.html.SafeHtml.create(e,t,s)).dir_=i,e},goog.html.SafeHtml.join=function(i,e){var t=(i=goog.html.SafeHtml.htmlEscape(i)).getDirection(),s=[],o=function(r){Array.isArray(r)?goog.array.forEach(r,o):(r=goog.html.SafeHtml.htmlEscape(r),s.push(goog.html.SafeHtml.unwrap(r)),r=r.getDirection(),t==goog.i18n.bidi.Dir.NEUTRAL?t=r:r!=goog.i18n.bidi.Dir.NEUTRAL&&t!=r&&(t=null))};return goog.array.forEach(e,o),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(s.join(goog.html.SafeHtml.unwrap(i)),t)},goog.html.SafeHtml.concat=function(i){return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY,Array.prototype.slice.call(arguments))},goog.html.SafeHtml.concatWithDir=function(i,e){var t=goog.html.SafeHtml.concat(goog.array.slice(arguments,1));return t.dir_=i,t},goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_={},goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse=function(i,e){return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(i,e)},goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_=function(i,e){return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_=goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY?goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(i):i,this.dir_=e,this},goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse=function(i,e,t){var s=null,o="<"+i+goog.html.SafeHtml.stringifyAttributes(i,e);return t==null?t=[]:Array.isArray(t)||(t=[t]),goog.dom.tags.isVoidTag(i.toLowerCase())?(goog.asserts.assert(!t.length,"Void tag <"+i+"> does not allow content."),o+=">"):(s=goog.html.SafeHtml.concat(t),o+=">"+goog.html.SafeHtml.unwrap(s)+"</"+i+">",s=s.getDirection()),(i=e&&e.dir)&&(s=/^(ltr|rtl|auto)$/i.test(i)?goog.i18n.bidi.Dir.NEUTRAL:null),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(o,s)},goog.html.SafeHtml.stringifyAttributes=function(i,e){var t="";if(e)for(var s in e){if(!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(s))throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Invalid attribute name "'+s+'".':"");var o=e[s];o!=null&&(t+=" "+goog.html.SafeHtml.getAttrNameAndValue_(i,s,o))}return t},goog.html.SafeHtml.combineAttributes=function(i,e,t){var s,o={};for(s in i)goog.asserts.assert(s.toLowerCase()==s,"Must be lower case"),o[s]=i[s];for(s in e)goog.asserts.assert(s.toLowerCase()==s,"Must be lower case"),o[s]=e[s];if(t)for(s in t){var r=s.toLowerCase();if(r in i)throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES?'Cannot override "'+r+'" attribute, got "'+s+'" with value "'+t[s]+'"':"");r in e&&delete o[r],o[s]=t[s]}return o},goog.html.SafeHtml.DOCTYPE_HTML=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>",goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.EMPTY=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("",goog.i18n.bidi.Dir.NEUTRAL),goog.html.SafeHtml.BR=goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>",goog.i18n.bidi.Dir.NEUTRAL),goog.html.uncheckedconversions={},goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract=function(i,e,t){return goog.asserts.assertString(goog.string.Const.unwrap(i),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(i)),"must provide non-empty justification"),goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e,t||null)},goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract=function(i,e){return goog.asserts.assertString(goog.string.Const.unwrap(i),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(i)),"must provide non-empty justification"),goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(e)},goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract=function(i,e){return goog.asserts.assertString(goog.string.Const.unwrap(i),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(i)),"must provide non-empty justification"),goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(e)},goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract=function(i,e){return goog.asserts.assertString(goog.string.Const.unwrap(i),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(i)),"must provide non-empty justification"),goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(e)},goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract=function(i,e){return goog.asserts.assertString(goog.string.Const.unwrap(i),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(i)),"must provide non-empty justification"),goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(e)},goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract=function(i,e){return goog.asserts.assertString(goog.string.Const.unwrap(i),"must provide justification"),goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(i)),"must provide non-empty justification"),goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(e)},goog.dom.safe={},goog.dom.safe.InsertAdjacentHtmlPosition={AFTERBEGIN:"afterbegin",AFTEREND:"afterend",BEFOREBEGIN:"beforebegin",BEFOREEND:"beforeend"},goog.dom.safe.insertAdjacentHtml=function(i,e,t){i.insertAdjacentHTML(e,goog.html.SafeHtml.unwrapTrustedHTML(t))},goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},goog.dom.safe.isInnerHtmlCleanupRecursive_=goog.functions.cacheReturnValue(function(){if(goog.DEBUG&&typeof document>"u")return!1;var i=document.createElement("div"),e=document.createElement("div");return e.appendChild(document.createElement("div")),i.appendChild(e),!(goog.DEBUG&&!i.firstChild)&&(e=i.firstChild.firstChild,i.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY),!e.parentElement)}),goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse=function(i,e){if(goog.dom.safe.isInnerHtmlCleanupRecursive_())for(;i.lastChild;)i.removeChild(i.lastChild);i.innerHTML=goog.html.SafeHtml.unwrapTrustedHTML(e)},goog.dom.safe.setInnerHtml=function(i,e){if(goog.asserts.ENABLE_ASSERTS){var t=i.tagName.toUpperCase();if(goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[t])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+i.tagName+".")}goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(i,e)},goog.dom.safe.setOuterHtml=function(i,e){i.outerHTML=goog.html.SafeHtml.unwrapTrustedHTML(e)},goog.dom.safe.setFormElementAction=function(i,e){e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),goog.dom.asserts.assertIsHTMLFormElement(i).action=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setButtonFormAction=function(i,e){e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),goog.dom.asserts.assertIsHTMLButtonElement(i).formAction=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setInputFormAction=function(i,e){e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),goog.dom.asserts.assertIsHTMLInputElement(i).formAction=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setStyle=function(i,e){i.style.cssText=goog.html.SafeStyle.unwrap(e)},goog.dom.safe.documentWrite=function(i,e){i.write(goog.html.SafeHtml.unwrapTrustedHTML(e))},goog.dom.safe.setAnchorHref=function(i,e){goog.dom.asserts.assertIsHTMLAnchorElement(i),e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),i.href=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setImageSrc=function(i,e){if(goog.dom.asserts.assertIsHTMLImageElement(i),!(e instanceof goog.html.SafeUrl)){var t=/^data:image\//i.test(e);e=goog.html.SafeUrl.sanitizeAssertUnchanged(e,t)}i.src=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setAudioSrc=function(i,e){if(goog.dom.asserts.assertIsHTMLAudioElement(i),!(e instanceof goog.html.SafeUrl)){var t=/^data:audio\//i.test(e);e=goog.html.SafeUrl.sanitizeAssertUnchanged(e,t)}i.src=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setVideoSrc=function(i,e){if(goog.dom.asserts.assertIsHTMLVideoElement(i),!(e instanceof goog.html.SafeUrl)){var t=/^data:video\//i.test(e);e=goog.html.SafeUrl.sanitizeAssertUnchanged(e,t)}i.src=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.setEmbedSrc=function(i,e){goog.dom.asserts.assertIsHTMLEmbedElement(i),i.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e)},goog.dom.safe.setFrameSrc=function(i,e){goog.dom.asserts.assertIsHTMLFrameElement(i),i.src=goog.html.TrustedResourceUrl.unwrap(e)},goog.dom.safe.setIframeSrc=function(i,e){goog.dom.asserts.assertIsHTMLIFrameElement(i),i.src=goog.html.TrustedResourceUrl.unwrap(e)},goog.dom.safe.setIframeSrcdoc=function(i,e){goog.dom.asserts.assertIsHTMLIFrameElement(i),i.srcdoc=goog.html.SafeHtml.unwrapTrustedHTML(e)},goog.dom.safe.setLinkHrefAndRel=function(i,e,t){goog.dom.asserts.assertIsHTMLLinkElement(i),i.rel=t,goog.string.internal.caseInsensitiveContains(t,"stylesheet")?(goog.asserts.assert(e instanceof goog.html.TrustedResourceUrl,'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'),i.href=goog.html.TrustedResourceUrl.unwrap(e)):i.href=e instanceof goog.html.TrustedResourceUrl?goog.html.TrustedResourceUrl.unwrap(e):e instanceof goog.html.SafeUrl?goog.html.SafeUrl.unwrap(e):goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(e))},goog.dom.safe.setObjectData=function(i,e){goog.dom.asserts.assertIsHTMLObjectElement(i),i.data=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e)},goog.dom.safe.setScriptSrc=function(i,e){goog.dom.asserts.assertIsHTMLScriptElement(i),i.src=goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(e),(e=goog.getScriptNonce())&&i.setAttribute("nonce",e)},goog.dom.safe.setScriptContent=function(i,e){goog.dom.asserts.assertIsHTMLScriptElement(i),i.text=goog.html.SafeScript.unwrapTrustedScript(e),(e=goog.getScriptNonce())&&i.setAttribute("nonce",e)},goog.dom.safe.setLocationHref=function(i,e){goog.dom.asserts.assertIsLocation(i),e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),i.href=goog.html.SafeUrl.unwrap(e)},goog.dom.safe.assignLocation=function(i,e){goog.dom.asserts.assertIsLocation(i),e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),i.assign(goog.html.SafeUrl.unwrap(e))},goog.dom.safe.replaceLocation=function(i,e){e=e instanceof goog.html.SafeUrl?e:goog.html.SafeUrl.sanitizeAssertUnchanged(e),i.replace(goog.html.SafeUrl.unwrap(e))},goog.dom.safe.openInWindow=function(i,e,t,s,o){return i=i instanceof goog.html.SafeUrl?i:goog.html.SafeUrl.sanitizeAssertUnchanged(i),e=e||goog.global,t=t instanceof goog.string.Const?goog.string.Const.unwrap(t):t||"",e.open(goog.html.SafeUrl.unwrap(i),t,s,o)},goog.dom.safe.parseFromStringHtml=function(i,e){return goog.dom.safe.parseFromString(i,e,"text/html")},goog.dom.safe.parseFromString=function(i,e,t){return i.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(e),t)},goog.dom.safe.createImageFromBlob=function(i){if(!/^image\/.*/g.test(i.type))throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");var e=goog.global.URL.createObjectURL(i);return(i=new goog.global.Image).onload=function(){goog.global.URL.revokeObjectURL(e)},goog.dom.safe.setImageSrc(i,goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."),e)),i},goog.string.DETECT_DOUBLE_ESCAPING=!1,goog.string.FORCE_NON_DOM_HTML_UNESCAPING=!1,goog.string.Unicode={NBSP:" "},goog.string.startsWith=goog.string.internal.startsWith,goog.string.endsWith=goog.string.internal.endsWith,goog.string.caseInsensitiveStartsWith=goog.string.internal.caseInsensitiveStartsWith,goog.string.caseInsensitiveEndsWith=goog.string.internal.caseInsensitiveEndsWith,goog.string.caseInsensitiveEquals=goog.string.internal.caseInsensitiveEquals,goog.string.subs=function(i,e){for(var t=i.split("%s"),s="",o=Array.prototype.slice.call(arguments,1);o.length&&1<t.length;)s+=t.shift()+o.shift();return s+t.join("%s")},goog.string.collapseWhitespace=function(i){return i.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},goog.string.isEmptyOrWhitespace=goog.string.internal.isEmptyOrWhitespace,goog.string.isEmptyString=function(i){return i.length==0},goog.string.isEmpty=goog.string.isEmptyOrWhitespace,goog.string.isEmptyOrWhitespaceSafe=function(i){return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(i))},goog.string.isEmptySafe=goog.string.isEmptyOrWhitespaceSafe,goog.string.isBreakingWhitespace=function(i){return!/[^\t\n\r ]/.test(i)},goog.string.isAlpha=function(i){return!/[^a-zA-Z]/.test(i)},goog.string.isNumeric=function(i){return!/[^0-9]/.test(i)},goog.string.isAlphaNumeric=function(i){return!/[^a-zA-Z0-9]/.test(i)},goog.string.isSpace=function(i){return i==" "},goog.string.isUnicodeChar=function(i){return i.length==1&&" "<=i&&"~">=i||""<=i&&"�">=i},goog.string.stripNewlines=function(i){return i.replace(/(\r\n|\r|\n)+/g," ")},goog.string.canonicalizeNewlines=function(i){return i.replace(/(\r\n|\r|\n)/g,`
//# sourceMappingURL=index-ab1b5340.js.map