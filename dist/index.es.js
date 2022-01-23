import{jsx as r}from"react/jsx-runtime";import*as o from"react";import n from"react";import t from"markdown-to-jsx";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var e=function(){return e=Object.assign||function(r){for(var o,n=1,t=arguments.length;n<t;n++)for(var e in o=arguments[n])Object.prototype.hasOwnProperty.call(o,e)&&(r[e]=o[e]);return r},e.apply(this,arguments)};var i=n.lazy((function(){return import("@mui/material/Link")})),p=n.lazy((function(){return import("@mui/material/Typography")})),a={a:{component:i},h1:{component:p,props:{variant:"h1"}},h2:{component:p,props:{variant:"h2"}},h3:{component:p,props:{variant:"h3"}},h4:{component:p,props:{variant:"h4"}},h5:{component:p,props:{variant:"h5"}},h6:{component:p,props:{variant:"h6"}},p:{component:p,props:{variant:"body1"}}},c=function(n){return r(o.Suspense,e({fallback:r("div",{children:"..."},void 0)},{children:function(o){var n=o.children,i=o.key,p=o.options,c=o.overrides;if(p){var s=p.overrides,l=function(r,o){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&o.indexOf(t)<0&&(n[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var e=0;for(t=Object.getOwnPropertySymbols(r);e<t.length;e++)o.indexOf(t[e])<0&&Object.prototype.propertyIsEnumerable.call(r,t[e])&&(n[t[e]]=r[t[e]])}return n}(p,["overrides"]);return r(t,s?e({options:e({overrides:e(e({},a),s)},l)},{children:n}):e({options:e({overrides:e({},a)},l)},{children:n}),i&&i)}return r(t,e(c?{options:{overrides:e(e({},a),c)}}:{options:{overrides:e({},a)}},{children:n}),i&&i)}(n)}),void 0)};export{c as default};
