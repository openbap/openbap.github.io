let e,t,o,i,s,n,a,r,l,c,d,p,h,u,b,v,g,m,y,f,w,_,x,S,E,C,k,P,V,z,I,N,R,M,T,A,L,H,B,$,O,F,U,D,j,q,W,J,G,K,Q,X,Y,Z,ee,te,oe,ie,se,ne,ae,re,le,ce,de,pe,he,ue,be,ve,ge,me,ye,fe,we,_e,xe,Se,Ee,Ce,ke,Pe,Ve,ze=e=>e;const Ie="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Ne=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},Re=`{{lit-${String(Math.random()).slice(2)}}}`,Me=`\x3c!--${Re}--\x3e`,Te=new RegExp(`${Re}|${Me}`);class Ae{constructor(e,t){this.parts=[],this.element=t;const o=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let n=0,a=-1,r=0;const{strings:l,values:{length:c}}=e;for(;r<c;){const e=s.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let i=0;for(let e=0;e<o;e++)Le(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=l[r],o=$e.exec(t)[2],i=o.toLowerCase()+"$lit$",s=e.getAttribute(i);e.removeAttribute(i);const n=s.split(Te);this.parts.push({type:"attribute",index:a,name:o,strings:n}),r+=n.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Re)>=0){const i=e.parentNode,s=t.split(Te),n=s.length-1;for(let t=0;t<n;t++){let o,n=s[t];if(""===n)o=Be();else{const e=$e.exec(n);null!==e&&Le(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),o=document.createTextNode(n)}i.insertBefore(o,e),this.parts.push({type:"node",index:++a})}""===s[n]?(i.insertBefore(Be(),e),o.push(e)):e.data=s[n],r+=n}}else if(8===e.nodeType)if(e.data===Re){const t=e.parentNode;null!==e.previousSibling&&a!==n||(a++,t.insertBefore(Be(),e)),n=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(o.push(e),a--),r++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Re,t+1));)this.parts.push({type:"node",index:-1}),r++}}else s.currentNode=i.pop()}for(const e of o)e.parentNode.removeChild(e)}}const Le=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},He=e=>-1!==e.index,Be=()=>document.createComment(""),$e=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Oe(e,t){const{element:{content:o},parts:i}=e,s=document.createTreeWalker(o,133,null,!1);let n=Ue(i),a=i[n],r=-1,l=0;const c=[];let d=null;for(;s.nextNode();){r++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==a&&a.index===r;)a.index=null!==d?-1:a.index-l,n=Ue(i,n),a=i[n]}c.forEach(e=>e.parentNode.removeChild(e))}const Fe=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},Ue=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(He(t))return o}return-1};const De=new WeakMap,je=e=>"function"==typeof e&&De.has(e),qe={},We={};class Je{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=Ie?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s,n=0,a=0,r=i.nextNode();for(;n<o.length;)if(s=o[n],He(s)){for(;a<s.index;)a++,"TEMPLATE"===r.nodeName&&(t.push(r),i.currentNode=r.content),null===(r=i.nextNode())&&(i.currentNode=t.pop(),r=i.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(r.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(r,s.name,s.strings,this.options));n++}else this.__parts.push(void 0),n++;return Ie&&(document.adoptNode(e),customElements.upgrade(e)),e}}const Ge=` ${Re} `;class Ke{constructor(e,t,o,i){this.strings=e,this.values=t,this.type=o,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let i=0;i<e;i++){const e=this.strings[i],s=e.lastIndexOf("\x3c!--");o=(s>-1||o)&&-1===e.indexOf("--\x3e",s+1);const n=$e.exec(e);t+=null===n?e+(o?Ge:Me):e.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+Re}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Qe extends Ke{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,o=t.firstChild;return t.removeChild(o),((e,t,o=null,i=null)=>{for(;t!==o;){const o=t.nextSibling;e.insertBefore(t,i),t=o}})(t,o.firstChild),e}}const Xe=e=>null===e||!("object"==typeof e||"function"==typeof e),Ye=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Ze{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new et(this)}_getValue(){const e=this.strings,t=e.length-1;let o="";for(let i=0;i<t;i++){o+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(Xe(e)||!Ye(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class et{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===qe||Xe(e)&&e===this.value||(this.value=e,je(e)||(this.committer.dirty=!0))}commit(){for(;je(this.value);){const e=this.value;this.value=qe,e(this)}this.value!==qe&&this.committer.commit()}}class tt{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Be()),this.endNode=e.appendChild(Be())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Be()),e.__insert(this.endNode=Be())}insertAfterPart(e){e.__insert(this.startNode=Be()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;je(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=qe,e(this)}const e=this.__pendingValue;e!==qe&&(Xe(e)?e!==this.value&&this.__commitText(e):e instanceof Ke?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Ye(e)?this.__commitIterable(e):e===We?(this.value=We,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Je&&this.value.template===t)this.value.update(e.values);else{const o=new Je(t,e.processor,this.options),i=o._clone();o.update(e.values),this.__commitNode(i),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,i=0;for(const s of e)o=t[i],void 0===o&&(o=new tt(this.options),t.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(t[i-1])),o.setValue(s),o.commit(),i++;i<t.length&&(t.length=i,this.clear(o&&o.endNode))}clear(e=this.startNode){Ne(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ot{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;je(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=qe,e(this)}if(this.__pendingValue===qe)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=qe}}class it extends Ze{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new st(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class st extends et{}let nt=!1;(()=>{try{const e={get capture(){return nt=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class at{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;je(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=qe,e(this)}if(this.__pendingValue===qe)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=rt(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=qe}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const rt=e=>e&&(nt?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function lt(e){let t=ct.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ct.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const i=e.strings.join(Re);return o=t.keyString.get(i),void 0===o&&(o=new Ae(e,e.getTemplateElement()),t.keyString.set(i,o)),t.stringsArray.set(e.strings,o),o}const ct=new Map,dt=new WeakMap;const pt=new class{handleAttributeExpressions(e,t,o,i){const s=t[0];if("."===s){return new it(e,t.slice(1),o).parts}return"@"===s?[new at(e,t.slice(1),i.eventContext)]:"?"===s?[new ot(e,t.slice(1),o)]:new Ze(e,t,o).parts}handleTextExpression(e){return new tt(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const ht=(e,...t)=>new Ke(e,t,"html",pt),ut=(e,...t)=>new Qe(e,t,"svg",pt),bt=(e,t)=>`${e}--${t}`;let vt=!0;void 0===window.ShadyCSS?vt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),vt=!1);const gt=e=>t=>{const o=bt(t.type,e);let i=ct.get(o);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},ct.set(o,i));let s=i.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(Re);if(s=i.keyString.get(n),void 0===s){const o=t.getTemplateElement();vt&&window.ShadyCSS.prepareTemplateDom(o,e),s=new Ae(t,o),i.keyString.set(n,s)}return i.stringsArray.set(t.strings,s),s},mt=["html","svg"],yt=new Set,ft=(e,t,o)=>{yt.add(e);const i=o?o.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const a=document.createElement("style");for(let e=0;e<n;e++){const t=s[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{mt.forEach(t=>{const o=ct.get(bt(t,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{o.add(e)}),Oe(e,o)})})})(e);const r=i.content;o?function(e,t,o=null){const{element:{content:i},parts:s}=e;if(null==o)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let a=Ue(s),r=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===o&&(r=Fe(t),o.parentNode.insertBefore(t,o));-1!==a&&s[a].index===l;){if(r>0){for(;-1!==a;)s[a].index+=r,a=Ue(s,a);return}a=Ue(s,a)}}}(o,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(o){r.insertBefore(a,r.firstChild);const e=new Set;e.add(a),Oe(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const wt={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},_t=(e,t)=>t!==e&&(t==t||e==e),xt={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:_t};class St extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,o)=>{const i=this._attributeNameForProperty(o,t);void 0!==i&&(this._attributeToPropertyMap.set(i,o),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=xt){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||xt}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=_t){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,i=t.converter||wt,s="function"==typeof i?i:i.fromAttribute;return s?s(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,i=t.converter;return(i&&i.toAttribute||wt.toAttribute)(e,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=xt){const i=this.constructor,s=i._attributeNameForProperty(e,o);if(void 0!==s){const e=i._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(e);if(void 0!==i){const e=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let o=!0;if(void 0!==e){const i=this.constructor,s=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}St.finalized=!0;const Et="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol();class kt{constructor(e,t){if(t!==Ct)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Et?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Pt=(e,...t)=>{const o=t.reduce((t,o,i)=>t+(e=>{if(e instanceof kt)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[i+1],e[0]);return new kt(o,Ct)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Vt={};class zt extends St{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,o)=>e.reduceRight((e,o)=>Array.isArray(o)?t(o,e):(e.add(o),e),o),o=t(e,new Set),i=[];o.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Et?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Vt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Vt}}zt.finalized=!0,zt.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const i=o.scopeName,s=dt.has(t),n=vt&&11===t.nodeType&&!!t.host,a=n&&!yt.has(i),r=a?document.createDocumentFragment():t;if(((e,t,o)=>{let i=dt.get(t);void 0===i&&(Ne(t,t.firstChild),dt.set(t,i=new tt(Object.assign({templateFactory:lt},o))),i.appendInto(t)),i.setValue(e),i.commit()})(e,r,Object.assign({templateFactory:gt(i)},o)),a){const e=dt.get(r);dt.delete(r);const o=e.value instanceof Je?e.value.template:void 0;ft(i,r,o),Ne(t,t.firstChild),t.appendChild(r),dt.set(t,e)}!s&&n&&window.ShadyCSS.styleElement(t.host)};class It extends zt{get disabled(){return this._disabled}set disabled(e){const t=this.disabled;e!==t&&(this._disabled=e,e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false"),this.requestUpdate("disabled",t))}static get properties(){return{disabled:{type:Boolean,attribute:"disabled",reflect:!0},role:{type:String,attribute:"role",reflect:!0}}}constructor(){super(),this._disabled=!1,this.role=null}getCssVariableValue(e,t,o){let i=e.getPropertyValue(t);return i||o}}class Nt{constructor(e,t,o,i,s,n){this.name=e,this.primary=o,this.primaryLight=t,this.primaryDark=i,this.accent=s,this.window=n}}const Rt=new class{constructor(){this.__themes={},this.create("default","#8e99f3","#5c6bc0","#26418f","#ec407a","#E0E0E0");let e=document.documentElement;e.style.setProperty("-webkit-tap-highlight-color","transparent"),e.style.setProperty("--obap-background-color","#FFFFFF"),e.style.setProperty("--obap-surface-color","#FFFFFF"),e.style.setProperty("--obap-error-color","#e53935"),e.style.setProperty("--obap-notification-color","#323232"),e.style.setProperty("--obap-selection-color","#E0E0E0"),e.style.setProperty("--obap-block-color","#ECECEC"),e.style.setProperty("--obap-inactive-color","#9E9E9E"),e.style.setProperty("--obap-on-primary-color","#FFFFFF"),e.style.setProperty("--obap-on-primary-inactive-color","rgba(255, 255, 255, 0.7)"),e.style.setProperty("--obap-on-accent-color","#FFFFFF"),e.style.setProperty("--obap-on-accent-inactive-color","rgba(255, 255, 255, 0.7)"),e.style.setProperty("--obap-on-background-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-surface-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-window-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-error-color","#FFFFFF"),e.style.setProperty("--obap-on-notification-color","rgba(255, 255, 255, 0.87)"),e.style.setProperty("--obap-on-selection-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-text-primary-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-text-secondary-color","rgba(0, 0, 0, 0.54)"),e.style.setProperty("--obap-text-hint-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-text-disabled-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-text-icon-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-divider-on-primary-color","rgba(255, 255, 255, 0.20)"),e.style.setProperty("--obap-divider-on-surface-color","rgba(0, 0, 0, 0.20)")}apply(e,t){let o=this.__themes[e];return t=t||document.documentElement,!!o&&(t.style.setProperty("--obap-primary-light-color",o.primaryLight),t.style.setProperty("--obap-primary-color",o.primary),t.style.setProperty("--obap-primary-dark-color",o.primaryDark),t.style.setProperty("--obap-accent-color",o.accent),o.window?t.style.setProperty("--obap-window-color",o.window):t.style.setProperty("--obap-window-color","#FAFAFA"),!0)}clear(e,t){if(t=t||!1,(e=e||document.documentElement).style.removeProperty("--obap-primary-light-color"),e.style.removeProperty("--obap-primary-color"),e.style.removeProperty("--obap-primary-dark-color"),e.style.removeProperty("--obap-accent-color"),e.style.removeProperty("--obap-window-color"),t){let e=document.documentElement;e.style.removeProperty("--obap-background-color"),e.style.removeProperty("--obap-surface-color"),e.style.removeProperty("--obap-error-color"),e.style.removeProperty("--obap-notification-color"),e.style.removeProperty("--obap-selection-color"),e.style.removeProperty("--obap-block-color"),e.style.removeProperty("--obap-inactive-color"),e.style.removeProperty("--obap-on-primary-color"),e.style.removeProperty("--obap-on-primary-inactive-color"),e.style.removeProperty("--obap-on-accent-color"),e.style.removeProperty("--obap-on-accent-inactive-color"),e.style.removeProperty("--obap-on-background-color"),e.style.removeProperty("--obap-on-surface-color"),e.style.removeProperty("--obap-on-window-color"),e.style.removeProperty("--obap-on-error-color"),e.style.removeProperty("--obap-on-notification-color"),e.style.removeProperty("--obap-on-selection-color"),e.style.removeProperty("--obap-text-primary-color"),e.style.removeProperty("--obap-text-secondary-color"),e.style.removeProperty("--obap-text-hint-color"),e.style.removeProperty("--obap-text-disabled-color"),e.style.removeProperty("--obap-text-icon-color"),e.style.removeProperty("--obap-divider-on-primary-color"),e.style.removeProperty("--obap-divider-on-surface-color")}}create(e,t,o,i,s,n){this.__themes[e]=new Nt(e,t,o,i,s,n)}getNames(){return Object.getOwnPropertyNames(this.__themes)}hasTheme(e){return this.getNames().indexOf(e)>-1}},Mt=e=>class extends e{get theme(){return this._theme}set theme(e){const t=this.theme;if(e!==t){if(this._theme=e,this.shadowRoot){const e=this.shadowRoot.host;this.theme&&this.hasTheme(this.theme)?Rt.apply(this.theme,e):(this._theme=null,Rt.clear(e,!1))}else this._theme=null;this.requestUpdate("theme",t)}}static get properties(){return{theme:{type:String,attribute:"theme"}}}constructor(){super(),this._theme=null}setGlobalTheme(e){Rt.apply(e)}getThemeNames(){return Rt.getNames()}hasTheme(e){return Rt.hasTheme(e)}};window.ObapRouter=window.ObapRouter||{},window.ObapRouter.launchParameters=window.ObapRouter.launchParameters||null;class Tt{constructor(e,t,o){this.name=e,this.pattern=t,this.isDefault=o||!1}}const At=e=>class extends e{static get properties(){return{routes:{type:Object}}}get currentRoute(){return this._currentRoute}set currentRoute(e){(this.currentRoute?this.currentRoute.name:"")!==(e?e.name:"")&&(this._currentRoute=e,this._popping||history.pushState(this._currentParameters,"",this._buildUrl()))}constructor(){super(),this.routes={},this._defaultRouteName=null,this._path=null,this._currentRoute=null,window.ObapRouter.launchParameters=null,this._boundHandleOnPopStateEvent=this._handleOnPopStateEvent.bind(this),this._boundHandleChangeRouteEvent=this._handleChangeRouteEvent.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this._boundHandleOnPopStateEvent),window.addEventListener("obap-change-route",this._boundHandleChangeRouteEvent)}disconnectedCallback(){window.removeEventListener("popstate",this._boundHandleOnPopStateEvent),window.removeEventListener("obap-change-route",this._boundHandleChangeRouteEvent),super.disconnectedCallback()}registerRoute(e){this.routes[e.name]=e,e.isDefault&&(this._defaultRouteName=e.name)}registerRoutes(e){e.forEach(e=>this.registerRoute(e))}setDefaultRoute(e){let t=this.getRoute(e);t&&(t.isDefault=!0,this._defaultRouteName=e)}unregisterRoute(e){delete this.routes[e]}getRoute(e){return this.routes[e]}navigateBack(){history.back()}navigateForward(){history.forward()}navigateToDefault(e){if(0!==this._getRouteCount())if(e){const e=this._getRouteFromUrl();this.setCurrentRoute(e.name)}else this._defaultRouteName&&this.setCurrentRoute(this._defaultRouteName)}setCurrentRoute(e){if(this.currentRoute&&this.currentRoute.name===e)return;let t=this.getRoute(e);t&&(this.currentRoute=t,this.onRouteChange&&this.onRouteChange(e))}_fireEvent(e,t){let o=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(o)}_getRouteCount(){return Object.keys(this.routes).length}_mapRoute(e){if(e&&""===e.name){const t=Object.keys(this.routes);for(let o=0;o<t.length;o++){const i=this.routes[t[o]];if(i&&(i.pattern===e.pattern||""===e.pattern&&i.isDefault))return i}}return e}_setRouteFromUrl(){let e=location.hash.replace("#",""),t={};location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(e,o,i)=>t[o]=i),this._path=location.pathname;let o=new Tt("",e);null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=t),this.currentRoute=this._mapRoute(o)}_getRouteFromUrl(){let e={},t=location.hash.replace("#","");return location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(t,o,i)=>e[o]=i),this._path=location.pathname,null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=e),this._mapRoute(new Tt("",t))}_handleOnPopStateEvent(e){const t=this._getRouteFromUrl();t&&(this._popping=!0,this.setCurrentRoute(t.name),this._popping=!1)}_handleChangeRouteEvent(e){const t=e.detail.routeName;this.setCurrentRoute(t)}_buildUrl(){let e=location.origin+location.pathname;if(this.currentRoute&&this.currentRoute.name){if(window.ObapRouter.launchParameters){const t=Object.keys(window.ObapRouter.launchParameters),o=[];if(t&&t.length>0){for(let e=0;e<t.length;e++){const i=t[e];o.push(`${i}=${window.ObapRouter.launchParameters[i]}`)}e+="?"+o.join("&")}}this.currentRoute.isDefault||(e+="#"+this.currentRoute.pattern)}return e}},Lt=e=>class extends(At(Mt(e))){static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},views:{type:Array},canChangeView:{type:Boolean}}}get selectedViewIndex(){return this._selectedViewIndex}set selectedViewIndex(e){const t=this.selectedViewIndex;if(t!==e){this._selectedViewIndex=e,this._previousViewIndex=t;const o=this.getSelectedView();o&&this.setCurrentRoute(o.name,null),this.requestUpdate("selectedViewIndex",t)}}constructor(){super(),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.views=[],this.label="untitled",this.icon="",this.defaultViewName=null,this._selectedViewIndex=null,this._previousViewIndex=null,this._navigatorCounts={}}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(e){super.updated(e),e.forEach((e,t)=>{"views"===t&&this._registerViews()})}findView(e){return this.views.find(t=>t.name===e)}showView(e){const t=this.findView(e);t&&(this.selectedViewIndex=this.views.indexOf(t))}canViewActivate(e){let t=null;return t=e?this.findView(e):this.views[this.selectedViewIndex],!t||t.canViewActivate()}canViewDeactivate(e){let t=null;return t=e?this.findView(e):this.views[this.selectedViewIndex],!t||t.canViewDeactivate()}showPreviousView(){let e=parseInt(this._previousViewIndex);e>=0?(this.selectedViewIndex=e,this._previousViewIndex=null):this.defaultViewName&&this.showView(this.defaultViewName)}getSelectedView(){let e=parseInt(this.selectedViewIndex);return e>=0?this.views[e]:null}getNavigatorViews(e){let t=this.views[this.selectedViewIndex];return t?this.views.filter(o=>o.navigators.indexOf(e)>-1&&(0===o.associations.length||o.associations.indexOf(t.name)>-1)):[]}getEffectiveDisplayTitle(){let e=this.getSelectedView();return e&&e.modal?e.label:this.label}isModalView(){let e=this.getSelectedView();return!(!e||!e.modal)}navigatorViewCount(e){return void 0!==this._navigatorCounts[e]?this._navigatorCounts[e]:0}onRouteChange(e){this.showView(e)}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot");if(!t)return;let o=t.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&"OBAP-APPLICATION-VIEW"===e.tagName);this.views.length!==o.length&&(this.views=o),this.views.forEach(e=>{e.navigators.forEach(e=>{void 0===this._navigatorCounts[e]&&(this._navigatorCounts[e]=0),this._navigatorCounts[e]++})}),this.requestUpdate()}_registerViews(){let e=!1;this.views.forEach(t=>{t.default&&(e=!0,this.defaultViewName=t.name),this.registerRoute(new Tt(t.name,t.name,t.default))}),!e&&this.views.length>0&&(this.defaultViewName=this.views[0].name,this.setDefaultRoute(this.defaultViewName)),this.navigateToDefault(!0)}},Ht=Pt(e||(e=ze`.typography-display{font-size:2.125rem;line-height:2.5rem;letter-spacing:.0074em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),Bt=Pt(t||(t=ze`.typography-headline{font-size:1.5rem;line-height:2rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),$t=Pt(o||(o=ze`.typography-title{font-size:1.25rem;line-height:2rem;letter-spacing:.0075em;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),Ot=Pt(i||(i=ze`.typography-subtitle{font-size:1rem;line-height:1.75rem;letter-spacing:.0094em;font-weight:400;-webkit-font-smoothing:antialiased}`)),Ft=Pt(s||(s=ze`.typography-body{font-size:.8125rem;line-height:1.15rem;letter-spacing:.0179em;font-weight:400;-webkit-font-smoothing:antialiased}`)),Ut=Pt(n||(n=ze`.typography-button{font-size:.75rem;line-height:1.25rem;letter-spacing:.0333em;text-transform:uppercase;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),Dt=Pt(a||(a=ze`.typography-caption{font-size:.6875rem;line-height:1.15rem;letter-spacing:.0333em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),jt=Pt(r||(r=ze`.typography-overline{font-size:.6875rem;line-height:2rem;letter-spacing:.15em;text-transform:uppercase;font-weight:400;-webkit-font-smoothing:antialiased}`)),qt=Pt(l||(l=ze`.typography-code{font-family:'Roboto Mono',monospace;font-size:.875rem;line-height:1.25rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased}`)),Wt=[Ht,Bt,$t,Ot,Ft,Ut,Dt,jt,qt];class Jt extends It{static get properties(){return{name:{type:String,attribute:"name",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus"}}}constructor(){super(),this.hasFocus=!1,this.tabIndex=0,this._boundHandleFocusEvent=this._handleFocusEvent.bind(this),this._boundHandleBlurEvent=this._handleBlurEvent.bind(this)}updated(e){super.updated(e),e.forEach((e,t)=>{"disabled"===t&&(this.disabled?this.tabIndex=-1:this.tabIndex=0)})}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._boundHandleFocusEvent),this.addEventListener("blur",this._boundHandleBlurEvent)}disconnectedCallback(){this.removeEventListener("focus",this._boundHandleFocusEvent),this.removeEventListener("blur",this._boundHandleBlurEvent),super.disconnectedCallback()}_handleFocusEvent(e){this.disabled||(this.hasFocus=!0)}_handleBlurEvent(e){this.hasFocus=!1}}const Gt=Pt(c||(c=ze`:host([elevation="0"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),Kt=Pt(d||(d=ze`.elevation-0{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),Qt=Pt(p||(p=ze`:host([elevation="1"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),Xt=Pt(h||(h=ze`.elevation-1{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),Yt=Pt(u||(u=ze`:host([elevation="2"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),Zt=Pt(b||(b=ze`.elevation-2{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),eo=Pt(v||(v=ze`:host([elevation="3"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),to=Pt(g||(g=ze`.elevation-3{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),oo=Pt(m||(m=ze`:host([elevation="4"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),io=Pt(y||(y=ze`.elevation-4{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),so=Pt(f||(f=ze`:host([elevation="6"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),no=Pt(w||(w=ze`.elevation-6{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),ao=Pt(_||(_=ze`:host([elevation="8"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),ro=Pt(x||(x=ze`.elevation-8{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),lo=Pt(S||(S=ze`:host([elevation="12"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),co=Pt(E||(E=ze`.elevation-12{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),po=Pt(C||(C=ze`:host([elevation="16"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),ho=Pt(k||(k=ze`.elevation-16{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),uo=Pt(P||(P=ze`:host([elevation="24"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),bo=[Kt,Xt,Zt,to,io,no,ro,co,ho,Pt(V||(V=ze`.elevation-24{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`))],vo=[Gt,Qt,Yt,eo,oo,so,ao,lo,po,uo];const go=new class{addGroup(e,t){const o=document.createElement("svg");o.innerHTML=t;const i=o.querySelector("defs");if(i){const t=i.querySelectorAll("g");t.length>0&&(window.ObapIcons[e]||(window.ObapIcons[e]={}),t.forEach(t=>window.ObapIcons[e][t.id]=new Qe([`<svg viewBox="0 0 24 24">${t.outerHTML}</svg>`],[])))}}get(e){let t=e.split(":"),o="standard",i=t[0];return t.length>1&&(o=t[0],i=t[1]),window.ObapIcons[o]&&window.ObapIcons[o][i]?window.ObapIcons[o][i]:null}getNames(e){return null==e&&(e="standard"),window.ObapIcons[e]?Object.getOwnPropertyNames(window.ObapIcons[e]).map(t=>`${e}:${t}`):[]}getGroups(){return Object.getOwnPropertyNames(window.ObapIcons).filter(e=>"iconManager"!==e&&"get"!==e)}};window.ObapIcons=window.ObapIcons||{iconManager:go,get:go.get};const mo=window.ObapIcons.iconManager,yo=mo.getNames;mo.getGroups;mo.addGroup("core",'\n    <defs>\n        <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g>\n        <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g>\n        <g id="chevron-up"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></g>\n        <g id="chevron-down"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></g>\n        <g id="arrow-left"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>\n        <g id="arrow-right"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>\n        <g id="arrow-up"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>\n        <g id="arrow-down"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>\n        <g id="arrow-drop-left"><path d="M14 7l-5 5 5 5V7z"/></g>\n        <g id="arrow-drop-right"><path d="M10 17l5-5-5-5v10z"/></g>\n        <g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"/></g>\n        <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"/></g>\n        <g id="edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>\n        <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>\n        <g id="cross"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>\n        <g id="error"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>\n    </defs>\n');window.customElements.define("obap-icon",class extends It{static get styles(){return[Pt(z||(z=ze`
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
        `))]}static get properties(){return{icon:{type:String,attribute:"icon"}}}constructor(){super(),this.icon=""}render(){return mo.get(this.icon)}});window.customElements.define("obap-button",class extends Jt{static get styles(){return[Ut,Yt,so,Pt(I||(I=ze`
            :host {
                --obap-button-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-button-disabled-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-button-split-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-button-background-color: var(--obap-surface-color,#FFFFFF);
                --obap-button-disabled-background-color: transparent;
                --obap-button-ripple-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                
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
        `))]}static get properties(){return{raised:{type:Boolean,attribute:"raised",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0},round:{type:Boolean,attribute:"round",reflect:!0},toggle:{type:Boolean,attribute:"toggle",reflect:!0},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.raised=!1,this.noInk=!1,this.round=!1,this.toggle=!1,this.selected=!1,this.icon="",this.label="",this.role="button",this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleTouchStartEvent=this._handleTouchStartEvent.bind(this),this._boundHandleTouchEndEvent=this._handleTouchEndEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("touchstart",this._boundHandleTouchStartEvent),this.addEventListener("touchend",this._boundHandleTouchEndEvent)}disconnectedCallback(){this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("touchstart",this._boundHandleTouchStartEvent),this.removeEventListener("touchend",this._boundHandleTouchEndEvent),super.disconnectedCallback()}updated(e){super.updated(e),e.forEach((e,t)=>{switch(t){case"raised":this.raised?this.setAttribute("elevation",2):this.removeAttribute("elevation");break;case"label":case"icon":this.setAttribute("aria-label",this._getAriaLabel())}})}_getAriaLabel(){return this.label?this.label:this.icon}render(){return ht(N||(N=ze`
            <div class="container typography-button">
                ${0}
                ${0} 
            </div>
            ${0}
        `),this.icon?ht(R||(R=ze`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.label?ht(M||(M=ze`<div ?has-icon="${0}">${0}</div>`),""!==this.icon,this.label):null,this.noInk?null:ht(T||(T=ze`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.selected))}_handleMouseDownEvent(e){e.preventDefault(),this._handleDown()}_handleMouseUpEvent(e){e.preventDefault(),this._handleUp()}_handleTouchStartEvent(e){e.preventDefault(),this._handleDown()}_handleTouchEndEvent(e){e.preventDefault(),this._handleUp(),this.click()}_handleDown(){this.raised?this.toggle?(this.selected=!this.selected,this.selected?this.setAttribute("elevation",6):this.setAttribute("elevation",2)):this.setAttribute("elevation",6):this.toggle&&(this.selected=!this.selected)}_handleUp(){this.raised&&!this.toggle&&this.setAttribute("elevation",2)}});window.customElements.define("obap-top-app-bar",class extends It{static get styles(){return[Ot,vo,Pt(A||(A=ze`
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
        `))]}static get properties(){return{caption:{type:String,attribute:"caption"},elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.caption="",this.elevation=0}render(){return ht(L||(L=ze` 
            <div class="container">
                <div class="actions"><slot name="left"></slot></div>
                <div class="caption typography-subtitle">${0}</div>
                <div class="actions"><slot name="right"></slot></div>
            </div>
      `),this.caption)}});const fo=e=>class extends e{get selectedIndex(){return this._selectedIndex}set selectedIndex(e){const t=this.selectedIndex;(t!=e||this.toggles)&&(this._selectedIndex=e,this._changeSelection(this._selectedIndex,t),this.requestUpdate("selectedIndex",t))}get items(){return this._items}set items(e){throw'"items" is read only'}static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",hasChanged:(e,t)=>e!==t,reflect:!0},items:{type:Array},toggles:{type:Boolean,attribute:"toggles"},selectorType:{type:String,attribute:"selector-type"},enterSelects:{type:Boolean,attribute:"enter-selects"},selectedAttribute:{type:String,attribute:"selected-attribute"}}}constructor(){super(),this._boundHandleSelectionEvent=this._handleSelectionEvent.bind(this),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._boundHandleEnterEvent=this._handleEnterEvent.bind(this),this._selectedIndex=-1,this._selectable=!0,this._items=[],this._ctrl=!1,this.toggles=!1,this.enterSelects=!1,this.selectorType="single",this.selectedAttribute="selected"}updated(e){super.updated(e),e.forEach((e,t)=>{"disabled"===t&&e!==this.disabled&&this.items.forEach(e=>{e.disabled=this.disabled})})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._boundHandleSelectionEvent),this.addEventListener("keydown",this._boundHandleEnterEvent,{capture:!0}),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.removeEventListener("click",this._boundHandleSelectionEvent),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),this.removeEventListener("keydown",this._boundHandleEnterEvent),super.disconnectedCallback()}select(e){this.selectedIndex=e}indexOf(e){return this.items.indexOf(e)}_populateItems(){let e=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&!e.hasAttribute("no-select"));this.disabled&&e.forEach(e=>{e.disabled=this.disabled});const t=this._items;this._items=e,this._changeSelection(this.selectedIndex,-1),this.requestUpdate("items",t)}_handleSlotChangeEvent(e){this._populateItems()}_handleSelectionEvent(e){const t=this.items.indexOf(e.target);t>-1&&(this._ctrl=e.ctrlKey,this.select(t),this._ctrl=!1)}_handleEnterEvent(e){if("Enter"!==e.key||!this.enterSelects)return;const t=this.indexOf(e.target);t>-1&&!e.target.disabled&&this.select(t)}_deselectItem(e){if(-1===e)this.items.forEach(e=>e.removeAttribute(this.selectedAttribute));else{const t=this.items[e];t&&(t.removeAttribute(this.selectedAttribute),this._fireEvent("obap-item-deselected",{item:t,index:e},!1))}}_selectItem(e){const t=this.items[e];t&&(t.setAttribute(this.selectedAttribute,""),this._fireEvent("obap-item-selected",{item:t,index:e},!1))}_changeSelection(e,t){if(-1===e||0===this.items.length)return;if(e===t)return this._deselectItem(t),void(this._selectedIndex=-1);const o=this.items[e];this._fireEvent("obap-item-selecting",{newIndex:e,oldIndex:t,item:o},!0)?(this._deselectItem(t),this._selectItem(e),this._selectedIndex=e):this._selectedIndex=t}_fireEvent(e,t,o){const i=new CustomEvent(e,{bubbles:!0,composed:!0,cancelable:o,detail:t});return this.dispatchEvent(i)}};class wo extends(fo(It)){static get styles(){return Pt(H||(H=ze`
            :host {
                display: block;
            }

            :host > ::slotted(:not(slot):not([selected])) {
                display: none !important;
            }
        `))}render(){return ht(B||(B=ze`<slot></slot>`))}}window.customElements.define("obap-pages",wo);window.customElements.define("obap-scroll-container",class extends It{static get styles(){return[Pt($||($=ze`
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
        `))]}static get properties(){return{vertical:{type:Boolean,attribute:"vertical",reflect:!0},scrollSpeed:{type:Number,attribute:"scroll-speed"},itemStep:{type:Boolean,attribute:"item-step"},disableScrolling:{type:Boolean,attribute:"disable-scrolling"},hideButtons:{type:Boolean,attribute:"hide-buttons"},miniButtons:{type:Boolean,attribute:"mini-buttons"},_leftScrollButtonVisible:{type:Boolean},_rightScrollButtonVisible:{type:Boolean},_hasOverflow:{type:Boolean}}}constructor(){super(),this.vertical=!1,this.scrollSpeed=2,this.itemStep=!1,this.disableScrolling=!1,this.hideButtons=!1,this._scrolling=!1,this._scrollDirection="none",this._container=null,this._containerRect=null,this.miniButtons=!1,this._boundScroll=this._scroll.bind(this),this._holdDelay=1,this._holdJob=null,this._hasOverflow=!1,this._children=[],this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._resizeObserver=new ResizeObserver(e=>{this._setScrollInfo(),this._calculateButtonVisibility()})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this._resizeObserver.unobserve(this),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(e){super.updated(e),this._setScrollInfo(),this._calculateButtonVisibility()}render(){return ht(O||(O=ze`
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
        `),this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._leftScrollButtonVisible,this._getIconName(!0),this._scrollLeft,this._endScroll,this._scrollLeft,this._endScroll,this._onScroll,this.disableScrolling,this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._rightScrollButtonVisible,this._getIconName(!1),this._scrollRight,this._endScroll,this._scrollRight,this._endScroll)}_getIconName(e){return this.vertical?e?"core:chevron-up":"core:chevron-down":e?"core:chevron-left":"core:chevron-right"}_calculateButtonVisibility(){if(this.disableScrolling)return this._leftScrollButtonVisible=!1,void(this._rightScrollButtonVisible=!1);this.vertical?(this._leftScrollButtonVisible=this._container.scrollTop>0,this._rightScrollButtonVisible=this._container.scrollTop<this._container.scrollHeight-this._container.clientHeight-1,this._hasOverflow=this._container.scrollHeight>this._container.clientHeight):(this._leftScrollButtonVisible=this._container.scrollLeft>0,this._rightScrollButtonVisible=this._container.scrollLeft<this._container.scrollWidth-this._container.clientWidth-1,this._hasOverflow=this._container.scrollWidth>this._container.clientWidth)}_setScrollInfo(){this._container=this.renderRoot.getElementById("contentContainer"),this._containerRect=this._container.getBoundingClientRect()}_scrollLeft(e){this.disableScrolling||(this.itemStep?this._scrollToNextChild("left"):(this._startScroll("left"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_scrollRight(e){this.disableScrolling||(this.itemStep?this._scrollToNextChild("right"):(this._startScroll("right"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_startScroll(e){this._scrolling=!0,this._scrollDirection=e,this._scroll()}_endScroll(e){this._holdJob&&(clearInterval(this._holdJob),this._holdJob=null),this._scrolling=!1,this._scrollDirection="none"}_scrollToNextChild(e){const t=this._container.getBoundingClientRect(),o=this._children.filter(e=>{const o=e.getBoundingClientRect();return this.vertical?o.top<=t.bottom&&o.bottom>=t.top:o.left<=t.right&&o.right>=t.left});if(o.length>0){const t=o[0],i=getComputedStyle(t);if(this.vertical){let o=t.offsetHeight;o+=parseInt(i.marginTop)+parseInt(i.marginBottom),"left"===e?this._container.scrollTop-=o:this._container.scrollTop+=o}else{let o=t.offsetWidth;o+=parseInt(i.marginLeft)+parseInt(i.marginRight),"left"===e?this._container.scrollLeft-=o:this._container.scrollLeft+=o}this._calculateButtonVisibility()}}_scroll(){if(!this._scrolling)return;let e="left"===this._scrollDirection?-this.scrollSpeed:this.scrollSpeed,t=0,o=!1;this.vertical?(t=this._container.scrollTop+e,t>=0&&t<=this._container.scrollHeight-this._container.clientHeight&&(this._container.scrollTop=t,o=!0)):(t=this._container.scrollLeft+e,t>=0&&t<=this._container.scrollWidth-this._container.clientWidth&&(this._container.scrollLeft=t,o=!0)),o?this._calculateButtonVisibility():this._endScroll()}_onScroll(){this._calculateButtonVisibility()}_handleSlotChangeEvent(e){const t=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType);this._children=t,this.requestUpdate()}});window.customElements.define("obap-ripple",class extends It{static get styles(){return[Pt(F||(F=ze`
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
        `))]}static get properties(){return{extend:{type:Number,attribute:"extend",reflect:!0},active:{type:Boolean,attribute:"active",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.extend=0,this.active=!1,this.hasFocus=!1,this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleMouseLeaveEvent=this._handleMouseLeaveEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.noInk||(this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.addEventListener("touchstart",this._boundHandleMouseDownEvent),this.addEventListener("touchend",this._boundHandleMouseUpEvent))}disconnectedCallback(){this.noInk||(this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.removeEventListener("touchstart",this._boundHandleMouseDownEvent),this.removeEventListener("touchend",this._boundHandleMouseUpEvent)),super.disconnectedCallback()}_handleMouseDownEvent(e){this.noInk||(this.active=!0)}_handleMouseUpEvent(e){this.active=!1}_handleMouseLeaveEvent(e){this.active=!1}});window.customElements.define("obap-tab",class extends Jt{static get styles(){return Pt(U||(U=ze`
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
      `))}static get properties(){return{noInk:{type:Boolean,attribute:"no-ink",reflect:!0},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.role="tab",this.noInk=!1}render(){return ht(D||(D=ze`
            <div class="container">
                <slot></slot>
                ${0}
            </div>
        `),this.noInk?null:ht(j||(j=ze`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected))}});class _o extends(fo(It)){static get styles(){return[Ut,Pt(q||(q=ze`
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
        `))]}static get properties(){return{fill:{type:Boolean,attribute:"fill"},scroll:{type:Boolean,attribute:"scroll"},hideScrollButtons:{type:Boolean,attribute:"hide-scroll-buttons"}}}constructor(){super(),this.role="tablist",this.fill=!1,this.scroll=!1,this.hideScrollButtons=!1,this.enterSelects=!0}render(){return ht(W||(W=ze`
            <obap-scroll-container class="container typography-button" ?fill="${0}" ?disable-scrolling="${0}"
                                   ?hide-buttons="${0}" mini-buttons>
                <slot></slot>
            </obap-scroll-container>
        `),this.fill,!1===this.scroll,this.hideScrollButtons)}}window.customElements.define("obap-tabs",_o);window.customElements.define("obap-material",class extends It{static get styles(){return[vo,Pt(J||(J=ze`
            :host {
                display: block;
                box-sizing: border-box;
                background: var(--obap-surface-color, #FFFFFF);
                color: var(--obap-on-surface-color, rgba(black, 0.87));
            }
        `))]}static get properties(){return{elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.elevation=1}render(){return ht(G||(G=ze`<slot></slot>`))}});const xo=e=>class extends e{static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"}}}constructor(){super(),this.label="",this.name="",this._active=!1}get active(){return this._active}connectedCallback(){super.connectedCallback(),this.setAttribute("application-content",null)}_canActivate(){return!this.canActivate||this.canActivate()}_canDeactivate(){return!this.canDeactivate||this.canDeactivate()}_activate(){this._active||(this._active=!0,this.activate?this.activate():this._fireEvent("obap-view-activate"))}_deactivate(){this._active&&(this.deactivate?this.deactivate():this._fireEvent("obap-view-deactivate"),this._active=!1)}_fireEvent(e){let t=new CustomEvent(e,{bubbles:!1,composed:!1});this.dispatchEvent(t)}};class So extends(xo(It)){static get styles(){return[Pt(K||(K=ze`
            :host {
                display: block;
                height: 100%;
            }

            .container {
                height: 100%;
            }
        `))]}render(){return ht(Q||(Q=ze`
            <div class="container">
                <slot></slot>
            </div>
        `))}}window.customElements.define("obap-application-content",So);window.customElements.define("obap-application-view",class extends It{static get styles(){return[Ft,Pt(X||(X=ze`
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
            }

            .container {
                display: flex;
                flex-direction: column;
                flex: 1;
                height: 100%;
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
        `))]}static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},badgeIcon:{type:String,attribute:"badge-icon"},badgeLabel:{type:String,attribute:"badge-label"},modal:{type:Boolean,attribute:"modal"},default:{type:Boolean,attribute:"default"},subViews:{type:Array},selectedSubViewIndex:{type:Number},navigators:{type:Array,attribute:"navigators",converter:{toAttribute:e=>e.join(","),fromAttribute:e=>e.split(",")}},associations:{type:Array,attribute:"associations",converter:{toAttribute:e=>e.join(","),fromAttribute:e=>e.split(",")}},hasSideViews:{type:Boolean,attribute:"has-side-views",reflect:!0},hideSubViewScrollButtons:{type:Boolean,attribute:"hide-sub-view-scroll-buttons"}}}constructor(){super(),this._active=!1,this._slotUpdated=!1,this.name="",this.label="untitled",this.icon="",this.badgeIcon="",this.badgeLabel="",this.modal=!1,this.default=!1,this.selectedSubViewIndex=0,this.subViews=[],this.navigators=[],this.associations=[],this.hasSideViews=!1,this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}notifyViewActivate(){this._active=!0,this.subViews.forEach(e=>{e._activate&&e._activate()})}notifyViewDeactivate(){this._active&&(this._active=!1,this.subViews.forEach(e=>{e._deactivate&&e._deactivate()}))}canViewActivate(){let e=!0;return this.subViews.forEach(t=>{t._canActivate&&(t._canActivate()||(e=!1))}),e}canViewDeactivate(){let e=!0;return this.subViews.forEach(t=>{t._canDeactivate&&(t._canDeactivate()||(e=!1))}),e}render(){return ht(Y||(Y=ze`
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
        `),this._getSubViewNavigator(),this.selectedSubViewIndex)}_getSubViewNavigator(){return this.subViews.length>1?ht(Z||(Z=ze`
                <obap-material class="sub-view-navigator" elevation="1">
                    <obap-tabs scroll ?hide-scroll-buttons="${0}" selected-index="${0}" @obap-item-selected="${0}">
                        ${0}
                    </obap-tabs>
                </obap-material>
            `),this.hideSubViewScrollButtons,this.selectedSubViewIndex,this._handleSubViewSelect,this.subViews.map(e=>ht(ee||(ee=ze`<obap-tab sub-view-name="${0}">${0}</obap-tab>`),e.name,e.label))):null}_handleSubViewSelect(e){this.selectedSubViewIndex=e.detail.index}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot"),o=this.renderRoot.querySelector('slot[name="side"]');if(o){const e=o.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&e.hasAttribute("application-content")).length;this.hasSideViews=e>0}if(!t)return;let i=t.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&e.hasAttribute("application-content"));this.subViews.length!==i.length&&(this.subViews=i),null===this.selectedSubViewIndex&&this.subViews&&this.subViews.length>0&&(this.selectedSubViewIndex=0),this._active&&this.notifyViewActivate(),this.requestUpdate()}_fireEvent(e,t){let o=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(o)}});class Eo extends(Lt(It)){static get styles(){return[Ft,Pt(te||(te=ze`
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
                margin-top: 8px;
                box-sizing: border-box;
                overflow-y: auto;
            }

            .view-pages {
                height: 100%;
                overflow: hidden;
                /*padding: 8px 8px 8px 8px;*/
                box-sizing: border-box;
            }

            .navigator-item {
                display: flex;
                align-items: center;
                margin: 0 8px 8px 8px;
                padding: 8px;
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
        `))]}static get properties(){return{_navigatorIndex:{type:Number}}}constructor(){super(),this._navigatorIndex=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.forEach((e,t)=>{})}render(){return ht(oe||(oe=ze`
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
            </div>`),this.getEffectiveDisplayTitle(),this._getToolBarIcon(this.icon),this._navigatorIndex,this._renderNavigator(),this.selectedViewIndex)}_renderNavigator(){return ht(ie||(ie=ze`
            <div>
                ${0}
            </div>`),this.views.map((e,t)=>ht(se||(se=ze`
                    <obap-material elevation="1" class="navigator-item" index="${0}" @click="${0}">
                        ${0}
                        <div class="navigator-label typography-body">${0}</div>
                    </obap-material>
                `),t,this._navigatorClick,e.icon?ht(ne||(ne=ze`<obap-icon class="navigator-icon" icon="${0}"></obap-icon>`),e.icon):null,e.label)))}_getToolBarIcon(e){return this._navigatorIndex>0?ht(ae||(ae=ze`<obap-button round slot="left" icon="core:arrow-left" @click="${0}"></obap-button>`),e=>this._navigatorIndex=0):e?ht(re||(re=ze`<obap-icon class="app-icon" slot="left" icon="${0}"></obap-icon>`),e):null}_navigatorClick(e){const t=e.target.getAttribute("index");null!==t&&(this.selectedViewIndex=t,this._navigatorIndex=1)}getEffectiveDisplayTitle(){return 0===this._navigatorIndex?this.label:this.getSelectedView().label}}window.customElements.define("obap-mobile-application",Eo),mo.addGroup("app",'\n    <defs>\n        <g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"/></g>\n        <g id="styles"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"/></g>\n        <g id="charts"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></g>\n        <g id="data-tables"><path d="M22,2H2v20h20V2L22,2z M4,8V4h16v4H4L4,8z M4,14v-4h16v4H4L4,14z M4,20v-4h16v4H4L4,20z"/></g>\n        <g id="tooltips-callouts"><path d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/></g>\n        <g id="selection"><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></g>\n        <g id="progress-indicators"><path d="M15.1,19.37l1,1.74c-0.96,0.44-2.01,0.73-3.1,0.84v-2.02C13.74,19.84,14.44,19.65,15.1,19.37z M4.07,13H2.05 c0.11,1.1,0.4,2.14,0.84,3.1l1.74-1C4.35,14.44,4.16,13.74,4.07,13z M15.1,4.63l1-1.74C15.14,2.45,14.1,2.16,13,2.05v2.02 C13.74,4.16,14.44,4.35,15.1,4.63z M19.93,11h2.02c-0.11-1.1-0.4-2.14-0.84-3.1l-1.74,1C19.65,9.56,19.84,10.26,19.93,11z M8.9,19.37l-1,1.74c0.96,0.44,2.01,0.73,3.1,0.84v-2.02C10.26,19.84,9.56,19.65,8.9,19.37z M11,4.07V2.05 c-1.1,0.11-2.14,0.4-3.1,0.84l1,1.74C9.56,4.35,10.26,4.16,11,4.07z M18.36,7.17l1.74-1.01c-0.63-0.87-1.4-1.64-2.27-2.27 l-1.01,1.74C17.41,6.08,17.92,6.59,18.36,7.17z M4.63,8.9l-1.74-1C2.45,8.86,2.16,9.9,2.05,11h2.02C4.16,10.26,4.35,9.56,4.63,8.9z M19.93,13c-0.09,0.74-0.28,1.44-0.56,2.1l1.74,1c0.44-0.96,0.73-2.01,0.84-3.1H19.93z M16.83,18.36l1.01,1.74 c0.87-0.63,1.64-1.4,2.27-2.27l-1.74-1.01C17.92,17.41,17.41,17.92,16.83,18.36z M7.17,5.64L6.17,3.89 C5.29,4.53,4.53,5.29,3.9,6.17l1.74,1.01C6.08,6.59,6.59,6.08,7.17,5.64z M5.64,16.83L3.9,17.83c0.63,0.87,1.4,1.64,2.27,2.27 l1.01-1.74C6.59,17.92,6.08,17.41,5.64,16.83z M13,7h-2v5.41l4.29,4.29l1.41-1.41L13,11.59V7z"/></g>\n        <g id="tabs"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/></g>\n        <g id="dialogs"><path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M17,12H7v-2 h10V12z M13,16H7v-2h6V16z"/></g>\n        <g id="cards"><path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/></g>\n        <g id="buttons"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></g>\n        <g id="chips"><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></g>\n\n\n    </defs>\n');window.customElements.define("demo-styles-elevation",class extends It{static get styles(){return[bo,Ft,Pt(le||(le=ze`
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
                padding: 8px;
                box-sizing: border-box;
            }

            .item-container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: 60px 60px 60px;
                grid-gap: 16px;
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
        `))]}static get properties(){return{items:{type:Array}}}constructor(){super(),this.items=[0,1,2,3,4,6,8,12,16,24]}render(){return ht(ce||(ce=ze`
            <div class="container">
                <div class="item-container">
                    ${0}
                </div>
            </div>
        `),this.items.map(e=>ht(de||(de=ze`<div class="item elevation-${0} typography-body">${0}</div>`),e,e)))}});window.customElements.define("demo-styles-iconography",class extends It{static get styles(){return[Pt(pe||(pe=ze`
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
                padding: 8px;
                box-sizing: border-box;
            }

            .inner-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(32px, 1fr) );
                grid-gap: 16px;
                justify-items: center;
            }

            obap-icon {
                --obap-icon-fill-color: var(--obap-accent-color);
            }
        `))]}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.forEach((e,t)=>{})}render(){return ht(he||(he=ze`
            <div class="container">
                <div class="inner-container">
                    ${0}

                    ${0}
                </div>
            </div>
        `),yo("core").map(e=>ht(ue||(ue=ze`
                        <obap-icon icon="${0}" title="${0}"></obap-icon>
                    `),e,e)),yo("app").map(e=>ht(be||(be=ze`
                        <obap-icon icon="${0}" title="${0}"></obap-icon>
                    `),e,e)))}});window.customElements.define("obap-radio",class extends Jt{static get styles(){return[Ft,Pt(ve||(ve=ze`
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
        `))]}static get properties(){return{label:{type:String,attribute:"label"},selected:{type:Boolean,attribute:"selected",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.selected=!1,this.indeterminate=!1,this.noInk=!1,this.role="radio"}render(){return ht(ge||(ge=ze`
            <div class="container typography-body">
                <div class="check-container">
                    ${0}
                    ${0}
                </div>
                ${0}
            </div>
        `),this._getCheck(),this.noInk?null:ht(me||(me=ze`<obap-ripple extend="1" ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected),this.label)}_getCheck(){return this.selected?ut(ye||(ye=ze`<svg class="check" viewBox="0 0 24 24"><g><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></g></svg>`)):ut(fe||(fe=ze`<svg class="check" viewBox="0 0 24 24"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></g></svg>`))}});class Co extends(fo(It)){static get styles(){return Pt(we||(we=ze`
            :host {
                display: block;
            }

            :host[hidden] {
                display: none;
            }
        `))}constructor(){super(),this.role="radiogroup",this.enterSelects=!0}render(){return ht(_e||(_e=ze`<slot></slot>`))}}customElements.define("obap-radio-group",Co);class ko extends(Mt(It)){static get styles(){return[bo,Dt,Ft,Pt(xe||(xe=ze`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-radio-group {
                margin: 8px 0;
            }

            obap-radio {
                margin-right: 16px;
            }

            .container {
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
            }

            .items {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 16px;
                justify-items: stretch;
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

        `))]}static get properties(){return{themes:{type:Array},selectedThemeIndex:{type:Number}}}constructor(){super(),this.themes=this.getThemeNames(),this.selectedThemeIndex=0}render(){return ht(Se||(Se=ze`
            <div class="container">
                <obap-radio-group selected-index="${0}" @obap-item-selected="${0}">
                    ${0}
                </obap-radio-group>

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
            </div>
        `),this.selectedThemeIndex,this._themeSelected,this.themes.map(e=>ht(Ee||(Ee=ze`<obap-radio label="${0}"></obap-radio>`),e)))}_themeSelected(e){this.setGlobalTheme(e.detail.item.label)}}window.customElements.define("demo-styles-theming",ko);window.customElements.define("demo-styles-typography",class extends It{static get styles(){return[Wt,Pt(Ce||(Ce=ze`
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
                padding: 16px;
                box-sizing: border-box;
            }
        `))]}static get properties(){return{}}constructor(){super()}render(){return ht(ke||(ke=ze`
            <div class="container">
                <div class="typography-display">Display</div>
                <div class="typography-headline">Headline</div>
                <div class="typography-title">Title</div>
                <div class="typography-subtitle">Subtitle</div>
                <div class="typography-body">Body</div>
                <div class="typography-button">Button</div>
                <div class="typography-caption">Caption</div>
                <div class="typography-overline">Overline</div>
                <div class="typography-code">Code</div>
            </div>
        `))}});class Po extends(Mt(It)){static get styles(){return[Pt(Pe||(Pe=ze`
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
                height: 100%;
            }
        `))]}constructor(){super(),Rt.create("green","#80e27e","#4caf50","#087f23","#ffc107","#FAFAFA"),Rt.apply("default")}render(){return ht(Ve||(Ve=ze`
            <obap-mobile-application label="OBAP Elements" icon="app:polymer">
                <obap-application-view name="styles" label="Styles" icon="app:styles" hide-sub-view-scroll-buttons>
                    <obap-application-content name="elevation" label="Elevation"><demo-styles-elevation class="demo"></demo-styles-elevation></obap-application-content>
                    <obap-application-content name="iconography" label="Iconography"><demo-styles-iconography class="demo"></demo-styles-iconography></obap-application-content>
                    <obap-application-content name="theming" label="Theming"><demo-styles-theming class="demo"></demo-styles-theming></obap-application-content>
                    <obap-application-content name="typography" label="Typography"><demo-styles-typography class="demo"></demo-styles-typography></obap-application-content>
                </obap-application-view>

                <obap-application-view name="buttons" label="Buttons" icon="app:buttons" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Buttons</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="cards" label="Cards" icon="app:cards" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Cards</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="charts" label="Charts" icon="app:charts" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Charts</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="chips" label="Chips" icon="app:chips" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Chips</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="data-tables" label="Data Tables" icon="app:data-tables" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Data Tables</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="dialogs" label="Dialogs" icon="app:dialogs" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Dialogs</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="progress-indicators" label="Progress Indicators" icon="app:progress-indicators" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Progress Indicators</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="selection" label="Selection Controls" icon="app:selection" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Selection Controls</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="tabs" label="Tabs" icon="app:tabs" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Tabs</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="tooltips-callouts" label="Tooltips & Callouts" icon="app:tooltips-callouts" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Tooltips & Callouts</div></obap-application-content>
                </obap-application-view>
            </obap-mobile-application>
        `))}}window.customElements.define("demo-mobile-app",Po);
