import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var t="morphTargetsVertexDeclaration",r=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
attribute vec3 position{X};
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#elif {X}==0
uniform int morphTargetCount;
#endif
#endif
`;e.IncludesShadersStore[t]=r;var n={name:t,shader:r};export{n as a};
