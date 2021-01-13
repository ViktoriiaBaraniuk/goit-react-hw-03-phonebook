(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={section:"Section_section__3jGzP"}},13:function(t,e,n){t.exports={filter:"Filter_filter__1TmHH",filterForm:"Filter_filterForm__1SaWH"}},16:function(t,e,n){t.exports={container:"Container_container__1z5vf"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3119o",name:"ContactForm_name__AYM0p",number:"ContactForm_number__AN7rw",button:"ContactForm_button__3A2gA"}},23:function(t,e,n){},3:function(t,e,n){t.exports={list:"ContactList_list__1t6D0",listItem:"ContactList_listItem__wgGTj",deleteBtn:"ContactList_deleteBtn__3FMQv",itemName:"ContactList_itemName__36xVE"}},32:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(14),i=n.n(o),s=(n(23),n(17)),l=n(5),u=n(6),m=n(9),b=n(8),d=n(15),h=n.n(d),j=n(16),f=n.n(j),p=function(t){var e=t.children;return Object(a.jsx)("div",{className:f.a.container,children:e})},v=n(11),C=n.n(v);var O=function(t){var e=t.title,n=t.children;return Object(a.jsxs)("div",{className:C.a.section,children:[Object(a.jsx)("h2",{className:C.a.title,children:e}),n]})},_=n(7),x=n(12),g=n(2),N=n.n(g),y={name:"",number:""},S=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(x.a)({},y),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(_.a)({},a,c))},t.contactCheck=function(){var e=t.state,n=e.name,a=e.number;return t.props.contacts.find((function(t){return n.toLowerCase()===t.name.toLowerCase()}))?(alert("".concat(n," is already in contacts")),!0):""===n||""===a?(alert("Please fill in all the fields"),!0):void 0},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.contactCheck()||t.props.onSubmit(a,c),t.reset()},t.reset=function(){t.setState(Object(x.a)({},y))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:N.a.form,children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter your name",value:e,onChange:this.handleChange,className:N.a.name})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)("input",{type:"text",name:"number",placeholder:"Enter your mobile number",value:n,onChange:this.handleChange,className:N.a.number})]}),Object(a.jsx)("button",{type:"submit",className:N.a.button,children:"Add contact"})]})}}]),n}(c.Component),F=n(3),k=n.n(F);var w=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:k.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:k.a.listItem,children:[Object(a.jsxs)("p",{className:k.a.itemName,children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},className:k.a.deleteBtn,children:"Delete"})]},e)}))})},A=n(13),L=n.n(A);var D=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:L.a.filterForm,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",value:e,onChange:n,className:L.a.filter})]})},I=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:h.a.generate(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(s.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getVisibleContacts();return Object(a.jsxs)(p,{children:[Object(a.jsx)(O,{title:"Phonebook",children:Object(a.jsx)(S,{onSubmit:this.addContact,contacts:n})}),Object(a.jsxs)(O,{title:"Contacts",children:[Object(a.jsx)(D,{value:e,onChange:this.changeFilter}),Object(a.jsx)(w,{contacts:c,onDeleteContact:this.deleteContact})]})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ac72c39a.chunk.js.map