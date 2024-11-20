(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1016)}])},1016:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var n=a(4848),r=a(6540);let l=e=>{let{formData:t,onUpdate:a}=e,r=e=>{let{name:n,value:r,type:l,checked:s}=e.target,o="checkbox"===l?s:parseFloat(r);o<0||a({...t,[n]:o})};return(0,n.jsxs)("form",{className:"calculator-form",children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Current Mortgage Value:"}),(0,n.jsx)("input",{type:"number",name:"currentValue",value:t.currentValue||"",onChange:r,placeholder:"e.g. 200000",min:"0"})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Interest Rate (%):"}),(0,n.jsx)("input",{type:"number",name:"interestRate",value:t.interestRate||"",onChange:r,placeholder:"e.g. 3.5",min:"0",step:"0.01"})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Remaining Years:"}),(0,n.jsx)("input",{type:"number",name:"years",value:t.years||"",onChange:r,placeholder:"e.g. 25",min:"0"})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Remaining Months:"}),(0,n.jsx)("input",{type:"number",name:"months",value:t.months||"",onChange:r,placeholder:"e.g. 6",min:"0",max:"11"})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Overpayment Amount:"}),(0,n.jsx)("input",{type:"number",name:"overpayment",value:t.overpayment||"",onChange:r,placeholder:"e.g. 100",min:"0"})]}),(0,n.jsxs)("div",{className:"form-group checkbox-group",children:[(0,n.jsx)("label",{children:"Monthly Overpayment:"}),(0,n.jsx)("input",{type:"checkbox",name:"isMonthly",checked:t.isMonthly||!1,onChange:r})]})]})};var s=a(6118),o=a(4731);s.t1.register(s.No,s.FN,s.kc,s.PP,s.hE,s.m_,s.s$);let i=e=>{let{data:t}=e,a={labels:Array.from({length:Math.max(t.balanceHistory.length,t.overpaidBalanceHistory.length)},(e,t)=>t+1),datasets:[{label:"Without Overpayment",data:t.balanceHistory,borderColor:"red",fill:!1},{label:"With Overpayment",data:t.overpaidBalanceHistory,borderColor:"green",fill:!1}]};return(0,n.jsx)(o.N1,{data:a})};function h(){let[e,t]=(0,r.useState)({currentValue:0,interestRate:0,years:0,months:0,overpayment:0,isMonthly:!1}),[a,s]=(0,r.useState)(null);return(0,r.useEffect)(()=>{s(function(e,t,a,n,r,l){if(!e||!t||!a&&!n)return{balanceHistory:[],overpaidBalanceHistory:[],totalMonthsWithoutOverpayment:0,totalMonthsWithOverpayment:0,totalOverpayment:0,monthlyPayment:0};let s=t/100/12,o=12*a+n;if(o<=0)return{balanceHistory:[],overpaidBalanceHistory:[],totalMonthsWithoutOverpayment:0,totalMonthsWithOverpayment:0,totalOverpayment:0,monthlyPayment:0};let i=s*Math.pow(1+s,o)*e/(Math.pow(1+s,o)-1),h=e,m=0,p=[],u=[];for(let e=0;e<o;e++){let e=h*s,t=h/o;h=h-t+e,p.push(h>0?h:0)}h=e;for(let t=0;t<o;t++){let a=h*s;if(h=h-(e/o+a+(l?r:0))+a,0!==t||l||(h-=r),u.push(h>0?h:0),m+=l?r:0,h<=0)break}return{balanceHistory:p,overpaidBalanceHistory:u,totalMonthsWithoutOverpayment:o,totalMonthsWithOverpayment:u.length,totalOverpayment:m,monthlyPayment:isNaN(i)||!isFinite(i)?0:i}}(e.currentValue,e.interestRate,e.years,e.months,e.overpayment,e.isMonthly))},[e]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Mortgage Overpayment Calculator"}),(0,n.jsx)(l,{formData:e,onUpdate:t}),a&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Results"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Current Monthly Payment:"})," \xa3",a.monthlyPayment.toFixed(2)]}),(0,n.jsxs)("p",{children:["Total Months Without Overpayment: ",a.totalMonthsWithoutOverpayment]}),(0,n.jsxs)("p",{children:["Total Months With Overpayment: ",a.totalMonthsWithOverpayment]}),(0,n.jsxs)("p",{children:["Total Overpayment: \xa3",a.totalOverpayment.toFixed(2)]}),(0,n.jsx)(i,{data:a})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[201,888,636,593,792],()=>t(7276)),_N_E=e.O()}]);