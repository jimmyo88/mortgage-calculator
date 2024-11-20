(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1016)}])},1016:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var a=n(4848),r=n(6540);let l=e=>{let{formData:t,onUpdate:n}=e,r=e=>{let{name:a,value:r,type:l,checked:s}=e.target;n({...t,[a]:"checkbox"===l?s:parseFloat(r)})};return(0,a.jsxs)("form",{children:[(0,a.jsxs)("label",{children:["Current Mortgage Value:",(0,a.jsx)("input",{type:"number",name:"currentValue",value:t.currentValue||"",onChange:r,required:!0})]}),(0,a.jsxs)("label",{children:["Interest Rate (%):",(0,a.jsx)("input",{type:"number",name:"interestRate",value:t.interestRate||"",onChange:r,required:!0})]}),(0,a.jsxs)("label",{children:["Remaining Years:",(0,a.jsx)("input",{type:"number",name:"years",value:t.years||"",onChange:r,required:!0})]}),(0,a.jsxs)("label",{children:["Remaining Months:",(0,a.jsx)("input",{type:"number",name:"months",value:t.months||"",onChange:r,required:!0})]}),(0,a.jsxs)("label",{children:["Overpayment Amount:",(0,a.jsx)("input",{type:"number",name:"overpayment",value:t.overpayment||"",onChange:r,required:!0})]}),(0,a.jsxs)("label",{children:["Monthly Overpayment:",(0,a.jsx)("input",{type:"checkbox",name:"isMonthly",checked:t.isMonthly||!1,onChange:r})]})]})};var s=n(6118),o=n(4731);s.t1.register(s.No,s.FN,s.kc,s.PP,s.hE,s.m_,s.s$);let i=e=>{let{data:t}=e,n={labels:Array.from({length:Math.max(t.balanceHistory.length,t.overpaidBalanceHistory.length)},(e,t)=>t+1),datasets:[{label:"Without Overpayment",data:t.balanceHistory,borderColor:"red",fill:!1},{label:"With Overpayment",data:t.overpaidBalanceHistory,borderColor:"green",fill:!1}]};return(0,a.jsx)(o.N1,{data:n})};function h(){let[e,t]=(0,r.useState)({currentValue:0,interestRate:0,years:0,months:0,overpayment:0,isMonthly:!1}),[n,s]=(0,r.useState)(null);return(0,r.useEffect)(()=>{s(function(e,t,n,a,r,l){let s=t/100/12,o=12*n+a,i=e,h=0,u=[],p=[];for(let t=0;t<o;t++){let t=i*s;i=i-e/o+t,u.push(i>0?i:0)}i=e;for(let t=0;t<o;t++){let n=i*s;if(i=i-(e/o+n+(l?r:0))+n,0!==t||l||(i-=r),p.push(i>0?i:0),h+=l?r:0,i<=0)break}return{balanceHistory:u,overpaidBalanceHistory:p,totalMonthsWithoutOverpayment:o,totalMonthsWithOverpayment:p.length,totalOverpayment:h}}(e.currentValue,e.interestRate,e.years,e.months,e.overpayment,e.isMonthly))},[e]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Mortgage Overpayment Calculator"}),(0,a.jsx)(l,{formData:e,onUpdate:t}),n&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Results"}),(0,a.jsxs)("p",{children:["Total Months Without Overpayment: ",n.totalMonthsWithoutOverpayment]}),(0,a.jsxs)("p",{children:["Total Months With Overpayment: ",n.totalMonthsWithOverpayment]}),(0,a.jsxs)("p",{children:["Total Overpayment: \xa3",n.totalOverpayment.toFixed(2)]}),(0,a.jsx)(i,{data:n})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[201,888,636,593,792],()=>t(7276)),_N_E=e.O()}]);