import './polyfills.server.mjs';
import{a as r}from"./chunk-NW7RVBCE.mjs";var e="fluidRenderingParticleDiffusePixelShader",n=`uniform particleAlpha: f32;varying uv: vec2f;varying diffuseColor: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
fragmentOutputs.color=vec4f(input.diffuseColor,1.0);}
`;r.ShadersStoreWGSL[e]=n;var i={name:e,shader:n};export{i as a};
