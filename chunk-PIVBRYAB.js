import{a as e}from"./chunk-L3UYHT7M.js";var i="boundingBoxRendererVertexDeclaration",n=`uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
`;e.IncludesShadersStore[i]=n;var o="boundingBoxRendererVertexShader",r=`attribute vec3 position;
#include<__decl__boundingBoxRendererVertex>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec4 worldPos=world*vec4(position,1.0);
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;e.ShadersStore[o]=r;var l={name:o,shader:r};export{l as a};
