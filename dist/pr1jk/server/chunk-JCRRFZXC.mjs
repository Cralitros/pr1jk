import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var n="boundingBoxRendererFragmentDeclaration",d=`uniform vec4 color;
`;e.IncludesShadersStore[n]=d;var r="boundingBoxRendererPixelShader",o=`#include<__decl__boundingBoxRendererFragment>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[r]=o;var m={name:r,shader:o};export{m as a};
