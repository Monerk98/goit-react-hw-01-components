(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(a,e,t){a.exports={wrapper:"userMain_wrapper__3OvKm",name:"userMain_name__jO_uU",avatar:"userMain_avatar__2-KVk",description:"userMain_description__3abDP",list:"userMain_list__1xOuJ",stats:"userMain_stats__1oA42",wrap:"userMain_wrap__13ia2",label:"userMain_label__2bEOn",quantity:"userMain_quantity__2rkws"}},,function(a,e,t){a.exports={transaction:"Transact_transaction__2DU3W",tr:"Transact_tr__208CS",td:"Transact_td__1PDlU",th:"Transact_th__2VL4w",transactionHistory:"Transact_transactionHistory__1PEgj"}},function(a,e,t){a.exports={item:"Friend_item__2z2a0",avatar:"Friend_avatar__3YRfG",online:"Friend_online__3USpz",offline:"Friend_offline__3OOjF"}},function(a,e,t){a.exports={statistics:"Static_statistics__oX-y9",statList:"Static_statList__1nyZv",item:"Static_item__1e4AJ"}},,,function(a,e,t){a.exports={container:"FriendsList_container__1VEPL"}},function(a,e,t){a.exports={wrapper:"Profile_wrapper__2pPwA"}},function(a){a.exports=JSON.parse('[{"id":"1","name":"Jacques Gluke","tag":"@jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}]')},function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10},{"id":"id-6","label":".word","percentage":23}]')},function(a){a.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(a){a.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(a,e,t){},function(a,e,t){},,function(a,e,t){"use strict";t.r(e);var n=t(2),c=t.n(n),s=t(7),i=t.n(s),r=(t(18),t(19),t(4)),l=t.n(r),d=t(0),o=function(a){var e=a.avatar,t=a.isOnline,n=a.name;return Object(d.jsxs)("li",{className:l.a.item,children:[Object(d.jsx)("span",{className:t?l.a.online:l.a.offline}),Object(d.jsx)("img",{className:l.a.avatar,src:e,alt:"User avatar",width:"48"}),Object(d.jsx)("p",{className:l.a.name,children:n})]})},b=t(8),p=t.n(b),m=function(a){var e=a.items;return Object(d.jsx)("ul",{className:p.a.container,children:e.map((function(a){return Object(d.jsx)(o,{avatar:a.avatar,isOnline:a.isOnline,name:a.name},a.id)}))})},u=t(9),j=t.n(u),f=t(1),h=t.n(f),O=function(a){var e=a.avatar,t=a.name,n=a.tag,c=a.location,s=a.stats;return Object(d.jsxs)("div",{className:h.a.profile,children:[Object(d.jsxs)("div",{className:h.a.description,children:[Object(d.jsx)("img",{src:e,alt:"User avatar",className:h.a.avatar}),Object(d.jsx)("p",{className:h.a.name,children:t}),Object(d.jsx)("p",{className:h.a.tag,children:n}),Object(d.jsx)("p",{className:h.a.location,children:c})]}),Object(d.jsxs)("ul",{className:"".concat(h.a.stats," ").concat(h.a.list),children:[Object(d.jsxs)("li",{className:h.a.wrap,children:[Object(d.jsx)("span",{className:h.a.label,children:"Followers"}),Object(d.jsx)("span",{className:h.a.quantity,children:s.followers})]}),Object(d.jsxs)("li",{className:h.a.wrap,children:[Object(d.jsx)("span",{className:h.a.label,children:"Views"}),Object(d.jsx)("span",{className:h.a.quantity,children:s.views})]}),Object(d.jsxs)("li",{className:h.a.wrap,children:[Object(d.jsx)("span",{className:h.a.label,children:"Likes"}),Object(d.jsx)("span",{className:h.a.quantity,children:s.likes})]})]})]})},_=t(10).map((function(a){return Object(d.jsx)(O,{name:a.name,tag:a.tag,location:a.location,avatar:a.avatar,stats:a.stats},a.id)})),y=function(a){return Object(d.jsx)("div",{className:j.a.wrapper,children:_})},x=t(5),v=t.n(x);var N=function(a){var e=a.title,t=a.stats;return Object(d.jsxs)("section",{className:v.a.statistics,children:[Object(d.jsx)("h2",{className:"title",children:e}),Object(d.jsx)("ul",{className:v.a.statList,children:t.map((function(a){var e=a.id,t=a.label,n=a.percentage;return Object(d.jsxs)("li",{className:v.a.item,style:{backgroundColor:"rgb(".concat(Math.floor(235*Math.random()),", ").concat(Math.floor(235*Math.random()),", ").concat(Math.floor(235*Math.random()),")")},children:[Object(d.jsx)("span",{className:v.a.label,children:t}),Object(d.jsx)("span",{className:v.a.percentage,children:n})]},e)}))})]})},g=t(3),w=t.n(g),M=function(a){var e=a.items;return Object(d.jsxs)("table",{className:w.a.transactionHistory,children:[Object(d.jsx)("thead",{className:w.a.transaction,children:Object(d.jsxs)("tr",{className:w.a.tr,children:[Object(d.jsx)("th",{className:w.a.th,children:"Type"}),Object(d.jsx)("th",{className:w.a.th,children:"Amount"}),Object(d.jsx)("th",{className:w.a.th,children:"Currency"})]})}),Object(d.jsx)("tbody",{children:e.map((function(a){var e=a.id,t=a.type,n=a.amount,c=a.currency;return Object(d.jsxs)("tr",{className:w.a.tr,children:[Object(d.jsx)("td",{className:w.a.td,children:t}),Object(d.jsx)("td",{className:w.a.td,children:n}),Object(d.jsx)("td",{className:w.a.td,children:c})]},e)}))})]})},U=t(11),L=t(12),P=t(13);var S=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(y,{}),Object(d.jsx)(m,{items:L}),Object(d.jsx)(N,{title:"Upload stats",stats:U}),Object(d.jsx)(M,{items:P})]})},F=function(a){a&&a instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;t(a),n(a),c(a),s(a),i(a)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),F()}],[[21,1,2]]]);
//# sourceMappingURL=main.73da5d1f.chunk.js.map