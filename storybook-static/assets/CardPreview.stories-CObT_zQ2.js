import{c as r,j as o,a as e}from"./emotion-react.browser.esm-C_wMcisN.js";import{I as h,m as f}from"./Ic_chip-BS65g1VV.js";import"./jsx-runtime-Bdgnjw47.js";import"./index-Ccz02SFX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D8_Koz8h.js";const g=r`
  width: 212px;
  height: 132px;
  top: 77px;
  left: 82px;
  padding: 10px 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  background-color: #333333;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
`,u=r`
  height: 22px;
  display: flex;
  justify-content: space-between;

  img {
    width: 32px;
  }
`,t=r`
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
`,C=r`
  display: flex;
  gap: 10px;
`,y=r`
  ${t.styles}
  width:30px;
`;function w({cardIssuer:a,cardNumbers:x,cardExpiredDay:d,cardHolder:m}){return o("section",{css:g,children:[o("div",{css:u,children:[e("img",{src:h,alt:"IC Chip"}),e("img",{src:f(a),alt:a})]}),e("div",{css:C,children:x.map((c,i)=>e("span",{css:y,children:i<2?c:"*".repeat(c.length)},i))}),e("div",{css:t,children:d.join("")!==""?d.join("/"):""}),e("div",{css:t,children:m})]})}const N={title:"CardPreview",component:w},s={args:{cardIssuer:"",cardNumbers:["","","",""],cardExpiredDay:["",""],cardHolder:""}};var n,p,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    cardIssuer: "",
    cardNumbers: ["", "", "", ""],
    cardExpiredDay: ["", ""],
    cardHolder: ""
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const P=["Default"];export{s as Default,P as __namedExportsOrder,N as default};
