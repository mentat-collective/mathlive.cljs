import "./cljs_env.js";
goog.provide('nextjournal.clerk.render.hooks');
var module$node_modules$d3_require$dist$d3_require=shadow.js.require("module$node_modules$d3_require$dist$d3_require", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$use_sync_external_store$shim$index=shadow.js.require("module$node_modules$use_sync_external_store$shim$index", {});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
nextjournal.clerk.render.hooks.WrappedState = (function (st){
this.st = st;
this.cljs$lang$protocol_mask$partition0$ = 32784;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(nextjournal.clerk.render.hooks.WrappedState.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
var coll__$1 = this;
return (self__.st[i]);
}));

(nextjournal.clerk.render.hooks.WrappedState.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,nf){
var self__ = this;
var coll__$1 = this;
var or__4253__auto__ = (self__.st[i]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nf;
}
}));

(nextjournal.clerk.render.hooks.WrappedState.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.st[(0)]);
}));

(nextjournal.clerk.render.hooks.WrappedState.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var G__67040_67141 = cljs.core.constantly(new_value);
var fexpr__67039_67142 = (self__.st[(1)]);
(fexpr__67039_67142.cljs$core$IFn$_invoke$arity$1 ? fexpr__67039_67142.cljs$core$IFn$_invoke$arity$1(G__67040_67141) : fexpr__67039_67142.call(null,G__67040_67141));

return new_value;
}));

(nextjournal.clerk.render.hooks.WrappedState.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var fexpr__67043 = (self__.st[(1)]);
return (fexpr__67043.cljs$core$IFn$_invoke$arity$1 ? fexpr__67043.cljs$core$IFn$_invoke$arity$1(f) : fexpr__67043.call(null,f));
}));

(nextjournal.clerk.render.hooks.WrappedState.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__67046 = (function (p1__67014_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__67014_SHARP_,a) : f.call(null,p1__67014_SHARP_,a));
});
var fexpr__67045 = (self__.st[(1)]);
return (fexpr__67045.cljs$core$IFn$_invoke$arity$1 ? fexpr__67045.cljs$core$IFn$_invoke$arity$1(G__67046) : fexpr__67045.call(null,G__67046));
}));

(nextjournal.clerk.render.hooks.WrappedState.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__67053 = (function (p1__67015_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__67015_SHARP_,a,b) : f.call(null,p1__67015_SHARP_,a,b));
});
var fexpr__67052 = (self__.st[(1)]);
return (fexpr__67052.cljs$core$IFn$_invoke$arity$1 ? fexpr__67052.cljs$core$IFn$_invoke$arity$1(G__67053) : fexpr__67052.call(null,G__67053));
}));

(nextjournal.clerk.render.hooks.WrappedState.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__67056 = (function (p1__67016_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__67016_SHARP_,a,b,xs);
});
var fexpr__67055 = (self__.st[(1)]);
return (fexpr__67055.cljs$core$IFn$_invoke$arity$1 ? fexpr__67055.cljs$core$IFn$_invoke$arity$1(G__67056) : fexpr__67055.call(null,G__67056));
}));

(nextjournal.clerk.render.hooks.WrappedState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"st","st",-1199179941,null)], null);
}));

(nextjournal.clerk.render.hooks.WrappedState.cljs$lang$type = true);

(nextjournal.clerk.render.hooks.WrappedState.cljs$lang$ctorStr = "nextjournal.clerk.render.hooks/WrappedState");

(nextjournal.clerk.render.hooks.WrappedState.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"nextjournal.clerk.render.hooks/WrappedState");
}));

/**
 * Positional factory function for nextjournal.clerk.render.hooks/WrappedState.
 */
nextjournal.clerk.render.hooks.__GT_WrappedState = (function nextjournal$clerk$render$hooks$__GT_WrappedState(st){
return (new nextjournal.clerk.render.hooks.WrappedState(st));
});

nextjournal.clerk.render.hooks.as_array = (function nextjournal$clerk$render$hooks$as_array(x){
var G__67057 = x;
if((!(cljs.core.array_QMARK_(x)))){
return cljs.core.to_array(G__67057);
} else {
return G__67057;
}
});
/**
 * React hook: useMemo. Defaults to an empty `deps` array.
 */
nextjournal.clerk.render.hooks.use_memo = (function nextjournal$clerk$render$hooks$use_memo(var_args){
var G__67062 = arguments.length;
switch (G__67062) {
case 1:
return nextjournal.clerk.render.hooks.use_memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.hooks.use_memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.hooks.use_memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useMemo(f,[]);
}));

(nextjournal.clerk.render.hooks.use_memo.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useMemo(f,nextjournal.clerk.render.hooks.as_array(deps));
}));

(nextjournal.clerk.render.hooks.use_memo.cljs$lang$maxFixedArity = 2);

