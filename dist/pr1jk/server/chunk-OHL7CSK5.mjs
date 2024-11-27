import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var n="boundingBoxRendererPixelShader",r=`uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[n]=r;var t={name:n,shader:r};export{t as a};
