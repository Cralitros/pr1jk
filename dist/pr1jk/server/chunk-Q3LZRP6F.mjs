import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var t="logDepthFragment",o=`#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;e.IncludesShadersStore[t]=o;