/**
 * React hook: useCallback. Defaults to an empty `deps` array.
 */
nextjournal.clerk.render.hooks.use_callback = (function nextjournal$clerk$render$hooks$use_callback(var_args){
var G__67068 = arguments.length;
switch (G__67068) {
case 1:
return nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1 = (function (x){
return nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$2(x,[]);
}));

(nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$2 = (function (x,deps){
return module$node_modules$react$index.useCallback(x,cljs.core.to_array(deps));
}));

(nextjournal.clerk.render.hooks.use_callback.cljs$lang$maxFixedArity = 2);

nextjournal.clerk.render.hooks.wrap_effect = (function nextjournal$clerk$render$hooks$wrap_effect(f){
return (function (){
var v = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(v)){
return v;
} else {
return undefined;
}
});
});
/**
 * React hook: useEffect. Defaults to an empty `deps` array.
 * Wraps `f` to return js/undefined for any non-function value.
 */
nextjournal.clerk.render.hooks.use_effect = (function nextjournal$clerk$render$hooks$use_effect(var_args){
var G__67072 = arguments.length;
switch (G__67072) {
case 1:
return nextjournal.clerk.render.hooks.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.hooks.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.hooks.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(nextjournal.clerk.render.hooks.wrap_effect(f),[]);
}));

(nextjournal.clerk.render.hooks.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useEffect(nextjournal.clerk.render.hooks.wrap_effect(f),nextjournal.clerk.render.hooks.as_array(deps));
}));

(nextjournal.clerk.render.hooks.use_effect.cljs$lang$maxFixedArity = 2);

/**
 * React hook: useLayoutEffect. Defaults to an empty `deps` array.
 * Wraps `f` to return js/undefined for any non-function value.
 */
nextjournal.clerk.render.hooks.use_layout_effect = (function nextjournal$clerk$render$hooks$use_layout_effect(var_args){
var G__67074 = arguments.length;
switch (G__67074) {
case 1:
return nextjournal.clerk.render.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clerk.render.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useLayoutEffect(nextjournal.clerk.render.hooks.wrap_effect(f),[]);
}));

(nextjournal.clerk.render.hooks.use_layout_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useLayoutEffect(nextjournal.clerk.render.hooks.wrap_effect(f),nextjournal.clerk.render.hooks.as_array(deps));
}));

(nextjournal.clerk.render.hooks.use_layout_effect.cljs$lang$maxFixedArity = 2);

/**
 * React hook: useState. Can be used like react/useState but also behaves like an atom.
 */
nextjournal.clerk.render.hooks.use_state = (function nextjournal$clerk$render$hooks$use_state(init){
return (new nextjournal.clerk.render.hooks.WrappedState(module$node_modules$react$index.useState(init)));
});
nextjournal.clerk.render.hooks.specify_atom_BANG_ = (function nextjournal$clerk$render$hooks$specify_atom_BANG_(ref_obj){
var x67077 = ref_obj;
(x67077.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x67077.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x67077.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x67077.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var this$__$1 = this;
(this$__$1.current = new_value);

return new_value;
}));

(x67077.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x67077.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (o,f){
var o__$1 = this;
return cljs.core.reset_BANG_(o__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(o__$1) : f.call(null,o__$1)));
}));

(x67077.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (o,f,a){
var o__$1 = this;
return cljs.core.reset_BANG_(o__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(o__$1,a) : f.call(null,o__$1,a)));
}));

(x67077.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (o,f,a,b){
var o__$1 = this;
return cljs.core.reset_BANG_(o__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(o__$1,a,b) : f.call(null,o__$1,a,b)));
}));

(x67077.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (o,f,a,b,xs){
var o__$1 = this;
return cljs.core.reset_BANG_(o__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,o__$1,a,b,xs));
}));

return x67077;
});
/**
 * React hook: useRef. Can also be used like an atom.
 */
