import{a as e}from"./chunk-L3UYHT7M.js";var r="taaPixelShader",a=`varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D historySampler;uniform float factor;void main() {vec4 c=texelFetch(textureSampler,ivec2(gl_FragCoord.xy),0);vec4 h=texelFetch(historySampler,ivec2(gl_FragCoord.xy),0);gl_FragColor=mix(h,c,factor);}
`;e.ShadersStore[r]=a;var t={name:r,shader:a};export{t as a};
