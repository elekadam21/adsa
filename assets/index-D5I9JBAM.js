(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ho(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const se={},wn=[],ft=()=>{},jh=()=>!1,Ri=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),fo=t=>t.startsWith("onUpdate:"),be=Object.assign,po=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gh=Object.prototype.hasOwnProperty,Q=(t,e)=>Gh.call(t,e),U=Array.isArray,Sn=t=>xi(t)==="[object Map]",na=t=>xi(t)==="[object Set]",$=t=>typeof t=="function",_e=t=>typeof t=="string",$t=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",sa=t=>(ae(t)||$(t))&&$(t.then)&&$(t.catch),ia=Object.prototype.toString,xi=t=>ia.call(t),qh=t=>xi(t).slice(8,-1),ra=t=>xi(t)==="[object Object]",_o=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=ho(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ni=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Kh=/-(\w)/g,Ke=Ni(t=>t.replace(Kh,(e,n)=>n?n.toUpperCase():"")),zh=/\B([A-Z])/g,an=Ni(t=>t.replace(zh,"-$1").toLowerCase()),Ai=Ni(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zi=Ni(t=>t?`on${Ai(t)}`:""),Mt=(t,e)=>!Object.is(t,e),Js=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},oa=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Tr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gl;const Pi=()=>gl||(gl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function go(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=_e(s)?Xh(s):go(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(_e(t)||ae(t))return t}const Yh=/;(?![^(]*\))/g,Qh=/:([^]+)/,Jh=/\/\*[^]*?\*\//g;function Xh(t){const e={};return t.replace(Jh,"").split(Yh).forEach(n=>{if(n){const s=n.split(Qh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Oi(t){let e="";if(_e(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=Oi(t[n]);s&&(e+=s+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ef=ho(Zh);function la(t){return!!t||t===""}const ca=t=>!!(t&&t.__v_isRef===!0),ss=t=>_e(t)?t:t==null?"":U(t)||ae(t)&&(t.toString===ia||!$(t.toString))?ca(t)?ss(t.value):JSON.stringify(t,aa,2):String(t),aa=(t,e)=>ca(e)?aa(t,e.value):Sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[er(s,r)+" =>"]=i,n),{})}:na(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>er(n))}:$t(e)?er(e):ae(e)&&!U(e)&&!ra(e)?String(e):e,er=(t,e="")=>{var n;return $t(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let We;class tf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=We,!e&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=We;try{return We=this,e()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function nf(){return We}let oe;const tr=new WeakSet;class ua{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tr.has(this)&&(tr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ml(this),da(this);const e=oe,n=Ze;oe=this,Ze=!0;try{return this.fn()}finally{pa(this),oe=e,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vo(e);this.deps=this.depsTail=void 0,ml(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rr(this)&&this.run()}get dirty(){return Rr(this)}}let ha=0,cs,as;function fa(t,e=!1){if(t.flags|=8,e){t.next=as,as=t;return}t.next=cs,cs=t}function mo(){ha++}function yo(){if(--ha>0)return;if(as){let e=as;for(as=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;cs;){let e=cs;for(cs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function da(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pa(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),vo(s),sf(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Rr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_a(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _a(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Es))return;t.globalVersion=Es;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Rr(t)){t.flags&=-3;return}const n=oe,s=Ze;oe=t,Ze=!0;try{da(t);const i=t.fn(t._value);(e.version===0||Mt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{oe=n,Ze=s,pa(t),t.flags&=-3}}function vo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)vo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function sf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ze=!0;const ga=[];function Vt(){ga.push(Ze),Ze=!1}function jt(){const t=ga.pop();Ze=t===void 0?!0:t}function ml(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=oe;oe=void 0;try{e()}finally{oe=n}}}let Es=0;class rf{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!oe||!Ze||oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==oe)n=this.activeLink=new rf(oe,this),oe.deps?(n.prevDep=oe.depsTail,oe.depsTail.nextDep=n,oe.depsTail=n):oe.deps=oe.depsTail=n,ma(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=oe.depsTail,n.nextDep=void 0,oe.depsTail.nextDep=n,oe.depsTail=n,oe.deps===n&&(oe.deps=s)}return n}trigger(e){this.version++,Es++,this.notify(e)}notify(e){mo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yo()}}}function ma(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ma(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xr=new WeakMap,tn=Symbol(""),Nr=Symbol(""),Cs=Symbol("");function Te(t,e,n){if(Ze&&oe){let s=xr.get(t);s||xr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Eo),i.map=s,i.key=n),i.track()}}function vt(t,e,n,s,i,r){const o=xr.get(t);if(!o){Es++;return}const l=c=>{c&&c.trigger()};if(mo(),e==="clear")o.forEach(l);else{const c=U(t),a=c&&_o(n);if(c&&n==="length"){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f===Cs||!$t(f)&&f>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),a&&l(o.get(Cs)),e){case"add":c?a&&l(o.get("length")):(l(o.get(tn)),Sn(t)&&l(o.get(Nr)));break;case"delete":c||(l(o.get(tn)),Sn(t)&&l(o.get(Nr)));break;case"set":Sn(t)&&l(o.get(tn));break}}yo()}function _n(t){const e=Y(t);return e===t?e:(Te(e,"iterate",Cs),qe(t)?e:e.map(Re))}function Di(t){return Te(t=Y(t),"iterate",Cs),t}const of={__proto__:null,[Symbol.iterator](){return nr(this,Symbol.iterator,Re)},concat(...t){return _n(this).concat(...t.map(e=>U(e)?_n(e):e))},entries(){return nr(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return gt(this,"every",t,e,void 0,arguments)},filter(t,e){return gt(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return gt(this,"find",t,e,Re,arguments)},findIndex(t,e){return gt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gt(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return gt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gt(this,"forEach",t,e,void 0,arguments)},includes(...t){return sr(this,"includes",t)},indexOf(...t){return sr(this,"indexOf",t)},join(t){return _n(this).join(t)},lastIndexOf(...t){return sr(this,"lastIndexOf",t)},map(t,e){return gt(this,"map",t,e,void 0,arguments)},pop(){return Qn(this,"pop")},push(...t){return Qn(this,"push",t)},reduce(t,...e){return yl(this,"reduce",t,e)},reduceRight(t,...e){return yl(this,"reduceRight",t,e)},shift(){return Qn(this,"shift")},some(t,e){return gt(this,"some",t,e,void 0,arguments)},splice(...t){return Qn(this,"splice",t)},toReversed(){return _n(this).toReversed()},toSorted(t){return _n(this).toSorted(t)},toSpliced(...t){return _n(this).toSpliced(...t)},unshift(...t){return Qn(this,"unshift",t)},values(){return nr(this,"values",Re)}};function nr(t,e,n){const s=Di(t),i=s[e]();return s!==t&&!qe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const lf=Array.prototype;function gt(t,e,n,s,i,r){const o=Di(t),l=o!==t&&!qe(t),c=o[e];if(c!==lf[e]){const h=c.apply(t,r);return l?Re(h):h}let a=n;o!==t&&(l?a=function(h,f){return n.call(this,Re(h),f,t)}:n.length>2&&(a=function(h,f){return n.call(this,h,f,t)}));const u=c.call(o,a,s);return l&&i?i(u):u}function yl(t,e,n,s){const i=Di(t);let r=n;return i!==t&&(qe(t)?n.length>3&&(r=function(o,l,c){return n.call(this,o,l,c,t)}):r=function(o,l,c){return n.call(this,o,Re(l),c,t)}),i[e](r,...s)}function sr(t,e,n){const s=Y(t);Te(s,"iterate",Cs);const i=s[e](...n);return(i===-1||i===!1)&&wo(n[0])?(n[0]=Y(n[0]),s[e](...n)):i}function Qn(t,e,n=[]){Vt(),mo();const s=Y(t)[e].apply(t,n);return yo(),jt(),s}const cf=ho("__proto__,__v_isRef,__isVue"),ya=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($t));function af(t){$t(t)||(t=String(t));const e=Y(this);return Te(e,"has",t),e.hasOwnProperty(t)}class va{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?vf:wa:r?ba:Ca).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){let c;if(o&&(c=of[n]))return c;if(n==="hasOwnProperty")return af}const l=Reflect.get(e,n,Ne(e)?e:s);return($t(n)?ya.has(n):cf(n))||(i||Te(e,"get",n),r)?l:Ne(l)?o&&_o(n)?l:l.value:ae(l)?i?Ia(l):Fs(l):l}}class Ea extends va{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const c=sn(r);if(!qe(s)&&!sn(s)&&(r=Y(r),s=Y(s)),!U(e)&&Ne(r)&&!Ne(s))return c?!1:(r.value=s,!0)}const o=U(e)&&_o(n)?Number(n)<e.length:Q(e,n),l=Reflect.set(e,n,s,Ne(e)?e:i);return e===Y(i)&&(o?Mt(s,r)&&vt(e,"set",n,s):vt(e,"add",n,s)),l}deleteProperty(e,n){const s=Q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&vt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!$t(n)||!ya.has(n))&&Te(e,"has",n),s}ownKeys(e){return Te(e,"iterate",U(e)?"length":tn),Reflect.ownKeys(e)}}class uf extends va{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hf=new Ea,ff=new uf,df=new Ea(!0);const Ar=t=>t,qs=t=>Reflect.getPrototypeOf(t);function pf(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=Sn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Ar:e?Pr:Re;return!e&&Te(r,"iterate",c?Nr:tn),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ks(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _f(t,e){const n={get(i){const r=this.__v_raw,o=Y(r),l=Y(i);t||(Mt(i,l)&&Te(o,"get",i),Te(o,"get",l));const{has:c}=qs(o),a=e?Ar:t?Pr:Re;if(c.call(o,i))return a(r.get(i));if(c.call(o,l))return a(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Te(Y(i),"iterate",tn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Y(r),l=Y(i);return t||(Mt(i,l)&&Te(o,"has",i),Te(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,c=Y(l),a=e?Ar:t?Pr:Re;return!t&&Te(c,"iterate",tn),l.forEach((u,h)=>i.call(r,a(u),a(h),o))}};return be(n,t?{add:Ks("add"),set:Ks("set"),delete:Ks("delete"),clear:Ks("clear")}:{add(i){!e&&!qe(i)&&!sn(i)&&(i=Y(i));const r=Y(this);return qs(r).has.call(r,i)||(r.add(i),vt(r,"add",i,i)),this},set(i,r){!e&&!qe(r)&&!sn(r)&&(r=Y(r));const o=Y(this),{has:l,get:c}=qs(o);let a=l.call(o,i);a||(i=Y(i),a=l.call(o,i));const u=c.call(o,i);return o.set(i,r),a?Mt(r,u)&&vt(o,"set",i,r):vt(o,"add",i,r),this},delete(i){const r=Y(this),{has:o,get:l}=qs(r);let c=o.call(r,i);c||(i=Y(i),c=o.call(r,i)),l&&l.call(r,i);const a=r.delete(i);return c&&vt(r,"delete",i,void 0),a},clear(){const i=Y(this),r=i.size!==0,o=i.clear();return r&&vt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=pf(i,t,e)}),n}function Co(t,e){const n=_f(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const gf={get:Co(!1,!1)},mf={get:Co(!1,!0)},yf={get:Co(!0,!1)};const Ca=new WeakMap,ba=new WeakMap,wa=new WeakMap,vf=new WeakMap;function Ef(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cf(t){return t.__v_skip||!Object.isExtensible(t)?0:Ef(qh(t))}function Fs(t){return sn(t)?t:bo(t,!1,hf,gf,Ca)}function Sa(t){return bo(t,!1,df,mf,ba)}function Ia(t){return bo(t,!0,ff,yf,wa)}function bo(t,e,n,s,i){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Cf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function In(t){return sn(t)?In(t.__v_raw):!!(t&&t.__v_isReactive)}function sn(t){return!!(t&&t.__v_isReadonly)}function qe(t){return!!(t&&t.__v_isShallow)}function wo(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function bf(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&oa(t,"__v_skip",!0),t}const Re=t=>ae(t)?Fs(t):t,Pr=t=>ae(t)?Ia(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function is(t){return Ta(t,!1)}function wf(t){return Ta(t,!0)}function Ta(t,e){return Ne(t)?t:new Sf(t,e)}class Sf{constructor(e,n){this.dep=new Eo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Y(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||qe(e)||sn(e);e=s?e:Y(e),Mt(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function nn(t){return Ne(t)?t.value:t}const If={get:(t,e,n)=>e==="__v_raw"?t:nn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ra(t){return In(t)?t:new Proxy(t,If)}class Tf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Eo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return fa(this,!0),!0}get value(){const e=this.dep.track();return _a(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rf(t,e,n=!1){let s,i;return $(t)?s=t:(s=t.get,i=t.set),new Tf(s,i,n)}const zs={},si=new WeakMap;let Yt;function xf(t,e=!1,n=Yt){if(n){let s=si.get(n);s||si.set(n,s=[]),s.push(t)}}function Nf(t,e,n=se){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:c}=n,a=D=>i?D:qe(D)||i===!1||i===0?Et(D,1):Et(D);let u,h,f,_,m=!1,b=!1;if(Ne(t)?(h=()=>t.value,m=qe(t)):In(t)?(h=()=>a(t),m=!0):U(t)?(b=!0,m=t.some(D=>In(D)||qe(D)),h=()=>t.map(D=>{if(Ne(D))return D.value;if(In(D))return a(D);if($(D))return c?c(D,2):D()})):$(t)?e?h=c?()=>c(t,2):t:h=()=>{if(f){Vt();try{f()}finally{jt()}}const D=Yt;Yt=u;try{return c?c(t,3,[_]):t(_)}finally{Yt=D}}:h=ft,e&&i){const D=h,ne=i===!0?1/0:i;h=()=>Et(D(),ne)}const P=nf(),k=()=>{u.stop(),P&&P.active&&po(P.effects,u)};if(r&&e){const D=e;e=(...ne)=>{D(...ne),k()}}let O=b?new Array(t.length).fill(zs):zs;const F=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(e){const ne=u.run();if(i||m||(b?ne.some((Se,ue)=>Mt(Se,O[ue])):Mt(ne,O))){f&&f();const Se=Yt;Yt=u;try{const ue=[ne,O===zs?void 0:b&&O[0]===zs?[]:O,_];c?c(e,3,ue):e(...ue),O=ne}finally{Yt=Se}}}else u.run()};return l&&l(F),u=new ua(h),u.scheduler=o?()=>o(F,!1):F,_=D=>xf(D,!1,u),f=u.onStop=()=>{const D=si.get(u);if(D){if(c)c(D,4);else for(const ne of D)ne();si.delete(u)}},e?s?F(!0):O=u.run():o?o(F.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function Et(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))Et(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)Et(t[s],e,n);else if(na(t)||Sn(t))t.forEach(s=>{Et(s,e,n)});else if(ra(t)){for(const s in t)Et(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Et(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bs(t,e,n,s){try{return s?t(...s):t()}catch(i){ki(i,e,n)}}function dt(t,e,n,s){if($(t)){const i=Bs(t,e,n,s);return i&&sa(i)&&i.catch(r=>{ki(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(dt(t[r],e,n,s));return i}}function ki(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||se;if(e){let l=e.parent;const c=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,c,a)===!1)return}l=l.parent}if(r){Vt(),Bs(r,null,10,[t,c,a]),jt();return}}Af(t,n,i,s,o)}function Af(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Pe=[];let at=-1;const Tn=[];let Pt=null,vn=0;const xa=Promise.resolve();let ii=null;function Na(t){const e=ii||xa;return t?e.then(this?t.bind(this):t):e}function Pf(t){let e=at+1,n=Pe.length;for(;e<n;){const s=e+n>>>1,i=Pe[s],r=bs(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function So(t){if(!(t.flags&1)){const e=bs(t),n=Pe[Pe.length-1];!n||!(t.flags&2)&&e>=bs(n)?Pe.push(t):Pe.splice(Pf(e),0,t),t.flags|=1,Aa()}}function Aa(){ii||(ii=xa.then(Oa))}function Of(t){U(t)?Tn.push(...t):Pt&&t.id===-1?Pt.splice(vn+1,0,t):t.flags&1||(Tn.push(t),t.flags|=1),Aa()}function vl(t,e,n=at+1){for(;n<Pe.length;n++){const s=Pe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Pe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Pa(t){if(Tn.length){const e=[...new Set(Tn)].sort((n,s)=>bs(n)-bs(s));if(Tn.length=0,Pt){Pt.push(...e);return}for(Pt=e,vn=0;vn<Pt.length;vn++){const n=Pt[vn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pt=null,vn=0}}const bs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Oa(t){try{for(at=0;at<Pe.length;at++){const e=Pe[at];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;at<Pe.length;at++){const e=Pe[at];e&&(e.flags&=-2)}at=-1,Pe.length=0,Pa(),ii=null,(Pe.length||Tn.length)&&Oa()}}let Ue=null,Da=null;function ri(t){const e=Ue;return Ue=t,Da=t&&t.type.__scopeId||null,e}function Df(t,e=Ue,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Nl(-1);const r=ri(e);let o;try{o=t(...i)}finally{ri(r),s._d&&Nl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function kf(t,e){if(Ue===null)return t;const n=Bi(Ue),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,c=se]=e[i];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&Et(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Vt(),dt(c,n,8,[t.el,l,t,e]),jt())}}const Mf=Symbol("_vte"),Lf=t=>t.__isTeleport;function Io(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Io(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function To(t,e){return $(t)?be({name:t.name},e,{setup:t}):t}function ka(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function oi(t,e,n,s,i=!1){if(U(t)){t.forEach((m,b)=>oi(m,e&&(U(e)?e[b]:e),n,s,i));return}if(us(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&oi(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Bi(s.component):s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===se?l.refs={}:l.refs,h=l.setupState,f=Y(h),_=h===se?()=>!1:m=>Q(f,m);if(a!=null&&a!==c&&(_e(a)?(u[a]=null,_(a)&&(h[a]=null)):Ne(a)&&(a.value=null)),$(c))Bs(c,l,12,[o,u]);else{const m=_e(c),b=Ne(c);if(m||b){const P=()=>{if(t.f){const k=m?_(c)?h[c]:u[c]:c.value;i?U(k)&&po(k,r):U(k)?k.includes(r)||k.push(r):m?(u[c]=[r],_(c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else m?(u[c]=o,_(c)&&(h[c]=o)):b&&(c.value=o,t.k&&(u[t.k]=o))};o?(P.id=-1,He(P,n)):P()}}}Pi().requestIdleCallback;Pi().cancelIdleCallback;const us=t=>!!t.type.__asyncLoader,Ma=t=>t.type.__isKeepAlive;function Ff(t,e){La(t,"a",e)}function Bf(t,e){La(t,"da",e)}function La(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Mi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ma(i.parent.vnode)&&Hf(s,e,n,i),i=i.parent}}function Hf(t,e,n,s){const i=Mi(e,t,s,!0);Fa(()=>{po(s[e],i)},n)}function Mi(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Vt();const l=Hs(n),c=dt(e,n,t,o);return l(),jt(),c});return s?i.unshift(r):i.push(r),r}}const Tt=t=>(e,n=xe)=>{(!Is||t==="sp")&&Mi(t,(...s)=>e(...s),n)},Wf=Tt("bm"),Uf=Tt("m"),$f=Tt("bu"),Vf=Tt("u"),jf=Tt("bum"),Fa=Tt("um"),Gf=Tt("sp"),qf=Tt("rtg"),Kf=Tt("rtc");function zf(t,e=xe){Mi("ec",t,e)}const Yf="components";function Qf(t,e){return Xf(Yf,t,!0,e)||t}const Jf=Symbol.for("v-ndc");function Xf(t,e,n=!0,s=!1){const i=Ue||xe;if(i){const r=i.type;{const l=Wd(r,!1);if(l&&(l===e||l===Ke(e)||l===Ai(Ke(e))))return r}const o=El(i[t]||r[t],e)||El(i.appContext[t],e);return!o&&s?r:o}}function El(t,e){return t&&(t[e]||t[Ke(e)]||t[Ai(Ke(e))])}function Cl(t,e,n,s){let i;const r=n,o=U(t);if(o||_e(t)){const l=o&&In(t);let c=!1;l&&(c=!qe(t),t=Di(t)),i=new Array(t.length);for(let a=0,u=t.length;a<u;a++)i[a]=e(c?Re(t[a]):t[a],a,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(ae(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,a=l.length;c<a;c++){const u=l[c];i[c]=e(t[u],u,c,r)}}else i=[];return i}const Or=t=>t?nu(t)?Bi(t):Or(t.parent):null,hs=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ro(t),$forceUpdate:t=>t.f||(t.f=()=>{So(t.update)}),$nextTick:t=>t.n||(t.n=Na.bind(t.proxy)),$watch:t=>vd.bind(t)}),ir=(t,e)=>t!==se&&!t.__isScriptSetup&&Q(t,e),Zf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ir(s,e))return o[e]=1,s[e];if(i!==se&&Q(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&Q(a,e))return o[e]=3,r[e];if(n!==se&&Q(n,e))return o[e]=4,n[e];Dr&&(o[e]=0)}}const u=hs[e];let h,f;if(u)return e==="$attrs"&&Te(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==se&&Q(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,Q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ir(i,e)?(i[e]=n,!0):s!==se&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&Q(t,o)||ir(e,o)||(l=r[0])&&Q(l,o)||Q(s,o)||Q(hs,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bl(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Dr=!0;function ed(t){const e=Ro(t),n=t.proxy,s=t.ctx;Dr=!1,e.beforeCreate&&wl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:b,deactivated:P,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:D,render:ne,renderTracked:Se,renderTriggered:ue,errorCaptured:st,serverPrefetch:Rt,expose:it,inheritAttrs:xt,components:qt,directives:rt,filters:zn}=e;if(a&&td(a,s,null),o)for(const te in o){const z=o[te];$(z)&&(s[te]=z.bind(n))}if(i){const te=i.call(n,n);ae(te)&&(t.data=Fs(te))}if(Dr=!0,r)for(const te in r){const z=r[te],_t=$(z)?z.bind(n,n):$(z.get)?z.get.bind(n,n):ft,Nt=!$(z)&&$(z.set)?z.set.bind(n):ft,ot=Qe({get:_t,set:Nt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>ot.value,set:De=>ot.value=De})}if(l)for(const te in l)Ba(l[te],s,n,te);if(c){const te=$(c)?c.call(n):c;Reflect.ownKeys(te).forEach(z=>{Xs(z,te[z])})}u&&wl(u,t,"c");function ge(te,z){U(z)?z.forEach(_t=>te(_t.bind(n))):z&&te(z.bind(n))}if(ge(Wf,h),ge(Uf,f),ge($f,_),ge(Vf,m),ge(Ff,b),ge(Bf,P),ge(zf,st),ge(Kf,Se),ge(qf,ue),ge(jf,O),ge(Fa,D),ge(Gf,Rt),U(it))if(it.length){const te=t.exposed||(t.exposed={});it.forEach(z=>{Object.defineProperty(te,z,{get:()=>n[z],set:_t=>n[z]=_t})})}else t.exposed||(t.exposed={});ne&&t.render===ft&&(t.render=ne),xt!=null&&(t.inheritAttrs=xt),qt&&(t.components=qt),rt&&(t.directives=rt),Rt&&ka(t)}function td(t,e,n=ft){U(t)&&(t=kr(t));for(const s in t){const i=t[s];let r;ae(i)?"default"in i?r=bt(i.from||s,i.default,!0):r=bt(i.from||s):r=bt(i),Ne(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function wl(t,e,n){dt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ba(t,e,n,s){let i=s.includes(".")?Xa(n,s):()=>n[s];if(_e(t)){const r=e[t];$(r)&&Zs(i,r)}else if($(t))Zs(i,t.bind(n));else if(ae(t))if(U(t))t.forEach(r=>Ba(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&Zs(i,r,t)}}function Ro(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>li(c,a,o,!0)),li(c,e,o)),ae(e)&&r.set(e,c),c}function li(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&li(t,r,n,!0),i&&i.forEach(o=>li(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=nd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const nd={data:Sl,props:Il,emits:Il,methods:rs,computed:rs,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:rs,directives:rs,watch:id,provide:Sl,inject:sd};function Sl(t,e){return e?t?function(){return be($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function sd(t,e){return rs(kr(t),kr(e))}function kr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function rs(t,e){return t?be(Object.create(null),t,e):e}function Il(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:be(Object.create(null),bl(t),bl(e??{})):e}function id(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function Ha(){return{app:null,config:{isNativeTag:jh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rd=0;function od(t,e){return function(s,i=null){$(s)||(s=be({},s)),i!=null&&!ae(i)&&(i=null);const r=Ha(),o=new WeakSet,l=[];let c=!1;const a=r.app={_uid:rd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:$d,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(a,...h)):$(u)&&(o.add(u),u(a,...h))),a},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),a},component(u,h){return h?(r.components[u]=h,a):r.components[u]},directive(u,h){return h?(r.directives[u]=h,a):r.directives[u]},mount(u,h,f){if(!c){const _=a._ceVNode||je(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(_,u):t(_,u,f),c=!0,a._container=u,u.__vue_app__=a,Bi(_.component)}},onUnmount(u){l.push(u)},unmount(){c&&(dt(l,a._instance,16),t(null,a._container),delete a._container.__vue_app__)},provide(u,h){return r.provides[u]=h,a},runWithContext(u){const h=Rn;Rn=a;try{return u()}finally{Rn=h}}};return a}}let Rn=null;function Xs(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function bt(t,e,n=!1){const s=xe||Ue;if(s||Rn){const i=Rn?Rn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s&&s.proxy):e}}const Wa={},Ua=()=>Object.create(Wa),$a=t=>Object.getPrototypeOf(t)===Wa;function ld(t,e,n,s=!1){const i={},r=Ua();t.propsDefaults=Object.create(null),Va(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Sa(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function cd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Li(t.emitsOptions,f))continue;const _=e[f];if(c)if(Q(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const m=Ke(f);i[m]=Mr(c,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{Va(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!Q(e,h)&&((u=an(h))===h||!Q(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Mr(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!Q(e,h))&&(delete r[h],a=!0)}a&&vt(t.attrs,"set","")}function Va(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ls(c))continue;const a=e[c];let u;i&&Q(i,u=Ke(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Li(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Y(n),a=l||se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Mr(i,c,h,a[h],t,!Q(a,h))}}return o}function Mr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:a}=i;if(n in a)s=a[n];else{const u=Hs(i);s=a[n]=c.call(null,e),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===an(n))&&(s=!0))}return s}const ad=new WeakMap;function ja(t,e,n=!1){const s=n?ad:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!$(t)){const u=h=>{c=!0;const[f,_]=ja(h,e,!0);be(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ae(t)&&s.set(t,wn),wn;if(U(r))for(let u=0;u<r.length;u++){const h=Ke(r[u]);Tl(h)&&(o[h]=se)}else if(r)for(const u in r){const h=Ke(u);if(Tl(h)){const f=r[u],_=o[h]=U(f)||$(f)?{type:f}:be({},f),m=_.type;let b=!1,P=!0;if(U(m))for(let k=0;k<m.length;++k){const O=m[k],F=$(O)&&O.name;if(F==="Boolean"){b=!0;break}else F==="String"&&(P=!1)}else b=$(m)&&m.name==="Boolean";_[0]=b,_[1]=P,(b||Q(_,"default"))&&l.push(h)}}const a=[o,l];return ae(t)&&s.set(t,a),a}function Tl(t){return t[0]!=="$"&&!ls(t)}const Ga=t=>t[0]==="_"||t==="$stable",xo=t=>U(t)?t.map(ut):[ut(t)],ud=(t,e,n)=>{if(e._n)return e;const s=Df((...i)=>xo(e(...i)),n);return s._c=!1,s},qa=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ga(i))continue;const r=t[i];if($(r))e[i]=ud(i,r,s);else if(r!=null){const o=xo(r);e[i]=()=>o}}},Ka=(t,e)=>{const n=xo(e);t.slots.default=()=>n},za=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},hd=(t,e,n)=>{const s=t.slots=Ua();if(t.vnode.shapeFlag&32){const i=e._;i?(za(s,e,n),n&&oa(s,"_",i,!0)):qa(e,s)}else e&&Ka(t,e)},fd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:za(i,e,n):(r=!e.$stable,qa(e,i)),o=e}else e&&(Ka(t,e),o={default:1});if(r)for(const l in i)!Ga(l)&&o[l]==null&&delete i[l]},He=Td;function dd(t){return pd(t)}function pd(t,e){const n=Pi();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=ft,insertStaticContent:m}=t,b=(d,p,g,E=null,y=null,C=null,R=void 0,T=null,I=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jn(d,p)&&(E=v(d),De(d,y,C,!0),d=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:w,ref:B,shapeFlag:N}=p;switch(w){case Fi:P(d,p,g,E);break;case ws:k(d,p,g,E);break;case lr:d==null&&O(p,g,E,R);break;case Ye:qt(d,p,g,E,y,C,R,T,I);break;default:N&1?ne(d,p,g,E,y,C,R,T,I):N&6?rt(d,p,g,E,y,C,R,T,I):(N&64||N&128)&&w.process(d,p,g,E,y,C,R,T,I,M)}B!=null&&y&&oi(B,d&&d.ref,C,p||d,!p)},P=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const y=p.el=d.el;p.children!==d.children&&a(y,p.children)}},k=(d,p,g,E)=>{d==null?s(p.el=c(p.children||""),g,E):p.el=d.el},O=(d,p,g,E)=>{[d.el,d.anchor]=m(d.children,p,g,E,d.el,d.anchor)},F=({el:d,anchor:p},g,E)=>{let y;for(;d&&d!==p;)y=f(d),s(d,g,E),d=y;s(p,g,E)},D=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},ne=(d,p,g,E,y,C,R,T,I)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),d==null?Se(p,g,E,y,C,R,T,I):Rt(d,p,y,C,R,T,I)},Se=(d,p,g,E,y,C,R,T)=>{let I,w;const{props:B,shapeFlag:N,transition:L,dirs:W}=d;if(I=d.el=o(d.type,C,B&&B.is,B),N&8?u(I,d.children):N&16&&st(d.children,I,null,E,y,rr(d,C),R,T),W&&Kt(d,null,E,"created"),ue(I,d,d.scopeId,R,E),B){for(const re in B)re!=="value"&&!ls(re)&&r(I,re,null,B[re],C,E);"value"in B&&r(I,"value",null,B.value,C),(w=B.onVnodeBeforeMount)&&ct(w,E,d)}W&&Kt(d,null,E,"beforeMount");const q=_d(y,L);q&&L.beforeEnter(I),s(I,p,g),((w=B&&B.onVnodeMounted)||q||W)&&He(()=>{w&&ct(w,E,d),q&&L.enter(I),W&&Kt(d,null,E,"mounted")},y)},ue=(d,p,g,E,y)=>{if(g&&_(d,g),E)for(let C=0;C<E.length;C++)_(d,E[C]);if(y){let C=y.subTree;if(p===C||eu(C.type)&&(C.ssContent===p||C.ssFallback===p)){const R=y.vnode;ue(d,R,R.scopeId,R.slotScopeIds,y.parent)}}},st=(d,p,g,E,y,C,R,T,I=0)=>{for(let w=I;w<d.length;w++){const B=d[w]=T?Ot(d[w]):ut(d[w]);b(null,B,p,g,E,y,C,R,T)}},Rt=(d,p,g,E,y,C,R)=>{const T=p.el=d.el;let{patchFlag:I,dynamicChildren:w,dirs:B}=p;I|=d.patchFlag&16;const N=d.props||se,L=p.props||se;let W;if(g&&zt(g,!1),(W=L.onVnodeBeforeUpdate)&&ct(W,g,p,d),B&&Kt(p,d,g,"beforeUpdate"),g&&zt(g,!0),(N.innerHTML&&L.innerHTML==null||N.textContent&&L.textContent==null)&&u(T,""),w?it(d.dynamicChildren,w,T,g,E,rr(p,y),C):R||z(d,p,T,null,g,E,rr(p,y),C,!1),I>0){if(I&16)xt(T,N,L,g,y);else if(I&2&&N.class!==L.class&&r(T,"class",null,L.class,y),I&4&&r(T,"style",N.style,L.style,y),I&8){const q=p.dynamicProps;for(let re=0;re<q.length;re++){const X=q[re],Le=N[X],Ie=L[X];(Ie!==Le||X==="value")&&r(T,X,Le,Ie,y,g)}}I&1&&d.children!==p.children&&u(T,p.children)}else!R&&w==null&&xt(T,N,L,g,y);((W=L.onVnodeUpdated)||B)&&He(()=>{W&&ct(W,g,p,d),B&&Kt(p,d,g,"updated")},E)},it=(d,p,g,E,y,C,R)=>{for(let T=0;T<p.length;T++){const I=d[T],w=p[T],B=I.el&&(I.type===Ye||!Jn(I,w)||I.shapeFlag&70)?h(I.el):g;b(I,w,B,null,E,y,C,R,!0)}},xt=(d,p,g,E,y)=>{if(p!==g){if(p!==se)for(const C in p)!ls(C)&&!(C in g)&&r(d,C,p[C],null,y,E);for(const C in g){if(ls(C))continue;const R=g[C],T=p[C];R!==T&&C!=="value"&&r(d,C,T,R,y,E)}"value"in g&&r(d,"value",p.value,g.value,y)}},qt=(d,p,g,E,y,C,R,T,I)=>{const w=p.el=d?d.el:l(""),B=p.anchor=d?d.anchor:l("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:W}=p;W&&(T=T?T.concat(W):W),d==null?(s(w,g,E),s(B,g,E),st(p.children||[],g,B,y,C,R,T,I)):N>0&&N&64&&L&&d.dynamicChildren?(it(d.dynamicChildren,L,g,y,C,R,T),(p.key!=null||y&&p===y.subTree)&&Ya(d,p,!0)):z(d,p,g,B,y,C,R,T,I)},rt=(d,p,g,E,y,C,R,T,I)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?y.ctx.activate(p,g,E,R,I):zn(p,g,E,y,C,R,I):fn(d,p,I)},zn=(d,p,g,E,y,C,R)=>{const T=d.component=Md(d,E,y);if(Ma(d)&&(T.ctx.renderer=M),Ld(T,!1,R),T.asyncDep){if(y&&y.registerDep(T,ge,R),!d.el){const I=T.subTree=je(ws);k(null,I,p,g)}}else ge(T,d,p,g,y,C,R)},fn=(d,p,g)=>{const E=p.component=d.component;if(Sd(d,p,g))if(E.asyncDep&&!E.asyncResolved){te(E,p,g);return}else E.next=p,E.update();else p.el=d.el,E.vnode=p},ge=(d,p,g,E,y,C,R)=>{const T=()=>{if(d.isMounted){let{next:N,bu:L,u:W,parent:q,vnode:re}=d;{const Fe=Qa(d);if(Fe){N&&(N.el=re.el,te(d,N,R)),Fe.asyncDep.then(()=>{d.isUnmounted||T()});return}}let X=N,Le;zt(d,!1),N?(N.el=re.el,te(d,N,R)):N=re,L&&Js(L),(Le=N.props&&N.props.onVnodeBeforeUpdate)&&ct(Le,q,N,re),zt(d,!0);const Ie=or(d),ze=d.subTree;d.subTree=Ie,b(ze,Ie,h(ze.el),v(ze),d,y,C),N.el=Ie.el,X===null&&Id(d,Ie.el),W&&He(W,y),(Le=N.props&&N.props.onVnodeUpdated)&&He(()=>ct(Le,q,N,re),y)}else{let N;const{el:L,props:W}=p,{bm:q,m:re,parent:X,root:Le,type:Ie}=d,ze=us(p);if(zt(d,!1),q&&Js(q),!ze&&(N=W&&W.onVnodeBeforeMount)&&ct(N,X,p),zt(d,!0),L&&he){const Fe=()=>{d.subTree=or(d),he(L,d.subTree,d,y,null)};ze&&Ie.__asyncHydrate?Ie.__asyncHydrate(L,d,Fe):Fe()}else{Le.ce&&Le.ce._injectChildStyle(Ie);const Fe=d.subTree=or(d);b(null,Fe,g,E,d,y,C),p.el=Fe.el}if(re&&He(re,y),!ze&&(N=W&&W.onVnodeMounted)){const Fe=p;He(()=>ct(N,X,Fe),y)}(p.shapeFlag&256||X&&us(X.vnode)&&X.vnode.shapeFlag&256)&&d.a&&He(d.a,y),d.isMounted=!0,p=g=E=null}};d.scope.on();const I=d.effect=new ua(T);d.scope.off();const w=d.update=I.run.bind(I),B=d.job=I.runIfDirty.bind(I);B.i=d,B.id=d.uid,I.scheduler=()=>So(B),zt(d,!0),w()},te=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,cd(d,p.props,E,g),fd(d,p.children,g),Vt(),vl(d),jt()},z=(d,p,g,E,y,C,R,T,I=!1)=>{const w=d&&d.children,B=d?d.shapeFlag:0,N=p.children,{patchFlag:L,shapeFlag:W}=p;if(L>0){if(L&128){Nt(w,N,g,E,y,C,R,T,I);return}else if(L&256){_t(w,N,g,E,y,C,R,T,I);return}}W&8?(B&16&&Ve(w,y,C),N!==w&&u(g,N)):B&16?W&16?Nt(w,N,g,E,y,C,R,T,I):Ve(w,y,C,!0):(B&8&&u(g,""),W&16&&st(N,g,E,y,C,R,T,I))},_t=(d,p,g,E,y,C,R,T,I)=>{d=d||wn,p=p||wn;const w=d.length,B=p.length,N=Math.min(w,B);let L;for(L=0;L<N;L++){const W=p[L]=I?Ot(p[L]):ut(p[L]);b(d[L],W,g,null,y,C,R,T,I)}w>B?Ve(d,y,C,!0,!1,N):st(p,g,E,y,C,R,T,I,N)},Nt=(d,p,g,E,y,C,R,T,I)=>{let w=0;const B=p.length;let N=d.length-1,L=B-1;for(;w<=N&&w<=L;){const W=d[w],q=p[w]=I?Ot(p[w]):ut(p[w]);if(Jn(W,q))b(W,q,g,null,y,C,R,T,I);else break;w++}for(;w<=N&&w<=L;){const W=d[N],q=p[L]=I?Ot(p[L]):ut(p[L]);if(Jn(W,q))b(W,q,g,null,y,C,R,T,I);else break;N--,L--}if(w>N){if(w<=L){const W=L+1,q=W<B?p[W].el:E;for(;w<=L;)b(null,p[w]=I?Ot(p[w]):ut(p[w]),g,q,y,C,R,T,I),w++}}else if(w>L)for(;w<=N;)De(d[w],y,C,!0),w++;else{const W=w,q=w,re=new Map;for(w=q;w<=L;w++){const Be=p[w]=I?Ot(p[w]):ut(p[w]);Be.key!=null&&re.set(Be.key,w)}let X,Le=0;const Ie=L-q+1;let ze=!1,Fe=0;const Yn=new Array(Ie);for(w=0;w<Ie;w++)Yn[w]=0;for(w=W;w<=N;w++){const Be=d[w];if(Le>=Ie){De(Be,y,C,!0);continue}let lt;if(Be.key!=null)lt=re.get(Be.key);else for(X=q;X<=L;X++)if(Yn[X-q]===0&&Jn(Be,p[X])){lt=X;break}lt===void 0?De(Be,y,C,!0):(Yn[lt-q]=w+1,lt>=Fe?Fe=lt:ze=!0,b(Be,p[lt],g,null,y,C,R,T,I),Le++)}const pl=ze?gd(Yn):wn;for(X=pl.length-1,w=Ie-1;w>=0;w--){const Be=q+w,lt=p[Be],_l=Be+1<B?p[Be+1].el:E;Yn[w]===0?b(null,lt,g,_l,y,C,R,T,I):ze&&(X<0||w!==pl[X]?ot(lt,g,_l,2):X--)}}},ot=(d,p,g,E,y=null)=>{const{el:C,type:R,transition:T,children:I,shapeFlag:w}=d;if(w&6){ot(d.component.subTree,p,g,E);return}if(w&128){d.suspense.move(p,g,E);return}if(w&64){R.move(d,p,g,M);return}if(R===Ye){s(C,p,g);for(let N=0;N<I.length;N++)ot(I[N],p,g,E);s(d.anchor,p,g);return}if(R===lr){F(d,p,g);return}if(E!==2&&w&1&&T)if(E===0)T.beforeEnter(C),s(C,p,g),He(()=>T.enter(C),y);else{const{leave:N,delayLeave:L,afterLeave:W}=T,q=()=>s(C,p,g),re=()=>{N(C,()=>{q(),W&&W()})};L?L(C,q,re):re()}else s(C,p,g)},De=(d,p,g,E=!1,y=!1)=>{const{type:C,props:R,ref:T,children:I,dynamicChildren:w,shapeFlag:B,patchFlag:N,dirs:L,cacheIndex:W}=d;if(N===-2&&(y=!1),T!=null&&oi(T,null,g,d,!0),W!=null&&(p.renderCache[W]=void 0),B&256){p.ctx.deactivate(d);return}const q=B&1&&L,re=!us(d);let X;if(re&&(X=R&&R.onVnodeBeforeUnmount)&&ct(X,p,d),B&6)Gs(d.component,g,E);else{if(B&128){d.suspense.unmount(g,E);return}q&&Kt(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,g,M,E):w&&!w.hasOnce&&(C!==Ye||N>0&&N&64)?Ve(w,p,g,!1,!0):(C===Ye&&N&384||!y&&B&16)&&Ve(I,p,g),E&&dn(d)}(re&&(X=R&&R.onVnodeUnmounted)||q)&&He(()=>{X&&ct(X,p,d),q&&Kt(d,null,p,"unmounted")},g)},dn=d=>{const{type:p,el:g,anchor:E,transition:y}=d;if(p===Ye){pn(g,E);return}if(p===lr){D(d);return}const C=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:T}=y,I=()=>R(g,C);T?T(d.el,C,I):I()}else C()},pn=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Gs=(d,p,g)=>{const{bum:E,scope:y,job:C,subTree:R,um:T,m:I,a:w}=d;Rl(I),Rl(w),E&&Js(E),y.stop(),C&&(C.flags|=8,De(R,d,p,g)),T&&He(T,p),He(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ve=(d,p,g,E=!1,y=!1,C=0)=>{for(let R=C;R<d.length;R++)De(d[R],p,g,E,y)},v=d=>{if(d.shapeFlag&6)return v(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=f(d.anchor||d.el),g=p&&p[Mf];return g?f(g):p};let A=!1;const x=(d,p,g)=>{d==null?p._vnode&&De(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,g),p._vnode=d,A||(A=!0,vl(),Pa(),A=!1)},M={p:b,um:De,m:ot,r:dn,mt:zn,mc:st,pc:z,pbc:it,n:v,o:t};let J,he;return{render:x,hydrate:J,createApp:od(x,J)}}function rr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _d(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ya(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Ot(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&Ya(o,l)),l.type===Fi&&(l.el=o.el)}}function gd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Qa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qa(e)}function Rl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const md=Symbol.for("v-scx"),yd=()=>bt(md);function Zs(t,e,n){return Ja(t,e,n)}function Ja(t,e,n=se){const{immediate:s,deep:i,flush:r,once:o}=n,l=be({},n),c=e&&s||!e&&r!=="post";let a;if(Is){if(r==="sync"){const _=yd();a=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=ft,_.resume=ft,_.pause=ft,_}}const u=xe;l.call=(_,m,b)=>dt(_,u,m,b);let h=!1;r==="post"?l.scheduler=_=>{He(_,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(_,m)=>{m?_():So(_)}),l.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=Nf(t,e,l);return Is&&(a?a.push(f):c&&f()),f}function vd(t,e,n){const s=this.proxy,i=_e(t)?t.includes(".")?Xa(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=Hs(this),l=Ja(i,r.bind(s),n);return o(),l}function Xa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ed=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ke(e)}Modifiers`]||t[`${an(e)}Modifiers`];function Cd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&Ed(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>_e(u)?u.trim():u)),o.number&&(i=n.map(Tr)));let l,c=s[l=Zi(e)]||s[l=Zi(Ke(e))];!c&&r&&(c=s[l=Zi(an(e))]),c&&dt(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,dt(a,t,6,i)}}function Za(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!$(t)){const c=a=>{const u=Za(a,e,!0);u&&(l=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ae(t)&&s.set(t,null),null):(U(r)?r.forEach(c=>o[c]=null):be(o,r),ae(t)&&s.set(t,o),o)}function Li(t,e){return!t||!Ri(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,an(e))||Q(t,e))}function or(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:c,render:a,renderCache:u,props:h,data:f,setupState:_,ctx:m,inheritAttrs:b}=t,P=ri(t);let k,O;try{if(n.shapeFlag&4){const D=i||s,ne=D;k=ut(a.call(ne,D,u,h,_,f,m)),O=l}else{const D=e;k=ut(D.length>1?D(h,{attrs:l,slots:o,emit:c}):D(h,null)),O=e.props?l:bd(l)}}catch(D){fs.length=0,ki(D,t,1),k=je(ws)}let F=k;if(O&&b!==!1){const D=Object.keys(O),{shapeFlag:ne}=F;D.length&&ne&7&&(r&&D.some(fo)&&(O=wd(O,r)),F=On(F,O,!1,!0))}return n.dirs&&(F=On(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Io(F,n.transition),k=F,ri(P),k}const bd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ri(n))&&((e||(e={}))[n]=t[n]);return e},wd=(t,e)=>{const n={};for(const s in t)(!fo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Sd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?xl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Li(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?xl(s,o,a):!0:!!o;return!1}function xl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Li(n,r))return!0}return!1}function Id({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const eu=t=>t.__isSuspense;function Td(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Of(t)}const Ye=Symbol.for("v-fgt"),Fi=Symbol.for("v-txt"),ws=Symbol.for("v-cmt"),lr=Symbol.for("v-stc"),fs=[];let $e=null;function Qt(t=!1){fs.push($e=t?null:[])}function Rd(){fs.pop(),$e=fs[fs.length-1]||null}let Ss=1;function Nl(t,e=!1){Ss+=t,t<0&&$e&&e&&($e.hasOnce=!0)}function xd(t){return t.dynamicChildren=Ss>0?$e||wn:null,Rd(),Ss>0&&$e&&$e.push(t),t}function Jt(t,e,n,s,i,r){return xd(me(t,e,n,s,i,r,!0))}function ci(t){return t?t.__v_isVNode===!0:!1}function Jn(t,e){return t.type===e.type&&t.key===e.key}const tu=({key:t})=>t??null,ei=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||Ne(t)||$(t)?{i:Ue,r:t,k:e,f:!!n}:t:null);function me(t,e=null,n=null,s=0,i=null,r=t===Ye?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tu(e),ref:e&&ei(e),scopeId:Da,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ue};return l?(No(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),Ss>0&&!o&&$e&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&$e.push(c),c}const je=Nd;function Nd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Jf)&&(t=ws),ci(t)){const l=On(t,e,!0);return n&&No(l,n),Ss>0&&!r&&$e&&(l.shapeFlag&6?$e[$e.indexOf(t)]=l:$e.push(l)),l.patchFlag=-2,l}if(Ud(t)&&(t=t.__vccOpts),e){e=Ad(e);let{class:l,style:c}=e;l&&!_e(l)&&(e.class=Oi(l)),ae(c)&&(wo(c)&&!U(c)&&(c=be({},c)),e.style=go(c))}const o=_e(t)?1:eu(t)?128:Lf(t)?64:ae(t)?4:$(t)?2:0;return me(t,e,n,s,i,o,r,!0)}function Ad(t){return t?wo(t)||$a(t)?be({},t):t:null}function On(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:c}=t,a=e?Od(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&tu(a),ref:e&&e.ref?n&&r?U(r)?r.concat(ei(e)):[r,ei(e)]:ei(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Io(u,c.clone(u)),u}function Pd(t=" ",e=0){return je(Fi,null,t,e)}function ut(t){return t==null||typeof t=="boolean"?je(ws):U(t)?je(Ye,null,t.slice()):ci(t)?Ot(t):je(Fi,null,String(t))}function Ot(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:On(t)}function No(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),No(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!$a(e)?e._ctx=Ue:i===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),s&64?(n=16,e=[Pd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Od(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Oi([e.class,s.class]));else if(i==="style")e.style=go([e.style,s.style]);else if(Ri(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){dt(t,e,7,[n,s])}const Dd=Ha();let kd=0;function Md(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Dd,r={uid:kd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(s,i),emitsOptions:Za(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Cd.bind(null,r),t.ce&&t.ce(r),r}let xe=null,ai,Lr;{const t=Pi(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ai=e("__VUE_INSTANCE_SETTERS__",n=>xe=n),Lr=e("__VUE_SSR_SETTERS__",n=>Is=n)}const Hs=t=>{const e=xe;return ai(t),t.scope.on(),()=>{t.scope.off(),ai(e)}},Al=()=>{xe&&xe.scope.off(),ai(null)};function nu(t){return t.vnode.shapeFlag&4}let Is=!1;function Ld(t,e=!1,n=!1){e&&Lr(e);const{props:s,children:i}=t.vnode,r=nu(t);ld(t,s,r,e),hd(t,i,n);const o=r?Fd(t,e):void 0;return e&&Lr(!1),o}function Fd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zf);const{setup:s}=n;if(s){Vt();const i=t.setupContext=s.length>1?Hd(t):null,r=Hs(t),o=Bs(s,t,0,[t.props,i]),l=sa(o);if(jt(),r(),(l||t.sp)&&!us(t)&&ka(t),l){if(o.then(Al,Al),e)return o.then(c=>{Pl(t,c,e)}).catch(c=>{ki(c,t,0)});t.asyncDep=o}else Pl(t,o,e)}else su(t,e)}function Pl(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Ra(e)),su(t,n)}let Ol;function su(t,e,n){const s=t.type;if(!t.render){if(!e&&Ol&&!s.render){const i=s.template||Ro(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=be(be({isCustomElement:r,delimiters:l},o),c);s.render=Ol(i,a)}}t.render=s.render||ft}{const i=Hs(t);Vt();try{ed(t)}finally{jt(),i()}}}const Bd={get(t,e){return Te(t,"get",""),t[e]}};function Hd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Bd),slots:t.slots,emit:t.emit,expose:e}}function Bi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ra(bf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hs)return hs[n](t)},has(e,n){return n in e||n in hs}})):t.proxy}function Wd(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function Ud(t){return $(t)&&"__vccOpts"in t}const Qe=(t,e)=>Rf(t,e,Is);function iu(t,e,n){const s=arguments.length;return s===2?ae(e)&&!U(e)?ci(e)?je(t,null,[e]):je(t,e):je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ci(n)&&(n=[n]),je(t,e,n))}const $d="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fr;const Dl=typeof window<"u"&&window.trustedTypes;if(Dl)try{Fr=Dl.createPolicy("vue",{createHTML:t=>t})}catch{}const ru=Fr?t=>Fr.createHTML(t):t=>t,Vd="http://www.w3.org/2000/svg",jd="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,kl=yt&&yt.createElement("template"),Gd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?yt.createElementNS(Vd,t):e==="mathml"?yt.createElementNS(jd,t):n?yt.createElement(t,{is:n}):yt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>yt.createTextNode(t),createComment:t=>yt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{kl.innerHTML=ru(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=kl.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qd=Symbol("_vtc");function Kd(t,e,n){const s=t[qd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ml=Symbol("_vod"),zd=Symbol("_vsh"),Yd=Symbol(""),Qd=/(^|;)\s*display\s*:/;function Jd(t,e,n){const s=t.style,i=_e(n);let r=!1;if(n&&!i){if(e)if(_e(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ti(s,l,"")}else for(const o in e)n[o]==null&&ti(s,o,"");for(const o in n)o==="display"&&(r=!0),ti(s,o,n[o])}else if(i){if(e!==n){const o=s[Yd];o&&(n+=";"+o),s.cssText=n,r=Qd.test(n)}}else e&&t.removeAttribute("style");Ml in t&&(t[Ml]=r?s.display:"",t[zd]&&(s.display="none"))}const Ll=/\s*!important$/;function ti(t,e,n){if(U(n))n.forEach(s=>ti(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Xd(t,e);Ll.test(n)?t.setProperty(an(s),n.replace(Ll,""),"important"):t[s]=n}}const Fl=["Webkit","Moz","ms"],cr={};function Xd(t,e){const n=cr[e];if(n)return n;let s=Ke(e);if(s!=="filter"&&s in t)return cr[e]=s;s=Ai(s);for(let i=0;i<Fl.length;i++){const r=Fl[i]+s;if(r in t)return cr[e]=r}return e}const Bl="http://www.w3.org/1999/xlink";function Hl(t,e,n,s,i,r=ef(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Bl,e.slice(6,e.length)):t.setAttributeNS(Bl,e,n):n==null||r&&!la(n)?t.removeAttribute(e):t.setAttribute(e,r?"":$t(n)?String(n):n)}function Wl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ru(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=la(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function En(t,e,n,s){t.addEventListener(e,n,s)}function Zd(t,e,n,s){t.removeEventListener(e,n,s)}const Ul=Symbol("_vei");function ep(t,e,n,s,i=null){const r=t[Ul]||(t[Ul]={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=tp(e);if(s){const a=r[e]=ip(s,i);En(t,l,a,c)}else o&&(Zd(t,l,o,c),r[e]=void 0)}}const $l=/(?:Once|Passive|Capture)$/;function tp(t){let e;if($l.test(t)){e={};let s;for(;s=t.match($l);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):an(t.slice(2)),e]}let ar=0;const np=Promise.resolve(),sp=()=>ar||(np.then(()=>ar=0),ar=Date.now());function ip(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;dt(rp(s,n.value),e,5,[s])};return n.value=t,n.attached=sp(),n}function rp(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Vl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,op=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Kd(t,s,o):e==="style"?Jd(t,n,s):Ri(e)?fo(e)||ep(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lp(t,e,s,o))?(Wl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!_e(s))?Wl(t,Ke(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Hl(t,e,s,o))};function lp(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vl(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Vl(e)&&_e(n)?!1:e in t}const jl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Js(e,n):e};function cp(t){t.target.composing=!0}function Gl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ur=Symbol("_assign"),ap={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[ur]=jl(i);const r=s||i.props&&i.props.type==="number";En(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Tr(l)),t[ur](l)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",cp),En(t,"compositionend",Gl),En(t,"change",Gl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[ur]=jl(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Tr(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c))}},up=be({patchProp:op},Gd);let ql;function hp(){return ql||(ql=dd(up))}const fp=(...t)=>{const e=hp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=pp(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,dp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function dp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function pp(t){return _e(t)?document.querySelector(t):t}const _p=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},gp={},mp={id:"app"};function yp(t,e){const n=Qf("router-view");return Qt(),Jt("div",mp,[je(n)])}const vp=_p(gp,[["render",yp],["__scopeId","data-v-54158ac6"]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cn=typeof document<"u";function ou(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ep(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ou(t.default)}const Z=Object.assign;function hr(t,e){const n={};for(const s in e){const i=e[s];n[s]=tt(i)?i.map(t):t(i)}return n}const ds=()=>{},tt=Array.isArray,lu=/#/g,Cp=/&/g,bp=/\//g,wp=/=/g,Sp=/\?/g,cu=/\+/g,Ip=/%5B/g,Tp=/%5D/g,au=/%5E/g,Rp=/%60/g,uu=/%7B/g,xp=/%7C/g,hu=/%7D/g,Np=/%20/g;function Ao(t){return encodeURI(""+t).replace(xp,"|").replace(Ip,"[").replace(Tp,"]")}function Ap(t){return Ao(t).replace(uu,"{").replace(hu,"}").replace(au,"^")}function Br(t){return Ao(t).replace(cu,"%2B").replace(Np,"+").replace(lu,"%23").replace(Cp,"%26").replace(Rp,"`").replace(uu,"{").replace(hu,"}").replace(au,"^")}function Pp(t){return Br(t).replace(wp,"%3D")}function Op(t){return Ao(t).replace(lu,"%23").replace(Sp,"%3F")}function Dp(t){return t==null?"":Op(t).replace(bp,"%2F")}function Ts(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const kp=/\/$/,Mp=t=>t.replace(kp,"");function fr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Hp(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Ts(o)}}function Lp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Fp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Dn(e.matched[s],n.matched[i])&&fu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Dn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bp(t[n],e[n]))return!1;return!0}function Bp(t,e){return tt(t)?zl(t,e):tt(e)?zl(e,t):t===e}function zl(t,e){return tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Hp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Rs;(function(t){t.pop="pop",t.push="push"})(Rs||(Rs={}));var ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ps||(ps={}));function Wp(t){if(!t)if(Cn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mp(t)}const Up=/^[^#]+#/;function $p(t,e){return t.replace(Up,"#")+e}function Vp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Hi=()=>({left:window.scrollX,top:window.scrollY});function jp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Vp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yl(t,e){return(history.state?history.state.position-e:-1)+t}const Hr=new Map;function Gp(t,e){Hr.set(t,e)}function qp(t){const e=Hr.get(t);return Hr.delete(t),e}let Kp=()=>location.protocol+"//"+location.host;function du(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Kl(c,"")}return Kl(n,t)+s+i}function zp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=du(t,location),m=n.value,b=e.value;let P=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}P=b?f.position-b.position:0}else s(_);i.forEach(k=>{k(n.value,m,{delta:P,type:Rs.pop,direction:P?P>0?ps.forward:ps.back:ps.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(Z({},f.state,{scroll:Hi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:a,destroy:h}}function Ql(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Hi():null}}function Yp(t){const{history:e,location:n}=window,s={value:du(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Kp()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=Z({},e.state,Ql(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=Z({},i.value,e.state,{forward:c,scroll:Hi()});r(u.current,u,!0);const h=Z({},Ql(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function Qp(t){t=Wp(t);const e=Yp(t),n=zp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Z({location:"",base:t,go:s,createHref:$p.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Jp(t){return typeof t=="string"||t&&typeof t=="object"}function pu(t){return typeof t=="string"||typeof t=="symbol"}const _u=Symbol("");var Jl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Jl||(Jl={}));function kn(t,e){return Z(new Error,{type:t,[_u]:!0},e)}function mt(t,e){return t instanceof Error&&_u in t&&(e==null||!!(t.type&e))}const Xl="[^/]+?",Xp={sensitive:!1,strict:!1,start:!0,end:!0},Zp=/[.+*?^${}()[\]/\\]/g;function e_(t,e){const n=Z({},Xp,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Zp,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:b,optional:P,regexp:k}=f;r.push({name:m,repeatable:b,optional:P});const O=k||Xl;if(O!==Xl){_+=10;try{new RegExp(`(${O})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+D.message)}}let F=b?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(F=P&&a.length<2?`(?:/${F})`:"/"+F),P&&(F+="?"),i+=F,_+=20,P&&(_+=-8),b&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:b,optional:P}=_,k=m in a?a[m]:"";if(tt(k)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=tt(k)?k.join("/"):k;if(!O)if(P)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function t_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gu(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=t_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Zl(s))return 1;if(Zl(i))return-1}return i.length-s.length}function Zl(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const n_={type:0,value:""},s_=/[a-zA-Z0-9_]/;function i_(t){if(!t)return[[]];if(t==="/")return[[n_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){a&&(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:s_.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function r_(t,e,n){const s=e_(i_(t.path),n),i=Z(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function o_(t,e){const n=[],s=new Map;e=sc({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,f,_){const m=!_,b=tc(h);b.aliasOf=_&&_.record;const P=sc(e,h),k=[b];if("alias"in h){const D=typeof h.alias=="string"?[h.alias]:h.alias;for(const ne of D)k.push(tc(Z({},b,{components:_?_.record.components:b.components,path:ne,aliasOf:_?_.record:b})))}let O,F;for(const D of k){const{path:ne}=D;if(f&&ne[0]!=="/"){const Se=f.record.path,ue=Se[Se.length-1]==="/"?"":"/";D.path=f.record.path+(ne&&ue+ne)}if(O=r_(D,f,P),_?_.alias.push(O):(F=F||O,F!==O&&F.alias.push(O),m&&h.name&&!nc(O)&&o(h.name)),mu(O)&&c(O),b.children){const Se=b.children;for(let ue=0;ue<Se.length;ue++)r(Se[ue],O,_&&_.children[ue])}_=_||O}return F?()=>{o(F)}:ds}function o(h){if(pu(h)){const f=s.get(h);f&&(s.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function l(){return n}function c(h){const f=a_(h,n);n.splice(f,0,h),h.record.name&&!nc(h)&&s.set(h.record.name,h)}function a(h,f){let _,m={},b,P;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw kn(1,{location:h});P=_.record.name,m=Z(ec(f.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),h.params&&ec(h.params,_.keys.map(F=>F.name))),b=_.stringify(m)}else if(h.path!=null)b=h.path,_=n.find(F=>F.re.test(b)),_&&(m=_.parse(b),P=_.record.name);else{if(_=f.name?s.get(f.name):n.find(F=>F.re.test(f.path)),!_)throw kn(1,{location:h,currentLocation:f});P=_.record.name,m=Z({},f.params,h.params),b=_.stringify(m)}const k=[];let O=_;for(;O;)k.unshift(O.record),O=O.parent;return{name:P,path:b,params:m,matched:k,meta:c_(k)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:a,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:i}}function ec(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function tc(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:l_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function l_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function nc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function c_(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function sc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function a_(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;gu(t,e[r])<0?s=r:n=r+1}const i=u_(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function u_(t){let e=t;for(;e=e.parent;)if(mu(e)&&gu(t,e)===0)return e}function mu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function h_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(cu," "),o=r.indexOf("="),l=Ts(o<0?r:r.slice(0,o)),c=o<0?null:Ts(r.slice(o+1));if(l in e){let a=e[l];tt(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function ic(t){let e="";for(let n in t){const s=t[n];if(n=Pp(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(tt(s)?s.map(r=>r&&Br(r)):[s&&Br(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function f_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=tt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const d_=Symbol(""),rc=Symbol(""),Po=Symbol(""),yu=Symbol(""),Wr=Symbol("");function Xn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Dt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const a=f=>{f===!1?c(kn(4,{from:n,to:e})):f instanceof Error?c(f):Jp(f)?c(kn(2,{from:e,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),l())},u=r(()=>t.call(s&&s.instances[i],e,n,a));let h=Promise.resolve(u);t.length<3&&(h=h.then(a)),h.catch(f=>c(f))})}function dr(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(ou(c)){const u=(c.__vccOpts||c)[e];u&&r.push(Dt(u,n,s,o,l,i))}else{let a=c();r.push(()=>a.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const h=Ep(u)?u.default:u;o.mods[l]=u,o.components[l]=h;const _=(h.__vccOpts||h)[e];return _&&Dt(_,n,s,o,l,i)()}))}}return r}function oc(t){const e=bt(Po),n=bt(yu),s=Qe(()=>{const c=nn(t.to);return e.resolve(c)}),i=Qe(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Dn.bind(null,u));if(f>-1)return f;const _=lc(c[a-2]);return a>1&&lc(u)===_&&h[h.length-1].path!==_?h.findIndex(Dn.bind(null,c[a-2])):f}),r=Qe(()=>i.value>-1&&m_(n.params,s.value.params)),o=Qe(()=>i.value>-1&&i.value===n.matched.length-1&&fu(n.params,s.value.params));function l(c={}){return g_(c)?e[nn(t.replace)?"replace":"push"](nn(t.to)).catch(ds):Promise.resolve()}return{route:s,href:Qe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const p_=To({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oc,setup(t,{slots:e}){const n=Fs(oc(t)),{options:s}=bt(Po),i=Qe(()=>({[cc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[cc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:iu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),__=p_;function g_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function m_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!tt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function lc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cc=(t,e,n)=>t??e??n,y_=To({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=bt(Wr),i=Qe(()=>t.route||s.value),r=bt(rc,0),o=Qe(()=>{let a=nn(r);const{matched:u}=i.value;let h;for(;(h=u[a])&&!h.components;)a++;return a}),l=Qe(()=>i.value.matched[o.value]);Xs(rc,Qe(()=>o.value+1)),Xs(d_,l),Xs(Wr,i);const c=is();return Zs(()=>[c.value,l.value,t.name],([a,u,h],[f,_,m])=>{u&&(u.instances[h]=a,_&&_!==u&&a&&a===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),a&&u&&(!_||!Dn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(b=>b(a))},{flush:"post"}),()=>{const a=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return ac(n.default,{Component:f,route:a});const _=h.props[u],m=_?_===!0?a.params:typeof _=="function"?_(a):_:null,P=iu(f,Z({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ac(n.default,{Component:P,route:a})||P}}});function ac(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const v_=y_;function E_(t){const e=o_(t.routes,t),n=t.parseQuery||h_,s=t.stringifyQuery||ic,i=t.history,r=Xn(),o=Xn(),l=Xn(),c=wf(At);let a=At;Cn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=hr.bind(null,v=>""+v),h=hr.bind(null,Dp),f=hr.bind(null,Ts);function _(v,A){let x,M;return pu(v)?(x=e.getRecordMatcher(v),M=A):M=v,e.addRoute(M,x)}function m(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function b(){return e.getRoutes().map(v=>v.record)}function P(v){return!!e.getRecordMatcher(v)}function k(v,A){if(A=Z({},A||c.value),typeof v=="string"){const p=fr(n,v,A.path),g=e.resolve({path:p.path},A),E=i.createHref(p.fullPath);return Z(p,g,{params:f(g.params),hash:Ts(p.hash),redirectedFrom:void 0,href:E})}let x;if(v.path!=null)x=Z({},v,{path:fr(n,v.path,A.path).path});else{const p=Z({},v.params);for(const g in p)p[g]==null&&delete p[g];x=Z({},v,{params:h(p)}),A.params=h(A.params)}const M=e.resolve(x,A),J=v.hash||"";M.params=u(f(M.params));const he=Lp(s,Z({},v,{hash:Ap(J),path:M.path})),d=i.createHref(he);return Z({fullPath:he,hash:J,query:s===ic?f_(v.query):v.query||{}},M,{redirectedFrom:void 0,href:d})}function O(v){return typeof v=="string"?fr(n,v,c.value.path):Z({},v)}function F(v,A){if(a!==v)return kn(8,{from:A,to:v})}function D(v){return ue(v)}function ne(v){return D(Z(O(v),{replace:!0}))}function Se(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:x}=A;let M=typeof x=="function"?x(v):x;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=O(M):{path:M},M.params={}),Z({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function ue(v,A){const x=a=k(v),M=c.value,J=v.state,he=v.force,d=v.replace===!0,p=Se(x);if(p)return ue(Z(O(p),{state:typeof p=="object"?Z({},J,p.state):J,force:he,replace:d}),A||x);const g=x;g.redirectedFrom=A;let E;return!he&&Fp(s,M,x)&&(E=kn(16,{to:g,from:M}),ot(M,M,!0,!1)),(E?Promise.resolve(E):it(g,M)).catch(y=>mt(y)?mt(y,2)?y:Nt(y):z(y,g,M)).then(y=>{if(y){if(mt(y,2))return ue(Z({replace:d},O(y.to),{state:typeof y.to=="object"?Z({},J,y.to.state):J,force:he}),A||g)}else y=qt(g,M,!0,d,J);return xt(g,M,y),y})}function st(v,A){const x=F(v,A);return x?Promise.reject(x):Promise.resolve()}function Rt(v){const A=pn.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function it(v,A){let x;const[M,J,he]=C_(v,A);x=dr(M.reverse(),"beforeRouteLeave",v,A);for(const p of M)p.leaveGuards.forEach(g=>{x.push(Dt(g,v,A))});const d=st.bind(null,v,A);return x.push(d),Ve(x).then(()=>{x=[];for(const p of r.list())x.push(Dt(p,v,A));return x.push(d),Ve(x)}).then(()=>{x=dr(J,"beforeRouteUpdate",v,A);for(const p of J)p.updateGuards.forEach(g=>{x.push(Dt(g,v,A))});return x.push(d),Ve(x)}).then(()=>{x=[];for(const p of he)if(p.beforeEnter)if(tt(p.beforeEnter))for(const g of p.beforeEnter)x.push(Dt(g,v,A));else x.push(Dt(p.beforeEnter,v,A));return x.push(d),Ve(x)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),x=dr(he,"beforeRouteEnter",v,A,Rt),x.push(d),Ve(x))).then(()=>{x=[];for(const p of o.list())x.push(Dt(p,v,A));return x.push(d),Ve(x)}).catch(p=>mt(p,8)?p:Promise.reject(p))}function xt(v,A,x){l.list().forEach(M=>Rt(()=>M(v,A,x)))}function qt(v,A,x,M,J){const he=F(v,A);if(he)return he;const d=A===At,p=Cn?history.state:{};x&&(M||d?i.replace(v.fullPath,Z({scroll:d&&p&&p.scroll},J)):i.push(v.fullPath,J)),c.value=v,ot(v,A,x,d),Nt()}let rt;function zn(){rt||(rt=i.listen((v,A,x)=>{if(!Gs.listening)return;const M=k(v),J=Se(M);if(J){ue(Z(J,{replace:!0}),M).catch(ds);return}a=M;const he=c.value;Cn&&Gp(Yl(he.fullPath,x.delta),Hi()),it(M,he).catch(d=>mt(d,12)?d:mt(d,2)?(ue(d.to,M).then(p=>{mt(p,20)&&!x.delta&&x.type===Rs.pop&&i.go(-1,!1)}).catch(ds),Promise.reject()):(x.delta&&i.go(-x.delta,!1),z(d,M,he))).then(d=>{d=d||qt(M,he,!1),d&&(x.delta&&!mt(d,8)?i.go(-x.delta,!1):x.type===Rs.pop&&mt(d,20)&&i.go(-1,!1)),xt(M,he,d)}).catch(ds)}))}let fn=Xn(),ge=Xn(),te;function z(v,A,x){Nt(v);const M=ge.list();return M.length?M.forEach(J=>J(v,A,x)):console.error(v),Promise.reject(v)}function _t(){return te&&c.value!==At?Promise.resolve():new Promise((v,A)=>{fn.add([v,A])})}function Nt(v){return te||(te=!v,zn(),fn.list().forEach(([A,x])=>v?x(v):A()),fn.reset()),v}function ot(v,A,x,M){const{scrollBehavior:J}=t;if(!Cn||!J)return Promise.resolve();const he=!x&&qp(Yl(v.fullPath,0))||(M||!x)&&history.state&&history.state.scroll||null;return Na().then(()=>J(v,A,he)).then(d=>d&&jp(d)).catch(d=>z(d,v,A))}const De=v=>i.go(v);let dn;const pn=new Set,Gs={currentRoute:c,listening:!0,addRoute:_,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:b,resolve:k,options:t,push:D,replace:ne,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:ge.add,isReady:_t,install(v){const A=this;v.component("RouterLink",__),v.component("RouterView",v_),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(c)}),Cn&&!dn&&c.value===At&&(dn=!0,D(i.location).catch(J=>{}));const x={};for(const J in At)Object.defineProperty(x,J,{get:()=>c.value[J],enumerable:!0});v.provide(Po,A),v.provide(yu,Sa(x)),v.provide(Wr,c);const M=v.unmount;pn.add(v),v.unmount=function(){pn.delete(v),pn.size<1&&(a=At,rt&&rt(),rt=null,c.value=At,dn=!1,te=!1),M()}}};function Ve(v){return v.reduce((A,x)=>A.then(()=>Rt(x)),Promise.resolve())}return Gs}function C_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>Dn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>Dn(a,c))||i.push(c))}return[n,s,i]}var uc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw $n(e)},$n=function(t){return new Error("Firebase Database ("+vu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},b_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Eu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):b_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw new w_;const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const m=a<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class w_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cu=function(t){const e=Eu(t);return Oo.encodeByteArray(e,!0)},ui=function(t){return Cu(t).replace(/\./g,"")},Ur=function(t){try{return Oo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t){return bu(void 0,t)}function bu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!I_(n)||(t[n]=bu(t[n],e[n]));return t}function I_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=()=>T_().__FIREBASE_DEFAULTS__,x_=()=>{if(typeof process>"u"||typeof uc>"u")return;const t=uc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},N_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ur(t[1]);return e&&JSON.parse(e)},wu=()=>{try{return R_()||x_()||N_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A_=t=>{var e,n;return(n=(e=wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},P_=t=>{const e=A_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Su=()=>{var t;return(t=wu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ui(JSON.stringify(n)),ui(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D_())}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tu(){return vu.NODE_ADMIN===!0}function M_(){try{return typeof indexedDB=="object"}catch{return!1}}function L_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="FirebaseError";class Ws extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=F_,Object.setPrototypeOf(this,Ws.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ru.prototype.create)}}class Ru{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?B_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ws(i,l,s)}}function B_(t,e){return t.replace(H_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const H_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=xs(Ur(r[0])||""),n=xs(Ur(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},W_=function(t){const e=xu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},U_=function(t){const e=xu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Mn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function $r(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(hc(r)&&hc(o)){if(!Vr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function hc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ln(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){return t&&t._delegate?t._delegate:t}class Ns{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ht;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(K_(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:q_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q_(t){return t===Xt?void 0:t}function K_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new G_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Y_={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Q_=ce.INFO,J_={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},X_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=J_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nu{constructor(e){this.name=e,this._logLevel=Q_,this._logHandler=X_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Z_=(t,e)=>e.some(n=>t instanceof n);let fc,dc;function eg(){return fc||(fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return dc||(dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Au=new WeakMap,jr=new WeakMap,Pu=new WeakMap,pr=new WeakMap,Do=new WeakMap;function ng(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Lt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Au.set(n,t)}).catch(()=>{}),Do.set(e,t),e}function sg(t){if(jr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Gr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ig(t){Gr=t(Gr)}function rg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_r(this),e,...n);return Pu.set(s,e.sort?e.sort():[e]),Lt(s)}:tg().includes(t)?function(...e){return t.apply(_r(this),e),Lt(Au.get(this))}:function(...e){return Lt(t.apply(_r(this),e))}}function og(t){return typeof t=="function"?rg(t):(t instanceof IDBTransaction&&sg(t),Z_(t,eg())?new Proxy(t,Gr):t)}function Lt(t){if(t instanceof IDBRequest)return ng(t);if(pr.has(t))return pr.get(t);const e=og(t);return e!==t&&(pr.set(t,e),Do.set(e,t)),e}const _r=t=>Do.get(t);function lg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Lt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Lt(o.result),c.oldVersion,c.newVersion,Lt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const cg=["get","getKey","getAll","getAllKeys","count"],ag=["put","add","delete","clear"],gr=new Map;function pc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gr.get(e))return gr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ag.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||cg.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return gr.set(e,r),r}ig(t=>({...t,get:(e,n,s)=>pc(e,n)||t.get(e,n,s),has:(e,n)=>!!pc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qr="@firebase/app",_c="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new Nu("@firebase/app"),fg="@firebase/app-compat",dg="@firebase/analytics-compat",pg="@firebase/analytics",_g="@firebase/app-check-compat",gg="@firebase/app-check",mg="@firebase/auth",yg="@firebase/auth-compat",vg="@firebase/database",Eg="@firebase/data-connect",Cg="@firebase/database-compat",bg="@firebase/functions",wg="@firebase/functions-compat",Sg="@firebase/installations",Ig="@firebase/installations-compat",Tg="@firebase/messaging",Rg="@firebase/messaging-compat",xg="@firebase/performance",Ng="@firebase/performance-compat",Ag="@firebase/remote-config",Pg="@firebase/remote-config-compat",Og="@firebase/storage",Dg="@firebase/storage-compat",kg="@firebase/firestore",Mg="@firebase/vertexai-preview",Lg="@firebase/firestore-compat",Fg="firebase",Bg="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]",Hg={[qr]:"fire-core",[fg]:"fire-core-compat",[pg]:"fire-analytics",[dg]:"fire-analytics-compat",[gg]:"fire-app-check",[_g]:"fire-app-check-compat",[mg]:"fire-auth",[yg]:"fire-auth-compat",[vg]:"fire-rtdb",[Eg]:"fire-data-connect",[Cg]:"fire-rtdb-compat",[bg]:"fire-fn",[wg]:"fire-fn-compat",[Sg]:"fire-iid",[Ig]:"fire-iid-compat",[Tg]:"fire-fcm",[Rg]:"fire-fcm-compat",[xg]:"fire-perf",[Ng]:"fire-perf-compat",[Ag]:"fire-rc",[Pg]:"fire-rc-compat",[Og]:"fire-gcs",[Dg]:"fire-gcs-compat",[kg]:"fire-fst",[Lg]:"fire-fst-compat",[Mg]:"fire-vertex","fire-js":"fire-js",[Fg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new Map,Wg=new Map,zr=new Map;function gc(t,e){try{t.container.addComponent(e)}catch(n){St.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(zr.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of fi.values())gc(n,t);for(const n of Wg.values())gc(n,t);return!0}function Ug(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Ru("app","Firebase",$g);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=Bg;function Ou(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=Su()),!n)throw Ft.create("no-options");const r=fi.get(i);if(r){if(Vr(n,r.options)&&Vr(s,r.config))return r;throw Ft.create("duplicate-app",{appName:i})}const o=new z_(i);for(const c of zr.values())o.addComponent(c);const l=new Vg(n,s,o);return fi.set(i,l),l}function Gg(t=Kr){const e=fi.get(t);if(!e&&t===Kr&&Su())return Ou();if(!e)throw Ft.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let i=(s=Hg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(l.join(" "));return}di(new Ns(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="firebase-heartbeat-database",Kg=1,As="firebase-heartbeat-store";let mr=null;function Du(){return mr||(mr=lg(qg,Kg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(As)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ft.create("idb-open",{originalErrorMessage:t.message})})),mr}async function zg(t){try{const n=(await Du()).transaction(As),s=await n.objectStore(As).get(ku(t));return await n.done,s}catch(e){if(e instanceof Ws)St.warn(e.message);else{const n=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(n.message)}}}async function mc(t,e){try{const s=(await Du()).transaction(As,"readwrite");await s.objectStore(As).put(e,ku(t)),await s.done}catch(n){if(n instanceof Ws)St.warn(n.message);else{const s=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});St.warn(s.message)}}}function ku(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=1024,Qg=30*24*60*60*1e3;class Jg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zg(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Qg}),this._storage.overwrite(this._heartbeatsCache))}catch(s){St.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yc(),{heartbeatsToSend:s,unsentEntries:i}=Xg(this._heartbeatsCache.heartbeats),r=ui(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return St.warn(n),""}}}function yc(){return new Date().toISOString().substring(0,10)}function Xg(t,e=Yg){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Zg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return M_()?L_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vc(t){return ui(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t){di(new Ns("platform-logger",e=>new ug(e),"PRIVATE")),di(new Ns("heartbeat",e=>new Jg(e),"PRIVATE")),xn(qr,_c,t),xn(qr,_c,"esm2017"),xn("fire-js","")}em("");var Ec={};const Cc="@firebase/database",bc="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu="";function tm(t){Mu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nm(e)}}catch{}return new sm},en=Lu("localStorage"),im=Lu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Nu("@firebase/database"),rm=function(){let t=1;return function(){return t++}}(),Fu=function(t){const e=j_(t),n=new V_;n.update(e);const s=n.digest();return Oo.encodeByteArray(s)},Us=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Us.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let _s=null,wc=!0;const om=function(t,e){S(!e,"Can't turn on custom loggers persistently."),Nn.logLevel=ce.VERBOSE,_s=Nn.log.bind(Nn)},Ee=function(...t){if(wc===!0&&(wc=!1,_s===null&&im.get("logging_enabled")===!0&&om()),_s){const e=Us.apply(null,t);_s(e)}},$s=function(t){return function(...e){Ee(t,...e)}},Yr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Us(...t);Nn.error(e)},It=function(...t){const e=`FIREBASE FATAL ERROR: ${Us(...t)}`;throw Nn.error(e),new Error(e)},Oe=function(...t){const e="FIREBASE WARNING: "+Us(...t);Nn.warn(e)},lm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ui=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Fn="[MIN_NAME]",rn="[MAX_NAME]",un=function(t,e){if(t===e)return 0;if(t===Fn||e===rn)return-1;if(e===Fn||t===rn)return 1;{const n=Sc(t),s=Sc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},am=function(t,e){return t===e?0:t<e?-1:1},Zn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},ko=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ce(e[s]),n+=":",n+=ko(t[e[s]]);return n+="}",n},Bu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function we(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hu=function(t){S(!Ui(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},um=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const dm=new RegExp("^-?(0*)\\d{1,10}$"),pm=-2147483648,_m=2147483647,Sc=function(t){if(dm.test(t)){const e=Number(t);if(e>=pm&&e<=_m)return e}return null},jn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Oe("Exception was thrown by user callback.",n),e},Math.floor(0))}},gm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class ni{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ni.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="5",Wu="v",Uu="s",$u="r",Vu="f",ju=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gu="ls",qu="p",Qr="ac",Ku="websocket",zu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=en.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&en.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vm(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Qu(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Ku)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vm(t)&&(n.ns=t.namespace);const i=[];return we(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this.counters_={}}incrementCounter(e,n=1){pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return S_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={},vr={};function Lo(t){const e=t.toString();return yr[e]||(yr[e]=new Em),yr[e]}function Cm(t,e){const n=t.toString();return vr[n]||(vr[n]=e()),vr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&jn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="start",wm="close",Sm="pLPCommand",Im="pRTLPCB",Ju="id",Xu="pw",Zu="ser",Tm="cb",Rm="seg",xm="ts",Nm="d",Am="dframe",eh=1870,th=30,Pm=eh-th,Om=25e3,Dm=3e4;class bn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$s(e),this.stats_=Lo(n),this.urlFn=c=>(this.appCheckToken&&(c[Qr]=this.appCheckToken),Qu(n,zu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dm)),cm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ic)this.id=l,this.password=c;else if(o===wm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ic]="t",s[Zu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Tm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Wu]=Mo,this.transportSessionId&&(s[Uu]=this.transportSessionId),this.lastSessionId&&(s[Gu]=this.lastSessionId),this.applicationId&&(s[qu]=this.applicationId),this.appCheckToken&&(s[Qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&ju.test(location.hostname)&&(s[$u]=Vu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bn.forceAllow_=!0}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){return bn.forceAllow_?!0:!bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!um()&&!hm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Cu(n),i=Bu(s,Pm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Am]="t",s[Ju]=e,s[Xu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rm(),window[Sm+this.uniqueCallbackIdentifier]=e,window[Im+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ee("frame writing exception"),l.stack&&Ee(l.stack),Ee(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ju]=this.myID,e[Xu]=this.myPW,e[Zu]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+th+s.length<=eh;){const o=this.pendingSegs.shift();s=s+"&"+Rm+i+"="+o.seg+"&"+xm+i+"="+o.ts+"&"+Nm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Om)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=16384,Mm=45e3;let pi=null;typeof MozWebSocket<"u"?pi=MozWebSocket:typeof WebSocket<"u"&&(pi=WebSocket);class Je{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$s(this.connId),this.stats_=Lo(n),this.connURL=Je.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Wu]=Mo,typeof location<"u"&&location.hostname&&ju.test(location.hostname)&&(o[$u]=Vu),n&&(o[Uu]=n),s&&(o[Gu]=s),i&&(o[Qr]=i),r&&(o[qu]=r),Qu(e,Ku,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,en.set("previous_websocket_failure",!0);try{let s;Tu(),this.mySock=new pi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Je.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&pi!==null&&!Je.forceDisallow_}static previouslyFailed(){return en.isInMemoryStorage||en.get("previous_websocket_failure")===!0}markConnectionHealthy(){en.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bu(n,km);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Mm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Je.responsesRequiredToBeHealthy=2;Je.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bn,Je]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Je&&Je.isAvailable();let s=n&&!Je.previouslyFailed();if(e.webSocketOnly&&(n||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Je];else{const i=this.transports_=[];for(const r of Ps.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=6e4,Fm=5e3,Bm=10*1024,Hm=100*1024,Er="t",Tc="d",Wm="s",Rc="r",Um="e",xc="o",Nc="a",Ac="n",Pc="p",$m="h";class Vm{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$s("c:"+this.id+":"),this.transportManager_=new Ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Hm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Er in e){const n=e[Er];n===Nc?this.upgradeIfSecondaryHealthy_():n===Rc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zn("t",e),s=Zn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Nc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ac,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zn("t",e),s=Zn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zn(Er,e);if(Tc in e){const s=e[Tc];if(n===$m){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ac){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Wm?this.onConnectionShutdown_(s):n===Rc?this.onReset_(s):n===Um?Yr("Server Error: "+s):n===xc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mo!==s&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),gs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Fm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(en.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends sh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Iu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _i}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=32,Dc=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new ee("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ht(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function Bo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jm(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Os(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ih(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function fe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ee)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ee(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return ke(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Gm(t,e){const n=Os(t,0),s=Os(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=un(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Ho(t,e){if(Ht(t)!==Ht(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ge(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ht(t)>Ht(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class qm{constructor(e,n){this.errorPrefix_=n,this.parts_=Os(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Wi(this.parts_[s]);rh(this)}}function Km(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wi(e),rh(t)}function zm(t){const e=t.parts_.pop();t.byteLength_-=Wi(e),t.parts_.length>0&&(t.byteLength_-=1)}function rh(t){if(t.byteLength_>Dc)throw new Error(t.errorPrefix_+"has a key path longer than "+Dc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Oc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Oc+") or object contains a cycle "+Zt(t))}function Zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends sh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wo}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=1e3,Ym=60*5*1e3,kc=30*1e3,Qm=1.3,Jm=3e4,Xm="server_kill",Mc=3;class wt extends nh{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=wt.nextPersistentConnectionId_++,this.log_=$s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=es,this.maxReconnectDelay_=Ym,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Tu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_i.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ce(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ht,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;wt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pt(e,"w")){const s=Mn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||U_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=W_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yr("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Jm&&(this.reconnectDelay_=es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qm)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+wt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Vm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Oe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xm)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Oe(h),c())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$r(this.interruptReasons_)&&(this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ko(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ee(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ee("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mc&&(this.reconnectDelay_=kc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ee("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mu.replace(/\./g,"-")]=1,Iu()?e["framework.cordova"]=1:k_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_i.getInstance().currentlyOnline();return $r(this.interruptReasons_)&&e}}wt.nextPersistentConnectionId_=0;wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(Fn,e),i=new G(Fn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys;class oh extends $i{static get __EMPTY_NODE(){return Ys}static set __EMPTY_NODE(e){Ys=e}compare(e,n){return un(e.name,n.name)}isDefinedOn(e){throw $n("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(rn,Ys)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Ys)}toString(){return".key"}}const An=new oh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ve{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ve.RED,this.left=i??Me.EMPTY_NODE,this.right=r??Me.EMPTY_NODE}copy(e,n,s,i,r){return new ve(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Me.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Me.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ve.RED=!0;ve.BLACK=!1;class Zm{copy(e,n,s,i,r){return this}insert(e,n,s){return new ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Me{constructor(e,n=Me.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Me(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ve.BLACK,null,null))}remove(e){return new Me(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qs(this.root_,null,this.comparator_,!0,e)}}Me.EMPTY_NODE=new Zm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t,e){return un(t.name,e.name)}function Uo(t,e){return un(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;function ty(t){Jr=t}const lh=function(t){return typeof t=="number"?"number:"+Hu(t):"string:"+t},ch=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pt(e,".sv"),"Priority must be a string or number.")}else S(t===Jr||t.isEmpty(),"priority of unexpected type.");S(t===Jr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lc;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ch(this.priorityNode_)}static set __childrenNodeConstructor(e){Lc=e}static get __childrenNodeConstructor(){return Lc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:V(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Ht(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hu(this.value_):e+=this.value_,this.lazyHash_=Fu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ah,uh;function ny(t){ah=t}function sy(t){uh=t}class iy extends $i{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?un(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(rn,new ye("[PRIORITY-POST]",uh))}makePost(e,n){const s=ah(e);return new G(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const de=new iy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=Math.log(2);class oy{constructor(e){const n=r=>parseInt(Math.log(r)/ry,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const gi=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new ve(f,h.node,ve.BLACK,null,null);{const _=parseInt(u/2,10)+c,m=i(c,_),b=i(_+1,a);return h=t[_],f=n?n(h):h,new ve(f,h.node,ve.BLACK,m,b)}},r=function(c){let a=null,u=null,h=t.length;const f=function(m,b){const P=h-m,k=h;h-=m;const O=i(P+1,k),F=t[P],D=n?n(F):F;_(new ve(D,F.node,b,null,O))},_=function(m){a?(a.left=m,a=m):(u=m,a=m)};for(let m=0;m<c.count;++m){const b=c.nextBitIsOne(),P=Math.pow(2,c.count-(m+1));b?f(P,ve.BLACK):(f(P,ve.BLACK),f(P,ve.RED))}return u},o=new oy(t.length),l=r(o);return new Me(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cr;const gn={};class Ct{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(gn&&de,"ChildrenNode.ts has not been loaded"),Cr=Cr||new Ct({".priority":gn},{".priority":de}),Cr}get(e){const n=Mn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Me?n:null}hasIndex(e){return pt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==An,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=gi(s,e.getCompare()):l=gn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new Ct(u,a)}addToIndexes(e,n){const s=hi(this.indexes_,(i,r)=>{const o=Mn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===gn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(G.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),gi(l,o.getCompare())}else return gn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new G(e.name,l))),c.insert(e,e.node)}});return new Ct(s,this.indexSet_)}removeFromIndexes(e,n){const s=hi(this.indexes_,i=>{if(i===gn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new Ct(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ch(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ts||(ts=new H(new Me(Uo),null,Ct.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ts}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ts:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ts:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{S(V(e)!==".priority"||Ht(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(de,(o,l)=>{n[o]=l.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lh(this.getPriority().val())+":"),this.forEachChild(de,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Fu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vs?-1:0}withIndex(e){if(e===An||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===An||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(de),i=n.getIterator(de);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===An?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ly extends H{constructor(){super(new Me(Uo),H.EMPTY_NODE,Ct.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Vs=new ly;Object.defineProperties(G,{MIN:{value:new G(Fn,H.EMPTY_NODE)},MAX:{value:new G(rn,Vs)}});oh.__EMPTY_NODE=H.EMPTY_NODE;ye.__childrenNodeConstructor=H;ty(Vs);sy(Vs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=!0;function pe(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,pe(e))}if(!(t instanceof Array)&&cy){const n=[];let s=!1;if(we(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=pe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new G(o,c)))}}),n.length===0)return H.EMPTY_NODE;const r=gi(n,ey,o=>o.name,Uo);if(s){const o=gi(n,de.getCompare());return new H(r,pe(e),new Ct({".priority":o},{".priority":de}))}else return new H(r,pe(e),Ct.Default)}else{let n=H.EMPTY_NODE;return we(t,(s,i)=>{if(pt(t,s)&&s.substring(0,1)!=="."){const r=pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(pe(e))}}ny(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay extends $i{constructor(e){super(),this.indexPath_=e,S(!j(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?un(e.name,n.name):r}makePost(e,n){const s=pe(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Vs);return new G(rn,e)}toString(){return Os(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy extends $i{compare(e,n){const s=e.node.compareTo(n.node);return s===0?un(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=pe(e);return new G(n,s)}toString(){return".value"}}const hy=new uy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){return{type:"value",snapshotNode:t}}function Bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ds(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Bn(n,s)):o.trackChildChange(ks(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(de,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ds(i,r))}),n.isLeafNode()||n.forEachChild(de,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ks(i,r,o))}else s.trackChildChange(Bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.indexedFilter_=new $o(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ms.getStartPost_(e),this.endPost_=Ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(de,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const c=new G(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ks(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ds(n,h));const b=l.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Bn(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(Ds(a.name,a.node)),r.trackChildChange(Bn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new Vo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function py(t){return t.loadsAllData()?new $o(t.getIndex()):t.hasLimit()?new dy(t):new Ms(t)}function Fc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===hy?n="$value":t.index_===An?n="$key":(S(t.index_ instanceof ay,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ce(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ce(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ce(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Bc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends nh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=$s("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=mi.getListenId_(e,s),l={};this.listens_[o]=l;const c=Fc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),Mn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=mi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Fc(e._queryParams),s=e._path.toString(),i=new ht;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=xs(l.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(){return{value:null,children:new Map}}function Gn(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,yi());const i=t.children.get(s);e=ie(e),Gn(i,e,n)}}function Xr(t,e){if(j(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(de,(s,i)=>{Gn(t,new ee(s),i)}),Xr(t,e)}}else if(t.children.size>0){const n=V(e);return e=ie(e),t.children.has(n)&&Xr(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Zr(t,e,n){t.value!==null?n(e,t.value):gy(t,(s,i)=>{const r=new ee(e.toString()+"/"+s);Zr(i,r,n)})}function gy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&we(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=10*1e3,yy=30*1e3,vy=5*60*1e3;class Ey{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new my(e);const s=Hc+(yy-Hc)*Math.random();gs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;we(e,(i,r)=>{r>0&&pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),gs(this.reportStats_.bind(this),Math.floor(Math.random()*2*vy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function jo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Go(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=jo()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new vi(K(),n,this.revert)}}else return S(V(this.path)===e,"operationForChild called for unrelated child."),new vi(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Ls(this.source,K()):new Ls(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return j(this.path)?new on(this.source,K(),this.snap.getImmediateChild(e)):new on(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new on(this.source,K(),n.value):new Hn(this.source,K(),n)}else return S(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hn(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function by(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fy(o.childName,o.snapshotNode))}),ns(t,i,"child_removed",e,s,n),ns(t,i,"child_added",e,s,n),ns(t,i,"child_moved",r,s,n),ns(t,i,"child_changed",e,s,n),ns(t,i,"value",e,s,n),i}function ns(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Sy(t,l,c)),o.forEach(l=>{const c=wy(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function wy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Sy(t,e,n){if(e.childName==null||n.childName==null)throw $n("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e){return{eventCache:t,serverCache:e}}function ms(t,e,n,s){return Vi(new ln(e,n,s),t.serverCache)}function fh(t,e,n,s){return Vi(t.eventCache,new ln(e,n,s))}function eo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br;const Iy=()=>(br||(br=new Me(am)),br);class le{constructor(e,n=Iy()){this.value=e,this.children=n}static fromObject(e){let n=new le(null);return we(e,(s,i)=>{n=n.set(new ee(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(j(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:fe(new ee(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new le(null)}}set(e,n){if(j(e))return new le(n,this.children);{const s=V(e),r=(this.children.get(s)||new le(null)).set(ie(e),n),o=this.children.insert(s,r);return new le(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new le(null):new le(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(j(e))return n;{const s=V(e),r=(this.children.get(s)||new le(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new le(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(fe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),fe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),fe(n,i),s):new le(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(fe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new le(null))}}function ys(t,e,n){if(j(e))return new et(new le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new le(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function to(t,e,n){let s=t;return we(n,(i,r)=>{s=ys(s,fe(e,i),r)}),s}function Wc(t,e){if(j(e))return et.empty();{const n=t.writeTree_.setTree(e,new le(null));return new et(n)}}function no(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function Uc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Bt(t,e){if(j(e))return t;{const n=hn(t,e);return n!=null?new et(new le(n)):new et(t.writeTree_.subtree(e))}}function so(t){return t.writeTree_.isEmpty()}function Wn(t,e){return dh(K(),t.writeTree_,e)}function dh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=dh(fe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(fe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t,e){return mh(e,t)}function Ty(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ys(t.visibleWrites,e,n)),t.lastWriteId=s}function Ry(t,e,n,s){S(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=to(t.visibleWrites,e,n),t.lastWriteId=s}function xy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Ny(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ay(l,s.path)?i=!1:Ge(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Py(t),!0;if(s.snap)t.visibleWrites=Wc(t.visibleWrites,s.path);else{const l=s.children;we(l,c=>{t.visibleWrites=Wc(t.visibleWrites,fe(s.path,c))})}return!0}else return!1}function Ay(t,e){if(t.snap)return Ge(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ge(fe(t.path,n),e))return!0;return!1}function Py(t){t.visibleWrites=ph(t.allWrites,Oy,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Oy(t){return t.visible}function ph(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ge(n,o)?(l=ke(n,o),s=ys(s,l,r.snap)):Ge(o,n)&&(l=ke(o,n),s=ys(s,K(),r.snap.getChild(l)));else if(r.children){if(Ge(n,o))l=ke(n,o),s=to(s,l,r.children);else if(Ge(o,n))if(l=ke(o,n),j(l))s=to(s,K(),r.children);else{const c=Mn(r.children,V(l));if(c){const a=c.getChild(ie(l));s=ys(s,K(),a)}}}else throw $n("WriteRecord should have .snap or .children")}}return s}function _h(t,e,n,s,i){if(!s&&!i){const r=hn(t.visibleWrites,e);if(r!=null)return r;{const o=Bt(t.visibleWrites,e);if(so(o))return n;if(n==null&&!no(o,K()))return null;{const l=n||H.EMPTY_NODE;return Wn(o,l)}}}else{const r=Bt(t.visibleWrites,e);if(!i&&so(r))return n;if(!i&&n==null&&!no(r,K()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Ge(a.path,e)||Ge(e,a.path))},l=ph(t.allWrites,o,e),c=n||H.EMPTY_NODE;return Wn(l,c)}}}function Dy(t,e,n){let s=H.EMPTY_NODE;const i=hn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Bt(t.visibleWrites,e);return n.forEachChild(de,(o,l)=>{const c=Wn(Bt(r,new ee(o)),l);s=s.updateImmediateChild(o,c)}),Uc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bt(t.visibleWrites,e);return Uc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ky(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=fe(e,n);if(no(t.visibleWrites,r))return null;{const o=Bt(t.visibleWrites,r);return so(o)?i.getChild(n):Wn(o,i.getChild(n))}}function My(t,e,n,s){const i=fe(e,n),r=hn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Bt(t.visibleWrites,i);return Wn(o,s.getNode().getImmediateChild(n))}else return null}function Ly(t,e){return hn(t.visibleWrites,e)}function Fy(t,e,n,s,i,r,o){let l;const c=Bt(t.visibleWrites,e),a=hn(c,K());if(a!=null)l=a;else if(n!=null)l=Wn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function By(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Ei(t,e,n,s){return _h(t.writeTree,t.treePath,e,n,s)}function zo(t,e){return Dy(t.writeTree,t.treePath,e)}function $c(t,e,n,s){return ky(t.writeTree,t.treePath,e,n,s)}function Ci(t,e){return Ly(t.writeTree,fe(t.treePath,e))}function Hy(t,e,n,s,i,r){return Fy(t.writeTree,t.treePath,e,n,s,i,r)}function Yo(t,e,n){return My(t.writeTree,t.treePath,e,n)}function gh(t,e){return mh(fe(t.treePath,e),t.writeTree)}function mh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ks(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ds(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ks(s,e.snapshotNode,i.oldSnap));else throw $n("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const yh=new Uy;class Qo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),r=Hy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t){return{filter:t}}function Vy(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jy(t,e,n,s,i){const r=new Wy;let o,l;if(n.type===Xe.OVERWRITE){const a=n;a.source.fromUser?o=io(t,e,a.path,a.snap,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!j(a.path),o=bi(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const a=n;a.source.fromUser?o=qy(t,e,a.path,a.children,s,i,r):(S(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=ro(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const a=n;a.revert?o=Yy(t,e,a.path,s,i,r):o=Ky(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=zy(t,e,n.path,s,r);else throw $n("Unknown operation type: "+n.type);const c=r.getChanges();return Gy(e,o,c),{viewCache:o,changes:c}}function Gy(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=eo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(hh(eo(e)))}}function vh(t,e,n,s,i,r){const o=e.eventCache;if(Ci(s,n)!=null)return e;{let l,c;if(j(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=cn(e),u=a instanceof H?a:H.EMPTY_NODE,h=zo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=Ei(s,cn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=V(n);if(a===".priority"){S(Ht(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=$c(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=$c(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=Yo(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return ms(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function bi(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=V(n);if(!c.isCompleteForPath(n)&&Ht(n)>1)return e;const m=ie(n),P=c.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?a=u.updatePriority(c.getNode(),P):a=u.updateChild(c.getNode(),_,P,m,yh,null)}const h=fh(e,a,c.isFullyInitialized()||j(n),u.filtersNodes()),f=new Qo(i,h,r);return vh(t,h,n,i,f,l)}function io(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Qo(i,e,r);if(j(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ms(e,a,!0,t.filter.filtersNodes());else{const h=V(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=ms(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=ie(n),_=l.getNode().getImmediateChild(h);let m;if(j(f))m=s;else{const b=u.getCompleteChild(h);b!=null?Bo(f)===".priority"&&b.getChild(ih(f)).isEmpty()?m=b:m=b.updateChild(f,s):m=H.EMPTY_NODE}if(_.equals(m))c=e;else{const b=t.filter.updateChild(l.getNode(),h,m,f,u,o);c=ms(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Vc(t,e){return t.eventCache.isCompleteForChild(e)}function qy(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=fe(n,c);Vc(e,V(u))&&(l=io(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=fe(n,c);Vc(e,V(u))||(l=io(t,l,u,a,i,r,o))}),l}function jc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ro(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;j(n)?a=s:a=new le(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=jc(t,_,f);c=bi(t,c,new ee(h),m,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),b=jc(t,m,f);c=bi(t,c,new ee(h),b,i,r,o,l)}}),c}function Ky(t,e,n,s,i,r,o){if(Ci(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(j(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return bi(t,e,n,c.getNode().getChild(n),i,r,l,o);if(j(n)){let a=new le(null);return c.getNode().forEachChild(An,(u,h)=>{a=a.set(new ee(u),h)}),ro(t,e,n,a,i,r,l,o)}else return e}else{let a=new le(null);return s.foreach((u,h)=>{const f=fe(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),ro(t,e,n,a,i,r,l,o)}}function zy(t,e,n,s,i){const r=e.serverCache,o=fh(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return vh(t,o,n,s,yh,i)}function Yy(t,e,n,s,i,r){let o;if(Ci(s,n)!=null)return e;{const l=new Qo(s,e,i),c=e.eventCache.getNode();let a;if(j(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ei(s,cn(e));else{const h=e.serverCache.getNode();S(h instanceof H,"serverChildren would be complete if leaf node"),u=zo(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=V(n);let h=Yo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,H.EMPTY_NODE,ie(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ei(s,cn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||Ci(s,K())!=null,ms(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new $o(s.getIndex()),r=py(s);this.processor_=$y(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(H.EMPTY_NODE,l.getNode(),null),u=new ln(c,o.isFullyInitialized(),i.filtersNodes()),h=new ln(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vi(h,u),this.eventGenerator_=new Cy(this.query_)}get query(){return this.query_}}function Jy(t){return t.viewCache_.serverCache.getNode()}function Xy(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function Gc(t){return t.eventRegistrations_.length===0}function Zy(t,e){t.eventRegistrations_.push(e)}function qc(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Kc(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(S(cn(t.viewCache_),"We should always have a full cache before handling merges"),S(eo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=jy(t.processor_,i,e,n,s);return Vy(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Eh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ev(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(r,o)=>{s.push(Bn(r,o))}),n.isFullyInitialized()&&s.push(hh(n.getNode())),Eh(t,s,n.getNode(),e)}function Eh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return by(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class tv{constructor(){this.views=new Map}}function nv(t){S(!wi,"__referenceConstructor has already been defined"),wi=t}function sv(){return S(wi,"Reference.ts has not been loaded"),wi}function iv(t){return t.views.size===0}function Jo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),Kc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Kc(o,e,n,s));return r}}function rv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Ei(n,i?s:null),c=!1;l?c=!0:s instanceof H?(l=zo(n,s),c=!1):(l=H.EMPTY_NODE,c=!1);const a=Vi(new ln(l,c,!1),new ln(s,i,!1));return new Qy(e,a)}return o}function ov(t,e,n,s,i,r){const o=rv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Zy(o,n),ev(o,n)}function lv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Wt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(qc(a,n,s)),Gc(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(qc(c,n,s)),Gc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Wt(t)&&r.push(new(sv())(e._repo,e._path)),{removed:r,events:o}}function Ch(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pn(t,e){let n=null;for(const s of t.views.values())n=n||Xy(s,e);return n}function bh(t,e){if(e._queryParams.loadsAllData())return ji(t);{const s=e._queryIdentifier;return t.views.get(s)}}function wh(t,e){return bh(t,e)!=null}function Wt(t){return ji(t)!=null}function ji(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Si;function cv(t){S(!Si,"__referenceConstructor has already been defined"),Si=t}function av(){return S(Si,"Reference.ts has not been loaded"),Si}let uv=1;class zc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=By(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Sh(t,e,n,s,i){return Ty(t.pendingWriteTree_,e,n,s,i),i?qn(t,new on(jo(),e,n)):[]}function hv(t,e,n,s){Ry(t.pendingWriteTree_,e,n,s);const i=le.fromObject(n);return qn(t,new Hn(jo(),e,i))}function kt(t,e,n=!1){const s=xy(t.pendingWriteTree_,e);if(Ny(t.pendingWriteTree_,e)){let r=new le(null);return s.snap!=null?r=r.set(K(),!0):we(s.children,o=>{r=r.set(new ee(o),!0)}),qn(t,new vi(s.path,r,n))}else return[]}function Gi(t,e,n){return qn(t,new on(Go(),e,n))}function fv(t,e,n){const s=le.fromObject(n);return qn(t,new Hn(Go(),e,s))}function dv(t,e){return qn(t,new Ls(Go(),e))}function pv(t,e,n){const s=Zo(t,n);if(s){const i=el(s),r=i.path,o=i.queryId,l=ke(r,e),c=new Ls(qo(o),l);return tl(t,r,c)}else return[]}function oo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||wh(o,e))){const c=lv(o,e,n,s);iv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Wt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=mv(f);for(let m=0;m<_.length;++m){const b=_[m],P=b.query,k=Rh(t,b);t.listenProvider_.startListening(vs(P),Ii(t,P),k.hashFn,k.onComplete)}}}!h&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(vs(e),null):a.forEach(f=>{const _=t.queryToTagMap.get(qi(f));t.listenProvider_.stopListening(vs(f),_)}))}yv(t,a)}return l}function _v(t,e,n,s){const i=Zo(t,s);if(i!=null){const r=el(i),o=r.path,l=r.queryId,c=ke(o,e),a=new on(qo(l),c,n);return tl(t,o,a)}else return[]}function gv(t,e,n,s){const i=Zo(t,s);if(i){const r=el(i),o=r.path,l=r.queryId,c=ke(o,e),a=le.fromObject(n),u=new Hn(qo(l),c,a);return tl(t,o,u)}else return[]}function Yc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=ke(f,i);r=r||Pn(_,m),o=o||Wt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Wt(l),r=r||Pn(l,K())):(l=new tv,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const b=Pn(m,K());b&&(r=r.updateImmediateChild(_,b))}));const a=wh(l,e);if(!a&&!e._queryParams.loadsAllData()){const f=qi(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=vv();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Ko(t.pendingWriteTree_,i);let h=ov(l,e,n,u,r,c);if(!a&&!o&&!s){const f=bh(l,e);h=h.concat(Ev(t,e,f))}return h}function Xo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=ke(o,e),a=Pn(l,c);if(a)return a});return _h(i,e,r,n,!0)}function qn(t,e){return Ih(e,t.syncPointTree_,null,Ko(t.pendingWriteTree_,K()))}function Ih(t,e,n,s){if(j(t.path))return Th(t,e,n,s);{const i=e.get(K());n==null&&i!=null&&(n=Pn(i,K()));let r=[];const o=V(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=gh(s,o);r=r.concat(Ih(l,c,a,u))}return i&&(r=r.concat(Jo(i,t,s,n))),r}}function Th(t,e,n,s){const i=e.get(K());n==null&&i!=null&&(n=Pn(i,K()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=gh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Th(u,l,c,a)))}),i&&(r=r.concat(Jo(i,t,s,n))),r}function Rh(t,e){const n=e.query,s=Ii(t,n);return{hashFn:()=>(Jy(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?pv(t,n._path,s):dv(t,n._path);{const r=fm(i,n);return oo(t,n,null,r)}}}}function Ii(t,e){const n=qi(e);return t.queryToTagMap.get(n)}function qi(t){return t._path.toString()+"$"+t._queryIdentifier}function Zo(t,e){return t.tagToQueryMap.get(e)}function el(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function tl(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Ko(t.pendingWriteTree_,e);return Jo(s,n,i,null)}function mv(t){return t.fold((e,n,s)=>{if(n&&Wt(n))return[ji(n)];{let i=[];return n&&(i=Ch(n)),we(s,(r,o)=>{i=i.concat(o)}),i}})}function vs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(av())(t._repo,t._path):t}function yv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=qi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function vv(){return uv++}function Ev(t,e,n){const s=e._path,i=Ii(t,e),r=Rh(t,n),o=t.listenProvider_.startListening(vs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!Wt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!j(a)&&u&&Wt(u))return[ji(u).query];{let f=[];return u&&(f=f.concat(Ch(u).map(_=>_.query))),we(h,(_,m)=>{f=f.concat(m)}),f}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(vs(u),Ii(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nl(n)}node(){return this.node_}}class sl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new sl(this.syncTree_,n)}node(){return Xo(this.syncTree_,this.path_)}}const Cv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Qc=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wv(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},wv=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},xh=function(t,e,n,s){return il(e,new sl(n,t),s)},Nh=function(t,e,n){return il(t,new nl(e),n)};function il(t,e,n){const s=t.getPriority().val(),i=Qc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Qc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(de,(l,c)=>{const a=il(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ol(t,e){let n=e instanceof ee?e:new ee(e),s=t,i=V(n);for(;i!==null;){const r=Mn(s.node.children,i)||{children:{},childCount:0};s=new rl(i,s,r),n=ie(n),i=V(n)}return s}function Kn(t){return t.node.value}function Ah(t,e){t.node.value=e,lo(t)}function Ph(t){return t.node.childCount>0}function Sv(t){return Kn(t)===void 0&&!Ph(t)}function Ki(t,e){we(t.node.children,(n,s)=>{e(new rl(n,t,s))})}function Oh(t,e,n,s){n&&!s&&e(t),Ki(t,i=>{Oh(i,e,!0,s)}),n&&s&&e(t)}function Iv(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function js(t){return new ee(t.parent===null?t.name:js(t.parent)+"/"+t.name)}function lo(t){t.parent!==null&&Tv(t.parent,t.name,t)}function Tv(t,e,n){const s=Sv(n),i=pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,lo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,lo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=/[\[\].#$\/\u0000-\u001F\u007F]/,xv=/[\[\].#$\u0000-\u001F\u007F]/,wr=10*1024*1024,ll=function(t){return typeof t=="string"&&t.length!==0&&!Rv.test(t)},Dh=function(t){return typeof t=="string"&&t.length!==0&&!xv.test(t)},Nv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dh(t)},kh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ui(t)||t&&typeof t=="object"&&pt(t,".sv")},co=function(t,e,n,s){zi(Ln(t,"value"),e,n)},zi=function(t,e,n){const s=n instanceof ee?new qm(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Zt(s)+" with contents = "+e.toString());if(Ui(e))throw new Error(t+"contains "+e.toString()+" "+Zt(s));if(typeof e=="string"&&e.length>wr/3&&Wi(e)>wr)throw new Error(t+"contains a string greater than "+wr+" utf8 bytes "+Zt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(we(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ll(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Km(s,o),zi(t,l,s),zm(s)}),i&&r)throw new Error(t+' contains ".value" child '+Zt(s)+" in addition to actual children.")}},Av=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Os(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ll(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Gm);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Ge(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Mh=function(t,e,n,s){const i=Ln(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];we(e,(o,l)=>{const c=new ee(o);if(zi(i,l,fe(n,c)),Bo(c)===".priority"&&!kh(l))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Av(i,r)},Pv=function(t,e,n){if(Ui(e))throw new Error(Ln(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!kh(e))throw new Error(Ln(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Lh=function(t,e,n,s){if(!Dh(n))throw new Error(Ln(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ov=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Lh(t,e,n)},os=function(t,e){if(V(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Dv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ll(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Nv(n))throw new Error(Ln(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yi(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ho(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Fh(t,e,n){Yi(t,n),Bh(t,s=>Ho(s,e))}function nt(t,e,n){Yi(t,n),Bh(t,s=>Ge(s,e)||Ge(e,s))}function Bh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Mv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Mv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();_s&&Ee("event: "+n.toString()),jn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="repo_interrupt",Fv=25;class Bv{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new kv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yi(),this.transactionQueueTree_=new rl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hv(t,e,n){if(t.stats_=Lo(t.repoInfo_),t.forceRestClient_||gm())t.server_=new mi(t.repoInfo_,(s,i,r,o)=>{Jc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new wt(t.repoInfo_,e,(s,i,r,o)=>{Jc(t,s,i,r,o)},s=>{Xc(t,s)},s=>{Uv(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Cm(t.repoInfo_,()=>new Ey(t.stats_,t.server_)),t.infoData_=new _y,t.infoSyncTree_=new zc({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Gi(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),cl(t,"connected",!1),t.serverSyncTree_=new zc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);nt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Wv(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qi(t){return Cv({timestamp:Wv(t)})}function Jc(t,e,n,s,i){t.dataUpdateCount++;const r=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=hi(n,a=>pe(a));o=gv(t.serverSyncTree_,r,c,i)}else{const c=pe(n);o=_v(t.serverSyncTree_,r,c,i)}else if(s){const c=hi(n,a=>pe(a));o=fv(t.serverSyncTree_,r,c)}else{const c=pe(n);o=Gi(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Un(t,r)),nt(t.eventQueue_,l,o)}function Xc(t,e){cl(t,"connected",e),e===!1&&jv(t)}function Uv(t,e){we(e,(n,s)=>{cl(t,n,s)})}function cl(t,e,n){const s=new ee("/.info/"+e),i=pe(n);t.infoData_.updateSnapshot(s,i);const r=Gi(t.infoSyncTree_,s,i);nt(t.eventQueue_,s,r)}function al(t){return t.nextWriteId_++}function $v(t,e,n,s,i){Ji(t,"set",{path:e.toString(),value:n,priority:s});const r=Qi(t),o=pe(n,s),l=Xo(t.serverSyncTree_,e),c=Nh(o,l,r),a=al(t),u=Sh(t.serverSyncTree_,e,c,a,!0);Yi(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Oe("set at "+e+" failed: "+f);const b=kt(t.serverSyncTree_,a,!m);nt(t.eventQueue_,e,b),Ut(t,i,f,_)});const h=hl(t,e);Un(t,h),nt(t.eventQueue_,h,[])}function Vv(t,e,n,s){Ji(t,"update",{path:e.toString(),value:n});let i=!0;const r=Qi(t),o={};if(we(n,(l,c)=>{i=!1,o[l]=xh(fe(e,l),pe(c),t.serverSyncTree_,r)}),i)Ee("update() called with empty data.  Don't do anything."),Ut(t,s,"ok",void 0);else{const l=al(t),c=hv(t.serverSyncTree_,e,o,l);Yi(t.eventQueue_,c),t.server_.merge(e.toString(),n,(a,u)=>{const h=a==="ok";h||Oe("update at "+e+" failed: "+a);const f=kt(t.serverSyncTree_,l,!h),_=f.length>0?Un(t,e):e;nt(t.eventQueue_,_,f),Ut(t,s,a,u)}),we(n,a=>{const u=hl(t,fe(e,a));Un(t,u)}),nt(t.eventQueue_,e,[])}}function jv(t){Ji(t,"onDisconnectEvents");const e=Qi(t),n=yi();Zr(t.onDisconnect_,K(),(i,r)=>{const o=xh(i,r,t.serverSyncTree_,e);Gn(n,i,o)});let s=[];Zr(n,K(),(i,r)=>{s=s.concat(Gi(t.serverSyncTree_,i,r));const o=hl(t,i);Un(t,o)}),t.onDisconnect_=yi(),nt(t.eventQueue_,K(),s)}function Gv(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Xr(t.onDisconnect_,e),Ut(t,n,s,i)})}function Zc(t,e,n,s){const i=pe(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Gn(t.onDisconnect_,e,i),Ut(t,s,r,o)})}function qv(t,e,n,s,i){const r=pe(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,l)=>{o==="ok"&&Gn(t.onDisconnect_,e,r),Ut(t,i,o,l)})}function Kv(t,e,n,s){if($r(n)){Ee("onDisconnect().update() called with empty data.  Don't do anything."),Ut(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&we(n,(o,l)=>{const c=pe(l);Gn(t.onDisconnect_,fe(e,o),c)}),Ut(t,s,i,r)})}function zv(t,e,n){let s;V(e._path)===".info"?s=Yc(t.infoSyncTree_,e,n):s=Yc(t.serverSyncTree_,e,n),Fh(t.eventQueue_,e._path,s)}function Yv(t,e,n){let s;V(e._path)===".info"?s=oo(t.infoSyncTree_,e,n):s=oo(t.serverSyncTree_,e,n),Fh(t.eventQueue_,e._path,s)}function Qv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Lv)}function Ji(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ee(n,...e)}function Ut(t,e,n,s){e&&jn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Hh(t,e,n){return Xo(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function ul(t,e=t.transactionQueueTree_){if(e||Xi(t,e),Kn(e)){const n=Uh(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jv(t,js(e),n)}else Ph(e)&&Ki(e,n=>{ul(t,n)})}function Jv(t,e,n){const s=n.map(a=>a.currentWriteId),i=Hh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ke(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Ji(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(kt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Xi(t,ol(t.transactionQueueTree_,e)),ul(t,t.transactionQueueTree_),nt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)jn(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Oe("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}Un(t,e)}},o)}function Un(t,e){const n=Wh(t,e),s=js(n),i=Uh(t,n);return Xv(t,i,s),s}function Xv(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=ke(n,c.path);let u=!1,h;if(S(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(kt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Fv)u=!0,h="maxretry",i=i.concat(kt(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Hh(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){zi("transaction failed: Data returned ",_,c.path);let m=pe(_);typeof _=="object"&&_!=null&&pt(_,".priority")||(m=m.updatePriority(f.getPriority()));const P=c.currentWriteId,k=Qi(t),O=Nh(m,f,k);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=O,c.currentWriteId=al(t),o.splice(o.indexOf(P),1),i=i.concat(Sh(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),i=i.concat(kt(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(kt(t.serverSyncTree_,c.currentWriteId,!0))}nt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Xi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)jn(s[l]);ul(t,t.transactionQueueTree_)}function Wh(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&Kn(s)===void 0;)s=ol(s,n),e=ie(e),n=V(e);return s}function Uh(t,e){const n=[];return $h(t,e,n),n.sort((s,i)=>s.order-i.order),n}function $h(t,e,n){const s=Kn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ki(e,i=>{$h(t,i,n)})}function Xi(t,e){const n=Kn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ah(e,n.length>0?n:void 0)}Ki(e,s=>{Xi(t,s)})}function hl(t,e){const n=js(Wh(t,e)),s=ol(t.transactionQueueTree_,e);return Iv(s,i=>{Sr(t,i)}),Sr(t,s),Oh(s,i=>{Sr(t,i)}),n}function Sr(t,e){const n=Kn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(kt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ah(e,void 0):n.length=r+1,nt(t.eventQueue_,js(e),i);for(let o=0;o<s.length;o++)jn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function eE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Oe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ea=function(t,e){const n=tE(t),s=n.namespace;n.domain==="firebase.com"&&It(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&It("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Yu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ee(n.pathString)}},tE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Zv(t.substring(u,h)));const f=eE(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class sE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ht;return Gv(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){os("OnDisconnect.remove",this._path);const e=new ht;return Zc(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){os("OnDisconnect.set",this._path),co("OnDisconnect.set",e,this._path);const n=new ht;return Zc(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){os("OnDisconnect.setWithPriority",this._path),co("OnDisconnect.setWithPriority",e,this._path),Pv("OnDisconnect.setWithPriority",n);const s=new ht;return qv(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){os("OnDisconnect.update",this._path),Mh("OnDisconnect.update",e,this._path);const n=new ht;return Kv(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:Bo(this._path)}get ref(){return new Gt(this._repo,this._path)}get _queryIdentifier(){const e=Bc(this._queryParams),n=ko(e);return n==="{}"?"default":n}get _queryObject(){return Bc(this._queryParams)}isEqual(e){if(e=Vn(e),!(e instanceof fl))return!1;const n=this._repo===e._repo,s=Ho(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jm(this._path)}}class Gt extends fl{constructor(e,n){super(e,n,new Vo,!1)}get parent(){const e=ih(this._path);return e===null?null:new Gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ti{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),s=ao(this.ref,e);return new Ti(this._node.getChild(n),s,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ti(i,ao(this.ref,s),de)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mn(t,e){return t=Vn(t),t._checkNotDeleted("ref"),e!==void 0?ao(t._root,e):t._root}function ao(t,e){return t=Vn(t),V(t._path)===null?Ov("child","path",e):Lh("child","path",e),new Gt(t._repo,fe(t._path,e))}function oE(t){return t=Vn(t),new rE(t._repo,t._path)}function ta(t,e){t=Vn(t),os("set",t._path),co("set",e,t._path);const n=new ht;return $v(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ir(t,e){Mh("update",e,t._path);const n=new ht;return Vv(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class dl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new nE("value",this,new Ti(e.snapshotNode,new Gt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sE(this,e,n):null}matches(e){return e instanceof dl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function lE(t,e,n,s,i){const r=new iE(n,void 0),o=new dl(r);return zv(t._repo,t,o),()=>Yv(t._repo,t,o)}function cE(t,e,n,s){return lE(t,"value",e)}nv(Gt);cv(Gt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="FIREBASE_DATABASE_EMULATOR_HOST",uo={};let uE=!1;function hE(t,e,n,s){t.repoInfo_=new Yu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function fE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||It("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ea(r,i),l=o.repoInfo,c;typeof process<"u"&&Ec&&(c=Ec[aE]),c?(r=`http://${c}?ns=${l.namespace}`,o=ea(r,i),l=o.repoInfo):o.repoInfo.secure;const a=new ym(t.name,t.options,e);Dv("Invalid Firebase Database URL",o),j(o.path)||It("Database URL must point to the root of a Firebase Database (not including a child path).");const u=pE(l,t,a,new mm(t.name,n));return new _E(u,t)}function dE(t,e){const n=uo[e];(!n||n[t.key]!==t)&&It(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Qv(t),delete n[t.key]}function pE(t,e,n,s){let i=uo[e.name];i||(i={},uo[e.name]=i);let r=i[t.toURLString()];return r&&It("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Bv(t,uE,n,s),i[t.toURLString()]=r,r}class _E{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gt(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&It("Cannot call "+e+" on a deleted database.")}}function gE(t=Gg(),e){const n=Ug(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=P_("database");s&&mE(n,...s)}return n}function mE(t,e,n,s={}){t=Vn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&It("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&It('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new ni(ni.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:O_(s.mockUserToken,t.app.options.projectId);r=new ni(o)}hE(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){tm(jg),di(new Ns("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return fE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),xn(Cc,bc,t),xn(Cc,bc,"esm2017")}wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yE();var vE="firebase",EE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(vE,EE,"app");const CE={apiKey:"AIzaSyDoLi-lQXIHZT2mZMOG9vQOaSg8E17SkNQ",authDomain:"adsa-53f72.firebaseapp.com",databaseURL:"https://adsa-53f72-default-rtdb.europe-west1.firebasedatabase.app",projectId:"adsa-53f72",storageBucket:"adsa-53f72.firebasestorage.app",messagingSenderId:"280906415203",appId:"1:280906415203:web:658c1ae4402f8b29f0cc56"},bE=Ou(CE),yn=gE(bE),wE={key:0,class:"name-container"},SE={key:1},IE={class:"cards"},TE=["onClick"],RE={class:"results"},xE={class:"button-container"},NE=To({__name:"ScrumPoker",setup(t){const e=is("");let n=Fs({});const s=is(!1),i=["0","1","2","3","5","8","13","21","34","55","89","?"],r=is(null),o=is(!1),l=mn(yn,"session");cE(l,f=>{const _=f.val()||{};n.users=_.users||{},o.value=_.areVotesVisible||!1,r.value=n.users[e.value]});const c=()=>{if(!e.value){alert("Please enter a Name!");return}if(n!=null&&n.users&&Object.keys(n==null?void 0:n.users).includes(e.value)){alert("Name already taken!");return}const f=mn(yn,`session/users/${e.value}`);ta(f,"").then(()=>{s.value=!0,oE(f).remove().catch(_=>{console.error("Error setting onDisconnect: ",_)})}).catch(_=>{console.error("Error adding user to session: ",_)})},a=f=>{r.value=f,Ir(mn(yn,"session/users/"),{[e.value]:f})},u=()=>{Ir(mn(yn,"session"),{areVotesVisible:!o.value})},h=()=>{Ir(mn(yn,"session"),{areVotesVisible:!1}),n&&Object.keys(n.users).forEach(f=>{const _=mn(yn,`session/users/${f}`);ta(_,"")})};return(f,_)=>(Qt(),Jt("div",null,[_[4]||(_[4]=me("h1",{style:{"text-align":"center"}},"Scrum Poker",-1)),s.value?(Qt(),Jt("div",SE,[me("div",IE,[(Qt(),Jt(Ye,null,Cl(i,m=>me("button",{key:m,onClick:b=>a(m),class:Oi({selected:r.value===m})},ss(m),11,TE)),64))]),me("div",RE,[me("div",xE,[me("button",{onClick:_[1]||(_[1]=m=>u())},ss(o.value?"Hide Votes":"Show Votes"),1),me("button",{onClick:_[2]||(_[2]=m=>h())},"Reset Votes")]),me("table",null,[me("tbody",null,[_[3]||(_[3]=me("tr",null,[me("th",null,"Name"),me("th",null,"Story Points")],-1)),(Qt(!0),Jt(Ye,null,Cl(nn(n).users,(m,b,P)=>(Qt(),Jt("tr",{key:P},[me("td",null,ss(b),1),me("td",null,ss(m===""?"-":o.value?m:"?"),1)]))),128))])])])])):(Qt(),Jt("div",wE,[kf(me("input",{"onUpdate:modelValue":_[0]||(_[0]=m=>e.value=m),placeholder:"Enter Your Name"},null,512),[[ap,e.value]]),me("button",{onClick:c},"Join Session")]))]))}}),AE=[{path:"/adsa",name:"ScrumPoker",component:NE}],PE=E_({history:Qp(),routes:AE}),Vh=fp(vp);Vh.use(PE);Vh.mount("#app");
