let i;const q=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&q.decode();let d=null;function p(){return(d===null||d.byteLength===0)&&(d=new Uint8Array(i.memory.buffer)),d}function f(t,e){return t=t>>>0,q.decode(p().subarray(t,t+e))}function l(t){const e=i.__externref_table_alloc();return i.__wbindgen_export_2.set(e,t),e}function u(t,e){try{return t.apply(this,e)}catch(n){const r=l(n);i.__wbindgen_exn_store(r)}}function g(t){return t==null}let y=0;const m=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},j=typeof m.encodeInto=="function"?function(t,e){return m.encodeInto(t,e)}:function(t,e){const n=m.encode(t);return e.set(n),{read:t.length,written:n.length}};function h(t,e,n){if(n===void 0){const s=m.encode(t),a=e(s.length,1)>>>0;return p().subarray(a,a+s.length).set(s),y=s.length,a}let r=t.length,_=e(r,1)>>>0;const c=p();let o=0;for(;o<r;o++){const s=t.charCodeAt(o);if(s>127)break;c[_+o]=s}if(o!==r){o!==0&&(t=t.slice(o)),_=n(_,r,r=o+t.length*3,1)>>>0;const s=p().subarray(_+o,_+r),a=j(t,s);o+=a.written,_=n(_,r,o,1)>>>0}return y=o,_}let w=null;function b(){return(w===null||w.buffer.detached===!0||w.buffer.detached===void 0&&w.buffer!==i.memory.buffer)&&(w=new DataView(i.memory.buffer)),w}const R=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>{i.__wbindgen_export_5.get(t.dtor)(t.a,t.b)});function F(t,e,n,r){const _={a:t,b:e,cnt:1,dtor:n},c=(...o)=>{_.cnt++;const s=_.a;_.a=0;try{return r(s,_.b,...o)}finally{--_.cnt===0?(i.__wbindgen_export_5.get(_.dtor)(s,_.b),R.unregister(_)):_.a=s}};return c.original=_,R.register(c,_,_),c}function x(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const _=t.description;return _==null?"Symbol":`Symbol(${_})`}if(e=="function"){const _=t.name;return typeof _=="string"&&_.length>0?`Function(${_})`:"Function"}if(Array.isArray(t)){const _=t.length;let c="[";_>0&&(c+=x(t[0]));for(let o=1;o<_;o++)c+=", "+x(t[o]);return c+="]",c}const n=/\[object ([^\]]+)\]/.exec(toString.call(t));let r;if(n&&n.length>1)r=n[1];else return toString.call(t);if(r=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:r}function M(t,e){t=t>>>0;const n=b(),r=[];for(let _=t;_<t+4*e;_+=4)r.push(i.__wbindgen_export_2.get(n.getUint32(_,!0)));return i.__externref_drop_slice(t,e),r}function z(t){return i.get_overlay_data(t)}function W(t,e,n){i.closure310_externref_shim(t,e,n)}function E(t,e,n,r){i.closure94_externref_shim(t,e,n,r)}const I=["omit","same-origin","include"],U=["same-origin","no-cors","cors","navigate"],L=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>i.__wbg_question_free(t>>>0,1));class B{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,L.unregister(this),e}free(){const e=this.__destroy_into_raw();i.__wbg_question_free(e,0)}get title(){let e,n;try{const r=i.__wbg_get_question_title(this.__wbg_ptr);return e=r[0],n=r[1],f(r[0],r[1])}finally{i.__wbindgen_free(e,n,1)}}get options(){const e=i.__wbg_get_question_options(this.__wbg_ptr);var n=M(e[0],e[1]).slice();return i.__wbindgen_free(e[0],e[1]*4,4),n}}const O=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>i.__wbg_questionoption_free(t>>>0,1));class A{static __wrap(e){e=e>>>0;const n=Object.create(A.prototype);return n.__wbg_ptr=e,O.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,O.unregister(this),e}free(){const e=this.__destroy_into_raw();i.__wbg_questionoption_free(e,0)}get item(){let e,n;try{const r=i.__wbg_get_questionoption_item(this.__wbg_ptr);return e=r[0],n=r[1],f(r[0],r[1])}finally{i.__wbindgen_free(e,n,1)}}get category(){const e=i.__wbg_get_questionoption_category(this.__wbg_ptr);let n;return e[0]!==0&&(n=f(e[0],e[1]).slice(),i.__wbindgen_free(e[0],e[1]*1,1)),n}get subcategory(){const e=i.__wbg_get_questionoption_subcategory(this.__wbg_ptr);let n;return e[0]!==0&&(n=f(e[0],e[1]).slice(),i.__wbindgen_free(e[0],e[1]*1,1)),n}get correct(){return i.__wbg_get_questionoption_correct(this.__wbg_ptr)!==0}}async function k(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(r){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function S(){const t={};return t.wbg={},t.wbg.__wbg_abort_05026c983d86824c=function(e){e.abort()},t.wbg.__wbg_append_72d1635ad8643998=function(){return u(function(e,n,r,_,c){e.append(f(n,r),f(_,c))},arguments)},t.wbg.__wbg_arrayBuffer_d0ca2ad8bda0039b=function(){return u(function(e){return e.arrayBuffer()},arguments)},t.wbg.__wbg_buffer_61b7ce01341d7f88=function(e){return e.buffer},t.wbg.__wbg_call_500db948e69c7330=function(){return u(function(e,n,r){return e.call(n,r)},arguments)},t.wbg.__wbg_call_b0d8e36992d9900d=function(){return u(function(e,n){return e.call(n)},arguments)},t.wbg.__wbg_done_f22c1561fa919baa=function(e){return e.done},t.wbg.__wbg_fetch_229368eecee9d217=function(e,n){return e.fetch(n)},t.wbg.__wbg_fetch_b335d17f45a8b5a1=function(e){return fetch(e)},t.wbg.__wbg_getTime_ab8b72009983c537=function(e){return e.getTime()},t.wbg.__wbg_get_bbccf8970793c087=function(){return u(function(e,n){return Reflect.get(e,n)},arguments)},t.wbg.__wbg_getwithrefkey_1dc361bd10053bfe=function(e,n){return e[n]},t.wbg.__wbg_has_94c2fc1d261bbfe9=function(){return u(function(e,n){return Reflect.has(e,n)},arguments)},t.wbg.__wbg_headers_24e3e19fe3f187c0=function(e){return e.headers},t.wbg.__wbg_instanceof_ArrayBuffer_670ddde44cdb2602=function(e){let n;try{n=e instanceof ArrayBuffer}catch{n=!1}return n},t.wbg.__wbg_instanceof_Response_d3453657e10c4300=function(e){let n;try{n=e instanceof Response}catch{n=!1}return n},t.wbg.__wbg_instanceof_Uint8Array_28af5bc19d6acad8=function(e){let n;try{n=e instanceof Uint8Array}catch{n=!1}return n},t.wbg.__wbg_iterator_23604bb983791576=function(){return Symbol.iterator},t.wbg.__wbg_length_65d1cd11729ced11=function(e){return e.length},t.wbg.__wbg_new0_55477545727914d9=function(){return new Date},t.wbg.__wbg_new_35d748855c4620b9=function(){return u(function(){return new Headers},arguments)},t.wbg.__wbg_new_3d446df9155128ef=function(e,n){try{var r={a:e,b:n},_=(o,s)=>{const a=r.a;r.a=0;try{return E(a,r.b,o,s)}finally{r.a=a}};return new Promise(_)}finally{r.a=r.b=0}},t.wbg.__wbg_new_3ff5b33b1ce712df=function(e){return new Uint8Array(e)},t.wbg.__wbg_new_5f48f21d4be11586=function(){return u(function(){return new AbortController},arguments)},t.wbg.__wbg_new_688846f374351c92=function(){return new Object},t.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d=function(e,n){return new Function(f(e,n))},t.wbg.__wbg_newwithbyteoffsetandlength_ba35896968751d91=function(e,n,r){return new Uint8Array(e,n>>>0,r>>>0)},t.wbg.__wbg_newwithstrandinit_a1f6583f20e4faff=function(){return u(function(e,n,r){return new Request(f(e,n),r)},arguments)},t.wbg.__wbg_next_01dd9234a5bf6d05=function(){return u(function(e){return e.next()},arguments)},t.wbg.__wbg_next_137428deb98342b0=function(e){return e.next},t.wbg.__wbg_questionoption_new=function(e){return A.__wrap(e)},t.wbg.__wbg_queueMicrotask_2181040e064c0dc8=function(e){queueMicrotask(e)},t.wbg.__wbg_queueMicrotask_ef9ac43769cbcc4f=function(e){return e.queueMicrotask},t.wbg.__wbg_resolve_0bf7c44d641804f9=function(e){return Promise.resolve(e)},t.wbg.__wbg_set_23d69db4e5c66a6e=function(e,n,r){e.set(n,r>>>0)},t.wbg.__wbg_setbody_64920df008e48adc=function(e,n){e.body=n},t.wbg.__wbg_setcredentials_cfc15e48e3a3a535=function(e,n){e.credentials=I[n]},t.wbg.__wbg_setheaders_4c921e8e226bdfa7=function(e,n){e.headers=n},t.wbg.__wbg_setmethod_cfc7f688ba46a6be=function(e,n,r){e.method=f(n,r)},t.wbg.__wbg_setmode_cd03637eb7da01e0=function(e,n){e.mode=U[n]},t.wbg.__wbg_setsignal_f766190d206f09e5=function(e,n){e.signal=n},t.wbg.__wbg_signal_1fdadeba2d04660e=function(e){return e.signal},t.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3=function(){const e=typeof global>"u"?null:global;return g(e)?0:l(e)},t.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb=function(){const e=typeof globalThis>"u"?null:globalThis;return g(e)?0:l(e)},t.wbg.__wbg_static_accessor_SELF_1dc398a895c82351=function(){const e=typeof self>"u"?null:self;return g(e)?0:l(e)},t.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a=function(){const e=typeof window>"u"?null:window;return g(e)?0:l(e)},t.wbg.__wbg_status_317f53bc4c7638df=function(e){return e.status},t.wbg.__wbg_stringify_f4f701bc34ceda61=function(){return u(function(e){return JSON.stringify(e)},arguments)},t.wbg.__wbg_text_dfc4cb7631d2eb34=function(){return u(function(e){return e.text()},arguments)},t.wbg.__wbg_then_0438fad860fe38e1=function(e,n){return e.then(n)},t.wbg.__wbg_then_0ffafeddf0e182a4=function(e,n,r){return e.then(n,r)},t.wbg.__wbg_url_5327bc0a41a9b085=function(e,n){const r=n.url,_=h(r,i.__wbindgen_malloc,i.__wbindgen_realloc),c=y;b().setInt32(e+4*1,c,!0),b().setInt32(e+4*0,_,!0)},t.wbg.__wbg_value_4c32fd138a88eee2=function(e){return e.value},t.wbg.__wbindgen_boolean_get=function(e){const n=e;return typeof n=="boolean"?n?1:0:2},t.wbg.__wbindgen_cb_drop=function(e){const n=e.original;return n.cnt--==1?(n.a=0,!0):!1},t.wbg.__wbindgen_closure_wrapper3364=function(e,n,r){return F(e,n,311,W)},t.wbg.__wbindgen_debug_string=function(e,n){const r=x(n),_=h(r,i.__wbindgen_malloc,i.__wbindgen_realloc),c=y;b().setInt32(e+4*1,c,!0),b().setInt32(e+4*0,_,!0)},t.wbg.__wbindgen_error_new=function(e,n){return new Error(f(e,n))},t.wbg.__wbindgen_in=function(e,n){return e in n},t.wbg.__wbindgen_init_externref_table=function(){const e=i.__wbindgen_export_2,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)},t.wbg.__wbindgen_is_function=function(e){return typeof e=="function"},t.wbg.__wbindgen_is_object=function(e){const n=e;return typeof n=="object"&&n!==null},t.wbg.__wbindgen_is_undefined=function(e){return e===void 0},t.wbg.__wbindgen_jsval_loose_eq=function(e,n){return e==n},t.wbg.__wbindgen_memory=function(){return i.memory},t.wbg.__wbindgen_number_get=function(e,n){const r=n,_=typeof r=="number"?r:void 0;b().setFloat64(e+8*1,g(_)?0:_,!0),b().setInt32(e+4*0,!g(_),!0)},t.wbg.__wbindgen_string_get=function(e,n){const r=n,_=typeof r=="string"?r:void 0;var c=g(_)?0:h(_,i.__wbindgen_malloc,i.__wbindgen_realloc),o=y;b().setInt32(e+4*1,o,!0),b().setInt32(e+4*0,c,!0)},t.wbg.__wbindgen_string_new=function(e,n){return f(e,n)},t.wbg.__wbindgen_throw=function(e,n){throw new Error(f(e,n))},t}function T(t,e){return i=t.exports,D.__wbindgen_wasm_module=e,w=null,d=null,i.__wbindgen_start(),i}function v(t){if(i!==void 0)return i;typeof t<"u"&&(Object.getPrototypeOf(t)===Object.prototype?{module:t}=t:console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const e=S();t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t));const n=new WebAssembly.Instance(t,e);return T(n,t)}async function D(t){if(i!==void 0)return i;typeof t<"u"&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof t>"u"&&(t=new URL(""+new URL("landscape2_overlay_bg-CNkuxUBV.wasm",import.meta.url).href,import.meta.url));const e=S();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:r}=await k(await t,e);return T(n,r)}export{B as Question,A as QuestionOption,D as default,z as get_overlay_data,v as initSync};
