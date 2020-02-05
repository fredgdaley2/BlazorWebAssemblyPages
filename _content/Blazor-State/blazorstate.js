!function(e){var t={};function o(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BlazorStateName="BlazorState",t.DevToolsName="devTools",t.InitializeJavaScriptInteropName="InitializeJavaScriptInterop",t.JsonRequestHandlerMethodName="Handle",t.JsonRequestHandlerName="jsonRequestHandler",t.ReduxDevToolsFactoryName="ReduxDevToolsFactory",t.ReduxDevToolsName="reduxDevTools",t.ReduxExtensionName="__REDUX_DEVTOOLS_EXTENSION__"},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(2),s=o(3),i=o(0);function a(e){console.log("InitializeJavaScriptInterop"),window[i.JsonRequestHandlerName]=e}function r(){const e=new s.ReduxDevTools;return window[i.ReduxDevToolsName]=e,e.IsEnabled}console.log("Initialize BlazorState"),"undefined"==typeof window||window[i.BlazorStateName]||(window[i.BlazorStateName]=new n.BlazorState,window[i.InitializeJavaScriptInteropName]=a,window[i.ReduxDevToolsFactoryName]=r)},function(e,t,o){"use strict";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(s,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function r(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,r)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=o(0);t.BlazorState=class{DispatchRequest(e,t){return n(this,void 0,void 0,(function*(){const o=JSON.stringify(t);console.log(`Dispatching request of Type ${e}: ${o}`),yield window[s.JsonRequestHandlerName].invokeMethodAsync(s.JsonRequestHandlerMethodName,e,o)}))}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=o(0);t.ReduxDevTools=class{constructor(){this.MessageHandler=e=>{console.log("ReduxDevTools.MessageHandler"),console.log(e);const t=this.MapRequestType(e);t?({RequestType:t,Payload:e},this.BlazorState.DispatchRequest(t,e)):console.log("messages of this type are currently not supported")},this.BlazorState=window[n.BlazorStateName],this.Config={name:"Blazor State",features:{pause:!1,lock:!1,persist:!1,export:!1,import:!1,jump:!1,skip:!1,reorder:!1,dispatch:!1,test:!1}},this.Extension=this.GetExtension(),this.DevTools=this.GetDevTools(),this.IsEnabled=!!this.DevTools,this.Init()}Init(){this.IsEnabled&&(this.DevTools.subscribe(this.MessageHandler),window[n.DevToolsName]=this.DevTools)}GetExtension(){const e=window[n.ReduxExtensionName];return e||console.log("Redux DevTools are not installed."),e}GetDevTools(){const e=this.Extension&&this.Extension.connect(this.Config);return e||console.log("Unable to connect to Redux DevTools."),e}MapRequestType(e){var t,o={COMMIT:void 0,IMPORT_STATE:void 0,JUMP_TO_ACTION:"BlazorState.Pipeline.ReduxDevTools.JumpToStateRequest",JUMP_TO_STATE:"BlazorState.Pipeline.ReduxDevTools.JumpToStateRequest",RESET:void 0,ROLLBACK:void 0,TOGGLE_ACTION:void 0};switch(e.type){case"START":t="BlazorState.Pipeline.ReduxDevTools.StartRequest";break;case"STOP":break;case"DISPATCH":t=o[e.payload.type]}return t&&console.log(`Redux Dev tools type: ${e.type} maps to ${t}`),t}ReduxDevToolsDispatch(e,t){return"init"===e?window[n.DevToolsName].init(t):window[n.DevToolsName].send(e,t)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5pdGlhbGl6ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQmxhem9yU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZHV4RGV2VG9vbHMudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJCbGF6b3JTdGF0ZU5hbWUiLCJEZXZUb29sc05hbWUiLCJJbml0aWFsaXplSmF2YVNjcmlwdEludGVyb3BOYW1lIiwiSnNvblJlcXVlc3RIYW5kbGVyTWV0aG9kTmFtZSIsIkpzb25SZXF1ZXN0SGFuZGxlck5hbWUiLCJSZWR1eERldlRvb2xzRmFjdG9yeU5hbWUiLCJSZWR1eERldlRvb2xzTmFtZSIsIlJlZHV4RXh0ZW5zaW9uTmFtZSIsIkluaXRpYWxpemVKYXZhU2NyaXB0SW50ZXJvcCIsIkpzb25SZXF1ZXN0SGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJSZWR1eERldlRvb2xzRmFjdG9yeSIsInJlZHV4RGV2VG9vbHMiLCJSZWR1eERldlRvb2xzIiwiSXNFbmFibGVkIiwiQmxhem9yU3RhdGUiLCJyZXF1ZXN0VHlwZUZ1bGxOYW1lIiwicmVxdWVzdCIsInJlcXVlc3RBc0pzb24iLCJKU09OIiwic3RyaW5naWZ5IiwiaW52b2tlTWV0aG9kQXN5bmMiLCJNZXNzYWdlSGFuZGxlciIsIm1lc3NhZ2UiLCJyZXF1ZXN0VHlwZSIsInRoaXMiLCJNYXBSZXF1ZXN0VHlwZSIsIlJlcXVlc3RUeXBlIiwiUGF5bG9hZCIsIkRpc3BhdGNoUmVxdWVzdCIsIkNvbmZpZyIsImZlYXR1cmVzIiwicGF1c2UiLCJsb2NrIiwicGVyc2lzdCIsImV4cG9ydCIsImltcG9ydCIsImp1bXAiLCJza2lwIiwicmVvcmRlciIsImRpc3BhdGNoIiwidGVzdCIsIkV4dGVuc2lvbiIsIkdldEV4dGVuc2lvbiIsIkRldlRvb2xzIiwiR2V0RGV2VG9vbHMiLCJJbml0Iiwic3Vic2NyaWJlIiwiZXh0ZW5zaW9uIiwiZGV2VG9vbHMiLCJjb25uZWN0IiwiYmxhem9yUmVxdWVzdFR5cGUiLCJkaXNwYXRjaFJlcXVlc3RzIiwidW5kZWZpbmVkIiwidHlwZSIsInBheWxvYWQiLCJhY3Rpb24iLCJzdGF0ZSIsImluaXQiLCJzZW5kIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixH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S2tCLGVBQ3RCbEIsS0FBS21CLFNBQVduQixLQUFLb0IsY0FDckJwQixLQUFLWCxZQUFZVyxLQUFLbUIsU0FDdEJuQixLQUFLcUIsT0FHUCxPQUNNckIsS0FBS1gsWUFDUFcsS0FBS21CLFNBQVNHLFVBQVV0QixLQUFLSCxnQkFDN0JaLE9BQU8sRUFBQVgsY0FBZ0IwQixLQUFLbUIsVUFJaEMsZUFDRSxNQUFNSSxFQUFZdEMsT0FBTyxFQUFBTCxvQkFLekIsT0FISzJDLEdBQ0h4QyxRQUFRQyxJQUFJLHFDQUVQdUMsRUFHVCxjQUNFLE1BQU1DLEVBQVd4QixLQUFLaUIsV0FBYWpCLEtBQUtpQixVQUFVUSxRQUFRekIsS0FBS0ssUUFJL0QsT0FIS21CLEdBQ0h6QyxRQUFRQyxJQUFJLHdDQUVQd0MsRUFHVCxlQUFlMUIsR0FDYixJQVNJNEIsRUFUQUMsRUFBbUIsQ0FDckIsWUFBVUMsRUFDVixrQkFBZ0JBLEVBQ2hCLGVBQWtCLHdEQUNsQixjQUFpQix3REFDakIsV0FBU0EsRUFDVCxjQUFZQSxFQUNaLG1CQUFpQkEsR0FHbkIsT0FBUTlCLEVBQVErQixNQUNkLElBQUssUUFDSEgsRUFBb0Isa0RBQ3BCLE1BQ0YsSUFBSyxPQUVILE1BQ0YsSUFBSyxXQUNIQSxFQUFvQkMsRUFBaUI3QixFQUFRZ0MsUUFBUUQsTUFNekQsT0FIQUgsR0FDRTNDLFFBQVFDLElBQUkseUJBQXlCYyxFQUFRK0IsZ0JBQWdCSCxLQUV4REEsRUFvQlQsc0JBQXNCSyxFQUFRQyxHQUM1QixNQUFlLFNBQVhELEVBQ0s5QyxPQUFPLEVBQUFYLGNBQWMyRCxLQUFLRCxHQUcxQi9DLE9BQU8sRUFBQVgsY0FBYzRELEtBQUtILEVBQVFDIiwiZmlsZSI6ImJsYXpvcnN0YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZXhwb3J0IGNvbnN0IEJsYXpvclN0YXRlTmFtZTogc3RyaW5nID0gXCJCbGF6b3JTdGF0ZVwiO1xyXG5leHBvcnQgY29uc3QgRGV2VG9vbHNOYW1lOiBzdHJpbmcgPSBcImRldlRvb2xzXCJcclxuZXhwb3J0IGNvbnN0IEluaXRpYWxpemVKYXZhU2NyaXB0SW50ZXJvcE5hbWU6IHN0cmluZyA9IFwiSW5pdGlhbGl6ZUphdmFTY3JpcHRJbnRlcm9wXCI7XHJcbmV4cG9ydCBjb25zdCBKc29uUmVxdWVzdEhhbmRsZXJNZXRob2ROYW1lOiBzdHJpbmcgPSBcIkhhbmRsZVwiO1xyXG5leHBvcnQgY29uc3QgSnNvblJlcXVlc3RIYW5kbGVyTmFtZTogc3RyaW5nID0gXCJqc29uUmVxdWVzdEhhbmRsZXJcIjtcclxuZXhwb3J0IGNvbnN0IFJlZHV4RGV2VG9vbHNGYWN0b3J5TmFtZTogc3RyaW5nID0gXCJSZWR1eERldlRvb2xzRmFjdG9yeVwiO1xyXG5leHBvcnQgY29uc3QgUmVkdXhEZXZUb29sc05hbWU6IHN0cmluZyA9IFwicmVkdXhEZXZUb29sc1wiO1xyXG5leHBvcnQgY29uc3QgUmVkdXhFeHRlbnNpb25OYW1lOiBzdHJpbmcgPSBcIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX19cIjtcclxuIiwiaW1wb3J0IHsgQmxhem9yU3RhdGUgfSBmcm9tICcuL0JsYXpvclN0YXRlJztcclxuaW1wb3J0IHsgUmVkdXhEZXZUb29sc30gZnJvbSAnLi9SZWR1eERldlRvb2xzJztcclxuaW1wb3J0IHtcclxuICBCbGF6b3JTdGF0ZU5hbWUsXHJcbiAgSW5pdGlhbGl6ZUphdmFTY3JpcHRJbnRlcm9wTmFtZSxcclxuICBKc29uUmVxdWVzdEhhbmRsZXJOYW1lLFxyXG4gIFJlZHV4RGV2VG9vbHNGYWN0b3J5TmFtZSxcclxuICBSZWR1eERldlRvb2xzTmFtZSxcclxufSBmcm9tICcuL0NvbnN0YW50cyc7XHJcblxyXG5mdW5jdGlvbiBJbml0aWFsaXplSmF2YVNjcmlwdEludGVyb3AoSnNvblJlcXVlc3RIYW5kbGVyKSB7XHJcbiAgY29uc29sZS5sb2coXCJJbml0aWFsaXplSmF2YVNjcmlwdEludGVyb3BcIik7XHJcbiAgd2luZG93W0pzb25SZXF1ZXN0SGFuZGxlck5hbWVdID0gSnNvblJlcXVlc3RIYW5kbGVyO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluaXRpYWxpemUoKSB7XHJcbiAgY29uc29sZS5sb2coXCJJbml0aWFsaXplIEJsYXpvclN0YXRlXCIpO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhd2luZG93W0JsYXpvclN0YXRlTmFtZV0pIHtcclxuICAgIHdpbmRvd1tCbGF6b3JTdGF0ZU5hbWVdID0gbmV3IEJsYXpvclN0YXRlKCk7XHJcbiAgICB3aW5kb3dbSW5pdGlhbGl6ZUphdmFTY3JpcHRJbnRlcm9wTmFtZV0gPSBJbml0aWFsaXplSmF2YVNjcmlwdEludGVyb3A7XHJcbiAgICB3aW5kb3dbUmVkdXhEZXZUb29sc0ZhY3RvcnlOYW1lXSA9IFJlZHV4RGV2VG9vbHNGYWN0b3J5O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVkdXhEZXZUb29sc0ZhY3RvcnkoKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgcmVkdXhEZXZUb29scyA9IG5ldyBSZWR1eERldlRvb2xzKCk7XHJcbiAgd2luZG93W1JlZHV4RGV2VG9vbHNOYW1lXSA9IHJlZHV4RGV2VG9vbHM7XHJcbiAgcmV0dXJuIHJlZHV4RGV2VG9vbHMuSXNFbmFibGVkO1xyXG59XHJcblxyXG5Jbml0aWFsaXplKCk7IiwiaW1wb3J0IHsgIEpzb25SZXF1ZXN0SGFuZGxlck1ldGhvZE5hbWUsIEpzb25SZXF1ZXN0SGFuZGxlck5hbWUgfSBmcm9tICcuL0NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxhem9yU3RhdGUge1xyXG4gIGFzeW5jIERpc3BhdGNoUmVxdWVzdChyZXF1ZXN0VHlwZUZ1bGxOYW1lOiBzdHJpbmcsIHJlcXVlc3Q6IGFueSApIHtcclxuICAgIGNvbnN0IHJlcXVlc3RBc0pzb24gPSBKU09OLnN0cmluZ2lmeShyZXF1ZXN0KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgRGlzcGF0Y2hpbmcgcmVxdWVzdCBvZiBUeXBlICR7cmVxdWVzdFR5cGVGdWxsTmFtZX06ICR7cmVxdWVzdEFzSnNvbn1gKTtcclxuICAgIGF3YWl0IHdpbmRvd1tKc29uUmVxdWVzdEhhbmRsZXJOYW1lXS5pbnZva2VNZXRob2RBc3luYyhKc29uUmVxdWVzdEhhbmRsZXJNZXRob2ROYW1lLCByZXF1ZXN0VHlwZUZ1bGxOYW1lLCByZXF1ZXN0QXNKc29uKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCbGF6b3JTdGF0ZSB9IGZyb20gJy4vQmxhem9yU3RhdGUnO1xyXG5pbXBvcnQgeyBCbGF6b3JTdGF0ZU5hbWUsIFJlZHV4RXh0ZW5zaW9uTmFtZSwgRGV2VG9vbHNOYW1lLCBSZWR1eERldlRvb2xzTmFtZSB9IGZyb20gJy4vQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWR1eERldlRvb2xzIHtcclxuICBJc0VuYWJsZWQ6IGJvb2xlYW47XHJcbiAgRGV2VG9vbHM6IGFueTtcclxuICBFeHRlbnNpb246IGFueTtcclxuICBDb25maWc6IHsgbmFtZTogc3RyaW5nOyBmZWF0dXJlczogeyBwYXVzZTogYm9vbGVhbjsgbG9jazogYm9vbGVhbjsgcGVyc2lzdDogYm9vbGVhbjsgZXhwb3J0OiBib29sZWFuOyBpbXBvcnQ6IGJvb2xlYW47IGp1bXA6IGJvb2xlYW47IHNraXA6IGJvb2xlYW47IHJlb3JkZXI6IGJvb2xlYW47IGRpc3BhdGNoOiBib29sZWFuOyB0ZXN0OiBib29sZWFuOyB9OyB9O1xyXG4gIEJsYXpvclN0YXRlOiBCbGF6b3JTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLkJsYXpvclN0YXRlID0gd2luZG93W0JsYXpvclN0YXRlTmFtZV07IC8vIERlcGVuZHMgb24gdGhpcyBmdW5jdGlvbmFsaXR5XHJcbiAgICB0aGlzLkNvbmZpZyA9IHtcclxuICAgICAgbmFtZTogJ0JsYXpvciBTdGF0ZScsXHJcbiAgICAgIGZlYXR1cmVzOiB7XHJcbiAgICAgICAgcGF1c2U6IGZhbHNlLCAvLyBzdGFydC9wYXVzZSByZWNvcmRpbmcgb2YgZGlzcGF0Y2hlZCBhY3Rpb25zXHJcbiAgICAgICAgbG9jazogZmFsc2UsIC8vIGxvY2svdW5sb2NrIGRpc3BhdGNoaW5nIGFjdGlvbnMgYW5kIHNpZGUgZWZmZWN0c1xyXG4gICAgICAgIHBlcnNpc3Q6IGZhbHNlLCAvLyBwZXJzaXN0IHN0YXRlcyBvbiBwYWdlIHJlbG9hZGluZ1xyXG4gICAgICAgIGV4cG9ydDogZmFsc2UsIC8vIGV4cG9ydCBoaXN0b3J5IG9mIGFjdGlvbnMgaW4gYSBmaWxlXHJcbiAgICAgICAgaW1wb3J0OiBmYWxzZSwgLy8gaW1wb3J0IGhpc3Rvcnkgb2YgYWN0aW9ucyBmcm9tIGEgZmlsZVxyXG4gICAgICAgIGp1bXA6IGZhbHNlLCAvLyBqdW1wIGJhY2sgYW5kIGZvcnRoICh0aW1lIHRyYXZlbGluZylcclxuICAgICAgICBza2lwOiBmYWxzZSwgLy8gc2tpcCAoY2FuY2VsKSBhY3Rpb25zXHJcbiAgICAgICAgcmVvcmRlcjogZmFsc2UsIC8vIGRyYWcgYW5kIGRyb3AgYWN0aW9ucyBpbiB0aGUgaGlzdG9yeSBsaXN0XHJcbiAgICAgICAgZGlzcGF0Y2g6IGZhbHNlLCAvLyBkaXNwYXRjaCBjdXN0b20gYWN0aW9ucyBvciBhY3Rpb24gY3JlYXRvcnNcclxuICAgICAgICB0ZXN0OiBmYWxzZSAvLyBnZW5lcmF0ZSB0ZXN0cyBmb3IgdGhlIHNlbGVjdGVkIGFjdGlvbnNcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuRXh0ZW5zaW9uID0gdGhpcy5HZXRFeHRlbnNpb24oKTtcclxuICAgIHRoaXMuRGV2VG9vbHMgPSB0aGlzLkdldERldlRvb2xzKCk7XHJcbiAgICB0aGlzLklzRW5hYmxlZCA9IHRoaXMuRGV2VG9vbHMgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB0aGlzLkluaXQoKTtcclxuICB9XHJcblxyXG4gIEluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5Jc0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5EZXZUb29scy5zdWJzY3JpYmUodGhpcy5NZXNzYWdlSGFuZGxlcik7XHJcbiAgICAgIHdpbmRvd1tEZXZUb29sc05hbWVdID0gdGhpcy5EZXZUb29scztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEdldEV4dGVuc2lvbigpIHtcclxuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHdpbmRvd1tSZWR1eEV4dGVuc2lvbk5hbWVdO1xyXG5cclxuICAgIGlmICghZXh0ZW5zaW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZWR1eCBEZXZUb29scyBhcmUgbm90IGluc3RhbGxlZC4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBleHRlbnNpb247XHJcbiAgfVxyXG5cclxuICBHZXREZXZUb29scygpIHtcclxuICAgIGNvbnN0IGRldlRvb2xzID0gdGhpcy5FeHRlbnNpb24gJiYgdGhpcy5FeHRlbnNpb24uY29ubmVjdCh0aGlzLkNvbmZpZyk7XHJcbiAgICBpZiAoIWRldlRvb2xzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gY29ubmVjdCB0byBSZWR1eCBEZXZUb29scy4nKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkZXZUb29scztcclxuICB9XHJcblxyXG4gIE1hcFJlcXVlc3RUeXBlKG1lc3NhZ2UpIHtcclxuICAgIHZhciBkaXNwYXRjaFJlcXVlc3RzID0ge1xyXG4gICAgICAnQ09NTUlUJzogdW5kZWZpbmVkLFxyXG4gICAgICAnSU1QT1JUX1NUQVRFJzogdW5kZWZpbmVkLFxyXG4gICAgICAnSlVNUF9UT19BQ1RJT04nOiAnQmxhem9yU3RhdGUuUGlwZWxpbmUuUmVkdXhEZXZUb29scy5KdW1wVG9TdGF0ZVJlcXVlc3QnLFxyXG4gICAgICAnSlVNUF9UT19TVEFURSc6ICdCbGF6b3JTdGF0ZS5QaXBlbGluZS5SZWR1eERldlRvb2xzLkp1bXBUb1N0YXRlUmVxdWVzdCcsXHJcbiAgICAgICdSRVNFVCc6IHVuZGVmaW5lZCxcclxuICAgICAgJ1JPTExCQUNLJzogdW5kZWZpbmVkLFxyXG4gICAgICAnVE9HR0xFX0FDVElPTic6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuICAgIHZhciBibGF6b3JSZXF1ZXN0VHlwZTtcclxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ1NUQVJUJzpcclxuICAgICAgICBibGF6b3JSZXF1ZXN0VHlwZSA9ICdCbGF6b3JTdGF0ZS5QaXBlbGluZS5SZWR1eERldlRvb2xzLlN0YXJ0UmVxdWVzdCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1NUT1AnOlxyXG4gICAgICAgIC8vYmxhem9yUmVxdWVzdFR5cGUgPSAnQmxhem9yU3RhdGUuUGlwZWxpbmUuUmVkdXhEZXZUb29scy5TdG9wUmVxdWVzdCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ0RJU1BBVENIJzpcclxuICAgICAgICBibGF6b3JSZXF1ZXN0VHlwZSA9IGRpc3BhdGNoUmVxdWVzdHNbbWVzc2FnZS5wYXlsb2FkLnR5cGVdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgYmxhem9yUmVxdWVzdFR5cGUgJiZcclxuICAgICAgY29uc29sZS5sb2coYFJlZHV4IERldiB0b29scyB0eXBlOiAke21lc3NhZ2UudHlwZX0gbWFwcyB0byAke2JsYXpvclJlcXVlc3RUeXBlfWApO1xyXG5cclxuICAgIHJldHVybiBibGF6b3JSZXF1ZXN0VHlwZTtcclxuICB9XHJcblxyXG4gIE1lc3NhZ2VIYW5kbGVyID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdSZWR1eERldlRvb2xzLk1lc3NhZ2VIYW5kbGVyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIHZhciBqc29uUmVxdWVzdDtcclxuICAgIGNvbnN0IHJlcXVlc3RUeXBlID0gdGhpcy5NYXBSZXF1ZXN0VHlwZShtZXNzYWdlKTtcclxuICAgIGlmIChyZXF1ZXN0VHlwZSkgeyAvLyBJZiB3ZSBkb24ndCBtYXAgdGhpcyB0eXBlIHRoZW4gdGhlcmUgaXMgbm90aGluZyB0byBkaXNwYXRjaCBqdXN0IGlnbm9yZS5cclxuICAgICAganNvblJlcXVlc3QgPSB7XHJcbiAgICAgICAgLy8gVE9ETzogbWFrZSBzdXJlIG5vbiBSZXF1ZXN0cyBmcm9tIGFzc2VtYmxpZXMgb3RoZXIgdGhhbiBCbGF6b3JTdGF0ZSBhbHNvIHdvcmsuXHJcbiAgICAgICAgUmVxdWVzdFR5cGU6IHJlcXVlc3RUeXBlLFxyXG4gICAgICAgIFBheWxvYWQ6IG1lc3NhZ2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuQmxhem9yU3RhdGUuRGlzcGF0Y2hSZXF1ZXN0KHJlcXVlc3RUeXBlLCBtZXNzYWdlKTtcclxuICAgIH0gZWxzZVxyXG4gICAgICBjb25zb2xlLmxvZyhgbWVzc2FnZXMgb2YgdGhpcyB0eXBlIGFyZSBjdXJyZW50bHkgbm90IHN1cHBvcnRlZGApO1xyXG4gIH1cclxuXHJcbiAgUmVkdXhEZXZUb29sc0Rpc3BhdGNoKGFjdGlvbiwgc3RhdGUpIHtcclxuICAgIGlmIChhY3Rpb24gPT09ICdpbml0Jykge1xyXG4gICAgICByZXR1cm4gd2luZG93W0RldlRvb2xzTmFtZV0uaW5pdChzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHdpbmRvd1tEZXZUb29sc05hbWVdLnNlbmQoYWN0aW9uLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==