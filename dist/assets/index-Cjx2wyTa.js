(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="187",Si={ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hc=0,$a=1,uc=2,Rs=1,dc=2,zi=3,ti=0,zt=1,An=2,Mi=0,Hi=1,Za=2,Ja=3,Qa=4,fc=5,gi=100,pc=101,mc=102,_c=103,gc=104,xc=200,vc=201,Sc=202,Mc=203,nl=204,il=205,Ec=206,yc=207,Tc=208,bc=209,Ac=210,Rc=211,wc=212,Cc=213,Pc=214,Cr=0,Pr=1,Dr=2,Wi=3,Lr=4,Ir=5,Nr=6,Ur=7,sl=0,Dc=1,Lc=2,wn=0,rl=1,al=2,ol=3,ll=4,cl=5,hl=6,ul=7,dl=300,yi=301,Xi=302,js=303,er=304,Fr=1e3,Rn=1001,Or=1002,yt=1003,Ic=1004,ns=1005,Bt=1006,tr=1007,Gn=1008,Xt=1009,fl=1010,pl=1011,qi=1012,Sa=1013,mn=1014,un=1015,_n=1016,Ma=1017,Ea=1018,Ti=1020,ml=35902,_l=35899,gl=1021,xl=1022,dn=1023,kn=1026,Hn=1027,vl=1028,ya=1029,ni=1030,Ta=1031,ba=1033,ws=33776,Cs=33777,Ps=33778,Ds=33779,Br=35840,zr=35841,Gr=35842,Hr=35843,kr=36196,Vr=37492,Wr=37496,Xr=37488,qr=37489,Fs=37490,Yr=37491,Kr=37808,$r=37809,Zr=37810,Jr=37811,Qr=37812,jr=37813,ea=37814,ta=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,la=36492,ca=36494,ha=36495,ua=36283,da=36284,Os=36285,fa=36286,Nc=3200,pa=0,Uc=1,zn="",kt="srgb",Bs="srgb-linear",zs="linear",Ze="srgb",nr=7680,Fc=519,Oc=512,Bc=513,zc=514,Sl=515,Gc=516,Hc=517,Ml=518,El=519,kc=35044,ja="300 es",sn=2e3,Yi=2001;function Vc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wc(){const i=Gs("canvas");return i.style.display="block",i}const eo={};function to(...i){const e="THREE."+i.shift();console.log(e,...i)}function yl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=yl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=yl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ls(...i){const e=i.join(" ");e in eo||(eo[e]=!0,we(...i))}function Xc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qc={[Cr]:Cr,[Dr]:Nr,[Lr]:Lr,[Wi]:Ir,[Pr]:Pr,[Nr]:Dr,[Ur]:Ur,[Ir]:Wi};class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Is=Math.PI/180,ma=180/Math.PI;function Zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function Yc(i,e){return(i%e+e)%e}function ir(i,e,t){return(1-t)*i+t*e}function Kc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Aa(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $c(i,e){if(e.constructor===Float32Array)return i;const t=Aa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Zc(i,e){if(e.constructor===Float32Array)return i;const t=Aa(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Jc={DEG2RAD:Is},Na=class Na{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Na.prototype.isVector2=!0;let Ce=Na;class Vn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],_=n[s+3],d=r[a+0],p=r[a+1],v=r[a+2],M=r[a+3];if(_!==M||c!==d||l!==p||u!==v){let f=c*d+l*p+u*v+_*M;f<0&&(d=-d,p=-p,v=-v,M=-M,f=-f);let h=1-o;if(f<.9995){const E=Math.acos(f),w=Math.sin(E);h=Math.sin(h*E)/w,o=Math.sin(o*E)/w,c=c*h+d*o,l=l*h+p*o,u=u*h+v*o,_=_*h+M*o}else{c=c*h+d*o,l=l*h+p*o,u=u*h+v*o,_=_*h+M*o;const E=1/Math.sqrt(c*c+l*l+u*u+_*_);c*=E,l*=E,u*=E,_*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],_=r[a],d=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*_+c*p-l*d,e[t+1]=c*v+u*d+l*_-o*p,e[t+2]=l*v+u*p+o*d-c*_,e[t+3]=u*v-o*_-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),_=o(r/2),d=c(n/2),p=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*u*_+l*p*v,this._y=l*p*_-d*u*v,this._z=l*u*v+d*p*_,this._w=l*u*_-d*p*v;break;case"YXZ":this._x=d*u*_+l*p*v,this._y=l*p*_-d*u*v,this._z=l*u*v-d*p*_,this._w=l*u*_+d*p*v;break;case"ZXY":this._x=d*u*_-l*p*v,this._y=l*p*_+d*u*v,this._z=l*u*v+d*p*_,this._w=l*u*_-d*p*v;break;case"ZYX":this._x=d*u*_-l*p*v,this._y=l*p*_+d*u*v,this._z=l*u*v-d*p*_,this._w=l*u*_+d*p*v;break;case"YZX":this._x=d*u*_+l*p*v,this._y=l*p*_+d*u*v,this._z=l*u*v-d*p*_,this._w=l*u*_-d*p*v;break;case"XZY":this._x=d*u*_-l*p*v,this._y=l*p*_-d*u*v,this._z=l*u*v+d*p*_,this._w=l*u*_+d*p*v;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],_=t[10],d=n+o+_;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>_){const p=2*Math.sqrt(1+n-o-_);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>_){const p=2*Math.sqrt(1+o-n-_);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+_-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ua=class Ua{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(no.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(no.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),_=2*(r*n-a*t);return this.x=t+c*l+a*_-o*u,this.y=n+c*u+o*l-r*_,this.z=s+c*_+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ua.prototype.isVector3=!0;let U=Ua;const sr=new U,no=new Vn,Fa=class Fa{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],_=n[7],d=n[2],p=n[5],v=n[8],M=s[0],f=s[3],h=s[6],E=s[1],w=s[4],T=s[7],A=s[2],b=s[5],m=s[8];return r[0]=a*M+o*E+c*A,r[3]=a*f+o*w+c*b,r[6]=a*h+o*T+c*m,r[1]=l*M+u*E+_*A,r[4]=l*f+u*w+_*b,r[7]=l*h+u*T+_*m,r[2]=d*M+p*E+v*A,r[5]=d*f+p*w+v*b,r[8]=d*h+p*T+v*m,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],_=u*a-o*l,d=o*c-u*r,p=l*r-a*c,v=t*_+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=_*M,e[1]=(s*l-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=d*M,e[4]=(u*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rr.makeScale(e,t)),this}rotate(e){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fa.prototype.isMatrix3=!0;let De=Fa;const rr=new De,io=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),so=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qc(){const i={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bs]:{primaries:e,whitePoint:n,transfer:zs,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const Ve=Qc();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class jc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=Gs("canvas")),ri.width=e.width,ri.height=e.height;const s=ri.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eh=0;class Ra{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ar(s[a].image)):r.push(ar(s[a]))}else r=ar(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let th=0;const or=new U;class It extends Xn{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Rn,s=Rn,r=Bt,a=Gn,o=dn,c=Xt,l=It.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Zi(),this.name="",this.source=new Ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(or).x}get height(){return this.source.getSize(or).y}get depth(){return this.source.getSize(or).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=dl;It.DEFAULT_ANISOTROPY=1;const Oa=class Oa{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],_=c[8],d=c[1],p=c[5],v=c[9],M=c[2],f=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(_-M)<.01&&Math.abs(v-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(_+M)<.1&&Math.abs(v+f)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,T=(p+1)/2,A=(h+1)/2,b=(u+d)/4,m=(_+M)/4,S=(v+f)/4;return w>T&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=m/n):T>A?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=b/s,r=S/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=m/r,s=S/r),this.set(n,s,r,t),this}let E=Math.sqrt((f-v)*(f-v)+(_-M)*(_-M)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(f-v)/E,this.y=(_-M)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oa.prototype.isVector4=!0;let rt=Oa;class nh extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new It({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ra(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Tl extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ih extends It{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xs=class Xs{constructor(e,t,n,s,r,a,o,c,l,u,_,d,p,v,M,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,_,d,p,v,M,f)}set(e,t,n,s,r,a,o,c,l,u,_,d,p,v,M,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=_,h[14]=d,h[3]=p,h[7]=v,h[11]=M,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),_=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*_,v=o*u,M=o*_;t[0]=c*u,t[4]=-c*_,t[8]=l,t[1]=p+v*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=v+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*_,v=l*u,M=l*_;t[0]=d+M*o,t[4]=v*o-p,t[8]=a*l,t[1]=a*_,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=M+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*_,v=l*u,M=l*_;t[0]=d-M*o,t[4]=-a*_,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*_,v=o*u,M=o*_;t[0]=c*u,t[4]=v*l-p,t[8]=d*l+M,t[1]=c*_,t[5]=M*l+d,t[9]=p*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,v=o*c,M=o*l;t[0]=c*u,t[4]=M-d*_,t[8]=v*_+p,t[1]=_,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*_+v,t[10]=d-M*_}else if(e.order==="XZY"){const d=a*c,p=a*l,v=o*c,M=o*l;t[0]=c*u,t[4]=-_,t[8]=l*u,t[1]=d*_+M,t[5]=a*u,t[9]=p*_-v,t[2]=v*_-p,t[6]=o*u,t[10]=M*_+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sh,e,rh)}lookAt(e,t,n){const s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Nn.crossVectors(n,Gt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Nn.crossVectors(n,Gt)),Nn.normalize(),is.crossVectors(Gt,Nn),s[0]=Nn.x,s[4]=is.x,s[8]=Gt.x,s[1]=Nn.y,s[5]=is.y,s[9]=Gt.y,s[2]=Nn.z,s[6]=is.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],_=n[5],d=n[9],p=n[13],v=n[2],M=n[6],f=n[10],h=n[14],E=n[3],w=n[7],T=n[11],A=n[15],b=s[0],m=s[4],S=s[8],N=s[12],D=s[1],I=s[5],O=s[9],V=s[13],P=s[2],k=s[6],Z=s[10],G=s[14],te=s[3],X=s[7],Q=s[11],j=s[15];return r[0]=a*b+o*D+c*P+l*te,r[4]=a*m+o*I+c*k+l*X,r[8]=a*S+o*O+c*Z+l*Q,r[12]=a*N+o*V+c*G+l*j,r[1]=u*b+_*D+d*P+p*te,r[5]=u*m+_*I+d*k+p*X,r[9]=u*S+_*O+d*Z+p*Q,r[13]=u*N+_*V+d*G+p*j,r[2]=v*b+M*D+f*P+h*te,r[6]=v*m+M*I+f*k+h*X,r[10]=v*S+M*O+f*Z+h*Q,r[14]=v*N+M*V+f*G+h*j,r[3]=E*b+w*D+T*P+A*te,r[7]=E*m+w*I+T*k+A*X,r[11]=E*S+w*O+T*Z+A*Q,r[15]=E*N+w*V+T*G+A*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],_=e[6],d=e[10],p=e[14],v=e[3],M=e[7],f=e[11],h=e[15],E=c*p-l*d,w=o*p-l*_,T=o*d-c*_,A=a*p-l*u,b=a*d-c*u,m=a*_-o*u;return t*(M*E-f*w+h*T)-n*(v*E-f*A+h*b)+s*(v*w-M*A+h*m)-r*(v*T-M*b+f*m)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],_=e[9],d=e[10],p=e[11],v=e[12],M=e[13],f=e[14],h=e[15],E=t*o-n*a,w=t*c-s*a,T=t*l-r*a,A=n*c-s*o,b=n*l-r*o,m=s*l-r*c,S=u*M-_*v,N=u*f-d*v,D=u*h-p*v,I=_*f-d*M,O=_*h-p*M,V=d*h-p*f,P=E*V-w*O+T*I+A*D-b*N+m*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/P;return e[0]=(o*V-c*O+l*I)*k,e[1]=(s*O-n*V-r*I)*k,e[2]=(M*m-f*b+h*A)*k,e[3]=(d*b-_*m-p*A)*k,e[4]=(c*D-a*V-l*N)*k,e[5]=(t*V-s*D+r*N)*k,e[6]=(f*T-v*m-h*w)*k,e[7]=(u*m-d*T+p*w)*k,e[8]=(a*O-o*D+l*S)*k,e[9]=(n*D-t*O-r*S)*k,e[10]=(v*b-M*T+h*E)*k,e[11]=(_*T-u*b-p*E)*k,e[12]=(o*N-a*I-c*S)*k,e[13]=(t*I-n*N+s*S)*k,e[14]=(M*w-v*A-f*E)*k,e[15]=(u*A-_*w+d*E)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,_=o+o,d=r*l,p=r*u,v=r*_,M=a*u,f=a*_,h=o*_,E=c*l,w=c*u,T=c*_,A=n.x,b=n.y,m=n.z;return s[0]=(1-(M+h))*A,s[1]=(p+T)*A,s[2]=(v-w)*A,s[3]=0,s[4]=(p-T)*b,s[5]=(1-(d+h))*b,s[6]=(f+E)*b,s[7]=0,s[8]=(v+w)*m,s[9]=(f-E)*m,s[10]=(1-(d+M))*m,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ai.set(s[0],s[1],s[2]).length();const o=ai.set(s[4],s[5],s[6]).length(),c=ai.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qt.copy(this);const l=1/a,u=1/o,_=1/c;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=_,Qt.elements[9]*=_,Qt.elements[10]*=_,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=sn,c=!1){const l=this.elements,u=2*r/(t-e),_=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let v,M;if(c)v=r/(a-r),M=a*r/(a-r);else if(o===sn)v=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Yi)v=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=_,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=sn,c=!1){const l=this.elements,u=2/(t-e),_=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let v,M;if(c)v=1/(a-r),M=a/(a-r);else if(o===sn)v=-2/(a-r),M=-(a+r)/(a-r);else if(o===Yi)v=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=_,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xs.prototype.isMatrix4=!0;let nt=Xs;const ai=new U,Qt=new nt,sh=new U(0,0,0),rh=new U(1,1,1),Nn=new U,is=new U,Gt=new U,ro=new nt,ao=new Vn;class Wn{constructor(e=0,t=0,n=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],_=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-_,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-_,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-_,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ao.setFromEuler(this),this.setFromQuaternion(ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ah=0;const oo=new U,oi=new Vn,xn=new nt,ss=new U,Li=new U,oh=new U,lh=new Vn,lo=new U(1,0,0),co=new U(0,1,0),ho=new U(0,0,1),uo={type:"added"},ch={type:"removed"},li={type:"childadded",child:null},lr={type:"childremoved",child:null};class Tt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new U,t=new Wn,n=new Vn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new De}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(lo,e)}rotateY(e){return this.rotateOnAxis(co,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lo,e)}translateY(e){return this.translateOnAxis(co,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Li,ss,this.up):xn.lookAt(ss,Li,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(xn),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uo),li.child=e,this.dispatchEvent(li),li.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch),lr.child=e,this.dispatchEvent(lr),lr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uo),li.child=e,this.dispatchEvent(li),li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const _=c[l];r(e.shapes,_)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),_=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),_.length>0&&(n.shapes=_),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tt.DEFAULT_UP=new U(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hh={type:"move"};class cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const f=t.getJointPose(M,n),h=this._getHandJoint(l,M);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=l.joints["index-finger-tip"],_=l.joints["thumb-tip"],d=u.position.distanceTo(_.position),p=.02,v=.005;l.inputState.pinching&&d>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},rs={h:0,s:0,l:0};function hr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ve.workingColorSpace){if(e=Yc(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hr(a,r,e+1/3),this.g=hr(a,r,e),this.b=hr(a,r,e-1/3)}return Ve.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Al[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ve.workingToColorSpace(wt.copy(this),e),Math.round(ze(wt.r*255,0,255))*65536+Math.round(ze(wt.g*255,0,255))*256+Math.round(ze(wt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(wt.copy(this),t);const n=wt.r,s=wt.g,r=wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const _=a-o;switch(l=u<=.5?_/(a+o):_/(2-a-o),a){case n:c=(s-r)/_+(s<r?6:0);break;case s:c=(r-n)/_+2;break;case r:c=(n-s)/_+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=kt){Ve.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,s=wt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(rs);const n=ir(Un.h,rs.h,t),s=ir(Un.s,rs.s,t),r=ir(Un.l,rs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new Be;Be.NAMES=Al;class wa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uh extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const jt=new U,vn=new U,ur=new U,Sn=new U,ci=new U,hi=new U,fo=new U,dr=new U,fr=new U,pr=new U,mr=new rt,_r=new rt,gr=new rt;class nn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),vn.subVectors(n,t),ur.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(vn),c=jt.dot(ur),l=vn.dot(vn),u=vn.dot(ur),_=a*l-o*o;if(_===0)return r.set(0,0,0),null;const d=1/_,p=(l*c-o*u)*d,v=(a*u-o*c)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(a,Sn.y),c.addScaledVector(o,Sn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return mr.setScalar(0),_r.setScalar(0),gr.setScalar(0),mr.fromBufferAttribute(e,t),_r.fromBufferAttribute(e,n),gr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mr,r.x),a.addScaledVector(_r,r.y),a.addScaledVector(gr,r.z),a}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),vn.subVectors(e,t),jt.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),jt.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ci.subVectors(s,n),hi.subVectors(r,n),dr.subVectors(e,n);const c=ci.dot(dr),l=hi.dot(dr);if(c<=0&&l<=0)return t.copy(n);fr.subVectors(e,s);const u=ci.dot(fr),_=hi.dot(fr);if(u>=0&&_<=u)return t.copy(s);const d=c*_-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(ci,a);pr.subVectors(e,r);const p=ci.dot(pr),v=hi.dot(pr);if(v>=0&&p<=v)return t.copy(r);const M=p*l-c*v;if(M<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(hi,o);const f=u*v-p*_;if(f<=0&&_-u>=0&&p-v>=0)return fo.subVectors(r,s),o=(_-u)/(_-u+(p-v)),t.copy(s).addScaledVector(fo,o);const h=1/(f+M+d);return a=M*h,o=d*h,t.copy(n).addScaledVector(ci,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ji{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),os.subVectors(this.max,Ii),ui.subVectors(e.a,Ii),di.subVectors(e.b,Ii),fi.subVectors(e.c,Ii),Fn.subVectors(di,ui),On.subVectors(fi,di),$n.subVectors(ui,fi);let t=[0,-Fn.z,Fn.y,0,-On.z,On.y,0,-$n.z,$n.y,Fn.z,0,-Fn.x,On.z,0,-On.x,$n.z,0,-$n.x,-Fn.y,Fn.x,0,-On.y,On.x,0,-$n.y,$n.x,0];return!xr(t,ui,di,fi,os)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,ui,di,fi,os))?!1:(ls.crossVectors(Fn,On),t=[ls.x,ls.y,ls.z],xr(t,ui,di,fi,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new U,new U,new U,new U,new U,new U,new U,new U],en=new U,as=new Ji,ui=new U,di=new U,fi=new U,Fn=new U,On=new U,$n=new U,Ii=new U,os=new U,ls=new U,Zn=new U;function xr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zn.fromArray(i,r);const o=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=e.dot(Zn),l=t.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const lt=new U,cs=new Ce;let dh=0;class ei extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=e!==void 0?Aa(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$c(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Zc(e,this.array)}}class Rl extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wl extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}const fh=new Ji,Ni=new U,vr=new U;class qs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ni,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(vr)),this.expandByPoint(Ni.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ph=0;const Zt=new nt,Sr=new Tt,pi=new U,Ht=new Ji,Ui=new Ji,vt=new U;class an extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?wl:Rl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Ht.min,Ui.min),Ht.expandByPoint(vt),vt.addVectors(Ht.max,Ui.max),Ht.expandByPoint(vt)):(Ht.expandByPoint(Ui.min),Ht.expandByPoint(Ui.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)vt.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(e,l),vt.add(pi)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ei(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new U,c[N]=new U;const u=new U,_=new U,d=new U,p=new Ce,v=new Ce,M=new Ce,f=new U,h=new U;function E(N,D,I){l[N]=l[D]=l[I]=1,u.fromBufferAttribute(n,N),_.fromBufferAttribute(n,D),d.fromBufferAttribute(n,I),p.fromBufferAttribute(r,N),v.fromBufferAttribute(r,D),M.fromBufferAttribute(r,I),_.sub(u),d.sub(u),v.sub(p),M.sub(p);const O=1/(v.x*M.y-M.x*v.y);isFinite(O)&&(f.copy(_).multiplyScalar(M.y).addScaledVector(d,-v.y).multiplyScalar(O),h.copy(d).multiplyScalar(v.x).addScaledVector(_,-M.x).multiplyScalar(O),o[N].add(f),o[D].add(f),o[I].add(f),c[N].add(h),c[D].add(h),c[I].add(h))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,D=w.length;N<D;++N){const I=w[N],O=I.start,V=I.count;for(let P=O,k=O+V;P<k;P+=3)E(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const T=new U,A=new U,b=new U,m=new U;function S(N){b.fromBufferAttribute(s,N),m.copy(b);const D=o[N];T.copy(D),T.sub(b.multiplyScalar(b.dot(D))).normalize(),A.crossVectors(m,D);const O=A.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,O)}for(let N=0,D=n.count;N<D;++N)l[N]&&S(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,_=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),M=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,f),u.subVectors(a,r),_.subVectors(s,r),u.cross(_),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,f),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),_.subVectors(s,r),u.cross(_),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,_=o.normalized,d=new l.constructor(c.length*u);let p=0,v=0;for(let M=0,f=c.length;M<f;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*u;for(let h=0;h<u;h++)d[v++]=l[p++]}return new ei(d,u,_)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,_=l.length;u<_;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let _=0,d=l.length;_<d;_++){const p=l[_];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],_=r[l];for(let d=0,p=_.length;d<p;d++)u.push(_[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const _=a[l];this.addGroup(_.start,_.count,_.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mr=new U,mh=new U,_h=new De;class yn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Mr.subVectors(n,t).cross(mh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Mr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_h.getNormalMatrix(e),s=this.coplanarPoint(Mr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let gh=0;class Ci extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Hi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const En=new U,Er=new U,hs=new U,us=new U;class Ca{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Er.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Er);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hs),o=us.dot(this.direction),c=-us.dot(hs),l=us.lengthSq(),u=Math.abs(1-a*a);let _,d,p,v;if(u>0)if(_=a*c-o,d=a*o-c,v=r*u,_>=0)if(d>=-v)if(d<=v){const M=1/u;_*=M,d*=M,p=_*(_+a*d+2*o)+d*(a*_+d+2*c)+l}else d=r,_=Math.max(0,-(a*d+o)),p=-_*_+d*(d+2*c)+l;else d=-r,_=Math.max(0,-(a*d+o)),p=-_*_+d*(d+2*c)+l;else d<=-v?(_=Math.max(0,-(-a*r+o)),d=_>0?-r:Math.min(Math.max(-r,-c),r),p=-_*_+d*(d+2*c)+l):d<=v?(_=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(_=Math.max(0,-(a*r+o)),d=_>0?r:Math.min(Math.max(-r,-c),r),p=-_*_+d*(d+2*c)+l);else d=a>0?-r:r,_=Math.max(0,-(a*d+o)),p=-_*_+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Er).addScaledVector(hs,d),p}intersectSphere(e,t){if(e.radius<0)return null;En.subVectors(e.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,_=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),_>=0?(o=(e.min.z-d.z)*_,c=(e.max.z-d.z)*_):(o=(e.max.z-d.z)*_,c=(e.min.z-d.z)*_),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,_=e.x-a.x,d=e.y-a.y,p=e.z-a.z,v=t.x-a.x,M=t.y-a.y,f=t.z-a.z,h=n.x-a.x,E=n.y-a.y,w=n.z-a.z,T=Math.abs(c),A=Math.abs(l),b=Math.abs(u);let m,S,N,D,I,O,V,P,k,Z,G,te;if(T>=A&&T>=b?(N=c,O=_,k=v,te=h,c>=0?(m=l,S=u,D=d,I=p,V=M,P=f,Z=E,G=w):(m=u,S=l,D=p,I=d,V=f,P=M,Z=w,G=E)):A>=b?(N=l,O=d,k=M,te=E,l>=0?(m=u,S=c,D=p,I=_,V=f,P=v,Z=w,G=h):(m=c,S=u,D=_,I=p,V=v,P=f,Z=h,G=w)):(N=u,O=p,k=f,te=w,u>=0?(m=c,S=l,D=_,I=d,V=v,P=M,Z=h,G=E):(m=l,S=c,D=d,I=_,V=M,P=v,Z=E,G=h)),N===0)return null;const X=m/N,Q=S/N,j=1/N,Me=D-X*O,Le=I-Q*O,K=V-X*k,pe=P-Q*k,xe=Z-X*te,be=G-Q*te,me=xe*pe-be*K,Ne=Me*be-Le*xe,at=K*Le-pe*Me;if(s){if(me<0||Ne<0||at<0)return null}else if((me<0||Ne<0||at<0)&&(me>0||Ne>0||at>0))return null;const Re=me+Ne+at;if(Re===0)return null;const Ke=j*(me*O+Ne*k+at*te);return(Re>0?Ke<0:Ke>0)?null:this.at(Ke/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xh extends Ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const po=new nt,Jn=new Ca,ds=new qs,mo=new U,fs=new U,ps=new U,ms=new U,yr=new U,_s=new U,_o=new U,gs=new U;class ft extends Tt{constructor(e=new an,t=new xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){_s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],_=r[c];u!==0&&(yr.fromBufferAttribute(_,e),a?_s.addScaledVector(yr,u):_s.addScaledVector(yr.sub(t),u))}t.add(_s)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),Jn.copy(e.ray).recast(e.near),!(ds.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(ds,mo)===null||Jn.origin.distanceToSquared(mo)>(e.far-e.near)**2))&&(po.copy(r).invert(),Jn.copy(e.ray).applyMatrix4(po),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,_=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const f=d[v],h=a[f.materialIndex],E=Math.max(f.start,p.start),w=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let T=E,A=w;T<A;T+=3){const b=o.getX(T),m=o.getX(T+1),S=o.getX(T+2);s=xs(this,h,e,n,l,u,_,b,m,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let f=v,h=M;f<h;f+=3){const E=o.getX(f),w=o.getX(f+1),T=o.getX(f+2);s=xs(this,a,e,n,l,u,_,E,w,T),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const f=d[v],h=a[f.materialIndex],E=Math.max(f.start,p.start),w=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let T=E,A=w;T<A;T+=3){const b=T,m=T+1,S=T+2;s=xs(this,h,e,n,l,u,_,b,m,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let f=v,h=M;f<h;f+=3){const E=f,w=f+1,T=f+2;s=xs(this,a,e,n,l,u,_,E,w,T),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function vh(i,e,t,n,s,r,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ti,o),c===null)return null;gs.copy(o),gs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(gs);return l<t.near||l>t.far?null:{distance:l,point:gs.clone(),object:i}}function xs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,fs),i.getVertexPosition(c,ps),i.getVertexPosition(l,ms);const u=vh(i,e,t,n,fs,ps,ms,_o);if(u){const _=new U;nn.getBarycoord(_o,fs,ps,ms,_),s&&(u.uv=nn.getInterpolatedAttribute(s,o,c,l,_,new Ce)),r&&(u.uv1=nn.getInterpolatedAttribute(r,o,c,l,_,new Ce)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,c,l,_,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};nn.getNormal(fs,ps,ms,d.normal),u.face=d,u.barycoord=_}return u}class Sh extends It{constructor(e=null,t=1,n=1,s,r,a,o,c,l=yt,u=yt,_,d){super(null,a,o,c,l,u,s,r,_,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qn=new qs,Mh=new Ce(.5,.5),vs=new U;class Ki{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],_=r[5],d=r[6],p=r[7],v=r[8],M=r[9],f=r[10],h=r[11],E=r[12],w=r[13],T=r[14],A=r[15];if(s[0].setComponents(l-a,p-u,h-v,A-E).normalize(),s[1].setComponents(l+a,p+u,h+v,A+E).normalize(),s[2].setComponents(l+o,p+_,h+M,A+w).normalize(),s[3].setComponents(l-o,p-_,h-M,A-w).normalize(),n)s[4].setComponents(c,d,f,T).normalize(),s[5].setComponents(l-c,p-d,h-f,A-T).normalize();else if(s[4].setComponents(l-c,p-d,h-f,A-T).normalize(),t===sn)s[5].setComponents(l+c,p+d,h+f,A+T).normalize();else if(t===Yi)s[5].setComponents(c,d,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Mh.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(vs.x=s.normal.x>0?e.max.x:e.min.x,vs.y=s.normal.y>0?e.max.y:e.min.y,vs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const go=new nt;class Pa{constructor(){this.coordinateSystem=sn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];go.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ki),n[s].setFromProjectionMatrix(go,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ki),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Pa().copy(this)}}class Cl extends Ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hs=new U,ks=new U,xo=new nt,Fi=new Ca,Ss=new qs,Tr=new U,vo=new U;class Eh extends Tt{constructor(e=new an,t=new Cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Hs.fromBufferAttribute(t,s-1),ks.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Hs.distanceTo(ks);e.setAttribute("lineDistance",new dt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),Ss.radius+=r,e.ray.intersectsSphere(Ss)===!1)return;xo.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(xo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let M=p,f=v-1;M<f;M+=l){const h=u.getX(M),E=u.getX(M+1),w=Ms(this,e,Fi,c,h,E,M);w&&t.push(w)}if(this.isLineLoop){const M=u.getX(v-1),f=u.getX(p),h=Ms(this,e,Fi,c,M,f,v-1);h&&t.push(h)}}else{const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let M=p,f=v-1;M<f;M+=l){const h=Ms(this,e,Fi,c,M,M+1,M);h&&t.push(h)}if(this.isLineLoop){const M=Ms(this,e,Fi,c,v-1,p,v-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ms(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Hs.fromBufferAttribute(o,s),ks.fromBufferAttribute(o,r),t.distanceSqToSegment(Hs,ks,Tr,vo)>n)return;Tr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Tr);if(!(l<e.near||l>e.far))return{distance:l,point:vo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const So=new U,Mo=new U;class yh extends Eh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)So.fromBufferAttribute(t,s),Mo.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+So.distanceTo(Mo);e.setAttribute("lineDistance",new dt(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pl extends It{constructor(e=[],t=yi,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bi extends It{constructor(e,t,n=mn,s,r,a,o=yt,c=yt,l,u=kn,_=1){if(u!==kn&&u!==Hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:_};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Dl extends bi{constructor(e,t=mn,n=yi,s,r,a=yt,o=yt,c,l=kn){const u={width:e,height:e,depth:1},_=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ll extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ii extends an{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],_=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(_,2));function v(M,f,h,E,w,T,A,b,m,S,N){const D=T/m,I=A/S,O=T/2,V=A/2,P=b/2,k=m+1,Z=S+1;let G=0,te=0;const X=new U;for(let Q=0;Q<Z;Q++){const j=Q*I-V;for(let Me=0;Me<k;Me++){const Le=Me*D-O;X[M]=Le*E,X[f]=j*w,X[h]=P,l.push(X.x,X.y,X.z),X[M]=0,X[f]=0,X[h]=b>0?1:-1,u.push(X.x,X.y,X.z),_.push(Me/m),_.push(1-Q/S),G+=1}}for(let Q=0;Q<S;Q++)for(let j=0;j<m;j++){const Me=d+j+k*Q,Le=d+j+k*(Q+1),K=d+(j+1)+k*(Q+1),pe=d+(j+1)+k*Q;c.push(Me,Le,pe),c.push(Le,K,pe),te+=6}o.addGroup(p,te,N),p+=te,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pn extends an{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],_=[],d=[],p=[];let v=0;const M=[],f=n/2;let h=0;E(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(p,2));function E(){const T=new U,A=new U;let b=0;const m=(t-e)/n;for(let S=0;S<=r;S++){const N=[],D=S/r,I=D*(t-e)+e;for(let O=0;O<=s;O++){const V=O/s,P=V*c+o,k=Math.sin(P),Z=Math.cos(P);A.x=I*k,A.y=-D*n+f,A.z=I*Z,_.push(A.x,A.y,A.z),T.set(k,m,Z).normalize(),d.push(T.x,T.y,T.z),p.push(V,1-D),N.push(v++)}M.push(N)}for(let S=0;S<s;S++)for(let N=0;N<r;N++){const D=M[N][S],I=M[N+1][S],O=M[N+1][S+1],V=M[N][S+1];(e>0||N!==0)&&(u.push(D,I,V),b+=3),(t>0||N!==r-1)&&(u.push(I,O,V),b+=3)}l.addGroup(h,b,0),h+=b}function w(T){const A=v,b=new Ce,m=new U;let S=0;const N=T===!0?e:t,D=T===!0?1:-1;for(let O=1;O<=s;O++)_.push(0,f*D,0),d.push(0,D,0),p.push(.5,.5),v++;const I=v;for(let O=0;O<=s;O++){const P=O/s*c+o,k=Math.cos(P),Z=Math.sin(P);m.x=N*Z,m.y=f*D,m.z=N*k,_.push(m.x,m.y,m.z),d.push(0,D,0),b.x=k*.5+.5,b.y=Z*.5*D+.5,p.push(b.x,b.y),v++}for(let O=0;O<s;O++){const V=A+O,P=I+O;T===!0?u.push(P,P+1,V):u.push(P+1,P,V),S+=3}l.addGroup(h,S,T===!0?1:2),h+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ys extends an{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,_=e/o,d=t/c,p=[],v=[],M=[],f=[];for(let h=0;h<u;h++){const E=h*d-a;for(let w=0;w<l;w++){const T=w*_-r;v.push(T,-E,0),M.push(0,0,1),f.push(w/o),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<o;E++){const w=E+l*h,T=E+l*(h+1),A=E+1+l*(h+1),b=E+1+l*h;p.push(w,T,b),p.push(T,A,b)}this.setIndex(p),this.setAttribute("position",new dt(v,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class $i extends an{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],_=new U,d=new U,p=[],v=[],M=[],f=[];for(let h=0;h<=n;h++){const E=[],w=h/n,T=a+w*o,A=e*Math.cos(T),b=Math.sqrt(e*e-A*A);let m=0;h===0&&a===0?m=.5/t:h===n&&c===Math.PI&&(m=-.5/t);for(let S=0;S<=t;S++){const N=S/t,D=s+N*r;_.x=-b*Math.cos(D),_.y=A,_.z=b*Math.sin(D),v.push(_.x,_.y,_.z),d.copy(_).normalize(),M.push(d.x,d.y,d.z),f.push(N+m,1-w),E.push(l++)}u.push(E)}for(let h=0;h<n;h++)for(let E=0;E<t;E++){const w=u[h][E+1],T=u[h][E],A=u[h+1][E],b=u[h+1][E+1];(h!==0||a>0)&&p.push(w,T,b),(h!==n-1||c<Math.PI)&&p.push(T,A,b)}this.setIndex(p),this.setAttribute("position",new dt(v,3)),this.setAttribute("normal",new dt(M,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Eo(s))s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Eo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=Ai(i[t]);for(const s in n)e[s]=n[s]}return e}function Eo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Th(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const bh={clone:Ai,merge:Pt};var Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=Rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=Th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wh extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ch extends Ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ph extends Ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dh extends Ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nl extends Tt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const br=new nt,yo=new U,To=new U;class Lh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Xt,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(yo),To.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(To),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(br,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Yi||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Es=new U,ys=new Vn,ln=new U;class Ul extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Es,ys,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,ys,ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Es,ys,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Es,ys,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new U,bo=new Ce,Ao=new Ce;class tn extends Ul{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,bo,Ao),t.subVectors(Ao,bo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Is*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Fl extends Ul{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ih extends Lh{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ro extends Nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Nh extends Nl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const mi=-90,_i=1;class _a extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(mi,_i,e,t);s.layers=this.layers,this.add(s);const r=new tn(mi,_i,e,t);r.layers=this.layers,this.add(r);const a=new tn(mi,_i,e,t);a.layers=this.layers,this.add(a);const o=new tn(mi,_i,e,t);o.layers=this.layers,this.add(o);const c=new tn(mi,_i,e,t);c.layers=this.layers,this.add(c);const l=new tn(mi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,_=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(_,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Uh extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class wo{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fh extends yh{constructor(e=10,t=10,n=4473924,s=8947848){n=new Be(n),s=new Be(s);const r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,p=0,v=-o;d<=t;d++,v+=a){c.push(-o,0,v,o,0,v),c.push(v,0,-o,v,0,o);const M=d===r?n:s;M.toArray(l,p),p+=3,M.toArray(l,p),p+=3,M.toArray(l,p),p+=3,M.toArray(l,p),p+=3}const u=new an;u.setAttribute("position",new dt(c,3)),u.setAttribute("color",new dt(l,3));const _=new Cl({vertexColors:!0,toneMapped:!1});super(u,_),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Oh extends Xn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Co(i,e,t,n){const s=Bh(n);switch(t){case gl:return i*e;case vl:return i*e/s.components*s.byteLength;case ya:return i*e/s.components*s.byteLength;case ni:return i*e*2/s.components*s.byteLength;case Ta:return i*e*2/s.components*s.byteLength;case xl:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case ba:return i*e*4/s.components*s.byteLength;case ws:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zr:case Hr:return Math.max(i,16)*Math.max(e,8)/4;case Br:case Gr:return Math.max(i,8)*Math.max(e,8)/2;case kr:case Vr:case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Fs:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $r:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case la:case ca:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ua:case da:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Os:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bh(i){switch(i){case Xt:case fl:return{byteLength:1,components:1};case qi:case pl:case _n:return{byteLength:2,components:1};case Ma:case Ea:return{byteLength:2,components:4};case mn:case Sa:case un:return{byteLength:4,components:1};case ml:case _l:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ol(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zh(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,_=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:_}}function n(o,c,l){const u=c.array,_=c.updateRanges;if(i.bindBuffer(l,o),_.length===0)i.bufferSubData(l,0,u);else{_.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<_.length;p++){const v=_[d],M=_[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,_[d]=M)}_.length=d+1;for(let p=0,v=_.length;p<v;p++){const M=_[p];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jh=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ru=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",_u=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Au=`#ifdef USE_GRADIENTMAP
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
}`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Du=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Lu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ou=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hu=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$u=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ju=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ju=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ld=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Td=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ad=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
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
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ld=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nd=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,qd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,nf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rf=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,of=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,cf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,uf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ff=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,mf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Gh,alphahash_pars_fragment:Hh,alphamap_fragment:kh,alphamap_pars_fragment:Vh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:Yh,batching_pars_vertex:Kh,batching_vertex:$h,begin_vertex:Zh,beginnormal_vertex:Jh,bsdfs:Qh,iridescence_fragment:jh,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:iu,clipping_planes_vertex:su,color_fragment:ru,color_pars_fragment:au,color_pars_vertex:ou,color_vertex:lu,common:cu,defaultnormal_vertex:hu,displacementmap_pars_vertex:uu,displacementmap_vertex:du,emissivemap_fragment:fu,emissivemap_pars_fragment:pu,colorspace_fragment:mu,colorspace_pars_fragment:_u,envmap_fragment:gu,envmap_common_pars_fragment:xu,envmap_pars_fragment:vu,envmap_pars_vertex:Su,envmap_physical_pars_fragment:Du,envmap_vertex:Mu,fog_vertex:Eu,fog_pars_vertex:yu,fog_fragment:Tu,fog_pars_fragment:bu,gradientmap_pars_fragment:Au,lightmap_pars_fragment:Ru,lights_lambert_fragment:wu,lights_lambert_pars_fragment:Cu,lights_pars_begin:Pu,lights_toon_fragment:Lu,lights_toon_pars_fragment:Iu,lights_phong_fragment:Nu,lights_phong_pars_fragment:Uu,lights_physical_fragment:Fu,lights_physical_pars_fragment:Ou,lights_fragment_begin:Bu,lights_fragment_maps:zu,lights_fragment_end:Gu,lightprobes_pars_fragment:Hu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Xu,map_fragment:qu,map_pars_fragment:Yu,map_particle_fragment:Ku,map_particle_pars_fragment:$u,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:Ju,morphinstance_vertex:Qu,morphcolor_vertex:ju,morphnormal_vertex:ed,morphtarget_pars_vertex:td,morphtarget_vertex:nd,normal_fragment_begin:id,normal_fragment_maps:sd,normal_pars_fragment:rd,normal_pars_vertex:ad,normal_vertex:od,normalmap_pars_fragment:ld,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:ud,iridescence_pars_fragment:dd,opaque_fragment:fd,packing:pd,premultiplied_alpha_fragment:md,project_vertex:_d,dithering_fragment:gd,dithering_pars_fragment:xd,roughnessmap_fragment:vd,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:Md,shadowmap_pars_vertex:Ed,shadowmap_vertex:yd,shadowmask_pars_fragment:Td,skinbase_vertex:bd,skinning_pars_vertex:Ad,skinning_vertex:Rd,skinnormal_vertex:wd,specularmap_fragment:Cd,specularmap_pars_fragment:Pd,tonemapping_fragment:Dd,tonemapping_pars_fragment:Ld,transmission_fragment:Id,transmission_pars_fragment:Nd,uv_pars_fragment:Ud,uv_pars_vertex:Fd,uv_vertex:Od,worldpos_vertex:Bd,background_vert:zd,background_frag:Gd,backgroundCube_vert:Hd,backgroundCube_frag:kd,cube_vert:Vd,cube_frag:Wd,depth_vert:Xd,depth_frag:qd,distance_vert:Yd,distance_frag:Kd,equirect_vert:$d,equirect_frag:Zd,linedashed_vert:Jd,linedashed_frag:Qd,meshbasic_vert:jd,meshbasic_frag:ef,meshlambert_vert:tf,meshlambert_frag:nf,meshmatcap_vert:sf,meshmatcap_frag:rf,meshnormal_vert:af,meshnormal_frag:of,meshphong_vert:lf,meshphong_frag:cf,meshphysical_vert:hf,meshphysical_frag:uf,meshtoon_vert:df,meshtoon_frag:ff,points_vert:pf,points_frag:mf,shadow_vert:_f,shadow_frag:gf,sprite_vert:xf,sprite_frag:vf},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},hn={basic:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Pt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Pt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Pt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Pt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Pt([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Pt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Pt([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Pt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Pt([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Pt([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Pt([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};hn.physical={uniforms:Pt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ts={r:0,b:0,g:0},Sf=new nt,Bl=new De;Bl.set(-1,0,0,0,1,0,0,0,1);function Mf(i,e,t,n,s,r){const a=new Be(0);let o=s===!0?0:1,c,l,u=null,_=0,d=null;function p(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){const T=E.backgroundBlurriness>0;w=e.get(w,T)}return w}function v(E){let w=!1;const T=p(E);T===null?f(a,o):T&&T.isColor&&(f(T,1),w=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(E,w){const T=p(w);T&&T.isCubeTexture?(l===void 0&&(l=new ft(new ii(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Ai(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,b,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sf.makeRotationFromEuler(w.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bl),l.material.toneMapped=Ve.getTransfer(T.colorSpace)!==Ze,(u!==T||_!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,_=T.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ft(new Ys(2,2),new si({name:"BackgroundMaterial",uniforms:Ai(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(T.colorSpace)!==Ze,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||_!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,_=T.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,w){E.getRGB(Ts,Il(i)),t.buffers.color.setClear(Ts.r,Ts.g,Ts.b,w,r)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),o=w,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,f(a,o)},render:v,addToRenderList:M,dispose:h}}function Ef(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(I,O,V,P,k){let Z=!1;const G=_(I,P,V,O);r!==G&&(r=G,l(r.object)),Z=p(I,P,V,k),Z&&v(I,P,V,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(I,O,V,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function _(I,O,V,P){const k=P.wireframe===!0;let Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);const G=I.isInstancedMesh===!0?I.id:0;let te=Z[G];te===void 0&&(te={},Z[G]=te);let X=te[V.id];X===void 0&&(X={},te[V.id]=X);let Q=X[k];return Q===void 0&&(Q=d(c()),X[k]=Q),Q}function d(I){const O=[],V=[],P=[];for(let k=0;k<t;k++)O[k]=0,V[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:P,object:I,attributes:{},index:null}}function p(I,O,V,P){const k=r.attributes,Z=O.attributes;let G=0;const te=V.getAttributes();for(const X in te)if(te[X].location>=0){const j=k[X];let Me=Z[X];if(Me===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Me=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Me=I.instanceColor)),j===void 0||j.attribute!==Me||Me&&j.data!==Me.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function v(I,O,V,P){const k={},Z=O.attributes;let G=0;const te=V.getAttributes();for(const X in te)if(te[X].location>=0){let j=Z[X];j===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const Me={};Me.attribute=j,j&&j.data&&(Me.data=j.data),k[X]=Me,G++}r.attributes=k,r.attributesNum=G,r.index=P}function M(){const I=r.newAttributes;for(let O=0,V=I.length;O<V;O++)I[O]=0}function f(I){h(I,0)}function h(I,O){const V=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;V[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),k[I]!==O&&(i.vertexAttribDivisor(I,O),k[I]=O)}function E(){const I=r.newAttributes,O=r.enabledAttributes;for(let V=0,P=O.length;V<P;V++)O[V]!==I[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function w(I,O,V,P,k,Z,G){G===!0?i.vertexAttribIPointer(I,O,V,k,Z):i.vertexAttribPointer(I,O,V,P,k,Z)}function T(I,O,V,P){M();const k=P.attributes,Z=V.getAttributes(),G=O.defaultAttributeValues;for(const te in Z){const X=Z[te];if(X.location>=0){let Q=k[te];if(Q===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const j=Q.normalized,Me=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;const K=Le.buffer,pe=Le.type,xe=Le.bytesPerElement,be=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===Sa;if(Q.isInterleavedBufferAttribute){const me=Q.data,Ne=me.isInterleavedBuffer===!0?me.stride:me.itemSize,at=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Re=0;Re<X.locationSize;Re++)h(X.location+Re,me.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Re=0;Re<X.locationSize;Re++)f(X.location+Re);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Re=0;Re<X.locationSize;Re++)w(X.location+Re,Me/X.locationSize,pe,j,Ne*xe,(at+Me/X.locationSize*Re)*xe,be)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)h(X.location+me,Q.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<X.locationSize;me++)f(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,K);for(let me=0;me<X.locationSize;me++)w(X.location+me,Me/X.locationSize,pe,j,Me*xe,Me/X.locationSize*me*xe,be)}}else if(G!==void 0){const j=G[te];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(X.location,j);break;case 3:i.vertexAttrib3fv(X.location,j);break;case 4:i.vertexAttrib4fv(X.location,j);break;default:i.vertexAttrib1fv(X.location,j)}}}}E()}function A(){N();for(const I in n){const O=n[I];for(const V in O){const P=O[V];for(const k in P){const Z=P[k];for(const G in Z)u(Z[G].object),delete Z[G];delete P[k]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const O=n[I.id];for(const V in O){const P=O[V];for(const k in P){const Z=P[k];for(const G in Z)u(Z[G].object),delete Z[G];delete P[k]}}delete n[I.id]}function m(I){for(const O in n){const V=n[O];for(const P in V){const k=V[P];if(k[I.id]===void 0)continue;const Z=k[I.id];for(const G in Z)u(Z[G].object),delete Z[G];delete k[I.id]}}}function S(I){for(const O in n){const V=n[O],P=I.isInstancedMesh===!0?I.id:0,k=V[P];if(k!==void 0){for(const Z in k){const G=k[Z];for(const te in G)u(G[te].object),delete G[te];delete k[Z]}delete V[P],Object.keys(V).length===0&&delete n[O]}}}function N(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:f,disableUnusedAttributes:E}}function yf(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const m=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==dn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){const S=m===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(m!==Xt&&m!==un&&!S&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(we("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&we("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:_,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:T,maxSamples:A,samples:b}}function bf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new yn,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(_,d){const p=_.length!==0||d||n!==0||s;return s=d,n=_.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(_,d){t=u(_,d,0)},this.setState=function(_,d,p){const v=_.clippingPlanes,M=_.clipIntersection,f=_.clipShadows,h=i.get(_);if(!s||v===null||v.length===0||r&&!f)r?u(null):l();else{const E=r?0:n,w=E*4;let T=h.clippingState||null;c.value=T,T=u(v,d,w,p);for(let A=0;A!==w;++A)T[A]=t[A];h.clippingState=T,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(_,d,p,v){const M=_!==null?_.length:0;let f=null;if(M!==0){if(f=c.value,v!==!0||f===null){const h=p+M*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<h)&&(f=new Float32Array(h));for(let w=0,T=p;w!==M;++w,T+=4)a.copy(_[w]).applyMatrix4(E,o),a.normal.toArray(f,T),f[T+3]=a.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,f}}class Da extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Mi});r.uniforms.tEquirect.value=t;const a=new ft(s,r),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Bt),new _a(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Po=256,Af=3,Rf=20,zl=256,Gl=16,wf=3,Cf=new U,Pf=new Be;class Vs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _a(1,10,null),this._boxMesh=new ft(new ii(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Cf}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const _=c.autoClear,d=c.autoClearColor,p=c.autoClearDepth,v=c.autoClearStencil,M=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(e.background=c.getClearColor(Pf));const f=new _a(n,s,u);return f.position.copy(o),f.update(c,e),c.autoClear=_,c.autoClearColor=d,c.autoClearDepth=p,c.autoClearStencil=v,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Po,Kc(e))}_fromTexture(e,t){e.mapping===yi||e.mapping===Xi?this._setSize(e.image.length===0?Po:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Do(e,!1,!1),n=Math.log2(e)-Af;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Do(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===yi||e.mapping===Xi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Df(),this._integrationMaterial=Lf());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gl);for(let a=0;a<=n;a++){const o=Vs.lodToRoughness(a,n);if(a>n-wf)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(zl*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=If());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Do(i,e,t){return new Da(i,{minFilter:Gn,generateMipmaps:e,type:_n,colorSpace:Bs,depthBuffer:t})}function Qi(i,e,t){return new si({name:i,uniforms:e,vertexShader:Oe.cube_vert,fragmentShader:t,side:zt,blending:Mi,depthTest:!1,depthWrite:!1})}function Df(){return Qi("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Lf(){return Qi("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gl}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function If(){return Qi("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Rf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Lo(){return Qi("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Io(){return Qi("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Nf(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===js||p===er)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const M=new Da(v.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",l),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,v=p===js||p===er,M=p===yi||p===Xi;if(v||M){let f=t.get(d);const h=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==h)return n===null&&(n=new Vs(i)),f=v?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),f.texture;if(f!==void 0)return f.texture;{const E=d.image;return v&&E&&E.height>0||M&&E&&c(E)?(n===null&&(n=new Vs(i)),f=v?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),d.addEventListener("dispose",u),f.texture):null}}}return d}function o(d,p){return p===js?d.mapping=yi:p===er&&(d.mapping=Xi),d}function c(d){let p=0;const v=6;for(let M=0;M<v;M++)d[M]!==void 0&&p++;return p===v}function l(d){const p=d.target;p.removeEventListener("dispose",l);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function _(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:_}}function Uf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ls("WebGLRenderer: "+n+" extension not supported."),s}}}function Ff(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){c(v.target)}function c(v){v.index!==null&&e.remove(v.index);for(const f in v.attributes)e.remove(v.attributes[f]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const M=r.get(v);M&&(e.remove(M),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(v,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(v){const M=v.attributes;for(const f in M)e.update(M[f],i.ARRAY_BUFFER)}function _(v){const M=v.index,f=v.attributes.position;let h=0;if(f===void 0)return;const E=M!==null?M.array.length:f.array.length/3-1,w=f.count>=65535?wl:Rl,T=new w(Math.ceil(E/3)*6,1),A=T.array;if(M!==null){const m=M.array;h=M.version;for(let S=0,N=0;S<E;S+=3){const D=m[S+0],I=m[S+1],O=m[S+2];A[N++]=D,A[N++]=I,A[N++]=I,A[N++]=O,A[N++]=O,A[N++]=D}}else{h=f.version;for(let m=0,S=0;m<E;m+=3){const N=m+0,D=m+1,I=m+2;A[S++]=N,A[S++]=D,A[S++]=D,A[S++]=I,A[S++]=I,A[S++]=N}}T.version=h;const b=r.get(v);b&&e.remove(b),r.set(v,T)}function d(v){const M=r.get(v);if(M){const f=v.index;f!==null&&M.version<f.version&&_(v)}else _(v);return r.get(v)}function p(){for(const v in s){const M=s[v].deref();M!==void 0&&c(M)}}return{get:l,update:u,getWireframeAttribute:d,dispose:p}}function Of(i,e,t){let n;function s(_){n=_}let r,a;function o(_){r=_.type,a=_.bytesPerElement}function c(_,d){i.drawElements(n,d,r,_*a),t.update(d,n,1)}function l(_,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,_*a,p),t.update(d,n,p))}function u(_,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,_,0,p);let M=0;for(let f=0;f<p;f++)M+=d[f];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Bf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zf(i,e,t){const n=new WeakMap,s=new rt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,_=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==_){let D=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var p=D;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let T=0;v===!0&&(T=1),M===!0&&(T=2),f===!0&&(T=3);let A=o.attributes.position.count*T,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const m=new Float32Array(A*b*4*_),S=new Tl(m,A,b,_);S.type=un,S.needsUpdate=!0;const N=T*4;for(let I=0;I<_;I++){const O=h[I],V=E[I],P=w[I],k=A*b*4*I;for(let Z=0;Z<O.count;Z++){const G=Z*N;v===!0&&(s.fromBufferAttribute(O,Z),m[k+G+0]=s.x,m[k+G+1]=s.y,m[k+G+2]=s.z,m[k+G+3]=0),M===!0&&(s.fromBufferAttribute(V,Z),m[k+G+4]=s.x,m[k+G+5]=s.y,m[k+G+6]=s.z,m[k+G+7]=0),f===!0&&(s.fromBufferAttribute(P,Z),m[k+G+8]=s.x,m[k+G+9]=s.y,m[k+G+10]=s.z,m[k+G+11]=P.itemSize===4?s.w:1)}}d={count:_,texture:S,size:new Ce(A,b)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let f=0;f<l.length;f++)v+=l[f];const M=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Gf(i,e,t,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,_=l.geometry,d=e.get(l,_);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Hf={[rl]:"LINEAR_TONE_MAPPING",[al]:"REINHARD_TONE_MAPPING",[ol]:"CINEON_TONE_MAPPING",[ll]:"ACES_FILMIC_TONE_MAPPING",[hl]:"AGX_TONE_MAPPING",[ul]:"NEUTRAL_TONE_MAPPING",[cl]:"CUSTOM_TONE_MAPPING"};function kf(i,e,t,n,s,r){const a=new pn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new an;u.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new dt([0,2,0,0,2,0],2));const _=new wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ft(u,_),p=new Fl(-1,1,1,-1,0,1);let v=null,M=null,f=!1,h,E=null,w=[],T=!1;this.setSize=function(A,b){a.setSize(A,b),o!==null&&o.setSize(A,b),c!==null&&c.setSize(A,b);for(let m=0;m<w.length;m++){const S=w[m];S.setSize&&S.setSize(A,b)}},this.setEffects=function(A){w=A,T=w.length>0&&w[0].isRenderPass===!0;const b=a.width,m=a.height;w.length>0&&o===null&&(o=new pn(b,m,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new pn(b,m,{type:_n,depthBuffer:!1,stencilBuffer:!1}));const S=s===!0&&w.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new bi(b,m),r===!0&&(l.format=Hn,l.type=Ti)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<w.length;N++){const D=w[N];D.setSize&&D.setSize(b,m),S&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(l)}},this.begin=function(A,b){if(f||A.toneMapping===wn&&w.length===0)return!1;if(E=b,b!==null){const m=b.width,S=b.height;(a.width!==m||a.height!==S)&&this.setSize(m,S)}return T===!1&&A.setRenderTarget(a),h=A.toneMapping,A.toneMapping=wn,!0},this.hasRenderPass=function(){return T},this.end=function(A,b){A.toneMapping=h,f=!0;let m=a,S=o;for(let N=0;N<w.length;N++){const D=w[N];D.enabled!==!1&&(D.render(A,S,m,b),D.needsSwap!==!1&&(m=S,S=S===o?c:o))}if(v!==A.outputColorSpace||M!==A.toneMapping){v=A.outputColorSpace,M=A.toneMapping,_.defines={},Ve.getTransfer(v)===Ze&&(_.defines.SRGB_TRANSFER="");const N=Hf[M];N&&(_.defines[N]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=m.texture,A.setRenderTarget(E),A.render(d,p),E=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),_.dispose()}}const Hl=new It,kl=new bi(1,1),Vl=new Dl(1),Wl=new Tl,Xl=new ih,ql=new Pl,No=[],Uo=[],Fo=new Float32Array(16),Oo=new Float32Array(9),Bo=new Float32Array(4);function Pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=No[s];if(r===void 0&&(r=new Float32Array(s),No[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ks(i,e){let t=Uo[e];t===void 0&&(t=new Int32Array(e),Uo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Yf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Bo.set(n),i.uniformMatrix2fv(this.addr,!1,Bo),mt(t,n)}}function Kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Oo.set(n),i.uniformMatrix3fv(this.addr,!1,Oo),mt(t,n)}}function $f(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Fo.set(n),i.uniformMatrix4fv(this.addr,!1,Fo),mt(t,n)}}function Zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function $s(i){return i.version===0&&(i.compareFunction=El,i.needsUpdate=!0),i}function sp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=$s(kl):r=Hl,t.setTexture2D(e||r,s)}function rp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xl,s)}function ap(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=$s(Vl):r=ql,t.setTextureCube(e||r,s)}function op(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wl,s)}function lp(i){switch(i){case 5126:return Vf;case 35664:return Wf;case 35665:return Xf;case 35666:return qf;case 35674:return Yf;case 35675:return Kf;case 35676:return $f;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return jf;case 5125:return ep;case 36294:return tp;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}function cp(i,e){i.uniform1fv(this.addr,e)}function hp(i,e){const t=Pi(e,this.size,2);i.uniform2fv(this.addr,t)}function up(i,e){const t=Pi(e,this.size,3);i.uniform3fv(this.addr,t)}function dp(i,e){const t=Pi(e,this.size,4);i.uniform4fv(this.addr,t)}function fp(i,e){const t=Pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pp(i,e){const t=Pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mp(i,e){const t=Pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _p(i,e){i.uniform1iv(this.addr,e)}function gp(i,e){i.uniform2iv(this.addr,e)}function xp(i,e){i.uniform3iv(this.addr,e)}function vp(i,e){i.uniform4iv(this.addr,e)}function Sp(i,e){i.uniform1uiv(this.addr,e)}function Mp(i,e){i.uniform2uiv(this.addr,e)}function Ep(i,e){i.uniform3uiv(this.addr,e)}function yp(i,e){i.uniform4uiv(this.addr,e)}function Tp(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=$s(kl):a=Hl;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function bp(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Xl,r[a])}function Ap(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=$s(Vl):a=ql;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Rp(i,e,t){const n=this.cache,s=e.length,r=Ks(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Wl,r[a])}function wp(i){switch(i){case 5126:return cp;case 35664:return hp;case 35665:return up;case 35666:return dp;case 35674:return fp;case 35675:return pp;case 35676:return mp;case 5124:case 35670:return _p;case 35667:case 35671:return gp;case 35668:case 35672:return xp;case 35669:case 35673:return vp;case 5125:return Sp;case 36294:return Mp;case 36295:return Ep;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}class Cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lp(t.type)}}class Pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wp(t.type)}}class Dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function zo(i,e){i.seq.push(e),i.map[e.id]=e}function Lp(i,e,t){const n=i.name,s=n.length;for(Ar.lastIndex=0;;){const r=Ar.exec(n),a=Ar.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){zo(t,l===void 0?new Cp(o,i,e):new Pp(o,i,e));break}else{let _=t.map[o];_===void 0&&(_=new Dp(o),zo(t,_)),t=_}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Lp(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Go(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ip=37297;let Np=0;function Up(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ho=new De;function Fp(i){Ve._getMatrix(Ho,Ve.workingColorSpace,i);const e=`mat3( ${Ho.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case zs:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ko(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Up(i.getShaderSource(e),o)}else return r}function Op(i,e){const t=Fp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Bp={[rl]:"Linear",[al]:"Reinhard",[ol]:"Cineon",[ll]:"ACESFilmic",[hl]:"AgX",[ul]:"Neutral",[cl]:"Custom"};function zp(i,e){const t=Bp[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bs=new U;function Gp(){Ve.getLuminanceCoefficients(bs);const i=bs.x.toFixed(4),e=bs.y.toFixed(4),t=bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function kp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gi(i){return i!==""}function Vo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Wo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(i){return i.replace(Wp,Xp)}function Xp(i,e){const t=Oe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ga(t)}const qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xo(i){return i.replace(qp,Yp)}function Yp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kp={[Rs]:"SHADOWMAP_TYPE_PCF",[zi]:"SHADOWMAP_TYPE_VSM"};function $p(i){return Kp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zp={[Xi]:"ENVMAP_MODE_REFRACTION"};function Jp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qp={[sl]:"ENVMAP_BLENDING_MULTIPLY",[Dc]:"ENVMAP_BLENDING_MIX",[Lc]:"ENVMAP_BLENDING_ADD"};function jp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qp[i.combine]||"ENVMAP_BLENDING_NONE"}function em(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$p(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Jp(t),_=jp(t),d=Hp(t),p=kp(r),v=s.createProgram();let M,f,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Gi).join(`
`),M.length>0&&(M+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Gi).join(`
`),f.length>0&&(f+=`
`)):(M=[qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),f=[qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==wn?zp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Op("linearToOutputTexel",t.outputColorSpace),Gp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gi).join(`
`)),a=ga(a),a=Vo(a,t),a=Wo(a,t),o=ga(o),o=Vo(o,t),o=Wo(o,t),a=Xo(a),o=Xo(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,f=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=h+M+a,w=h+f+o,T=Go(s,s.VERTEX_SHADER,E),A=Go(s,s.FRAGMENT_SHADER,w);s.attachShader(v,T),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function b(D){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(A)||"",P=I.trim(),k=O.trim(),Z=V.trim();let G=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,A);else{const X=ko(s,T,"vertex"),Q=ko(s,A,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+X+`
`+Q)}else P!==""?we("WebGLProgram: Program Info Log:",P):(k===""||Z==="")&&(te=!1);te&&(D.diagnostics={runnable:G,programLog:P,vertexShader:{log:k,prefix:M},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(T),s.deleteShader(A),m=new Ns(s,v),S=Vp(s,v)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(v,Ip)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Np++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}let tm=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new im(e),t.set(e,n)),n}}class im{constructor(e){this.id=tm++,this.code=e,this.usedTimes=0}}function sm(i){return i===ni||i===Fs||i===Os}function rm(i,e,t,n,s,r){const a=new bl,o=new nm,c=new Set,l=[],u=new Map,_=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(m){return c.add(m),m===0?"uv":`uv${m}`}function v(m,S,N,D,I,O){const V=D.fog,P=I.geometry,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?D.environment:null,Z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,G=e.get(m.envMap||k,Z),te=d[m.type];let X=n.precision;m.precision!==null&&(X=n.getMaxPrecision(m.precision),X!==m.precision&&we("WebGLProgram.getParameters:",m.precision,"not supported, using",X,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=Q!==void 0?Q.length:0;let Me=0;P.morphAttributes.position!==void 0&&(Me=1),P.morphAttributes.normal!==void 0&&(Me=2),P.morphAttributes.color!==void 0&&(Me=3);let Le,K,pe,xe;if(te){const de=hn[te];Le=de.vertexShader,K=de.fragmentShader}else{Le=m.vertexShader,K=m.fragmentShader;const de=o.getVertexShaderStage(m),$e=o.getFragmentShaderStage(m);o.update(m,de,$e),pe=de.id,xe=$e.id}const be=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ne=I.isInstancedMesh===!0,at=I.isBatchedMesh===!0,Re=!!m.map,Ke=!!m.matcap,Je=!!G,Ge=Je&&G.isPMREMTexture===!0,St=!!m.aoMap,ct=!!m.lightMap,Nt=!!m.bumpMap&&m.wireframe===!1,it=!!m.normalMap,on=!!m.displacementMap,_t=!!m.emissiveMap,qt=!!m.metalnessMap,Yt=!!m.roughnessMap,Kt=m.anisotropy>0,L=m.clearcoat>0,$t=m.diffuseRoughness>0,et=m.dispersion>0,tt=m.retroreflectivity>0,ue=m.iridescence>0,ht=m.sheen>0,Ae=m.transmission>0,Pe=Kt&&!!m.anisotropyMap,y=L&&!!m.clearcoatMap,g=L&&!!m.clearcoatNormalMap,B=L&&!!m.clearcoatRoughnessMap,ee=$t&&!!m.diffuseRoughnessMap,J=ue&&!!m.iridescenceMap,se=ue&&!!m.iridescenceThicknessMap,ce=ht&&!!m.sheenColorMap,q=ht&&!!m.sheenRoughnessMap,Y=!!m.specularMap,ae=!!m.specularColorMap,R=!!m.specularIntensityMap,$=Ae&&!!m.transmissionMap,W=Ae&&!!m.thicknessMap,oe=!!m.gradientMap,ie=!!m.alphaMap,re=m.alphaTest>0,ye=!!m.alphaHash,Fe=!!m.extensions;let ne=wn;m.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Te=Ge?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ue={shaderID:te,shaderType:m.type,shaderName:m.name,vertexShader:Le,fragmentShader:K,defines:m.defines,customVertexShaderID:pe,customFragmentShaderID:xe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:X,batching:at,batchingColor:at&&I._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&I.instanceColor!==null,instancingMorph:Ne&&I.morphTexture!==null,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Re,matcap:Ke,envMap:Je,envMapMode:Je&&G.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Te.length-1:null,envMapSize:Ge?Te[0].width:null,aoMap:St,lightMap:ct,bumpMap:Nt,normalMap:it,displacementMap:on,emissiveMap:_t,normalMapObjectSpace:it&&m.normalMapType===Uc,normalMapTangentSpace:it&&m.normalMapType===pa,packedNormalMap:it&&m.normalMapType===pa&&sm(m.normalMap.format),metalnessMap:qt,roughnessMap:Yt,anisotropy:Kt,anisotropyMap:Pe,clearcoat:L,clearcoatMap:y,clearcoatNormalMap:g,clearcoatRoughnessMap:B,diffuseRoughness:$t,diffuseRoughnessMap:ee,dispersion:et,retroreflection:tt,iridescence:ue,iridescenceMap:J,iridescenceThicknessMap:se,sheen:ht,sheenColorMap:ce,sheenRoughnessMap:q,specularMap:Y,specularColorMap:ae,specularIntensityMap:R,transmission:Ae,transmissionMap:$,thicknessMap:W,gradientMap:oe,opaque:m.transparent===!1&&m.blending===Hi&&m.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:ye,combine:m.combine,mapUv:Re&&p(m.map.channel),aoMapUv:St&&p(m.aoMap.channel),lightMapUv:ct&&p(m.lightMap.channel),bumpMapUv:Nt&&p(m.bumpMap.channel),normalMapUv:it&&p(m.normalMap.channel),displacementMapUv:on&&p(m.displacementMap.channel),emissiveMapUv:_t&&p(m.emissiveMap.channel),metalnessMapUv:qt&&p(m.metalnessMap.channel),roughnessMapUv:Yt&&p(m.roughnessMap.channel),anisotropyMapUv:Pe&&p(m.anisotropyMap.channel),clearcoatMapUv:y&&p(m.clearcoatMap.channel),clearcoatNormalMapUv:g&&p(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&p(m.diffuseRoughnessMap.channel),iridescenceMapUv:J&&p(m.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(m.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(m.sheenColorMap.channel),sheenRoughnessMapUv:q&&p(m.sheenRoughnessMap.channel),specularMapUv:Y&&p(m.specularMap.channel),specularColorMapUv:ae&&p(m.specularColorMap.channel),specularIntensityMapUv:R&&p(m.specularIntensityMap.channel),transmissionMapUv:$&&p(m.transmissionMap.channel),thicknessMapUv:W&&p(m.thicknessMap.channel),alphaMapUv:ie&&p(m.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(it||Kt),vertexNormals:!!P.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Re||ie),fog:!!V,useFog:m.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||P.attributes.normal===void 0&&it===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Re&&m.map.isVideoTexture===!0&&Ve.getTransfer(m.map.colorSpace)===Ze,decodeVideoTextureEmissive:_t&&m.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(m.emissiveMap.colorSpace)===Ze,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===An,flipSided:m.side===zt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Fe&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&m.extensions.multiDraw===!0||at)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function M(m){const S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(const N in m.defines)S.push(N),S.push(m.defines[N]);return m.isRawShaderMaterial===!1&&(f(S,m),h(S,m),S.push(i.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function f(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function h(m,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function E(m){const S=d[m.type];let N;if(S){const D=hn[S];N=bh.clone(D.uniforms)}else N=m.uniforms;return N}function w(m,S){let N=u.get(S);return N!==void 0?++N.usedTimes:(N=new em(i,S,m,s),l.push(N),u.set(S,N)),N}function T(m){if(--m.usedTimes===0){const S=l.indexOf(m);l[S]=l[l.length-1],l.pop(),u.delete(m.cacheKey),m.destroy()}}function A(m){o.remove(m)}function b(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:E,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:b}}function am(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ko(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,v,M,f,h){let E=i[e];return E===void 0?(E={id:d.id,object:d,geometry:p,material:v,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:f,group:h},i[e]=E):(E.id=d.id,E.object=d,E.geometry=p,E.material=v,E.materialVariant=a(d),E.groupOrder=M,E.renderOrder=d.renderOrder,E.z=f,E.group=h),e++,E}function c(d,p,v,M,f,h,E){E.reversedDepth===!0&&(f=-f);const w=o(d,p,v,M,f,h);v.transmission>0?n.push(w):v.transparent===!0?s.push(w):t.push(w)}function l(d,p,v,M,f,h){const E=o(d,p,v,M,f,h);v.transmission>0?n.unshift(E):v.transparent===!0?s.unshift(E):t.unshift(E)}function u(d,p){t.length>1&&t.sort(d||om),n.length>1&&n.sort(p||Yo),s.length>1&&s.sort(p||Yo)}function _(){for(let d=e,p=i.length;d<p;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:_,sort:u}}function lm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ko,i.set(n,[a])):s>=r.length?(a=new Ko,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function hm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let um=0;function dm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fm(i){const e=new cm,t=hm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new nt,a=new nt;function o(l){let u=0,_=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,v=0,M=0,f=0,h=0,E=0,w=0,T=0,A=0,b=0,m=0,S=0,N=0,D=0;l.sort(dm);for(let O=0,V=l.length;O<V;O++){const P=l[O],k=P.color,Z=P.intensity,G=P.distance;let te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ni?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*Z,_+=k.g*Z,d+=k.b*Z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],Z);D++}else if(P.isSunLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[v]=j,n.sunShadowMap[v]=te;const Me=Q.getViewportCount();for(let Le=0;Le<Me;Le++)n.sunShadowMatrix[M+Le]=Q.getMatrix(Le),n.sunShadowCascade[M+Le]=Q._cascadeData[Le];M+=Me,v++}n.sun[p]=X,p++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=te,n.directionalShadowMatrix[f]=P.shadow.matrix,A++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(Z),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[E]=X;const Q=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Q.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[E]=Q.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[E]=j,n.spotShadowMap[E]=te,m++}E++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(k).multiplyScalar(Z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=X,w++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,j=t.get(P);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[h]=j,n.pointShadowMap[h]=te,n.pointShadowMatrix[h]=P.shadow.matrix,b++}n.point[h]=X,h++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Z),X.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[T]=X,T++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=_,n.ambient[2]=d;const I=n.hash;(I.sunLength!==p||I.directionalLength!==f||I.pointLength!==h||I.spotLength!==E||I.rectAreaLength!==w||I.hemiLength!==T||I.numSunShadows!==v||I.numDirectionalShadows!==A||I.numPointShadows!==b||I.numSpotShadows!==m||I.numSpotMaps!==S||I.numLightProbes!==D)&&(n.sun.length=p,n.directional.length=f,n.spot.length=E,n.rectArea.length=w,n.point.length=h,n.hemi.length=T,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=D,I.sunLength=p,I.directionalLength=f,I.pointLength=h,I.spotLength=E,I.rectAreaLength=w,I.hemiLength=T,I.numSunShadows=v,I.numDirectionalShadows=A,I.numPointShadows=b,I.numSpotShadows=m,I.numSpotMaps=S,I.numLightProbes=D,n.version=um++)}function c(l,u){let _=0,d=0,p=0,v=0,M=0,f=0;const h=u.matrixWorldInverse;for(let E=0,w=l.length;E<w;E++){const T=l[E];if(T.isSunLight){const A=n.sun[_];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(h),_++}else if(T.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),d++}else if(T.isSpotLight){const A=n.spot[v];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(h),A.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(h),v++}else if(T.isRectAreaLight){const A=n.rectArea[M];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(h),a.identity(),r.copy(T.matrixWorld),r.premultiply(h),a.extractRotation(r),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(T.isPointLight){const A=n.point[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(h),p++}else if(T.isHemisphereLight){const A=n.hemi[f];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(h),f++}}}return{setup:o,setupView:c,state:n}}function $o(i){const e=new fm(i),t=[],n=[],s=[];function r(_){u.camera=_,t.length=0,n.length=0,s.length=0}function a(_){_.isLightProbeGrid?s.push(_):t.push(_)}function o(_){n.push(_)}function c(){e.setup(t),s.sort((_,d)=>_.priority-d.priority||_.id-d.id)}function l(_){e.setupView(t,_)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function pm(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new $o(i),e.set(s,[o])):r>=a.length?(o=new $o(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_m=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gm=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],xm=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Zo=new nt,Oi=new U,Rr=new U;function vm(i,e,t){let n=new Ki;const s=new Ce,r=new Ce,a=new rt,o=new Ph,c=new Dh,l={},u=t.maxTextureSize,_={[ti]:zt,[zt]:ti,[An]:An},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:mm,fragmentShader:_m}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ft(v,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let h=this.type;this.render=function(b,m,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;this.type===dc&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rs);const N=i.getRenderTarget(),D=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Mi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=h!==this.type;V&&m.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=b.length;P<k;P++){const Z=b[P],G=Z.shadow;if(G===void 0){we("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const te=G.getFrameExtents();s.multiply(te),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/te.x),s.x=r.x*te.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/te.y),s.y=r.y*te.y,G.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===zi){if(Z.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new pn(s.x,s.y,{format:ni,type:_n,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new bi(s.x,s.y,un),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=kn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=yt,G.map.depthTexture.magFilter=yt}else Z.isPointLight?(G.map=new Da(s.x),G.map.depthTexture=new Dl(s.x,mn)):(G.map=new pn(s.x,s.y),G.map.depthTexture=new bi(s.x,s.y,mn)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=kn,this.type===Rs?(G.map.depthTexture.compareFunction=X?Ml:Sl,G.map.depthTexture.minFilter=Bt,G.map.depthTexture.magFilter=Bt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=yt,G.map.depthTexture.magFilter=yt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);const Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,S);const j=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Me=0;Me<Q;Me++){const Le=G.getCamera(Me);if(Z.isPointLight){const K=G.camera,pe=G.matrix,xe=Z.distance||K.far;xe!==K.far&&(K.far=xe,K.updateProjectionMatrix()),Oi.setFromMatrixPosition(Z.matrixWorld),K.position.copy(Oi),Rr.copy(K.position),Rr.add(gm[Me]),K.up.copy(xm[Me]),K.lookAt(Rr),K.updateMatrixWorld(),pe.makeTranslation(-Oi.x,-Oi.y,-Oi.z),Zo.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Zo,K.coordinateSystem,K.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Me),i.clear();else{Me===0&&(i.setRenderTarget(G.map),i.clear());const K=G.getViewport(Me);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(a)}n=G.getFrustum(Me),T(m,S,Le,Z,j,this.type)}G.isPointLightShadow!==!0&&this.type===zi&&E(G,S),G.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(N,D,I)};function E(b,m){const S=e.update(M);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new pn(s.x,s.y,{format:ni,type:_n}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(m,null,S,d,M,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(m,null,S,p,M,null)}function w(b,m,S,N){let D=null;const I=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)D=I;else if(D=S.isPointLight===!0?c:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){const O=D.uuid,V=m.uuid;let P=l[O];P===void 0&&(P={},l[O]=P);let k=P[V];k===void 0&&(k=D.clone(),P[V]=k,m.addEventListener("dispose",A)),D=k}if(D.visible=m.visible,D.wireframe=m.wireframe,N===zi?D.side=m.shadowSide!==null?m.shadowSide:m.side:D.side=m.shadowSide!==null?m.shadowSide:_[m.side],D.alphaMap=m.alphaMap,D.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,D.map=m.map,D.clipShadows=m.clipShadows,D.clippingPlanes=m.clippingPlanes,D.clipIntersection=m.clipIntersection,D.displacementMap=m.displacementMap,D.displacementScale=m.displacementScale,D.displacementBias=m.displacementBias,D.wireframeLinewidth=m.wireframeLinewidth,D.linewidth=m.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=i.properties.get(D);O.light=S}return D}function T(b,m,S,N,D,I){if(b.visible===!1)return;if(b.layers.test(D)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===zi)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const P=e.update(b),k=b.material;if(Array.isArray(k)){const Z=P.groups;for(let G=0,te=Z.length;G<te;G++){const X=Z[G],Q=k[X.materialIndex];if(Q&&Q.visible){const j=w(b,Q,N,I);b.onBeforeShadow(i,b,m,S,P,j,X),i.renderBufferDirect(S,null,P,j,b,X),b.onAfterShadow(i,b,m,S,P,j,X)}}}else if(k.visible){const Z=w(b,k,N,I);b.onBeforeShadow(i,b,m,S,P,Z,null),i.renderBufferDirect(S,null,P,Z,b,null),b.onAfterShadow(i,b,m,S,P,Z,null)}}const V=b.children;for(let P=0,k=V.length;P<k;P++)T(V[P],m,S,N,D,I)}function A(b){b.target.removeEventListener("dispose",A);for(const S in l){const N=l[S],D=b.target.uuid;D in N&&(N[D].dispose(),delete N[D])}}}function Sm(i,e){function t(){let R=!1;const $=new rt;let W=null;const oe=new rt(0,0,0,0);return{setMask:function(ie){W!==ie&&!R&&(i.colorMask(ie,ie,ie,ie),W=ie)},setLocked:function(ie){R=ie},setClear:function(ie,re,ye,Fe,ne){ne===!0&&(ie*=Fe,re*=Fe,ye*=Fe),$.set(ie,re,ye,Fe),oe.equals($)===!1&&(i.clearColor(ie,re,ye,Fe),oe.copy($))},reset:function(){R=!1,W=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,W=null,oe=null,ie=null;return{setReversed:function(re){if($!==re){const ye=e.get("EXT_clip_control");re?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),$=re;const Fe=ie;ie=null,this.setClear(Fe)}},getReversed:function(){return $},setTest:function(re){re?me(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(re){W!==re&&!R&&(i.depthMask(re),W=re)},setFunc:function(re){if($&&(re=qc[re]),oe!==re){switch(re){case Cr:i.depthFunc(i.NEVER);break;case Pr:i.depthFunc(i.ALWAYS);break;case Dr:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Lr:i.depthFunc(i.EQUAL);break;case Ir:i.depthFunc(i.GEQUAL);break;case Nr:i.depthFunc(i.GREATER);break;case Ur:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){R=re},setClear:function(re){ie!==re&&(ie=re,$&&(re=1-re),i.clearDepth(re))},reset:function(){R=!1,W=null,oe=null,ie=null,$=!1}}}function s(){let R=!1,$=null,W=null,oe=null,ie=null,re=null,ye=null,Fe=null,ne=null;return{setTest:function(Te){R||(Te?me(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(Te){$!==Te&&!R&&(i.stencilMask(Te),$=Te)},setFunc:function(Te,Ue,de){(W!==Te||oe!==Ue||ie!==de)&&(i.stencilFunc(Te,Ue,de),W=Te,oe=Ue,ie=de)},setOp:function(Te,Ue,de){(re!==Te||ye!==Ue||Fe!==de)&&(i.stencilOp(Te,Ue,de),re=Te,ye=Ue,Fe=de)},setLocked:function(Te){R=Te},setClear:function(Te){ne!==Te&&(i.clearStencil(Te),ne=Te)},reset:function(){R=!1,$=null,W=null,oe=null,ie=null,re=null,ye=null,Fe=null,ne=null}}}const r=new t,a=new n,o=new s;let c={};const l=new WeakMap;let u={},_={},d={},p=new WeakMap,v=[],M=null,f=!1,h=null,E=null,w=null,T=null,A=null,b=null,m=null,S=new Be(0,0,0),N=0,D=!1,I=null,O=null,V=null,P=null,k=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,te=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=te>=2);let Q=null,j={};const Me=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),K=new rt().fromArray(Me),pe=new rt().fromArray(Le);function xe(R,$,W,oe){const ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(R,re),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<W;ye++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D($+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}const be={};be[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Wi),Nt(!1),it($a),me(i.CULL_FACE),St(Mi);function me(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function Ne(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function at(R,$){return d[R]!==$?(i.bindFramebuffer(R,$),d[R]=$,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Re(R,$){let W=v,oe=!1;if(R){W=p.get($),W===void 0&&(W=[],p.set($,W));const ie=R.textures;if(W.length!==ie.length||W[0]!==i.COLOR_ATTACHMENT0){for(let re=0,ye=ie.length;re<ye;re++)W[re]=i.COLOR_ATTACHMENT0+re;W.length=ie.length,oe=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,oe=!0);oe&&i.drawBuffers(W)}function Ke(R){return M!==R?(i.useProgram(R),M=R,!0):!1}const Je={[gi]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};Je[_c]=i.MIN,Je[gc]=i.MAX;const Ge={[xc]:i.ZERO,[vc]:i.ONE,[Sc]:i.SRC_COLOR,[nl]:i.SRC_ALPHA,[Ac]:i.SRC_ALPHA_SATURATE,[Tc]:i.DST_COLOR,[Ec]:i.DST_ALPHA,[Mc]:i.ONE_MINUS_SRC_COLOR,[il]:i.ONE_MINUS_SRC_ALPHA,[bc]:i.ONE_MINUS_DST_COLOR,[yc]:i.ONE_MINUS_DST_ALPHA,[Rc]:i.CONSTANT_COLOR,[wc]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function St(R,$,W,oe,ie,re,ye,Fe,ne,Te){if(R===Mi){f===!0&&(Ne(i.BLEND),f=!1);return}if(f===!1&&(me(i.BLEND),f=!0),R!==fc){if(R!==h||Te!==D){if((E!==gi||A!==gi)&&(i.blendEquation(i.FUNC_ADD),E=gi,A=gi),Te)switch(R){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.ONE,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",R);break}else switch(R){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ja:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",R);break}w=null,T=null,b=null,m=null,S.set(0,0,0),N=0,h=R,D=Te}return}ie=ie||$,re=re||W,ye=ye||oe,($!==E||ie!==A)&&(i.blendEquationSeparate(Je[$],Je[ie]),E=$,A=ie),(W!==w||oe!==T||re!==b||ye!==m)&&(i.blendFuncSeparate(Ge[W],Ge[oe],Ge[re],Ge[ye]),w=W,T=oe,b=re,m=ye),(Fe.equals(S)===!1||ne!==N)&&(i.blendColor(Fe.r,Fe.g,Fe.b,ne),S.copy(Fe),N=ne),h=R,D=!1}function ct(R,$){R.side===An?Ne(i.CULL_FACE):me(i.CULL_FACE);let W=R.side===zt;$&&(W=!W),Nt(W),R.blending===Hi&&R.transparent===!1?St(Mi):St(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);const oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_t(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(R){I!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),I=R)}function it(R){R!==hc?(me(i.CULL_FACE),R!==O&&(R===$a?i.cullFace(i.BACK):R===uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),O=R}function on(R){R!==V&&(G&&i.lineWidth(R),V=R)}function _t(R,$,W){R?(me(i.POLYGON_OFFSET_FILL),(P!==$||k!==W)&&(P=$,k=W,a.getReversed()&&($=-$,W=-W),i.polygonOffset($,W))):Ne(i.POLYGON_OFFSET_FILL)}function qt(R){R?me(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function Yt(R){R===void 0&&(R=i.TEXTURE0+Z-1),Q!==R&&(i.activeTexture(R),Q=R)}function Kt(R,$,W){W===void 0&&(Q===null?W=i.TEXTURE0+Z-1:W=Q);let oe=j[W];oe===void 0&&(oe={type:void 0,texture:void 0},j[W]=oe),(oe.type!==R||oe.texture!==$)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(R,$||be[R]),oe.type=R,oe.texture=$)}function L(){const R=j[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function et(){try{i.compressedTexImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function tt(){try{i.texSubImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function ue(){try{i.texSubImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function Pe(){try{i.texStorage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function y(){try{i.texStorage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function g(){try{i.texImage2D(...arguments)}catch(R){qe("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){qe("WebGLState:",R)}}function ee(R){return _[R]!==void 0?_[R]:i.getParameter(R)}function J(R,$){_[R]!==$&&(i.pixelStorei(R,$),_[R]=$)}function se(R){K.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function ce(R){pe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),pe.copy(R))}function q(R,$){let W=l.get($);W===void 0&&(W=new WeakMap,l.set($,W));let oe=W.get(R);oe===void 0&&(oe=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,oe,oe),W.set(R,oe))}function Y(R,$,W){const ie=l.get($).get(R);c[ie]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,W),c[ie]=W)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},_={},Q=null,j={},d={},c={},p=new WeakMap,v=[],M=null,f=!1,h=null,E=null,w=null,T=null,A=null,b=null,m=null,S=new Be(0,0,0),N=0,D=!1,I=null,O=null,V=null,P=null,k=null,K.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Ne,bindFramebuffer:at,drawBuffers:Re,useProgram:Ke,setBlending:St,setMaterial:ct,setFlipSided:Nt,setCullFace:it,setLineWidth:on,setPolygonOffset:_t,setScissorTest:qt,activeTexture:Yt,bindTexture:Kt,unbindTexture:L,compressedTexImage2D:$t,compressedTexImage3D:et,texImage2D:g,texImage3D:B,pixelStorei:J,getParameter:ee,updateUBOMapping:q,uniformBlockBinding:Y,texStorage2D:Pe,texStorage3D:y,texSubImage2D:tt,texSubImage3D:ue,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ae,scissor:se,viewport:ce,reset:ae}}function Mm(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,u=new WeakMap,_=new Set;let d;const p=new WeakMap,v=new Set,M=new FinalizationRegistry(y=>v.delete(y));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(y,g){return f?new OffscreenCanvas(y,g):Gs("canvas")}function E(y,g,B){let ee=1;const J=Pe(y);if((J.width>B||J.height>B)&&(ee=B/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const se=Math.floor(ee*J.width),ce=Math.floor(ee*J.height);d===void 0&&(d=h(se,ce));const q=g?h(se,ce):d;return q.width=se,q.height=ce,q.getContext("2d").drawImage(y,0,0,se,ce),we("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+ce+")."),q}else return"data"in y&&we("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),y;return y}function w(y){return y.generateMipmaps}function T(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(y,g,B,ee,J,se=!1){if(y!==null){if(i[y]!==void 0)return i[y];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=g;if(g===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.R16_EXT),B===i.SHORT&&ce&&(q=ce.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),g===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.RG16_EXT),B===i.SHORT&&ce&&(q=ce.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&ce&&(q=ce.RGB16_EXT),B===i.SHORT&&ce&&(q=ce.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),g===i.RGBA){const Y=se?zs:Ve.getTransfer(J);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Y===Ze?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ce&&(q=ce.RGBA16_EXT),B===i.SHORT&&ce&&(q=ce.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function m(y,g){let B;return y?g===null||g===mn||g===Ti?B=i.DEPTH24_STENCIL8:g===un?B=i.DEPTH32F_STENCIL8:g===qi&&(B=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===mn||g===Ti?B=i.DEPTH_COMPONENT24:g===un?B=i.DEPTH_COMPONENT32F:g===qi&&(B=i.DEPTH_COMPONENT16),B}function S(y,g){return w(y)===!0||y.isFramebufferTexture&&y.minFilter!==yt&&y.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function N(y){const g=new WeakRef(y);n.get(y).__ref=g,v.add(g),M.register(y,g,g)}function D(y){const g=n.get(y).__ref;g!==void 0&&(v.delete(g),M.unregister(g))}function I(y){V(y.target)}function O(y){P(y.target)}function V(y){y.removeEventListener("dispose",I),D(y),Z(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&_.delete(y)}function P(y){y.removeEventListener("dispose",O),D(y),te(y)}function k(){for(const y of v){const g=y.deref();g!==void 0&&(g.isRenderTarget===!0?P(g):V(g))}v.clear(),_.clear()}function Z(y){const g=n.get(y);if(g.__webglInit===void 0)return;const B=y.source,ee=p.get(B);if(ee){const J=ee[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&G(y),Object.keys(ee).length===0&&p.delete(B)}n.remove(y)}function G(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const B=y.source,ee=p.get(B);delete ee[g.__cacheKey],a.memory.textures--}function te(y){const g=n.get(y);g.__depthDisposeCallback&&g.__depthDisposeCallback();const B=y.depthTexture;if(B&&B.renderTarget===y&&V(B),y.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let se=0;se<g.__webglFramebuffer[J].length;se++)i.deleteFramebuffer(g.__webglFramebuffer[J][se]);else i.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)i.deleteFramebuffer(g.__webglFramebuffer[J]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const ee=y.textures;for(let J=0,se=ee.length;J<se;J++){const ce=n.get(ee[J]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ee[J])}n.remove(y)}let X=0;function Q(){X=0}function j(){return X}function Me(y){X=y}function Le(){const y=X;return y>=s.maxTextures&&we("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,y}function K(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.mipmapsAutoUpdate),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function pe(y,g){const B=n.get(y);if(y.isVideoTexture&&ht(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&B.__version!==y.version){const ee=y.image;if(ee===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(B,y,g);return}}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function xe(y,g){const B=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){ct(B,y,g);return}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function be(y,g){const B=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){ct(B,y,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function me(y,g){const B=n.get(y);if(y.version>0&&B.__version!==y.version){Nt(B,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const Ne={[Fr]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Or]:i.MIRRORED_REPEAT},at={[yt]:i.NEAREST,[Ic]:i.NEAREST_MIPMAP_NEAREST,[ns]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[tr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Re={[Oc]:i.NEVER,[El]:i.ALWAYS,[Bc]:i.LESS,[Sl]:i.LEQUAL,[zc]:i.EQUAL,[Ml]:i.GEQUAL,[Gc]:i.GREATER,[Hc]:i.NOTEQUAL};function Ke(y,g){if(g.type===un&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Bt||g.magFilter===tr||g.magFilter===ns||g.magFilter===Gn||g.minFilter===Bt||g.minFilter===tr||g.minFilter===ns||g.minFilter===Gn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Ne[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Ne[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Ne[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,at[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,at[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===yt||g.minFilter!==ns&&g.minFilter!==Gn||g.type===un&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Je(y,g){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",I),N(g));const ee=g.source;let J=p.get(ee);J===void 0&&(J={},p.set(ee,J));const se=K(g);if(se!==y.__cacheKey){J[se]===void 0&&(J[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[se].usedTimes++;const ce=J[y.__cacheKey];ce!==void 0&&(J[y.__cacheKey].usedTimes--,ce.usedTimes===0&&G(g)),y.__cacheKey=se,y.__webglTexture=J[se].texture}return B}function Ge(y,g,B){return Math.floor(Math.floor(y/B)/g)}function St(y,g,B,ee){const se=y.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,ee,g.data);else{se.sort((R,$)=>R.start-$.start);let ce=0;for(let R=1;R<se.length;R++){const $=se[ce],W=se[R],oe=$.start+$.count,ie=Ge(W.start,g.width,4),re=Ge($.start,g.width,4);W.start<=oe+1&&ie===re&&Ge(W.start+W.count-1,g.width,4)===ie?$.count=Math.max($.count,W.start+W.count-$.start):(++ce,se[ce]=W)}se.length=ce+1;const q=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let R=0,$=se.length;R<$;R++){const W=se[R],oe=Math.floor(W.start/4),ie=Math.ceil(W.count/4),re=oe%g.width,ye=Math.floor(oe/g.width),Fe=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye),t.texSubImage2D(i.TEXTURE_2D,0,re,ye,Fe,ne,B,ee,g.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ct(y,g,B){let ee=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=i.TEXTURE_3D);const J=Je(y,g),se=g.source;t.bindTexture(ee,y.__webglTexture,i.TEXTURE0+B);const ce=n.get(se);if(se.version!==ce.__version||J===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ne=Ve.getPrimaries(Ve.workingColorSpace),Te=g.colorSpace===zn?null:Ve.getPrimaries(g.colorSpace),Ue=g.colorSpace===zn||ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Y=E(g.image,!1,s.maxTextureSize);Y=Ae(g,Y);const ae=r.convert(g.format,g.colorSpace),R=r.convert(g.type);let $=b(g.internalFormat,ae,R,g.normalized,g.colorSpace,g.isVideoTexture);Ke(ee,g);let W;const oe=g.mipmaps,ie=g.isVideoTexture!==!0,re=ce.__version===void 0||J===!0,ye=se.dataReady,Fe=S(g,Y);if(g.isDepthTexture)$=m(g.format===Hn,g.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,$,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,$,Y.width,Y.height,0,ae,R,null));else if(g.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Fe,$,oe[0].width,oe[0].height);for(let ne=0,Te=oe.length;ne<Te;ne++)W=oe[ne],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,R,W.data):t.texImage2D(i.TEXTURE_2D,ne,$,W.width,W.height,0,ae,R,W.data);g.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Fe,$,Y.width,Y.height),ye&&St(g,Y,ae,R)):t.texImage2D(i.TEXTURE_2D,0,$,Y.width,Y.height,0,ae,R,Y.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,$,oe[0].width,oe[0].height,Y.depth);for(let ne=0,Te=oe.length;ne<Te;ne++)if(W=oe[ne],g.format!==dn)if(ae!==null)if(ie){if(ye)if(g.layerUpdates.size>0){const Ue=Co(W.width,W.height,g.format,g.type);for(const de of g.layerUpdates){const $e=W.data.subarray(de*Ue/W.data.BYTES_PER_ELEMENT,(de+1)*Ue/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,W.width,W.height,1,ae,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,Y.depth,ae,W.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,$,W.width,W.height,Y.depth,0,W.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,Y.depth,ae,R,W.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,$,W.width,W.height,Y.depth,0,ae,R,W.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Fe,$,oe[0].width,oe[0].height);for(let ne=0,Te=oe.length;ne<Te;ne++)W=oe[ne],g.format!==dn?ae!==null?ie?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,W.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,$,W.width,W.height,0,W.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,R,W.data):t.texImage2D(i.TEXTURE_2D,ne,$,W.width,W.height,0,ae,R,W.data)}else if(g.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,$,Y.width,Y.height,Y.depth),ye)if(g.layerUpdates.size>0){const ne=Co(Y.width,Y.height,g.format,g.type);for(const Te of g.layerUpdates){const Ue=Y.data.subarray(Te*ne/Y.data.BYTES_PER_ELEMENT,(Te+1)*ne/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,Y.width,Y.height,1,ae,R,Ue)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ae,R,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Y.width,Y.height,Y.depth,0,ae,R,Y.data);else if(g.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Fe,$,Y.width,Y.height,Y.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ae,R,Y.data)):t.texImage3D(i.TEXTURE_3D,0,$,Y.width,Y.height,Y.depth,0,ae,R,Y.data);else if(g.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Fe,$,Y.width,Y.height);else{let ne=Y.width,Te=Y.height;for(let Ue=0;Ue<Fe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,$,ne,Te,0,ae,R,null),ne>>=1,Te>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Y.parentNode!==ne){ne.appendChild(Y),_.add(g),ne.onpaint=Te=>{const Ue=Te.changedElements;for(const de of _)Ue.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{const Ue=i.RGBA,de=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ue,de,$e,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){const ne=Pe(oe[0]);t.texStorage2D(i.TEXTURE_2D,Fe,$,ne.width,ne.height)}for(let ne=0,Te=oe.length;ne<Te;ne++)W=oe[ne],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,R,W):t.texImage2D(i.TEXTURE_2D,ne,$,ae,R,W);g.generateMipmaps=!1}else if(ie){if(re){const ne=Pe(Y);t.texStorage2D(i.TEXTURE_2D,Fe,$,ne.width,ne.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,R,Y)}else t.texImage2D(i.TEXTURE_2D,0,$,ae,R,Y);w(g)&&g.mipmapsAutoUpdate===!0&&T(ee),ce.__version=se.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Nt(y,g,B){if(g.image.length!==6)return;const ee=Je(y,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+B);const se=n.get(J);if(J.version!==se.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const ce=Ve.getPrimaries(Ve.workingColorSpace),q=g.colorSpace===zn?null:Ve.getPrimaries(g.colorSpace),Y=g.colorSpace===zn||ce===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const ae=g.isCompressedTexture||g.image[0].isCompressedTexture,R=g.image[0]&&g.image[0].isDataTexture,$=[];for(let de=0;de<6;de++)!ae&&!R?$[de]=E(g.image[de],!0,s.maxCubemapSize):$[de]=R?g.image[de].image:g.image[de],$[de]=Ae(g,$[de]);const W=$[0],oe=r.convert(g.format,g.colorSpace),ie=r.convert(g.type);let re=b(g.internalFormat,oe,ie,g.normalized,g.colorSpace);const ye=g.isVideoTexture!==!0,Fe=se.__version===void 0||ee===!0,ne=J.dataReady;let Te=S(g,W);Ke(i.TEXTURE_CUBE_MAP,g);let Ue;if(g.isDepthTexture){if(re=m(g.format===Hn,g.type),Fe)if(ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,W.width,W.height);else for(let de=0;de<6;de++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,W.width,W.height,0,oe,ie,null)}else if(ae){ye&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,re,W.width,W.height);for(let de=0;de<6;de++){Ue=$[de].mipmaps;for(let $e=0;$e<Ue.length;$e++){const gt=Ue[$e];g.format!==dn?oe!==null?ye?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,0,0,gt.width,gt.height,oe,gt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,re,gt.width,gt.height,0,gt.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,0,0,gt.width,gt.height,oe,ie,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,re,gt.width,gt.height,0,oe,ie,gt.data)}}}else{if(Ue=g.mipmaps,ye&&Fe){Ue.length>0&&Te++;const de=Pe($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,re,de.width,de.height)}for(let de=0;de<6;de++)if(R){ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,$[de].width,$[de].height,oe,ie,$[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,$[de].width,$[de].height,0,oe,ie,$[de].data);for(let $e=0;$e<Ue.length;$e++){const Ln=Ue[$e].image[de].image;ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,0,0,Ln.width,Ln.height,oe,ie,Ln.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,re,Ln.width,Ln.height,0,oe,ie,Ln.data)}}else{ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe,ie,$[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,oe,ie,$[de]);for(let $e=0;$e<Ue.length;$e++){const gt=Ue[$e];ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,0,0,oe,ie,gt.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,re,oe,ie,gt.image[de])}}}w(g)&&g.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),se.__version=J.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function it(y,g,B,ee,J,se){const ce=r.convert(B.format,B.colorSpace),q=r.convert(B.type),Y=b(B.internalFormat,ce,q,B.normalized,B.colorSpace),ae=n.get(g),R=n.get(B);if(R.__renderTarget=g,!ae.__hasExternalTextures){const $=Math.max(1,g.width>>se),W=Math.max(1,g.height>>se);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,se,Y,$,W,g.depth,0,ce,q,null):t.texImage2D(J,se,Y,$,W,0,ce,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,R.__webglTexture,0,tt(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,R.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function on(y,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const ee=g.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,se=m(g.stencilBuffer,J),ce=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(g),se,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(g),se,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,se,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,y)}else{const ee=g.textures;for(let J=0;J<ee.length;J++){const se=ee[J],ce=r.convert(se.format,se.colorSpace),q=r.convert(se.type),Y=b(se.internalFormat,ce,q,se.normalized,se.colorSpace);ue(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(g),Y,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(g),Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(y,g,B){const ee=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(g.depthTexture);J.__renderTarget=g;const se=ee?g.depthTexture.image[0]:g.depthTexture.image;(!J.__webglTexture||se.width!==g.width||se.height!==g.height)&&(se.width=g.width,se.height=g.height,g.depthTexture.needsUpdate=!0),ee?me(g.depthTexture,0):pe(g.depthTexture,0);const ce=J.__webglTexture,q=tt(g),Y=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ae=g.depthTexture.format===Hn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===kn)ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Y,ce,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Y,ce,0);else if(g.depthTexture.format===Hn)ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Y,ce,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Y,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function qt(y){const g=n.get(y),B=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const ee=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ee){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=ee}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let ee=0;ee<6;ee++)_t(g.__webglFramebuffer[ee],y,ee);else y.texture.mipmaps.length>0?_t(g.__webglFramebuffer[0],y,0):_t(g.__webglFramebuffer,y,0);else if(B){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]===void 0)g.__webglDepthbuffer[ee]=i.createRenderbuffer(),on(g.__webglDepthbuffer[ee],y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}}else if(y.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),on(g.__webglDepthbuffer,y,!1);else{const J=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(y,g,B){const ee=n.get(y);g!==void 0&&it(ee.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&qt(y)}function Kt(y){const g=y.texture,B=n.get(y),ee=n.get(g);y.addEventListener("dispose",O),N(y);const J=y.textures,se=y.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=g.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(g.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let Y=0;Y<g.mipmaps.length;Y++)B.__webglFramebuffer[q][Y]=i.createFramebuffer()}else B.__webglFramebuffer[q]=i.createFramebuffer()}else{if(g.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<g.mipmaps.length;q++)B.__webglFramebuffer[q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)for(let q=0,Y=J.length;q<Y;q++){const ae=n.get(J[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&ue(y)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<J.length;q++){const Y=J[q];B.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[q]);const ae=r.convert(Y.format,Y.colorSpace),R=r.convert(Y.type),$=b(Y.internalFormat,ae,R,Y.normalized,Y.colorSpace,y.isXRRenderTarget===!0),W=tt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,B.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),on(B.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,g);for(let q=0;q<6;q++)if(g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)it(B.__webglFramebuffer[q][Y],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Y);else it(B.__webglFramebuffer[q],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);w(g)?T(i.TEXTURE_CUBE_MAP):g.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,g.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let q=0,Y=J.length;q<Y;q++){const ae=J[q],R=n.get(ae);let $=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&($=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,R.__webglTexture),Ke($,ae),it(B.__webglFramebuffer,y,ae,i.COLOR_ATTACHMENT0+q,$,0),w(ae)&&T($)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(q=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,ee.__webglTexture),Ke(q,g),g.mipmaps.length>0)for(let Y=0;Y<g.mipmaps.length;Y++)it(B.__webglFramebuffer[Y],y,g,i.COLOR_ATTACHMENT0,q,Y);else it(B.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,q,0);w(g)?T(q):g.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,g.mipmaps.length-1),t.unbindTexture()}y.depthBuffer&&qt(y)}function L(y){const g=y.textures;for(let B=0,ee=g.length;B<ee;B++){const J=g[B];if(w(J)&&J.mipmapsAutoUpdate===!0){const se=A(y),ce=n.get(J).__webglTexture;t.bindTexture(se,ce),T(se),t.unbindTexture()}}}const $t=[];function et(y){if(y.samples>0){if(ue(y)===!1){const g=y.textures,B=y.width,ee=y.height;let J=i.COLOR_BUFFER_BIT;const se=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(y),q=g.length>1;if(q)for(let ae=0;ae<g.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<g.length;ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const R=n.get(g[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,ee,0,0,B,ee,J,i.NEAREST),c===!0&&($t.length=0,$t.push(i.COLOR_ATTACHMENT0+ae),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&$t.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<g.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const R=n.get(g[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function tt(y){return Math.min(s.maxSamples,y.samples)}function ue(y){const g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ht(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function Ae(y,g){const B=y.colorSpace,ee=y.format,J=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==Bs&&B!==zn&&(Ve.getTransfer(B)===Ze?(ee!==dn||J!==Xt)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",B)),g}function Pe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=Le,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=Me,this.setTexture2D=pe,this.setTexture2DArray=xe,this.setTexture3D=be,this.setTextureCube=me,this.rebindTextures=Yt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=ue,this.dispose=k}function Em(i,e){function t(n,s=zn){let r;const a=Ve.getTransfer(s);if(n===Xt)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_l)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fl)return i.BYTE;if(n===pl)return i.SHORT;if(n===qi)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===xl)return i.RGB;if(n===dn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Hn)return i.DEPTH_STENCIL;if(n===vl)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===ws||n===Cs||n===Ps||n===Ds)if(a===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Br||n===zr||n===Gr||n===Hr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kr||n===Vr||n===Wr||n===Xr||n===qr||n===Fs||n===Yr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kr||n===Vr)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xr)return r.COMPRESSED_R11_EAC;if(n===qr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fs)return r.COMPRESSED_RG11_EAC;if(n===Yr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kr||n===$r||n===Zr||n===Jr||n===Qr||n===jr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$r)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jr)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ca||n===ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===da||n===Os||n===fa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Os)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ll(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new si({vertexShader:ym,fragmentShader:Tm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Am extends Xn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,_=null,d=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",f=new bm,h={},E=t.getContextAttributes();let w=null,T=null;const A=[],b=[],m=new Ce;let S=null,N=null;const D=new tn;D.viewport=new rt;const I=new tn;I.viewport=new rt;const O=[D,I],V=new Uh;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let pe=A[K];return pe===void 0&&(pe=new cr,A[K]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(K){let pe=A[K];return pe===void 0&&(pe=new cr,A[K]=pe),pe.getGripSpace()},this.getHand=function(K){let pe=A[K];return pe===void 0&&(pe=new cr,A[K]=pe),pe.getHandSpace()};function Z(K){const pe=b.indexOf(K.inputSource);if(pe===-1)return;const xe=A[pe];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",te);for(let K=0;K<A.length;K++){const pe=b[K];pe!==null&&(b[K]=null,A[K].disconnect(pe))}P=null,k=null,f.reset();for(const K in h)delete h[K];if(e.setRenderTarget(w),p=null,d=null,_=null,s=null,T=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(m.width,m.height,!1),N!==null){const K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(m),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,be=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=E.stencil?Hn:kn,be=E.stencil?Ti:mn);const Ne={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};_=this.getBinding(),d=_.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new pn(d.textureWidth,d.textureHeight,{format:dn,type:Xt,depthTexture:new bi(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new pn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Xt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function te(K){for(let pe=0;pe<K.removed.length;pe++){const xe=K.removed[pe],be=b.indexOf(xe);be>=0&&(b[be]=null,A[be].disconnect(xe))}for(let pe=0;pe<K.added.length;pe++){const xe=K.added[pe];let be=b.indexOf(xe);if(be===-1){for(let Ne=0;Ne<A.length;Ne++)if(Ne>=b.length){b.push(xe),be=Ne;break}else if(b[Ne]===null){b[Ne]=xe,be=Ne;break}if(be===-1)break}const me=A[be];me&&me.connect(xe)}}function X(K,pe){pe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(pe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let pe=K.near,xe=K.far;f.texture!==null&&(f.depthNear>0&&(pe=f.depthNear),f.depthFar>0&&(xe=f.depthFar)),V.near=I.near=D.near=pe,V.far=I.far=D.far=xe,(P!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,k=V.far),V.layers.mask=K.layers.mask|6,D.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;const be=K.parent,me=V.cameras;X(V,be);for(let Ne=0;Ne<me.length;Ne++)X(me[Ne],be);V.projectionMatrix.copy(D.projectionMatrix),V.projectionMatrixInverse.copy(D.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,V,be)};function Q(K,pe,xe){xe===null?K.matrix.copy(pe.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(pe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(pe.projectionMatrix),K.projectionMatrixInverse.copy(pe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ma*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(V)},this.getCameraTexture=function(K){return h[K]};let j=null;function Me(K,pe){if(u=pe.getViewerPose(l||a),v=pe,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let be=!1;xe.length!==V.cameras.length&&(V.cameras.length=0,be=!0);for(let Re=0;Re<xe.length;Re++){const Ke=xe[Re];let Je=null;if(p!==null)Je=p.getViewport(Ke);else{const St=_.getViewSubImage(d,Ke);Je=St.viewport,Re===0&&(e.setRenderTargetTextures(T,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(T))}let Ge=O[Re];Ge===void 0&&(Ge=new tn,Ge.layers.enable(Re),Ge.viewport=new rt,O[Re]=Ge),Ge.matrix.fromArray(Ke.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ke.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Je.x,Je.y,Je.width,Je.height),Re===0&&(V.matrix.copy(Ge.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),be===!0&&V.cameras.push(Ge)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){_=n.getBinding();const Re=_.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&f.init(Re,s.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),_=n.getBinding();for(let Re=0;Re<xe.length;Re++){const Ke=xe[Re].camera;if(Ke){let Je=h[Ke];Je||(Je=new Ll,h[Ke]=Je);const Ge=_.getCameraImage(Ke);Je.sourceTexture=Ge}}}}for(let xe=0;xe<A.length;xe++){const be=b[xe],me=A[xe];be!==null&&me!==void 0&&me.update(be,pe,l||a)}j&&j(K,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),v=null}const Le=new Ol;Le.setAnimationLoop(Me),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}}const Rm=new nt,Yl=new De;Yl.set(-1,0,0,0,1,0,0,0,1);function wm(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Il(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,E,w,T){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(f,h):h.isMeshLambertMaterial?(r(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(f,h),_(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(f,h),d(f,h),h.isMeshPhysicalMaterial&&p(f,h,T)):h.isMeshMatcapMaterial?(r(f,h),v(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),M(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?c(f,h,E,w):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===zt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===zt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const E=e.get(h),w=E.envMap,T=E.envMapRotation;w&&(f.envMap.value=w,f.envMapRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(T)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Yl),f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,E,w){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*E,f.scale.value=w*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function _(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function p(f,h,E){f.ior.value=h.ior,h.diffuseRoughness>0&&(f.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===zt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.retroreflectivity>0&&(f.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function v(f,h){h.matcap&&(f.matcap.value=h.matcap)}function M(f,h){const E=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cm(i,e,t,n){let s={},r={};function a(E,w){const T=w.program;n.uniformBlockBinding(E,T,s[E.id])}function o(E,w){let T=s[E.id];T===void 0&&(v(E),T=c(E),s[E.id]=T,E.addEventListener("dispose",f));const A=w.program;n.updateUBOMapping(E,A);const b=e.render.frame;r[E.id]!==b&&(l(E),r[E.id]=b)}function c(E){const w=i.createBuffer(),T=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(E){const w=s[E.id],T=E.uniforms,A=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,m=T.length;b<m;b++){const S=T[b];if(Array.isArray(S))for(let N=0,D=S.length;N<D;N++)u(S[N],b,N,A);else u(S,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,w,T,A){if(d(E,w,T,A)===!0){const b=E.__offset,m=E.value;if(Array.isArray(m)){let S=0;for(let N=0;N<m.length;N++){const D=m[N],I=M(D,!0);_(D,E.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else _(m,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,E.__data)}}function _(E,w,T){typeof E=="number"||typeof E=="boolean"?w[T]=E:E.isMatrix3?(w[T]=E.elements[0],w[T+1]=E.elements[1],w[T+2]=E.elements[2],w[T+3]=0,w[T+4]=E.elements[3],w[T+5]=E.elements[4],w[T+6]=E.elements[5],w[T+7]=0,w[T+8]=E.elements[6],w[T+9]=E.elements[7],w[T+10]=E.elements[8],w[T+11]=0):ArrayBuffer.isView(E)?w.set(E.subarray(0,w.length-T),T):E.toArray(w,T)}function d(E,w,T,A){const b=E.value,m=w+"_"+T;if(Array.isArray(b)){A[m]===void 0&&(A[m]=[]);const S=A[m];let N=!1;for(let D=0;D<b.length;D++)p(b[D],S,D)===!0&&(N=!0);return N}return p(b,A,m)}function p(E,w,T){if(w[T]===void 0)return typeof E=="number"||typeof E=="boolean"?w[T]=E:ArrayBuffer.isView(E)?w[T]=E.slice():w[T]=E.clone(),!0;{const A=w[T];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return w[T]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(A.equals(E)===!1)return A.copy(E),!0}}return!1}function v(E){const w=E.uniforms;let T=0;const A=16;for(let m=0,S=w.length;m<S;m++){const N=Array.isArray(w[m])?w[m]:[w[m]];for(let D=0,I=N.length;D<I;D++){const O=N[D],V=Array.isArray(O.value)?O.value:[O.value],P=Array.isArray(w[m])||Array.isArray(O.value);let k=T;for(let G=0,te=V.length;G<te;G++){const X=V[G],Q=M(X,P),j=T%A,Me=j%Q.boundary,Le=j+Me;T+=Me,Le!==0&&A-Le<Q.storage&&(T+=A-Le),G===0&&(k=T),T+=Q.storage}const Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((T-k)/Float32Array.BYTES_PER_ELEMENT),O.__offset=k}}const b=T%A;return b>0&&(T+=A-b),E.__size=T,E.__cache={},this}function M(E,w){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=16,T.storage=48):E.isMatrix4?(T.boundary=16,T.storage=64):E.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(T.boundary=16,T.storage=E.byteLength):we("WebGLRenderer: Unsupported uniform value type.",E),w===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function f(E){const w=E.target;w.removeEventListener("dispose",f),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function h(){for(const E in s)i.deleteBuffer(s[E]);s={},r={}}return{bind:a,update:o,dispose:h}}const Pm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cn=null;function Dm(){return cn===null&&(cn=new Sh(Pm,16,16,ni,_n),cn.name="DFG_LUT",cn.minFilter=Bt,cn.magFilter=Bt,cn.wrapS=Rn,cn.wrapT=Rn,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}class Lm{constructor(e={}){const{canvas:t=Wc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Xt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const M=p,f=new Set([ba,Ta,ya]),h=new Set([Xt,mn,qi,Ti,Ma,Ea]),E=new Uint32Array(4),w=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]};let A=null,b=null;const m=[],S=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1,O=null,V=null,P=null,k=null;this._outputColorSpace=kt;let Z=0,G=0,te=null,X=-1,Q=null;const j=new rt,Me=new rt;let Le=null;const K=new Be(0);let pe=0,xe=t.width,be=t.height,me=1,Ne=null,at=null;const Re=new rt(0,0,xe,be),Ke=new rt(0,0,xe,be);let Je=!1;const Ge=new Ki,St=new Pa;let ct=!1,Nt=!1;const it=new nt,on=new U,_t=new rt,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Kt(){return te===null?me:1}let L=n;function $t(x,C){return t.getContext(x,C)}let et,tt,ue,ht,Ae,Pe,y,g,B,ee,J,se,ce,q,Y,ae,R,$,W,oe,ie,re,ye;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${va}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){const C="webgl2";if(L=$t(C,x),L===null)throw $t(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(x){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",de,!1),qe("WebGLRenderer: "+x.message),x}function Fe(){et=new Uf(L),et.init(),ie=new Em(L,et),tt=new Tf(L,et,e,ie),ue=new Sm(L,et),tt.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),V=L.createFramebuffer(),P=L.createFramebuffer(),k=L.createFramebuffer(),ht=new Bf(L),Ae=new am,Pe=new Mm(L,et,ue,Ae,tt,ie,ht),y=new Nf(D),g=new zh(L),re=new Ef(L,g),B=new Ff(L,g,ht,re),ee=new Gf(L,B,g,re,ht),$=new zf(L,tt,Pe),Y=new bf(Ae),J=new rm(D,y,et,tt,re,Y),se=new wm(D,Ae),ce=new lm,q=new pm(et),R=new Mf(D,y,ue,ee,v,c),ae=new vm(D,ee,tt),ye=new Cm(L,ht,tt,ue),W=new yf(L,et,ht),oe=new Of(L,et,ht),ht.programs=J.programs,D.capabilities=tt,D.extensions=et,D.properties=Ae,D.renderLists=ce,D.shadowMap=ae,D.state=ue,D.info=ht}M!==Xt&&(N=new kf(M,t.width,t.height,o,s,r));const ne=new Am(D,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const x=et.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=et.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(x){x!==void 0&&(me=x,this.setSize(xe,be,!1))},this.getSize=function(x){return x.set(xe,be)},this.setSize=function(x,C,H=!0){if(ne.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=x,be=C,t.width=Math.floor(x*me),t.height=Math.floor(C*me),H===!0&&(t.style.width=x+"px",t.style.height=C+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(xe*me,be*me).floor()},this.setDrawingBufferSize=function(x,C,H){xe=x,be=C,me=H,t.width=Math.floor(x*H),t.height=Math.floor(C*H),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(M===Xt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(j)},this.getViewport=function(x){return x.copy(Re)},this.setViewport=function(x,C,H,F){x.isVector4?Re.set(x.x,x.y,x.z,x.w):Re.set(x,C,H,F),ue.viewport(j.copy(Re).multiplyScalar(Kt()).round())},this.getScissor=function(x){return x.copy(Ke)},this.setScissor=function(x,C,H,F){x.isVector4?Ke.set(x.x,x.y,x.z,x.w):Ke.set(x,C,H,F),ue.scissor(Me.copy(Ke).multiplyScalar(Kt()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(x){ue.setScissorTest(Je=x)},this.setOpaqueSort=function(x){Ne=x},this.setTransparentSort=function(x){at=x},this.getClearColor=function(x){return x.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,H=!0){let F=0;if(x){let z=!1;if(te!==null){const he=te.texture.format;z=f.has(he)}if(z){const he=te.texture.type,ge=h.has(he),le=R.getClearColor(),_e=R.getClearAlpha(),Ee=le.r,Ie=le.g,He=le.b;ge?(E[0]=Ee,E[1]=Ie,E[2]=He,E[3]=_e,L.clearBufferuiv(L.COLOR,0,E)):(w[0]=Ee,w[1]=Ie,w[2]=He,w[3]=_e,L.clearBufferiv(L.COLOR,0,w))}else F|=L.COLOR_BUFFER_BIT}C&&(F|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",de,!1),R.dispose(),ce.dispose(),q.dispose(),Pe.dispose(),Ae.dispose(),y.dispose(),ee.dispose(),B.dispose(),re.dispose(),ye.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",za),ne.removeEventListener("sessionend",Ga),qn.stop()};function Te(x){x.preventDefault(),to("WebGLRenderer: Context Lost."),I=!0}function Ue(){to("WebGLRenderer: Context Restored."),I=!1;const x=ht.autoReset,C=ae.enabled,H=ae.autoUpdate,F=ae.needsUpdate,z=ae.type;Fe(),ht.autoReset=x,ae.enabled=C,ae.autoUpdate=H,ae.needsUpdate=F,ae.type=z}function de(x){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $e(x){const C=x.target;C.removeEventListener("dispose",$e),gt(C)}function gt(x){Ln(x),Ae.remove(x)}function Ln(x){const C=Ae.get(x).programs;C!==void 0&&(C.forEach(function(H){J.releaseProgram(H)}),x.isShaderMaterial&&J.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,H,F,z,he){C===null&&(C=qt);const ge=z.isMesh&&z.matrixWorld.determinantAffine()<0,le=oc(x,C,H,F,z);ue.setMaterial(F,ge);let _e=H.index,Ee=1;if(F.wireframe===!0){if(_e=B.getWireframeAttribute(H),_e===void 0)return;Ee=2}const Ie=H.drawRange,He=H.attributes.position;let ve=Ie.start*Ee,ke=(Ie.start+Ie.count)*Ee;he!==null&&(ve=Math.max(ve,he.start*Ee),ke=Math.min(ke,(he.start+he.count)*Ee)),_e!==null?(ve=Math.max(ve,0),ke=Math.min(ke,_e.count)):He!=null&&(ve=Math.max(ve,0),ke=Math.min(ke,He.count));const ot=ke-ve;if(ot<0||ot===1/0)return;re.setup(z,F,le,H,_e);let je,Qe=W;if(_e!==null&&(je=g.get(_e),Qe=oe,Qe.setIndex(je)),z.isMesh)F.wireframe===!0?(ue.setLineWidth(F.wireframeLinewidth*Kt()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(z.isLine){let bt=F.linewidth;bt===void 0&&(bt=1),ue.setLineWidth(bt*Kt()),z.isLineSegments?Qe.setMode(L.LINES):z.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else z.isPoints?Qe.setMode(L.POINTS):z.isSprite&&Qe.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(et.get("WEBGL_multi_draw"))Qe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const bt=z._multiDrawStarts,Se=z._multiDrawCounts,Ct=z._multiDrawCount,Xe=_e?g.get(_e).bytesPerElement:1,Yn=Ae.get(F).currentProgram.getUniforms();for(let At=0;At<Ct;At++)Yn.setValue(L,"_gl_DrawID",At),Qe.render(bt[At]/Xe,Se[At])}else if(z.isInstancedMesh)Qe.renderInstances(ve,ot,z.count);else if(H.isInstancedBufferGeometry){const bt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,bt);Qe.renderInstances(ve,ot,Se)}else Qe.render(ve,ot)};function Ba(x,C,H,F){O!==null&&x.isNodeMaterial&&O.setObject(F,x),ct===!0&&Y.setState(x,H,!1),x.transparent===!0&&x.side===An&&x.forceSinglePass===!1?(x.side=zt,x.needsUpdate=!0,Di(x,C,F),x.side=ti,x.needsUpdate=!0,Di(x,C,F),x.side=An):Di(x,C,F)}this.compile=function(x,C,H=null){H===null&&(H=x),O!==null&&O.renderStart(x,C,H),b=q.get(H),b.init(C),S.push(b),H.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),x!==H&&x.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),Nt=this.localClippingEnabled,ct=Y.init(this.clippingPlanes,Nt),ct===!0&&Y.setGlobalState(this.clippingPlanes,C),O!==null&&ae.render(b.state.shadowsArray,H,C);const F=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let ge=0;ge<he.length;ge++){const le=he[ge];Ba(le,H,C,z),F.add(le)}else Ba(he,H,C,z),F.add(he)}),b=S.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(x,C,H=null){const F=this.compile(x,C,H);return new Promise(z=>{function he(){if(F.forEach(function(ge){const _e=Ae.get(ge).currentProgram;(_e===void 0||_e.isReady())&&F.delete(ge)}),F.size===0){z(x);return}setTimeout(he,10)}et.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Js=null;function rc(x){Js&&Js(x)}function za(){qn.stop()}function Ga(){qn.start()}const qn=new Ol;qn.setAnimationLoop(rc),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(x){Js=x,ne.setAnimationLoop(x),x===null?qn.stop():qn.start()},ne.addEventListener("sessionstart",za),ne.addEventListener("sessionend",Ga),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(x,C);const H=ne.enabled===!0&&ne.isPresenting===!0,F=N!==null&&(te===null||H)&&N.begin(D,te);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(C),C=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(D,x,C,te),b=q.get(x,S.length),b.init(C),b.state.textureUnits=Pe.getTextureUnits(),S.push(b),it.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?St.setFromArrayCamera(C):Ge.setFromProjectionMatrix(it,sn,C.reversedDepth),Nt=this.localClippingEnabled,ct=Y.init(this.clippingPlanes,Nt),A=ce.get(x,m.length),A.init(),m.push(A),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const ge=D.xr.getDepthSensingMesh();ge!==null&&Qs(ge,C,-1/0,D.sortObjects)}Qs(x,C,0,D.sortObjects),A.finish(),O!==null&&O.updateLights(b.state.lightsArray),D.sortObjects===!0&&A.sort(Ne,at),Yt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Yt&&R.addToRenderList(A,x),this.info.autoReset===!0&&this.info.reset(),ct===!0&&Y.beginShadows();const z=b.state.shadowsArray;if(ae.render(z,x,C),ct===!0&&Y.endShadows(),(F&&N.hasRenderPass())===!1){const ge=A.opaque,le=A.transmissive;if(b.setupLights(),C.isArrayCamera){const _e=C.cameras;if(le.length>0)for(let Ee=0,Ie=_e.length;Ee<Ie;Ee++){const He=_e[Ee];ka(ge,le,x,He)}Yt&&R.render(x);for(let Ee=0,Ie=_e.length;Ee<Ie;Ee++){const He=_e[Ee];Ha(A,x,He,He.viewport)}}else le.length>0&&ka(ge,le,x,C),Yt&&R.render(x),Ha(A,x,C)}te!==null&&G===0&&(Pe.updateMultisampleRenderTarget(te),Pe.updateRenderTargetMipmap(te)),F&&N.end(D),x.isScene===!0&&x.onAfterRender(D,x,C),re.resetDefaultState(),X=-1,Q=null,S.pop(),S.length>0?(b=S[S.length-1],Pe.setTextureUnits(b.state.textureUnits),ct===!0&&Y.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,m.pop(),m.length>0?A=m[m.length-1]:A=null,O!==null&&O.renderEnd()};function Qs(x,C,H,F){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)b.pushLight(x),x.castShadow&&b.pushShadow(x);else if(x.isSprite){const ge=C.isArrayCamera?St:Ge;if(!x.frustumCulled||x.intersectsFrustum(ge)){F&&_t.setFromMatrixPosition(x.matrixWorld).applyMatrix4(it);const le=ee.update(x),_e=x.material;_e.visible&&A.push(x,le,_e,H,_t.z,null,C)}}else if(x.isMesh||x.isLine||x.isPoints){const ge=C.isArrayCamera?St:Ge;if(!x.frustumCulled||x.intersectsFrustum(ge)){const le=ee.update(x),_e=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),_t.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),_t.copy(le.boundingSphere.center)),_t.applyMatrix4(x.matrixWorld).applyMatrix4(it)),Array.isArray(_e)){const Ee=le.groups;for(let Ie=0,He=Ee.length;Ie<He;Ie++){const ve=Ee[Ie],ke=_e[ve.materialIndex];ke&&ke.visible&&A.push(x,le,ke,H,_t.z,ve,C)}}else _e.visible&&A.push(x,le,_e,H,_t.z,null,C)}}}const he=x.children;for(let ge=0,le=he.length;ge<le;ge++)Qs(he[ge],C,H,F)}function Ha(x,C,H,F){const{opaque:z,transmissive:he,transparent:ge}=x;b.setupLightsView(H),ct===!0&&Y.setGlobalState(D.clippingPlanes,H),F&&ue.viewport(j.copy(F)),z.length>0&&es(z,C,H),he.length>0&&es(he,C,H),ge.length>0&&es(ge,C,H),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function ka(x,C,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[F.id]===void 0){const ve=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[F.id]=new pn(1,1,{generateMipmaps:!0,type:ve?_n:Xt,minFilter:Gn,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const he=b.state.transmissionRenderTarget[F.id],ge=F.viewport||j;he.setSize(ge.z*D.transmissionResolutionScale,ge.w*D.transmissionResolutionScale);const le=D.getRenderTarget(),_e=D.getActiveCubeFace(),Ee=D.getActiveMipmapLevel();D.setRenderTarget(he),D.getClearColor(K),pe=D.getClearAlpha(),pe<1&&D.setClearColor(16777215,.5),D.clear(),Yt&&R.render(H);const Ie=D.toneMapping;D.toneMapping=wn;const He=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),b.setupLightsView(F),ct===!0&&Y.setGlobalState(D.clippingPlanes,F),es(x,H,F),Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he),et.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let ke=0,ot=C.length;ke<ot;ke++){const je=C[ke],{object:Qe,geometry:bt,material:Se,group:Ct}=je;if(Se.side===An&&Qe.layers.test(F.layers)){const Xe=Se.side;Se.side=zt,Se.needsUpdate=!0,Va(Qe,H,F,bt,Se,Ct),Se.side=Xe,Se.needsUpdate=!0,ve=!0}}ve===!0&&(Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he))}D.setRenderTarget(le,_e,Ee),D.setClearColor(K,pe),He!==void 0&&(F.viewport=He),D.toneMapping=Ie}function es(x,C,H){const F=C.isScene===!0?C.overrideMaterial:null;for(let z=0,he=x.length;z<he;z++){const ge=x[z],{object:le,geometry:_e,group:Ee}=ge;let Ie=ge.material;Ie.allowOverride===!0&&F!==null&&(Ie=F),le.layers.test(H.layers)&&Va(le,C,H,_e,Ie,Ee)}}function Va(x,C,H,F,z,he){O!==null&&z.isNodeMaterial&&O.setObject(x,z),x.onBeforeRender(D,C,H,F,z,he),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(D,C,H,F,x,he),z.transparent===!0&&z.side===An&&z.forceSinglePass===!1?(z.side=zt,z.needsUpdate=!0,D.renderBufferDirect(H,C,F,z,x,he),z.side=ti,z.needsUpdate=!0,D.renderBufferDirect(H,C,F,z,x,he),z.side=An):D.renderBufferDirect(H,C,F,z,x,he),x.onAfterRender(D,C,H,F,z,he)}function Wa(x){let C=0;for(const H of x)H.texture!==null&&C++;return C}function Di(x,C,H){C.isScene!==!0&&(C=qt);const F=Ae.get(x),z=b.state.lights,he=b.state.shadowsArray,ge=z.state.version,le=J.getParameters(x,z.state,he,C,H,b.state.lightProbeGridArray),_e=J.getProgramCacheKey(le);let Ee=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,F.fog=C.fog;const Ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=y.get(x.envMap||F.environment,Ie),F.envMapRotation=F.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,Ee===void 0&&(x.addEventListener("dispose",$e),Ee=new Map,F.programs=Ee,F.programVariants=new Map);let He=Ee.get(_e);if(He!==void 0){if(F.currentProgram===He&&F.lightsStateVersion===ge)return qa(x,le),He}else le.uniforms=J.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,H,le),x.onBeforeCompile(le,D),He=J.acquireProgram(le,_e),Ee.set(_e,He),F.uniforms=le.uniforms;const ve=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ve.clippingPlanes=Y.uniform),qa(x,le),F.needsLights=cc(x),F.lightsStateVersion=ge,F.needsLights&&(ve.ambientLightColor.value=z.state.ambient,ve.lightProbe.value=z.state.probe,ve.sunLights.value=z.state.sun,ve.sunLightShadows.value=z.state.sunShadow,ve.directionalLights.value=z.state.directional,ve.directionalLightShadows.value=z.state.directionalShadow,ve.spotLights.value=z.state.spot,ve.spotLightShadows.value=z.state.spotShadow,ve.rectAreaLights.value=z.state.rectArea,ve.ltc_1.value=z.state.rectAreaLTC1,ve.ltc_2.value=z.state.rectAreaLTC2,ve.pointLights.value=z.state.point,ve.pointLightShadows.value=z.state.pointShadow,ve.hemisphereLights.value=z.state.hemi,ve.sunShadowMatrix.value=z.state.sunShadowMatrix,ve.sunShadowCascade.value=z.state.sunShadowCascade,ve.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ve.spotLightMatrix.value=z.state.spotLightMatrix,ve.spotLightMap.value=z.state.spotLightMap,ve.pointShadowMatrix.value=z.state.pointShadowMatrix),F.numLightProbeGrids=Wa(b.state.lightProbeGridArray),F.currentProgram=He,F.uniformsList=null,He}function ac(x,C,H,F,z){const he=Ae.get(x),ge=he.currentProgram.id+","+F+","+z;let le=he.programVariants.get(ge);return le===void 0?(le=Di(x,C,H),he.programVariants.set(ge,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=F,he.toneMapping=z),le}function Xa(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=Ns.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function qa(x,C){const H=Ae.get(x);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function oc(x,C,H,F,z){C.isScene!==!0&&(C=qt),Pe.resetTextureUnits();const he=C.fog,ge=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?C.environment:null,le=te===null?D.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ve.workingColorSpace,_e=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ee=y.get(F.envMap||ge,_e),Ie=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ve=!!H.morphAttributes.position,ke=!!H.morphAttributes.normal,ot=!!H.morphAttributes.color;let je=wn;F.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(je=D.toneMapping);const Qe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,bt=Qe!==void 0?Qe.length:0,Se=Ae.get(F),Ct=b.state.lights;if(ct===!0&&(Nt===!0||x!==Q)){const st=x===Q&&F.id===X;Y.setState(F,x,st)}let Xe=!1,Yn=!1;F.version===Se.__version?Se.needsLights&&Se.lightsStateVersion!==Ct.state.version||z.isBatchedMesh&&Se.batching===!1||!z.isBatchedMesh&&Se.batching===!0||z.isBatchedMesh&&Se.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Se.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Se.instancing===!1||!z.isInstancedMesh&&Se.instancing===!0||z.isSkinnedMesh&&Se.skinning===!1||!z.isSkinnedMesh&&Se.skinning===!0||z.isInstancedMesh&&Se.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Se.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Se.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Se.instancingMorph===!1&&z.morphTexture!==null||Se.envMap!==Ee||F.fog===!0&&Se.fog!==he||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Y.numPlanes||Se.numIntersection!==Y.numIntersection)||Se.vertexAlphas!==Ie||Se.vertexTangents!==He||Se.morphTargets!==ve||Se.morphNormals!==ke||Se.morphColors!==ot||Se.morphTargetsCount!==bt||Se.numLightProbeGrids!==Wa(b.state.lightProbeGridArray)?Xe=!0:(Se.outputColorSpace!==le||Se.toneMapping!==je)&&(Yn=!0):(Xe=!0,Se.__version=F.version);let At=Se.currentProgram;(Xe===!0||Yn===!0)&&(At=Yn===!0?ac(F,C,z,le,je):Di(F,C,z),O&&F.isNodeMaterial&&O.onUpdateProgram(F,At,Se));let ts=!1,In=!1,Kn=!1;const We=At.getUniforms(),Mt=Se.uniforms;if(ue.useProgram(At.program)&&(ts=!0,In=!0,Kn=!0),F.id!==X&&(X=F.id,In=!0),ts||Q!==x){ue.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),We.setValue(L,"projectionMatrix",x.projectionMatrix),We.setValue(L,"viewMatrix",x.matrixWorldInverse);const xt=We.map.cameraPosition;xt!==void 0&&xt.setValue(L,on.setFromMatrixPosition(x.matrixWorld)),tt.logarithmicDepthBuffer&&We.setValue(L,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&We.setValue(L,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,In=!0,Kn=!0)}if(Se.needsLights&&(Ct.state.sunShadowMap.length>0&&We.setValue(L,"sunShadowMap",Ct.state.sunShadowMap,Pe),Ct.state.directionalShadowMap.length>0&&We.setValue(L,"directionalShadowMap",Ct.state.directionalShadowMap,Pe),Ct.state.spotShadowMap.length>0&&We.setValue(L,"spotShadowMap",Ct.state.spotShadowMap,Pe),Ct.state.pointShadowMap.length>0&&We.setValue(L,"pointShadowMap",Ct.state.pointShadowMap,Pe)),z.isSkinnedMesh){We.setOptional(L,z,"bindMatrix"),We.setOptional(L,z,"bindMatrixInverse");const st=z.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),We.setValue(L,"boneTexture",st.boneTexture,Pe))}z.isBatchedMesh&&(We.setOptional(L,z,"batchingTexture"),We.setValue(L,"batchingTexture",z._matricesTexture,Pe),We.setOptional(L,z,"batchingIdTexture"),We.setValue(L,"batchingIdTexture",z._indirectTexture,Pe),We.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&We.setValue(L,"batchingColorTexture",z._colorsTexture,Pe));const Jt=H.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&$.update(z,H,At),(In||Se.receiveShadow!==z.receiveShadow)&&(Se.receiveShadow=z.receiveShadow,We.setValue(L,"receiveShadow",z.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&C.environment!==null&&(Mt.envMapIntensity.value=C.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=Dm()),In){if(We.setValue(L,"toneMappingExposure",D.toneMappingExposure),Se.needsLights&&lc(Mt,Kn),he&&F.fog===!0&&se.refreshFogUniforms(Mt,he),se.refreshMaterialUniforms(Mt,F,me,be,b.state.transmissionRenderTarget[x.id]),Se.needsLights&&Se.numLightProbeGrids>0){const st=T;let xt=0;for(const gn of b.state.lightProbeGridArray)gn.texture!==null&&(st.textures[xt]=gn.texture,st.min[xt]=gn.boundingBox.min,st.max[xt]=gn.boundingBox.max,st.resolution[xt]=gn.resolution,xt++);for(const gn in st)st[gn].length=xt;Mt.probesSH.value=st.textures,Mt.probesMin.value=st.min,Mt.probesMax.value=st.max,Mt.probesResolution.value=st.resolution}Ns.upload(L,Xa(Se),Mt,Pe)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ns.upload(L,Xa(Se),Mt,Pe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&We.setValue(L,"center",z.center),We.setValue(L,"modelViewMatrix",z.modelViewMatrix),We.setValue(L,"normalMatrix",z.normalMatrix),We.setValue(L,"modelMatrix",z.matrixWorld),F.uniformsGroups!==void 0){const st=F.uniformsGroups;for(let xt=0,gn=st.length;xt<gn;xt++){const Ka=st[xt];ye.update(Ka,At),ye.bind(Ka,At)}}return At}function lc(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function cc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(x,C,H){const F=Ae.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Ae.get(x.texture).__webglTexture=C,Ae.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const H=Ae.get(x);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,H=0){te=x,Z=C,G=H;let F=null,z=!1,he=!1;if(x){const le=Ae.get(x);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(L.FRAMEBUFFER,le.__webglFramebuffer),j.copy(x.viewport),Me.copy(x.scissor),Le=x.scissorTest,ue.viewport(j),ue.scissor(Me),ue.setScissorTest(Le),X=-1;return}else if(le.__webglFramebuffer===void 0)Pe.setupRenderTarget(x);else if(le.__hasExternalTextures)Pe.rebindTextures(x,Ae.get(x.texture).__webglTexture,Ae.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ie=x.depthTexture;if(le.__boundDepthTexture!==Ie){if(Ie!==null&&Ae.has(Ie)&&(x.width!==Ie.image.width||x.height!==Ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(x)}}const _e=x.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(he=!0);const Ee=Ae.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ee[C])?F=Ee[C][H]:F=Ee[C],z=!0):x.samples>0&&Pe.useMultisampledRTT(x)===!1?F=Ae.get(x).__webglMultisampledFramebuffer:Array.isArray(Ee)?F=Ee[H]:F=Ee,j.copy(x.viewport),Me.copy(x.scissor),Le=x.scissorTest}else j.copy(Re).multiplyScalar(me).floor(),Me.copy(Ke).multiplyScalar(me).floor(),Le=Je;if(H!==0&&(F=V),ue.bindFramebuffer(L.FRAMEBUFFER,F)&&ue.drawBuffers(x,F),ue.viewport(j),ue.scissor(Me),ue.setScissorTest(Le),z){const le=Ae.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,le.__webglTexture,H)}else if(he){const le=C;for(let _e=0;_e<x.textures.length;_e++){const Ee=Ae.get(x.textures[_e]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_e,Ee.__webglTexture,H,le)}}else if(x!==null&&H!==0){const le=Ae.get(x.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,le.__webglTexture,H)}X=-1};function Ya(x){const C=Ae.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=tt.textureFormatReadable(x.format),C.__typeReadable=tt.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,H,F,z,he,ge,le=0){if(!(x&&x.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge],Array.isArray(_e)&&(_e=_e[0])),_e){ue.bindFramebuffer(L.FRAMEBUFFER,_e);try{const Ee=x.textures[le],Ie=Ee.format,He=Ee.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);const ve=Ya(Ee);if(ve.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ve.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-F&&H>=0&&H<=x.height-z&&L.readPixels(C,H,F,z,ie.convert(Ie),ie.convert(He),he)}finally{const Ee=te!==null?Ae.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(x,C,H,F,z,he,ge,le=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ae.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge],Array.isArray(_e)&&(_e=_e[0])),_e)if(C>=0&&C<=x.width-F&&H>=0&&H<=x.height-z){ue.bindFramebuffer(L.FRAMEBUFFER,_e);const Ee=x.textures[le],Ie=Ee.format,He=Ee.type;x.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);const ve=Ya(Ee);if(ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(C,H,F,z,ie.convert(Ie),ie.convert(He),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const ot=te!==null?Ae.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,ot);const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xc(L,je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ke),L.deleteSync(je),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,H=0){const F=Math.pow(2,-H),z=Math.floor(x.image.width*F),he=Math.floor(x.image.height*F),ge=C!==null?C.x:0,le=C!==null?C.y:0;Pe.setTexture2D(x,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ge,le,z,he),ue.unbindTexture()},this.copyTextureToTexture=function(x,C,H=null,F=null,z=0,he=0){let ge,le,_e,Ee,Ie,He,ve,ke,ot;const je=x.isCompressedTexture?x.mipmaps[he]:x.image;if(H!==null)ge=H.max.x-H.min.x,le=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,Ie=H.min.y,He=H.isBox3?H.min.z:0;else{const We=Math.pow(2,-z);ge=Math.floor(je.width*We),le=Math.floor(je.height*We),x.isDataArrayTexture?_e=je.depth:x.isData3DTexture?_e=Math.floor(je.depth*We):_e=1,Ee=0,Ie=0,He=0}F!==null?(ve=F.x,ke=F.y,ot=F.z):(ve=0,ke=0,ot=0);const Qe=ie.convert(C.format),bt=ie.convert(C.type);let Se;C.isData3DTexture?(Pe.setTexture3D(C,0),Se=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Pe.setTexture2DArray(C,0),Se=L.TEXTURE_2D_ARRAY):(Pe.setTexture2D(C,0),Se=L.TEXTURE_2D),ue.activeTexture(L.TEXTURE0),ue.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),ue.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),ue.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);const Ct=ue.getParameter(L.UNPACK_ROW_LENGTH),Xe=ue.getParameter(L.UNPACK_IMAGE_HEIGHT),Yn=ue.getParameter(L.UNPACK_SKIP_PIXELS),At=ue.getParameter(L.UNPACK_SKIP_ROWS),ts=ue.getParameter(L.UNPACK_SKIP_IMAGES);ue.pixelStorei(L.UNPACK_ROW_LENGTH,je.width),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je.height),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),ue.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,He);const In=x.isDataArrayTexture||x.isData3DTexture,Kn=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const We=Ae.get(x),Mt=Ae.get(C),Jt=Ae.get(We.__renderTarget),st=Ae.get(Mt.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let xt=0;xt<_e;xt++)In&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(x).__webglTexture,z,He+xt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(C).__webglTexture,he,ot+xt)),L.blitFramebuffer(Ee,Ie,Ee+ge,Ie+le,ve,ke,ve+ge,ke+le,L.DEPTH_BUFFER_BIT,L.NEAREST);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||Ae.has(x)){const We=Ae.get(x),Mt=Ae.get(C);ue.bindFramebuffer(L.READ_FRAMEBUFFER,P),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let Jt=0;Jt<_e;Jt++)In?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,We.__webglTexture,z,He+Jt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,We.__webglTexture,z),Kn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,he,ot+Jt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,he),z!==0?L.blitFramebuffer(Ee,Ie,Ee+ge,Ie+le,ve,ke,ve+ge,ke+le,L.COLOR_BUFFER_BIT,L.NEAREST):Kn?L.copyTexSubImage3D(Se,he,ve,ke,ot+Jt,Ee,Ie,ge,le):L.copyTexSubImage2D(Se,he,ve,ke,Ee,Ie,ge,le);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kn?x.isDataTexture||x.isData3DTexture?L.texSubImage3D(Se,he,ve,ke,ot,ge,le,_e,Qe,bt,je.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,he,ve,ke,ot,ge,le,_e,Qe,je.data):L.texSubImage3D(Se,he,ve,ke,ot,ge,le,_e,Qe,bt,je):x.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,ve,ke,ge,le,Qe,bt,je.data):x.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,ve,ke,je.width,je.height,Qe,je.data):L.texSubImage2D(L.TEXTURE_2D,he,ve,ke,ge,le,Qe,bt,je);ue.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Yn),ue.pixelStorei(L.UNPACK_SKIP_ROWS,At),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,ts),he===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&L.generateMipmap(Se),ue.unbindTexture()},this.initRenderTarget=function(x){Ae.get(x).__webglFramebuffer===void 0&&Pe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Pe.setTextureCube(x,0):x.isData3DTexture?Pe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Pe.setTexture2DArray(x,0):Pe.setTexture2D(x,0),ue.unbindTexture()},this.resetState=function(){Z=0,G=0,te=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}const Jo={type:"change"},La={type:"start"},Kl={type:"end"},As=new Ca,Qo=new yn,Im=Math.cos(70*Jc.DEG2RAD),ut=new U,Ut=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wr=1e-6;class Nm extends Oh{constructor(e,t=null){super(e,t),this.state=Ye.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Vn,this._lastTargetPosition=new U,this._quat=new Vn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wo,this._sphericalDelta=new wo,this._scale=1,this._panOffset=new U,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new U,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Fm.bind(this),this._onPointerDown=Um.bind(this),this._onPointerUp=Om.bind(this),this._onContextMenu=Wm.bind(this),this._onMouseWheel=Gm.bind(this),this._onKeyDown=Hm.bind(this),this._onTouchStart=km.bind(this),this._onTouchMove=Vm.bind(this),this._onMouseDown=Bm.bind(this),this._onMouseMove=zm.bind(this),this._interceptControlDown=Xm.bind(this),this._interceptControlUp=qm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ye.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jo),this.update(),this.state=Ye.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;ut.copy(t).sub(this.target),ut.applyQuaternion(this._quat),this._spherical.setFromVector3(ut),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ut:n>Math.PI&&(n-=Ut),s<-Math.PI?s+=Ut:s>Math.PI&&(s-=Ut),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ut.setFromSpherical(this._spherical),ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ut.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(As.origin.copy(this.object.position),As.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(As.direction))<Im?this.object.lookAt(this.target):(Qo.setFromNormalAndCoplanarPoint(this.object.up,this.target),As.intersectPlane(Qo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wr||this._lastTargetPosition.distanceToSquared(this.target)>wr?(this.dispatchEvent(Jo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ut/60*this.autoRotateSpeed*e:Ut/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ut.setFromMatrixColumn(t,0),ut.multiplyScalar(-e),this._panOffset.add(ut)}_panUp(e,t){this.screenSpacePanning===!0?ut.setFromMatrixColumn(t,1):(ut.setFromMatrixColumn(t,0),ut.crossVectors(this.object.up,ut)),ut.multiplyScalar(e),this._panOffset.add(ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ut.copy(s).sub(this.target);let r=ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Um(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Fm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Om(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kl),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ye.DOLLY;break;case Si.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ye.ROTATE}break;case Si.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(La)}function zm(i){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(i.preventDefault(),this.dispatchEvent(La),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kl))}function Hm(i){this.enabled!==!1&&this._handleKeyDown(i)}function km(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1){this.state=Ye.NONE;break}this._handleTouchStartRotate(i),this.state=Ye.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1){this.state=Ye.NONE;break}this._handleTouchStartPan(i),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ye.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(La)}function Vm(i){switch(this._trackPointer(i),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ye.NONE}}function Wm(i){this.enabled!==!1&&i.preventDefault()}function Xm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $l="waste-archive-records-v2",Ia={강남구:{population:544055,perCapitaKgDay:1.28,year:2020},마포구:{population:381858,perCapitaKgDay:.86,year:2020},서초구:{population:429025,perCapitaKgDay:1.18,year:2020}},Zs=Object.keys(Ia);function xa(i){const e=Ia[i];return e.population*e.perCapitaKgDay/1e3}const Ri={plastic:{label:"플라스틱",emoji:"🧴",color:8310740},paper:{label:"종이",emoji:"📦",color:14859650},cloth:{label:"의류",emoji:"👕",color:11902429},metal:{label:"금속",emoji:"🥫",color:12111048},other:{label:"기타",emoji:"🗑️",color:12767898}},Ym=["일회용 사용","고장","사용기한 경과","유행 또는 취향 변화","더 이상 필요 없음","기타"];function Km(){try{const i=localStorage.getItem($l)||"[]",e=JSON.parse(i);return Array.isArray(e)?e:[]}catch{return[]}}function Zl(i){localStorage.setItem($l,JSON.stringify(i))}let Wt=Km(),Ft="강남구";const $m=document.querySelector("#app");$m.innerHTML=`
  <nav>
    <div class="logo">
      우리가 <span>버린 것들</span>
    </div>
    <div class="nav-buttons">
      <button data-page="home" class="active">홈</button>
      <button data-page="record">기록하기</button>
      <button data-page="city">3D 쓰레기 도시</button>
      <button data-page="archive">폐기 아카이브</button>

<button data-page="community">🌿 우리 동네 커뮤니티</button>

    </div>
  </nav>

  <main id="content"></main>

  <footer>
    우리 동네가 버린 것들 · 자치구별 생활계폐기물 시각화
    <br />
    자치구별 2020년 생활계폐기물 원단위 자료를 바탕으로 한 시연용 프로토타입
  </footer>
`;const ji=document.querySelector("#content");function wi(i){var t;(t=document.querySelector(".toast"))==null||t.remove();const e=document.createElement("div");e.className="toast",e.textContent=i,document.body.appendChild(e),setTimeout(()=>e.remove(),3200)}function Et(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Zm(i=Ft){return Zs.map(e=>`<option value="${e}" ${i===e?"selected":""}>${e}</option>`).join("")}function Jm(){return Object.entries(Ri).map(([i,e])=>`<option value="${i}">${e.label}</option>`).join("")}function Qm(){return Ym.map(i=>`<option value="${i}">${i}</option>`).join("")}function Dn(i,e={}){t_(),document.querySelectorAll("[data-page]").forEach(t=>{t.classList.toggle("active",t.dataset.page===i)}),i==="home"&&Jl(),i==="record"&&jm(),i==="city"&&d_(e),i==="archive"&&ec(),i==="community"&&xi(),window.scrollTo({top:0,behavior:"smooth"})}document.querySelectorAll("[data-page]").forEach(i=>{i.addEventListener("click",()=>{Dn(i.dataset.page)})});function Jl(){ji.innerHTML=`
    <section class="hero">
      <div class="kicker">DISTRICT WASTE MOUNTAINS</div>
      <h1>
        자치구별 쓰레기 양을<br />
         3D 쓰레기산으로 보기
      </h1>
      <p>
        서울시 공개 자료를 바탕으로 강남구, 마포구, 서초구의 생활계 폐기물 양을
        각각 다른 크기의 3D 쓰레기산으로 구현했습니다.
        기록한 폐기물은 해당 자치구의 산 위로 날아가 쌓입니다.
      </p>

      <button class="primary" id="goCity">3D 도시 보러가기</button>
      <button class="secondary" id="goRecord">기록하기</button>
    </section>

    <div class="grid">
      <section class="panel">
        <div class="kicker">OFFICIAL DATA</div>
        <h2>공식 자료 기반</h2>
        <p>
          서울시 자치구 생활계폐기물 통계와 자원순환시행계획 자료를 바탕으로
          자치구별 차이를 시각화합니다.
        </p>
      </section>

      <section class="panel">
        <div class="kicker">3D VISUAL</div>
        <h2>입체적인 쓰레기산</h2>
        <p>
          거친 쓰레기 더미가 아니라 둥글고 파스텔톤의 3D 산처럼 표현해
          부담스럽지 않게 관찰할 수 있도록 만들었습니다.
        </p>
      </section>

      <section class="panel">
        <div class="kicker">PERSONAL RECORD</div>
        <h2>내 기록이 실제로 쌓인다</h2>
        <p>
          생수 페트병, 종이상자, 의류 등을 기록하면 3D 오브제가 되어
          선택한 지역의 산에 추가됩니다.
        </p>
      </section>

      <section class="panel">
        <div class="kicker">COMMUNITY VIEW</div>
        <h2>개인에서 공동체로</h2>
        <p>
          내가 버린 것 하나가 지역의 풍경 안에 들어가면서
          개인의 폐기 습관이 공동체 문제와 연결됨을 시각적으로 보여줍니다.
        </p>
      </section>
    </div>
  `,document.querySelector("#goCity").onclick=()=>Dn("city"),document.querySelector("#goRecord").onclick=()=>Dn("record")}function jm(){ji.innerHTML=`
    <div class="kicker">RECORD YOUR WASTE</div>
    <h1>오늘 버린 물건을 기록해보세요</h1>
    <p class="muted">
      사진을 올리고 자치구와 종류를 선택하면,
      해당 자치구의 3D 쓰레기산에 오브제가 날아가 추가됩니다.
    </p>

    <div class="grid">
      <section class="panel">
        <form id="wasteForm">
          <label for="wasteName">버린 물건 이름 *</label>
          <input id="wasteName" type="text" placeholder="예: 생수 페트병" maxlength="60" required />

          <label for="wastePhoto">물건 사진</label>
          <input id="wastePhoto" type="file" accept="image/*" />

          <div id="photoPreview" class="photo-placeholder">
            📷 사진을 선택해주세요
          </div>

          <label for="wasteRegion">자치구 *</label>
          <select id="wasteRegion">
            ${Zm(Ft)}
          </select>

          <label for="wasteType">폐기물 종류 *</label>
          <select id="wasteType">
            ${Jm()}
          </select>

          <label for="wasteReason">버린 이유 *</label>
          <select id="wasteReason">
            ${Qm()}
          </select>

          <label for="wasteStory">간단한 메모 (선택)</label>
          <textarea id="wasteStory" maxlength="250" placeholder="예: 편의점에서 사 마시고 바로 버림"></textarea>

          <button type="submit" class="primary" style="width:100%;margin-top:20px">
            🚀 이 기록을 쓰레기산으로 보내기
          </button>
        </form>
      </section>

      <section class="panel">
        <div class="kicker">WHAT HAPPENS NEXT</div>
        <h2>기록 후 일어나는 일</h2>
        <p>1. 폐기물 종류에 맞는 3D 오브제가 만들어집니다.</p>
        <p>2. 선택한 자치구의 쓰레기산 화면으로 이동합니다.</p>
        <p>3. 내 오브제가 공중에서 날아와 산 위에 착지합니다.</p>
        <p>4. 폐기 아카이브에서도 내 기록을 확인할 수 있습니다.</p>

        <div class="empty" style="margin-top:24px">
          예: 강남구 + 플라스틱 + 생수 페트병
          <br />
          → 강남구 쓰레기산 위에 페트병 3D 오브제 추가
        </div>
      </section>
    </div>
  `;const i=document.querySelector("#wastePhoto"),e=document.querySelector("#photoPreview");i.addEventListener("change",()=>{const t=i.files[0];if(!t)return;if(!t.type.startsWith("image/")){wi("이미지 파일을 선택해주세요."),i.value="";return}const n=URL.createObjectURL(t);e.innerHTML=`<img class="preview" src="${n}" alt="미리보기" />`}),document.querySelector("#wasteForm").addEventListener("submit",async t=>{t.preventDefault();try{const n=i.files[0],s=n?await e_(n):null,r={id:crypto.randomUUID(),name:document.querySelector("#wasteName").value.trim(),region:document.querySelector("#wasteRegion").value,type:document.querySelector("#wasteType").value,reason:document.querySelector("#wasteReason").value,story:document.querySelector("#wasteStory").value.trim(),photo:s,date:new Date().toLocaleDateString("ko-KR")};if(!r.name)throw new Error("물건 이름을 입력해주세요.");Wt=[...Wt,r],Zl(Wt),Ft=r.region,Dn("city",{flyingRecordId:r.id})}catch(n){console.error(n),wi(n.message||"기록 저장에 실패했어요.")}})}function e_(i){return new Promise((e,t)=>{const n=new FileReader;n.onerror=()=>t(new Error("이미지를 읽을 수 없어요.")),n.onload=()=>{const s=new Image;s.onerror=()=>t(new Error("이미지 처리 중 오류가 발생했어요.")),s.onload=()=>{const r=document.createElement("canvas"),o=Math.min(1,700/Math.max(s.width,s.height));r.width=Math.round(s.width*o),r.height=Math.round(s.height*o),r.getContext("2d").drawImage(s,0,0,r.width,r.height),e(r.toDataURL("image/jpeg",.72))},s.src=n.result},n.readAsDataURL(i)})}let Dt=null,Tn=null,Lt=null,Ot=null,Us=null,Ws=null,Vt=null,ki=[],Vi=null;function t_(){Us&&(cancelAnimationFrame(Us),Us=null),Ot&&(Ot.dispose(),Ot=null),Vi&&(Vi.disconnect(),Vi=null),Dt&&Dt.traverse(i=>{i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(t=>{var n;return(n=t.dispose)==null?void 0:n.call(t)})}),Lt&&(Lt.dispose(),Lt.domElement.remove(),Lt=null),Dt=null,Tn=null,Ws=null,Vt=null,ki=[]}function rn(i,e={}){return new Ch({color:i,roughness:.7,metalness:.05,...e})}function n_(i){Dt=new uh,Dt.background=new Be(1257779),Dt.fog=new wa(1257779,20,52),Tn=new tn(45,1,.1,1e3),Tn.position.set(14,14,18),Lt=new Lm({antialias:!0}),Lt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Lt.setSize(i.clientWidth,i.clientHeight),Lt.outputColorSpace=kt,Lt.shadowMap.enabled=!0,i.appendChild(Lt.domElement),Ot=new Nm(Tn,Lt.domElement),Ot.enableDamping=!0,Ot.dampingFactor=.06,Ot.minDistance=8,Ot.maxDistance=34,Ot.maxPolarAngle=Math.PI/2.02,Ot.target.set(0,2,0),Ot.update();const e=new Nh(16777215,1.3);Dt.add(e);const t=new Ro(16777215,2.3);t.position.set(8,16,10),t.castShadow=!0,Dt.add(t);const n=new Ro(9162959,.8);n.position.set(-8,7,-5),Dt.add(n);const s=new ft(new Pn(12,12.5,.8,64),rn(3366230));s.position.y=-.6,s.receiveShadow=!0,Dt.add(s);const r=new Fh(24,24,8036502,5206376);r.position.y=-.18,Dt.add(r),Ws=new fn,Dt.add(Ws),Vt=new fn,Dt.add(Vt),Vi=new ResizeObserver(()=>{if(!Lt||!Tn)return;const a=i.clientWidth,o=i.clientHeight;Lt.setSize(a,o),Tn.aspect=a/o,Tn.updateProjectionMatrix()}),Vi.observe(i)}function i_(i){const e=Zs.map(r=>xa(r)),t=Math.min(...e),n=Math.max(...e);return(xa(i)-t)/(n-t||1)}function s_(i){Vt.clear();const e=i_(i),t=3.4+e*1.8,n=3+e*2.1,s=[9361112,15783328,13022443,13623464,16040128];for(let u=0;u<7;u++){const _=t*(1-u*.11),d=new $i(_,28,22),p=new ft(d,rn(s[u%s.length],{transparent:!0,opacity:.98}));p.scale.y=.42,p.position.y=u*(n/6.5),p.position.x=Math.sin(u*.8)*.22,p.position.z=Math.cos(u*.9)*.18,p.castShadow=!0,p.receiveShadow=!0,Vt.add(p)}const r=18+Math.round(e*14);for(let u=0;u<r;u++){const _=["plastic","paper","cloth","metal"],d=_[u%_.length],p=Ql(d),v=u/r*Math.PI*2,M=1+u%4*(t/6.5),f=Math.cos(v)*M,h=Math.sin(v)*M,w=.5+Math.max(0,1-M/(t+.3))*n*1.15;p.position.set(f,w,h),p.rotation.y=v,p.scale.multiplyScalar(.34+u%3*.06),Vt.add(p)}const a=new ft(new Pn(.03,.03,.5,10),rn(6989162));a.position.y=n+.82,Vt.add(a);const o=rn(9425803),c=new ft(new $i(.18,12,10),o);c.scale.set(1.1,.5,.8),c.position.set(-.12,n+1.02,0),c.rotation.z=.6,Vt.add(c);const l=c.clone();l.position.set(.12,n+1.02,0),l.rotation.z=-.6,Vt.add(l),Vt.userData={baseRadius:t,peakHeight:n}}function Ql(i){return i==="plastic"?r_():i==="paper"?jo():i==="cloth"?a_():i==="metal"?o_():jo()}function r_(){const i=new fn,e=rn(8310740,{transparent:!0,opacity:.76,roughness:.18}),t=rn(5216425),n=new ft(new Pn(.22,.25,.85,16),e);n.position.y=.45,i.add(n);const s=new ft(new Pn(.1,.2,.22,16),e);s.position.y=.98,i.add(s);const r=new ft(new Pn(.12,.12,.12,16),t);return r.position.y=1.16,i.add(r),i}function jo(){const i=new fn,e=new ft(new ii(.75,.65,.75),rn(14859650));e.position.y=.34,i.add(e);const t=new ft(new ii(.78,.04,.78),rn(15849646));return t.position.y=.68,i.add(t),i}function a_(){const i=new fn,e=[11902429,13153766,11112403];for(let t=0;t<3;t++){const n=new ft(new $i(.3,12,10),rn(e[t],{roughness:.95}));n.scale.set(1.2,.65,.9),n.position.set((t-1)*.17,.18+t*.08,t*.04),i.add(n)}return i}function o_(){const i=new fn,e=new ft(new Pn(.24,.24,.62,18),rn(12111048,{metalness:.65,roughness:.28}));e.position.y=.32,i.add(e);const t=new ft(new Pn(.25,.25,.03,18),rn(15002857,{metalness:.8}));return t.position.y=.64,i.add(t),i}function l_(i){const{baseRadius:e,peakHeight:t}=Vt.userData,n=i*2.3999632297,s=.7+Math.sqrt(i)*.42,r=Math.cos(n)*s,a=Math.sin(n)*s,o=Math.min(s/(e*.92),1),l=.6+Math.max(.1,1-o)*t*.9+i%3*.12;return new U(r,l,a)}function c_(i,e,t){e==="일회용 사용"?i.scale.multiplyScalar(1.02+t%3*.06):e==="고장"?(i.rotation.z=.22,i.rotation.x=-.15):e==="유행 또는 취향 변화"?i.rotation.y+=Math.PI/5:e==="사용기한 경과"&&(i.position.y+=.1)}function h_(i=null){Wt.filter(t=>t.region===Ft).forEach((t,n)=>{const s=Ql(t.type),r=l_(n+1);if(s.scale.multiplyScalar(.55),c_(s,t.reason,n),Ws.add(s),t.id===i){const a=new U(-8,12,8);s.position.copy(a),ki.push({object:s,start:a,target:r,startTime:performance.now(),duration:1800})}else s.position.copy(r)})}function jl(i){Us=requestAnimationFrame(jl),!(!Lt||!Dt||!Tn)&&(Vt&&(Vt.rotation.y+=.0015),ki.forEach(e=>{const t=(i-e.startTime)/e.duration,n=Math.min(Math.max(t,0),1),s=1-Math.pow(1-n,3);e.object.position.lerpVectors(e.start,e.target,s),e.object.position.y+=Math.sin(n*Math.PI)*2.8,e.object.rotation.y+=.06}),ki=ki.filter(e=>i-e.startTime<e.duration),Ot==null||Ot.update(),Lt.render(Dt,Tn))}function u_(i,e=null){n_(i),s_(Ft),h_(e),jl(0)}function d_(i={}){const e=Ia[Ft],t=xa(Ft),n=Wt.filter(r=>r.region===Ft).length;ji.innerHTML=`
    <div class="kicker">OFFICIAL DISTRICT WASTE VIEW</div>
    <h1>${Ft}의 3D 쓰레기산</h1>

    <p class="muted">
      서울시 공개자료를 바탕으로 생활계폐기물 양을  3D 쓰레기산으로 표현했습니다.
      양이 많을수록 산이 더 크고 높아집니다.
    </p>

    <div class="region-buttons">
      ${Zs.map(r=>`
        <button data-region="${r}" class="${r===Ft?"active":""}">
          ${r}
        </button>
      `).join("")}
    </div>

    <div class="city-layout">
      <section>
        <div id="cityCanvas">
          <div class="scene-label">
            <strong>${Ft} / Cute Waste Mountain</strong><br />
            자치구별 생활계폐기물 시각화
          </div>
          <div class="scene-hint">
            드래그로 회전 · 스크롤로 확대 · 기록 추가 시 오브제 착지
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="kicker">DISTRICT DATA</div>
        <h2>${Ft} 자료</h2>

        <div class="stats">
          <div class="stat">
            <strong>${e.perCapitaKgDay.toFixed(2)}</strong>
            <small>1인당 배출량 (kg/일·인)</small>
          </div>

          <div class="stat">
            <strong>${Math.round(t)}</strong>
            <small>추정 총량 (톤/일)</small>
          </div>

          <div class="stat">
            <strong>${e.population.toLocaleString()}</strong>
            <small>주민수</small>
          </div>

          <div class="stat">
            <strong>${n}</strong>
            <small>내가 추가한 기록</small>
          </div>
        </div>

        <div class="legend">
          <span><i class="dot" style="background:#7ecfd4"></i>플라스틱</span>
          <span><i class="dot" style="background:#e2bd82"></i>종이</span>
          <span><i class="dot" style="background:#b59ddd"></i>의류</span>
          <span><i class="dot" style="background:#b8ccc8"></i>금속</span>
        </div>

        <p class="muted" style="margin-top:20px">
          총량(톤/일)은 주민수 × 1인당 생활계폐기물 배출량으로 계산한 시각화용 추정치입니다.
          기준연도: ${e.year}
        </p>

        <button class="primary" id="addRecordBtn" style="width:100%;margin-top:14px">
          + 이 자치구에 폐기물 기록 추가하기
        </button>
      </section>
    </div>

    <section class="panel" style="margin-top:22px">
      <div class="kicker">INTERPRETATION</div>
      <h2>이 쓰레기산이 의미하는 것</h2>
      <p>
        이 산은 실제 쓰레기 더미를 그대로 재현한 것이 아니라,
        자치구별 생활계폐기물 양의 차이를 직관적으로 이해할 수 있도록
        둥근 형태의 3D 시각 언어로 번역한 것입니다.
      </p>
      <p>
        내가 추가한 폐기물 기록은 이 산 위에 쌓여,
        공식적인 지역 통계와 개인의 폐기 경험이 한 공간 안에서 만나도록 합니다.
      </p>
    </section>
  `,document.querySelectorAll("[data-region]").forEach(r=>{r.addEventListener("click",()=>{Ft=r.dataset.region,Dn("city")})}),document.querySelector("#addRecordBtn").onclick=()=>Dn("record");const s=document.querySelector("#cityCanvas");u_(s,i.flyingRecordId),i.flyingRecordId&&wi(`🚀 ${Ft} 쓰레기산에 새로운 기록이 추가됐어요!`)}function ec(){ji.innerHTML=`
    <div class="kicker">PERSONAL WASTE ARCHIVE</div>
    <h1>나의 폐기 아카이브</h1>
    <p class="muted">
      내가 기록한 폐기물과 그 사진을 다시 볼 수 있습니다.
    </p>

    <div class="panel">
      <strong>총 기록 수: ${Wt.length}개</strong>
      <p class="muted">현재는 이 브라우저에만 저장됩니다.</p>
      <button class="primary" id="goNewRecord">+ 새 기록 추가</button>
    </div>

    ${Wt.length===0?`
          <div class="empty">
            아직 기록이 없어요.<br />
            첫 번째 폐기물을 기록해보세요!
          </div>
        `:`
          <div class="card-grid">
            ${[...Wt].reverse().map(i=>{var e,t;return`
              <article class="archive-card">
                <div class="archive-photo">
                  ${i.photo?`<img src="${i.photo}" alt="폐기물 사진" />`:((e=Ri[i.type])==null?void 0:e.emoji)||"🗑️"}
                </div>
                <div class="archive-content">
                  <span class="badge">${Et(i.region)}</span>
                  <h3 style="margin-top:12px">${Et(i.name)}</h3>
                  <p>종류: ${Et(((t=Ri[i.type])==null?void 0:t.label)||"기타")}</p>
                  <p>이유: ${Et(i.reason)}</p>
                  <p>${Et(i.story||"")}</p>
                  <p class="muted">${Et(i.date)}</p>
                  <button class="secondary deleteRecord" data-id="${i.id}">
                    기록 삭제
                  </button>
                </div>
              </article>
            `}).join("")}
          </div>
        `}
  `,document.querySelector("#goNewRecord").onclick=()=>Dn("record"),document.querySelectorAll(".deleteRecord").forEach(i=>{i.addEventListener("click",()=>{confirm("이 기록을 삭제할까요?")&&(Wt=Wt.filter(t=>t.id!==i.dataset.id),Zl(Wt),ec(),wi("기록이 삭제됐어요."))})})}const tc=[{id:"minji",name:"민지",region:"강남구",avatar:"🌷",bio:"오늘도 작은 실천을 기록해요",color:"#ffe5eb"},{id:"jun",name:"준호",region:"마포구",avatar:"🐻",bio:"버리기 전에 한 번 더 생각하기",color:"#f4e5cc"},{id:"sora",name:"소라",region:"서초구",avatar:"🌼",bio:"물건에도 이야기가 있어요",color:"#fff0c9"},{id:"yujin",name:"유진",region:"강남구",avatar:"🍀",bio:"제로웨이스트 도전 중!",color:"#dfefdf"},{id:"haneul",name:"하늘",region:"마포구",avatar:"🦋",bio:"소비하고 버리는 일상을 관찰합니다",color:"#e5e4ff"},{id:"jiwoo",name:"지우",region:"서초구",avatar:"🐱",bio:"우리 동네를 더 푸르게",color:"#fce5d6"}],nc=[{id:"demo-1",authorId:"minji",name:"아이스커피 플라스틱 컵",type:"plastic",reason:"일회용 사용",story:"오늘 카페에서 아이스커피를 마셨어요. 하루에 이런 컵을 몇 개나 버리는지 생각해보게 됐어요.",emoji:"🥤",date:"2026. 11. 11.",likes:12},{id:"demo-2",authorId:"jun",name:"택배 종이상자",type:"paper",reason:"더 이상 필요 없음",story:"이번 주에 받은 택배 상자예요. 물건보다 포장재가 더 많은 것 같아요.",emoji:"📦",date:"2026. 11. 10.",likes:8},{id:"demo-3",authorId:"sora",name:"오래된 티셔츠",type:"cloth",reason:"유행 또는 취향 변화",story:"몇 년 동안 입었던 옷을 버리려고 했는데, 수선하거나 다른 사람에게 나눠줄 수도 있었겠다는 생각이 들었어요.",emoji:"👕",date:"2026. 11. 10.",likes:16},{id:"demo-4",authorId:"yujin",name:"생수 페트병",type:"plastic",reason:"일회용 사용",story:"텀블러를 깜빡해서 생수를 샀어요. 생각보다 습관을 바꾸는 게 쉽지 않네요.",emoji:"🧴",date:"2026. 11. 9.",likes:21},{id:"demo-5",authorId:"haneul",name:"다 쓴 음료 캔",type:"metal",reason:"일회용 사용",story:"동네 산책 후 마신 음료수 캔이에요. 분리배출하면서 기록도 남겨봅니다.",emoji:"🥫",date:"2026. 11. 9.",likes:7},{id:"demo-6",authorId:"jiwoo",name:"고장 난 종이 탁상시계",type:"other",reason:"고장",story:"오래 사용하던 시계가 고장 났어요. 버리기 전에 수리할 곳을 찾아볼 걸 그랬어요.",emoji:"⏰",date:"2026. 11. 8.",likes:10}];let Bi="전체",jn="all";const ic="waste-community-v1";function f_(){try{const i=JSON.parse(localStorage.getItem(ic)||"{}");return{likes:i.likes||{},comments:i.comments||{}}}catch{return{likes:{},comments:{}}}}let bn=f_();function el(){try{localStorage.setItem(ic,JSON.stringify(bn))}catch(i){console.warn("커뮤니티 저장 실패:",i),wi("브라우저 저장 공간을 확인해주세요.")}}function p_(){const i=Wt.map(t=>{var n;return{...t,authorId:"me",emoji:((n=Ri[t.type])==null?void 0:n.emoji)||"🗑️",likes:0,isMine:!0}}),e=nc.map(t=>({...t,isMine:!1}));return[...i].reverse().concat(e)}function sc(i){return i.authorId==="me"?{id:"me",name:"나",region:i.region||"강남구",avatar:"🌱",bio:"나의 폐기 아카이브",color:"#d8eee0"}:tc.find(e=>e.id===i.authorId)}function tl(i){var e;return i.isMine?i.region:((e=sc(i))==null?void 0:e.region)||"기타"}function m_(i){return(i.likes||0)+(bn.likes[i.id]?1:0)}function __(i){return bn.comments[i]||[]}function xi(){var s,r,a;const i=p_();let e=i.filter(o=>{const c=Bi==="전체"||tl(o)===Bi,l=jn==="all"||o.authorId===jn;return c&&l});const n=[{id:"me",name:"나",region:"나의 기록",avatar:"🌱",bio:"나의 일상을 새롭게 기록하기",color:"#d8eee0"},...tc];ji.innerHTML=`
    <div class="community-header">
      <div class="kicker">OUR COMMUNITY ARCHIVE</div>

      <h1>우리 동네의 버린 이야기들 🌿</h1>

      <p>
        내가 버린 물건이 다른 사람의 이야기와 만나는 공간.
        <br />
        서로의 폐기 기록을 통해 우리 동네의 소비 습관을 발견해보세요.
      </p>

      <span class="community-demo-label">
        현재 다른 주민 게시물은 시연용 예시입니다
      </span>
    </div>

    <section class="panel">
      <div class="community-section-title">
        <h2>함께 기록하는 주민들</h2>
        <span class="muted">${n.length}개 프로필</span>
      </div>

      <div class="profile-scroll">
        ${n.map(o=>{const c=i.filter(l=>l.authorId===o.id).length;return`
            <button
              class="community-profile ${jn===o.id?"selected":""}"
              data-profile="${o.id}"
              type="button"
            >
              <span
                class="profile-avatar"
                style="background:${o.color}"
              >
                ${o.avatar}
              </span>

              <strong>${Et(o.name)}</strong>
              <span>${Et(o.region)}</span>
              <small>기록 ${c}개</small>
            </button>
          `}).join("")}
      </div>
    </section>

    <div class="community-main">
      <section class="community-feed">
        <div class="community-section-title">
          <div>
            <div class="kicker">COMMUNITY FEED</div>
            <h2>우리 동네 폐기 아카이브</h2>
          </div>

          <button
            class="secondary"
            id="communityNewRecord"
            type="button"
          >
            + 기록하기
          </button>
        </div>

        <div class="community-filter">
          ${["전체",...Zs].map(o=>`
            <button
              type="button"
              class="${Bi===o?"active":""}"
              data-community-region="${o}"
            >
              ${o}
            </button>
          `).join("")}
        </div>

        ${jn!=="all"?`
              <button
                id="showAllProfiles"
                class="secondary"
                type="button"
                style="margin-bottom:15px"
              >
                ← 전체 주민 기록 보기
              </button>
            `:""}

        ${e.length===0?`
              <div class="empty">
                이 조건에 맞는 기록이 아직 없어요.
                <br />
                다른 지역이나 주민을 선택해보세요!
              </div>
            `:e.map(o=>{var _,d;const c=sc(o),l=__(o.id),u=!!bn.likes[o.id];return`
                  <article class="community-post">
                    <div class="post-header">
                      <span
                        class="post-avatar"
                        style="background:${c.color}"
                      >
                        ${c.avatar}
                      </span>

                      <div class="post-author">
                        <strong>
                          ${Et(c.name)}
                        </strong>
                        <span>
                          ${Et(tl(o))}
                          · ${Et(o.date)}
                        </span>
                      </div>

                      <span class="post-type-badge">
                        ${Et(((_=Ri[o.type])==null?void 0:_.label)||"기타")}
                      </span>
                    </div>

                    <div class="post-photo ${o.photo?"has-image":""}">
                      ${o.photo?`
                            <img
                              src="${o.photo}"
                              alt="폐기물 기록 사진"
                            />
                          `:`
                            <div class="post-emoji">
                              ${o.emoji||"🗑️"}
                            </div>
                          `}

                      ${o.isMine?"":'<span class="sample-mark">예시 기록</span>'}
                    </div>

                    <div class="post-content">
                      <div class="post-actions">
                        <button
                          type="button"
                          class="like-button ${u?"liked":""}"
                          data-like="${o.id}"
                        >
                          ${u?"♥":"♡"}
                          공감 ${m_(o)}
                        </button>

                        <span>
                          💬 댓글 ${l.length}
                        </span>
                      </div>

                      <h3>${Et(o.name)}</h3>

                      <div class="post-tags">
                        <span>
                          #${Et(((d=Ri[o.type])==null?void 0:d.label)||"기타")}
                        </span>
                        <span>
                          #${Et(o.reason)}
                        </span>
                      </div>

                      <p>${Et(o.story||"")}</p>

                      <div class="post-comments">
                        <strong>주민들의 이야기</strong>

                        ${l.length===0?`
                              <p class="no-comments">
                                아직 댓글이 없어요.
                                첫 번째 이야기를 남겨보세요!
                              </p>
                            `:l.map(p=>`
                              <div class="comment-item">
                                <span>🌱 <b>나</b></span>
                                <span>
                                  ${Et(p)}
                                </span>
                              </div>
                            `).join("")}

                        <form
                          class="comment-form"
                          data-comment-form="${o.id}"
                        >
                          <input
                            type="text"
                            name="comment"
                            maxlength="150"
                            placeholder="따뜻한 댓글을 남겨주세요"
                            aria-label="댓글 내용"
                            required
                          />

                          <button
                            class="primary"
                            type="submit"
                          >
                            등록
                          </button>
                        </form>
                      </div>
                    </div>
                  </article>
                `}).join("")}
      </section>

      <aside class="community-sidebar">
        <div class="community-side-card">
          <div class="kicker">THIS WEEK'S QUESTION</div>
          <h3>이번 주의 질문 💭</h3>

          <p>
            이번 주에 버린 물건 중
            다시 사용할 수 있었던 것은 무엇인가요?
          </p>

          <p class="muted">
            다른 주민들의 기록을 보며
            나의 소비 습관도 돌아보세요.
          </p>
        </div>

        <div class="community-side-card">
          <div class="kicker">COMMUNITY ACTIVITY</div>
          <h3>아카이브 현황</h3>

          <div class="community-stat">
            <span>시연용 주민 기록</span>
            <strong>${nc.length}</strong>
          </div>

          <div class="community-stat">
            <span>내가 등록한 기록</span>
            <strong>${Wt.length}</strong>
          </div>

          <div class="community-stat">
            <span>참여 지역</span>
            <strong>3개 구</strong>
          </div>
        </div>

        <div class="community-side-card">
          <div class="kicker">FROM PERSONAL TO COLLECTIVE</div>
          <h3>혼자가 아닌 우리의 기록</h3>

          <p>
            각자 버린 물건은 다르지만,
            버리는 이유에는 공통점이 있을 수 있습니다.
          </p>

          <p>
            이 기록들이 모여
            우리 동네의 3D 쓰레기산을 형성합니다.
          </p>

          <button
            class="secondary"
            id="communityGoCity"
            style="width:100%"
            type="button"
          >
            3D 쓰레기산 보기 →
          </button>
        </div>
      </aside>
    </div>
  `,(s=document.querySelector("#communityNewRecord"))==null||s.addEventListener("click",()=>{Dn("record")}),(r=document.querySelector("#showAllProfiles"))==null||r.addEventListener("click",()=>{jn="all",xi()}),document.querySelectorAll("[data-profile]").forEach(o=>{o.addEventListener("click",()=>{jn=o.dataset.profile,Bi="전체",xi()})}),document.querySelectorAll("[data-community-region]").forEach(o=>{o.addEventListener("click",()=>{Bi=o.dataset.communityRegion,jn="all",xi()})}),document.querySelectorAll("[data-like]").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.like;bn.likes[c]=!bn.likes[c],el(),xi()})}),document.querySelectorAll("[data-comment-form]").forEach(o=>{o.addEventListener("submit",c=>{c.preventDefault();const l=o.dataset.commentForm,_=o.querySelector('input[name="comment"]').value.trim();_&&(bn.comments[l]||(bn.comments[l]=[]),bn.comments[l].push(_),el(),xi(),wi("댓글을 남겼어요! 🌿"))})}),(a=document.querySelector("#communityGoCity"))==null||a.addEventListener("click",()=>{Dn("city")})}Jl();
