import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var t="meshUVSpaceRendererMaskerVertexShader",r=`attribute uv: vec2f;varying vUV: vec2f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position= vec4f( vec2f(input.uv.x,input.uv.y)*2.0-1.0,0.,1.0);vertexOutputs.vUV=input.uv;}`;e.ShadersStoreWGSL[t]=r;var u={name:t,shader:r};export{u as a};
