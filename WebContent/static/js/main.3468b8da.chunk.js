(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(39),i=a.n(l),r=(a(63),a(7)),s=a(8),c=a(10),u=a(9),d=a(11),h=(a(64),a(120)),m=a(123),p=a(121),g=a(37),b=Object(g.a)(),v=(a(65),a(117)),f=a(119),_=a(114),y=a(116),E=a(113),w=a(51),S=a.n(w),k=a(20),j=a.n(k),O={URL_SERV:"/mep_serveur/"},C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showModal:!1,loggedIn:sessionStorage.getItem("login"),loading:!1,error:null,initialTab:null,recoverPasswordSuccess:null,lblerror_login:"Fatal error",lblerror_register:"Fatal error"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onLogin",value:function(){var e=this,t=this;this.startLoading();var a=document.querySelector("#email").value,n=document.querySelector("#password").value;a&&n?j()({method:"post",url:"http://localhost:8080/mep_serveur/ServletAuth",headers:{crossDomain:!0,"Content-Type":"application/json"},data:{login:a,mdp:n}}).then(function(t){console.log(t),-1===t.data?e.setState({error:!0,lblerror_login:"Identifiant ou mot de passe incorrecte."}):(e.onLoginSuccess(t.data),sessionStorage.setItem("login",t.data))}).catch(function(e){t.setState({error:!0,lblerror_login:"Erreur r\xe9seau("+e+")"})}):this.setState({error:!0,lblerror_login:"Veuillez renseigner Email et mot de passe."}),this.finishLoading()}},{key:"onRegister",value:function(){var e=this,t=this,a=document.querySelector("#login").value,n=document.querySelector("#email").value,o=document.querySelector("#password").value;a&&n&&o?j()({method:"post",url:"http://localhost:8080/mep_serveur/ServletRegister",headers:{crossDomain:!0,"Content-Type":"application/json"},data:{name:a,mdp:o,mail:n}}).then(function(t){console.log(t.data),"exist"===t.data?e.setState({error:!0,lblerror_register:"Un utilisateur a deja cette adresse mail."}):e.closeModal()}).catch(function(e){t.setState({error:!0,lblerror_register:"Erreur r\xe9seau("+e+")"})}):this.setState({error:!0,lblerror_register:"Veuillez remplir tout les champs."})}},{key:"onRecoverPassword",value:function(){document.querySelector("#email").value?this.setState({error:null,recoverPasswordSuccess:!0}):this.setState({error:!0,recoverPasswordSuccess:!1})}},{key:"openModal",value:function(e){var t=this;this.setState({initialTab:e},function(){t.setState({showModal:!0})})}},{key:"onLoginSuccess",value:function(e,t){this.closeModal(),this.setState({loggedIn:e,loading:!1})}},{key:"onLoginFail",value:function(e,t){this.setState({loading:!1,error:t})}},{key:"startLoading",value:function(){this.setState({loading:!0})}},{key:"finishLoading",value:function(){this.setState({loading:!1})}},{key:"afterTabsChange",value:function(){this.setState({error:null,recoverPasswordSuccess:!1})}},{key:"closeModal",value:function(){this.setState({showModal:!1,error:null})}},{key:"deconnexion",value:function(){this.setState({loggedIn:null}),sessionStorage.removeItem("login")}},{key:"render",value:function(){var e=this,t=this.state.loggedIn,a=this.state.loading,n=O.URL_SERV;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{bg:"dark",variant:"dark"},o.a.createElement(v.a.Brand,{href:"https://fr.wikipedia.org/wiki/Bretagne"},"Bec\u2019h dei !"),o.a.createElement(f.a,{className:"mr-auto"},o.a.createElement("li",{className:"limargin"},o.a.createElement(E.a,{to:n+"index"},"Accueil")),o.a.createElement("li",{className:"limargin"},o.a.createElement(E.a,{to:n+"voyages"},"Voyages")),null!=t&&o.a.createElement("div",null,o.a.createElement("li",{className:"limargin"},o.a.createElement(E.a,{to:n+"historique"},"Historique")),o.a.createElement("li",null,o.a.createElement(E.a,{to:n+"panier"},"Mon panier")))),t?o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"log"},t),o.a.createElement(_.a,{onClick:function(){return e.deconnexion()},variant:"outline-info"},"Deconnexion")):o.a.createElement(y.a,{inline:!0},o.a.createElement(_.a,{onClick:function(){return e.openModal()},variant:"outline-info"},"Connexion"))),o.a.createElement("br",null),o.a.createElement(S.a,{visible:this.state.showModal,onCloseModal:this.closeModal.bind(this),loading:a,initialTab:this.state.initialTab,error:this.state.error,tabs:{afterChange:this.afterTabsChange.bind(this),loginLabel:"Connection",registerLabel:"Inscription"},loginError:{label:this.state.lblerror_login},registerError:{label:this.state.lblerror_register},startLoading:this.startLoading.bind(this),finishLoading:this.finishLoading.bind(this),form:{onLogin:this.onLogin.bind(this),onRegister:this.onRegister.bind(this),onRecoverPassword:this.onRecoverPassword.bind(this),recoverPasswordSuccessLabel:this.state.recoverPasswordSuccess?{label:"Un message a \xe9t\xe9 envoy\xe9 sur votre bo\xeete mail."}:null,recoverPasswordAnchor:{label:"Mot de passe oubli\xe9 ?"},loginBtn:{label:"Se connecter"},registerBtn:{label:"S'inscrire"},recoverPasswordBtn:{label:"Envoyer"},loginInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"password",name:"password",placeholder:"Mot de passe"}],registerInputs:[{containerClass:"RML-form-group",label:"Login",type:"text",inputClass:"RML-form-control",id:"login",name:"login",placeholder:"Login"},{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"password",name:"password",placeholder:"Mot de passe"}],recoverPasswordInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"}]}}))}}]),t}(n.Component),L=(a(98),a(41)),I=a(18),M=(a(99),a(100),a(55)),P=a.n(M),R="",B=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={showIndex:!1,showBullets:!0,infinite:!0,showThumbnails:!0,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!1,showNav:!0,isRTL:!1,slideDuration:450,slideInterval:2e3,thumbnailPosition:"bottom",showVideo:{}},e.images=[{thumbnail:"".concat(R,"tdelegende.jpg"),original:"".concat(R,"tdelegende.jpg"),embedUrl:"https://www.youtube.com/embed/nR9eU_tVbxE?autoplay=1&showinfo=0",description:"Render custom slides within the gallery",renderItem:e._renderVideo.bind(Object(I.a)(Object(I.a)(e)))},{original:"".concat(R,"tdelegende.jpg"),thumbnail:"".concat(R,"tdelegende.jpg"),originalClass:"featured-slide",thumbnailClass:"featured-thumb",description:"SALUT"}].concat(e._getStaticImages()),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"_onImageClick",value:function(e){console.debug("clicked on image",e.target,"at index",this._imageGallery.getCurrentIndex())}},{key:"_onImageLoad",value:function(e){console.debug("loaded image",e.target.src)}},{key:"_onSlide",value:function(e){this._resetVideo(),console.debug("slid to index",e)}},{key:"_onPause",value:function(e){console.debug("paused on index",e)}},{key:"_onScreenChange",value:function(e){console.debug("isFullScreen?",!!e)}},{key:"_onPlay",value:function(e){console.debug("playing from index",e)}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(L.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(L.a)({},e,t.target.checked))}},{key:"_handleThumbnailPositionChange",value:function(e){this.setState({thumbnailPosition:e.target.value})}},{key:"_getStaticImages",value:function(){for(var e=[],t=2;t<2;t++)e.push({original:"".concat(R).concat(t,".jpg"),thumbnail:"".concat(R).concat(t,"t.jpg")});return e}},{key:"_resetVideo",value:function(){this.setState({showVideo:{}}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!0})}},{key:"_toggleShowVideo",value:function(e){this.state.showVideo[e]=!Boolean(this.state.showVideo[e]),this.setState({showVideo:this.state.showVideo}),this.state.showVideo[e]&&(this.state.showPlayButton&&this.setState({showGalleryPlayButton:!1}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!1}))}},{key:"_renderVideo",value:function(e){return o.a.createElement("div",{className:"image-gallery-image"},this.state.showVideo[e.embedUrl]?o.a.createElement("div",{className:"video-wrapper"},o.a.createElement("button",{className:"close-video",onClick:this._toggleShowVideo.bind(this,e.embedUrl)}),o.a.createElement("iframe",{title:"Video",width:"560",height:"315",src:e.embedUrl,frameBorder:"0",allowFullScreen:!0})):o.a.createElement("button",{onClick:this._toggleShowVideo.bind(this,e.embedUrl)},o.a.createElement("div",{className:"play-button"}),o.a.createElement("img",{src:e.original,alt:""}),e.description&&o.a.createElement("span",{className:"image-gallery-description",style:{right:"0",left:"initial"}},e.description)))}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"app"},o.a.createElement(P.a,{ref:function(t){return e._imageGallery=t},items:this.images,lazyLoad:!1,onClick:this._onImageClick.bind(this),onImageLoad:this._onImageLoad,onSlide:this._onSlide.bind(this),onPause:this._onPause.bind(this),onScreenChange:this._onScreenChange.bind(this),onPlay:this._onPlay.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showThumbnails:this.state.showThumbnails,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,thumbnailPosition:this.state.thumbnailPosition,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery"}))}}]),t}(n.Component),V=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("h2",null,"Bienvenue en Bretagne"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(B,null))}}]),t}(n.Component),N=(a(106),a(122)),x=a(118),F=a(115),T=a(54),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={trip_list:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log("getting trip list"),j()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/MyServlet7"}).then(function(t){console.log("trip_list ok"),console.log(t);for(var a=O.URL_SERV+"voyagedetail",n=[],l=0;l<t.data.length;l++)n[l]=o.a.createElement(E.a,{to:{pathname:a,state:{trip_id:t.data[l].trip_id}}},o.a.createElement(N.a.Item,null,t.data[l].trip_name));e.setState({trip_list:n})}).catch(function(e){console.log("trip_list ko"),console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Voici nos merveilleux voyages !"),o.a.createElement("div",{className:"listVoyages"},o.a.createElement(x.a.Container,{id:"list-group-tabs-example",defaultActiveKey:"#link1"},o.a.createElement(F.a,null,o.a.createElement(T.a,{sm:4},o.a.createElement(N.a,null,this.state.trip_list))))))}}]),t}(n.Component),A=(a(107),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={trip_name:null,trip_starting_date:null,trip_ending_date:null,trip_price:null,trip_caption:null,trip_photos:null,trip_comments:null},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;j()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/MyServlet8",data:this.props.location.state.trip_id}).then(function(t){console.log("select_trip ok"),console.log(t),e.setState({trip_name:t.data.trip_name,trip_starting_date:t.data.trip_starting_date,trip_ending_date:t.data.trip_ending_date,trip_price:t.data.trip_price,trip_caption:t.data.trip_caption})}).catch(function(e){console.log("select_trip ko"),console.log(e)}),j()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/MyServlet9",data:this.props.location.state.trip_id}).then(function(t){console.log("trip_photos_list ok"),console.log(t);for(var a=[],n=0;n<t.data.length;n++){var l="./images/"+t.data[n].photo_relative_name;a[n]=o.a.createElement("img",{src:l,alt:"result.data[i].photo_relative_name"})}e.setState({trip_photos:a})}).catch(function(e){console.log("trip_photos_list ko"),console.log(e)}),j()({method:"post",headers:{"Access-Control-Allow-Origin":"*","cross-domain":!0},url:"http://localhost:8080/mep_serveur/MyServlet6",data:this.props.location.state.trip_id}).then(function(e){console.log("comment_list ok"),console.log(e);for(var t=[],a=0;a<e.data.length;a++)t[a]=o.a.createElement("div",null,o.a.createElement("h2",null,e.data[a].user_name," - ",e.data[a].comment_date),o.a.createElement("p",null,e.data[a].comment_content)),this.setState({trip_comments:t})}).catch(function(e){console.log("comment_list ko"),console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"plate"},o.a.createElement("p",{className:"script"},o.a.createElement("span",null,this.state.trip_name))),o.a.createElement("div",{className:"descr"},o.a.createElement("br",null),this.state.trip_photos,o.a.createElement("br",null),o.a.createElement("p",{className:"starting_date"},"Debut : ",this.state.trip_starting_date),o.a.createElement("p",{className:"ending_date"},"Fin : ",this.state.trip_ending_date),o.a.createElement("p",{className:"caption"},this.state.trip_caption),o.a.createElement("p",{className:"price"},"Prix : ",this.state.trip_price," \u20ac"),o.a.createElement("h1",null,"Commentaire"),o.a.createElement("div",null,this.state.trip_comments)))}}]),t}(n.Component)),G=(a(108),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"hit-the-floor"},"404"))}}]),t}(n.Component)),q=(a(109),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Historique !"))}}]),t}(n.Component)),D=(a(110),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Panier !"))}}]),t}(n.Component)),z=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=sessionStorage.getItem("login"),t=O.URL_SERV;return o.a.createElement(h.a,{history:b},o.a.createElement("div",null,o.a.createElement(C,null),o.a.createElement(m.a,null,o.a.createElement(p.a,{exact:!0,path:t,component:V}),o.a.createElement(p.a,{path:t+"index",component:V}),o.a.createElement(p.a,{path:t+"voyages",component:U}),o.a.createElement(p.a,{path:t+"voyagedetail",component:A}),null!=e&&o.a.createElement("div",null,o.a.createElement(p.a,{path:t+"historique",component:q}),o.a.createElement(p.a,{path:t+"panier",component:D})),o.a.createElement(p.a,{component:G}))))}}]),t}(n.Component);i.a.render(o.a.createElement(z,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a(112)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.3468b8da.chunk.js.map