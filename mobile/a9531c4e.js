let e,t,o,a,i,r,s,n,l,d,c,p,b,h,u,g,v,m,y,f,x,w,_,k,E,S,C,$,I,V,z,P,A,N,R,B,L,T,M,H,F,O,D,U,q,j,W,G,J,K,Y,X,Q,Z,ee,te,oe,ae,ie,re,se,ne,le,de,ce,pe,be,he,ue,ge,ve,me,ye,fe,xe,we,_e,ke,Ee,Se,Ce,$e,Ie,Ve,ze,Pe,Ae,Ne,Re,Be,Le,Te,Me,He,Fe,Oe,De,Ue,qe,je,We,Ge,Je,Ke,Ye,Xe,Qe,Ze,et,tt,ot,at,it,rt,st,nt,lt,dt,ct,pt,bt,ht,ut,gt,vt,mt,yt,ft,xt,wt,_t,kt,Et,St,Ct,$t,It,Vt,zt,Pt,At,Nt,Rt,Bt,Lt,Tt,Mt,Ht,Ft,Ot,Dt,Ut,qt,jt,Wt,Gt,Jt,Kt,Yt,Xt,Qt,Zt,eo,to,oo,ao,io,ro,so,no,lo,co,po,bo,ho,uo,go,vo,mo,yo,fo,xo,wo,_o,ko,Eo=e=>e;const So="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Co=(e,t,o=null,a=null)=>{for(;t!==o;){const o=t.nextSibling;e.insertBefore(t,a),t=o}},$o=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},Io=`{{lit-${String(Math.random()).slice(2)}}}`,Vo=`\x3c!--${Io}--\x3e`,zo=new RegExp(`${Io}|${Vo}`);class Po{constructor(e,t){this.parts=[],this.element=t;const o=[],a=[],i=document.createTreeWalker(t.content,133,null,!1);let r=0,s=-1,n=0;const{strings:l,values:{length:d}}=e;for(;n<d;){const e=i.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let a=0;for(let e=0;e<o;e++)Ao(t[e].name,"$lit$")&&a++;for(;a-- >0;){const t=l[n],o=Bo.exec(t)[2],a=o.toLowerCase()+"$lit$",i=e.getAttribute(a);e.removeAttribute(a);const r=i.split(zo);this.parts.push({type:"attribute",index:s,name:o,strings:r}),n+=r.length-1}}"TEMPLATE"===e.tagName&&(a.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Io)>=0){const a=e.parentNode,i=t.split(zo),r=i.length-1;for(let t=0;t<r;t++){let o,r=i[t];if(""===r)o=Ro();else{const e=Bo.exec(r);null!==e&&Ao(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),o=document.createTextNode(r)}a.insertBefore(o,e),this.parts.push({type:"node",index:++s})}""===i[r]?(a.insertBefore(Ro(),e),o.push(e)):e.data=i[r],n+=r}}else if(8===e.nodeType)if(e.data===Io){const t=e.parentNode;null!==e.previousSibling&&s!==r||(s++,t.insertBefore(Ro(),e)),r=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(o.push(e),s--),n++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Io,t+1));)this.parts.push({type:"node",index:-1}),n++}}else i.currentNode=a.pop()}for(const e of o)e.parentNode.removeChild(e)}}const Ao=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},No=e=>-1!==e.index,Ro=()=>document.createComment(""),Bo=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Lo(e,t){const{element:{content:o},parts:a}=e,i=document.createTreeWalker(o,133,null,!1);let r=Mo(a),s=a[r],n=-1,l=0;const d=[];let c=null;for(;i.nextNode();){n++;const e=i.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===n;)s.index=null!==c?-1:s.index-l,r=Mo(a,r),s=a[r]}d.forEach(e=>e.parentNode.removeChild(e))}const To=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},Mo=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(No(t))return o}return-1};const Ho=new WeakMap,Fo=e=>(...t)=>{const o=e(...t);return Ho.set(o,!0),o},Oo=e=>"function"==typeof e&&Ho.has(e),Do={},Uo={};class qo{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=So?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let i,r=0,s=0,n=a.nextNode();for(;r<o.length;)if(i=o[r],No(i)){for(;s<i.index;)s++,"TEMPLATE"===n.nodeName&&(t.push(n),a.currentNode=n.content),null===(n=a.nextNode())&&(a.currentNode=t.pop(),n=a.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(n.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(n,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return So&&(document.adoptNode(e),customElements.upgrade(e)),e}}const jo=` ${Io} `;class Wo{constructor(e,t,o,a){this.strings=e,this.values=t,this.type=o,this.processor=a}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let a=0;a<e;a++){const e=this.strings[a],i=e.lastIndexOf("\x3c!--");o=(i>-1||o)&&-1===e.indexOf("--\x3e",i+1);const r=Bo.exec(e);t+=null===r?e+(o?jo:Vo):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+Io}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class Go extends Wo{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,o=t.firstChild;return t.removeChild(o),Co(t,o.firstChild),e}}const Jo=e=>null===e||!("object"==typeof e||"function"==typeof e),Ko=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Yo{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Xo(this)}_getValue(){const e=this.strings,t=e.length-1;let o="";for(let a=0;a<t;a++){o+=e[a];const t=this.parts[a];if(void 0!==t){const e=t.value;if(Jo(e)||!Ko(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Xo{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Do||Jo(e)&&e===this.value||(this.value=e,Oo(e)||(this.committer.dirty=!0))}commit(){for(;Oo(this.value);){const e=this.value;this.value=Do,e(this)}this.value!==Do&&this.committer.commit()}}class Qo{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ro()),this.endNode=e.appendChild(Ro())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Ro()),e.__insert(this.endNode=Ro())}insertAfterPart(e){e.__insert(this.startNode=Ro()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;Oo(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Do,e(this)}const e=this.__pendingValue;e!==Do&&(Jo(e)?e!==this.value&&this.__commitText(e):e instanceof Wo?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Ko(e)?this.__commitIterable(e):e===Uo?(this.value=Uo,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof qo&&this.value.template===t)this.value.update(e.values);else{const o=new qo(t,e.processor,this.options),a=o._clone();o.update(e.values),this.__commitNode(a),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,a=0;for(const i of e)o=t[a],void 0===o&&(o=new Qo(this.options),t.push(o),0===a?o.appendIntoPart(this):o.insertAfterPart(t[a-1])),o.setValue(i),o.commit(),a++;a<t.length&&(t.length=a,this.clear(o&&o.endNode))}clear(e=this.startNode){$o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Zo{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;Oo(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Do,e(this)}if(this.__pendingValue===Do)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=Do}}class ea extends Yo{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new ta(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ta extends Xo{}let oa=!1;(()=>{try{const e={get capture(){return oa=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class aa{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Oo(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Do,e(this)}if(this.__pendingValue===Do)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),a=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=ia(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=Do}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ia=e=>e&&(oa?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function ra(e){let t=sa.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},sa.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(Io);return o=t.keyString.get(a),void 0===o&&(o=new Po(e,e.getTemplateElement()),t.keyString.set(a,o)),t.stringsArray.set(e.strings,o),o}const sa=new Map,na=new WeakMap;const la=new class{handleAttributeExpressions(e,t,o,a){const i=t[0];if("."===i){return new ea(e,t.slice(1),o).parts}return"@"===i?[new aa(e,t.slice(1),a.eventContext)]:"?"===i?[new Zo(e,t.slice(1),o)]:new Yo(e,t,o).parts}handleTextExpression(e){return new Qo(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const da=(e,...t)=>new Wo(e,t,"html",la),ca=(e,...t)=>new Go(e,t,"svg",la),pa=(e,t)=>`${e}--${t}`;let ba=!0;void 0===window.ShadyCSS?ba=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ba=!1);const ha=e=>t=>{const o=pa(t.type,e);let a=sa.get(o);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},sa.set(o,a));let i=a.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(Io);if(i=a.keyString.get(r),void 0===i){const o=t.getTemplateElement();ba&&window.ShadyCSS.prepareTemplateDom(o,e),i=new Po(t,o),a.keyString.set(r,i)}return a.stringsArray.set(t.strings,i),i},ua=["html","svg"],ga=new Set,va=(e,t,o)=>{ga.add(e);const a=o?o.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(a,e);const s=document.createElement("style");for(let e=0;e<r;e++){const t=i[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{ua.forEach(t=>{const o=sa.get(pa(t,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{o.add(e)}),Lo(e,o)})})})(e);const n=a.content;o?function(e,t,o=null){const{element:{content:a},parts:i}=e;if(null==o)return void a.appendChild(t);const r=document.createTreeWalker(a,133,null,!1);let s=Mo(i),n=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===o&&(n=To(t),o.parentNode.insertBefore(t,o));-1!==s&&i[s].index===l;){if(n>0){for(;-1!==s;)i[s].index+=n,s=Mo(i,s);return}s=Mo(i,s)}}}(o,s,n.firstChild):n.insertBefore(s,n.firstChild),window.ShadyCSS.prepareTemplateStyles(a,e);const l=n.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(o){n.insertBefore(s,n.firstChild);const e=new Set;e.add(s),Lo(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ma={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ya=(e,t)=>t!==e&&(t==t||e==e),fa={attribute:!0,type:String,converter:ma,reflect:!1,hasChanged:ya};class xa extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,o)=>{const a=this._attributeNameForProperty(o,t);void 0!==a&&(this._attributeToPropertyMap.set(a,o),e.push(a))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=fa){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,o,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this._requestUpdate(e,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||fa}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=ya){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,a=t.converter||ma,i="function"==typeof a?a:a.fromAttribute;return i?i(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,a=t.converter;return(a&&a.toAttribute||ma.toAttribute)(e,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=fa){const a=this.constructor,i=a._attributeNameForProperty(e,o);if(void 0!==i){const e=a._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,a=o._attributeToPropertyMap.get(e);if(void 0!==a){const e=o.getPropertyOptions(a);this._updateState=16|this._updateState,this[a]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let o=!0;if(void 0!==e){const a=this.constructor,i=a.getPropertyOptions(e);a._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}xa.finalized=!0;const wa="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_a=Symbol();class ka{constructor(e,t){if(t!==_a)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(wa?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Ea=(e,...t)=>{const o=t.reduce((t,o,a)=>t+(e=>{if(e instanceof ka)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[a+1],e[0]);return new ka(o,_a)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Sa={};class Ca extends xa{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,o)=>e.reduceRight((e,o)=>Array.isArray(o)?t(o,e):(e.add(o),e),o),o=t(e,new Set),a=[];o.forEach(e=>a.unshift(e)),this._styles=a}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?wa?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Sa&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return Sa}}Ca.finalized=!0,Ca.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const a=o.scopeName,i=na.has(t),r=ba&&11===t.nodeType&&!!t.host,s=r&&!ga.has(a),n=s?document.createDocumentFragment():t;if(((e,t,o)=>{let a=na.get(t);void 0===a&&($o(t,t.firstChild),na.set(t,a=new Qo(Object.assign({templateFactory:ra},o))),a.appendInto(t)),a.setValue(e),a.commit()})(e,n,Object.assign({templateFactory:ha(a)},o)),s){const e=na.get(n);na.delete(n);const o=e.value instanceof qo?e.value.template:void 0;va(a,n,o),$o(t,t.firstChild),t.appendChild(n),na.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)};class $a extends Ca{get disabled(){return this._disabled}set disabled(e){const t=this.disabled;e!==t&&(this._disabled=e,e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false"),this.requestUpdate("disabled",t))}static get properties(){return{disabled:{type:Boolean,attribute:"disabled",reflect:!0},role:{type:String,attribute:"role",reflect:!0}}}constructor(){super(),this._disabled=!1,this.role=null}getCssVariableValue(e,t,o){let a=e.getPropertyValue(t);return a||o}}class Ia{constructor(e,t,o,a,i,r){this.name=e,this.primary=o,this.primaryLight=t,this.primaryDark=a,this.accent=i,this.window=r}}const Va=new class{constructor(){this.__themes={},this.create("default","#8e99f3","#5c6bc0","#26418f","#ec407a","#E0E0E0");let e=document.documentElement;e.style.setProperty("-webkit-tap-highlight-color","transparent"),e.style.setProperty("--obap-background-color","#FFFFFF"),e.style.setProperty("--obap-surface-color","#FFFFFF"),e.style.setProperty("--obap-error-color","#e53935"),e.style.setProperty("--obap-notification-color","#323232"),e.style.setProperty("--obap-selection-color","#E0E0E0"),e.style.setProperty("--obap-block-color","#ECECEC"),e.style.setProperty("--obap-inactive-color","#9E9E9E"),e.style.setProperty("--obap-on-primary-color","#FFFFFF"),e.style.setProperty("--obap-on-primary-inactive-color","rgba(255, 255, 255, 0.7)"),e.style.setProperty("--obap-on-accent-color","#FFFFFF"),e.style.setProperty("--obap-on-accent-inactive-color","rgba(255, 255, 255, 0.7)"),e.style.setProperty("--obap-on-background-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-surface-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-window-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-on-error-color","#FFFFFF"),e.style.setProperty("--obap-on-notification-color","rgba(255, 255, 255, 0.87)"),e.style.setProperty("--obap-on-selection-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-text-primary-color","rgba(0, 0, 0, 0.87)"),e.style.setProperty("--obap-text-secondary-color","rgba(0, 0, 0, 0.54)"),e.style.setProperty("--obap-text-hint-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-text-disabled-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-text-icon-color","rgba(0, 0, 0, 0.38)"),e.style.setProperty("--obap-divider-on-primary-color","rgba(255, 255, 255, 0.20)"),e.style.setProperty("--obap-divider-on-surface-color","rgba(0, 0, 0, 0.20)")}apply(e,t){let o=this.__themes[e];return t=t||document.documentElement,!!o&&(t.style.setProperty("--obap-primary-light-color",o.primaryLight),t.style.setProperty("--obap-primary-color",o.primary),t.style.setProperty("--obap-primary-dark-color",o.primaryDark),t.style.setProperty("--obap-accent-color",o.accent),o.window?t.style.setProperty("--obap-window-color",o.window):t.style.setProperty("--obap-window-color","#FAFAFA"),!0)}clear(e,t){if(t=t||!1,(e=e||document.documentElement).style.removeProperty("--obap-primary-light-color"),e.style.removeProperty("--obap-primary-color"),e.style.removeProperty("--obap-primary-dark-color"),e.style.removeProperty("--obap-accent-color"),e.style.removeProperty("--obap-window-color"),t){let e=document.documentElement;e.style.removeProperty("--obap-background-color"),e.style.removeProperty("--obap-surface-color"),e.style.removeProperty("--obap-error-color"),e.style.removeProperty("--obap-notification-color"),e.style.removeProperty("--obap-selection-color"),e.style.removeProperty("--obap-block-color"),e.style.removeProperty("--obap-inactive-color"),e.style.removeProperty("--obap-on-primary-color"),e.style.removeProperty("--obap-on-primary-inactive-color"),e.style.removeProperty("--obap-on-accent-color"),e.style.removeProperty("--obap-on-accent-inactive-color"),e.style.removeProperty("--obap-on-background-color"),e.style.removeProperty("--obap-on-surface-color"),e.style.removeProperty("--obap-on-window-color"),e.style.removeProperty("--obap-on-error-color"),e.style.removeProperty("--obap-on-notification-color"),e.style.removeProperty("--obap-on-selection-color"),e.style.removeProperty("--obap-text-primary-color"),e.style.removeProperty("--obap-text-secondary-color"),e.style.removeProperty("--obap-text-hint-color"),e.style.removeProperty("--obap-text-disabled-color"),e.style.removeProperty("--obap-text-icon-color"),e.style.removeProperty("--obap-divider-on-primary-color"),e.style.removeProperty("--obap-divider-on-surface-color")}}create(e,t,o,a,i,r){this.__themes[e]=new Ia(e,t,o,a,i,r)}getNames(){return Object.getOwnPropertyNames(this.__themes)}hasTheme(e){return this.getNames().indexOf(e)>-1}},za=e=>class extends e{get theme(){return this._theme}set theme(e){const t=this.theme;if(e!==t){if(this._theme=e,this.shadowRoot){const e=this.shadowRoot.host;this.theme&&this.hasTheme(this.theme)?Va.apply(this.theme,e):(this._theme=null,Va.clear(e,!1))}else this._theme=null;this.requestUpdate("theme",t)}}static get properties(){return{theme:{type:String,attribute:"theme"}}}constructor(){super(),this._theme=null}setGlobalTheme(e){Va.apply(e)}getThemeNames(){return Va.getNames()}hasTheme(e){return Va.hasTheme(e)}};window.ObapRouter=window.ObapRouter||{},window.ObapRouter.launchParameters=window.ObapRouter.launchParameters||null;class Pa{constructor(e,t,o){this.name=e,this.pattern=t,this.isDefault=o||!1}}const Aa=e=>class extends e{static get properties(){return{routes:{type:Object},disableRouting:{type:Boolean,attribute:"disable-routing"}}}get currentRoute(){return this._currentRoute}set currentRoute(e){(this.currentRoute?this.currentRoute.name:"")!==(e?e.name:"")&&(this._currentRoute=e,this._popping||this.disableRouting||history.pushState(this._currentParameters,"",this._buildUrl()))}constructor(){super(),this.routes={},this.disableRouting=!1,this._defaultRouteName=null,this._path=null,this._currentRoute=null,window.ObapRouter.launchParameters=null,this._boundHandleOnPopStateEvent=this._handleOnPopStateEvent.bind(this),this._boundHandleChangeRouteEvent=this._handleChangeRouteEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.disableRouting||(window.addEventListener("popstate",this._boundHandleOnPopStateEvent),window.addEventListener("obap-change-route",this._boundHandleChangeRouteEvent))}disconnectedCallback(){window.removeEventListener("popstate",this._boundHandleOnPopStateEvent),window.removeEventListener("obap-change-route",this._boundHandleChangeRouteEvent),super.disconnectedCallback()}registerRoute(e){this.routes[e.name]=e,e.isDefault&&(this._defaultRouteName=e.name)}registerRoutes(e){e.forEach(e=>this.registerRoute(e))}setDefaultRoute(e){let t=this.getRoute(e);t&&(t.isDefault=!0,this._defaultRouteName=e)}unregisterRoute(e){delete this.routes[e]}getRoute(e){return this.routes[e]}navigateBack(){this.disableRouting||history.back()}navigateForward(){this.disableRouting||history.forward()}navigateToDefault(e){if(!this.disableRouting&&0!==this._getRouteCount())if(e){const e=this._getRouteFromUrl();this.setCurrentRoute(e.name)}else this._defaultRouteName&&this.setCurrentRoute(this._defaultRouteName)}setCurrentRoute(e){if(this.disableRouting)return;if(this.currentRoute&&this.currentRoute.name===e)return;let t=this.getRoute(e);t&&(this.currentRoute=t,this.onRouteChange&&this.onRouteChange(e))}_fireEvent(e,t){let o=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(o)}_getRouteCount(){return Object.keys(this.routes).length}_mapRoute(e){if(e&&""===e.name){const t=Object.keys(this.routes);for(let o=0;o<t.length;o++){const a=this.routes[t[o]];if(a&&(a.pattern===e.pattern||""===e.pattern&&a.isDefault))return a}}return e}_setRouteFromUrl(){let e=location.hash.replace("#",""),t={};location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(e,o,a)=>t[o]=a),this._path=location.pathname;let o=new Pa("",e);null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=t),this.currentRoute=this._mapRoute(o)}_getRouteFromUrl(){let e={},t=location.hash.replace("#","");return location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=([^&]*)/gi,(t,o,a)=>e[o]=a),this._path=location.pathname,null===window.ObapRouter.launchParameters&&(window.ObapRouter.launchParameters=e),this._mapRoute(new Pa("",t))}_handleOnPopStateEvent(e){const t=this._getRouteFromUrl();t&&(this._popping=!0,this.setCurrentRoute(t.name),this._popping=!1)}_handleChangeRouteEvent(e){const t=e.detail.routeName;this.setCurrentRoute(t)}_buildUrl(){let e=location.origin+location.pathname;if(this.currentRoute&&this.currentRoute.name){if(window.ObapRouter.launchParameters){const t=Object.keys(window.ObapRouter.launchParameters),o=[];if(t&&t.length>0){for(let e=0;e<t.length;e++){const a=t[e];o.push(`${a}=${window.ObapRouter.launchParameters[a]}`)}e+="?"+o.join("&")}}this.currentRoute.isDefault||(e+="#"+this.currentRoute.pattern)}return e}},Na=e=>class extends(Aa(za(e))){static get properties(){return{label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},views:{type:Array},canChangeView:{type:Boolean}}}get selectedViewIndex(){return this._selectedViewIndex}set selectedViewIndex(e){const t=this.selectedViewIndex;if(t!==e){this._selectedViewIndex=e,this._previousViewIndex=t;const o=this.getSelectedView();o&&this.setCurrentRoute(o.name,null),this.requestUpdate("selectedViewIndex",t)}}constructor(){super(),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this.views=[],this.label="untitled",this.icon="",this.defaultViewName=null,this._selectedViewIndex=null,this._previousViewIndex=null,this._navigatorCounts={}}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(e){super.updated(e),e.forEach((e,t)=>{"views"===t&&this._registerViews()})}findView(e){return this.views.find(t=>t.name===e)}showView(e){const t=this.findView(e);t&&(this.selectedViewIndex=this.views.indexOf(t))}showDefaultView(){this.showView(this.defaultViewName)}canViewActivate(e){let t=null;return t=e?this.findView(e):this.views[this.selectedViewIndex],!t||t.canViewActivate()}canViewDeactivate(e){let t=null;return t=e?this.findView(e):this.views[this.selectedViewIndex],!t||t.canViewDeactivate()}showPreviousView(){let e=parseInt(this._previousViewIndex);e>=0?(this.selectedViewIndex=e,this._previousViewIndex=null):this.defaultViewName&&this.showView(this.defaultViewName)}getSelectedView(){let e=parseInt(this.selectedViewIndex);return e>=0?this.views[e]:null}getNavigatorViews(e){let t=this.views[this.selectedViewIndex];return t?this.views.filter(o=>o.navigators.indexOf(e)>-1&&(0===o.associations.length||o.associations.indexOf(t.name)>-1)):[]}getEffectiveDisplayTitle(){let e=this.getSelectedView();return e&&e.modal?e.label:this.label}isModalView(){let e=this.getSelectedView();return!(!e||!e.modal)}navigatorViewCount(e){return void 0!==this._navigatorCounts[e]?this._navigatorCounts[e]:0}onRouteChange(e){this.showView(e)}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot");if(!t)return;let o=t.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&"OBAP-APPLICATION-VIEW"===e.tagName);this.views.length!==o.length&&(this.views=o),this.views.forEach(e=>{e.navigators.forEach(e=>{void 0===this._navigatorCounts[e]&&(this._navigatorCounts[e]=0),this._navigatorCounts[e]++})}),this.requestUpdate()}_registerViews(){let e=!1;this.views.forEach(t=>{t.default&&(e=!0,this.defaultViewName=t.name),this.registerRoute(new Pa(t.name,t.name,t.default))}),!e&&this.views.length>0&&(this.defaultViewName=this.views[0].name,this.setDefaultRoute(this.defaultViewName)),this.navigateToDefault(!0)}},Ra=Ea(e||(e=Eo`.typography-display{font-size:2.125rem;line-height:2.5rem;letter-spacing:.0074em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),Ba=Ea(t||(t=Eo`.typography-headline{font-size:1.5rem;line-height:2rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),La=Ea(o||(o=Eo`.typography-title{font-size:1.25rem;line-height:2rem;letter-spacing:.0075em;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),Ta=Ea(a||(a=Eo`.typography-subtitle{font-size:1rem;line-height:1.75rem;letter-spacing:.0094em;font-weight:400;-webkit-font-smoothing:antialiased}`)),Ma=Ea(i||(i=Eo`.typography-body{font-size:.8125rem;line-height:1.15rem;letter-spacing:.0179em;font-weight:400;-webkit-font-smoothing:antialiased}`)),Ha=Ea(r||(r=Eo`.typography-button{font-size:.75rem;line-height:1.25rem;letter-spacing:.0333em;text-transform:uppercase;font-weight:500;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),Fa=Ea(s||(s=Eo`.typography-caption{font-size:.6875rem;line-height:1.15rem;letter-spacing:.0333em;font-weight:400;-webkit-font-smoothing:antialiased;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}`)),Oa=Ea(n||(n=Eo`.typography-overline{font-size:.6875rem;line-height:2rem;letter-spacing:.15em;text-transform:uppercase;font-weight:400;-webkit-font-smoothing:antialiased}`)),Da=Ea(l||(l=Eo`.typography-code{font-family:'Roboto Mono',monospace;font-size:.875rem;line-height:1.25rem;letter-spacing:normal;font-weight:400;-webkit-font-smoothing:antialiased}`)),Ua=[Ra,Ba,La,Ta,Ma,Ha,Fa,Oa,Da];class qa extends $a{static get properties(){return{name:{type:String,attribute:"name",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus"}}}constructor(){super(),this.hasFocus=!1,this.tabIndex=0,this._boundHandleFocusEvent=this._handleFocusEvent.bind(this),this._boundHandleBlurEvent=this._handleBlurEvent.bind(this)}updated(e){super.updated(e),e.forEach((e,t)=>{"disabled"===t&&(this.disabled?this.tabIndex=-1:this.tabIndex=0)})}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._boundHandleFocusEvent),this.addEventListener("blur",this._boundHandleBlurEvent)}disconnectedCallback(){this.removeEventListener("focus",this._boundHandleFocusEvent),this.removeEventListener("blur",this._boundHandleBlurEvent),super.disconnectedCallback()}_handleFocusEvent(e){this.disabled||(this.hasFocus=!0)}_handleBlurEvent(e){this.hasFocus=!1}}const ja=Ea(d||(d=Eo`:host([elevation="0"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),Wa=Ea(c||(c=Eo`.elevation-0{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:none}`)),Ga=Ea(p||(p=Eo`:host([elevation="1"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),Ja=Ea(b||(b=Eo`.elevation-1{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12),0 2px 1px -1px rgba(0,0,0,.2)}`)),Ka=Ea(h||(h=Eo`:host([elevation="2"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),Ya=Ea(u||(u=Eo`.elevation-2{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)}`)),Xa=Ea(g||(g=Eo`:host([elevation="3"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),Qa=Ea(v||(v=Eo`.elevation-3{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12),0 3px 3px -2px rgba(0,0,0,.4)}`)),Za=Ea(m||(m=Eo`:host([elevation="4"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),ei=Ea(y||(y=Eo`.elevation-4{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.4)}`)),ti=Ea(f||(f=Eo`:host([elevation="6"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),oi=Ea(x||(x=Eo`.elevation-6{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12),0 3px 5px -1px rgba(0,0,0,.4)}`)),ai=Ea(w||(w=Eo`:host([elevation="8"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),ii=Ea(_||(_=Eo`.elevation-8{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.4)}`)),ri=Ea(k||(k=Eo`:host([elevation="12"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),si=Ea(E||(E=Eo`.elevation-12{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 12px 16px 1px rgba(0,0,0,.14),0 4px 22px 3px rgba(0,0,0,.12),0 6px 7px -4px rgba(0,0,0,.4)}`)),ni=Ea(S||(S=Eo`:host([elevation="16"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),li=Ea(C||(C=Eo`.elevation-16{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.4)}`)),di=Ea($||($=Eo`:host([elevation="24"]){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),ci=Ea(I||(I=Eo`.elevation-24{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.4)}`)),pi=[Wa,Ja,Ya,Qa,ei,oi,ii,si,li,ci],bi=[ja,Ga,Ka,Xa,Za,ti,ai,ri,ni,di];const hi=new class{addGroup(e,t){const o=document.createElement("svg");o.innerHTML=t;const a=o.querySelector("defs");if(a){const t=a.querySelectorAll("g");t.length>0&&(window.ObapIcons[e]||(window.ObapIcons[e]={}),t.forEach(t=>window.ObapIcons[e][t.id]=new Go([`<svg viewBox="0 0 24 24">${t.outerHTML}</svg>`],[])))}}get(e){let t=e.split(":"),o="standard",a=t[0];return t.length>1&&(o=t[0],a=t[1]),window.ObapIcons[o]&&window.ObapIcons[o][a]?window.ObapIcons[o][a]:null}getNames(e){return null==e&&(e="standard"),window.ObapIcons[e]?Object.getOwnPropertyNames(window.ObapIcons[e]).map(t=>`${e}:${t}`):[]}getGroups(){return Object.getOwnPropertyNames(window.ObapIcons).filter(e=>"iconManager"!==e&&"get"!==e)}};window.ObapIcons=window.ObapIcons||{iconManager:hi,get:hi.get};const ui=window.ObapIcons.iconManager,gi=ui.getNames,vi=ui.getGroups;ui.addGroup("core",'\n    <defs>\n        <g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g>\n        <g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g>\n        <g id="chevron-up"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></g>\n        <g id="chevron-down"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></g>\n        <g id="arrow-left"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>\n        <g id="arrow-right"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>\n        <g id="arrow-up"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>\n        <g id="arrow-down"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>\n        <g id="arrow-drop-left"><path d="M14 7l-5 5 5 5V7z"/></g>\n        <g id="arrow-drop-right"><path d="M10 17l5-5-5-5v10z"/></g>\n        <g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"/></g>\n        <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"/></g>\n        <g id="edit"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>\n        <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>\n        <g id="cross"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>\n        <g id="error"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>\n    </defs>\n');window.customElements.define("obap-icon",class extends $a{static get styles(){return[Ea(V||(V=Eo`
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
        `))]}static get properties(){return{icon:{type:String,attribute:"icon"}}}constructor(){super(),this.icon=""}render(){return ui.get(this.icon)}});window.customElements.define("obap-button",class extends qa{static get styles(){return[Ha,Ka,ti,Ea(z||(z=Eo`
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
        `))]}static get properties(){return{raised:{type:Boolean,attribute:"raised",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0},round:{type:Boolean,attribute:"round",reflect:!0},toggle:{type:Boolean,attribute:"toggle",reflect:!0},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.raised=!1,this.noInk=!1,this.round=!1,this.toggle=!1,this.selected=!1,this.icon="",this.label="",this.role="button",this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleTouchStartEvent=this._handleTouchStartEvent.bind(this),this._boundHandleTouchEndEvent=this._handleTouchEndEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("touchstart",this._boundHandleTouchStartEvent),this.addEventListener("touchend",this._boundHandleTouchEndEvent)}disconnectedCallback(){this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("touchstart",this._boundHandleTouchStartEvent),this.removeEventListener("touchend",this._boundHandleTouchEndEvent),super.disconnectedCallback()}updated(e){super.updated(e),e.forEach((e,t)=>{switch(t){case"raised":this.raised?this.setAttribute("elevation",2):this.removeAttribute("elevation");break;case"label":case"icon":this.setAttribute("aria-label",this._getAriaLabel())}})}_getAriaLabel(){return this.label?this.label:this.icon}render(){return da(P||(P=Eo`
            <div class="container typography-button">
                ${0}
                ${0} 
            </div>
            ${0}
        `),this.icon?da(A||(A=Eo`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.label?da(N||(N=Eo`<div ?has-icon="${0}">${0}</div>`),""!==this.icon,this.label):null,this.noInk?null:da(R||(R=Eo`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.selected))}_handleMouseDownEvent(e){e.preventDefault(),this._handleDown()}_handleMouseUpEvent(e){e.preventDefault(),this._handleUp()}_handleTouchStartEvent(e){e.preventDefault(),this._handleDown()}_handleTouchEndEvent(e){e.preventDefault(),this._handleUp(),this.click()}_handleDown(){this.raised?this.toggle?(this.selected=!this.selected,this.selected?this.setAttribute("elevation",6):this.setAttribute("elevation",2)):this.setAttribute("elevation",6):this.toggle&&(this.selected=!this.selected)}_handleUp(){this.raised&&!this.toggle&&this.setAttribute("elevation",2)}});window.customElements.define("obap-top-app-bar",class extends $a{static get styles(){return[Ta,bi,Ea(B||(B=Eo`
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
        `))]}static get properties(){return{caption:{type:String,attribute:"caption"},elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.caption="",this.elevation=0}render(){return da(L||(L=Eo` 
            <div class="container">
                <div class="actions"><slot name="left"></slot></div>
                <div class="caption typography-subtitle">${0}</div>
                <div class="actions"><slot name="right"></slot></div>
            </div>
      `),this.caption)}});const mi=e=>class extends e{get selectedIndex(){return this._selectedIndex}set selectedIndex(e){const t=this.selectedIndex;(t!=e||this.toggles)&&(this._selectedIndex=e,this._changeSelection(this._selectedIndex,t),this.requestUpdate("selectedIndex",t))}get items(){return this._items}set items(e){throw'"items" is read only'}static get properties(){return{selectedIndex:{type:Number,attribute:"selected-index",hasChanged:(e,t)=>e!==t,reflect:!0},items:{type:Array},toggles:{type:Boolean,attribute:"toggles"},selectorType:{type:String,attribute:"selector-type"},enterSelects:{type:Boolean,attribute:"enter-selects"},selectedAttribute:{type:String,attribute:"selected-attribute"}}}constructor(){super(),this._boundHandleSelectionEvent=this._handleSelectionEvent.bind(this),this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._boundHandleEnterEvent=this._handleEnterEvent.bind(this),this._selectedIndex=-1,this._selectable=!0,this._items=[],this._ctrl=!1,this.toggles=!1,this.enterSelects=!1,this.selectorType="single",this.selectedAttribute="selected"}updated(e){super.updated(e),e.forEach((e,t)=>{"disabled"===t&&e!==this.disabled&&this.items.forEach(e=>{e.disabled=this.disabled})})}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._boundHandleSelectionEvent),this.addEventListener("keydown",this._boundHandleEnterEvent,{capture:!0}),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.removeEventListener("click",this._boundHandleSelectionEvent),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),this.removeEventListener("keydown",this._boundHandleEnterEvent),super.disconnectedCallback()}select(e){this.selectedIndex=e}indexOf(e){return this.items.indexOf(e)}_populateItems(){let e=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&!e.hasAttribute("no-select"));this.disabled&&e.forEach(e=>{e.disabled=this.disabled});const t=this._items;this._items=e,this._changeSelection(this.selectedIndex,-1),this.requestUpdate("items",t)}_handleSlotChangeEvent(e){this._populateItems()}_handleSelectionEvent(e){const t=this.items.indexOf(e.target);t>-1&&(this._ctrl=e.ctrlKey,this.select(t),this._ctrl=!1)}_handleEnterEvent(e){if("Enter"!==e.key||!this.enterSelects)return;const t=this.indexOf(e.target);t>-1&&!e.target.disabled&&this.select(t)}_deselectItem(e){if(-1===e)this.items.forEach(e=>e.removeAttribute(this.selectedAttribute));else{const t=this.items[e];t&&(t.removeAttribute(this.selectedAttribute),this._fireEvent("obap-item-deselected",{item:t,index:e},!1))}}_selectItem(e){const t=this.items[e];t&&(t.setAttribute(this.selectedAttribute,""),this._fireEvent("obap-item-selected",{item:t,index:e},!1))}_changeSelection(e,t){if(-1===e||0===this.items.length)return;if(e===t)return this._deselectItem(t),void(this._selectedIndex=-1);const o=this.items[e];this._fireEvent("obap-item-selecting",{newIndex:e,oldIndex:t,item:o},!0)?(this._deselectItem(t),this._selectItem(e),this._selectedIndex=e):this._selectedIndex=t}_fireEvent(e,t,o){const a=new CustomEvent(e,{bubbles:!0,composed:!0,cancelable:o,detail:t});return this.dispatchEvent(a)}};class yi extends(mi($a)){static get styles(){return Ea(T||(T=Eo`
            :host {
                display: block;
            }

            :host > ::slotted(:not(slot):not([selected])) {
                display: none !important;
            }
        `))}render(){return da(M||(M=Eo`<slot></slot>`))}}window.customElements.define("obap-pages",yi);window.customElements.define("obap-scroll-container",class extends $a{static get styles(){return[Ea(H||(H=Eo`
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
        `))]}static get properties(){return{vertical:{type:Boolean,attribute:"vertical",reflect:!0},scrollSpeed:{type:Number,attribute:"scroll-speed"},itemStep:{type:Boolean,attribute:"item-step"},disableScrolling:{type:Boolean,attribute:"disable-scrolling"},hideButtons:{type:Boolean,attribute:"hide-buttons"},miniButtons:{type:Boolean,attribute:"mini-buttons"},_leftScrollButtonVisible:{type:Boolean},_rightScrollButtonVisible:{type:Boolean},_hasOverflow:{type:Boolean}}}constructor(){super(),this.vertical=!1,this.scrollSpeed=2,this.itemStep=!1,this.disableScrolling=!1,this.hideButtons=!1,this._scrolling=!1,this._scrollDirection="none",this._container=null,this._containerRect=null,this.miniButtons=!1,this._boundScroll=this._scroll.bind(this),this._holdDelay=1,this._holdJob=null,this._hasOverflow=!1,this._children=[],this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._resizeObserver=new ResizeObserver(e=>{this._setScrollInfo(),this._calculateButtonVisibility()})}connectedCallback(){super.connectedCallback(),this._resizeObserver.observe(this),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this._resizeObserver.unobserve(this),this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}updated(e){super.updated(e),this._setScrollInfo(),this._calculateButtonVisibility()}render(){return da(F||(F=Eo`
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
        `),this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._leftScrollButtonVisible,this._getIconName(!0),this._scrollLeft,this._endScroll,this._scrollLeft,this._endScroll,this._onScroll,this.disableScrolling,this.disableScrolling||this.hideButtons||!this._hasOverflow,this.miniButtons,!this._rightScrollButtonVisible,this._getIconName(!1),this._scrollRight,this._endScroll,this._scrollRight,this._endScroll)}_getIconName(e){return this.vertical?e?"core:chevron-up":"core:chevron-down":e?"core:chevron-left":"core:chevron-right"}_calculateButtonVisibility(){if(this.disableScrolling)return this._leftScrollButtonVisible=!1,void(this._rightScrollButtonVisible=!1);this.vertical?(this._leftScrollButtonVisible=this._container.scrollTop>0,this._rightScrollButtonVisible=this._container.scrollTop<this._container.scrollHeight-this._container.clientHeight-1,this._hasOverflow=this._container.scrollHeight>this._container.clientHeight):(this._leftScrollButtonVisible=this._container.scrollLeft>0,this._rightScrollButtonVisible=this._container.scrollLeft<this._container.scrollWidth-this._container.clientWidth-1,this._hasOverflow=this._container.scrollWidth>this._container.clientWidth)}_setScrollInfo(){this._container=this.renderRoot.getElementById("contentContainer"),this._containerRect=this._container.getBoundingClientRect()}_scrollLeft(e){this.disableScrolling||(this.itemStep?this._scrollToNextChild("left"):(this._startScroll("left"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_scrollRight(e){this.disableScrolling||(this.itemStep?this._scrollToNextChild("right"):(this._startScroll("right"),this._holdJob=setInterval(this._boundScroll,this._holdDelay)))}_startScroll(e){this._scrolling=!0,this._scrollDirection=e,this._scroll()}_endScroll(e){this._holdJob&&(clearInterval(this._holdJob),this._holdJob=null),this._scrolling=!1,this._scrollDirection="none"}_scrollToNextChild(e){const t=this._container.getBoundingClientRect(),o=this._children.filter(e=>{const o=e.getBoundingClientRect();return this.vertical?o.top<=t.bottom&&o.bottom>=t.top:o.left<=t.right&&o.right>=t.left});if(o.length>0){const t=o[0],a=getComputedStyle(t);if(this.vertical){let o=t.offsetHeight;o+=parseInt(a.marginTop)+parseInt(a.marginBottom),"left"===e?this._container.scrollTop-=o:this._container.scrollTop+=o}else{let o=t.offsetWidth;o+=parseInt(a.marginLeft)+parseInt(a.marginRight),"left"===e?this._container.scrollLeft-=o:this._container.scrollLeft+=o}this._calculateButtonVisibility()}}_scroll(){if(!this._scrolling)return;let e="left"===this._scrollDirection?-this.scrollSpeed:this.scrollSpeed,t=0,o=!1;this.vertical?(t=this._container.scrollTop+e,t>=0&&t<=this._container.scrollHeight-this._container.clientHeight&&(this._container.scrollTop=t,o=!0)):(t=this._container.scrollLeft+e,t>=0&&t<=this._container.scrollWidth-this._container.clientWidth&&(this._container.scrollLeft=t,o=!0)),o?this._calculateButtonVisibility():this._endScroll()}_onScroll(){this._calculateButtonVisibility()}_handleSlotChangeEvent(e){const t=this.renderRoot.querySelector("slot").assignedNodes({flatten:!0}).filter(e=>1===e.nodeType);this._children=t,this.requestUpdate()}});window.customElements.define("obap-ripple",class extends $a{static get styles(){return[Ea(O||(O=Eo`
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
        `))]}static get properties(){return{extend:{type:Number,attribute:"extend",reflect:!0},active:{type:Boolean,attribute:"active",reflect:!0},hasFocus:{type:Boolean,attribute:"has-focus",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.extend=0,this.active=!1,this.hasFocus=!1,this._boundHandleMouseUpEvent=this._handleMouseUpEvent.bind(this),this._boundHandleMouseDownEvent=this._handleMouseDownEvent.bind(this),this._boundHandleMouseLeaveEvent=this._handleMouseLeaveEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.noInk||(this.addEventListener("mousedown",this._boundHandleMouseDownEvent),this.addEventListener("mouseup",this._boundHandleMouseUpEvent),this.addEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.addEventListener("touchstart",this._boundHandleMouseDownEvent),this.addEventListener("touchend",this._boundHandleMouseUpEvent))}disconnectedCallback(){this.noInk||(this.removeEventListener("mousedown",this._boundHandleMouseDownEvent),this.removeEventListener("mouseup",this._boundHandleMouseUpEvent),this.removeEventListener("mouseleave",this._boundHandleMouseLeaveEvent),this.removeEventListener("touchstart",this._boundHandleMouseDownEvent),this.removeEventListener("touchend",this._boundHandleMouseUpEvent)),super.disconnectedCallback()}_handleMouseDownEvent(e){this.noInk||(this.active=!0)}_handleMouseUpEvent(e){this.active=!1}_handleMouseLeaveEvent(e){this.active=!1}});window.customElements.define("obap-tab",class extends qa{static get styles(){return Ea(D||(D=Eo`
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
      `))}static get properties(){return{noInk:{type:Boolean,attribute:"no-ink",reflect:!0},selected:{type:Boolean,attribute:"selected",reflect:!0}}}constructor(){super(),this.role="tab",this.noInk=!1}render(){return da(U||(U=Eo`
            <div class="container">
                <slot></slot>
                ${0}
            </div>
        `),this.noInk?null:da(q||(q=Eo`<obap-ripple ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected))}});class fi extends(mi($a)){static get styles(){return[Ha,Ea(j||(j=Eo`
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
        `))]}static get properties(){return{fill:{type:Boolean,attribute:"fill"},scroll:{type:Boolean,attribute:"scroll"},hideScrollButtons:{type:Boolean,attribute:"hide-scroll-buttons"}}}constructor(){super(),this.role="tablist",this.fill=!1,this.scroll=!1,this.hideScrollButtons=!1,this.enterSelects=!0}render(){return da(W||(W=Eo`
            <obap-scroll-container class="container typography-button" ?fill="${0}" ?disable-scrolling="${0}"
                                   ?hide-buttons="${0}" mini-buttons>
                <slot></slot>
            </obap-scroll-container>
        `),this.fill,!1===this.scroll,this.hideScrollButtons)}}window.customElements.define("obap-tabs",fi);window.customElements.define("obap-material",class extends $a{static get styles(){return[bi,Ea(G||(G=Eo`
            :host {
                display: block;
                box-sizing: border-box;
                background: var(--obap-surface-color, #FFFFFF);
                color: var(--obap-on-surface-color, rgba(black, 0.87));
            }
        `))]}static get properties(){return{elevation:{type:Number,attribute:"elevation",reflect:!0}}}constructor(){super(),this.elevation=1}render(){return da(J||(J=Eo`<slot></slot>`))}});const xi=e=>class extends e{static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"}}}constructor(){super(),this.label="",this.name="",this._active=!1}get active(){return this._active}connectedCallback(){super.connectedCallback(),this.setAttribute("application-content","")}_canActivate(){return!this.canActivate||this.canActivate()}_canDeactivate(){return!this.canDeactivate||this.canDeactivate()}_activate(){this._active||(this._active=!0,this.activate?this.activate():this._fireEvent("obap-view-activate"))}_deactivate(){this._active&&(this.deactivate?this.deactivate():this._fireEvent("obap-view-deactivate"),this._active=!1)}_fireEvent(e){let t=new CustomEvent(e,{bubbles:!1,composed:!1});this.dispatchEvent(t)}};class wi extends(xi($a)){static get styles(){return[Ea(K||(K=Eo`
            :host {
                display: block;
                height: 100%;
            }

            .container {
                height: 100%;
            }
        `))]}render(){return da(Y||(Y=Eo`
            <div class="container">
                <slot></slot>
            </div>
        `))}}window.customElements.define("obap-application-content",wi);window.customElements.define("obap-application-view",class extends $a{static get styles(){return[Ma,Ea(X||(X=Eo`
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
        `))]}static get properties(){return{name:{type:String,attribute:"name"},label:{type:String,attribute:"label"},icon:{type:String,attribute:"icon"},badgeIcon:{type:String,attribute:"badge-icon"},badgeLabel:{type:String,attribute:"badge-label"},modal:{type:Boolean,attribute:"modal"},default:{type:Boolean,attribute:"default"},subViews:{type:Array},selectedSubViewIndex:{type:Number},navigators:{type:Array,attribute:"navigators",converter:{toAttribute:e=>e.join(","),fromAttribute:e=>e.split(",")}},associations:{type:Array,attribute:"associations",converter:{toAttribute:e=>e.join(","),fromAttribute:e=>e.split(",")}},hasSideViews:{type:Boolean,attribute:"has-side-views",reflect:!0},hideSubViewScrollButtons:{type:Boolean,attribute:"hide-sub-view-scroll-buttons"}}}constructor(){super(),this._active=!1,this._slotUpdated=!1,this.name="",this.label="untitled",this.icon="",this.badgeIcon="",this.badgeLabel="",this.modal=!1,this.default=!1,this.selectedSubViewIndex=0,this.subViews=[],this.navigators=[],this.associations=[],this.hasSideViews=!1,this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this)}connectedCallback(){super.connectedCallback(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),super.disconnectedCallback()}notifyViewActivate(){this._active=!0,this.subViews.forEach(e=>{e._activate&&e._activate()})}notifyViewDeactivate(){this._active&&(this._active=!1,this.subViews.forEach(e=>{e._deactivate&&e._deactivate()}))}canViewActivate(){let e=!0;return this.subViews.forEach(t=>{t._canActivate&&(t._canActivate()||(e=!1))}),e}canViewDeactivate(){let e=!0;return this.subViews.forEach(t=>{t._canDeactivate&&(t._canDeactivate()||(e=!1))}),e}render(){return da(Q||(Q=Eo`
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
        `),this._getSubViewNavigator(),this.selectedSubViewIndex)}_getSubViewNavigator(){return this.subViews.length>1?da(Z||(Z=Eo`
                <obap-material class="sub-view-navigator" elevation="1">
                    <obap-tabs scroll ?hide-scroll-buttons="${0}" selected-index="${0}" @obap-item-selected="${0}">
                        ${0}
                    </obap-tabs>
                </obap-material>
            `),this.hideSubViewScrollButtons,this.selectedSubViewIndex,this._handleSubViewSelect,this.subViews.map(e=>da(ee||(ee=Eo`<obap-tab sub-view-name="${0}">${0}</obap-tab>`),e.name,e.label))):null}_handleSubViewSelect(e){this.selectedSubViewIndex=e.detail.index}_handleSlotChangeEvent(e){let t=this.renderRoot.querySelector("slot"),o=this.renderRoot.querySelector('slot[name="side"]');if(o){const e=o.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&e.hasAttribute("application-content")).length;this.hasSideViews=e>0}if(!t)return;let a=t.assignedNodes({flatten:!0}).filter(e=>1===e.nodeType&&e.hasAttribute("application-content"));this.subViews.length!==a.length&&(this.subViews=a),null===this.selectedSubViewIndex&&this.subViews&&this.subViews.length>0&&(this.selectedSubViewIndex=0),this._active&&this.notifyViewActivate(),this.requestUpdate()}_fireEvent(e,t){let o=new CustomEvent(e,{detail:t,bubbles:!0,composed:!0});this.dispatchEvent(o)}});class _i extends(Na($a)){static get styles(){return[Ma,Ea(te||(te=Eo`
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
        `))]}static get properties(){return{_navigatorIndex:{type:Number}}}constructor(){super(),this._navigatorIndex=0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e)}updated(e){super.updated(e),e.forEach((e,t)=>{})}render(){return da(oe||(oe=Eo`
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
            </div>`),this.getEffectiveDisplayTitle(),this._getToolBarIcon(this.icon),this._navigatorIndex,this._renderNavigator(),this.selectedViewIndex)}_renderNavigator(){return da(ae||(ae=Eo`
            <div>
                ${0}
            </div>`),this.views.map((e,t)=>da(ie||(ie=Eo`
                    <obap-material elevation="1" class="navigator-item" index="${0}" @click="${0}">
                        ${0}
                        <div class="navigator-label typography-body">${0}</div>
                    </obap-material>
                `),t,this._navigatorClick,e.icon?da(re||(re=Eo`<obap-icon class="navigator-icon" icon="${0}"></obap-icon>`),e.icon):null,e.label)))}_getToolBarIcon(e){return this._navigatorIndex>0?da(se||(se=Eo`<obap-button round slot="left" icon="core:arrow-left" @click="${0}"></obap-button>`),this._showNavigator):e?da(ne||(ne=Eo`<obap-icon class="app-icon" slot="left" icon="${0}"></obap-icon>`),e):null}_navigatorClick(e){const t=e.target.getAttribute("index");null!==t&&(this.selectedViewIndex=t,this._navigatorIndex=1)}_showNavigator(e){this._navigatorIndex=0,this.showDefaultView()}getEffectiveDisplayTitle(){return 0===this._navigatorIndex?this.label:this.getSelectedView().label}}window.customElements.define("obap-mobile-application",_i),ui.addGroup("app",'\n    <defs>\n        <g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"/></g>\n        <g id="styles"><path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3zm-2 2H6V4h10v2z"/></g>\n        <g id="charts"><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/></g>\n        <g id="data-tables"><path d="M22,2H2v20h20V2L22,2z M4,8V4h16v4H4L4,8z M4,14v-4h16v4H4L4,14z M4,20v-4h16v4H4L4,20z"/></g>\n        <g id="tooltips-callouts"><path d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/></g>\n        <g id="selection"><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></g>\n        <g id="progress-indicators"><path d="M15.1,19.37l1,1.74c-0.96,0.44-2.01,0.73-3.1,0.84v-2.02C13.74,19.84,14.44,19.65,15.1,19.37z M4.07,13H2.05 c0.11,1.1,0.4,2.14,0.84,3.1l1.74-1C4.35,14.44,4.16,13.74,4.07,13z M15.1,4.63l1-1.74C15.14,2.45,14.1,2.16,13,2.05v2.02 C13.74,4.16,14.44,4.35,15.1,4.63z M19.93,11h2.02c-0.11-1.1-0.4-2.14-0.84-3.1l-1.74,1C19.65,9.56,19.84,10.26,19.93,11z M8.9,19.37l-1,1.74c0.96,0.44,2.01,0.73,3.1,0.84v-2.02C10.26,19.84,9.56,19.65,8.9,19.37z M11,4.07V2.05 c-1.1,0.11-2.14,0.4-3.1,0.84l1,1.74C9.56,4.35,10.26,4.16,11,4.07z M18.36,7.17l1.74-1.01c-0.63-0.87-1.4-1.64-2.27-2.27 l-1.01,1.74C17.41,6.08,17.92,6.59,18.36,7.17z M4.63,8.9l-1.74-1C2.45,8.86,2.16,9.9,2.05,11h2.02C4.16,10.26,4.35,9.56,4.63,8.9z M19.93,13c-0.09,0.74-0.28,1.44-0.56,2.1l1.74,1c0.44-0.96,0.73-2.01,0.84-3.1H19.93z M16.83,18.36l1.01,1.74 c0.87-0.63,1.64-1.4,2.27-2.27l-1.74-1.01C17.92,17.41,17.41,17.92,16.83,18.36z M7.17,5.64L6.17,3.89 C5.29,4.53,4.53,5.29,3.9,6.17l1.74,1.01C6.08,6.59,6.59,6.08,7.17,5.64z M5.64,16.83L3.9,17.83c0.63,0.87,1.4,1.64,2.27,2.27 l1.01-1.74C6.59,17.92,6.08,17.41,5.64,16.83z M13,7h-2v5.41l4.29,4.29l1.41-1.41L13,11.59V7z"/></g>\n        <g id="tabs"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/></g>\n        <g id="dialogs"><path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M17,12H7v-2 h10V12z M13,16H7v-2h6V16z"/></g>\n        <g id="cards"><path d="M19 5v4H4V5h15m0 10v4H4v-4h15m1-12H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm0 10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/></g>\n        <g id="buttons"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></g>\n        <g id="chips"><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></g>\n        <g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>\n        \n\n    </defs>\n');window.customElements.define("demo-box",class extends $a{static get styles(){return[Fa,Ea(le||(le=Eo`
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
        `))]}static get properties(){return{label:{type:String,attribute:"label"}}}constructor(){super(),this.label=""}render(){return da(de||(de=Eo`
            <div class="container">
                <div class="content"><slot></slot></div>
                ${0}
            </div>
        `),this.label?da(ce||(ce=Eo`<div class="typography-caption label">${0}</div>`),this.label):null)}});window.customElements.define("demo-panel",class extends $a{static get styles(){return[Ma,Ea(pe||(pe=Eo`
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
            }
        `))]}static get properties(){return{label:{type:String,attribute:"label"},elevation:{type:Number,attribute:"elevation"}}}constructor(){super(),this.label="",this.elevation=1}render(){return da(be||(be=Eo`
            <obap-material class="container" elevation="${0}">
                ${0}
                <div class="content"><slot></slot></div>
            </obap-material>
        `),this.elevation,this.label?da(he||(he=Eo`<div class="typography-body label">${0}</div>`),this.label):null)}});window.customElements.define("demo-styles-elevation",class extends $a{static get styles(){return[pi,Ma,Ea(ue||(ue=Eo`
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
        `))]}static get properties(){return{items:{type:Array}}}constructor(){super(),this.items=[0,1,2,3,4,6,8,12,16,24]}render(){return da(ge||(ge=Eo`
            <div class="container">
                <demo-panel>
                    <div class="item-container">
                        ${0}
                    </div>
                </demo-panel>
            </div>
        `),this.items.map(e=>da(ve||(ve=Eo`<div class="item elevation-${0} typography-body">${0}</div>`),e,e)))}});window.customElements.define("demo-styles-iconography",class extends $a{static get styles(){return[Ea(me||(me=Eo`
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
                grid-gap: 16px;
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
        `))]}render(){return da(ye||(ye=Eo`
            <div class="container">
                ${0}
            </div>
        `),vi().map(e=>da(fe||(fe=Eo`
                <demo-panel label="${0}">
                    <div class="inner-container">
                        ${0}
                    </div>
                </demo-panel>
                `),e,gi(e).map(e=>da(xe||(xe=Eo`
                                    <obap-icon icon="${0}" title="${0}"></obap-icon>
                        `),e,e)))))}});window.customElements.define("obap-radio",class extends qa{static get styles(){return[Ma,Ea(we||(we=Eo`
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
        `))]}static get properties(){return{label:{type:String,attribute:"label"},selected:{type:Boolean,attribute:"selected",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}constructor(){super(),this.selected=!1,this.indeterminate=!1,this.noInk=!1,this.role="radio"}render(){return da(_e||(_e=Eo`
            <div class="container typography-body">
                <div class="check-container">
                    ${0}
                    ${0}
                </div>
                ${0}
            </div>
        `),this._getCheck(),this.noInk?null:da(ke||(ke=Eo`<obap-ripple extend="1" ?has-focus="${0}"></obap-ripple>`),this.hasFocus&&!this.selected),this.label)}_getCheck(){return this.selected?ca(Ee||(Ee=Eo`<svg class="check" viewBox="0 0 24 24"><g><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></g></svg>`)):ca(Se||(Se=Eo`<svg class="check" viewBox="0 0 24 24"><g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></g></svg>`))}});class ki extends(mi($a)){static get styles(){return Ea(Ce||(Ce=Eo`
            :host {
                display: block;
            }

            :host[hidden] {
                display: none;
            }
        `))}constructor(){super(),this.role="radiogroup",this.enterSelects=!0}render(){return da($e||($e=Eo`<slot></slot>`))}}customElements.define("obap-radio-group",ki);class Ei extends(za($a)){static get styles(){return[pi,Fa,Ma,Ea(Ie||(Ie=Eo`
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

        `))]}static get properties(){return{themes:{type:Array},selectedThemeIndex:{type:Number}}}constructor(){super(),this.themes=this.getThemeNames(),this.selectedThemeIndex=0}render(){return da(Ve||(Ve=Eo`
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
        `),this.selectedThemeIndex,this._themeSelected,this.themes.map(e=>da(ze||(ze=Eo`<obap-radio label="${0}"></obap-radio>`),e)))}_themeSelected(e){this.setGlobalTheme(e.detail.item.label)}}window.customElements.define("demo-styles-theming",Ei);window.customElements.define("demo-styles-typography",class extends $a{static get styles(){return[Ua,Ea(Pe||(Pe=Eo`
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
        `))]}render(){return da(Ae||(Ae=Eo`
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
        `))}});window.customElements.define("demo-buttons-normal",class extends $a{static get styles(){return[Ea(Ne||(Ne=Eo`
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
        `))]}render(){return da(Re||(Re=Eo`
            <demo-panel>
                <div class="container">
                    <obap-button label="Flat"></obap-button>
                    <obap-button label="Raised" raised></obap-button>
                    <obap-button label="No Ink" no-ink raised></obap-button>
                    <obap-button label="Toggle" toggle raised></obap-button>
                    <obap-button label="Disabled" disabled raised></obap-button>
                </div>
            </demo-panel>

            <demo-panel>
                <div class="container">
                    <obap-button label="Flat" icon="app:android"></obap-button>
                    <obap-button label="Raised" icon="app:polymer" raised></obap-button>
                    <obap-button label="No Ink" icon="app:styles" no-ink raised></obap-button>
                    <obap-button label="Toggle" icon="app:charts" toggle raised></obap-button>
                    <obap-button label="Disabled" icon="app:buttons" disabled raised></obap-button>
                </div>
            </demo-panel>
        `))}});window.customElements.define("demo-buttons-fab",class extends $a{static get styles(){return[Ea(Be||(Be=Eo`
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
        `))]}render(){return da(Le||(Le=Eo`
            <demo-panel>
                <div class="container">
                    <obap-button round icon="app:android"></obap-button>
                    <obap-button round icon="app:polymer" raised></obap-button>
                    <obap-button round icon="app:styles" no-ink raised></obap-button>
                    <obap-button round icon="app:charts" toggle raised></obap-button>
                    <obap-button round icon="app:buttons" disabled raised></obap-button>
                </div>
            </demo-panel>

            <demo-panel>
                <div class="container">
                    <obap-button round label="Flat" icon="app:android"></obap-button>
                    <obap-button round label="Raised" icon="app:polymer" raised></obap-button>
                    <obap-button round label="No Ink" icon="app:styles" no-ink raised></obap-button>
                    <obap-button round label="Toggle" icon="app:charts" toggle raised></obap-button>
                    <obap-button round label="Disabled" icon="app:buttons" disabled raised></obap-button>
                </div>
            </demo-panel>
        `))}});window.customElements.define("demo-buttons-custom",class extends $a{static get styles(){return[Ea(Te||(Te=Eo`
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
        `))]}render(){return da(Me||(Me=Eo`
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
        `))}});window.customElements.define("obap-backdrop",class extends $a{static get styles(){return[Ea(He||(He=Eo`
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
        `))]}static get properties(){return{visible:{type:Boolean,attribute:"visible",reflect:!0},_count:{type:Number,attribute:"count",reflect:!0}}}constructor(){super(),this.visible=!1,this._count=0,this._zIndex=248,this._items=[]}show(e){return-1===this._items.indexOf(e)&&this._items.push(e),this._count+=1,this._zIndex+=2,this.style.zIndex=this._zIndex,e.modal&&(this.visible=this._count>0),this._zIndex+1}hide(e){const t=this._items.indexOf(e);this._items.splice(t,1);const o=this._items[this._items.length-1];this._count-=1,this._zIndex-=2,this.style.zIndex=this._zIndex,o&&o.modal&&(this.visible=this._count>0),0===this._count&&this.parentNode.removeChild(this)}isOnTop(e){return this._items.indexOf(e)===this._items.length-1}});window.customElements.define("obap-dialog",class extends $a{static get styles(){return[ci,Ea(Fe||(Fe=Eo`
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
        `))]}get opened(){return this._opened}set opened(e){let t=this._opened;requestAnimationFrame(()=>{this._opened=e,this.requestUpdate("opened",t),this.opened?window.addEventListener("popstate",this._boundHandleOnPopStateEvent):window.removeEventListener("popstate",this._boundHandleOnPopStateEvent),this.modal||(this._opened?window.addEventListener("click",this._boundHandleDocumentClickEvent,!1):window.removeEventListener("click",this._boundHandleDocumentClickEvent)),this.noCancelOnEscKey||(this._opened?window.addEventListener("keydown",this._boundHandleGlobalKeyPressEvent,!1):window.removeEventListener("keydown",this._boundHandleGlobalKeyPressEvent));let o=new CustomEvent("obap-dialog-opened-changed",{detail:{opened:this._opened},bubbles:!0,composed:!0});this.dispatchEvent(o)})}static get properties(){return{opened:{type:Boolean,attribute:"opened",reflect:!0},modal:{type:Boolean,attribute:"modal"},noCancelOnEscKey:{type:Boolean,attribute:"no-cancel-on-esc-key"}}}constructor(){super(),this._opened=!1,this._backdrop=null,this.modal=!1,this.noCancelOnEscKey=!1,this._boundHandleDocumentClickEvent=this._handleDocumentClickEvent.bind(this),this._boundHandleGlobalKeyPressEvent=this._handleGlobalKeyPressEvent.bind(this),this._boundHandleOnPopStateEvent=this._handleOnPopStateEvent.bind(this)}updated(e){super.updated(e),e.forEach((e,t)=>{"opened"===t&&e!==this.opened&&this._updateBackdrop()})}render(){return da(Oe||(Oe=Eo`
            <div class="container elevation-24" @click="${0}">
                <slot></slot>
            </div>       
        `),this._handleClick)}open(){this.opened=!0}close(){this.opened=!1}_updateBackdrop(){this._backdrop=document.body.querySelector("obap-backdrop")||document.body.appendChild(document.createElement("obap-backdrop")),requestAnimationFrame(()=>{this.opened?this.style.zIndex=this._backdrop.show(this):this._backdrop.hide(this)})}_handleClick(e){const t=e.composedPath(),o=t.indexOf(this);for(let i=0;i<o;i++){var a=t[i];if(a.hasAttribute&&(a.hasAttribute("dialog-confirm")||a.hasAttribute("dialog-dismiss"))){this.opened=!1,e.stopPropagation();break}}}_handleDocumentClickEvent(e){-1===e.composedPath().indexOf(this)&&(this.opened=!1,e.stopPropagation())}_handleGlobalKeyPressEvent(e){"Escape"===e.key&&this._backdrop&&this._backdrop.isOnTop(this)&&(this.opened=!1,e.stopImmediatePropagation())}_handleOnPopStateEvent(e){this.opened=!1}});window.customElements.define("demo-dialogs",class extends $a{static get styles(){return[Ta,Ea(De||(De=Eo`
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
        `))]}render(){return da(Ue||(Ue=Eo`
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
        `),this._renderCaption("Plain Dialog"),this._renderContent(),this._renderActions(),this._renderCaption("Modal Dialog"),this._renderContent(),this._renderActions(),this._renderCaption("Nested Dialog"),this._renderContent(),this._renderNestedActions(),this._renderCaption("Child Dialog"),this._renderChildContent(),this._renderActions(),this._showPlainDialog,this._showModalDialog,this._showNestedDialog)}_renderCaption(e){return da(qe||(qe=Eo`
            <div class="caption typography-subtitle">${0}</div>
        `),e)}_renderContent(){return da(je||(je=Eo`
            <div class="content"></div>
        `))}_renderChildContent(){return da(We||(We=Eo`
            <div class="child-content"></div>
        `))}_renderActions(){return da(Ge||(Ge=Eo`
            <div class="actions">
                <obap-button class="action" raised label="cancel" dialog-dismiss @click="${0}"></obap-button>
                <obap-button class="action" raised label="ok" dialog-confirm></obap-button>
            </div>
        `),this._handleCancel)}_renderNestedActions(){return da(Je||(Je=Eo`
            <div class="actions">
                <obap-button class="action" raised label="cancel" dialog-dismiss @click="${0}"></obap-button>
                <obap-button class="action" raised label="ok" dialog-confirm></obap-button>
                <obap-button class="action" raised label="child" @click="${0}"></obap-button>
            </div>
        `),this._handleCancel,this._showChildDialog)}_showPlainDialog(){this.renderRoot.getElementById("plain-dialog").open()}_showModalDialog(){this.renderRoot.getElementById("modal-dialog").open()}_showNestedDialog(){this.renderRoot.getElementById("nested-dialog").open()}_showChildDialog(){this.renderRoot.getElementById("child-dialog").open()}_handleCancel(){}});const Si=(e,t)=>{const o=e.startNode.parentNode,a=void 0===t?e.endNode:t.startNode,i=o.insertBefore(Ro(),a);o.insertBefore(Ro(),a);const r=new Qo(e.options);return r.insertAfterNode(i),r},Ci=(e,t)=>(e.setValue(t),e.commit(),e),$i=(e,t,o)=>{const a=e.startNode.parentNode,i=o?o.startNode:e.endNode,r=t.endNode.nextSibling;r!==i&&Co(a,t.startNode,r,i)},Ii=e=>{$o(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},Vi=(e,t,o)=>{const a=new Map;for(let i=t;i<=o;i++)a.set(e[i],i);return a},zi=new WeakMap,Pi=new WeakMap,Ai=Fo((e,t,o)=>{let a;return void 0===o?o=t:void 0!==t&&(a=t),t=>{if(!(t instanceof Qo))throw new Error("repeat can only be used in text bindings");const i=zi.get(t)||[],r=Pi.get(t)||[],s=[],n=[],l=[];let d,c,p=0;for(const t of e)l[p]=a?a(t,p):p,n[p]=o(t,p),p++;let b=0,h=i.length-1,u=0,g=n.length-1;for(;b<=h&&u<=g;)if(null===i[b])b++;else if(null===i[h])h--;else if(r[b]===l[u])s[u]=Ci(i[b],n[u]),b++,u++;else if(r[h]===l[g])s[g]=Ci(i[h],n[g]),h--,g--;else if(r[b]===l[g])s[g]=Ci(i[b],n[g]),$i(t,i[b],s[g+1]),b++,g--;else if(r[h]===l[u])s[u]=Ci(i[h],n[u]),$i(t,i[h],i[b]),h--,u++;else if(void 0===d&&(d=Vi(l,u,g),c=Vi(r,b,h)),d.has(r[b]))if(d.has(r[h])){const e=c.get(l[u]),o=void 0!==e?i[e]:null;if(null===o){const e=Si(t,i[b]);Ci(e,n[u]),s[u]=e}else s[u]=Ci(o,n[u]),$i(t,o,i[b]),i[e]=null;u++}else Ii(i[h]),h--;else Ii(i[b]),b++;for(;u<=g;){const e=Si(t,s[g+1]);Ci(e,n[u]),s[u++]=e}for(;b<=h;){const e=i[b++];null!==e&&Ii(e)}zi.set(t,s),Pi.set(t,l)}});class Ni{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const Ri=new WeakMap,Bi=Fo(e=>t=>{if(!(t instanceof Xo)||t instanceof ta||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:o}=t,{element:a}=o;let i=Ri.get(t);void 0===i&&(a.setAttribute("class",o.strings.join(" ")),Ri.set(t,i=new Set));const r=a.classList||new Ni(a);i.forEach(t=>{t in e||(r.remove(t),i.delete(t))});for(const t in e){const o=e[t];o!=i.has(t)&&(o?(r.add(t),i.add(t)):(r.remove(t),i.delete(t)))}"function"==typeof r.commit&&r.commit()}),Li=e=>class extends e{static get properties(){return{columns:{type:Array,attribute:"columns"},rows:{type:Array,attribute:"rows"},selectedRows:{type:Array},idField:{type:String,attribute:"id-field"},selectionMode:{type:String,attribute:"selection-mode"},sortIndex:{type:Number,attribute:"sort-index"},sortDescending:{type:Boolean,attribute:"sort-descending"}}}constructor(){super(),this.columns=[],this.rows=[],this.selectedRows=[],this.selectionMode="none",this.idField="id",this.sortIndex=-1,this.sortDescending=!1}get sortedRows(){if(this.sortIndex>-1)switch(this._sortField=this.columns[this.sortIndex].field,this._sortType=this.columns[this.sortIndex].type,this._sortType){case"number":this.sortDescending?this.rows.sort(this.compareNumberDesc.bind(this)):this.rows.sort(this.compareNumberAsc.bind(this));break;case"boolean":this.sortDescending?this.rows.sort(this.compareBooleanDesc.bind(this)):this.rows.sort(this.compareBooleanAsc.bind(this));break;default:this.sortDescending?this.rows.sort(this.compareDesc.bind(this)):this.rows.sort(this.compareAsc.bind(this))}return this.rows}selectRow(e){if("none"===this.selectionMode)return;"single"===this.selectionMode&&(this.selectedRows.length=0);const t=this.rows[e];t&&-1===this.selectedRows.indexOf(t)&&(this.selectedRows.push(t),this._fireEvent("obap-data-selection-changed"))}deselectRow(e){if("none"===this.selectionMode)return;const t=this.rows[e];if(t){const e=this.selectedRows.indexOf(t);-1!==e&&("single"===this.selectionMode?this.selectedRows.length=0:this.selectedRows.splice(e,1),this._fireEvent("obap-data-selection-changed"))}}selectAllRows(){"multiple"===this.selectionMode&&(this.selectedRows=[...this.rows],this._fireEvent("obap-data-selection-changed"))}deselectAllRows(){this.selectedRows.length=0,this._fireEvent("obap-data-selection-changed")}compareAsc(e,t){let o=e[this._sortField],a=t[this._sortField];return o<a?-1:o>a?1:0}compareDesc(e,t){let o=e[this._sortField],a=t[this._sortField];return o<a?1:o>a?-1:0}compareNumberAsc(e,t){let o=Number(e[this._sortField]),a=Number(t[this._sortField]);return o<a?-1:o>a?1:0}compareNumberDesc(e,t){let o=Number(e[this._sortField]),a=Number(t[this._sortField]);return o<a?1:o>a?-1:0}compareBooleanAsc(e,t){let o=Boolean(e[this._sortField]),a=Boolean(t[this._sortField]);return o<a?-1:o>a?1:0}compareBooleanDesc(e,t){let o=Boolean(e[this._sortField]),a=Boolean(t[this._sortField]);return o<a?1:o>a?-1:0}_fireEvent(e,t){const o=new CustomEvent(e,{bubbles:!0,composed:!0,detail:t});return this.dispatchEvent(o)}};window.customElements.define("obap-data-table-layout",class extends $a{static get styles(){return[Ea(Ke||(Ke=Eo`
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
                border: 0;
            }
        `))]}constructor(){super(),this._slotLayoutComplete=!1,this._boundHandleSlotChangeEvent=this._handleSlotChangeEvent.bind(this),this._boundHScrollHandler=this._hScrollHandler.bind(this),this._boundVScrollHandler=this._vScrollHandler.bind(this),this._resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>this._positionScrollAreas()),this.dispatchEvent(new CustomEvent("obap-data-table-layout-size-changed",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this._scrollbarWidth=this._getScrollbarWidth(),this._scrollbarStyle=this._hasScrollbarStyle(),this.renderRoot.addEventListener("slotchange",this._boundHandleSlotChangeEvent),this._resizeObserver.observe(this)}disconnectedCallback(){this.renderRoot.removeEventListener("slotchange",this._boundHandleSlotChangeEvent),this._resizeObserver.unobserve(this),super.disconnectedCallback()}render(){return da(Ye||(Ye=Eo`
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
        `))}_handleSlotChangeEvent(e){if(this._slotLayoutComplete)return;this._slotLayoutComplete=!0,this._positionScrollAreas(),[...this.renderRoot.querySelectorAll("slot")].filter(e=>0===e.assignedElements().length).map(e=>e.parentElement).forEach(e=>{(e.clientWidth<=1||e.clientHeight<=1)&&e.classList.add("empty")})}_hScrollHandler(e){this._hSync(e.target)}_vScrollHandler(e){this._vSync(e.target)}_hSync(e){e._ignoreLeftScroll?e._ignoreLeftScroll=!1:this._hElements.forEach(t=>{t!==e&&t.scrollLeft!==e.scrollLeft&&this._scrollLeft(t,e.scrollLeft)})}_vSync(e){e._ignoreTopScroll?e._ignoreTopScroll=!1:this._vElements.forEach(t=>{t!==e&&t.scrollTop!==e.scrollTop&&this._scrollTop(t,e.scrollTop)})}_hasScrollbarStyle(){return getComputedStyle(this).scrollbarWidth}_positionScrollAreas(){this._vElements=[...this.renderRoot.querySelectorAll("div[v-scroll]")];const e=this._vElements.length-1,t=Math.max(...this._vElements.map(e=>e.scrollHeight));this._vElements.forEach((o,a)=>{if(o.style.overflowY="auto",0===o.children[0].assignedElements().length){let i=o.querySelector("div.scroll-spacer");i||(i=document.createElement("div"),i.classList.add("scroll-spacer"),o.appendChild(i)),i.style.height=t+"px",i.style.width=t-o.clientHeight>0&&this._scrollbarStyle&&a===e?this._scrollbarWidth:"0.1px"}a!==e&&o.classList.add("hidden-scrollbar"),o.addEventListener("scroll",this._boundVScrollHandler,{passive:!0})}),this._hElements=[...this.renderRoot.querySelectorAll("div[h-scroll]")];const o=this._hElements.length-1,a=Math.max(...this._hElements.map(e=>e.scrollWidth));this._hElements.forEach((e,t)=>{if(e.style.overflowX="auto",0===e.children[0].assignedElements().length){let t=e.querySelector("div.scroll-spacer");t||(t=document.createElement("div"),t.classList.add("scroll-spacer"),e.appendChild(t)),t.style.width=a+"px",t.style.height="0.1px"}t!==o&&e.classList.add("hidden-scrollbar"),e.addEventListener("scroll",this._boundHScrollHandler,{passive:!0})})}_scrollLeft(e,t){e._ignoreLeftScroll=!0,e.scrollLeft=t}_scrollTop(e,t){e._ignoreTopScroll=!0,e.scrollTop=t}_getScrollbarWidth(){const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);const t=document.createElement("div");e.appendChild(t);const o=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),o+"px"}});window.customElements.define("obap-check",class extends qa{static get styles(){return[Ma,Ea(Xe||(Xe=Eo`
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
                margin-right: 8px;
                border-radius: 2px;
                background: transparent;
                border: 2px solid var(--obap-check-unselected-color);
            }

            .check {
                user-select: none;
                margin-bottom: 2px;
                stroke: white;
                fill: white;
            }
        `))]}static get properties(){return{label:{type:String,attribute:"label"},selected:{type:Boolean,attribute:"selected",reflect:!0},indeterminate:{type:Boolean,attribute:"indeterminate",reflect:!0},noInk:{type:Boolean,attribute:"no-ink",reflect:!0}}}get selected(){return this._selected}set selected(e){const t=this.selected;if(t!==e){this._selected=e,this.requestUpdate("selected",t);const o=new CustomEvent("obap-item-selected-change",{detail:{selected:this._selected,name:this.name},bubbles:!0,composed:!0});this.dispatchEvent(o)}}constructor(){super(),this._selected=!1,this.indeterminate=!1,this.noInk=!1,this.role="checkbox"}render(){return da(Qe||(Qe=Eo`
            <div class="container typography-body" @click="${0}">
                <div class="check-container">
                    <div class="check">${0}</div>
                    ${0}
                </div>
                ${0}
            </div>
        `),this._clickHandler,this._getCheck(),this.noInk?null:da(Ze||(Ze=Eo`<obap-ripple extend="2" ?has-focus="${0}"></obap-ripple>`),this.hasFocus),this.label)}_getCheck(){return this.indeterminate?ca(et||(et=Eo`<svg class="check" viewBox="0 0 24 24"><g><path d="M19 13H5v-2h14v2z"/></g></svg>`)):this.selected?ca(tt||(tt=Eo`<svg class="check" viewBox="0 0 24 24"><g><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></g></svg>`)):null}_clickHandler(e){this.selected=!this.selected,this.selected&&(this.indeterminate=!1),this.hasFocus=!1}});class Ti extends(Li($a)){static get styles(){return[Ma,Ea(ot||(ot=Eo`
            :host {
                --obap-data-list-background-color: var(--obap-surface-color, #FFFFFF);
                --obap-data-list-hover-background-color: #F5F5F5;
                --obap-data-list-fixed-background-color: #F5F5F5;
                --obap-data-list-action-color: var(--obap-primary-color, #5c6bc0);
                --obap-data-list-disabled-action-color: var(--obap-text-disabled-color, rgba(0, 0, 0, 0.38));
                --obap-data-list-true-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-data-list-false-color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
                --obap-data-list-row-height: 32px;
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            obap-icon {
                width: 14px;
                height: 14px;
            }

            obap-data-table-layout {
                --obap-data-table-layout-header-action-left-border-width: 0 1px 1px 0;
                --obap-data-table-layout-header-scroll-border-width: 0 0 1px 0;
                --obap-data-table-layout-header-action-right-border-width: 0 0 1px 1px;

                --obap-data-table-layout-body-action-left-border-width: 0 1px 0 0;
                --obap-data-table-layout-footer-action-left-border-width: 1px 1px 0 0;
                
                
                --obap-data-table-layout-background-color: var(--obap-data-list-fixed-background-color);

                --obap-data-table-layout-header-action-left-color: inherit;
                --obap-data-table-layout-header-action-left-background-color: var(--obap-data-list-fixed-background-color);

                --obap-data-table-layout-body-action-left-color: inherit;
                --obap-data-table-layout-body-action-left-background-color: var(--obap-data-list-fixed-background-color);

                --obap-data-table-layout-header-scroll-color: inherit;
                --obap-data-table-layout-header-scroll-background-color: var(--obap-data-list-fixed-background-color);

                --obap-data-table-layout-body-scroll-color: inherit;
                --obap-data-table-layout-body-scroll-background-color: var(--obap-data-list-background-color);
                
                height: 100%;
            }

            table {
                border-spacing: 0;
                color: var(--obap-text-primary-color, rgba(0, 0, 0, 0.87));
            }

            tr {
                height: var(--obap-data-list-row-height);
                line-height: var(--obap-data-list-row-height);
            }

            th, td {
                padding: 0 20px;
                margin: 0;
                box-sizing: border-box;
            }

            th {
                font-weight: 500;
            }

            th[sortable] {
                cursor: pointer;
            }

            td {
                border-bottom: 1px solid var(--obap-divider-on-surface-color, rgba(0, 0, 0, 0.20));
            }

            tr:last-of-type > td {
                border-bottom: 0;
            }     

            .header-cell-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                pointer-events: none;
            }

            .header-cell-icon {
                margin: 0 4px 2px -18px;
                opacity: 0;
            }

            .header-cell-icon[active], th:hover .header-cell-icon {
                opacity: 1;
            }

            .header-cell-label {
                flex: 1;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .header-cell-label[type="number"] {
                text-align: right;
            }

            .header-cell-label[type="boolean"], .header-cell-label[type="action"] {
                text-align: center;
            }
            
            .body-row:hover {
                background: var(--obap-data-list-hover-background-color);
            }

            .body-cell-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                text-overflow: ellipsis;
                white-space: nowrap;
                min-height: var(--obap-data-list-row-height);
                height: var(--obap-data-list-row-height);
            }

            .body-cell-container[type="number"] {
                justify-content: flex-end;
            }

            .body-cell-container[type="boolean"] {
                justify-content: center;
            }

            .body-cell-container[type="action"] {
                justify-content: center;
                color: var(--obap-data-list-action-color);
                text-transform: uppercase;
                font-weight: 500;
                cursor: pointer;
            }

            .body-cell-icon {
                fill: var(--obap-data-list-false-color);
            }

            .body-cell-icon[is-true] {
                fill: var(--obap-data-list-true-color);
            }

            .collapse {
                height: 0;
                min-height: 0;
                line-height: 0;
                overflow: hidden;
            }

            .compact {
                padding: 0 0 0 8px;
            }
        `))]}static get properties(){return{falseIcon:{type:String,attribute:"false-icon"},trueIcon:{type:String,attribute:"true-icon"}}}constructor(){super(),this.falseIcon="core:cross",this.trueIcon="core:check"}updated(e){super.updated(e),this._scrollHeaderContainer=this.renderRoot.getElementById("scroll-header-container"),this._fixedBodyContainer=this.renderRoot.getElementById("fixed-body-container"),requestAnimationFrame(()=>this._resizeHeaderCells())}render(){return da(at||(at=Eo`
            <obap-data-table-layout class="typography-body" @obap-item-selected-change="${0}" @obap-data-table-layout-size-changed="${0}">
                <!-- Left Actions -->
                ${0}
                
                ${0}

                <!-- Scroll Columns -->
                <div id="header-scroll" class="header-scroll" slot="header-scroll">
                    <table id="header-scroll-table">
                        ${0}
                    </table>
                </div> 

                <div class="body-scroll" slot="body-scroll">
                    <table id="body-scroll-table">
                        ${0}
                        ${0}
                    </table>
                </div> 
            </obap-data-table-layout>
        `),this._rowCheck,()=>requestAnimationFrame(()=>this._resizeHeaderCells()),"single"===this.selectionMode?da(it||(it=Eo`
                        <div class="header-action-left" slot="header-action-left"></div>  
                        <div class="body-action-left" slot="body-action-left">
                            <table id="body-action-table">
                                ${0}
                            </table>
                        </div>
                    `),this._renderActionLeftBody()):null,"multiple"===this.selectionMode?da(rt||(rt=Eo`
                        <div class="header-action-left" slot="header-action-left">
                            <table id="header-action-table">
                                ${0}
                            </table>
                        </div>  
                        <div class="body-action-left" slot="body-action-left">
                            <table id="body-action-table">
                                ${0}
                            </table>
                        </div>
                    `),this._renderActionLeftHeader(),this._renderActionLeftBody()):null,this._renderScrollHeader(!0),this._renderScrollHeader(!1),this._renderScrollBody())}_renderScrollHeader(e){return da(st||(st=Eo`
            <thead>
                <tr id="${0}" class=${0}>
                    ${0}
                </tr>
            </thead>
        `),e?"visible-header":"invisible-header",Bi({collapse:!e}),this.columns.map((t,o)=>this._renderHeaderCell(t,o,e)))}_renderActionLeftHeader(){return da(nt||(nt=Eo`
            <thead>
                <tr>
                    <th class="compact">
                        <div class="header-cell-container" style="pointer-events: all;"><obap-check no-ink ?indeterminate="${0}" ?selected="${0}"></obap-check></div>
                    </th>
                </tr>
            </thead>
        `),this.selectedRows.length>0&&this.selectedRows.length<this.rows.length,this.selectedRows.length===this.rows.length)}_renderScrollBody(){return da(lt||(lt=Eo`
            <tbody>
                ${0}
            </tbody>
        `),Ai(this.sortedRows,e=>e[this.idField],(e,t)=>da(dt||(dt=Eo`
                    <tr class="body-row">${0}</tr>
                `),this.columns.map((o,a)=>this._renderBodyCell(o,e,a,t)))))}_renderActionLeftBody(){const e="multiple"===this.selectionMode?this.selectedRows:this.selectedRows.length>0?[this.selectedRows[0]]:[];return da(ct||(ct=Eo`
            <tbody>
                ${0}
            </tbody>
        `),Ai(this.sortedRows,e=>e[this.idField],(t,o)=>da(pt||(pt=Eo`
                    <tr>
                        <td class="compact"><div class="body-cell-container"><obap-check no-ink row-index="${0}" ?selected="${0}"></obap-check></div></td>
                    </tr>
                `),o,e.indexOf(t)>-1)))}_renderHeaderCell(e,t,o){let a={"header-cell-container":!0,collapse:!o};return da(bt||(bt=Eo`
            <th .columnIndex="${0}" ?sortable="${0}" @click="${0}">
                <div class=${0}>
                    ${0}
                    <div type="${0}" class="header-cell-label">${0}</div>
                </div>
            </th>
        `),e.sortable&&o?t:-1,e.sortable,o?this._onColumnClick:null,Bi(a),e.sortable?da(ht||(ht=Eo`<obap-icon class="header-cell-icon" ?active="${0}" icon="${0}"></obap-icon>`),t===this.sortIndex,this._getSortIcon(e,t)):null,e.type,e.label)}_renderBodyCell(e,t,o,a){const i=t[e.field];if(e.field&&null==i)return da(ut||(ut=Eo`<td></td>`));switch(e.type){case"boolean":return da(gt||(gt=Eo`
                    <td>
                        <div class="body-cell-container" type="${0}">
                            <obap-icon class="body-cell-icon" ?is-true="${0}" icon="${0}"></obap-icon>
                        </div>
                    </td>
                `),e.type,i,i?this.trueIcon:this.falseIcon);case"action":return da(vt||(vt=Eo`
                    <td>
                        <div class="body-cell-container" type="${0}" .columnIndex="${0}" .rowIndex="${0}" @click="${0}">
                            ${0}
                        </div>
                    </td>
                `),e.type,o,a,this._onActionClick,e.actionLabel);case"number":{const t=e.prefix+(Number.isInteger(e.decimals)?Number(i).toFixed(e.decimals):i)+e.suffix;return da(mt||(mt=Eo`
                    <td>
                        <div class="body-cell-container" type="${0}">${0}</div>
                    </td>
                `),e.type,t)}default:return da(yt||(yt=Eo`
                    <td>
                        <div class="body-cell-container" type="${0}">
                            ${0}
                        </div>
                    </td>
                `),e.type,e.prefix+i+e.suffix)}}_getSortIcon(e,t){return this.sortIndex===t?this.sortDescending?"core:arrow-down":"core:arrow-up":""}_onActionClick(e){this._fireEvent("obap-data-action",{rowIndex:e.target.rowIndex,columnIndex:e.target.columnIndex})}_onColumnClick(e){const t=e.target.columnIndex;t>-1&&(t===this.sortIndex?this.sortDescending=!this.sortDescending:(this.sortIndex=t,this.sortDescending=!1))}_resizeHeaderCells(){const e=this.renderRoot.getElementById("visible-header").querySelectorAll(".header-cell-container"),t=this.renderRoot.getElementById("invisible-header").querySelectorAll(".header-cell-container");for(let o=0;o<t.length;o++)e[o].style.width=t[o].clientWidth+"px"}_rowCheck(e){e.preventDefault();const t=e.target,o=e.detail.selected;if(t.hasAttribute("row-index")){const e=Number(t.getAttribute("row-index"));o?this.selectRow(e):this.deselectRow(e)}else t.indeterminate?t.selected&&t.indeterminate&&this.selectAllRows():o?this.selectAllRows():this.deselectAllRows();this.requestUpdate()}}window.customElements.define("obap-data-list",Ti);window.customElements.define("demo-tables",class extends $a{static get styles(){return[Ea(ft||(ft=Eo`
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
        `))]}static get properties(){return{columns:{type:Array},rows:{type:Array}}}constructor(){super(),this.columns=[{label:"Dessert (100g serving)",field:"dessert",type:"text",suffix:"",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Price",field:"price",type:"number",suffix:"",prefix:"$",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0,decimals:2},{label:"Calories",field:"calories",type:"number",suffix:"",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Fat (g)",field:"fat",type:"number",suffix:"",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Carbs (g)",field:"carbs",type:"number",suffix:"",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Protein (g)",field:"protein",type:"number",suffix:"",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Sodium (mg)",field:"sodium",type:"number",suffix:"",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Calcium (%)",field:"calcium",type:"number",suffix:"%",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Iron (%)",field:"iron",type:"number",suffix:"%",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"In Stock",field:"available",type:"boolean",suffix:"",prefix:"",actionLabel:"",trueIcon:"",falseIcon:"",sortable:!0},{label:"Add to Cart",field:"",type:"action",suffix:"",prefix:"",actionLabel:"Add",trueIcon:"",falseIcon:"",sortable:!1}],this.rows=[{id:0,dessert:"Frozen Yoghurt",price:4.5,calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:14,iron:1,available:!0},{id:1,dessert:"Ice Cream Sandwich",price:3.99,calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:8,iron:1,available:!0},{id:2,dessert:"Eclair",price:2.99,calories:262,fat:16,carbs:24,protein:6,sodium:337,calcium:6,iron:7,available:!1},{id:3,dessert:"Cupcake",price:2.5,calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:3,iron:8,available:!0},{id:4,dessert:"Gingerbread",price:1.75,calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:7,iron:16,available:!0},{id:5,dessert:"Jelly Bean",price:.35,calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:0,iron:0,available:!0},{id:6,dessert:"Lollipop",price:.5,calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:0,iron:2,available:!1},{id:7,dessert:"Honeycomb",price:1.45,calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:0,iron:45,available:!1},{id:8,dessert:"Donut",price:.99,calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:2,iron:22,available:!0},{id:9,dessert:"KitKat",price:.99,calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:12,iron:6,available:!0}]}render(){return da(xt||(xt=Eo`
            <div class="container">
                <obap-material elevation="1" @obap-data-action="${0}">
                    <obap-data-list .columns="${0}" .rows="${0}" id-field="id" selection-mode="multiple" sort-index="4"></obap-data-list>
                </obap-material>
            </div>
        `),this._onAction,this.columns,this.rows)}});window.customElements.define("obap-line-sparkline",class extends $a{static get styles(){return[Ea(wt||(wt=Eo`
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
        `))]}static get properties(){return{values:{type:Array,attribute:"values",reflect:!0},showLine:{type:Boolean,attribute:"show-line"},showMarkers:{type:Boolean,attribute:"show-markers"},showArea:{type:Boolean,attribute:"show-area"},markerSize:{type:Number,attribute:"marker-size"}}}constructor(){super(),this.values=[],this.markerSize=4}render(){const e=this.values.length;if(0===e)return null;const t=this.markerSize/2,o=Math.min(...this.values),a=Math.max(...this.values),i=300/(e-1),r=o<0?60/(a-o):60/a,s=60-r*Math.abs(o);let n=null,l=null;const d=this.showLine||this.showArea?this.values.map((o,a)=>{const d=o<0,c=r*Math.abs(o),p=a*i;return 0===a&&(n=p+" 60,"),a===e-1&&(l=`,${p} 60`),`${p} ${d?s+c-t:s-c+t}`}).join(","):null;return da(_t||(_t=Eo`
            <div class="container">
                ${0}
            </div>
        `),ca(kt||(kt=Eo`<svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                    <g>
                        ${0}
                        ${0}

                        ${0}
                    </g>
                </svg>`),300,60,this.showArea?ca(Et||(Et=Eo`<polygon points="${0}"></polygon>`),n+d+l):null,this.showLine?ca(St||(St=Eo`<polyline points="${0}"></polyline>`),d):null,this.showMarkers?this.values.map((e,o)=>{const a=e<0,n=r*Math.abs(e);return ca(Ct||(Ct=Eo`<circle ?negative="${0}" cx="${0}" cy="${0}" r="${0}"></circle>`),a,o*i,a?s+n-t:s-n+t,t)}):null))}});window.customElements.define("demo-sparkline-line",class extends $a{static get styles(){return[Ea($t||($t=Eo`
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

            obap-check {
                margin-right: 24px;
            }

            obap-line-sparkline {
                width: 100%;
            }
        `))]}static get properties(){return{values:{type:Array},showLine:{type:Boolean},showMarkers:{type:Boolean},showArea:{type:Boolean}}}constructor(){super(),this.showLine=!0,this.showMarkers=!0,this.showArea=!0,this.values=[-7,-9,-5,-2,9,11,15,10,10,17,19,17,10,22,25,10,9,10,26,28,27,10,10,30,10,-3,-6,-3,4,10]}render(){return da(It||(It=Eo`
            <div class="container">
                <demo-panel>
                    <div class="check-group" @obap-item-selected-change="${0}">
                        <obap-check name="line" label="Line" selected></obap-check>
                        <obap-check name="marker" label="Marker" selected></obap-check>
                        <obap-check name="area" label="Area" selected></obap-check>
                    </div>
                </demo-panel>

                <demo-panel>
                    <obap-line-sparkline .values="${0}" ?show-line="${0}" ?show-markers="${0}" ?show-area="${0}"></obap-line-sparkline>
                </demo-panel>
            </div>
        `),this._checkChanged,this.values,this.showLine,this.showMarkers,this.showArea)}_checkChanged(e){const t=e.detail.name,o=e.detail.selected;switch(t){case"line":this.showLine=o;break;case"marker":this.showMarkers=o;break;case"area":this.showArea=o}}});window.customElements.define("obap-bar-sparkline",class extends $a{static get styles(){return[Ea(Vt||(Vt=Eo`
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
        `))]}static get properties(){return{values:{type:Array,attribute:"values",reflect:!0},barSpacing:{type:Number,attribute:"bar-spacing"}}}constructor(){super(),this.values=[],this.barSpacing=2}render(){const e=this.values.length;if(0===e)return null;const t=Math.min(...this.values),o=Math.max(...this.values),a=(300+this.barSpacing)/e-this.barSpacing,i=t<0?60/(o-t):60/o,r=60-i*Math.abs(t),s=a+this.barSpacing;return da(zt||(zt=Eo`
            <div class="container">
                ${0}
            </div>
        `),ca(Pt||(Pt=Eo`<svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                    <g>
                        ${0}
                    </g>
                </svg>`),300,60,this.values.map((e,t)=>{const o=e<0,n=i*Math.abs(e);return ca(At||(At=Eo`<rect ?negative="${0}" x="${0}" y="${0}" width="${0}" height="${0}"></rect>`),o,t*s,o?r:r-n,a,n)})))}});window.customElements.define("demo-sparkline-bar",class extends $a{static get styles(){return[Ea(Nt||(Nt=Eo`
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

            obap-bar-sparkline {
                width: 100%;
            }
        `))]}static get properties(){return{values:{type:Array}}}constructor(){super(),this.values=[-7,-9,-5,-2,9,11,15,10,10,17,19,17,10,22,25,10,9,10,26,28,27,10,10,30,10,-3,-6,-3,4,10]}render(){return da(Rt||(Rt=Eo`
            <div class="container">
                <demo-panel>
                    <obap-bar-sparkline .values="${0}"></obap-bar-sparkline>
                </demo-panel>
            </div>
        `),this.values)}});window.customElements.define("obap-winloss-sparkline",class extends $a{static get styles(){return[Ea(Bt||(Bt=Eo`
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
        `))]}static get properties(){return{values:{type:Array,attribute:"values",reflect:!0},barSpacing:{type:Number,attribute:"bar-spacing"},threshold:{type:Number,attribute:"threshold"},stretch:{type:Boolean,attribute:"stretch"}}}constructor(){super(),this.values=[],this.barSpacing=2,this.threshold=0,this.stretch=!1}render(){const e=this.values.length;if(0===e)return null;Math.min(...this.values),Math.max(...this.values);const t=(300+this.barSpacing)/e-this.barSpacing,o=t+this.barSpacing;return da(Lt||(Lt=Eo`
            <div class="container">
                ${0}
            </div>
        `),ca(Tt||(Tt=Eo`<svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                    <g>
                        ${0}
                    </g>
                </svg>`),300,60,this.values.map((e,a)=>{const i=e<this.threshold,r=a*o,s=this.stretch?30:t,n=i?30:this.stretch?0:30-s;return ca(Mt||(Mt=Eo`<rect ?negative="${0}" x="${0}" y="${0}" width="${0}" height="${0}"></rect>`),i,r,n,t,s)})))}});window.customElements.define("demo-sparkline-winloss",class extends $a{static get styles(){return[Ea(Ht||(Ht=Eo`
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

            obap-winloss-sparkline {
                width: 100%;
            }
        `))]}static get properties(){return{values:{type:Array}}}constructor(){super(),this.values=[-7,-9,-5,-2,9,11,15,10,10,17,19,17,10,22,25,10,9,10,26,28,27,10,10,30,10,-3,-6,-3,4,10]}render(){return da(Ft||(Ft=Eo`
            <div class="container">
                <demo-panel>
                    <obap-winloss-sparkline .values="${0}"></obap-winloss-sparkline>
                </demo-panel>
            </div>
        `),this.values)}});window.customElements.define("obap-bullet-sparkline",class extends $a{static get styles(){return[Ea(Ot||(Ot=Eo`
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
        `))]}static get properties(){return{value:{type:Number,attribute:"value"},targetValue:{type:Number,attribute:"target-value"},maxValue:{type:Number,attribute:"max-value"},percentageRanges:{type:Array,attribute:"percentage-ranges"}}}constructor(){super(),this.value=0,this.targetValue=0,this.maxValue=100,this.percentageRanges=[100]}render(){const e=this._getRangeValues(300);return da(Dt||(Dt=Eo`
            <div class="container">
                ${0}
            </div>
        `),ca(Ut||(Ut=Eo`<svg viewBox="0 0 ${0} ${0}" preserveAspectRatio="none">
                    <g>
                        ${0}
                        <rect class="value" x="0" y="${0}" width="${0}" height="${0}"></rect>
                        <rect class="target-value" x="${0}" y="${0}" width="${0}" height="${0}"></rect> 
                    </g>
                </svg>`),300,30,e.map(e=>ca(qt||(qt=Eo`<rect class="range" x="${0}" y="0" width="${0}" height="${0}" opacity="${0}"></rect>`),e.x,e.width,30,e.opacity)),12,this.value/this.maxValue*300,6,this.targetValue/this.maxValue*300-2,6,4,18))}_getRangeValues(e){const t=this.percentageRanges.sort((e,t)=>e-t),o=t.length,a=e/100,i=[];for(let e=0;e<t.length;e++)0===e?i.push({x:0,width:t[e]*a,opacity:1}):i.push({x:t[e-1]*a,width:(t[e]-t[e-1])*a,opacity:1-e/o});return i}});window.customElements.define("demo-sparkline-bullet",class extends $a{static get styles(){return[Ea(jt||(jt=Eo`
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

            obap-bullet-sparkline {
                width: 100%;
            }
        `))]}static get properties(){return{bulletRanges:{type:Array}}}constructor(){super(),this.bulletRanges=[40,70,85,100]}render(){return da(Wt||(Wt=Eo`
            <div class="container">
                <demo-panel>
                    <obap-bullet-sparkline class="sparkline" .percentageRanges="${0}" value="60" target-value="50" max-value="100"></obap-bullet-sparkline>
                </demo-panel>
            </div>
        `),this.bulletRanges)}});window.customElements.define("obap-pie-sparkline",class extends $a{static get styles(){return[Ea(Gt||(Gt=Eo`
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
        `))]}static get properties(){return{values:{type:Array,attribute:"values",reflect:!0},colors:{type:Array,attribute:"colors"},donutRadius:{type:Number,attribute:"donut-radius"},hideSeparators:{type:Boolean,attribute:"hide-separators"}}}constructor(){super(),this.values=[],this._vw=60,this.donutRadius=0,this.colors=[],this.hideSeparators=!1}render(){if(0===this.colors.length){getComputedStyle(this);this.colors.push("var(--obap-pie-section-color)")}this._colorCount=this.colors.length;const e=this._getPaths();return e?da(Jt||(Jt=Eo`
            <div class="container">
                ${0}
            </div>
        `),ca(Kt||(Kt=Eo`
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
                `),this._vw,this._vw,this._vw/2,this._vw/2,this.donutRadius,e.map((e,t)=>ca(Yt||(Yt=Eo`
                                <path class="wedge" d="${0}" fill="${0}"></path>
                                ${0}
                            `),e.wedge,this._getNextColor(t),this.hideSeparators?null:ca(Xt||(Xt=Eo`<path class="outline" d="${0}"></path>`),e.outline))))):null}_getPaths(){const e=this.values.filter(e=>e>0);if(this._itemCount=e.length,0===this._itemCount)return null;const t=this._vw/2,o=t,a=t,i=2*Math.PI,r=e.reduce((e,t)=>e+t,0),s=e.map(e=>e/r);let n=0,l=this._getCoordinates(a,i*n);return s.map(e=>{n+=e;const t={start:l,end:this._getCoordinates(a,i*n)};return l=t.end,t}).map(e=>({wedge:`M ${e.start.x} ${e.start.y} L ${t} ${o} L ${e.end.x} ${e.end.y} A ${a} ${a} 0 0 0 ${e.start.x} ${e.start.y}`,outline:`M ${e.start.x} ${e.start.y} L ${t} ${o} L ${e.end.x} ${e.end.y}`}))}_getCoordinates(e,t){return{x:e*Math.cos(t)+e,y:e*Math.sin(t)+e}}_getNextColor(e){if(1===this._colorCount)return this.colors[0];const t=e%this._colorCount;return e===this._itemCount-1&&0===t&&this._colorCount>2?this.colors[1]:this.colors[t]}});window.customElements.define("demo-sparkline-pie",class extends $a{static get styles(){return[Ea(Qt||(Qt=Eo`
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
        `))]}static get properties(){return{values:{type:Array},colors:{type:Array}}}constructor(){super(),this.colors=["indianred","seagreen","cornflowerblue","hotpink"],this.values=[2,4,3]}render(){return da(Zt||(Zt=Eo`
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
        `),this.values,this.values,this.colors,this.values,this.values,this.colors)}});window.customElements.define("demo-tabs",class extends $a{static get styles(){return[Ea(eo||(eo=Eo`
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

        `))]}render(){return da(to||(to=Eo`
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
        `))}});window.customElements.define("obap-linear-progress",class extends $a{static get styles(){return[Ea(oo||(oo=Eo`
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
        `))]}static get properties(){return{min:{type:Number,attribute:"min"},max:{type:Number,attribute:"max"},value:{type:Number,attribute:"value"},secondaryValue:{type:Number,attribute:"secondary-value"},indeterminate:{type:Boolean,attribute:"indeterminate"}}}constructor(){super(),this.min=0,this.max=100,this.value=0,this.secondaryValue=0,this.indeterminate=!1}render(){return da(ao||(ao=Eo`
            <div class="container">
                ${0}
            </div>
        `),this.indeterminate?this._renderIndeterminateBar(this.disabled):[this._renderBar(this.secondaryValue,!0),this._renderBar(this.value,!1)])}_renderBar(e,t){const o=`width: ${100*e/(this.max-this.min)}%;`;return e>0?da(io||(io=Eo`<div class="${0}" style="${0}"></div>`),t?"secondary":"primary",o):null}_renderIndeterminateBar(e){return e?null:da(ro||(ro=Eo`<div class="indeterminate"></div>`))}});window.customElements.define("obap-circular-progress",class extends $a{static get styles(){return[Ea(so||(so=Eo`
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
        `))]}static get properties(){return{min:{type:Number,attribute:"min"},max:{type:Number,attribute:"max"},value:{type:Number,attribute:"value"},secondaryValue:{type:Number,attribute:"secondary-value"},indeterminate:{type:Boolean,attribute:"indeterminate"},icon:{type:String,attribute:"icon"}}}constructor(){super(),this.min=0,this.max=100,this.value=0,this.secondaryValue=0,this.indeterminate=!1,this.icon="",this._lineWidth=2,this._size=32}render(){const e=getComputedStyle(this);return this._lineWidth=Number(this.getCssVariableValue(e,"--obap-circular-progress-stroke-width","4px").replace("px",""))/2,this._size=Number(this.getCssVariableValue(e,"--obap-circular-progress-size","28px").replace("px","")),da(no||(no=Eo`
            <div class="container">
                ${0}
                ${0}
            </div>
        `),this.icon?da(lo||(lo=Eo`<obap-icon icon="${0}"></obap-icon>`),this.icon):null,this.indeterminate?this._renderIndeterminateCircle(this.disabled):[this._renderCircle(this.secondaryValue,!0),this._renderCircle(this.value,!1)])}_renderCircle(e,t){return 0===e?null:ca(co||(co=Eo`<svg class="${0}" viewBox="0 0 ${0} ${0}"><circle cx="${0}" cy="${0}" r="${0}" stroke-dasharray="${0}"/></svg>`),t?"secondary":"primary",this._size,this._size,this._size/2,this._size/2,this._size/2-this._lineWidth,this._getCircleStrokeArray(e))}_getCircleStrokeArray(e){const t=2*Math.PI*(this._size/2-this._lineWidth);if(this.max-this.min<=0)return"0 "+t;{const o=e/(this.max-this.min)*t;return`${o} ${t-o}`}}_renderIndeterminateCircle(e){return e?null:ca(po||(po=Eo`<svg class="indeterminate" viewBox="0 0 ${0} ${0}"><circle class="indeterminate" cx="${0}" cy="${0}" r="${0}"/></svg>`),this._size,this._size,this._size/2,this._size/2,this._size/2-this._lineWidth)}});window.customElements.define("obap-activity-indicator",class extends $a{static get styles(){return[bi,Ea(bo||(bo=Eo`
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
        `))]}static get properties(){return{activityType:{type:String,attribute:"activity-type",reflect:!0},mini:{type:Boolean,attribute:"mini",reflect:!0}}}constructor(){super(),this.activityType="circular",this.mini=!1}render(){switch(this.activityType){case"linear":return da(ho||(ho=Eo`<obap-linear-progress ?mini="${0}" indeterminate ?disabled="${0}"></obap-linear-progress>`),this.mini,this.disabled);case"typing":return this._renderTypingIndicator(!0);case"equalizer":return this._renderTypingIndicator(!1);default:return da(uo||(uo=Eo`<obap-circular-progress ?mini="${0}" indeterminate ?disabled="${0}"></obap-circular-progress>`),this.mini,this.disabled)}}_renderTypingIndicator(e){return da(go||(go=Eo`
            <div class="typing-indicator" ?round="${0}" ?disabled="${0}">
                <div ?mini="${0}" class="pill pill-1"></div><div ?mini="${0}" class="pill pill-2"></div><div ?mini="${0}" class="pill pill-3"></div>
            </div>
        `),e,this.disabled,this.mini,this.mini,this.mini)}});window.customElements.define("demo-progress-indicators-activity",class extends $a{static get styles(){return[Ea(vo||(vo=Eo`
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
        `))]}static get properties(){return{}}constructor(){super()}render(){return da(mo||(mo=Eo`
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
        `))}});window.customElements.define("demo-progress-indicators-circular",class extends $a{static get styles(){return[Ea(yo||(yo=Eo`
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
        `))]}render(){return da(fo||(fo=Eo`
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
        `))}});window.customElements.define("demo-progress-indicators-linear",class extends $a{static get styles(){return[Ea(xo||(xo=Eo`
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
        `))]}render(){return da(wo||(wo=Eo`
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
        `))}});class Mi extends(za($a)){static get styles(){return[Ea(_o||(_o=Eo`
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
        `))]}constructor(){super(),Va.create("green","#80e27e","#4caf50","#087f23","#ffc107","#FAFAFA"),Va.apply("default")}render(){return da(ko||(ko=Eo`
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
                    <obap-application-content><div class="content">Cards</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="chips" label="Chips" icon="app:chips" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Chips</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="data-tables" label="Data Tables" icon="app:data-tables" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-tables class="demo"></demo-tables></obap-application-content>
                </obap-application-view>

                <obap-application-view name="dialogs" label="Dialogs" icon="app:dialogs" hide-sub-view-scroll-buttons>
                    <obap-application-content><demo-dialogs class="demo"></demo-dialogs></obap-application-content>
                </obap-application-view>

                <obap-application-view name="progress-indicators" label="Progress Indicators" icon="app:progress-indicators" hide-sub-view-scroll-buttons>
                    <obap-application-content name="progress-indicators-linear" label="Linear"><demo-progress-indicators-linear class="demo"></demo-progress-indicators-linear></obap-application-content>
                    <obap-application-content name="progress-indicators-circular" label="Circular"><demo-progress-indicators-circular class="demo"></demo-progress-indicators-circular></obap-application-content>
                    <obap-application-content name="progress-indicators-activity" label="Activity"><demo-progress-indicators-activity class="demo"></demo-progress-indicators-activity></obap-application-content>
                </obap-application-view>

                <obap-application-view name="selection" label="Selection Controls" icon="app:selection" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Selection Controls</div></obap-application-content>
                </obap-application-view>

                <obap-application-view name="charts-sparkline" label="Sparkline Charts" icon="app:charts" hide-sub-view-scroll-buttons>
                    <obap-application-content name="line" label="Line"><demo-sparkline-line class="demo"></demo-sparkline-line></obap-application-content>
                    <obap-application-content name="bar" label="Bar"><demo-sparkline-bar class="demo"></demo-sparkline-bar></obap-application-content>
                    <obap-application-content name="pie" label="Pie & Donut"><demo-sparkline-pie class="demo"></demo-sparkline-pie></obap-application-content>
                    <obap-application-content name="winloss" label="Win-Loss"><demo-sparkline-winloss class="demo"></demo-sparkline-winloss></obap-application-content>
                    <obap-application-content name="bullet" label="Bullet"><demo-sparkline-bullet class="demo"></demo-sparkline-bullet></obap-application-content>
                </obap-application-view>

                <obap-application-view name="tabs" label="Tabs" icon="app:tabs" hide-sub-view-scroll-buttons>
                    <obap-application-content><obap-application-content><demo-tabs class="demo"></demo-tabs></obap-application-content></obap-application-content>
                </obap-application-view>

                <obap-application-view name="tooltips-callouts" label="Tooltips & Callouts" icon="app:tooltips-callouts" hide-sub-view-scroll-buttons>
                    <obap-application-content><div class="content">Tooltips & Callouts</div></obap-application-content>
                </obap-application-view>
            </obap-mobile-application>
        `))}}window.customElements.define("demo-mobile-app",Mi);
