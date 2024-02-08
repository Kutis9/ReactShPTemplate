(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=ReactDOM;var n=e.n(t);const a=React;var r=e.n(a);const l=()=>{const[e,t]=(0,a.useState)("Loading...");return(0,a.useEffect)((()=>{fetch("/_api/Web/CurrentUser?$select=Title",{headers:{Accept:"application/json;odata=verbose"},credentials:"same-origin"}).then((e=>e.json())).then((e=>t(e.d.Title))).catch((e=>console.error("Error:",e)))}),[]),r().createElement("div",null,"Welcome, ",e)},c=Recharts,o=()=>r().createElement(c.LineChart,{width:600,height:300,data:[{name:"Page A",uv:400,pv:2400,amt:2400},{name:"Page B",uv:300,pv:1398,amt:2210},{name:"Page C",uv:200,pv:980,amt:2290},{name:"Page D",uv:500,pv:3e3,amt:1290},{name:"Page E",uv:500,pv:2e3,amt:1290}]},r().createElement(c.CartesianGrid,{stroke:"#ccc",strokeDasharray:"5 5"}),r().createElement(c.XAxis,{dataKey:"name"}),r().createElement(c.YAxis,null),r().createElement(c.Tooltip,null),r().createElement(c.Legend,null),r().createElement(c.Line,{type:"monotone",dataKey:"pv",stroke:"#8884d8"}),r().createElement(c.Line,{type:"monotone",dataKey:"uv",stroke:"#82ca9d"})),m=()=>{const e=Object.keys(window);return r().createElement("div",null,r().createElement("h2",null,"Globálne Premenné"),r().createElement("ul",null,e.map(((e,t)=>r().createElement("li",{key:t},e)))))},u=()=>r().createElement("div",null,r().createElement("h1",null,"Sharepoint React App WebPack"),r().createElement(l,null),r().createElement(o,null),r().createElement(m,null));n().render(React.createElement(u,null),document.getElementById("root"))})();