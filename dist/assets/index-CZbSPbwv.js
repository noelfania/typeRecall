var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function E(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,E(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),E(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=E(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=E(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return E(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return E(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var E=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===E?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function k(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function A(e,t){de++,ue[de]=e.current,e.current=t}var pe=fe(null),me=fe(null),he=fe(null),ge=fe(null);function _e(e,t){switch(A(he,t),A(me,e),A(pe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}k(pe),A(pe,e)}function ve(){k(pe),k(me),k(he)}function ye(e){e.memoizedState!==null&&A(ge,e);var t=pe.current,n=Hd(t,e.type);t!==n&&(A(me,e),A(pe,n))}function be(e){me.current===e&&(k(pe),k(me)),ge.current===e&&(k(ge),Qf._currentValue=le)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function Te(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Ee(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function De(e){try{var t=``,n=null;do t+=Ee(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,Be=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Be==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return Oe.call(Pt,e)?!0:Oe.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,`passive`,{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,pe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=gi(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=gi(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=gi(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:De(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:De(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ge(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=fe(null),$i=null,ea=null;function ta(e,t,n){A(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,k(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ge.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=D.S;D.S=function(e,t){tu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=fe(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?A(wa,wa.current):A(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case T:return t=Pa(t),f(e,t,n)}if(ce(t)||oe(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===C)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Pa(n),p(e,t,n,r)}if(ce(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===C)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Pa(r),m(e,t,n,r,i)}if(ce(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===C)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Pa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===C)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=fe(null),ao=fe(0);function oo(e,t){e=Gl,A(ao,e),A(io,t),Gl=e|t.baseLanes}function so(){A(ao,Gl),A(io,io.current)}function co(){Gl=ao.current,k(io),k(ao)}var lo=fe(null),uo=null;function fo(e){var t=e.alternate;A(P,P.current&1),A(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){A(P,P.current),A(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(A(P,P.current),A(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){A(P,P.current),A(lo,lo.current)}function go(e){k(lo),uo===e&&(uo=null),k(P)}var P=fe(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){D.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Rs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,le,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,A(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:ye(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(he.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ye(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,he.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),ye(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return _e(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(be(t),n=he.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=pe.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=pe.current,Ji(t))Ki(t,o);else{var s=Bd(he.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=he.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return ve(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(k(P),r=t.memoizedState,r===null)return V(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return A(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Ne()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=P.current,A(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&k(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),ve(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return k(P),null;case 4:return ve(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&k(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),ve();break;case 26:case 27:case 5:be(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:k(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&k(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:D.T===null?dt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),it(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ne(),10<a)){if(yu(r,t,Yl,!Hl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-Ne():(a&4194048)===a?tu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=et(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,D.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=D.H;return D.H=Hs,e===null?Hs:e}function Eu(){var e=D.A;return D.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,D.H=i,D.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Ne()+500,Su(e,t)):Ul=et(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,D.H=r,D.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!je();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,at(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,O.p=a,D.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,O.p=r,D.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,O.p=r,D.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Me();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ne()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=di(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return ke(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=$e(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),ut(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=cd.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=$e(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?ke(Fe,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case Yr:case Xr:l=zn;break;case ei:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=he.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=c(g(),1),y=[{id:`language-bash-shell`,label:`Bash / Shell`,folderName:`Language-bash-Shell`,lessons:[{id:`language-bash-shell-p01`,title:`P01.기본-패턴`,fileName:`P01.기본-패턴.sh`,sourcePath:`assets/typingSource/Language-bash-Shell/P01.기본-패턴.sh`,language:`shell`,parts:[{id:`language-bash-shell-p01-part-1`,title:`현재 작업 디렉터리[current working directory]`,content:`pwd`,displayContent:`# 현재 작업 디렉터리[current working directory]
pwd
# 결과: /home/user/project`},{id:`language-bash-shell-p01-part-2`,title:`파일 / 디렉터리 목록 나열[list]`,content:`ls
ls -al`,displayContent:`# 파일 / 디렉터리 목록 나열[list]
ls
ls -al
# 결과: 숨김 파일까지 자세히 출력`},{id:`language-bash-shell-p01-part-3`,title:`디렉터리 이동[change directory]`,content:`cd /tmp
cd -`,displayContent:`# 디렉터리 이동[change directory]
cd /tmp
cd -
# 결과: 이전 디렉터리로 복귀`},{id:`language-bash-shell-p01-part-4`,title:`디렉터리 생성[make directory]`,content:`mkdir logs
mkdir -p app/cache/images`,displayContent:`# 디렉터리 생성[make directory]
mkdir logs
mkdir -p app/cache/images
# 결과: 중간 경로까지 한 번에 생성`},{id:`language-bash-shell-p01-part-5`,title:`빈 파일 생성[create file]`,content:`touch app.log`,displayContent:`# 빈 파일 생성[create file]
touch app.log
# 결과: app.log 생성`},{id:`language-bash-shell-p01-part-6`,title:`표준 출력[stdout] 쓰기`,content:`echo "hello shell"`,displayContent:`# 표준 출력[stdout] 쓰기
echo "hello shell"
# 결과: hello shell`},{id:`language-bash-shell-p01-part-7`,title:`리다이렉션[redirection]`,content:`echo "first line" > app.log
echo "second line" >> app.log`,displayContent:`# 리다이렉션[redirection]
echo "first line" > app.log
echo "second line" >> app.log
# 결과: app.log에 줄 단위 추가`},{id:`language-bash-shell-p01-part-8`,title:`파일 내용 확인[read file]`,content:`cat app.log
head -n 1 app.log
tail -n 1 app.log`,displayContent:`# 파일 내용 확인[read file]
cat app.log
head -n 1 app.log
tail -n 1 app.log
# 결과: 앞 / 뒤 줄 확인`},{id:`language-bash-shell-p01-part-9`,title:`검색[search]`,content:`grep "second" app.log`,displayContent:`# 검색[search]
grep "second" app.log
# 결과: second line`},{id:`language-bash-shell-p01-part-10`,title:`파이프[pipeline]`,content:`ls -al | grep ".log"`,displayContent:`# 파이프[pipeline]
ls -al | grep ".log"
# 결과: .log 파일만 필터링`},{id:`language-bash-shell-p01-part-11`,title:`파일 복사[copy] / 이동[move]`,content:`cp app.log backup.log
mv backup.log archive.log`,displayContent:`# 파일 복사[copy] / 이동[move]
cp app.log backup.log
mv backup.log archive.log
# 결과: 복사 후 이름 변경`},{id:`language-bash-shell-p01-part-12`,title:`파일 삭제[remove]`,content:`rm archive.log`,displayContent:`# 파일 삭제[remove]
rm archive.log
# 결과: 파일 삭제`},{id:`language-bash-shell-p01-part-13`,title:`변수[variable]`,content:`user_name="kim"
echo "$user_name"`,displayContent:`# 변수[variable]
user_name="kim"
echo "$user_name"
# 결과: kim`},{id:`language-bash-shell-p01-part-14`,title:`환경 변수[environment variable]`,content:`echo "$HOME"
echo "$SHELL"`,displayContent:`# 환경 변수[environment variable]
echo "$HOME"
echo "$SHELL"
# 결과: 홈 디렉터리 / 현재 셸`},{id:`language-bash-shell-p01-part-15`,title:`조건문[condition]`,content:`file_name="app.log"
if [ -f "$file_name" ]; then
  echo "file exists"
else
  echo "file missing"
fi`,displayContent:`# 조건문[condition]
file_name="app.log"
if [ -f "$file_name" ]; then
  echo "file exists"
else
  echo "file missing"
fi
# 결과: file exists`},{id:`language-bash-shell-p01-part-16`,title:`반복문[loop]`,content:`for item in apple banana cherry; do
  echo "$item"
done`,displayContent:`# 반복문[loop]
for item in apple banana cherry; do
  echo "$item"
done
# 결과:
# apple
# banana
# cherry`},{id:`language-bash-shell-p01-part-17`,title:`명령 치환[command substitution]`,content:`today_value=$(date +%Y-%m-%d)
echo "$today_value"`,displayContent:`# 명령 치환[command substitution]
today_value=$(date +%Y-%m-%d)
echo "$today_value"
# 결과: 2026-03-18`},{id:`language-bash-shell-p01-part-18`,title:`함수[function]`,content:`print_user() {
  local input_name="$1"
  echo "user=$input_name"
}
print_user "park"`,displayContent:`# 함수[function]
print_user() {
  local input_name="$1"
  echo "user=$input_name"
}
print_user "park"
# 결과: user=park`},{id:`language-bash-shell-p01-part-19`,title:`종료 코드[exit code]`,content:`grep "missing" app.log
echo $?`,displayContent:`# 종료 코드[exit code]
grep "missing" app.log
echo $?
# 결과: 1 (검색 실패)`}]},{id:`language-bash-shell-p02`,title:`P02.실무-패턴`,fileName:`P02.실무-패턴.sh`,sourcePath:`assets/typingSource/Language-bash-Shell/P02.실무-패턴.sh`,language:`shell`,parts:[{id:`language-bash-shell-p02-part-1`,title:`현재 셸 프로세스 확인[current shell process]`,content:`ps -p $$`,displayContent:`# 현재 셸 프로세스 확인[current shell process]
ps -p $$
# 결과: 현재 셸 PID 출력`},{id:`language-bash-shell-p02-part-2`,title:`여러 파일 한 번에 생성[brace expansion]`,content:`touch log_{a,b,c}.txt`,displayContent:`# 여러 파일 한 번에 생성[brace expansion]
touch log_{a,b,c}.txt
# 결과: log_a.txt log_b.txt log_c.txt 생성`},{id:`language-bash-shell-p02-part-3`,title:`와일드카드[glob]`,content:`ls *.txt`,displayContent:`# 와일드카드[glob]
ls *.txt
# 결과: .txt 파일만 출력`},{id:`language-bash-shell-p02-part-4`,title:`파일 개수 세기[count]`,content:`ls -1 *.txt | wc -l`,displayContent:`# 파일 개수 세기[count]
ls -1 *.txt | wc -l
# 결과: 3`},{id:`language-bash-shell-p02-part-5`,title:`표준 출력 + 표준 에러 분리[stdout / stderr]`,content:`ls exists.txt 1> out.log 2> err.log`,displayContent:`# 표준 출력 + 표준 에러 분리[stdout / stderr]
ls exists.txt 1> out.log 2> err.log
# 결과: 성공 출력은 out.log, 에러는 err.log`},{id:`language-bash-shell-p02-part-6`,title:`성공일 때만 다음 명령 실행[and list]`,content:`mkdir -p temp_dir && echo "created"`,displayContent:`# 성공일 때만 다음 명령 실행[and list]
mkdir -p temp_dir && echo "created"
# 결과: created`},{id:`language-bash-shell-p02-part-7`,title:`실패했을 때만 다음 명령 실행[or list]`,content:`ls not_found.txt || echo "fallback"`,displayContent:`# 실패했을 때만 다음 명령 실행[or list]
ls not_found.txt || echo "fallback"
# 결과: fallback`},{id:`language-bash-shell-p02-part-8`,title:`xargs 패턴[xargs pattern]`,content:`echo "a.txt b.txt" | xargs touch`,displayContent:`# xargs 패턴[xargs pattern]
echo "a.txt b.txt" | xargs touch
# 결과: a.txt, b.txt 생성`},{id:`language-bash-shell-p02-part-9`,title:`awk 기본 패턴[awk]`,content:`echo "kim 30" | awk '{print $1}'`,displayContent:`# awk 기본 패턴[awk]
echo "kim 30" | awk '{print $1}'
# 결과: kim`},{id:`language-bash-shell-p02-part-10`,title:`sed 기본 치환[sed replace]`,content:`echo "hello world" | sed 's/world/shell/'`,displayContent:`# sed 기본 치환[sed replace]
echo "hello world" | sed 's/world/shell/'
# 결과: hello shell`},{id:`language-bash-shell-p02-part-11`,title:`백그라운드 실행[background job]`,content:`sleep 30 &
jobs`,displayContent:`# 백그라운드 실행[background job]
sleep 30 &
jobs
# 결과: 백그라운드 작업 표시`},{id:`language-bash-shell-p02-part-12`,title:`압축[archive]`,content:`tar -czf logs.tar.gz *.txt`,displayContent:`# 압축[archive]
tar -czf logs.tar.gz *.txt
# 결과: tar.gz 생성`},{id:`language-bash-shell-p02-part-13`,title:`환경 변수 내보내기[export]`,content:`export APP_ENV=local
echo "$APP_ENV"`,displayContent:`# 환경 변수 내보내기[export]
export APP_ENV=local
echo "$APP_ENV"
# 결과: local`}]}]},{id:`language-css`,label:`CSS`,folderName:`Language-CSS`,lessons:[{id:`language-css-p01`,title:`P01.핵심-패턴`,fileName:`P01.핵심-패턴.html`,sourcePath:`assets/typingSource/Language-CSS/P01.핵심-패턴.html`,language:`html`,parts:[{id:`language-css-p01-part-1`,title:`P01.핵심-패턴`,content:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Practice</title>
    <style>`,displayContent:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Practice</title>
    <style>`},{id:`language-css-p01-part-2`,title:`박스 크기 기준[box sizing] 통일`,content:`      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :root {`,displayContent:`      /* 박스 크기 기준[box sizing] 통일 */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :root {`},{id:`language-css-p01-part-3`,title:`전역 변수[custom property]`,content:`        --bg-color: #f5f7fb;
        --card-color: #ffffff;
        --accent-color: #2563eb;
        --text-color: #1f2937;
        --gap-size: 16px;
      }`,displayContent:`        /* 전역 변수[custom property] */
        --bg-color: #f5f7fb;
        --card-color: #ffffff;
        --accent-color: #2563eb;
        --text-color: #1f2937;
        --gap-size: 16px;
      }`},{id:`language-css-p01-part-4`,title:`전역 변수[custom property]`,content:`        --bg-color: #f5f7fb;
        --card-color: #ffffff;
        --accent-color: #2563eb;
        --text-color: #1f2937;
        --gap-size: 16px;
      }

      body {
        margin: 0;
        font-family: sans-serif;
        background: var(--bg-color);
        color: var(--text-color);
      }

      .page-wrapper {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
      }

      .card-grid {
        width: min(900px, 100%);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--gap-size);
      }

      .card-item {
        background: var(--card-color);
        border: 1px solid #dbe3f0;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
      }

      .card-item.is-active {
        border-color: var(--accent-color);
        transform: translateY(-4px);
      }

      .title-text {
        margin: 0 0 8px;
        font-size: 20px;
      }

      .button-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-top: 16px;
      }

      .primary-button {
        padding: 10px 14px;
        border: none;
        border-radius: 10px;
        background: var(--accent-color);
        color: white;
        cursor: pointer;
      }

      .primary-button:hover {
        opacity: 0.9;
      }

      .primary-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .badge-text::before {`,displayContent:`        /* 전역 변수[custom property] */
        --bg-color: #f5f7fb;
        --card-color: #ffffff;
        --accent-color: #2563eb;
        --text-color: #1f2937;
        --gap-size: 16px;
      }

      body {
        margin: 0;
        font-family: sans-serif;
        background: var(--bg-color);
        color: var(--text-color);
      }

      .page-wrapper {
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
      }

      .card-grid {
        width: min(900px, 100%);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--gap-size);
      }

      .card-item {
        background: var(--card-color);
        border: 1px solid #dbe3f0;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
      }

      .card-item.is-active {
        border-color: var(--accent-color);
        transform: translateY(-4px);
      }

      .title-text {
        margin: 0 0 8px;
        font-size: 20px;
      }

      .button-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-top: 16px;
      }

      .primary-button {
        padding: 10px 14px;
        border: none;
        border-radius: 10px;
        background: var(--accent-color);
        color: white;
        cursor: pointer;
      }

      .primary-button:hover {
        opacity: 0.9;
      }

      .primary-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .badge-text::before {`},{id:`language-css-p01-part-5`,title:`의사 요소[pseudo element]`,content:`        content: "#";
        margin-right: 4px;
        color: var(--accent-color);
      }

      @media (max-width: 768px) {`,displayContent:`        /* 의사 요소[pseudo element] */
        content: "#";
        margin-right: 4px;
        color: var(--accent-color);
      }

      @media (max-width: 768px) {`},{id:`language-css-p01-part-6`,title:`반응형[responsive]`,content:`        .card-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <main class="page-wrapper">
      <section class="card-grid">
        <article class="card-item is-active">
          <h1 class="title-text">카드 1</h1>
          <p class="badge-text">active</p>
          <div class="button-row">
            <button class="primary-button">확인</button>
            <button class="primary-button" disabled>대기</button>
          </div>
        </article>

        <article class="card-item">
          <h2 class="title-text">카드 2</h2>
          <p>grid + flex 조합 예문</p>
        </article>

        <article class="card-item">
          <h2 class="title-text">카드 3</h2>
          <p>모바일에서는 1열로 바뀜</p>
        </article>
      </section>
    </main>
  </body>
</html>`,displayContent:`        /* 반응형[responsive] */
        .card-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <main class="page-wrapper">
      <section class="card-grid">
        <article class="card-item is-active">
          <h1 class="title-text">카드 1</h1>
          <p class="badge-text">active</p>
          <div class="button-row">
            <button class="primary-button">확인</button>
            <button class="primary-button" disabled>대기</button>
          </div>
        </article>

        <article class="card-item">
          <h2 class="title-text">카드 2</h2>
          <p>grid + flex 조합 예문</p>
        </article>

        <article class="card-item">
          <h2 class="title-text">카드 3</h2>
          <p>모바일에서는 1열로 바뀜</p>
        </article>
      </section>
    </main>
  </body>
</html>`}]},{id:`language-css-p02`,title:`P02.부모-자식-배치`,fileName:`P02.부모-자식-배치.html`,sourcePath:`assets/typingSource/Language-CSS/P02.부모-자식-배치.html`,language:`html`,parts:[{id:`language-css-p02-part-1`,title:`P02.부모-자식-배치`,content:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Layout Practice</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: sans-serif;
        background: #f8fafc;
      }

      .page {
        padding: 24px;
      }

      .section {
        max-width: 860px;
        margin: 0 auto 24px;
        padding: 20px;
        background: white;
        border: 1px solid #dbe3f0;
        border-radius: 16px;
      }

      .box {
        width: 80px;
        height: 80px;
        background: #2563eb;
        color: white;
        display: grid;
        place-items: center;
        border-radius: 12px;
      }`,displayContent:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Layout Practice</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        font-family: sans-serif;
        background: #f8fafc;
      }

      .page {
        padding: 24px;
      }

      .section {
        max-width: 860px;
        margin: 0 auto 24px;
        padding: 20px;
        background: white;
        border: 1px solid #dbe3f0;
        border-radius: 16px;
      }

      .box {
        width: 80px;
        height: 80px;
        background: #2563eb;
        color: white;
        display: grid;
        place-items: center;
        border-radius: 12px;
      }`},{id:`language-css-p02-part-2`,title:`글자 정렬[text align] - 글자 같은 인라인 내용`,content:`      .text-left {
        text-align: left;
      }

      .text-center {
        text-align: center;
      }

      .text-right {
        text-align: right;
      }`,displayContent:`      /* 글자 정렬[text align] - 글자 같은 인라인 내용 */
      .text-left {
        text-align: left;
      }

      .text-center {
        text-align: center;
      }

      .text-right {
        text-align: right;
      }`},{id:`language-css-p02-part-3`,title:`flex - 부모가 자식 위치를 잡음`,content:`      .row-parent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        min-height: 120px;
        padding: 12px;
        background: #eff6ff;
      }

      .center-parent {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 160px;
        background: #ecfeff;
      }

      .column-parent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 12px;
        min-height: 200px;
        background: #fef3c7;
        padding: 12px;
      }`,displayContent:`      /* flex - 부모가 자식 위치를 잡음 */
      .row-parent {
        display: flex;
        justify-content: space-between; /* 가로축[main axis] */
        align-items: center;            /* 세로축[cross axis] */
        gap: 12px;
        min-height: 120px;
        padding: 12px;
        background: #eff6ff;
      }

      .center-parent {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 160px;
        background: #ecfeff;
      }

      .column-parent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 12px;
        min-height: 200px;
        background: #fef3c7;
        padding: 12px;
      }`},{id:`language-css-p02-part-4`,title:`grid - 부모가 칸을 만들고 자식을 배치`,content:`      .grid-parent {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        background: #f3e8ff;
        padding: 12px;
      }

      .grid-center {
        display: grid;
        place-items: center;
        min-height: 180px;
        background: #dcfce7;
      }
    </style>
  </head>
  <body>
    <main class="page">
      <section class="section">
        <h2>글자 정렬[text align]</h2>
        <p class="text-left">왼쪽 정렬[left]</p>
        <p class="text-center">가운데 정렬[center]</p>
        <p class="text-right">오른쪽 정렬[right]</p>
      </section>

      <section class="section">
        <h2>가로 배치[row layout]</h2>
        <div class="row-parent">
          <div class="box">A</div>
          <div class="box">B</div>
          <div class="box">C</div>
        </div>
      </section>

      <section class="section">
        <h2>부모 중앙 정렬[parent center]</h2>
        <div class="center-parent">
          <div class="box">CENTER</div>
        </div>
      </section>

      <section class="section">
        <h2>세로 배치[column layout]</h2>
        <div class="column-parent">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
        </div>
      </section>

      <section class="section">
        <h2>그리드 배치[grid layout]</h2>
        <div class="grid-parent">
          <div class="box">A</div>
          <div class="box">B</div>
          <div class="box">C</div>
        </div>
      </section>

      <section class="section">
        <h2>그리드 중앙 정렬[place-items]</h2>
        <div class="grid-center">
          <div class="box">BOX</div>
        </div>
      </section>
    </main>
  </body>
</html>`,displayContent:`      /* grid - 부모가 칸을 만들고 자식을 배치 */
      .grid-parent {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        background: #f3e8ff;
        padding: 12px;
      }

      .grid-center {
        display: grid;
        place-items: center; /* 가로 + 세로 한 번에 중앙 정렬 */
        min-height: 180px;
        background: #dcfce7;
      }
    </style>
  </head>
  <body>
    <main class="page">
      <section class="section">
        <h2>글자 정렬[text align]</h2>
        <p class="text-left">왼쪽 정렬[left]</p>
        <p class="text-center">가운데 정렬[center]</p>
        <p class="text-right">오른쪽 정렬[right]</p>
      </section>

      <section class="section">
        <h2>가로 배치[row layout]</h2>
        <div class="row-parent">
          <div class="box">A</div>
          <div class="box">B</div>
          <div class="box">C</div>
        </div>
      </section>

      <section class="section">
        <h2>부모 중앙 정렬[parent center]</h2>
        <div class="center-parent">
          <div class="box">CENTER</div>
        </div>
      </section>

      <section class="section">
        <h2>세로 배치[column layout]</h2>
        <div class="column-parent">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
        </div>
      </section>

      <section class="section">
        <h2>그리드 배치[grid layout]</h2>
        <div class="grid-parent">
          <div class="box">A</div>
          <div class="box">B</div>
          <div class="box">C</div>
        </div>
      </section>

      <section class="section">
        <h2>그리드 중앙 정렬[place-items]</h2>
        <div class="grid-center">
          <div class="box">BOX</div>
        </div>
      </section>
    </main>
  </body>
</html>`}]}]},{id:`language-git`,label:`Git`,folderName:`Language-git`,lessons:[{id:`language-git-p01`,title:`P01.기본-흐름`,fileName:`P01.기본-흐름.md`,sourcePath:`assets/typingSource/Language-git/P01.기본-흐름.md`,language:`markdown`,parts:[{id:`language-git-p01-part-1`,title:`깃 상태 확인[git status]`,content:`현재 상태를 확인한다.
깃 상태 확인[git status]
예: 작업 전에 \`git status\`부터 본다.`,displayContent:`현재 상태를 확인한다.
깃 상태 확인[git status]
예: 작업 전에 \`git status\`부터 본다.`},{id:`language-git-p01-part-2`,title:`차이 확인[git diff]`,content:`변경 파일 차이를 확인한다.
차이 확인[git diff]
예: 커밋 전에 \`git diff\`로 실제 수정 내용을 검토한다.`,displayContent:`변경 파일 차이를 확인한다.
차이 확인[git diff]
예: 커밋 전에 \`git diff\`로 실제 수정 내용을 검토한다.`},{id:`language-git-p01-part-3`,title:`스테이징[git add]`,content:`변경 파일을 스테이징 영역에 올린다.
스테이징[git add]
예: \`git add src/app.ts\`처럼 필요한 파일만 올린다.`,displayContent:`변경 파일을 스테이징 영역에 올린다.
스테이징[git add]
예: \`git add src/app.ts\`처럼 필요한 파일만 올린다.`},{id:`language-git-p01-part-4`,title:`커밋[git commit]`,content:`스테이징된 변경을 커밋으로 저장한다.
커밋[git commit]
예: \`git commit -m "fix: handle null user response"\`처럼 의도를 남긴다.`,displayContent:`스테이징된 변경을 커밋으로 저장한다.
커밋[git commit]
예: \`git commit -m "fix: handle null user response"\`처럼 의도를 남긴다.`},{id:`language-git-p01-part-5`,title:`푸시[git push]`,content:`원격 저장소에 변경을 보낸다.
푸시[git push]
예: 작업이 끝나면 \`git push origin feature/login\`을 실행한다.`,displayContent:`원격 저장소에 변경을 보낸다.
푸시[git push]
예: 작업이 끝나면 \`git push origin feature/login\`을 실행한다.`},{id:`language-git-p01-part-6`,title:`풀[git pull]`,content:`원격 변경을 가져와 현재 브랜치에 반영한다.
풀[git pull]
예: 작업 시작 전에 \`git pull origin main\`으로 최신 상태를 맞춘다.`,displayContent:`원격 변경을 가져와 현재 브랜치에 반영한다.
풀[git pull]
예: 작업 시작 전에 \`git pull origin main\`으로 최신 상태를 맞춘다.`},{id:`language-git-p01-part-7`,title:`브랜치 생성[git branch]`,content:`새 작업 브랜치를 만든다.
브랜치 생성[git branch]
예: \`git branch feature/profile-page\`로 브랜치를 만든다.`,displayContent:`새 작업 브랜치를 만든다.
브랜치 생성[git branch]
예: \`git branch feature/profile-page\`로 브랜치를 만든다.`},{id:`language-git-p01-part-8`,title:`체크아웃[git checkout]`,content:`다른 브랜치로 이동한다.
체크아웃[git checkout]
예: \`git checkout main\`으로 메인 브랜치로 돌아간다.`,displayContent:`다른 브랜치로 이동한다.
체크아웃[git checkout]
예: \`git checkout main\`으로 메인 브랜치로 돌아간다.`},{id:`language-git-p01-part-9`,title:`스위치 생성[git checkout -b]`,content:`브랜치 생성과 이동을 한 번에 한다.
스위치 생성[git checkout -b]
예: \`git checkout -b feature/cart\`로 새 브랜치에서 바로 작업 시작한다.`,displayContent:`브랜치 생성과 이동을 한 번에 한다.
스위치 생성[git checkout -b]
예: \`git checkout -b feature/cart\`로 새 브랜치에서 바로 작업 시작한다.`},{id:`language-git-p01-part-10`,title:`스위치[git switch]`,content:`최신 방식으로 브랜치를 전환한다.
스위치[git switch]
예: \`git switch main\`은 브랜치 전환에만 집중된 명령이다.`,displayContent:`최신 방식으로 브랜치를 전환한다.
스위치[git switch]
예: \`git switch main\`은 브랜치 전환에만 집중된 명령이다.`},{id:`language-git-p01-part-11`,title:`머지[git merge]`,content:`다른 브랜치의 이력을 현재 브랜치에 합친다.
머지[git merge]
예: \`git merge feature/cart\`로 기능 브랜치를 합친다.`,displayContent:`다른 브랜치의 이력을 현재 브랜치에 합친다.
머지[git merge]
예: \`git merge feature/cart\`로 기능 브랜치를 합친다.`},{id:`language-git-p01-part-12`,title:`리베이스[git rebase]`,content:`커밋을 다시 쌓아 이력을 깔끔하게 정리한다.
리베이스[git rebase]
예: \`git rebase main\`으로 최신 메인 위에 커밋을 다시 올린다.`,displayContent:`커밋을 다시 쌓아 이력을 깔끔하게 정리한다.
리베이스[git rebase]
예: \`git rebase main\`으로 최신 메인 위에 커밋을 다시 올린다.`},{id:`language-git-p01-part-13`,title:`충돌 해결[merge conflict resolution]`,content:`충돌 난 파일을 직접 수정한 뒤 병합을 마무리한다.
충돌 해결[merge conflict resolution]
예: 충돌 마커를 지운 뒤 다시 \`git add\` 한다.`,displayContent:`충돌 난 파일을 직접 수정한 뒤 병합을 마무리한다.
충돌 해결[merge conflict resolution]
예: 충돌 마커를 지운 뒤 다시 \`git add\` 한다.`},{id:`language-git-p01-part-14`,title:`리셋[git reset]`,content:`특정 커밋으로 작업 트리를 되돌린다.
리셋[git reset]
예: \`git reset --soft HEAD~1\`은 커밋만 취소하고 변경은 남긴다.`,displayContent:`특정 커밋으로 작업 트리를 되돌린다.
리셋[git reset]
예: \`git reset --soft HEAD~1\`은 커밋만 취소하고 변경은 남긴다.`},{id:`language-git-p01-part-15`,title:`리버트[git revert]`,content:`기존 커밋을 취소하는 새 커밋을 만든다.
리버트[git revert]
예: 협업 중이면 \`git revert <commit>\`가 더 안전한 경우가 많다.`,displayContent:`기존 커밋을 취소하는 새 커밋을 만든다.
리버트[git revert]
예: 협업 중이면 \`git revert <commit>\`가 더 안전한 경우가 많다.`},{id:`language-git-p01-part-16`,title:`체리픽[git cherry-pick]`,content:`특정 커밋 하나만 현재 브랜치에 가져온다.
체리픽[git cherry-pick]
예: 긴급 수정 커밋만 \`git cherry-pick <hash>\`로 가져올 수 있다.`,displayContent:`특정 커밋 하나만 현재 브랜치에 가져온다.
체리픽[git cherry-pick]
예: 긴급 수정 커밋만 \`git cherry-pick <hash>\`로 가져올 수 있다.`},{id:`language-git-p01-part-17`,title:`작업 시작 흐름[status → pull → switch]`,content:"작업 시작 패턴.\n작업 시작 흐름[status → pull → switch]\n예: `git status` → `git pull` → `git switch -c feature/x`",displayContent:"작업 시작 패턴.\n작업 시작 흐름[status → pull → switch]\n예: `git status` → `git pull` → `git switch -c feature/x`"},{id:`language-git-p01-part-18`,title:`작업 저장 흐름[diff → add → commit]`,content:'작업 저장 패턴.\n작업 저장 흐름[diff → add → commit]\n예: `git diff` → `git add .` → `git commit -m "..."`',displayContent:'작업 저장 패턴.\n작업 저장 흐름[diff → add → commit]\n예: `git diff` → `git add .` → `git commit -m "..."`'},{id:`language-git-p01-part-19`,title:`반영 흐름[switch → pull → merge]`,content:"배포 전 반영 패턴.\n반영 흐름[switch → pull → merge]\n예: `git switch main` → `git pull` → `git merge feature/x`",displayContent:"배포 전 반영 패턴.\n반영 흐름[switch → pull → merge]\n예: `git switch main` → `git pull` → `git merge feature/x`"}]},{id:`language-git-p02`,title:`P02.실무-패턴`,fileName:`P02.실무-패턴.md`,sourcePath:`assets/typingSource/Language-git/P02.실무-패턴.md`,language:`markdown`,parts:[{id:`language-git-p02-part-1`,title:`기능 추가[feat]`,content:`새 기능 추가를 나타내는 커밋 유형.
기능 추가[feat]
예: \`feat(auth): add social login\``,displayContent:`새 기능 추가를 나타내는 커밋 유형.
기능 추가[feat]
예: \`feat(auth): add social login\``},{id:`language-git-p02-part-2`,title:`버그 수정[fix]`,content:`버그 수정을 나타내는 커밋 유형.
버그 수정[fix]
예: \`fix(api): handle empty response\``,displayContent:`버그 수정을 나타내는 커밋 유형.
버그 수정[fix]
예: \`fix(api): handle empty response\``},{id:`language-git-p02-part-3`,title:`문서 수정[docs]`,content:`문서 변경을 나타내는 커밋 유형.
문서 수정[docs]
예: \`docs: update setup guide\``,displayContent:`문서 변경을 나타내는 커밋 유형.
문서 수정[docs]
예: \`docs: update setup guide\``},{id:`language-git-p02-part-4`,title:`리팩터링[refactor]`,content:`동작 변화 없는 구조 개선을 나타내는 커밋 유형.
리팩터링[refactor]
예: \`refactor(ui): simplify modal props\``,displayContent:`동작 변화 없는 구조 개선을 나타내는 커밋 유형.
리팩터링[refactor]
예: \`refactor(ui): simplify modal props\``},{id:`language-git-p02-part-5`,title:`잡무[chore]`,content:`설정, 의존성, 빌드 같은 잡무성 변경을 나타내는 커밋 유형.
잡무[chore]
예: \`chore: update eslint config\``,displayContent:`설정, 의존성, 빌드 같은 잡무성 변경을 나타내는 커밋 유형.
잡무[chore]
예: \`chore: update eslint config\``},{id:`language-git-p02-part-6`,title:`기능 브랜치[feature branch]`,content:`기능 개발용 브랜치 이름.
기능 브랜치[feature branch]
예: \`feature/profile-page\``,displayContent:`기능 개발용 브랜치 이름.
기능 브랜치[feature branch]
예: \`feature/profile-page\``},{id:`language-git-p02-part-7`,title:`핫픽스 브랜치[hotfix branch]`,content:`긴급 수정용 브랜치 이름.
핫픽스 브랜치[hotfix branch]
예: \`hotfix/login-error\``,displayContent:`긴급 수정용 브랜치 이름.
핫픽스 브랜치[hotfix branch]
예: \`hotfix/login-error\``},{id:`language-git-p02-part-8`,title:`버그픽스 브랜치[bugfix branch]`,content:`버그 수정용 브랜치 이름.
버그픽스 브랜치[bugfix branch]
예: \`bugfix/cart-total\``,displayContent:`버그 수정용 브랜치 이름.
버그픽스 브랜치[bugfix branch]
예: \`bugfix/cart-total\``},{id:`language-git-p02-part-9`,title:`페치[git fetch]`,content:`원격 저장소 브랜치 목록까지 포함해 최신 상태를 가져온다.
페치[git fetch]
예: 리뷰 전에 \`git fetch origin\`으로 원격 이력을 먼저 가져온다.`,displayContent:`원격 저장소 브랜치 목록까지 포함해 최신 상태를 가져온다.
페치[git fetch]
예: 리뷰 전에 \`git fetch origin\`으로 원격 이력을 먼저 가져온다.`},{id:`language-git-p02-part-10`,title:`로그 비교[git log --oneline --graph]`,content:`현재 브랜치가 원격과 얼마나 차이 나는지 본다.
로그 비교[git log --oneline --graph]
예: 머지 전에 \`git log --oneline --graph --decorate\`를 자주 본다.`,displayContent:`현재 브랜치가 원격과 얼마나 차이 나는지 본다.
로그 비교[git log --oneline --graph]
예: 머지 전에 \`git log --oneline --graph --decorate\`를 자주 본다.`},{id:`language-git-p02-part-11`,title:`이력 추적[git blame]`,content:`어떤 파일이 언제 바뀌었는지 추적한다.
이력 추적[git blame]
예: \`git blame src/app.ts\`로 마지막 수정자를 확인한다.`,displayContent:`어떤 파일이 언제 바뀌었는지 추적한다.
이력 추적[git blame]
예: \`git blame src/app.ts\`로 마지막 수정자를 확인한다.`},{id:`language-git-p02-part-12`,title:`커밋 보기[git show]`,content:`이전 커밋의 상세 내용을 본다.
커밋 보기[git show]
예: \`git show HEAD~1\`로 바로 전 커밋 내용을 볼 수 있다.`,displayContent:`이전 커밋의 상세 내용을 본다.
커밋 보기[git show]
예: \`git show HEAD~1\`로 바로 전 커밋 내용을 볼 수 있다.`},{id:`language-git-p02-part-13`,title:`스태시[git stash]`,content:`스테이징하지 않고 임시 저장한다.
스태시[git stash]
예: 급하게 브랜치 바꿔야 할 때 \`git stash\`로 잠깐 치운다.`,displayContent:`스테이징하지 않고 임시 저장한다.
스태시[git stash]
예: 급하게 브랜치 바꿔야 할 때 \`git stash\`로 잠깐 치운다.`},{id:`language-git-p02-part-14`,title:`스태시 복원[git stash pop]`,content:`임시 저장한 변경을 다시 꺼낸다.
스태시 복원[git stash pop]
예: 돌아와서 \`git stash pop\`으로 이어서 작업한다.`,displayContent:`임시 저장한 변경을 다시 꺼낸다.
스태시 복원[git stash pop]
예: 돌아와서 \`git stash pop\`으로 이어서 작업한다.`}]}]},{id:`language-go`,label:`Go`,folderName:`Language-go`,lessons:[{id:`language-go-p01`,title:`P01.기본-패턴`,fileName:`P01.기본-패턴.go`,sourcePath:`assets/typingSource/Language-go/P01.기본-패턴.go`,language:`go`,parts:[{id:`language-go-p01-part-1`,title:`P01.기본-패턴`,content:`package main

import (
	"fmt"
	"strings"
)`,displayContent:`package main

import (
	"fmt"
	"strings"
)

// ============================================================`},{id:`language-go-p01-part-2`,title:`P01. Go 기본 패턴`,content:`type User struct {
	Name  string
	Age   int
	Admin bool
}

func add(numA int, numB int) int {
	return numA + numB
}

func divide(numA int, numB int) (int, error) {
	if numB == 0 {
		return 0, fmt.Errorf("0으로 나눌 수 없음")
	}
	return numA / numB, nil
}

func main() {`,displayContent:`// P01. Go 기본 패턴
// ============================================================

type User struct {
	Name  string
	Age   int
	Admin bool
}

func add(numA int, numB int) int {
	return numA + numB
}

func divide(numA int, numB int) (int, error) {
	if numB == 0 {
		return 0, fmt.Errorf("0으로 나눌 수 없음")
	}
	return numA / numB, nil
}

func main() {`},{id:`language-go-p01-part-3`,title:`변수 선언[variable declaration]`,content:`	var userName string = "kim"
	userAge := 30
	const serviceName = "gmtl"
	fmt.Println(userName, userAge, serviceName)`,displayContent:`	// 변수 선언[variable declaration]
	var userName string = "kim"
	userAge := 30
	const serviceName = "gmtl"
	fmt.Println(userName, userAge, serviceName)
	// 결과: kim 30 gmtl`},{id:`language-go-p01-part-4`,title:`조건문[condition]`,content:`	if userAge >= 20 {
		fmt.Println("adult")
	} else {
		fmt.Println("minor")
	}`,displayContent:`	// 조건문[condition]
	if userAge >= 20 {
		fmt.Println("adult")
	} else {
		fmt.Println("minor")
	}
	// 결과: adult`},{id:`language-go-p01-part-5`,title:`반복문[loop]`,content:`	scoreList := []int{10, 20, 30}
	for index, score := range scoreList {
		fmt.Println(index, score)
	}`,displayContent:`	// 반복문[loop]
	scoreList := []int{10, 20, 30}
	for index, score := range scoreList {
		fmt.Println(index, score)
	}
	// 결과:
	// 0 10
	// 1 20
	// 2 30`},{id:`language-go-p01-part-6`,title:`맵[map]`,content:`	userMap := map[string]string{
		"name": "lee",
		"role": "admin",
	}
	fmt.Println(userMap["name"])`,displayContent:`	// 맵[map]
	userMap := map[string]string{
		"name": "lee",
		"role": "admin",
	}
	fmt.Println(userMap["name"])
	// 결과: lee`},{id:`language-go-p01-part-7`,title:`구조체[struct]`,content:`	userItem := User{Name: "park", Age: 25, Admin: true}
	fmt.Println(userItem.Name, userItem.Admin)`,displayContent:`	// 구조체[struct]
	userItem := User{Name: "park", Age: 25, Admin: true}
	fmt.Println(userItem.Name, userItem.Admin)
	// 결과: park true`},{id:`language-go-p01-part-8`,title:`함수[function]`,content:`	sumValue := add(3, 4)
	fmt.Println(sumValue)`,displayContent:`	// 함수[function]
	sumValue := add(3, 4)
	fmt.Println(sumValue)
	// 결과: 7`},{id:`language-go-p01-part-9`,title:`다중 반환값[multiple return values] + 에러 처리[error handling]`,content:`	quotientValue, err := divide(10, 2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(quotientValue)`,displayContent:`	// 다중 반환값[multiple return values] + 에러 처리[error handling]
	quotientValue, err := divide(10, 2)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(quotientValue)
	// 결과: 5`},{id:`language-go-p01-part-10`,title:`문자열 처리[string handling]`,content:`	tagText := "go,api,server"
	tagList := strings.Split(tagText, ",")
	fmt.Println(tagList)`,displayContent:`	// 문자열 처리[string handling]
	tagText := "go,api,server"
	tagList := strings.Split(tagText, ",")
	fmt.Println(tagList)
	// 결과: [go api server]`},{id:`language-go-p01-part-11`,title:`포인터[pointer]`,content:`	countValue := 1
	countPtr := &countValue
	*countPtr = 2
	fmt.Println(countValue)
}`,displayContent:`	// 포인터[pointer]
	countValue := 1
	countPtr := &countValue
	*countPtr = 2
	fmt.Println(countValue)
	// 결과: 2
}`}]},{id:`language-go-p02`,title:`P02.실무-패턴`,fileName:`P02.실무-패턴.go`,sourcePath:`assets/typingSource/Language-go/P02.실무-패턴.go`,language:`go`,parts:[{id:`language-go-p02-part-1`,title:`P02.실무-패턴`,content:`package main

import (
	"encoding/json"
	"fmt"
)`,displayContent:`package main

import (
	"encoding/json"
	"fmt"
)

// ============================================================`},{id:`language-go-p02-part-2`,title:`P02. Go 실무 패턴`,content:`type Product struct {
	Name  string \`json:"name"\`
	Price int    \`json:"price"\`
}

func makeDoubles(input []int) []int {
	result := make([]int, 0, len(input))
	for _, item := range input {
		result = append(result, item*2)
	}
	return result
}

func main() {`,displayContent:`// P02. Go 실무 패턴
// ============================================================

type Product struct {
	Name  string \`json:"name"\`
	Price int    \`json:"price"\`
}

func makeDoubles(input []int) []int {
	result := make([]int, 0, len(input))
	for _, item := range input {
		result = append(result, item*2)
	}
	return result
}

func main() {`},{id:`language-go-p02-part-3`,title:`슬라이스 추가[append]`,content:`	valueList := []int{1, 2}
	valueList = append(valueList, 3, 4)
	fmt.Println(valueList)`,displayContent:`	// 슬라이스 추가[append]
	valueList := []int{1, 2}
	valueList = append(valueList, 3, 4)
	fmt.Println(valueList)
	// 결과: [1 2 3 4]`},{id:`language-go-p02-part-4`,title:`맵 존재 확인[comma ok]`,content:`	roleMap := map[string]string{"kim": "admin"}
	roleValue, ok := roleMap["kim"]
	fmt.Println(roleValue, ok)`,displayContent:`	// 맵 존재 확인[comma ok]
	roleMap := map[string]string{"kim": "admin"}
	roleValue, ok := roleMap["kim"]
	fmt.Println(roleValue, ok)
	// 결과: admin true`},{id:`language-go-p02-part-5`,title:`구조체 + JSON`,content:`	productItem := Product{Name: "keyboard", Price: 50000}
	jsonBytes, _ := json.Marshal(productItem)
	fmt.Println(string(jsonBytes))`,displayContent:`	// 구조체 + JSON
	productItem := Product{Name: "keyboard", Price: 50000}
	jsonBytes, _ := json.Marshal(productItem)
	fmt.Println(string(jsonBytes))
	// 결과: {"name":"keyboard","price":50000}`},{id:`language-go-p02-part-6`,title:`인터페이스 대신 에러 우선 처리[error first]`,content:`	_, err := json.Marshal(make(chan int))
	if err != nil {
		fmt.Println("marshal error")
	}`,displayContent:`	// 인터페이스 대신 에러 우선 처리[error first]
	_, err := json.Marshal(make(chan int))
	if err != nil {
		fmt.Println("marshal error")
	}
	// 결과: marshal error`},{id:`language-go-p02-part-7`,title:`슬라이스 변환 패턴[transform pattern]`,content:`	doubleList := makeDoubles([]int{1, 2, 3})
	fmt.Println(doubleList)
}`,displayContent:`	// 슬라이스 변환 패턴[transform pattern]
	doubleList := makeDoubles([]int{1, 2, 3})
	fmt.Println(doubleList)
	// 결과: [2 4 6]
}`}]}]},{id:`language-java`,label:`Java`,folderName:`Language-Java`,lessons:[{id:`language-java-p01`,title:`P01.기본-패턴`,fileName:`P01.기본-패턴.java`,sourcePath:`assets/typingSource/Language-Java/P01.기본-패턴.java`,language:`java`,parts:[{id:`language-java-p01-part-1`,title:`P01.기본-패턴`,content:`class P01BasicPatterns {

    enum UserRole {
        USER, ADMIN
    }

    static int add(int numA, int numB) {
        return numA + numB;
    }

    public static void main(String[] args) {`,displayContent:`class P01BasicPatterns {

    enum UserRole {
        USER, ADMIN
    }

    static int add(int numA, int numB) {
        return numA + numB;
    }

    public static void main(String[] args) {`},{id:`language-java-p01-part-2`,title:`기본 타입[primitive type]`,content:`        int userAge = 30;
        double scoreValue = 95.5;
        boolean isAdmin = true;
        char gradeValue = 'A';
        System.out.println(userAge);
        System.out.println(scoreValue);
        System.out.println(isAdmin);
        System.out.println(gradeValue);`,displayContent:`        // 기본 타입[primitive type]
        int userAge = 30;
        double scoreValue = 95.5;
        boolean isAdmin = true;
        char gradeValue = 'A';
        System.out.println(userAge);
        System.out.println(scoreValue);
        System.out.println(isAdmin);
        System.out.println(gradeValue);
        // 결과: 30 / 95.5 / true / A`},{id:`language-java-p01-part-3`,title:`문자열[string]`,content:`        String userName = "kim";
        System.out.println(userName.toUpperCase());`,displayContent:`        // 문자열[string]
        String userName = "kim";
        System.out.println(userName.toUpperCase());
        // 결과: KIM`},{id:`language-java-p01-part-4`,title:`조건문[condition]`,content:`        if (userAge >= 20) {
            System.out.println("adult");
        } else {
            System.out.println("minor");
        }`,displayContent:`        // 조건문[condition]
        if (userAge >= 20) {
            System.out.println("adult");
        } else {
            System.out.println("minor");
        }
        // 결과: adult`},{id:`language-java-p01-part-5`,title:`배열[array]`,content:`        String[] colorList = { "red", "green", "blue" };
        for (String colorItem : colorList) {
            System.out.println(colorItem);
        }`,displayContent:`        // 배열[array]
        String[] colorList = { "red", "green", "blue" };
        for (String colorItem : colorList) {
            System.out.println(colorItem);
        }
        // 결과:
        // red
        // green
        // blue`},{id:`language-java-p01-part-6`,title:`다차원 배열[multidimensional array]`,content:`        int[][] matrixValue = { { 1, 2 }, { 3, 4 } };
        System.out.println(matrixValue[1][0]);`,displayContent:`        // 다차원 배열[multidimensional array]
        int[][] matrixValue = { { 1, 2 }, { 3, 4 } };
        System.out.println(matrixValue[1][0]);
        // 결과: 3`},{id:`language-java-p01-part-7`,title:`열거형[enum]`,content:`        UserRole roleValue = UserRole.ADMIN;
        switch (roleValue) {
            case USER:
                System.out.println("user");
                break;
            case ADMIN:
                System.out.println("admin");
                break;
        }`,displayContent:`        // 열거형[enum]
        UserRole roleValue = UserRole.ADMIN;
        switch (roleValue) {
            case USER:
                System.out.println("user");
                break;
            case ADMIN:
                System.out.println("admin");
                break;
        }
        // 결과: admin`},{id:`language-java-p01-part-8`,title:`형변환[type casting]`,content:`        double ratioValue = 9.8;
        int intValue = (int) ratioValue;
        System.out.println(intValue);`,displayContent:`        // 형변환[type casting]
        double ratioValue = 9.8;
        int intValue = (int) ratioValue;
        System.out.println(intValue);
        // 결과: 9`},{id:`language-java-p01-part-9`,title:`정적 메서드[static method]`,content:`        int sumValue = add(5, 7);
        System.out.println(sumValue);
    }
}`,displayContent:`        // 정적 메서드[static method]
        int sumValue = add(5, 7);
        System.out.println(sumValue);
        // 결과: 12
    }
}`}]},{id:`language-java-p02`,title:`P02.실무-패턴`,fileName:`P02.실무-패턴.java`,sourcePath:`assets/typingSource/Language-Java/P02.실무-패턴.java`,language:`java`,parts:[{id:`language-java-p02-part-1`,title:`P02.실무-패턴`,content:`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class P02PracticalPatterns {
    public static void main(String[] args) {`,displayContent:`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class P02PracticalPatterns {
    public static void main(String[] args) {`},{id:`language-java-p02-part-2`,title:`리스트[list]`,content:`        List<String> nameList = new ArrayList<>();
        nameList.add("kim");
        nameList.add("lee");
        System.out.println(nameList);`,displayContent:`        // 리스트[list]
        List<String> nameList = new ArrayList<>();
        nameList.add("kim");
        nameList.add("lee");
        System.out.println(nameList);
        // 결과: [kim, lee]`},{id:`language-java-p02-part-3`,title:`맵[map]`,content:`        Map<String, Integer> ageMap = new HashMap<>();
        ageMap.put("kim", 30);
        ageMap.put("lee", 25);
        System.out.println(ageMap.get("kim"));`,displayContent:`        // 맵[map]
        Map<String, Integer> ageMap = new HashMap<>();
        ageMap.put("kim", 30);
        ageMap.put("lee", 25);
        System.out.println(ageMap.get("kim"));
        // 결과: 30`},{id:`language-java-p02-part-4`,title:`람다[lambda]`,content:`        nameList.forEach(item -> System.out.println(item.toUpperCase()));`,displayContent:`        // 람다[lambda]
        nameList.forEach(item -> System.out.println(item.toUpperCase()));
        // 결과:
        // KIM
        // LEE`},{id:`language-java-p02-part-5`,title:`예외 처리[exception handling]`,content:`        try {
            int parsedValue = Integer.parseInt("123");
            System.out.println(parsedValue);
        } catch (NumberFormatException err) {
            System.out.println("parse error");
        }`,displayContent:`        // 예외 처리[exception handling]
        try {
            int parsedValue = Integer.parseInt("123");
            System.out.println(parsedValue);
        } catch (NumberFormatException err) {
            System.out.println("parse error");
        }
        // 결과: 123`},{id:`language-java-p02-part-6`,title:`메서드 분리[method extraction]`,content:`        System.out.println(formatUser("park", 28));
    }

    static String formatUser(String nameValue, int ageValue) {
        return nameValue + "(" + ageValue + ")";
    }
}`,displayContent:`        // 메서드 분리[method extraction]
        System.out.println(formatUser("park", 28));
        // 결과: park(28)
    }

    static String formatUser(String nameValue, int ageValue) {
        return nameValue + "(" + ageValue + ")";
    }
}`}]}]},{id:`language-javascript`,label:`JavaScript`,folderName:`Language-JavaScript`,lessons:[{id:`language-javascript-p01`,title:`P01.변수-구조분해`,fileName:`P01.변수-구조분해.js`,sourcePath:`assets/typingSource/Language-JavaScript/P01.변수-구조분해.js`,language:`javascript`,parts:[{id:`language-javascript-p01-part-1`,title:`변수 스코프[variable scope]`,content:`var varA = 'function-scoped';
let letA = 'block-scoped';

var userObj = { name: 'kim' };
userObj.name = 'lee';`,displayContent:`/*** 변수 스코프[variable scope] ***/
var varA = 'function-scoped';      // 함수 스코프[function scope], undefined 호이스팅[hoisting]
let letA = 'block-scoped';         // 블록 스코프[block scope], TDZ (선언 전 접근 → ReferenceError)
// const constA = 'read-only';     // 재할당 불가[immutable binding] (속성은 변경 가능)

var userObj = { name: 'kim' };
userObj.name = 'lee';   // ✅ 속성 변경[property mutation] 가능
// userObj = {};        // ❌ 재할당[reassignment] 불가 (const일 경우)`},{id:`language-javascript-p01-part-2`,title:`지수[exponentiation] / 논리 할당 연산자[logical assignment operator]`,content:`2 ** 10
2 ** 3 ** 2

var laA = 1;
laA &&= 99;

var laB = 0;
laB ||= 99;

var laC = null;
laC ??= 99;`,displayContent:`/*** 지수[exponentiation] / 논리 할당 연산자[logical assignment operator] ***/
2 ** 10          // 1024
2 ** 3 ** 2      // 512 (우→좌: 3**2=9, 2**9=512)

var laA = 1;
laA &&= 99;      // truthy → 재할당[assignment]: 99

var laB = 0;
laB ||= 99;      // falsy → 재할당[assignment]: 99

var laC = null;
laC ??= 99;      // null|undefined → 재할당[assignment]: 99`},{id:`language-javascript-p01-part-3`,title:`Nullish 병합[nullish coalescing] (??)`,content:`null      ?? 'default'
undefined ?? 'default'
0         ?? 'default'
''        ?? 'default'`,displayContent:`/*** Nullish 병합[nullish coalescing] (??) ***/
null      ?? 'default'   // 'default'
undefined ?? 'default'   // 'default'
0         ?? 'default'   // 0   (falsy지만 null이 아님)
''        ?? 'default'   // ''  (falsy지만 null이 아님)`},{id:`language-javascript-p01-part-4`,title:`옵셔널 체이닝[optional chaining] (?.)`,content:`var safeObj = { inner: { val: 42 } };
safeObj?.inner?.val
safeObj?.missing?.val
safeObj?.method?.()`,displayContent:`/*** 옵셔널 체이닝[optional chaining] (?.) ***/
var safeObj = { inner: { val: 42 } };
safeObj?.inner?.val       // 42
safeObj?.missing?.val     // undefined (단락 평가[short-circuit evaluation], 에러 없음)
safeObj?.method?.()       // undefined (메서드 부재 시 안전 호출)`},{id:`language-javascript-p01-part-5`,title:`스프레드 연산자[spread operator]`,content:`var mergedObj = { x: 1, ...{ y: 2, z: 3 } };
var mergedArr = [1, ...[2, 3]];`,displayContent:`/*** 스프레드 연산자[spread operator] ***/
var mergedObj = { x: 1, ...{ y: 2, z: 3 } };   // { x: 1, y: 2, z: 3 }
var mergedArr = [1, ...[2, 3]];                 // [1, 2, 3]`},{id:`language-javascript-p01-part-6`,title:`배열 구조분해[array destructuring]`,content:`var [adA, adB] = [10, 20];
var [adC, , adD] = [1, 2, 3];
var [adE, ...adRest] = [1, 2, 3];`,displayContent:`/*** 배열 구조분해[array destructuring] ***/
var [adA, adB] = [10, 20];           // adA=10, adB=20
var [adC, , adD] = [1, 2, 3];        // adC=1, adD=3 (두 번째 건너뜀)
var [adE, ...adRest] = [1, 2, 3];    // adE=1, adRest=[2, 3]`},{id:`language-javascript-p01-part-7`,title:`값 교환[swap]`,content:`var [swapA, swapB] = [100, 200];
[swapA, swapB] = [swapB, swapA];`,displayContent:`// 값 교환[swap]
var [swapA, swapB] = [100, 200];
[swapA, swapB] = [swapB, swapA];     // swapA=200, swapB=100`},{id:`language-javascript-p01-part-8`,title:`객체 구조분해[object destructuring]`,content:`var { name: odName, age: odAge = 30 } = { name: 'kim' };

var { a: odA, b: odB } = { a: 1, b: 2 };

var { p: odP, ...odRest } = { p: 1, q: 2, r: 3 };`,displayContent:`/*** 객체 구조분해[object destructuring] ***/
var { name: odName, age: odAge = 30 } = { name: 'kim' };
// odName='kim', odAge=30 (기본값[default value] 적용)

var { a: odA, b: odB } = { a: 1, b: 2 };
// odA=1, odB=2 (키→변수 이름 변경[aliasing])

var { p: odP, ...odRest } = { p: 1, q: 2, r: 3 };
// odP=1, odRest={ q:2, r:3 } (나머지 수집[rest collection])`},{id:`language-javascript-p01-part-9`,title:`중첩 구조분해[nested destructuring]`,content:`var nestedSrc = { id: 7, addr: { city: 'Seoul', zip: '12345' } };
var { id: nestedId, addr: { city: nestedCity } } = nestedSrc;`,displayContent:`/*** 중첩 구조분해[nested destructuring] ***/
var nestedSrc = { id: 7, addr: { city: 'Seoul', zip: '12345' } };
var { id: nestedId, addr: { city: nestedCity } } = nestedSrc;
// nestedId=7, nestedCity='Seoul'`},{id:`language-javascript-p01-part-10`,title:`파라미터 구조분해[parameter destructuring]`,content:`function showUser({ name, role = 'user' }) {
  return \`\${name}(\${role})\`;
}
showUser({ name: 'kim' });
showUser({ name: 'lee', role: 'admin' });`,displayContent:`/*** 파라미터 구조분해[parameter destructuring] ***/
function showUser({ name, role = 'user' }) {
  return \`\${name}(\${role})\`;
}
showUser({ name: 'kim' });                // 'kim(user)'
showUser({ name: 'lee', role: 'admin' }); // 'lee(admin)'`},{id:`language-javascript-p01-part-11`,title:`for...of + 구조분해[destructuring]`,content:`var teamList = [
  { name: 'kim', score: 90 },
  { name: 'lee', score: 80 },
];
for (var { name: tName, score: tScore } of teamList) {
  console.log(tName, tScore);
}`,displayContent:`/*** for...of + 구조분해[destructuring] ***/
var teamList = [
  { name: 'kim', score: 90 },
  { name: 'lee', score: 80 },
];
for (var { name: tName, score: tScore } of teamList) {
  console.log(tName, tScore);
}
// kim 90
// lee 80`},{id:`language-javascript-p01-part-12`,title:`동적 키 구조분해[computed property destructuring]`,content:`var dynKey = 'color';
var { [dynKey]: dynVal } = { color: 'blue' };`,displayContent:`/*** 동적 키 구조분해[computed property destructuring] ***/
var dynKey = 'color';
var { [dynKey]: dynVal } = { color: 'blue' };
// dynVal='blue'`},{id:`language-javascript-p01-part-13`,title:`삼항 연산자 중첩[nested ternary operator]`,content:`function grade(score) {
  return score >= 90 ? 'A'
       : score >= 80 ? 'B'
       : score >= 70 ? 'C'
       :               'F';
}
grade(85)
grade(65)`,displayContent:`/*** 삼항 연산자 중첩[nested ternary operator] ***/
function grade(score) {
  return score >= 90 ? 'A'
       : score >= 80 ? 'B'
       : score >= 70 ? 'C'
       :               'F';
}
grade(85)  // 'B'
grade(65)  // 'F'`}]},{id:`language-javascript-p02`,title:`P02.배열`,fileName:`P02.배열.js`,sourcePath:`assets/typingSource/Language-JavaScript/P02.배열.js`,language:`javascript`,parts:[{id:`language-javascript-p02-part-1`,title:`배열 생성[array creation]`,content:`Array.of(1, 2, 3)
Array.from('ABC')
Array.from({ length: 3 }, (_, i) => i)
Array.from(new Set([1, 2, 2, 3]))
Array.isArray([1, 2])`,displayContent:`/*** 배열 생성[array creation] ***/
Array.of(1, 2, 3)                        // [1, 2, 3]
Array.from('ABC')                        // ['A', 'B', 'C']
Array.from({ length: 3 }, (_, i) => i)  // [0, 1, 2]
Array.from(new Set([1, 2, 2, 3]))        // [1, 2, 3] (중복 제거[deduplication])
Array.isArray([1, 2])                    // true`},{id:`language-javascript-p02-part-2`,title:`기본 접근[access] / 변환[conversion]`,content:`[9, 8, 7].at(0)
[9, 8, 7].at(-1)
[1, 2, 'a'].toString()
['A', 'B', 'C'].join(' - ')`,displayContent:`/*** 기본 접근[access] / 변환[conversion] ***/
[9, 8, 7].at(0)     // 9
[9, 8, 7].at(-1)    // 7 (음수 인덱스[negative index])
[1, 2, 'a'].toString()       // '1,2,a'
['A', 'B', 'C'].join(' - ')  // 'A - B - C'`},{id:`language-javascript-p02-part-3`,title:`평탄화[flatten]`,content:`[1, [2, [3]]].flat()
[1, [2, [3]]].flat(Infinity)
['A B', 'C D'].flatMap(e => e.split(' '))`,displayContent:`/*** 평탄화[flatten] ***/
[1, [2, [3]]].flat()           // [1, 2, [3]]  (기본 깊이[depth] 1)
[1, [2, [3]]].flat(Infinity)   // [1, 2, 3]    (전체 깊이[full depth])
['A B', 'C D'].flatMap(e => e.split(' '))  // ['A', 'B', 'C', 'D']`},{id:`language-javascript-p02-part-4`,title:`원본 변경[mutation] - 추가/제거`,content:`var mutPush = [1, 2];
mutPush.push(3, 4);

var mutPop = [1, 2, 3];
mutPop.pop();

var mutUnshift = [3, 4];
mutUnshift.unshift(1, 2);

var mutShift = [1, 2, 3];
mutShift.shift();`,displayContent:`/*** 원본 변경[mutation] - 추가/제거 ***/
var mutPush = [1, 2];
mutPush.push(3, 4);   // 반환: 4 (길이[length]), mutPush=[1,2,3,4]

var mutPop = [1, 2, 3];
mutPop.pop();          // 반환: 3, mutPop=[1,2]

var mutUnshift = [3, 4];
mutUnshift.unshift(1, 2);  // 반환: 4, mutUnshift=[1,2,3,4]

var mutShift = [1, 2, 3];
mutShift.shift();           // 반환: 1, mutShift=[2,3]`},{id:`language-javascript-p02-part-5`,title:`원본 변경[mutation] - 정렬[sort]`,content:`var mutSort = [10, 1, 21, 2];
mutSort.sort((a, b) => a - b);
mutSort.reverse();`,displayContent:`/*** 원본 변경[mutation] - 정렬[sort] ***/
var mutSort = [10, 1, 21, 2];
mutSort.sort((a, b) => a - b);  // [1, 2, 10, 21] 오름차순[ascending]
mutSort.reverse();               // [21, 10, 2, 1]`},{id:`language-javascript-p02-part-6`,title:`원본 유지[immutable] (ES2023 - toSorted / toReversed / with)`,content:`var immArr = [3, 1, 2];
immArr.toSorted((a, b) => a - b)
immArr.toReversed()
immArr.with(1, 99)
immArr`,displayContent:`/*** 원본 유지[immutable] (ES2023 - toSorted / toReversed / with) ***/
var immArr = [3, 1, 2];
immArr.toSorted((a, b) => a - b)  // [1, 2, 3] (원본 유지[non-mutating])
immArr.toReversed()               // [2, 1, 3] (원본 유지[non-mutating])
immArr.with(1, 99)                // [3, 99, 2] (인덱스1 값 교체[replace], 원본 유지)
immArr                            // [3, 1, 2]`},{id:`language-javascript-p02-part-7`,title:`splice vs slice`,content:`var spliceArr = ['A', 'B', 'C', 'D', 'E'];
spliceArr.splice(1, 2);
spliceArr.splice(1, 0, 'X');

['A', 'B', 'C', 'D'].slice(1, 3)
['A', 'B', 'C', 'D'].slice(-2)`,displayContent:`/*** splice vs slice ***/
var spliceArr = ['A', 'B', 'C', 'D', 'E'];
spliceArr.splice(1, 2);       // 반환[return]: ['B','C'], spliceArr=['A','D','E']
spliceArr.splice(1, 0, 'X');  // 삽입[insert]: spliceArr=['A','X','D','E']

['A', 'B', 'C', 'D'].slice(1, 3)   // ['B', 'C'] (원본 유지[non-mutating])
['A', 'B', 'C', 'D'].slice(-2)     // ['C', 'D']`},{id:`language-javascript-p02-part-8`,title:`fill / copyWithin`,content:`[0, 0, 0].fill(7)
[1, 2, 3, 4].fill(0, 1, 3)
[1, 2, 3, 4, 5].copyWithin(0, 3)`,displayContent:`/*** fill / copyWithin ***/
[0, 0, 0].fill(7)            // [7, 7, 7]
[1, 2, 3, 4].fill(0, 1, 3)  // [1, 0, 0, 4]
[1, 2, 3, 4, 5].copyWithin(0, 3)  // [4, 5, 3, 4, 5] (index3부터 index0에 덮어씀[overwrite])`},{id:`language-javascript-p02-part-9`,title:`검색[search]`,content:`[10, 20, 30].indexOf(20)
[10, 20, 30].includes(20)
[1, 2, 3, 4].find(e => e > 2)
[1, 2, 3, 4].findIndex(e => e > 2)
[1, 2, 3, 4].findLast(e => e > 2)
[1, 2, 3, 4].findLastIndex(e => e > 2)`,displayContent:`/*** 검색[search] ***/
[10, 20, 30].indexOf(20)               // 1
[10, 20, 30].includes(20)              // true
[1, 2, 3, 4].find(e => e > 2)         // 3 (첫 번째 일치[match] 요소)
[1, 2, 3, 4].findIndex(e => e > 2)    // 2 (첫 번째 일치[match] 인덱스)
[1, 2, 3, 4].findLast(e => e > 2)     // 4 (마지막 일치[match] 요소)
[1, 2, 3, 4].findLastIndex(e => e > 2) // 3`},{id:`language-javascript-p02-part-10`,title:`조건 검사[predicate]`,content:`[2, 4, 6].every(e => e % 2 === 0)
[1, 2, 3].some(e => e > 2)
[1, 2, 3].some(e => e > 10)`,displayContent:`/*** 조건 검사[predicate] ***/
[2, 4, 6].every(e => e % 2 === 0)   // true  (모두 충족[all pass])
[1, 2, 3].some(e => e > 2)          // true  (하나라도 충족[any pass])
[1, 2, 3].some(e => e > 10)         // false`},{id:`language-javascript-p02-part-11`,title:`변환[transformation]`,content:`[1, 2, 3].map(e => e * 2)
[1, 2, 3, 4].filter(e => e % 2 === 0)
[1, 2, 3].map(e => e ** 2)`,displayContent:`/*** 변환[transformation] ***/
[1, 2, 3].map(e => e * 2)              // [2, 4, 6]
[1, 2, 3, 4].filter(e => e % 2 === 0) // [2, 4]
[1, 2, 3].map(e => e ** 2)            // [1, 4, 9]`},{id:`language-javascript-p02-part-12`,title:`누산[accumulation] (reduce)`,content:`[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)
[5, 10, 8].reduce((acc, cur) => Math.max(acc, cur), 0)`,displayContent:`/*** 누산[accumulation] (reduce) ***/
[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)  // 10 (합계[sum])
[5, 10, 8].reduce((acc, cur) => Math.max(acc, cur), 0)  // 10 (최대값[max])`},{id:`language-javascript-p02-part-13`,title:`빈도 카운트[frequency count]`,content:`var countSrc = ['A', 'B', 'A', 'C', 'B', 'A'];
countSrc.reduce((acc, key) => {
  acc[key] ??= 0;
  acc[key]++;
  return acc;
}, {});`,displayContent:`// 빈도 카운트[frequency count]
var countSrc = ['A', 'B', 'A', 'C', 'B', 'A'];
countSrc.reduce((acc, key) => {
  acc[key] ??= 0;
  acc[key]++;
  return acc;
}, {});
// { A:3, B:2, C:1 }`},{id:`language-javascript-p02-part-14`,title:`그룹핑[grouping]`,content:`var groupSrc = [
  { type: 'fruit', name: 'apple' },
  { type: 'veg',   name: 'carrot' },
  { type: 'fruit', name: 'banana' },
];
groupSrc.reduce((acc, item) => {
  acc[item.type] ??= [];
  acc[item.type].push(item.name);
  return acc;
}, {});`,displayContent:`// 그룹핑[grouping]
var groupSrc = [
  { type: 'fruit', name: 'apple' },
  { type: 'veg',   name: 'carrot' },
  { type: 'fruit', name: 'banana' },
];
groupSrc.reduce((acc, item) => {
  acc[item.type] ??= [];
  acc[item.type].push(item.name);
  return acc;
}, {});
// { fruit: ['apple','banana'], veg: ['carrot'] }`},{id:`language-javascript-p02-part-15`,title:`이터레이터[iterator] (entries / keys / values)`,content:`var iterSrc = ['X', 'Y', 'Z'];
for (var [idx, val] of iterSrc.entries()) {
  console.log(idx, val);
}

[...iterSrc.keys()]
[...iterSrc.values()]`,displayContent:`/*** 이터레이터[iterator] (entries / keys / values) ***/
var iterSrc = ['X', 'Y', 'Z'];
for (var [idx, val] of iterSrc.entries()) {
  console.log(idx, val);
}
// 0 'X'
// 1 'Y'
// 2 'Z'

[...iterSrc.keys()]    // [0, 1, 2]
[...iterSrc.values()]  // ['X', 'Y', 'Z']`},{id:`language-javascript-p02-part-16`,title:`concat / 스프레드[spread] 비교`,content:`[1, 2].concat([3, 4], 5)
[...[1, 2], ...[3, 4], 5]`,displayContent:`/*** concat / 스프레드[spread] 비교 ***/
[1, 2].concat([3, 4], 5)   // [1, 2, 3, 4, 5]
[...[1, 2], ...[3, 4], 5]  // [1, 2, 3, 4, 5]`}]},{id:`language-javascript-p03`,title:`P03.객체`,fileName:`P03.객체.js`,sourcePath:`assets/typingSource/Language-JavaScript/P03.객체.js`,language:`javascript`,parts:[{id:`language-javascript-p03-part-1`,title:`기본 생성[creation] / 접근[access]`,content:`var baseObj = { name: 'kim', age: 20 };
baseObj.name
baseObj['age']`,displayContent:`/*** 기본 생성[creation] / 접근[access] ***/
var baseObj = { name: 'kim', age: 20 };
baseObj.name     // 'kim'
baseObj['age']   // 20`},{id:`language-javascript-p03-part-2`,title:`단축 속성명[shorthand property]`,content:`var oName = 'lee', oAge = 30;
var shortObj = { oName, oAge };`,displayContent:`// 단축 속성명[shorthand property]
var oName = 'lee', oAge = 30;
var shortObj = { oName, oAge };  // { oName: 'lee', oAge: 30 }`},{id:`language-javascript-p03-part-3`,title:`Object.assign - 얕은 병합[shallow merge]`,content:`var assignTarget = { a: 1 };
Object.assign(assignTarget, { b: 2 }, { c: 3 });

var cloneObj = Object.assign({}, assignTarget);`,displayContent:`/*** Object.assign - 얕은 병합[shallow merge] ***/
var assignTarget = { a: 1 };
Object.assign(assignTarget, { b: 2 }, { c: 3 });
// assignTarget = { a:1, b:2, c:3 } (원본 변경[mutation])

var cloneObj = Object.assign({}, assignTarget);  // 얕은 복사[shallow copy]`},{id:`language-javascript-p03-part-4`,title:`스프레드[spread]로 병합[merge] / 복사[copy]`,content:`var src1 = { a: 1, b: 2 };
var src2 = { b: 9, c: 3 };
var spreadMerge = { ...src1, ...src2 };
var spreadClone = { ...src1 };`,displayContent:`/*** 스프레드[spread]로 병합[merge] / 복사[copy] ***/
var src1 = { a: 1, b: 2 };
var src2 = { b: 9, c: 3 };
var spreadMerge = { ...src1, ...src2 };  // { a:1, b:9, c:3 } (나중이 우선[last-wins])
var spreadClone = { ...src1 };           // { a:1, b:2 } (얕은 복사[shallow copy])`},{id:`language-javascript-p03-part-5`,title:`Object.entries / keys / values`,content:`var sampleObj = { a: 1, b: 2, c: 3 };
Object.keys(sampleObj)
Object.values(sampleObj)
Object.entries(sampleObj)`,displayContent:`/*** Object.entries / keys / values ***/
var sampleObj = { a: 1, b: 2, c: 3 };
Object.keys(sampleObj)    // ['a', 'b', 'c']
Object.values(sampleObj)  // [1, 2, 3]
Object.entries(sampleObj) // [['a',1], ['b',2], ['c',3]]`},{id:`language-javascript-p03-part-6`,title:`Object.fromEntries - 배열[array]→객체[object] / Map→객체[object]`,content:`Object.fromEntries([['x', 10], ['y', 20]])`,displayContent:`/*** Object.fromEntries - 배열[array]→객체[object] / Map→객체[object] ***/
Object.fromEntries([['x', 10], ['y', 20]])  // { x:10, y:20 }`},{id:`language-javascript-p03-part-7`,title:`값 변환[value transformation] 패턴`,content:`var doubleVals = Object.fromEntries(
  Object.entries({ a: 1, b: 2 }).map(([k, v]) => [k, v * 2])
);

var mapToObj = new Map([['p', 1], ['q', 2]]);
Object.fromEntries(mapToObj)`,displayContent:`// 값 변환[value transformation] 패턴
var doubleVals = Object.fromEntries(
  Object.entries({ a: 1, b: 2 }).map(([k, v]) => [k, v * 2])
);
// { a:2, b:4 }

// Map → Object
var mapToObj = new Map([['p', 1], ['q', 2]]);
Object.fromEntries(mapToObj)  // { p:1, q:2 }`},{id:`language-javascript-p03-part-8`,title:`Object.hasOwn - 직접 소유 속성[own property] 확인`,content:`var hasObj = { x: 1 };
Object.hasOwn(hasObj, 'x')
Object.hasOwn(hasObj, 'toString')
'x'        in hasObj
'toString' in hasObj`,displayContent:`/*** Object.hasOwn - 직접 소유 속성[own property] 확인 ***/
var hasObj = { x: 1 };
Object.hasOwn(hasObj, 'x')        // true  (직접 소유[own])
Object.hasOwn(hasObj, 'toString') // false (프로토타입 상속[prototype inheritance])
'x'        in hasObj              // true
'toString' in hasObj              // true  (상속[inherited] 포함)`},{id:`language-javascript-p03-part-9`,title:`Object.create - 프로토타입[prototype] 지정`,content:`var protoBase = { greet() { return \`Hi, \${this.name}\`; } };
var protoChild = Object.create(protoBase);
protoChild.name = 'kim';
protoChild.greet()

Object.create(null)`,displayContent:`/*** Object.create - 프로토타입[prototype] 지정 ***/
var protoBase = { greet() { return \`Hi, \${this.name}\`; } };
var protoChild = Object.create(protoBase);
protoChild.name = 'kim';
protoChild.greet()  // 'Hi, kim'

Object.create(null)  // 프로토타입[prototype] 없는 순수 딕셔너리[plain dictionary]`},{id:`language-javascript-p03-part-10`,title:`Object.freeze / seal`,content:`var frozenObj = Object.freeze({ val: 1, inner: { n: 0 } });
frozenObj.val = 99;
frozenObj.val
frozenObj.inner.n = 99;
frozenObj.inner.n

var sealedObj = Object.seal({ val: 1 });
sealedObj.val = 99;
delete sealedObj.val;
sealedObj.val`,displayContent:`/*** Object.freeze / seal ***/
var frozenObj = Object.freeze({ val: 1, inner: { n: 0 } });
frozenObj.val = 99;     // 무시됨 (strict 모드: TypeError)
frozenObj.val           // 1
frozenObj.inner.n = 99; // 얕은 동결[shallow freeze] → 중첩 객체는 변경 가능
frozenObj.inner.n       // 99

var sealedObj = Object.seal({ val: 1 });
sealedObj.val = 99;     // ✅ 값 변경[value mutation] 가능
delete sealedObj.val;   // ❌ 삭제[deletion] 불가
sealedObj.val           // 99`},{id:`language-javascript-p03-part-11`,title:`Object.is - 동일성 비교[identity comparison] (=== 보완)`,content:`Object.is(NaN, NaN)
Object.is(0, -0)
Object.is({ a: 1 }, { a: 1 })

var refSame = { a: 1 };
Object.is(refSame, refSame)`,displayContent:`/*** Object.is - 동일성 비교[identity comparison] (=== 보완) ***/
Object.is(NaN, NaN)    // true  (=== 는 false)
Object.is(0, -0)       // false (=== 는 true)
Object.is({ a: 1 }, { a: 1 })  // false (다른 참조[reference])

var refSame = { a: 1 };
Object.is(refSame, refSame)     // true`},{id:`language-javascript-p03-part-12`,title:`Computed property - 동적 키[dynamic key]`,content:`var prefix = 'item';
var dynKeyObj = {
  [prefix + 1]: 'a',
  [prefix + 2]: 'b',
};`,displayContent:`/*** Computed property - 동적 키[dynamic key] ***/
var prefix = 'item';
var dynKeyObj = {
  [prefix + 1]: 'a',
  [prefix + 2]: 'b',
};
// { item1:'a', item2:'b' }`},{id:`language-javascript-p03-part-13`,title:`Getter / Setter - 접근자 프로퍼티[accessor property]`,content:`var tempConv = {
  _celsius: 0,
  get fahrenheit() { return this._celsius * 9 / 5 + 32; },
  set fahrenheit(f) { this._celsius = (f - 32) * 5 / 9; },
};
tempConv.fahrenheit = 212;
tempConv._celsius
tempConv.fahrenheit`,displayContent:`/*** Getter / Setter - 접근자 프로퍼티[accessor property] ***/
var tempConv = {
  _celsius: 0,
  get fahrenheit() { return this._celsius * 9 / 5 + 32; },
  set fahrenheit(f) { this._celsius = (f - 32) * 5 / 9; },
};
tempConv.fahrenheit = 212;
tempConv._celsius   // 100
tempConv.fahrenheit // 212`},{id:`language-javascript-p03-part-14`,title:`이터러블 객체[iterable object] (Symbol.iterator 구현)`,content:`var iterableRange = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    var cur = this.from;
    var last = this.to;
    return {
      next() {
        return cur <= last
          ? { value: cur++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};
[...iterableRange]`,displayContent:`/*** 이터러블 객체[iterable object] (Symbol.iterator 구현) ***/
var iterableRange = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    var cur = this.from;
    var last = this.to;
    return {
      next() {
        return cur <= last
          ? { value: cur++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};
[...iterableRange]  // [1, 2, 3]`},{id:`language-javascript-p03-part-15`,title:`in 연산자[in operator] / delete`,content:`'name' in baseObj
delete baseObj.age;
'age' in baseObj`,displayContent:`/*** in 연산자[in operator] / delete ***/
'name' in baseObj    // true
delete baseObj.age;
'age' in baseObj     // false`},{id:`language-javascript-p03-part-16`,title:`속성 열거[property enumeration] (for...in)`,content:`var enumObj = { a: 1, b: 2, c: 3 };
for (var key in enumObj) {
  console.log(key, enumObj[key]);
}`,displayContent:`/*** 속성 열거[property enumeration] (for...in) ***/
var enumObj = { a: 1, b: 2, c: 3 };
for (var key in enumObj) {
  console.log(key, enumObj[key]);
}
// a 1
// b 2
// c 3`}]},{id:`language-javascript-p04`,title:`P04.함수`,fileName:`P04.함수.js`,sourcePath:`assets/typingSource/Language-JavaScript/P04.함수.js`,language:`javascript`,parts:[{id:`language-javascript-p04-part-1`,title:`함수 선언[function declaration] / 표현식[expression] / 화살표[arrow function]`,content:`function declFn(x) { return x * 2; }
var exprFn = function (x) { return x * 2; };
var arrowFn = x => x * 2;
var arrowBlock = x => { return x * 2; };

declFn(5)
arrowFn(5)`,displayContent:`/*** 함수 선언[function declaration] / 표현식[expression] / 화살표[arrow function] ***/
function declFn(x) { return x * 2; }        // 호이스팅[hoisting] O
var exprFn = function (x) { return x * 2; }; // 호이스팅[hoisting] X
var arrowFn = x => x * 2;                    // this 없음, 암묵적 반환[implicit return]
var arrowBlock = x => { return x * 2; };     // 블록 바디[block body]

declFn(5)   // 10
arrowFn(5)  // 10`},{id:`language-javascript-p04-part-2`,title:`기본값 매개변수[default parameter]`,content:`function greetFn(name, msg = 'Hello') {
  return \`\${msg}, \${name}!\`;
}
greetFn('kim')
greetFn('lee', 'Hi')`,displayContent:`/*** 기본값 매개변수[default parameter] ***/
function greetFn(name, msg = 'Hello') {
  return \`\${msg}, \${name}!\`;
}
greetFn('kim')           // 'Hello, kim!'
greetFn('lee', 'Hi')     // 'Hi, lee!'`},{id:`language-javascript-p04-part-3`,title:`Rest 파라미터[rest parameter]`,content:`function sumFn(first, ...rest) {
  return rest.reduce((acc, n) => acc + n, first);
}
sumFn(1, 2, 3, 4)`,displayContent:`/*** Rest 파라미터[rest parameter] ***/
function sumFn(first, ...rest) {
  return rest.reduce((acc, n) => acc + n, first);
}
sumFn(1, 2, 3, 4)  // 10`},{id:`language-javascript-p04-part-4`,title:`Function 메타 정보[metadata]`,content:`declFn.name
((a, b) => {}).length
((a, b, c = 0) => {}).length
((...args) => {}).length`,displayContent:`/*** Function 메타 정보[metadata] ***/
declFn.name                    // 'declFn'
((a, b) => {}).length          // 2
((a, b, c = 0) => {}).length   // 2 (기본값[default] 이후는 카운트 안됨)
((...args) => {}).length       // 0 (rest는 카운트 안됨)`},{id:`language-javascript-p04-part-5`,title:`call / apply / bind - 명시적 this 바인딩[explicit this binding]`,content:`function greetCtx(greeting) {
  return \`\${greeting}, \${this.name}!\`;
}
var ctx = { name: 'park' };
greetCtx.call(ctx, 'Hello')
greetCtx.apply(ctx, ['Hi'])
var boundGreet = greetCtx.bind(ctx);
boundGreet('Hey')`,displayContent:`/*** call / apply / bind - 명시적 this 바인딩[explicit this binding] ***/
function greetCtx(greeting) {
  return \`\${greeting}, \${this.name}!\`;
}
var ctx = { name: 'park' };
greetCtx.call(ctx, 'Hello')            // 'Hello, park!'
greetCtx.apply(ctx, ['Hi'])            // 'Hi, park!'
var boundGreet = greetCtx.bind(ctx);
boundGreet('Hey')                      // 'Hey, park!'`},{id:`language-javascript-p04-part-6`,title:`bind로 부분 적용[partial application]`,content:`var boundHello = greetCtx.bind(ctx, 'Hola');
boundHello()`,displayContent:`// bind로 부분 적용[partial application]
var boundHello = greetCtx.bind(ctx, 'Hola');
boundHello()  // 'Hola, park!'`},{id:`language-javascript-p04-part-7`,title:`IIFE - 즉시 실행 함수[immediately invoked function expression]`,content:`var iifeResult = (function (x) { return x * x; })(5);`,displayContent:`/*** IIFE - 즉시 실행 함수[immediately invoked function expression] ***/
var iifeResult = (function (x) { return x * x; })(5);  // 25`},{id:`language-javascript-p04-part-8`,title:`클로저[closure] - 상태 은닉[encapsulation]`,content:`function makeCounter(start) {
  var count = start ?? 0;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    get value()  { return count; },
  };
}
var counterA = makeCounter(10);
counterA.increment()
counterA.increment()
counterA.value`,displayContent:`/*** 클로저[closure] - 상태 은닉[encapsulation] ***/
function makeCounter(start) {
  var count = start ?? 0;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    get value()  { return count; },
  };
}
var counterA = makeCounter(10);
counterA.increment()  // 11
counterA.increment()  // 12
counterA.value        // 12`},{id:`language-javascript-p04-part-9`,title:`커링[currying]`,content:`var add = a => b => a + b;
add(3)(4)

var add5 = add(5);
add5(10)
add5(20)`,displayContent:`/*** 커링[currying] ***/
var add = a => b => a + b;
add(3)(4)    // 7

var add5 = add(5);
add5(10)     // 15
add5(20)     // 25`},{id:`language-javascript-p04-part-10`,title:`클로저 스코프 체인[closure scope chain]`,content:`var closureD = 4;
var closureFn = a => b => c => a + b + c + closureD;
closureFn(1)(2)(3)`,displayContent:`/*** 클로저 스코프 체인[closure scope chain] ***/
var closureD = 4;
var closureFn = a => b => c => a + b + c + closureD;
closureFn(1)(2)(3)  // 10`},{id:`language-javascript-p04-part-11`,title:`재귀[recursion]`,content:`function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
factorial(5)

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(7)`,displayContent:`/*** 재귀[recursion] ***/
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
factorial(5)  // 120

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(7)  // 13`},{id:`language-javascript-p04-part-12`,title:`제너레이터[generator]`,content:`function* rangeGen(start, end, step = 1) {
  for (var i = start; i <= end; i += step) yield i;
}
var genIter = rangeGen(1, 5);
genIter.next()
genIter.next()

[...rangeGen(1, 5)]
[...rangeGen(0, 10, 2)]`,displayContent:`/*** 제너레이터[generator] ***/
function* rangeGen(start, end, step = 1) {
  for (var i = start; i <= end; i += step) yield i;
}
var genIter = rangeGen(1, 5);
genIter.next()  // { value:1, done:false }
genIter.next()  // { value:2, done:false }

[...rangeGen(1, 5)]        // [1, 2, 3, 4, 5]
[...rangeGen(0, 10, 2)]    // [0, 2, 4, 6, 8, 10]`},{id:`language-javascript-p04-part-13`,title:`yield* 위임[delegation]`,content:`function* innerGen() { yield 'a'; yield 'b'; }
function* outerGen() {
  yield 1;
  yield* innerGen();
  yield 2;
}
[...outerGen()]`,displayContent:`/*** yield* 위임[delegation] ***/
function* innerGen() { yield 'a'; yield 'b'; }
function* outerGen() {
  yield 1;
  yield* innerGen();  // 다른 제너레이터에 위임[delegate]
  yield 2;
}
[...outerGen()]  // [1, 'a', 'b', 2]`},{id:`language-javascript-p04-part-14`,title:`팩토리 함수 패턴[factory function pattern]`,content:`function createUser(name, role) {
  return {
    name,
    role,
    toString() { return \`\${this.role}:\${this.name}\`; },
  };
}
var adminUser = createUser('kim', 'admin');
adminUser.toString()`,displayContent:`/*** 팩토리 함수 패턴[factory function pattern] ***/
function createUser(name, role) {
  return {
    name,
    role,
    toString() { return \`\${this.role}:\${this.name}\`; },
  };
}
var adminUser = createUser('kim', 'admin');
adminUser.toString()  // 'admin:kim'`},{id:`language-javascript-p04-part-15`,title:`프로토타입 메서드[prototype method] 추가`,content:`function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}
Animal.prototype.speak = function () {
  return \`\${this.name} says \${this.sound}\`;
};
var dogA = new Animal('Rex', 'Woof');
dogA.speak()
dogA instanceof Animal`,displayContent:`/*** 프로토타입 메서드[prototype method] 추가 ***/
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}
Animal.prototype.speak = function () {
  return \`\${this.name} says \${this.sound}\`;
};
var dogA = new Animal('Rex', 'Woof');
dogA.speak()  // 'Rex says Woof'
dogA instanceof Animal  // true`},{id:`language-javascript-p04-part-16`,title:`객체 내부 메서드 패턴[method definition pattern]`,content:`var methodObj = {
  value: 10,`,displayContent:`/*** 객체 내부 메서드 패턴[method definition pattern] ***/
var methodObj = {
  value: 10,`},{id:`language-javascript-p04-part-17`,title:`화살표 함수[arrow function]: this 없음 (렉시컬 this[lexical this] 캡처)`,content:`  getArrow: () => methodObj.value,
  getMethod() { return this.value; },
};
methodObj.getArrow()
methodObj.getMethod()`,displayContent:`  // 화살표 함수[arrow function]: this 없음 (렉시컬 this[lexical this] 캡처)
  getArrow: () => methodObj.value,
  // 메서드 단축 표기[method shorthand]: this = 호출 객체[calling object]
  getMethod() { return this.value; },
};
methodObj.getArrow()   // 10
methodObj.getMethod()  // 10`}]},{id:`language-javascript-p05`,title:`P05.문자열`,fileName:`P05.문자열.js`,sourcePath:`assets/typingSource/Language-JavaScript/P05.문자열.js`,language:`javascript`,parts:[{id:`language-javascript-p05-part-1`,title:`기본 접근[basic access]`,content:`var str1 = 'Hello, World!';
str1.length
str1[0]
str1.at(0)
str1.at(-1)
str1.charAt(7)
str1.charCodeAt(0)`,displayContent:`/*** 기본 접근[basic access] ***/
var str1 = 'Hello, World!';
str1.length        // 13
str1[0]            // 'H'
str1.at(0)         // 'H'
str1.at(-1)        // '!'  (음수 인덱스[negative index])
str1.charAt(7)     // 'W'
str1.charCodeAt(0) // 72`},{id:`language-javascript-p05-part-2`,title:`대소문자 변환[case conversion]`,content:`'hello'.toUpperCase()
'WORLD'.toLowerCase()`,displayContent:`/*** 대소문자 변환[case conversion] ***/
'hello'.toUpperCase()  // 'HELLO'
'WORLD'.toLowerCase()  // 'world'`},{id:`language-javascript-p05-part-3`,title:`검색[search]`,content:`str1.indexOf('o')
str1.lastIndexOf('o')
str1.indexOf('xyz')
str1.includes('World')
str1.startsWith('Hello')
str1.endsWith('!')
str1.search(/[A-Z]/)`,displayContent:`/*** 검색[search] ***/
str1.indexOf('o')         // 4  (첫 번째 위치)
str1.lastIndexOf('o')     // 8  (마지막 위치)
str1.indexOf('xyz')       // -1 (없으면 -1)
str1.includes('World')    // true
str1.startsWith('Hello')  // true
str1.endsWith('!')        // true
str1.search(/[A-Z]/)      // 0  (정규식[regex], 첫 번째 매치 인덱스)`},{id:`language-javascript-p05-part-4`,title:`추출[extraction]`,content:`'Mozilla'.substring(2, 5)
'Mozilla'.slice(2, 5)
'Mozilla'.slice(-5)
'Mozilla'.slice(-5, -2)`,displayContent:`/*** 추출[extraction] ***/
'Mozilla'.substring(2, 5)  // 'zil' (startIndex, endIndex)
'Mozilla'.slice(2, 5)      // 'zil'
'Mozilla'.slice(-5)        // 'ozilla' (음수 인덱스[negative index])
'Mozilla'.slice(-5, -2)    // 'ozil'`},{id:`language-javascript-p05-part-5`,title:`분리[split]`,content:`'a,b,c'.split(',')
'a,b,c'.split(',', 2)
'hello'.split('')`,displayContent:`/*** 분리[split] ***/
'a,b,c'.split(',')       // ['a', 'b', 'c']
'a,b,c'.split(',', 2)    // ['a', 'b'] (limit)
'hello'.split('')         // ['h', 'e', 'l', 'l', 'o']`},{id:`language-javascript-p05-part-6`,title:`반복[repeat] / 패딩[padding] / 공백 제거[trim]`,content:`'ab'.repeat(3)
'5'.padStart(4, '0')
'5'.padEnd(4, '0')
'  trim me  '.trim()
'  trim me  '.trimStart()
'  trim me  '.trimEnd()`,displayContent:`/*** 반복[repeat] / 패딩[padding] / 공백 제거[trim] ***/
'ab'.repeat(3)              // 'ababab'
'5'.padStart(4, '0')        // '0005'
'5'.padEnd(4, '0')          // '5000'
'  trim me  '.trim()        // 'trim me'
'  trim me  '.trimStart()   // 'trim me  '
'  trim me  '.trimEnd()     // '  trim me'`},{id:`language-javascript-p05-part-7`,title:`치환[replace]`,content:`'aabbcc'.replace('b', 'X')
'aabbcc'.replaceAll('b', 'X')
'aabbcc'.replace(/b/g, 'X')`,displayContent:`/*** 치환[replace] ***/
'aabbcc'.replace('b', 'X')      // 'aXbcc'  (첫 번째만)
'aabbcc'.replaceAll('b', 'X')   // 'aaXXcc' (전체)
'aabbcc'.replace(/b/g, 'X')     // 'aaXXcc' (정규식[regex] 플래그 g)`},{id:`language-javascript-p05-part-8`,title:`캡처 그룹[capture group] 참조 ($1, $2, ...)`,content:`'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')`,displayContent:`// 캡처 그룹[capture group] 참조 ($1, $2, ...)
'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')  // '18/03/2024'`},{id:`language-javascript-p05-part-9`,title:`정규식 매치[regex match]`,content:`var str2 = 'cat bat sat';
str2.match(/[bcs]at/g)
str2.replace(/[bcs]at/g, 'hat')`,displayContent:`/*** 정규식 매치[regex match] ***/
var str2 = 'cat bat sat';
str2.match(/[bcs]at/g)           // ['cat', 'bat', 'sat']
str2.replace(/[bcs]at/g, 'hat')  // 'hat hat hat'`},{id:`language-javascript-p05-part-10`,title:`matchAll - 이터레이터[iterator] 반환`,content:`var regexAll = /(\\d+)/g;
var str3 = 'abc 123 def 456';
[...str3.matchAll(regexAll)].map(m => m[0])`,displayContent:`// matchAll - 이터레이터[iterator] 반환
var regexAll = /(\\d+)/g;
var str3 = 'abc 123 def 456';
[...str3.matchAll(regexAll)].map(m => m[0])  // ['123', '456']`},{id:`language-javascript-p05-part-11`,title:`연결[concatenation]`,content:`'Hello'.concat(', ', 'World', '!')`,displayContent:`/*** 연결[concatenation] ***/
'Hello'.concat(', ', 'World', '!')  // 'Hello, World!'`},{id:`language-javascript-p05-part-12`,title:`템플릿 리터럴[template literal]`,content:"var tplName = 'kim';\nvar tplScore = 95;\n`이름: ${tplName}, 점수: ${tplScore}점`\n`${tplScore >= 90 ? '우수' : '보통'}`",displayContent:"/*** 템플릿 리터럴[template literal] ***/\nvar tplName = 'kim';\nvar tplScore = 95;\n`이름: ${tplName}, 점수: ${tplScore}점`  // '이름: kim, 점수: 95점'\n`${tplScore >= 90 ? '우수' : '보통'}`   // '우수'"},{id:`language-javascript-p05-part-13`,title:`멀티라인[multiline]`,content:`var multiLine = \`첫 번째 줄
두 번째 줄\`;
multiLine`,displayContent:`// 멀티라인[multiline]
var multiLine = \`첫 번째 줄
두 번째 줄\`;
multiLine  // '첫 번째 줄\\n두 번째 줄'`},{id:`language-javascript-p05-part-14`,title:`String.raw - 이스케이프 비처리[raw string]`,content:"String.raw`C:\\Users\\name`\nString.raw`\\n \\t \\r`",displayContent:"/*** String.raw - 이스케이프 비처리[raw string] ***/\nString.raw`C:\\Users\\name`     // 'C:\\\\Users\\\\name'\nString.raw`\\n \\t \\r`          // '\\\\n \\\\t \\\\r'"},{id:`language-javascript-p05-part-15`,title:`문자 코드[character code] 변환`,content:`String.fromCharCode(65, 66, 67)
'A'.charCodeAt(0)`,displayContent:`/*** 문자 코드[character code] 변환 ***/
String.fromCharCode(65, 66, 67)  // 'ABC'
'A'.charCodeAt(0)                // 65`},{id:`language-javascript-p05-part-16`,title:`이터러블[iterable] - 스프레드[spread] / for...of`,content:`[...'ABC']
for (var ch of 'hi') { console.log(ch); }`,displayContent:`/*** 이터러블[iterable] - 스프레드[spread] / for...of ***/
[...'ABC']  // ['A', 'B', 'C']
for (var ch of 'hi') { console.log(ch); }
// h
// i`},{id:`language-javascript-p05-part-17`,title:`숫자→문자열 변환[number-to-string conversion]`,content:`(255).toString(16)
(255).toString(2)
(3.14159).toFixed(2)`,displayContent:`/*** 숫자→문자열 변환[number-to-string conversion] ***/
(255).toString(16)   // 'ff'  (16진수[hexadecimal])
(255).toString(2)    // '11111111' (2진수[binary])
(3.14159).toFixed(2) // '3.14'`}]},{id:`language-javascript-p06`,title:`P06.클래스`,fileName:`P06.클래스.js`,sourcePath:`assets/typingSource/Language-JavaScript/P06.클래스.js`,language:`javascript`,parts:[{id:`language-javascript-p06-part-1`,title:`기본 클래스[basic class]`,content:`class Vehicle {
  static count = 0;
  #fuel;

  constructor(type, fuel) {
    this.type = type;
    this.#fuel = fuel;
    Vehicle.count++;
  }

  getFuel()  { return this.#fuel; }
  describe() { return \`\${this.type} (\${this.#fuel})\`; }

  static getCount() { return Vehicle.count; }
}

var car1 = new Vehicle('car', 'gasoline');
var car2 = new Vehicle('bike', 'none');
car1.describe()
car1.getFuel()
Vehicle.count
Vehicle.getCount()`,displayContent:`/*** 기본 클래스[basic class] ***/
class Vehicle {
  static count = 0;          // 정적 속성[static field] (인스턴스 공유 안됨)
  #fuel;                     // 프라이빗 필드[private field] (클래스 외부 접근 불가)

  constructor(type, fuel) {
    this.type = type;
    this.#fuel = fuel;
    Vehicle.count++;
  }

  getFuel()  { return this.#fuel; }                    // 프라이빗 접근자[private accessor]
  describe() { return \`\${this.type} (\${this.#fuel})\`; }

  static getCount() { return Vehicle.count; }          // 정적 메서드[static method]
}

var car1 = new Vehicle('car', 'gasoline');
var car2 = new Vehicle('bike', 'none');
car1.describe()         // 'car (gasoline)'
car1.getFuel()          // 'gasoline'
Vehicle.count           // 2
Vehicle.getCount()      // 2`},{id:`language-javascript-p06-part-2`,title:`Getter / Setter - 접근자 프로퍼티[accessor property]`,content:`class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area()          { return Math.PI * this.radius ** 2; }
  get circumference() { return 2 * Math.PI * this.radius; }
  set diameter(d)     { this.radius = d / 2; }
}

var circle1 = new Circle(5);
circle1.area.toFixed(2)
circle1.circumference.toFixed(2)
circle1.diameter = 20;
circle1.radius`,displayContent:`/*** Getter / Setter - 접근자 프로퍼티[accessor property] ***/
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get area()          { return Math.PI * this.radius ** 2; }
  get circumference() { return 2 * Math.PI * this.radius; }
  set diameter(d)     { this.radius = d / 2; }
}

var circle1 = new Circle(5);
circle1.area.toFixed(2)           // '78.54'
circle1.circumference.toFixed(2)  // '31.42'
circle1.diameter = 20;
circle1.radius                    // 10`},{id:`language-javascript-p06-part-3`,title:`상속[inheritance] (extends / super)`,content:`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() { return \`\${this.name} makes a noise.\`; }
  toString() { return \`Animal(\${this.name})\`; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    return \`\${this.name} barks.\`;
  }
  parentSpeak() {
    return super.speak();
  }
}

var dog1 = new Dog('Rex', 'Labrador');
dog1.speak()
dog1.parentSpeak()
dog1.toString()
dog1 instanceof Dog
dog1 instanceof Animal`,displayContent:`/*** 상속[inheritance] (extends / super) ***/
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() { return \`\${this.name} makes a noise.\`; }
  toString() { return \`Animal(\${this.name})\`; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);          // 부모[parent] constructor 호출 필수 (this 사용 전)
    this.breed = breed;
  }
  speak() {               // 오버라이드[override]
    return \`\${this.name} barks.\`;
  }
  parentSpeak() {
    return super.speak(); // 부모 메서드[parent method] 호출
  }
}

var dog1 = new Dog('Rex', 'Labrador');
dog1.speak()         // 'Rex barks.'
dog1.parentSpeak()   // 'Rex makes a noise.'
dog1.toString()      // 'Animal(Rex)'  (상속[inheritance])
dog1 instanceof Dog      // true
dog1 instanceof Animal   // true`},{id:`language-javascript-p06-part-4`,title:`정적 초기화 블록[static initialization block]`,content:`class Config {
  static host;
  static port;
  static {
    Config.host = 'localhost';
    Config.port = 3000;
  }
}
Config.host
Config.port`,displayContent:`/*** 정적 초기화 블록[static initialization block] ***/
class Config {
  static host;
  static port;
  static {
    Config.host = 'localhost';
    Config.port = 3000;
  }
}
Config.host  // 'localhost'
Config.port  // 3000`},{id:`language-javascript-p06-part-5`,title:`클래스 표현식[class expression]`,content:`var Rectangle = class {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  get area() { return this.w * this.h; }
};
new Rectangle(4, 5).area`,displayContent:`/*** 클래스 표현식[class expression] ***/
var Rectangle = class {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  get area() { return this.w * this.h; }
};
new Rectangle(4, 5).area  // 20`},{id:`language-javascript-p06-part-6`,title:`믹스인 패턴[mixin pattern]`,content:`var Serializable = Base => class extends Base {
  serialize() { return JSON.stringify(this); }
};

var Timestamped = Base => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date().toISOString().slice(0, 10);
  }
};

class BaseEntity {
  constructor(data) { Object.assign(this, data); }
}

class UserEntity extends Serializable(Timestamped(BaseEntity)) {}

var userEntity = new UserEntity({ id: 1, name: 'kim' });
userEntity.serialize()`,displayContent:`/*** 믹스인 패턴[mixin pattern] ***/
var Serializable = Base => class extends Base {
  serialize() { return JSON.stringify(this); }
};

var Timestamped = Base => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date().toISOString().slice(0, 10);
  }
};

class BaseEntity {
  constructor(data) { Object.assign(this, data); }
}

class UserEntity extends Serializable(Timestamped(BaseEntity)) {}

var userEntity = new UserEntity({ id: 1, name: 'kim' });
userEntity.serialize()   // '{"id":1,"name":"kim","createdAt":"2026-03-18"}'`},{id:`language-javascript-p06-part-7`,title:`내장 클래스 상속[built-in class inheritance]`,content:`class TypedArray extends Array {
  sum() { return this.reduce((acc, n) => acc + n, 0); }
  avg() { return this.sum() / this.length; }
}

var nums = new TypedArray(10, 20, 30);
nums.sum()
nums.avg()
nums.map(n => n * 2)`,displayContent:`/*** 내장 클래스 상속[built-in class inheritance] ***/
class TypedArray extends Array {
  sum() { return this.reduce((acc, n) => acc + n, 0); }
  avg() { return this.sum() / this.length; }
}

var nums = new TypedArray(10, 20, 30);
nums.sum()           // 60
nums.avg()           // 20
nums.map(n => n * 2) // TypedArray [20, 40, 60]`},{id:`language-javascript-p06-part-8`,title:`instanceof / constructor 확인[inspection]`,content:`dog1.constructor === Dog
dog1.constructor.name
Object.getPrototypeOf(dog1) === Dog.prototype`,displayContent:`/*** instanceof / constructor 확인[inspection] ***/
dog1.constructor === Dog                        // true
dog1.constructor.name                           // 'Dog'
Object.getPrototypeOf(dog1) === Dog.prototype   // true`}]},{id:`language-javascript-p07`,title:`P07.비동기`,fileName:`P07.비동기.js`,sourcePath:`assets/typingSource/Language-JavaScript/P07.비동기.js`,language:`javascript`,parts:[{id:`language-javascript-p07-part-1`,title:`Promise 기본 생성[basic construction]`,content:`var pBasic = new Promise((resolve, reject) => {
  setTimeout(() => resolve('완료'), 100);
});
pBasic.then(v => console.log(v));`,displayContent:`/*** Promise 기본 생성[basic construction] ***/
var pBasic = new Promise((resolve, reject) => {
  setTimeout(() => resolve('완료'), 100);
});
pBasic.then(v => console.log(v));   // '완료'`},{id:`language-javascript-p07-part-2`,title:`Promise.resolve / reject 단축[shorthand]`,content:`Promise.resolve(42).then(v => console.log(v));
Promise.reject(new Error('실패')).catch(e => console.error(e.message));`,displayContent:`/*** Promise.resolve / reject 단축[shorthand] ***/
Promise.resolve(42).then(v => console.log(v));                          // 42
Promise.reject(new Error('실패')).catch(e => console.error(e.message)); // '실패'`},{id:`language-javascript-p07-part-3`,title:`then / catch / finally 체인[chain]`,content:`Promise.resolve(1)
  .then(v => v + 1)
  .then(v => { if (v > 1) throw new Error('too big'); return v; })
  .catch(e => { console.error(e.message); return 0; })
  .finally(() => console.log('정리 완료'));`,displayContent:`/*** then / catch / finally 체인[chain] ***/
Promise.resolve(1)
  .then(v => v + 1)           // 2
  .then(v => { if (v > 1) throw new Error('too big'); return v; })
  .catch(e => { console.error(e.message); return 0; })  // 'too big' → 0
  .finally(() => console.log('정리 완료'));              // 항상 실행[always runs]`},{id:`language-javascript-p07-part-4`,title:`Promise.all - 전체 성공 대기[wait for all] (병렬[parallel])`,content:`Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  new Promise(r => setTimeout(() => r(3), 50)),
]).then(values => console.log(values));`,displayContent:`/*** Promise.all - 전체 성공 대기[wait for all] (병렬[parallel]) ***/
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  new Promise(r => setTimeout(() => r(3), 50)),
]).then(values => console.log(values));
// [1, 2, 3]`},{id:`language-javascript-p07-part-5`,title:`하나라도 reject → 즉시 거부[short-circuit rejection]`,content:`Promise.all([
  Promise.resolve('ok'),
  Promise.reject(new Error('fail')),
]).catch(e => console.error(e.message));`,displayContent:`// 하나라도 reject → 즉시 거부[short-circuit rejection]
Promise.all([
  Promise.resolve('ok'),
  Promise.reject(new Error('fail')),
]).catch(e => console.error(e.message));  // 'fail'`},{id:`language-javascript-p07-part-6`,title:`Promise.allSettled - 전부 완료 후 결과 수집[settle all]`,content:`Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(new Error('oops')),
]).then(results => console.log(results));`,displayContent:`/*** Promise.allSettled - 전부 완료 후 결과 수집[settle all] ***/
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject(new Error('oops')),
]).then(results => console.log(results));
// [
//   { status:'fulfilled', value: 1 },
//   { status:'rejected',  reason: Error: oops },
// ]`},{id:`language-javascript-p07-part-7`,title:`Promise.any - 가장 먼저 이행[first fulfilled]`,content:`Promise.any([
  Promise.reject('a'),
  new Promise(r => setTimeout(() => r('b'), 100)),
  new Promise(r => setTimeout(() => r('c'), 50)),
]).then(v => console.log(v));`,displayContent:`/*** Promise.any - 가장 먼저 이행[first fulfilled] ***/
Promise.any([
  Promise.reject('a'),
  new Promise(r => setTimeout(() => r('b'), 100)),
  new Promise(r => setTimeout(() => r('c'), 50)),
]).then(v => console.log(v));  // 'c'`},{id:`language-javascript-p07-part-8`,title:`전부 reject → AggregateError`,content:`Promise.any([Promise.reject('x'), Promise.reject('y')])
  .catch(e => console.log(e.constructor.name));`,displayContent:`// 전부 reject → AggregateError
Promise.any([Promise.reject('x'), Promise.reject('y')])
  .catch(e => console.log(e.constructor.name));  // 'AggregateError'`},{id:`language-javascript-p07-part-9`,title:`Promise.race - 가장 먼저 정산[first settled] (resolve or reject)`,content:`Promise.race([
  new Promise(r => setTimeout(() => r('slow'), 200)),
  new Promise(r => setTimeout(() => r('fast'), 50)),
]).then(v => console.log(v));`,displayContent:`/*** Promise.race - 가장 먼저 정산[first settled] (resolve or reject) ***/
Promise.race([
  new Promise(r => setTimeout(() => r('slow'), 200)),
  new Promise(r => setTimeout(() => r('fast'), 50)),
]).then(v => console.log(v));  // 'fast'`},{id:`language-javascript-p07-part-10`,title:`async / await 기본`,content:`async function fetchData(id) {
  var data = await Promise.resolve({ id, name: 'kim' });
  return data;
}
fetchData(1).then(d => console.log(d));`,displayContent:`/*** async / await 기본 ***/
async function fetchData(id) {
  var data = await Promise.resolve({ id, name: 'kim' });  // 비동기 대기[async await]
  return data;
}
fetchData(1).then(d => console.log(d));  // { id:1, name:'kim' }`},{id:`language-javascript-p07-part-11`,title:`async / await - try/catch 에러 처리[error handling]`,content:`async function safeFetch(url) {
  try {
    var res = await Promise.reject(new Error('네트워크 오류'));
    return res;
  } catch (err) {
    console.error('에러:', err.message);
    return null;
  } finally {
    console.log('요청 종료');
  }
}
safeFetch('/api/data');`,displayContent:`/*** async / await - try/catch 에러 처리[error handling] ***/
async function safeFetch(url) {
  try {
    var res = await Promise.reject(new Error('네트워크 오류'));
    return res;
  } catch (err) {
    console.error('에러:', err.message);  // '에러: 네트워크 오류'
    return null;
  } finally {
    console.log('요청 종료');  // 항상 실행[always runs]
  }
}
safeFetch('/api/data');`},{id:`language-javascript-p07-part-12`,title:`순차 실행[sequential execution]`,content:`async function sequential() {
  var a = await Promise.resolve(1);
  var b = await Promise.resolve(2);
  var c = await Promise.resolve(3);
  return a + b + c;
}
sequential().then(v => console.log(v));`,displayContent:`/*** 순차 실행[sequential execution] ***/
async function sequential() {
  var a = await Promise.resolve(1);
  var b = await Promise.resolve(2);  // a 완료 후 실행[after a resolves]
  var c = await Promise.resolve(3);  // b 완료 후 실행[after b resolves]
  return a + b + c;
}
sequential().then(v => console.log(v));  // 6`},{id:`language-javascript-p07-part-13`,title:`병렬 실행[parallel execution] - Promise.all + await`,content:`async function parallel() {
  var [a, b, c] = await Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30),
  ]);
  return a + b + c;
}
parallel().then(v => console.log(v));`,displayContent:`/*** 병렬 실행[parallel execution] - Promise.all + await ***/
async function parallel() {
  var [a, b, c] = await Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30),
  ]);
  return a + b + c;
}
parallel().then(v => console.log(v));  // 60`},{id:`language-javascript-p07-part-14`,title:`비동기 이터레이터[async iterator] (for await...of)`,content:`async function* asyncCounter(start, end) {
  for (var i = start; i <= end; i++) {
    await new Promise(r => setTimeout(r, 10));
    yield i;
  }
}

async function runCounter() {
  for await (var num of asyncCounter(1, 3)) {
    console.log(num);
  }
}
runCounter();`,displayContent:`/*** 비동기 이터레이터[async iterator] (for await...of) ***/
async function* asyncCounter(start, end) {
  for (var i = start; i <= end; i++) {
    await new Promise(r => setTimeout(r, 10));  // 딜레이[delay] 10ms
    yield i;
  }
}

async function runCounter() {
  for await (var num of asyncCounter(1, 3)) {
    console.log(num);
  }
}
runCounter();
// 1
// 2
// 3`},{id:`language-javascript-p07-part-15`,title:`에러를 값으로 처리하는 패턴[error-as-value pattern]`,content:`async function safeAll() {
  var results = await Promise.all([
    Promise.resolve('ok').catch(e => e),
    Promise.reject(new Error('fail')).catch(e => e),
  ]);
  console.log(results);
}
safeAll();`,displayContent:`/*** 에러를 값으로 처리하는 패턴[error-as-value pattern] ***/
async function safeAll() {
  var results = await Promise.all([
    Promise.resolve('ok').catch(e => e),
    Promise.reject(new Error('fail')).catch(e => e),
  ]);
  console.log(results);
}
safeAll();
// ['ok', Error: fail]`}]},{id:`language-javascript-p08`,title:`P08.컬렉션-심볼`,fileName:`P08.컬렉션-심볼.js`,sourcePath:`assets/typingSource/Language-JavaScript/P08.컬렉션-심볼.js`,language:`javascript`,parts:[{id:`language-javascript-p08-part-1`,title:`Map - 키-값[key-value] 저장[storage] (키 타입[key type] 제한 없음)`,content:`var mapA = new Map();
mapA.set('name', 'kim');
mapA.set(42, 'forty-two');
mapA.set({ id: 1 }, 'objKey');
mapA.get('name')
mapA.get(42)
mapA.has('name')
mapA.size
mapA.delete('name');
mapA.size`,displayContent:`/*** Map - 키-값[key-value] 저장[storage] (키 타입[key type] 제한 없음) ***/
var mapA = new Map();
mapA.set('name', 'kim');
mapA.set(42, 'forty-two');
mapA.set({ id: 1 }, 'objKey');  // 객체도 키[key] 가능
mapA.get('name')    // 'kim'
mapA.get(42)        // 'forty-two'
mapA.has('name')    // true
mapA.size           // 3
mapA.delete('name');
mapA.size           // 2`},{id:`language-javascript-p08-part-2`,title:`Map 생성 - 배열[array]로 초기화[initialize]`,content:`var mapB = new Map([['a', 1], ['b', 2], ['c', 3]]);
mapB.get('b')`,displayContent:`/*** Map 생성 - 배열[array]로 초기화[initialize] ***/
var mapB = new Map([['a', 1], ['b', 2], ['c', 3]]);
mapB.get('b')   // 2`},{id:`language-javascript-p08-part-3`,title:`Map 순회[iteration]`,content:`for (var [k, v] of mapB) {
  console.log(k, v);
}

[...mapB.keys()]
[...mapB.values()]
[...mapB.entries()]

mapB.forEach((v, k) => console.log(k, v));`,displayContent:`/*** Map 순회[iteration] ***/
for (var [k, v] of mapB) {
  console.log(k, v);
}
// a 1
// b 2
// c 3

[...mapB.keys()]    // ['a', 'b', 'c']
[...mapB.values()]  // [1, 2, 3]
[...mapB.entries()] // [['a',1], ['b',2], ['c',3]]

mapB.forEach((v, k) => console.log(k, v));
// a 1 / b 2 / c 3`},{id:`language-javascript-p08-part-4`,title:`Map ↔ Object 변환[conversion]`,content:`var mapFromObj = new Map(Object.entries({ x: 10, y: 20 }));

Object.fromEntries(mapFromObj)`,displayContent:`/*** Map ↔ Object 변환[conversion] ***/
var mapFromObj = new Map(Object.entries({ x: 10, y: 20 }));
// Map { 'x' => 10, 'y' => 20 }

Object.fromEntries(mapFromObj)
// { x: 10, y: 20 }`},{id:`language-javascript-p08-part-5`,title:`WeakMap - 약한 참조[weak reference] (GC 대상[GC-eligible], 열거 불가[non-enumerable])`,content:`var weakMapA = new WeakMap();
var wmKey = {};
weakMapA.set(wmKey, 'private-data');
weakMapA.get(wmKey)
weakMapA.has(wmKey)`,displayContent:`/*** WeakMap - 약한 참조[weak reference] (GC 대상[GC-eligible], 열거 불가[non-enumerable]) ***/
var weakMapA = new WeakMap();
var wmKey = {};
weakMapA.set(wmKey, 'private-data');
weakMapA.get(wmKey)   // 'private-data'
weakMapA.has(wmKey)   // true
// wmKey = null; → GC 수거[garbage collection] 시 WeakMap에서도 자동 제거`},{id:`language-javascript-p08-part-6`,title:`Set - 중복 없는 값 컬렉션[unique value collection]`,content:`var setA = new Set([1, 2, 3, 2, 1]);
setA.size
setA.has(2)
setA.add(4);
setA.delete(1);
[...setA]`,displayContent:`/*** Set - 중복 없는 값 컬렉션[unique value collection] ***/
var setA = new Set([1, 2, 3, 2, 1]);  // 중복 자동 제거[automatic deduplication]
setA.size    // 3
setA.has(2)  // true
setA.add(4);
setA.delete(1);
[...setA]    // [2, 3, 4]`},{id:`language-javascript-p08-part-7`,title:`Set 활용 - 배열 중복 제거[array deduplication]`,content:`var dupArr = [1, 2, 2, 3, 3, 3, 4];
var uniqArr = [...new Set(dupArr)];`,displayContent:`/*** Set 활용 - 배열 중복 제거[array deduplication] ***/
var dupArr = [1, 2, 2, 3, 3, 3, 4];
var uniqArr = [...new Set(dupArr)];  // [1, 2, 3, 4]`},{id:`language-javascript-p08-part-8`,title:`Set 순회[iteration]`,content:`var setB = new Set(['X', 'Y', 'Z']);
for (var item of setB) { console.log(item); }`,displayContent:`/*** Set 순회[iteration] ***/
var setB = new Set(['X', 'Y', 'Z']);
for (var item of setB) { console.log(item); }
// X / Y / Z`},{id:`language-javascript-p08-part-9`,title:`Set 집합 연산[set operation]`,content:`var setX = new Set([1, 2, 3, 4]);
var setY = new Set([3, 4, 5, 6]);

var union        = new Set([...setX, ...setY]);
var intersection = new Set([...setX].filter(v =>  setY.has(v)));
var difference   = new Set([...setX].filter(v => !setY.has(v)));

[...union]
[...intersection]
[...difference]`,displayContent:`/*** Set 집합 연산[set operation] ***/
var setX = new Set([1, 2, 3, 4]);
var setY = new Set([3, 4, 5, 6]);

var union        = new Set([...setX, ...setY]);                          // 합집합[union]: {1,2,3,4,5,6}
var intersection = new Set([...setX].filter(v =>  setY.has(v)));         // 교집합[intersection]: {3,4}
var difference   = new Set([...setX].filter(v => !setY.has(v)));         // 차집합[difference]: {1,2}

[...union]        // [1, 2, 3, 4, 5, 6]
[...intersection] // [3, 4]
[...difference]   // [1, 2]`},{id:`language-javascript-p08-part-10`,title:`WeakSet - 약한 참조[weak reference] 객체 집합`,content:`var weakSetA = new WeakSet();
var wsObj = { id: 1 };
weakSetA.add(wsObj);
weakSetA.has(wsObj)`,displayContent:`/*** WeakSet - 약한 참조[weak reference] 객체 집합 ***/
var weakSetA = new WeakSet();
var wsObj = { id: 1 };
weakSetA.add(wsObj);
weakSetA.has(wsObj)   // true
// wsObj = null; → GC 수거[garbage collection] 시 자동 제거`},{id:`language-javascript-p08-part-11`,title:`Symbol - 고유 식별자[unique identifier]`,content:`var symA = Symbol('description');
var symB = Symbol('description');
symA === symB
symA.toString()
symA.description
typeof symA`,displayContent:`/*** Symbol - 고유 식별자[unique identifier] ***/
var symA = Symbol('description');
var symB = Symbol('description');
symA === symB            // false (항상 고유[always unique])
symA.toString()          // 'Symbol(description)'
symA.description         // 'description'
typeof symA              // 'symbol'`},{id:`language-javascript-p08-part-12`,title:`Symbol을 객체 키[object key]로 사용`,content:`var symId = Symbol('id');
var symRole = Symbol('role');
var symObj = {
  [symId]: 42,
  [symRole]: 'admin',
  name: 'kim',
};
symObj[symId]
symObj[symRole]
Object.keys(symObj)
Object.getOwnPropertySymbols(symObj)`,displayContent:`/*** Symbol을 객체 키[object key]로 사용 ***/
var symId = Symbol('id');
var symRole = Symbol('role');
var symObj = {
  [symId]: 42,
  [symRole]: 'admin',
  name: 'kim',
};
symObj[symId]           // 42
symObj[symRole]         // 'admin'
Object.keys(symObj)     // ['name']  (Symbol은 열거[enumeration] 안됨)
Object.getOwnPropertySymbols(symObj)  // [Symbol(id), Symbol(role)]`},{id:`language-javascript-p08-part-13`,title:`Symbol.for - 전역 레지스트리[global registry] (공유[shared] 가능)`,content:`var globalSym1 = Symbol.for('shared');
var globalSym2 = Symbol.for('shared');
globalSym1 === globalSym2
Symbol.keyFor(globalSym1)`,displayContent:`/*** Symbol.for - 전역 레지스트리[global registry] (공유[shared] 가능) ***/
var globalSym1 = Symbol.for('shared');
var globalSym2 = Symbol.for('shared');
globalSym1 === globalSym2  // true (같은 키면 동일 심볼)
Symbol.keyFor(globalSym1)  // 'shared'`},{id:`language-javascript-p08-part-14`,title:`Well-known Symbol - Symbol.iterator (이터레이터 프로토콜[iterator protocol])`,content:`var rangeObj = {
  from: 1, to: 3,
  [Symbol.iterator]() {
    var cur = this.from, last = this.to;
    return {
      next() {
        return cur <= last
          ? { value: cur++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};
[...rangeObj]`,displayContent:`/*** Well-known Symbol - Symbol.iterator (이터레이터 프로토콜[iterator protocol]) ***/
var rangeObj = {
  from: 1, to: 3,
  [Symbol.iterator]() {
    var cur = this.from, last = this.to;
    return {
      next() {
        return cur <= last
          ? { value: cur++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};
[...rangeObj]  // [1, 2, 3]`},{id:`language-javascript-p08-part-15`,title:`Well-known Symbol - Symbol.toPrimitive (타입 강제 변환[type coercion])`,content:`var customNum = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 42;
    if (hint === 'string') return 'forty-two';
    return true;
  }
};
+customNum
\`\${customNum}\`
customNum + ''`,displayContent:`/*** Well-known Symbol - Symbol.toPrimitive (타입 강제 변환[type coercion]) ***/
var customNum = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 42;
    if (hint === 'string') return 'forty-two';
    return true;  // 기본값[default hint]
  }
};
+customNum            // 42
\`\${customNum}\`        // 'forty-two'
customNum + ''        // 'true'`}]},{id:`language-javascript-p09`,title:`P09.정규식`,fileName:`P09.정규식.js`,sourcePath:`assets/typingSource/Language-JavaScript/P09.정규식.js`,language:`javascript`,parts:[{id:`language-javascript-p09-part-1`,title:`생성[creation] - 리터럴[literal] vs 생성자[constructor]`,content:`var reLiteral = /hello/gi;
var reConstructor = new RegExp('hello', 'gi');

reLiteral.test('Hello World')
reConstructor.test('HELLO')`,displayContent:`/*** 생성[creation] - 리터럴[literal] vs 생성자[constructor] ***/
var reLiteral = /hello/gi;                    // 리터럴[literal] 표기 (컴파일 타임)
var reConstructor = new RegExp('hello', 'gi'); // 생성자[constructor] (런타임, 동적 패턴)

reLiteral.test('Hello World')   // true
reConstructor.test('HELLO')     // true`},{id:`language-javascript-p09-part-2`,title:`d  → 인덱스[indices]          - 매치 시작/끝 인덱스 제공`,content:`'aBcDeF'.match(/[a-z]/g)
'aBcDeF'.match(/[a-z]/gi)

'line1\\nline2'.match(/^\\w+/m)
'line1\\nline2'.match(/^\\w+/gm)

'hello\\nworld'.match(/hello.world/s)`,displayContent:`// d  → 인덱스[indices]          - 매치 시작/끝 인덱스 제공

'aBcDeF'.match(/[a-z]/g)   // ['a', 'c', 'e']       (g: 전체)
'aBcDeF'.match(/[a-z]/gi)  // ['a', 'B', 'c', 'D', 'e', 'F'] (i: 대소문자 무시)

'line1\\nline2'.match(/^\\w+/m)    // ['line1'] (m 없으면 첫 줄만)
'line1\\nline2'.match(/^\\w+/gm)   // ['line1', 'line2'] (m: 각 줄의 ^)

'hello\\nworld'.match(/hello.world/s)  // ['hello\\nworld'] (s: . 이 \\n 매치)`},{id:`language-javascript-p09-part-3`,title:`앵커[anchor]`,content:`'Hello World'.match(/^Hello/)
'Hello World'.match(/World$/)

'cat cats'.match(/\\bcat\\b/g)
'cat cats'.match(/cat\\B/g)`,displayContent:`/*** 앵커[anchor] ***/
'Hello World'.match(/^Hello/)   // ['Hello']  (^ 문자열 시작[start of string])
'Hello World'.match(/World$/)   // ['World']  ($ 문자열 끝[end of string])

'cat cats'.match(/\\bcat\\b/g)    // ['cat']     (\\b 단어 경계[word boundary])
'cat cats'.match(/cat\\B/g)      // ['cat']     (\\B 단어 경계가 아님[non-word boundary])`},{id:`language-javascript-p09-part-4`,title:`문자 클래스[character class]`,content:`'a1 b2'.match(/\\d/g)
'a1 b2'.match(/\\D/g)
'a1 b2'.match(/\\w/g)
'a1 b2'.match(/\\W/g)
'a1 b2'.match(/\\s/g)
'a1 b2'.match(/\\S/g)
'a1.b'.match(/./g)`,displayContent:`/*** 문자 클래스[character class] ***/
'a1 b2'.match(/\\d/g)   // ['1', '2']       (\\d 숫자[digit] 0-9)
'a1 b2'.match(/\\D/g)   // ['a', ' ', 'b', ' '] (\\D 비숫자[non-digit])
'a1 b2'.match(/\\w/g)   // ['a','1','b','2']    (\\w 단어 문자[word char]: [a-zA-Z0-9_])
'a1 b2'.match(/\\W/g)   // [' ', ' ']           (\\W 비단어[non-word char])
'a1 b2'.match(/\\s/g)   // [' ', ' ']           (\\s 공백[whitespace])
'a1 b2'.match(/\\S/g)   // ['a','1','b','2']    (\\S 비공백[non-whitespace])
'a1.b'.match(/./g)     // ['a','1','.','b']    (. 임의의 한 문자[any char except \\n])`},{id:`language-javascript-p09-part-5`,title:`문자셋[character set]`,content:`'grey gray'.match(/gr[ae]y/g)
'hello123'.match(/[a-z]+/g)
'hello123'.match(/[^a-z]+/g)
'hello123'.match(/[a-zA-Z0-9]+/g)`,displayContent:`/*** 문자셋[character set] ***/
'grey gray'.match(/gr[ae]y/g)    // ['grey', 'gray']    ([ae] a 또는 e)
'hello123'.match(/[a-z]+/g)      // ['hello']           ([a-z] 범위[range])
'hello123'.match(/[^a-z]+/g)     // ['123']             ([^] 부정[negation])
'hello123'.match(/[a-zA-Z0-9]+/g) // ['hello123']       (복수 범위)`},{id:`language-javascript-p09-part-6`,title:`수량자[quantifier]`,content:`'graaay'.match(/gra*y/)
'gry'.match(/gra*y/)
'gray'.match(/gra?y/)
'gry'.match(/gra?y/)
'gray'.match(/gra+y/)
'gry'.match(/gra+y/)

'graaay'.match(/gra{2}y/)
'graay'.match(/gra{2}y/)
'graaay'.match(/gra{2,}y/)
'graaay'.match(/gra{2,3}y/)`,displayContent:`/*** 수량자[quantifier] ***/
'graaay'.match(/gra*y/)    // null   (a*: 0번 이상, y 바로 앞에 없어서 null)
'gry'.match(/gra*y/)       // ['gry']   (a*: 0번 이상)
'gray'.match(/gra?y/)      // ['gray']  (a?: 0 또는 1번)
'gry'.match(/gra?y/)       // ['gry']   (a?: 0 또는 1번)
'gray'.match(/gra+y/)      // ['gray']  (a+: 1번 이상)
'gry'.match(/gra+y/)       // null      (a+: 1번 이상, 0번이라 null)

'graaay'.match(/gra{2}y/)   // null     ({2}: 정확히 2번)
'graay'.match(/gra{2}y/)    // ['graay'] ({2}: 정확히 2번)
'graaay'.match(/gra{2,}y/)  // ['graaay'] ({2,}: 2번 이상)
'graaay'.match(/gra{2,3}y/) // ['graaay'] ({2,3}: 2~3번)`},{id:`language-javascript-p09-part-7`,title:`탐욕적[greedy] vs 게으른[lazy] 수량자`,content:`'<a><b><c>'.match(/<.+>/)
'<a><b><c>'.match(/<.+?>/)
'<a><b><c>'.match(/<.*?>/)`,displayContent:`/*** 탐욕적[greedy] vs 게으른[lazy] 수량자 ***/
'<a><b><c>'.match(/<.+>/)    // ['<a><b><c>'] (greedy: 최대한 매치)
'<a><b><c>'.match(/<.+?>/)   // ['<a>']       (lazy: 최소한 매치, ? 추가)
'<a><b><c>'.match(/<.*?>/)   // ['<a>']       (lazy)`},{id:`language-javascript-p09-part-8`,title:`그룹[group]`,content:`'2024-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/)

'grey'.match(/gr(?:a|e)y/)
'grey'.match(/gr(a|e)y/)`,displayContent:`/*** 그룹[group] ***/
// (x)    캡처 그룹[capturing group]     - 매치 + 기억
// (?:x)  비캡처 그룹[non-capturing group] - 매치만, 기억 안함
// (?<name>x) 네임드 캡처 그룹[named capturing group]

'2024-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/)
// ['2024-03-18', '2024', '03', '18', index:0, ...]
// [0]=전체, [1]=year, [2]=month, [3]=day

'grey'.match(/gr(?:a|e)y/)   // ['grey'] (비캡처: 그룹 인덱스 없음)
'grey'.match(/gr(a|e)y/)     // ['grey', 'e'] (캡처: [1]='e')`},{id:`language-javascript-p09-part-9`,title:`네임드 캡처 그룹[named capturing group]`,content:`var dateMatch = '2024-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);
dateMatch.groups.year
dateMatch.groups.month
dateMatch.groups.day`,displayContent:`// 네임드 캡처 그룹[named capturing group]
var dateMatch = '2024-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);
dateMatch.groups.year    // '2024'
dateMatch.groups.month   // '03'
dateMatch.groups.day     // '18'`},{id:`language-javascript-p09-part-10`,title:`역참조[backreference]`,content:`'aabbcc'.match(/(.)\\1/)
'abab'.match(/(ab)\\1/)`,displayContent:`/*** 역참조[backreference] ***/
'aabbcc'.match(/(.)\\1/)   // ['aa', 'a']  (\\1 = 첫 번째 캡처 그룹 재참조)
'abab'.match(/(ab)\\1/)    // ['abab', 'ab']`},{id:`language-javascript-p09-part-11`,title:`전방탐색[lookahead] / 후방탐색[lookbehind]`,content:`'100px 200em 50px'.match(/\\d+(?=px)/g)
'100px 200em 50px'.match(/\\d+(?!px)/g)

'$100 £200 $50'.match(/(?<=\\$)\\d+/g)
'$100 £200 $50'.match(/(?<!\\$)\\d+/g)`,displayContent:`/*** 전방탐색[lookahead] / 후방탐색[lookbehind] ***/
// (?=x)  긍정 전방탐색[positive lookahead]  - x 앞에 있는 것
// (?!x)  부정 전방탐색[negative lookahead]  - x 앞에 없는 것
// (?<=x) 긍정 후방탐색[positive lookbehind] - x 뒤에 있는 것
// (?<!x) 부정 후방탐색[negative lookbehind] - x 뒤에 없는 것

'100px 200em 50px'.match(/\\d+(?=px)/g)    // ['100', '50']   (px 앞의 숫자만)
'100px 200em 50px'.match(/\\d+(?!px)/g)    // ['200', ...] (px 아닌 것 앞의 숫자)

'$100 £200 $50'.match(/(?<=\\$)\\d+/g)      // ['100', '50']   ($ 뒤의 숫자만)
'$100 £200 $50'.match(/(?<!\\$)\\d+/g)      // ['200']         ($ 아닌 것 뒤의 숫자)`},{id:`language-javascript-p09-part-12`,title:`정규식 메서드[regex methods]`,content:`var re1 = /\\d+/g;
var str1 = 'abc 123 def 456';

re1.test('abc 123')
str1.search(/\\d+/)
str1.match(/\\d+/g)
str1.replace(/\\d+/g, 'N')`,displayContent:`/*** 정규식 메서드[regex methods] ***/
var re1 = /\\d+/g;
var str1 = 'abc 123 def 456';

re1.test('abc 123')         // true  (패턴 존재 여부[existence])
str1.search(/\\d+/)          // 4     (첫 번째 매치 인덱스[index], 없으면 -1)
str1.match(/\\d+/g)          // ['123', '456']
str1.replace(/\\d+/g, 'N')   // 'abc N def N'`},{id:`language-javascript-p09-part-13`,title:`matchAll - 모든 캡처 그룹 포함 이터레이터[iterator] 반환`,content:`var re2 = /(\\d+)/g;
[...str1.matchAll(re2)].map(m => m[1])

'one1two2three'.split(/\\d/)`,displayContent:`// matchAll - 모든 캡처 그룹 포함 이터레이터[iterator] 반환
var re2 = /(\\d+)/g;
[...str1.matchAll(re2)].map(m => m[1])  // ['123', '456']

// split
'one1two2three'.split(/\\d/)  // ['one', 'two', 'three']`},{id:`language-javascript-p09-part-14`,title:`replace + 캡처 그룹 참조`,content:`'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')
'2024-03-18'.replace(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/, '$<d>/$<m>/$<y>')

'hello'.replace(/(\\w+)/, '[$&]')`,displayContent:`/*** replace + 캡처 그룹 참조 ***/
// $1 $2... = 캡처 그룹[capture group] 번호 참조
// $<name>  = 네임드 그룹[named group] 참조
// $&       = 매치 전체[entire match]
// $\`       = 매치 이전[before match]
// $'       = 매치 이후[after match]

'2024-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1')  // '18/03/2024'
'2024-03-18'.replace(/(?<y>\\d{4})-(?<m>\\d{2})-(?<d>\\d{2})/, '$<d>/$<m>/$<y>') // '18/03/2024'

'hello'.replace(/(\\w+)/, '[$&]')  // '[hello]' ($&: 전체 매치)`},{id:`language-javascript-p09-part-15`,title:`이메일[email] 검증`,content:`var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;
emailRe.test('user@example.com')
emailRe.test('invalid@')`,displayContent:`// 이메일[email] 검증
var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;
emailRe.test('user@example.com')   // true
emailRe.test('invalid@')           // false`},{id:`language-javascript-p09-part-16`,title:`전화번호[phone number]`,content:`var phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;
phoneRe.test('010-1234-5678')
phoneRe.test('02.123.4567')`,displayContent:`// 전화번호[phone number]
var phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;
phoneRe.test('010-1234-5678')  // true
phoneRe.test('02.123.4567')    // true`},{id:`language-javascript-p09-part-17`,title:`날짜[date] YYYY-MM-DD`,content:`var dateRe = /^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/;
dateRe.test('2024-03-18')
dateRe.test('2024-13-01')`,displayContent:`// 날짜[date] YYYY-MM-DD
var dateRe = /^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/;
dateRe.test('2024-03-18')  // true
dateRe.test('2024-13-01')  // false`},{id:`language-javascript-p09-part-18`,title:`URL 프로토콜 추출`,content:`'https:`,displayContent:`// URL 프로토콜 추출
'https://example.com'.match(/^(https?):\\/\\//)
// ['https://', 'https']`},{id:`language-javascript-p09-part-19`,title:`단어 경계[word boundary]로 정확히 매치`,content:`function hasWord(str, word) {
  return new RegExp(\`\\\\b\${word}\\\\b\`, 'i').test(str);
}
hasWord('Thanks for everything', 'thanks')
hasWord('Thanksgiving is coming', 'thanks')`,displayContent:`// 단어 경계[word boundary]로 정확히 매치
function hasWord(str, word) {
  return new RegExp(\`\\\\b\${word}\\\\b\`, 'i').test(str);
}
hasWord('Thanks for everything', 'thanks')     // true
hasWord('Thanksgiving is coming', 'thanks')    // false`}]},{id:`language-javascript-p10-proxy-reflect`,title:`P10.Proxy-Reflect`,fileName:`P10.Proxy-Reflect.js`,sourcePath:`assets/typingSource/Language-JavaScript/P10.Proxy-Reflect.js`,language:`javascript`,parts:[{id:`language-javascript-p10-proxy-reflect-part-1`,title:`handler : 트랩[trap]을 정의하는 객체 (트랩이 없으면 target에 그대로 전달)`,content:`var emptyProxy = new Proxy({ a: 1 }, {});
emptyProxy.a`,displayContent:`// handler : 트랩[trap]을 정의하는 객체 (트랩이 없으면 target에 그대로 전달)

var emptyProxy = new Proxy({ a: 1 }, {});
emptyProxy.a   // 1  (트랩 없음 → target에 그대로 전달[passthrough])`},{id:`language-javascript-p10-proxy-reflect-part-2`,title:`get 트랩[get trap] - 속성 읽기[property access] 가로채기`,content:`var getTarget = { name: 'kim', age: 30 };
var getProxy = new Proxy(getTarget, {
  get(target, prop, receiver) {`,displayContent:`/*** get 트랩[get trap] - 속성 읽기[property access] 가로채기 ***/
var getTarget = { name: 'kim', age: 30 };
var getProxy = new Proxy(getTarget, {
  get(target, prop, receiver) {`},{id:`language-javascript-p10-proxy-reflect-part-3`,title:`prop이 없으면 기본값[default value] 반환`,content:`    return prop in target ? Reflect.get(target, prop, receiver) : \`[\${prop} 없음]\`;
  }
});
getProxy.name
getProxy.job`,displayContent:`    // prop이 없으면 기본값[default value] 반환
    return prop in target ? Reflect.get(target, prop, receiver) : \`[\${prop} 없음]\`;
  }
});
getProxy.name    // 'kim'
getProxy.job     // '[job 없음]'`},{id:`language-javascript-p10-proxy-reflect-part-4`,title:`set 트랩[set trap] - 속성 쓰기[property assignment] 가로채기`,content:`var setProxy = new Proxy({}, {
  set(target, prop, value, receiver) {`,displayContent:`/*** set 트랩[set trap] - 속성 쓰기[property assignment] 가로채기 ***/
var setProxy = new Proxy({}, {
  set(target, prop, value, receiver) {`},{id:`language-javascript-p10-proxy-reflect-part-5`,title:`유효성 검사[validation]: age는 양수 정수만 허용`,content:`    if (prop === 'age') {
      if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
        throw new TypeError(\`age는 양수 정수[positive integer]여야 합니다\`);
      }
    }
    return Reflect.set(target, prop, value, receiver);
  }
});
setProxy.name = 'lee';
setProxy.age = 25;`,displayContent:`    // 유효성 검사[validation]: age는 양수 정수만 허용
    if (prop === 'age') {
      if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
        throw new TypeError(\`age는 양수 정수[positive integer]여야 합니다\`);
      }
    }
    return Reflect.set(target, prop, value, receiver);  // 기본 동작 수행
  }
});
setProxy.name = 'lee';   // 'lee'
setProxy.age = 25;       // 25
// setProxy.age = -1;    // ❌ TypeError 발생`},{id:`language-javascript-p10-proxy-reflect-part-6`,title:`has 트랩[has trap] - in 연산자[in operator] 가로채기`,content:`var rangeProxy = new Proxy({ min: 1, max: 100 }, {
  has(target, prop) {`,displayContent:`/*** has 트랩[has trap] - in 연산자[in operator] 가로채기 ***/
var rangeProxy = new Proxy({ min: 1, max: 100 }, {
  has(target, prop) {`},{id:`language-javascript-p10-proxy-reflect-part-7`,title:`숫자면 범위 안에 있는지 확인[range check]`,content:`    var num = Number(prop);
    if (!isNaN(num)) return num >= target.min && num <= target.max;
    return prop in target;
  }
});
50  in rangeProxy
150 in rangeProxy
'min' in rangeProxy`,displayContent:`    // 숫자면 범위 안에 있는지 확인[range check]
    var num = Number(prop);
    if (!isNaN(num)) return num >= target.min && num <= target.max;
    return prop in target;
  }
});
50  in rangeProxy   // true  (범위 내)
150 in rangeProxy   // false (범위 밖)
'min' in rangeProxy // true  (속성 존재)`},{id:`language-javascript-p10-proxy-reflect-part-8`,title:`deleteProperty 트랩 - delete 연산자[delete operator] 가로채기`,content:`var deleteProxy = new Proxy({ pub: 'public', _priv: 'private' }, {
  deleteProperty(target, prop) {`,displayContent:`/*** deleteProperty 트랩 - delete 연산자[delete operator] 가로채기 ***/
var deleteProxy = new Proxy({ pub: 'public', _priv: 'private' }, {
  deleteProperty(target, prop) {`},{id:`language-javascript-p10-proxy-reflect-part-9`,title:`_ 로 시작하는 속성은 삭제 금지[deletion forbidden]`,content:`    if (prop.startsWith('_')) {
      throw new Error(\`프라이빗 속성[private property] '\${prop}'은 삭제 불가\`);
    }
    return Reflect.deleteProperty(target, prop);
  }
});
delete deleteProxy.pub`,displayContent:`    // _ 로 시작하는 속성은 삭제 금지[deletion forbidden]
    if (prop.startsWith('_')) {
      throw new Error(\`프라이빗 속성[private property] '\${prop}'은 삭제 불가\`);
    }
    return Reflect.deleteProperty(target, prop);
  }
});
delete deleteProxy.pub    // true`},{id:`language-javascript-p10-proxy-reflect-part-10`,title:`apply 트랩[apply trap] - 함수 호출[function call] 가로채기`,content:`function multiply(a, b) { return a * b; }

var applyProxy = new Proxy(multiply, {
  apply(target, thisArg, args) {
    console.log(\`호출[call]: multiply(\${args})\`);
    return Reflect.apply(target, thisArg, args);
  }
});
applyProxy(3, 4)`,displayContent:`/*** apply 트랩[apply trap] - 함수 호출[function call] 가로채기 ***/
function multiply(a, b) { return a * b; }

var applyProxy = new Proxy(multiply, {
  apply(target, thisArg, args) {
    console.log(\`호출[call]: multiply(\${args})\`);  // 로깅[logging]
    return Reflect.apply(target, thisArg, args);
  }
});
applyProxy(3, 4)   // 로그: '호출[call]: multiply(3,4)', 반환: 12`},{id:`language-javascript-p10-proxy-reflect-part-11`,title:`construct 트랩[construct trap] - new 연산자[new operator] 가로채기`,content:`function Person(name) { this.name = name; }

var constructProxy = new Proxy(Person, {
  construct(target, args, newTarget) {
    console.log(\`인스턴스 생성[instantiation]: \${args[0]}\`);
    var instance = Reflect.construct(target, args, newTarget);
    instance.createdAt = new Date().toISOString().slice(0, 10);
    return instance;
  }
});
var p1 = new constructProxy('kim');
p1.name
p1.createdAt`,displayContent:`/*** construct 트랩[construct trap] - new 연산자[new operator] 가로채기 ***/
function Person(name) { this.name = name; }

var constructProxy = new Proxy(Person, {
  construct(target, args, newTarget) {
    console.log(\`인스턴스 생성[instantiation]: \${args[0]}\`);
    var instance = Reflect.construct(target, args, newTarget);
    instance.createdAt = new Date().toISOString().slice(0, 10);
    return instance;
  }
});
var p1 = new constructProxy('kim');
p1.name       // 'kim'
p1.createdAt  // '2026-03-18'`},{id:`language-javascript-p10-proxy-reflect-part-12`,title:`ownKeys 트랩 - Object.keys / for...in 가로채기`,content:`var ownKeysProxy = new Proxy({ pub: 1, _priv: 2, normal: 3 }, {
  ownKeys(target) {`,displayContent:`/*** ownKeys 트랩 - Object.keys / for...in 가로채기 ***/
var ownKeysProxy = new Proxy({ pub: 1, _priv: 2, normal: 3 }, {
  ownKeys(target) {`},{id:`language-javascript-p10-proxy-reflect-part-13`,title:`_ 로 시작하는 키[key] 숨기기`,content:`    return Reflect.ownKeys(target).filter(k => !k.startsWith('_'));
  }
});
Object.keys(ownKeysProxy)`,displayContent:`    // _ 로 시작하는 키[key] 숨기기
    return Reflect.ownKeys(target).filter(k => !k.startsWith('_'));
  }
});
Object.keys(ownKeysProxy)    // ['pub', 'normal']  (_priv 숨겨짐)`},{id:`language-javascript-p10-proxy-reflect-part-14`,title:`활용 패턴 1 - 읽기 전용[read-only] 객체`,content:`function readOnly(obj) {
  return new Proxy(obj, {
    set(target, prop) {
      throw new Error(\`읽기 전용[read-only]: '\${prop}' 수정 불가\`);
    },
    deleteProperty(target, prop) {
      throw new Error(\`읽기 전용[read-only]: '\${prop}' 삭제 불가\`);
    }
  });
}
var frozenConfig = readOnly({ host: 'localhost', port: 3000 });
frozenConfig.host`,displayContent:`/*** 활용 패턴 1 - 읽기 전용[read-only] 객체 ***/
function readOnly(obj) {
  return new Proxy(obj, {
    set(target, prop) {
      throw new Error(\`읽기 전용[read-only]: '\${prop}' 수정 불가\`);
    },
    deleteProperty(target, prop) {
      throw new Error(\`읽기 전용[read-only]: '\${prop}' 삭제 불가\`);
    }
  });
}
var frozenConfig = readOnly({ host: 'localhost', port: 3000 });
frozenConfig.host        // 'localhost'
// frozenConfig.host = 'x'; // ❌ Error 발생`},{id:`language-javascript-p10-proxy-reflect-part-15`,title:`활용 패턴 2 - 기본값[default value] 제공`,content:`function withDefaults(target, defaults) {
  return new Proxy(target, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : defaults[prop];
    }
  });
}
var settings = withDefaults({ theme: 'dark' }, { theme: 'light', lang: 'ko', fontSize: 14 });
settings.theme
settings.lang
settings.fontSize`,displayContent:`/*** 활용 패턴 2 - 기본값[default value] 제공 ***/
function withDefaults(target, defaults) {
  return new Proxy(target, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : defaults[prop];
    }
  });
}
var settings = withDefaults({ theme: 'dark' }, { theme: 'light', lang: 'ko', fontSize: 14 });
settings.theme     // 'dark'  (직접 설정값 우선)
settings.lang      // 'ko'    (기본값[default])
settings.fontSize  // 14      (기본값[default])`},{id:`language-javascript-p10-proxy-reflect-part-16`,title:`활용 패턴 3 - 관찰자[observable] / 반응형[reactive]`,content:`function observable(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value, receiver) {
      var oldValue = target[prop];
      var result = Reflect.set(target, prop, value, receiver);
      if (oldValue !== value) onChange(prop, oldValue, value);
      return result;
    }
  });
}
var state = observable({ count: 0 }, (prop, oldVal, newVal) => {
  console.log(\`\${prop}: \${oldVal} → \${newVal}\`);
});
state.count = 1;
state.count = 5;`,displayContent:`/*** 활용 패턴 3 - 관찰자[observable] / 반응형[reactive] ***/
function observable(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value, receiver) {
      var oldValue = target[prop];
      var result = Reflect.set(target, prop, value, receiver);
      if (oldValue !== value) onChange(prop, oldValue, value);  // 변경 알림[notify change]
      return result;
    }
  });
}
var state = observable({ count: 0 }, (prop, oldVal, newVal) => {
  console.log(\`\${prop}: \${oldVal} → \${newVal}\`);
});
state.count = 1;   // 'count: 0 → 1'
state.count = 5;   // 'count: 1 → 5'`},{id:`language-javascript-p10-proxy-reflect-part-17`,title:`Proxy 트랩 안에서 target에 대한 기본 동작을 안전하게 수행할 때 사용`,content:`var refObj = { x: 1 };

Reflect.get(refObj, 'x')
Reflect.set(refObj, 'y', 2)
Reflect.has(refObj, 'x')
Reflect.deleteProperty(refObj, 'x')
Reflect.ownKeys(refObj)`,displayContent:`// Proxy 트랩 안에서 target에 대한 기본 동작을 안전하게 수행할 때 사용

var refObj = { x: 1 };

Reflect.get(refObj, 'x')             // 1     (refObj.x 와 동일)
Reflect.set(refObj, 'y', 2)          // true  (refObj.y = 2 와 동일)
Reflect.has(refObj, 'x')             // true  ('x' in refObj 와 동일)
Reflect.deleteProperty(refObj, 'x')  // true  (delete refObj.x 와 동일)
Reflect.ownKeys(refObj)              // ['y']`},{id:`language-javascript-p10-proxy-reflect-part-18`,title:`Reflect.apply - 함수 호출[function invocation]`,content:`Reflect.apply(Math.max, null, [1, 2, 3])`,displayContent:`// Reflect.apply - 함수 호출[function invocation]
Reflect.apply(Math.max, null, [1, 2, 3])  // 3`},{id:`language-javascript-p10-proxy-reflect-part-19`,title:`Reflect.construct - new 호출[constructor call]`,content:`function Point(x, y) { this.x = x; this.y = y; }
var pt = Reflect.construct(Point, [3, 4]);
pt.x
pt.y`,displayContent:`// Reflect.construct - new 호출[constructor call]
function Point(x, y) { this.x = x; this.y = y; }
var pt = Reflect.construct(Point, [3, 4]);
pt.x  // 3
pt.y  // 4`},{id:`language-javascript-p10-proxy-reflect-part-20`,title:`Proxy 취소[revocable proxy]`,content:`var revocable = Proxy.revocable({ data: 42 }, {
  get(target, prop) { return Reflect.get(target, prop); }
});
var revProxy = revocable.proxy;
var revoke = revocable.revoke;

revProxy.data
revoke();`,displayContent:`/*** Proxy 취소[revocable proxy] ***/
var revocable = Proxy.revocable({ data: 42 }, {
  get(target, prop) { return Reflect.get(target, prop); }
});
var revProxy = revocable.proxy;
var revoke = revocable.revoke;

revProxy.data  // 42
revoke();      // 프록시 비활성화[deactivate]
// revProxy.data  // ❌ TypeError: Cannot perform 'get' on a proxy that has been revoked`}]}]},{id:`language-python`,label:`Python`,folderName:`Language-Python`,lessons:[{id:`language-python-p01`,title:`P01.기본-패턴`,fileName:`P01.기본-패턴.py`,sourcePath:`assets/typingSource/Language-Python/P01.기본-패턴.py`,language:`python`,parts:[{id:`language-python-p01-part-1`,title:`변수[variable]`,content:`user_name = "kim"
user_age = 30
is_admin = True
print(user_name, user_age, is_admin)`,displayContent:`# 변수[variable]
user_name = "kim"
user_age = 30
is_admin = True
print(user_name, user_age, is_admin)
# 결과: kim 30 True`},{id:`language-python-p01-part-2`,title:`리스트[list]`,content:`score_list = [10, 20, 30]
print(score_list[0])`,displayContent:`# 리스트[list]
score_list = [10, 20, 30]
print(score_list[0])
# 결과: 10`},{id:`language-python-p01-part-3`,title:`딕셔너리[dictionary]`,content:`user_item = {
    "name": "lee",
    "age": 25,
    "skills": ["python", "sql"],
}
print(user_item["name"])
print(user_item.get("email"))`,displayContent:`# 딕셔너리[dictionary]
user_item = {
    "name": "lee",
    "age": 25,
    "skills": ["python", "sql"],
}
print(user_item["name"])
print(user_item.get("email"))
# 결과:
# lee
# None`},{id:`language-python-p01-part-4`,title:`조건문[condition]`,content:`if user_age >= 20:
    print("adult")
else:
    print("minor")`,displayContent:`# 조건문[condition]
if user_age >= 20:
    print("adult")
else:
    print("minor")
# 결과: adult`},{id:`language-python-p01-part-5`,title:`반복문[loop]`,content:`for skill_item in user_item["skills"]:
    print(skill_item)`,displayContent:`# 반복문[loop]
for skill_item in user_item["skills"]:
    print(skill_item)
# 결과:
# python
# sql`},{id:`language-python-p01-part-6`,title:`리스트 컴프리헨션[list comprehension]`,content:`even_list = [num for num in score_list if num % 2 == 0]
print(even_list)`,displayContent:`# 리스트 컴프리헨션[list comprehension]
even_list = [num for num in score_list if num % 2 == 0]
print(even_list)
# 결과: [10, 20, 30]`},{id:`language-python-p01-part-7`,title:`함수[function]`,content:`def get_display_name(user):
    return f'{user["name"]}({user["age"]})'

print(get_display_name(user_item))`,displayContent:`# 함수[function]
def get_display_name(user):
    return f'{user["name"]}({user["age"]})'

print(get_display_name(user_item))
# 결과: lee(25)`},{id:`language-python-p01-part-8`,title:`예외 처리[exception handling]`,content:`try:
    parsed_value = int("123")
    print(parsed_value)
except ValueError:
    print("parse error")`,displayContent:`# 예외 처리[exception handling]
try:
    parsed_value = int("123")
    print(parsed_value)
except ValueError:
    print("parse error")
# 결과: 123`},{id:`language-python-p01-part-9`,title:`파일 / JSON 실무 패턴[file / json pattern]`,content:`import json

json_text = '{"name": "park", "age": 28}'
parsed_user = json.loads(json_text)
print(parsed_user["name"])`,displayContent:`# 파일 / JSON 실무 패턴[file / json pattern]
import json

json_text = '{"name": "park", "age": 28}'
parsed_user = json.loads(json_text)
print(parsed_user["name"])
# 결과: park`}]},{id:`language-python-p02`,title:`P02.실무-패턴`,fileName:`P02.실무-패턴.py`,sourcePath:`assets/typingSource/Language-Python/P02.실무-패턴.py`,language:`python`,parts:[{id:`language-python-p02-part-1`,title:`P02. Python 실무 패턴`,content:`user_list = [
    {"name": "kim", "age": 30},
    {"name": "lee", "age": 20},
    {"name": "park", "age": 25},
]`,displayContent:`# P02. Python 실무 패턴
# ============================================================

user_list = [
    {"name": "kim", "age": 30},
    {"name": "lee", "age": 20},
    {"name": "park", "age": 25},
]`},{id:`language-python-p02-part-2`,title:`필터링[filtering]`,content:`adult_list = [user for user in user_list if user["age"] >= 25]
print(adult_list)`,displayContent:`# 필터링[filtering]
adult_list = [user for user in user_list if user["age"] >= 25]
print(adult_list)
# 결과: [{'name': 'kim', 'age': 30}, {'name': 'park', 'age': 25}]`},{id:`language-python-p02-part-3`,title:`변환[mapping]`,content:`name_list = [user["name"] for user in user_list]
print(name_list)`,displayContent:`# 변환[mapping]
name_list = [user["name"] for user in user_list]
print(name_list)
# 결과: ['kim', 'lee', 'park']`},{id:`language-python-p02-part-4`,title:`정렬[sorting]`,content:`sorted_list = sorted(user_list, key=lambda user: user["age"], reverse=True)
print(sorted_list[0]["name"])`,displayContent:`# 정렬[sorting]
sorted_list = sorted(user_list, key=lambda user: user["age"], reverse=True)
print(sorted_list[0]["name"])
# 결과: kim`},{id:`language-python-p02-part-5`,title:`기본값 처리[default handling]`,content:`config = {"timeout": 3}
retry_count = config.get("retry", 0)
print(retry_count)`,displayContent:`# 기본값 처리[default handling]
config = {"timeout": 3}
retry_count = config.get("retry", 0)
print(retry_count)
# 결과: 0`},{id:`language-python-p02-part-6`,title:`함수 조합[function composition]`,content:`def format_user(user):
    return f'{user["name"]}:{user["age"]}'

formatted_list = list(map(format_user, user_list))
print(formatted_list)`,displayContent:`# 함수 조합[function composition]
def format_user(user):
    return f'{user["name"]}:{user["age"]}'

formatted_list = list(map(format_user, user_list))
print(formatted_list)
# 결과: ['kim:30', 'lee:20', 'park:25']`}]}]},{id:`language-regex-for-javascript`,label:`RegEx for JavaScript`,folderName:`Language-RegEx-for-Javascript`,lessons:[{id:`language-regex-for-javascript-p01`,title:`P01.핵심-패턴`,fileName:`P01.핵심-패턴.js`,sourcePath:`assets/typingSource/Language-RegEx-for-Javascript/P01.핵심-패턴.js`,language:`javascript`,parts:[{id:`language-regex-for-javascript-p01-part-1`,title:`리터럴[literal] / 생성자[constructor]`,content:`/hello/gi.test('Hello World');
new RegExp('hello', 'gi').test('HELLO');`,displayContent:`// 리터럴[literal] / 생성자[constructor]
/hello/gi.test('Hello World');                 // true
new RegExp('hello', 'gi').test('HELLO');       // true`},{id:`language-regex-for-javascript-p01-part-2`,title:`플래그[flag]`,content:`'aAa'.match(/a/g);
'aAa'.match(/a/gi);`,displayContent:`// 플래그[flag]
'aAa'.match(/a/g);   // ['a', 'a']
'aAa'.match(/a/gi);  // ['a', 'A', 'a']`},{id:`language-regex-for-javascript-p01-part-3`,title:`앵커[anchor]`,content:`'Hello World'.match(/^Hello/);
'Hello World'.match(/World$/);`,displayContent:`// 앵커[anchor]
'Hello World'.match(/^Hello/);  // ['Hello']
'Hello World'.match(/World$/);  // ['World']`},{id:`language-regex-for-javascript-p01-part-4`,title:`문자 클래스[character class]`,content:`'ab12'.match(/\\d/g);
'ab12'.match(/\\w/g);
'a b'.match(/\\s/g);`,displayContent:`// 문자 클래스[character class]
'ab12'.match(/\\d/g);  // ['1', '2']
'ab12'.match(/\\w/g);  // ['a', 'b', '1', '2']
'a b'.match(/\\s/g);   // [' ']`},{id:`language-regex-for-javascript-p01-part-5`,title:`문자셋[character set]`,content:`'grey gray'.match(/gr[ae]y/g);
'hello123'.match(/[^a-z]+/g);`,displayContent:`// 문자셋[character set]
'grey gray'.match(/gr[ae]y/g);   // ['grey', 'gray']
'hello123'.match(/[^a-z]+/g);    // ['123']`},{id:`language-regex-for-javascript-p01-part-6`,title:`수량자[quantifier]`,content:`'gry'.match(/gra*y/);
'gray'.match(/gra?y/);
'graaay'.match(/gra+y/);
'graay'.match(/gra{2}y/);`,displayContent:`// 수량자[quantifier]
'gry'.match(/gra*y/);        // ['gry']
'gray'.match(/gra?y/);       // ['gray']
'graaay'.match(/gra+y/);     // ['graaay']
'graay'.match(/gra{2}y/);    // ['graay']`},{id:`language-regex-for-javascript-p01-part-7`,title:`그룹[group]`,content:`'2026-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);`,displayContent:`// 그룹[group]
'2026-03-18'.match(/(\\d{4})-(\\d{2})-(\\d{2})/);
// ['2026-03-18', '2026', '03', '18']`},{id:`language-regex-for-javascript-p01-part-8`,title:`네임드 그룹[named group]`,content:`var dateMatch = '2026-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);
dateMatch.groups.year;
dateMatch.groups.month;
dateMatch.groups.day;`,displayContent:`// 네임드 그룹[named group]
var dateMatch = '2026-03-18'.match(/(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/);
dateMatch.groups.year;   // '2026'
dateMatch.groups.month;  // '03'
dateMatch.groups.day;    // '18'`},{id:`language-regex-for-javascript-p01-part-9`,title:`전방탐색[lookahead]`,content:`'100px 200em 50px'.match(/\\d+(?=px)/g);`,displayContent:`// 전방탐색[lookahead]
'100px 200em 50px'.match(/\\d+(?=px)/g);  // ['100', '50']`},{id:`language-regex-for-javascript-p01-part-10`,title:`후방탐색[lookbehind]`,content:`'$100 £200 $50'.match(/(?<=\\$)\\d+/g);

'2026-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1');`,displayContent:`// 후방탐색[lookbehind]
'$100 £200 $50'.match(/(?<=\\$)\\d+/g);    // ['100', '50']

// replace
'2026-03-18'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$3/$2/$1');
// '18/03/2026'`},{id:`language-regex-for-javascript-p01-part-11`,title:`실용 패턴[practical pattern] - 이메일[email]`,content:`var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;
emailRe.test('user@example.com');
emailRe.test('invalid@');`,displayContent:`// 실용 패턴[practical pattern] - 이메일[email]
var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$/;
emailRe.test('user@example.com');  // true
emailRe.test('invalid@');          // false`},{id:`language-regex-for-javascript-p01-part-12`,title:`실용 패턴[practical pattern] - 전화번호[phone number]`,content:`var phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;
phoneRe.test('010-1234-5678');`,displayContent:`// 실용 패턴[practical pattern] - 전화번호[phone number]
var phoneRe = /\\d{2,3}[-.\\s]\\d{3,4}[-.\\s]\\d{4}/;
phoneRe.test('010-1234-5678'); // true`},{id:`language-regex-for-javascript-p01-part-13`,title:`실용 패턴[practical pattern] - VS Code 여러 줄 함수 찾기`,content:`var multiLineSource = \`functionAAAAA(asdf,
  qwer,
  zxcv)\`;
multiLineSource.match(/functionAAAAA\\([\\s\\S]*?\\)/);`,displayContent:`// 실용 패턴[practical pattern] - VS Code 여러 줄 함수 찾기
var multiLineSource = \`functionAAAAA(asdf,
  qwer,
  zxcv)\`;
multiLineSource.match(/functionAAAAA\\([\\s\\S]*?\\)/);
// ['functionAAAAA(asdf,\\n  qwer,\\n  zxcv)']`}]},{id:`language-regex-for-javascript-p02`,title:`P02.실무-추출`,fileName:`P02.실무-추출.js`,sourcePath:`assets/typingSource/Language-RegEx-for-Javascript/P02.실무-추출.js`,language:`javascript`,parts:[{id:`language-regex-for-javascript-p02-part-1`,title:`파일 확장자[extension] 앞까지`,content:`'abc/def/video.mp4'.match(/.*?(?=mp4)/)[0];`,displayContent:`// 파일 확장자[extension] 앞까지
'abc/def/video.mp4'.match(/.*?(?=mp4)/)[0];
// 결과: abc/def/video.`},{id:`language-regex-for-javascript-p02-part-2`,title:`숫자와 mp4 사이 텍스트 추출`,content:`'123테스트.mp4'.match(/\\d+(.*?)\\.mp4/)[1];`,displayContent:`// 숫자와 mp4 사이 텍스트 추출
'123테스트.mp4'.match(/\\d+(.*?)\\.mp4/)[1];
// 결과: 테스트`},{id:`language-regex-for-javascript-p02-part-3`,title:`여러 줄 함수 호출 찾기`,content:`var fnSource = \`functionAAAAA(a,
  b,
  c)\`;
fnSource.match(/functionAAAAA\\([\\s\\S]*?\\)/)[0];

var logText = 'A=111,B=222,C=333';
Array.from(logText.matchAll(/(\\w+)=(\\d+)/g), item => ({
  key: item[1],
  value: item[2],
}));`,displayContent:`// 여러 줄 함수 호출 찾기
var fnSource = \`functionAAAAA(a,
  b,
  c)\`;
fnSource.match(/functionAAAAA\\([\\s\\S]*?\\)/)[0];
// 결과:
// functionAAAAA(a,
//   b,
//   c)

// key=value 추출
var logText = 'A=111,B=222,C=333';
Array.from(logText.matchAll(/(\\w+)=(\\d+)/g), item => ({
  key: item[1],
  value: item[2],
}));
// 결과:
// [{ key:'A', value:'111' }, { key:'B', value:'222' }, { key:'C', value:'333' }]`},{id:`language-regex-for-javascript-p02-part-4`,title:`태그 안 내용 추출`,content:`'<title>Hello</title>'.match(/(?<=<title>).*?(?=<\\/title>)/)[0];`,displayContent:`// 태그 안 내용 추출
'<title>Hello</title>'.match(/(?<=<title>).*?(?=<\\/title>)/)[0];
// 결과: Hello`}]}]},{id:`language-rust`,label:`Rust`,folderName:`Language-Rust`,lessons:[{id:`language-rust-p01`,title:`P01.기본-패턴`,fileName:`P01.기본-패턴.rs`,sourcePath:`assets/typingSource/Language-Rust/P01.기본-패턴.rs`,language:`rust`,parts:[{id:`language-rust-p01-part-1`,title:`P01. Rust 기본 패턴`,content:`#[derive(Debug)]
struct User {
    name: String,
    age: u32,
}

fn add(num_a: i32, num_b: i32) -> i32 {
    num_a + num_b
}

fn main() {`,displayContent:`// P01. Rust 기본 패턴
// ============================================================

#[derive(Debug)]
struct User {
    name: String,
    age: u32,
}

fn add(num_a: i32, num_b: i32) -> i32 {
    num_a + num_b
}

fn main() {`},{id:`language-rust-p01-part-2`,title:`변수와 가변성[mutability]`,content:`    let user_name = "kim";
    let mut count_value = 1;
    count_value += 1;
    println!("{} {}", user_name, count_value);`,displayContent:`    // 변수와 가변성[mutability]
    let user_name = "kim";
    let mut count_value = 1;
    count_value += 1;
    println!("{} {}", user_name, count_value);
    // 결과: kim 2`},{id:`language-rust-p01-part-3`,title:`기본 타입[primitive type]`,content:`    let score_value: i32 = 95;
    let ratio_value: f64 = 3.14;
    let is_admin: bool = true;
    println!("{} {} {}", score_value, ratio_value, is_admin);`,displayContent:`    // 기본 타입[primitive type]
    let score_value: i32 = 95;
    let ratio_value: f64 = 3.14;
    let is_admin: bool = true;
    println!("{} {} {}", score_value, ratio_value, is_admin);
    // 결과: 95 3.14 true`},{id:`language-rust-p01-part-4`,title:`조건문[condition]`,content:`    if score_value >= 90 {
        println!("A");
    } else {
        println!("B");
    }`,displayContent:`    // 조건문[condition]
    if score_value >= 90 {
        println!("A");
    } else {
        println!("B");
    }
    // 결과: A`},{id:`language-rust-p01-part-5`,title:`반복문[loop]`,content:`    let color_list = ["red", "green", "blue"];
    for color_item in color_list {
        println!("{}", color_item);
    }`,displayContent:`    // 반복문[loop]
    let color_list = ["red", "green", "blue"];
    for color_item in color_list {
        println!("{}", color_item);
    }
    // 결과: red / green / blue`},{id:`language-rust-p01-part-6`,title:`벡터[vector]`,content:`    let mut number_list = vec![1, 2, 3];
    number_list.push(4);
    println!("{:?}", number_list);`,displayContent:`    // 벡터[vector]
    let mut number_list = vec![1, 2, 3];
    number_list.push(4);
    println!("{:?}", number_list);
    // 결과: [1, 2, 3, 4]`},{id:`language-rust-p01-part-7`,title:`구조체[struct]`,content:`    let user_item = User {
        name: String::from("lee"),
        age: 28,
    };
    println!("{:?}", user_item);
    println!("{} {}", user_item.name, user_item.age);`,displayContent:`    // 구조체[struct]
    let user_item = User {
        name: String::from("lee"),
        age: 28,
    };
    println!("{:?}", user_item);
    println!("{} {}", user_item.name, user_item.age);
    // 결과: lee 28`},{id:`language-rust-p01-part-8`,title:`옵션[option]`,content:`    let maybe_value = Some(10);
    match maybe_value {
        Some(value) => println!("{}", value),
        None => println!("none"),
    }`,displayContent:`    // 옵션[option]
    let maybe_value = Some(10);
    match maybe_value {
        Some(value) => println!("{}", value),
        None => println!("none"),
    }
    // 결과: 10`},{id:`language-rust-p01-part-9`,title:`함수[function]`,content:`    let sum_value = add(3, 4);
    println!("{}", sum_value);
}`,displayContent:`    // 함수[function]
    let sum_value = add(3, 4);
    println!("{}", sum_value);
    // 결과: 7
}`}]},{id:`language-rust-p02`,title:`P02.실무-패턴`,fileName:`P02.실무-패턴.rs`,sourcePath:`assets/typingSource/Language-Rust/P02.실무-패턴.rs`,language:`rust`,parts:[{id:`language-rust-p02-part-1`,title:`P02.실무-패턴`,content:`use std::collections::HashMap;`,displayContent:`use std::collections::HashMap;

// ============================================================`},{id:`language-rust-p02-part-2`,title:`P02. Rust 실무 패턴`,content:`fn main() {`,displayContent:`// P02. Rust 실무 패턴
// ============================================================

fn main() {`},{id:`language-rust-p02-part-3`,title:`문자열[string]`,content:`    let text_value = String::from("hello rust");
    println!("{}", text_value.to_uppercase());`,displayContent:`    // 문자열[string]
    let text_value = String::from("hello rust");
    println!("{}", text_value.to_uppercase());
    // 결과: HELLO RUST`},{id:`language-rust-p02-part-4`,title:`해시맵[hash map]`,content:`    let mut age_map = HashMap::new();
    age_map.insert("kim", 30);
    age_map.insert("lee", 25);
    println!("{:?}", age_map.get("kim"));`,displayContent:`    // 해시맵[hash map]
    let mut age_map = HashMap::new();
    age_map.insert("kim", 30);
    age_map.insert("lee", 25);
    println!("{:?}", age_map.get("kim"));
    // 결과: Some(30)`},{id:`language-rust-p02-part-5`,title:`패턴 매칭[pattern matching]`,content:`    let maybe_score = Some(100);
    if let Some(score) = maybe_score {
        println!("{}", score);
    }

    let parsed_value = "42".parse::<i32>();
    match parsed_value {
        Ok(value) => println!("{}", value),
        Err(_) => println!("parse error"),
    }`,displayContent:`    // 패턴 매칭[pattern matching]
    let maybe_score = Some(100);
    if let Some(score) = maybe_score {
        println!("{}", score);
    }
    // 결과: 100

    // 결과 타입[result]
    let parsed_value = "42".parse::<i32>();
    match parsed_value {
        Ok(value) => println!("{}", value),
        Err(_) => println!("parse error"),
    }
    // 결과: 42`},{id:`language-rust-p02-part-6`,title:`반복자[iterator]`,content:`    let nums = vec![1, 2, 3];
    let doubled: Vec<i32> = nums.iter().map(|item| item * 2).collect();
    println!("{:?}", doubled);
}`,displayContent:`    // 반복자[iterator]
    let nums = vec![1, 2, 3];
    let doubled: Vec<i32> = nums.iter().map(|item| item * 2).collect();
    println!("{:?}", doubled);
    // 결과: [2, 4, 6]
}`}]}]},{id:`language-sql`,label:`SQL`,folderName:`Language-SQL`,lessons:[{id:`language-sql-p01`,title:`P01.기본-패턴`,fileName:`P01.기본-패턴.sql`,sourcePath:`assets/typingSource/Language-SQL/P01.기본-패턴.sql`,language:`sql`,parts:[{id:`language-sql-p01-part-1`,title:`테이블 생성[create table]`,content:`CREATE TABLE users (
    user_id      INTEGER PRIMARY KEY,
    user_name    VARCHAR(50),
    user_age     INTEGER,
    created_at   DATE
);`,displayContent:`-- 테이블 생성[create table]
CREATE TABLE users (
    user_id      INTEGER PRIMARY KEY,
    user_name    VARCHAR(50),
    user_age     INTEGER,
    created_at   DATE
);`},{id:`language-sql-p01-part-2`,title:`데이터 추가[insert]`,content:`INSERT INTO users (user_id, user_name, user_age, created_at)
VALUES (1, 'kim', 30, DATE '2026-03-18');

INSERT INTO users (user_id, user_name, user_age, created_at)
VALUES (2, 'lee', 25, DATE '2026-03-18');`,displayContent:`-- 데이터 추가[insert]
INSERT INTO users (user_id, user_name, user_age, created_at)
VALUES (1, 'kim', 30, DATE '2026-03-18');

INSERT INTO users (user_id, user_name, user_age, created_at)
VALUES (2, 'lee', 25, DATE '2026-03-18');`},{id:`language-sql-p01-part-3`,title:`조회[select]`,content:`SELECT *
FROM users;`,displayContent:`-- 조회[select]
SELECT *
FROM users;
-- 결과:
-- 1, kim, 30, 2026-03-18
-- 2, lee, 25, 2026-03-18`},{id:`language-sql-p01-part-4`,title:`조건 조회[where]`,content:`SELECT user_name, user_age
FROM users
WHERE user_age >= 30;`,displayContent:`-- 조건 조회[where]
SELECT user_name, user_age
FROM users
WHERE user_age >= 30;
-- 결과:
-- kim, 30`},{id:`language-sql-p01-part-5`,title:`정렬[order by]`,content:`SELECT user_name, user_age
FROM users
ORDER BY user_age DESC;`,displayContent:`-- 정렬[order by]
SELECT user_name, user_age
FROM users
ORDER BY user_age DESC;
-- 결과: 나이 내림차순`},{id:`language-sql-p01-part-6`,title:`개수 제한[limit]`,content:`SELECT *
FROM users
ORDER BY user_id
FETCH FIRST 1 ROWS ONLY;`,displayContent:`-- 개수 제한[limit]
SELECT *
FROM users
ORDER BY user_id
FETCH FIRST 1 ROWS ONLY;
-- 결과: 첫 행 1개`},{id:`language-sql-p01-part-7`,title:`수정[update]`,content:`UPDATE users
SET user_age = 31
WHERE user_id = 1;`,displayContent:`-- 수정[update]
UPDATE users
SET user_age = 31
WHERE user_id = 1;`},{id:`language-sql-p01-part-8`,title:`삭제[delete]`,content:`DELETE FROM users
WHERE user_id = 2;`,displayContent:`-- 삭제[delete]
DELETE FROM users
WHERE user_id = 2;`},{id:`language-sql-p01-part-9`,title:`집계[aggregate]`,content:`SELECT COUNT(*) AS user_count,
       AVG(user_age) AS avg_age
FROM users;`,displayContent:`-- 집계[aggregate]
SELECT COUNT(*) AS user_count,
       AVG(user_age) AS avg_age
FROM users;
-- 결과: 1, 31`},{id:`language-sql-p01-part-10`,title:`그룹화[group by]`,content:`SELECT created_at, COUNT(*) AS row_count
FROM users
GROUP BY created_at;`,displayContent:`-- 그룹화[group by]
SELECT created_at, COUNT(*) AS row_count
FROM users
GROUP BY created_at;`},{id:`language-sql-p01-part-11`,title:`조인[join]`,content:`CREATE TABLE orders (
    order_id    INTEGER PRIMARY KEY,
    user_id     INTEGER,
    total_price INTEGER
);

INSERT INTO orders (order_id, user_id, total_price)
VALUES (100, 1, 5000);

SELECT u.user_name, o.total_price
FROM users u
JOIN orders o
  ON u.user_id = o.user_id;`,displayContent:`-- 조인[join]
CREATE TABLE orders (
    order_id    INTEGER PRIMARY KEY,
    user_id     INTEGER,
    total_price INTEGER
);

INSERT INTO orders (order_id, user_id, total_price)
VALUES (100, 1, 5000);

SELECT u.user_name, o.total_price
FROM users u
JOIN orders o
  ON u.user_id = o.user_id;
-- 결과:
-- kim, 5000`},{id:`language-sql-p01-part-12`,title:`서브쿼리[subquery]`,content:`SELECT user_name
FROM users
WHERE user_id IN (
    SELECT user_id
    FROM orders
    WHERE total_price >= 5000
);`,displayContent:`-- 서브쿼리[subquery]
SELECT user_name
FROM users
WHERE user_id IN (
    SELECT user_id
    FROM orders
    WHERE total_price >= 5000
);
-- 결과: kim`},{id:`language-sql-p01-part-13`,title:`공통 테이블 식[CTE]`,content:`WITH order_sum AS (
    SELECT user_id, SUM(total_price) AS total_amount
    FROM orders
    GROUP BY user_id
)
SELECT u.user_name, o.total_amount
FROM users u
JOIN order_sum o
  ON u.user_id = o.user_id;`,displayContent:`-- 공통 테이블 식[CTE]
WITH order_sum AS (
    SELECT user_id, SUM(total_price) AS total_amount
    FROM orders
    GROUP BY user_id
)
SELECT u.user_name, o.total_amount
FROM users u
JOIN order_sum o
  ON u.user_id = o.user_id;`}]},{id:`language-sql-p02`,title:`P02.실무-조회`,fileName:`P02.실무-조회.sql`,sourcePath:`assets/typingSource/Language-SQL/P02.실무-조회.sql`,language:`sql`,parts:[{id:`language-sql-p02-part-1`,title:`조건 묶기[condition grouping]`,content:`SELECT user_name
FROM users
WHERE user_age >= 20
  AND user_name LIKE 'k%';`,displayContent:`-- 조건 묶기[condition grouping]
SELECT user_name
FROM users
WHERE user_age >= 20
  AND user_name LIKE 'k%';
-- 결과: kim`},{id:`language-sql-p02-part-2`,title:`범위 조회[between]`,content:`SELECT user_name
FROM users
WHERE user_age BETWEEN 20 AND 30;`,displayContent:`-- 범위 조회[between]
SELECT user_name
FROM users
WHERE user_age BETWEEN 20 AND 30;
-- 결과: 20~30 사이 사용자`},{id:`language-sql-p02-part-3`,title:`포함 조회[in]`,content:`SELECT user_name
FROM users
WHERE user_id IN (1, 3, 5);`,displayContent:`-- 포함 조회[in]
SELECT user_name
FROM users
WHERE user_id IN (1, 3, 5);
-- 결과: 지정한 id만 조회`},{id:`language-sql-p02-part-4`,title:`널 처리[null handling]`,content:`SELECT user_name, COALESCE(user_age, 0) AS safe_age
FROM users;`,displayContent:`-- 널 처리[null handling]
SELECT user_name, COALESCE(user_age, 0) AS safe_age
FROM users;
-- 결과: null이면 0 대체`},{id:`language-sql-p02-part-5`,title:`왼쪽 조인[left join]`,content:`SELECT u.user_name, o.total_price
FROM users u
LEFT JOIN orders o
  ON u.user_id = o.user_id;`,displayContent:`-- 왼쪽 조인[left join]
SELECT u.user_name, o.total_price
FROM users u
LEFT JOIN orders o
  ON u.user_id = o.user_id;
-- 결과: 주문 없는 사용자도 포함`},{id:`language-sql-p02-part-6`,title:`그룹 조건[having]`,content:`SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) >= 1;`,displayContent:`-- 그룹 조건[having]
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) >= 1;
-- 결과: 주문 1개 이상 사용자`},{id:`language-sql-p02-part-7`,title:`케이스[case]`,content:`SELECT user_name,
       CASE
           WHEN user_age >= 30 THEN 'senior'
           ELSE 'junior'
       END AS age_group
FROM users;`,displayContent:`-- 케이스[case]
SELECT user_name,
       CASE
           WHEN user_age >= 30 THEN 'senior'
           ELSE 'junior'
       END AS age_group
FROM users;
-- 결과: 조건에 따라 문자열 분기`}]}]},{id:`language-typescript`,label:`TypeScript`,folderName:`Language-TypeScript`,lessons:[{id:`language-typescript-p01`,title:`P01.기본-패턴`,fileName:`P01.기본-패턴.ts`,sourcePath:`assets/typingSource/Language-TypeScript/P01.기본-패턴.ts`,language:`typescript`,parts:[{id:`language-typescript-p01-part-1`,title:`P01. TypeScript 기본 패턴`,content:`type User = {
  id: number;
  name: string;
  age?: number;
  role: 'user' | 'admin';
};

type ApiResponse<T> = {
  ok: boolean;
  data: T;
};`,displayContent:`// P01. TypeScript 기본 패턴
// ============================================================

type User = {
  id: number;
  name: string;
  age?: number;
  role: 'user' | 'admin';
};

type ApiResponse<T> = {
  ok: boolean;
  data: T;
};`},{id:`language-typescript-p01-part-2`,title:`기본 타입[basic type]`,content:`let userName: string = 'kim';
let userAge: number | null = 30;
let isOpen: boolean = false;

console.log(userName, userAge, isOpen);`,displayContent:`// 기본 타입[basic type]
let userName: string = 'kim';
let userAge: number | null = 30;
let isOpen: boolean = false;

console.log(userName, userAge, isOpen);
// 결과: kim 30 false`},{id:`language-typescript-p01-part-3`,title:`배열[array]`,content:`const numberList: number[] = [1, 2, 3];
const nameList: Array<string> = ['lee', 'park'];
console.log(numberList, nameList);`,displayContent:`// 배열[array]
const numberList: number[] = [1, 2, 3];
const nameList: Array<string> = ['lee', 'park'];
console.log(numberList, nameList);
// 결과: [1, 2, 3] ['lee', 'park']`},{id:`language-typescript-p01-part-4`,title:`객체 타입[object type]`,content:`const userItem: User = {
  id: 1,
  name: 'lee',
  role: 'admin',
};
console.log(userItem.name);`,displayContent:`// 객체 타입[object type]
const userItem: User = {
  id: 1,
  name: 'lee',
  role: 'admin',
};
console.log(userItem.name);
// 결과: lee`},{id:`language-typescript-p01-part-5`,title:`함수[function]`,content:`function add(numA: number, numB: number): number {
  return numA + numB;
}
console.log(add(3, 4));`,displayContent:`// 함수[function]
function add(numA: number, numB: number): number {
  return numA + numB;
}
console.log(add(3, 4));
// 결과: 7`},{id:`language-typescript-p01-part-6`,title:`유니온 타입[union type]`,content:`function formatValue(input: string | number): string {
  return typeof input === 'number' ? input.toFixed(2) : input.toUpperCase();
}
console.log(formatValue(3.14));
console.log(formatValue('ts'));`,displayContent:`// 유니온 타입[union type]
function formatValue(input: string | number): string {
  return typeof input === 'number' ? input.toFixed(2) : input.toUpperCase();
}
console.log(formatValue(3.14));
console.log(formatValue('ts'));
// 결과:
// 3.14
// TS`},{id:`language-typescript-p01-part-7`,title:`인터페이스 대체 패턴[object response pattern]`,content:`const userResponse: ApiResponse<User> = {
  ok: true,
  data: userItem,
};
console.log(userResponse.data.role);`,displayContent:`// 인터페이스 대체 패턴[object response pattern]
const userResponse: ApiResponse<User> = {
  ok: true,
  data: userItem,
};
console.log(userResponse.data.role);
// 결과: admin`},{id:`language-typescript-p01-part-8`,title:`옵셔널 체이닝[optional chaining] / null 병합[nullish coalescing]`,content:`const maybeAge = userItem.age ?? 0;
console.log(maybeAge);`,displayContent:`// 옵셔널 체이닝[optional chaining] / null 병합[nullish coalescing]
const maybeAge = userItem.age ?? 0;
console.log(maybeAge);
// 결과: 0`},{id:`language-typescript-p01-part-9`,title:`제네릭[generic]`,content:`function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}
console.log(firstItem<number>([10, 20, 30]));`,displayContent:`// 제네릭[generic]
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}
console.log(firstItem<number>([10, 20, 30]));
// 결과: 10`}]},{id:`language-typescript-p02`,title:`P02.실무-패턴`,fileName:`P02.실무-패턴.ts`,sourcePath:`assets/typingSource/Language-TypeScript/P02.실무-패턴.ts`,language:`typescript`,parts:[{id:`language-typescript-p02-part-1`,title:`P02. TypeScript 실무 패턴`,content:`type Product = {
  id: number;
  name: string;
  price: number;
};

type FetchState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };`,displayContent:`// P02. TypeScript 실무 패턴
// ============================================================

type Product = {
  id: number;
  name: string;
  price: number;
};

type FetchState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };`},{id:`language-typescript-p02-part-2`,title:`리터럴 유니온[literal union]`,content:`let sortOrder: 'asc' | 'desc' = 'asc';
console.log(sortOrder);`,displayContent:`// 리터럴 유니온[literal union]
let sortOrder: 'asc' | 'desc' = 'asc';
console.log(sortOrder);
// 결과: asc`},{id:`language-typescript-p02-part-3`,title:`타입 별칭[type alias]`,content:`const productItem: Product = {
  id: 1,
  name: 'keyboard',
  price: 50000,
};
console.log(productItem.name);`,displayContent:`// 타입 별칭[type alias]
const productItem: Product = {
  id: 1,
  name: 'keyboard',
  price: 50000,
};
console.log(productItem.name);
// 결과: keyboard`},{id:`language-typescript-p02-part-4`,title:`읽기 전용[readonly]`,content:`type UserProfile = {
  readonly id: number;
  nickname: string;
};

const profileItem: UserProfile = {
  id: 1,
  nickname: 'neo',
};
console.log(profileItem.id);`,displayContent:`// 읽기 전용[readonly]
type UserProfile = {
  readonly id: number;
  nickname: string;
};

const profileItem: UserProfile = {
  id: 1,
  nickname: 'neo',
};
console.log(profileItem.id);
// 결과: 1`},{id:`language-typescript-p02-part-5`,title:`상태 분기[discriminated union]`,content:`const fetchState: FetchState<Product> = {
  status: 'success',
  data: productItem,
};

if (fetchState.status === 'success') {
  console.log(fetchState.data.price);
}`,displayContent:`// 상태 분기[discriminated union]
const fetchState: FetchState<Product> = {
  status: 'success',
  data: productItem,
};

if (fetchState.status === 'success') {
  console.log(fetchState.data.price);
}
// 결과: 50000`},{id:`language-typescript-p02-part-6`,title:`배열 패턴[array pattern]`,content:`const productList: Product[] = [productItem];
const productNameList = productList.map(item => item.name);
console.log(productNameList);`,displayContent:`// 배열 패턴[array pattern]
const productList: Product[] = [productItem];
const productNameList = productList.map(item => item.name);
console.log(productNameList);
// 결과: ['keyboard']`}]}]}],b={css:[`display`,`position`,`grid`,`flex`,`justify-content`,`align-items`,`padding`,`margin`,`border`,`background`,`color`],go:[`package`,`import`,`func`,`return`,`type`,`struct`,`if`,`else`,`for`,`range`,`const`,`var`,`nil`],html:[`DOCTYPE`],java:[`class`,`public`,`private`,`static`,`void`,`new`,`return`,`if`,`else`,`for`,`try`,`catch`,`extends`,`import`],javascript:[`const`,`let`,`var`,`function`,`return`,`if`,`else`,`for`,`of`,`new`,`class`,`extends`,`async`,`await`,`try`,`catch`,`null`,`undefined`,`true`,`false`],markdown:[],python:[`def`,`return`,`if`,`elif`,`else`,`for`,`in`,`True`,`False`,`None`,`import`,`from`,`try`,`except`,`class`],rust:[`fn`,`let`,`mut`,`struct`,`impl`,`match`,`if`,`else`,`for`,`in`,`pub`,`return`,`Some`,`None`,`Ok`,`Err`],shell:[`if`,`then`,`else`,`fi`,`for`,`do`,`done`,`echo`,`export`,`local`],sql:[`select`,`from`,`where`,`join`,`left`,`right`,`inner`,`group`,`by`,`order`,`having`,`insert`,`into`,`values`,`update`,`set`,`delete`,`create`,`table`,`and`,`or`,`as`],typescript:[`const`,`let`,`var`,`function`,`return`,`if`,`else`,`for`,`of`,`new`,`class`,`extends`,`async`,`await`,`type`,`interface`,`readonly`,`null`,`undefined`,`true`,`false`]},x=new Set([`if`,`for`,`while`,`switch`,`catch`,`return`]);function S(e,t,n,r){for(let i=t;i<n;i+=1)e[i]=r}function C(e,t,n,r){for(let i of e.matchAll(n)){let e=i.index??0,n=i[0]??``;n&&S(t,e,e+n.length,r)}}function w(e){let t=b[e]??[];if(t.length===0)return null;let n=t.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`));return RegExp(`\\b(${n.join(`|`)})\\b`,e===`sql`?`gi`:`g`)}function ee(e,t){C(e,t,/<\/?[A-Za-z0-9:-]+/g,`tag`),C(e,t,/\b[A-Za-z-:]+(?==)/g,`attribute`),C(e,t,/"[^"]*"|'[^']*'/g,`string`)}function te(e,t){C(e,t,/--[A-Za-z0-9-]+/g,`variable`),C(e,t,/\.[A-Za-z_-][A-Za-z0-9_-]*/g,`type`),C(e,t,/#[A-Za-z0-9_-]+/g,`number`),C(e,t,/\b[A-Za-z-]+(?=\s*:)/g,`property`),C(e,t,/"[^"]*"|'[^']*'/g,`string`),C(e,t,/\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)?\b/g,`number`)}function ne(e,t,n){C(e,n,/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|`([^`\\]|\\.)*`/g,`string`),C(e,n,/\b\d+(?:\.\d+)?\b/g,`number`),C(e,n,/\$[A-Za-z_][A-Za-z0-9_]*|\$\{[^}]+\}/g,`variable`);let r=w(t);r&&C(e,n,r,`keyword`);for(let t of e.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*(?=\()/g)){let e=t[1];if(!e||x.has(e))continue;let r=t.index??0;S(n,r,r+e.length,`function`)}C(e,n,/\b[A-Z][A-Za-z0-9_]*\b/g,`type`)}function T(e,t){let n=Array.from({length:e.length},()=>`plain`);return t===`html`?(ee(e,n),te(e,n),ne(e,`javascript`,n),n):t===`markdown`?(C(e,n,/`[^`]+`/g,`string`),n):t===`css`?(te(e,n),n):(ne(e,t,n),n)}function re(e,t,n){let r=Array.from({length:e.length},()=>!0);if(t===`markdown`)return r;let i=(e,t)=>{for(let n=e;n<t;n+=1)r[n]=!1},a=0;for(;a<e.length;){if(n.active){let t=e.indexOf(`*/`,a);if(t===-1)return i(a,e.length),r;i(a,t+2),n.active=!1,a=t+2;continue}if(t===`html`&&e.startsWith(`<!--`,a)){let t=e.indexOf(`-->`,a+4);if(t===-1)return i(a,e.length),r;i(a,t+3),a=t+3;continue}if([`javascript`,`typescript`,`java`,`go`,`rust`,`html`].includes(t)&&e.startsWith(`/*`,a)){let t=e.indexOf(`*/`,a+2);if(t===-1)return i(a,e.length),n.active=!0,r;i(a,t+2),a=t+2;continue}if([`javascript`,`typescript`,`java`,`go`,`rust`].includes(t)&&e.startsWith(`//`,a)||[`python`,`shell`].includes(t)&&e[a]===`#`||t===`sql`&&e.startsWith(`--`,a))return i(a,e.length),r;a+=1}return r}function ie(e,t){for(let n=0;n<t.length;n+=1)t[n]||(e[n]=`comment`)}function ae(e,t){let n=e.split(`
`),r=[],i=0,a={active:!1};return n.forEach((e,o)=>{let s=T(e,t),c=re(e,t,a);ie(s,c);for(let t=0;t<e.length;t+=1){let n=e[t],a=/\s/.test(n),l=c[t]&&!a;r.push({char:n,key:`${o}-${t}-${n}`,logicalIndex:l?i:null,tone:s[t]??`plain`}),l&&(i+=1)}o<n.length-1&&r.push({char:`
`,key:`${o}-newline`,logicalIndex:null,tone:`plain`})}),r}var oe=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),E=o(((e,t)=>{t.exports=oe()}))();function se(){let e=(0,_.useRef)(null),[t,n]=(0,_.useState)(``),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(y[0]?.id??``),[l,u]=(0,_.useState)(y[0]?.lessons[0]?.id??``),[d,f]=(0,_.useState)(y[0]?.lessons[0]?.parts[0]?.id??``),p=(0,_.useMemo)(()=>y.find(e=>e.id===s)??y[0]??null,[s]);(0,_.useEffect)(()=>{if(!p){u(``);return}p.lessons.some(e=>e.id===l)||u(p.lessons[0]?.id??``)},[l,p]);let m=(0,_.useMemo)(()=>p?p.lessons.find(e=>e.id===l)??p.lessons[0]??null:null,[l,p]);(0,_.useEffect)(()=>{if(!m){f(``);return}m.parts.some(e=>e.id===d)||f(m.parts[0]?.id??``)},[m,d]);let h=(0,_.useMemo)(()=>m?m.parts.find(e=>e.id===d)??m.parts[0]??null:null,[m,d]),g=h?.content??`예문 데이터가 없습니다.`,v=h?.displayContent??g,b=m?.language??`text`,x=(0,_.useMemo)(()=>g.replace(/\s/g,``),[g]),S=t.slice(0,x.length),C=x.length,w=S.length;(0,_.useEffect)(()=>{e.current?.focus()},[h?.id]),(0,_.useEffect)(()=>{n(``),i(``),o(!1)},[h?.id]);let ee=(0,_.useMemo)(()=>ae(v,b),[v,b]),te=(0,_.useMemo)(()=>{let e=0;for(let t=0;t<S.length;t+=1)S[t]===x[t]&&(e+=1);return e},[S,x]),ne=w===0?100:Math.round(te/w*100),T=(0,_.useMemo)(()=>r.replace(/\s/g,``),[r]),re=a&&T.startsWith(S)?T.slice(S.length):``,ie=re[re.length-1]??``,oe=p?y.findIndex(e=>e.id===p.id):-1,se=p&&m?p.lessons.findIndex(e=>e.id===m.id):-1,ce=m&&h?m.parts.findIndex(e=>e.id===h.id):-1,D=y.some(e=>e.lessons.length>0),O=p!==null&&m!==null&&h!==null&&oe===y.length-1&&se===p.lessons.length-1&&ce===m.parts.length-1,le=e=>{let t=e.replace(/\s/g,``),r=``;for(let e=0;e<t.length&&t[e]===x[e];e+=1)r+=t[e];n(r),i(r)},ue=()=>{n(``),i(``),o(!1),e.current?.focus()},de=()=>{if(!p||!m||!h)return;let e=m.parts[ce+1];if(e){f(e.id);return}let t=p.lessons[se+1];if(t){u(t.id),f(t.parts[0]?.id??``);return}let n=y[oe+1];if(n?.lessons[0]){c(n.id),u(n.lessons[0].id),f(n.lessons[0].parts[0]?.id??``);return}let r=y[0],i=r?.lessons[0];r&&i&&(c(r.id),u(i.id),f(i.parts[0]?.id??``))};return(0,E.jsx)(`main`,{className:`page`,onClick:t=>{let n=t.target;n instanceof HTMLElement&&n.closest(`button, select, option, label`)||e.current?.focus()},children:(0,E.jsxs)(`section`,{className:`panel`,children:[(0,E.jsxs)(`header`,{className:`header`,children:[(0,E.jsx)(`h1`,{children:`개발 예문 타이핑 연습`}),(0,E.jsx)(`p`,{className:`subtitle`,children:`영어는 바로 반영되고, 한글 조합 입력은 글자가 완성되는 순간 판정합니다. 공백과 줄바꿈은 무시됩니다.`})]}),(0,E.jsxs)(`section`,{className:`toolbar`,"aria-label":`예문 선택`,children:[(0,E.jsxs)(`div`,{className:`toolbarGroup`,children:[(0,E.jsx)(`span`,{className:`toolbarLabel`,children:`언어`}),(0,E.jsx)(`div`,{className:`trackList`,children:y.map(e=>(0,E.jsx)(`button`,{type:`button`,className:e.id===p?.id?`trackButton isActive`:`trackButton`,onClick:()=>c(e.id),children:e.label},e.id))})]}),(0,E.jsxs)(`div`,{className:`toolbarGroup`,children:[(0,E.jsx)(`label`,{className:`toolbarLabel`,htmlFor:`lesson-select`,children:`파일`}),(0,E.jsx)(`select`,{id:`lesson-select`,className:`lessonSelect`,value:m?.id??``,onChange:e=>{let t=e.target.value,n=p?.lessons.find(e=>e.id===t);u(t),f(n?.parts[0]?.id??``)},disabled:!p,children:p?.lessons.map(e=>(0,E.jsx)(`option`,{value:e.id,children:e.title},e.id))})]}),(0,E.jsxs)(`div`,{className:`toolbarGroup`,children:[(0,E.jsx)(`label`,{className:`toolbarLabel`,htmlFor:`part-select`,children:`파트`}),(0,E.jsx)(`select`,{id:`part-select`,className:`lessonSelect`,value:h?.id??``,onChange:e=>f(e.target.value),disabled:!m,children:m?.parts.map(e=>(0,E.jsx)(`option`,{value:e.id,children:e.title},e.id))})]})]}),(0,E.jsxs)(`div`,{className:`stats`,children:[(0,E.jsxs)(`div`,{className:`statCard`,children:[(0,E.jsx)(`span`,{className:`statLabel`,children:`진행률`}),(0,E.jsxs)(`strong`,{children:[w,` / `,C]})]}),(0,E.jsxs)(`div`,{className:`statCard`,children:[(0,E.jsx)(`span`,{className:`statLabel`,children:`정확도`}),(0,E.jsxs)(`strong`,{children:[ne,`%`]})]}),(0,E.jsxs)(`div`,{className:`statCard`,children:[(0,E.jsx)(`span`,{className:`statLabel`,children:`파트`}),(0,E.jsx)(`strong`,{children:h?`${ce+1} / ${m?.parts.length??0}`:`없음`})]})]}),(0,E.jsxs)(`section`,{className:`lessonMeta`,"aria-label":`현재 예문 정보`,children:[(0,E.jsx)(`strong`,{className:`lessonTitle`,children:h?.title??m?.title??`예문 없음`}),(0,E.jsx)(`span`,{className:`lessonFile`,children:m?.title??`파일 없음`}),(0,E.jsx)(`span`,{className:`lessonPath`,children:m?.sourcePath??`assets/typingSource/Language-*`})]}),(0,E.jsxs)(`section`,{className:`textPanel`,"aria-label":`원문`,children:[(0,E.jsx)(`h2`,{children:`예문 원문`}),(0,E.jsx)(`p`,{className:`practiceText`,children:ee.map(({char:e,key:t,logicalIndex:n,tone:r})=>{let i=`char tone-${r}`,a=/\s/.test(e);return n===null&&a?i=`${i} isGap`:n!==null&&n<S.length?i=S[n]===e?`${i} isCorrect`:`char isWrong`:n!==null&&n===S.length&&(i=ie?`${i} isCurrent hasPreview`:`${i} isCurrent`),(0,E.jsxs)(`span`,{className:i,children:[e,n===S.length&&ie?(0,E.jsx)(`span`,{className:`charPreview`,children:ie}):null]},t)})})]}),(0,E.jsx)(`textarea`,{ref:e,className:`hiddenInput`,value:a?r:S,onKeyDown:e=>{e.key===`Enter`&&e.ctrlKey&&(e.preventDefault(),de())},onChange:e=>{let t=e.target.value;if(a){i(t);return}le(t)},onCompositionStart:()=>{D&&(o(!0),i(S))},onCompositionEnd:e=>{o(!1),le(e.currentTarget.value)},spellCheck:!1,autoFocus:!0,"aria-hidden":`true`,tabIndex:-1}),(0,E.jsxs)(`div`,{className:`actions`,children:[(0,E.jsx)(`button`,{type:`button`,className:`resetButton`,onClick:ue,children:`다시 시작`}),(0,E.jsx)(`button`,{type:`button`,className:`nextButton`,onClick:de,disabled:!h,children:O?`처음으로`:`다음 파트`})]})]})})}v.createRoot(document.getElementById(`root`)).render((0,E.jsx)(_.StrictMode,{children:(0,E.jsx)(se,{})}));