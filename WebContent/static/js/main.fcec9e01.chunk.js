(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(38),i=a.n(o),s=(a(63),a(10)),r=a(11),c=a(13),u=a(12),d=a(14),h=(a(64),a(120)),m=a(118),p=a(119),g=a(36),b=Object(g.a)(),v=(a(65),a(115)),f=a(117),y=a(112),E=a(114),w=a(111),S=a(51),j=a.n(S),k=a(40),C=a.n(k),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showModal:!1,loggedIn:null,loading:!1,error:null,initialTab:null,recoverPasswordSuccess:null,lblerror_login:"Fatal error",lblerror_register:"Fatal error"},console.log(sessionStorage.getItem("login")),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onLogin",value:function(){var e=this,t=this;this.startLoading();var a=document.querySelector("#email").value,n=document.querySelector("#password").value;a&&n?C()({method:"post",url:"http://localhost:8080/mep_serveur/ServletAuth",headers:{crossDomain:!0,"Content-Type":"application/json"},data:{login:a,mdp:n}}).then(function(t){console.log(t),-1===t.data?e.setState({error:!0,lblerror_login:"Identifiant ou mot de passe incorrecte."}):(e.onLoginSuccess(t.data),sessionStorage.setItem("login",t.data))}).catch(function(e){t.setState({error:!0,lblerror_login:"Erreur r\xe9seau("+e+")"})}):this.setState({error:!0,lblerror_login:"Veuillez renseigner Email et mot de passe."}),this.finishLoading()}},{key:"onRegister",value:function(){var e=this,t=this,a=document.querySelector("#login").value,n=document.querySelector("#email").value,l=document.querySelector("#password").value;a&&n&&l?C()({method:"post",url:"http://localhost:8080/mep_serveur/ServletRegister",headers:{crossDomain:!0,"Content-Type":"application/json"},data:{name:a,mdp:l,mail:n}}).then(function(t){console.log(t.data),"exist"===t.data?e.setState({error:!0,lblerror_register:"Un utilisateur a deja cette adresse mail."}):e.closeModal()}).catch(function(e){t.setState({error:!0,lblerror_register:"Erreur r\xe9seau("+e+")"})}):this.setState({error:!0,lblerror_register:"Veuillez remplir tout les champs."})}},{key:"onRecoverPassword",value:function(){document.querySelector("#email").value?this.setState({error:null,recoverPasswordSuccess:!0}):this.setState({error:!0,recoverPasswordSuccess:!1})}},{key:"openModal",value:function(e){var t=this;this.setState({initialTab:e},function(){t.setState({showModal:!0})})}},{key:"onLoginSuccess",value:function(e,t){this.closeModal(),this.setState({loggedIn:e,loading:!1})}},{key:"onLoginFail",value:function(e,t){this.setState({loading:!1,error:t})}},{key:"startLoading",value:function(){this.setState({loading:!0})}},{key:"finishLoading",value:function(){this.setState({loading:!1})}},{key:"afterTabsChange",value:function(){this.setState({error:null,recoverPasswordSuccess:!1})}},{key:"closeModal",value:function(){this.setState({showModal:!1,error:null})}},{key:"deconnexion",value:function(){this.setState({loggedIn:null})}},{key:"render",value:function(){var e=this,t=this.state.loggedIn,a=this.state.loading;return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{bg:"dark",variant:"dark"},l.a.createElement(v.a.Brand,{href:"https://fr.wikipedia.org/wiki/Bretagne"},"Bec\u2019h dei !"),l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement("li",{className:"acceuil"},l.a.createElement(w.a,{to:"/accueil"},"Accueil")),l.a.createElement("li",null,l.a.createElement(w.a,{to:"/voyages"},"Voyages"))),t?l.a.createElement("div",{className:"login"},l.a.createElement("p",null,t),l.a.createElement(y.a,{onclick:"deconnexion()",variant:"outline-info"},"Deconnexion")):l.a.createElement(E.a,{inline:!0},l.a.createElement(y.a,{onClick:function(){return e.openModal()},variant:"outline-info"},"Connexion"))),l.a.createElement("br",null),l.a.createElement(j.a,{visible:this.state.showModal,onCloseModal:this.closeModal.bind(this),loading:a,initialTab:this.state.initialTab,error:this.state.error,tabs:{afterChange:this.afterTabsChange.bind(this),loginLabel:"Connection",registerLabel:"Inscription"},loginError:{label:this.state.lblerror_login},registerError:{label:this.state.lblerror_register},startLoading:this.startLoading.bind(this),finishLoading:this.finishLoading.bind(this),form:{onLogin:this.onLogin.bind(this),onRegister:this.onRegister.bind(this),onRecoverPassword:this.onRecoverPassword.bind(this),recoverPasswordSuccessLabel:this.state.recoverPasswordSuccess?{label:"Un message a \xe9t\xe9 envoy\xe9 sur votre bo\xeete mail."}:null,recoverPasswordAnchor:{label:"Mot de passe oubli\xe9 ?"},loginBtn:{label:"Se connecter"},registerBtn:{label:"S'inscrire"},recoverPasswordBtn:{label:"Envoyer"},loginInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"password",name:"password",placeholder:"Mot de passe"}],registerInputs:[{containerClass:"RML-form-group",label:"Login",type:"text",inputClass:"RML-form-control",id:"login",name:"login",placeholder:"Login"},{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"},{containerClass:"RML-form-group",label:"Mot de passe",type:"password",inputClass:"RML-form-control",id:"password",name:"password",placeholder:"Mot de passe"}],recoverPasswordInputs:[{containerClass:"RML-form-group",label:"Email",type:"email",inputClass:"RML-form-control",id:"email",name:"email",placeholder:"Email"}]}}))}}]),t}(n.Component),_=(a(98),a(41)),O=a(18),I=(a(99),a(100),a(55)),B=a.n(I),P="",M=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={showIndex:!1,showBullets:!0,infinite:!0,showThumbnails:!0,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!1,showNav:!0,isRTL:!1,slideDuration:450,slideInterval:2e3,thumbnailPosition:"bottom",showVideo:{}},e.images=[{thumbnail:"".concat(P,"tdelegende.jpg"),original:"".concat(P,"tdelegende.jpg"),embedUrl:"https://www.youtube.com/embed/nR9eU_tVbxE?autoplay=1&showinfo=0",description:"Render custom slides within the gallery",renderItem:e._renderVideo.bind(Object(O.a)(Object(O.a)(e)))},{original:"".concat(P,"tdelegende.jpg"),thumbnail:"".concat(P,"tdelegende.jpg"),originalClass:"featured-slide",thumbnailClass:"featured-thumb",description:"SALUT"}].concat(e._getStaticImages()),e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.slideInterval===t.slideInterval&&this.state.slideDuration===t.slideDuration||(this._imageGallery.pause(),this._imageGallery.play())}},{key:"_onImageClick",value:function(e){console.debug("clicked on image",e.target,"at index",this._imageGallery.getCurrentIndex())}},{key:"_onImageLoad",value:function(e){console.debug("loaded image",e.target.src)}},{key:"_onSlide",value:function(e){this._resetVideo(),console.debug("slid to index",e)}},{key:"_onPause",value:function(e){console.debug("paused on index",e)}},{key:"_onScreenChange",value:function(e){console.debug("isFullScreen?",!!e)}},{key:"_onPlay",value:function(e){console.debug("playing from index",e)}},{key:"_handleInputChange",value:function(e,t){this.setState(Object(_.a)({},e,t.target.value))}},{key:"_handleCheckboxChange",value:function(e,t){this.setState(Object(_.a)({},e,t.target.checked))}},{key:"_handleThumbnailPositionChange",value:function(e){this.setState({thumbnailPosition:e.target.value})}},{key:"_getStaticImages",value:function(){for(var e=[],t=2;t<2;t++)e.push({original:"".concat(P).concat(t,".jpg"),thumbnail:"".concat(P).concat(t,"t.jpg")});return e}},{key:"_resetVideo",value:function(){this.setState({showVideo:{}}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!0})}},{key:"_toggleShowVideo",value:function(e){this.state.showVideo[e]=!Boolean(this.state.showVideo[e]),this.setState({showVideo:this.state.showVideo}),this.state.showVideo[e]&&(this.state.showPlayButton&&this.setState({showGalleryPlayButton:!1}),this.state.showFullscreenButton&&this.setState({showGalleryFullscreenButton:!1}))}},{key:"_renderVideo",value:function(e){return l.a.createElement("div",{className:"image-gallery-image"},this.state.showVideo[e.embedUrl]?l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("button",{className:"close-video",onClick:this._toggleShowVideo.bind(this,e.embedUrl)}),l.a.createElement("iframe",{title:"Video",width:"560",height:"315",src:e.embedUrl,frameBorder:"0",allowFullScreen:!0})):l.a.createElement("button",{onClick:this._toggleShowVideo.bind(this,e.embedUrl)},l.a.createElement("div",{className:"play-button"}),l.a.createElement("img",{src:e.original,alt:""}),e.description&&l.a.createElement("span",{className:"image-gallery-description",style:{right:"0",left:"initial"}},e.description)))}},{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"app"},l.a.createElement(B.a,{ref:function(t){return e._imageGallery=t},items:this.images,lazyLoad:!1,onClick:this._onImageClick.bind(this),onImageLoad:this._onImageLoad,onSlide:this._onSlide.bind(this),onPause:this._onPause.bind(this),onScreenChange:this._onScreenChange.bind(this),onPlay:this._onPlay.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showThumbnails:this.state.showThumbnails,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,thumbnailPosition:this.state.thumbnailPosition,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),additionalClass:"app-image-gallery"}))}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h2",null,"Bienvenue en Bretagne"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(M,null))}}]),t}(n.Component),V=(a(106),a(116)),x=a(113),N=a(54),T=a(121),F=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Voici nos merveilleux voyages !"),l.a.createElement("div",{className:"listVoyages"},l.a.createElement(V.a.Container,{id:"list-group-tabs-example",defaultActiveKey:"#link1"},l.a.createElement(x.a,null,l.a.createElement(N.a,{sm:4},l.a.createElement(T.a,null,l.a.createElement(w.a,{to:{pathname:"/voyagedetail",state:{title:"Rennes",caption:"87",price:50}}},l.a.createElement(T.a.Item,null,"Rennes")),l.a.createElement(w.a,{to:{pathname:"/voyagedetail",state:{title:"Brest",caption:"Maritime, moderne et dynamique\u2026 Brest est bien plus que ce que vous imaginez ! En perp\xe9tuel mouvement, la m\xe9tropole d\xe9gage un charme ind\xe9niable. Authentique et sympathique, vous allez appr\xe9cier l\u2019atmosph\xe8re simple des lieux tout en profitant de la multitude d\u2019activit\xe9s possibles ! Venez d\xe9couvrir cette m\xe9tropole du bout du monde tourn\xe9e vers l\u2019humain autant que vers l\u2019avenir. ",price:88}}},l.a.createElement(T.a.Item,null,"Brest")),l.a.createElement(w.a,{to:{pathname:"/voyagedetail",state:{title:"Lorient",caption:"89",price:888}}},l.a.createElement(T.a.Item,null,"Lorient")),l.a.createElement(w.a,{to:{pathname:"/voyagedetail",state:{title:"Nantes",caption:"90",price:477}}},l.a.createElement(T.a.Item,null,"Nantes"))))))))}}]),t}(n.Component),q=(a(107),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.location.state.title,t=this.props.location.state.caption,a=this.props.location.state.price;return l.a.createElement("div",null,l.a.createElement("div",{className:"plate"},l.a.createElement("p",{className:"script"},l.a.createElement("span",null,e))),l.a.createElement("div",{className:"descr"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"caption"},t),l.a.createElement("p",{className:"price"},"Prix : ",a," \u20ac")))}}]),t}(n.Component)),G=(a(108),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"hit-the-floor"},"404"))}}]),t}(n.Component)),U=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,{history:b},l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(m.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:R}),l.a.createElement(p.a,{path:"/accueil",component:R}),l.a.createElement(p.a,{path:"/voyages",component:F}),l.a.createElement(p.a,{path:"/voyagedetail",component:q}),l.a.createElement(p.a,{component:G}))))}}]),t}(n.Component);i.a.render(l.a.createElement(U,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a(110)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.fcec9e01.chunk.js.map