(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{22:function(e,t,a){e.exports={ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ",ImageGalleryItem:"ImageGallery_ImageGalleryItem__30xkQ"}},24:function(e,t,a){e.exports={notification:"Notification_notification__1C7Ma"}},26:function(e,t,a){e.exports={loader:"Loader_loader__1j2Bs"}},27:function(e,t,a){e.exports=a(71)},32:function(e,t,a){},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=(a(32),a(3)),i=a(4),s=a(6),u=a(5),m=(a(11),a(21)),h=a.n(m),g="https://pixabay.com/api/?q=",d="image_type=photo&orientation=horizontal&per_page=12",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"flower",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return h.a.get("".concat(g).concat(e,"&page=").concat(t,"&key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-03-image-finder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY,"&").concat(d)).then((function(e){return e.data.hits}))},p=a(22),_=a.n(p),v=function(e){var t=e.item,a=e.onClickImage;return r.a.createElement("img",{onClick:a,src:t.webformatURL,"data-src":t.largeImageURL,alt:"",className:_.a.ImageGalleryItemImage})},y=a(23),S=a.n(y),b=function(e){var t=e.items,a=e.onClickImage;return r.a.createElement("ul",{className:S.a.ImageGallery},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(v,{item:e,onClickImage:a}))})))},I=a(7),E=a.n(I),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleInputChange=function(t){e.setState({searchValue:t.target.value})},e.handleSubmit=function(t){var a=e.props.onSubmit,n=e.state.searchValue;t.preventDefault(),a(n),e.resetForm()},e.resetForm=function(){e.setState({searchValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchValue;return r.a.createElement("header",{className:E.a.Searchbar},r.a.createElement("form",{className:E.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("input",{className:E.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInputChange}),r.a.createElement("button",{type:"submit",className:E.a.SearchFormButton},r.a.createElement("span",{className:E.a.SearchFormButtonLabel},"Search"))))}}]),a}(n.Component),C=a(24),k=a.n(C),M=function(e){var t=e.message;return r.a.createElement("div",{className:k.a.notification},r.a.createElement("h1",null,"Oops : ",t,"..."))},P=a(8),B=a.n(P),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).overlayRef=Object(n.createRef)(),e.hadleKeypress=function(t){var a=e.props.onCloseModal;"Escape"===t.code&&a()},e.handleOverlayCLick=function(t){var a=e.props.onCloseModal;t.target===e.overlayRef.current&&a()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hadleKeypress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hadleKeypress)}},{key:"render",value:function(){var e=this.props.url;return r.a.createElement("div",{className:B.a.Overlay,ref:this.overlayRef,onClick:this.handleOverlayCLick},r.a.createElement("div",{className:B.a.Modal},r.a.createElement("img",{src:e,alt:"",className:B.a.image})))}}]),a}(n.Component),L=a(9),j=a.n(L),F=function(e){var t=e.title,a=e.OnClickButton,n=e.IsDisadled,o=n?j.a.disabled:j.a.Button;return r.a.createElement("div",{className:j.a.container},r.a.createElement("button",{type:"button",className:o,onClick:a,disabled:n},t))};F.defaultProps={OnClickButton:null,IsDisadled:!1};var N=F,D=a(25),x=a.n(D),G=a(26),R=a.n(G),T=function(){return r.a.createElement("div",{className:R.a.loader},r.a.createElement(x.a,{type:"ThreeDots",color:"#403a39",height:100,width:100,timeout:5e3}))},U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,isLoading:!1,largeImage:null,currentQuery:"",currentPage:1,isLastPage:!1},e.fetchImages=function(t,a){e.setState({isLoading:!0}),f(t,a).then((function(t){var a=e.state.currentPage;e.setState((function(e){return{isLastPage:t.length>0&&t.length<12||!1,images:e.images.concat(t)}})),a>1&&e.scrollPage()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.onSubmit=function(t){e.updateCurrentQueryParams(t)},e.closeModal=function(){e.setState({largeImage:null})},e.getUrlForModal=function(t){var a=t.target.dataset.src;e.setState({largeImage:a})},e.scrollPage=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.OnloadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.updateCurrentQueryParams=function(t){e.setState({images:[],currentQuery:t,currentPage:1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({currentQuery:"skywalker"})}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.currentPage,r=a.currentQuery;t.currentPage===n&&t.currentQuery===r||this.fetchImages(r,n)}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,o=e.largeImage,c=e.isLastPage,l=!c&&!t.length<1&&!n&&!a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{onSubmit:this.onSubmit}),n&&r.a.createElement(M,{message:n.message}),o&&r.a.createElement(w,{url:o,onCloseModal:this.closeModal}),t.length>0&&r.a.createElement(b,{items:t,onClickImage:this.getUrlForModal}),l&&r.a.createElement(N,{title:"Load More",OnClickButton:this.OnloadMore}),c&&!a&&r.a.createElement(N,{title:"Sorry, that's all",IsDisadled:!0}),t.length<1&&r.a.createElement(M,{message:"Images not found,try something else"}),a&&r.a.createElement(T,null))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT",image:"Modal_image__1cHuD"}},9:function(e,t,a){e.exports={container:"Button_container__2Mo5u",Button:"Button_Button__3R1xi",disabled:"Button_disabled__2c3jr Button_Button__3R1xi"}}},[[27,1,2]]]);
//# sourceMappingURL=main.9b362f41.chunk.js.map