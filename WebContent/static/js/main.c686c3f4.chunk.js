(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(40),r=a.n(l),s=(a(63),a(7)),i=a(8),c=a(10),u=a(9),d=a(11),m=(a(64),a(121)),h=a(122),p=a(124),g=a(37),_=Object(g.a)(),v=(a(65),a(118)),b=a(120),f=a(114),E=a(117),y=a(113),w=a(52),S=a.n(w),k=a(12),O=a.n(k),C={URL_SERV:"/mep_serveur/"},j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showModal:!1,loggedIn:sessionStorage.getItem("login"),loading:!1,error:null,initialTab:null,recoverPasswordSuccess:null,lblerror_login:"Fatal error",lblerror_register:"Fatal error"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onLogin",value:function(){var e=this,t=this;this.startLoading();var a=document.querySelector("#email").value,n=document.querySelector("#password").value;a&&n?O()({method:"post",url:"http://localhost:8080/mep_serveur/ServletAuth",headers:{crossDomain:!0,"Content-Type":"application/json"},data:{login:a,mdp:n}}).then(function(t){console.log(t),-1===t.data?e.setState({error:!0,lblerror_login:"Identifiant ou mot de passe incorrecte."}):(e.onLoginSuccess(t.data),sessionStorage.setItem("login",t.data),sessionStorage.setItem("email",a))}).catch(function(e){t.setState({error:!0,lblerror_login:"Erreur r\xe9seau("+e+")"})}):this.setState({error:!0,lblerror_login:"Veuillez renseigner Email et mot de passe."}),this.finishLoading()}},{key:"onRegister",value:function(){var e=this,t=this,a=document.querySelector("#login").value,n=document.querySelector("#email").value,o=document.querySelector("#password").value;a&&n&&o?O()({method:"post",url:"http://localhost:8080/mep_serveur/ServletRegister",headers:{crossDomain:!0,"Content-Type":"application/json"},data:{name:a,mdp:o,mail:n}}).then(function(t){console.log(t.data),"exist"===t.data?e.setState({error:!0,lblerror_register:"Un utilisateur a deja cette adresse mail."}):e.closeModal()}).catch(function(e){t.setState({error:!0,lblerror_register:"Erreur r\xe9seau("+e+")"})}):this.setState({error:!0,lblerror_register:"Veuillez remplir tout les champs."})}},{key:"onRecoverPassword",value:function(){document.querySelector("#email").value?this.setState({error:null,recoverPasswordSuccess:!0}):this.setState({error:!0,recoverPasswordSuccess:!1})}},{key:"openModal",value:function(e){var t=this;this.setState({initialTab:e},function(){t.setState({showModal:!0})})}},{key:"onLoginSuccess",value:function(e,t){this.closeModal(),this.setState({loggedIn:e,loading:!1})}},{key:"onLoginFail",value:function(e,t){this.setState({loading:!1,error:t})}},{key:"startLoading",value:function(){this.setState({loading:!0})}},{key:"finishLoading",value:function(){this.setState({loading:!1})}},{key:"afterTabsChange",value:function(){this.setState({error:null,recoverPasswordSuccess:!1})}},{key:"closeModal",value:function(){this.setState({showModal:!1,error:null})}},{key:"deconnexion",value:function(){this.setState({loggedIn:null}),sessionStorage.removeItem("login")}},{key:"render",value:function(){var e=this,t=this.state.loggedIn,a=this.state.loading,n=C.URL_SERV;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{bg:"dark",variant:"dark"},o.a.createElement(v.a.Brand,{href:"https://fr.wikipedia.org/wiki/Bretagne"},"Bec\u2019h dei !"),o.a.createElement(b.a,{className:"mr-auto"},o.a.createElement("li",{className:"limargin"},o.a.createElement(y.a,{to:n+"index"},"Accueil")),o.a.createElement("li",{className:"limargin"},o.a.createElement(y.a,{to:n+"voyages"},"Voyages")),null!=t&&o.a.createElement("div",null,o.a.createElement("li",{className:"limargin"},o.a.createElement(y.a,{to:n+"historique"},"Historique")),o.a.createElement("li",null,o.a.createElement(y.a,{to:n+"panier"},"Mon panier")))),t?o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"log"},t),o.a.createElement(f.a,{onClick:function(){return e.deconnexion()},variant:"outline-info"},"Deconnexion")):o.a.createElement(E.a,{inline:!0},o.a.createElement(f.a,{onClick:function(){return e.openModal()},variant:"outline-info"},"Connexion"))),o.a.createElement("br",null),o.a.createElement(S.a,{visible:this.state.showModal,onCloseModal:this.closeModal.bind(this),loading:a,initialTab:this.state.initialTab,error:this.state.error,tabs:{afterChange:this.afterTabsChange.bind(this),loginLabel:"Connection",registerLabel:"Inscription"},loginError:{label:this.state.lblerror_login},registerError:{label:this.state.lblerror_register},startLoading:this.startLoading.bind(this),finishLoading:this.finishLoading.bind(this),form:{onLogin:this.onLogin.bind(this),onRegister:this.onRegister.bind(this),onRecoverPassword:this.onRecoverPassword.bind(this),recoverPasswordSuccessLabel:this.state.recoverPasswordSuccess?{label:"Un message a \xe9t\xe9 envoy\xe9 sur votre bo\xeete mail."}:null,recoverPasswordAnchor:{label:"Mot de passe oubli\xe9 ?"},loginBtn:{label:"Se connecter"},registerBtn:{label:"S'inscrire"},recoverPasswordBtn:{label:"Envoyer"},loginInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"password",name:"password",placeholder:"Mot de passe"}],registerInputs:[{containerClass:"RML-form-group",label:"Login",type:"text",inputClass:"RML-form-control",id:"login",name:"login",placeholder:"Login"},{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"password",name:"password",placeholder:"Mot de passe"}],recoverPasswordInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"}]}}))}}]),t}(n.Component),L=(a(98),a(42)),I=a(17),M=(a(99),a(100),a(56)),P=a.n(M),R="",N=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={showIndex:!1,showBullets:!0,infinite:!0,showThumbnails:!0,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!1,showNav:!0,isRTL:!1,slideDuration:450,slideInterval:2e3,thumbnailPosition:"bottom",showVideo:{}},e.images=[{thumbnail:"".concat(R,"tdelegende.jpg"),original:"".concat(R,"tdelegende.jpg"),embedUrl:"https://www.youtube.com/embed/nR9eU_tVbxE?autoplay=1&showinfo=0",description:"Render custom slides within the gallery",renderItem:e._renderVideo.bind(Object(I.a)(Object(I.a)(e)))},{original:"".concat(R,"tdelegende.jpg"),thumbnail:"".concat(R,"tdelegende.jpg"),originalClass:"featured-slide",thumbnailClass:"featured-thumb",description:"SALUT"}].concat(e._getStaticImages()),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"_onImageClick",value:function(e){console.debug("clicked on image",e.target,"at index",this._imageGallery.getCurrentIndex())}},{key:"_onImageLoad",value:function(e){console.debug("loaded image",e.target.src)}},{key:"_onSlide",value:function(e){this._resetVideo(),console.debug("slid to index",e)}},{key:"_onPause",value:function(e){console.debug("paused on index",e)}},{key:"_onScreenChange",value:function(e){console.debug("isFullScreen?",!!e)}},{key:"_onPlay",value:function(e){console.debug("playing from index",e)}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(L.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(L.a)({},e,t.target.checked))}},{key:"_handleThumbnailPositionChange",value:function(e){this.setState({thumbnailPosition:e.target.value})}},{key:"_getStaticImages",value:function(){for(var e=[],t=2;t<2;t++)e.push({original:"".concat(R).concat(t,".jpg"),thumbnail:"".concat(R).concat(t,"t.jpg")});return e}},{key:"_resetVideo",value:function(){this.setState({showVideo:{}}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!0})}},{key:"_toggleShowVideo",value:function(e){this.state.showVideo[e]=!Boolean(this.state.showVideo[e]),this.setState({showVideo:this.state.showVideo}),this.state.showVideo[e]&&(this.state.showPlayButton&&this.setState({showGalleryPlayButton:!1}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!1}))}},{key:"_renderVideo",value:function(e){return o.a.createElement("div",{className:"image-gallery-image"},this.state.showVideo[e.embedUrl]?o.a.createElement("div",{className:"video-wrapper"},o.a.createElement("button",{className:"close-video",onClick:this._toggleShowVideo.bind(this,e.embedUrl)}),o.a.createElement("iframe",{title:"Video",width:"560",height:"315",src:e.embedUrl,frameBorder:"0",allowFullScreen:!0})):o.a.createElement("button",{onClick:this._toggleShowVideo.bind(this,e.embedUrl)},o.a.createElement("div",{className:"play-button"}),o.a.createElement("img",{src:e.original,alt:""}),e.description&&o.a.createElement("span",{className:"image-gallery-description",style:{right:"0",left:"initial"}},e.description)))}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"app"},o.a.createElement(P.a,{ref:function(t){return e._imageGallery=t},items:this.images,lazyLoad:!1,onClick:this._onImageClick.bind(this),onImageLoad:this._onImageLoad,onSlide:this._onSlide.bind(this),onPause:this._onPause.bind(this),onScreenChange:this._onScreenChange.bind(this),onPlay:this._onPlay.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showThumbnails:this.state.showThumbnails,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,thumbnailPosition:this.state.thumbnailPosition,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery"}))}}]),t}(n.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("h2",null,"Bienvenue en Bretagne"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(N,null))}}]),t}(n.Component),A=(a(106),a(123)),V=a(119),x=a(115),T=a(55),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={trip_list:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log("getting trip list"),O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/MyServlet7"}).then(function(t){console.log("trip_list ok"),console.log(t);for(var a=C.URL_SERV+"voyagedetail",n=[],l=0;l<t.data.length;l++)n[l]=o.a.createElement(y.a,{to:{pathname:a,state:{trip_id:t.data[l].trip_id}}},o.a.createElement(A.a.Item,null,t.data[l].trip_name));e.setState({trip_list:n})}).catch(function(e){console.log("trip_list ko"),console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Voici nos merveilleux voyages !"),o.a.createElement("div",{className:"listVoyages"},o.a.createElement(V.a.Container,{id:"list-group-tabs-example",defaultActiveKey:"#link1"},o.a.createElement(x.a,null,o.a.createElement(T.a,{sm:4},o.a.createElement(A.a,null,this.state.trip_list))))))}}]),t}(n.Component),F=(a(107),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={trip_name:null,trip_starting_date:null,trip_ending_date:null,trip_price:null,trip_caption:null,trip_photos:null,trip_comments:null},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/MyServlet8",data:this.props.location.state.trip_id}).then(function(t){console.log("select_trip ok"),console.log(t),e.setState({trip_name:t.data.trip_name,trip_starting_date:t.data.trip_starting_date,trip_ending_date:t.data.trip_ending_date,trip_price:t.data.trip_price,trip_caption:t.data.trip_caption})}).catch(function(e){console.log("select_trip ko"),console.log(e)}),O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/MyServlet9",data:this.props.location.state.trip_id}).then(function(t){console.log("trip_photos_list ok"),console.log(t);for(var a=[],n=0;n<t.data.length;n++){var l="./images/"+t.data[n].photo_relative_name;a[n]=o.a.createElement("img",{src:l,alt:"result.data[i].photo_relative_name"})}e.setState({trip_photos:a})}).catch(function(e){console.log("trip_photos_list ko"),console.log(e)}),O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/MyServlet6",data:this.props.location.state.trip_id}).then(function(t){console.log("comment_list ok"),console.log(t);for(var a=[],n=0;n<t.data.length;n++)a[n]=o.a.createElement("div",null,o.a.createElement("h2",null,t.data[n].user_name," - ",t.data[n].comment_date),o.a.createElement("p",null,t.data[n].comment_content)),e.setState({trip_comments:a})}).catch(function(e){console.log("comment_list ko"),console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"plate"},o.a.createElement("p",{className:"script"},o.a.createElement("span",null,this.state.trip_name))),o.a.createElement("div",{className:"descr"},o.a.createElement("br",null),this.state.trip_photos,o.a.createElement("br",null),o.a.createElement("p",{className:"starting_date"},"Debut : ",this.state.trip_starting_date),o.a.createElement("p",{className:"ending_date"},"Fin : ",this.state.trip_ending_date),o.a.createElement("p",{className:"caption"},this.state.trip_caption),o.a.createElement("p",{className:"price"},"Prix : ",this.state.trip_price," \u20ac"),o.a.createElement("h1",null,"Commentaires"),o.a.createElement("div",null,this.state.trip_comments)))}}]),t}(n.Component)),D=(a(108),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"hit-the-floor"},"404"))}}]),t}(n.Component)),G=(a(109),a(116)),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user_id:null,user_orders:null,user_comments:null,user_photos:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/ServletUserId",data:sessionStorage.getItem("email")}).then(function(t){console.log("user_id ok"),console.log(t),e.setState({user_id:t.data}),O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/ServletPaidOrders",data:t.data[0].user_id}).then(function(t){console.log("paid_orders ok"),console.log(t);for(var a=[],n=0;n<t.data.length;n++)a[n]=o.a.createElement("tr",null,o.a.createElement("td",null,n+1),o.a.createElement("td",null,t.data[n].trip_name),o.a.createElement("td",null,t.data[n].trip_starting_date," - ",t.data[n].trip_ending_date),o.a.createElement("td",null,t.data[n].trip_price," \u20ac"));e.setState({user_orders:a})}).catch(function(e){console.log("paid_orders ko"),console.log(e)}),O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/ServletUserComments",data:t.data[0].user_id}).then(function(a){console.log("comments ok"),console.log(t);for(var n=[],l=function(t){var l=[];O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/ServletCommentPhotos",data:a.data[t].comment_id}).then(function(t){console.log("comment_photos_list ok"),console.log(t);for(var a=0;a<t.data.length;a++){var n="./images/"+t.data[a].photo_relative_name;l[a]=o.a.createElement("img",{src:n,alt:"result.data[j].photo_relative_name"})}console.log(l),e.state.user_photos.push(l)}).catch(function(e){console.log("comment_photos_list ko"),console.log(e)}),n[t]=o.a.createElement("div",null,o.a.createElement("p",null,a.data[t].comment_date),o.a.createElement("p",{className:"ttc"},a.data[t].trip_name),o.a.createElement("p",null,a.data[t].comment_content),e.state.user_photos)},r=0;r<a.data.length;r++)l(r);e.setState({user_comments:n})}).catch(function(e){console.log("comments ko"),console.log(e)})}).catch(function(e){console.log("user_id ko"),console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Historique"),o.a.createElement("br",null),o.a.createElement("p",{className:"Title"},"Voyages :"),o.a.createElement("br",null),o.a.createElement(G.a,{striped:!0,bordered:!0,hover:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Nom"),o.a.createElement("th",null,"Date"),o.a.createElement("th",null,"Prix"))),o.a.createElement("tbody",null,this.state.user_orders)),o.a.createElement("br",null),o.a.createElement("p",{className:"Title"},"Commentaires post\xe9s :"),o.a.createElement("br",null),this.state.user_comments,o.a.createElement("br",null))}}]),t}(n.Component),W=(a(110),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user_id:null,user_orders:null},a.payment=a.payment.bind(Object(I.a)(Object(I.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/ServletUserId",data:sessionStorage.getItem("email")}).then(function(t){console.log("user_id ok"),console.log(t),e.setState({user_id:t.data}),O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/ServletUnpaidOrders",data:t.data[0].user_id}).then(function(t){console.log("unpaid_orders ok"),console.log(t);for(var a=[],n=function(n){a[n]=o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"container"},o.a.createElement("h4",null,o.a.createElement("b",null,t.data[n].trip_name)),o.a.createElement("p",null,t.data[n].trip_starting_date," - ",t.data[n].trip_ending_date),o.a.createElement("p",{className:"price"},"Prix : ",t.data[n].trip_price)),o.a.createElement(f.a,{variant:"success",onClick:function(){return e.payment(t.data[n].order_id)}},"Payer"))},l=0;l<t.data.length;l++)n(l);e.setState({user_orders:a})}).catch(function(e){console.log("unpaid_orders ko"),console.log(e)})}).catch(function(e){console.log("user_id ko"),console.log(e)})}},{key:"payment",value:function(e){O()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/ServletPayOrder",data:e}).then(function(e){console.log("pay_order ok"),console.log(e)}).catch(function(e){console.log("pay_order ko"),console.log(e)}),alert("Commande n\xb0"+e+" pay\xe9e avec succ\xe8s."),this.componentWillMount()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Panier"),this.state.user_orders)}}]),t}(n.Component)),z=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=sessionStorage.getItem("login"),t=C.URL_SERV;return o.a.createElement(m.a,{history:_},o.a.createElement("div",null,o.a.createElement(j,null),o.a.createElement(h.a,null,o.a.createElement(p.a,{exact:!0,path:t,component:B}),o.a.createElement(p.a,{path:t+"index",component:B}),o.a.createElement(p.a,{path:t+"voyages",component:U}),o.a.createElement(p.a,{path:t+"voyagedetail",component:F}),null!=e&&o.a.createElement("div",null,o.a.createElement(p.a,{path:t+"historique",component:q}),o.a.createElement(p.a,{path:t+"panier",component:W})),o.a.createElement(p.a,{component:D}))))}}]),t}(n.Component);r.a.render(o.a.createElement(z,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a(112)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.c686c3f4.chunk.js.map