import './polyfills.server.mjs';
import{a as Q,b as J,d as f,e as F,g as _,h as $}from"./chunk-EHNC42K2.mjs";import{g as Z,h as R,j as X,k as g,l as S}from"./chunk-PIIYR3FX.mjs";import{d as K,e as V,f as j,g as ee}from"./chunk-IKVKVZ2T.mjs";import{a as Y,b as q}from"./chunk-JBXNSZOT.mjs";import{a as M}from"./chunk-3EP7245L.mjs";import{b,d as H}from"./chunk-E6UFF6GL.mjs";import{i as W}from"./chunk-AYA2QI3U.mjs";var U=class n{static Eval(e,t){return e.match(/\([^()]*\)/g)?e=e.replace(/\([^()]*\)/g,i=>(i=i.slice(1,i.length-1),n._HandleParenthesisContent(i,t))):e=n._HandleParenthesisContent(e,t),e==="true"?!0:e==="false"?!1:n.Eval(e,t)}static _HandleParenthesisContent(e,t){t=t||(o=>o==="true");let i,s=e.split("||");for(let o in s)if(Object.prototype.hasOwnProperty.call(s,o)){let l=n._SimplifyNegation(s[o].trim()),a=l.split("&&");if(a.length>1)for(let h=0;h<a.length;++h){let r=n._SimplifyNegation(a[h].trim());if(r!=="true"&&r!=="false"?r[0]==="!"?i=!t(r.substring(1)):i=t(r):i=r==="true",!i){l="false";break}}if(i||l==="true"){i=!0;break}l!=="true"&&l!=="false"?l[0]==="!"?i=!t(l.substring(1)):i=t(l):i=l==="true"}return i?"true":"false"}static _SimplifyNegation(e){return e=e.replace(/^[\s!]+/,t=>(t=t.replace(/[\s]/g,()=>""),t.length%2?"!":"")),e=e.trim(),e==="!true"?e="false":e==="!false"&&(e="true"),e}};var y=class n{static EnableFor(e){e._tags=e._tags||{},e.hasTags=()=>n.HasTags(e),e.addTags=t=>n.AddTagsTo(e,t),e.removeTags=t=>n.RemoveTagsFrom(e,t),e.matchesTagsQuery=t=>n.MatchesQuery(e,t)}static DisableFor(e){delete e._tags,delete e.hasTags,delete e.addTags,delete e.removeTags,delete e.matchesTagsQuery}static HasTags(e){if(!e._tags)return!1;let t=e._tags;for(let i in t)if(Object.prototype.hasOwnProperty.call(t,i))return!0;return!1}static GetTags(e,t=!0){if(!e._tags)return null;if(t){let i=[];for(let s in e._tags)Object.prototype.hasOwnProperty.call(e._tags,s)&&e._tags[s]===!0&&i.push(s);return i.join(" ")}else return e._tags}static AddTagsTo(e,t){if(!t||typeof t!="string")return;t.split(" ").forEach(function(s){n._AddTagTo(e,s)})}static _AddTagTo(e,t){t=t.trim(),!(t===""||t==="true"||t==="false")&&(t.match(/[\s]/)||t.match(/^([!]|([|]|[&]){2})/)||(n.EnableFor(e),e._tags[t]=!0))}static RemoveTagsFrom(e,t){if(!n.HasTags(e))return;let i=t.split(" ");for(let s in i)n._RemoveTagFrom(e,i[s])}static _RemoveTagFrom(e,t){delete e._tags[t]}static MatchesQuery(e,t){return t===void 0?!0:t===""?n.HasTags(e):U.Eval(t,i=>n.HasTags(e)&&e._tags[i])}};var te=function(n,e,t,i={}){let s=n();y&&y.HasTags(e)&&y.AddTagsTo(s,y.GetTags(e,!0));let o=F(s),l={};for(let a in o){let h=o[a],r=e[a],d=h.type;if(r!=null&&(a!=="uniqueId"||A.AllowLoadingUniqueId))switch(d){case 0:case 6:case 11:s[a]=r;break;case 1:i.cloneTexturesOnlyOnce&&l[r.uniqueId]?s[a]=l[r.uniqueId]:(s[a]=t||r.isRenderTarget?r:r.clone(),l[r.uniqueId]=s[a]);break;case 2:case 3:case 4:case 5:case 7:case 10:case 12:s[a]=t?r:r.clone();break}}return s},A=(()=>{class n{static AppendSerializedAnimations(t,i){if(t.animations){i.animations=[];for(let s=0;s<t.animations.length;s++){let o=t.animations[s];i.animations.push(o.serialize())}}}static Serialize(t,i){i||(i={}),y&&(i.tags=y.GetTags(t));let s=F(t);for(let o in s){let l=s[o],a=l.sourceName||o,h=l.type,r=t[o];if(r!=null&&(o!=="uniqueId"||n.AllowLoadingUniqueId))switch(h){case 0:i[a]=r;break;case 1:i[a]=r.serialize();break;case 2:i[a]=r.asArray();break;case 3:i[a]=r.serialize();break;case 4:i[a]=r.asArray();break;case 5:i[a]=r.asArray();break;case 6:i[a]=r.id;break;case 7:i[a]=r.serialize();break;case 8:i[a]=r.asArray();break;case 9:i[a]=r.serialize();break;case 10:i[a]=r.asArray();break;case 11:i[a]=r.id;break;case 12:i[a]=r.asArray();break}}return i}static ParseProperties(t,i,s,o){o||(o="");let l=F(i);for(let a in l){let h=l[a],r=t[h.sourceName||a],d=h.type;if(r!=null&&(a!=="uniqueId"||n.AllowLoadingUniqueId)){let u=i;switch(d){case 0:u[a]=r;break;case 1:s&&(u[a]=n._TextureParser(r,s,o));break;case 2:u[a]=Q.FromArray(r);break;case 3:u[a]=n._FresnelParametersParser(r);break;case 4:u[a]=Z.FromArray(r);break;case 5:u[a]=R.FromArray(r);break;case 6:s&&(u[a]=s.getLastMeshById(r));break;case 7:u[a]=n._ColorCurvesParser(r);break;case 8:u[a]=J.FromArray(r);break;case 9:u[a]=n._ImageProcessingConfigurationParser(r);break;case 10:u[a]=X.FromArray(r);break;case 11:s&&(u[a]=s.getCameraById(r));break;case 12:u[a]=g.FromArray(r);break}}}}static Parse(t,i,s,o=null){let l=t();return y&&y.AddTagsTo(l,i.tags),n.ParseProperties(i,l,s,o),l}static Clone(t,i,s={}){return te(t,i,!1,s)}static Instanciate(t,i){return te(t,i,!0)}}return n.AllowLoadingUniqueId=!1,n._ImageProcessingConfigurationParser=e=>{throw M("ImageProcessingConfiguration")},n._FresnelParametersParser=e=>{throw M("FresnelParameters")},n._ColorCurvesParser=e=>{throw M("ColorCurves")},n._TextureParser=(e,t,i)=>{throw M("Texture")},n})();var O=class n{constructor(e,t){this.width=e,this.height=t}toString(){return`{W: ${this.width}, H: ${this.height}}`}getClassName(){return"Size"}getHashCode(){let e=this.width|0;return e=e*397^(this.height|0),e}copyFrom(e){this.width=e.width,this.height=e.height}copyFromFloats(e,t){return this.width=e,this.height=t,this}set(e,t){return this.copyFromFloats(e,t)}multiplyByFloats(e,t){return new n(this.width*e,this.height*t)}clone(){return new n(this.width,this.height)}equals(e){return e?this.width===e.width&&this.height===e.height:!1}get surface(){return this.width*this.height}static Zero(){return new n(0,0)}add(e){return new n(this.width+e.width,this.height+e.height)}subtract(e){return new n(this.width-e.width,this.height-e.height)}scale(e){return new n(this.width*e,this.height*e)}static Lerp(e,t,i){let s=e.width+(t.width-e.width)*i,o=e.height+(t.height-e.height)*i;return new n(s,o)}};var B=class n{get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get coordinatesMode(){return 0}get isCube(){return this._texture?this._texture.isCube:!1}set isCube(e){this._texture&&(this._texture.isCube=e)}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}getClassName(){return"ThinTexture"}static _IsRenderTargetWrapper(e){return e?.shareDepth!==void 0}constructor(e){this._wrapU=1,this._wrapV=1,this.wrapR=1,this.anisotropicFilteringLevel=4,this.delayLoadState=0,this._texture=null,this._engine=null,this._cachedSize=O.Zero(),this._cachedBaseSize=O.Zero(),this._initialSamplingMode=2,this._texture=n._IsRenderTargetWrapper(e)?e.texture:e,this._texture&&(this._engine=this._texture.getEngine())}isReady(){return this.delayLoadState===4?(this.delayLoad(),!1):this._texture?this._texture.isReady:!1}delayLoad(){}getInternalTexture(){return this._texture}getSize(){if(this._texture){if(this._texture.width)return this._cachedSize.width=this._texture.width,this._cachedSize.height=this._texture.height,this._cachedSize;if(this._texture._size)return this._cachedSize.width=this._texture._size,this._cachedSize.height=this._texture._size,this._cachedSize}return this._cachedSize}getBaseSize(){return!this.isReady()||!this._texture?(this._cachedBaseSize.width=0,this._cachedBaseSize.height=0,this._cachedBaseSize):this._texture._size?(this._cachedBaseSize.width=this._texture._size,this._cachedBaseSize.height=this._texture._size,this._cachedBaseSize):(this._cachedBaseSize.width=this._texture.baseWidth,this._cachedBaseSize.height=this._texture.baseHeight,this._cachedBaseSize)}get samplingMode(){return this._texture?this._texture.samplingMode:this._initialSamplingMode}updateSamplingMode(e){this._texture&&this._engine&&this._engine.updateTextureSamplingMode(e,this._texture)}releaseInternalTexture(){this._texture&&(this._texture.dispose(),this._texture=null)}dispose(){this._texture&&(this.releaseInternalTexture(),this._engine=null)}};var m=class n extends B{set hasAlpha(e){this._hasAlpha!==e&&(this._hasAlpha=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get hasAlpha(){return this._hasAlpha}set getAlphaFromRGB(e){this._getAlphaFromRGB!==e&&(this._getAlphaFromRGB=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get getAlphaFromRGB(){return this._getAlphaFromRGB}set coordinatesIndex(e){this._coordinatesIndex!==e&&(this._coordinatesIndex=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get coordinatesIndex(){return this._coordinatesIndex}set coordinatesMode(e){this._coordinatesMode!==e&&(this._coordinatesMode=e,this._scene&&this._scene.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get coordinatesMode(){return this._coordinatesMode}get wrapU(){return this._wrapU}set wrapU(e){this._wrapU=e}get wrapV(){return this._wrapV}set wrapV(e){this._wrapV=e}get isCube(){return this._texture?this._texture.isCube:this._isCube}set isCube(e){this._texture?this._texture.isCube=e:this._isCube=e}get is3D(){return this._texture?this._texture.is3D:!1}set is3D(e){this._texture&&(this._texture.is3D=e)}get is2DArray(){return this._texture?this._texture.is2DArray:!1}set is2DArray(e){this._texture&&(this._texture.is2DArray=e)}get gammaSpace(){if(this._texture)this._texture._gammaSpace===null&&(this._texture._gammaSpace=this._gammaSpace);else return this._gammaSpace;return this._texture._gammaSpace&&!this._texture._useSRGBBuffer}set gammaSpace(e){if(this._texture){if(this._texture._gammaSpace===e)return;this._texture._gammaSpace=e}else{if(this._gammaSpace===e)return;this._gammaSpace=e}this.getScene()?.markAllMaterialsAsDirty(1,t=>t.hasTexture(this))}get isRGBD(){return this._texture!=null&&this._texture._isRGBD}set isRGBD(e){e!==this.isRGBD&&(this._texture&&(this._texture._isRGBD=e),this.getScene()?.markAllMaterialsAsDirty(1,t=>t.hasTexture(this)))}get noMipmap(){return!1}get lodGenerationOffset(){return this._texture?this._texture._lodGenerationOffset:0}set lodGenerationOffset(e){this._texture&&(this._texture._lodGenerationOffset=e)}get lodGenerationScale(){return this._texture?this._texture._lodGenerationScale:0}set lodGenerationScale(e){this._texture&&(this._texture._lodGenerationScale=e)}get linearSpecularLOD(){return this._texture?this._texture._linearSpecularLOD:!1}set linearSpecularLOD(e){this._texture&&(this._texture._linearSpecularLOD=e)}get irradianceTexture(){return this._texture?this._texture._irradianceTexture:null}set irradianceTexture(e){this._texture&&(this._texture._irradianceTexture=e)}get uid(){return this._uid||(this._uid=j()),this._uid}toString(){return this.name}getClassName(){return"BaseTexture"}set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}get isBlocking(){return!0}get loadingError(){return this._loadingError}get errorObject(){return this._errorObject}constructor(e,t=null){super(null),this.metadata=null,this.reservedDataStore=null,this._hasAlpha=!1,this._getAlphaFromRGB=!1,this.level=1,this._coordinatesIndex=0,this.optimizeUVAllocation=!0,this._coordinatesMode=0,this.wrapR=1,this.anisotropicFilteringLevel=n.DEFAULT_ANISOTROPIC_FILTERING_LEVEL,this._isCube=!1,this._gammaSpace=!0,this.invertZ=!1,this.lodLevelInAlpha=!1,this.isRenderTarget=!1,this._prefiltered=!1,this._forceSerialize=!1,this.animations=[],this.onDisposeObservable=new b,this._onDisposeObserver=null,this._scene=null,this._uid=null,this._parentContainer=null,this._loadingError=!1,e?n._IsScene(e)?this._scene=e:this._engine=e:this._scene=H.LastCreatedScene,this._scene&&(this.uniqueId=this._scene.getUniqueId(),this._scene.addTexture(this),this._engine=this._scene.getEngine()),this._texture=t,this._uid=null}getScene(){return this._scene}_getEngine(){return this._engine}getTextureMatrix(){return g.IdentityReadOnly}getReflectionTextureMatrix(){return g.IdentityReadOnly}getRefractionTextureMatrix(){return this.getReflectionTextureMatrix()}isReadyOrNotBlocking(){return!this.isBlocking||this.isReady()||this.loadingError}scale(e){}get canRescale(){return!1}_getFromCache(e,t,i,s,o,l){let a=this._getEngine();if(!a)return null;let h=a._getUseSRGBBuffer(!!o,t),r=a.getLoadedTexturesCache();for(let d=0;d<r.length;d++){let u=r[d];if((o===void 0||h===u._useSRGBBuffer)&&(s===void 0||s===u.invertY)&&u.url===e&&u.generateMipMaps===!t&&(!i||i===u.samplingMode)&&(l===void 0||l===u.isCube))return u.incrementReferences(),u}return null}_rebuild(e=!1){}clone(){return null}get textureType(){return this._texture&&this._texture.type!==void 0?this._texture.type:0}get textureFormat(){return this._texture&&this._texture.format!==void 0?this._texture.format:5}_markAllSubMeshesAsTexturesDirty(){let e=this.getScene();e&&e.markAllMaterialsAsDirty(1)}readPixels(e=0,t=0,i=null,s=!0,o=!1,l=0,a=0,h=Number.MAX_VALUE,r=Number.MAX_VALUE){if(!this._texture)return null;let d=this._getEngine();if(!d)return null;let u=this.getSize(),x=u.width,p=u.height;t!==0&&(x=x/Math.pow(2,t),p=p/Math.pow(2,t),x=Math.round(x),p=Math.round(p)),h=Math.min(x,h),r=Math.min(p,r);try{return this._texture.isCube?d._readTexturePixels(this._texture,h,r,e,t,i,s,o,l,a):d._readTexturePixels(this._texture,h,r,-1,t,i,s,o,l,a)}catch{return null}}_readPixelsSync(e=0,t=0,i=null,s=!0,o=!1){if(!this._texture)return null;let l=this.getSize(),a=l.width,h=l.height,r=this._getEngine();if(!r)return null;t!=0&&(a=a/Math.pow(2,t),h=h/Math.pow(2,t),a=Math.round(a),h=Math.round(h));try{return this._texture.isCube?r._readTexturePixelsSync(this._texture,a,h,e,t,i,s,o):r._readTexturePixelsSync(this._texture,a,h,-1,t,i,s,o)}catch{return null}}get _lodTextureHigh(){return this._texture?this._texture._lodTextureHigh:null}get _lodTextureMid(){return this._texture?this._texture._lodTextureMid:null}get _lodTextureLow(){return this._texture?this._texture._lodTextureLow:null}dispose(){if(this._scene){this._scene.stopAnimation&&this._scene.stopAnimation(this),this._scene.removePendingData(this);let e=this._scene.textures.indexOf(this);if(e>=0&&this._scene.textures.splice(e,1),this._scene.onTextureRemovedObservable.notifyObservers(this),this._scene=null,this._parentContainer){let t=this._parentContainer.textures.indexOf(this);t>-1&&this._parentContainer.textures.splice(t,1),this._parentContainer=null}}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null,super.dispose()}serialize(e=!1){if(!this.name&&!e)return null;let t=A.Serialize(this);return A.AppendSerializedAnimations(this,t),t}static WhenAllReady(e,t){let i=e.length;if(i===0){t();return}for(let s=0;s<e.length;s++){let o=e[s];if(o.isReady())--i===0&&t();else{let l=o.onLoadObservable;l?l.addOnce(()=>{--i===0&&t()}):--i===0&&t()}}}static _IsScene(e){return e.getClassName()==="Scene"}};m.DEFAULT_ANISOTROPIC_FILTERING_LEVEL=4;f([_()],m.prototype,"uniqueId",void 0);f([_()],m.prototype,"name",void 0);f([_()],m.prototype,"displayName",void 0);f([_()],m.prototype,"metadata",void 0);f([_("hasAlpha")],m.prototype,"_hasAlpha",void 0);f([_("getAlphaFromRGB")],m.prototype,"_getAlphaFromRGB",void 0);f([_()],m.prototype,"level",void 0);f([_("coordinatesIndex")],m.prototype,"_coordinatesIndex",void 0);f([_()],m.prototype,"optimizeUVAllocation",void 0);f([_("coordinatesMode")],m.prototype,"_coordinatesMode",void 0);f([_()],m.prototype,"wrapU",null);f([_()],m.prototype,"wrapV",null);f([_()],m.prototype,"wrapR",void 0);f([_()],m.prototype,"anisotropicFilteringLevel",void 0);f([_()],m.prototype,"isCube",null);f([_()],m.prototype,"is3D",null);f([_()],m.prototype,"is2DArray",null);f([_()],m.prototype,"gammaSpace",null);f([_()],m.prototype,"invertZ",void 0);f([_()],m.prototype,"lodLevelInAlpha",void 0);f([_()],m.prototype,"lodGenerationOffset",null);f([_()],m.prototype,"lodGenerationScale",null);f([_()],m.prototype,"linearSpecularLOD",null);f([$()],m.prototype,"irradianceTexture",null);f([_()],m.prototype,"isRenderTarget",void 0);var D=class n{constructor(e,t,i,s){this.normal=new R(e,t,i),this.d=s}asArray(){return[this.normal.x,this.normal.y,this.normal.z,this.d]}clone(){return new n(this.normal.x,this.normal.y,this.normal.z,this.d)}getClassName(){return"Plane"}getHashCode(){let e=this.normal.getHashCode();return e=e*397^(this.d|0),e}normalize(){let e=Math.sqrt(this.normal.x*this.normal.x+this.normal.y*this.normal.y+this.normal.z*this.normal.z),t=0;return e!==0&&(t=1/e),this.normal.x*=t,this.normal.y*=t,this.normal.z*=t,this.d*=t,this}transform(e){let t=n._TmpMatrix;e.invertToRef(t);let i=t.m,s=this.normal.x,o=this.normal.y,l=this.normal.z,a=this.d,h=s*i[0]+o*i[1]+l*i[2]+a*i[3],r=s*i[4]+o*i[5]+l*i[6]+a*i[7],d=s*i[8]+o*i[9]+l*i[10]+a*i[11],u=s*i[12]+o*i[13]+l*i[14]+a*i[15];return new n(h,r,d,u)}dotCoordinate(e){return this.normal.x*e.x+this.normal.y*e.y+this.normal.z*e.z+this.d}copyFromPoints(e,t,i){let s=t.x-e.x,o=t.y-e.y,l=t.z-e.z,a=i.x-e.x,h=i.y-e.y,r=i.z-e.z,d=o*r-l*h,u=l*a-s*r,x=s*h-o*a,p=Math.sqrt(d*d+u*u+x*x),T;return p!==0?T=1/p:T=0,this.normal.x=d*T,this.normal.y=u*T,this.normal.z=x*T,this.d=-(this.normal.x*e.x+this.normal.y*e.y+this.normal.z*e.z),this}isFrontFacingTo(e,t){return R.Dot(this.normal,e)<=t}signedDistanceTo(e){return R.Dot(e,this.normal)+this.d}static FromArray(e){return new n(e[0],e[1],e[2],e[3])}static FromPoints(e,t,i){let s=new n(0,0,0,0);return s.copyFromPoints(e,t,i),s}static FromPositionAndNormal(e,t){let i=new n(0,0,0,0);return this.FromPositionAndNormalToRef(e,t,i)}static FromPositionAndNormalToRef(e,t,i){return i.normal.copyFrom(t),i.normal.normalize(),i.d=-e.dot(i.normal),i}static SignedDistanceToPlaneFromPositionAndNormal(e,t,i){let s=-(t.x*e.x+t.y*e.y+t.z*e.z);return R.Dot(i,t)+s}};D._TmpMatrix=g.Identity();function ie(n,e,t=!1){let i=e.width,s=e.height;if(n instanceof Float32Array){let r=n.byteLength/n.BYTES_PER_ELEMENT,d=new Uint8Array(r);for(;--r>=0;){let u=n[r];u<0?u=0:u>1&&(u=1),d[r]=u*255}n=d}let o=document.createElement("canvas");o.width=i,o.height=s;let l=o.getContext("2d");if(!l)return null;let a=l.createImageData(i,s);if(a.data.set(n),l.putImageData(a,0,0),t){let r=document.createElement("canvas");r.width=i,r.height=s;let d=r.getContext("2d");return d?(d.translate(0,s),d.scale(1,-1),d.drawImage(o,0,0),r.toDataURL("image/png")):null}return o.toDataURL("image/png")}function re(n,e=0,t=0){let i=n.getInternalTexture();if(!i)return null;let s=n._readPixelsSync(e,t);return s?ie(s,n.getSize(),i.invertY):null}function se(n,e=0,t=0){return W(this,null,function*(){let i=n.getInternalTexture();if(!i)return null;let s=yield n.readPixels(e,t);return s?ie(s,n.getSize(),i.invertY):null})}var k=!1;var c=class n extends m{static _CreateVideoTexture(e,t,i,s=!1,o=!1,l=n.TRILINEAR_SAMPLINGMODE,a={},h,r=5){throw M("VideoTexture")}get noMipmap(){return this._noMipmap}get mimeType(){return this._mimeType}set isBlocking(e){this._isBlocking=e}get isBlocking(){return this._isBlocking}get invertY(){return this._invertY}constructor(e,t,i,s,o=n.TRILINEAR_SAMPLINGMODE,l=null,a=null,h=null,r=!1,d,u,x,p,T){super(t),this.url=null,this.uOffset=0,this.vOffset=0,this.uScale=1,this.vScale=1,this.uAng=0,this.vAng=0,this.wAng=0,this.uRotationCenter=.5,this.vRotationCenter=.5,this.wRotationCenter=.5,this.homogeneousRotationInUVTransform=!1,this.inspectableCustomProperties=null,this._noMipmap=!1,this._invertY=!1,this._rowGenerationMatrix=null,this._cachedTextureMatrix=null,this._projectionModeMatrix=null,this._t0=null,this._t1=null,this._t2=null,this._cachedUOffset=-1,this._cachedVOffset=-1,this._cachedUScale=0,this._cachedVScale=0,this._cachedUAng=-1,this._cachedVAng=-1,this._cachedWAng=-1,this._cachedReflectionProjectionMatrixId=-1,this._cachedURotationCenter=-1,this._cachedVRotationCenter=-1,this._cachedWRotationCenter=-1,this._cachedHomogeneousRotationInUVTransform=!1,this._cachedIdentity3x2=!0,this._cachedReflectionTextureMatrix=null,this._cachedReflectionUOffset=-1,this._cachedReflectionVOffset=-1,this._cachedReflectionUScale=0,this._cachedReflectionVScale=0,this._cachedReflectionCoordinatesMode=-1,this._buffer=null,this._deleteBuffer=!1,this._format=null,this._delayedOnLoad=null,this._delayedOnError=null,this.onLoadObservable=new b,this._isBlocking=!0,this.name=e||"",this.url=e;let E,P=!1,N=null,z=!0;typeof i=="object"&&i!==null?(E=i.noMipmap??!1,s=i.invertY??!k,o=i.samplingMode??n.TRILINEAR_SAMPLINGMODE,l=i.onLoad??null,a=i.onError??null,h=i.buffer??null,r=i.deleteBuffer??!1,d=i.format,u=i.mimeType,x=i.loaderOptions,p=i.creationFlags,P=i.useSRGBBuffer??!1,N=i.internalTexture??null,z=i.gammaSpace??z,T=i.forcedExtension??T):E=!!i,this._gammaSpace=z,this._noMipmap=E,this._invertY=s===void 0?!k:s,this._initialSamplingMode=o,this._buffer=h,this._deleteBuffer=r,this._mimeType=u,this._loaderOptions=x,this._creationFlags=p,this._useSRGBBuffer=P,this._forcedExtension=T,d&&(this._format=d);let w=this.getScene(),G=this._getEngine();if(!G)return;G.onBeforeTextureInitObservable.notifyObservers(this);let C=()=>{this._texture&&(this._texture._invertVScale&&(this.vScale*=-1,this.vOffset+=1),this._texture._cachedWrapU!==null&&(this.wrapU=this._texture._cachedWrapU,this._texture._cachedWrapU=null),this._texture._cachedWrapV!==null&&(this.wrapV=this._texture._cachedWrapV,this._texture._cachedWrapV=null),this._texture._cachedWrapR!==null&&(this.wrapR=this._texture._cachedWrapR,this._texture._cachedWrapR=null)),this.onLoadObservable.hasObservers()&&this.onLoadObservable.notifyObservers(this),l&&l(),!this.isBlocking&&w&&w.resetCachedMaterial()},L=(I,v)=>{this._loadingError=!0,this._errorObject={message:I,exception:v},a&&a(I,v),n.OnTextureLoadErrorObservable.notifyObservers(this)};if(!this.url&&!N){this._delayedOnLoad=C,this._delayedOnError=L;return}if(this._texture=N??this._getFromCache(this.url,E,o,this._invertY,P,this.isCube),this._texture)if(this._texture.isReady)V.SetImmediate(()=>C());else{let I=this._texture.onLoadedObservable.add(C);this._texture.onErrorObservable.add(v=>{L(v.message,v.exception),this._texture?.onLoadedObservable.remove(I)})}else if(!w||!w.useDelayedTextureLoading){try{this._texture=G.createTexture(this.url,E,this._invertY,w,o,C,L,this._buffer,void 0,this._format,this._forcedExtension,u,x,p,P)}catch(I){throw L("error loading",I),I}r&&(this._buffer=null)}else this.delayLoadState=4,this._delayedOnLoad=C,this._delayedOnError=L}updateURL(e,t=null,i,s){this.url&&(this.releaseInternalTexture(),this.getScene().markAllMaterialsAsDirty(1,o=>o.hasTexture(this))),(!this.name||this.name.startsWith("data:"))&&(this.name=e),this.url=e,this._buffer=t,this._forcedExtension=s,this.delayLoadState=4,i&&(this._delayedOnLoad=i),this.delayLoad()}delayLoad(){if(this.delayLoadState!==4)return;let e=this.getScene();e&&(this.delayLoadState=1,this._texture=this._getFromCache(this.url,this._noMipmap,this.samplingMode,this._invertY,this._useSRGBBuffer,this.isCube),this._texture?this._delayedOnLoad&&(this._texture.isReady?V.SetImmediate(this._delayedOnLoad):this._texture.onLoadedObservable.add(this._delayedOnLoad)):(this._texture=e.getEngine().createTexture(this.url,this._noMipmap,this._invertY,e,this.samplingMode,this._delayedOnLoad,this._delayedOnError,this._buffer,null,this._format,this._forcedExtension,this._mimeType,this._loaderOptions,this._creationFlags,this._useSRGBBuffer),this._deleteBuffer&&(this._buffer=null)),this._delayedOnLoad=null,this._delayedOnError=null)}_prepareRowForTextureGeneration(e,t,i,s){e*=this._cachedUScale,t*=this._cachedVScale,e-=this.uRotationCenter*this._cachedUScale,t-=this.vRotationCenter*this._cachedVScale,i-=this.wRotationCenter,R.TransformCoordinatesFromFloatsToRef(e,t,i,this._rowGenerationMatrix,s),s.x+=this.uRotationCenter*this._cachedUScale+this._cachedUOffset,s.y+=this.vRotationCenter*this._cachedVScale+this._cachedVOffset,s.z+=this.wRotationCenter}getTextureMatrix(e=1){if(this.uOffset===this._cachedUOffset&&this.vOffset===this._cachedVOffset&&this.uScale*e===this._cachedUScale&&this.vScale===this._cachedVScale&&this.uAng===this._cachedUAng&&this.vAng===this._cachedVAng&&this.wAng===this._cachedWAng&&this.uRotationCenter===this._cachedURotationCenter&&this.vRotationCenter===this._cachedVRotationCenter&&this.wRotationCenter===this._cachedWRotationCenter&&this.homogeneousRotationInUVTransform===this._cachedHomogeneousRotationInUVTransform)return this._cachedTextureMatrix;this._cachedUOffset=this.uOffset,this._cachedVOffset=this.vOffset,this._cachedUScale=this.uScale*e,this._cachedVScale=this.vScale,this._cachedUAng=this.uAng,this._cachedVAng=this.vAng,this._cachedWAng=this.wAng,this._cachedURotationCenter=this.uRotationCenter,this._cachedVRotationCenter=this.vRotationCenter,this._cachedWRotationCenter=this.wRotationCenter,this._cachedHomogeneousRotationInUVTransform=this.homogeneousRotationInUVTransform,(!this._cachedTextureMatrix||!this._rowGenerationMatrix)&&(this._cachedTextureMatrix=g.Zero(),this._rowGenerationMatrix=new g,this._t0=R.Zero(),this._t1=R.Zero(),this._t2=R.Zero()),g.RotationYawPitchRollToRef(this.vAng,this.uAng,this.wAng,this._rowGenerationMatrix),this.homogeneousRotationInUVTransform?(g.TranslationToRef(-this._cachedURotationCenter,-this._cachedVRotationCenter,-this._cachedWRotationCenter,S.Matrix[0]),g.TranslationToRef(this._cachedURotationCenter,this._cachedVRotationCenter,this._cachedWRotationCenter,S.Matrix[1]),g.ScalingToRef(this._cachedUScale,this._cachedVScale,0,S.Matrix[2]),g.TranslationToRef(this._cachedUOffset,this._cachedVOffset,0,S.Matrix[3]),S.Matrix[0].multiplyToRef(this._rowGenerationMatrix,this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(S.Matrix[1],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(S.Matrix[2],this._cachedTextureMatrix),this._cachedTextureMatrix.multiplyToRef(S.Matrix[3],this._cachedTextureMatrix),this._cachedTextureMatrix.setRowFromFloats(2,this._cachedTextureMatrix.m[12],this._cachedTextureMatrix.m[13],this._cachedTextureMatrix.m[14],1)):(this._prepareRowForTextureGeneration(0,0,0,this._t0),this._prepareRowForTextureGeneration(1,0,0,this._t1),this._prepareRowForTextureGeneration(0,1,0,this._t2),this._t1.subtractInPlace(this._t0),this._t2.subtractInPlace(this._t0),g.FromValuesToRef(this._t1.x,this._t1.y,this._t1.z,0,this._t2.x,this._t2.y,this._t2.z,0,this._t0.x,this._t0.y,this._t0.z,0,0,0,0,1,this._cachedTextureMatrix));let t=this.getScene();if(!t)return this._cachedTextureMatrix;let i=this._cachedIdentity3x2;return this._cachedIdentity3x2=this._cachedTextureMatrix.isIdentityAs3x2(),this.optimizeUVAllocation&&i!==this._cachedIdentity3x2&&t.markAllMaterialsAsDirty(1,s=>s.hasTexture(this)),this._cachedTextureMatrix}getReflectionTextureMatrix(){let e=this.getScene();if(!e)return this._cachedReflectionTextureMatrix;if(this.uOffset===this._cachedReflectionUOffset&&this.vOffset===this._cachedReflectionVOffset&&this.uScale===this._cachedReflectionUScale&&this.vScale===this._cachedReflectionVScale&&this.coordinatesMode===this._cachedReflectionCoordinatesMode)if(this.coordinatesMode===n.PROJECTION_MODE){if(this._cachedReflectionProjectionMatrixId===e.getProjectionMatrix().updateFlag)return this._cachedReflectionTextureMatrix}else return this._cachedReflectionTextureMatrix;this._cachedReflectionTextureMatrix||(this._cachedReflectionTextureMatrix=g.Zero()),this._projectionModeMatrix||(this._projectionModeMatrix=g.Zero());let t=this._cachedReflectionCoordinatesMode!==this.coordinatesMode;switch(this._cachedReflectionUOffset=this.uOffset,this._cachedReflectionVOffset=this.vOffset,this._cachedReflectionUScale=this.uScale,this._cachedReflectionVScale=this.vScale,this._cachedReflectionCoordinatesMode=this.coordinatesMode,this.coordinatesMode){case n.PLANAR_MODE:{g.IdentityToRef(this._cachedReflectionTextureMatrix),this._cachedReflectionTextureMatrix[0]=this.uScale,this._cachedReflectionTextureMatrix[5]=this.vScale,this._cachedReflectionTextureMatrix[12]=this.uOffset,this._cachedReflectionTextureMatrix[13]=this.vOffset;break}case n.PROJECTION_MODE:{g.FromValuesToRef(.5,0,0,0,0,-.5,0,0,0,0,0,0,.5,.5,1,1,this._projectionModeMatrix);let i=e.getProjectionMatrix();this._cachedReflectionProjectionMatrixId=i.updateFlag,i.multiplyToRef(this._projectionModeMatrix,this._cachedReflectionTextureMatrix);break}default:g.IdentityToRef(this._cachedReflectionTextureMatrix);break}return t&&e.markAllMaterialsAsDirty(1,i=>i.hasTexture(this)),this._cachedReflectionTextureMatrix}clone(){let e={noMipmap:this._noMipmap,invertY:this._invertY,samplingMode:this.samplingMode,onLoad:void 0,onError:void 0,buffer:this._texture?this._texture._buffer:void 0,deleteBuffer:this._deleteBuffer,format:this.textureFormat,mimeType:this.mimeType,loaderOptions:this._loaderOptions,creationFlags:this._creationFlags,useSRGBBuffer:this._useSRGBBuffer};return A.Clone(()=>new n(this._texture?this._texture.url:null,this.getScene(),e),this)}serialize(){let e=this.name;n.SerializeBuffers||this.name.startsWith("data:")&&(this.name=""),this.name.startsWith("data:")&&this.url===this.name&&(this.url="");let t=super.serialize(n._SerializeInternalTextureUniqueId);return t?((n.SerializeBuffers||n.ForceSerializeBuffers)&&(typeof this._buffer=="string"&&this._buffer.substring(0,5)==="data:"?(t.base64String=this._buffer,t.name=t.name.replace("data:","")):this.url&&this.url.startsWith("data:")&&this._buffer instanceof Uint8Array?t.base64String="data:image/png;base64,"+K(this._buffer):(n.ForceSerializeBuffers||this.url&&this.url.startsWith("blob:")||this._forceSerialize)&&(t.base64String=!this._engine||this._engine._features.supportSyncTextureRead?re(this):se(this))),t.invertY=this._invertY,t.samplingMode=this.samplingMode,t._creationFlags=this._creationFlags,t._useSRGBBuffer=this._useSRGBBuffer,n._SerializeInternalTextureUniqueId&&(t.internalTextureUniqueId=this._texture?.uniqueId),t.internalTextureLabel=this._texture?.label,t.noMipmap=this._noMipmap,this.name=e,t):null}getClassName(){return"Texture"}dispose(){super.dispose(),this.onLoadObservable.clear(),this._delayedOnLoad=null,this._delayedOnError=null,this._buffer=null}static Parse(e,t,i){if(e.customType){let r=ee.Instantiate(e.customType).Parse(e,t,i);return e.samplingMode&&r.updateSamplingMode&&r._samplingMode&&r._samplingMode!==e.samplingMode&&r.updateSamplingMode(e.samplingMode),r}if(e.isCube&&!e.isRenderTarget)return n._CubeTextureParser(e,t,i);let s=e.internalTextureUniqueId!==void 0;if(!e.name&&!e.isRenderTarget&&!s)return null;let o;if(s){let h=t.getEngine().getLoadedTexturesCache();for(let r of h)if(r.uniqueId===e.internalTextureUniqueId){o=r;break}}let l=h=>{if(h&&h._texture&&(h._texture._cachedWrapU=null,h._texture._cachedWrapV=null,h._texture._cachedWrapR=null),e.samplingMode){let r=e.samplingMode;h&&h.samplingMode!==r&&h.updateSamplingMode(r)}if(h&&e.animations)for(let r=0;r<e.animations.length;r++){let d=e.animations[r],u=q("BABYLON.Animation");u&&h.animations.push(u.Parse(d))}h&&h._texture&&(s&&!o&&h._texture._setUniqueId(e.internalTextureUniqueId),h._texture.label=e.internalTextureLabel)};return A.Parse(()=>{let h=!0;if(e.noMipmap&&(h=!1),e.mirrorPlane){let r=n._CreateMirror(e.name,e.renderTargetSize,t,h);return r._waitingRenderList=e.renderList,r.mirrorPlane=D.FromArray(e.mirrorPlane),l(r),r}else if(e.isRenderTarget){let r=null;if(e.isCube){if(t.reflectionProbes)for(let d=0;d<t.reflectionProbes.length;d++){let u=t.reflectionProbes[d];if(u.name===e.name)return u.cubeTexture}}else r=n._CreateRenderTargetTexture(e.name,e.renderTargetSize,t,h,e._creationFlags??0),r._waitingRenderList=e.renderList;return l(r),r}else if(e.isVideo){let r=n._CreateVideoTexture(i+(e.url||e.name),i+(e.src||e.url),t,h,e.invertY,e.samplingMode,e.settings||{});return l(r),r}else{let r;if(e.base64String&&!o)r=n.CreateFromBase64String(e.base64String,e.base64String,t,!h,e.invertY,e.samplingMode,()=>{l(r)},e._creationFlags??0,e._useSRGBBuffer??!1),r.name=e.name;else{let d;e.name&&(e.name.indexOf("://")>0||e.name.startsWith("data:"))?d=e.name:d=i+e.name,e.url&&(e.url.startsWith("data:")||n.UseSerializedUrlIfAny)&&(d=e.url);let u={noMipmap:!h,invertY:e.invertY,samplingMode:e.samplingMode,onLoad:()=>{l(r)},internalTexture:o};r=new n(d,t,u)}return r}},e,t)}static CreateFromBase64String(e,t,i,s,o,l=n.TRILINEAR_SAMPLINGMODE,a=null,h=null,r=5,d,u){return new n("data:"+t,i,s,o,l,a,h,e,!1,r,void 0,void 0,d,u)}static LoadFromDataString(e,t,i,s=!1,o,l=!0,a=n.TRILINEAR_SAMPLINGMODE,h=null,r=null,d=5,u,x){return e.substring(0,5)!=="data:"&&(e="data:"+e),new n(e,i,o,l,a,h,r,t,s,d,void 0,void 0,u,x)}};c.SerializeBuffers=!0;c.ForceSerializeBuffers=!1;c.OnTextureLoadErrorObservable=new b;c._SerializeInternalTextureUniqueId=!1;c._CubeTextureParser=(n,e,t)=>{throw M("CubeTexture")};c._CreateMirror=(n,e,t,i)=>{throw M("MirrorTexture")};c._CreateRenderTargetTexture=(n,e,t,i,s)=>{throw M("RenderTargetTexture")};c.NEAREST_SAMPLINGMODE=1;c.NEAREST_NEAREST_MIPLINEAR=8;c.BILINEAR_SAMPLINGMODE=2;c.LINEAR_LINEAR_MIPNEAREST=11;c.TRILINEAR_SAMPLINGMODE=3;c.LINEAR_LINEAR_MIPLINEAR=3;c.NEAREST_NEAREST_MIPNEAREST=4;c.NEAREST_LINEAR_MIPNEAREST=5;c.NEAREST_LINEAR_MIPLINEAR=6;c.NEAREST_LINEAR=7;c.NEAREST_NEAREST=1;c.LINEAR_NEAREST_MIPNEAREST=9;c.LINEAR_NEAREST_MIPLINEAR=10;c.LINEAR_LINEAR=2;c.LINEAR_NEAREST=12;c.EXPLICIT_MODE=0;c.SPHERICAL_MODE=1;c.PLANAR_MODE=2;c.CUBIC_MODE=3;c.PROJECTION_MODE=4;c.SKYBOX_MODE=5;c.INVCUBIC_MODE=6;c.EQUIRECTANGULAR_MODE=7;c.FIXED_EQUIRECTANGULAR_MODE=8;c.FIXED_EQUIRECTANGULAR_MIRRORED_MODE=9;c.CLAMP_ADDRESSMODE=0;c.WRAP_ADDRESSMODE=1;c.MIRROR_ADDRESSMODE=2;c.UseSerializedUrlIfAny=!1;f([_()],c.prototype,"url",void 0);f([_()],c.prototype,"uOffset",void 0);f([_()],c.prototype,"vOffset",void 0);f([_()],c.prototype,"uScale",void 0);f([_()],c.prototype,"vScale",void 0);f([_()],c.prototype,"uAng",void 0);f([_()],c.prototype,"vAng",void 0);f([_()],c.prototype,"wAng",void 0);f([_()],c.prototype,"uRotationCenter",void 0);f([_()],c.prototype,"vRotationCenter",void 0);f([_()],c.prototype,"wRotationCenter",void 0);f([_()],c.prototype,"homogeneousRotationInUVTransform",void 0);f([_()],c.prototype,"isBlocking",null);Y("BABYLON.Texture",c);A._TextureParser=c.Parse;export{y as a,A as b,O as c,D as d,B as e,m as f,k as g,c as h};