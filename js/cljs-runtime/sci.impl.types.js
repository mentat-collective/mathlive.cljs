import "./cljs_env.js";
goog.provide('sci.impl.types');

/**
 * @interface
 */
sci.impl.types.IBox = function(){};

var sci$impl$types$IBox$setVal$dyn_68433 = (function (_this,_v){
var x__4550__auto__ = (((_this == null))?null:_this);
var m__4551__auto__ = (sci.impl.types.setVal[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(_this,_v) : m__4551__auto__.call(null,_this,_v));
} else {
var m__4549__auto__ = (sci.impl.types.setVal["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(_this,_v) : m__4549__auto__.call(null,_this,_v));
} else {
throw cljs.core.missing_protocol("IBox.setVal",_this);
}
}
});
sci.impl.types.setVal = (function sci$impl$types$setVal(_this,_v){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$setVal$arity$2 == null)))))){
return _this.sci$impl$types$IBox$setVal$arity$2(_this,_v);
} else {
return sci$impl$types$IBox$setVal$dyn_68433(_this,_v);
}
});

var sci$impl$types$IBox$getVal$dyn_68436 = (function (_this){
var x__4550__auto__ = (((_this == null))?null:_this);
var m__4551__auto__ = (sci.impl.types.getVal[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_this) : m__4551__auto__.call(null,_this));
} else {
var m__4549__auto__ = (sci.impl.types.getVal["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_this) : m__4549__auto__.call(null,_this));
} else {
throw cljs.core.missing_protocol("IBox.getVal",_this);
}
}
});
sci.impl.types.getVal = (function sci$impl$types$getVal(_this){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$getVal$arity$1 == null)))))){
return _this.sci$impl$types$IBox$getVal$arity$1(_this);
} else {
return sci$impl$types$IBox$getVal$dyn_68436(_this);
}
});


/**
 * @interface
 */
sci.impl.types.IReified = function(){};

var sci$impl$types$IReified$getInterfaces$dyn_68444 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sci.impl.types.getInterfaces[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sci.impl.types.getInterfaces["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IReified.getInterfaces",_);
}
}
});
sci.impl.types.getInterfaces = (function sci$impl$types$getInterfaces(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getInterfaces$arity$1 == null)))))){
return _.sci$impl$types$IReified$getInterfaces$arity$1(_);
} else {
return sci$impl$types$IReified$getInterfaces$dyn_68444(_);
}
});

var sci$impl$types$IReified$getMethods$dyn_68447 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sci.impl.types.getMethods[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sci.impl.types.getMethods["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IReified.getMethods",_);
}
}
});
sci.impl.types.getMethods = (function sci$impl$types$getMethods(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getMethods$arity$1 == null)))))){
return _.sci$impl$types$IReified$getMethods$arity$1(_);
} else {
return sci$impl$types$IReified$getMethods$dyn_68447(_);
}
});

var sci$impl$types$IReified$getProtocols$dyn_68451 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sci.impl.types.getProtocols[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sci.impl.types.getProtocols["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IReified.getProtocols",_);
}
}
});
sci.impl.types.getProtocols = (function sci$impl$types$getProtocols(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getProtocols$arity$1 == null)))))){
return _.sci$impl$types$IReified$getProtocols$arity$1(_);
} else {
return sci$impl$types$IReified$getProtocols$dyn_68451(_);
}
});


/**
* @constructor
 * @implements {sci.impl.types.IReified}
*/
sci.impl.types.Reified = (function (interfaces,meths,protocols){
this.interfaces = interfaces;
this.meths = meths;
this.protocols = protocols;
});
(sci.impl.types.Reified.prototype.sci$impl$types$IReified$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getInterfaces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.interfaces;
}));

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getMethods$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meths;
}));

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getProtocols$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.protocols;
}));

(sci.impl.types.Reified.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"interfaces","interfaces",1469182407,null),new cljs.core.Symbol(null,"meths","meths",1226876764,null),new cljs.core.Symbol(null,"protocols","protocols",1634915631,null)], null);
}));

(sci.impl.types.Reified.cljs$lang$type = true);

(sci.impl.types.Reified.cljs$lang$ctorStr = "sci.impl.types/Reified");

(sci.impl.types.Reified.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sci.impl.types/Reified");
}));

/**
 * Positional factory function for sci.impl.types/Reified.
 */
sci.impl.types.__GT_Reified = (function sci$impl$types$__GT_Reified(interfaces,meths,protocols){
return (new sci.impl.types.Reified(interfaces,meths,protocols));
});


/**
 * @interface
 */
sci.impl.types.SciTypeInstance = function(){};

