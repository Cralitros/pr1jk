import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var o="fogVertex",t=`#ifdef FOG
vertexOutputs.vFogDistance=(scene.view*worldPos).xyz;
#endif
`;e.IncludesShadersStoreWGSL[o]=t;
