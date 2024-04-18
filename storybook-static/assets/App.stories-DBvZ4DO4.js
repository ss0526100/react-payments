import{c as p,j as f,a as c}from"./emotion-react.browser.esm-C_wMcisN.js";import{j as l}from"./jsx-runtime-Bdgnjw47.js";import{r as a}from"./index-Ccz02SFX.js";import{B as E,N as R,u as m}from"./useInput-m6mseGEg.js";import{S as D}from"./SectionTitle-BCsiONSy.js";import{a as z,I as G,m as O}from"./Ic_chip-BS65g1VV.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D8_Koz8h.js";const I={expiredDateTitle:"카드 유효기간을 입력해주세요",expiredDateDescription:"월/년도(MMYY)를 순서대로 입력해 주세요.",cardNumbersTitle:"결제할 카드 번호를 입력해 주세요",cardNumberDescription:"본인 명의의 카드만 결제 가능합니다.",cardHolderTitle:"카드 소유자 이름을 입력해 주세요"},h={cardNumberLabel:"카드 번호",cardNumberPlaceHolder:"1234",expiredDateLabel:"유효기간",expiredDatePlaceHolder:["MM","YY"],cardHolderLabel:"소유자 이름",cardHolderPlaceHolder:"SEUNGHA CHA"},b={notDigit:"올바른 숫자(0~9)를 입력해주세요",underLengthTail:"자리로 입력해주세요",notEnglish:"영어로 입력해주세요",wrongMonth:"올바른 월(01~12)를 입력해주세요",wrongYear:"올바른 년도(00~99)를 입력해주세요"},k=e=>{if(!/^[0-9]*$/.test(e))throw new E(b.notDigit)},q=e=>{if(!/^([a-zA-Z]+\s*)*$/.test(e))throw new E(b.notEnglish)},H=(e,r)=>{if(e.length<r)throw new R(`${r}${b.underLengthTail}`)},B=e=>{if(!/^$|^(0[1-9]|1[0-2]|0|1)$/.test(e))throw new E(b.wrongMonth)},U=e=>{if(!/^$|^(0?[0-9]|[1-9][0-9])$/.test(e))throw new E(b.wrongYear)},_="#ff3d3d",V=p`
  color: ${_};
  font-size: 9.5px;
  line-height: 13.76px;
  font-weight: 400;
  margin-top: 5px;
  height: 10px;
`,W=p`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  gap: 5px;
`,Z=p`
  display: flex;
  width: 100%;
  gap: 5px;

  input {
    width: 0px;
    flex: 1;
    border: 1px solid #acacac;
    border-radius: 2px;
    padding: 8px;
    outline: none;
  }

  input::placeholder {
    color: #acacac;
  }

  input:invalid {
    border: 1px solid ${_};
  }

  input:focus {
    border: 1px solid black;
  }
`;function N({labelText:e,errorMessage:r="",children:t}){return f("div",{children:[f("label",{css:W,children:[e,f("div",{css:Z,children:[" ",t]})]}),c("p",{css:V,children:r})]})}N.__docgenInfo={description:"",methods:[],displayName:"FormItem",props:{labelText:{required:!0,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function M(){const[e,r]=a.useState(""),t=d=>{d instanceof Error&&r(d.message)},o={validator:d=>{B(d),H(d,2),r("")},errorHandler:t},i={validator:d=>{U(d),H(d,2),r("")},errorHandler:t},n=m(o),s=m(i),g=[n,s],{setCardExpiredDate:x}=a.useContext(v);return a.useEffect(()=>{x&&x([n.value,s.value])},[n.value,s.value]),l.jsxs("section",{children:[l.jsx(D,{title:I.expiredDateTitle,description:I.expiredDateDescription}),l.jsx(N,{labelText:h.expiredDateLabel,errorMessage:e,children:g.map((d,C)=>l.jsx("input",{type:"text",maxLength:2,placeholder:h.expiredDatePlaceHolder[C],onChange:d.onChangeHandler,value:d.value},C))})]})}M.__docgenInfo={description:"",methods:[],displayName:"CardExpiredDate"};function P(){const[e,r]=a.useState(""),t={validator:s=>{q(s),r("")},errorHandler:s=>{s instanceof Error&&r(s.message)},decorateValue:s=>s.toUpperCase()},{value:o,onChangeHandler:i}=m(t),{setCardHolder:n}=a.useContext(v);return a.useEffect(()=>{n&&n(o)},[o]),l.jsxs("section",{children:[l.jsx(D,{title:I.cardHolderTitle}),l.jsx(N,{labelText:h.cardHolderLabel,errorMessage:e,children:l.jsx("input",{type:"text",placeholder:h.cardHolderPlaceHolder,maxLength:30,onChange:i,value:o})})]})}P.__docgenInfo={description:"",methods:[],displayName:"CardHolder"};function L(){const[e,r]=a.useState(""),t={validator:u=>{k(u),H(u,4),r("")},errorHandler:u=>{u instanceof Error&&r(u.message)}},o=m(t),i=m(t),n=m(t),s=m(t),g=[o,i,n,s],x=[o.value,i.value,n.value,s.value],{setCardNumbers:d,setCardIssuer:C}=a.useContext(v);return a.useEffect(()=>{C&&C(z(x.join(""))??""),d&&d(x)},x),l.jsxs("section",{children:[l.jsx(D,{title:I.cardNumbersTitle,description:I.cardNumberDescription}),l.jsx(N,{labelText:h.cardNumberLabel,errorMessage:e,children:g.map((u,F)=>l.jsx("input",{type:"text",placeholder:h.cardNumberPlaceHolder,maxLength:4,onChange:u.onChangeHandler,value:u.value},F))})]})}L.__docgenInfo={description:"",methods:[],displayName:"CardNumbers"};const J=p`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;function A(){return f("form",{css:J,children:[c(L,{}),c(M,{}),c(P,{})]})}A.__docgenInfo={description:"",methods:[],displayName:"CardForm"};const K=p`
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
`,Q=p`
  height: 22px;
  display: flex;
  justify-content: space-between;

  img {
    width: 32px;
  }
`,w=p`
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
`,X=p`
  display: flex;
  gap: 10px;
`,ee=p`
  ${w.styles}
  width:30px;
`;function $(){const{cardIssuer:e,cardNumbers:r,cardExpiredDate:t,cardHolder:o}=a.useContext(v).cardInfo;return f("section",{css:K,children:[f("div",{css:Q,children:[c("img",{src:G,alt:"IC Chip"}),c("img",{src:O(e),alt:e})]}),c("div",{css:X,children:r.map((i,n)=>c("span",{css:ee,children:n<2?i:"*".repeat(i.length)},n))}),c("div",{css:w,children:t.join("")!==""?t.join("/"):""}),c("div",{css:w,children:o})]})}$.__docgenInfo={description:"",methods:[],displayName:"CardPreview"};function re(){const[e,r]=a.useState(["","","",""]),[t,o]=a.useState(""),[i,n]=a.useState(["",""]),[s,g]=a.useState("");return{cardInfo:{cardNumbers:e,cardIssuer:t,cardExpiredDate:i,cardHolder:s},setCardNumbers:r,setCardIssuer:o,setCardExpiredDate:n,setCardHolder:g}}const v=a.createContext({cardInfo:{cardNumbers:["","","",""],cardIssuer:"",cardExpiredDate:["",""],cardHolder:""}}),te=p`
  width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  margin: auto;
  margin-top: 50px;
`;function Y(){const{cardInfo:e,setCardNumbers:r,setCardIssuer:t,setCardExpiredDate:o,setCardHolder:i}=re();return c("div",{css:te,children:f(v.Provider,{value:{cardInfo:e,setCardNumbers:r,setCardIssuer:t,setCardExpiredDate:o,setCardHolder:i},children:[c($,{}),c(A,{})]})})}Y.__docgenInfo={description:"",methods:[],displayName:"App"};const le={title:"App",component:Y},y={};var j,S,T;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(T=(S=y.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const pe=["Default"];export{y as Default,pe as __namedExportsOrder,le as default};
