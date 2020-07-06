let t,e,o,i,n,s,a,r,l,c,d,p,h,b,u,g,v,m,y,_,f,w,x,E,S,k,C,P,V,z,I,N,A,R,M,T,H,L,B,$,F,O,D,U,j,q,W,G,J,K,Q,X,Y,Z,tt,et,ot,it,nt,st,at,rt,lt,ct,dt,pt,ht,bt,ut,gt,vt,mt,yt,_t,ft,wt,xt,Et,St,kt,Ct,Pt,Vt,zt,It,Nt,At,Rt,Mt,Tt,Ht,Lt,Bt,$t,Ft,Ot,Dt,Ut,jt,qt=t=>t;const Wt="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Gt=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},Jt=`{{lit-${String(Math.random()).slice(2)}}}`,Kt=`\x3c!--${Jt}--\x3e`,Qt=new RegExp(`${Jt}|${Kt}`);class Xt{constructor(t,e){this.parts=[],this.element=e;const o=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let s=0,a=-1,r=0;const{strings:l,values:{length:c}}=t;for(;r<c;){const t=n.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let i=0;for(let t=0;t<o;t++)Yt(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=l[r],o=ee.exec(e)[2],i=o.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const s=n.split(Qt);this.parts.push({type:"attribute",index:a,name:o,strings:s}),r+=s.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(Jt)>=0){const i=t.parentNode,n=e.split(Qt),s=n.length-1;for(let e=0;e<s;e++){let o,s=n[e];if(""===s)o=te();else{const t=ee.exec(s);null!==t&&Yt(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),o=document.createTextNode(s)}i.insertBefore(o,t),this.parts.push({type:"node",index:++a})}""===n[s]?(i.insertBefore(te(),t),o.push(t)):t.data=n[s],r+=s}}else if(8===t.nodeType)if(t.data===Jt){const e=t.parentNode;null!==t.previousSibling&&a!==s||(a++,e.insertBefore(te(),t)),s=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(o.push(t),a--),r++}else{let e=-1;for(;-1!==(e=t.data.indexOf(Jt,e+1));)this.parts.push({type:"node",index:-1}),r++}}else n.currentNode=i.pop()}for(const t of o)t.parentNode.removeChild(t)}}const Yt=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},Zt=t=>-1!==t.index,te=()=>document.createComment(""),ee=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function oe(t,e){const{element:{content:o},parts:i}=t,n=document.createTreeWalker(o,133,null,!1);let s=ne(i),a=i[s],r=-1,l=0;const c=[];let d=null;for(;n.nextNode();){r++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==a&&a.index===r;)a.index=null!==d?-1:a.index-l,s=ne(i,s),a=i[s]}c.forEach(t=>t.parentNode.removeChild(t))}const ie=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},ne=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(Zt(e))return o}return-1};const se=new WeakMap,ae=t=>"function"==typeof t&&se.has(t),re={},le={};class ce{constructor(t,e,o){this.__parts=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.__parts)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=Wt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],o=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,s=0,a=0,r=i.nextNode();for(;s<o.length;)if(n=o[s],Zt(n)){for(;a<n.index;)a++,"TEMPLATE"===r.nodeName&&(e.push(r),i.currentNode=r.content),null===(r=i.nextNode())&&(i.currentNode=e.pop(),r=i.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(r,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return Wt&&(document.adoptNode(t),customElements.upgrade(t)),t}}const de=` ${Jt} `;class pe{constructor(t,e,o,i){this.strings=t,this.values=e,this.type=o,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");o=(n>-1||o)&&-1===t.indexOf("--\x3e",n+1);const s=ee.exec(t);e+=null===s?t+(o?de:Kt):t.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+Jt}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class he extends pe{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,o=e.firstChild;return e.removeChild(o),((t,e,o=null,i=null)=>{for(;e!==o;){const o=e.nextSibling;t.insertBefore(e,i),e=o}})(e,o.firstChild),t}}const be=t=>null===t||!("object"==typeof t||"function"==typeof t),ue=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class ge{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new ve(this)}_getValue(){const t=this.strings,e=t.length-1;let o="";for(let i=0;i<e;i++){o+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(be(t)||!ue(t))o+="string"==typeof t?t:String(t);else for(const e of t)o+="string"==typeof e?e:String(e)}}return o+=t[e],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ve{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===re||be(t)&&t===this.value||(this.value=t,ae(t)||(this.committer.dirty=!0))}commit(){for(;ae(this.value);){const t=this.value;this.value=re,t(this)}this.value!==re&&this.committer.commit()}}class me{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(te()),this.endNode=t.appendChild(te())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=te()),t.__insert(this.endNode=te())}insertAfterPart(t){t.__insert(this.startNode=te()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;ae(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=re,t(this)}const t=this.__pendingValue;t!==re&&(be(t)?t!==this.value&&this.__commitText(t):t instanceof pe?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):ue(t)?this.__commitIterable(t):t===le?(this.value=le,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof ce&&this.value.template===e)this.value.update(t.values);else{const o=new ce(e,t.processor,this.options),i=o._clone();o.update(t.values),this.__commitNode(i),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,i=0;for(const n of t)o=e[i],void 0===o&&(o=new me(this.options),e.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(e[i-1])),o.setValue(n),o.commit(),i++;i<e.length&&(e.length=i,this.clear(o&&o.endNode))}clear(t=this.startNode){Gt(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ye{constructor(t,e,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;ae(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=re,t(this)}if(this.__pendingValue===re)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=re}}class _e extends ge{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new fe(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class fe extends ve{}let we=!1;(()=>{try{const t={get capture(){return we=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class xe{constructor(t,e,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;ae(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=re,t(this)}if(this.__pendingValue===re)return;const t=this.__pendingValue,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Ee(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=re}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Ee=t=>t&&(we?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function Se(t){let e=ke.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},ke.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Jt);return o=e.keyString.get(i),void 0===o&&(o=new Xt(t,t.getTemplateElement()),e.keyString.set(i,o)),e.stringsArray.set(t.strings,o),o}const ke=new Map,Ce=new WeakMap;const Pe=new class{handleAttributeExpressions(t,e,o,i){const n=e[0];if("."===n){return new _e(t,e.slice(1),o).parts}return"@"===n?[new xe(t,e.slice(1),i.eventContext)]:"?"===n?[new ye(t,e.slice(1),o)]:new ge(t,e,o).parts}handleTextExpression(t){return new me(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Ve=(t,...e)=>new pe(t,e,"html",Pe),ze=(t,...e)=>new he(t,e,"svg",Pe),Ie=(t,e)=>`${t}--${e}`;let Ne=!0;void 0===window.ShadyCSS?Ne=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ne=!1);const Ae=t=>e=>{const o=Ie(e.type,t);let i=ke.get(o);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},ke.set(o,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(Jt);if(n=i.keyString.get(s),void 0===n){const o=e.getTemplateElement();Ne&&window.ShadyCSS.prepareTemplateDom(o,t),n=new Xt(e,o),i.keyString.set(s,n)}return i.stringsArray.set(e.strings,n),n},Re=["html","svg"],Me=new Set,Te=(t,e,o)=>{Me.add(t);const i=o?o.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:s}=n;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,t);const a=document.createElement("style");for(let t=0;t<s;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{Re.forEach(e=>{const o=ke.get(Ie(e,t));void 0!==o&&o.keyString.forEach(t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{o.add(t)}),oe(t,o)})})})(t);const r=i.content;o?function(t,e,o=null){const{element:{content:i},parts:n}=t;if(null==o)return void i.appendChild(e);const s=document.createTreeWalker(i,133,null,!1);let a=ne(n),r=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===o&&(r=ie(e),o.parentNode.insertBefore(e,o));-1!==a&&n[a].index===l;){if(r>0){for(;-1!==a;)n[a].index+=r,a=ne(n,a);return}a=ne(n,a)}}}(o,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(o){r.insertBefore(a,r.firstChild);const t=new Set;t.add(a),oe(o,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const He={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Le=(t,e)=>e!==t&&(e==e||t==t),Be={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:Le};class $e extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,o)=>{const i=this._attributeNameForProperty(o,e);void 0!==i&&(this._attributeToPropertyMap.set(i,o),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Be){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(o){const i=this[t];this[e]=o,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Be}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=Le){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,i=e.converter||He,n="function"==typeof i?i:i.fromAttribute;return n?n(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,i=e.converter;return(i&&i.toAttribute||He.toAttribute)(t,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=Be){const i=this.constructor,n=i._attributeNameForProperty(t,o);if(void 0!==n){const t=i._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(t);if(void 0!==i){const t=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let o=!0;if(void 0!==t){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}$e.finalized=!0;const Fe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol();class De{constructor(t,e){if(e!==Oe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Fe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ue=(t,...e)=>{const o=e.reduce((e,o,i)=>e+(t=>{if(t instanceof De)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1],t[0]);return new De(o,Oe)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const je={};class qe extends $e{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,o)=>t.reduceRight((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t),o),o=e(t,new Set),i=[];o.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Fe?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==je&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return je}}qe.finalized=!0,qe.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const i=o.scopeName,n=Ce.has(e),s=Ne&&11===e.nodeType&&!!e.host,a=s&&!Me.has(i),r=a?document.createDocumentFragment():e;if(((t,e,o)=>{let i=Ce.get(e);void 0===i&&(Gt(e,e.firstChild),Ce.set(e,i=new me(Object.assign({templateFactory:Se},o))),i.appendInto(e)),i.setValue(t),i.commit()})(t,r,Object.assign({templateFactory:Ae(i)},o)),a){const t=Ce.get(r);Ce.delete(r);const o=t.value instanceof ce?t.value.template:void 0;Te(i,r,o),Gt(e,e.firstChild),e.appendChild(r),Ce.set(e,t)}!n&&s&&window.ShadyCSS.styleElement(e.host)};class We extends qe{get disabled(){return this._disabled}set disabled(t){const e=this.disabled;t!==e&&(this._disabled=t,t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false"),this.requestUpdate("disabled",e))}static get properties(){return{disabled:{type:Boolean,attribute:"disabled",reflect:!0},role:{type:String,attribute:"role",reflect:!0}}}constructor(){super(),this._disabled=!1,this.role=null}getCssVariableValue(t,e,o){let i=t.getPropertyValue(e);return i||o}}class Ge{constructor(t,e,o,i,n,s){this.name=t,this.primary=o,this.primaryLight=e,this.primaryDark=i,this.accent=n,this.window=s}}const Je=new class{constructor(){this.__themes={},this.create("default","#8e99f3","#5c6bc0","#26418f","#ec407a","#E0E0E0");let t=document.documentElement;t.style.setProperty("-webkit-tap-highlight-color","transparent"),t.style.setProperty("--obap-background-color","#FFFFFF"),t.style.setProperty("--obap-surface-color","#FFFFFF"),t.style.setProperty("--obap-error-color","#e53935"),t.style.setProperty("--obap-notification-color","#323232"),t.style.setProperty("--obap-selection-color","#E0E0E0"),t.style.setProperty("--obap-block-color","#ECECEC"),t.style.setProperty("--obap-inactive-color","#9E9E9E"),t.style.setProperty("--obap-on-primary-color","#FFFFFF"),t.style.setProperty("--obap-on-primary-inactive-color","rgba(255, 255, 255, 0.7)"),t.style.setProperty("--obap-on-accent-color","#FFFFFF"),t.style.setProperty("--obap-on-accent-inactive-color","rgba(255, 255, 255, 0.7)"),t.style.setProperty("--obap-on-background-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-on-surface-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-on-window-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-on-error-color","#FFFFFF"),t.style.setProperty("--obap-on-notification-color","rgba(255, 255, 255, 0.87)"),t.style.setProperty("--obap-on-selection-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-text-primary-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-text-secondary-color","rgba(0, 0, 0, 0.54)"),t.style.setProperty("--obap-text-hint-color","rgba(0, 0, 0, 0.38)"),t.style.setProperty("--obap-text-disabled-color","rgba(0, 0, 0, 0.38)"),t.style.setProperty("--obap-text-icon-color","rgba(0, 0, 0, 0.38)"),t.style.setProperty("--obap-divider-on-primary-color","rgba(255, 255, 255, 0.20)"),t.style.setProperty("--obap-divider-on-surface-color","rgba(0, 0, 0, 0.20)")}apply(t,e){let o=this.__themes[t];return e=e||document.documentElement,!!o&&(e.style.setProperty("--obap-primary-light-color",o.primaryLight),e.style.setProperty("--obap-primary-color",o.primary),e.style.setProperty("--obap-primary-dark-color",o.primaryDark),e.style.setProperty("--obap-accent-color",o.accent),o.window?e.style.setProperty("--obap-window-color",o.window):e.style.setProperty("--obap-window-color","#FAFAFA"),!0)}clear(t,e){if(e=e||!1,(t=t||document.documentElement).style.removeProperty("--obap-primary-light-color"),t.style.removeProperty("--obap-primary-color"),t.style.removeProperty("--obap-primary-dark-color"),t.style.removeProperty("--obap-accent-color"),t.style.removeProperty("--obap-window-color"),e){let t=document.documentElement;t.style.removeProperty("--obap-background-color"),t.style.removeProperty("--obap-surface-color"),t.style.removeProperty("--obap-error-color"),t.style.removeProperty("--obap-notification-color"),t.style.removeProperty("--obap-selection-color"),t.style.removeProperty("--obap-block-color"),t.style.removeProperty("--obap-inactive-color"),t.style.removeProperty("--obap-on-primary-color"),t.style.removeProperty("--obap-on-primary-inactive-color"),t.style.removeProperty("--obap-on-accent-color"),t.style.removeProperty("--obap-on-accent-inactive-color"),t.style.removeProperty("--obap-on-background-color"),t.style.removeProperty("--obap-on-surface-color"),t.style.removeProperty("--obap-on-window-color"),t.style.removeProperty("--obap-on-error-color"),t.style.removeProperty("--obap-on-notification-color"),t.style.removeProperty("--obap-on-selection-color"),t.style.removeProperty("--obap-text-primary-color"),t.style.removeProperty("--obap-text-secondary-color"),t.style.removeProperty("--obap-text-hint-color"),t.style.removeProperty("--obap-text-disabled-color"),t.style.removeProperty("--obap-text-icon-color"),t.style.removeProperty("--obap-divider-on-primary-color"),t.style.removeProperty("--obap-divider-on-surface-color")}}create(t,e,o,i,n,s){this.__themes[t]=new Ge(t,e,o,i,n,s)}getNames(){return Object.getOwnPropertyNames(this.__themes)}hasTheme(t){return this.getNames().indexOf(t)>-1}},Ke=t=>class extends t{get theme(){return this._theme}set theme(t){const e=this.theme;if(t!==e){if(this._theme=t,this.shadowRoot){const t=this.shadowRoot.host;this.theme&&this.hasTheme(this.theme)?Je.apply(this.theme,t):(this._theme=null,Je.clear(t,!1))}else this._theme=null;this.requestUpdate("theme",e)}}static get properties(){return{theme:{type:String,attribute:"theme"}}}constructor(){super(),this._theme=null}setGlobalTheme(t){Je.apply(t)}getThemeNames(){return Je.getNames()}hasTheme(t){return Je.hasTheme(t)}};window.ObapRouter=window.ObapRouter||{},window.ObapRouter.launchParameters=window.ObapRouter.launchParameters||null;class Qe{constructor(t,e,o){this.name=t,this.pattern=e,this.isDefault=o||!1}}const Xe=t=>class extends t{static get properties(){return{routes:{type:Object}}}get currentRoute(){return this._currentRoute}set currentRoute(t){(this.currentRoute?this.currentRoute.name:"")!==(t?t.name:"")&&(this._currentRoute=t,this._popping||history.pushState(this._currentParameters,"",this._buildUrl()))}constructor(){super(),this.routes={},this._defaultRouteName=null,this._path=null,this._currentRoute=null,window.ObapRouter.launchParameters=null,this._boundHandleOnPopStateEvent=this._handleOnPopStateEvent.bind(this),this._boundHandleChangeRouteEvent=this._handleChangeRouteEvent.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this._boundHandleOnPopStateEvent),window.addEventListener("obap-change-route",this._boundHandleChangeRouteEvent)}disconnectedCallback(){window.removeEventListener("popstate",this._boundHandleOnPopStateEvent),window.removeEventListener("obap-change-route",this._boundHandleChangeRouteEvent),super.disconnectedCallback()}registerRoute(t){this.routes[t.name]=t,t.isDefault&&(this._defaultRouteName=t.name)}registerRoutes(t){t.forEach(t=>this.registerRoute(t))}setDefaultRoute(t){let e=this.getRoute(t);e&&(e.isDefault=!0,this._defaultRouteName=t)}unregisterRoute(t){delete this.routes[t]}getRoute(t){return this.routes[t]}navigateBack(){history.back()}navigateForward(){history.forward()}navigateToDefault(t){if(0!==this._getRouteCount())if(t){const t=this._getRouteFromUrl();this.setCurrentRoute(t.name)}else this._defaultRouteName&&this.setCurrentRoute(this._defaultRouteName)}setCurrentRoute(t){if(this.currentRoute&&this.currentRoute.name===t)return;let e=this.getRoute(t);e&&(this.currentRoute=e,this.onRouteChange&&this.onRouteChange(t))}_fireEvent(t,e){let o=new CustomEvent(t,{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(o)}_getRouteCount(){return Object.keys(this.routes).length}_mapRoute(t){if(t&&""===t.name){const e=Object.keys(this.routes);for(let o=0;o<e.length;o++){const i=this.routes[e[o]];if(i&&(i.pattern===t.pattern||""===t.pattern&&i.isDefault))return i}}return t}_setRouteFromUrl(){let t=location.hash.replace("#",""),e={};location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(t,o,i)=>e[o]=i),this._path=location.pathname;let o=new Qe("",t);null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=e),this.currentRoute=this._mapRoute(o)}_getRouteFromUrl(){let t={},e=location.hash.replace("#","");return location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(e,o,i)=>t[o]=i),this._path=location.pathname,null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=t),this._mapRoute(new Qe("",e))}_handleOnPopStateEvent(t){const e=this._getRouteFromUrl();e&&(this._popping=!0,this.setCurrentRoute(e.name),this._popping=!1)}_handleChangeRouteEvent(t){const e=t.detail.routeName;this.setCurrentRoute(e)}_buildUrl(){let t=location.origin+location.pathname;if(this.currentRoute&&this.currentRoute.name){if(window.ObapRouter.launchParameters){const e=Object.keys(window.ObapRouter.launchParameters),o=[];if(e&&e.length>0){for(let t=0;t<e.length;t++){const i=e[t];o.push(`${i}=${window.ObapRouter.launchParameters[i]}`)}t+="?"+o.join("&")}}this.currentRoute.isDefault||(t+="#"+this.currentRoute.pattern)}return t}},Ye=t=>class extends(Xe(Ke(t))){static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},views:{type:Array},canChangeView:{type:Boolean}}}get selectedViewIndex(){return this._selectedViewIndex}set selectedViewIndex(t){const e=this.selectedViewIndex;if(e!==t){this._selectedViewIndex=t,this._previousViewIndex=e;const o=this.getSelectedView();o&&this.setCurrentRoute(o.name,null),this.requestUpdate("selectedViewIndex",e)}}constructor(){super(),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.views=[],this.label="untitled",this.icon="",this.defaultViewName=null,this._selectedViewIndex=null,this._previousViewIndex=null,this._navigatorCounts={}}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(t){super.updated(t),t.forEach((t,e)=>{"views"===e&&this._registerViews()})}findView(t){return this.views.find(e=>e.name===t)}showView(t){const e=this.findView(t);e&&(this.selectedViewIndex=this.views.indexOf(e))}canViewActivate(t){let e=null;return e=t?this.findView(t):this.views[this.selectedViewIndex],!e||e.canViewActivate()}canViewDeactivate(t){let e=null;return e=t?this.findView(t):this.views[this.selectedViewIndex],!e||e.canViewDeactivate()}showPreviousView(){let t=parseInt(this._previousViewIndex);t>=0?(this.selectedViewIndex=t,this._previousViewIndex=null):this.defaultViewName&&this.showView(this.defaultViewName)}getSelectedView(){let t=parseInt(this.selectedViewIndex);return t>=0?this.views[t]:null}getNavigatorViews(t){let e=this.views[this.selectedViewIndex];return e?this.views.filter(o=>o.navigators.indexOf(t)>-1&&(0===o.associations.length||o.associations.indexOf(e.name)>-1)):[]}getEffectiveDisplayTitle(){let t=this.getSelectedView();return t&&t.modal?t.label:this.label}isModalView(){let t=this.getSelectedView();return!(!t||!t.modal)}navigatorViewCount(t){return void 0!==this._navigatorCounts[t]?this._navigatorCounts[t]:0}onRouteChange(t){this.showView(t)}_handleSlotChangeEvent(t){let e=this.renderRoot.querySelector("slot");if(!e)return;let o=e.assignedNodes({flatten:!0}).filter(t=>1===t.nodeType&&"OBAP-APPLICATION-VIEW"===t.tagName);this.views.length!==o.length&&(this.views=o),this.views.forEach(t=>{t.navigators.forEach(t=>{void 0===this._navigatorCounts[t]&&(this._navigatorCounts[t]=0),this._navigatorCounts[t]++})}),this.requestUpdate()}_registerViews(){let t=!1;this.views.forEach(e=>{e.default&&(t=!0,this.defaultViewName=e.name),this.registerRoute(new Qe(e.name,e.name,e.default))}),!t&&this.views.length>0&&(this.defaultViewName=this.views[0].name,this.setDefaultRoute(this.defaultViewName)),this.navigateToDefault(!0)}},Ze=Ue(t||(t=qt`.typography-display{font-size:2.125rem;line-height:2.5rem;letter-spacing:.0074em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),to=Ue(e||(e=qt`.typography-headline{font-size:1.5rem;line-height:2rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),eo=Ue(o||(o=qt`.typography-title{font-size:1.25rem;line-height:2rem;letter-spacing:.0075em;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),oo=Ue(i||(i=qt`.typography-subtitle{font-size:1rem;line-height:1.75rem;letter-spacing:.0094em;font-weight:400;-webkit-font-smoothing:antialiased}`)),io=Ue(n||(n=qt`.typography-body{font-size:.8125rem;line-height:1.15rem;letter-spacing:.0179em;font-weight:400;-webkit-font-smoothing:antialiased}`)),no=Ue(s||(s=qt`.typography-button{font-size:.75rem;line-height:1.25rem;letter-spacing:.0333em;text-transform:uppercase;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),so=Ue(a||(a=qt`.typography-caption{font-size:.6875rem;line-height:1.15rem;letter-spacing:.0333em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),ao=Ue(r||(r=qt`.typography-overline{font-size:.6875rem;line-height:2rem;letter-spacing:.15em;text-transform:uppercase;font-weight:400;-webkit-font-smoothing:antialiased}`)),ro=Ue(l||(l=qt`.typography-code{font-family:'Roboto Mono',monospace;font-size:.875rem;line-height:1.25rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased}`)),lo=[Ze,to,eo,oo,io,no,so,ao,ro];class co extends We{static get properties(){return{name:{type:String,attribute:"name",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus"}}}constructor(){super(),this.hasFocus=!1,this.tabIndex=0,this._boundHandleFocusEvent=this._handleFocusEvent.bind(this),this._boundHandleBlurEvent=this._handleBlurEvent.bind(this)}updated(t){super.updated(t),t.forEach((t,e)=>{"disabled"===e&&(this.disabled?this.tabIndex=-1:this.tabIndex=0)})}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._boundHandleFocusEvent),this.addEventListener("blur",this._boundHandleBlurEvent)}disconnectedCallback(){this.removeEventListener("focus",this._boundHandleFocusEvent),this.removeEventListener("blur",this._boundHandleBlurEvent),super.disconnectedCallback()}_handleFocusEvent(t){this.disabled||(this.hasFocus=!0)}_handleBlurEvent(t){this.hasFocus=!1}}const po=Ue(c||(c=qt`:host([elevation="0"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),ho=Ue(d||(d=qt`.elevation-0{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),bo=Ue(p||(p=qt`:host([elevation="1"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),uo=Ue(h||(h=qt`.elevation-1{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),go=Ue(b||(b=qt`:host([elevation="2"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),vo=Ue(u||(u=qt`.elevation-2{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),mo=Ue(g||(g=qt`:host([elevation="3"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),yo=Ue(v||(v=qt`.elevation-3{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),_o=Ue(m||(m=qt`:host([elevation="4"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),fo=Ue(y||(y=qt`.elevation-4{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),wo=Ue(_||(_=qt`:host([elevation="6"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),xo=Ue(f||(f=qt`.elevation-6{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),Eo=Ue(w||(w=qt`:host([elevation="8"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),So=Ue(x||(x=qt`.elevation-8{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),ko=Ue(E||(E=qt`:host([elevation="12"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),Co=Ue(S||(S=qt`.elevation-12{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),Po=Ue(k||(k=qt`:host([elevation="16"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),Vo=Ue(C||(C=qt`.elevation-16{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),zo=Ue(P||(P=qt`:host([elevation="24"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),Io=Ue(V||(V=qt`.elevation-24{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),No=[ho,uo,vo,yo,fo,xo,So,Co,Vo,Io],Ao=[po,bo,go,mo,_o,wo,Eo,ko,Po,zo];const Ro=new class{addGroup(t,e){const o=document.createElement("svg");o.innerHTML=e;const i=o.querySelector("defs");if(i){const e=i.querySelectorAll("g");e.length>0&&(window.ObapIcons[t]||(window.ObapIcons[t]={}),e.forEach(e=>window.ObapIcons[t][e.id]=new he([`<svg viewBox="0 0 24 24">${e.outerHTML}</svg>`],[])))}}get(t){let e=t.split(":"),o="standard",i=e[0];return e.length>1&&(o=e[0],i=e[1]),window.ObapIcons[o]&&window.ObapIcons[o][i]?window.ObapIcons[o][i]:null}getNames(t){return null==t&&(t="standard"),window.ObapIcons[t]?Object.getOwnPropertyNames(window.ObapIcons[t]).map(e=>`${t}:${e}`):[]}getGroups(){return Object.getOwnPropertyNames(window.ObapIcons).filter(t=>"iconManager"!==t&&"get"!==t)}};window.ObapIcons=window.ObapIcons||{iconManager:Ro,get:Ro.get};const Mo=window.ObapIcons.iconManager,To=Mo.getNames;Mo.getGroups;Mo.addGroup("core",'\n    <defs>\n        <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g>\n        <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g>\n        <g id="chevron-up"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></g>\n        <g id="chevron-down"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></g>\n        <g id="arrow-left"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>\n        <g id="arrow-right"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>\n        <g id="arrow-up"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>\n        <g id="arrow-down"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>\n        <g id="arrow-drop-left"><path d="M14 7l-5 5 5 5V7z"/></g>\n        <g id="arrow-drop-right"><path d="M10 17l5-5-5-5v10z"/></g>\n        <g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"/></g>\n        <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"/></g>\n        <g id="edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>\n        <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>\n        <g id="cross"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>\n        <g id="error"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>\n    </defs>\n');window.customElements.define("obap-icon",class extends We{static get styles(){return[Ue(z||(z=qt`
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
        `))]}static get properties(){return{icon:{type:String,attribute:"icon"}}}constructor(){super(),this.icon=""}render(){return Mo.get(this.icon)}});window.customElements.define("obap-button",class extends co{static get styles(){return[no,go,wo,Ue(I||(I=qt`
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
        `))]}static get properties(){return{raised:{type:Boolean,attribute:"raised",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0},round:{type:Boolean,attribute:"round",reflect:!0},toggle:{type:Boolean,attribute:"toggle",reflect:!0},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.raised=!1,this.noInk=!1,this.round=!1,this.toggle=!1,this.selected=!1,this.icon="",this.label="",this.role="button",this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleTouchStartEvent=this._handleTouchStartEvent.bind(this),this._boundHandleTouchEndEvent=this._handleTouchEndEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("touchstart",this._boundHandleTouchStartEvent),this.addEventListener("touchend",this._boundHandleTouchEndEvent)}disconnectedCallback(){this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("touchstart",this._boundHandleTouchStartEvent),this.removeEventListener("touchend",this._boundHandleTouchEndEvent),super.disconnectedCallback()}updated(t){super.updated(t),t.forEach((t,e)=>{switch(e){case"raised":this.raised?this.setAttribute("elevation",2):this.removeAttribute("elevation");break;case"label":case"icon":this.setAttribute("aria-label",this._getAriaLabel())}})}_getAriaLabel(){return this.label?this.label:this.icon}render(){return Ve(N||(N=qt`
            <div class="container typography-button">
                ${0}
                ${0} 
            </div>
            ${0}
        `),this.icon?Ve(A||(A=qt`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.label?Ve(R||(R=qt`<div ?has-icon="${0}">${0}</div>`),""!==this.icon,this.label):null,this.noInk?null:Ve(M||(M=qt`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.selected))}_handleMouseDownEvent(t){t.preventDefault(),this._handleDown()}_handleMouseUpEvent(t){t.preventDefault(),this._handleUp()}_handleTouchStartEvent(t){t.preventDefault(),this._handleDown()}_handleTouchEndEvent(t){t.preventDefault(),this._handleUp(),this.click()}_handleDown(){this.raised?this.toggle?(this.selected=!this.selected,this.selected?this.setAttribute("elevation",6):this.setAttribute("elevation",2)):this.setAttribute("elevation",6):this.toggle&&(this.selected=!this.selected)}_handleUp(){this.raised&&!this.toggle&&this.setAttribute("elevation",2)}});window.customElements.define("obap-top-app-bar",class extends We{static get styles(){return[oo,Ao,Ue(T||(T=qt`
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
        `))]}static get properties(){return{caption:{type:String,attribute:"caption"},elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.caption="",this.elevation=0}render(){return Ve(H||(H=qt` 
            <div class="container">
                <div class="actions"><slot name="left"></slot></div>
                <div class="caption typography-subtitle">${0}</div>
                <div class="actions"><slot name="right"></slot></div>
            </div>
      `),this.caption)}});const Ho=t=>class extends t{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){const e=this.selectedIndex;(e!=t||this.toggles)&&(this._selectedIndex=t,this._changeSelection(this._selectedIndex,e),this.requestUpdate("selectedIndex",e))}get items(){return this._items}set items(t){throw'"items" is read only'}static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",hasChanged:(t,e)=>t!==e,reflect:!0},items:{type:Array},toggles:{type:Boolean,attribute:"toggles"},selectorType:{type:String,attribute:"selector-type"},enterSelects:{type:Boolean,attribute:"enter-selects"},selectedAttribute:{type:String,attribute:"selected-attribute"}}}constructor(){super(),this._boundHandleSelectionEvent=this._handleSelectionEvent.bind(this),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._boundHandleEnterEvent=this._handleEnterEvent.bind(this),this._selectedIndex=-1,this._selectable=!0,this._items=[],this._ctrl=!1,this.toggles=!1,this.enterSelects=!1,this.selectorType="single",this.selectedAttribute="selected"}updated(t){super.updated(t),t.forEach((t,e)=>{"disabled"===e&&t!==this.disabled&&this.items.forEach(t=>{t.disabled=this.disabled})})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._boundHandleSelectionEvent),this.addEventListener("keydown",this._boundHandleEnterEvent,{capture:!0}),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.removeEventListener("click",this._boundHandleSelectionEvent),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),this.removeEventListener("keydown",this._boundHandleEnterEvent),super.disconnectedCallback()}select(t){this.selectedIndex=t}indexOf(t){return this.items.indexOf(t)}_populateItems(){let t=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(t=>1===t.nodeType&&!t.hasAttribute("no-select"));this.disabled&&t.forEach(t=>{t.disabled=this.disabled});const e=this._items;this._items=t,this._changeSelection(this.selectedIndex,-1),this.requestUpdate("items",e)}_handleSlotChangeEvent(t){this._populateItems()}_handleSelectionEvent(t){const e=this.items.indexOf(t.target);e>-1&&(this._ctrl=t.ctrlKey,this.select(e),this._ctrl=!1)}_handleEnterEvent(t){if("Enter"!==t.key||!this.enterSelects)return;const e=this.indexOf(t.target);e>-1&&!t.target.disabled&&this.select(e)}_deselectItem(t){if(-1===t)this.items.forEach(t=>t.removeAttribute(this.selectedAttribute));else{const e=this.items[t];e&&(e.removeAttribute(this.selectedAttribute),this._fireEvent("obap-item-deselected",{item:e,index:t},!1))}}_selectItem(t){const e=this.items[t];e&&(e.setAttribute(this.selectedAttribute,""),this._fireEvent("obap-item-selected",{item:e,index:t},!1))}_changeSelection(t,e){if(-1===t||0===this.items.length)return;if(t===e)return this._deselectItem(e),void(this._selectedIndex=-1);const o=this.items[t];this._fireEvent("obap-item-selecting",{newIndex:t,oldIndex:e,item:o},!0)?(this._deselectItem(e),this._selectItem(t),this._selectedIndex=t):this._selectedIndex=e}_fireEvent(t,e,o){const i=new CustomEvent(t,{bubbles:!0,composed:!0,cancelable:o,detail:e});return this.dispatchEvent(i)}};class Lo extends(Ho(We)){static get styles(){return Ue(L||(L=qt`
            :host {
                display: block;
            }

            :host > ::slotted(:not(slot):not([selected])) {
                display: none !important;
            }
        `))}render(){return Ve(B||(B=qt`<slot></slot>`))}}window.customElements.define("obap-pages",Lo);window.customElements.define("obap-scroll-container",class extends We{static get styles(){return[Ue($||($=qt`
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
        `))]}static get properties(){return{vertical:{type:Boolean,attribute:"vertical",reflect:!0},scrollSpeed:{type:Number,attribute:"scroll-speed"},itemStep:{type:Boolean,attribute:"item-step"},disableScrolling:{type:Boolean,attribute:"disable-scrolling"},hideButtons:{type:Boolean,attribute:"hide-buttons"},miniButtons:{type:Boolean,attribute:"mini-buttons"},_leftScrollButtonVisible:{type:Boolean},_rightScrollButtonVisible:{type:Boolean},_hasOverflow:{type:Boolean}}}constructor(){super(),this.vertical=!1,this.scrollSpeed=2,this.itemStep=!1,this.disableScrolling=!1,this.hideButtons=!1,this._scrolling=!1,this._scrollDirection="none",this._container=null,this._containerRect=null,this.miniButtons=!1,this._boundScroll=this._scroll.bind(this),this._holdDelay=1,this._holdJob=null,this._hasOverflow=!1,this._children=[],this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._resizeObserver=new ResizeObserver(t=>{this._setScrollInfo(),this._calculateButtonVisibility()})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this._resizeObserver.unobserve(this),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(t){super.updated(t),this._setScrollInfo(),this._calculateButtonVisibility()}render(){return Ve(F||(F=qt`
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
        `),this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._leftScrollButtonVisible,this._getIconName(!0),this._scrollLeft,this._endScroll,this._scrollLeft,this._endScroll,this._onScroll,this.disableScrolling,this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._rightScrollButtonVisible,this._getIconName(!1),this._scrollRight,this._endScroll,this._scrollRight,this._endScroll)}_getIconName(t){return this.vertical?t?"core:chevron-up":"core:chevron-down":t?"core:chevron-left":"core:chevron-right"}_calculateButtonVisibility(){if(this.disableScrolling)return this._leftScrollButtonVisible=!1,void(this._rightScrollButtonVisible=!1);this.vertical?(this._leftScrollButtonVisible=this._container.scrollTop>0,this._rightScrollButtonVisible=this._container.scrollTop<this._container.scrollHeight-this._container.clientHeight-1,this._hasOverflow=this._container.scrollHeight>this._container.clientHeight):(this._leftScrollButtonVisible=this._container.scrollLeft>0,this._rightScrollButtonVisible=this._container.scrollLeft<this._container.scrollWidth-this._container.clientWidth-1,this._hasOverflow=this._container.scrollWidth>this._container.clientWidth)}_setScrollInfo(){this._container=this.renderRoot.getElementById("contentContainer"),this._containerRect=this._container.getBoundingClientRect()}_scrollLeft(t){this.disableScrolling||(this.itemStep?this._scrollToNextChild("left"):(this._startScroll("left"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_scrollRight(t){this.disableScrolling||(this.itemStep?this._scrollToNextChild("right"):(this._startScroll("right"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_startScroll(t){this._scrolling=!0,this._scrollDirection=t,this._scroll()}_endScroll(t){this._holdJob&&(clearInterval(this._holdJob),this._holdJob=null),this._scrolling=!1,this._scrollDirection="none"}_scrollToNextChild(t){const e=this._container.getBoundingClientRect(),o=this._children.filter(t=>{const o=t.getBoundingClientRect();return this.vertical?o.top<=e.bottom&&o.bottom>=e.top:o.left<=e.right&&o.right>=e.left});if(o.length>0){const e=o[0],i=getComputedStyle(e);if(this.vertical){let o=e.offsetHeight;o+=parseInt(i.marginTop)+parseInt(i.marginBottom),"left"===t?this._container.scrollTop-=o:this._container.scrollTop+=o}else{let o=e.offsetWidth;o+=parseInt(i.marginLeft)+parseInt(i.marginRight),"left"===t?this._container.scrollLeft-=o:this._container.scrollLeft+=o}this._calculateButtonVisibility()}}_scroll(){if(!this._scrolling)return;let t="left"===this._scrollDirection?-this.scrollSpeed:this.scrollSpeed,e=0,o=!1;this.vertical?(e=this._container.scrollTop+t,e>=0&&e<=this._container.scrollHeight-this._container.clientHeight&&(this._container.scrollTop=e,o=!0)):(e=this._container.scrollLeft+t,e>=0&&e<=this._container.scrollWidth-this._container.clientWidth&&(this._container.scrollLeft=e,o=!0)),o?this._calculateButtonVisibility():this._endScroll()}_onScroll(){this._calculateButtonVisibility()}_handleSlotChangeEvent(t){const e=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(t=>1===t.nodeType);this._children=e,this.requestUpdate()}});window.customElements.define("obap-ripple",class extends We{static get styles(){return[Ue(O||(O=qt`
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
        `))]}static get properties(){return{extend:{type:Number,attribute:"extend",reflect:!0},active:{type:Boolean,attribute:"active",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.extend=0,this.active=!1,this.hasFocus=!1,this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleMouseLeaveEvent=this._handleMouseLeaveEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.noInk||(this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.addEventListener("touchstart",this._boundHandleMouseDownEvent),this.addEventListener("touchend",this._boundHandleMouseUpEvent))}disconnectedCallback(){this.noInk||(this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.removeEventListener("touchstart",this._boundHandleMouseDownEvent),this.removeEventListener("touchend",this._boundHandleMouseUpEvent)),super.disconnectedCallback()}_handleMouseDownEvent(t){this.noInk||(this.active=!0)}_handleMouseUpEvent(t){this.active=!1}_handleMouseLeaveEvent(t){this.active=!1}});window.customElements.define("obap-tab",class extends co{static get styles(){return Ue(D||(D=qt`
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
      `))}static get properties(){return{noInk:{type:Boolean,attribute:"no-ink",reflect:!0},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.role="tab",this.noInk=!1}render(){return Ve(U||(U=qt`
            <div class="container">
                <slot></slot>
                ${0}
            </div>
        `),this.noInk?null:Ve(j||(j=qt`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected))}});class Bo extends(Ho(We)){static get styles(){return[no,Ue(q||(q=qt`
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
        `))]}static get properties(){return{fill:{type:Boolean,attribute:"fill"},scroll:{type:Boolean,attribute:"scroll"},hideScrollButtons:{type:Boolean,attribute:"hide-scroll-buttons"}}}constructor(){super(),this.role="tablist",this.fill=!1,this.scroll=!1,this.hideScrollButtons=!1,this.enterSelects=!0}render(){return Ve(W||(W=qt`
            <obap-scroll-container class="container typography-button" ?fill="${0}" ?disable-scrolling="${0}"
                                   ?hide-buttons="${0}" mini-buttons>
                <slot></slot>
            </obap-scroll-container>
        `),this.fill,!1===this.scroll,this.hideScrollButtons)}}window.customElements.define("obap-tabs",Bo);window.customElements.define("obap-material",class extends We{static get styles(){return[Ao,Ue(G||(G=qt`
            :host {
                display: block;
                box-sizing: border-box;
                background: var(--obap-surface-color, #FFFFFF);
                color: var(--obap-on-surface-color, rgba(black, 0.87));
            }
        `))]}static get properties(){return{elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.elevation=1}render(){return Ve(J||(J=qt`<slot></slot>`))}});const $o=t=>class extends t{static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"}}}constructor(){super(),this.label="",this.name="",this._active=!1}get active(){return this._active}connectedCallback(){super.connectedCallback(),this.setAttribute("application-content",null)}_canActivate(){return!this.canActivate||this.canActivate()}_canDeactivate(){return!this.canDeactivate||this.canDeactivate()}_activate(){this._active||(this._active=!0,this.activate?this.activate():this._fireEvent("obap-view-activate"))}_deactivate(){this._active&&(this.deactivate?this.deactivate():this._fireEvent("obap-view-deactivate"),this._active=!1)}_fireEvent(t){let e=new CustomEvent(t,{bubbles:!1,composed:!1});this.dispatchEvent(e)}};class Fo extends($o(We)){static get styles(){return[Ue(K||(K=qt`
            :host {
                display: block;
                height: 100%;
            }

            .container {
                height: 100%;
            }
        `))]}render(){return Ve(Q||(Q=qt`
            <div class="container">
                <slot></slot>
            </div>
        `))}}window.customElements.define("obap-application-content",Fo);window.customElements.define("obap-application-view",class extends We{static get styles(){return[io,Ue(X||(X=qt`
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
        `))]}static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},badgeIcon:{type:String,attribute:"badge-icon"},badgeLabel:{type:String,attribute:"badge-label"},modal:{type:Boolean,attribute:"modal"},default:{type:Boolean,attribute:"default"},subViews:{type:Array},selectedSubViewIndex:{type:Number},navigators:{type:Array,attribute:"navigators",converter:{toAttribute:t=>t.join(","),fromAttribute:t=>t.split(",")}},associations:{type:Array,attribute:"associations",converter:{toAttribute:t=>t.join(","),fromAttribute:t=>t.split(",")}},hasSideViews:{type:Boolean,attribute:"has-side-views",reflect:!0},hideSubViewScrollButtons:{type:Boolean,attribute:"hide-sub-view-scroll-buttons"}}}constructor(){super(),this._active=!1,this._slotUpdated=!1,this.name="",this.label="untitled",this.icon="",this.badgeIcon="",this.badgeLabel="",this.modal=!1,this.default=!1,this.selectedSubViewIndex=0,this.subViews=[],this.navigators=[],this.associations=[],this.hasSideViews=!1,this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}notifyViewActivate(){this._active=!0,this.subViews.forEach(t=>{t._activate&&t._activate()})}notifyViewDeactivate(){this._active&&(this._active=!1,this.subViews.forEach(t=>{t._deactivate&&t._deactivate()}))}canViewActivate(){let t=!0;return this.subViews.forEach(e=>{e._canActivate&&(e._canActivate()||(t=!1))}),t}canViewDeactivate(){let t=!0;return this.subViews.forEach(e=>{e._canDeactivate&&(e._canDeactivate()||(t=!1))}),t}render(){return Ve(Y||(Y=qt`
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
        `),this._getSubViewNavigator(),this.selectedSubViewIndex)}_getSubViewNavigator(){return this.subViews.length>1?Ve(Z||(Z=qt`
                <obap-material class="sub-view-navigator" elevation="1">
                    <obap-tabs scroll ?hide-scroll-buttons="${0}" selected-index="${0}" @obap-item-selected="${0}">
                        ${0}
                    </obap-tabs>
                </obap-material>
            `),this.hideSubViewScrollButtons,this.selectedSubViewIndex,this._handleSubViewSelect,this.subViews.map(t=>Ve(tt||(tt=qt`<obap-tab sub-view-name="${0}">${0}</obap-tab>`),t.name,t.label))):null}_handleSubViewSelect(t){this.selectedSubViewIndex=t.detail.index}_handleSlotChangeEvent(t){let e=this.renderRoot.querySelector("slot"),o=this.renderRoot.querySelector('slot[name="side"]');if(o){const t=o.assignedNodes({flatten:!0}).filter(t=>1===t.nodeType&&t.hasAttribute("application-content")).length;this.hasSideViews=t>0}if(!e)return;let i=e.assignedNodes({flatten:!0}).filter(t=>1===t.nodeType&&t.hasAttribute("application-content"));this.subViews.length!==i.length&&(this.subViews=i),null===this.selectedSubViewIndex&&this.subViews&&this.subViews.length>0&&(this.selectedSubViewIndex=0),this._active&&this.notifyViewActivate(),this.requestUpdate()}_fireEvent(t,e){let o=new CustomEvent(t,{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(o)}});class Oo extends(Ye(We)){static get styles(){return[io,Ue(et||(et=qt`
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
        `))]}static get properties(){return{_navigatorIndex:{type:Number}}}constructor(){super(),this._navigatorIndex=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.forEach((t,e)=>{})}render(){return Ve(ot||(ot=qt`
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
            </div>`),this.getEffectiveDisplayTitle(),this._getToolBarIcon(this.icon),this._navigatorIndex,this._renderNavigator(),this.selectedViewIndex)}_renderNavigator(){return Ve(it||(it=qt`
            <div>
                ${0}
            </div>`),this.views.map((t,e)=>Ve(nt||(nt=qt`
                    <obap-material elevation="1" class="navigator-item" index="${0}" @click="${0}">
                        ${0}
                        <div class="navigator-label typography-body">${0}</div>
                    </obap-material>
                `),e,this._navigatorClick,t.icon?Ve(st||(st=qt`<obap-icon class="navigator-icon" icon="${0}"></obap-icon>`),t.icon):null,t.label)))}_getToolBarIcon(t){return this._navigatorIndex>0?Ve(at||(at=qt`<obap-button round slot="left" icon="core:arrow-left" @click="${0}"></obap-button>`),t=>this._navigatorIndex=0):t?Ve(rt||(rt=qt`<obap-icon class="app-icon" slot="left" icon="${0}"></obap-icon>`),t):null}_navigatorClick(t){const e=t.target.getAttribute("index");null!==e&&(this.selectedViewIndex=e,this._navigatorIndex=1)}getEffectiveDisplayTitle(){return 0===this._navigatorIndex?this.label:this.getSelectedView().label}}window.customElements.define("obap-mobile-application",Oo),Mo.addGroup("app",'\n    <defs>\n        <g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"/></g>\n        <g id="styles"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"/></g>\n        <g id="charts"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></g>\n        <g id="data-tables"><path d="M22,2H2v20h20V2L22,2z M4,8V4h16v4H4L4,8z M4,14v-4h16v4H4L4,14z M4,20v-4h16v4H4L4,20z"/></g>\n        <g id="tooltips-callouts"><path d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/></g>\n        <g id="selection"><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></g>\n        <g id="progress-indicators"><path d="M15.1,19.37l1,1.74c-0.96,0.44-2.01,0.73-3.1,0.84v-2.02C13.74,19.84,14.44,19.65,15.1,19.37z M4.07,13H2.05 c0.11,1.1,0.4,2.14,0.84,3.1l1.74-1C4.35,14.44,4.16,13.74,4.07,13z M15.1,4.63l1-1.74C15.14,2.45,14.1,2.16,13,2.05v2.02 C13.74,4.16,14.44,4.35,15.1,4.63z M19.93,11h2.02c-0.11-1.1-0.4-2.14-0.84-3.1l-1.74,1C19.65,9.56,19.84,10.26,19.93,11z M8.9,19.37l-1,1.74c0.96,0.44,2.01,0.73,3.1,0.84v-2.02C10.26,19.84,9.56,19.65,8.9,19.37z M11,4.07V2.05 c-1.1,0.11-2.14,0.4-3.1,0.84l1,1.74C9.56,4.35,10.26,4.16,11,4.07z M18.36,7.17l1.74-1.01c-0.63-0.87-1.4-1.64-2.27-2.27 l-1.01,1.74C17.41,6.08,17.92,6.59,18.36,7.17z M4.63,8.9l-1.74-1C2.45,8.86,2.16,9.9,2.05,11h2.02C4.16,10.26,4.35,9.56,4.63,8.9z M19.93,13c-0.09,0.74-0.28,1.44-0.56,2.1l1.74,1c0.44-0.96,0.73-2.01,0.84-3.1H19.93z M16.83,18.36l1.01,1.74 c0.87-0.63,1.64-1.4,2.27-2.27l-1.74-1.01C17.92,17.41,17.41,17.92,16.83,18.36z M7.17,5.64L6.17,3.89 C5.29,4.53,4.53,5.29,3.9,6.17l1.74,1.01C6.08,6.59,6.59,6.08,7.17,5.64z M5.64,16.83L3.9,17.83c0.63,0.87,1.4,1.64,2.27,2.27 l1.01-1.74C6.59,17.92,6.08,17.41,5.64,16.83z M13,7h-2v5.41l4.29,4.29l1.41-1.41L13,11.59V7z"/></g>\n        <g id="tabs"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/></g>\n        <g id="dialogs"><path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M17,12H7v-2 h10V12z M13,16H7v-2h6V16z"/></g>\n        <g id="cards"><path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/></g>\n        <g id="buttons"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></g>\n        <g id="chips"><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></g>\n        <g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>\n        \n\n    </defs>\n');window.customElements.define("demo-styles-elevation",class extends We{static get styles(){return[No,io,Ue(lt||(lt=qt`
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
        `))]}static get properties(){return{items:{type:Array}}}constructor(){super(),this.items=[0,1,2,3,4,6,8,12,16,24]}render(){return Ve(ct||(ct=qt`
            <div class="container">
                <div class="item-container">
                    ${0}
                </div>
            </div>
        `),this.items.map(t=>Ve(dt||(dt=qt`<div class="item elevation-${0} typography-body">${0}</div>`),t,t)))}});window.customElements.define("demo-styles-iconography",class extends We{static get styles(){return[Ue(pt||(pt=qt`
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
        `))]}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.forEach((t,e)=>{})}render(){return Ve(ht||(ht=qt`
            <div class="container">
                <div class="inner-container">
                    ${0}

                    ${0}
                </div>
            </div>
        `),To("core").map(t=>Ve(bt||(bt=qt`
                        <obap-icon icon="${0}" title="${0}"></obap-icon>
                    `),t,t)),To("app").map(t=>Ve(ut||(ut=qt`
                        <obap-icon icon="${0}" title="${0}"></obap-icon>
                    `),t,t)))}});window.customElements.define("obap-radio",class extends co{static get styles(){return[io,Ue(gt||(gt=qt`
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
        `))]}static get properties(){return{label:{type:String,attribute:"label"},selected:{type:Boolean,attribute:"selected",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.selected=!1,this.indeterminate=!1,this.noInk=!1,this.role="radio"}render(){return Ve(vt||(vt=qt`
            <div class="container typography-body">
                <div class="check-container">
                    ${0}
                    ${0}
                </div>
                ${0}
            </div>
        `),this._getCheck(),this.noInk?null:Ve(mt||(mt=qt`<obap-ripple extend="1" ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected),this.label)}_getCheck(){return this.selected?ze(yt||(yt=qt`<svg class="check" viewBox="0 0 24 24"><g><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></g></svg>`)):ze(_t||(_t=qt`<svg class="check" viewBox="0 0 24 24"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></g></svg>`))}});class Do extends(Ho(We)){static get styles(){return Ue(ft||(ft=qt`
            :host {
                display: block;
            }

            :host[hidden] {
                display: none;
            }
        `))}constructor(){super(),this.role="radiogroup",this.enterSelects=!0}render(){return Ve(wt||(wt=qt`<slot></slot>`))}}customElements.define("obap-radio-group",Do);class Uo extends(Ke(We)){static get styles(){return[No,so,io,Ue(xt||(xt=qt`
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
                margin: 8px 0;
            }

            obap-radio {
                margin-right: 16px;
            }

            .container {
                display: flex;
                flex-direction: column;
                height: 100%;
                padding: 8px;
                box-sizing: border-box;
            }

            .items {
                flex: 1;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-rows: 40px;
                grid-gap: 16px;
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

        `))]}static get properties(){return{themes:{type:Array},selectedThemeIndex:{type:Number}}}constructor(){super(),this.themes=this.getThemeNames(),this.selectedThemeIndex=0}render(){return Ve(Et||(Et=qt`
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
        `),this.selectedThemeIndex,this._themeSelected,this.themes.map(t=>Ve(St||(St=qt`<obap-radio label="${0}"></obap-radio>`),t)))}_themeSelected(t){this.setGlobalTheme(t.detail.item.label)}}window.customElements.define("demo-styles-theming",Uo);window.customElements.define("demo-styles-typography",class extends We{static get styles(){return[lo,Ue(kt||(kt=qt`
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
        `))]}static get properties(){return{}}constructor(){super()}render(){return Ve(Ct||(Ct=qt`
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
        `))}});window.customElements.define("demo-buttons-normal",class extends We{static get styles(){return[Ue(Pt||(Pt=qt`
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
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-rows: auto;
                grid-row-gap: 16px;
                grid-column-gap: 8px;
                justify-items: left;
                padding: 16px;
                margin: 4px;
                background: #FAFAFA;
            }
        `))]}render(){return Ve(Vt||(Vt=qt`
            <div class="container">
                <obap-button label="Flat"></obap-button>
                <obap-button label="Raised" raised></obap-button>
                <obap-button label="No Ink" no-ink raised></obap-button>
                <obap-button label="Toggle" toggle raised></obap-button>
                <obap-button label="Disabled" disabled raised></obap-button>
            </div>

            <div class="container">
                <obap-button label="Flat" icon="app:android"></obap-button>
                <obap-button label="Raised" icon="app:polymer" raised></obap-button>
                <obap-button label="No Ink" icon="app:styles" no-ink raised></obap-button>
                <obap-button label="Toggle" icon="app:charts" toggle raised></obap-button>
                <obap-button label="Disabled" icon="app:buttons" disabled raised></obap-button>
            </div>
        `))}});window.customElements.define("demo-buttons-fab",class extends We{static get styles(){return[Ue(zt||(zt=qt`
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
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-rows: auto;
                grid-row-gap: 16px;
                grid-column-gap: 8px;
                justify-items: left;
                padding: 16px;
                margin: 4px;
                background: #FAFAFA;
            }
        `))]}render(){return Ve(It||(It=qt`
            <div class="container">
                <obap-button round icon="app:android"></obap-button>
                <obap-button round icon="app:polymer" raised></obap-button>
                <obap-button round icon="app:styles" no-ink raised></obap-button>
                <obap-button round icon="app:charts" toggle raised></obap-button>
                <obap-button round icon="app:buttons" disabled raised></obap-button>
            </div>

            <div class="container">
                <obap-button round label="Flat" icon="app:android"></obap-button>
                <obap-button round label="Raised" icon="app:polymer" raised></obap-button>
                <obap-button round label="No Ink" icon="app:styles" no-ink raised></obap-button>
                <obap-button round label="Toggle" icon="app:charts" toggle raised></obap-button>
                <obap-button round label="Disabled" icon="app:buttons" disabled raised></obap-button>
            </div>
        `))}});window.customElements.define("demo-buttons-custom",class extends We{static get styles(){return[Ue(Nt||(Nt=qt`
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
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-rows: auto;
                grid-row-gap: 16px;
                grid-column-gap: 8px;
                justify-items: left;
                padding: 16px;
                margin: 4px;
                background: #FAFAFA;
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
        `))]}render(){return Ve(At||(At=qt`
            <div class="container">
                <obap-button class="primary" label="Button" raised></obap-button>
                <obap-button class="accent" label="Button" raised></obap-button>
                <obap-button class="primary-reverse" label="Button" raised></obap-button>
            </div>
           
            <div class="container">
                <obap-button class="primary" label="Button" raised icon="app:android"></obap-button>
                <obap-button class="accent" label="Button" raised icon="app:android"></obap-button>
                <obap-button class="primary-reverse" label="Button" raised icon="app:android"></obap-button>
            </div>

            <div class="container">
                <obap-button class="primary" round raised icon="app:styles"></obap-button>
                <obap-button class="accent" round raised icon="app:styles"></obap-button>
                <obap-button class="primary-reverse" round raised icon="app:styles"></obap-button>
            </div>

            <div class="container">
                <obap-button class="primary" label="Button" round raised icon="app:charts"></obap-button>
                <obap-button class="accent" label="Button" round raised icon="app:charts"></obap-button>
                <obap-button class="primary-reverse" label="Button" round raised icon="app:charts"></obap-button>
            </div>
        `))}});window.customElements.define("obap-backdrop",class extends We{static get styles(){return[Ue(Rt||(Rt=qt`
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
        `))]}static get properties(){return{visible:{type:Boolean,attribute:"visible",reflect:!0},_count:{type:Number,attribute:"count",reflect:!0}}}constructor(){super(),this.visible=!1,this._count=0,this._zIndex=248,this._items=[]}show(t){return-1===this._items.indexOf(t)&&this._items.push(t),this._count+=1,this._zIndex+=2,this.style.zIndex=this._zIndex,t.modal&&(this.visible=this._count>0),this._zIndex+1}hide(t){const e=this._items.indexOf(t);this._items.splice(e,1);const o=this._items[this._items.length-1];this._count-=1,this._zIndex-=2,this.style.zIndex=this._zIndex,o&&o.modal&&(this.visible=this._count>0),0===this._count&&this.parentNode.removeChild(this)}isOnTop(t){return this._items.indexOf(t)===this._items.length-1}});window.customElements.define("obap-dialog",class extends We{static get styles(){return[Io,Ue(Mt||(Mt=qt`
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
        `))]}get opened(){return this._opened}set opened(t){let e=this._opened;requestAnimationFrame(()=>{this._opened=t,this.requestUpdate("opened",e),this.modal||(this._opened?window.addEventListener("click",this._boundHandleDocumentClickEvent,!1):window.removeEventListener("click",this._boundHandleDocumentClickEvent)),this.noCancelOnEscKey||(this._opened?window.addEventListener("keydown",this._boundHandleGlobalKeyPressEvent,!1):window.removeEventListener("keydown",this._boundHandleGlobalKeyPressEvent));let o=new CustomEvent("obap-dialog-opened-changed",{detail:{opened:this._opened},bubbles:!0,composed:!0});this.dispatchEvent(o)})}static get properties(){return{opened:{type:Boolean,attribute:"opened",reflect:!0},modal:{type:Boolean,attribute:"modal"},noCancelOnEscKey:{type:Boolean,attribute:"no-cancel-on-esc-key"}}}constructor(){super(),this._opened=!1,this._backdrop=null,this.modal=!1,this.noCancelOnEscKey=!1,this._boundHandleDocumentClickEvent=this._handleDocumentClickEvent.bind(this),this._boundHandleGlobalKeyPressEvent=this._handleGlobalKeyPressEvent.bind(this)}updated(t){super.updated(t),t.forEach((t,e)=>{"opened"===e&&t!==this.opened&&this._updateBackdrop()})}render(){return Ve(Tt||(Tt=qt`
            <div class="container elevation-24" @click="${0}">
                <slot></slot>
            </div>       
        `),this._handleClick)}open(){this.opened=!0}close(){this.opened=!1}_updateBackdrop(){this._backdrop=document.body.querySelector("obap-backdrop")||document.body.appendChild(document.createElement("obap-backdrop")),requestAnimationFrame(()=>{this.opened?this.style.zIndex=this._backdrop.show(this):this._backdrop.hide(this)})}_handleClick(t){const e=t.composedPath(),o=e.indexOf(this);for(let n=0;n<o;n++){var i=e[n];if(i.hasAttribute&&(i.hasAttribute("dialog-confirm")||i.hasAttribute("dialog-dismiss"))){this.opened=!1,t.stopPropagation();break}}}_handleDocumentClickEvent(t){-1===t.composedPath().indexOf(this)&&(this.opened=!1,t.stopPropagation())}_handleGlobalKeyPressEvent(t){"Escape"===t.key&&this._backdrop&&this._backdrop.isOnTop(this)&&(this.opened=!1,t.stopImmediatePropagation())}});window.customElements.define("demo-dialogs",class extends We{static get styles(){return[oo,Ue(Ht||(Ht=qt`
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
                padding: 32px;
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
        `))]}render(){return Ve(Lt||(Lt=qt`
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

            <div class="container">
                <obap-button raised label="Plain" @click="${0}"></obap-button>
                <obap-button raised label="Modal" @click="${0}"></obap-button>
                <obap-button raised label="Nested" @click="${0}"></obap-button>
            </div>
        `),this._renderCaption("Plain Dialog"),this._renderContent(),this._renderActions(),this._renderCaption("Modal Dialog"),this._renderContent(),this._renderActions(),this._renderCaption("Nested Dialog"),this._renderContent(),this._renderNestedActions(),this._renderCaption("Child Dialog"),this._renderChildContent(),this._renderActions(),this._showPlainDialog,this._showModalDialog,this._showNestedDialog)}_renderCaption(t){return Ve(Bt||(Bt=qt`
            <div class="caption typography-subtitle">${0}</div>
        `),t)}_renderContent(){return Ve($t||($t=qt`
            <div class="content"></div>
        `))}_renderChildContent(){return Ve(Ft||(Ft=qt`
            <div class="child-content"></div>
        `))}_renderActions(){return Ve(Ot||(Ot=qt`
            <div class="actions">
                <obap-button class="action" raised label="cancel" dialog-dismiss @click="${0}"></obap-button>
                <obap-button class="action" raised label="ok" dialog-confirm></obap-button>
            </div>
        `),this._handleCancel)}_renderNestedActions(){return Ve(Dt||(Dt=qt`
            <div class="actions">
                <obap-button class="action" raised label="cancel" dialog-dismiss @click="${0}"></obap-button>
                <obap-button class="action" raised label="ok" dialog-confirm></obap-button>
                <obap-button class="action" raised label="child" @click="${0}"></obap-button>
            </div>
        `),this._handleCancel,this._showChildDialog)}_showPlainDialog(){this.renderRoot.getElementById("plain-dialog").open()}_showModalDialog(){this.renderRoot.getElementById("modal-dialog").open()}_showNestedDialog(){this.renderRoot.getElementById("nested-dialog").open()}_showChildDialog(){this.renderRoot.getElementById("child-dialog").open()}_handleCancel(){}});class jo extends(Ke(We)){static get styles(){return[Ue(Ut||(Ut=qt`
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
                
            }
        `))]}constructor(){super(),Je.create("green","#80e27e","#4caf50","#087f23","#ffc107","#FAFAFA"),Je.apply("default")}render(){return Ve(jt||(jt=qt`
            <obap-mobile-application label="OBAP Elements" icon="app:polymer">
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
                    <obap-application-content><demo-dialogs class="demo"></demo-dialogs></obap-application-content>
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
        `))}}window.customElements.define("demo-mobile-app",jo);