var sci$impl$types$SciTypeInstance$_get_type$dyn_68453 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sci.impl.types._get_type[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sci.impl.types._get_type["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("SciTypeInstance.-get-type",_);
}
}
});
sci.impl.types._get_type = (function sci$impl$types$_get_type(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$SciTypeInstance$_get_type$arity$1 == null)))))){
return _.sci$impl$types$SciTypeInstance$_get_type$arity$1(_);
} else {
return sci$impl$types$SciTypeInstance$_get_type$dyn_68453(_);
}
});

var sci$impl$types$SciTypeInstance$_mutate$dyn_68455 = (function (_,k,v){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sci.impl.types._mutate[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(_,k,v) : m__4551__auto__.call(null,_,k,v));
} else {
var m__4549__auto__ = (sci.impl.types._mutate["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(_,k,v) : m__4549__auto__.call(null,_,k,v));
} else {
throw cljs.core.missing_protocol("SciTypeInstance.-mutate",_);
}
}
});
sci.impl.types._mutate = (function sci$impl$types$_mutate(_,k,v){
if((((!((_ == null)))) && ((!((_.sci$impl$types$SciTypeInstance$_mutate$arity$3 == null)))))){
return _.sci$impl$types$SciTypeInstance$_mutate$arity$3(_,k,v);
} else {
return sci$impl$types$SciTypeInstance$_mutate$dyn_68455(_,k,v);
}
});

/**
 * Must be varargs because used in multimethods
 *   Only for internal use!
 */
sci.impl.types.type_impl = (function sci$impl$types$type_impl(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68456 = arguments.length;
var i__4865__auto___68457 = (0);
while(true){
if((i__4865__auto___68457 < len__4864__auto___68456)){
args__4870__auto__.push((arguments[i__4865__auto___68457]));

var G__68458 = (i__4865__auto___68457 + (1));
i__4865__auto___68457 = G__68458;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sci.impl.types.type_impl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sci.impl.types.type_impl.cljs$core$IFn$_invoke$arity$variadic = (function (x,_){
var or__4253__auto__ = (((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.sci$impl$types$IReified$))))?true:false):false))?new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396):null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.sci$impl$types$SciTypeInstance$))))?true:false):false))?x.sci$impl$types$SciTypeInstance$_get_type$arity$1(null):null);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = (function (){var G__68367 = x;
var G__68367__$1 = (((G__68367 == null))?null:cljs.core.meta(G__68367));
if((G__68367__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__68367__$1);
}
})();
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return cljs.core.type(x);
}
}
}
}));

(sci.impl.types.type_impl.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.types.type_impl.cljs$lang$applyTo = (function (seq68355){
var G__68356 = cljs.core.first(seq68355);
var seq68355__$1 = cljs.core.next(seq68355);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68356,seq68355__$1);
}));

/**
 * Externally available type implementation.
 */
sci.impl.types.type_impl2 = (function sci$impl$types$type_impl2(x){
var or__4253__auto__ = (((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.sci$impl$types$SciTypeInstance$))))?true:false):false))?x.sci$impl$types$SciTypeInstance$_get_type$arity$1(null):null);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var G__68386 = x;
var G__68386__$1 = (((G__68386 == null))?null:cljs.core.meta(G__68386));
if((G__68386__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__68386__$1);
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.type(x);
}
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.types.EvalForm = (function (form){
this.form = form;
});
(sci.impl.types.EvalForm.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalForm.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.form;
}));

(sci.impl.types.EvalForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null)], null);
}));

(sci.impl.types.EvalForm.cljs$lang$type = true);

(sci.impl.types.EvalForm.cljs$lang$ctorStr = "sci.impl.types/EvalForm");

(sci.impl.types.EvalForm.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"sci.impl.types/EvalForm");
}));

/**
 * Positional factory function for sci.impl.types/EvalForm.
 */
sci.impl.types.__GT_EvalForm = (function sci$impl$types$__GT_EvalForm(form){
return (new sci.impl.types.EvalForm(form));
});


/**
 * @interface
 */
sci.impl.types.Stack = function(){};

var sci$impl$types$Stack$stack$dyn_68459 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (sci.impl.types.stack[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (sci.impl.types.stack["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Stack.stack",this$);
}
}
});
sci.impl.types.stack = (function sci$impl$types$stack(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$types$Stack$stack$arity$1 == null)))))){
return this$.sci$impl$types$Stack$stack$arity$1(this$);
} else {
return sci$impl$types$Stack$stack$dyn_68459(this$);
}
});

(sci.impl.types.Stack["_"] = true);

