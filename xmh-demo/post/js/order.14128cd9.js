(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order"],{"144c":function(e,t,n){},"27d0":function(e,t,n){"use strict";n("d806")},"33a8":function(e,t,n){},"99af":function(e,t,n){"use strict";var c=n("23e7"),a=n("da84"),l=n("d039"),o=n("e8b5"),r=n("861d"),i=n("7b0b"),u=n("07fa"),d=n("8418"),b=n("65f0"),s=n("1dde"),j=n("b622"),f=n("2d00"),O=j("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",v=a.TypeError,k=f>=51||!l((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),p=s("concat"),C=function(e){if(!r(e))return!1;var t=e[O];return void 0!==t?!!t:o(e)},y=!k||!p;c({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,c,a,l,o=i(this),r=b(o,0),s=0;for(t=-1,c=arguments.length;t<c;t++)if(l=-1===t?o:arguments[t],C(l)){if(a=u(l),s+a>m)throw v(h);for(n=0;n<a;n++,s++)n in l&&d(r,s,l[n])}else{if(s>=m)throw v(h);d(r,s++,l)}return r.length=s,r}})},abd3:function(e,t,n){"use strict";n("144c")},c8ea:function(e,t,n){"use strict";n("33a8")},d30d:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),a=function(e){return Object(c["F"])("data-v-5a5e5f8a"),e=e(),Object(c["D"])(),e},l={class:"order-page"},o={class:"top-logo"},r=a((function(){return Object(c["i"])("img",{src:"/imgs/jnj-logo.png",alt:"jnj logo"},null,-1)})),i=a((function(){return Object(c["i"])("div",{class:"text"},"Family of Consumer Companies",-1)})),u={class:"title"},d=Object(c["k"])("订单看板 "),b=a((function(){return Object(c["i"])("div",{class:"update-time"},"数据更新时间为每个工作日11:00/15:00",-1)})),s={class:"nav-container"},j={class:"nav-box"};function f(e,t,n,a,f,O){var m=Object(c["J"])("router-link"),h=Object(c["J"])("van-icon"),v=Object(c["J"])("van-notice-bar"),k=Object(c["J"])("Tips"),p=Object(c["J"])("router-view");return Object(c["C"])(),Object(c["h"])("div",l,[Object(c["i"])("div",o,[Object(c["l"])(m,{to:"/"},{default:Object(c["R"])((function(){return[r]})),_:1}),i,Object(c["i"])("h2",u,[d,Object(c["l"])(m,{to:"/"},{default:Object(c["R"])((function(){return[Object(c["l"])(h,{name:"wap-home-o"})]})),_:1})]),b,Object(c["l"])(v,{class:"scroll-info",speed:"30",text:"风险预警：昆明举办《生物多样性公约》期间实施交通管制。收到物流部通知，昆明在2021.10.08-2021.10.17期间举办《生物多样性公约》，\n        届时，政府将对昆明市及周边道路采取临时交通管制。在此期间，以下客户订单会有发生中转延迟，送货延迟的风险。"})]),Object(c["i"])("div",s,[Object(c["i"])("nav",j,[(Object(c["C"])(!0),Object(c["h"])(c["a"],null,Object(c["I"])(a.navData,(function(e,t){return Object(c["C"])(),Object(c["f"])(m,{"active-class":"nav_active",key:t,onClick:function(e){return a.selected(t)},to:e.path,exact:""},{default:Object(c["R"])((function(){return[Object(c["k"])(Object(c["L"])(e.name),1)]})),_:2},1032,["onClick","to"])})),128))])]),Object(c["l"])(k,{showBulletinBoardIcon:a.showBulletinBoardIcon},null,8,["showBulletinBoardIcon"]),Object(c["l"])(p)])}var O={class:"tips-box"},m={class:"time-line"},h={class:"notice-title"},v=Object(c["k"])(" 通知"),k={class:"time-line-time"},p={class:"time-line-title"},C={class:"time-line-content"},y={class:"fail"},g=Object(c["k"])("点击图表查看详细数据"),w={class:"click-icons"},L=Object(c["i"])("img",{src:"/imgs/filter.png",alt:"filter"},null,-1),x=[L],D={class:"time-line-time"},V={class:"time-line-title"},A={class:"time-line-content"};function W(e,t,n,a,l,o){var r=Object(c["J"])("van-icon"),i=Object(c["J"])("van-popup"),u=Object(c["J"])("van-action-sheet"),d=Object(c["J"])("FilterTool");return Object(c["C"])(),Object(c["h"])("div",O,[Object(c["l"])(i,{show:a.noticeShow,"onUpdate:show":t[0]||(t[0]=function(e){return a.noticeShow=e}),closeable:"",class:"action-sheet-box time-line-box"},{default:Object(c["R"])((function(){return[Object(c["i"])("div",m,[Object(c["i"])("h3",h,[Object(c["l"])(r,{name:"bell"}),v]),Object(c["i"])("div",k,Object(c["L"])(a.timeLineList[0].time),1),Object(c["i"])("h4",p,Object(c["L"])(a.timeLineList[0].title),1),Object(c["i"])("div",C,Object(c["L"])(a.timeLineList[0].text),1)])]})),_:1},8,["show"]),Object(c["i"])("div",y,[Object(c["l"])(r,{name:"warning-o"}),g]),Object(c["i"])("div",w,[Object(c["S"])(Object(c["i"])("span",{class:"bell-icon",onClick:t[1]||(t[1]=function(e){return a.showTimeLine=!0})},[Object(c["l"])(r,{name:"bell",badge:"NEW"})],512),[[c["O"],n.showBulletinBoardIcon]]),Object(c["i"])("span",{class:"filter-icon",onClick:t[2]||(t[2]=function(e){return a.showFilter=!0})},x)]),Object(c["l"])(u,{class:"action-sheet-box time-line-box",show:a.showTimeLine,"onUpdate:show":t[3]||(t[3]=function(e){return a.showTimeLine=e}),title:"公告栏"},{default:Object(c["R"])((function(){return[(Object(c["C"])(!0),Object(c["h"])(c["a"],null,Object(c["I"])(a.timeLineList,(function(e,t){return Object(c["C"])(),Object(c["h"])("div",{class:"time-line",key:t},[Object(c["i"])("div",D,[Object(c["S"])(Object(c["l"])(r,{dot:""},null,512),[[c["O"],1===e.read]]),Object(c["k"])(Object(c["L"])(e.time),1)]),Object(c["i"])("h4",V,Object(c["L"])(e.title),1),Object(c["i"])("div",A,Object(c["L"])(e.text),1)])})),128))]})),_:1},8,["show"]),Object(c["l"])(u,{class:"action-sheet-box filter-action-sheet",show:a.showFilter,"onUpdate:show":t[4]||(t[4]=function(e){return a.showFilter=e}),title:"过滤器"},{default:Object(c["R"])((function(){return[Object(c["l"])(d,{jnjCalendarData:a.jnjCalendarData,customerList:a.customerList,areaList:a.areaList,brandList:a.brandList},null,8,["jnjCalendarData","customerList","areaList","brandList"])]})),_:1},8,["show"])])}var _={class:"filter-box"},H=Object(c["i"])("div",{class:"filter-top"},[Object(c["i"])("h4",null,"选择订单时间")],-1),J={class:"calendar-box clearfix"},R={class:"years"},B=Object(c["i"])("br",null,null,-1),I=Object(c["i"])("br",null,null,-1),S={class:"week-box"},U=Object(c["i"])("span",{class:"line"},"-",-1),T={class:"calendar"},E={class:"select-item-box clearfix"},F={class:"title"},G=Object(c["i"])("h4",null,"选择客户",-1),q=Object(c["k"])("全选"),M={class:"select-item-box clearfix"},z=Object(c["i"])("div",{class:"title"},[Object(c["i"])("h4",null,"选择区域")],-1),N={class:"select-item-box clearfix"},Y={class:"title"},$=Object(c["i"])("h4",null,"选择品牌",-1),K=Object(c["k"])("全选"),Q={class:"select-item-box clearfix"},P=Object(c["k"])(" 将以上设置为默认选项"),X={class:"filter-submit clearfix"},Z=Object(c["k"])("应用");function ee(e,t,n,a,l,o){var r=Object(c["J"])("van-dropdown-item"),i=Object(c["J"])("van-dropdown-menu"),u=Object(c["J"])("van-calendar"),d=Object(c["J"])("van-checkbox"),b=Object(c["J"])("van-checkbox-group"),s=Object(c["J"])("van-button");return Object(c["C"])(),Object(c["h"])("div",_,[H,Object(c["i"])("div",J,[Object(c["i"])("div",R,[Object(c["i"])("h4",null,[Object(c["k"])(Object(c["L"])(a.year),1),B,Object(c["k"])(Object(c["L"])(a.quarter),1),I,Object(c["k"])(Object(c["L"])(a.month),1)]),Object(c["i"])("div",S,[Object(c["l"])(i,{"active-color":"#1989fa"},{default:Object(c["R"])((function(){return[Object(c["l"])(r,{modelValue:a.defaultStartWeek,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.defaultStartWeek=e}),options:a.jnjWeekList,onChange:a.onChangeStartWeek},null,8,["modelValue","options","onChange"])]})),_:1}),U,Object(c["l"])(i,{"active-color":"#1989fa"},{default:Object(c["R"])((function(){return[Object(c["l"])(r,{modelValue:a.defaultEndWeek,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.defaultEndWeek=e}),options:a.jnjWeekEndList.arr,onChange:a.onChangeEndWeek},null,8,["modelValue","options","onChange"])]})),_:1})])]),Object(c["i"])("div",T,[Object(c["l"])(u,{title:"",poppable:!1,"show-confirm":!1,"min-date":a.minDate,"max-date":a.maxDate,"row-height":"30","default-date":a.defaultDate.arr,color:"#1989fa",type:"range",formatter:a.formatter,onConfirm:a.onConfirmDays},null,8,["min-date","max-date","default-date","formatter","onConfirm"])])]),Object(c["i"])("div",E,[Object(c["i"])("div",F,[G,Object(c["l"])(d,{type:"primary",modelValue:a.customerAll,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.customerAll=e}),onClick:a.customerCheckAll,shape:"square"},{default:Object(c["R"])((function(){return[q]})),_:1},8,["modelValue","onClick"])]),Object(c["l"])(b,{modelValue:a.customerChecked,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.customerChecked=e}),direction:"horizontal",class:"filter-tag-box",ref:"customerCheckboxGroup"},{default:Object(c["R"])((function(){return[(Object(c["C"])(!0),Object(c["h"])(c["a"],null,Object(c["I"])(n.customerList,(function(e,n){return Object(c["C"])(),Object(c["f"])(d,{class:"filter-tag",modelValue:a.customerChecked,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.customerChecked=e}),name:e.name,key:n,onClick:function(e){return a.customerClick(n)}},{default:Object(c["R"])((function(){return[Object(c["k"])(Object(c["L"])(e.name),1)]})),_:2},1032,["modelValue","name","onClick"])})),128))]})),_:1},8,["modelValue"])]),Object(c["i"])("div",M,[z,Object(c["l"])(b,{modelValue:a.areaChecked,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.areaChecked=e}),direction:"horizontal",class:"filter-tag-box"},{default:Object(c["R"])((function(){return[(Object(c["C"])(!0),Object(c["h"])(c["a"],null,Object(c["I"])(n.areaList,(function(e,n){return Object(c["C"])(),Object(c["f"])(d,{class:"filter-tag",modelValue:a.areaChecked,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.areaChecked=e}),name:e.name,key:n,onClick:function(e){return a.areaClick(n)}},{default:Object(c["R"])((function(){return[Object(c["k"])(Object(c["L"])(e.name),1)]})),_:2},1032,["modelValue","name","onClick"])})),128))]})),_:1},8,["modelValue"])]),Object(c["i"])("div",N,[Object(c["i"])("div",Y,[$,Object(c["l"])(d,{modelValue:a.brandAll,"onUpdate:modelValue":t[7]||(t[7]=function(e){return a.brandAll=e}),type:"primary",onClick:a.brandCheckAll,shape:"square"},{default:Object(c["R"])((function(){return[K]})),_:1},8,["modelValue","onClick"])]),Object(c["l"])(b,{modelValue:a.brandChecked,"onUpdate:modelValue":t[9]||(t[9]=function(e){return a.brandChecked=e}),direction:"horizontal",class:"filter-tag-box",ref:"brandCheckboxGroup"},{default:Object(c["R"])((function(){return[(Object(c["C"])(!0),Object(c["h"])(c["a"],null,Object(c["I"])(n.brandList,(function(e,n){return Object(c["C"])(),Object(c["f"])(d,{class:"filter-tag",modelValue:a.brandChecked,"onUpdate:modelValue":t[8]||(t[8]=function(e){return a.brandChecked=e}),name:e.name,key:n,onClick:function(e){return a.brandClick(n)}},{default:Object(c["R"])((function(){return[Object(c["k"])(Object(c["L"])(e.name),1)]})),_:2},1032,["modelValue","name","onClick"])})),128))]})),_:1},8,["modelValue"])]),Object(c["i"])("div",Q,[Object(c["l"])(d,{modelValue:a.setDefaultChecked,"onUpdate:modelValue":t[10]||(t[10]=function(e){return a.setDefaultChecked=e}),shape:"square"},{default:Object(c["R"])((function(){return[P]})),_:1},8,["modelValue"])]),Object(c["i"])("div",X,[Object(c["l"])(s,{type:"primary",block:"",color:"#24527B",onClick:t[11]||(t[11]=function(e){return a.submit()})},{default:Object(c["R"])((function(){return[Z]})),_:1})])])}function te(e){if(Array.isArray(e))return e}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function ne(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var c,a,l=[],o=!0,r=!1;try{for(n=n.call(e);!(o=(c=n.next()).done);o=!0)if(l.push(c.value),t&&l.length===t)break}catch(i){r=!0,a=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(r)throw a}}return l}}var ce=n("06c5");function ae(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function le(e,t){return te(e)||ne(e,t)||Object(ce["a"])(e,t)||ae()}var oe=n("b85c"),re=(n("99af"),{name:"FilterTool",props:{customerList:{type:Array,default:function(){return[]}},areaList:{type:Array,default:function(){return[]}},brandList:{type:Array,default:function(){return[]}},jnjCalendarData:{type:Array,default:function(){return[]}}},setup:function(e){var t=e.customerList,n=e.areaList,a=e.brandList,l=e.jnjCalendarData,o=l[0].year,r=l[1].month,i=l[5].week,u=Object(c["G"])({arr:i}),d=Object(c["H"])(o),b=function(){var e=0,t=l[1].month;return t<4?e=1:7>t>3?e=2:10>t>6?e=3:t>9&&(e=4),"Q".concat(e)},s=Object(c["H"])(b()),j=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=e[r-1];return t},f=Object(c["H"])(j()),O=function(){var e,t=0,n=Object(oe["a"])(l[5].week);try{for(n.s();!(e=n.n()).done;){var c=e.value;c.text===l[2].currentWeek&&(t=c.value)}}catch(a){n.e(a)}finally{n.f()}return t},m=Object(c["H"])(new Date(o,r-2,1)),h=Object(c["H"])(new Date(o,r+1,1)),v=Object(c["H"])(0),k=Object(c["H"])(O()),p=Object(c["G"])({arr:[new Date(i[v.value].days[0]),new Date(i[O()].days[1])]}),C=Object(c["H"])("".concat(i[v.value].days[0]," - ").concat(i[O()].days[1])),y=function(){var e=i[v.value].days[0],t=i[k.value].days[1];p.arr=[new Date(e),new Date(t)],C.value="".concat(e," - ").concat(t)},g=function(){v.value>=k.value&&(k.value=v.value);for(var e=[],t=0;t<i.length;++t)(t>v.value||t===v.value)&&e.push(i[t]);u.arr=e,y()},w=function(){y()},L=function(e){return"".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate())},x=function(e){var t=le(e,2),n=t[0],c=t[1];C.value="".concat(L(n)," - ").concat(L(c))},D=function(e){var t,n=e.date.getFullYear(),c=e.date.getMonth()+1;t=e.date.getDate()<10?"0".concat(e.date.getDate()):e.date.getDate();var a="".concat(n,"/").concat(c,"/").concat(t);return a===l[3].openingDate?e.topInfo="开账":a===l[4].closingDate&&(e.topInfo="关账"),e},V=Object(c["H"])(!1),A=Object(c["H"])([]),W=Object(c["H"])([]),_=function(e,t){var n,c=Object(oe["a"])(e);try{for(c.s();!(n=c.n()).done;){var a=n.value;a.checked&&(t.value=a.name)}}catch(l){c.e(l)}finally{c.f()}};_(t,A);var H=function(){W.value.toggleAll(!0),V.value=!0,console.log(A.value)},J=function(e){t[e].checked=!t[e].checked,V.value=A.value.length===t.length,console.log(A.value)},R=Object(c["H"])([]);_(n,R);var B=function(e){n[e].checked=!n[e].checked,console.log(R.value)},I=Object(c["H"])(!1),S=Object(c["H"])([]);_(a,S);var U=Object(c["H"])([]),T=function(){U.value.toggleAll(!0),I.value=!0,console.log(S.value)},E=function(e){a[e].checked=!a[e].checked,I.value=S.value.length===a.length,console.log(S.value)},F=Object(c["H"])(!1),G=function(){console.log("selectedDate:",C,"customerChecked:",A.value),console.log("brandChecked:",S.value,"areaChecked:",R.value)};return Object(c["A"])((function(){})),{year:d,quarter:s,month:f,jnjWeekList:i,jnjWeekEndList:u,minDate:m,maxDate:h,defaultStartWeek:v,defaultEndWeek:k,defaultDate:p,formatter:D,onChangeStartWeek:g,onChangeEndWeek:w,customerChecked:A,customerCheckboxGroup:W,customerCheckAll:H,customerClick:J,customerAll:V,areaChecked:R,areaClick:B,brandAll:I,brandChecked:S,brandCheckboxGroup:U,brandCheckAll:T,brandClick:E,setDefaultChecked:F,onConfirmDays:x,submit:G}}}),ie=(n("27d0"),n("6b0d")),ue=n.n(ie);const de=ue()(re,[["render",ee]]);var be=de,se={name:"Tips",components:{FilterTool:be},props:{showBulletinBoardIcon:{type:Boolean,default:!1}},setup:function(e){console.log(e.showBulletinBoardIcon);var t=[{read:1,time:"2021.9.14",title:"风险预警：昆明举办《生物多样性公约》期间实施交通管制",text:"收到物流部通知，昆明在2021.10.08-2021.10.17期间举办《生物多样性公约》，届时，政府将对昆明市及周边道路采取临时交通管制。在此期间，以下客户订单会有发生中转延迟，送货延迟的风险。"},{read:1,time:"2021.10.25",title:"风险预警：昆明举办《生物多样性公约》期间实施交通管制",text:"因北芳危险品仓库6月4日（下周五）接受政府检查，需要暂停操作一天。 所以对6月3日释放的危险品订单，无法在4日安排提货发运，同一会安排在5日提运。 目前还不清楚订单情况，可能会涉及到订单延误申请延单的可能。"},{read:1,time:"2021.10.25",title:"风险预警：昆明举办《生物多样性公约》期间实施交通管制",text:"因北芳危险品仓库6月4日（下周五）接受政府检查，需要暂停操作一天。 所以对6月3日释放的危险品订单，无法在4日安排提货发运，同一会安排在5日提运。 目前还不清楚订单情况，可能会涉及到订单延误申请延单的可能。"},{read:0,time:"2021.10.25",title:"风险预警",text:" 所以对6月3日释放的危险品订单，无法在4日安排提货发运，同一会安排在5日提运。"}],n=Object(c["G"])([{name:"沃尔玛",checked:!0},{name:"大润发",checked:!0},{name:"华润万家",checked:!1},{name:"山姆",checked:!1},{name:"乐购",checked:!1},{name:"世纪联华",checked:!1},{name:"家乐福",checked:!1},{name:"易初莲花",checked:!1}]),a=Object(c["G"])([{name:"全国",checked:!0},{name:"华东",checked:!1},{name:"华南",checked:!1},{name:"华西",checked:!1},{name:"华中",checked:!1},{name:"华北",checked:!1}]),l=Object(c["G"])([{name:"DrCiLabo",checked:!0},{name:"Napkin",checked:!1},{name:"Liner",checked:!1},{name:"Tampon",checked:!1},{name:"ELSKER",checked:!1},{name:"Baby",checked:!1}]),o=Object(c["G"])([{year:"2021"},{month:"11"},{currentWeek:"W24s"},{openingDate:"2021/11/03"},{closingDate:"2021/11/22"},{week:[{text:"W24",value:0,days:["2021/11/01","2021/11/07"]},{text:"W25",value:1,days:["2021/11/08","2021/11/14"]},{text:"W26",value:2,days:["2021/11/15","2021/11/21"]},{text:"W27",value:3,days:["2021/11/22","2021/11/28"]},{text:"W28",value:4,days:["2021/11/29","2021/11/30"]}]}]),r=Object(c["H"])(!1),i=Object(c["H"])(!1),u=Object(c["H"])(!1);return Object(c["A"])((function(){})),{showTimeLine:r,timeLineList:t,showFilter:i,customerList:n,jnjCalendarData:o,areaList:a,brandList:l,noticeShow:u}}};n("abd3");const je=ue()(se,[["render",W]]);var fe=je,Oe={name:"OrderBoard",components:{Tips:fe},setup:function(){var e=0,t=Object(c["n"])(),n=t.proxy,a=[{name:"订单总览",path:"/status"},{name:"价差",path:"/price-difference"},{name:"缺货",path:"/out-stock"},{name:"过滤",path:"/filter"}],l=Object(c["H"])("OrderStatus"===n.$root.$route.name),o=function(e){l.value=0===e};return{active:e,navData:a,showBulletinBoardIcon:l,selected:o}}};n("c8ea");const me=ue()(Oe,[["render",f],["__scopeId","data-v-5a5e5f8a"]]);t["default"]=me},d806:function(e,t,n){}}]);