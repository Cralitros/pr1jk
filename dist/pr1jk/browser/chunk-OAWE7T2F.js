import{h as V,r as k,s as g}from"./chunk-ZNZKCVBG.js";import{f as Y,j as S}from"./chunk-JDEBKJAA.js";import{e as O}from"./chunk-QKAIVJZE.js";import{F as Q,L as Z,M as H}from"./chunk-MF4WK2ML.js";import{a as L}from"./chunk-ZJDAKJRA.js";H.prototype._partialLoadFile=function(s,B,t,a,f=null){let o=c=>{t[B]=c,t._internalCount++,t._internalCount===6&&a(t)},p=(c,e)=>{f&&c&&f(c.status+" "+c.statusText,e)};this._loadFile(s,o,void 0,void 0,!0,p)};H.prototype._cascadeLoadFiles=function(s,B,t,a=null){let f=[];f._internalCount=0;for(let o=0;o<6;o++)this._partialLoadFile(t[o],o,f,B,a)};H.prototype._cascadeLoadImgs=function(s,B,t,a,f=null,o){let p=[];p._internalCount=0;for(let c=0;c<6;c++)this._partialLoadImg(a[c],c,p,s,B,t,f,o)};H.prototype._partialLoadImg=function(s,B,t,a,f,o,p=null,c){let e=Y();S(s,n=>{t[B]=n,t._internalCount++,a&&a.removePendingData(e),t._internalCount===6&&o&&o(f,t)},(n,u)=>{a&&a.removePendingData(e),p&&p(n,u)},a?a.offlineProvider:null,c),a&&a.addPendingData(e)};H.prototype.createCubeTextureBase=function(s,B,t,a,f=null,o=null,p,c=null,e=!1,A=0,r=0,n=null,u=null,i=null,C=!1,y=null){let l=n||new Q(this,7);l.isCube=!0,l.url=s,l.generateMipMaps=!a,l._lodGenerationScale=A,l._lodGenerationOffset=r,l._useSRGBBuffer=!!C&&this._caps.supportSRGBBuffers&&(this.version>1||this.isWebGPU||!!a),l!==n&&(l.label=s.substring(0,60)),this._doNotHandleContextLost||(l._extension=c,l._files=t,l._buffer=y);let F=s;this._transformTextureUrl&&!n&&(s=this._transformTextureUrl(s));let d=s.split("?")[0],x=d.lastIndexOf("."),T=c||(x>-1?d.substring(x).toLowerCase():""),U=Z(T),I=(G,m)=>{s===F?o&&G&&o(G.status+" "+G.statusText,m):(L.Warn(`Failed to load ${s}, falling back to the ${F}`),this.createCubeTextureBase(F,B,t,!!a,f,o,p,c,e,A,r,l,u,i,C,y))};if(U)U.then(G=>{let m=h=>{u&&u(l,h),G.loadCubeData(h,l,e,f,o)};y?m(y):t&&t.length===6?G.supportCascades?this._cascadeLoadFiles(B,h=>m(h.map(D=>new Uint8Array(D))),t,o):o?o("Textures type does not support cascades."):L.Warn("Texture loader does not support cascades."):this._loadFile(s,h=>m(new Uint8Array(h)),void 0,void 0,!0,I)});else{if(!t||t.length===0)throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");this._cascadeLoadImgs(B,l,(G,m)=>{i&&i(G,m)},t,o)}return this._internalTexturesCache.push(l),l};var dt=542327876,q=131072,tt=512,et=4,rt=64,at=131072;function W(s){return s.charCodeAt(0)+(s.charCodeAt(1)<<8)+(s.charCodeAt(2)<<16)+(s.charCodeAt(3)<<24)}function Ct(s){return String.fromCharCode(s&255,s>>8&255,s>>16&255,s>>24&255)}var nt=W("DXT1"),ot=W("DXT3"),st=W("DXT5"),E=W("DX10"),ft=113,it=116,lt=2,ct=10,_t=88,$=31,Gt=0,ht=1,ut=2,At=3,j=4,pt=7,v=20,yt=21,bt=22,Bt=23,xt=24,Rt=25,Ot=26,gt=28,Ut=32,Nt=(()=>{class s{static GetDDSInfo(t){let a=new Int32Array(t.buffer,t.byteOffset,$),f=new Int32Array(t.buffer,t.byteOffset,$+4),o=1;a[ut]&q&&(o=Math.max(1,a[pt]));let p=a[yt],c=p===E?f[Ut]:0,e=0;switch(p){case ft:e=2;break;case it:e=1;break;case E:if(c===ct){e=2;break}if(c===lt){e=1;break}}return{width:a[j],height:a[At],mipmapCount:o,isFourCC:(a[v]&et)===et,isRGB:(a[v]&rt)===rt,isLuminance:(a[v]&at)===at,isCube:(a[gt]&tt)===tt,isCompressed:p===nt||p===ot||p===st,dxgiFormat:c,textureType:e}}static _GetHalfFloatAsFloatRGBAArrayBuffer(t,a,f,o,p,c){let e=new Float32Array(o),A=new Uint16Array(p,f),r=0;for(let n=0;n<a;n++)for(let u=0;u<t;u++){let i=(u+n*t)*4;e[r]=g(A[i]),e[r+1]=g(A[i+1]),e[r+2]=g(A[i+2]),s.StoreLODInAlphaChannel?e[r+3]=c:e[r+3]=g(A[i+3]),r+=4}return e}static _GetHalfFloatRGBAArrayBuffer(t,a,f,o,p,c){if(s.StoreLODInAlphaChannel){let e=new Uint16Array(o),A=new Uint16Array(p,f),r=0;for(let n=0;n<a;n++)for(let u=0;u<t;u++){let i=(u+n*t)*4;e[r]=A[i],e[r+1]=A[i+1],e[r+2]=A[i+2],e[r+3]=k(c),r+=4}return e}return new Uint16Array(p,f,o)}static _GetFloatRGBAArrayBuffer(t,a,f,o,p,c){if(s.StoreLODInAlphaChannel){let e=new Float32Array(o),A=new Float32Array(p,f),r=0;for(let n=0;n<a;n++)for(let u=0;u<t;u++){let i=(u+n*t)*4;e[r]=A[i],e[r+1]=A[i+1],e[r+2]=A[i+2],e[r+3]=c,r+=4}return e}return new Float32Array(p,f,o)}static _GetFloatAsHalfFloatRGBAArrayBuffer(t,a,f,o,p,c){let e=new Uint16Array(o),A=new Float32Array(p,f),r=0;for(let n=0;n<a;n++)for(let u=0;u<t;u++)e[r]=k(A[r]),e[r+1]=k(A[r+1]),e[r+2]=k(A[r+2]),s.StoreLODInAlphaChannel?e[r+3]=k(c):e[r+3]=k(A[r+3]),r+=4;return e}static _GetFloatAsUIntRGBAArrayBuffer(t,a,f,o,p,c){let e=new Uint8Array(o),A=new Float32Array(p,f),r=0;for(let n=0;n<a;n++)for(let u=0;u<t;u++){let i=(u+n*t)*4;e[r]=O(A[i])*255,e[r+1]=O(A[i+1])*255,e[r+2]=O(A[i+2])*255,s.StoreLODInAlphaChannel?e[r+3]=c:e[r+3]=O(A[i+3])*255,r+=4}return e}static _GetHalfFloatAsUIntRGBAArrayBuffer(t,a,f,o,p,c){let e=new Uint8Array(o),A=new Uint16Array(p,f),r=0;for(let n=0;n<a;n++)for(let u=0;u<t;u++){let i=(u+n*t)*4;e[r]=O(g(A[i]))*255,e[r+1]=O(g(A[i+1]))*255,e[r+2]=O(g(A[i+2]))*255,s.StoreLODInAlphaChannel?e[r+3]=c:e[r+3]=O(g(A[i+3]))*255,r+=4}return e}static _GetRGBAArrayBuffer(t,a,f,o,p,c,e,A,r){let n=new Uint8Array(o),u=new Uint8Array(p,f),i=0;for(let C=0;C<a;C++)for(let y=0;y<t;y++){let l=(y+C*t)*4;n[i]=u[l+c],n[i+1]=u[l+e],n[i+2]=u[l+A],n[i+3]=u[l+r],i+=4}return n}static _ExtractLongWordOrder(t){return t===0||t===255||t===-16777216?0:1+s._ExtractLongWordOrder(t>>8)}static _GetRGBArrayBuffer(t,a,f,o,p,c,e,A){let r=new Uint8Array(o),n=new Uint8Array(p,f),u=0;for(let i=0;i<a;i++)for(let C=0;C<t;C++){let y=(C+i*t)*3;r[u]=n[y+c],r[u+1]=n[y+e],r[u+2]=n[y+A],u+=3}return r}static _GetLuminanceArrayBuffer(t,a,f,o,p){let c=new Uint8Array(o),e=new Uint8Array(p,f),A=0;for(let r=0;r<a;r++)for(let n=0;n<t;n++){let u=n+r*t;c[A]=e[u],A++}return c}static UploadDDSLevels(t,a,f,o,p,c,e=-1,A,r=!0){let n=null;o.sphericalPolynomial&&(n=[]);let u=!!t.getCaps().s3tc;a.generateMipMaps=p;let i=new Int32Array(f.buffer,f.byteOffset,$),C,y,l,F=0,d,x,T,U,I=0,G=1;if(i[Gt]!==dt){L.Error("Invalid magic number in DDS header");return}if(!o.isFourCC&&!o.isRGB&&!o.isLuminance){L.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");return}if(o.isCompressed&&!u){L.Error("Compressed textures are not supported on this platform.");return}let m=i[bt];d=i[ht]+4;let h=!1;if(o.isFourCC)switch(C=i[yt],C){case nt:G=8,I=33777;break;case ot:G=16,I=33778;break;case st:G=16,I=33779;break;case ft:h=!0,m=64;break;case it:h=!0,m=128;break;case E:{d+=5*4;let b=!1;switch(o.dxgiFormat){case ct:h=!0,m=64,b=!0;break;case lt:h=!0,m=128,b=!0;break;case _t:o.isRGB=!0,o.isFourCC=!1,m=32,b=!0;break}if(b)break}default:L.Error(["Unsupported FourCC code:",Ct(C)]);return}let D=s._ExtractLongWordOrder(i[Bt]),J=s._ExtractLongWordOrder(i[xt]),K=s._ExtractLongWordOrder(i[Rt]),mt=s._ExtractLongWordOrder(i[Ot]);h&&(I=t._getRGBABufferInternalSizedFormat(o.textureType)),T=1,i[ut]&q&&p!==!1&&(T=Math.max(1,i[pt]));let Ft=A||0,M=t.getCaps();for(let b=Ft;b<c;b++){for(y=i[j],l=i[At],U=0;U<T;++U){if(e===-1||e===U){let _=e===-1?U:0;if(!o.isCompressed&&o.isFourCC){a.format=5,F=y*l*4;let R=null;if(t._badOS||t._badDesktopOS||!M.textureHalfFloat&&!M.textureFloat)m===128?(R=s._GetFloatAsUIntRGBAArrayBuffer(y,l,f.byteOffset+d,F,f.buffer,_),n&&_==0&&n.push(s._GetFloatRGBAArrayBuffer(y,l,f.byteOffset+d,F,f.buffer,_))):m===64&&(R=s._GetHalfFloatAsUIntRGBAArrayBuffer(y,l,f.byteOffset+d,F,f.buffer,_),n&&_==0&&n.push(s._GetHalfFloatAsFloatRGBAArrayBuffer(y,l,f.byteOffset+d,F,f.buffer,_))),a.type=0;else{let X=M.textureFloat&&(r&&M.textureFloatLinearFiltering||!r),N=M.textureHalfFloat&&(r&&M.textureHalfFloatLinearFiltering||!r),z=(m===128||m===64&&!N)&&X?1:(m===64||m===128&&!X)&&N?2:0,P,w=null;switch(m){case 128:{switch(z){case 1:P=s._GetFloatRGBAArrayBuffer,w=null;break;case 2:P=s._GetFloatAsHalfFloatRGBAArrayBuffer,w=s._GetFloatRGBAArrayBuffer;break;case 0:P=s._GetFloatAsUIntRGBAArrayBuffer,w=s._GetFloatRGBAArrayBuffer;break}break}default:{switch(z){case 1:P=s._GetHalfFloatAsFloatRGBAArrayBuffer,w=null;break;case 2:P=s._GetHalfFloatRGBAArrayBuffer,w=s._GetHalfFloatAsFloatRGBAArrayBuffer;break;case 0:P=s._GetHalfFloatAsUIntRGBAArrayBuffer,w=s._GetHalfFloatAsFloatRGBAArrayBuffer;break}break}}a.type=z,R=P(y,l,f.byteOffset+d,F,f.buffer,_),n&&_==0&&n.push(w?w(y,l,f.byteOffset+d,F,f.buffer,_):R)}R&&t._uploadDataToTextureDirectly(a,R,b,_)}else if(o.isRGB)a.type=0,m===24?(a.format=4,F=y*l*3,x=s._GetRGBArrayBuffer(y,l,f.byteOffset+d,F,f.buffer,D,J,K),t._uploadDataToTextureDirectly(a,x,b,_)):(a.format=5,F=y*l*4,x=s._GetRGBAArrayBuffer(y,l,f.byteOffset+d,F,f.buffer,D,J,K,mt),t._uploadDataToTextureDirectly(a,x,b,_));else if(o.isLuminance){let R=t._getUnpackAlignement(),X=y;F=Math.floor((y+R-1)/R)*R*(l-1)+X,x=s._GetLuminanceArrayBuffer(y,l,f.byteOffset+d,F,f.buffer),a.format=1,a.type=0,t._uploadDataToTextureDirectly(a,x,b,_)}else F=Math.max(4,y)/4*Math.max(4,l)/4*G,x=new Uint8Array(f.buffer,f.byteOffset+d,F),a.type=0,t._uploadCompressedDataToTextureDirectly(a,I,y,l,x,b,_)}d+=m?y*l*(m/8):F,y*=.5,l*=.5,y=Math.max(1,y),l=Math.max(1,l)}if(A!==void 0)break}n&&n.length>0?o.sphericalPolynomial=V.ConvertCubeMapToSphericalPolynomial({size:i[j],right:n[0],left:n[1],up:n[2],down:n[3],front:n[4],back:n[5],format:5,type:1,gammaSpace:!1}):o.sphericalPolynomial=void 0}}return s.StoreLODInAlphaChannel=!1,s})();export{Nt as a};