import './polyfills.server.mjs';
import{a as o}from"./chunk-NW7RVBCE.mjs";var r="fogFragment",e=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;o.IncludesShadersStore[r]=e;
