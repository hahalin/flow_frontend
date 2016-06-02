!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/static/",t(0)}([function(e,t,n){e.exports=n(16)},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};var r=function(){var e=t[t.length-1],n=t.slice(0,-1);return{v:function(){return n.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}}();return"object"==typeof r?r.v:void 0}t.__esModule=!0,t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){function r(){b===h&&(b=h.slice())}function i(){return v}function c(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),b.push(e),function(){if(t){t=!1,r();var n=b.indexOf(e);b.splice(n,1)}}}function f(e){if(!(0,u["default"])(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(g)throw new Error("Reducers may not dispatch actions.");try{g=!0,v=y(v,e)}finally{g=!1}for(var t=h=b,n=0;n<t.length;n++)t[n]();return e}function d(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");y=e,f({type:s.INIT})}function l(){var e,t=c;return e={subscribe:function(e){function n(){e.next&&e.next(i())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");n();var r=t(n);return{unsubscribe:r}}},e[a["default"]]=function(){return this},e}var p;if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var y=e,v=t,h=[],b=h,g=!1;return f({type:s.INIT}),p={dispatch:f,subscribe:c,getState:i,replaceReducer:d},p[a["default"]]=l,p}t.__esModule=!0,t.ActionTypes=void 0,t["default"]=o;var i=n(4),u=r(i),c=n(13),a=r(c),s=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t["default"]=n},function(e,t,n){function r(e){if(!u(e)||l.call(e)!=c||i(e))return!1;var t=o(e);if(null===t)return!0;var n=f.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==d}var o=n(10),i=n(11),u=n(12),c="[object Object]",a=Object.prototype,s=Function.prototype.toString,f=a.hasOwnProperty,d=s.call(Object),l=a.toString;e.exports=r},function(e,t){function n(){s&&u&&(s=!1,u.length?a=u.concat(a):f=-1,a.length&&r())}function r(){if(!s){var e=setTimeout(n);s=!0;for(var t=a.length;t;){for(u=a,a=[];++f<t;)u&&u[f].run();f=-1,t=a.length}u=null,s=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var u,c=e.exports={},a=[],s=!1,f=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new o(e,t)),1!==a.length||s||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=i,c.addListener=i,c.once=i,c.off=i,c.removeListener=i,c.removeAllListeners=i,c.emit=i,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var u=e(n,r,o),a=u.dispatch,s=[],f={getState:u.getState,dispatch:function(e){return a(e)}};return s=t.map(function(e){return e(f)}),a=c["default"].apply(void 0,s)(u.dispatch),i({},u,{dispatch:a})}}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=o;var u=n(1),c=r(u)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function r(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),o={},i=0;i<r.length;i++){var u=r[i],c=e[u];"function"==typeof c&&(o[u]=n(c,t))}return o}t.__esModule=!0,t["default"]=r},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(e,t,n){var r=Object.keys(t),o=n&&n.type===a.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,f["default"])(e))return"The "+o+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var i=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)});return i.length>0?"Unexpected "+(i.length>1?"keys":"key")+" "+('"'+i.join('", "')+'" found in '+o+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function u(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function c(t){for(var n=Object.keys(t),r={},c=0;c<n.length;c++){var a=n[c];"function"==typeof t[a]&&(r[a]=t[a])}var s,f=Object.keys(r);try{u(r)}catch(d){s=d}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];if(s)throw s;if("production"!==e.env.NODE_ENV){var u=i(t,r,n);u&&(0,l["default"])(u)}for(var c=!1,a={},d=0;d<f.length;d++){var p=f[d],y=r[p],v=t[p],h=y(v,n);if("undefined"==typeof h){var b=o(p,n);throw new Error(b)}a[p]=h,c=c||h!==v}return c?a:t}}t.__esModule=!0,t["default"]=c;var a=n(2),s=n(4),f=r(s),d=n(3),l=r(d)}).call(t,n(5))},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var i=n(2),u=r(i),c=n(8),a=r(c),s=n(7),f=r(s),d=n(6),l=r(d),p=n(1),y=r(p),v=n(3),h=r(v);"production"!==e.env.NODE_ENV&&"string"==typeof o.name&&"isCrushed"!==o.name&&(0,h["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),t.createStore=u["default"],t.combineReducers=a["default"],t.bindActionCreators=f["default"],t.applyMiddleware=l["default"],t.compose=y["default"]}).call(t,n(5))},function(e,t){function n(e){return r(Object(e))}var r=Object.getPrototypeOf;e.exports=n},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){(function(t){"use strict";e.exports=n(14)(t||window||this)}).call(t,function(){return this}())},function(e,t){"use strict";e.exports=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}},function(e,t){"use strict";function n(e){return{type:o,text:e}}function r(e){return{type:i,filter:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addActivity=n,t.setVisibilityFilter=r;var o="ADD_ACTIVITY";t.ADD_ACTIVITY=o;var i="SET_VISIBILITY_FILTER";t.SET_VISIBILITY_FILTER=i;var u={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE",SHOW_REVERSE:"SHOW_Reverse"};t.VisibilityFilters=u;var c={foo:"fooaaa"};t.foovar=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(17);r(o)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(9),i=n(18),u=r(i),c=n(15),a=(0,o.createStore)(u["default"]);console.log("store.getState()"),console.log(a.getState());var s=a.subscribe(function(){var e=a.getState();console.log(a.getState()),console.log("activities:"),console.log(e.activities),console.log("foo:"),console.log(e.foofun)});console.log("store.dispatch()"),a.dispatch((0,c.addActivity)("Learn about actions")),a.dispatch((0,c.addActivity)("Learn about reducers")),a.dispatch((0,c.addActivity)("Learn about store")),a.dispatch((0,c.setVisibilityFilter)(c.VisibilityFilters.SHOW_COMPLETED)),s()},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){switch(void 0===e&&(e=f),t.type){case a.ADD_ACTIVITY:return{foostate:e,action:"add"}}return e}function i(e,t){switch(void 0===e&&(e=s),t.type){case a.SET_VISIBILITY_FILTER:return t.filter;default:return e}}function u(e,t){switch(void 0===e&&(e=[]),t.type){case a.ADD_ACTIVITY:return[].concat(r(e),[{text:t.text,completed:!1}]);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(9),a=n(15),s=a.VisibilityFilters.SHOW_ALL,f=a.foovar.foo,d=(0,c.combineReducers)({foofun:o,visibilityFilter:i,activities:u});t["default"]=d,e.exports=t["default"]}]);