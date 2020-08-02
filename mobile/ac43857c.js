let e,t,o,a,i,r,n,s,l,c,d,p,h,b,u,g,m,v,y,f,x,w,_,k,S,E,$,C,I,z,A,L,V,F,P,T,M,R,B,N,O,H,D,j,U,q,W,Z,G,K,X,J,Y,Q,ee,te,oe,ae,ie,re,ne,se,le,ce,de,pe,he,be,ue,ge,me,ve,ye,fe,xe,we,_e,ke,Se,Ee,$e,Ce,Ie,ze,Ae,Le,Ve,Fe,Pe,Te,Me,Re,Be,Ne,Oe,He,De,je,Ue,qe,We,Ze,Ge,Ke,Xe,Je,Ye,Qe,et,tt,ot,at,it,rt,nt,st,lt,ct,dt,pt,ht,bt,ut,gt,mt,vt,yt,ft,xt,wt,_t,kt,St,Et,$t,Ct,It,zt,At,Lt,Vt,Ft,Pt,Tt,Mt,Rt,Bt,Nt,Ot,Ht,Dt,jt,Ut,qt,Wt,Zt,Gt,Kt,Xt,Jt,Yt,Qt,eo,to,oo,ao,io,ro,no,so,lo,co,po,ho,bo,uo,go,mo,vo,yo,fo,xo,wo,_o,ko,So,Eo,$o,Co,Io,zo,Ao,Lo,Vo,Fo,Po,To,Mo,Ro,Bo,No,Oo,Ho,Do,jo,Uo,qo,Wo,Zo,Go,Ko,Xo,Jo,Yo,Qo,ea,ta,oa,aa,ia,ra,na,sa,la,ca,da,pa,ha,ba,ua,ga,ma,va,ya,fa,xa,wa,_a,ka,Sa,Ea,$a,Ca,Ia,za,Aa,La,Va,Fa,Pa,Ta,Ma,Ra,Ba,Na,Oa,Ha,Da,ja,Ua,qa,Wa,Za,Ga,Ka,Xa,Ja,Ya,Qa,ei,ti,oi,ai,ii,ri,ni,si,li,ci=e=>e;const di="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,pi=(e,t,o=null,a=null)=>{for(;t!==o;){const o=t.nextSibling;e.insertBefore(t,a),t=o}},hi=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},bi=`{{lit-${String(Math.random()).slice(2)}}}`,ui=`\x3c!--${bi}--\x3e`,gi=new RegExp(`${bi}|${ui}`);class mi{constructor(e,t){this.parts=[],this.element=t;const o=[],a=[],i=document.createTreeWalker(t.content,133,null,!1);let r=0,n=-1,s=0;const{strings:l,values:{length:c}}=e;for(;s<c;){const e=i.nextNode();if(null!==e){if(n++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let a=0;for(let e=0;e<o;e++)vi(t[e].name,"$lit$")&&a++;for(;a-- >0;){const t=l[s],o=xi.exec(t)[2],a=o.toLowerCase()+"$lit$",i=e.getAttribute(a);e.removeAttribute(a);const r=i.split(gi);this.parts.push({type:"attribute",index:n,name:o,strings:r}),s+=r.length-1}}"TEMPLATE"===e.tagName&&(a.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(bi)>=0){const a=e.parentNode,i=t.split(gi),r=i.length-1;for(let t=0;t<r;t++){let o,r=i[t];if(""===r)o=fi();else{const e=xi.exec(r);null!==e&&vi(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),o=document.createTextNode(r)}a.insertBefore(o,e),this.parts.push({type:"node",index:++n})}""===i[r]?(a.insertBefore(fi(),e),o.push(e)):e.data=i[r],s+=r}}else if(8===e.nodeType)if(e.data===bi){const t=e.parentNode;null!==e.previousSibling&&n!==r||(n++,t.insertBefore(fi(),e)),r=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(o.push(e),n--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(bi,t+1));)this.parts.push({type:"node",index:-1}),s++}}else i.currentNode=a.pop()}for(const e of o)e.parentNode.removeChild(e)}}const vi=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},yi=e=>-1!==e.index,fi=()=>document.createComment(""),xi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function wi(e,t){const{element:{content:o},parts:a}=e,i=document.createTreeWalker(o,133,null,!1);let r=ki(a),n=a[r],s=-1,l=0;const c=[];let d=null;for(;i.nextNode();){s++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==n&&n.index===s;)n.index=null!==d?-1:n.index-l,r=ki(a,r),n=a[r]}c.forEach(e=>e.parentNode.removeChild(e))}const _i=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},ki=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(yi(t))return o}return-1};const Si=new WeakMap,Ei=e=>(...t)=>{const o=e(...t);return Si.set(o,!0),o},$i=e=>"function"==typeof e&&Si.has(e),Ci={},Ii={};class zi{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=di?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let i,r=0,n=0,s=a.nextNode();for(;r<o.length;)if(i=o[r],yi(i)){for(;n<i.index;)n++,"TEMPLATE"===s.nodeName&&(t.push(s),a.currentNode=s.content),null===(s=a.nextNode())&&(a.currentNode=t.pop(),s=a.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return di&&(document.adoptNode(e),customElements.upgrade(e)),e}}const Ai=` ${bi} `;class Li{constructor(e,t,o,a){this.strings=e,this.values=t,this.type=o,this.processor=a}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let a=0;a<e;a++){const e=this.strings[a],i=e.lastIndexOf("\x3c!--");o=(i>-1||o)&&-1===e.indexOf("--\x3e",i+1);const r=xi.exec(e);t+=null===r?e+(o?Ai:ui):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+bi}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Vi extends Li{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,o=t.firstChild;return t.removeChild(o),pi(t,o.firstChild),e}}const Fi=e=>null===e||!("object"==typeof e||"function"==typeof e),Pi=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Ti{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Mi(this)}_getValue(){const e=this.strings,t=e.length-1;let o="";for(let a=0;a<t;a++){o+=e[a];const t=this.parts[a];if(void 0!==t){const e=t.value;if(Fi(e)||!Pi(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Mi{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Ci||Fi(e)&&e===this.value||(this.value=e,$i(e)||(this.committer.dirty=!0))}commit(){for(;$i(this.value);){const e=this.value;this.value=Ci,e(this)}this.value!==Ci&&this.committer.commit()}}class Ri{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(fi()),this.endNode=e.appendChild(fi())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=fi()),e.__insert(this.endNode=fi())}insertAfterPart(e){e.__insert(this.startNode=fi()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;$i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Ci,e(this)}const e=this.__pendingValue;e!==Ci&&(Fi(e)?e!==this.value&&this.__commitText(e):e instanceof Li?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Pi(e)?this.__commitIterable(e):e===Ii?(this.value=Ii,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof zi&&this.value.template===t)this.value.update(e.values);else{const o=new zi(t,e.processor,this.options),a=o._clone();o.update(e.values),this.__commitNode(a),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,a=0;for(const i of e)o=t[a],void 0===o&&(o=new Ri(this.options),t.push(o),0===a?o.appendIntoPart(this):o.insertAfterPart(t[a-1])),o.setValue(i),o.commit(),a++;a<t.length&&(t.length=a,this.clear(o&&o.endNode))}clear(e=this.startNode){hi(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Bi{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;$i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Ci,e(this)}if(this.__pendingValue===Ci)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Ci}}class Ni extends Ti{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new Oi(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Oi extends Mi{}let Hi=!1;(()=>{try{const e={get capture(){return Hi=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class Di{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;$i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Ci,e(this)}if(this.__pendingValue===Ci)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),a=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=ji(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Ci}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ji=e=>e&&(Hi?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function Ui(e){let t=qi.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},qi.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(bi);return o=t.keyString.get(a),void 0===o&&(o=new mi(e,e.getTemplateElement()),t.keyString.set(a,o)),t.stringsArray.set(e.strings,o),o}const qi=new Map,Wi=new WeakMap;const Zi=new class{handleAttributeExpressions(e,t,o,a){const i=t[0];if("."===i){return new Ni(e,t.slice(1),o).parts}return"@"===i?[new Di(e,t.slice(1),a.eventContext)]:"?"===i?[new Bi(e,t.slice(1),o)]:new Ti(e,t,o).parts}handleTextExpression(e){return new Ri(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Gi=(e,...t)=>new Li(e,t,"html",Zi),Ki=(e,...t)=>new Vi(e,t,"svg",Zi),Xi=(e,t)=>`${e}--${t}`;let Ji=!0;void 0===window.ShadyCSS?Ji=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ji=!1);const Yi=e=>t=>{const o=Xi(t.type,e);let a=qi.get(o);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},qi.set(o,a));let i=a.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(bi);if(i=a.keyString.get(r),void 0===i){const o=t.getTemplateElement();Ji&&window.ShadyCSS.prepareTemplateDom(o,e),i=new mi(t,o),a.keyString.set(r,i)}return a.stringsArray.set(t.strings,i),i},Qi=["html","svg"],er=new Set,tr=(e,t,o)=>{er.add(e);const a=o?o.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(a,e);const n=document.createElement("style");for(let e=0;e<r;e++){const t=i[e];t.parentNode.removeChild(t),n.textContent+=t.textContent}(e=>{Qi.forEach(t=>{const o=qi.get(Xi(t,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{o.add(e)}),wi(e,o)})})})(e);const s=a.content;o?function(e,t,o=null){const{element:{content:a},parts:i}=e;if(null==o)return void a.appendChild(t);const r=document.createTreeWalker(a,133,null,!1);let n=ki(i),s=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===o&&(s=_i(t),o.parentNode.insertBefore(t,o));-1!==n&&i[n].index===l;){if(s>0){for(;-1!==n;)i[n].index+=s,n=ki(i,n);return}n=ki(i,n)}}}(o,n,s.firstChild):s.insertBefore(n,s.firstChild),window.ShadyCSS.prepareTemplateStyles(a,e);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(o){s.insertBefore(n,s.firstChild);const e=new Set;e.add(n),wi(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const or={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ar=(e,t)=>t!==e&&(t==t||e==e),ir={attribute:!0,type:String,converter:or,reflect:!1,hasChanged:ar};class rr extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,o)=>{const a=this._attributeNameForProperty(o,t);void 0!==a&&(this._attributeToPropertyMap.set(a,o),e.push(a))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=ir){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,o,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this._requestUpdate(e,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ir}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=ar){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,a=t.converter||or,i="function"==typeof a?a:a.fromAttribute;return i?i(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,a=t.converter;return(a&&a.toAttribute||or.toAttribute)(e,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=ir){const a=this.constructor,i=a._attributeNameForProperty(e,o);if(void 0!==i){const e=a._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,a=o._attributeToPropertyMap.get(e);if(void 0!==a){const e=o.getPropertyOptions(a);this._updateState=16|this._updateState,this[a]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let o=!0;if(void 0!==e){const a=this.constructor,i=a.getPropertyOptions(e);a._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}rr.finalized=!0;const nr="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sr=Symbol();class lr{constructor(e,t){if(t!==sr)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(nr?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const cr=(e,...t)=>{const o=t.reduce((t,o,a)=>t+(e=>{if(e instanceof lr)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[a+1],e[0]);return new lr(o,sr)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const dr={};class pr extends rr{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,o)=>e.reduceRight((e,o)=>Array.isArray(o)?t(o,e):(e.add(o),e),o),o=t(e,new Set),a=[];o.forEach(e=>a.unshift(e)),this._styles=a}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?nr?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==dr&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return dr}}pr.finalized=!0,pr.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const a=o.scopeName,i=Wi.has(t),r=Ji&&11===t.nodeType&&!!t.host,n=r&&!er.has(a),s=n?document.createDocumentFragment():t;if(((e,t,o)=>{let a=Wi.get(t);void 0===a&&(hi(t,t.firstChild),Wi.set(t,a=new Ri(Object.assign({templateFactory:Ui},o))),a.appendInto(t)),a.setValue(e),a.commit()})(e,s,Object.assign({templateFactory:Yi(a)},o)),n){const e=Wi.get(s);Wi.delete(s);const o=e.value instanceof zi?e.value.template:void 0;tr(a,s,o),hi(t,t.firstChild),t.appendChild(s),Wi.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)};class hr extends pr{get disabled(){return this._disabled}set disabled(e){const t=this.disabled;e!==t&&(this._disabled=e,e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false"),this.requestUpdate("disabled",t))}static get properties(){return{disabled:{type:Boolean,attribute:"disabled",reflect:!0},role:{type:String,attribute:"role",reflect:!0}}}constructor(){super(),this._disabled=!1,this.role=null}getCssVariableValue(e,t,o){let a=e.getPropertyValue(t);return a||o}fireMessage(e,t,o){const a=new CustomEvent(e,{bubbles:!0,composed:!0,cancelable:o,detail:t});return this.dispatchEvent(a)}}class br{constructor(e,t,o,a,i,r){this.name=e,this.primary=o,this.primaryLight=t,this.primaryDark=a,this.accent=i,this.window=r}}const ur=new class{constructor(){this.__themes={},this.create("default","#8e99f3","#5c6bc0","#26418f","#ec407a","#E0E0E0");let e=document.documentElement;e.style.setProperty("-webkit-tap-highlight-color","transparent"),e.style.setProperty("--obap-background-color","#FFFFFF"),e.style.setProperty("--obap-surface-color","#FFFFFF"),e.style.setProperty("--obap-error-color","#e53935"),e.style.setProperty("--obap-notification-color","#323232"),e.style.setProperty("--obap-selection-color","#E0E0E0"),e.style.setProperty("--obap-block-color","#ECECEC"),e.style.setProperty("--obap-inactive-color","#9E9E9E"),e.style.setProperty("--obap-on-primary-color","#FFFFFF"),e.style.setProperty("--obap-on-primary-inactive-color","rgba(255, 255, 255, 0.7)"),e.style.setProperty("--obap-on-accent-color","#FFFFFF"),e.style.setProperty("--obap-on-accent-inactive-color","rgba(255, 255, 255, 0.7)"),e.style.setProperty("--obap-on-background-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-surface-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-window-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-error-color","#FFFFFF"),e.style.setProperty("--obap-on-notification-color","rgba(255, 255, 255, 0.87)"),e.style.setProperty("--obap-on-selection-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-text-primary-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-text-secondary-color","rgba(0, 0, 0, 0.54)"),e.style.setProperty("--obap-text-hint-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-text-disabled-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-text-icon-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-divider-on-primary-color","rgba(255, 255, 255, 0.20)"),e.style.setProperty("--obap-divider-on-surface-color","rgba(0, 0, 0, 0.20)")}apply(e,t){let o=this.__themes[e];return t=t||document.documentElement,!!o&&(t.style.setProperty("--obap-primary-light-color",o.primaryLight),t.style.setProperty("--obap-primary-color",o.primary),t.style.setProperty("--obap-primary-dark-color",o.primaryDark),t.style.setProperty("--obap-accent-color",o.accent),o.window?t.style.setProperty("--obap-window-color",o.window):t.style.setProperty("--obap-window-color","#FAFAFA"),!0)}clear(e,t){if(t=t||!1,(e=e||document.documentElement).style.removeProperty("--obap-primary-light-color"),e.style.removeProperty("--obap-primary-color"),e.style.removeProperty("--obap-primary-dark-color"),e.style.removeProperty("--obap-accent-color"),e.style.removeProperty("--obap-window-color"),t){let e=document.documentElement;e.style.removeProperty("--obap-background-color"),e.style.removeProperty("--obap-surface-color"),e.style.removeProperty("--obap-error-color"),e.style.removeProperty("--obap-notification-color"),e.style.removeProperty("--obap-selection-color"),e.style.removeProperty("--obap-block-color"),e.style.removeProperty("--obap-inactive-color"),e.style.removeProperty("--obap-on-primary-color"),e.style.removeProperty("--obap-on-primary-inactive-color"),e.style.removeProperty("--obap-on-accent-color"),e.style.removeProperty("--obap-on-accent-inactive-color"),e.style.removeProperty("--obap-on-background-color"),e.style.removeProperty("--obap-on-surface-color"),e.style.removeProperty("--obap-on-window-color"),e.style.removeProperty("--obap-on-error-color"),e.style.removeProperty("--obap-on-notification-color"),e.style.removeProperty("--obap-on-selection-color"),e.style.removeProperty("--obap-text-primary-color"),e.style.removeProperty("--obap-text-secondary-color"),e.style.removeProperty("--obap-text-hint-color"),e.style.removeProperty("--obap-text-disabled-color"),e.style.removeProperty("--obap-text-icon-color"),e.style.removeProperty("--obap-divider-on-primary-color"),e.style.removeProperty("--obap-divider-on-surface-color")}}create(e,t,o,a,i,r){this.__themes[e]=new br(e,t,o,a,i,r)}getNames(){return Object.getOwnPropertyNames(this.__themes)}hasTheme(e){return this.getNames().indexOf(e)>-1}},gr=e=>class extends e{get theme(){return this._theme}set theme(e){const t=this.theme;if(e!==t){if(this._theme=e,this.shadowRoot){const e=this.shadowRoot.host;this.theme&&this.hasTheme(this.theme)?ur.apply(this.theme,e):(this._theme=null,ur.clear(e,!1))}else this._theme=null;this.requestUpdate("theme",t)}}static get properties(){return{theme:{type:String,attribute:"theme"}}}constructor(){super(),this._theme=null}setGlobalTheme(e){ur.apply(e)}getThemeNames(){return ur.getNames()}hasTheme(e){return ur.hasTheme(e)}};window.ObapRouter=window.ObapRouter||{},window.ObapRouter.launchParameters=window.ObapRouter.launchParameters||null;class mr{constructor(e,t,o){this.name=e,this.pattern=t,this.isDefault=o||!1}}const vr=e=>class extends e{static get properties(){return{routes:{type:Object},disableRouting:{type:Boolean,attribute:"disable-routing"}}}get currentRoute(){return this._currentRoute}set currentRoute(e){(this.currentRoute?this.currentRoute.name:"")!==(e?e.name:"")&&(this._currentRoute=e,this._popping||this.disableRouting||history.pushState(this._currentParameters,"",this._buildUrl()))}constructor(){super(),this.routes={},this.disableRouting=!1,this._defaultRouteName=null,this._path=null,this._currentRoute=null,window.ObapRouter.launchParameters=null,this._boundHandleOnPopStateEvent=this._handleOnPopStateEvent.bind(this),this._boundHandleChangeRouteEvent=this._handleChangeRouteEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.disableRouting||(window.addEventListener("popstate",this._boundHandleOnPopStateEvent),window.addEventListener("obap-change-route",this._boundHandleChangeRouteEvent))}disconnectedCallback(){window.removeEventListener("popstate",this._boundHandleOnPopStateEvent),window.removeEventListener("obap-change-route",this._boundHandleChangeRouteEvent),super.disconnectedCallback()}registerRoute(e){this.routes[e.name]=e,e.isDefault&&(this._defaultRouteName=e.name)}registerRoutes(e){e.forEach(e=>this.registerRoute(e))}setDefaultRoute(e){let t=this.getRoute(e);t&&(t.isDefault=!0,this._defaultRouteName=e)}unregisterRoute(e){delete this.routes[e]}getRoute(e){return this.routes[e]}navigateBack(){this.disableRouting||history.back()}navigateForward(){this.disableRouting||history.forward()}navigateToDefault(e){if(!this.disableRouting&&0!==this._getRouteCount())if(e){const e=this._getRouteFromUrl();this.setCurrentRoute(e.name)}else this._defaultRouteName&&this.setCurrentRoute(this._defaultRouteName)}setCurrentRoute(e){if(this.disableRouting)return;if(this.currentRoute&&this.currentRoute.name===e)return;let t=this.getRoute(e);t&&(this.currentRoute=t,this.onRouteChange&&this.onRouteChange(e))}_getRouteCount(){return Object.keys(this.routes).length}_mapRoute(e){if(e&&""===e.name){const t=Object.keys(this.routes);for(let o=0;o<t.length;o++){const a=this.routes[t[o]];if(a&&(a.pattern===e.pattern||""===e.pattern&&a.isDefault))return a}}return e}_setRouteFromUrl(){let e=location.hash.replace("#",""),t={};location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(e,o,a)=>t[o]=a),this._path=location.pathname;let o=new mr("",e);null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=t),this.currentRoute=this._mapRoute(o)}_getRouteFromUrl(){let e={},t=location.hash.replace("#","");return location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(t,o,a)=>e[o]=a),this._path=location.pathname,null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=e),this._mapRoute(new mr("",t))}_handleOnPopStateEvent(e){const t=this._getRouteFromUrl();t&&(this._popping=!0,this.setCurrentRoute(t.name),this._popping=!1)}_handleChangeRouteEvent(e){const t=e.detail.routeName;this.setCurrentRoute(t)}_buildUrl(){let e=location.origin+location.pathname;if(this.currentRoute&&this.currentRoute.name){if(window.ObapRouter.launchParameters){const t=Object.keys(window.ObapRouter.launchParameters),o=[];if(t&&t.length>0){for(let e=0;e<t.length;e++){const a=t[e];o.push(`${a}=${window.ObapRouter.launchParameters[a]}`)}e+="?"+o.join("&")}}this.currentRoute.isDefault||(e+="#"+this.currentRoute.pattern)}return e}},yr=e=>class extends(vr(gr(e))){static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},views:{type:Array},canChangeView:{type:Boolean}}}get selectedViewIndex(){return this._selectedViewIndex}set selectedViewIndex(e){const t=this.selectedViewIndex;if(t!==e){this._selectedViewIndex=e,this._previousViewIndex=t;const o=this.getSelectedView();o&&this.setCurrentRoute(o.name,null),this.requestUpdate("selectedViewIndex",t)}}constructor(){super(),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.views=[],this.label="untitled",this.icon="",this.defaultViewName=null,this._selectedViewIndex=null,this._previousViewIndex=null,this._navigatorCounts={},this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}updated(e){super.updated(e),e.forEach((e,t)=>{"views"===t&&this._registerViews()})}findView(e){return this.views.find(t=>t.name===e)}showView(e){const t=this.findView(e);t&&(this.selectedViewIndex=this.views.indexOf(t))}showDefaultView(){this.showView(this.defaultViewName)}canViewActivate(e){let t=null;return t=e?this.findView(e):this.views[this.selectedViewIndex],!t||t.canViewActivate()}canViewDeactivate(e){let t=null;return t=e?this.findView(e):this.views[this.selectedViewIndex],!t||t.canViewDeactivate()}showPreviousView(){let e=parseInt(this._previousViewIndex);e>=0?(this.selectedViewIndex=e,this._previousViewIndex=null):this.defaultViewName&&this.showView(this.defaultViewName)}getSelectedView(){let e=parseInt(this.selectedViewIndex);return e>=0?this.views[e]:null}getNavigatorViews(e){let t=this.views[this.selectedViewIndex];return t?this.views.filter(o=>o.navigators.indexOf(e)>-1&&(0===o.associations.length||o.associations.indexOf(t.name)>-1)):[]}getEffectiveDisplayTitle(){let e=this.getSelectedView();return e&&e.modal?e.label:this.label}isModalView(){let e=this.getSelectedView();return!(!e||!e.modal)}navigatorViewCount(e){return void 0!==this._navigatorCounts[e]?this._navigatorCounts[e]:0}onRouteChange(e){this.showView(e)}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot");if(!t)return;let o=t.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&"OBAP-APPLICATION-VIEW"===e.tagName);this.views.length!==o.length&&(this.views=o),this.views.forEach(e=>{e.navigators.forEach(e=>{void 0===this._navigatorCounts[e]&&(this._navigatorCounts[e]=0),this._navigatorCounts[e]++})}),this.requestUpdate()}_registerViews(){let e=!1;this.views.forEach(t=>{t.default&&(e=!0,this.defaultViewName=t.name),this.registerRoute(new mr(t.name,t.name,t.default))}),!e&&this.views.length>0&&(this.defaultViewName=this.views[0].name,this.setDefaultRoute(this.defaultViewName)),this.navigateToDefault(!0)}},fr=cr(e||(e=ci`.typography-display{font-size:2.125rem;line-height:2.5rem;letter-spacing:.0074em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),xr=cr(t||(t=ci`.typography-headline{font-size:1.5rem;line-height:2rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),wr=cr(o||(o=ci`.typography-title{font-size:1.25rem;line-height:2rem;letter-spacing:.0075em;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),_r=cr(a||(a=ci`.typography-subtitle{font-size:1rem;line-height:1.75rem;letter-spacing:.0094em;font-weight:400;-webkit-font-smoothing:antialiased}`)),kr=cr(i||(i=ci`.typography-body{font-size:.8125rem;line-height:1.15rem;letter-spacing:.0179em;font-weight:400;-webkit-font-smoothing:antialiased}`)),Sr=cr(r||(r=ci`.typography-button{font-size:.75rem;line-height:1.25rem;letter-spacing:.0333em;text-transform:uppercase;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),Er=cr(n||(n=ci`.typography-caption{font-size:.6875rem;line-height:1.15rem;letter-spacing:.0333em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),$r=cr(s||(s=ci`.typography-overline{font-size:.6875rem;line-height:2rem;letter-spacing:.15em;text-transform:uppercase;font-weight:400;-webkit-font-smoothing:antialiased}`)),Cr=cr(l||(l=ci`.typography-code{font-family:'Roboto Mono',monospace;font-size:.8125rem;line-height:1.25rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased}`)),Ir=[fr,xr,wr,_r,kr,Sr,Er,$r,Cr];class zr extends hr{static get properties(){return{name:{type:String,attribute:"name",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus"}}}constructor(){super(),this.hasFocus=!1,this.tabIndex=0,this._boundHandleFocusEvent=this._handleFocusEvent.bind(this),this._boundHandleBlurEvent=this._handleBlurEvent.bind(this),this.addEventListener("focus",this._boundHandleFocusEvent),this.addEventListener("blur",this._boundHandleBlurEvent)}updated(e){super.updated(e),e.forEach((e,t)=>{"disabled"===t&&(this.disabled?this.tabIndex=-1:this.tabIndex=0)})}_handleFocusEvent(e){this.disabled||(this.hasFocus=!0)}_handleBlurEvent(e){this.hasFocus=!1}}const Ar=cr(c||(c=ci`:host([elevation="0"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),Lr=cr(d||(d=ci`.elevation-0{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),Vr=cr(p||(p=ci`:host([elevation="1"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),Fr=cr(h||(h=ci`.elevation-1{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),Pr=cr(b||(b=ci`:host([elevation="2"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),Tr=cr(u||(u=ci`.elevation-2{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),Mr=cr(g||(g=ci`:host([elevation="3"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),Rr=cr(m||(m=ci`.elevation-3{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),Br=cr(v||(v=ci`:host([elevation="4"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),Nr=cr(y||(y=ci`.elevation-4{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),Or=cr(f||(f=ci`:host([elevation="6"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),Hr=cr(x||(x=ci`.elevation-6{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),Dr=cr(w||(w=ci`:host([elevation="8"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),jr=cr(_||(_=ci`.elevation-8{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),Ur=cr(k||(k=ci`:host([elevation="12"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),qr=cr(S||(S=ci`.elevation-12{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),Wr=cr(E||(E=ci`:host([elevation="16"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),Zr=cr($||($=ci`.elevation-16{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),Gr=cr(C||(C=ci`:host([elevation="24"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),Kr=cr(I||(I=ci`.elevation-24{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),Xr=[Lr,Fr,Tr,Rr,Nr,Hr,jr,qr,Zr,Kr],Jr=[Ar,Vr,Pr,Mr,Br,Or,Dr,Ur,Wr,Gr];window.customElements.define("obap-ripple",class extends hr{static get styles(){return[cr(z||(z=ci`
            :host {
                --obap-ripple-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: var(--obap-ripple-color);
                opacity: 0;
                transition: opacity 0.50s cubic-bezier(0.4, 0, 0.2, 1);
            }

            :host([extend="1"]) {
                left: -50%;
                top: -50%;
                width: 200%;
                height: 200%;
                border-radius: 50%;
            }

            :host([extend="2"]) {
                left: -100%;
                top: -100%;
                width: 300%;
                height: 300%;
                border-radius: 50%;
            }

            :host([hidden]) {
                display: none !important;
            }

            :host([disabled]) {
                pointer-events: none;
            }

            :host([active]), :host([has-focus]) {
                opacity: 0.40;
            }
        `))]}static get properties(){return{extend:{type:Number,attribute:"extend",reflect:!0},active:{type:Boolean,attribute:"active",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.extend=0,this.active=!1,this.hasFocus=!1,this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleMouseLeaveEvent=this._handleMouseLeaveEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.noInk||(this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.addEventListener("touchstart",this._boundHandleMouseDownEvent),this.addEventListener("touchend",this._boundHandleMouseUpEvent))}disconnectedCallback(){this.noInk||(this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.removeEventListener("touchstart",this._boundHandleMouseDownEvent),this.removeEventListener("touchend",this._boundHandleMouseUpEvent)),super.disconnectedCallback()}_handleMouseDownEvent(e){this.noInk||(this.active=!0)}_handleMouseUpEvent(e){this.active=!1}_handleMouseLeaveEvent(e){this.active=!1}});const Yr=new class{addGroup(e,t){const o=document.createElement("svg");o.innerHTML=t;const a=o.querySelector("defs");if(a){const t=a.querySelectorAll("g");t.length>0&&(window.ObapIcons[e]||(window.ObapIcons[e]={}),t.forEach(t=>window.ObapIcons[e][t.id]=new Vi([`<svg viewBox="0 0 24 24">${t.outerHTML}</svg>`],[])))}}get(e){let t=e.split(":"),o="standard",a=t[0];return t.length>1&&(o=t[0],a=t[1]),window.ObapIcons[o]&&window.ObapIcons[o][a]?window.ObapIcons[o][a]:null}getNames(e){return null==e&&(e="standard"),window.ObapIcons[e]?Object.getOwnPropertyNames(window.ObapIcons[e]).map(t=>`${e}:${t}`):[]}getGroups(){return Object.getOwnPropertyNames(window.ObapIcons).filter(e=>"iconManager"!==e&&"get"!==e)}};window.ObapIcons=window.ObapIcons||{iconManager:Yr,get:Yr.get};const Qr=window.ObapIcons.iconManager,en=Qr.getNames,tn=Qr.getGroups;Qr.addGroup("core",'\n    <defs>\n        <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g>\n        <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g>\n        <g id="chevron-up"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></g>\n        <g id="chevron-down"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></g>\n        <g id="arrow-left"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>\n        <g id="arrow-right"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>\n        <g id="arrow-up"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>\n        <g id="arrow-down"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>\n        <g id="arrow-drop-left"><path d="M14 7l-5 5 5 5V7z"/></g>\n        <g id="arrow-drop-right"><path d="M10 17l5-5-5-5v10z"/></g>\n        <g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"/></g>\n        <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"/></g>\n        <g id="edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>\n        <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>\n        <g id="cross"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>\n        <g id="error"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>\n    </defs>\n');window.customElements.define("obap-icon",class extends hr{static get styles(){return[cr(A||(A=ci`
            :host {
                --obap-icon-fill-color: currentcolor;
                --obap-icon-stroke-color: none;
                --obap-icon-width: 20px;
                --obap-icon-height: 20px;

                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                fill: var(--obap-icon-fill-color);
                stroke: var(--obap-icon-stroke-color);
                width: var(--obap-icon-width);
                height: var(--obap-icon-height);
            }

            svg {
                width: var(--obap-icon-width);
                height: var(--obap-icon-height);
            }

            :host([hidden]) {
                display: none !important;
            }

            :host([disabled]) {
                pointer-events: none;
            }
        `))]}static get properties(){return{icon:{type:String,attribute:"icon"}}}constructor(){super(),this.icon=""}render(){return Qr.get(this.icon)}});window.customElements.define("obap-button",class extends zr{static get styles(){return[Sr,Pr,Or,cr(L||(L=ci`
            :host {
                --obap-button-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-button-outline-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-button-disabled-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-button-split-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-button-background-color: var(--obap-surface-color,#FFFFFF);
                --obap-button-disabled-background-color: transparent;
                --obap-button-ripple-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-button-outline-size: 1px;
                
                display: inline-block;
                position: relative;
                box-sizing: border-box;
                overflow: hidden;
                user-select: none;
                cursor: pointer;
                outline: 0;
                border-radius: 3px;
                color: var(--obap-button-color);
                background: var(--obap-button-background-color);
                min-width: 64px;
                height: 32px;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
                box-shadow: none;
                color: var(--obap-button-disabled-color);
                background: var(--obap-button-disabled-background-color);
            }

            :host([round]) {
                border-radius: 20px;
            }

            :host([outline]) {
                border: var(--obap-button-outline-size) solid var(--obap-button-outline-color);
            }

            .container {
                display: inline-flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                align-items: center;
                box-sizing: border-box;
                height: 100%;
                width: 100%;
                padding: 11px 10px 9px 10px;
            }

            :host([round]) {
                min-width: 40px;
                height: 40px;
            }

            obap-ripple {
                --obap-ripple-color: var(--obap-button-ripple-color);
                border-radius: inherit;
            }

            div[has-icon] {
                margin-left: 6px;
            }

            :host([round]) * > div[has-icon] {
                margin-right: 4px;
            }
        `))]}static get properties(){return{raised:{type:Boolean,attribute:"raised",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0},round:{type:Boolean,attribute:"round",reflect:!0},outline:{type:Boolean,attribute:"outline",reflect:!0},toggle:{type:Boolean,attribute:"toggle",reflect:!0},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.raised=!1,this.noInk=!1,this.round=!1,this.toggle=!1,this.selected=!1,this.outline=!1,this.icon="",this.label="",this.role="button",this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleTouchStartEvent=this._handleTouchStartEvent.bind(this),this._boundHandleTouchEndEvent=this._handleTouchEndEvent.bind(this),this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("touchstart",this._boundHandleTouchStartEvent),this.addEventListener("touchend",this._boundHandleTouchEndEvent)}updated(e){super.updated(e),e.forEach((e,t)=>{switch(t){case"raised":this.raised?this.setAttribute("elevation",2):this.removeAttribute("elevation");break;case"label":case"icon":this.setAttribute("aria-label",this._getAriaLabel())}})}_getAriaLabel(){return this.label?this.label:this.icon}render(){return Gi(V||(V=ci`
            <div class="container typography-button">
                ${0}
                ${0} 
            </div>
            ${0}
        `),this.icon?Gi(F||(F=ci`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.label?Gi(P||(P=ci`<div ?has-icon="${0}">${0}</div>`),""!==this.icon,this.label):null,this.noInk?null:Gi(T||(T=ci`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.selected))}_handleMouseDownEvent(e){e.preventDefault(),this._handleDown()}_handleMouseUpEvent(e){e.preventDefault(),this._handleUp()}_handleTouchStartEvent(e){e.preventDefault(),this._handleDown()}_handleTouchEndEvent(e){e.preventDefault(),this._handleUp(),this.click()}_handleDown(){this.raised?this.toggle?(this.selected=!this.selected,this.selected?this.setAttribute("elevation",6):this.setAttribute("elevation",2)):this.setAttribute("elevation",6):this.toggle&&(this.selected=!this.selected)}_handleUp(){this.raised&&!this.toggle&&this.setAttribute("elevation",2)}});window.customElements.define("obap-top-app-bar",class extends hr{static get styles(){return[_r,Jr,cr(M||(M=ci`
            :host {
                display: block;
                --obap-top-app-bar-color: var(--obap-on-primary-color, white);
                --obap-top-app-bar-inactive-color: var(--obap-on-primary-inactive-color, rgba(255, 255, 255, 0.7));
                --obap-top-app-bar-background-color: var(--obap-primary-color, #5c6bc0);

                color: var(--obap-top-app-bar-color);
                background: var(--obap-top-app-bar-background-color);

                height: 48px;
            }

            .container {
                height: 100%;
                margin: 0 8px 0 8px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
            }

            .caption {
                display: flex;
                flex: 1;
                margin: 0 8px;
                align-items: center;
            }

            .actions {
                display: flex;
                align-items: center;
            }

            ::slotted(obap-button) {
                --obap-button-color: var(--obap-top-app-bar-color);
                --obap-button-disabled-color: var(--obap-top-app-bar-inactive-color);
                --obap-button-split-color: var(--obap-top-app-bar-inactive-color);
                --obap-button-background-color: transparent;
                --obap-button-disabled-background-color: transparent;
                --obap-button-ripple-color: var(--obap-top-app-bar-color);
            }
        `))]}static get properties(){return{caption:{type:String,attribute:"caption"},elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.caption="",this.elevation=0}render(){return Gi(R||(R=ci` 
            <div class="container">
                <div class="actions"><slot name="left"></slot></div>
                <div class="caption typography-subtitle">${0}</div>
                <div class="actions"><slot name="right"></slot></div>
            </div>
      `),this.caption)}});const on=e=>class extends e{get selectedIndex(){return this._selectedIndex}set selectedIndex(e){const t=this.selectedIndex;(t!=e||this.toggles)&&(this._selectedIndex=e,this._changeSelection(this._selectedIndex,t),this.activeIndex=-1,this.requestUpdate("selectedIndex",t))}get activeIndex(){return this._activeIndex}set activeIndex(e){const t=this.activeIndex;t!=e&&(t>-1&&t<=this.items.length-1&&this.items[t].removeAttribute(this.activeAttribute),e>=-1&&e<=this.items.length-1&&(this._activeIndex=e,-1!==e&&this.items[e].setAttribute(this.activeAttribute,"")),this.requestUpdate("activeIndex",t))}get items(){return this._items}set items(e){throw'"items" is read only'}static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",hasChanged:(e,t)=>e!==t,reflect:!0},activeIndex:{type:Number,attribute:"active-index"},items:{type:Array},toggles:{type:Boolean,attribute:"toggles"},selectorType:{type:String,attribute:"selector-type"},enterSelects:{type:Boolean,attribute:"enter-selects"},selectedAttribute:{type:String,attribute:"selected-attribute"},activeAttribute:{type:String,attribute:"active-attribute"},disableManualSelection:{type:Boolean,attribute:"disable-manual-selection"}}}constructor(){super(),this._boundHandleSelectionEvent=this._handleSelectionEvent.bind(this),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._boundHandleEnterEvent=this._handleEnterEvent.bind(this),this._activeIndex=-1,this._selectedIndex=-1,this._selectable=!0,this._items=[],this._ctrl=!1,this.toggles=!1,this.disableManualSelection=!1,this.enterSelects=!1,this.selectorType="single",this.selectedAttribute="selected",this.activeAttribute="active"}updated(e){super.updated(e),e.forEach((e,t)=>{"disabled"===t&&e!==this.disabled?this.items.forEach(e=>{e.disabled=this.disabled}):"disableManualSelection"===t&&e!==this.disableManualSelection&&(this.disableManualSelection?this._disableSelectionEventHandlers():this._enableSelectionEventHandlers())})}connectedCallback(){super.connectedCallback(),this._enableSelectionEventHandlers(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this._disableSelectionEventHandlers(),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}_enableSelectionEventHandlers(){this.disableManualSelection||this._selectionHandlersConnected||(this.addEventListener("click",this._boundHandleSelectionEvent),this.addEventListener("keydown",this._boundHandleEnterEvent,{capture:!0}),this._selectionHandlersConnected=!0)}_disableSelectionEventHandlers(){this._selectionHandlersConnected&&(this.removeEventListener("click",this._boundHandleSelectionEvent),this.removeEventListener("keydown",this._boundHandleEnterEvent))}select(e){this.selectedIndex=e}activate(e){this.activeIndex=e}activateNext(){if(this.items.length>0){let e=this.activeIndex+1;e<=this.items.length-1?this.activeIndex=e:this.activeIndex=0}}activatePrevious(){if(this.items.length>0){let e=this.activeIndex-1;this.activeIndex=e<0?this.items.length-1:e}}indexOf(e){return this.items.indexOf(e)}_populateItems(){let e=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&!e.hasAttribute("no-select"));this.disabled&&e.forEach(e=>{e.disabled=this.disabled});const t=this._items;this._items=e,this._changeSelection(this.selectedIndex,-1),this.requestUpdate("items",t)}_handleSlotChangeEvent(e){this._populateItems()}_handleSelectionEvent(e){let t=this.items.indexOf(e.target);t>-1&&(this._ctrl=e.ctrlKey,this.select(t),this._ctrl=!1)}_handleEnterEvent(e){switch(e.key){case"Enter":if(this.enterSelects){const t=this.indexOf(e.target);t>-1&&!e.target.disabled&&this.select(t)}}}_deselectItem(e){if(-1===e)this.items.forEach(e=>e.removeAttribute(this.selectedAttribute));else{const t=this.items[e];t&&(t.removeAttribute(this.selectedAttribute),this.fireMessage("obap-item-deselected",{item:t,index:e},!1))}}_selectItem(e){const t=this.items[e];t&&(t.setAttribute(this.selectedAttribute,""),this.fireMessage("obap-item-selected",{item:t,index:e},!1))}_changeSelection(e,t){if(-1===e||0===this.items.length)return;if(e===t)return this._deselectItem(t),void(this._selectedIndex=-1);const o=this.items[e];this.fireMessage("obap-item-selecting",{newIndex:e,oldIndex:t,item:o},!0)?(this._deselectItem(t),this._selectItem(e),this._selectedIndex=e):this._selectedIndex=t}};class an extends(on(hr)){static get styles(){return cr(B||(B=ci`
            :host {
                display: block;
            }

            :host > ::slotted(:not(slot):not([selected])) {
                display: none !important;
            }
        `))}constructor(){super(),this.disableManualSelection=!0}render(){return Gi(N||(N=ci`<slot></slot>`))}}window.customElements.define("obap-pages",an);window.customElements.define("obap-scroll-container",class extends hr{static get styles(){return[cr(O||(O=ci`
            :host {
                --obap-scroll-container-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-scroll-container-background-color: transparent;
                display: inline-block;
                color: var(--obap-scroll-container-color);
                background: var(--obap-scroll-container-background-color);
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 100%;
            }

            :host([vertical]) > .container, :host([vertical]) * > .content-container {
                flex-direction: column;
            }

            .button-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 4px;
            }

            .button-container[hidden] {
                display: none;
            }

            .content-container {
                flex: 1;
                display: flex;
                flex-direction: row;
                overflow-y: hidden;
                overflow-x: scroll;
                scrollbar-width: none;
                outline: 0;
            }

            :host([vertical]) * > .content-container {
                overflow-y: scroll;
                overflow-x: hidden;
            }

            .content-container::-webkit-scrollbar {
                width: 0;
                height: 0;
            }

            .content-container[no-scroll] {
                overflow: hidden;
            }

            obap-button {
                --obap-button-color: var(--obap-scroll-container-color);
                --obap-button-background-color: var(--obap-scroll-container-background-color);
                --obap-button-ripple-color: var(--obap-scroll-container-color);
            }

            obap-button[mini] {
                height: 32px;
                width: 32px;
                min-height: 32px;
                min-width: 32px;
                border-radius: 16px;
            }

            obap-button[not-visible] {
                opacity: 0;
            }
        `))]}static get properties(){return{vertical:{type:Boolean,attribute:"vertical",reflect:!0},scrollSpeed:{type:Number,attribute:"scroll-speed"},itemStep:{type:Boolean,attribute:"item-step"},disableScrolling:{type:Boolean,attribute:"disable-scrolling"},hideButtons:{type:Boolean,attribute:"hide-buttons"},miniButtons:{type:Boolean,attribute:"mini-buttons"},_leftScrollButtonVisible:{type:Boolean},_rightScrollButtonVisible:{type:Boolean},_hasOverflow:{type:Boolean}}}constructor(){super(),this.vertical=!1,this.scrollSpeed=2,this.itemStep=!1,this.disableScrolling=!1,this.hideButtons=!1,this._scrolling=!1,this._scrollDirection="none",this._container=null,this._containerRect=null,this.miniButtons=!1,this._boundScroll=this._scroll.bind(this),this._holdDelay=1,this._holdJob=null,this._hasOverflow=!1,this._children=[],this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent),this._resizeObserver=new ResizeObserver(e=>{this._setScrollInfo(),this._calculateButtonVisibility()})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver.unobserve(this),super.disconnectedCallback()}updated(e){super.updated(e),this._setScrollInfo(),this._calculateButtonVisibility()}render(){return Gi(H||(H=ci`
            <div class="container">
                <div class="button-container" ?hidden="${0}">
                    <obap-button round ?mini="${0}" ?not-visible="${0}" icon="${0}" 
                        @mousedown="${0}" @mouseup="${0}" @touchstart="${0}" @touchend="${0}">
                    </obap-button>
                </div>
                <div class="content-container" id="contentContainer" tabindex="0" @scroll="${0}" ?no-scroll="${0}"><slot></slot></div>
                <div class="button-container" ?hidden="${0}">
                    <obap-button round ?mini="${0}" ?not-visible="${0}" icon="${0}" 
                        @mousedown="${0}" @mouseup="${0}" @touchstart="${0}" @touchend="${0}">
                    </obap-button>
                </div>
            </div>
        `),this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._leftScrollButtonVisible,this._getIconName(!0),this._scrollLeft,this._endScroll,this._scrollLeft,this._endScroll,this._onScroll,this.disableScrolling,this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._rightScrollButtonVisible,this._getIconName(!1),this._scrollRight,this._endScroll,this._scrollRight,this._endScroll)}_getIconName(e){return this.vertical?e?"core:chevron-up":"core:chevron-down":e?"core:chevron-left":"core:chevron-right"}_calculateButtonVisibility(){if(this.disableScrolling)return this._leftScrollButtonVisible=!1,void(this._rightScrollButtonVisible=!1);this.vertical?(this._leftScrollButtonVisible=this._container.scrollTop>0,this._rightScrollButtonVisible=this._container.scrollTop<this._container.scrollHeight-this._container.clientHeight-1,this._hasOverflow=this._container.scrollHeight>this._container.clientHeight):(this._leftScrollButtonVisible=this._container.scrollLeft>0,this._rightScrollButtonVisible=this._container.scrollLeft<this._container.scrollWidth-this._container.clientWidth-1,this._hasOverflow=this._container.scrollWidth>this._container.clientWidth)}_setScrollInfo(){this._container=this.renderRoot.getElementById("contentContainer"),this._containerRect=this._container.getBoundingClientRect()}_scrollLeft(e){this.disableScrolling||(this.itemStep?this._scrollToNextChild("left"):(this._startScroll("left"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_scrollRight(e){this.disableScrolling||(this.itemStep?this._scrollToNextChild("right"):(this._startScroll("right"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_startScroll(e){this._scrolling=!0,this._scrollDirection=e,this._scroll()}_endScroll(e){this._holdJob&&(clearInterval(this._holdJob),this._holdJob=null),this._scrolling=!1,this._scrollDirection="none"}_scrollToNextChild(e){const t=this._container.getBoundingClientRect(),o=this._children.filter(e=>{const o=e.getBoundingClientRect();return this.vertical?o.top<=t.bottom&&o.bottom>=t.top:o.left<=t.right&&o.right>=t.left});if(o.length>0){const t=o[0],a=getComputedStyle(t);if(this.vertical){let o=t.offsetHeight;o+=parseInt(a.marginTop)+parseInt(a.marginBottom),"left"===e?this._container.scrollTop-=o:this._container.scrollTop+=o}else{let o=t.offsetWidth;o+=parseInt(a.marginLeft)+parseInt(a.marginRight),"left"===e?this._container.scrollLeft-=o:this._container.scrollLeft+=o}this._calculateButtonVisibility()}}_scroll(){if(!this._scrolling)return;let e="left"===this._scrollDirection?-this.scrollSpeed:this.scrollSpeed,t=0,o=!1;this.vertical?(t=this._container.scrollTop+e,t>=0&&t<=this._container.scrollHeight-this._container.clientHeight&&(this._container.scrollTop=t,o=!0)):(t=this._container.scrollLeft+e,t>=0&&t<=this._container.scrollWidth-this._container.clientWidth&&(this._container.scrollLeft=t,o=!0)),o?this._calculateButtonVisibility():this._endScroll()}_onScroll(){this._calculateButtonVisibility()}_handleSlotChangeEvent(e){const t=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType);this._children=t,this.requestUpdate()}});window.customElements.define("obap-tab",class extends zr{static get styles(){return cr(D||(D=ci`
            :host {
                --obap-tab-padding: 3px 16px 0 16px;
                display: block;
                position: relative;
                user-select: none;
                outline: 0;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }
    
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: var(--obap-tab-padding);
                cursor: pointer;
                height: 100%;
                box-sizing: border-box;
            }

            obap-ripple {
                --obap-ripple-color: var(--obap-tabs-ripple-color);
            }
      `))}static get properties(){return{noInk:{type:Boolean,attribute:"no-ink",reflect:!0},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.role="tab",this.noInk=!1}render(){return Gi(j||(j=ci`
            <div class="container">
                <slot></slot>
                ${0}
            </div>
        `),this.noInk?null:Gi(U||(U=ci`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected))}});class rn extends(on(hr)){static get styles(){return[Sr,cr(q||(q=ci`
            :host {
                display: block;
                --obap-tabs-color: var(--obap-on-primary-color, #FFFFFF);
                --obap-tabs-inactive-color: var(--obap-on-primary-inactive-color, rgba(255, 255, 255, 0.7));
                --obap-tabs-disabled-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-tabs-background-color: var(--obap-primary-color, #5c6bc0);
                --obap-tabs-ripple-color: var(--obap-tabs-inactive-color);

                color: var(--obap-tabs-color);
                background: var(--obap-tabs-background-color);
                height: 40px; 
            }

            :host([hidden]) {
                display: none !important;
            }

            :host([disabled]) {
                pointer-events: none;
                background: var(--obap-tabs-disabled-color);
            }

            .container[fill] > ::slotted(obap-tab) {
                flex: 1;
            }

            ::slotted(obap-tab) {
                color: var(--obap-tabs-inactive-color);
                border-bottom: 2px transparent solid;
            }

            ::slotted(obap-tab[selected]:not([disabled])) {
                color: var(--obap-tabs-color);
                border-bottom: 2px var(--obap-tabs-color) solid;
            }

            .container {
                --obap-scroll-container-color: var(--obap-tabs-color);
                display: flex;
                flex-direction: row;
                height: 100%;
            }
        `))]}static get properties(){return{fill:{type:Boolean,attribute:"fill"},scroll:{type:Boolean,attribute:"scroll"},hideScrollButtons:{type:Boolean,attribute:"hide-scroll-buttons"}}}constructor(){super(),this.role="tablist",this.fill=!1,this.scroll=!1,this.hideScrollButtons=!1,this.enterSelects=!0}render(){return Gi(W||(W=ci`
            <obap-scroll-container class="container typography-button" ?fill="${0}" ?disable-scrolling="${0}"
                                   ?hide-buttons="${0}" mini-buttons>
                <slot></slot>
            </obap-scroll-container>
        `),this.fill,!1===this.scroll,this.hideScrollButtons)}}window.customElements.define("obap-tabs",rn);window.customElements.define("obap-material",class extends hr{static get styles(){return[Jr,cr(Z||(Z=ci`
            :host {
                display: block;
                box-sizing: border-box;
                background: var(--obap-surface-color, #FFFFFF);
                color: var(--obap-on-surface-color, rgba(black, 0.87));
            }
        `))]}static get properties(){return{elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.elevation=1}render(){return Gi(G||(G=ci`<slot></slot>`))}});const nn=e=>class extends e{static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"}}}constructor(){super(),this.label="",this.name="",this._active=!1}get active(){return this._active}connectedCallback(){super.connectedCallback(),this.setAttribute("application-content","")}_canActivate(){return!this.canActivate||this.canActivate()}_canDeactivate(){return!this.canDeactivate||this.canDeactivate()}_activate(){this._active||(this._active=!0,this.activate?this.activate():this.fireMessage("obap-view-activate"))}_deactivate(){this._active&&(this.deactivate?this.deactivate():this.fireMessage("obap-view-deactivate"),this._active=!1)}};class sn extends(nn(hr)){static get styles(){return[cr(K||(K=ci`
            :host {
                display: block;
                height: 100%;
            }

            .container {
                height: 100%;
            }
        `))]}render(){return Gi(X||(X=ci`
            <div class="container">
                <slot></slot>
            </div>
        `))}}window.customElements.define("obap-application-content",sn);window.customElements.define("obap-application-view",class extends hr{static get styles(){return[kr,cr(J||(J=ci`
            :host {
                display: block;
                height: 100%;
                background: transparent;
            }

            obap-pages {
                height: 100%;
            }

            .page-container {
                flex: 1;
                width: 100%;
            }

            .container {
                display: flex;
                flex-direction: column;
                flex: 1;
                height: 100%;
                width: 100%;
            }

            .side {
                display: none;
                height: 100%;
                margin-left: 4px;
            }

            :host([has-side-views]) * > .side {
                display: block;
            }

            .content-container {
                display: flex;
                flex-direction: row;
                height: 100%;
                width: 100%;
            }

            .sub-view-navigator {
                margin-bottom: 4px;
            }

            .sub-view-item {
                height: 32px;
                line-height: 26px;
                padding: 4px 8px;
                border-radius: 3px;
                box-sizing: border-box;
                cursor: pointer;
            }
        `))]}static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},badgeIcon:{type:String,attribute:"badge-icon"},badgeLabel:{type:String,attribute:"badge-label"},modal:{type:Boolean,attribute:"modal"},default:{type:Boolean,attribute:"default"},subViews:{type:Array},selectedSubViewIndex:{type:Number},navigators:{type:Array,attribute:"navigators",converter:{toAttribute:e=>e.join(","),fromAttribute:e=>e.split(",")}},associations:{type:Array,attribute:"associations",converter:{toAttribute:e=>e.join(","),fromAttribute:e=>e.split(",")}},hasSideViews:{type:Boolean,attribute:"has-side-views",reflect:!0},hideSubViewScrollButtons:{type:Boolean,attribute:"hide-sub-view-scroll-buttons"}}}constructor(){super(),this._active=!1,this._slotUpdated=!1,this.name="",this.label="untitled",this.icon="",this.badgeIcon="",this.badgeLabel="",this.modal=!1,this.default=!1,this.selectedSubViewIndex=0,this.subViews=[],this.navigators=[],this.associations=[],this.hasSideViews=!1,this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}notifyViewActivate(){this._active=!0,this.subViews.forEach(e=>{e._activate&&e._activate()})}notifyViewDeactivate(){this._active&&(this._active=!1,this.subViews.forEach(e=>{e._deactivate&&e._deactivate()}))}canViewActivate(){let e=!0;return this.subViews.forEach(t=>{t._canActivate&&(t._canActivate()||(e=!1))}),e}canViewDeactivate(){let e=!0;return this.subViews.forEach(t=>{t._canDeactivate&&(t._canDeactivate()||(e=!1))}),e}render(){return Gi(Y||(Y=ci`
            <div class="container">
                ${0}
                <div class="content-container" elevation="1">
                    <obap-material class="page-container" elevation="1">
                        <obap-pages selected-index="${0}">
                            <slot></slot>
                        </obap-pages>
                    </obap-material>
                    <obap-material class="side" elevation="1">
                        <slot name="side"></slot>
                    </obap-material>
                </div>
            </div>
        `),this._getSubViewNavigator(),this.selectedSubViewIndex)}_getSubViewNavigator(){return this.subViews.length>1?Gi(Q||(Q=ci`
                <obap-material class="sub-view-navigator" elevation="1">
                    <obap-tabs scroll ?hide-scroll-buttons="${0}" selected-index="${0}" @obap-item-selected="${0}">
                        ${0}
                    </obap-tabs>
                </obap-material>
            `),this.hideSubViewScrollButtons,this.selectedSubViewIndex,this._handleSubViewSelect,this.subViews.map(e=>Gi(ee||(ee=ci`<obap-tab sub-view-name="${0}">${0}</obap-tab>`),e.name,e.label))):null}_handleSubViewSelect(e){this.selectedSubViewIndex=e.detail.index}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot"),o=this.renderRoot.querySelector('slot[name="side"]');if(o){const e=o.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&e.hasAttribute("application-content")).length;this.hasSideViews=e>0}if(!t)return;let a=t.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&e.hasAttribute("application-content"));this.subViews.length!==a.length&&(this.subViews=a),null===this.selectedSubViewIndex&&this.subViews&&this.subViews.length>0&&(this.selectedSubViewIndex=0),this._active&&this.notifyViewActivate(),this.requestUpdate()}});class ln extends(yr(hr)){static get styles(){return[kr,cr(te||(te=ci`
            :host {
                display: block;
                box-sizing: border-box;
                background: var(--obap-window-color, #FAFAFA);
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-top-app-bar {
                margin-bottom: 0;
            }

            .app-icon {
                margin: 8px 4px 8px 8px;
            }

            .container {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .app-container {
                flex: 1;
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .app-pages {
                flex: 1;
                height: 100%;
            }

            .navigator {
                height: 100%;
                box-sizing: border-box;
                overflow-y: auto;
            }

            .view-pages {
                height: 100%;
                overflow: hidden;
                /*padding: 8px 8px 8px 8px;*/
                box-sizing: border-box;
            }

            .navigator-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 8px;
                padding: 8px;
            }

            .navigator-item {
                display: flex;
                align-items: center;
                padding: 8px;
                cursor: pointer;
            }

            .navigator-item:last-of-type {
                margin-bottom: 0;
            }

            .navigator-icon {
                margin-right: 8px;
                fill: var(--obap-text-icon-color, rgba(0, 0, 0, 0.38));
                pointer-events: none;
            }

            .navigator-label {
                color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                pointer-events: none;
            }
        `))]}static get properties(){return{_navigatorIndex:{type:Number}}}constructor(){super(),this._navigatorIndex=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.forEach((e,t)=>{})}render(){return Gi(oe||(oe=ci`
            <div class="container">
                <obap-top-app-bar caption="${0}" elevation="2">
                    ${0}
                </obap-top-app-bar>

                <div class="app-container">
                    <obap-pages class="app-pages" selected-index="${0}">
                        <div class="navigator">${0}</div>
                        <obap-pages class="view-pages" selected-index="${0}"><slot></slot></obap-pages>
                    </obap-pages>
                </div>
            </div>`),this.getEffectiveDisplayTitle(),this._getToolBarIcon(this.icon),this._navigatorIndex,this._renderNavigator(),this.selectedViewIndex)}_renderNavigator(){return Gi(ae||(ae=ci`
            <div class="navigator-container">
                ${0}
            </div>`),this.views.map((e,t)=>Gi(ie||(ie=ci`
                    <obap-material elevation="1" class="navigator-item" index="${0}" @click="${0}">
                        ${0}
                        <div class="navigator-label typography-body">${0}</div>
                    </obap-material>
                `),t,this._navigatorClick,e.icon?Gi(re||(re=ci`<obap-icon class="navigator-icon" icon="${0}"></obap-icon>`),e.icon):null,e.label)))}_getToolBarIcon(e){return this._navigatorIndex>0?Gi(ne||(ne=ci`<obap-button round slot="left" icon="core:arrow-left" @click="${0}"></obap-button>`),this._showNavigator):e?Gi(se||(se=ci`<obap-icon class="app-icon" slot="left" icon="${0}"></obap-icon>`),e):null}_navigatorClick(e){const t=e.target.getAttribute("index");null!==t&&(this.selectedViewIndex=t,this._navigatorIndex=1)}_showNavigator(e){this._navigatorIndex=0,this.showDefaultView()}getEffectiveDisplayTitle(){return 0===this._navigatorIndex?this.label:this.getSelectedView().label}}window.customElements.define("obap-mobile-application",ln),Qr.addGroup("app",'\n    <defs>\n        <g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"/></g>\n        <g id="styles"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"/></g>\n        <g id="charts"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></g>\n        <g id="data-tables"><path d="M22,2H2v20h20V2L22,2z M4,8V4h16v4H4L4,8z M4,14v-4h16v4H4L4,14z M4,20v-4h16v4H4L4,20z"/></g>\n        <g id="tooltips-callouts"><path d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/></g>\n        <g id="selection"><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></g>\n        <g id="progress-indicators"><path d="M15.1,19.37l1,1.74c-0.96,0.44-2.01,0.73-3.1,0.84v-2.02C13.74,19.84,14.44,19.65,15.1,19.37z M4.07,13H2.05 c0.11,1.1,0.4,2.14,0.84,3.1l1.74-1C4.35,14.44,4.16,13.74,4.07,13z M15.1,4.63l1-1.74C15.14,2.45,14.1,2.16,13,2.05v2.02 C13.74,4.16,14.44,4.35,15.1,4.63z M19.93,11h2.02c-0.11-1.1-0.4-2.14-0.84-3.1l-1.74,1C19.65,9.56,19.84,10.26,19.93,11z M8.9,19.37l-1,1.74c0.96,0.44,2.01,0.73,3.1,0.84v-2.02C10.26,19.84,9.56,19.65,8.9,19.37z M11,4.07V2.05 c-1.1,0.11-2.14,0.4-3.1,0.84l1,1.74C9.56,4.35,10.26,4.16,11,4.07z M18.36,7.17l1.74-1.01c-0.63-0.87-1.4-1.64-2.27-2.27 l-1.01,1.74C17.41,6.08,17.92,6.59,18.36,7.17z M4.63,8.9l-1.74-1C2.45,8.86,2.16,9.9,2.05,11h2.02C4.16,10.26,4.35,9.56,4.63,8.9z M19.93,13c-0.09,0.74-0.28,1.44-0.56,2.1l1.74,1c0.44-0.96,0.73-2.01,0.84-3.1H19.93z M16.83,18.36l1.01,1.74 c0.87-0.63,1.64-1.4,2.27-2.27l-1.74-1.01C17.92,17.41,17.41,17.92,16.83,18.36z M7.17,5.64L6.17,3.89 C5.29,4.53,4.53,5.29,3.9,6.17l1.74,1.01C6.08,6.59,6.59,6.08,7.17,5.64z M5.64,16.83L3.9,17.83c0.63,0.87,1.4,1.64,2.27,2.27 l1.01-1.74C6.59,17.92,6.08,17.41,5.64,16.83z M13,7h-2v5.41l4.29,4.29l1.41-1.41L13,11.59V7z"/></g>\n        <g id="tabs"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/></g>\n        <g id="dialogs"><path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M17,12H7v-2 h10V12z M13,16H7v-2h6V16z"/></g>\n        <g id="cards"><path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/></g>\n        <g id="buttons"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></g>\n        <g id="chips"><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></g>\n        <g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>\n        <g id="pickers"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></g>\n        <g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>\n        <g id="slider"><path d="M14.29,11C13.9,10.12 13.03,9.5 12,9.5C10.97,9.5 10.1,10.12 9.71,11L2.028,11L2.028,13L9.71,13C10.1,13.88 10.97,14.5 12,14.5C13.03,14.5 13.9,13.88 14.29,13L22.026,13L21.999,11.054" style="fill-rule:nonzero;"/></g>\n        <g id="treeview"><path d="M10.014,2.002L3.986,2.002L3.986,3.002L10.014,3.002L10.014,2.002ZM15.014,13.023L10.014,13.023L10.014,14.023L15.014,14.023L15.014,13.023ZM15.014,5.054L10.014,5.054L10.014,6.054L15.014,6.054L15.014,5.054ZM15.014,9.025L10.014,9.025L10.014,10.025L15.014,10.025L15.014,9.025ZM20.014,16.025L15.014,16.025L15.014,17.025L20.014,17.025L20.014,16.025ZM20.014,20.072L15.014,20.072L15.014,21.072L20.014,21.072L20.014,20.072ZM10.014,3.002L9.014,3.002L9.014,14.023L10.014,14.023L10.014,3.002ZM15.014,14.023L14.014,14.023L14.014,21.072L15.014,21.072L15.014,14.023Z"/></g>\n        <g id="snippets"><path d="M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.4-.38.4-1.01 0-1.41zm-3 1.6l-9.46-9.46c-.61.45-1.29.72-2 .82-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09 4.24-4.24-3.09-3.09c1.24-.07 2.49.37 3.44 1.31 1.08 1.08 1.49 2.57 1.24 3.96-.12.71-.42 1.37-.88 1.96l9.45 9.45-.88.89z"/></g>\n\n    </defs>\n');window.customElements.define("demo-box",class extends hr{static get styles(){return[Er,cr(le||(le=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                color: var(--obap-text-primary-color);
            }

            .label {
                margin-top: 8px;
                line-height: auto;
                text-align: center;
            }

            .content {
                display: flex;
                justify-content: center;
                flex: 1;
            }
        `))]}static get properties(){return{label:{type:String,attribute:"label"}}}constructor(){super(),this.label=""}render(){return Gi(ce||(ce=ci`
            <div class="container">
                <div class="content"><slot></slot></div>
                ${0}
            </div>
        `),this.label?Gi(de||(de=ci`<div class="typography-caption label">${0}</div>`),this.label):null)}});window.customElements.define("demo-panel",class extends hr{static get styles(){return[kr,cr(pe||(pe=ci`
            :host {
                --demo-panel-padding: 8px;
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                padding: var(--demo-panel-padding);
                color: var(--obap-text-primary-color);
                background: var(--obap-surface-color);
            }

            .label {
                margin-bottom: 8px;
                font-weight: 500;
            }

            .content {
                flex: 1;
                width: 100%;
            }
        `))]}static get properties(){return{label:{type:String,attribute:"label"},elevation:{type:Number,attribute:"elevation"}}}constructor(){super(),this.label="",this.elevation=1}render(){return Gi(he||(he=ci`
            <obap-material class="container" elevation="${0}">
                ${0}
                <div class="content"><slot></slot></div>
            </obap-material>
        `),this.elevation,this.label?Gi(be||(be=ci`<div class="typography-body label">${0}</div>`),this.label):null)}});window.customElements.define("demo-styles-elevation",class extends hr{static get styles(){return[Xr,kr,cr(ue||(ue=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .item-container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: 60px 60px 60px;
                gap: 16px;
                width: 100%;
                height: 100%;
            }

            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: var(--obap-on-surface-color);
                background: var(--obap-surface-color);
                box-sizing: border-box;
            }
        `))]}static get properties(){return{items:{type:Array}}}constructor(){super(),this.items=[0,1,2,3,4,6,8,12,16,24]}render(){return Gi(ge||(ge=ci`
            <div class="container">
                <demo-panel>
                    <div class="item-container">
                        ${0}
                    </div>
                </demo-panel>
            </div>
        `),this.items.map(e=>Gi(me||(me=ci`<div class="item elevation-${0} typography-body">${0}</div>`),e,e)))}});window.customElements.define("demo-styles-iconography",class extends hr{static get styles(){return[cr(ve||(ve=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .inner-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(32px, 1fr) );
                gap: 16px;
                justify-items: center;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }


            obap-icon {
                --obap-icon-fill-color: var(--obap-text-secondary-color);
            }
        `))]}render(){return Gi(ye||(ye=ci`
            <div class="container">
                ${0}
            </div>
        `),tn().map(e=>Gi(fe||(fe=ci`
                <demo-panel label="${0}">
                    <div class="inner-container">
                        ${0}
                    </div>
                </demo-panel>
                `),e,en(e).map(e=>Gi(xe||(xe=ci`
                                    <obap-icon icon="${0}" title="${0}"></obap-icon>
                        `),e,e)))))}});window.customElements.define("obap-radio",class extends zr{static get styles(){return[kr,cr(we||(we=ci`
            :host {
                --obap-radio-selected-color: var(--obap-primary-color, #5c6bc0);
                --obap-radio-unselected-color: var(--obap-text-secondary-color, rgba(0, 0, 0, 0.54));
                --obap-radio-disabled-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-radio-ripple-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                display: inline-block;
                outline: 0;
            }

            :host([hidden]) {
                display: none !important;
            }

            :host([disabled]) {
                pointer-events: none;
                color: var(--obap-radio-disabled-color) !important;
            }

            obap-ripple {
                background: var(--obap-radio-ripple-color);
            }

            .container {
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
            }
            
            .check-container {
                position: relative;
                user-select: none;
                height: 20px;
                width: 20px;
                margin-right: 8px;
            }
            
            .check {
                user-select: none;
                fill: var(--obap-radio-unselected-color);
            }

            :host([selected]) * > .check {
                fill: var(--obap-radio-selected-color);
            }

            :host([disabled]) * > .check {
                fill: var(--obap-radio-disabled-color);
            }

            :host([disabled][selected]) * > .check {
                fill: var(--obap-radio-disabled-color);
            }
        `))]}static get properties(){return{label:{type:String,attribute:"label"},selected:{type:Boolean,attribute:"selected",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.selected=!1,this.indeterminate=!1,this.noInk=!1,this.role="radio"}render(){return Gi(_e||(_e=ci`
            <div class="container typography-body">
                <div class="check-container">
                    ${0}
                    ${0}
                </div>
                ${0}
            </div>
        `),this._getCheck(),this.noInk?null:Gi(ke||(ke=ci`<obap-ripple extend="1" ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected),this.label)}_getCheck(){return this.selected?Ki(Se||(Se=ci`<svg class="check" viewBox="0 0 24 24"><g><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></g></svg>`)):Ki(Ee||(Ee=ci`<svg class="check" viewBox="0 0 24 24"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></g></svg>`))}});class cn extends(on(hr)){static get styles(){return cr($e||($e=ci`
            :host {
                display: block;
            }

            :host[hidden] {
                display: none;
            }
        `))}constructor(){super(),this.role="radiogroup",this.enterSelects=!0}render(){return Gi(Ce||(Ce=ci`<slot></slot>`))}}customElements.define("obap-radio-group",cn);class dn extends(gr(hr)){static get styles(){return[Xr,Er,kr,cr(Ie||(Ie=ci`
            :host {
                display: block;
                height: 100%;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-radio-group {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            obap-radio {
                margin-right: 16px;
            }

            .container {
                display: flex;
                flex-direction: column;
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .top-panel {
                margin-bottom: 8px;
            }

            .items {
                flex: 1;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-rows: 40px;
                gap: 16px;
            }

            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 40px;
            }

            .light-primary-item {
                color: var(--obap-on-primary-color);
                background: var(--obap-primary-light-color);
            }

            .primary-item {
                color: var(--obap-on-primary-color);
                background: var(--obap-primary-color);
            }

            .dark-primary-item {
                color: var(--obap-on-primary-color);
                background: var(--obap-primary-dark-color);
            }

            .accent-item {
                color: var(--obap-on-accent-color);
                background: var(--obap-accent-color);
            }

            .surface-item {
                color: var(--obap-on-surface-color);
                background: var(--obap-surface-color);
            }

            .window-item {
                color: var(--obap-on-window-color);
                background: var(--obap-window-color);
            }

            .notification-item {
                color: var(--obap-on-notification-color);
                background: var(--obap-notification-color);
            }

            .error-item {
                color: var(--obap-on-error-color);
                background: var(--obap-error-color);
            }

            .selection-item {
                color: var(--obap-on-selection-color);
                background: var(--obap-selection-color);
            }

            .block-item {
                color: var(--obap-text-secondary-color);
                background: var(--obap-block-color);
            }

            .inactive-item {
                color: white;
                background: var(--obap-inactive-color);
            }

        `))]}static get properties(){return{themes:{type:Array},selectedThemeIndex:{type:Number}}}constructor(){super(),this.themes=this.getThemeNames(),this.selectedThemeIndex=0}render(){return Gi(ze||(ze=ci`
            <div class="container">
                <demo-panel class="top-panel">
                    <obap-radio-group selected-index="${0}" @obap-item-selected="${0}">
                        ${0}
                    </obap-radio-group>
                </demo-panel>

                <demo-panel>
                    <div class="items typography-body">
                        <div class="item light-primary-item elevation-1">Light Primary</div>
                        <div class="item primary-item elevation-1">Primary</div>
                        <div class="item dark-primary-item elevation-1">Dark Primary</div>
                        <div class="item accent-item elevation-1">Accent</div>
                        <div class="item surface-item elevation-1">Surface</div>
                        <div class="item window-item elevation-1">Window</div>
                        <div class="item notification-item elevation-1">Notification</div>
                        <div class="item error-item elevation-1">Error</div>
                        <div class="item selection-item elevation-1">Selection</div>
                        <div class="item block-item elevation-1">Block</div>
                        <div class="item inactive-item elevation-1">Inactive</div>
                    </div>
                </demo-panel>
            </div>
        `),this.selectedThemeIndex,this._themeSelected,this.themes.map(e=>Gi(Ae||(Ae=ci`<obap-radio label="${0}"></obap-radio>`),e)))}_themeSelected(e){this.setGlobalTheme(e.detail.item.label)}}window.customElements.define("demo-styles-theming",dn);window.customElements.define("demo-styles-typography",class extends hr{static get styles(){return[Ir,cr(Le||(Le=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }
        `))]}render(){return Gi(Ve||(Ve=ci`
            <div class="container">
                <demo-panel>
                    <div class="typography-display">Display</div>
                    <div class="typography-headline">Headline</div>
                    <div class="typography-title">Title</div>
                    <div class="typography-subtitle">Subtitle</div>
                    <div class="typography-body">Body</div>
                    <div class="typography-button">Button</div>
                    <div class="typography-caption">Caption</div>
                    <div class="typography-overline">Overline</div>
                    <div class="typography-code">Code</div>
                </demo-panel>
            </div>
        `))}});window.customElements.define("demo-buttons-normal",class extends hr{static get styles(){return[cr(Fe||(Fe=ci`
            :host {
                display: block;
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-rows: auto;
                grid-row-gap: 16px;
                grid-column-gap: 8px;
                justify-items: left;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }
        `))]}render(){return Gi(Pe||(Pe=ci`
            <demo-panel>
                <div class="container">
                    <obap-button label="Flat"></obap-button>
                    <obap-button label="Outline" outline></obap-button>
                    <obap-button label="Raised" raised></obap-button>
                    <obap-button label="No Ink" no-ink raised></obap-button>
                    <obap-button label="Toggle" toggle raised></obap-button>
                    <obap-button label="Disabled" disabled raised></obap-button>
                </div>
            </demo-panel>

            <demo-panel>
                <div class="container">
                    <obap-button label="Flat" icon="app:android"></obap-button>
                    <obap-button label="Outline" icon="app:android" outline></obap-button>
                    <obap-button label="Raised" icon="app:polymer" raised></obap-button>
                    <obap-button label="No Ink" icon="app:styles" no-ink raised></obap-button>
                    <obap-button label="Toggle" icon="app:charts" toggle raised></obap-button>
                    <obap-button label="Disabled" icon="app:buttons" disabled raised></obap-button>
                </div>
            </demo-panel>
        `))}});window.customElements.define("demo-buttons-fab",class extends hr{static get styles(){return[cr(Te||(Te=ci`
            :host {
                display: block;
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-rows: auto;
                grid-row-gap: 16px;
                grid-column-gap: 8px;
                justify-items: left;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }
        `))]}render(){return Gi(Me||(Me=ci`
            <demo-panel>
                <div class="container">
                    <obap-button round icon="app:android"></obap-button>
                    <obap-button round icon="app:android" outline></obap-button>
                    <obap-button round icon="app:polymer" raised></obap-button>
                    <obap-button round icon="app:styles" no-ink raised></obap-button>
                    <obap-button round icon="app:charts" toggle raised></obap-button>
                    <obap-button round icon="app:buttons" disabled raised></obap-button>
                </div>
            </demo-panel>

            <demo-panel>
                <div class="container">
                    <obap-button round label="Flat" icon="app:android"></obap-button>
                    <obap-button round label="Outline" icon="app:android" outline></obap-button>
                    <obap-button round label="Raised" icon="app:polymer" raised></obap-button>
                    <obap-button round label="No Ink" icon="app:styles" no-ink raised></obap-button>
                    <obap-button round label="Toggle" icon="app:charts" toggle raised></obap-button>
                    <obap-button round label="Disabled" icon="app:buttons" disabled raised></obap-button>
                </div>
            </demo-panel>
        `))}});window.customElements.define("demo-buttons-custom",class extends hr{static get styles(){return[cr(Re||(Re=ci`
            :host {
                display: block;
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-rows: auto;
                grid-row-gap: 16px;
                grid-column-gap: 8px;
                justify-items: left;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }

            .primary {
                --obap-button-ripple-color: var(--obap-on-primary-color);
                --obap-button-color: var(--obap-on-primary-color);
                --obap-button-background-color: var(--obap-primary-color);
            }

            .accent {
                --obap-button-ripple-color: var(--obap-on-accent-color);
                --obap-button-color: var(--obap-on-accent-color);
                --obap-button-background-color: var(--obap-accent-color);
            }

            .primary-reverse {
                --obap-button-ripple-color: var(--obap-primary-color);
                --obap-button-color: var(--obap-primary-color);
                --obap-button-background-color: var(--obap-on-primary-color);
            }

            .accent-reverse {
                --obap-button-ripple-color: var(--obap-accent-color);
                --obap-button-color: var(--obap-accent-color);
                --obap-button-background-color: var(--obap-on-accent-color);
            }

            .green {
                --obap-button-color: white;
                --obap-button-background-color: green;
            }

            .magenta {
                --obap-button-disabled-background-color: lightpink;
            }
        `))]}render(){return Gi(Be||(Be=ci`
            <demo-panel>
                <div class="container">
                    <obap-button class="primary" label="Button" raised></obap-button>
                    <obap-button class="accent" label="Button" raised></obap-button>
                    <obap-button class="primary-reverse" label="Button" raised></obap-button>
                </div>
            </demo-panel>
           
            <demo-panel>
                <div class="container">
                    <obap-button class="primary" label="Button" raised icon="app:android"></obap-button>
                    <obap-button class="accent" label="Button" raised icon="app:android"></obap-button>
                    <obap-button class="primary-reverse" label="Button" raised icon="app:android"></obap-button>
                </div>
            </demo-panel>

            <demo-panel>
                <div class="container">
                    <obap-button class="primary" round raised icon="app:styles"></obap-button>
                    <obap-button class="accent" round raised icon="app:styles"></obap-button>
                    <obap-button class="primary-reverse" round raised icon="app:styles"></obap-button>
                </div>
            </demo-panel>

            <demo-panel>
                <div class="container">
                    <obap-button class="primary" label="Button" round raised icon="app:charts"></obap-button>
                    <obap-button class="accent" label="Button" round raised icon="app:charts"></obap-button>
                    <obap-button class="primary-reverse" label="Button" round raised icon="app:charts"></obap-button>
                </div>
            </demo-panel>
        `))}});window.customElements.define("obap-backdrop",class extends hr{static get styles(){return[cr(Ne||(Ne=ci`
            :host {
                --obap-backdrop-color: #000000;
                --obap-backdrop-opacity: 0.6;
                
                display: block;
                position: fixed;
                left: 0;
                top: 0;
                width: 100vw;
                height: 100vh;
                background: var(--obap-backdrop-color);
                pointer-events: none;
                transition: opacity 0.2s;
                opacity: 0;
            }
    
            :host([visible]) {
                pointer-events: auto;
                opacity: var(--obap-backdrop-opacity);
            }
    
            :host([disabled]) {
                pointer-events: none;
            }
        `))]}static get properties(){return{visible:{type:Boolean,attribute:"visible",reflect:!0},_count:{type:Number,attribute:"count",reflect:!0}}}constructor(){super(),this.visible=!1,this._count=0,this._zIndex=248,this._items=[]}show(e){return-1===this._items.indexOf(e)&&this._items.push(e),this._count+=1,this._zIndex+=2,this.style.zIndex=this._zIndex,e.modal&&(this.visible=this._count>0),this._zIndex+1}hide(e){const t=this._items.indexOf(e);this._items.splice(t,1);const o=this._items[this._items.length-1];this._count-=1,this._zIndex-=2,this.style.zIndex=this._zIndex,o&&o.modal&&(this.visible=this._count>0),0===this._count&&this.parentNode.removeChild(this)}isOnTop(e){return this._items.indexOf(e)===this._items.length-1}});window.customElements.define("obap-dialog",class extends hr{static get styles(){return[Kr,cr(Oe||(Oe=ci`
            :host {
                display: none;
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: none;
            }

            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            :host([opened]) {
                display: flex;
            }

            .container {
                background: white;
            }
        `))]}get opened(){return this._opened}set opened(e){let t=this._opened;requestAnimationFrame(()=>{this._opened=e,this.requestUpdate("opened",t),this.opened?window.addEventListener("popstate",this._boundHandleOnPopStateEvent):window.removeEventListener("popstate",this._boundHandleOnPopStateEvent),this.modal||(this._opened?window.addEventListener("click",this._boundHandleDocumentClickEvent,!1):window.removeEventListener("click",this._boundHandleDocumentClickEvent)),this.noCancelOnEscKey||(this._opened?window.addEventListener("keydown",this._boundHandleGlobalKeyPressEvent,!1):window.removeEventListener("keydown",this._boundHandleGlobalKeyPressEvent)),this.fireMessage("obap-dialog-opened-changed",{opened:this._opened})})}static get properties(){return{opened:{type:Boolean,attribute:"opened",reflect:!0},modal:{type:Boolean,attribute:"modal"},noCancelOnEscKey:{type:Boolean,attribute:"no-cancel-on-esc-key"}}}constructor(){super(),this._opened=!1,this._backdrop=null,this.modal=!1,this.noCancelOnEscKey=!1,this._boundHandleDocumentClickEvent=this._handleDocumentClickEvent.bind(this),this._boundHandleGlobalKeyPressEvent=this._handleGlobalKeyPressEvent.bind(this),this._boundHandleOnPopStateEvent=this._handleOnPopStateEvent.bind(this)}updated(e){super.updated(e),e.forEach((e,t)=>{"opened"===t&&e!==this.opened&&this._updateBackdrop()})}render(){return Gi(He||(He=ci`
            <div class="container elevation-24" @click="${0}">
                <slot></slot>
            </div>       
        `),this._handleClick)}open(){this.opened=!0}close(){this.opened=!1}_updateBackdrop(){this._backdrop=document.body.querySelector("obap-backdrop")||document.body.appendChild(document.createElement("obap-backdrop")),requestAnimationFrame(()=>{this.opened?this.style.zIndex=this._backdrop.show(this):this._backdrop.hide(this)})}_handleClick(e){const t=e.composedPath(),o=t.indexOf(this);for(let i=0;i<o;i++){var a=t[i];if(a.hasAttribute&&(a.hasAttribute("dialog-confirm")||a.hasAttribute("dialog-dismiss"))){this.opened=!1,e.stopPropagation();break}}}_handleDocumentClickEvent(e){-1===e.composedPath().indexOf(this)&&(this.opened=!1,e.stopPropagation())}_handleGlobalKeyPressEvent(e){"Escape"===e.key&&this._backdrop&&this._backdrop.isOnTop(this)&&(this.opened=!1,e.stopImmediatePropagation())}_handleOnPopStateEvent(e){this.opened=!1}});window.customElements.define("demo-dialogs",class extends hr{static get styles(){return[_r,cr(De||(De=ci`
            :host {
                display: block;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-button {
                --obap-button-ripple-color: var(--obap-on-primary-color);
                --obap-button-color: var(--obap-on-primary-color);
                --obap-button-background-color: var(--obap-primary-color);
            }

            .action {
                margin-left: 8px;
            }

            .container {
                height: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
            }

            .caption {
                padding: 8px;
            }

            .content {
                width: 70vw;
                height: 40vh;
                margin: 0 8px;
                background: #E0E0E0;
            }

            .child-content {
                width: 50vw;
                height: 10vh;
                margin: 0 8px;
                background: #E0E0E0;
            }

            .actions {
                display: flex;
                flex-direction: row-reverse;
                padding: 8px;
            }
        `))]}render(){return Gi(je||(je=ci`
            <obap-dialog id="plain-dialog">
                ${0}
                ${0}
                ${0}
            </obap-dialog>

            <obap-dialog id="modal-dialog" modal>
                ${0}
                ${0}
                ${0}
            </obap-dialog>

            <obap-dialog id="nested-dialog" modal>
                ${0}
                ${0}
                ${0}
            </obap-dialog>

            <obap-dialog id="child-dialog" modal>
                ${0}
                ${0}
                ${0}
            </obap-dialog>

            <demo-panel>
                <div class="container">
                    <obap-button raised label="Plain" @click="${0}"></obap-button>
                    <obap-button raised label="Modal" @click="${0}"></obap-button>
                    <obap-button raised label="Nested" @click="${0}"></obap-button>
                </div>
            </demo-panel>
        `),this._renderCaption("Plain Dialog"),this._renderContent(),this._renderActions(),this._renderCaption("Modal Dialog"),this._renderContent(),this._renderActions(),this._renderCaption("Nested Dialog"),this._renderContent(),this._renderNestedActions(),this._renderCaption("Child Dialog"),this._renderChildContent(),this._renderActions(),this._showPlainDialog,this._showModalDialog,this._showNestedDialog)}_renderCaption(e){return Gi(Ue||(Ue=ci`
            <div class="caption typography-subtitle">${0}</div>
        `),e)}_renderContent(){return Gi(qe||(qe=ci`
            <div class="content"></div>
        `))}_renderChildContent(){return Gi(We||(We=ci`
            <div class="child-content"></div>
        `))}_renderActions(){return Gi(Ze||(Ze=ci`
            <div class="actions">
                <obap-button class="action" raised label="cancel" dialog-dismiss @click="${0}"></obap-button>
                <obap-button class="action" raised label="ok" dialog-confirm></obap-button>
            </div>
        `),this._handleCancel)}_renderNestedActions(){return Gi(Ge||(Ge=ci`
            <div class="actions">
                <obap-button class="action" raised label="cancel" dialog-dismiss @click="${0}"></obap-button>
                <obap-button class="action" raised label="ok" dialog-confirm></obap-button>
                <obap-button class="action" raised label="child" @click="${0}"></obap-button>
            </div>
        `),this._handleCancel,this._showChildDialog)}_showPlainDialog(){this.renderRoot.getElementById("plain-dialog").open()}_showModalDialog(){this.renderRoot.getElementById("modal-dialog").open()}_showNestedDialog(){this.renderRoot.getElementById("nested-dialog").open()}_showChildDialog(){this.renderRoot.getElementById("child-dialog").open()}_handleCancel(){}});const pn=(e,t)=>{const o=e.startNode.parentNode,a=void 0===t?e.endNode:t.startNode,i=o.insertBefore(fi(),a);o.insertBefore(fi(),a);const r=new Ri(e.options);return r.insertAfterNode(i),r},hn=(e,t)=>(e.setValue(t),e.commit(),e),bn=(e,t,o)=>{const a=e.startNode.parentNode,i=o?o.startNode:e.endNode,r=t.endNode.nextSibling;r!==i&&pi(a,t.startNode,r,i)},un=e=>{hi(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},gn=(e,t,o)=>{const a=new Map;for(let i=t;i<=o;i++)a.set(e[i],i);return a},mn=new WeakMap,vn=new WeakMap,yn=Ei((e,t,o)=>{let a;return void 0===o?o=t:void 0!==t&&(a=t),t=>{if(!(t instanceof Ri))throw new Error("repeat can only be used in text bindings");const i=mn.get(t)||[],r=vn.get(t)||[],n=[],s=[],l=[];let c,d,p=0;for(const t of e)l[p]=a?a(t,p):p,s[p]=o(t,p),p++;let h=0,b=i.length-1,u=0,g=s.length-1;for(;h<=b&&u<=g;)if(null===i[h])h++;else if(null===i[b])b--;else if(r[h]===l[u])n[u]=hn(i[h],s[u]),h++,u++;else if(r[b]===l[g])n[g]=hn(i[b],s[g]),b--,g--;else if(r[h]===l[g])n[g]=hn(i[h],s[g]),bn(t,i[h],n[g+1]),h++,g--;else if(r[b]===l[u])n[u]=hn(i[b],s[u]),bn(t,i[b],i[h]),b--,u++;else if(void 0===c&&(c=gn(l,u,g),d=gn(r,h,b)),c.has(r[h]))if(c.has(r[b])){const e=d.get(l[u]),o=void 0!==e?i[e]:null;if(null===o){const e=pn(t,i[h]);hn(e,s[u]),n[u]=e}else n[u]=hn(o,s[u]),bn(t,o,i[h]),i[e]=null;u++}else un(i[b]),b--;else un(i[h]),h++;for(;u<=g;){const e=pn(t,n[g+1]);hn(e,s[u]),n[u++]=e}for(;h<=b;){const e=i[h++];null!==e&&un(e)}mn.set(t,n),vn.set(t,l)}}),fn=e=>class extends e{static get properties(){return{columns:{type:Array,attribute:"columns"},rows:{type:Array,attribute:"rows"},selectedRows:{type:Array},idField:{type:String,attribute:"id-field"},selectionMode:{type:String,attribute:"selection-mode"},sortIndex:{type:Number,attribute:"sort-index"},sortDescending:{type:Boolean,attribute:"sort-descending"}}}constructor(){super(),this.columns=[],this.rows=[],this.selectedRows=[],this.selectionMode="none",this.idField="id",this.sortIndex=-1,this.sortDescending=!1}get sortedRows(){if(this.sortIndex>-1)switch(this._sortField=this.columns[this.sortIndex].field,this._sortType=this.columns[this.sortIndex].type,this._sortType){case"number":this.sortDescending?this.rows.sort(this.compareNumberDesc.bind(this)):this.rows.sort(this.compareNumberAsc.bind(this));break;case"boolean":this.sortDescending?this.rows.sort(this.compareBooleanDesc.bind(this)):this.rows.sort(this.compareBooleanAsc.bind(this));break;default:this.sortDescending?this.rows.sort(this.compareDesc.bind(this)):this.rows.sort(this.compareAsc.bind(this))}return this.rows}get effectiveSelectedRows(){return"multiple"===this.selectionMode?this.selectedRows:this.selectedRows.length>0?[this.selectedRows[0]]:[]}sortColumn(e){e>-1&&e<this.columns.length&&(e===this.sortIndex?this.sortDescending=!this.sortDescending:(this.sortIndex=e,this.sortDescending=!1))}selectRow(e){if("none"===this.selectionMode)return;"single"===this.selectionMode&&(this.selectedRows.length=0);const t=this.rows[e];t&&-1===this.selectedRows.indexOf(t)&&(this.selectedRows.push(t),this.fireMessage("obap-data-selection-changed"))}deselectRow(e){if("none"===this.selectionMode)return;const t=this.rows[e];if(t){const e=this.selectedRows.indexOf(t);-1!==e&&("single"===this.selectionMode?this.selectedRows.length=0:this.selectedRows.splice(e,1),this.fireMessage("obap-data-selection-changed"))}}selectAllRows(){"multiple"===this.selectionMode&&(this.selectedRows=[...this.rows],this.fireMessage("obap-data-selection-changed"))}deselectAllRows(){this.selectedRows.length=0,this.fireMessage("obap-data-selection-changed")}compareAsc(e,t){let o=e[this._sortField],a=t[this._sortField];return o<a?-1:o>a?1:0}compareDesc(e,t){let o=e[this._sortField],a=t[this._sortField];return o<a?1:o>a?-1:0}compareNumberAsc(e,t){let o=Number(e[this._sortField]),a=Number(t[this._sortField]);return o<a?-1:o>a?1:0}compareNumberDesc(e,t){let o=Number(e[this._sortField]),a=Number(t[this._sortField]);return o<a?1:o>a?-1:0}compareBooleanAsc(e,t){let o=Boolean(e[this._sortField]),a=Boolean(t[this._sortField]);return o<a?-1:o>a?1:0}compareBooleanDesc(e,t){let o=Boolean(e[this._sortField]),a=Boolean(t[this._sortField]);return o<a?1:o>a?-1:0}};window.customElements.define("obap-data-table-layout",class extends hr{static get styles(){return[cr(Ke||(Ke=ci`
            :host {
                --obap-data-table-layout-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-data-table-layout-background-color: transparent;
                --obap-data-table-layout-border-color: var(--obap-divider-on-surface-color, rgba(0, 0, 0, 0.20));
                --obap-data-table-layout-border-style: solid;

                --obap-data-table-layout-grouper-color: inherit;
                --obap-data-table-layout-grouper-background-color: inherit;
                --obap-data-table-layout-grouper-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-grouper-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-grouper-border-width: 0;

                --obap-data-table-layout-header-action-left-color: inherit;
                --obap-data-table-layout-header-action-left-background-color: inherit;
                --obap-data-table-layout-header-action-left-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-header-action-left-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-header-action-left-border-width: 0;

                --obap-data-table-layout-header-fixed-left-color: inherit;
                --obap-data-table-layout-header-fixed-left-background-color: inherit;
                --obap-data-table-layout-header-fixed-left-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-header-fixed-left-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-header-fixed-left-border-width: 0;

                --obap-data-table-layout-header-scroll-color: inherit;
                --obap-data-table-layout-header-scroll-background-color: inherit;
                --obap-data-table-layout-header-scroll-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-header-scroll-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-header-scroll-border-width: 0;

                --obap-data-table-layout-header-fixed-right-color: inherit;
                --obap-data-table-layout-header-fixed-right-background-color: inherit;
                --obap-data-table-layout-header-fixed-right-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-header-fixed-right-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-header-fixed-right-border-width: 0;

                --obap-data-table-layout-header-action-right-color: inherit;
                --obap-data-table-layout-header-action-right-background-color: inherit;
                --obap-data-table-layout-header-action-right-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-header-action-right-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-header-action-right-border-width: 0;

                --obap-data-table-layout-body-action-left-color: inherit;
                --obap-data-table-layout-body-action-left-background-color: inherit;
                --obap-data-table-layout-body-action-left-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-body-action-left-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-body-action-left-border-width: 0;

                --obap-data-table-layout-body-fixed-left-color: inherit;
                --obap-data-table-layout-body-fixed-left-background-color: inherit;
                --obap-data-table-layout-body-fixed-left-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-body-fixed-left-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-body-fixed-left-border-width: 0;

                --obap-data-table-layout-body-scroll-color: inherit;
                --obap-data-table-layout-body-scroll-background-color: inherit;
                --obap-data-table-layout-body-scroll-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-body-scroll-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-body-scroll-border-width: 0;

                --obap-data-table-layout-body-fixed-right-color: inherit;
                --obap-data-table-layout-body-fixed-right-background-color: inherit;
                --obap-data-table-layout-body-fixed-right-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-body-fixed-right-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-body-fixed-right-border-width: 0;

                --obap-data-table-layout-body-action-right-color: inherit;
                --obap-data-table-layout-body-action-right-background-color: inherit;
                --obap-data-table-layout-body-action-right-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-body-action-right-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-body-action-right-border-width: 0;

                --obap-data-table-layout-footer-action-left-color: inherit;
                --obap-data-table-layout-footer-action-left-background-color: inherit;
                --obap-data-table-layout-footer-action-left-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-footer-action-left-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-footer-action-left-border-width: 0;

                --obap-data-table-layout-footer-fixed-left-color: inherit;
                --obap-data-table-layout-footer-fixed-left-background-color: inherit;
                --obap-data-table-layout-footer-fixed-left-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-footer-fixed-left-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-footer-fixed-left-border-width: 0;

                --obap-data-table-layout-footer-scroll-color: inherit;
                --obap-data-table-layout-footer-scroll-background-color: inherit;
                --obap-data-table-layout-footer-scroll-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-footer-scroll-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-footer-scroll-border-width: 0;

                --obap-data-table-layout-footer-fixed-right-color: inherit;
                --obap-data-table-layout-footer-fixed-right-background-color: inherit;
                --obap-data-table-layout-footer-fixed-right-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-footer-fixed-right-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-footer-fixed-right-border-width: 0;

                --obap-data-table-layout-footer-action-right-color: inherit;
                --obap-data-table-layout-footer-action-right-background-color: inherit;
                --obap-data-table-layout-footer-action-right-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-footer-action-right-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-footer-action-right-border-width: 0;

                --obap-data-table-layout-pager-color: inherit;
                --obap-data-table-layout-pager-background-color: inherit;
                --obap-data-table-layout-pager-border-color: var(--obap-data-table-layout-border-color);
                --obap-data-table-layout-pager-border-style: var(--obap-data-table-layout-border-style);
                --obap-data-table-layout-pager-border-width: 0;
                
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                width: 100%;
                height: 100%;
                overflow: hidden;
                color: var(--obap-data-table-layout-color);
                background: var(--obap-data-table-layout-background-color);
                display: grid;
                
                grid-template-columns: auto auto 1fr auto auto; 
                grid-template-rows:    auto auto 1fr auto auto;
                grid-template-areas: "grouper              grouper             grouper         grouper              grouper"
                                     "header-action-left   header-fixed-left   header-scroll   header-fixed-right   header-action-right"
                                     "body-action-left     body-fixed-left     body-scroll     body-fixed-right     body-action-right"
                                     "footer-action-left   footer-fixed-left   footer-scroll   footer-fixed-right   footer-action-right"
                                     "pager                pager               pager           pager                pager"
            }

            .grid-part {
                width: 100%;
                height: 100%;
                overflow: hidden;
                box-sizing: border-box;
                outline: 0;
            }

            .grouper {
                grid-area: grouper;
                color: var(--obap-data-table-layout-grouper-color);
                background: var(--obap-data-table-layout-grouper-background-color);
                border-color: var(--obap-data-table-layout-grouper-border-color);
                border-style: var(--obap-data-table-layout-grouper-border-style);
                border-width: var(--obap-data-table-layout-grouper-border-width);
            }

            .header-action-left {
                grid-area: header-action-left;
                color: var(--obap-data-table-layout-header-action-left-color);
                background: var(--obap-data-table-layout-header-action-left-background-color);
                border-color: var(--obap-data-table-layout-header-action-left-border-color);
                border-style: var(--obap-data-table-layout-header-action-left-border-style);
                border-width: var(--obap-data-table-layout-header-action-left-border-width);
            }

            .header-fixed-left {
                grid-area: header-fixed-left;
                color: var(--obap-data-table-layout-header-fixed-left-color);
                background: var(--obap-data-table-layout-header-fixed-left-background-color);
                border-color: var(--obap-data-table-layout-header-fixed-left-border-color);
                border-style: var(--obap-data-table-layout-header-fixed-left-border-style);
                border-width: var(--obap-data-table-layout-header-fixed-left-border-width);
            }

            .header-scroll {
                grid-area: header-scroll;
                color: var(--obap-data-table-layout-header-scroll-color);
                background: var(--obap-data-table-layout-header-scroll-background-color);
                border-color: var(--obap-data-table-layout-header-scroll-border-color);
                border-style: var(--obap-data-table-layout-header-scroll-border-style);
                border-width: var(--obap-data-table-layout-header-scroll-border-width);
            }

            .header-fixed-right {
                grid-area: header-fixed-right;
                color: var(--obap-data-table-layout-header-fixed-right-color);
                background: var(--obap-data-table-layout-header-fixed-right-background-color);
                border-color: var(--obap-data-table-layout-header-fixed-right-border-color);
                border-style: var(--obap-data-table-layout-header-fixed-right-border-style);
                border-width: var(--obap-data-table-layout-header-fixed-right-border-width);
            }

            .header-action-right {
                grid-area: header-action-right;
                color: var(--obap-data-table-layout-header-action-right-color);
                background: var(--obap-data-table-layout-header-action-right-background-color);
                border-color: var(--obap-data-table-layout-header-action-right-border-color);
                border-style: var(--obap-data-table-layout-header-action-right-border-style);
                border-width: var(--obap-data-table-layout-header-action-right-border-width);
            }

            .body-action-left {
                grid-area: body-action-left;
                color: var(--obap-data-table-layout-body-action-left-color);
                background: var(--obap-data-table-layout-body-action-left-background-color);
                border-color: var(--obap-data-table-layout-body-action-left-border-color);
                border-style: var(--obap-data-table-layout-body-action-left-border-style);
                border-width: var(--obap-data-table-layout-body-action-left-border-width);
            }

            .body-fixed-left {
                grid-area: body-fixed-left;
                color: var(--obap-data-table-layout-body-fixed-left-color);
                background: var(--obap-data-table-layout-body-fixed-left-background-color);
                border-color: var(--obap-data-table-layout-body-fixed-left-border-color);
                border-style: var(--obap-data-table-layout-body-fixed-left-border-style);
                border-width: var(--obap-data-table-layout-body-fixed-left-border-width);
            }

            .body-scroll {
                grid-area: body-scroll;
                color: var(--obap-data-table-layout-body-scroll-color);
                background: var(--obap-data-table-layout-body-scroll-background-color);
                border-color: var(--obap-data-table-layout-body-scroll-border-color);
                border-style: var(--obap-data-table-layout-body-scroll-border-style);
                border-width: var(--obap-data-table-layout-body-scroll-border-width);
            }

            .body-fixed-right {
                grid-area: body-fixed-right;
                color: var(--obap-data-table-layout-body-fixed-right-color);
                background: var(--obap-data-table-layout-body-fixed-right-background-color);
                border-color: var(--obap-data-table-layout-body-fixed-right-border-color);
                border-style: var(--obap-data-table-layout-body-fixed-right-border-style);
                border-width: var(--obap-data-table-layout-body-fixed-right-border-width);
            }

            .body-action-right {
                grid-area: body-action-right;
                color: var(--obap-data-table-layout-body-action-right-color);
                background: var(--obap-data-table-layout-body-action-right-background-color);
                border-color: var(--obap-data-table-layout-body-action-right-border-color);
                border-style: var(--obap-data-table-layout-body-action-right-border-style);
                border-width: var(--obap-data-table-layout-body-action-right-border-width);
            }

            .footer-action-left {
                grid-area: footer-action-left;
                color: var(--obap-data-table-layout-footer-action-left-color);
                background: var(--obap-data-table-layout-footer-action-left-background-color);
                border-color: var(--obap-data-table-layout-footer-action-left-border-color);
                border-style: var(--obap-data-table-layout-footer-action-left-border-style);
                border-width: var(--obap-data-table-layout-footer-action-left-border-width);
            }

            .footer-fixed-left {
                grid-area: footer-fixed-left;
                color: var(--obap-data-table-layout-footer-fixed-left-color);
                background: var(--obap-data-table-layout-footer-fixed-left-background-color);
                border-color: var(--obap-data-table-layout-footer-fixed-left-border-color);
                border-style: var(--obap-data-table-layout-footer-fixed-left-border-style);
                border-width: var(--obap-data-table-layout-footer-fixed-left-border-width);
            }

            .footer-scroll {
                grid-area: footer-scroll;
                color: var(--obap-data-table-layout-footer-scroll-color);
                background: var(--obap-data-table-layout-footer-scroll-background-color);
                border-color: var(--obap-data-table-layout-footer-scroll-border-color);
                border-style: var(--obap-data-table-layout-footer-scroll-border-style);
                border-width: var(--obap-data-table-layout-footer-scroll-border-width);
            }

            .footer-fixed-right {
                grid-area: footer-fixed-right;
                color: var(--obap-data-table-layout-footer-fixed-right-color);
                background: var(--obap-data-table-layout-footer-fixed-right-background-color);
                border-color: var(--obap-data-table-layout-footer-fixed-right-border-color);
                border-style: var(--obap-data-table-layout-footer-fixed-right-border-style);
                border-width: var(--obap-data-table-layout-footer-fixed-right-border-width);
            }

            .footer-action-right {
                grid-area: footer-action-right;
                color: var(--obap-data-table-layout-footer-action-right-color);
                background: var(--obap-data-table-layout-footer-action-right-background-color);
                border-color: var(--obap-data-table-layout-footer-action-right-border-color);
                border-style: var(--obap-data-table-layout-footer-action-right-border-style);
                border-width: var(--obap-data-table-layout-footer-action-right-border-width);
            }

            .pager {
                grid-area: pager;
                color: var(--obap-data-table-layout-pager-color);
                background: var(--obap-data-table-layout-pager-background-color);
                border-color: var(--obap-data-table-layout-pager-border-color);
                border-style: var(--obap-data-table-layout-pager-border-style);
                border-width: var(--obap-data-table-layout-pager-border-width);
            }

            ::slotted([slot="body-fixed-left"]), ::slotted([slot="body-scroll"]), ::slotted([slot="body-fixed-right"]) {
                width: 100%;
                height: 100%;
            }

            .hidden-scrollbar {
                scrollbar-width: none;
            }

            .hidden-scrollbar::-webkit-scrollbar {
                width: 0;
                height: 0;
            }

            .empty {
                border: none;
            }
        `))]}constructor(){super(),this._slotLayoutComplete=!1,this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._boundHScrollHandler=this._hScrollHandler.bind(this),this._boundVScrollHandler=this._vScrollHandler.bind(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent),this._resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>this._positionScrollAreas()),this.fireMessage("obap-data-table-layout-size-changed")})}connectedCallback(){super.connectedCallback(),this._scrollbarWidth=this._getScrollbarWidth(),this._scrollbarStyle=this._hasScrollbarStyle(),this._resizeObserver.observe(this)}disconnectedCallback(){this._resizeObserver.unobserve(this),super.disconnectedCallback()}render(){return Gi(Xe||(Xe=ci`
            <div class="container">
                <div tabindex="0" class="grid-part grouper" no-scroll><slot name="grouper"></slot></div>
                
                <div tabindex="0" class="grid-part header-action-left" no-scroll><slot name="header-action-left"></slot></div>
                <div tabindex="0" class="grid-part header-fixed-left" no-scroll><slot name="header-fixed-left"></slot></div>
                <div tabindex="0" class="grid-part header-scroll" h-scroll><slot name="header-scroll"></slot></div>
                <div tabindex="0" class="grid-part header-fixed-right" no-scroll><slot name="header-fixed-right"></slot></div>
                <div tabindex="0" class="grid-part header-action-right" no-scroll><slot name="header-action-right"></slot></div>
               
                <div tabindex="0" class="grid-part body-action-left" v-scroll><slot name="body-action-left"></slot></div>
                <div tabindex="0" class="grid-part body-fixed-left" v-scroll><slot name="body-fixed-left"></slot></div>
                <div tabindex="0" class="grid-part body-scroll" v-scroll h-scroll><slot name="body-scroll"></slot></div>
                <div tabindex="0" class="grid-part body-fixed-right" v-scroll><slot name="body-fixed-right"></slot></div>
                <div tabindex="0" class="grid-part body-action-right" v-scroll><slot name="body-action-right"></slot></div>
                
                <div tabindex="0" class="grid-part footer-action-left" no-scroll><slot name="footer-action-left"></slot></div>
                <div tabindex="0" class="grid-part footer-fixed-left" no-scroll><slot name="footer-fixed-left"></slot></div>
                <div tabindex="0" class="grid-part footer-scroll" h-scroll><slot name="footer-scroll"></slot></div>
                <div tabindex="0" class="grid-part footer-fixed-right" no-scroll><slot name="footer-fixed-right"></slot></div>
                <div tabindex="0" class="grid-part footer-action-right" no-scroll><slot name="footer-action-right"></slot></div>
                
                <div tabindex="0" class="grid-part pager" no-scroll><slot name="pager"></slot></div>
            </div>
        `))}_handleSlotChangeEvent(e){if(this._slotLayoutComplete)return;this._slotLayoutComplete=!0,this._positionScrollAreas(),[...this.renderRoot.querySelectorAll("slot")].filter(e=>0===e.assignedElements().length).map(e=>e.parentElement).forEach(e=>{(e.clientWidth<=1||e.clientHeight<=1)&&e.classList.add("empty")})}_hScrollHandler(e){this._hSync(e.target)}_vScrollHandler(e){this._vSync(e.target)}_hSync(e){e._ignoreLeftScroll?e._ignoreLeftScroll=!1:this._hElements.forEach(t=>{t!==e&&t.scrollLeft!==e.scrollLeft&&this._scrollLeft(t,e.scrollLeft)})}_vSync(e){e._ignoreTopScroll?e._ignoreTopScroll=!1:this._vElements.forEach(t=>{t!==e&&t.scrollTop!==e.scrollTop&&this._scrollTop(t,e.scrollTop)})}_hasScrollbarStyle(){return getComputedStyle(this).scrollbarWidth}_positionScrollAreas(){this._vElements=[...this.renderRoot.querySelectorAll("div[v-scroll]")];const e=this._vElements.length-1,t=Math.max(...this._vElements.map(e=>e.scrollHeight));this._vElements.forEach((o,a)=>{if(o.style.overflowY="auto",0===o.children[0].assignedElements().length){let i=o.querySelector("div.scroll-spacer");i||(i=document.createElement("div"),i.classList.add("scroll-spacer"),o.appendChild(i)),i.style.height=t+"px",i.style.width=t-o.clientHeight>0&&this._scrollbarStyle&&a===e?this._scrollbarWidth:"0.1px"}a!==e&&o.classList.add("hidden-scrollbar"),o.addEventListener("scroll",this._boundVScrollHandler,{passive:!0})}),this._hElements=[...this.renderRoot.querySelectorAll("div[h-scroll]")];const o=this._hElements.length-1,a=Math.max(...this._hElements.map(e=>e.scrollWidth));this._hElements.forEach((e,t)=>{if(e.style.overflowX="auto",0===e.children[0].assignedElements().length){let t=e.querySelector("div.scroll-spacer");t||(t=document.createElement("div"),t.classList.add("scroll-spacer"),e.appendChild(t)),t.style.width=a+"px",t.style.height="0.1px"}t!==o&&e.classList.add("hidden-scrollbar"),e.addEventListener("scroll",this._boundHScrollHandler,{passive:!0})})}_scrollLeft(e,t){e._ignoreLeftScroll=!0,e.scrollLeft=t}_scrollTop(e,t){e._ignoreTopScroll=!0,e.scrollTop=t}_getScrollbarWidth(){const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t);const o=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),o+"px"}});window.customElements.define("obap-data-table-header-cell",class extends hr{static get styles(){return[cr(Je||(Je=ci`
            :host {
                display: block;
                font-weight: 500;
                padding: 0 20px;
                user-select: none;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            :host([sortable]) {
                cursor: pointer;
            }

            obap-icon {
                width: 14px;
                height: 14px;
            }

            .container {
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .sort-icon {
                position: absolute;
                left: -16px;
                top: calc(50% - 1px);
                transform: translate(0, -50%);
                opacity: 0;
            }

            .sort-icon[sorted] {
                opacity: 1;
            }

            .container:hover > .sort-icon:not([sorted]) {
                opacity: 0.5;
            }

            .label {
                flex: 1;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .label[column-type="number"] {
                text-align: right;
            }

            .label[column-type="boolean"], .label[column-type="action"] {
                text-align: center;
            }
        `))]}static get properties(){return{column:{type:Object},columnIndex:{type:Number,attribute:"column-index"},sorted:{type:Boolean,attribute:"sorted"},sortDescending:{type:Boolean,attribute:"sort-descending"}}}get column(){return this._column}set column(e){const t=this.column;t!==e&&(this._column=e,this._column&&this._column.sortable?this.setAttribute("sortable",""):this.removeAttribute("sortable"),this.requestUpdate("column",t))}constructor(){super(),this.column=null,this.columnIndex=-1,this.sorted=!1,this.sortDescending=!1}render(){return Gi(Ye||(Ye=ci`
            <div class="container">
                ${0}
                <div class="label" column-type="${0}">${0}</div>
            </div>
        `),this._renderSortIcon(),this.column.type,this.column.label)}_renderSortIcon(){return this.column.sortable?Gi(Qe||(Qe=ci`<obap-icon ?sorted="${0}" class="sort-icon" icon="${0}"></obap-icon>`),this.sorted,this.sorted&&this.sortDescending?"core:arrow-down":"core:arrow-up"):null}});window.customElements.define("obap-data-table-body-cell",class extends hr{static get styles(){return[cr(et||(et=ci`
            :host {
                display: block;
                font-weight: 400;
                padding: 0 20px;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                flex: 1;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .label[type="number"] {
                text-align: right;
            }

            .label[type="boolean"] {
                text-align: center;
            }

            .label[type="action"] {
                text-align: center;
                color: var(--obap-data-table-action-color);
                text-transform: uppercase;
                font-weight: 500;
                cursor: pointer;
            }

            obap-icon {
                width: 14px;
                height: 14px;
            }

            .body-cell-icon {
                fill: var(--obap-data-table-false-color);
            }

            .body-cell-icon[is-true] {
                fill: var(--obap-data-table-true-color);
            }
        `))]}static get properties(){return{value:{type:Object,attribute:"value"},column:{type:Object},row:{type:Object},falseIcon:{type:String,attribute:"false-icon"},trueIcon:{type:String,attribute:"true-icon"}}}constructor(){super(),this.value=null,this.column=null,this.row=null,this.falseIcon="",this.trueIcon=""}render(){return Gi(tt||(tt=ci`
            <div class="container">
                ${0}
            </div>
        `),this._renderContent())}_renderContent(){if(this.column.renderer)return this.column.renderer(this.value,this.column);switch(this.column.type){case"action":return Gi(ot||(ot=ci`<div class="label" type="${0}" @click="${0}">${0}</div>`),this.column.type,this._onActionClick,this.column.actionLabel);case"boolean":return Gi(at||(at=ci`<obap-icon class="body-cell-icon" ?is-true="${0}" icon="${0}"></obap-icon>`),this.value,this.value?this.trueIcon?this.trueIcon:"core:check":this.falseIcon?this.falseIcon:"core:cross");default:return Gi(it||(it=ci`<div class="label" type="${0}">${0}</div>`),this.column.type,this._format(this.value))}}_format(e){return this.column.formatter?this.column.formatter(e):e}_onActionClick(e){this.fireMessage("obap-data-table-action",{column:this.column,row:this.row})}});window.customElements.define("obap-check",class extends zr{static get styles(){return[kr,cr(rt||(rt=ci`
            :host {
                --obap-check-selected-color: var(--obap-primary-color, #5c6bc0);
                --obap-check-indeterminate-color: var(--obap-primary-color, #5c6bc0);
                --obap-check-unselected-color: var(--obap-text-secondary-color, rgba(0, 0, 0, 0.54));
                --obap-check-disabled-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-check-ripple-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                display: inline-block;
                outline: 0;
            }

            :host([hidden]) {
                display: none !important;
            }

            :host([disabled]) {
                pointer-events: none;
                color: var(--obap-check-disabled-color) !important;
            }
        
            :host([selected]) .check-container, :host([indeterminate]) .check-container {
                background: var(--obap-check-selected-color);
                border: 2px solid var(--obap-check-selected-color);
            }

            :host([disabled]) .check-container {
                border: 2px solid var(--obap-check-disabled-color);
            }

            :host([disabled][selected]) .check-container, :host([disabled][indeterminate]) .check-container {
                border: 2px solid transparent;
                background: var(--obap-check-disabled-color);
            }

            obap-ripple {
                background: var(--obap-check-ripple-color);
            }

            .container {
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
            }
            
            .check-container {
                position: relative;
                user-select: none;
                height: 12px;
                width: 12px;
                border-radius: 2px;
                background: transparent;
                border: 2px solid var(--obap-check-unselected-color);
            }

            /*
            .check-container[no-label] {
                margin-right: 0;
            }
            */

            .label {
                margin-left: 8px;
            }

            .check {
                user-select: none;
                margin-bottom: 2px;
                stroke: white;
                fill: white;
            }
        `))]}static get properties(){return{label:{type:String,attribute:"label"},selected:{type:Boolean,attribute:"selected",reflect:!0},indeterminate:{type:Boolean,attribute:"indeterminate",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}get selected(){return this._selected}set selected(e){const t=this.selected;t!==e&&(this._selected=e,this.requestUpdate("selected",t),this.fireMessage("obap-item-selected",{selected:this._selected,name:this.name}))}constructor(){super(),this._selected=!1,this.indeterminate=!1,this.noInk=!1,this.role="checkbox"}render(){return Gi(nt||(nt=ci`
            <div class="container typography-body" @click="${0}">
                <div class="check-container">
                    <div class="check">${0}</div>
                    ${0}
                </div>
                ${0}
            </div>
        `),this._clickHandler,this._getCheck(),this.noInk?null:Gi(st||(st=ci`<obap-ripple extend="2" ?has-focus="${0}"></obap-ripple>`),this.hasFocus),this.label?Gi(lt||(lt=ci`<div class="label">${0}</div>`),this.label):null)}_getCheck(){return this.indeterminate?Ki(ct||(ct=ci`<svg class="check" viewBox="0 0 24 24"><g><path d="M19 13H5v-2h14v2z"/></g></svg>`)):this.selected?Ki(dt||(dt=ci`<svg class="check" viewBox="0 0 24 24"><g><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></g></svg>`)):null}_clickHandler(e){this.selected=!this.selected,this.selected&&(this.indeterminate=!1),this.hasFocus=!1,e.preventDefault(),e.stopPropagation()}});window.customElements.define("obap-data-table-selector-cell",class extends hr{static get styles(){return[cr(pt||(pt=ci`
            :host {
                display: block;
                height: var(--obap-data-table-row-height);
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 8px;
            }
        `))]}static get properties(){return{selected:{type:Boolean,attribute:"selected"},indeterminate:{type:Boolean,attribute:"indeterminate"}}}constructor(){super(),this.selected=!1,this.indeterminate=!1}render(){return Gi(ht||(ht=ci`
            <div class="container" @obap-item-selected="${0}">
                <obap-check ?selected="${0}" ?indeterminate="${0}" no-ink></obap-check>
            </div>
        `),this._onSelect,this.selected,this.indeterminate)}_onSelect(e){this.selected=e.detail.selected}});class xn extends(fn(hr)){static get styles(){return[kr,cr(bt||(bt=ci`
            :host {
                --obap-data-table-background-color: var(--obap-surface-color, #FFFFFF);
                --obap-data-table-hover-background-color: #F5F5F5;
                --obap-data-table-fixed-background-color: #F5F5F5;
                --obap-data-table-action-color: var(--obap-primary-color, #5c6bc0);
                --obap-data-table-disabled-action-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-data-table-true-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-data-table-false-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-data-table-row-height: 32px;
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-data-table-layout {
                --obap-data-table-layout-header-action-left-border-width: 0 1px 1px 0;
                --obap-data-table-layout-header-scroll-border-width: 0 0 1px 0;
                --obap-data-table-layout-header-action-right-border-width: 0 0 1px 1px;

                --obap-data-table-layout-body-action-left-border-width: 0 1px 0 0;
                --obap-data-table-layout-footer-action-left-border-width: 1px 1px 0 0;
                
                --obap-data-table-layout-background-color: var(--obap-data-table-fixed-background-color);

                --obap-data-table-layout-header-action-left-color: inherit;
                --obap-data-table-layout-header-action-left-background-color: var(--obap-data-table-fixed-background-color);

                --obap-data-table-layout-body-action-left-color: inherit;
                --obap-data-table-layout-body-action-left-background-color: var(--obap-data-table-fixed-background-color);

                --obap-data-table-layout-header-scroll-color: inherit;
                --obap-data-table-layout-header-scroll-background-color: var(--obap-data-table-fixed-background-color);

                --obap-data-table-layout-body-scroll-color: inherit;
                --obap-data-table-layout-body-scroll-background-color: var(--obap-data-table-background-color);
                
                height: 100%;
            }

            table {
                border-spacing: 0; 
                color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
            }

            tr {
                height: var(--obap-data-table-row-height);
                min-height: var(--obap-data-table-row-height);
                max-height: var(--obap-data-table-row-height);
                line-height: var(--obap-data-table-row-height);
            }

            tr[collapsed] {
                height: 0;
                line-height: 0 !important;
                visibility: hidden;
            }

            th, td {
                padding: 0;
                box-sizing: border-box;
            }

            .header-row {
                background: var(--obap-data-table-fixed-background-color);
            }

            .body-row {
                background: var(--obap-data-table-background-color);
            }

            .body-row:hover {
                background: var(--obap-data-table-hover-background-color);
            }

            td {
                border-bottom: 1px solid var(--obap-divider-on-surface-color, rgba(0, 0, 0, 0.20));
            }

            tr:last-of-type > td {
                border-bottom: none;
            }
        `))]}updated(e){super.updated(e),requestAnimationFrame(()=>this._resizeHeaderCells())}render(){return Gi(ut||(ut=ci`
            <obap-data-table-layout class="typography-body" @obap-item-selected="${0}" @obap-data-table-layout-size-changed="${0}">
                ${0}

                <div class="header-scroll" slot="header-scroll">
                    <table>
                        ${0}
                    </table>
                </div>

                <div class="body-scroll" slot="body-scroll">
                    <table>
                        ${0}
                        ${0}
                    </table>
                </div>
            
            </obap-data-table-layout>
        `),this._rowCheck,()=>requestAnimationFrame(()=>this._resizeHeaderCells()),this._renderSelectors(),this._renderScrollHeader(!0),this._renderScrollHeader(!1),this._renderScrollBody())}_renderSelectors(){return"single"===this.selectionMode||"multiple"===this.selectionMode?Gi(gt||(gt=ci`
                <div slot="header-action-left">
                    ${0}
                </div>  

                <div slot="body-action-left">
                    <table>
                        ${0}
                    </table>
                </div>
            `),"multiple"===this.selectionMode?Gi(mt||(mt=ci`
                        <table>
                            ${0}
                        </table>
                    `),this._renderActionLeftHeader()):null,this._renderActionLeftBody()):null}_renderActionLeftHeader(){return Gi(vt||(vt=ci`
            <thead>
                <tr>
                    <th>
                        <obap-data-table-selector-cell ?indeterminate="${0}" ?selected="${0}"></obap-data-table-selector-cell>
                    </th>
                </tr>
            </thead>
        `),this.selectedRows.length>0&&this.selectedRows.length<this.rows.length,this.selectedRows.length===this.rows.length)}_renderActionLeftBody(){return Gi(yt||(yt=ci`
            <tbody>
                ${0}
            </tbody>
        `),yn(this.sortedRows,e=>e[this.idField],(e,t)=>Gi(ft||(ft=ci`
                    <tr>
                        <td><obap-data-table-selector-cell row-index="${0}" ?selected="${0}"></obap-data-table-selector-cell></td>
                    </tr>
                `),t,this.effectiveSelectedRows.indexOf(e)>-1)))}_renderScrollHeader(e){return Gi(xt||(xt=ci`
            <thead>
                <tr class="header-row" ?collapsed="${0}">
                    ${0}
                </tr>
            </thead>
        `),!e,this.columns.map((t,o)=>Gi(wt||(wt=ci`
                        <th>
                            <obap-data-table-header-cell .column="${0}" ?sorted="${0}" ?visible="${0}"
                                                         ?sort-descending="${0}" column-index="${0}"
                                                         @click="${0}">
                            </obap-data-table-header-cell>
                        </th>
                    `),t,o===this.sortIndex,e,this.sortDescending,o,e&&t.sortable?this._onColumnClick:null)))}_renderScrollBody(){return Gi(_t||(_t=ci`
            <tbody>
                ${0}
            </tbody>
        `),yn(this.sortedRows,e=>e[this.idField],e=>Gi(kt||(kt=ci`
                    <tr class="body-row">${0}</tr>
                `),this.columns.map(t=>this._renderBodyCell(t,e)))))}_renderBodyCell(e,t){return Gi(St||(St=ci`
            <td>
                <obap-data-table-body-cell .column="${0}" .row="${0}" .value="${0}" false-icon="${0}" true-icon="${0}"></obap-data-table-body-cell>
            </td>
        `),e,t,t[e.field],e.falseIcon,e.trueIcon)}_resizeHeaderCells(){const e=this.renderRoot.querySelector("tr.header-row:not([collapsed])").querySelectorAll("th"),t=this.renderRoot.querySelector("tr.header-row[collapsed]").querySelectorAll("th");for(let o=0;o<t.length;o++)e[o].style.width=t[o].clientWidth+"px",e[o].style.minWidth=t[o].clientWidth+"px"}_onColumnClick(e){this.sortColumn(e.target.columnIndex)}_rowCheck(e){e.preventDefault();const t=e.target,o=e.detail.selected;if(t.hasAttribute("row-index")){const e=Number(t.getAttribute("row-index"));o?this.selectRow(e):this.deselectRow(e)}else t.indeterminate?t.selected&&t.indeterminate&&this.selectAllRows():o?this.selectAllRows():this.deselectAllRows();this.requestUpdate()}}window.customElements.define("obap-data-table-lite",xn);window.customElements.define("demo-data-table-lite",class extends hr{static get styles(){return[cr(Et||(Et=ci`
            :host {
                display: block;
                height: 100%;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-data-list {
                width: 100%;
                height: 100%;
            }

            .container {
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
            }
        `))]}static get properties(){return{columns:{type:Array},rows:{type:Array}}}currencyFormatter(e){return"$"+e.toFixed(2)}percentageFormatter(e){return e+"%"}constructor(){super(),this.columns=[{label:"Dessert (100g serving)",field:"dessert",type:"text",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Price",field:"price",type:"number",formatter:this.currencyFormatter,actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Calories",field:"calories",type:"number",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Fat (g)",field:"fat",type:"number",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Carbs (g)",field:"carbs",type:"number",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Protein (g)",field:"protein",type:"number",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Sodium (mg)",field:"sodium",type:"number",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Calcium (%)",field:"calcium",type:"number",formatter:this.percentageFormatter,actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Iron (%)",field:"iron",type:"number",formatter:this.percentageFormatter,actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"In Stock",field:"available",type:"boolean",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Add to Cart",field:"",type:"action",actionLabel:"Add",trueIcon:"",falseIcon:"",sortable:!1}],this.rows=[{id:0,dessert:"Frozen Yoghurt",price:4.5,calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:14,iron:1,available:!0},{id:1,dessert:"Ice Cream Sandwich",price:3.99,calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:8,iron:1,available:!0},{id:2,dessert:"Eclair",price:2.99,calories:262,fat:16,carbs:24,protein:6,sodium:337,calcium:6,iron:7,available:!1},{id:3,dessert:"Cupcake",price:2.5,calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:3,iron:8,available:!0},{id:4,dessert:"Gingerbread",price:1.75,calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:7,iron:16,available:!0},{id:5,dessert:"Jelly Bean",price:.35,calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:0,iron:0,available:!0},{id:6,dessert:"Lollipop",price:.5,calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:0,iron:2,available:!1},{id:7,dessert:"Honeycomb",price:1.45,calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:0,iron:45,available:!1},{id:8,dessert:"Donut",price:.99,calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:2,iron:22,available:!0},{id:9,dessert:"KitKat",price:.99,calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:12,iron:6,available:!0}]}render(){return Gi($t||($t=ci`
            <div class="container">
                <obap-material elevation="1" @obap-data-action="${0}">
                    <obap-data-table-lite .columns="${0}" .rows="${0}" id-field="id" selection-mode="multiple" sort-index="4"></obap-data-table-lite>
                </obap-material>
            </div>
        `),this._onAction,this.columns,this.rows)}});const wn=e=>class extends e{static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},value:{type:String,attribute:"value"},borderStyle:{type:String,attribute:"border-style",reflect:!0},noFloatLabel:{type:Boolean,attribute:"no-float-label"},opened:{type:Boolean,attribute:"opened"}}}get opened(){return this._opened}set opened(e){const t=this.opened;t!==e&&(this._opened=e,e?this.fireMessage("obap-select-action",{action:"opened"}):this.fireMessage("obap-select-action",{action:"closed"}),this.requestUpdate("opened",t))}constructor(){super(),this.label="",this.icon="",this.value="",this.borderStyle="none",this.noFloatLabel=!1,this._opened=!1}};class _n{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const kn=new WeakMap,Sn=Ei(e=>t=>{if(!(t instanceof Mi)||t instanceof Oi||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:o}=t,{element:a}=o;let i=kn.get(t);void 0===i&&(a.setAttribute("class",o.strings.join(" ")),kn.set(t,i=new Set));const r=a.classList||new _n(a);i.forEach(t=>{t in e||(r.remove(t),i.delete(t))});for(const t in e){const o=e[t];o!=i.has(t)&&(o?(r.add(t),i.add(t)):(r.remove(t),i.delete(t)))}"function"==typeof r.commit&&r.commit()});class En extends(wn(hr)){static get styles(){return[kr,Er,cr(Ct||(Ct=ci`
            :host {
                --obap-select-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-select-background-color: var(--obap-surface-color, #FFFFFF);
                --obap-select-border-color: var(--obap-divider-on-surface-color, rgba(0, 0, 0, 0.20));
                --obap-select-active-border-color: var(--obap-primary-color, #5c6bc0);
                --obap-select-border-size: 1px;
                --obap-select-active-border-size: 1px;

                display: block;
                color: var(--obap-select-color);
                background: var(--obap-select-background-color);
                outline: 0;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            :host(:focus) {
                --obap-select-border-color: var(--obap-select-active-border-color);
                --obap-select-border-size: var(--obap-select-active-border-size);
            }

            .selected-container[border-style="outline"] {
                border: var(--obap-select-border-size) solid var(--obap-select-border-color);
                border-radius: 3px;
            }

            .selected-container[border-style="underline"] {
                border-bottom: var(--obap-select-border-size) solid var(--obap-select-border-color);
            }

            svg {
                fill: var(--obap-text-icon-color, rgba(0, 0, 0, 0.38));
            }

            :host(:focus)  * > svg {
                fill: var(--obap-select-active-border-color);
            }

            :host(:focus) * > .floated {
                color: var(--obap-select-active-border-color);
            }

            .container {
                position: relative;

                height: 100%;
            }

            .selected-container {
                position: relative;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                height: 100%;
                cursor: pointer;
            }

            .selected-content {
                flex: 1;
                margin: 0 8px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }

            .selection-content {
                position: absolute;
                z-index: 2;
                left: 0;
                top: calc(100% + 2px);
                min-width: 100%;
                display: none;
                box-sizing: border-box;

                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                            0 1px 5px 0 rgba(0, 0, 0, 0.12),
                            0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }

            .selection-content[opened] {
                display: block;
            }

            .icon {
                width: 24px;
                height: 24px;
            }

            obap-icon {
                --obap-icon-fill-color: var(--obap-text-icon-color, rgba(0, 0, 0, 0.38));
                --obap-icon-width: 14px;
                --obap-icon-height: 14px;
                margin-left: 8px;
            }

            :host(:focus)  * > obap-icon {
                --obap-icon-fill-color: var(--obap-select-active-border-color);
            }

            svg {
                transition: 0.15s ease-out;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                transform: rotate(0deg);
            }

            svg[opened] {
                -webkit-transform: rotate(180deg);
                -moz-transform: rotate(180deg);
                transform: rotate(180deg);
            }

            .floating-label {
                position: absolute;
                left: 4px;
                top: 50%;
                transform: translate(0, -50%);
                padding: 0 4px;
                pointer-events: none;
                color: var(--obap-text-secondary-color, rgba(0, 0, 0, 0.54));
                background: var(--obap-select-background-color);
                transition: top 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .floated {
                top: -2px;
                width: auto;
                font-weight: 500;
                line-height: 11px;
            }

            .float-icon {
                left: 24px;
            }
        `))]}constructor(){super(),this.tabIndex=0,this._boundHandleGlobalKeyPressEvent=this._handleGlobalKeyPressEvent.bind(this),this._boundCloseOnEvent=this._closeOnEvent.bind(this),this.addEventListener("blur",this._boundCloseOnEvent)}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._boundCloseOnEvent),window.addEventListener("keydown",this._boundHandleGlobalKeyPressEvent,!1)}disconnectedCallback(){window.removeEventListener("click",this._boundCloseOnEvent),window.removeEventListener("keydown",this._boundHandleGlobalKeyPressEvent),super.disconnectedCallback()}render(){return Gi(It||(It=ci`
            <div class="container">
                <div class="selected-container" border-style="${0}" @click="${0}">
                    ${0}
                    <div class="selected-content">${0}</div>
                    <div class="icon">
                        <svg ?opened="${0}" viewBox="0 0 24 24"><g><path d="M7 10l5 5 5-5z"/></g></svg>
                    </div>
                    ${0}
                </div>

                <div id="selection-content" class="selection-content" ?opened="${0}">
                    <slot></slot>
                </div>
            </div>`),this.borderStyle,this._openContent,this.icon?Gi(zt||(zt=ci`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.value,this.opened,this._renderLabel(),this.opened)}_renderLabel(){if(this.noFloatLabel&&this.value||!this.label)return null;let e={"floating-label":!0,floated:this.value,"typography-caption":this.value,"typography-body":!this.value,"float-icon":!this.value&&this.icon};return Gi(At||(At=ci`
            <div class=${0}>${0}</div>
        `),Sn(e),this.label)}_openContent(e){e.preventDefault(),e.stopPropagation(),this.opened=!this.opened,this.opened&&requestAnimationFrame(()=>this.renderRoot.getElementById("selection-content").focus())}_closeOnEvent(e){this.opened&&(this.opened=!1)}_handleGlobalKeyPressEvent(e){switch(e.key){case"Escape":if(this.opened){this.opened=!1,e.stopImmediatePropagation();break}case"ArrowDown":e.composedPath().indexOf(this.getRootNode().host)>-1&&(this.opened?this.fireMessage("obap-select-action",{action:"move-down"}):this.opened=!0,e.stopImmediatePropagation());break;case"ArrowUp":e.composedPath().indexOf(this.getRootNode().host)>-1&&(this.opened&&this.fireMessage("obap-select-action",{action:"move-up"}),e.stopImmediatePropagation());break;case"Enter":e.composedPath().indexOf(this.getRootNode().host)>-1&&(this.opened&&(this.fireMessage("obap-select-action",{action:"select"}),this.opened=!1),e.stopImmediatePropagation());break}}}window.customElements.define("obap-select-container",En);const $n=e=>class extends(on(e)){static get properties(){return{selectedItems:{type:Array,attribute:"selected-items"}}}constructor(){super(),this.selectedItems=[]}updated(e){super.updated(e),e.forEach((e,t)=>{"items"===t&&"multi"===this.selectorType&&this._preselectItems()})}select(e){"multi"===this.selectorType?this._toggleSelected(e):super.select(e)}_changeSelection(e,t){"multi"===this.selectorType?this._toggleSelected(e):super._changeSelection(e,t)}_toggleSelected(e){const t=[...this.selectedItems],o=t.indexOf(e);-1===o?t.push(e):t.splice(o,1),t.sort((e,t)=>e-t),this.selectedItems=t,-1===o?this._selectItem(e):this._deselectItem(e)}_preselectItems(){const e=[];this.items.forEach((t,o)=>{t.hasAttribute(this.selectedAttribute)&&e.push(o)}),this.selectedIndex>-1&&-1===this.selectedItems.indexOf(this.selectedIndex)&&e.push(this.selectedIndex),e.sort((e,t)=>e-t),this.selectedItems=e,this.selectedItems.forEach(e=>this._selectItem(e))}},Cn=e=>class extends($n(e)){static get properties(){return{startIndex:{type:Number,attribute:"start-index"},endIndex:{type:Number,attribute:"end-index"},rangeLength:{type:Number,attribute:"range-length"}}}constructor(){super(),this.startIndex=-1,this.endIndex=-1,this.rangeLength=-1}updated(e){super.updated(e),"range"===this.selectorType&&e.forEach((e,t)=>{"items"!==t&&"startIndex"!==t&&"endIndex"!==t||this._selectRange()})}select(e){switch(this.selectorType){case"range":this._rangeItemSelected(e);break;default:super.select(e)}}_changeSelection(e,t){switch(this.selectorType){case"range":this._rangeItemSelected(e);break;default:super._changeSelection(e,t)}}_rangeItemSelected(e){if(this._ctrl&&this.rangeLength>0){const t=e%this.rangeLength;let o=e-t,a=e+(this.rangeLength-t-1);return o<0&&(o=0),a>this.items.length-1&&(a=this.items.length-1),this.startIndex=o,void(this.endIndex=a)}this.startIndex<0&&this.endIndex<0?this.startIndex=e:this.startIndex>-1&&this.endIndex<0?this.startIndex===e?this.startIndex=-1:this.endIndex=e:(this.startIndex=e,this.endIndex=-1)}_selectRange(){const e=[];if(this.startIndex>-1&&this.endIndex>-1&&this.startIndex!==this.endIndex){const t=Math.min(this.startIndex,this.endIndex),o=Math.max(this.startIndex,this.endIndex);for(let a=t;a<=o;a++)e.push(a)}else this.startIndex>-1&&e.push(this.startIndex);this.selectedItems=e;for(let e=0;e<this.items.length;e++)this.selectedItems.indexOf(e)>-1?this._selectItem(e):this._deselectItem(e)}};class In extends(Cn(hr)){static get styles(){return cr(Lt||(Lt=ci`
            :host {
                display: block;
            }

            :host[hidden] {
                display: none;
            }
        `))}render(){return Gi(Vt||(Vt=ci`<slot></slot>`))}}customElements.define("obap-selector",In);class zn extends(wn(hr)){static get styles(){return[kr,cr(Ft||(Ft=ci`
            :host {
                display: inline-block;
                outline: 0;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 32px;
            }

            obap-select-container {
                height: 100%;
            }

            obap-selector {
                background: var(--obap-surface-color, #FFFFFF);
                cursor: pointer;
            }

            .item {
                height: 24px;
                padding: 0 8px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .item > * {
                pointer-events: none;
            }

            .item:hover {
                background: var(--obap-selection-color, #E0E0E0);
            }

            .item[active] {
                background: var(--obap-selection-color, #E0E0E0);
            }

            :host(:not([multi])) > * .item[selected] {
                color: var(--obap-on-primary-color, #FFFFFF);
                background: var(--obap-primary-color, #5c6bc0);
            }

            .check-container {
                height: 14px;
                width: 14px;
                margin-left: -4px;
                padding-right: 4px;
            }

            .check {
                display: none;
                height: 14px;
                width: 14px;
                user-select: none;
                stroke: var(--obap-text-icon-color, rgba(0, 0, 0, 0.38));
                fill: var(--obap-text-icon-color, rgba(0, 0, 0, 0.38));
            }

            .item[selected] > * .check {
                display: block;
            }
        `))]}static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index"},items:{type:Array},selectedItemIndexes:{type:Array},multi:{type:Boolean,attribute:"multi",reflect:!0}}}constructor(){super(),this.selectedIndex=-1,this.items=[],this.selectedItemIndexes=[],this.multi=!1}updated(e){super.updated(e),this._selector=this.renderRoot.getElementById("selector"),e.forEach((e,t)=>{"selectedIndex"===t&&(-1!==this.selectedIndex&&(this._updateValue(),this.requestUpdate()),this.selectedIndex!==e&&this.fireMessage("obap-select-changed",{selectedIndex:this.selectedIndex,selectedIndexes:this.selectedItemIndexes}))})}render(){return Gi(Pt||(Pt=ci`
            <div class="container typography-body">
                <obap-select-container id="select-container" value="${0}" label="${0}" icon="${0}" border-style="${0}" 
                                    ?no-float-label="${0}" ?opened="${0}" @obap-select-action="${0}">
                    <div>
                        <obap-selector id="selector" selector-type="${0}" @obap-item-selected="${0}" @obap-item-deselected="${0}">
                            ${0}
                        </obap-selector>
                    </div>
                </obap-select-container>
            </div>
        `),this.value,this.label,this.icon,this.borderStyle,this.noFloatLabel,this.opened,this._handleAction,this.multi?"multi":"single",this._handleItemClick,this._handleItemClick,this.items.map((e,t)=>Gi(Tt||(Tt=ci`
                                <div class="item" ?selected="${0}">
                                    ${0}
                                    <div>${0}</div>
                                </div>
                            `),this._isSelected(t),this._renderCheck(),e)))}_isSelected(e){return this.multi?this.selectedItemIndexes.indexOf(e)>-1:e===this.selectedIndex}_renderCheck(){return this.multi?Gi(Mt||(Mt=ci`
                <div class="check-container">
                    <svg class="check" viewBox="0 0 24 24"><g><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></g></svg>
                </div>
            `)):null}_handleItemClick(e){e.stopPropagation(),this.renderRoot.getElementById("select-container").opened=!1,this.selectedIndex=e.detail.index,this.multi?(this.selectedItemIndexes=this._selector.selectedItems,this._updateValue()):this.selectedItemIndexes=[this.selectedIndex]}_updateValue(){this.multi?this.value=this.items.filter((e,t)=>this._selector.selectedItems.indexOf(t)>-1).join(", "):this.value=this.items[this.selectedIndex]}_handleAction(e){switch(e.detail.action){case"move-up":this._selector.activatePrevious();break;case"move-down":this._selector.activateNext();break;case"select":this._selector.select(this._selector.activeIndex),this._selector.activeIndex=-1;break;case"closed":this._selector.activeIndex=-1}}}window.customElements.define("obap-select",zn);window.customElements.define("obap-data-pager",class extends hr{static get styles(){return[kr,cr(Rt||(Rt=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-button[mini] {
                height: 32px;
                width: 32px;
                min-height: 32px;
                min-width: 32px;
                border-radius: 16px;
            }

            obap-select {
                margin-top: 2px;
            }

            .container {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .inner-container {
                display: flex;
                align-items: center;
                height: 100%;
                line-height: 100%;
            }

            .left {
                margin-right: 32px;
            }

            .right {
                margin-left: 32px;
            }
        `))]}static get properties(){return{rowsPerPageLabel:{type:String,attribute:"rows-per-page-label"},rowsPerPageOptions:{type:Array,attribute:"rows-per-page-options"},positionLabel:{type:String,attribute:"position-label"},count:{type:Number,attribute:"count"},page:{type:Number,attribute:"page"},defaultPageSize:{type:Number,attribute:"default-page-size"},startItem:{type:Number},endItem:{type:Number},pageCount:{type:Number},pageSize:{type:Number}}}get page(){return this._page}set page(e){const t=this.page;t!==e?(this._page=e,this._updateValues(),requestAnimationFrame(()=>{this.fireMessage("obap-data-pager-change",{page:this._page,pageSize:this.pageSize,startItem:this.startItem,endItem:this.endItem})}),this.requestUpdate("page",t)):this._updateValues()}get startItem(){return this._startItem}get endItem(){return this._endItem}get pageCount(){return this._pageCount}get pageSize(){return this._pageSize}constructor(){super(),this.rowsPerPageLabel="Rows per page:",this.rowsPerPageOptions=[10,25,50],this.positionLabel="{0} - {1} of {2}",this.count=0,this.defaultPageSize=10,this._page=1,this._startItem=0,this._endItem=0,this._pageCount=0,this._pageSize=0}updated(e){super.updated(e),e.forEach((e,t)=>{if("pageSize"===t||"count"===t||"rowsPerPageOptions"===t){if("rowsPerPageOptions"===t&&this.rowsPerPageOptions&&this.rowsPerPageOptions.length>0){const e=this._pageSize;this._pageSize=this.rowsPerPageOptions[0],this.requestUpdate("pageSize",e)}this.page=1}})}render(){return Gi(Bt||(Bt=ci`
            <div class="container typography-body">
                ${0}
                <div class="inner-container">${0}</div>
                <div class="inner-container right">
                    <obap-button round mini icon="core:chevron-left" @click="${0}" ?disabled="${0}"></obap-button>
                    <obap-button round mini icon="core:chevron-right" @click="${0}" ?disabled="${0}"></obap-button>
                </div>
            </div>`),this._renderPageCountSelector(),this._format(this.positionLabel,[this.startItem,this.endItem,this.count]),this.previousPage,this.page<=1,this.nextPage,this.page>=this.pageCount)}_renderPageCountSelector(){return this.rowsPerPageOptions&&this.rowsPerPageOptions.length>1?Gi(Nt||(Nt=ci`
                <div class="inner-container left">
                    <div>${0}</div>
                    <obap-select border-style="none" .items="${0}" selected-index="0" @obap-select-changed="${0}"></obap-select>
                </div>
            `),this.rowsPerPageLabel,this.rowsPerPageOptions,this._rowsPerPageChanged):Gi(Ot||(Ot=ci`
                <div class="inner-container left">
                    <div>${0} ${0}</div>
                </div>
            `),this.rowsPerPageLabel,this._pageSize)}previousPage(){this.page>1&&(this.page=this.page-1)}nextPage(){this.page<this.pageCount&&(this.page=this.page+1)}_updateValues(){this._pageSize=this.pageSize>0?this.pageSize:this.defaultPageSize,this._pageCount=Math.ceil(this.count/this.pageSize),this.pageCount>0&&this.page>0&&this.page<=this.pageCount&&(this._startItem=(this.page-1)*this.pageSize+1,this._endItem=this._startItem+this.pageSize-1,this._endItem>this.count&&(this._endItem=this.count)),this.requestUpdate()}_rowsPerPageChanged(e){const t=this._pageSize;this._pageSize=this.rowsPerPageOptions[e.detail.selectedIndex],this.requestUpdate("pageSize",t)}_format(e,t){for(var o=0;o<t.length;o++)e=e.replace(new RegExp("\\{"+o+"\\}","gi"),t[o]);return e}});window.customElements.define("demo-data-pager",class extends hr{static get styles(){return[cr(Ht||(Ht=ci`
            :host {
                display: block;
                height: 100%;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
            }
        `))]}render(){return Gi(Dt||(Dt=ci`
            <div class="container">
                <demo-panel>
                    <obap-data-pager count="255"></obap-data-pager>
                </demo-panel>
            </div>
        `))}});window.customElements.define("obap-line-sparkline",class extends hr{static get styles(){return[cr(jt||(jt=ci`
            :host {
                --obap-line-sparkline-background-color: transparent;
                --obap-line-sparkline-line-color: var(--obap-primary-color, #5c6bc0);
                --obap-line-sparkline-area-color: var(--obap-block-color, #ECECEC);
                --obap-line-sparkline-marker-positive-color: var(--obap-primary-color, #5c6bc0);
                --obap-line-sparkline-marker-negative-color: var(--obap-accent-color, #ec407a);
                --obap-line-sparkline-marker-positive-border-color: white;
                --obap-line-sparkline-marker-negative-border-color: white;
                --obap-line-sparkline-marker-border-width: 0;

                display: block;
                width: 300px;
                height: 60px;
                background: var(--obap-line-sparkline-background-color);
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            svg {
                width: 100%;
                height: 100%;
            }

            circle {
                fill: var(--obap-line-sparkline-marker-positive-color);
                stroke: var(--obap-line-sparkline-marker-positive-border-color);
                stroke-width: var(--obap-line-sparkline-marker-border-width);
            }

            circle[negative] {
                fill: var(--obap-line-sparkline-marker-negative-color);
                stroke: var(--obap-line-sparkline-marker-negative-border-color);
            }

            polyline {
                stroke: var(--obap-line-sparkline-line-color);
                fill: none;
            }

            polygon {
                stroke: none;
                fill: var(--obap-line-sparkline-area-color);
            }

            .container {
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
            }
        `))]}static get properties(){return{values:{type:Array,attribute:"values",reflect:!0},showLine:{type:Boolean,attribute:"show-line"},showMarkers:{type:Boolean,attribute:"show-markers"},showArea:{type:Boolean,attribute:"show-area"},markerSize:{type:Number,attribute:"marker-size"}}}constructor(){super(),this.values=[],this.markerSize=4}render(){const e=this.values.length;if(0===e)return null;const t=this.markerSize/2,o=Math.min(...this.values),a=Math.max(...this.values),i=300/(e-1),r=o<0?60/(a-o):60/a,n=60-r*Math.abs(o);let s=null,l=null;const c=this.showLine||this.showArea?this.values.map((o,a)=>{const c=o<0,d=r*Math.abs(o),p=a*i;return 0===a&&(s=p+" 60,"),a===e-1&&(l=`,${p} 60`),`${p} ${c?n+d-t:n-d+t}`}).join(","):null;return Gi(Ut||(Ut=ci`
            <div class="container">
                ${0}
            </div>
        `),Ki(qt||(qt=ci`<svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                    <g>
                        ${0}
                        ${0}

                        ${0}
                    </g>
                </svg>`),300,60,this.showArea?Ki(Wt||(Wt=ci`<polygon points="${0}"></polygon>`),s+c+l):null,this.showLine?Ki(Zt||(Zt=ci`<polyline points="${0}"></polyline>`),c):null,this.showMarkers?this.values.map((e,o)=>{const a=e<0,s=r*Math.abs(e);return Ki(Gt||(Gt=ci`<circle ?negative="${0}" cx="${0}" cy="${0}" r="${0}"></circle>`),a,o*i,a?n+s-t:n-s+t,t)}):null))}});window.customElements.define("demo-sparkline-line",class extends hr{static get styles(){return[cr(Kt||(Kt=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .check-group {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 24px;
            }

            obap-check {
                margin-right: 24px;
            }

            .center {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        `))]}static get properties(){return{values:{type:Array},showLine:{type:Boolean},showMarkers:{type:Boolean},showArea:{type:Boolean}}}constructor(){super(),this.showLine=!0,this.showMarkers=!0,this.showArea=!0,this.values=[-7,-9,-5,-2,9,11,15,10,10,17,19,17,10,22,25,10,9,10,26,28,27,10,10,30,10,-3,-6,-3,4,10]}render(){return Gi(Xt||(Xt=ci`
            <div class="container">
                <demo-panel class="center">
                    <div class="check-group" @obap-item-selected="${0}">
                        <obap-check name="line" label="Line" selected></obap-check>
                        <obap-check name="marker" label="Marker" selected></obap-check>
                        <obap-check name="area" label="Area" selected></obap-check>
                    </div>
                    <obap-line-sparkline .values="${0}" ?show-line="${0}" ?show-markers="${0}" ?show-area="${0}"></obap-line-sparkline>
                </demo-panel>
            </div>
        `),this._checkChanged,this.values,this.showLine,this.showMarkers,this.showArea)}_checkChanged(e){const t=e.detail.name,o=e.detail.selected;switch(t){case"line":this.showLine=o;break;case"marker":this.showMarkers=o;break;case"area":this.showArea=o}}});window.customElements.define("obap-bar-sparkline",class extends hr{static get styles(){return[cr(Jt||(Jt=ci`
            :host {
                --obap-bar-sparkline-background-color: transparent;
                --obap-bar-sparkline-positive-color: var(--obap-primary-color, #5c6bc0);
                --obap-bar-sparkline-negative-color: var(--obap-accent-color, #ec407a);

                display: block;
                width: 300px;
                height: 60px;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            svg {
                width: 100%;
                height: 100%;
            }

            rect {
                fill: var(--obap-bar-sparkline-positive-color);
            }

            rect[negative] {
                fill: var(--obap-bar-sparkline-negative-color);
            }

            .container {
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
            }
        `))]}static get properties(){return{values:{type:Array,attribute:"values",reflect:!0},barSpacing:{type:Number,attribute:"bar-spacing"}}}constructor(){super(),this.values=[],this.barSpacing=2}render(){const e=this.values.length;if(0===e)return null;const t=Math.min(...this.values),o=Math.max(...this.values),a=(300+this.barSpacing)/e-this.barSpacing,i=t<0?60/(o-t):60/o,r=60-i*Math.abs(t),n=a+this.barSpacing;return Gi(Yt||(Yt=ci`
            <div class="container">
                ${0}
            </div>
        `),Ki(Qt||(Qt=ci`<svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                    <g>
                        ${0}
                    </g>
                </svg>`),300,60,this.values.map((e,t)=>{const o=e<0,s=i*Math.abs(e);return Ki(eo||(eo=ci`<rect ?negative="${0}" x="${0}" y="${0}" width="${0}" height="${0}"></rect>`),o,t*n,o?r:r-s,a,s)})))}});window.customElements.define("demo-sparkline-bar",class extends hr{static get styles(){return[cr(to||(to=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .check-group {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            .center {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        `))]}static get properties(){return{values:{type:Array}}}constructor(){super(),this.values=[-7,-9,-5,-2,9,11,15,10,10,17,19,17,10,22,25,10,9,10,26,28,27,10,10,30,10,-3,-6,-3,4,10]}render(){return Gi(oo||(oo=ci`
            <div class="container">
                <demo-panel class="center">
                    <obap-bar-sparkline .values="${0}"></obap-bar-sparkline>
                </demo-panel>
            </div>
        `),this.values)}});window.customElements.define("obap-winloss-sparkline",class extends hr{static get styles(){return[cr(ao||(ao=ci`
            :host {
                --obap-winloss-sparkline-background-color: transparent;
                --obap-winloss-sparkline-positive-color: var(--obap-primary-color, #5c6bc0);
                --obap-winloss-sparkline-negative-color: var(--obap-accent-color, #ec407a);

                display: block;
                width: 300px;
                height: 60px;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            svg {
                width: 100%;
                height: 100%;
            }

            rect {
                fill: var(--obap-winloss-sparkline-positive-color);
            }

            rect[negative] {
                fill: var(--obap-winloss-sparkline-negative-color);
            }

            .container {
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
            }
        `))]}static get properties(){return{values:{type:Array,attribute:"values",reflect:!0},barSpacing:{type:Number,attribute:"bar-spacing"},threshold:{type:Number,attribute:"threshold"},stretch:{type:Boolean,attribute:"stretch"}}}constructor(){super(),this.values=[],this.barSpacing=2,this.threshold=0,this.stretch=!1}render(){const e=this.values.length;if(0===e)return null;Math.min(...this.values),Math.max(...this.values);const t=(300+this.barSpacing)/e-this.barSpacing,o=t+this.barSpacing;return Gi(io||(io=ci`
            <div class="container">
                ${0}
            </div>
        `),Ki(ro||(ro=ci`<svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                    <g>
                        ${0}
                    </g>
                </svg>`),300,60,this.values.map((e,a)=>{const i=e<this.threshold,r=a*o,n=this.stretch?30:t,s=i?30:this.stretch?0:30-n;return Ki(no||(no=ci`<rect ?negative="${0}" x="${0}" y="${0}" width="${0}" height="${0}"></rect>`),i,r,s,t,n)})))}});window.customElements.define("demo-sparkline-winloss",class extends hr{static get styles(){return[cr(so||(so=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .check-group {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            .center {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        `))]}static get properties(){return{values:{type:Array}}}constructor(){super(),this.values=[-7,-9,-5,-2,9,11,15,10,10,17,19,17,10,22,25,10,9,10,26,28,27,10,10,30,10,-3,-6,-3,4,10]}render(){return Gi(lo||(lo=ci`
            <div class="container">
                <demo-panel class="center">
                    <obap-winloss-sparkline .values="${0}"></obap-winloss-sparkline>
                </demo-panel>
            </div>
        `),this.values)}});window.customElements.define("obap-bullet-sparkline",class extends hr{static get styles(){return[cr(co||(co=ci`
            :host {
                --obap-bullet-sparkline-value-color: #212121;
                --obap-bullet-sparkline-target-value-color: #212121;
                --obap-bullet-sparkline-range-color: #9E9E9E;

                display: block;
                width: 300px;
                height: 30px;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            svg {
                width: 100%;
                height: 100%;
            }

            .container {
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
            }

            .value {
                fill: var(--obap-bullet-sparkline-value-color);
            }

            .target-value {
                fill: var(--obap-bullet-sparkline-target-value-color);
            }

            .range {
                fill: var(--obap-bullet-sparkline-range-color);
            }
        `))]}static get properties(){return{value:{type:Number,attribute:"value"},targetValue:{type:Number,attribute:"target-value"},maxValue:{type:Number,attribute:"max-value"},percentageRanges:{type:Array,attribute:"percentage-ranges"}}}constructor(){super(),this.value=0,this.targetValue=0,this.maxValue=100,this.percentageRanges=[100]}render(){const e=this._getRangeValues(300);return Gi(po||(po=ci`
            <div class="container">
                ${0}
            </div>
        `),Ki(ho||(ho=ci`<svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                    <g>
                        ${0}
                        <rect class="value" x="0" y="${0}" width="${0}" height="${0}"></rect>
                        <rect class="target-value" x="${0}" y="${0}" width="${0}" height="${0}"></rect> 
                    </g>
                </svg>`),300,30,e.map(e=>Ki(bo||(bo=ci`<rect class="range" x="${0}" y="0" width="${0}" height="${0}" opacity="${0}"></rect>`),e.x,e.width,30,e.opacity)),12,this.value/this.maxValue*300,6,this.targetValue/this.maxValue*300-2,6,4,18))}_getRangeValues(e){const t=this.percentageRanges.sort((e,t)=>e-t),o=t.length,a=e/100,i=[];for(let e=0;e<t.length;e++)0===e?i.push({x:0,width:t[e]*a,opacity:1}):i.push({x:t[e-1]*a,width:(t[e]-t[e-1])*a,opacity:1-e/o});return i}});window.customElements.define("demo-sparkline-bullet",class extends hr{static get styles(){return[cr(uo||(uo=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .check-group {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            .center {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        `))]}static get properties(){return{bulletRanges:{type:Array}}}constructor(){super(),this.bulletRanges=[40,70,85,100]}render(){return Gi(go||(go=ci`
            <div class="container">
                <demo-panel class="center">
                    <obap-bullet-sparkline class="sparkline" .percentageRanges="${0}" value="60" target-value="50" max-value="100"></obap-bullet-sparkline>
                </demo-panel>
            </div>
        `),this.bulletRanges)}});window.customElements.define("obap-pie-sparkline",class extends hr{static get styles(){return[cr(mo||(mo=ci`
            :host {
                --obap-pie-sparkline-separator-color: white;
                --obap-pie-section-color: var(--obap-primary-color, #5c6bc0);
                --obap-pie-sparkline-separator-width: 2;

                display: block;
                width: 60px;
                height: 60px;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            svg {
                width: 100%;
                height: 100%;
                transform: rotate(-90deg);
            }

            .container {
                padding: 0;
                margin: 0;
                width: 100%;
                height: 100%;
            }

            .outline {
                fill: transparent;
                stroke: var(--obap-pie-sparkline-separator-color);
                stroke-width: var(--obap-pie-sparkline-separator-width);
            }
        `))]}static get properties(){return{values:{type:Array,attribute:"values",reflect:!0},colors:{type:Array,attribute:"colors"},donutRadius:{type:Number,attribute:"donut-radius"},hideSeparators:{type:Boolean,attribute:"hide-separators"}}}constructor(){super(),this.values=[],this._vw=60,this.donutRadius=0,this.colors=[],this.hideSeparators=!1}render(){if(0===this.colors.length){getComputedStyle(this);this.colors.push("var(--obap-pie-section-color)")}this._colorCount=this.colors.length;const e=this._getPaths();return e?Gi(vo||(vo=ci`
            <div class="container">
                ${0}
            </div>
        `),Ki(yo||(yo=ci`
                    <svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                        <defs>
                            <mask id="mask">
                                <rect width="100%" height="100%" fill="white"/>
                                <circle cx="${0}" cy="${0}" r="${0}" fill="black" opacity="1"></circle>
                            </mask>
                        </defs>
                        <g mask="url(#mask)">
                            ${0}
                        </g>
                    </svg>
                `),this._vw,this._vw,this._vw/2,this._vw/2,this.donutRadius,e.map((e,t)=>Ki(fo||(fo=ci`
                                <path class="wedge" d="${0}" fill="${0}"></path>
                                ${0}
                            `),e.wedge,this._getNextColor(t),this.hideSeparators?null:Ki(xo||(xo=ci`<path class="outline" d="${0}"></path>`),e.outline))))):null}_getPaths(){const e=this.values.filter(e=>e>0);if(this._itemCount=e.length,0===this._itemCount)return null;const t=this._vw/2,o=t,a=t,i=2*Math.PI,r=e.reduce((e,t)=>e+t,0),n=e.map(e=>e/r);let s=0,l=this._getCoordinates(a,i*s);return n.map(e=>{s+=e;const t={start:l,end:this._getCoordinates(a,i*s)};return l=t.end,t}).map(e=>({wedge:`M ${e.start.x} ${e.start.y} L ${t} ${o} L ${e.end.x} ${e.end.y} A ${a} ${a} 0 0 0 ${e.start.x} ${e.start.y}`,outline:`M ${e.start.x} ${e.start.y} L ${t} ${o} L ${e.end.x} ${e.end.y}`}))}_getCoordinates(e,t){return{x:e*Math.cos(t)+e,y:e*Math.sin(t)+e}}_getNextColor(e){if(1===this._colorCount)return this.colors[0];const t=e%this._colorCount;return e===this._itemCount-1&&0===t&&this._colorCount>2?this.colors[1]:this.colors[t]}});window.customElements.define("demo-sparkline-pie",class extends hr{static get styles(){return[cr(wo||(wo=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .check-group {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .chart-container {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
            }

            .custom-pie {
                --obap-pie-sparkline-separator-width: 0;
            }
        `))]}static get properties(){return{values:{type:Array},colors:{type:Array}}}constructor(){super(),this.colors=["indianred","seagreen","cornflowerblue","hotpink"],this.values=[2,4,3]}render(){return Gi(_o||(_o=ci`
            <div class="container">
                <demo-panel>
                    <div class="chart-container">
                        <obap-pie-sparkline .values="${0}"></obap-pie-sparkline>
                        <obap-pie-sparkline class="custom-pie" .values="${0}" .colors="${0}"></obap-pie-sparkline>

                        <obap-pie-sparkline .values="${0}" donut-radius="15"></obap-pie-sparkline>
                        <obap-pie-sparkline class="custom-pie" .values="${0}" donut-radius="15" .colors="${0}"></obap-pie-sparkline>
                    </div>
                </demo-panel>
            </div>
        `),this.values,this.values,this.colors,this.values,this.values,this.colors)}});window.customElements.define("demo-tabs",class extends hr{static get styles(){return[cr(ko||(ko=ci`
            :host {
                display: block;
                height: 100%;
                width: 100%;
                max-width: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-tabs {
  
            }

            demo-panel {
                margin-bottom: 8px;
                max-width: 100%;
                box-sizing: border-box;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }

            .container {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-content: stretch;
                overflow-y: auto;
            }

            .temp {
                height: 64px;
                background: lightyellow;
                width: 1000px;
            }

        `))]}render(){return Gi(So||(So=ci`
            <div class="container">
                <demo-panel label="Regular Tabs">
                    <obap-tabs selected-index="0">
                        <obap-tab>Tab 1</obap-tab>
                        <obap-tab>Tab 2</obap-tab>
                        <obap-tab>Tab 3</obap-tab>
                        <obap-tab>Tab 4</obap-tab>
                        <obap-tab>Tab 5</obap-tab>
                    </obap-tabs>                
                </demo-panel>

                <demo-panel label="Fill Tabs">
                    <obap-tabs fill selected-index="0">
                        <obap-tab>Tab 1</obap-tab>
                        <obap-tab>Tab 2</obap-tab>
                        <obap-tab>Tab 3</obap-tab>
                    </obap-tabs>                
                </demo-panel>

                <demo-panel label="Scrolling Tabs">
                    <obap-tabs scroll selected-index="0">
                        <obap-tab>Tab 1</obap-tab>
                        <obap-tab>Tab 2</obap-tab>
                        <obap-tab>Tab 3</obap-tab>
                        <obap-tab>Tab 4</obap-tab>
                        <obap-tab>Tab 5</obap-tab>
                        <obap-tab>Tab 6</obap-tab>
                        <obap-tab>Tab 7</obap-tab>
                        <obap-tab>Tab 8</obap-tab>
                        <obap-tab>Tab 9</obap-tab>
                        <obap-tab>Tab 10</obap-tab>
                    </obap-tabs>                
                </demo-panel>

                <demo-panel label="Scrolling Tabs - No Buttons">
                    <obap-tabs scroll hide-scroll-buttons selected-index="0">
                        <obap-tab>Tab 1</obap-tab>
                        <obap-tab>Tab 2</obap-tab>
                        <obap-tab>Tab 3</obap-tab>
                        <obap-tab>Tab 4</obap-tab>
                        <obap-tab>Tab 5</obap-tab>
                        <obap-tab>Tab 6</obap-tab>
                        <obap-tab>Tab 7</obap-tab>
                        <obap-tab>Tab 8</obap-tab>
                        <obap-tab>Tab 9</obap-tab>
                        <obap-tab>Tab 10</obap-tab>
                    </obap-tabs>                
                </demo-panel>
            </div>
        `))}});window.customElements.define("obap-linear-progress",class extends hr{static get styles(){return[cr(Eo||(Eo=ci`
            :host {
                --obap-linear-progress-backround-color: var(--obap-block-color, #ECECEC);
                --obap-linear-progress-primary-color: var(--obap-primary-color, #5c6bc0);
                --obap-linear-progress-secondary-color: var(--obap-primary-light-color, #8e99f3);

                --obap-linear-progress-disabled-backround-color: var(--obap-block-color, #ECECEC);
                --obap-linear-progress-disabled-primary-color: #757575;
                --obap-linear-progress-disabled-secondary-color: #BDBDBD;

                --obap-linear-progress-indeterminate-duration: 1s;
                display: block;
                height: 4px;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                position: relative;
                height: 100%;
                background: var(--obap-linear-progress-backround-color);
            }

            .primary {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background: var(--obap-linear-progress-primary-color);
            }

            .secondary {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                background: var(--obap-linear-progress-secondary-color);
            }

            .indeterminate {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                background: var(--obap-linear-progress-primary-color);
                animation-duration: var(--obap-linear-progress-indeterminate-duration);
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                animation-name: indeterminate;
            }

            @keyframes indeterminate {
                from {
                    left: -100%;
                }

                to {
                    left: 100%;
                }
            }

            :host([disabled]) > .container {
                background: var(--obap-linear-progress-disabled-backround-color);
            }

            :host([disabled]) > .container > .primary {
                background: var(--obap-linear-progress-disabled-primary-color);
            }

            :host([disabled]) > .container > .secondary {
                background: var(--obap-linear-progress-disabled-secondary-color);
            }
        `))]}static get properties(){return{min:{type:Number,attribute:"min"},max:{type:Number,attribute:"max"},value:{type:Number,attribute:"value"},secondaryValue:{type:Number,attribute:"secondary-value"},indeterminate:{type:Boolean,attribute:"indeterminate"}}}constructor(){super(),this.min=0,this.max=100,this.value=0,this.secondaryValue=0,this.indeterminate=!1}render(){return Gi($o||($o=ci`
            <div class="container">
                ${0}
            </div>
        `),this.indeterminate?this._renderIndeterminateBar(this.disabled):[this._renderBar(this.secondaryValue,!0),this._renderBar(this.value,!1)])}_renderBar(e,t){const o=`width: ${100*e/(this.max-this.min)}%;`;return e>0?Gi(Co||(Co=ci`<div class="${0}" style="${0}"></div>`),t?"secondary":"primary",o):null}_renderIndeterminateBar(e){return e?null:Gi(Io||(Io=ci`<div class="indeterminate"></div>`))}});window.customElements.define("obap-circular-progress",class extends hr{static get styles(){return[cr(zo||(zo=ci`
            :host {
                --obap-circular-progress-backround-color: transparent;
                --obap-circular-progress-primary-color: var(--obap-primary-color, #5c6bc0);
                --obap-circular-progress-secondary-color: var(--obap-primary-light-color, #8e99f3);
                --obap-circular-progress-icon-color: var(--obap-primary-color, #5c6bc0);

                --obap-circular-progress-disabled-backround-color: transparent;
                --obap-circular-progress-disabled-primary-color: #757575;
                --obap-circular-progress-disabled-secondary-color: #BDBDBD;

                --obap-circular-progress-indeterminate-duration: 1.5s;
                --obap-circular-progress-size: 28px;
                --obap-circular-progress-stroke-width: 4px;

                display: block;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-icon {
                --obap-icon-width: calc(var(--obap-circular-progress-size) - (var(--obap-circular-progress-stroke-width) * 2) - 4px);
                --obap-icon-height: calc(var(--obap-circular-progress-size) - (var(--obap-circular-progress-stroke-width) * 2) - 4px);
                position: absolute;
                left: calc(var(--obap-circular-progress-stroke-width) + 2px);
                top: calc(var(--obap-circular-progress-stroke-width) + 2px);
                fill: var(--obap-circular-progress-icon-color);
            }

            .container {
                position: relative;
                height: var(--obap-circular-progress-size);
                width: var(--obap-circular-progress-size);
                background: var(--obap-circular-progress-backround-color);
                border-radius: 50%;
                overflow: hidden;
            }

            svg {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                stroke-width: var(--obap-circular-progress-stroke-width);
                stroke-linecap: butt;
                fill: transparent;
                transform: rotate(-90deg);
            }

            svg.primary {
                stroke: var(--obap-circular-progress-primary-color);
            }

            svg.secondary {
                stroke: var(--obap-circular-progress-secondary-color);
            }

            svg.indeterminate {
                stroke: var(--obap-circular-progress-primary-color);
                animation: indeterminate-rotate var(--obap-circular-progress-indeterminate-duration) infinite linear;
            }

            circle.indeterminate {
                transform-origin: 50% 50%;
                animation: indeterminate-stroke var(--obap-circular-progress-indeterminate-duration) infinite ease-in, indeterminate-flip var(--obap-circular-progress-indeterminate-duration) infinite steps(1);

            }

            @keyframes indeterminate-rotate {
                from {
                    transform: rotate(-90deg);
                }

                to {
                    transform: rotate(270deg);
                }
            }

            @keyframes indeterminate-stroke {
                from {
                    stroke-dasharray: 0% 270%;
                }

                50% {
                    stroke-dasharray: 270% 270%;
                }

                to {
                    stroke-dasharray: 0% 270%;
                }
            }

            @keyframes indeterminate-flip {
                from {
                    transform: scale(1, 1);
                }

                50% {
                    transform: scale(1, -1);
                }

                to {
                    transform: scale(1, 1);
                }
            }

            :host([disabled]) > .container > svg.primary {
                stroke: var(--obap-circular-progress-disabled-primary-color);
            }

            :host([disabled]) > .container > svg.secondary {
                stroke: var(--obap-circular-progress-disabled-secondary-color);
            }

            :host([disabled]) > .container {
                background: var(--obap-circular-progress-disabled-backround-color);
            }
        `))]}static get properties(){return{min:{type:Number,attribute:"min"},max:{type:Number,attribute:"max"},value:{type:Number,attribute:"value"},secondaryValue:{type:Number,attribute:"secondary-value"},indeterminate:{type:Boolean,attribute:"indeterminate"},icon:{type:String,attribute:"icon"}}}constructor(){super(),this.min=0,this.max=100,this.value=0,this.secondaryValue=0,this.indeterminate=!1,this.icon="",this._lineWidth=2,this._size=32}render(){const e=getComputedStyle(this);return this._lineWidth=Number(this.getCssVariableValue(e,"--obap-circular-progress-stroke-width","4px").replace("px",""))/2,this._size=Number(this.getCssVariableValue(e,"--obap-circular-progress-size","28px").replace("px","")),Gi(Ao||(Ao=ci`
            <div class="container">
                ${0}
                ${0}
            </div>
        `),this.icon?Gi(Lo||(Lo=ci`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.indeterminate?this._renderIndeterminateCircle(this.disabled):[this._renderCircle(this.secondaryValue,!0),this._renderCircle(this.value,!1)])}_renderCircle(e,t){return 0===e?null:Ki(Vo||(Vo=ci`<svg class="${0}" viewBox="0 0 ${0} ${0}"><circle cx="${0}" cy="${0}" r="${0}" stroke-dasharray="${0}"/></svg>`),t?"secondary":"primary",this._size,this._size,this._size/2,this._size/2,this._size/2-this._lineWidth,this._getCircleStrokeArray(e))}_getCircleStrokeArray(e){const t=2*Math.PI*(this._size/2-this._lineWidth);if(this.max-this.min<=0)return"0 "+t;{const o=e/(this.max-this.min)*t;return`${o} ${t-o}`}}_renderIndeterminateCircle(e){return e?null:Ki(Fo||(Fo=ci`<svg class="indeterminate" viewBox="0 0 ${0} ${0}"><circle class="indeterminate" cx="${0}" cy="${0}" r="${0}"/></svg>`),this._size,this._size,this._size/2,this._size/2,this._size/2-this._lineWidth)}});window.customElements.define("obap-activity-indicator",class extends hr{static get styles(){return[Jr,cr(Po||(Po=ci`
            :host {
                --obap-activity-indicator-linear-width: 240px;
                --obap-activity-indicator-duration: 1s;
                --obap-activity-indicator-color: var(--obap-primary-color, #5c6bc0);
                --obap-activity-indicator-background-color: transparent;
                --obap-activity-indicator-track-color: var(--obap-block-color, #ECECEC);

                display: block;
                border-radius: 0;
                padding: 4px;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            :host([activity-type="circular"]) {
                border-radius: 50%;
            }

            :host([activity-type="linear"]) {
                width: var(--obap-activity-indicator-linear-width);
            }

            obap-linear-progress {
                --obap-linear-progress-primary-color: var(--obap-activity-indicator-color);
                --obap-linear-progress-backround-color: var(--obap-activity-indicator-track-color);
                --obap-linear-progress-indeterminate-duration: var(--obap-activity-indicator-duration);
            }

            obap-circular-progress {
                --obap-circular-progress-primary-color: var(--obap-activity-indicator-color);
                --obap-circular-progress-indeterminate-duration: calc(var(--obap-activity-indicator-duration) * 1.5);
            }

            obap-linear-progress[mini] {
                height: 2px;
            }

            obap-circular-progress[mini] {
                --obap-circular-progress-size: 20px;
                --obap-circular-progress-stroke-width: 3px;
            }

            .typing-indicator {
                display: flex;
            }

            .pill {
                width: 8px;
                height: 8px;
                margin-right: 2px;   
                background: var(--obap-activity-indicator-color);
                transform-origin: 0% 100%;
                animation: pill-flip calc(var(--obap-activity-indicator-duration) * 0.5) infinite ;
            }

            .typing-indicator[round] > .pill {
                border-radius: 50%;
            }

            .typing-indicator[disabled] > .pill {
                background: var(--obap-activity-indicator-track-color);
                animation: none;
            }

            .pill[mini] {
                width: 6px;
                height: 6px;
            }

            .pill:last-of-type {
                margin-right: 0;
            }

            .pill-1 {
                animation-delay: 0;
            }

            .pill-2 {
                animation-delay: calc(var(--obap-activity-indicator-duration) * 0.1);
            }

            .pill-3 {
                animation-delay: calc(var(--obap-activity-indicator-duration) * 0.2);
            }

            @keyframes pill-flip {
                from {
                    transform: scale(1, 1);
                }

                50% {
                    transform: scale(1, -0.1);
                }

                to {
                    transform: scale(1, 1);
                }
            }
        `))]}static get properties(){return{activityType:{type:String,attribute:"activity-type",reflect:!0},mini:{type:Boolean,attribute:"mini",reflect:!0}}}constructor(){super(),this.activityType="circular",this.mini=!1}render(){switch(this.activityType){case"linear":return Gi(To||(To=ci`<obap-linear-progress ?mini="${0}" indeterminate ?disabled="${0}"></obap-linear-progress>`),this.mini,this.disabled);case"typing":return this._renderTypingIndicator(!0);case"equalizer":return this._renderTypingIndicator(!1);default:return Gi(Mo||(Mo=ci`<obap-circular-progress ?mini="${0}" indeterminate ?disabled="${0}"></obap-circular-progress>`),this.mini,this.disabled)}}_renderTypingIndicator(e){return Gi(Ro||(Ro=ci`
            <div class="typing-indicator" ?round="${0}" ?disabled="${0}">
                <div ?mini="${0}" class="pill pill-1"></div><div ?mini="${0}" class="pill pill-2"></div><div ?mini="${0}" class="pill pill-3"></div>
            </div>
        `),e,this.disabled,this.mini,this.mini,this.mini)}});window.customElements.define("demo-progress-indicators-activity",class extends hr{static get styles(){return[cr(Bo||(Bo=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .row {
                padding-top: 8px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .center {
                justify-content: center;
            }

            obap-activity-indicator[activity-type="linear"] {
                width: 100%;
            }

            obap-activity-indicator[mini][activity-type="linear"] {
                width: 50%;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }
        `))]}static get properties(){return{}}constructor(){super()}render(){return Gi(No||(No=ci`
            <div class="container">
                <demo-panel label="Normal">
                    <div class="row">
                        <obap-activity-indicator></obap-activity-indicator>
                        <obap-activity-indicator activity-type="typing"></obap-activity-indicator>
                        <obap-activity-indicator activity-type="equalizer"></obap-activity-indicator>
                    </div>

                    <div class="row">
                        <obap-activity-indicator activity-type="linear"></obap-activity-indicator>
                    </div>
                </demo-panel>

                <demo-panel label="Elevated">
                    <div class="row">
                        <obap-activity-indicator elevation="2"></obap-activity-indicator>
                        <obap-activity-indicator elevation="2" activity-type="typing"></obap-activity-indicator>
                        <obap-activity-indicator elevation="2" activity-type="equalizer"></obap-activity-indicator>
                    </div>

                    <div class="row">
                        <obap-activity-indicator elevation="2" activity-type="linear"></obap-activity-indicator>
                    </div>
                </demo-panel>

                <demo-panel label="Mini">
                    <div class="row">
                        <obap-activity-indicator mini></obap-activity-indicator>
                        <obap-activity-indicator mini activity-type="typing"></obap-activity-indicator>
                        <obap-activity-indicator mini activity-type="equalizer"></obap-activity-indicator>
                    </div>

                    <div class="row center">
                        <obap-activity-indicator mini activity-type="linear"></obap-activity-indicator>
                    </div>
                </demo-panel>
            </div>
        `))}});window.customElements.define("demo-progress-indicators-circular",class extends hr{static get styles(){return[cr(Oo||(Oo=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .row {
                padding-top: 8px;
                display: flex;
                justify-content: space-between;
            }
        `))]}render(){return Gi(Ho||(Ho=ci`
            <div class="container">
                <demo-panel>
                    <div class="row">
                        <demo-box label="Normal">
                            <obap-circular-progress value="70"></obap-circular-progress>
                        </demo-box>

                        <demo-box label="Secondary">
                            <obap-circular-progress value="50" secondary-value="70"></obap-circular-progress>
                        </demo-box>

                        <demo-box label="Disabled">
                            <obap-circular-progress disabled value="50" secondary-value="70"></obap-circular-progress>
                        </demo-box>

                        <demo-box label="Icon">
                            <obap-circular-progress value="70" icon="app:android"></obap-circular-progress>
                        </demo-box>

                        <demo-box label="Indeterminate">
                            <obap-circular-progress indeterminate></obap-circular-progress>
                        </demo-box>
                    </div>
                </demo-panel>
            </div>
        `))}});window.customElements.define("demo-progress-indicators-linear",class extends hr{static get styles(){return[cr(Do||(Do=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .row {
                padding-top: 8px;
                display: flex;
                flex-direction: column;
            }

            obap-linear-progress {
                width: 100%;
            }

            demo-box {
                margin-bottom: 32px;
            }

            demo-box:last-of-type {
                margin-bottom: 0;
            }
        `))]}render(){return Gi(jo||(jo=ci`
            <div class="container">
                <demo-panel>
                    <div class="row">
                        <demo-box label="Normal">
                            <obap-linear-progress value="33"></obap-linear-progress>
                        </demo-box>

                        <demo-box label="Secondary">
                            <obap-linear-progress value="30" secondary-value="50"></obap-linear-progress>
                        </demo-box>

                        <demo-box label="Disabled">
                            <obap-linear-progress disabled value="30" secondary-value="50"></obap-linear-progress>
                        </demo-box>

                        <demo-box label="Indeterminate">
                            <obap-linear-progress indeterminate></obap-linear-progress>
                        </demo-box>
                    </div>
                </demo-panel>
            </div>
        `))}});window.customElements.define("obap-switch",class extends hr{static get styles(){return[Sr,cr(Uo||(Uo=ci`
            :host {
                --obap-switch-label-color: var(--obap-on-surface-color, rgba(0, 0, 0, 0.87));
                --obap-switch-selected-label-color: var(--obap-on-primary-color, white);        
                --obap-switch-track-color: #EFEFEF;
                --obap-switch-selected-track-color: var(--obap-primary-light-color, #8e99f3);
                --obap-switch-thumb-color: var(--obap-surface-color, white);
                --obap-switch-selected-thumb-color: var(--obap-primary-color, #5c6bc0);
                --obap-switch-disabled-color: #CCCCCC;
                --obap-switch-disabled-background-color: #EEEEEE;
                --obap-switch-animation-speed: 0.15s;

                display: inline-block;
                cursor: pointer;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
                --obap-switch-label-color: var(--obap-switch-disabled-color);
                --obap-switch-track-color: var(--obap-switch-disabled-background-color);
                --obap-switch-thumb-color: var(--obap-switch-disabled-background-color);
            }

            .container {
                position: relative;
                height: 24px;
                padding: 5px;
                box-sizing: border-box;
            }

            .container[has-label] {
                padding: 0;
            }

            .track {
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
                height: 100%;
                border-radius: 12px;
                padding: 0 10px 0 26px;
                color: var(--obap-switch-label-color);
                background: var(--obap-switch-track-color);
                transition: all var(--obap-switch-animation-speed) linear;
            }

            .track[selected] {
                flex-direction: row;
                padding: 0 26px 0 10px;
                color: var(--obap-switch-selected-label-color);
                background: var(--obap-switch-selected-track-color);
            }

            .thumb {
                position: absolute;
                top: 2px;
                left: 2px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: var(--obap-switch-thumb-color);
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                            0 1px 5px 0 rgba(0, 0, 0, 0.12),
                            0 3px 1px -2px rgba(0, 0, 0, 0.2);

                transition: all var(--obap-switch-animation-speed) linear;
            }

            .thumb[selected] {
                top: 2px;
                left: calc(100% - 22px);
                background: var(--obap-switch-selected-thumb-color);
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                            0 1px 5px 0 rgba(0, 0, 0, 0.12),
                            0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }

            .track:not([has-label]):not([selected]) {
                padding: 0 10px 0 23px;
            }

            .track:not([has-label])[selected] {
                padding: 0 23px 0 10px;
            }
        `))]}static get properties(){return{selected:{type:Boolean,attribute:"selected",reflect:!0},leftLabel:{type:String,attribute:"left-label"},rightLabel:{type:String,attribute:"right-label"}}}constructor(){super(),this.selected=!1,this.leftLabel="",this.rightLabel=""}render(){const e=this.leftLabel&&this.rightLabel;return Gi(qo||(qo=ci`
            <div class="container" ?has-label="${0}" @click="${0}">
                <div class="track" ?selected="${0}" ?has-label="${0}">
                    ${0}
                </div>
                <div class="thumb" ?selected="${0}"></div>
            </div>
        `),e,this._toggleClick,this.selected,e,e?Gi(Wo||(Wo=ci`<div class="label typography-button" ?selected="${0}">${0}</div>`),this.selected,this.selected?this.leftLabel:this.rightLabel):null,this.selected)}_toggleClick(){this.selected=!this.selected,this.fireMessage("change",{selected:this.selected,name:this.name})}});window.customElements.define("demo-selection",class extends hr{static get styles(){return[cr(Zo||(Zo=ci`
            :host {
                display: block;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }

            obap-radio {
                margin-right: 16px;
            }

            obap-radio:last-of-type {
                margin-right: 0;
            }
            
            .container {
                height: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                margin-top: 4px;
            }
        `))]}render(){return Gi(Go||(Go=ci`
            <demo-panel label="Check">
                <div class="container">
                    <obap-check label="unselected"></obap-check>
                    <obap-check label="selected" selected></obap-check>
                    <obap-check label="indeterminate" indeterminate></obap-check>
                    <obap-check label="disabled" selected disabled></obap-check>
                </div>
            </demo-panel>

            <demo-panel label="Radio">
                <div class="container">
                    <obap-radio-group selected-index="0">
                        <obap-radio label="One"></obap-radio>
                        <obap-radio label="Two"></obap-radio>
                        <obap-radio label="Three"></obap-radio>
                        <obap-radio label="Four"></obap-radio>
                    </obap-radio-group>
                </div>
            </demo-panel>

            <demo-panel label="Switch">
                <div class="container">
                    <obap-switch></obap-switch>
                    <obap-switch disabled checked></obap-switch>
                    <obap-switch left-label="am" right-label="pm"></obap-switch>
                    <obap-switch left-label="am" right-label="pm" disabled checked></obap-switch>
                </div>
            </demo-panel>
        `))}});window.customElements.define("obap-card",class extends hr{static get styles(){return[wr,_r,kr,cr(Ko||(Ko=ci`
            :host {
                --obap-card-outline-color: var(--obap-divider-on-surface-color, rgba(0, 0, 0, 0.20));
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-material {
                padding: 0;
                height: 100%;
                border-radius: 3px;
                box-sizing: border-box;
                background: var(--obap-surface-color, white);
            }

            obap-material[outlined] {
                border: 1px solid var(--obap-card-outline-color);
            }

            .container {
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            .container > * {
                margin: 8px 16px 0 16px;
            }

            .title {
                color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
            }

            .subtitle {
                color: var(--obap-text-secondary-color, rgba(0, 0, 0, 0.54));
            }

            .content {
                flex: 1;
                color: var(--obap-text-secondary-color, rgba(0, 0, 0, 0.54));
            }
            
            .actions {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: stretch;
                margin-left: 8px;
                margin-right: 8px;
            }

            .action-slot {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .action-slot > ::slotted(*) {
                margin-right: 8px;
            }

            .action-slot > ::slotted(*:last-child) {
                margin-right: 0;
            }

            .container > :last-child {
                margin-bottom: 8px;
            }

            .container > :first-child {
                margin-top: 16px;
            }

            .media {
                margin-left: 0;
                margin-right: 0;
            }

            .media:first-child {
                margin-top: 0 !important;
            }
        `))]}static get properties(){return{elevated:{type:Boolean,attribute:"elevated"},outlined:{type:Boolean,attribute:"outlined"},heading:{type:String,attribute:"heading"},subHeading:{type:String,attribute:"sub-heading"}}}constructor(){super(),this.heading="",this.subHeading="",this.elevated=!1,this.outlined=!1}render(){return Gi(Xo||(Xo=ci`
            <obap-material elevation="${0}" ?outlined="${0}">
                <div class="container">
                    ${0}
                    ${0}
                    <div class="media"><slot name="media"></slot></div>
                    <div class="content typography-body"><slot></slot></div>
                    <div class="actions">
                        <div class="action-slot"><slot name="action-left"></slot></div>
                        <div class="action-slot"><slot name="action-right"></slot></div>
                    </div>
                </div>
            </obap-material>
        `),this.elevated?1:0,this.outlined,this.heading?Gi(Jo||(Jo=ci`<div class="title typography-title">${0}</div>`),this.heading):null,this.subHeading?Gi(Yo||(Yo=ci`<div class="subtitle typography-subtitle">${0}</div>`),this.subHeading):null)}});window.customElements.define("demo-cards",class extends hr{static get styles(){return[cr(Qo||(Qo=ci`
            :host {
                display: block;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }
            
            .container {
                height: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding-top: 24px;
            }

            obap-card {
                width: 350px;
                height: 350px;
            }

            .media {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100px;
                color: var(--obap-text-secondary-color);
                background: var(--obap-block-color);
            }
        `))]}render(){return Gi(ea||(ea=ci`
            <div class="container">
                <obap-card elevated heading="Title Goes Here" sub-heading="Secondary Text">
                    <div class="media typography-body" slot="media">MEDIA</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit urna ante, commodo dictum nisi accumsan vel. Ut felis orci, ultricies eu sodales quis, tincidunt vitae nulla. Ut a quam convallis, cursus erat convallis, feugiat mi.
                    </div>
                    <obap-button label="Action 1" slot="action-left"></obap-button>
                    <obap-button label="Action 2" slot="action-left"></obap-button>
                    <obap-button round icon="app:android" slot="action-right"></obap-button>
                    <obap-button round icon="app:polymer" slot="action-right"></obap-button>
                </obap-card>
            </div>
        `))}});window.customElements.define("obap-chip",class extends hr{static get styles(){return[kr,cr(ta||(ta=ci`
            :host {
                --obap-chip-color: var(--obap-text-secondary-color, rgba(0, 0, 0, 0.54));
                --obap-chip-background-color: var(--obap-block-color, #ECECEC);

                --obap-chip-selected-color: var(--obap-on-primary-color, #FFFFFF);
                --obap-chip-selected-background-color: var(--obap-primary-light-color, #5d638f);

                display: inline-block;
                height: 24px;
                border-radius: 12px;
                color: var(--obap-chip-color);
                background: var(--obap-chip-background-color);
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            :host([toggle]) {
                cursor: pointer;
            }

            :host([selected]) {
                color: var(--obap-chip-selected-color);
                background: var(--obap-chip-selected-background-color);
            }

            obap-icon {
                --obap-icon-width: 16px;
                --obap-icon-height: 16px;
            }

            .container {
                display: inline-flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                align-items: center;
                box-sizing: border-box;
                min-width: 64px;
                height: 24px;
                padding: 4px 6px;
            }

            .label {
                margin: 0 6px;
            }

            .icon {
                width: 16px;
                height: 16px;
                user-select: none;
                fill: var(--obap-chip-color);
                cursor: pointer;
            }

            :host([selected]) * > .icon {
                fill: var(--obap-chip-selected-color);
            }
        `))]}static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},removable:{type:Boolean,attribute:"removable"},toggle:{type:Boolean,attribute:"toggle",reflect:!0},selected:{type:Boolean,attribute:"selected",reflect:!0},showCheck:{type:Boolean,attribute:"show-check",reflect:!0}}}constructor(){super(),this.icon="",this.label="",this.removable=!1,this.toggle=!1,this.selected=!1,this.showCheck=!1}render(){return Gi(oa||(oa=ci`
            <div class="container typography-body" @click="${0}">
                ${0}
                <div class="label">${0}</div>
                ${0}
            </div>
        `),this._onClickhandler,this._getLeftIcon(this.icon,this.toggle,this.selected,this.showCheck),this.label,this._getRightIcon(this.removable))}_getLeftIcon(e,t,o,a){return t&&o&&a?Gi(aa||(aa=ci`<div class="icon"><svg viewBox="0 0 24 24"><g><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></g></svg></div>`)):e?Gi(ia||(ia=ci`<obap-icon icon="${0}"></obap-icon>`),e):null}_getRightIcon(e){return e?Gi(ra||(ra=ci`<div class="icon" @click="${0}"><svg viewBox="0 0 24 24"><g><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></g></svg></div>`),this._onRemoveClickHandler):null}_onRemoveClickHandler(e){e.preventDefault(),this.fireMessage("obap-chip-remove",{item:this})}_onClickhandler(e){e.preventDefault(),this.toggle&&(this.selected=!this.selected),this.fireMessage("obap-chip-click",{selected:this.selected})}});window.customElements.define("demo-chips",class extends hr{static get styles(){return[cr(na||(na=ci`
            :host {
                display: block;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }
            
            .container {
                height: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                margin-top: 4px;
            }
        `))]}render(){return Gi(sa||(sa=ci`
            <demo-panel label="Normal">
                <div class="container">
                    <obap-chip label="apple"></obap-chip>
                    <obap-chip label="orange"></obap-chip>
                    <obap-chip label="banana"></obap-chip>
                    <obap-chip label="lemon"></obap-chip>
                </div>
            </demo-panel>

            <demo-panel label="With Icons">
                <div class="container">
                    <obap-chip label="apple" icon="app:android"></obap-chip>
                    <obap-chip label="orange" icon="app:polymer"></obap-chip>
                    <obap-chip label="banana" icon="app:styles"></obap-chip>
                    <obap-chip label="lemon" icon="app:buttons"></obap-chip>
                </div>
            </demo-panel>

            <demo-panel label="Removable">
                <div class="container" @obap-chip-remove="${0}">
                    <obap-chip label="apple" removable></obap-chip>
                    <obap-chip label="orange" removable></obap-chip>
                    <obap-chip label="banana" removable></obap-chip>
                    <obap-chip label="lemon" removable></obap-chip>
                </div>
            </demo-panel>

            <demo-panel label="Toggle">
                <div class="container">
                    <obap-chip label="apple" icon="app:android" toggle></obap-chip>
                    <obap-chip label="orange" icon="app:polymer" toggle></obap-chip>
                    <obap-chip label="banana" icon="app:styles" toggle></obap-chip>
                    <obap-chip label="lemon" icon="app:buttons" toggle></obap-chip>
                </div>
            </demo-panel>

            <demo-panel label="Toggle with Check">
                <div class="container">
                    <obap-chip label="apple" icon="app:android" toggle show-check></obap-chip>
                    <obap-chip label="orange" icon="app:polymer" toggle show-check></obap-chip>
                    <obap-chip label="banana" icon="app:styles" toggle show-check></obap-chip>
                    <obap-chip label="lemon" icon="app:buttons" toggle show-check></obap-chip>
                </div>
            </demo-panel>
        `),this._handleChipRemove)}_handleChipRemove(e){e.target.parentNode.removeChild(e.target)}});window.customElements.define("demo-pickers-select",class extends hr{static get styles(){return[cr(la||(la=ci`
            :host {
                display: block;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
       
                gap: 16px;
                justify-items: stretch;
                padding: 8px 8px 16px 8px;
            }
        `))]}static get properties(){return{items:{type:Array},multiItems:{type:Array}}}constructor(){super(),this.items=["one","two","three","four","five"],this.multiItems=["one","two","three"]}render(){return Gi(ca||(ca=ci`
            <demo-panel label="Normal">
                <div class="container">
                    <obap-select border-style="none" .items="${0}"></obap-select>
                    <obap-select border-style="underline" .items="${0}"></obap-select>
                    <obap-select border-style="outline" .items="${0}"></obap-select>
                </div>
            </demo-panel>

            <demo-panel label="Label">
                <div class="container">
                    <obap-select no-float-label label="select" border-style="none" .items="${0}"></obap-select>
                    <obap-select no-float-label label="select" border-style="underline" .items="${0}"></obap-select>
                    <obap-select no-float-label label="select" border-style="outline" .items="${0}"></obap-select>
                </div>
            </demo-panel>

            <demo-panel label="Floating Label">
                <div class="container">
                    <obap-select label="select" border-style="none" .items="${0}"></obap-select>
                    <obap-select label="select" border-style="underline" .items="${0}"></obap-select>
                    <obap-select label="select" border-style="outline" .items="${0}"></obap-select>
                </div>
            </demo-panel>

            <demo-panel label="Icon">
                <div class="container">
                    <obap-select icon="app:android" label="select" border-style="none" .items="${0}"></obap-select>
                    <obap-select icon="app:android" label="select" border-style="underline" .items="${0}"></obap-select>
                    <obap-select icon="app:android" label="select" border-style="outline" .items="${0}"></obap-select>
                </div>
            </demo-panel>

            <demo-panel label="Multi Select">
                <div class="container">
                    <obap-select icon="app:android" label="select" multi border-style="outline" .items="${0}"></obap-select>
                </div>
            </demo-panel>
        `),this.items,this.items,this.items,this.items,this.items,this.items,this.items,this.items,this.items,this.items,this.items,this.items,this.multiItems)}});const An=e=>class extends e{static get properties(){return{for:{type:String,attribute:"for"},offsetX:{type:Number,attribute:"offset-x"},offsetY:{type:Number,attribute:"offset-y"},anchor:{type:String,attribute:"anchor",reflect:!0},inset:{type:String,attribute:"inset",reflect:!0},shift:{type:String,attribute:"shift",reflect:!0}}}get targetElement(){return this._target}constructor(){super(),this.for="",this.offsetX=0,this.offsetY=0,this.anchor="none",this.inset="none",this.shift="none",this._target=null,this._boundHandleResizeEvent=this._handleResizeEvent.bind(this),this._resizeObserver=new ResizeObserver(e=>{this.updatePosition()})}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._boundHandleResizeEvent),this._resizeObserver.observe(this),this._setTarget()}disconnectedCallback(){this._resizeObserver.unobserve(this),window.removeEventListener("resize",this._boundHandleResizeEvent),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),this.updatePosition()}updated(e){super.updated(e),this.updatePosition()}_setTarget(){let e=this.parentNode,t=null;this.for&&""!==this.for&&(t=e.querySelector("#"+this.for)),null===t&&(t=this.previousElementSibling),null===t&&(t=e),this._target=t,this.updatePosition()}_handleResizeEvent(e){this.updatePosition()}updatePosition(){if(!this._target||!this.offsetParent||"none"===this.anchor)return;let e=this.offsetParent.getBoundingClientRect(),t=this._target.getBoundingClientRect(),o=this.getBoundingClientRect(),a=t.left-e.left+this.offsetX,i=t.top-e.top+this.offsetY;switch(this.shift){case"left":a-=o.width;break;case"right":a+=o.width;break;case"up":i-=o.height;break;case"down":i+=o.height}switch(this.anchor){case"bottom-left":"in"===this.inset?i+=t.height-o.height:"out"===this.inset?(a-=o.width,i+=t.height):(a-=o.width/2,i+=t.height-o.width/2);break;case"bottom-right":"in"===this.inset?(a+=t.width-o.width,i+=t.height-o.height):"out"===this.inset?(a+=t.width,i+=t.height):(a+=t.width-o.width/2,i+=t.height-o.width/2);break;case"top-left":"in"===this.inset||("out"===this.inset?(a-=o.width,i-=o.height):(a-=o.width/2,i-=o.height/2));break;case"top-right":"in"===this.inset?a+=t.width-o.width:"out"===this.inset?(a+=t.width,i-=o.height):(a+=t.width-o.width/2,i-=o.height/2);break;case"middle-left":"in"===this.inset?i+=(t.height-o.height)/2:"out"===this.inset?(a-=o.width,i+=(t.height-o.height)/2):(a-=o.width/2,i+=(t.height-o.height)/2);break;case"middle-right":"in"===this.inset?(a+=t.width-o.width,i+=(t.height-o.height)/2):"out"===this.inset?(a+=t.width,i+=(t.height-o.height)/2):(a+=t.width-o.width/2,i+=(t.height-o.height)/2);break;case"middle-top":"in"===this.inset?a+=(t.width-o.width)/2:"out"===this.inset?(a+=(t.width-o.width)/2,i-=o.height):(a+=(t.width-o.width)/2,i-=o.height/2);break;case"middle-bottom":"in"===this.inset?(a+=(t.width-o.width)/2,i+=t.height-o.height):"out"===this.inset?(a+=(t.width-o.width)/2,i+=t.height):(a+=(t.width-o.width)/2,i+=t.height-o.height/2);break;case"center":a+=(t.width-o.width)/2,i+=(t.height-o.height)/2}this.style.left=a+"px",this.style.top=i+"px"}};class Ln extends(An(hr)){static get styles(){return[Er,cr(da||(da=ci`
            :host {
                --obap-tooltip-color: #FFFFFF;
                --obap-tooltip-background-color: rgba(97, 97, 97, 0.85);
                display: block;
                position: absolute;
                pointer-events: none;
                box-sizing: border-box;
                overflow: hidden;
                user-select: none;
                border-radius: 2px;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1);
                padding: 2px 4px;
                color: var(--obap-tooltip-color);
                background: var(--obap-tooltip-background-color);
            }

            :host([anchor="none"]) {
                position: inherit;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            :host([is-visible]) {
                opacity: 1.0;
            }
        `))]}static get properties(){return{triggerTime:{type:Number,attribute:"trigger-time"}}}constructor(){super(),this.anchor="middle-bottom",this.inset="out",this.triggerTime=500,this._showing=!1,this._boundHandleFocusEvent=this._handleFocusEvent.bind(this),this._boundHandleTouchStartEvent=this._handleTouchStartEvent.bind(this),this._boundShow=this.show.bind(this),this._boundHide=this.hide.bind(this)}connectedCallback(){super.connectedCallback(),this.targetElement.addEventListener("mouseenter",this._boundShow),this.targetElement.addEventListener("mouseleave",this._boundHide),this.targetElement.addEventListener("focus",this._boundHandleFocusEvent),this.targetElement.addEventListener("blur",this._boundHide),this.targetElement.addEventListener("touchstart",this._boundHandleTouchStartEvent),this.targetElement.addEventListener("touchend",this._boundHide)}disconnectedCallback(){this.targetElement.removeEventListener("mouseenter",this._boundShow),this.targetElement.removeEventListener("mouseleave",this._boundHide),this.targetElement.removeEventListener("focus",this._boundHandleFocusEvent),this.targetElement.removeEventListener("blur",this._boundHide),this.targetElement.removeEventListener("touchstart",this._boundHandleTouchStartEvent),this.targetElement.removeEventListener("touchend",this._boundHide),super.disconnectedCallback()}render(){return Gi(pa||(pa=ci`<div class="typography-caption"><slot></slot></div>`))}show(){this._showing=!0,setTimeout(()=>{this._showing&&this.setAttribute("is-visible",null)},this._touching?0:this.triggerTime)}hide(){this._showing=!1,this._touching=!1,this.removeAttribute("is-visible")}_handleFocusEvent(e){this._showing?this.hide():this.show()}_handleTouchStartEvent(e){this._touching=!0,this.show()}}window.customElements.define("obap-tooltip",Ln);window.customElements.define("demo-tooltips",class extends hr{static get styles(){return[cr(ha||(ha=ci`
            :host {
                display: block;
                position: relative;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }

            obap-button {
                --obap-button-ripple-color: var(--obap-on-primary-color);
                --obap-button-color: var(--obap-on-primary-color);
                --obap-button-background-color: var(--obap-primary-color);
            }

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: 16px;
                justify-items: center;
                padding: 8px 8px 24px 8px;
            }

            .tooltip-1 {
                --obap-tooltip-color: white;
                --obap-tooltip-background-color: cornflowerblue;
            }

            .tooltip-2 {
                --obap-tooltip-color: orange;
                --obap-tooltip-background-color: purple;
            }

            .tooltip-3 {
                --obap-tooltip-color: yellow;
                --obap-tooltip-background-color: black;
            }

            .tooltip-4 {
                --obap-tooltip-color: red;
                --obap-tooltip-background-color: silver;
            }
        `))]}render(){return Gi(ba||(ba=ci`
            <demo-panel label="Normal Style">
                <div class="container">
                    <obap-button raised label="Bottom" tabindex="0"></obap-button>
                    <obap-tooltip anchor="middle-bottom" offset-y="4">tooltip</obap-tooltip>

                    <obap-button raised label="Left" tabindex="0"></obap-button>
                    <obap-tooltip anchor="middle-left" offset-x="-4">tooltip</obap-tooltip>

                    <obap-button raised label="Right" tabindex="0"></obap-button>
                    <obap-tooltip anchor="middle-right" offset-x="4">tooltip</obap-tooltip>

                    <obap-button raised label="Top" tabindex="0"></obap-button>
                    <obap-tooltip anchor="middle-top" offset-y="-4">tooltip</obap-tooltip>
                </div>
            </demo-panel>

            <demo-panel label="Custom Styling">
                <div class="container">
                    <obap-button raised label="Button" tabindex="0"></obap-button>
                    <obap-tooltip class="tooltip-1" anchor="middle-bottom" offset-y="4">tooltip</obap-tooltip>

                    <obap-button raised label="Button" tabindex="0"></obap-button>
                    <obap-tooltip class="tooltip-2" anchor="middle-bottom" offset-y="4">tooltip</obap-tooltip>

                    <obap-button raised label="Button" tabindex="0"></obap-button>
                    <obap-tooltip class="tooltip-3" anchor="middle-bottom" offset-y="4">tooltip</obap-tooltip>

                    <obap-button raised label="Button" tabindex="0"></obap-button>
                    <obap-tooltip class="tooltip-4" anchor="middle-bottom" offset-y="4">tooltip</obap-tooltip>
                </div>
            </demo-panel>
        `))}});class Vn extends(An(hr)){static get styles(){return[cr(ua||(ua=ci`
            :host {
                --obap-callout-color: var(--obap-on-primary-color, #FFFFFF);
                --obap-callout-background-color: var(--obap-primary-light-color, #8e99f3);
                --obap-callout-arrow-size: 6px;
                --obap-callout-arrow-position: 50%;

                display: block;
                position: absolute;
                pointer-events: none;
                box-sizing: border-box;
                user-select: none;
                z-index: 1000;
                opacity: 0;
            }

            :host([elevated]) {
                filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.14))
						drop-shadow(0 1px 3px rgba(0, 0, 0, 0.12));
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            :host([is-visible]) {
                opacity: 1.0;
            }

            :host([anchor="none"]) {
                position: inherit;
            }

            :host([fixed]) {
                z-index: inherit;
            }

            .container {
                position: relative;
                color: var(--obap-callout-color);
                background: var(--obap-callout-background-color);
                border-radius: 3px;
                padding: 8px;
                margin: var(--obap-callout-arrow-size);
            }

            .container[arrow-position="left"]:after {
                content: '';
                position: absolute;
                left: 0;
                top: var(--obap-callout-arrow-position);
                width: 0;
                height: 0;
                border: var(--obap-callout-arrow-size) solid transparent;
                border-right-color: var(--obap-callout-background-color);
                border-left: none;
                margin-top: calc(var(--obap-callout-arrow-size) * -1);
                margin-left: calc(var(--obap-callout-arrow-size) * -1);
            }

            .container[arrow-position="right"]:after {
                content: '';
                position: absolute;
                right: 0;
                top: var(--obap-callout-arrow-position);
                width: 0;
                height: 0;
                border: var(--obap-callout-arrow-size) solid transparent;
                border-left-color: var(--obap-callout-background-color);
                border-right: none;
                margin-top: calc(var(--obap-callout-arrow-size) * -1);
                margin-right: calc(var(--obap-callout-arrow-size) * -1);
            }

            .container[arrow-position="top"]:after {
                content: '';
                position: absolute;
                top: 0;
                left: var(--obap-callout-arrow-position);
                width: 0;
                height: 0;
                border: var(--obap-callout-arrow-size) solid transparent;
                border-bottom-color: var(--obap-callout-background-color);
                border-top: none;
                margin-left: calc(var(--obap-callout-arrow-size) * -1);
                margin-top: calc(var(--obap-callout-arrow-size) * -1);
            }

            .container[arrow-position="bottom"]:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: var(--obap-callout-arrow-position);
                width: 0;
                height: 0;
                border: var(--obap-callout-arrow-size) solid transparent;
                border-top-color: var(--obap-callout-background-color);
                border-bottom: none;
                margin-left: calc(var(--obap-callout-arrow-size) * -1);
                margin-bottom: calc(var(--obap-callout-arrow-size) * -1);
            }
        `))]}static get properties(){return{arrowPosition:{type:String,attribute:"arrow-position"},fixed:{type:Boolean,attribute:"fixed",reflect:!0},elevated:{type:Boolean,attribute:"elevated",reflect:!0},triggerTime:{type:Number,attribute:"trigger-time"}}}constructor(){super(),this.arrowPosition="bottom",this.fixed=!1,this.anchor="middle-top",this.elevated=!1,this.inset="out",this._showing=!1,this.triggerTime=500,this._touching=!1,this._boundHandleFocusEvent=this._handleFocusEvent.bind(this),this._boundHandleTouchStartEvent=this._handleTouchStartEvent.bind(this),this._boundShow=this.show.bind(this),this._boundHide=this.hide.bind(this)}connectedCallback(){super.connectedCallback(),this.targetElement&&"none"!==this.anchor&&!this.fixed&&(this.targetElement.addEventListener("mouseenter",this._boundShow),this.targetElement.addEventListener("mouseleave",this._boundHide),this.targetElement.addEventListener("focus",this._boundHandleFocusEvent),this.targetElement.addEventListener("blur",this._boundHide),this.targetElement.addEventListener("touchstart",this._boundHandleTouchStartEvent),this.targetElement.addEventListener("touchend",this._boundHide))}disconnectedCallback(){this.targetElement&&"none"!==this.anchor&&!this.fixed&&(this.targetElement.removeEventListener("mouseenter",this._boundShow),this.targetElement.removeEventListener("mouseleave",this._boundHide),this.targetElement.removeEventListener("focus",this._boundHandleFocusEvent),this.targetElement.removeEventListener("blur",this._boundHide),this.targetElement.removeEventListener("touchstart",this._boundHandleTouchStartEvent),this.targetElement.removeEventListener("touchend",this._boundHide)),super.disconnectedCallback()}updated(e){super.updated(e),e.forEach((e,t)=>{("anchor"===t&&"none"===this.anchor||"fixed"===t&&this.fixed)&&this.show()})}render(){return Gi(ga||(ga=ci`<div class="container" arrow-position="${0}"><slot></slot></div>`),this.arrowPosition)}show(){this._showing=!0,setTimeout(()=>{this._showing&&(this.setAttribute("is-visible",null),this.updatePosition())},"none"===this.anchor||this.fixed||this._touching?0:this.triggerTime)}hide(){this._touching=!1,"none"===this.anchor||this.fixed||(this._showing=!1,this.removeAttribute("is-visible"))}_handleFocusEvent(e){"none"===this.anchor||this.fixed||(this._showing?this.hide():this.show())}_handleTouchStartEvent(e){"none"===this.anchor||this.fixed||(this._touching=!0,this.show())}}window.customElements.define("obap-callout",Vn);window.customElements.define("demo-callouts",class extends hr{static get styles(){return[Er,kr,cr(ma||(ma=ci`
            :host {
                display: block;
                position: relative;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                margin-bottom: 0;
            }

            obap-button {
                --obap-button-ripple-color: var(--obap-on-primary-color);
                --obap-button-color: var(--obap-on-primary-color);
                --obap-button-background-color: var(--obap-primary-color);
            }

            .container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: 16px;
                justify-items: center;
                padding: 8px 8px 16px 8px;
            }

            .callout-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .offset {
                margin-bottom: 4px;
            }

            obap-callout.custom {
                --obap-callout-color: var(--obap-primary-color);
                --obap-callout-background-color: var(--obap-surface-color);
            }
        `))]}render(){return Gi(va||(va=ci`
            <demo-panel label="Normal Style">
                <div class="container">
                    <obap-button raised label="Top" tabindex="0"></obap-button>
                    <obap-callout anchor="middle-top" arrow-position="bottom" offset-y="-2">
                        <div class="callout-content typography-body">
                            <div>callout</div>
                        </div>
                    </obap-callout>

                    <obap-button raised label="Left" tabindex="0"></obap-button>
                    <obap-callout anchor="middle-left" arrow-position="right" offset-x="-2">
                        <div class="callout-content typography-body">
                            <div>callout</div>
                        </div>
                    </obap-callout>

                    <obap-button raised label="Right" tabindex="0"></obap-button>
                    <obap-callout anchor="middle-right" arrow-position="left" offset-x="2">
                        <div class="callout-content typography-body">
                            <div>callout</div>
                        </div>
                    </obap-callout>

                    <obap-button raised label="Bottom" tabindex="0"></obap-button>
                    <obap-callout anchor="middle-bottom" arrow-position="top" offset-y="2">
                        <div class="callout-content typography-body">
                            <div>callout</div>
                        </div>
                    </obap-callout>
                </div>
            </demo-panel>

            <demo-panel label="Custom Styling">
                <div class="container">
                    <obap-button raised label="Elevated" tabindex="0"></obap-button>
                    <obap-callout anchor="middle-top" arrow-position="bottom" offset-y="-2" elevated>
                        <div class="callout-content typography-body">
                            <div>callout</div>
                        </div>
                    </obap-callout>

                    <obap-button raised label="Icon" tabindex="0"></obap-button>
                    <obap-callout anchor="middle-top" arrow-position="bottom" offset-y="-2" elevated>
                        <div class="callout-content typography-body">
                            <obap-icon icon="app:android"></obap-icon>
                        </div>
                    </obap-callout>

                    <obap-button raised label="Mixed" tabindex="0"></obap-button>
                    <obap-callout anchor="middle-top" arrow-position="bottom" offset-y="-2" elevated>
                        <div class="callout-content typography-body">
                            <obap-icon class="offset" icon="app:android"></obap-icon>
                            <div>callout</div>
                        </div>
                    </obap-callout>

                    <obap-button raised label="Color" tabindex="0"></obap-button>
                    <obap-callout class="custom" anchor="middle-top" arrow-position="bottom" offset-y="-2" elevated>
                        <div class="callout-content typography-body">
                            <obap-icon class="offset" icon="app:android"></obap-icon>
                            <div>callout</div>
                        </div>
                    </obap-callout>
                </div>
            </demo-panel>
        `))}});window.customElements.define("demo-conversation",class extends hr{static get styles(){return[Er,kr,cr(ya||(ya=ci`
            :host {
                display: block;
                position: relative;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-button {
                --obap-button-ripple-color: var(--obap-on-primary-color);
                --obap-button-color: var(--obap-on-primary-color);
                --obap-button-background-color: var(--obap-primary-color);
            }

            .avatar {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;
                height: 48px;
                width: 48px;
                border-radius: 50%;
                cursor: pointer;
            }

            .blue {
                background: #2196F3;
            }

            .red {
                background: #EF9A9A;
            }

            .speech {
                max-width: 500px;
            }

            .speech-row {
              display: flex;
              flex-direction: row;
              align-items: center;
              padding-bottom: 8px;
            }

            .bubble-right {
                --obap-callout-background-color: var(--obap-accent-color);
                --obap-callout-color: var(--obap-on-accent-color);
            }

            .bubble-left {
                --obap-callout-background-color: var(--obap-primary-color);
                --obap-callout-color: var(--obap-on-primary-color);
            }

            .container-speech {
                position: relative;
                display: flex;
                flex-direction: column;
                margin: 16px 8px 0 8px;
            }

            .right {
                flex-direction: row-reverse;
            }

            obap-icon.speech-icon{
                --obap-icon-fill-color: white;
            }
        `))]}render(){return Gi(fa||(fa=ci`
            <demo-panel>
                <div class="container-speech typography-caption">
                    <div class="speech-row left">
                        <div class="avatar blue" tabindex="0"><obap-icon class="speech-icon" icon="app:android"></obap-icon></div>
                        <obap-callout class="bubble-left" fixed elevated offset-x="4" offset-y="0" anchor="middle-right" arrow-position="left">
                            <div class="speech">
                                    Hello!
                            </div>
                        </obap-callout>
                    </div>

                    <div class="speech-row right">
                        <div class="avatar red" tabindex="0"><obap-icon class="speech-icon" icon="app:face"></div>
                        <obap-callout class="bubble-right" fixed elevated offset-x="-4" offset-y="0" anchor="middle-left" arrow-position="right">
                            <div class="speech">
                                Hello, how are you doing?
                            </div>
                        </obap-callout>
                    </div>

                    <div class="speech-row left">
                        <div class="avatar blue" tabindex="0"><obap-icon class="speech-icon" icon="app:android"></div>
                        <obap-callout class="bubble-left" fixed elevated offset-x="4" offset-y="0" anchor="middle-right" arrow-position="left">
                            <div class="speech">
                                Fine thanks, and you?
                            </div>
                        </obap-callout>
                    </div>

                    <div class="speech-row right">
                        <div class="avatar red" tabindex="0"><obap-icon class="speech-icon" icon="app:face"></div>
                        <obap-callout class="bubble-right" fixed elevated offset-x="-4" offset-y="0" anchor="middle-left" arrow-position="right">
                            <div class="speech">
                                Good, good, good.
                            </div>
                        </obap-callout>
                    </div>

                    <div class="speech-row right">
                        <div class="avatar red" tabindex="0"><obap-icon class="speech-icon" icon="app:face"></div>
                        <obap-callout class="bubble-right" fixed elevated offset-x="-4" offset-y="0" anchor="middle-left" arrow-position="right">
                            <div class="speech">
                                Okay, bye.
                            </div>
                        </obap-callout>
                    </div>
                </div>
            </demo-panel>
        `))}});window.customElements.define("obap-slider",class extends hr{static get styles(){return[Er,cr(xa||(xa=ci`
            :host {
                --obap-slider-color: var(--obap-on-surface-color, rgba(0, 0, 0, 0.87));
                --obap-slider-background-color: var(--obap-surface-color, #FFFFFF);
                --obap-slider-inactive-track-color: var(--obap-primary-light-color, #8e99f3);
                --obap-slider-active-track-color: var(--obap-primary-color, #5c6bc0);
                --obap-slider-thumb-color: var(--obap-primary-color, #5c6bc0);
                --obap-slider-icon-color: var(--obap-text-icon-color, rgba(0, 0, 0, 0.38));
                --obap-slider-icon-size: 16px;
                --obap-slider-callout-color: #FFFFFF;
                --obap-slider-callout-background-color: rgba(97, 97, 97, 0.85);

                display: block;
                height: 40px;
                user-select: false;
                color: var(--obap-slider-color);
                background: var(--obap-slider-background-color);
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 100%;
                width: 100%;
                padding: 0 1px;
                cursor: pointer;
                -webkit-touch-callout: none; 
                -webkit-user-select: none;
                -ms-user-select: none; 
                user-select: none; 
            }

            .inactive-track {
                position: relative;
                flex: 1;
                height: 3px;
                background: var(--obap-slider-inactive-track-color);
            }

            .active-track {
                position: absolute;
                height: 3px;
                background: var(--obap-slider-active-track-color);
                left: 0;
                top: 0;
            }

            .range-track {
                cursor: ew-resize;
            }

            .thumb {
                position: absolute;
                outline: 0;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: var(--obap-slider-thumb-color);
                left: 0;
                top: 50%;
                transform: translate(-50%, -50%);
                transition: all 0.05s linear;
            }

            .thumb[dragging], .thumb:focus {
                width: 20px;
                height: 20px;
            }

            .balloon {
                display: none;
                position: absolute;
                left: 6px;
                top: -6px;
                color: white;
                border-radius: 3px;
                color: var(--obap-slider-callout-color);
                background: var(--obap-slider-callout-background-color);
                transform: translate(-50%, -100%);
                font-size: 11px;
            }

            .balloon:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 0;
                height: 0;
                border: 4px solid transparent;
                border-top-color: var(--obap-slider-callout-background-color);
                border-bottom: none;
                margin-left: -4px;
                margin-bottom: -4px;
            }

            .balloon-content {
                padding: 2px 4px;
            }

            .thumb[dragging] > .balloon, .thumb:focus > .balloon {
                display: block;
                left: 10px;
            }

           

            .stop-label {
                position: absolute;
                top: 8px;
                transform: translate(-50%, 0);
            }

            .end {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 8px;
            }

            obap-icon {
                --obap-icon-fill-color: var(--obap-slider-icon-color);
                width: var(--obap-slider-icon-size);
                height: var(--obap-slider-icon-size);
            }

            .stop {
                position: absolute;
                width: 1px;
                height: 7px;
                top: -2px;
                transform: translate(-50%, 0);
                background: var(--obap-slider-inactive-track-color);
            }

            .stop[active] {
                background: var(--obap-slider-active-track-color);
            }
        `))]}static get properties(){return{value:{type:Number,attribute:"value"},startValue:{type:Number,attribute:"start-value"},endValue:{type:Number,attribute:"end-value"},minValue:{type:Number,attribute:"min-value"},maxValue:{type:Number,attribute:"max-value"},stops:{type:Array},startIcon:{type:String,attribute:"start-icon"},endIcon:{type:String,attribute:"end-icon"},valueIcon:{type:String,attribute:"value-icon"},showStartLabel:{type:Boolean,attribute:"show-start-label"},showEndLabel:{type:Boolean,attribute:"show-end-label"},showStartIcon:{type:Boolean,attribute:"show-start-icon"},showEndIcon:{type:Boolean,attribute:"show-end-icon"},showFloatingLabel:{type:Boolean,attribute:"show-floating-label"},showStopLabels:{type:Boolean,attribute:"show-stop-labels"},range:{type:Boolean,attribute:"range"},discrete:{type:Boolean,attribute:"discrete"},floatingLabelDecimalPoints:{type:Number,attribute:"floating-label-decimal-points"},labelFormat:{type:String,attribute:"label-format"}}}get value(){return this._value}set value(e){const t=this.value;e!==t&&(this._value=Number(e),requestAnimationFrame(()=>this.requestUpdate("value",t)))}get startValue(){return this._startValue}set startValue(e){const t=this.startValue;e!==t&&(this._startValue=Number(e),requestAnimationFrame(()=>this.requestUpdate("startValue",t)))}get endValue(){return this._endValue}set endValue(e){const t=this.endValue;e!==t&&(this._endValue=Number(e),requestAnimationFrame(()=>this.requestUpdate("endValue",t)))}get stops(){return this._stops}set stops(e){const t=this.stops;e!==t&&(this._stops=e,this._stopValues=this._stops.map(e=>e.value),this.requestUpdate("stops",t))}get discrete(){return this._discrete}set discrete(e){const t=this.discrete;e!==t&&(this._discrete=e,e&&this._snapValues(),this.requestUpdate("discrete",t))}constructor(){super(),this._value=0,this._startValue=0,this._endValue=0,this.minValue=0,this.maxValue=100,this._stops=[],this._stopValues=[],this.startIcon="",this.endIcon="",this.valueIcon="",this.showStartLabel=!1,this.showEndLabel=!1,this.showStartIcon=!1,this.showEndIcon=!1,this.showFloatingLabel=!1,this.showStopLabels=!1,this.range=!1,this._discrete=!1,this.floatingLabelDecimalPoints=0,this.labelFormat="",this._dragging=!1,this._rangeDragging=!1,this._rangeDragPreviousValue=0,this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleMouseMoveEvent=this._handleMouseMoveEvent.bind(this),this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleKeyDownEvent=this._handleKeyDownEvent.bind(this),this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("mouseleave",this._boundHandleMouseUpEvent),this.addEventListener("touchstart",this._boundHandleMouseDownEvent),this.addEventListener("touchend",this._boundHandleMouseUpEvent),this.addEventListener("keydown",this._boundHandleKeyDownEvent)}updated(e){super.updated(e),e.forEach((e,t)=>{"value"!==t&&"startValue"!==t&&"endValue"!==t||this.fireMessage("obap-slider-change",{value:this.value,startValue:this.startValue,endValue:this.endValue})}),this._track=this.renderRoot.getElementById("inactive-track")}render(){return Gi(wa||(wa=ci`
            <div class="container">
                ${0}
                <div id="inactive-track" class="inactive-track">
                    ${0}
                    ${0}
                    ${0}
                </div>
                ${0}
            </div>
        `),this._renderLabel(!0,this.minValue,this.startIcon),this._renderActiveTrack(),this._renderStops(),this._renderThumb(),this._renderLabel(!1,this.maxValue,this.endIcon))}_renderStops(){if(this.stops&&this.stops.length>0){const e=100/(this.maxValue-this.minValue);return this.range?this.stops.map(t=>Gi(_a||(_a=ci`
                    <div class="stop" ?active="${0}" style="left: ${0}%;"></div>
                    ${0}
                `),t.value>this.startValue&&t.value<this.endValue,t.value*e,this.showStopLabels?Gi(ka||(ka=ci`<div class="stop-label typography-caption" style="left: ${0}%;">${0}</div>`),t.value*e,t.label?t.label:this._formatValue(t.value)):null)):this.stops.map(t=>Gi(Sa||(Sa=ci`
                    <div class="stop" ?active="${0}" style="left: ${0}%;"></div>
                    ${0}
                `),t.value<this.value,t.value*e,this.showStopLabels?Gi(Ea||(Ea=ci`<div class="stop-label typography-caption" style="left: ${0}%;">${0}</div>`),t.value*e,t.label?t.label:this._formatValue(t.value)):null))}return null}_renderActiveTrack(){const e=100/(this.maxValue-this.minValue);if(this.range){const t=this.startValue*e,o=this.endValue*e;return Gi($a||($a=ci`
                <div class="active-track range-track" style="left: ${0}%; width: ${0}%;"></div>
            `),t,o-t)}return Gi(Ca||(Ca=ci`
                <div class="active-track" style="width: ${0}%;"></div>
            `),this.value*e)}_renderThumb(){const e=100/(this.maxValue-this.minValue);return this.range?Gi(Ia||(Ia=ci`
                <div id="thumb-start" thumb tabindex="0" class="thumb" style="left: ${0}%;">
                    ${0}  
                </div>
                
                <div id="thumb-end" thumb tabindex="0" class="thumb" style="left: ${0}%;">
                    ${0}
                </div>
            `),this.startValue*e,this.showFloatingLabel?Gi(za||(za=ci`
                        <div class="balloon"><slot name="start-value"><div class="balloon-content">${0}</div></slot></div>
                    `),this._formatValue(this.startValue.toFixed(this.floatingLabelDecimalPoints))):null,this.endValue*e,this.showFloatingLabel?Gi(Aa||(Aa=ci`
                        <div class="balloon"><slot name="end-value"><div class="balloon-content">${0}</div></slot></div>
                    `),this._formatValue(this.endValue.toFixed(this.floatingLabelDecimalPoints))):null):Gi(La||(La=ci`
                <div id="thumb" thumb tabindex="0" class="thumb" style="left: ${0}%;">
                    ${0}
                </div>
            `),this.value*e,this.showFloatingLabel?Gi(Va||(Va=ci`
                        <div class="balloon"><slot name="value"><div class="balloon-content">${0}</div></slot></div>
                    `),this._formatValue(this.value.toFixed(this.floatingLabelDecimalPoints))):null)}_renderLabel(e,t,o){const a=e?this.showStartIcon:this.showEndIcon,i=e?this.showStartLabel:this.showEndLabel;return i||a&&o?Gi(Fa||(Fa=ci`
                <div class="end typography-caption">
                    ${0}
                    ${0}
                </div>
            `),a?Gi(Pa||(Pa=ci`<obap-icon class="end-icon" icon="${0}"></obap-icon>`),o):null,i?Gi(Ta||(Ta=ci`<div class="end-label">${0}</div>`),this._formatValue(t)):null):null}_handleKeyDownEvent(e){const t=e.key;"ArrowUp"===t||"ArrowRight"===t||"PageUp"===t?(this._step(1),e.preventDefault()):"ArrowDown"===t||"ArrowLeft"===t||"PageDown"===t?(this._step(-1),e.preventDefault()):"Home"===t?(this._gotoStart(),e.preventDefault()):"End"===t?(this._gotoEnd(),e.preventDefault()):"Escape"===t&&this.renderRoot.activeElement&&(this.renderRoot.activeElement.blur(),e.preventDefault())}_gotoStart(){switch(this.renderRoot.activeElement.id){case"thumb":this.value=this.minValue;break;case"thumb-start":this.startValue=this.minValue;break;case"thumb-end":this.endValue=this.startValue}}_gotoEnd(){switch(this.renderRoot.activeElement.id){case"thumb":this.value=this.maxValue;break;case"thumb-start":this.startValue=this.endValue;break;case"thumb-end":this.endValue=this.maxValue}}_step(e){const t=e>0?"forward":"backward";switch(this.renderRoot.activeElement.id){case"thumb":this.value=this._clampValue(this.value+e,t);break;case"thumb-start":this.startValue=Math.min(this._clampValue(this.startValue+e,t),this.endValue);break;case"thumb-end":this.endValue=Math.max(this._clampValue(this.endValue+e,t),this.startValue)}}_handleMouseDownEvent(e){const t=e.composedPath()[0];if(t.hasAttribute("thumb"))this._dragTarget=t,this._dragTarget.setAttribute("dragging",""),this._dragging=!0,this.addEventListener("mousemove",this._boundHandleMouseMoveEvent),this.addEventListener("touchmove",this._boundHandleMouseMoveEvent);else if(this.range){const t="touchstart"===e.type?this._mouseToValue(e.changedTouches[0].clientX):this._mouseToValue(e.clientX);t<this.startValue?(this._dragTarget=this.renderRoot.getElementById("thumb-start"),this._dragTarget.setAttribute("dragging",""),this._dragging=!0):t>this.endValue?(this._dragTarget=this.renderRoot.getElementById("thumb-end"),this._dragTarget.setAttribute("dragging",""),this._dragging=!0):(this._dragTargetStart=this.renderRoot.getElementById("thumb-start"),this._dragTargetStart.setAttribute("dragging",""),this._dragTargetEnd=this.renderRoot.getElementById("thumb-end"),this._dragTargetEnd.setAttribute("dragging",""),this._rangeDragging=!0,this._rangeDragPreviousValue=t,this.addEventListener("mousemove",this._boundHandleMouseMoveEvent),this.addEventListener("touchmove",this._boundHandleMouseMoveEvent))}else this._dragTarget=this.renderRoot.getElementById("thumb"),this._dragTarget.setAttribute("dragging",""),this._dragging=!0}_handleMouseMoveEvent(e){if(this._dragging){const t="touchmove"===e.type?this._mouseToValue(e.changedTouches[0].clientX):this._mouseToValue(e.clientX);this._move(t)}else if(this._rangeDragging){const t="touchmove"===e.type?this._mouseToValue(e.changedTouches[0].clientX):this._mouseToValue(e.clientX);this._moveRange(t)}}_handleMouseUpEvent(e){if(this._dragging){if(this._dragTarget){const t="touchend"===e.type?this._mouseToValue(e.changedTouches[0].clientX):this._mouseToValue(e.clientX);this._move(t),this._dragTarget.removeAttribute("dragging"),this._dragTarget.blur(),this._dragTarget=null}this._dragging=!1}else if(this._rangeDragging&&this._dragTargetStart&&this._dragTargetEnd){const t="touchend"===e.type?this._mouseToValue(e.changedTouches[0].clientX):this._mouseToValue(e.clientX);this._moveRange(t),this._dragTargetStart.removeAttribute("dragging"),this._dragTargetEnd.removeAttribute("dragging"),this._dragTargetStart.blur(),this._dragTargetEnd.blur(),this._dragTargetStart=null,this._dragTargetEnd=null,this._rangeDragging=!1}this.removeEventListener("mousemove",this._boundHandleMouseMoveEvent),this.removeEventListener("touchmove",this._boundHandleMouseMoveEvent)}_moveRange(e){const t=e-this._rangeDragPreviousValue;let o=this.startValue+t,a=this.endValue+t;o>=this.minValue&&a<=this.maxValue&&(this.startValue=o,this.endValue=a,this._rangeDragPreviousValue=e)}_move(e){switch(this._dragTarget.id){case"thumb":this.value=e;break;case"thumb-start":this.startValue=Math.min(e,this.endValue);break;case"thumb-end":this.endValue=Math.max(e,this.startValue)}}_mouseToValue(e){const t=this._track.getBoundingClientRect(),o=t.width,a=(this.maxValue-this.minValue)/o,i=e-t.x;return this._clampValue(a*i)}_snapValues(){this.range?(this.startValue=this._clampValue(this.startValue),this.endValue=this._clampValue(this.endValue)):this.value=this._clampValue(this.value)}_clampValue(e,t){let o=e;if(o<this.minValue?o=this.minValue:o>this.maxValue&&(o=this.maxValue),this.discrete&&o!==this.minValue&&o!==this.maxValue&&this._stopValues&&this._stopValues.length>0)if(t){if("backward"===t){for(let e=this._stopValues.length-1;e>=0;e--)if(this._stopValues[e]<o){o=this._stopValues[e];break}}else for(let e=0;e<this._stopValues.length;e++)if(this._stopValues[e]>o){o=this._stopValues[e];break}}else o=this._stopValues.reduce((e,t)=>Math.abs(t-o)<Math.abs(e-o)?t:e);return o}_formatValue(e){return this.labelFormat?this.labelFormat.replace("{}",e):e}});window.customElements.define("demo-slider",class extends hr{static get styles(){return[kr,cr(Ma||(Ma=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .options {
                display: grid;
                width: 100%;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr 1fr;
                grid-column-gap: 24px;
                grid-row-gap: 8px;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            obap-slider {
                margin: 16px 8px 8px 8px;
            }

            .custom-balloon {
                white-space: nowrap;
                outline: 1px solid white;
                margin: 4px;
                padding: 4px;
                border-radius: 2px;
            }
        `))]}static get properties(){return{decimals:{type:Number},value:{type:Number},startValue:{type:Number},endValue:{type:Number},stops:{type:Array},range:{type:Boolean},discrete:{type:Boolean},showStartLabel:{type:Boolean},showEndLabel:{type:Boolean},showStartIcon:{type:Boolean},showEndIcon:{type:Boolean},showStopLabels:{type:Boolean},showFloatingLabel:{type:Boolean},updateObject:{type:Object},labelFormat:{type:String},customBalloons:{type:Boolean}}}constructor(){super(),this._normalStops=[{value:0},{value:25},{value:50},{value:75},{value:100}],this._customStops=[{value:0,label:"min"},{value:25,label:"small"},{value:50,label:"medium"},{value:75,label:"large"},{value:100,label:"max"}],this.decimals=0,this.value=50,this.startValue=40,this.endValue=60,this.range=!1,this.discrete=!1,this.showStopLabels=!1,this.showFloatingLabel=!1,this.showStartLabel=!1,this.showEndLabel=!1,this.showStartIcon=!1,this.showEndIcon=!1,this.updateObject={value:this.value,startValue:this.startValue,endValue:this.endValue},this.stops=this._normalStops,this.labelFormat="",this.customBalloons=!1}render(){return Gi(Ra||(Ra=ci`
            <div class="container">
                <demo-panel>
                    <div class="options">
                        <obap-check name="range" label="Range" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="discrete" label="Discrete" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="decimal" label="Decimal" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="stop-labels" label="Stop Labels" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="floating-label" label="Floating Label" @obap-item-selected="${0}"></obap-check>

                        <obap-check name="start-label" label="Start Label" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="end-label" label="End Label" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="start-icon" label="Start Icon" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="end-icon" label="End Icon" @obap-item-selected="${0}"></obap-check>

                        <obap-check name="custom-stops" label="Custom Stops" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="label-format" label="Label Format" @obap-item-selected="${0}"></obap-check>
                        <obap-check name="custom-balloons" label="Balloons" @obap-item-selected="${0}"></obap-check>
                    </div>
                </demo-panel>

                <demo-panel>
                    <obap-slider min-value="0" max-value="100" value="${0}" start-value="${0}" end-value="${0}" 
                                 .stops="${0}" start-icon="app:android" end-icon="app:face" floating-label-decimal-points="${0}"
                                 ?range="${0}" ?discrete="${0}" ?show-stop-labels="${0}" label-format="${0}"
                                 ?show-floating-label="${0}" ?show-start-label="${0}" ?show-end-label="${0}"
                                 ?show-start-icon="${0}" ?show-end-icon="${0}" @obap-slider-change="${0}">

                        ${0}
                        
                    </obap-slider>
                </demo-panel>

                <demo-panel>
                    <div class="typography-body">
                        ${0}
                    </div>
                </demo-panel>
            </div>
        `),this._optionChange,this._optionChange,this._optionChange,this._optionChange,this._optionChange,this._optionChange,this._optionChange,this._optionChange,this._optionChange,this._optionChange,this._optionChange,this._optionChange,this.value,this.startValue,this.endValue,this.stops,this.decimals,this.range,this.discrete,this.showStopLabels,this.labelFormat,this.showFloatingLabel,this.showStartLabel,this.showEndLabel,this.showStartIcon,this.showEndIcon,this._sliderChange,this.customBalloons?Gi(Ba||(Ba=ci`
                            <div class="custom-balloon" slot="value">Value: ${0}</div>
                            <div class="custom-balloon" slot="start-value">Start: ${0}</div>
                            <div class="custom-balloon" slot="end-value">End: ${0}</div>
                        `),this.updateObject.value.toFixed(this.decimals),this.updateObject.startValue.toFixed(this.decimals),this.updateObject.endValue.toFixed(this.decimals)):null,this.range?Gi(Na||(Na=ci`<div>Start Value = ${0}</div><div>End Value = ${0}</div>`),this.updateObject.startValue,this.updateObject.endValue):Gi(Oa||(Oa=ci`<div>Value = ${0}</div>`),this.updateObject.value))}_optionChange(e){const t=e.detail.name,o=e.detail.selected;switch(t){case"range":this.range=o;break;case"discrete":this.discrete=o;break;case"stop-labels":this.showStopLabels=o;break;case"floating-label":this.showFloatingLabel=o;break;case"start-label":this.showStartLabel=o;break;case"end-label":this.showEndLabel=o;break;case"start-icon":this.showStartIcon=o;break;case"end-icon":this.showEndIcon=o;break;case"decimal":this.decimals=o?2:0;break;case"custom-stops":this.stops=o?this._customStops:this._normalStops;break;case"label-format":this.labelFormat=o?"{}%":"";break;case"custom-balloons":this.customBalloons=o}}_sliderChange(e){this.updateObject=e.detail}});const Fn=e=>class extends e{static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},open:{type:Boolean,attribute:"open"},root:{type:Boolean,attribute:"root"},items:{type:Array},selectMode:{type:String,attribute:"select-mode"},selectLeafOnly:{type:Boolean,attribute:"select-leaf-only"},openIcon:{type:String,attribute:"open-icon"},closeIcon:{type:String,attribute:"close-icon"},item:{type:Object},selected:{type:Boolean,attribute:"selected",reflect:!0},indeterminate:{type:Boolean,attribute:"indeterminate",reflect:!0}}}get selectLeafOnly(){return this._selectLeafOnly}set selectLeafOnly(e){const t=this.selectLeafOnly;t!==e&&(this.selected=!1,this._selectLeafOnly=e,this.requestUpdate("selectLeafOnly",t))}get selectMode(){return this._selectMode}set selectMode(e){const t=this.selectMode;t!==e&&(this.selected=!1,this._selectMode=e,this.requestUpdate("selectMode",t))}get selected(){return this._selected}set selected(e){if(this.selectLeafOnly&&this.items&&this.items.length>0)return;const t=this.selected;t!==e&&(this._selected=e,this.item&&(this.item.selected=this._selected,"multiple"===this.selectMode&&this._setChildItemState(this._selected)),this.requestUpdate("selected",t),this._selectionSource&&this.fireMessage("obap-treeview-selection-change",{source:this.item,sourceElement:this,selected:this._selected}))}constructor(){super(),this.label="",this._icon="",this.open=!1,this.items=[],this.item=null,this._selectMode="none",this._selectLeafOnly=!1,this.openIcon="",this.closeIcon="",this.root=!1,this.selected=!1,this.indeterminate=!1}select(){this._selectionSource=!0,this.selected=!0,this._selectionSource=!1}deselect(){this._selectionSource=!0,this.selected=!1,this._selectionSource=!1}expand(){this.open=!0}collapse(){this.open=!1}expandAll(){this.expand(),requestAnimationFrame(()=>this.renderRoot.querySelectorAll("obap-treeview-item").forEach(e=>e.expandAll()))}collapseAll(){this.collapse(),requestAnimationFrame(()=>this.renderRoot.querySelectorAll("obap-treeview-item").forEach(e=>e.collapseAll()))}_setChildItemState(e){this.renderRoot.querySelectorAll("obap-treeview-item").forEach(t=>t.selected=e),requestAnimationFrame(()=>this._getParentItem()._setParentItemState())}_setParentItemState(){const e=this.items.length,t=this.items.filter(e=>e.selected&&!e.indeterminate).length,o=this.items.filter(e=>e.indeterminate&&!e.selected).length;0===t&&0===o?(this.selected=!1,this.indeterminate=!1):t===e?(this.selected=!0,this.indeterminate=!1):this.indeterminate=!0,this.item&&(this.item.indeterminate=this.indeterminate,this.item.selected=this.selected);const a=this._getParentItem();a&&a._setParentItemState&&requestAnimationFrame(()=>a._setParentItemState())}_getParentItem(){return this.parentElement.getRootNode().host}};class Pn extends(Fn(hr)){static get styles(){return[cr(Ha||(Ha=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .arrow-icon {
                width: 16px;
                height: 16px;
                cursor: pointer;
            }

            .custom-icon {
                width: 16px;
                height: 16px;
                margin-right: 4px;
            }

            obap-treeview-item[indent] {
                margin-left: 16px;
            }

            .top {
                display: flex;
                align-items: center;
                height: 24px;
            }

            .label {
                margin-left: 2px;
                padding: 2px 4px;
            }

            .label-select:hover {
                background: #E0E0E0;
            }

            .label-select {
                cursor: pointer;
            }

            .label[selected] {
                color: var(--obap-on-primary-color, #FFFFFF);
                background: var(--obap-primary-color, #5c6bc0);
            }

            .items {
                display: none;
            }

            .items[open] {
                display: block;
            }

            .icon {
                width: 16px;
                height: 16px;
                margin-right: 2px;
            }

            .check {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        `))]}render(){return Gi(Da||(Da=ci`<div class="container">
            <div class="top">
                <div class="icon" @click="${0}">
                    ${0}
                </div>
                ${0}
                <div class="check">
                    ${0}
                </div>
                ${0}
            </div>
            <div class="items" ?open="${0}">
                ${0}
            </div>
        </div>`),this._handleItemClick,this._renderOpenCloseIcon(),this.icon?Gi(ja||(ja=ci`<obap-icon class="custom-icon" icon="${0}"></obap-icon>`),this.icon):null,this._renderCheck(),this._renderlabel(),this.open,this._renderItems())}_renderlabel(){let e="single"===this.selectMode;e&&this.selectLeafOnly&&this.items&&this.items.length>0&&(e=!1);const t={"label-select":e};return this.label?Gi(Ua||(Ua=ci`
            <div class="${0} label" ?selected="${0}" @click="${0}">${0}</div>
        `),Sn(t),this.selected&&"single"===this.selectMode,"single"===this.selectMode?this._handleItemSelected:null,this.label):null}_renderItems(){return this.items&&this.items.length>0?this.items.map(e=>Gi(qa||(qa=ci`
                <obap-treeview-item ?indent="${0}" label="${0}" .items="${0}" select-mode="${0}" 
                                    ?select-leaf-only="${0}" icon="${0}" .item="${0}" ?selected="${0}"
                                    open-icon="${0}" close-icon="${0}"
                >
                </obap-treeview-item>`),this.label,e.label?e.label:"",e.items,this.selectMode,this.selectLeafOnly,e.icon?e.icon:"",e,e.selected,e.openIcon?e.openIcon:this.openIcon,e.closeIcon?e.closeIcon:this.closeIcon)):null}_renderOpenCloseIcon(){if(this.items&&this.items.length>0){let e="";return e=this.open?this.openIcon?this.openIcon:"core:arrow-drop-down":this.closeIcon?this.closeIcon:"core:arrow-drop-right",Gi(Wa||(Wa=ci`<obap-icon class="arrow-icon" icon="${0}"></obap-icon>`),e)}return null}_renderCheck(){return"multiple"===this.selectMode?this.selectLeafOnly&&this.items&&0!==this.items.length?null:this._renderSingleCheck():null}_renderSingleCheck(){return Gi(Za||(Za=ci`<obap-check @obap-item-selected="${0}" no-ink ?selected="${0}" ?indeterminate="${0}" name="${0}"></obap-check>`),this._handleItemSelected,this.selected,this.indeterminate,this.label)}_handleItemClick(e){this.items&&this.items.length>0&&(this.open=!this.open)}_handleItemSelected(e){this._selectionSource=!0,"single"===this.selectMode?this.selectLeafOnly&&this.items&&0!==this.items.length||(this.selected=!this.selected):this.selected=e.detail.selected,this._selectionSource=!1}}window.customElements.define("obap-treeview-item",Pn);class Tn extends(Fn(hr)){static get styles(){return[kr,cr(Ga||(Ga=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                padding: 8px;
            }
        `))]}constructor(){super(),this._currentSelection=null}render(){return Gi(Ka||(Ka=ci`
            <div class="container typography-body" @obap-treeview-selection-change=${0}>
                <obap-treeview-item label="${0}" .items="${0}" select-mode="${0}" 
                                    ?select-leaf-only="${0}" icon="${0}" .item="${0}"
                                    open-icon="${0}" close-icon="${0}" ?selected="${0}" ?open="${0}" root>
                </obap-treeview-item>
            </div>
        `),this._onSelectionChange,this.label?this.label:"",this.items,this.selectMode,this.selectLeafOnly,this.icon?this.icon:"",this,this.openIcon,this.closeIcon,this.selected,this.open)}_onSelectionChange(e){"multiple"!==this.selectMode&&this._currentSelection&&(this._currentSelection.selected=!1,this._currentSelection.indeterminate=!1),this._currentSelection=e.detail.sourceElement}}window.customElements.define("obap-treeview",Tn);window.customElements.define("demo-treeview",class extends hr{static get styles(){return[kr,cr(Xa||(Xa=ci`
            :host {
                display: block;
                height: 100%;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .container {
                display: flex;
                flex-direction: column;
                height: 100%;
                padding: 6px 8px 8px 8px;
                box-sizing: border-box;
            }

            .options {
                display: flex;
            }

            demo-panel {
                margin-bottom: 8px;
            }

            demo-panel:last-of-type {
                flex: 1;
                margin-bottom: 0;
            }

            obap-button {
                --obap-button-ripple-color: var(--obap-on-primary-color);
                --obap-button-color: var(--obap-on-primary-color);
                --obap-button-background-color: var(--obap-primary-color);
                margin-right: 24px;
            }

            obap-treeview {
                height: 100%;
            }

            obap-radio-group {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
            }
        `))]}static get properties(){return{items:{type:Array},selectMode:{type:String},leafOnly:{type:Boolean}}}constructor(){super(),this.selectMode="none",this.leafOnly=!1,this.items=[{label:"Cats",items:[{label:"Siamese"},{label:"Persian"},{label:"Sphynx"}]},{label:"Dogs",selected:!1,items:[{label:"Poodle"},{label:"Bulldog",items:[{label:"English"},{label:"French"}]},{label:"Dalmation"},{label:"Labrador"}]},{label:"Unicorns",items:[{label:"Pegasus"},{label:"Rainbow"},{label:"Narwhal"}]}]}render(){return Gi(Ja||(Ja=ci`
            <div class="container">
                <demo-panel label="Selection Mode">
                    <obap-radio-group name="selection-mode" selected-index="0" @obap-item-selected="${0}">
                        <obap-radio label="None"></obap-radio>
                        <obap-radio label="Single"></obap-radio>
                        <obap-radio label="Multiple"></obap-radio>
                        <obap-check name="leaf" label="Leaf Only" @obap-item-selected="${0}"></obap-check>
                    </obap-radio-group>
                    
                </demo-panel>

                <demo-panel>
                    <div class="options">
                        <obap-button raised label="Expand All" @click="${0}"></obap-button>
                        <obap-button raised label="Collapse All" @click="${0}"></obap-button>
                    </div>
                </demo-panel>
    

                <demo-panel>
                    <obap-treeview id="treeview" label="Pets" .items="${0}" select-mode="${0}" ?select-leaf-only="${0}"
                                   @obap-treeview-selection-change="${0}">
                    </obap-treeview>
                </demo-panel>
            </div>
        `),this._radioChange,this._optionChange,this._expandAll,this._collapseAll,this.items,this.selectMode,this.leafOnly,this._handleTreeviewChange)}_radioChange(e){switch(e.detail.index){case 0:this.selectMode="none";break;case 1:this.selectMode="single";break;case 2:this.selectMode="multiple"}}_expandAll(){this.renderRoot.getElementById("treeview").expandAll()}_collapseAll(){this.renderRoot.getElementById("treeview").collapseAll()}_optionChange(e){const t=e.detail.name,o=e.detail.selected;switch(t){case"leaf":this.leafOnly=o}}_handleTreeviewChange(e){}});const Mn=new WeakMap,Rn=Ei(e=>t=>{if(!(t instanceof Ri))throw new Error("unsafeHTML can only be used in text bindings");const o=Mn.get(t);if(void 0!==o&&Fi(e)&&e===o.value&&t.value===o.fragment)return;const a=document.createElement("template");a.innerHTML=e;const i=document.importNode(a.content,!0);t.setValue(i),Mn.set(t,{value:e,fragment:i})});var Bn=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,o=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++o}),e.__id},clone:function e(t,o){var i,r,n=a.util.type(t);switch(o=o||{},n){case"Object":if(r=a.util.objId(t),o[r])return o[r];for(var s in i={},o[r]=i,t)t.hasOwnProperty(s)&&(i[s]=e(t[s],o));return i;case"Array":return r=a.util.objId(t),o[r]?o[r]:(i=[],o[r]=i,t.forEach((function(t,a){i[a]=e(t,o)})),i);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var o in t)if(t[o].src==e)return t[o]}return null}}},languages:{extend:function(e,t){var o=a.util.clone(a.languages[e]);for(var i in t)o[i]=t[i];return o},insertBefore:function(e,t,o,i){var r=(i=i||a.languages)[e],n={};for(var s in r)if(r.hasOwnProperty(s)){if(s==t)for(var l in o)o.hasOwnProperty(l)&&(n[l]=o[l]);o.hasOwnProperty(s)||(n[s]=r[s])}var c=i[e];return i[e]=n,a.languages.DFS(a.languages,(function(t,o){o===c&&t!=e&&(this[t]=n)})),n},DFS:function e(t,o,i,r){r=r||{};var n=a.util.objId;for(var s in t)if(t.hasOwnProperty(s)){o.call(t,s,t[s],i||s);var l=t[s],c=a.util.type(l);"Object"!==c||r[n(l)]?"Array"!==c||r[n(l)]||(r[n(l)]=!0,e(l,o,s,r)):(r[n(l)]=!0,e(l,o,null,r))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,o){var i={callback:o,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),a.hooks.run("before-all-elements-highlight",i);for(var r,n=0;r=i.elements[n++];)a.highlightElement(r,!0===t,i.callback)},highlightElement:function(o,i,r){var n=a.util.getLanguage(o),s=a.languages[n];o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+n;var l=o.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+n);var c={element:o,language:n,grammar:s,code:o.textContent};function d(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),r&&r.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(r&&r.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(i&&e.Worker){var p=new Worker(a.filename);p.onmessage=function(e){d(e.data)},p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else d(a.highlight(c.code,c.grammar,c.language));else d(a.util.encode(c.code))},highlight:function(e,t,o){var r={code:e,grammar:t,language:o};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,t){var o=t.rest;if(o){for(var l in o)t[l]=o[l];delete t.rest}var c=new r;return n(c,c.head,e),function e(t,o,r,l,c,d,p){for(var h in r)if(r.hasOwnProperty(h)&&r[h]){var b=r[h];b=Array.isArray(b)?b:[b];for(var u=0;u<b.length;++u){if(p&&p==h+","+u)return;var g=b[u],m=g.inside,v=!!g.lookbehind,y=!!g.greedy,f=0,x=g.alias;if(y&&!g.pattern.global){var w=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,w+"g")}g=g.pattern||g;for(var _=l.next,k=c;_!==o.tail;k+=_.value.length,_=_.next){var S=_.value;if(o.length>t.length)return;if(!(S instanceof i)){var E=1;if(y&&_!=o.tail.prev){if(g.lastIndex=k,!(A=g.exec(t)))break;var $=A.index+(v&&A[1]?A[1].length:0),C=A.index+A[0].length,I=k;for(I+=_.value.length;$>=I;)_=_.next,I+=_.value.length;if(I-=_.value.length,k=I,_.value instanceof i)continue;for(var z=_;z!==o.tail&&(I<C||"string"==typeof z.value&&!z.prev.value.greedy);z=z.next)E++,I+=z.value.length;E--,S=t.slice(k,I),A.index-=k}else{g.lastIndex=0;var A=g.exec(S)}if(A){v&&(f=A[1]?A[1].length:0);$=A.index+f,A=A[0].slice(f),C=$+A.length;var L=S.slice(0,$),V=S.slice(C),F=_.prev;L&&(F=n(o,F,L),k+=L.length),s(o,F,E);var P=new i(h,m?a.tokenize(A,m):A,x,A,y);if(_=n(o,F,P),V&&n(o,_,V),E>1&&e(t,o,r,_.prev,k,!0,h+","+u),d)break}else if(d)break}}}}}(e,c,t,c.head,0),function(e){var t=[],o=e.head.next;for(;o!==e.tail;)t.push(o.value),o=o.next;return t}(c)},hooks:{all:{},add:function(e,t){var o=a.hooks.all;o[e]=o[e]||[],o[e].push(t)},run:function(e,t){var o=a.hooks.all[e];if(o&&o.length)for(var i,r=0;i=o[r++];)i(t)}},Token:i};function i(e,t,o,a,i){this.type=e,this.content=t,this.alias=o,this.length=0|(a||"").length,this.greedy=!!i}function r(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function n(e,t,o){var a=t.next,i={value:o,prev:t,next:a};return t.next=i,a.prev=i,e.length++,i}function s(e,t,o){for(var a=t.next,i=0;i<o&&a!==e.tail;i++)a=a.next;t.next=a,a.prev=t,e.length-=i}if(e.Prism=a,i.stringify=function e(t,o){if("string"==typeof t)return t;if(Array.isArray(t)){var i="";return t.forEach((function(t){i+=e(t,o)})),i}var r={type:t.type,content:e(t.content,o),tag:"span",classes:["token",t.type],attributes:{},language:o},n=t.alias;n&&(Array.isArray(n)?Array.prototype.push.apply(r.classes,n):r.classes.push(n)),a.hooks.run("wrap",r);var s="";for(var l in r.attributes)s+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+s+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var o=JSON.parse(t.data),i=o.language,r=o.code,n=o.immediateClose;e.postMessage(a.highlight(r,a.languages[i],i)),n&&e.close()}),!1),a):a;var l=a.util.currentScript();function c(){a.manual||a.highlightAll()}if(l&&(a.filename=l.src,l.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var d=document.readyState;"loading"===d||"interactive"===d&&l&&l.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});"undefined"!=typeof module&&module.exports&&(module.exports=Bn),"undefined"!=typeof global&&(global.Prism=Bn),Bn.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Bn.languages.markup.tag.inside["attr-value"].inside.entity=Bn.languages.markup.entity,Bn.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Bn.languages.markup.tag,"addInlined",{value:function(e,t){var o={};o["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Bn.languages[t]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};a["language-"+t]={pattern:/[\s\S]+/,inside:Bn.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},Bn.languages.insertBefore("markup","cdata",i)}}),Bn.languages.xml=Bn.languages.extend("markup",{}),Bn.languages.html=Bn.languages.markup,Bn.languages.mathml=Bn.languages.markup,Bn.languages.svg=Bn.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var o=e.languages.markup;o&&(o.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:o.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},o.tag))}(Bn),Bn.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Bn.languages.javascript=Bn.languages.extend("clike",{"class-name":[Bn.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),Bn.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Bn.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Bn.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Bn.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Bn.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Bn.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Bn.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Bn.languages.javascript}},string:/[\s\S]+/}}}),Bn.languages.markup&&Bn.languages.markup.tag.addInlined("script","javascript"),Bn.languages.js=Bn.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var o,a=e.getAttribute("data-src"),i=e,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(o=(e.className.match(r)||[,""])[1]),!o){var n=(a.match(/\.(\w+)$/)||[,""])[1];o=t[n]||n}var s=document.createElement("code");s.className="language-"+o,e.textContent="",s.textContent="Loading…",e.appendChild(s);var l=new XMLHttpRequest;l.open("GET",a,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(s.textContent=l.responseText,Bn.highlightElement(s),e.setAttribute("data-src-loaded","")):l.status>=400?s.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:s.textContent="✖ Error: File does not exist or is empty")},l.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()}))),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).marked=t()}(void 0,(function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function o(e,o){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,o){if(e){if("string"==typeof e)return t(e,o);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,o):void 0}}(e))||o&&e&&"number"==typeof e.length){a&&(e=a);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}var a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},getDefaults:t,changeDefaults:function(t){e.exports.defaults=t}}})),i=(a.defaults,a.getDefaults,a.changeDefaults,/[&<>"']/),r=/[&<>"']/g,n=/[<>"']|&(?!#?\w+;)/,s=/[<>"']|&(?!#?\w+;)/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},c=function(e){return l[e]};var d=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function p(e){return e.replace(d,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var h=/(^|[^\[])\^/g;var b=/[^\w:]/g,u=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var g={},m=/^[^:]+:\/*[^/]*$/,v=/^([^:]+:)[\s\S]*$/,y=/^([^:]+:\/*[^/]*)[\s\S]*$/;function f(e,t){g[" "+e]||(m.test(e)?g[" "+e]=e+"/":g[" "+e]=x(e,"/",!0));var o=-1===(e=g[" "+e]).indexOf(":");return"//"===t.substring(0,2)?o?t:e.replace(v,"$1")+t:"/"===t.charAt(0)?o?t:e.replace(y,"$1")+t:e+t}function x(e,t,o){var a=e.length;if(0===a)return"";for(var i=0;i<a;){var r=e.charAt(a-i-1);if(r!==t||o){if(r===t||!o)break;i++}else i++}return e.substr(0,a-i)}var w=function(e,t){if(t){if(i.test(e))return e.replace(r,c)}else if(n.test(e))return e.replace(s,c);return e},_=p,k=function(e,t){e=e.source||e,t=t||"";var o={replace:function(t,a){return a=(a=a.source||a).replace(h,"$1"),e=e.replace(t,a),o},getRegex:function(){return new RegExp(e,t)}};return o},S=function(e,t,o){if(e){var a;try{a=decodeURIComponent(p(o)).replace(b,"").toLowerCase()}catch(e){return null}if(0===a.indexOf("javascript:")||0===a.indexOf("vbscript:")||0===a.indexOf("data:"))return null}t&&!u.test(o)&&(o=f(t,o));try{o=encodeURI(o).replace(/%25/g,"%")}catch(e){return null}return o},E={exec:function(){}},$=function(e){for(var t,o,a=1;a<arguments.length;a++)for(o in t=arguments[a])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C=function(e,t){var o=e.replace(/\|/g,(function(e,t,o){for(var a=!1,i=t;--i>=0&&"\\"===o[i];)a=!a;return a?"|":" |"})).split(/ \|/),a=0;if(o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;a<o.length;a++)o[a]=o[a].trim().replace(/\\\|/g,"|");return o},I=x,z=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var o=e.length,a=0,i=0;i<o;i++)if("\\"===e[i])i++;else if(e[i]===t[0])a++;else if(e[i]===t[1]&&--a<0)return i;return-1},A=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},L=a.defaults,V=I,F=C,P=w,T=z;function M(e,t,o){var a=t.href,i=t.title?P(t.title):null,r=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:o,href:a,title:i,text:r}:{type:"image",raw:o,href:a,title:i,text:P(r)}}var R=function(){function e(e){this.options=e||L}var t=e.prototype;return t.space=function(e){var t=this.rules.block.newline.exec(e);if(t)return t[0].length>1?{type:"space",raw:t[0]}:{raw:"\n"}},t.code=function(e,t){var o=this.rules.block.code.exec(e);if(o){var a=t[t.length-1];if(a&&"paragraph"===a.type)return{raw:o[0],text:o[0].trimRight()};var i=o[0].replace(/^ {4}/gm,"");return{type:"code",raw:o[0],codeBlockStyle:"indented",text:this.options.pedantic?i:V(i,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var o=t[0],a=function(e,t){var o=e.match(/^(\s+)(?:```)/);if(null===o)return t;var a=o[1];return t.split("\n").map((function(e){var t=e.match(/^\s+/);return null===t?e:t[0].length>=a.length?e.slice(a.length):e})).join("\n")}(o,t[3]||"");return{type:"code",raw:o,lang:t[2]?t[2].trim():t[2],text:a}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[1].length,text:t[2]}},t.nptable=function(e){var t=this.rules.block.nptable.exec(e);if(t){var o={type:"table",header:F(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[],raw:t[0]};if(o.header.length===o.align.length){var a,i=o.align.length;for(a=0;a<i;a++)/^ *-+: *$/.test(o.align[a])?o.align[a]="right":/^ *:-+: *$/.test(o.align[a])?o.align[a]="center":/^ *:-+ *$/.test(o.align[a])?o.align[a]="left":o.align[a]=null;for(i=o.cells.length,a=0;a<i;a++)o.cells[a]=F(o.cells[a],o.header.length);return o}}},t.hr=function(e){var t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){var o=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:o}}},t.list=function(e){var t=this.rules.block.list.exec(e);if(t){for(var o,a,i,r,n,s,l,c=t[0],d=t[2],p=d.length>1,h=")"===d[d.length-1],b={type:"list",raw:c,ordered:p,start:p?+d.slice(0,-1):"",loose:!1,items:[]},u=t[0].match(this.rules.block.item),g=!1,m=u.length,v=0;v<m;v++)c=o=u[v],a=o.length,~(o=o.replace(/^ *([*+-]|\d+[.)]) */,"")).indexOf("\n ")&&(a-=o.length,o=this.options.pedantic?o.replace(/^ {1,4}/gm,""):o.replace(new RegExp("^ {1,"+a+"}","gm"),"")),v!==m-1&&(i=this.rules.block.bullet.exec(u[v+1])[0],(p?1===i.length||!h&&")"===i[i.length-1]:i.length>1||this.options.smartLists&&i!==d)&&(r=u.slice(v+1).join("\n"),b.raw=b.raw.substring(0,b.raw.length-r.length),v=m-1)),n=g||/\n\n(?!\s*$)/.test(o),v!==m-1&&(g="\n"===o.charAt(o.length-1),n||(n=g)),n&&(b.loose=!0),l=void 0,(s=/^\[[ xX]\] /.test(o))&&(l=" "!==o[1],o=o.replace(/^\[[ xX]\] +/,"")),b.items.push({type:"list_item",raw:c,task:s,checked:l,loose:n,text:o});return b}},t.html=function(e){var t=this.rules.block.html.exec(e);if(t)return{type:this.options.sanitize?"paragraph":"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):P(t[0]):t[0]}},t.def=function(e){var t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}},t.table=function(e){var t=this.rules.block.table.exec(e);if(t){var o={type:"table",header:F(t[1].replace(/^ *| *\| *$/g,"")),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:t[3]?t[3].replace(/\n$/,"").split("\n"):[]};if(o.header.length===o.align.length){o.raw=t[0];var a,i=o.align.length;for(a=0;a<i;a++)/^ *-+: *$/.test(o.align[a])?o.align[a]="right":/^ *:-+: *$/.test(o.align[a])?o.align[a]="center":/^ *:-+ *$/.test(o.align[a])?o.align[a]="left":o.align[a]=null;for(i=o.cells.length,a=0;a<i;a++)o.cells[a]=F(o.cells[a].replace(/^ *\| *| *\| *$/g,""),o.header.length);return o}}},t.lheading=function(e){var t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1]}},t.paragraph=function(e){var t=this.rules.block.paragraph.exec(e);if(t)return{type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]}},t.text=function(e,t){var o=this.rules.block.text.exec(e);if(o){var a=t[t.length-1];return a&&"text"===a.type?{raw:o[0],text:o[0]}:{type:"text",raw:o[0],text:o[0]}}},t.escape=function(e){var t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:P(t[1])}},t.tag=function(e,t,o){var a=this.rules.inline.tag.exec(e);if(a)return!t&&/^<a /i.test(a[0])?t=!0:t&&/^<\/a>/i.test(a[0])&&(t=!1),!o&&/^<(pre|code|kbd|script)(\s|>)/i.test(a[0])?o=!0:o&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])&&(o=!1),{type:this.options.sanitize?"text":"html",raw:a[0],inLink:t,inRawBlock:o,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):P(a[0]):a[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var o=T(t[2],"()");if(o>-1){var a=(0===t[0].indexOf("!")?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}var i=t[2],r="";if(this.options.pedantic){var n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);n?(i=n[1],r=n[3]):r=""}else r=t[3]?t[3].slice(1,-1):"";return M(t,{href:(i=i.trim().replace(/^<([\s\S]*)>$/,"$1"))?i.replace(this.rules.inline._escapes,"$1"):i,title:r?r.replace(this.rules.inline._escapes,"$1"):r},t[0])}},t.reflink=function(e,t){var o;if((o=this.rules.inline.reflink.exec(e))||(o=this.rules.inline.nolink.exec(e))){var a=(o[2]||o[1]).replace(/\s+/g," ");if(!(a=t[a.toLowerCase()])||!a.href){var i=o[0].charAt(0);return{type:"text",raw:i,text:i}}return M(o,a,o[0])}},t.strong=function(e,t,o){void 0===o&&(o="");var a=this.rules.inline.strong.start.exec(e);if(a&&(!a[1]||a[1]&&(""===o||this.rules.inline.punctuation.exec(o)))){t=t.slice(-1*e.length);var i,r="**"===a[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(r.lastIndex=0;null!=(a=r.exec(t));)if(i=this.rules.inline.strong.middle.exec(t.slice(0,a.index+3)))return{type:"strong",raw:e.slice(0,i[0].length),text:e.slice(2,i[0].length-2)}}},t.em=function(e,t,o){void 0===o&&(o="");var a=this.rules.inline.em.start.exec(e);if(a&&(!a[1]||a[1]&&(""===o||this.rules.inline.punctuation.exec(o)))){t=t.slice(-1*e.length);var i,r="*"===a[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(r.lastIndex=0;null!=(a=r.exec(t));)if(i=this.rules.inline.em.middle.exec(t.slice(0,a.index+2)))return{type:"em",raw:e.slice(0,i[0].length),text:e.slice(1,i[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var o=t[2].replace(/\n/g," "),a=/[^ ]/.test(o),i=o.startsWith(" ")&&o.endsWith(" ");return a&&i&&(o=o.substring(1,o.length-1)),o=P(o,!0),{type:"codespan",raw:t[0],text:o}}},t.br=function(e){var t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}},t.del=function(e){var t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[1]}},t.autolink=function(e,t){var o,a,i=this.rules.inline.autolink.exec(e);if(i)return a="@"===i[2]?"mailto:"+(o=P(this.options.mangle?t(i[1]):i[1])):o=P(i[1]),{type:"link",raw:i[0],text:o,href:a,tokens:[{type:"text",raw:o,text:o}]}},t.url=function(e,t){var o;if(o=this.rules.inline.url.exec(e)){var a,i;if("@"===o[2])i="mailto:"+(a=P(this.options.mangle?t(o[0]):o[0]));else{var r;do{r=o[0],o[0]=this.rules.inline._backpedal.exec(o[0])[0]}while(r!==o[0]);a=P(o[0]),i="www."===o[1]?"http://"+a:a}return{type:"link",raw:o[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}},t.inlineText=function(e,t,o){var a,i=this.rules.inline.text.exec(e);if(i)return a=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):P(i[0]):i[0]:P(this.options.smartypants?o(i[0]):i[0]),{type:"text",raw:i[0],text:a}},e}(),B=E,N=k,O=$,H={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:B,table:B,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};H.def=N(H.def).replace("label",H._label).replace("title",H._title).getRegex(),H.bullet=/(?:[*+-]|\d{1,9}[.)])/,H.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,H.item=N(H.item,"gm").replace(/bull/g,H.bullet).getRegex(),H.list=N(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex(),H._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",H._comment=/<!--(?!-?>)[\s\S]*?-->/,H.html=N(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),H.paragraph=N(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex(),H.blockquote=N(H.blockquote).replace("paragraph",H.paragraph).getRegex(),H.normal=O({},H),H.gfm=O({},H.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),H.gfm.nptable=N(H.gfm.nptable).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex(),H.gfm.table=N(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",H._tag).getRegex(),H.pedantic=O({},H.normal,{html:N("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",H._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:B,paragraph:N(H.normal._paragraph).replace("hr",H.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var D={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:B,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:B,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};D.punctuation=N(D.punctuation).replace(/punctuation/g,D._punctuation).getRegex(),D._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",D._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",D.em.start=N(D.em.start).replace(/punctuation/g,D._punctuation).getRegex(),D.em.middle=N(D.em.middle).replace(/punctuation/g,D._punctuation).replace(/overlapSkip/g,D._overlapSkip).getRegex(),D.em.endAst=N(D.em.endAst,"g").replace(/punctuation/g,D._punctuation).getRegex(),D.em.endUnd=N(D.em.endUnd,"g").replace(/punctuation/g,D._punctuation).getRegex(),D.strong.start=N(D.strong.start).replace(/punctuation/g,D._punctuation).getRegex(),D.strong.middle=N(D.strong.middle).replace(/punctuation/g,D._punctuation).replace(/blockSkip/g,D._blockSkip).getRegex(),D.strong.endAst=N(D.strong.endAst,"g").replace(/punctuation/g,D._punctuation).getRegex(),D.strong.endUnd=N(D.strong.endUnd,"g").replace(/punctuation/g,D._punctuation).getRegex(),D.blockSkip=N(D._blockSkip,"g").getRegex(),D.overlapSkip=N(D._overlapSkip,"g").getRegex(),D._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,D._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,D._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,D.autolink=N(D.autolink).replace("scheme",D._scheme).replace("email",D._email).getRegex(),D._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,D.tag=N(D.tag).replace("comment",H._comment).replace("attribute",D._attribute).getRegex(),D._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,D._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,D._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,D.link=N(D.link).replace("label",D._label).replace("href",D._href).replace("title",D._title).getRegex(),D.reflink=N(D.reflink).replace("label",D._label).getRegex(),D.reflinkSearch=N(D.reflinkSearch,"g").replace("reflink",D.reflink).replace("nolink",D.nolink).getRegex(),D.normal=O({},D),D.pedantic=O({},D.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:N(/^!?\[(label)\]\((.*?)\)/).replace("label",D._label).getRegex(),reflink:N(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",D._label).getRegex()}),D.gfm=O({},D.normal,{escape:N(D.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),D.gfm.url=N(D.gfm.url,"i").replace("email",D.gfm._extended_email).getRegex(),D.breaks=O({},D.gfm,{br:N(D.br).replace("{2,}","*").getRegex(),text:N(D.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var j={block:H,inline:D},U=a.defaults,q=j.block,W=j.inline;function Z(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function G(e){var t,o,a="",i=e.length;for(t=0;t<i;t++)o=e.charCodeAt(t),Math.random()>.5&&(o="x"+o.toString(16)),a+="&#"+o+";";return a}var K=function(){function t(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||U,this.options.tokenizer=this.options.tokenizer||new R,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;var t={block:q.normal,inline:W.normal};this.options.pedantic?(t.block=q.pedantic,t.inline=W.pedantic):this.options.gfm&&(t.block=q.gfm,this.options.breaks?t.inline=W.breaks:t.inline=W.gfm),this.tokenizer.rules=t}t.lex=function(e,o){return new t(o).lex(e)};var o,a,i,r=t.prototype;return r.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},r.blockTokens=function(e,t,o){var a,i,r,n;for(void 0===t&&(t=[]),void 0===o&&(o=!0),e=e.replace(/^ +$/gm,"");e;)if(a=this.tokenizer.space(e))e=e.substring(a.raw.length),a.type&&t.push(a);else if(a=this.tokenizer.code(e,t))e=e.substring(a.raw.length),a.type?t.push(a):((n=t[t.length-1]).raw+="\n"+a.raw,n.text+="\n"+a.text);else if(a=this.tokenizer.fences(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.heading(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.nptable(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.hr(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.blockquote(e))e=e.substring(a.raw.length),a.tokens=this.blockTokens(a.text,[],o),t.push(a);else if(a=this.tokenizer.list(e)){for(e=e.substring(a.raw.length),r=a.items.length,i=0;i<r;i++)a.items[i].tokens=this.blockTokens(a.items[i].text,[],!1);t.push(a)}else if(a=this.tokenizer.html(e))e=e.substring(a.raw.length),t.push(a);else if(o&&(a=this.tokenizer.def(e)))e=e.substring(a.raw.length),this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});else if(a=this.tokenizer.table(e))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.lheading(e))e=e.substring(a.raw.length),t.push(a);else if(o&&(a=this.tokenizer.paragraph(e)))e=e.substring(a.raw.length),t.push(a);else if(a=this.tokenizer.text(e,t))e=e.substring(a.raw.length),a.type?t.push(a):((n=t[t.length-1]).raw+="\n"+a.raw,n.text+="\n"+a.text);else if(e){var s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}throw new Error(s)}return t},r.inline=function(e){var t,o,a,i,r,n,s=e.length;for(t=0;t<s;t++)switch((n=e[t]).type){case"paragraph":case"text":case"heading":n.tokens=[],this.inlineTokens(n.text,n.tokens);break;case"table":for(n.tokens={header:[],cells:[]},i=n.header.length,o=0;o<i;o++)n.tokens.header[o]=[],this.inlineTokens(n.header[o],n.tokens.header[o]);for(i=n.cells.length,o=0;o<i;o++)for(r=n.cells[o],n.tokens.cells[o]=[],a=0;a<r.length;a++)n.tokens.cells[o][a]=[],this.inlineTokens(r[a],n.tokens.cells[o][a]);break;case"blockquote":this.inline(n.tokens);break;case"list":for(i=n.items.length,o=0;o<i;o++)this.inline(n.items[o].tokens)}return e},r.inlineTokens=function(e,t,o,a,i){var r;void 0===t&&(t=[]),void 0===o&&(o=!1),void 0===a&&(a=!1),void 0===i&&(i="");var n,s=e;if(this.tokens.links){var l=Object.keys(this.tokens.links);if(l.length>0)for(;null!=(n=this.tokenizer.rules.inline.reflinkSearch.exec(s));)l.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(n=this.tokenizer.rules.inline.blockSkip.exec(s));)s=s.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e,o,a))e=e.substring(r.raw.length),o=r.inLink,a=r.inRawBlock,t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,a)),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,a)),t.push(r);else if(r=this.tokenizer.strong(e,s,i))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],o,a),t.push(r);else if(r=this.tokenizer.em(e,s,i))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],o,a),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],o,a),t.push(r);else if(r=this.tokenizer.autolink(e,G))e=e.substring(r.raw.length),t.push(r);else if(o||!(r=this.tokenizer.url(e,G))){if(r=this.tokenizer.inlineText(e,a,Z))e=e.substring(r.raw.length),i=r.raw.slice(-1),t.push(r);else if(e){var c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}}else e=e.substring(r.raw.length),t.push(r);return t},o=t,i=[{key:"rules",get:function(){return{block:q,inline:W}}}],(a=null)&&e(o.prototype,a),i&&e(o,i),t}(),X=a.defaults,J=S,Y=w,Q=function(){function e(e){this.options=e||X}var t=e.prototype;return t.code=function(e,t,o){var a=(t||"").match(/\S*/)[0];if(this.options.highlight){var i=this.options.highlight(e,a);null!=i&&i!==e&&(o=!0,e=i)}return a?'<pre><code class="'+this.options.langPrefix+Y(a,!0)+'">'+(o?e:Y(e,!0))+"</code></pre>\n":"<pre><code>"+(o?e:Y(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,o,a){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+a.slug(o)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,o){var a=t?"ol":"ul";return"<"+a+(t&&1!==o?' start="'+o+'"':"")+">\n"+e+"</"+a+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var o=t.header?"th":"td";return(t.align?"<"+o+' align="'+t.align+'">':"<"+o+">")+e+"</"+o+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,o){if(null===(e=J(this.options.sanitize,this.options.baseUrl,e)))return o;var a='<a href="'+Y(e)+'"';return t&&(a+=' title="'+t+'"'),a+=">"+o+"</a>"},t.image=function(e,t,o){if(null===(e=J(this.options.sanitize,this.options.baseUrl,e)))return o;var a='<img src="'+e+'" alt="'+o+'"';return t&&(a+=' title="'+t+'"'),a+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),ee=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,o){return""+o},t.image=function(e,t,o){return""+o},t.br=function(){return""},e}(),te=function(){function e(){this.seen={}}return e.prototype.slug=function(e){var t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-");if(this.seen.hasOwnProperty(t)){var o=t;do{this.seen[o]++,t=o+"-"+this.seen[o]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t},e}(),oe=a.defaults,ae=_,ie=function(){function e(e){this.options=e||oe,this.options.renderer=this.options.renderer||new Q,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ee,this.slugger=new te}e.parse=function(t,o){return new e(o).parse(t)};var t=e.prototype;return t.parse=function(e,t){void 0===t&&(t=!0);var o,a,i,r,n,s,l,c,d,p,h,b,u,g,m,v,y,f,x="",w=e.length;for(o=0;o<w;o++)switch((p=e[o]).type){case"space":continue;case"hr":x+=this.renderer.hr();continue;case"heading":x+=this.renderer.heading(this.parseInline(p.tokens),p.depth,ae(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue;case"code":x+=this.renderer.code(p.text,p.lang,p.escaped);continue;case"table":for(c="",l="",r=p.header.length,a=0;a<r;a++)l+=this.renderer.tablecell(this.parseInline(p.tokens.header[a]),{header:!0,align:p.align[a]});for(c+=this.renderer.tablerow(l),d="",r=p.cells.length,a=0;a<r;a++){for(l="",n=(s=p.tokens.cells[a]).length,i=0;i<n;i++)l+=this.renderer.tablecell(this.parseInline(s[i]),{header:!1,align:p.align[i]});d+=this.renderer.tablerow(l)}x+=this.renderer.table(c,d);continue;case"blockquote":d=this.parse(p.tokens),x+=this.renderer.blockquote(d);continue;case"list":for(h=p.ordered,b=p.start,u=p.loose,r=p.items.length,d="",a=0;a<r;a++)v=(m=p.items[a]).checked,y=m.task,g="",m.task&&(f=this.renderer.checkbox(v),u?m.tokens.length>0&&"text"===m.tokens[0].type?(m.tokens[0].text=f+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&"text"===m.tokens[0].tokens[0].type&&(m.tokens[0].tokens[0].text=f+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:f}):g+=f),g+=this.parse(m.tokens,u),d+=this.renderer.listitem(g,y,v);x+=this.renderer.list(d,h,b);continue;case"html":x+=this.renderer.html(p.text);continue;case"paragraph":x+=this.renderer.paragraph(this.parseInline(p.tokens));continue;case"text":for(d=p.tokens?this.parseInline(p.tokens):p.text;o+1<w&&"text"===e[o+1].type;)d+="\n"+((p=e[++o]).tokens?this.parseInline(p.tokens):p.text);x+=t?this.renderer.paragraph(d):d;continue;default:var _='Token with "'+p.type+'" type was not found.';if(this.options.silent)return void console.error(_);throw new Error(_)}return x},t.parseInline=function(e,t){t=t||this.renderer;var o,a,i="",r=e.length;for(o=0;o<r;o++)switch((a=e[o]).type){case"escape":i+=t.text(a.text);break;case"html":i+=t.html(a.text);break;case"link":i+=t.link(a.href,a.title,this.parseInline(a.tokens,t));break;case"image":i+=t.image(a.href,a.title,a.text);break;case"strong":i+=t.strong(this.parseInline(a.tokens,t));break;case"em":i+=t.em(this.parseInline(a.tokens,t));break;case"codespan":i+=t.codespan(a.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(a.tokens,t));break;case"text":i+=t.text(a.text);break;default:var n='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(n);throw new Error(n)}return i},e}(),re=$,ne=A,se=w,le=a.getDefaults,ce=a.changeDefaults,de=a.defaults;function pe(e,t,o){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(o=t,t=null),t=re({},pe.defaults,t||{}),ne(t),o){var a,i=t.highlight;try{a=K.lex(e,t)}catch(e){return o(e)}var r=function(e){var r;if(!e)try{r=ie.parse(a,t)}catch(t){e=t}return t.highlight=i,e?o(e):o(null,r)};if(!i||i.length<3)return r();if(delete t.highlight,!a.length)return r();var n=0;return pe.walkTokens(a,(function(e){"code"===e.type&&(n++,setTimeout((function(){i(e.text,e.lang,(function(t,o){if(t)return r(t);null!=o&&o!==e.text&&(e.text=o,e.escaped=!0),0===--n&&r()}))}),0))})),void(0===n&&r())}try{var s=K.lex(e,t);return t.walkTokens&&pe.walkTokens(s,t.walkTokens),ie.parse(s,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+se(e.message+"",!0)+"</pre>";throw e}}return pe.options=pe.setOptions=function(e){return re(pe.defaults,e),ce(pe.defaults),pe},pe.getDefaults=le,pe.defaults=de,pe.use=function(e){var t=re({},e);if(e.renderer&&function(){var o=pe.defaults.renderer||new Q,a=function(t){var a=o[t];o[t]=function(){for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var s=e.renderer[t].apply(o,r);return!1===s&&(s=a.apply(o,r)),s}};for(var i in e.renderer)a(i);t.renderer=o}(),e.tokenizer&&function(){var o=pe.defaults.tokenizer||new R,a=function(t){var a=o[t];o[t]=function(){for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var s=e.tokenizer[t].apply(o,r);return!1===s&&(s=a.apply(o,r)),s}};for(var i in e.tokenizer)a(i);t.tokenizer=o}(),e.walkTokens){var o=pe.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens(t),o&&o(t)}}pe.setOptions(t)},pe.walkTokens=function(e,t){for(var a,i=o(e);!(a=i()).done;){var r=a.value;switch(t(r),r.type){case"table":for(var n,s=o(r.tokens.header);!(n=s()).done;){var l=n.value;pe.walkTokens(l,t)}for(var c,d=o(r.tokens.cells);!(c=d()).done;)for(var p,h=o(c.value);!(p=h()).done;){var b=p.value;pe.walkTokens(b,t)}break;case"list":pe.walkTokens(r.items,t);break;default:r.tokens&&pe.walkTokens(r.tokens,t)}}},pe.Parser=ie,pe.parser=ie.parse,pe.Renderer=Q,pe.TextRenderer=ee,pe.Lexer=K,pe.lexer=K.lex,pe.Tokenizer=R,pe.Slugger=te,pe.parse=pe,pe}));const Nn=cr(Ya||(Ya=ci`
/* PrismJS 1.20.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
    color: black;
    background: none;
    text-shadow: 0 1px white;
    font-family: 'Roboto Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 0.8125rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: #b3d4fc;
}

@media print {
    code[class*="language-"],
    pre[class*="language-"] {
        text-shadow: none;
    }
}

/* Code blocks */
pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
    background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
    color: slategray;
}

.token.punctuation {
    color: #999;
}

.token.namespace {
    opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
    color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
    color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
    color: #9a6e3a;
    /* This background color was intended by the author of this theme. */
    background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
    color: #07a;
}

.token.function,
.token.class-name {
    color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
    color: #e90;
}

.token.important,
.token.bold {
    font-weight: bold;
}
.token.italic {
    font-style: italic;
}

.token.entity {
    cursor: help;
}

table {
    border-spacing: 0;
    border-collapse: collapse;
    border: 1px solid lightgrey;
}

/*
tr:nth-child(even) {
    background: aqua;
}
*/

th {
    background: #FAFAFA;
    padding: 4px 8px;
    text-align: left;
    border: 1px solid lightgrey;
}

td {
    padding: 4px 8px;
    text-align: left;
    border: 1px solid lightgrey;
}

blockquote {
    background: #FAFAFA;
    border-left: 4px solid lightgrey;
    padding: 4px 8px 4px 16px;
}
`));window.customElements.define("obap-markdown-viewer",class extends hr{static get styles(){return[Nn,cr(Qa||(Qa=ci`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }
        `))]}static get properties(){return{markdown:{type:String,attribute:"markdown"},src:{type:String,attribute:"src"},breaks:{type:Boolean},pedantic:{type:Boolean},sanitize:{type:Boolean},disableRemoteSanitization:{type:Boolean},smartypants:{type:Boolean},_scriptTag:{type:Object}}}get markdown(){return this._markdown}set markdown(e){const t=this.markdown;t!==e&&(this._markdown=this.unindent(e),this.requestUpdate("markdown",t))}get src(){return this._src}set src(e){const t=this.src;t!==e&&(this._src=e,this._setMarkdownFile(this._src),this.requestUpdate("src",t))}constructor(){super(),this._scriptTag=null,this._markdown="",this.breaks=!1,this.pedantic=!1,this.sanitize=!1,this.smartypants=!1,this.disableRemoteSanitization=!1,this._src="",this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}updated(e){super.updated(e),e.forEach((e,t)=>{"markdown"===t&&this.markdown&&(Prism.highlightAllUnder(this.renderRoot,!1),this.fireMessage("obap-markdown-viewer-markdown-ready"))})}unindent(e){if(!e)return e;let t=e.replace(/\t/g,"  ").split("\n"),o=t.reduce((function(e,t){if(/^\s*$/.test(t))return e;let o=t.match(/^(\s*)/)[0].length;return null===e||o<e?o:e}),null);return t.map((function(e){return e.substr(o)})).join("\n")}render(){return Gi(ei||(ei=ci`<slot></slot>${0}`),this._renderMarkdown(this.markdown))}_renderMarkdown(e){this.renderer=this.renderer||new marked.Renderer;var t={renderer:this.renderer,breaks:this.breaks,sanitize:this.sanitize,pedantic:this.pedantic,smartypants:this.smartypants};return Gi(ti||(ti=ci`
            ${0}
        `),Rn(marked(e,t)))}_setMarkdownFile(e){this._fetchMarkdownFile(e).then(e=>{this.markdown=e})}async _fetchMarkdownFile(e){return e&&e.toLowerCase().includes(".md")?await fetch(e).then(async e=>await e.text()).catch(e=>"Error fetching markdown file."):""}_handleSlotChangeEvent(e){this._scriptTag=this.querySelector('script[type="text/markdown"]'),this._scriptTag&&(this.markdown=this._scriptTag.text.trim())}});window.customElements.define("obap-demo-snippet",class extends hr{static get styles(){return[cr(oi||(oi=ci`
            :host {
                display: block;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                            0 1px 5px 0 rgba(0, 0, 0, 0.12),
                            0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            .hidden {
                display: none !important;
            }

            .container {
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .demo {
                padding: 16px;
            }

            .code {
                flex: 1;
                display: flex;
                flex-direction: column;
                background: #F5F2F0;
            }

            obap-markdown-viewer {
                flex: 1;
                width: 100%; 
            }

            #copy-button {
                --obap-button-background-color: transparent;
                height: 24px;
                min-width: 0;
                align-self: flex-end;
                margin: 4px 4px 0 0;
            }
        `))]}static get properties(){return{label:{type:String,attribute:"label"},disableCopy:{type:Boolean,attribute:"disable-copy"},copyLabel:{type:String,attribute:"copy-label"},doneLabel:{type:String,attribute:"done-label"},errorLabel:{type:String,attribute:"error-label"}}}constructor(){super(),this.label="",this.disableCopy=!1,this.copyLabel="copy",this.doneLabel="done",this.errorLabel="error",this._codeSnippet="",this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}updated(e){super.updated(e),this._codeViewer=this.renderRoot.getElementById("code-viewer"),this._demoViewer=this.renderRoot.getElementById("demo-viewer"),this._copyButton=this.renderRoot.getElementById("copy-button")}render(){return Gi(ai||(ai=ci`
            <div class="container">
                <div class="demo">
                    <div id="demo-viewer"></div>
                </div>

                <div class="code">
                    ${0}
                    <obap-markdown-viewer id="code-viewer"></obap-markdown-viewer>
                </div>

                <div class="hidden">
                    <slot></slot>
                </div>
            </div>
        `),this.disableCopy?null:Gi(ii||(ii=ci`<obap-button id="copy-button" label="${0}" @click="${0}"></obap-button>`),this.copyLabel,this._copyToClipboard))}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&"TEMPLATE"===e.tagName)[0];t&&this._updateContent(t)}_updateContent(e){let t=this._codeViewer.unindent(e.innerHTML).trim();t=t.replace(/ class=""/g,""),t=t.replace(/=""/g,""),this._codeSnippet=t;let o="```html\n"+t+"\n```";this._codeViewer.markdown=o,this._demoViewer.appendChild(document.importNode(e.content,!0))}_copyToClipboard(){let e=document.createRange();e.selectNodeContents(this._codeViewer.renderRoot);let t=window.getSelection();t.removeAllRanges(),t.addRange(e);let o=!1;try{o=document.execCommand("copy"),this._copyButton.label=this.doneLabel}catch(e){console.error(e),this._copyButton.label=this.errorLabel}return setTimeout(this._resetCopyButtonState.bind(this),1e3),t.removeAllRanges(),o}_resetCopyButtonState(){this._copyButton.label=this.copyLabel}});window.customElements.define("demo-snippet",class extends hr{static get styles(){return[cr(ri||(ri=ci`
            :host {
                display: block;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }
            
            .container {
                height: 100%;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            obap-demo-snippet {
                background: var(--obap-surface-color);
                width: 100%;
            }
        `))]}render(){return Gi(ni||(ni=ci`
            <div class="container">
                <obap-demo-snippet label="obap-demo-snippet">
                    <template>
                        <style>
                            .custom-button {
                                --obap-button-color: white;
                                --obap-button-background-color: cornflowerblue;
                            }
                        </style>
                            
                        <obap-button raised class="custom-button" label="button"></obap-button>
                    </template>
                </obap-demo-snippet>
            </div>
        `))}});class On extends(gr(hr)){static get styles(){return[cr(si||(si=ci`
            :host {
                display: block;
                overflow: hidden;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-mobile-application {
                height: 100%;
            }

            .content {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .demo {
                width: 100%;
            }

            obap-application-view, obap-application-content {
                background: var(--obap-window-color);
                width: 100%;
            }
        `))]}constructor(){super(),ur.create("green","#80e27e","#4caf50","#087f23","#ffc107","#FAFAFA"),ur.apply("default")}render(){return Gi(li||(li=ci`
            <obap-mobile-application label="OBAP Elements" icon="app:polymer" disable-routing>
                <obap-application-view name="styles" label="Styles" icon="app:styles" hide-sub-view-scroll-buttons>
                    <obap-application-content name="styles-elevation" label="Elevation"><demo-styles-elevation class="demo"></demo-styles-elevation></obap-application-content>
                    <obap-application-content name="styles-iconography" label="Iconography"><demo-styles-iconography class="demo"></demo-styles-iconography></obap-application-content>
                    <obap-application-content name="styles-theming" label="Theming"><demo-styles-theming class="demo"></demo-styles-theming></obap-application-content>
                    <obap-application-content name="styles-typography" label="Typography"><demo-styles-typography class="demo"></demo-styles-typography></obap-application-content>
                </obap-application-view>

                <obap-application-view name="buttons" label="Buttons" icon="app:buttons" hide-sub-view-scroll-buttons>
                    <obap-application-content name="buttons-normal" label="Normal"><demo-buttons-normal class="demo"></demo-buttons-normal></obap-application-content>
                    <obap-application-content name="buttons-fab" label="Fab"><demo-buttons-fab class="demo"></demo-buttons-fab></obap-application-content>
                    <obap-application-content name="buttons-custom" label="Custom"><demo-buttons-custom class="demo"></demo-buttons-custom></obap-application-content>
                </obap-application-view>

                <obap-application-view name="cards" label="Cards" icon="app:cards" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-cards class="demo"></demo-cards></obap-application-content>
                </obap-application-view>

                <obap-application-view name="chips" label="Chips" icon="app:chips" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-chips class="demo"></demo-chips></obap-application-content>
                </obap-application-view>

                <obap-application-view name="data-tables" label="Data Tables" icon="app:data-tables" hide-sub-view-scroll-buttons>
                    <obap-application-content name="data-table-lite" label="Data Table Lite"><demo-data-table-lite class="demo"></demo-data-table-lite></obap-application-content>
                    <obap-application-content name="data-tables-pager" label="Data Pager"><demo-data-pager class="demo"></demo-data-pager></obap-application-content>
                </obap-application-view>

                <obap-application-view name="dialogs" label="Dialogs" icon="app:dialogs" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-dialogs class="demo"></demo-dialogs></obap-application-content>
                </obap-application-view>

                <obap-application-view name="pickers" label="Pickers" icon="app:pickers" hide-sub-view-scroll-buttons>
                    <obap-application-content name="pickers-select" label="Select"><demo-pickers-select class="demo"></demo-pickers-select></obap-application-content>
                </obap-application-view>

                <obap-application-view name="progress-indicators" label="Progress Indicators" icon="app:progress-indicators" hide-sub-view-scroll-buttons>
                    <obap-application-content name="progress-indicators-linear" label="Linear"><demo-progress-indicators-linear class="demo"></demo-progress-indicators-linear></obap-application-content>
                    <obap-application-content name="progress-indicators-circular" label="Circular"><demo-progress-indicators-circular class="demo"></demo-progress-indicators-circular></obap-application-content>
                    <obap-application-content name="progress-indicators-activity" label="Activity"><demo-progress-indicators-activity class="demo"></demo-progress-indicators-activity></obap-application-content>
                </obap-application-view>

                <obap-application-view name="selection" label="Selection Controls" icon="app:selection" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-selection class="demo"></demo-selection></obap-application-content>
                </obap-application-view>

                <obap-application-view name="sliders" label="Sliders" icon="app:slider" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-slider class="demo"></demo-slider></obap-application-content>
                </obap-application-view>

                <obap-application-view name="snippets" label="Snippets" icon="app:snippets" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-snippet class="demo"></demo-snippet></obap-application-content>
                </obap-application-view>

                <obap-application-view name="charts-sparkline" label="Sparkline Charts" icon="app:charts" hide-sub-view-scroll-buttons>
                    <obap-application-content name="line" label="Line"><demo-sparkline-line class="demo"></demo-sparkline-line></obap-application-content>
                    <obap-application-content name="bar" label="Bar"><demo-sparkline-bar class="demo"></demo-sparkline-bar></obap-application-content>
                    <obap-application-content name="pie" label="Pie & Donut"><demo-sparkline-pie class="demo"></demo-sparkline-pie></obap-application-content>
                    <obap-application-content name="winloss" label="Win-Loss"><demo-sparkline-winloss class="demo"></demo-sparkline-winloss></obap-application-content>
                    <obap-application-content name="bullet" label="Bullet"><demo-sparkline-bullet class="demo"></demo-sparkline-bullet></obap-application-content>
                </obap-application-view>

                <obap-application-view name="tabs" label="Tabs" icon="app:tabs" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-tabs class="demo"></demo-tabs></obap-application-content>
                </obap-application-view>

                <obap-application-view name="tooltips-callouts" label="Tooltips & Callouts" icon="app:tooltips-callouts" hide-sub-view-scroll-buttons>
                    <obap-application-content name="tooltips-callouts-tooltips" label="Tooltips"><demo-tooltips class="demo"></demo-tooltips></obap-application-content>
                    <obap-application-content name="tooltips-callouts-callouts" label="Callouts"><demo-callouts class="demo"></demo-callouts></obap-application-content>
                    <obap-application-content name="tooltips-callouts-conversation" label="Conversation"><demo-conversation class="demo"></demo-conversation></obap-application-content>
                </obap-application-view>

                <obap-application-view name="treeview" label="Treeview" icon="app:treeview" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-treeview class="demo"></demo-treeview></obap-application-content>
                </obap-application-view>
            </obap-mobile-application>
        `))}}window.customElements.define("demo-mobile-app",On);
