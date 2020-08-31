(this["webpackJsonpfullstack-mern"]=this["webpackJsonpfullstack-mern"]||[]).push([[0],{25:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=a(11),u=(a(30),a(4)),o=a.n(u),s=a(6),p=a(1),m=a(3),d=a(10),v=a(21),E=function(e){return{type:"MINLENGTH",val:e}},f=function(e,t){var a,n=!0,l=Object(v.a)(t);try{for(l.s();!(a=l.n()).done;){var r=a.value;"REQUIRE"===r.type&&(n=n&&e.trim().length>0),"MINLENGTH"===r.type&&(n=n&&e.trim().length>=r.val),"MAXLENGTH"===r.type&&(n=n&&e.trim().length<=r.val),"MIN"===r.type&&(n=n&&+e>=r.val),"MAX"===r.type&&(n=n&&+e<=r.val),"EMAIL"===r.type&&(n=n&&/^\S+@\S+\.\S+$/.test(e))}}catch(c){l.e(c)}finally{l.f()}return n},h=(a(32),function(e,t){switch(t.type){case"CHANGE":return Object(d.a)(Object(d.a)({},e),{},{value:t.val,isValid:f(t.val,t.validators)});case"TOUCH":return Object(d.a)(Object(d.a)({},e),{},{isTouched:!0});default:return e}}),b=function(e){var t=Object(n.useReducer)(h,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),a=Object(p.a)(t,2),r=a[0],c=a[1],i=e.id,u=e.onInput,o=r.value,s=r.isValid;Object(n.useEffect)((function(){u(i,o,s)}),[i,o,s,u]);var m=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},d=function(){c({type:"TOUCH"})},v="input"===e.element?l.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:m,onBlur:d,value:r.value}):l.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:m,onBlur:d,value:r.value});return l.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},l.a.createElement("label",{htmlFor:e.id},e.label),v,!r.isValid&&r.isTouched&&l.a.createElement("p",null,e.errorText))},g=a(13),j=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(d.a)(Object(d.a)({},e),{},{inputs:Object(d.a)(Object(d.a)({},e.inputs),{},Object(g.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},k=function(e,t){var a=Object(n.useReducer)(j,{inputs:e,isValid:t}),l=Object(p.a)(a,2),r=l[0],c=l[1];return[r,Object(n.useCallback)((function(e,t,a){c({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(n.useCallback)((function(e,t){c({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},O=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(),c=Object(p.a)(r,2),i=c[0],u=c[1],m=Object(n.useRef)([]),d=Object(n.useCallback)(function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n,r,c,i,s,p=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>1&&void 0!==p[1]?p[1]:"GET",n=p.length>2&&void 0!==p[2]?p[2]:null,r=p.length>3&&void 0!==p[3]?p[3]:{},l(!0),c=new AbortController,m.current.push(c),e.prev=6,e.next=9,fetch(t,{method:a,body:n,headers:r,signal:c.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(s=e.sent,m.current=m.current.filter((function(e){return e!==c})),i.ok){e.next=16;break}throw new Error(s.message);case 16:return l(!1),e.abrupt("return",s);case 20:throw e.prev=20,e.t0=e.catch(6),u(e.t0.message),l(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(n.useEffect)((function(){return function(){m.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,isError:i,sendRequest:d,clearError:function(){u(null)}}},y=(a(33),function(e){return e.href?l.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?l.a.createElement(i.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):l.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),V=(a(39),function(e){var t=Object(n.useState)(),a=Object(p.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(),u=Object(p.a)(i,2),o=u[0],s=u[1],m=Object(n.useRef)(),d=Object(n.useState)(),v=Object(p.a)(d,2),E=v[0],f=v[1];Object(n.useEffect)((function(){if(r){var e=new FileReader;e.onload=function(){s(e.result)},e.readAsDataURL(r)}}),[r]);return l.a.createElement("div",{className:"form-control"},l.a.createElement("input",{id:e.id,ref:m,style:{display:"none"},type:"file",accept:".jpg, .png, .jpeg",onChange:function(t){var a,n=E;t.target.files&&1===t.target.files.length?((a=t.target.files[0]).type,a.size<=5e5&&(c(a),f(!0),n=!0)):(f(!1),n=!1),e.onInput(e.id,a,n)}}),l.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},l.a.createElement("div",{className:"image-upload__preview"},o&&l.a.createElement("img",{src:o,alt:"Preview"}),!o&&l.a.createElement("p",null,"Please pick an image. (size below 500000bytes)")),l.a.createElement(y,{type:"button",onClick:function(){m.current.click()}},"Pick Image")),!E&&l.a.createElement("p",null,e.errorText))}),N=(a(40),function(e){var t=Object(n.useState)("Dhaka"),a=Object(p.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:"selector"},l.a.createElement("label",{className:"selector__title"},e.label,":",l.a.createElement("select",{className:"selector__select",value:r,onChange:function(t){c(t.target.value),e.onInput(e.id,t.target.value,!0)}},l.a.createElement("option",{value:"Dhaka"},"Dhaka"),l.a.createElement("option",{value:"Chittagong"},"Chittagong"),l.a.createElement("option",{value:"Barishal "},"Barishal "),l.a.createElement("option",{value:"Mymensingh"},"Mymensingh"),l.a.createElement("option",{value:"Khulna"},"Khulna"),l.a.createElement("option",{value:"Rajshahi "},"Rajshahi "),l.a.createElement("option",{value:"Rangpur"},"Rangpur"),l.a.createElement("option",{value:"Sylhet"},"Sylhet"))))}),x=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)("Visited"),u=Object(p.a)(i,2),o=u[0],s=u[1];return l.a.createElement("div",null,e.label," :"," ",l.a.createElement("input",{name:"check",type:"checkbox",checked:r,onChange:function(t){var a=t.target;c(null===a||void 0===a?void 0:a.checked),(null===a||void 0===a?void 0:a.checked)?s("Not Visited"):s("Visited"),e.onInput(e.id,o,!0)}}))};a(41);var I=function(){return l.a.createElement("div",null,l.a.createElement("span",null," Loading Data Please Wait...."))};var T=function(e){var t=e.errorMessage;return l.a.createElement("div",null,l.a.createElement("span",null,"Error : ",t))},w=function(){var e=O(),t=e.isLoading,a=e.isError,n=e.clearError,r=k({title:{value:"",isValid:!1},description:{value:"",isValid:!1},choice:{value:"Dhaka",isValid:!0},check:{value:"Not Visited",isValid:!0},image:{value:null,isValid:!1}},!1),c=Object(p.a)(r,2),i=c[0],u=c[1],d=Object(m.f)(),v=function(){var e=Object(s.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,(a=new FormData).append("title",i.inputs.title.value),a.append("description",i.inputs.description.value),a.append("check",i.inputs.check.value),a.append("choice",i.inputs.choice.value),a.append("image",i.inputs.image.value),e.next=10,fetch("".concat("https://priom-mern2.herokuapp.com/api","/places"),{method:"POST",body:a});case 10:n=e.sent,console.log(n),d.push("/table"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement(I,null),a&&l.a.createElement(T,{onClick:n,errorMessage:a}),l.a.createElement("form",{className:"place-form",onSubmit:v,id:"form"},l.a.createElement(b,{id:"title",name:"title",element:"input",type:"text",label:"Place Title",validators:[{type:"REQUIRE"}],errorText:"Please Enter a valid Title. (Required)",onInput:u}),l.a.createElement(b,{id:"description",name:"description",element:"textarea",type:"text",label:"Place Description",validators:[E(5)],errorText:"Please Enter a valid description (at lest 5 characters).",onInput:u}),l.a.createElement(N,{name:"choice",id:"choice",label:"Division",onInput:u}),l.a.createElement(x,{name:"check",id:"check",label:"Visited",onInput:u}),l.a.createElement(V,{center:!0,name:"image",id:"image",onInput:u,errorText:"Please provide an image..."}),l.a.createElement(y,{type:"submit",disabled:!i.isValid},"Add Place")))},S=(a(42),function(){var e=O(),t=e.isLoading,a=e.isError,r=e.sendRequest,c=e.clearError,i=Object(n.useState)(),u=Object(p.a)(i,2),d=u[0],v=u[1],f=Object(m.g)().placeId,h=Object(m.f)(),g=k({title:{value:"",isValid:!1},description:{value:"",isValid:!1},choice:{value:"Dhaka",isValid:!0},check:{value:"Not Visited",isValid:!0},image:{value:null,isValid:!1}},!1),j=Object(p.a)(g,3),V=j[0],w=j[1],S=j[2];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r("".concat("https://priom-mern2.herokuapp.com/api","/places/").concat(f));case 3:t=e.sent,v(t.place),S({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0},check:{value:t.place.check,isValid:!0},choice:{value:t.place.choice,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[r,f,S]);var _=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,r("".concat("https://priom-mern2.herokuapp.com/api","/places/").concat(f),"PATCH",JSON.stringify({title:V.inputs.title.value,description:V.inputs.description.value,check:V.inputs.check.value,choice:V.inputs.choice.value}),{"Content-Type":"application/json"});case 4:h.push("/table"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement(I,null),a&&l.a.createElement(T,{onClick:c,errorMessage:a}),!t&&d&&l.a.createElement("form",{className:"place-form",onSubmit:_},l.a.createElement(b,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please Enter a valid Title.",onInput:w,initialValue:d.title,initialValid:!0}),l.a.createElement(b,{id:"description",element:"textarea",type:"text",label:"Description",validators:[E(5)],errorText:"Please Enter a valid description (at lest 5 characters).",onInput:w,initialValue:d.description,initialValid:!0}),l.a.createElement(N,{name:"choice",id:"choice",label:"Division",onInput:w,initialValue:d.choice,initialValid:!0}),l.a.createElement(x,{name:"check",id:"check",label:"Visited",onInput:w,initialValue:d.check,initialValid:!0}),l.a.createElement(y,{type:"submit",disabled:!V.isValid},"Update Place")))}),_=(a(43),function(e){var t=e.places,a=e.loading;return l.a.createElement(l.a.Fragment,null,a&&l.a.createElement("span",null,"Loading...."),!a&&t&&l.a.createElement("div",{className:"table"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Image"),l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"Title"),l.a.createElement("td",null,"Description"),l.a.createElement("td",null,"Visited"),l.a.createElement("td",null,"Division"),l.a.createElement("td",null,"Update")),t.map((function(e){return l.a.createElement("tr",{key:e.id,className:"table__col"},l.a.createElement("td",{className:"table__row"},l.a.createElement("img",{key:e.id,alt:"item",className:"table__image",src:"".concat("https://priom-mern2.herokuapp.com","/").concat(e.image)})),l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.description),l.a.createElement("td",null,e.check),l.a.createElement("td",null,e.choice),l.a.createElement("td",null,l.a.createElement(y,{to:"/places/".concat(e.id)},"EDIT")))}))))))}),C=(a(44),function(e){for(var t=e.placesPerPage,a=e.totalPlaces,n=e.paginate,r=[],c=1;c<=Math.ceil(a/t);c++)r.push(c);return l.a.createElement("nav",{className:"pagination"},l.a.createElement("ul",{className:"pagination__ul"},r.map((function(e){return l.a.createElement("li",{key:e,className:"pagination__item"},l.a.createElement(y,{onClick:function(){return n(e)},className:"pagination__link"},e))}))))});var P=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),i=Object(p.a)(c,2),u=i[0],m=i[1],d=Object(n.useState)(5),v=Object(p.a)(d,1)[0],E=O(),f=E.isLoading,h=E.isError,b=E.sendRequest,g=E.clearError;if(Object(n.useEffect)((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("".concat("https://priom-mern2.herokuapp.com/api","/places"));case 3:t=e.sent,r(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[b]),!f&&a)var j=u*v,k=j-v,y=a.slice(k,j);return l.a.createElement("div",null,0===a.length&&l.a.createElement("span",null,"No Data Available"),f&&l.a.createElement(I,null),h&&l.a.createElement(T,{onClick:g,errorMessage:h}),!f&&a&&l.a.createElement(l.a.Fragment,null,l.a.createElement(C,{placesPerPage:v,totalPlaces:a.length,paginate:function(e){m(e)}}),l.a.createElement(_,{places:y,loading:f})))};a(45);var D=function(){return l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar__options"},l.a.createElement(y,{to:"/"},"Task 1"),l.a.createElement(y,{to:"/table"},"Task 2"),l.a.createElement(y,{to:"/drop"},"Task 3")))},R=a(24);a(46),a(47);var A=function(e){var t=e.uploaded,a=Object(n.useState)([]),r=Object(p.a)(a,2),c=r[0],i=r[1],u=O(),m=u.isLoading,d=u.isError,v=u.sendRequest,E=u.clearError;return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("".concat("https://priom-mern2.herokuapp.com/api","/galleries"));case 3:t=e.sent,i(t.galleries),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[v,t]),l.a.createElement("div",{className:"gallery"},m&&l.a.createElement("span",null,"Loading Data please wait..."),d&&l.a.createElement("span",{onClick:E},"Error : ",d),!m&&c&&c.map((function(e){return l.a.createElement("img",{alt:"item",className:"gallery__images",key:e.id,src:"".concat("https://priom-mern2.herokuapp.com","/").concat(e.image)})})))},L=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(p.a)(c,2),u=i[0],m=i[1],d=Object(R.a)({maxSize:5e5,maxFiles:1,multiple:!1,accept:"image/jpeg, image/png, image/jpg",onDrop:function(){var e=Object(s.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(t.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))),e.prev=1,(a=new FormData).append("image",t[0]),e.next=6,fetch("".concat("https://priom-mern2.herokuapp.com/api","/galleries"),{method:"POST",body:a});case 6:m(!0),r([]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}),v=d.getRootProps,E=d.getInputProps,f=d.fileRejections.map((function(e){var t=e.file,a=e.errors;return l.a.createElement("li",{key:t.path},t.path," - ",t.size," bytes",l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e.code},e.message)}))))})),h=a.map((function(e){return l.a.createElement("div",{key:e.name},l.a.createElement("div",null,l.a.createElement("h4",null,"File Name : "),l.a.createElement("span",null,e.name),l.a.createElement("h4",null,"File Size : "),l.a.createElement("span",null,e.size),l.a.createElement("h4",null,"File Type : "),l.a.createElement("span",null,e.type)),l.a.createElement("div",null,l.a.createElement("img",{src:e.preview,style:{width:"200px"},alt:"preview"})))}));return l.a.createElement("div",{className:"dropImage"},l.a.createElement("div",{className:"dropImage__limitation"},l.a.createElement("ul",null,"Expected File Type:",l.a.createElement("li",null,"image.png"),l.a.createElement("li",null,"image.jpg"),l.a.createElement("li",null,"image.jpeg")),l.a.createElement("ul",null,"Expected File Limit:",l.a.createElement("li",null,"Size : 500000bytes / 500Kb"),l.a.createElement("li",null,"Number of File : 1"))),l.a.createElement("div",v(),l.a.createElement("input",E()),l.a.createElement("p",{className:"dropImage__title"},"Drop files here")),l.a.createElement("div",null,h),l.a.createElement("div",{className:"rejectStyle"},l.a.createElement("ul",null,f)),l.a.createElement("h1",null,"Image Gallery"),l.a.createElement(A,{uploaded:u}))};var F=function(){return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement("div",{className:"app"},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:w}),l.a.createElement(m.a,{path:"/table",component:P}),l.a.createElement(m.a,{path:"/places/:placeId",component:S}),l.a.createElement(m.a,{path:"/drop",component:L}))))};c.a.render(l.a.createElement(i.a,null,l.a.createElement(F,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.98992b08.chunk.js.map