"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[772],{876:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,y=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return t?r.createElement(y,c(c({ref:n},u),{},{components:t})):r.createElement(y,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3560:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=t(7560),o=t(8283),a=(t(2784),t(876)),c=["components"],l={title:"Panes"},i=void 0,p={unversionedId:"example-panes",id:"example-panes",isDocsHomePage:!1,title:"Panes",description:"`tsx live noInline",source:"@site/docs/example-panes.md",sourceDirName:".",slug:"/example-panes",permalink:"/docs/example-panes",version:"current",frontMatter:{title:"Panes"},sidebar:"docs",previous:{title:"Layers control",permalink:"/docs/example-layers-control"},next:{title:"Draggable Marker",permalink:"/docs/example-draggable-marker"}},u=[],s={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0},'const outer = [\n  [50.505, -29.09],\n  [52.505, 29.09],\n]\nconst inner = [\n  [49.505, -2.09],\n  [53.505, 2.09],\n]\n\nfunction BlinkingPane() {\n  const [render, setRender] = useState(true)\n  const timerRef = useRef()\n  useEffect(() => {\n    timerRef.current = setInterval(() => {\n      setRender((r) => !r)\n    }, 5000)\n    return () => {\n      clearInterval(timerRef.current)\n    }\n  }, [])\n\n  return render ? (\n    <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>\n      <Rectangle bounds={outer} pathOptions={{ color: \'cyan\' }} />\n    </Pane>\n  ) : null\n}\n\nrender(\n  <MapContainer bounds={outer} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <BlinkingPane />\n    <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>\n      <Rectangle bounds={inner} pathOptions={{ color: \'yellow\' }} />\n      <Pane name="purple-rectangle">\n        <Rectangle bounds={outer} pathOptions={{ color: \'purple\' }} />\n      </Pane>\n    </Pane>\n  </MapContainer>,\n)\n')))}f.isMDXComponent=!0}}]);