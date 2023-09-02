"use strict";(self.webpackChunkdeezer_tweaker_docs=self.webpackChunkdeezer_tweaker_docs||[]).push([[77],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="Creating a theme",c={unversionedId:"creating-a-theme/index",id:"creating-a-theme/index",title:"Creating a theme",description:"Anyone can contribute to the themes list. You just need a code editor and a GitHub account.",source:"@site/docs/creating-a-theme/index.md",sourceDirName:"creating-a-theme",slug:"/creating-a-theme/",permalink:"/docs/creating-a-theme/",draft:!1,editUrl:"https://github.com/Deezer-Tweaker/docs/edit/master/docs/creating-a-theme/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugin main file",permalink:"/docs/creating-a-plugin/plugin-main-file"},next:{title:"Metadata",permalink:"/docs/creating-a-theme/metadata"}},l={},u=[{value:"Setting up",id:"setting-up",level:2},{value:"Creating your theme file",id:"creating-your-theme-file",level:2}],p={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-theme"},"Creating a theme"),(0,a.kt)("p",null,"Anyone can contribute to the themes list. You just need a code editor and a GitHub account."),(0,a.kt)("h2",{id:"setting-up"},"Setting up"),(0,a.kt)("p",null,"First, create a fork of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Deezer-Tweaker/community-themes"},(0,a.kt)("inlineCode",{parentName:"a"},"Deezer-Tweaker/community-themes"))," repository,\nthen clone it to your computer."),(0,a.kt)("h2",{id:"creating-your-theme-file"},"Creating your theme file"),(0,a.kt)("p",null,"The structure of the files and folders of your theme ",(0,a.kt)("strong",{parentName:"p"},"must")," be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"project root/\n  README.md\n  ...\n  \n  <theme name>/\n    <theme name>.css\n")),(0,a.kt)("p",null,"Your theme name must start with a capital letter, must not include spaces or special characters."))}s.isMDXComponent=!0}}]);