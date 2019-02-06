(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(64)},33:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),c=n.n(o),s=(n(33),n(2)),i=n.n(s),u=n(4),l=n(9),p=n(10),m=n(12),f=n(11),v=n(13),h=n(46),d=n(68),E=n(7),b="https://falsemotive.io/api/",g=function(e,t){return{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}},O=function(){var e=Object(u.a)(i.a.mark(function e(t,n){var r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b).concat(t),g("POST",n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not post");case 5:return e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a.data);case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark(function e(t,n){var r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b).concat(t),g("DELETE",n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not delete");case 5:return e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",a.results);case 9:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not get Data");case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://falsemotive.io/newKey");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),k=function(e){return{type:"SET_MOVIES",movies:e}},S=function(e,t){return{type:"SET_FAVORITES",favorites:e,user_id:t}},P=function(e){return{type:"SET_USER",user:e}},j=function(e){return{type:"SET_LOGIN_PROMPT",bool:e}},x=function(e){return{type:"SET_POPUP",bool:e}},C=n(43),_=(n(41),Object(E.b)(function(e){return{user:e.user}},function(e){return{setFavorites:function(t,n){return e(S(t,n))},setLoginPrompt:function(t){return e(j(t))},setPopup:function(t){return e(x(t))}}})(function(e){var t=e.movie,n=e.user,o=e.setLoginPrompt,c=e.setFavorites,s=e.isPopup,l=e.setPopup,p=function(){var e=Object(u.a)(i.a.mark(function e(){var r,a,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(!n);case 2:if(!n){e.next=23;break}if(r="users/".concat(n.id,"/favorites"),a="".concat(r,"/").concat(t.id),e.prev=6,t.isFavorite){e.next=12;break}return e.next=10,O("/users/favorites/new",t);case 10:e.next=14;break;case 12:return e.next=14,w(a,t);case 14:return e.next=16,N(r);case 16:s=e.sent,c(s,n.id),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),console.log(e.t0);case 23:case"end":return e.stop()}},e,this,[[6,20]])}));return function(){return e.apply(this,arguments)}}(),m=s?"popup":"Movie";return a.a.createElement("div",{className:m},s&&a.a.createElement(r.Fragment,null,a.a.createElement(C.a,{className:"close-popup",onClick:function(){return l(!1)},to:"/"},"X"),a.a.createElement("h1",{className:"movie-title"},t.title),a.a.createElement("hr",null),a.a.createElement("p",{className:"movie-release"},"Released: ",t.release_date),a.a.createElement("hr",null),a.a.createElement("iframe",{width:"560",height:"315",title:t.title,src:"https://www.youtube.com/embed/".concat(t.trailer),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),a.a.createElement("hr",null),a.a.createElement("p",{className:"movie-description"},t.overview),a.a.createElement("hr",null),a.a.createElement("p",{className:"movie-vote"},"Average rating: ",t.vote_average)),!s&&a.a.createElement(C.a,{to:"/movies/".concat(t.id)},a.a.createElement("img",{onClick:function(){return l(!0)},src:"https://image.tmdb.org/t/p/w500"+t.poster_path,className:"movie-poster",alt:"movie poster"})),a.a.createElement("span",{className:"favorite-btn",onClick:function(){return p()}},t.isFavorite?"\u2b50\ufe0f":"\u2606"))})),T=n(65),F=(n(44),function(){return a.a.createElement("nav",{className:"Nav"},a.a.createElement("h1",{className:"movie-tracker-title"},"Movie ",a.a.createElement("span",null,"Tracker")),a.a.createElement("div",{className:"nav-border"},a.a.createElement("div",{className:"nav-options"},a.a.createElement("p",{className:"browse"},"SORT BY:"),a.a.createElement(T.a,{exact:!0,to:"/",activeStyle:{color:"#0CD0FC"},name:"recent"},"RECENT"),a.a.createElement(T.a,{exact:!0,to:"/favorites",activeStyle:{color:"#0CD0FC"},name:"favorites"},"FAVORITES"))))}),I=(n(50),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).findClickedCard=function(e){var t=n.props.movies.find(function(t){return parseInt(t.id)===parseInt(e.params.id)});return t?a.a.createElement(_,{key:JSON.stringify(t),movie:t,isPopup:!0}):a.a.createElement("div",null," Movie does not exist")},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Home"},a.a.createElement(F,null),a.a.createElement("section",{className:"View"},a.a.createElement(h.a,{path:"/",component:q}),a.a.createElement(h.a,{path:"/",render:function(e){var t=e.location;return a.a.createElement(D,{location:t})}}),a.a.createElement(h.a,{path:"/movies/:id",render:function(t){var n=t.match;return e.findClickedCard(n)}})))}}]),t}(r.Component)),M=(n(52),function(e){var t=e.setLoginPrompt,n=e.setPopup;return n(!0),a.a.createElement("div",{className:"CreateAccountPrompt"},a.a.createElement("p",{className:"create-account-prompt"},"In order to ",a.a.createElement("span",{role:"img","aria-label":"star emoji"},"\u2b50")," your favorite movies, you need an account. Would you like to create one?"),a.a.createElement("hr",null),a.a.createElement(C.a,{to:"/create-user",onClick:function(){return t(!1)}},"YES"),a.a.createElement("button",{className:"no-btn",onClick:function(){t(!1),n(!1)}},"NO"),a.a.createElement("hr",null),a.a.createElement("p",{className:"account-notice"},"(If you already have an account, you can login from the home page!)"))}),L=(n(54),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).setUserFavorites=function(){var e=Object(u.a)(i.a.mark(function e(t){var r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="users/".concat(t,"/favorites"),e.next=3,N(r);case 3:a=e.sent,n.props.setFavorites(a,t),n.props.setPopup(!1);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.componentDidMount=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],localStorage.getItem("movies")){e.next=8;break}return e.next=4,y("now_playing");case 4:t=e.sent,localStorage.setItem("movies",JSON.stringify(t)),e.next=9;break;case 8:t=JSON.parse(localStorage.getItem("movies"));case 9:localStorage.setItem("test",JSON.stringify("you got it")),n.props.setMovies(t);case 11:case"end":return e.stop()}},e,this)})),n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.canPopup,r=t.setPopup,o=t.setLoginPrompt;return a.a.createElement("div",{className:"App"},a.a.createElement(h.a,{path:"/login",component:G}),a.a.createElement(h.a,{path:"/The_Best_Movies/create-user",render:function(){return a.a.createElement(V,{setPopup:r})}}),a.a.createElement(h.a,{path:"/The_Best_Movies/",render:function(){return n&&a.a.createElement(M,{setPopup:r,setLoginPrompt:o})}}),a.a.createElement(h.a,{path:"/The_Best_Movies/",render:function(){return a.a.createElement(I,{movies:e.props.movies})}}))}}]),t}(r.Component)),U=Object(d.a)(Object(E.b)(function(e){return{movies:e.movies,canPopup:e.shouldPromptLogin,user:e.user}},function(e){return{setMovies:function(t){return e(k(t))},setUser:function(t){return e(P(t))},setLoginPrompt:function(t){return e(j(t))},setPopup:function(t){return e(x(t))},setFavorites:function(t,n){return e(S(t,n))}}})(L)),R=n(69),D=(n(56),Object(E.b)(function(e){return{movies:e.movies,isPopup:e.isPopup}})(function(e){var t=e.movies,n=e.isPopup,o=t.map(function(e){return a.a.createElement(_,{key:JSON.stringify(e),movie:e})}),c=o.filter(function(e){return e.props.movie.isFavorite}),s=!c.length&&a.a.createElement("h1",{className:"no-faves-notice"},"You have no favorites... yet!"),i=n?"Carousel blur":"Carousel";return a.a.createElement(r.Fragment,null,a.a.createElement("section",{className:i},a.a.createElement(R.a,null,a.a.createElement(h.a,{path:"/favorites",render:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("h2",{className:"favorites-title"},"Favorite Movies"),a.a.createElement("div",{className:"movies-container"},s||c))}}),a.a.createElement(h.a,{path:"/",render:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("h2",{className:"recents-title"},"Recent Movies"),a.a.createElement("div",{className:"movies-container"},o))}}))))})),A=n(16),J=n(66),V=(n(58),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(A.a)({},r,a))},e.handleSubmit=function(){var t=Object(u.a)(i.a.mark(function t(n){var r,a,o,c,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=e.state,a=r.name,o=r.email,c=r.password,s={name:a,email:o,password:c},t.prev=3,t.next=6,O("users/new",s);case 6:e.setState({didPost:!0}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),e.setState({error:"User already exists"});case 12:case"end":return t.stop()}},t,this,[[3,9]])}));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=function(){return e.props.setPopup(!0)},e.state={name:"",email:"",password:"",didPost:!1,error:""},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.didPost,r=t.error;return n?a.a.createElement(J.a,{to:"/login"}):a.a.createElement("div",{className:"CreateUser"},a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("h1",{className:"create-your-account"},"Create Your Account"),a.a.createElement("input",{className:"user-input",placeholder:"Name",required:!0,type:"text",onChange:this.handleChange,name:"name"}),a.a.createElement("input",{className:"user-input",placeholder:"Email",required:!0,type:"email",onChange:this.handleChange,name:"email"}),a.a.createElement("input",{className:"user-input",placeholder:"Password",required:!0,type:"password",onChange:this.handleChange,name:"password"}),a.a.createElement("button",{className:"submit-user",type:"submit"},"Submit"),a.a.createElement(C.a,{to:"/",onClick:function(){return e.props.setPopup(!1)}},"Back"),r&&a.a.createElement("h3",null,r)))}}]),t}(r.Component)),B=(n(60),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(f.a)(t).call(this))).handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(A.a)({},r,a))},e.setUser=Object(u.a)(i.a.mark(function t(){var n,r,a,o,c,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,r=n.password,a=n.email,t.next=3,O("users",{password:r,email:a});case 3:return o=t.sent,c=o.name,s=o.id,localStorage.setItem("users",JSON.stringify({name:c,id:s})),e.props.setUser({name:c,id:s}),t.abrupt("return",s);case 8:case"end":return t.stop()}},t,this)})),e.setUserFavorites=function(){var t=Object(u.a)(i.a.mark(function t(n){var r,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="users/".concat(n,"/favorites"),t.next=3,N(r);case 3:a=t.sent,e.props.setFavorites(a,n);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(u.a)(i.a.mark(function t(n){var r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,e.setUser();case 4:r=t.sent,e.setUserFavorites(r),e.setState({canLogin:!0}),e.props.setPopup(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.setState({error:"That email or password does not exist"});case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),e.componentDidMount=function(){e.props.setPopup(!0),e.props.setLoginPrompt(!1)},e.state={email:"",password:"",error:"",canLogin:!1},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.canLogin,r=t.error;return n?a.a.createElement(J.a,{to:"/"}):a.a.createElement("form",{className:"Login",onSubmit:this.handleSubmit},a.a.createElement("h1",null,"Movie Tracker"),a.a.createElement("h3",null,"Welcome back!"),a.a.createElement("input",{className:"user-input",placeholder:"Email",required:!0,type:"email",onChange:this.handleChange,name:"email"}),a.a.createElement("input",{className:"user-input",placeholder:"Password",required:!0,type:"password",onChange:this.handleChange,name:"password"}),r&&a.a.createElement("h3",null,r),a.a.createElement("button",{className:"sign-in link"},"Sign In"),a.a.createElement("p",null,"New to Movie Tracker?"),a.a.createElement(T.a,{className:"create-user link",to:"/create-user"},"Create Account"),a.a.createElement(C.a,{className:"back-btn",to:"/",onClick:function(){return e.props.setPopup(!1)}},"Go Back"))}}]),t}(r.Component)),G=Object(E.b)(function(e){return{movies:e.movies}},function(e){return{setMovies:function(t){return e(k(t))},setUser:function(t){return e(P(t))},setFavorites:function(t,n){return e(S(t,n))},setLoginPrompt:function(t){return e(j(t))},setPopup:function(t){return e(x(t))}}})(B),q=(n(62),Object(E.b)(function(e){return{user:e.user}},function(e){return{setUser:function(t){return e(P(t))},setMovies:function(t){return e(k(t))},setPopup:function(t){return e(x(t))}}})(function(e){var t=e.user,n=e.setUser,o=e.setMovies,c=e.setPopup,s=function(){var e=Object(u.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(null),e.prev=1,e.t0=o,e.next=5,y("now_playing");case 5:e.t1=e.sent,(0,e.t0)(e.t1),localStorage.removeItem("users"),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),console.log("Error fetching data");case 13:case"end":return e.stop()}},e,this,[[1,10]])}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(r.Fragment,null,t?a.a.createElement("div",{className:"Profile"},a.a.createElement("p",{className:"user-name"},t.name.toUpperCase()),a.a.createElement("button",{className:"logout-btn",onClick:function(){return s()}},"SIGN OUT")):a.a.createElement("div",{className:"Profile"},a.a.createElement(C.a,{to:"/login",className:"login-link",onClick:function(){return c(!0)}},"SIGN IN")))})),X=n(67),Y=n(15),W=n(48),H=n(22),K=[],z=Object(Y.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.id;switch(n){case"SET_MOVIES":return t.movies.map(function(e){return e.movie_id=e.id,e});case"TOGGLE_FAVORITE":return Object(H.a)(e).map(function(e){return e.id===r?Object(W.a)({},e,{isFavorite:!e.isFavorite}):e});case"SET_FAVORITES":return Object(H.a)(e).map(function(e){return e.isFavorite=!1,e.user_id=t.user_id,t.favorites.forEach(function(t){t.movie_id===e.movie_id&&(e.isFavorite=!0)}),e});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.user;default:return e}},shouldPromptLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_PROMPT":return t.bool;default:return e}},isPopup:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_POPUP":return t.bool;default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),Z=Object(Y.c)(z,Q),$=a.a.createElement(E.a,{store:Z},a.a.createElement(X.a,null,a.a.createElement(U,null)));c.a.render($,document.getElementById("root"))}},[[28,2,1]]]);
//# sourceMappingURL=main.ee9f4ddd.chunk.js.map