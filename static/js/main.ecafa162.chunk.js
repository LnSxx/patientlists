(this.webpackJsonpvistapatientsapp=this.webpackJsonpvistapatientsapp||[]).push([[0],{34:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},64:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i(0),a=i.n(s),c=i(10),r=i.n(c),d=(i(34),i(6)),l=(i(41),i(65)),j=i(66),o=i(67);i(42);function b(e){var t=new Date,i=t.getFullYear()-e.getFullYear(),n=t.getMonth()-e.getMonth();return(n<0||0===n&&t.getDate()<e.getDate())&&i--,i}var u=function(){var e=Object(d.c)((function(e){return e})),t=e.selectedPatient,i=e.isPatientSelected;return Object(n.jsxs)("div",{className:"patientInfo",children:[Object(n.jsx)("div",{className:"infoTitle",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0435"}),Object(n.jsxs)("div",{className:"infoArea",children:[Object(n.jsxs)("div",{className:"directionRow",children:[Object(n.jsx)("div",{className:"infoParameter",children:"\u0424\u0418\u041e"}),Object(n.jsx)("div",{className:"infoValue",children:!0===i?t.firstName:""})]}),Object(n.jsxs)("div",{className:"directionRow",children:[Object(n.jsx)("div",{className:"infoParameter",children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(n.jsx)("div",{className:"infoValue",children:!0===i?b(new Date(t.birthDate)):""})]}),Object(n.jsxs)("div",{className:"directionRow",children:[Object(n.jsx)("div",{className:"infoParameter",children:"\u0414\u0438\u0430\u0433\u043d\u043e\u0437"}),Object(n.jsx)("div",{className:"infoValue",children:!0===i?t.diagnosis:""})]})]})]})},O=(i(43),i(44),"PATIENT_LISTS_FETCH_SUCCESS"),h="PATIENT_LISTS_FETCH_FAIL",p="SELECT_PATIENT",v=function(e,t){return{type:O,payload:e,division:t}};var x=function(e){var t,i,s=e.patient,a=Object(d.b)(),c=Object(d.c)((function(e){return e})).selectedPatient;return Object(n.jsx)("li",{className:(t=s,i=c,JSON.stringify(t)===JSON.stringify(i)?"selected":"casual"),onClick:function(){a({type:p,payload:s})},children:Object(n.jsx)("div",{className:"listHover",children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(o.a,{children:s.historyNumber}),Object(n.jsx)(o.a,{children:s.firstName}),Object(n.jsx)(o.a,{children:s.diagnosis})]})})})})};function f(e){var t=e.patientList,i=e.division;return Object(n.jsx)("ul",{children:t.map((function(e){return Object(n.jsx)(x,{patient:e},i+e.historyNumber)}))})}var m=i(15),N=i.n(m),L=i(27),g=i(16),I=i.n(g),T="PRESENT_LIST",S="QUITTING_LIST";var y=function(){var e=Object(d.c)((function(e){return e})),t=e.patientList,i=e.error,a=Object(d.b)();return Object(s.useEffect)((function(){a(function(){var e=Object(L.a)(N.a.mark((function e(t){var i,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("http://localhost:3000/patientlists/data/presentList.json");case 3:return i=e.sent,t(v(i.data,T)),e.next=7,I.a.get("http://localhost:3000/patientlists/data/quittingList.json");case 7:n=e.sent,t(v(n.data,S)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t((s=e.t0,{type:h,payload:s}));case 14:case"end":return e.stop()}var s}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]),null===i?Object(n.jsx)("div",{className:"patientsList",children:Object(n.jsxs)("div",{className:"listNav",children:[Object(n.jsx)("input",{type:"radio",id:"tab-btn-1",name:"listNav",defaultChecked:!0}),Object(n.jsx)("label",{htmlFor:"tab-btn-1",children:Object(n.jsxs)("div",{className:"navButton",children:["\u041f\u0420\u0418\u0421\u0423\u0422\u0421\u0422\u0412\u0423\u042e\u0422(",!0===t.presentListIsLoaded?t.present.length:"0",")"]})}),Object(n.jsx)("input",{type:"radio",id:"tab-btn-2",name:"listNav"}),Object(n.jsx)("label",{htmlFor:"tab-btn-2",children:Object(n.jsxs)("div",{className:"navButton",children:["\u0412\u042b\u0411\u042b\u0412\u0428\u0418\u0415(",!0===t.quittingListIsLoaded?t.quitting.length:"0",")"]})}),Object(n.jsx)("div",{className:"listColumns",children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(o.a,{children:"\u2116\u0418\u0411"}),Object(n.jsx)(o.a,{children:"\u0424\u0418\u041e"}),Object(n.jsx)(o.a,{children:"\u0414\u0438\u0430\u0433\u043d\u043e\u0437"})]})})}),Object(n.jsx)("div",{id:"present",className:"scrollable",children:!0===t.presentListIsLoaded?Object(n.jsx)(f,{patientList:t.present,division:"PRESENT_LIST"}):Object(n.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"})}),Object(n.jsx)("div",{id:"quitting",className:"scrollable",children:!0===t.presentListIsLoaded?Object(n.jsx)(f,{patientList:t.quitting,division:"QUITTING_LIST"}):Object(n.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"})})]})}):Object(n.jsx)("div",{className:"patientsList",children:i.message})};var P=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{fluid:!0,children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(o.a,{xs:12,md:6,children:Object(n.jsx)(u,{})}),Object(n.jsx)(o.a,{xs:12,md:6,children:Object(n.jsx)(y,{})})]})})})},E=i(9),w=i(28),_=i(3),q={patientList:{quitting:[],quittingListIsLoaded:!1,present:[],presentListIsLoaded:!1},selectedPatient:{},isPatientSelected:!1,error:null};var C=Object(E.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:switch(t.division){case T:return Object(_.a)(Object(_.a)({},e),{},{patientList:Object(_.a)(Object(_.a)({},e.patientList),{},{present:t.payload,presentListIsLoaded:!0})});case S:return Object(_.a)(Object(_.a)({},e),{},{patientList:Object(_.a)(Object(_.a)({},e.patientList),{},{quitting:t.payload,quittingListIsLoaded:!0})});default:return e}case h:return Object(_.a)(Object(_.a)({},e),{},{error:t.payload});case p:return Object(_.a)(Object(_.a)({},e),{},{selectedPatient:Object(_.a)({},t.payload),isPatientSelected:!0});default:return e}}),Object(E.a)(w.a));r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(d.a,{store:C,children:Object(n.jsx)(P,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.ecafa162.chunk.js.map