(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={title:"Section_title__3-6b6"}},function(e,t,n){e.exports={wrapper:"FeedbackOptions_wrapper__2IosN"}},function(e,t,n){e.exports={wrap:"Statistics_wrap__3YaLY"}},function(e,t,n){e.exports={message:"Notification_message__345GI"}},function(e,t,n){e.exports={App:"App_App__2qZfG"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),i=(n(19),n(2)),o=n(4),l=n(6),u=n(7),d=n(14),b=n(13),j=n(8),p=n.n(j),h=n(0),f=function(e){var t=e.title,n=e.children;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:p.a.title,children:t}),n]})},O=n(9),v=n.n(O),x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{className:v.a.wrapper,children:t.map((function(e){return Object(h.jsx)("button",{type:"button",value:e,onClick:n,children:e[0].toUpperCase()+e.slice(1)},e)}))})},g=n(10),k=n.n(g),m=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(h.jsxs)("div",{className:k.a.wrap,children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",a]}),Object(h.jsxs)("p",{children:["Total: ",c]}),Object(h.jsxs)("p",{children:["Positive feedback:",r,"%"]})]})},_=n(11),N=n.n(_),w=function(e){var t=e.message;return Object(h.jsx)("h2",{className:N.a.message,children:t})},F=n(12),P=n.n(F),S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=Math.round(100*t/e.countTotalFeedback());return Number.isNaN(n)?0:n},e.hendelClick=function(t){var n=t.target.value;e.setState((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},n,e[n]+1))}))},e.hendelState=function(){return Object.values(e.state).some((function(e){return e>0}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(h.jsxs)("div",{className:P.a.App,children:[Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(x,{options:Object.keys(this.state),onLeaveFeedback:this.hendelClick})}),this.hendelState()?Object(h.jsx)(f,{title:"Statistics",children:Object(h.jsx)(m,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(h.jsx)(w,{message:"No feedback given"})]})}}]),n}(a.Component);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.294a8457.chunk.js.map