(sci.impl.types.stack["_"] = (function (_this){
return null;
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {sci.impl.types.Stack}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.types.NodeR = (function (f,stack,__meta,__extmap,__hash){
this.f = f;
this.stack = stack;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.types.NodeR.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(sci.impl.types.NodeR.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k68396,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__68400 = k68396;
var G__68400__$1 = (((G__68400 instanceof cljs.core.Keyword))?G__68400.fqn:null);
switch (G__68400__$1) {
case "f":
return self__.f;

break;
case "stack":
return self__.stack;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68396,else__4505__auto__);

}
}));

(sci.impl.types.NodeR.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__68401){
var vec__68402 = p__68401;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68402,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68402,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(sci.impl.types.NodeR.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#sci.impl.types.NodeR{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null))], null),self__.__extmap));
}));

(sci.impl.types.NodeR.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68395){
var self__ = this;
var G__68395__$1 = this;
return (new cljs.core.RecordIter((0),G__68395__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.types.NodeR.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.types.NodeR.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new sci.impl.types.NodeR(self__.f,self__.stack,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.types.NodeR.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(sci.impl.types.NodeR.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (256596302 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(sci.impl.types.NodeR.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68397,other68398){
var self__ = this;
var this68397__$1 = this;
return (((!((other68398 == null)))) && ((((this68397__$1.constructor === other68398.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68397__$1.f,other68398.f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68397__$1.stack,other68398.stack)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68397__$1.__extmap,other68398.__extmap)))))))));
}));

(sci.impl.types.NodeR.prototype.sci$impl$types$Stack$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.NodeR.prototype.sci$impl$types$Stack$stack$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.stack;
}));

(sci.impl.types.NodeR.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new sci.impl.types.NodeR(self__.f,self__.stack,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(sci.impl.types.NodeR.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k68396){
var self__ = this;
var this__4509__auto____$1 = this;
var G__68406 = k68396;
var G__68406__$1 = (((G__68406 instanceof cljs.core.Keyword))?G__68406.fqn:null);
switch (G__68406__$1) {
case "f":
case "stack":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k68396);

}
}));

(sci.impl.types.NodeR.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__68395){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__68409 = cljs.core.keyword_identical_QMARK_;
var expr__68410 = k__4511__auto__;
if(cljs.core.truth_((pred__68409.cljs$core$IFn$_invoke$arity$2 ? pred__68409.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__68410) : pred__68409.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__68410)))){
return (new sci.impl.types.NodeR(G__68395,self__.stack,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68409.cljs$core$IFn$_invoke$arity$2 ? pred__68409.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stack","stack",-793405930),expr__68410) : pred__68409.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),expr__68410)))){
return (new sci.impl.types.NodeR(self__.f,G__68395,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.types.NodeR(self__.f,self__.stack,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__68395),null));
}
}
}));

(sci.impl.types.NodeR.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack,null))], null),self__.__extmap));
}));

(sci.impl.types.NodeR.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__68395){
var self__ = this;
var this__4501__auto____$1 = this;
return (new sci.impl.types.NodeR(self__.f,self__.stack,G__68395,self__.__extmap,self__.__hash));
}));

(sci.impl.types.NodeR.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(sci.impl.types.NodeR.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"stack","stack",847125597,null)], null);
}));

(sci.impl.types.NodeR.cljs$lang$type = true);

(sci.impl.types.NodeR.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"sci.impl.types/NodeR",null,(1),null));
}));

(sci.impl.types.NodeR.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"sci.impl.types/NodeR");
}));

/**
 * Positional factory function for sci.impl.types/NodeR.
 */
sci.impl.types.__GT_NodeR = (function sci$impl$types$__GT_NodeR(f,stack){
return (new sci.impl.types.NodeR(f,stack,null,null,null));
});

/**
 * Factory function for sci.impl.types/NodeR, taking a map of keywords to field values.
 */
sci.impl.types.map__GT_NodeR = (function sci$impl$types$map__GT_NodeR(G__68399){
var extmap__4542__auto__ = (function (){var G__68421 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68399,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stack","stack",-793405930)], 0));
if(cljs.core.record_QMARK_(G__68399)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68421);
} else {
return G__68421;
}
})();
return (new sci.impl.types.NodeR(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__68399),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__68399),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

sci.impl.types.eval = (function sci$impl$types$eval(expr,ctx,bindings){
if((expr instanceof sci.impl.types.NodeR)){
var fexpr__68423 = expr.f;
return (fexpr__68423.cljs$core$IFn$_invoke$arity$3 ? fexpr__68423.cljs$core$IFn$_invoke$arity$3(expr,ctx,bindings) : fexpr__68423.call(null,expr,ctx,bindings));
} else {
return expr;
}
});
sci.impl.types.__GT_constant = (function sci$impl$types$__GT_constant(x){
return x;
});

/**
 * @interface
 */
sci.impl.types.HasName = function(){};

var sci$impl$types$HasName$getName$dyn_68478 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (sci.impl.types.getName[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (sci.impl.types.getName["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("HasName.getName",_);
}
}
});
sci.impl.types.getName = (function sci$impl$types$getName(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$HasName$getName$arity$1 == null)))))){
return _.sci$impl$types$HasName$getName$arity$1(_);
} else {
return sci$impl$types$HasName$getName$dyn_68478(_);
}
});


//# sourceMappingURL=sci.impl.types.js.map