nextjournal.clerk.render.hooks.use_ref = (function nextjournal$clerk$render$hooks$use_ref(var_args){
var G__67086 = arguments.length;
switch (G__67086) {
case 0:
return nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$0 = (function (){
return nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(null);
}));

(nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1 = (function (init){
return nextjournal.clerk.render.hooks.specify_atom_BANG_(module$node_modules$react$index.useRef(init));
}));

(nextjournal.clerk.render.hooks.use_ref.cljs$lang$maxFixedArity = 1);

/**
 * Invoke (f x) if f is a function, otherwise return f
 */
nextjournal.clerk.render.hooks.eval_fn = (function nextjournal$clerk$render$hooks$eval_fn(f,x){
if(cljs.core.fn_QMARK_(f)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
} else {
return f;
}
});
nextjournal.clerk.render.hooks.use_force_update = (function nextjournal$clerk$render$hooks$use_force_update(){
return (module$node_modules$react$index.useReducer(cljs.core.inc,(0))[(1)]);
});
/**
 * React hook: like `use-state` but will reset state to `init` when `deps` change.
 *   - init may be a function, receiving previous state
 *   - deps will be compared using clojure =
 */
nextjournal.clerk.render.hooks.use_state_with_deps = (function nextjournal$clerk$render$hooks$use_state_with_deps(init,deps){
var _BANG_state = nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(nextjournal.clerk.render.hooks.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return nextjournal.clerk.render.hooks.eval_fn(init,null);
})));
var _BANG_prev_deps = nextjournal.clerk.render.hooks.use_ref.cljs$core$IFn$_invoke$arity$1(deps);
var _ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(deps,cljs.core.deref(_BANG_prev_deps)))?null:(function (){
cljs.core.reset_BANG_(_BANG_state,nextjournal.clerk.render.hooks.eval_fn(init,cljs.core.deref(_BANG_state)));

return cljs.core.reset_BANG_(_BANG_prev_deps,deps);
})()
);
var force_update_BANG_ = nextjournal.clerk.render.hooks.use_force_update();
var update_fn = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1((function (x){
var prev_state = cljs.core.deref(_BANG_state);
var next_state = nextjournal.clerk.render.hooks.eval_fn(x,prev_state);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_state,next_state)){
cljs.core.reset_BANG_(_BANG_state,next_state);

(force_update_BANG_.cljs$core$IFn$_invoke$arity$0 ? force_update_BANG_.cljs$core$IFn$_invoke$arity$0() : force_update_BANG_.call(null));
} else {
}

return next_state;
}));
return (new nextjournal.clerk.render.hooks.WrappedState([cljs.core.deref(_BANG_state),update_fn]));
});
nextjournal.clerk.render.hooks.use_sync_external_store = (function nextjournal$clerk$render$hooks$use_sync_external_store(subscribe,get_snapshot){
return module$node_modules$use_sync_external_store$shim$index.useSyncExternalStore(subscribe,get_snapshot);
});
/**
 * Hook for reading value of an IWatchable. Compatible with reading Reagent reactions non-reactively.
 */
nextjournal.clerk.render.hooks.use_watch = (function nextjournal$clerk$render$hooks$use_watch(x){
var id = nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$1(({}));
return nextjournal.clerk.render.hooks.use_sync_external_store(nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$2((function (changed_BANG_){
cljs.core.add_watch(x,id,(function (_,___$1,___$2,___$3){
return (changed_BANG_.cljs$core$IFn$_invoke$arity$0 ? changed_BANG_.cljs$core$IFn$_invoke$arity$0() : changed_BANG_.call(null));
}));

return (function (){
return cljs.core.remove_watch(x,id);
});
}),[x]),(function (){
var _STAR_ratom_context_STAR__orig_val__67107 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__67108 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__67108);

try{return cljs.core.deref(x);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__67107);
}}));
});
nextjournal.clerk.render.hooks.use_error_handler = (function nextjournal$clerk$render$hooks$use_error_handler(){
var vec__67109 = nextjournal.clerk.render.hooks.use_state(null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67109,(0),null);
var set_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67109,(1),null);
return nextjournal.clerk.render.hooks.use_callback.cljs$core$IFn$_invoke$arity$2((function (error){
var G__67112 = (function (){
throw error;
});
return (set_error.cljs$core$IFn$_invoke$arity$1 ? set_error.cljs$core$IFn$_invoke$arity$1(G__67112) : set_error.call(null,G__67112));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [set_error], null));
});
/**
 * React hook which resolves a promise and handles errors.
 */
nextjournal.clerk.render.hooks.use_promise = (function nextjournal$clerk$render$hooks$use_promise(p){
var handle_error = nextjournal.clerk.render.hooks.use_error_handler();
var _BANG_state = nextjournal.clerk.render.hooks.use_state(null);
nextjournal.clerk.render.hooks.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return p.then((function (p1__67114_SHARP_){
return cljs.core.reset_BANG_(_BANG_state,p1__67114_SHARP_);
})).catch(handle_error);
}),[]);

return cljs.core.deref(_BANG_state);
});
nextjournal.clerk.render.hooks.use_d3_require = (function nextjournal$clerk$render$hooks$use_d3_require(package$){
var p = module$node_modules$react$index.useMemo((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$d3_require$dist$d3_require.require,(function (){var G__67123 = package$;
if(typeof package$ === 'string'){
return (new cljs.core.List(null,G__67123,null,(1),null));
} else {
return G__67123;
}
})());
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$)]);
return nextjournal.clerk.render.hooks.use_promise(p);
});

//# sourceMappingURL=nextjournal.clerk.render.hooks.js.map