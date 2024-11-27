import './polyfills.server.mjs';
import{a as e}from"./chunk-NW7RVBCE.mjs";var o="vertexColorMixing",r=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=color;
#else
vColor.rgb*=color.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;e.IncludesShadersStore[o]=r;
