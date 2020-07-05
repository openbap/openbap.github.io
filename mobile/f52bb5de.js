let e,t,o,i,s,n,r,a,l,c,h,d,p,u,b,g,v,m,_,y,f,w,x,S,E,C,P,k,V,N,R,I,A,T,L,O,B,F,H,M,z,U,$,D,q,j,W,J,G,K,Q,X,Y,Z,ee,te,oe,ie,se,ne,re,ae=e=>e;const le="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,ce=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},he=`{{lit-${String(Math.random()).slice(2)}}}`,de=`\x3c!--${he}--\x3e`,pe=new RegExp(`${he}|${de}`);class ue{constructor(e,t){this.parts=[],this.element=t;const o=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let n=0,r=-1,a=0;const{strings:l,values:{length:c}}=e;for(;a<c;){const e=s.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let i=0;for(let e=0;e<o;e++)be(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=l[a],o=me.exec(t)[2],i=o.toLowerCase()+"$lit$",s=e.getAttribute(i);e.removeAttribute(i);const n=s.split(pe);this.parts.push({type:"attribute",index:r,name:o,strings:n}),a+=n.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(he)>=0){const i=e.parentNode,s=t.split(pe),n=s.length-1;for(let t=0;t<n;t++){let o,n=s[t];if(""===n)o=ve();else{const e=me.exec(n);null!==e&&be(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),o=document.createTextNode(n)}i.insertBefore(o,e),this.parts.push({type:"node",index:++r})}""===s[n]?(i.insertBefore(ve(),e),o.push(e)):e.data=s[n],a+=n}}else if(8===e.nodeType)if(e.data===he){const t=e.parentNode;null!==e.previousSibling&&r!==n||(r++,t.insertBefore(ve(),e)),n=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(o.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(he,t+1));)this.parts.push({type:"node",index:-1}),a++}}else s.currentNode=i.pop()}for(const e of o)e.parentNode.removeChild(e)}}const be=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},ge=e=>-1!==e.index,ve=()=>document.createComment(""),me=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function _e(e,t){const{element:{content:o},parts:i}=e,s=document.createTreeWalker(o,133,null,!1);let n=fe(i),r=i[n],a=-1,l=0;const c=[];let h=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==r&&r.index===a;)r.index=null!==h?-1:r.index-l,n=fe(i,n),r=i[n]}c.forEach(e=>e.parentNode.removeChild(e))}const ye=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},fe=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(ge(t))return o}return-1};const we=new WeakMap,xe=e=>"function"==typeof e&&we.has(e),Se={},Ee={};class Ce{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=le?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s,n=0,r=0,a=i.nextNode();for(;n<o.length;)if(s=o[n],ge(s)){for(;r<s.index;)r++,"TEMPLATE"===a.nodeName&&(t.push(a),i.currentNode=a.content),null===(a=i.nextNode())&&(i.currentNode=t.pop(),a=i.nextNode());if("node"===s.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,s.name,s.strings,this.options));n++}else this.__parts.push(void 0),n++;return le&&(document.adoptNode(e),customElements.upgrade(e)),e}}const Pe=` ${he} `;class ke{constructor(e,t,o,i){this.strings=e,this.values=t,this.type=o,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let i=0;i<e;i++){const e=this.strings[i],s=e.lastIndexOf("\x3c!--");o=(s>-1||o)&&-1===e.indexOf("--\x3e",s+1);const n=me.exec(e);t+=null===n?e+(o?Pe:de):e.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+he}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Ve extends ke{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,o=t.firstChild;return t.removeChild(o),((e,t,o=null,i=null)=>{for(;t!==o;){const o=t.nextSibling;e.insertBefore(t,i),t=o}})(t,o.firstChild),e}}const Ne=e=>null===e||!("object"==typeof e||"function"==typeof e),Re=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Ie{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Ae(this)}_getValue(){const e=this.strings,t=e.length-1;let o="";for(let i=0;i<t;i++){o+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(Ne(e)||!Re(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ae{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Se||Ne(e)&&e===this.value||(this.value=e,xe(e)||(this.committer.dirty=!0))}commit(){for(;xe(this.value);){const e=this.value;this.value=Se,e(this)}this.value!==Se&&this.committer.commit()}}class Te{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ve()),this.endNode=e.appendChild(ve())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ve()),e.__insert(this.endNode=ve())}insertAfterPart(e){e.__insert(this.startNode=ve()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;xe(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Se,e(this)}const e=this.__pendingValue;e!==Se&&(Ne(e)?e!==this.value&&this.__commitText(e):e instanceof ke?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Re(e)?this.__commitIterable(e):e===Ee?(this.value=Ee,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Ce&&this.value.template===t)this.value.update(e.values);else{const o=new Ce(t,e.processor,this.options),i=o._clone();o.update(e.values),this.__commitNode(i),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,i=0;for(const s of e)o=t[i],void 0===o&&(o=new Te(this.options),t.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(t[i-1])),o.setValue(s),o.commit(),i++;i<t.length&&(t.length=i,this.clear(o&&o.endNode))}clear(e=this.startNode){ce(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Le{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;xe(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Se,e(this)}if(this.__pendingValue===Se)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Se}}class Oe extends Ie{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new Be(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Be extends Ae{}let Fe=!1;(()=>{try{const e={get capture(){return Fe=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class He{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;xe(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Se,e(this)}if(this.__pendingValue===Se)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Me(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Se}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Me=e=>e&&(Fe?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function ze(e){let t=Ue.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ue.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const i=e.strings.join(he);return o=t.keyString.get(i),void 0===o&&(o=new ue(e,e.getTemplateElement()),t.keyString.set(i,o)),t.stringsArray.set(e.strings,o),o}const Ue=new Map,$e=new WeakMap;const De=new class{handleAttributeExpressions(e,t,o,i){const s=t[0];if("."===s){return new Oe(e,t.slice(1),o).parts}return"@"===s?[new He(e,t.slice(1),i.eventContext)]:"?"===s?[new Le(e,t.slice(1),o)]:new Ie(e,t,o).parts}handleTextExpression(e){return new Te(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const qe=(e,...t)=>new ke(e,t,"html",De),je=(e,t)=>`${e}--${t}`;let We=!0;void 0===window.ShadyCSS?We=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),We=!1);const Je=e=>t=>{const o=je(t.type,e);let i=Ue.get(o);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Ue.set(o,i));let s=i.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(he);if(s=i.keyString.get(n),void 0===s){const o=t.getTemplateElement();We&&window.ShadyCSS.prepareTemplateDom(o,e),s=new ue(t,o),i.keyString.set(n,s)}return i.stringsArray.set(t.strings,s),s},Ge=["html","svg"],Ke=new Set,Qe=(e,t,o)=>{Ke.add(e);const i=o?o.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const r=document.createElement("style");for(let e=0;e<n;e++){const t=s[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{Ge.forEach(t=>{const o=Ue.get(je(t,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{o.add(e)}),_e(e,o)})})})(e);const a=i.content;o?function(e,t,o=null){const{element:{content:i},parts:s}=e;if(null==o)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let r=fe(s),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===o&&(a=ye(t),o.parentNode.insertBefore(t,o));-1!==r&&s[r].index===l;){if(a>0){for(;-1!==r;)s[r].index+=a,r=fe(s,r);return}r=fe(s,r)}}}(o,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(o){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),_e(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Xe={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Ye=(e,t)=>t!==e&&(t==t||e==e),Ze={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:Ye};class et extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,o)=>{const i=this._attributeNameForProperty(o,t);void 0!==i&&(this._attributeToPropertyMap.set(i,o),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Ze){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||Ze}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=Ye){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,i=t.converter||Xe,s="function"==typeof i?i:i.fromAttribute;return s?s(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,i=t.converter;return(i&&i.toAttribute||Xe.toAttribute)(e,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=Ze){const i=this.constructor,s=i._attributeNameForProperty(e,o);if(void 0!==s){const e=i._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(e);if(void 0!==i){const e=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let o=!0;if(void 0!==e){const i=this.constructor,s=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}et.finalized=!0;const tt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol();class it{constructor(e,t){if(t!==ot)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(tt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const st=(e,...t)=>{const o=t.reduce((t,o,i)=>t+(e=>{if(e instanceof it)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[i+1],e[0]);return new it(o,ot)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const nt={};class rt extends et{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,o)=>e.reduceRight((e,o)=>Array.isArray(o)?t(o,e):(e.add(o),e),o),o=t(e,new Set),i=[];o.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?tt?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==nt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return nt}}rt.finalized=!0,rt.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const i=o.scopeName,s=$e.has(t),n=We&&11===t.nodeType&&!!t.host,r=n&&!Ke.has(i),a=r?document.createDocumentFragment():t;if(((e,t,o)=>{let i=$e.get(t);void 0===i&&(ce(t,t.firstChild),$e.set(t,i=new Te(Object.assign({templateFactory:ze},o))),i.appendInto(t)),i.setValue(e),i.commit()})(e,a,Object.assign({templateFactory:Je(i)},o)),r){const e=$e.get(a);$e.delete(a);const o=e.value instanceof Ce?e.value.template:void 0;Qe(i,a,o),ce(t,t.firstChild),t.appendChild(a),$e.set(t,e)}!s&&n&&window.ShadyCSS.styleElement(t.host)};class at extends rt{get disabled(){return this._disabled}set disabled(e){const t=this.disabled;e!==t&&(this._disabled=e,e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false"),this.requestUpdate("disabled",t))}static get properties(){return{disabled:{type:Boolean,attribute:"disabled",reflect:!0},role:{type:String,attribute:"role",reflect:!0}}}constructor(){super(),this._disabled=!1,this.role=null}getCssVariableValue(e,t,o){let i=e.getPropertyValue(t);return i||o}}class lt{constructor(e,t,o,i,s,n){this.name=e,this.primary=o,this.primaryLight=t,this.primaryDark=i,this.accent=s,this.window=n}}const ct=new class{constructor(){this.__themes={},this.create("default","#8e99f3","#5c6bc0","#26418f","#ec407a","#E0E0E0");let e=document.documentElement;e.style.setProperty("-webkit-tap-highlight-color","transparent"),e.style.setProperty("--obap-background-color","#FFFFFF"),e.style.setProperty("--obap-surface-color","#FFFFFF"),e.style.setProperty("--obap-error-color","#e53935"),e.style.setProperty("--obap-notification-color","#323232"),e.style.setProperty("--obap-selection-color","#E0E0E0"),e.style.setProperty("--obap-block-color","#ECECEC"),e.style.setProperty("--obap-inactive-color","#9E9E9E"),e.style.setProperty("--obap-on-primary-color","#FFFFFF"),e.style.setProperty("--obap-on-primary-inactive-color","rgba(255, 255, 255, 0.7)"),e.style.setProperty("--obap-on-accent-color","#FFFFFF"),e.style.setProperty("--obap-on-accent-inactive-color","rgba(255, 255, 255, 0.7)"),e.style.setProperty("--obap-on-background-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-surface-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-window-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-error-color","#FFFFFF"),e.style.setProperty("--obap-on-notification-color","rgba(255, 255, 255, 0.87)"),e.style.setProperty("--obap-on-selection-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-text-primary-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-text-secondary-color","rgba(0, 0, 0, 0.54)"),e.style.setProperty("--obap-text-hint-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-text-disabled-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-text-icon-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-divider-on-primary-color","rgba(255, 255, 255, 0.20)"),e.style.setProperty("--obap-divider-on-surface-color","rgba(0, 0, 0, 0.20)")}apply(e,t){let o=this.__themes[e];return t=t||document.documentElement,!!o&&(t.style.setProperty("--obap-primary-light-color",o.primaryLight),t.style.setProperty("--obap-primary-color",o.primary),t.style.setProperty("--obap-primary-dark-color",o.primaryDark),t.style.setProperty("--obap-accent-color",o.accent),o.window?t.style.setProperty("--obap-window-color",o.window):t.style.setProperty("--obap-window-color","#FAFAFA"),!0)}clear(e,t){if(t=t||!1,(e=e||document.documentElement).style.removeProperty("--obap-primary-light-color"),e.style.removeProperty("--obap-primary-color"),e.style.removeProperty("--obap-primary-dark-color"),e.style.removeProperty("--obap-accent-color"),e.style.removeProperty("--obap-window-color"),t){let e=document.documentElement;e.style.removeProperty("--obap-background-color"),e.style.removeProperty("--obap-surface-color"),e.style.removeProperty("--obap-error-color"),e.style.removeProperty("--obap-notification-color"),e.style.removeProperty("--obap-selection-color"),e.style.removeProperty("--obap-block-color"),e.style.removeProperty("--obap-inactive-color"),e.style.removeProperty("--obap-on-primary-color"),e.style.removeProperty("--obap-on-primary-inactive-color"),e.style.removeProperty("--obap-on-accent-color"),e.style.removeProperty("--obap-on-accent-inactive-color"),e.style.removeProperty("--obap-on-background-color"),e.style.removeProperty("--obap-on-surface-color"),e.style.removeProperty("--obap-on-window-color"),e.style.removeProperty("--obap-on-error-color"),e.style.removeProperty("--obap-on-notification-color"),e.style.removeProperty("--obap-on-selection-color"),e.style.removeProperty("--obap-text-primary-color"),e.style.removeProperty("--obap-text-secondary-color"),e.style.removeProperty("--obap-text-hint-color"),e.style.removeProperty("--obap-text-disabled-color"),e.style.removeProperty("--obap-text-icon-color"),e.style.removeProperty("--obap-divider-on-primary-color"),e.style.removeProperty("--obap-divider-on-surface-color")}}create(e,t,o,i,s,n){this.__themes[e]=new lt(e,t,o,i,s,n)}getNames(){return Object.getOwnPropertyNames(this.__themes)}hasTheme(e){return this.getNames().indexOf(e)>-1}},ht=e=>class extends e{get theme(){return this._theme}set theme(e){const t=this.theme;if(e!==t){if(this._theme=e,this.shadowRoot){const e=this.shadowRoot.host;this.theme&&this.hasTheme(this.theme)?ct.apply(this.theme,e):(this._theme=null,ct.clear(e,!1))}else this._theme=null;this.requestUpdate("theme",t)}}static get properties(){return{theme:{type:String,attribute:"theme"}}}constructor(){super(),this._theme=null}setGlobalTheme(e){ct.apply(e)}getThemeNames(){return ct.getNames()}hasTheme(e){return ct.hasTheme(e)}};window.ObapRouter=window.ObapRouter||{},window.ObapRouter.launchParameters=window.ObapRouter.launchParameters||null;class dt{constructor(e,t,o){this.name=e,this.pattern=t,this.isDefault=o||!1}}const pt=e=>class extends e{static get properties(){return{routes:{type:Object}}}get currentRoute(){return this._currentRoute}set currentRoute(e){(this.currentRoute?this.currentRoute.name:"")!==(e?e.name:"")&&(this._currentRoute=e,this._popping||history.pushState(this._currentParameters,"",this._buildUrl()))}constructor(){super(),this.routes={},this._defaultRouteName=null,this._path=null,this._currentRoute=null,window.ObapRouter.launchParameters=null,this._boundHandleOnPopStateEvent=this._handleOnPopStateEvent.bind(this),this._boundHandleChangeRouteEvent=this._handleChangeRouteEvent.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this._boundHandleOnPopStateEvent),window.addEventListener("obap-change-route",this._boundHandleChangeRouteEvent)}disconnectedCallback(){window.removeEventListener("popstate",this._boundHandleOnPopStateEvent),window.removeEventListener("obap-change-route",this._boundHandleChangeRouteEvent),super.disconnectedCallback()}registerRoute(e){this.routes[e.name]=e,e.isDefault&&(this._defaultRouteName=e.name)}registerRoutes(e){e.forEach(e=>this.registerRoute(e))}setDefaultRoute(e){let t=this.getRoute(e);t&&(t.isDefault=!0,this._defaultRouteName=e)}unregisterRoute(e){delete this.routes[e]}getRoute(e){return this.routes[e]}navigateBack(){history.back()}navigateForward(){history.forward()}navigateToDefault(e){if(0!==this._getRouteCount())if(e){const e=this._getRouteFromUrl();this.setCurrentRoute(e.name)}else this._defaultRouteName&&this.setCurrentRoute(this._defaultRouteName)}setCurrentRoute(e){if(this.currentRoute&&this.currentRoute.name===e)return;let t=this.getRoute(e);t&&(this.currentRoute=t,this.onRouteChange&&this.onRouteChange(e))}_fireEvent(e,t){let o=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(o)}_getRouteCount(){return Object.keys(this.routes).length}_mapRoute(e){if(e&&""===e.name){const t=Object.keys(this.routes);for(let o=0;o<t.length;o++){const i=this.routes[t[o]];if(i&&(i.pattern===e.pattern||""===e.pattern&&i.isDefault))return i}}return e}_setRouteFromUrl(){let e=location.hash.replace("#",""),t={};location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(e,o,i)=>t[o]=i),this._path=location.pathname;let o=new dt("",e);null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=t),this.currentRoute=this._mapRoute(o)}_getRouteFromUrl(){let e={},t=location.hash.replace("#","");return location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(t,o,i)=>e[o]=i),this._path=location.pathname,null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=e),this._mapRoute(new dt("",t))}_handleOnPopStateEvent(e){const t=this._getRouteFromUrl();t&&(this._popping=!0,this.setCurrentRoute(t.name),this._popping=!1)}_handleChangeRouteEvent(e){const t=e.detail.routeName;this.setCurrentRoute(t)}_buildUrl(){let e=location.origin+location.pathname;if(this.currentRoute&&this.currentRoute.name){if(window.ObapRouter.launchParameters){const t=Object.keys(window.ObapRouter.launchParameters),o=[];if(t&&t.length>0){for(let e=0;e<t.length;e++){const i=t[e];o.push(`${i}=${window.ObapRouter.launchParameters[i]}`)}e+="?"+o.join("&")}}this.currentRoute.isDefault||(e+="#"+this.currentRoute.pattern)}return e}},ut=e=>class extends(pt(ht(e))){static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},views:{type:Array},canChangeView:{type:Boolean}}}get selectedViewIndex(){return this._selectedViewIndex}set selectedViewIndex(e){const t=this.selectedViewIndex;if(t!==e){this._selectedViewIndex=e,this._previousViewIndex=t;const o=this.getSelectedView();o&&this.setCurrentRoute(o.name,null),this.requestUpdate("selectedViewIndex",t)}}constructor(){super(),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.views=[],this.label="untitled",this.icon="",this.defaultViewName=null,this._selectedViewIndex=null,this._previousViewIndex=null,this._navigatorCounts={}}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(e){super.updated(e),e.forEach((e,t)=>{"views"===t&&this._registerViews()})}findView(e){return this.views.find(t=>t.name===e)}showView(e){const t=this.findView(e);t&&(this.selectedViewIndex=this.views.indexOf(t))}canViewActivate(e){let t=null;return t=e?this.findView(e):this.views[this.selectedViewIndex],!t||t.canViewActivate()}canViewDeactivate(e){let t=null;return t=e?this.findView(e):this.views[this.selectedViewIndex],!t||t.canViewDeactivate()}showPreviousView(){let e=parseInt(this._previousViewIndex);e>=0?(this.selectedViewIndex=e,this._previousViewIndex=null):this.defaultViewName&&this.showView(this.defaultViewName)}getSelectedView(){let e=parseInt(this.selectedViewIndex);return e>=0?this.views[e]:null}getNavigatorViews(e){let t=this.views[this.selectedViewIndex];return t?this.views.filter(o=>o.navigators.indexOf(e)>-1&&(0===o.associations.length||o.associations.indexOf(t.name)>-1)):[]}getEffectiveDisplayTitle(){let e=this.getSelectedView();return e&&e.modal?e.label:this.label}isModalView(){let e=this.getSelectedView();return!(!e||!e.modal)}navigatorViewCount(e){return void 0!==this._navigatorCounts[e]?this._navigatorCounts[e]:0}onRouteChange(e){this.showView(e)}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot");if(!t)return;let o=t.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&"OBAP-APPLICATION-VIEW"===e.tagName);this.views.length!==o.length&&(this.views=o),this.views.forEach(e=>{e.navigators.forEach(e=>{void 0===this._navigatorCounts[e]&&(this._navigatorCounts[e]=0),this._navigatorCounts[e]++})}),this.requestUpdate()}_registerViews(){let e=!1;this.views.forEach(t=>{t.default&&(e=!0,this.defaultViewName=t.name),this.registerRoute(new dt(t.name,t.name,t.default))}),!e&&this.views.length>0&&(this.defaultViewName=this.views[0].name,this.setDefaultRoute(this.defaultViewName)),this.navigateToDefault(!0)}};class bt extends at{static get properties(){return{name:{type:String,attribute:"name",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus"}}}constructor(){super(),this.hasFocus=!1,this.tabIndex=0,this._boundHandleFocusEvent=this._handleFocusEvent.bind(this),this._boundHandleBlurEvent=this._handleBlurEvent.bind(this)}updated(e){super.updated(e),e.forEach((e,t)=>{"disabled"===t&&(this.disabled?this.tabIndex=-1:this.tabIndex=0)})}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._boundHandleFocusEvent),this.addEventListener("blur",this._boundHandleBlurEvent)}disconnectedCallback(){this.removeEventListener("focus",this._boundHandleFocusEvent),this.removeEventListener("blur",this._boundHandleBlurEvent),super.disconnectedCallback()}_handleFocusEvent(e){this.disabled||(this.hasFocus=!0)}_handleBlurEvent(e){this.hasFocus=!1}}st(e||(e=ae`.typography-display{font-size:2.125rem;line-height:2.5rem;letter-spacing:.0074em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),st(t||(t=ae`.typography-headline{font-size:1.5rem;line-height:2rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`));const gt=st(o||(o=ae`.typography-title{font-size:1.25rem;line-height:2rem;letter-spacing:.0075em;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),vt=(st(i||(i=ae`.typography-subtitle{font-size:1rem;line-height:1.75rem;letter-spacing:.0094em;font-weight:400;-webkit-font-smoothing:antialiased}`)),st(s||(s=ae`.typography-body{font-size:.8125rem;line-height:1.15rem;letter-spacing:.0179em;font-weight:400;-webkit-font-smoothing:antialiased}`))),mt=st(n||(n=ae`.typography-button{font-size:.75rem;line-height:1.25rem;letter-spacing:.0333em;text-transform:uppercase;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),_t=(st(r||(r=ae`.typography-caption{font-size:.6875rem;line-height:1.15rem;letter-spacing:.0333em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),st(a||(a=ae`.typography-overline{font-size:.6875rem;line-height:2rem;letter-spacing:.15em;text-transform:uppercase;font-weight:400;-webkit-font-smoothing:antialiased}`)),st(l||(l=ae`.typography-code{font-family:'Roboto Mono',monospace;font-size:.875rem;line-height:1.25rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased}`)),st(c||(c=ae`:host([elevation="0"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`))),yt=(st(h||(h=ae`.elevation-0{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),st(d||(d=ae`:host([elevation="1"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`))),ft=(st(p||(p=ae`.elevation-1{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),st(u||(u=ae`:host([elevation="2"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`))),wt=(st(b||(b=ae`.elevation-2{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),st(g||(g=ae`:host([elevation="3"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`))),xt=(st(v||(v=ae`.elevation-3{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),st(m||(m=ae`:host([elevation="4"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`))),St=(st(_||(_=ae`.elevation-4{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),st(y||(y=ae`:host([elevation="6"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`))),Et=(st(f||(f=ae`.elevation-6{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),st(w||(w=ae`:host([elevation="8"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`))),Ct=(st(x||(x=ae`.elevation-8{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),st(S||(S=ae`:host([elevation="12"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`))),Pt=(st(E||(E=ae`.elevation-12{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),st(C||(C=ae`:host([elevation="16"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`))),kt=(st(P||(P=ae`.elevation-16{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),st(k||(k=ae`:host([elevation="24"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`))),Vt=(st(V||(V=ae`.elevation-24{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),[_t,yt,ft,wt,xt,St,Et,Ct,Pt,kt]);const Nt=new class{addGroup(e,t){const o=document.createElement("svg");o.innerHTML=t;const i=o.querySelector("defs");if(i){const t=i.querySelectorAll("g");t.length>0&&(window.ObapIcons[e]||(window.ObapIcons[e]={}),t.forEach(t=>window.ObapIcons[e][t.id]=new Ve([`<svg viewBox="0 0 24 24">${t.outerHTML}</svg>`],[])))}}get(e){let t=e.split(":"),o="standard",i=t[0];return t.length>1&&(o=t[0],i=t[1]),window.ObapIcons[o]&&window.ObapIcons[o][i]?window.ObapIcons[o][i]:null}getNames(e){return null==e&&(e="standard"),window.ObapIcons[e]?Object.getOwnPropertyNames(window.ObapIcons[e]).map(t=>`${e}:${t}`):[]}getGroups(){return Object.getOwnPropertyNames(window.ObapIcons).filter(e=>"iconManager"!==e&&"get"!==e)}};window.ObapIcons=window.ObapIcons||{iconManager:Nt,get:Nt.get};const Rt=window.ObapIcons.iconManager;Rt.getNames,Rt.getGroups;Rt.addGroup("core",'\n    <defs>\n        <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g>\n        <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g>\n        <g id="chevron-up"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></g>\n        <g id="chevron-down"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></g>\n        <g id="arrow-left"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>\n        <g id="arrow-right"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>\n        <g id="arrow-up"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>\n        <g id="arrow-down"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>\n        <g id="arrow-drop-left"><path d="M14 7l-5 5 5 5V7z"/></g>\n        <g id="arrow-drop-right"><path d="M10 17l5-5-5-5v10z"/></g>\n        <g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"/></g>\n        <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"/></g>\n        <g id="edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>\n        <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>\n        <g id="cross"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>\n        <g id="error"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>\n    </defs>\n');window.customElements.define("obap-icon",class extends at{static get styles(){return[st(N||(N=ae`
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
        `))]}static get properties(){return{icon:{type:String,attribute:"icon"}}}constructor(){super(),this.icon=""}render(){return Rt.get(this.icon)}});window.customElements.define("obap-button",class extends bt{static get styles(){return[mt,ft,St,st(R||(R=ae`
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
        `))]}static get properties(){return{raised:{type:Boolean,attribute:"raised",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0},round:{type:Boolean,attribute:"round",reflect:!0},toggle:{type:Boolean,attribute:"toggle",reflect:!0},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.raised=!1,this.noInk=!1,this.round=!1,this.toggle=!1,this.selected=!1,this.icon="",this.label="",this.role="button",this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleTouchStartEvent=this._handleTouchStartEvent.bind(this),this._boundHandleTouchEndEvent=this._handleTouchEndEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("touchstart",this._boundHandleTouchStartEvent),this.addEventListener("touchend",this._boundHandleTouchEndEvent)}disconnectedCallback(){this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("touchstart",this._boundHandleTouchStartEvent),this.removeEventListener("touchend",this._boundHandleTouchEndEvent),super.disconnectedCallback()}updated(e){super.updated(e),e.forEach((e,t)=>{switch(t){case"raised":this.raised?this.setAttribute("elevation",2):this.removeAttribute("elevation");break;case"label":case"icon":this.setAttribute("aria-label",this._getAriaLabel())}})}_getAriaLabel(){return this.label?this.label:this.icon}render(){return qe(I||(I=ae`
            <div class="container typography-button">
                ${0}
                ${0} 
            </div>
            ${0}
        `),this.icon?qe(A||(A=ae`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.label?qe(T||(T=ae`<div ?has-icon="${0}">${0}</div>`),""!==this.icon,this.label):null,this.noInk?null:qe(L||(L=ae`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.selected))}_handleMouseDownEvent(e){e.preventDefault(),this._handleDown()}_handleMouseUpEvent(e){e.preventDefault(),this._handleUp()}_handleTouchStartEvent(e){e.preventDefault(),this._handleDown()}_handleTouchEndEvent(e){e.preventDefault(),this._handleUp(),this.click()}_handleDown(){this.raised?this.toggle?(this.selected=!this.selected,this.selected?this.setAttribute("elevation",6):this.setAttribute("elevation",2)):this.setAttribute("elevation",6):this.toggle&&(this.selected=!this.selected)}_handleUp(){this.raised&&!this.toggle&&this.setAttribute("elevation",2)}});window.customElements.define("obap-top-app-bar",class extends at{static get styles(){return[gt,Vt,st(O||(O=ae`
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
        `))]}static get properties(){return{caption:{type:String,attribute:"caption"},elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.caption="",this.elevation=0}render(){return qe(B||(B=ae` 
            <div class="container">
                <div class="actions"><slot name="left"></slot></div>
                <div class="caption typography-title">${0}</div>
                <div class="actions"><slot name="right"></slot></div>
            </div>
      `),this.caption)}});const It=e=>class extends e{get selectedIndex(){return this._selectedIndex}set selectedIndex(e){const t=this.selectedIndex;(t!=e||this.toggles)&&(this._selectedIndex=e,this._changeSelection(this._selectedIndex,t),this.requestUpdate("selectedIndex",t))}get items(){return this._items}set items(e){throw'"items" is read only'}static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",hasChanged:(e,t)=>e!==t,reflect:!0},items:{type:Array},toggles:{type:Boolean,attribute:"toggles"},selectorType:{type:String,attribute:"selector-type"},enterSelects:{type:Boolean,attribute:"enter-selects"},selectedAttribute:{type:String,attribute:"selected-attribute"}}}constructor(){super(),this._boundHandleSelectionEvent=this._handleSelectionEvent.bind(this),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._boundHandleEnterEvent=this._handleEnterEvent.bind(this),this._selectedIndex=-1,this._selectable=!0,this._items=[],this._ctrl=!1,this.toggles=!1,this.enterSelects=!1,this.selectorType="single",this.selectedAttribute="selected"}updated(e){super.updated(e),e.forEach((e,t)=>{"disabled"===t&&e!==this.disabled&&this.items.forEach(e=>{e.disabled=this.disabled})})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._boundHandleSelectionEvent),this.addEventListener("keydown",this._boundHandleEnterEvent,{capture:!0}),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.removeEventListener("click",this._boundHandleSelectionEvent),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),this.removeEventListener("keydown",this._boundHandleEnterEvent),super.disconnectedCallback()}select(e){this.selectedIndex=e}indexOf(e){return this.items.indexOf(e)}_populateItems(){let e=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&!e.hasAttribute("no-select"));this.disabled&&e.forEach(e=>{e.disabled=this.disabled});const t=this._items;this._items=e,this._changeSelection(this.selectedIndex,-1),this.requestUpdate("items",t)}_handleSlotChangeEvent(e){this._populateItems()}_handleSelectionEvent(e){const t=this.items.indexOf(e.target);t>-1&&(this._ctrl=e.ctrlKey,this.select(t),this._ctrl=!1)}_handleEnterEvent(e){if("Enter"!==e.key||!this.enterSelects)return;const t=this.indexOf(e.target);t>-1&&!e.target.disabled&&this.select(t)}_deselectItem(e){if(-1===e)this.items.forEach(e=>e.removeAttribute(this.selectedAttribute));else{const t=this.items[e];t&&(t.removeAttribute(this.selectedAttribute),this._fireEvent("obap-item-deselected",{item:t,index:e},!1))}}_selectItem(e){const t=this.items[e];t&&(t.setAttribute(this.selectedAttribute,""),this._fireEvent("obap-item-selected",{item:t,index:e},!1))}_changeSelection(e,t){if(-1===e||0===this.items.length)return;if(e===t)return this._deselectItem(t),void(this._selectedIndex=-1);const o=this.items[e];this._fireEvent("obap-item-selecting",{newIndex:e,oldIndex:t,item:o},!0)?(this._deselectItem(t),this._selectItem(e),this._selectedIndex=e):this._selectedIndex=t}_fireEvent(e,t,o){const i=new CustomEvent(e,{bubbles:!0,composed:!0,cancelable:o,detail:t});return this.dispatchEvent(i)}};class At extends(It(at)){static get styles(){return st(F||(F=ae`
            :host {
                display: block;
            }

            :host > ::slotted(:not(slot):not([selected])) {
                display: none !important;
            }
        `))}render(){return qe(H||(H=ae`<slot></slot>`))}}window.customElements.define("obap-pages",At);window.customElements.define("obap-scroll-container",class extends at{static get styles(){return[st(M||(M=ae`
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
        `))]}static get properties(){return{vertical:{type:Boolean,attribute:"vertical",reflect:!0},scrollSpeed:{type:Number,attribute:"scroll-speed"},itemStep:{type:Boolean,attribute:"item-step"},disableScrolling:{type:Boolean,attribute:"disable-scrolling"},hideButtons:{type:Boolean,attribute:"hide-buttons"},miniButtons:{type:Boolean,attribute:"mini-buttons"},_leftScrollButtonVisible:{type:Boolean},_rightScrollButtonVisible:{type:Boolean},_hasOverflow:{type:Boolean}}}constructor(){super(),this.vertical=!1,this.scrollSpeed=2,this.itemStep=!1,this.disableScrolling=!1,this.hideButtons=!1,this._scrolling=!1,this._scrollDirection="none",this._container=null,this._containerRect=null,this.miniButtons=!1,this._boundScroll=this._scroll.bind(this),this._holdDelay=1,this._holdJob=null,this._hasOverflow=!1,this._children=[],this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._resizeObserver=new ResizeObserver(e=>{this._setScrollInfo(),this._calculateButtonVisibility()})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this._resizeObserver.unobserve(this),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(e){super.updated(e),this._setScrollInfo(),this._calculateButtonVisibility()}render(){return qe(z||(z=ae`
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
        `),this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._leftScrollButtonVisible,this._getIconName(!0),this._scrollLeft,this._endScroll,this._scrollLeft,this._endScroll,this._onScroll,this.disableScrolling,this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._rightScrollButtonVisible,this._getIconName(!1),this._scrollRight,this._endScroll,this._scrollRight,this._endScroll)}_getIconName(e){return this.vertical?e?"core:chevron-up":"core:chevron-down":e?"core:chevron-left":"core:chevron-right"}_calculateButtonVisibility(){if(this.disableScrolling)return this._leftScrollButtonVisible=!1,void(this._rightScrollButtonVisible=!1);this.vertical?(this._leftScrollButtonVisible=this._container.scrollTop>0,this._rightScrollButtonVisible=this._container.scrollTop<this._container.scrollHeight-this._container.clientHeight-1,this._hasOverflow=this._container.scrollHeight>this._container.clientHeight):(this._leftScrollButtonVisible=this._container.scrollLeft>0,this._rightScrollButtonVisible=this._container.scrollLeft<this._container.scrollWidth-this._container.clientWidth-1,this._hasOverflow=this._container.scrollWidth>this._container.clientWidth)}_setScrollInfo(){this._container=this.renderRoot.getElementById("contentContainer"),this._containerRect=this._container.getBoundingClientRect()}_scrollLeft(e){this.disableScrolling||(this.itemStep?this._scrollToNextChild("left"):(this._startScroll("left"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_scrollRight(e){this.disableScrolling||(this.itemStep?this._scrollToNextChild("right"):(this._startScroll("right"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_startScroll(e){this._scrolling=!0,this._scrollDirection=e,this._scroll()}_endScroll(e){this._holdJob&&(clearInterval(this._holdJob),this._holdJob=null),this._scrolling=!1,this._scrollDirection="none"}_scrollToNextChild(e){const t=this._container.getBoundingClientRect(),o=this._children.filter(e=>{const o=e.getBoundingClientRect();return this.vertical?o.top<=t.bottom&&o.bottom>=t.top:o.left<=t.right&&o.right>=t.left});if(o.length>0){const t=o[0],i=getComputedStyle(t);if(this.vertical){let o=t.offsetHeight;o+=parseInt(i.marginTop)+parseInt(i.marginBottom),"left"===e?this._container.scrollTop-=o:this._container.scrollTop+=o}else{let o=t.offsetWidth;o+=parseInt(i.marginLeft)+parseInt(i.marginRight),"left"===e?this._container.scrollLeft-=o:this._container.scrollLeft+=o}this._calculateButtonVisibility()}}_scroll(){if(!this._scrolling)return;let e="left"===this._scrollDirection?-this.scrollSpeed:this.scrollSpeed,t=0,o=!1;this.vertical?(t=this._container.scrollTop+e,t>=0&&t<=this._container.scrollHeight-this._container.clientHeight&&(this._container.scrollTop=t,o=!0)):(t=this._container.scrollLeft+e,t>=0&&t<=this._container.scrollWidth-this._container.clientWidth&&(this._container.scrollLeft=t,o=!0)),o?this._calculateButtonVisibility():this._endScroll()}_onScroll(){this._calculateButtonVisibility()}_handleSlotChangeEvent(e){const t=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType);this._children=t,this.requestUpdate()}});window.customElements.define("obap-ripple",class extends at{static get styles(){return[st(U||(U=ae`
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
        `))]}static get properties(){return{extend:{type:Number,attribute:"extend",reflect:!0},active:{type:Boolean,attribute:"active",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.extend=0,this.active=!1,this.hasFocus=!1,this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleMouseLeaveEvent=this._handleMouseLeaveEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.noInk||(this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.addEventListener("touchstart",this._boundHandleMouseDownEvent),this.addEventListener("touchend",this._boundHandleMouseUpEvent))}disconnectedCallback(){this.noInk||(this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.removeEventListener("touchstart",this._boundHandleMouseDownEvent),this.removeEventListener("touchend",this._boundHandleMouseUpEvent)),super.disconnectedCallback()}_handleMouseDownEvent(e){this.noInk||(this.active=!0)}_handleMouseUpEvent(e){this.active=!1}_handleMouseLeaveEvent(e){this.active=!1}});window.customElements.define("obap-tab",class extends bt{static get styles(){return st($||($=ae`
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
      `))}static get properties(){return{noInk:{type:Boolean,attribute:"no-ink",reflect:!0},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.role="tab",this.noInk=!1}render(){return qe(D||(D=ae`
            <div class="container">
                <slot></slot>
                ${0}
            </div>
        `),this.noInk?null:qe(q||(q=ae`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected))}});class Tt extends(It(at)){static get styles(){return[mt,st(j||(j=ae`
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
        `))]}static get properties(){return{fill:{type:Boolean,attribute:"fill"},scroll:{type:Boolean,attribute:"scroll"},hideScrollButtons:{type:Boolean,attribute:"hide-scroll-buttons"}}}constructor(){super(),this.role="tablist",this.fill=!1,this.scroll=!1,this.hideScrollButtons=!1,this.enterSelects=!0}render(){return qe(W||(W=ae`
            <obap-scroll-container class="container typography-button" ?fill="${0}" ?disable-scrolling="${0}"
                                   ?hide-buttons="${0}" mini-buttons>
                <slot></slot>
            </obap-scroll-container>
        `),this.fill,!1===this.scroll,this.hideScrollButtons)}}window.customElements.define("obap-tabs",Tt);window.customElements.define("obap-material",class extends at{static get styles(){return[Vt,st(J||(J=ae`
            :host {
                display: block;
                box-sizing: border-box;
                background: var(--obap-surface-color, #FFFFFF);
                color: var(--obap-on-surface-color, rgba(black, 0.87));
            }
        `))]}static get properties(){return{elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.elevation=1}render(){return qe(G||(G=ae`<slot></slot>`))}});const Lt=e=>class extends e{static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"}}}constructor(){super(),this.label="",this.name="",this._active=!1}get active(){return this._active}connectedCallback(){super.connectedCallback(),this.setAttribute("application-content",null)}_canActivate(){return!this.canActivate||this.canActivate()}_canDeactivate(){return!this.canDeactivate||this.canDeactivate()}_activate(){this._active||(this._active=!0,this.activate?this.activate():this._fireEvent("obap-view-activate"))}_deactivate(){this._active&&(this.deactivate?this.deactivate():this._fireEvent("obap-view-deactivate"),this._active=!1)}_fireEvent(e){let t=new CustomEvent(e,{bubbles:!1,composed:!1});this.dispatchEvent(t)}};class Ot extends(Lt(at)){static get styles(){return[st(K||(K=ae`
            :host {
                display: block;
                height: 100%;
            }

            .container {
                height: 100%;
            }
        `))]}render(){return qe(Q||(Q=ae`
            <div class="container">
                <slot></slot>
            </div>
        `))}}window.customElements.define("obap-application-content",Ot);window.customElements.define("obap-application-view",class extends at{static get styles(){return[vt,st(X||(X=ae`
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
        `))]}static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},badgeIcon:{type:String,attribute:"badge-icon"},badgeLabel:{type:String,attribute:"badge-label"},modal:{type:Boolean,attribute:"modal"},default:{type:Boolean,attribute:"default"},subViews:{type:Array},selectedSubViewIndex:{type:Number},navigators:{type:Array,attribute:"navigators",converter:{toAttribute:e=>e.join(","),fromAttribute:e=>e.split(",")}},associations:{type:Array,attribute:"associations",converter:{toAttribute:e=>e.join(","),fromAttribute:e=>e.split(",")}},hasSideViews:{type:Boolean,attribute:"has-side-views",reflect:!0}}}constructor(){super(),this._active=!1,this._slotUpdated=!1,this.name="",this.label="untitled",this.icon="",this.badgeIcon="",this.badgeLabel="",this.modal=!1,this.default=!1,this.selectedSubViewIndex=0,this.subViews=[],this.navigators=[],this.associations=[],this.hasSideViews=!1,this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}notifyViewActivate(){this._active=!0,this.subViews.forEach(e=>{e._activate&&e._activate()})}notifyViewDeactivate(){this._active&&(this._active=!1,this.subViews.forEach(e=>{e._deactivate&&e._deactivate()}))}canViewActivate(){let e=!0;return this.subViews.forEach(t=>{t._canActivate&&(t._canActivate()||(e=!1))}),e}canViewDeactivate(){let e=!0;return this.subViews.forEach(t=>{t._canDeactivate&&(t._canDeactivate()||(e=!1))}),e}render(){return qe(Y||(Y=ae`
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
        `),this._getSubViewNavigator(),this.selectedSubViewIndex)}_getSubViewNavigator(){return this.subViews.length>1?qe(Z||(Z=ae`
                <obap-material class="sub-view-navigator" elevation="1">
                    <obap-tabs selected-index="${0}" @obap-item-selected="${0}">
                        ${0}
                    </obap-tabs>
                </obap-material>
            `),this.selectedSubViewIndex,this._handleSubViewSelect,this.subViews.map(e=>qe(ee||(ee=ae`<obap-tab sub-view-name="${0}">${0}</obap-tab>`),e.name,e.label))):null}_handleSubViewSelect(e){this.selectedSubViewIndex=e.detail.index}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot"),o=this.renderRoot.querySelector('slot[name="side"]');if(o){const e=o.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&e.hasAttribute("application-content")).length;this.hasSideViews=e>0}if(!t)return;let i=t.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&e.hasAttribute("application-content"));this.subViews.length!==i.length&&(this.subViews=i),null===this.selectedSubViewIndex&&this.subViews&&this.subViews.length>0&&(this.selectedSubViewIndex=0),this._active&&this.notifyViewActivate(),this.requestUpdate()}_fireEvent(e,t){let o=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(o)}});class Bt extends(ut(at)){static get styles(){return[st(te||(te=ae`
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
                height: 100%;
            }

            .app-pages {
                flex: 1;
            }
        `))]}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.forEach((e,t)=>{})}render(){return qe(oe||(oe=ae`
            <div class="container">
                <obap-top-app-bar caption="${0}" elevation="1">
                    ${0}
                </obap-top-app-bar>

                <obap-pages class="app-pages" selected-index="0">
                    <div class="navigator"></div>
                    <obap-pages class="view-pages"></obap-pages>
                </obap-pages>
            </div>`),this.getEffectiveDisplayTitle(),this._getToolBarIcon(this.icon))}_getToolBarIcon(e){return this.isModalView()?qe(ie||(ie=ae`<obap-button round slot="left" icon="core:arrow-left" @click="${0}"></obap-button>`),e=>this.showPreviousView()):e?qe(se||(se=ae`<obap-button round slot="left" icon="${0}"></obap-button>`),e):null}}window.customElements.define("obap-mobile-application",Bt);window.customElements.define("demo-mobile-app",class extends at{static get styles(){return[st(ne||(ne=ae`
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-mobile-application {
                width: 100%;
                height: 100%;
                background: lightyellow;
            }
        `))]}static get properties(){return{}}constructor(){super()}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.forEach((e,t)=>{})}render(){return qe(re||(re=ae`
            <obap-mobile-application label="OBAP Elements" icon="core:edit"></obap-mobile-application>
        `))}});
