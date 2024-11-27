import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var t="morphTargetsVertexDeclaration",r=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
attribute position{X} : vec3<f32>;
#ifdef MORPHTARGETS_NORMAL
attribute normal{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_TANGENT
attribute tangent{X} : vec3<f32>;
#endif
#ifdef MORPHTARGETS_UV
attribute uv_{X} : vec2<f32>;
#endif
#elif {X}==0
uniform morphTargetCount: i32;
#endif
#endif
`;e.IncludesShadersStoreWGSL[t]=r;var i={name:t,shader:r};export{i as a};
