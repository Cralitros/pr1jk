import './polyfills.server.mjs';
import{a}from"./chunk-NW7RVBCE.mjs";var r="shadowMapFragmentSoftTransparentShadow",o=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alpha) discard;
#endif
`;a.IncludesShadersStore[r]=o;var t={name:r,shader:o};export{t as a};
