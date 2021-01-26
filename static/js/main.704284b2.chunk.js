(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),s=n(23),i=n.n(s),c=(n(32),n(2)),l=n(6),u=n(4),d=n(3),h=(n(33),n(34),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsxs)("div",{className:"event-overview",children:[Object(a.jsx)("h2",{className:"summary",children:t.summary}),Object(a.jsx)("p",{className:"location",children:t.location}),Object(a.jsx)("p",{className:"start-time",children:t.start.dateTime}),!e&&Object(a.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Show Event Details"}),e&&Object(a.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Hide Event Details"})]}),e&&Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("p",{className:"description",children:t.description}),Object(a.jsx)("p",{className:"end-time",children:t.end.dateTime}),Object(a.jsx)("p",{className:"time-zone",children:t.start.timeZone}),Object(a.jsx)("p",{className:"organizer-email",children:t.organizer.email})]})]})}}]),n}(r.Component)),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(h,{event:e})},e.id)}))})}}]),n}(r.Component),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="darkblue",a}return n}(p),m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="firebrick",a}return n}(p),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="deeppink",a}return n}(p),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"The city you are looking for cannot be found. Please try another city or double-check your spelling."})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(v,{text:this.state.infoText}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",className:"city",placeholder:"Search for a City",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),g=n(8),w=n(24),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),n<1||n>32?e.setState({infoText:"Please enter a number between 1 and 32."}):(e.setState({infoText:""}),e.throttleHandleInputChanged(n))},e.throttleHandleInputChanged=Object(w.debounce)(e.throttleHandleInputChanged.bind(Object(g.a)(e)),500),e.handleInputChanged=e.handleInputChanged.bind(Object(g.a)(e)),e}return Object(l.a)(n,[{key:"throttleHandleInputChanged",value:function(e){this.props.updateEvents(null,e)}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"number-of-events",children:[Object(a.jsx)("label",{className:"number-of-events-label",children:"Number of Events: "}),Object(a.jsx)("input",{type:"number",className:"event-number",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),Object(a.jsx)(m,{text:this.state.infoText})]})}}]),n}(r.Component);O.defaultProps={updateEvents:function(){}};var x=O,y=n(7),k=n.n(y),S=n(9),T=n(26),C=n(11),E=n.n(C),N=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}}],Z=n(10),I=n.n(Z),W=function(e){var t=e.map((function(e){return e.location}));return Object(T.a)(new Set(t))},D=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I.a.start(),navigator.onLine||window.location.href.startsWith("http://localhost")){e.next=5;break}return t=localStorage.getItem("lastEvents"),I.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:W(JSON.parse(t).events)});case 5:if(!window.location.href.startsWith("http://localhost")){e.next=8;break}return I.a.done(),e.abrupt("return",N);case 8:return e.next=10,q();case 10:if(!(n=e.sent)){e.next=20;break}return J(),a="https://e8m96hh453.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,E.a.get(a);case 16:return(r=e.sent).data&&(o=W(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),I.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,D(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://e8m96hh453.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&L(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://e8m96hh453.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",alertText:""},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?A().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,o);return e.setState({events:a,currentLocation:t,locations:n.locations})})):A().then((function(t){var a="all"===r?t.events:t.events.filter((function(e){return e.location===r})),s=n||o,i=a.slice(0,s);if(e.mounted)return e.setState({events:i,numberOfEvents:n,locations:t.locations})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0,navigator.onLine?this.setState({alertText:""}):this.setState({alertText:"You are currently offline and viewing information from your last visit. Events will not be up-to-date."}),this.mounted&&this.updateEvents()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(a.jsx)(x,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(a.jsx)(b,{text:this.state.alertText}),Object(a.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component),U=n(25),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}(),U.config("f3c2e1d59ba14c178adc2a7501e34d46").install()}},[[54,1,2]]]);
//# sourceMappingURL=main.704284b2.chunk.js.map