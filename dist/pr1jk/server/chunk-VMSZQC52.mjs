import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var o="sceneUboDeclaration",t=`struct Scene {viewProjection : mat4x4<f32>,
#ifdef MULTIVIEW
viewProjectionR : mat4x4<f32>,
#endif 
view : mat4x4<f32>,
projection : mat4x4<f32>,
vEyePosition : vec4<f32>,};var<uniform> scene : Scene;
`;e.IncludesShadersStoreWGSL[o]=t;