let t,e,o,i,s,n,a,r,l,c,p,d,h,u,b,g,v,m,y,_,w,f,x,S,E,C,V,P,k,z,I,N,R,M,L,T,A,H,O,B,F,$,U,D,j,q,W,J,G,K,Q,X,Y,Z,tt,et,ot,it,st,nt,at,rt,lt,ct,pt,dt,ht,ut=t=>t;const bt="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,gt=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},vt=`{{lit-${String(Math.random()).slice(2)}}}`,mt=`\x3c!--${vt}--\x3e`,yt=new RegExp(`${vt}|${mt}`);class _t{constructor(t,e){this.parts=[],this.element=e;const o=[],i=[],s=document.createTreeWalker(e.content,133,null,!1);let n=0,a=-1,r=0;const{strings:l,values:{length:c}}=t;for(;r<c;){const t=s.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let i=0;for(let t=0;t<o;t++)wt(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=l[r],o=St.exec(e)[2],i=o.toLowerCase()+"$lit$",s=t.getAttribute(i);t.removeAttribute(i);const n=s.split(yt);this.parts.push({type:"attribute",index:a,name:o,strings:n}),r+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(vt)>=0){const i=t.parentNode,s=e.split(yt),n=s.length-1;for(let e=0;e<n;e++){let o,n=s[e];if(""===n)o=xt();else{const t=St.exec(n);null!==t&&wt(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),o=document.createTextNode(n)}i.insertBefore(o,t),this.parts.push({type:"node",index:++a})}""===s[n]?(i.insertBefore(xt(),t),o.push(t)):t.data=s[n],r+=n}}else if(8===t.nodeType)if(t.data===vt){const e=t.parentNode;null!==t.previousSibling&&a!==n||(a++,e.insertBefore(xt(),t)),n=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(o.push(t),a--),r++}else{let e=-1;for(;-1!==(e=t.data.indexOf(vt,e+1));)this.parts.push({type:"node",index:-1}),r++}}else s.currentNode=i.pop()}for(const t of o)t.parentNode.removeChild(t)}}const wt=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},ft=t=>-1!==t.index,xt=()=>document.createComment(""),St=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Et(t,e){const{element:{content:o},parts:i}=t,s=document.createTreeWalker(o,133,null,!1);let n=Vt(i),a=i[n],r=-1,l=0;const c=[];let p=null;for(;s.nextNode();){r++;const t=s.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(c.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==a&&a.index===r;)a.index=null!==p?-1:a.index-l,n=Vt(i,n),a=i[n]}c.forEach(t=>t.parentNode.removeChild(t))}const Ct=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},Vt=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(ft(e))return o}return-1};const Pt=new WeakMap,kt=t=>"function"==typeof t&&Pt.has(t),zt={},It={};class Nt{constructor(t,e,o){this.__parts=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.__parts)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=bt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],o=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let s,n=0,a=0,r=i.nextNode();for(;n<o.length;)if(s=o[n],ft(s)){for(;a<s.index;)a++,"TEMPLATE"===r.nodeName&&(e.push(r),i.currentNode=r.content),null===(r=i.nextNode())&&(i.currentNode=e.pop(),r=i.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(r,s.name,s.strings,this.options));n++}else this.__parts.push(void 0),n++;return bt&&(document.adoptNode(t),customElements.upgrade(t)),t}}const Rt=` ${vt} `;class Mt{constructor(t,e,o,i){this.strings=t,this.values=e,this.type=o,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let i=0;i<t;i++){const t=this.strings[i],s=t.lastIndexOf("\x3c!--");o=(s>-1||o)&&-1===t.indexOf("--\x3e",s+1);const n=St.exec(t);e+=null===n?t+(o?Rt:mt):t.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+vt}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class Lt extends Mt{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,o=e.firstChild;return e.removeChild(o),((t,e,o=null,i=null)=>{for(;e!==o;){const o=e.nextSibling;t.insertBefore(e,i),e=o}})(e,o.firstChild),t}}const Tt=t=>null===t||!("object"==typeof t||"function"==typeof t),At=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Ht{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new Ot(this)}_getValue(){const t=this.strings,e=t.length-1;let o="";for(let i=0;i<e;i++){o+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(Tt(t)||!At(t))o+="string"==typeof t?t:String(t);else for(const e of t)o+="string"==typeof e?e:String(e)}}return o+=t[e],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ot{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===zt||Tt(t)&&t===this.value||(this.value=t,kt(t)||(this.committer.dirty=!0))}commit(){for(;kt(this.value);){const t=this.value;this.value=zt,t(this)}this.value!==zt&&this.committer.commit()}}class Bt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(xt()),this.endNode=t.appendChild(xt())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=xt()),t.__insert(this.endNode=xt())}insertAfterPart(t){t.__insert(this.startNode=xt()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;kt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=zt,t(this)}const t=this.__pendingValue;t!==zt&&(Tt(t)?t!==this.value&&this.__commitText(t):t instanceof Mt?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):At(t)?this.__commitIterable(t):t===It?(this.value=It,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof Nt&&this.value.template===e)this.value.update(t.values);else{const o=new Nt(e,t.processor,this.options),i=o._clone();o.update(t.values),this.__commitNode(i),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,i=0;for(const s of t)o=e[i],void 0===o&&(o=new Bt(this.options),e.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(e[i-1])),o.setValue(s),o.commit(),i++;i<e.length&&(e.length=i,this.clear(o&&o.endNode))}clear(t=this.startNode){gt(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Ft{constructor(t,e,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;kt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=zt,t(this)}if(this.__pendingValue===zt)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=zt}}class $t extends Ht{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new Ut(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ut extends Ot{}let Dt=!1;(()=>{try{const t={get capture(){return Dt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class jt{constructor(t,e,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;kt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=zt,t(this)}if(this.__pendingValue===zt)return;const t=this.__pendingValue,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=qt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=zt}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const qt=t=>t&&(Dt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function Wt(t){let e=Jt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Jt.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(vt);return o=e.keyString.get(i),void 0===o&&(o=new _t(t,t.getTemplateElement()),e.keyString.set(i,o)),e.stringsArray.set(t.strings,o),o}const Jt=new Map,Gt=new WeakMap;const Kt=new class{handleAttributeExpressions(t,e,o,i){const s=e[0];if("."===s){return new $t(t,e.slice(1),o).parts}return"@"===s?[new jt(t,e.slice(1),i.eventContext)]:"?"===s?[new Ft(t,e.slice(1),o)]:new Ht(t,e,o).parts}handleTextExpression(t){return new Bt(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Qt=(t,...e)=>new Mt(t,e,"html",Kt),Xt=(t,e)=>`${t}--${e}`;let Yt=!0;void 0===window.ShadyCSS?Yt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Yt=!1);const Zt=t=>e=>{const o=Xt(e.type,t);let i=Jt.get(o);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Jt.set(o,i));let s=i.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(vt);if(s=i.keyString.get(n),void 0===s){const o=e.getTemplateElement();Yt&&window.ShadyCSS.prepareTemplateDom(o,t),s=new _t(e,o),i.keyString.set(n,s)}return i.stringsArray.set(e.strings,s),s},te=["html","svg"],ee=new Set,oe=(t,e,o)=>{ee.add(t);const i=o?o.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const a=document.createElement("style");for(let t=0;t<n;t++){const e=s[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{te.forEach(e=>{const o=Jt.get(Xt(e,t));void 0!==o&&o.keyString.forEach(t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{o.add(t)}),Et(t,o)})})})(t);const r=i.content;o?function(t,e,o=null){const{element:{content:i},parts:s}=t;if(null==o)return void i.appendChild(e);const n=document.createTreeWalker(i,133,null,!1);let a=Vt(s),r=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===o&&(r=Ct(e),o.parentNode.insertBefore(e,o));-1!==a&&s[a].index===l;){if(r>0){for(;-1!==a;)s[a].index+=r,a=Vt(s,a);return}a=Vt(s,a)}}}(o,a,r.firstChild):r.insertBefore(a,r.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(o){r.insertBefore(a,r.firstChild);const t=new Set;t.add(a),Et(o,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const ie={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},se=(t,e)=>e!==t&&(e==e||t==t),ne={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:se};class ae extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,o)=>{const i=this._attributeNameForProperty(o,e);void 0!==i&&(this._attributeToPropertyMap.set(i,o),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=ne){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(o){const i=this[t];this[e]=o,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ne}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=se){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,i=e.converter||ie,s="function"==typeof i?i:i.fromAttribute;return s?s(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,i=e.converter;return(i&&i.toAttribute||ie.toAttribute)(t,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=ne){const i=this.constructor,s=i._attributeNameForProperty(t,o);if(void 0!==s){const t=i._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(t);if(void 0!==i){const t=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let o=!0;if(void 0!==t){const i=this.constructor,s=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}ae.finalized=!0;const re="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol();class ce{constructor(t,e){if(e!==le)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(re?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const pe=(t,...e)=>{const o=e.reduce((e,o,i)=>e+(t=>{if(t instanceof ce)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[i+1],t[0]);return new ce(o,le)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const de={};class he extends ae{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,o)=>t.reduceRight((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t),o),o=e(t,new Set),i=[];o.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?re?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==de&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return de}}he.finalized=!0,he.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const i=o.scopeName,s=Gt.has(e),n=Yt&&11===e.nodeType&&!!e.host,a=n&&!ee.has(i),r=a?document.createDocumentFragment():e;if(((t,e,o)=>{let i=Gt.get(e);void 0===i&&(gt(e,e.firstChild),Gt.set(e,i=new Bt(Object.assign({templateFactory:Wt},o))),i.appendInto(e)),i.setValue(t),i.commit()})(t,r,Object.assign({templateFactory:Zt(i)},o)),a){const t=Gt.get(r);Gt.delete(r);const o=t.value instanceof Nt?t.value.template:void 0;oe(i,r,o),gt(e,e.firstChild),e.appendChild(r),Gt.set(e,t)}!s&&n&&window.ShadyCSS.styleElement(e.host)};class ue extends he{get disabled(){return this._disabled}set disabled(t){const e=this.disabled;t!==e&&(this._disabled=t,t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false"),this.requestUpdate("disabled",e))}static get properties(){return{disabled:{type:Boolean,attribute:"disabled",reflect:!0},role:{type:String,attribute:"role",reflect:!0}}}constructor(){super(),this._disabled=!1,this.role=null}getCssVariableValue(t,e,o){let i=t.getPropertyValue(e);return i||o}}class be{constructor(t,e,o,i,s,n){this.name=t,this.primary=o,this.primaryLight=e,this.primaryDark=i,this.accent=s,this.window=n}}const ge=new class{constructor(){this.__themes={},this.create("default","#8e99f3","#5c6bc0","#26418f","#ec407a","#E0E0E0");let t=document.documentElement;t.style.setProperty("-webkit-tap-highlight-color","transparent"),t.style.setProperty("--obap-background-color","#FFFFFF"),t.style.setProperty("--obap-surface-color","#FFFFFF"),t.style.setProperty("--obap-error-color","#e53935"),t.style.setProperty("--obap-notification-color","#323232"),t.style.setProperty("--obap-selection-color","#E0E0E0"),t.style.setProperty("--obap-block-color","#ECECEC"),t.style.setProperty("--obap-inactive-color","#9E9E9E"),t.style.setProperty("--obap-on-primary-color","#FFFFFF"),t.style.setProperty("--obap-on-primary-inactive-color","rgba(255, 255, 255, 0.7)"),t.style.setProperty("--obap-on-accent-color","#FFFFFF"),t.style.setProperty("--obap-on-accent-inactive-color","rgba(255, 255, 255, 0.7)"),t.style.setProperty("--obap-on-background-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-on-surface-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-on-window-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-on-error-color","#FFFFFF"),t.style.setProperty("--obap-on-notification-color","rgba(255, 255, 255, 0.87)"),t.style.setProperty("--obap-on-selection-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-text-primary-color","rgba(0, 0, 0, 0.87)"),t.style.setProperty("--obap-text-secondary-color","rgba(0, 0, 0, 0.54)"),t.style.setProperty("--obap-text-hint-color","rgba(0, 0, 0, 0.38)"),t.style.setProperty("--obap-text-disabled-color","rgba(0, 0, 0, 0.38)"),t.style.setProperty("--obap-text-icon-color","rgba(0, 0, 0, 0.38)"),t.style.setProperty("--obap-divider-on-primary-color","rgba(255, 255, 255, 0.20)"),t.style.setProperty("--obap-divider-on-surface-color","rgba(0, 0, 0, 0.20)")}apply(t,e){let o=this.__themes[t];return e=e||document.documentElement,!!o&&(e.style.setProperty("--obap-primary-light-color",o.primaryLight),e.style.setProperty("--obap-primary-color",o.primary),e.style.setProperty("--obap-primary-dark-color",o.primaryDark),e.style.setProperty("--obap-accent-color",o.accent),o.window?e.style.setProperty("--obap-window-color",o.window):e.style.setProperty("--obap-window-color","#FAFAFA"),!0)}clear(t,e){if(e=e||!1,(t=t||document.documentElement).style.removeProperty("--obap-primary-light-color"),t.style.removeProperty("--obap-primary-color"),t.style.removeProperty("--obap-primary-dark-color"),t.style.removeProperty("--obap-accent-color"),t.style.removeProperty("--obap-window-color"),e){let t=document.documentElement;t.style.removeProperty("--obap-background-color"),t.style.removeProperty("--obap-surface-color"),t.style.removeProperty("--obap-error-color"),t.style.removeProperty("--obap-notification-color"),t.style.removeProperty("--obap-selection-color"),t.style.removeProperty("--obap-block-color"),t.style.removeProperty("--obap-inactive-color"),t.style.removeProperty("--obap-on-primary-color"),t.style.removeProperty("--obap-on-primary-inactive-color"),t.style.removeProperty("--obap-on-accent-color"),t.style.removeProperty("--obap-on-accent-inactive-color"),t.style.removeProperty("--obap-on-background-color"),t.style.removeProperty("--obap-on-surface-color"),t.style.removeProperty("--obap-on-window-color"),t.style.removeProperty("--obap-on-error-color"),t.style.removeProperty("--obap-on-notification-color"),t.style.removeProperty("--obap-on-selection-color"),t.style.removeProperty("--obap-text-primary-color"),t.style.removeProperty("--obap-text-secondary-color"),t.style.removeProperty("--obap-text-hint-color"),t.style.removeProperty("--obap-text-disabled-color"),t.style.removeProperty("--obap-text-icon-color"),t.style.removeProperty("--obap-divider-on-primary-color"),t.style.removeProperty("--obap-divider-on-surface-color")}}create(t,e,o,i,s,n){this.__themes[t]=new be(t,e,o,i,s,n)}getNames(){return Object.getOwnPropertyNames(this.__themes)}hasTheme(t){return this.getNames().indexOf(t)>-1}},ve=t=>class extends t{get theme(){return this._theme}set theme(t){const e=this.theme;if(t!==e){if(this._theme=t,this.shadowRoot){const t=this.shadowRoot.host;this.theme&&this.hasTheme(this.theme)?ge.apply(this.theme,t):(this._theme=null,ge.clear(t,!1))}else this._theme=null;this.requestUpdate("theme",e)}}static get properties(){return{theme:{type:String,attribute:"theme"}}}constructor(){super(),this._theme=null}setGlobalTheme(t){ge.apply(t)}getThemeNames(){return ge.getNames()}hasTheme(t){return ge.hasTheme(t)}};window.ObapRouter=window.ObapRouter||{},window.ObapRouter.launchParameters=window.ObapRouter.launchParameters||null;class me{constructor(t,e,o){this.name=t,this.pattern=e,this.isDefault=o||!1}}const ye=t=>class extends t{static get properties(){return{routes:{type:Object}}}get currentRoute(){return this._currentRoute}set currentRoute(t){(this.currentRoute?this.currentRoute.name:"")!==(t?t.name:"")&&(this._currentRoute=t,this._popping||history.pushState(this._currentParameters,"",this._buildUrl()))}constructor(){super(),this.routes={},this._defaultRouteName=null,this._path=null,this._currentRoute=null,window.ObapRouter.launchParameters=null,this._boundHandleOnPopStateEvent=this._handleOnPopStateEvent.bind(this),this._boundHandleChangeRouteEvent=this._handleChangeRouteEvent.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this._boundHandleOnPopStateEvent),window.addEventListener("obap-change-route",this._boundHandleChangeRouteEvent)}disconnectedCallback(){window.removeEventListener("popstate",this._boundHandleOnPopStateEvent),window.removeEventListener("obap-change-route",this._boundHandleChangeRouteEvent),super.disconnectedCallback()}registerRoute(t){this.routes[t.name]=t,t.isDefault&&(this._defaultRouteName=t.name)}registerRoutes(t){t.forEach(t=>this.registerRoute(t))}setDefaultRoute(t){let e=this.getRoute(t);e&&(e.isDefault=!0,this._defaultRouteName=t)}unregisterRoute(t){delete this.routes[t]}getRoute(t){return this.routes[t]}navigateBack(){history.back()}navigateForward(){history.forward()}navigateToDefault(t){if(0!==this._getRouteCount())if(t){const t=this._getRouteFromUrl();this.setCurrentRoute(t.name)}else this._defaultRouteName&&this.setCurrentRoute(this._defaultRouteName)}setCurrentRoute(t){if(this.currentRoute&&this.currentRoute.name===t)return;let e=this.getRoute(t);e&&(this.currentRoute=e,this.onRouteChange&&this.onRouteChange(t))}_fireEvent(t,e){let o=new CustomEvent(t,{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(o)}_getRouteCount(){return Object.keys(this.routes).length}_mapRoute(t){if(t&&""===t.name){const e=Object.keys(this.routes);for(let o=0;o<e.length;o++){const i=this.routes[e[o]];if(i&&(i.pattern===t.pattern||""===t.pattern&&i.isDefault))return i}}return t}_setRouteFromUrl(){let t=location.hash.replace("#",""),e={};location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(t,o,i)=>e[o]=i),this._path=location.pathname;let o=new me("",t);null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=e),this.currentRoute=this._mapRoute(o)}_getRouteFromUrl(){let t={},e=location.hash.replace("#","");return location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(e,o,i)=>t[o]=i),this._path=location.pathname,null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=t),this._mapRoute(new me("",e))}_handleOnPopStateEvent(t){const e=this._getRouteFromUrl();e&&(this._popping=!0,this.setCurrentRoute(e.name),this._popping=!1)}_handleChangeRouteEvent(t){const e=t.detail.routeName;this.setCurrentRoute(e)}_buildUrl(){let t=location.origin+location.pathname;if(this.currentRoute&&this.currentRoute.name){if(window.ObapRouter.launchParameters){const e=Object.keys(window.ObapRouter.launchParameters),o=[];if(e&&e.length>0){for(let t=0;t<e.length;t++){const i=e[t];o.push(`${i}=${window.ObapRouter.launchParameters[i]}`)}t+="?"+o.join("&")}}this.currentRoute.isDefault||(t+="#"+this.currentRoute.pattern)}return t}},_e=t=>class extends(ye(ve(t))){static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},views:{type:Array},canChangeView:{type:Boolean}}}get selectedViewIndex(){return this._selectedViewIndex}set selectedViewIndex(t){const e=this.selectedViewIndex;if(e!==t){this._selectedViewIndex=t,this._previousViewIndex=e;const o=this.getSelectedView();o&&this.setCurrentRoute(o.name,null),this.requestUpdate("selectedViewIndex",e)}}constructor(){super(),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.views=[],this.label="untitled",this.icon="",this.defaultViewName=null,this._selectedViewIndex=null,this._previousViewIndex=null,this._navigatorCounts={}}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(t){super.updated(t),t.forEach((t,e)=>{"views"===e&&this._registerViews()})}findView(t){return this.views.find(e=>e.name===t)}showView(t){const e=this.findView(t);e&&(this.selectedViewIndex=this.views.indexOf(e))}canViewActivate(t){let e=null;return e=t?this.findView(t):this.views[this.selectedViewIndex],!e||e.canViewActivate()}canViewDeactivate(t){let e=null;return e=t?this.findView(t):this.views[this.selectedViewIndex],!e||e.canViewDeactivate()}showPreviousView(){let t=parseInt(this._previousViewIndex);t>=0?(this.selectedViewIndex=t,this._previousViewIndex=null):this.defaultViewName&&this.showView(this.defaultViewName)}getSelectedView(){let t=parseInt(this.selectedViewIndex);return t>=0?this.views[t]:null}getNavigatorViews(t){let e=this.views[this.selectedViewIndex];return e?this.views.filter(o=>o.navigators.indexOf(t)>-1&&(0===o.associations.length||o.associations.indexOf(e.name)>-1)):[]}getEffectiveDisplayTitle(){let t=this.getSelectedView();return t&&t.modal?t.label:this.label}isModalView(){let t=this.getSelectedView();return!(!t||!t.modal)}navigatorViewCount(t){return void 0!==this._navigatorCounts[t]?this._navigatorCounts[t]:0}onRouteChange(t){this.showView(t)}_handleSlotChangeEvent(t){let e=this.renderRoot.querySelector("slot");if(!e)return;let o=e.assignedNodes({flatten:!0}).filter(t=>1===t.nodeType&&"OBAP-APPLICATION-VIEW"===t.tagName);this.views.length!==o.length&&(this.views=o),this.views.forEach(t=>{t.navigators.forEach(t=>{void 0===this._navigatorCounts[t]&&(this._navigatorCounts[t]=0),this._navigatorCounts[t]++})}),this.requestUpdate()}_registerViews(){let t=!1;this.views.forEach(e=>{e.default&&(t=!0,this.defaultViewName=e.name),this.registerRoute(new me(e.name,e.name,e.default))}),!t&&this.views.length>0&&(this.defaultViewName=this.views[0].name,this.setDefaultRoute(this.defaultViewName)),this.navigateToDefault(!0)}},we=(pe(t||(t=ut`.typography-display{font-size:2.125rem;line-height:2.5rem;letter-spacing:.0074em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),pe(e||(e=ut`.typography-headline{font-size:1.5rem;line-height:2rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),pe(o||(o=ut`.typography-title{font-size:1.25rem;line-height:2rem;letter-spacing:.0075em;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),pe(i||(i=ut`.typography-subtitle{font-size:1rem;line-height:1.75rem;letter-spacing:.0094em;font-weight:400;-webkit-font-smoothing:antialiased}`))),fe=pe(s||(s=ut`.typography-body{font-size:.8125rem;line-height:1.15rem;letter-spacing:.0179em;font-weight:400;-webkit-font-smoothing:antialiased}`)),xe=pe(n||(n=ut`.typography-button{font-size:.75rem;line-height:1.25rem;letter-spacing:.0333em;text-transform:uppercase;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`));pe(a||(a=ut`.typography-caption{font-size:.6875rem;line-height:1.15rem;letter-spacing:.0333em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),pe(r||(r=ut`.typography-overline{font-size:.6875rem;line-height:2rem;letter-spacing:.15em;text-transform:uppercase;font-weight:400;-webkit-font-smoothing:antialiased}`)),pe(l||(l=ut`.typography-code{font-family:'Roboto Mono',monospace;font-size:.875rem;line-height:1.25rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased}`));class Se extends ue{static get properties(){return{name:{type:String,attribute:"name",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus"}}}constructor(){super(),this.hasFocus=!1,this.tabIndex=0,this._boundHandleFocusEvent=this._handleFocusEvent.bind(this),this._boundHandleBlurEvent=this._handleBlurEvent.bind(this)}updated(t){super.updated(t),t.forEach((t,e)=>{"disabled"===e&&(this.disabled?this.tabIndex=-1:this.tabIndex=0)})}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._boundHandleFocusEvent),this.addEventListener("blur",this._boundHandleBlurEvent)}disconnectedCallback(){this.removeEventListener("focus",this._boundHandleFocusEvent),this.removeEventListener("blur",this._boundHandleBlurEvent),super.disconnectedCallback()}_handleFocusEvent(t){this.disabled||(this.hasFocus=!0)}_handleBlurEvent(t){this.hasFocus=!1}}const Ee=pe(c||(c=ut`:host([elevation="0"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),Ce=pe(p||(p=ut`.elevation-0{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),Ve=pe(d||(d=ut`:host([elevation="1"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),Pe=pe(h||(h=ut`.elevation-1{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),ke=pe(u||(u=ut`:host([elevation="2"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),ze=pe(b||(b=ut`.elevation-2{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),Ie=pe(g||(g=ut`:host([elevation="3"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),Ne=pe(v||(v=ut`.elevation-3{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),Re=pe(m||(m=ut`:host([elevation="4"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),Me=pe(y||(y=ut`.elevation-4{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),Le=pe(_||(_=ut`:host([elevation="6"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),Te=pe(w||(w=ut`.elevation-6{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),Ae=pe(f||(f=ut`:host([elevation="8"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),He=pe(x||(x=ut`.elevation-8{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),Oe=pe(S||(S=ut`:host([elevation="12"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),Be=pe(E||(E=ut`.elevation-12{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),Fe=pe(C||(C=ut`:host([elevation="16"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),$e=pe(V||(V=ut`.elevation-16{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),Ue=pe(P||(P=ut`:host([elevation="24"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),De=[Ce,Pe,ze,Ne,Me,Te,He,Be,$e,pe(k||(k=ut`.elevation-24{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`))],je=[Ee,Ve,ke,Ie,Re,Le,Ae,Oe,Fe,Ue];const qe=new class{addGroup(t,e){const o=document.createElement("svg");o.innerHTML=e;const i=o.querySelector("defs");if(i){const e=i.querySelectorAll("g");e.length>0&&(window.ObapIcons[t]||(window.ObapIcons[t]={}),e.forEach(e=>window.ObapIcons[t][e.id]=new Lt([`<svg viewBox="0 0 24 24">${e.outerHTML}</svg>`],[])))}}get(t){let e=t.split(":"),o="standard",i=e[0];return e.length>1&&(o=e[0],i=e[1]),window.ObapIcons[o]&&window.ObapIcons[o][i]?window.ObapIcons[o][i]:null}getNames(t){return null==t&&(t="standard"),window.ObapIcons[t]?Object.getOwnPropertyNames(window.ObapIcons[t]).map(e=>`${t}:${e}`):[]}getGroups(){return Object.getOwnPropertyNames(window.ObapIcons).filter(t=>"iconManager"!==t&&"get"!==t)}};window.ObapIcons=window.ObapIcons||{iconManager:qe,get:qe.get};const We=window.ObapIcons.iconManager;We.getNames,We.getGroups;We.addGroup("core",'\n    <defs>\n        <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g>\n        <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g>\n        <g id="chevron-up"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></g>\n        <g id="chevron-down"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></g>\n        <g id="arrow-left"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>\n        <g id="arrow-right"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>\n        <g id="arrow-up"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>\n        <g id="arrow-down"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>\n        <g id="arrow-drop-left"><path d="M14 7l-5 5 5 5V7z"/></g>\n        <g id="arrow-drop-right"><path d="M10 17l5-5-5-5v10z"/></g>\n        <g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"/></g>\n        <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"/></g>\n        <g id="edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>\n        <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>\n        <g id="cross"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>\n        <g id="error"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>\n    </defs>\n');window.customElements.define("obap-icon",class extends ue{static get styles(){return[pe(z||(z=ut`
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
        `))]}static get properties(){return{icon:{type:String,attribute:"icon"}}}constructor(){super(),this.icon=""}render(){return We.get(this.icon)}});window.customElements.define("obap-button",class extends Se{static get styles(){return[xe,ke,Le,pe(I||(I=ut`
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
        `))]}static get properties(){return{raised:{type:Boolean,attribute:"raised",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0},round:{type:Boolean,attribute:"round",reflect:!0},toggle:{type:Boolean,attribute:"toggle",reflect:!0},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.raised=!1,this.noInk=!1,this.round=!1,this.toggle=!1,this.selected=!1,this.icon="",this.label="",this.role="button",this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleTouchStartEvent=this._handleTouchStartEvent.bind(this),this._boundHandleTouchEndEvent=this._handleTouchEndEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("touchstart",this._boundHandleTouchStartEvent),this.addEventListener("touchend",this._boundHandleTouchEndEvent)}disconnectedCallback(){this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("touchstart",this._boundHandleTouchStartEvent),this.removeEventListener("touchend",this._boundHandleTouchEndEvent),super.disconnectedCallback()}updated(t){super.updated(t),t.forEach((t,e)=>{switch(e){case"raised":this.raised?this.setAttribute("elevation",2):this.removeAttribute("elevation");break;case"label":case"icon":this.setAttribute("aria-label",this._getAriaLabel())}})}_getAriaLabel(){return this.label?this.label:this.icon}render(){return Qt(N||(N=ut`
            <div class="container typography-button">
                ${0}
                ${0} 
            </div>
            ${0}
        `),this.icon?Qt(R||(R=ut`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.label?Qt(M||(M=ut`<div ?has-icon="${0}">${0}</div>`),""!==this.icon,this.label):null,this.noInk?null:Qt(L||(L=ut`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.selected))}_handleMouseDownEvent(t){t.preventDefault(),this._handleDown()}_handleMouseUpEvent(t){t.preventDefault(),this._handleUp()}_handleTouchStartEvent(t){t.preventDefault(),this._handleDown()}_handleTouchEndEvent(t){t.preventDefault(),this._handleUp(),this.click()}_handleDown(){this.raised?this.toggle?(this.selected=!this.selected,this.selected?this.setAttribute("elevation",6):this.setAttribute("elevation",2)):this.setAttribute("elevation",6):this.toggle&&(this.selected=!this.selected)}_handleUp(){this.raised&&!this.toggle&&this.setAttribute("elevation",2)}});window.customElements.define("obap-top-app-bar",class extends ue{static get styles(){return[we,je,pe(T||(T=ut`
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
        `))]}static get properties(){return{caption:{type:String,attribute:"caption"},elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.caption="",this.elevation=0}render(){return Qt(A||(A=ut` 
            <div class="container">
                <div class="actions"><slot name="left"></slot></div>
                <div class="caption typography-subtitle">${0}</div>
                <div class="actions"><slot name="right"></slot></div>
            </div>
      `),this.caption)}});const Je=t=>class extends t{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){const e=this.selectedIndex;(e!=t||this.toggles)&&(this._selectedIndex=t,this._changeSelection(this._selectedIndex,e),this.requestUpdate("selectedIndex",e))}get items(){return this._items}set items(t){throw'"items" is read only'}static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",hasChanged:(t,e)=>t!==e,reflect:!0},items:{type:Array},toggles:{type:Boolean,attribute:"toggles"},selectorType:{type:String,attribute:"selector-type"},enterSelects:{type:Boolean,attribute:"enter-selects"},selectedAttribute:{type:String,attribute:"selected-attribute"}}}constructor(){super(),this._boundHandleSelectionEvent=this._handleSelectionEvent.bind(this),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._boundHandleEnterEvent=this._handleEnterEvent.bind(this),this._selectedIndex=-1,this._selectable=!0,this._items=[],this._ctrl=!1,this.toggles=!1,this.enterSelects=!1,this.selectorType="single",this.selectedAttribute="selected"}updated(t){super.updated(t),t.forEach((t,e)=>{"disabled"===e&&t!==this.disabled&&this.items.forEach(t=>{t.disabled=this.disabled})})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._boundHandleSelectionEvent),this.addEventListener("keydown",this._boundHandleEnterEvent,{capture:!0}),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.removeEventListener("click",this._boundHandleSelectionEvent),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),this.removeEventListener("keydown",this._boundHandleEnterEvent),super.disconnectedCallback()}select(t){this.selectedIndex=t}indexOf(t){return this.items.indexOf(t)}_populateItems(){let t=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(t=>1===t.nodeType&&!t.hasAttribute("no-select"));this.disabled&&t.forEach(t=>{t.disabled=this.disabled});const e=this._items;this._items=t,this._changeSelection(this.selectedIndex,-1),this.requestUpdate("items",e)}_handleSlotChangeEvent(t){this._populateItems()}_handleSelectionEvent(t){const e=this.items.indexOf(t.target);e>-1&&(this._ctrl=t.ctrlKey,this.select(e),this._ctrl=!1)}_handleEnterEvent(t){if("Enter"!==t.key||!this.enterSelects)return;const e=this.indexOf(t.target);e>-1&&!t.target.disabled&&this.select(e)}_deselectItem(t){if(-1===t)this.items.forEach(t=>t.removeAttribute(this.selectedAttribute));else{const e=this.items[t];e&&(e.removeAttribute(this.selectedAttribute),this._fireEvent("obap-item-deselected",{item:e,index:t},!1))}}_selectItem(t){const e=this.items[t];e&&(e.setAttribute(this.selectedAttribute,""),this._fireEvent("obap-item-selected",{item:e,index:t},!1))}_changeSelection(t,e){if(-1===t||0===this.items.length)return;if(t===e)return this._deselectItem(e),void(this._selectedIndex=-1);const o=this.items[t];this._fireEvent("obap-item-selecting",{newIndex:t,oldIndex:e,item:o},!0)?(this._deselectItem(e),this._selectItem(t),this._selectedIndex=t):this._selectedIndex=e}_fireEvent(t,e,o){const i=new CustomEvent(t,{bubbles:!0,composed:!0,cancelable:o,detail:e});return this.dispatchEvent(i)}};class Ge extends(Je(ue)){static get styles(){return pe(H||(H=ut`
            :host {
                display: block;
            }

            :host > ::slotted(:not(slot):not([selected])) {
                display: none !important;
            }
        `))}render(){return Qt(O||(O=ut`<slot></slot>`))}}window.customElements.define("obap-pages",Ge);window.customElements.define("obap-scroll-container",class extends ue{static get styles(){return[pe(B||(B=ut`
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
        `))]}static get properties(){return{vertical:{type:Boolean,attribute:"vertical",reflect:!0},scrollSpeed:{type:Number,attribute:"scroll-speed"},itemStep:{type:Boolean,attribute:"item-step"},disableScrolling:{type:Boolean,attribute:"disable-scrolling"},hideButtons:{type:Boolean,attribute:"hide-buttons"},miniButtons:{type:Boolean,attribute:"mini-buttons"},_leftScrollButtonVisible:{type:Boolean},_rightScrollButtonVisible:{type:Boolean},_hasOverflow:{type:Boolean}}}constructor(){super(),this.vertical=!1,this.scrollSpeed=2,this.itemStep=!1,this.disableScrolling=!1,this.hideButtons=!1,this._scrolling=!1,this._scrollDirection="none",this._container=null,this._containerRect=null,this.miniButtons=!1,this._boundScroll=this._scroll.bind(this),this._holdDelay=1,this._holdJob=null,this._hasOverflow=!1,this._children=[],this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._resizeObserver=new ResizeObserver(t=>{this._setScrollInfo(),this._calculateButtonVisibility()})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this._resizeObserver.unobserve(this),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(t){super.updated(t),this._setScrollInfo(),this._calculateButtonVisibility()}render(){return Qt(F||(F=ut`
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
        `),this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._leftScrollButtonVisible,this._getIconName(!0),this._scrollLeft,this._endScroll,this._scrollLeft,this._endScroll,this._onScroll,this.disableScrolling,this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._rightScrollButtonVisible,this._getIconName(!1),this._scrollRight,this._endScroll,this._scrollRight,this._endScroll)}_getIconName(t){return this.vertical?t?"core:chevron-up":"core:chevron-down":t?"core:chevron-left":"core:chevron-right"}_calculateButtonVisibility(){if(this.disableScrolling)return this._leftScrollButtonVisible=!1,void(this._rightScrollButtonVisible=!1);this.vertical?(this._leftScrollButtonVisible=this._container.scrollTop>0,this._rightScrollButtonVisible=this._container.scrollTop<this._container.scrollHeight-this._container.clientHeight-1,this._hasOverflow=this._container.scrollHeight>this._container.clientHeight):(this._leftScrollButtonVisible=this._container.scrollLeft>0,this._rightScrollButtonVisible=this._container.scrollLeft<this._container.scrollWidth-this._container.clientWidth-1,this._hasOverflow=this._container.scrollWidth>this._container.clientWidth)}_setScrollInfo(){this._container=this.renderRoot.getElementById("contentContainer"),this._containerRect=this._container.getBoundingClientRect()}_scrollLeft(t){this.disableScrolling||(this.itemStep?this._scrollToNextChild("left"):(this._startScroll("left"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_scrollRight(t){this.disableScrolling||(this.itemStep?this._scrollToNextChild("right"):(this._startScroll("right"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_startScroll(t){this._scrolling=!0,this._scrollDirection=t,this._scroll()}_endScroll(t){this._holdJob&&(clearInterval(this._holdJob),this._holdJob=null),this._scrolling=!1,this._scrollDirection="none"}_scrollToNextChild(t){const e=this._container.getBoundingClientRect(),o=this._children.filter(t=>{const o=t.getBoundingClientRect();return this.vertical?o.top<=e.bottom&&o.bottom>=e.top:o.left<=e.right&&o.right>=e.left});if(o.length>0){const e=o[0],i=getComputedStyle(e);if(this.vertical){let o=e.offsetHeight;o+=parseInt(i.marginTop)+parseInt(i.marginBottom),"left"===t?this._container.scrollTop-=o:this._container.scrollTop+=o}else{let o=e.offsetWidth;o+=parseInt(i.marginLeft)+parseInt(i.marginRight),"left"===t?this._container.scrollLeft-=o:this._container.scrollLeft+=o}this._calculateButtonVisibility()}}_scroll(){if(!this._scrolling)return;let t="left"===this._scrollDirection?-this.scrollSpeed:this.scrollSpeed,e=0,o=!1;this.vertical?(e=this._container.scrollTop+t,e>=0&&e<=this._container.scrollHeight-this._container.clientHeight&&(this._container.scrollTop=e,o=!0)):(e=this._container.scrollLeft+t,e>=0&&e<=this._container.scrollWidth-this._container.clientWidth&&(this._container.scrollLeft=e,o=!0)),o?this._calculateButtonVisibility():this._endScroll()}_onScroll(){this._calculateButtonVisibility()}_handleSlotChangeEvent(t){const e=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(t=>1===t.nodeType);this._children=e,this.requestUpdate()}});window.customElements.define("obap-ripple",class extends ue{static get styles(){return[pe($||($=ut`
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
        `))]}static get properties(){return{extend:{type:Number,attribute:"extend",reflect:!0},active:{type:Boolean,attribute:"active",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.extend=0,this.active=!1,this.hasFocus=!1,this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleMouseLeaveEvent=this._handleMouseLeaveEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.noInk||(this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.addEventListener("touchstart",this._boundHandleMouseDownEvent),this.addEventListener("touchend",this._boundHandleMouseUpEvent))}disconnectedCallback(){this.noInk||(this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.removeEventListener("touchstart",this._boundHandleMouseDownEvent),this.removeEventListener("touchend",this._boundHandleMouseUpEvent)),super.disconnectedCallback()}_handleMouseDownEvent(t){this.noInk||(this.active=!0)}_handleMouseUpEvent(t){this.active=!1}_handleMouseLeaveEvent(t){this.active=!1}});window.customElements.define("obap-tab",class extends Se{static get styles(){return pe(U||(U=ut`
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
      `))}static get properties(){return{noInk:{type:Boolean,attribute:"no-ink",reflect:!0},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.role="tab",this.noInk=!1}render(){return Qt(D||(D=ut`
            <div class="container">
                <slot></slot>
                ${0}
            </div>
        `),this.noInk?null:Qt(j||(j=ut`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected))}});class Ke extends(Je(ue)){static get styles(){return[xe,pe(q||(q=ut`
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
        `))]}static get properties(){return{fill:{type:Boolean,attribute:"fill"},scroll:{type:Boolean,attribute:"scroll"},hideScrollButtons:{type:Boolean,attribute:"hide-scroll-buttons"}}}constructor(){super(),this.role="tablist",this.fill=!1,this.scroll=!1,this.hideScrollButtons=!1,this.enterSelects=!0}render(){return Qt(W||(W=ut`
            <obap-scroll-container class="container typography-button" ?fill="${0}" ?disable-scrolling="${0}"
                                   ?hide-buttons="${0}" mini-buttons>
                <slot></slot>
            </obap-scroll-container>
        `),this.fill,!1===this.scroll,this.hideScrollButtons)}}window.customElements.define("obap-tabs",Ke);window.customElements.define("obap-material",class extends ue{static get styles(){return[je,pe(J||(J=ut`
            :host {
                display: block;
                box-sizing: border-box;
                background: var(--obap-surface-color, #FFFFFF);
                color: var(--obap-on-surface-color, rgba(black, 0.87));
            }
        `))]}static get properties(){return{elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.elevation=1}render(){return Qt(G||(G=ut`<slot></slot>`))}});const Qe=t=>class extends t{static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"}}}constructor(){super(),this.label="",this.name="",this._active=!1}get active(){return this._active}connectedCallback(){super.connectedCallback(),this.setAttribute("application-content",null)}_canActivate(){return!this.canActivate||this.canActivate()}_canDeactivate(){return!this.canDeactivate||this.canDeactivate()}_activate(){this._active||(this._active=!0,this.activate?this.activate():this._fireEvent("obap-view-activate"))}_deactivate(){this._active&&(this.deactivate?this.deactivate():this._fireEvent("obap-view-deactivate"),this._active=!1)}_fireEvent(t){let e=new CustomEvent(t,{bubbles:!1,composed:!1});this.dispatchEvent(e)}};class Xe extends(Qe(ue)){static get styles(){return[pe(K||(K=ut`
            :host {
                display: block;
                height: 100%;
            }

            .container {
                height: 100%;
            }
        `))]}render(){return Qt(Q||(Q=ut`
            <div class="container">
                <slot></slot>
            </div>
        `))}}window.customElements.define("obap-application-content",Xe);window.customElements.define("obap-application-view",class extends ue{static get styles(){return[fe,pe(X||(X=ut`
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
        `))]}static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},badgeIcon:{type:String,attribute:"badge-icon"},badgeLabel:{type:String,attribute:"badge-label"},modal:{type:Boolean,attribute:"modal"},default:{type:Boolean,attribute:"default"},subViews:{type:Array},selectedSubViewIndex:{type:Number},navigators:{type:Array,attribute:"navigators",converter:{toAttribute:t=>t.join(","),fromAttribute:t=>t.split(",")}},associations:{type:Array,attribute:"associations",converter:{toAttribute:t=>t.join(","),fromAttribute:t=>t.split(",")}},hasSideViews:{type:Boolean,attribute:"has-side-views",reflect:!0},hideSubViewScrollButtons:{type:Boolean,attribute:"hide-sub-view-scroll-buttons"}}}constructor(){super(),this._active=!1,this._slotUpdated=!1,this.name="",this.label="untitled",this.icon="",this.badgeIcon="",this.badgeLabel="",this.modal=!1,this.default=!1,this.selectedSubViewIndex=0,this.subViews=[],this.navigators=[],this.associations=[],this.hasSideViews=!1,this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}notifyViewActivate(){this._active=!0,this.subViews.forEach(t=>{t._activate&&t._activate()})}notifyViewDeactivate(){this._active&&(this._active=!1,this.subViews.forEach(t=>{t._deactivate&&t._deactivate()}))}canViewActivate(){let t=!0;return this.subViews.forEach(e=>{e._canActivate&&(e._canActivate()||(t=!1))}),t}canViewDeactivate(){let t=!0;return this.subViews.forEach(e=>{e._canDeactivate&&(e._canDeactivate()||(t=!1))}),t}render(){return Qt(Y||(Y=ut`
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
        `),this._getSubViewNavigator(),this.selectedSubViewIndex)}_getSubViewNavigator(){return this.subViews.length>1?Qt(Z||(Z=ut`
                <obap-material class="sub-view-navigator" elevation="1">
                    <obap-tabs scroll ?hide-scroll-buttons="${0}" selected-index="${0}" @obap-item-selected="${0}">
                        ${0}
                    </obap-tabs>
                </obap-material>
            `),this.hideSubViewScrollButtons,this.selectedSubViewIndex,this._handleSubViewSelect,this.subViews.map(t=>Qt(tt||(tt=ut`<obap-tab sub-view-name="${0}">${0}</obap-tab>`),t.name,t.label))):null}_handleSubViewSelect(t){this.selectedSubViewIndex=t.detail.index}_handleSlotChangeEvent(t){let e=this.renderRoot.querySelector("slot"),o=this.renderRoot.querySelector('slot[name="side"]');if(o){const t=o.assignedNodes({flatten:!0}).filter(t=>1===t.nodeType&&t.hasAttribute("application-content")).length;this.hasSideViews=t>0}if(!e)return;let i=e.assignedNodes({flatten:!0}).filter(t=>1===t.nodeType&&t.hasAttribute("application-content"));this.subViews.length!==i.length&&(this.subViews=i),null===this.selectedSubViewIndex&&this.subViews&&this.subViews.length>0&&(this.selectedSubViewIndex=0),this._active&&this.notifyViewActivate(),this.requestUpdate()}_fireEvent(t,e){let o=new CustomEvent(t,{detail:e,bubbles:!0,composed:!0});this.dispatchEvent(o)}});class Ye extends(_e(ue)){static get styles(){return[fe,pe(et||(et=ut`
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
        `))]}static get properties(){return{_navigatorIndex:{type:Number}}}constructor(){super(),this._navigatorIndex=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.forEach((t,e)=>{})}render(){return Qt(ot||(ot=ut`
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
            </div>`),this.getEffectiveDisplayTitle(),this._getToolBarIcon(this.icon),this._navigatorIndex,this._renderNavigator(),this.selectedViewIndex)}_renderNavigator(){return Qt(it||(it=ut`
            <div>
                ${0}
            </div>`),this.views.map((t,e)=>Qt(st||(st=ut`
                    <obap-material elevation="1" class="navigator-item" index="${0}" @click="${0}">
                        ${0}
                        <div class="navigator-label typography-body">${0}</div>
                    </obap-material>
                `),e,this._navigatorClick,t.icon?Qt(nt||(nt=ut`<obap-icon class="navigator-icon" icon="${0}"></obap-icon>`),t.icon):null,t.label)))}_getToolBarIcon(t){return this._navigatorIndex>0?Qt(at||(at=ut`<obap-button round slot="left" icon="core:arrow-left" @click="${0}"></obap-button>`),t=>this._navigatorIndex=0):t?Qt(rt||(rt=ut`<obap-icon class="app-icon" slot="left" icon="${0}"></obap-icon>`),t):null}_navigatorClick(t){const e=t.target.getAttribute("index");null!==e&&(this.selectedViewIndex=e,this._navigatorIndex=1)}getEffectiveDisplayTitle(){return 0===this._navigatorIndex?this.label:this.getSelectedView().label}}window.customElements.define("obap-mobile-application",Ye),We.addGroup("app",'\n    <defs>\n        <g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"/></g>\n        <g id="styles"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"/></g>\n        <g id="charts"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></g>\n        <g id="data-tables"><path d="M22,2H2v20h20V2L22,2z M4,8V4h16v4H4L4,8z M4,14v-4h16v4H4L4,14z M4,20v-4h16v4H4L4,20z"/></g>\n        <g id="tooltips-callouts"><path d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/></g>\n        <g id="selection"><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></g>\n        <g id="progress-indicators"><path d="M15.1,19.37l1,1.74c-0.96,0.44-2.01,0.73-3.1,0.84v-2.02C13.74,19.84,14.44,19.65,15.1,19.37z M4.07,13H2.05 c0.11,1.1,0.4,2.14,0.84,3.1l1.74-1C4.35,14.44,4.16,13.74,4.07,13z M15.1,4.63l1-1.74C15.14,2.45,14.1,2.16,13,2.05v2.02 C13.74,4.16,14.44,4.35,15.1,4.63z M19.93,11h2.02c-0.11-1.1-0.4-2.14-0.84-3.1l-1.74,1C19.65,9.56,19.84,10.26,19.93,11z M8.9,19.37l-1,1.74c0.96,0.44,2.01,0.73,3.1,0.84v-2.02C10.26,19.84,9.56,19.65,8.9,19.37z M11,4.07V2.05 c-1.1,0.11-2.14,0.4-3.1,0.84l1,1.74C9.56,4.35,10.26,4.16,11,4.07z M18.36,7.17l1.74-1.01c-0.63-0.87-1.4-1.64-2.27-2.27 l-1.01,1.74C17.41,6.08,17.92,6.59,18.36,7.17z M4.63,8.9l-1.74-1C2.45,8.86,2.16,9.9,2.05,11h2.02C4.16,10.26,4.35,9.56,4.63,8.9z M19.93,13c-0.09,0.74-0.28,1.44-0.56,2.1l1.74,1c0.44-0.96,0.73-2.01,0.84-3.1H19.93z M16.83,18.36l1.01,1.74 c0.87-0.63,1.64-1.4,2.27-2.27l-1.74-1.01C17.92,17.41,17.41,17.92,16.83,18.36z M7.17,5.64L6.17,3.89 C5.29,4.53,4.53,5.29,3.9,6.17l1.74,1.01C6.08,6.59,6.59,6.08,7.17,5.64z M5.64,16.83L3.9,17.83c0.63,0.87,1.4,1.64,2.27,2.27 l1.01-1.74C6.59,17.92,6.08,17.41,5.64,16.83z M13,7h-2v5.41l4.29,4.29l1.41-1.41L13,11.59V7z"/></g>\n        <g id="tabs"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/></g>\n        <g id="dialogs"><path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M17,12H7v-2 h10V12z M13,16H7v-2h6V16z"/></g>\n        <g id="cards"><path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/></g>\n        <g id="buttons"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></g>\n        <g id="chips"><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></g>\n\n\n    </defs>\n');window.customElements.define("demo-styles-elevation",class extends ue{static get styles(){return[De,fe,pe(lt||(lt=ut`
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
        `))]}static get properties(){return{items:{type:Array}}}constructor(){super(),this.items=[0,1,2,3,4,6,8,12,16,24]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.forEach((t,e)=>{})}render(){return Qt(ct||(ct=ut`
            <div class="container">
                <div class="item-container">
                    ${0}
                </div>
            </div>
        `),this.items.map(t=>Qt(pt||(pt=ut`<div class="item elevation-${0} typography-body">${0}</div>`),t,t)))}});window.customElements.define("demo-mobile-app",class extends ue{static get styles(){return[pe(dt||(dt=ut`
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
        `))]}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(t){super.firstUpdated(t)}updated(t){super.updated(t),t.forEach((t,e)=>{})}render(){return Qt(ht||(ht=ut`
            <obap-mobile-application label="OBAP Elements" icon="app:polymer">
                <obap-application-view name="styles" label="Styles" icon="app:styles" hide-sub-view-scroll-buttons>
                    <obap-application-content name="elevation" label="Elevation"><demo-styles-elevation class="demo"></demo-styles-elevation></obap-application-content>
                    <obap-application-content name="iconography" label="Iconography"><div class="content">Iconography</div></obap-application-content>
                    <obap-application-content name="theming" label="Theming"><div class="content">Theming</div></obap-application-content>
                    <obap-application-content name="typography" label="Typography"><div class="content">Typography</div></obap-application-content>
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
        `))}});
