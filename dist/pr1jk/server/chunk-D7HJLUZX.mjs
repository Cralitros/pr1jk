import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var n="pickingPixelShader",t=`#if defined(INSTANCES)
varying vMeshID: vec4f;
#else
uniform meshID: vec4f;
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#if defined(INSTANCES)
fragmentOutputs.color=input.vMeshID;
#else
fragmentOutputs.color=uniforms.meshID;
#endif
}`;e.ShadersStoreWGSL[n]=t;var i={name:n,shader:t};export{i as a};
