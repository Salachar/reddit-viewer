(this["webpackJsonpredux-cra"]=this["webpackJsonpredux-cra"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={comments:"comments_comments__1m4aD",comment_even:"comments_comment_even__2M1eN",comment_odd:"comments_comment_odd__1iw7u",comment:"comments_comment__1Uiu4",author:"comments_author__2AwgY",score:"comments_score__2qYLq",body:"comments_body__25IBj",award:"comments_award__2U-jd",gold:"comments_gold__18ybK",silver:"comments_silver__1ZdjE"}},function(e,t,n){e.exports={background:"article_background__1RxoR",article:"article_article__2XQ13",body:"article_body__1488l",title:"article_title__jkEN2",author:"article_author__3_ZY0",media:"article_media__9CArc",content:"article_content__NXr9P",link:"article_link__1ovlw",link_address:"article_link_address__D7GbD"}},,function(e,t,n){e.exports={sidemenu:"sidemenu_sidemenu__2Gzss",title:"sidemenu_title__fKhVU",section:"sidemenu_section__iCM4A",section_title:"sidemenu_section_title__A_O9T"}},function(e,t,n){e.exports={article:"listing_article__294Gn",score:"listing_score__2ipV6",thumbnail:"listing_thumbnail__2HTA3",body:"listing_body__3ZSuB",title:"listing_title__1ZYR7",submission:"listing_submission__2VXX3",comments:"listing_comments__2TOPQ"}},,,function(e,t,n){e.exports={listing:"header_listing__2r3Gj"}},function(e,t,n){e.exports={subreddit:"subreddit_subreddit__26Bf5",checkbox:"subreddit_checkbox__3n3oI",title:"subreddit_title__Vn-nr",subscribers:"subreddit_subscribers__1zEzW"}},,function(e,t,n){e.exports={articles:"articles_articles__1S7G8",subheader:"articles_subheader__vOXX2",list:"articles_list__2wgCz"}},,,,,,,function(e,t,n){e.exports={main_container:"app_main_container__Grb3i"}},function(e,t,n){e.exports={search:"searchsubreddits_search__3nqLE"}},,function(e,t,n){e.exports=n(38)},,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),c=n.n(i),s=n(1),o=n(12),l=n(23),u=Object(o.c)({article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"article":case"dismiss_article":return{article:t.payload};default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"articles":return{articles:t.payload};default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"search_subreddits":return{subreddits:t.payload};default:return e}},subreddits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"subscribe_subreddit":var n={};return(t.payload||[]).forEach((function(e){n[e.key]=e})),{subscribed:t.payload,subscribed_map:n};default:return e}}});n(37);var d=n(2),m=n(3),b=n(5),p=n(4),h=n(6);function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}function _(e,t){return new Promise((function(n,a){try{fetch(e).then((function(e){return e.json()})).then((function(e){try{n(t(e))}catch(a){console.log(a)}}))}catch(r){console.error(r)}}))}function v(e){try{!e.author&&e.kind&&(e=e.data.children[0].data);var t={id:e.id,key:e.id+"_"+f(),name:e.name,title:(e.title||"").replace(/&amp;/g,"&"),author:e.author,subreddit:e.subreddit,created_at:e.created_utc,submmited:null,permalink:e.permalink,stickied:e.stickied,full_data:e,type:"none",score:{full:e.score,display:e.score},media:{thumbnail:e.thumbnail},comments:{amount:e.num_comments},awards:(e.all_awardings||[]).map((function(e){return{name:e.name.toLowerCase(),count:e.count,key:"".concat(e.id,"-").concat(f())}}))};t.score.full>1e5?t.score.display=Math.floor(t.score.full/1e3)+"K":t.score.full>1e4&&(t.score.display=(t.score.full/1e3).toFixed(1)+"K");var n=1e3*t.created_at,a=(new Date).getTime()-new Date(n).getTime();return a=(a=a/1e3/60)>60?Math.floor(a/60)+" hours":Math.floor(a)+" minutes",t.submmited=a,e.is_self?t.type="text":e.url&&e.is_video&&e.is_reddit_media_domain?(t.type="video",t.media.video=e.secure_media||e.media):e.url&&e.url.match(/.jpg|.jpeg|.png|.bmp|.gif/)?(t.type="image",t.media.image=e.url):e.url&&(t.type="link"),t}catch(r){return console.error(r),null}}var y=function(e){return function(t){_("https://www.reddit.com/".concat(e.url,".json?limit=25"),(function(t){return{title:e.title||e.name,listings:t.data.children.map((function(e){return v(e.data)}))}})).then((function(e){t({type:"articles",payload:e})}))}},g=n(24),k=n.n(g),j=n(14),w=n.n(j),E=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).searchCollection=function(e){var t="/r/";n.props.subscribed.forEach((function(e,a){t+=e.name,a<n.props.subscribed.length-1&&(t+="+")})),n.props.fetchArticles({title:"My Subreddits",url:t})},n.onClick=function(e){n.props.fetchArticles({title:e.currentTarget.dataset.listing,url:e.currentTarget.dataset.listing})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:w.a.listings},r.a.createElement("span",{onClick:this.onClick,"data-listing":"best",className:w.a.listing},"Best"),r.a.createElement("span",{onClick:this.onClick,"data-listing":"top",className:w.a.listing},"Top"),r.a.createElement("span",{onClick:this.onClick,"data-listing":"new",className:w.a.listing},"New"),r.a.createElement("span",{onClick:this.onClick,"data-listing":"hot",className:w.a.listing},"Hot"),r.a.createElement("span",{onClick:this.searchCollection,"data-listing":"hot",className:w.a.listing},"My Subreddits"))}}]),t}(a.Component),O={fetchArticles:function(e){return y(e)}},x=Object(s.b)((function(e){return{subscribed:e.subreddits.subscribed}}),O)(E),N=n(17),C=n.n(N),A=n(26),S=function(e){return function(t){_("https://www.reddit.com/r/".concat(e.subreddit,"/comments/").concat(e.id,".json"),(function(e){var t=Object(A.a)(e,2),n=t[0],a=t[1],r={data:v(n),comments:[]};return(a=a.data.children).forEach((function(e){!function e(t,n,a){if(t.body){var r={id:t.id,key:"".concat(t.id,"_").concat(f()),author:t.author,body:t.body,score:t.score,awards:(t.all_awardings||[]).map((function(e){return{name:e.name.toLowerCase(),count:e.count,key:"".concat(e.id,"-").concat(f())}})),even:a};n.push(r),t.replies&&t.replies.data.children&&(r.replies=[],t.replies.data.children.forEach((function(t){e(t.data,r.replies,!a)})))}}(e.data,r.comments,!0)})),r})).then((function(e){t({type:"article",payload:e})}))}},T=n(11),M=n.n(T),L=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onCommentClick=function(){n.props.fetchArticle(n.props.listing)},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.listing;if(e)return r.a.createElement("div",{onClick:this.onCommentClick,className:M.a.article},r.a.createElement("div",{className:M.a.score},e.score.display),r.a.createElement("div",{className:M.a.thumbnail,style:{backgroundImage:'url("'.concat(e.media.thumbnail,'")')}}),r.a.createElement("div",{className:M.a.body},r.a.createElement("div",{className:M.a.title},e.title),r.a.createElement("div",{className:M.a.submission},"Submitted ".concat(e.submmited," ago by ").concat(e.author," to ").concat(e.subreddit)),r.a.createElement("div",{className:M.a.comments},e.comments.amount," comments")))}}]),t}(a.Component),D=Object(s.b)(null,(function(e){return{fetchArticle:function(t){e(S(t))}}}))(L),B=Object(s.b)((function(e){return{articles:e.articles.articles}}),null)((function(e){var t=e.articles;return r.a.createElement("div",{className:C.a.articles},r.a.createElement("div",{className:C.a.subheader}),r.a.createElement("div",{className:C.a.list},((t||{}).listings||[]).map((function(e){return e&&e.key?r.a.createElement(D,{key:e.key,listing:e}):null}))))})),W=n(10),G=n.n(W),K=function(e,t){return function(n,a){var r,i=(r=(a().subreddits||{}).subscribed||[],JSON.parse(JSON.stringify(r)));"add"===t?i.push(e):i=i.filter((function(t){return t.key!==e.key})),n({type:"subscribe_subreddit",payload:i})}},P=n(15),R=n.n(P),U=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){n.props.fetchArticles(n.props.subreddit)},n.onSubscribe=function(e){var t=e.currentTarget.checked;n.props.subscribeSubreddit(n.props.subreddit,t?"add":"remove")},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:R.a.subreddit},r.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.onSubscribe,className:R.a.checkbox}),r.a.createElement("span",{onClick:this.onClick,className:R.a.title},this.props.subreddit.name),r.a.createElement("span",{className:R.a.subscribers},this.props.subreddit.subscribers.display))}}]),t}(a.Component),X=Object(s.b)(null,(function(e){return{fetchArticles:function(t){return e(y(t))},subscribeSubreddit:function(t,n){return e(K(t,n))}}}))(U),F=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:G.a.section},r.a.createElement("div",{className:G.a.section_title},"Subscribed:"),(this.props.subscribed||[]).map((function(e){return r.a.createElement(X,{key:"subbed_".concat(e.key),checked:!0,subreddit:e})})))}}]),t}(a.Component),q=Object(s.b)((function(e){return{subscribed:e.subreddits.subscribed}}),null)(F),z=n(25),I=n.n(z),J=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).search=function(e){if("enter"===e.key.toLowerCase()){var t=e.currentTarget.value;n.props.searchForSubreddits(t)}},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:G.a.section},r.a.createElement("div",{className:G.a.section_title},"Search:"),r.a.createElement("input",{className:I.a.search,spellCheck:"false",onKeyDown:this.search,placeholder:"subreddit name"}),(this.props.subreddits||[]).map((function(t){return r.a.createElement(X,{key:"search_".concat(t.key),checked:!!e.props.subscribed_map[t.key],subreddit:t})})))}}]),t}(a.Component),V={searchForSubreddits:function(e){return function(e){return function(t){_("https://www.reddit.com/subreddits/search.json?q=".concat(e,"&include_over_18=on"),(function(t){var n=(t.data.children||[]).map((function(e){var t={key:e.data.display_name.toLowerCase()+"_"+(new Date).getTime(),description:e.data.public_description,name:e.data.display_name,name_lower:e.data.display_name.toLowerCase(),url:e.data.url,banner:e.data.banner_img,icon:e.data.icon_img,subscribers:{display:e.data.subscribers,full:e.data.subscribers}},n=t.subscribers.full;return n>1e6?t.subscribers.display=(n/1e5).toFixed(1)+"M":n>1e5?t.subscribers.display=Math.floor(n/1e3)+"K":n>1e4&&(t.subscribers.display=(n/1e3).toFixed(1)+"K"),t}));return n.sort((function(t,n){var a=-1!==t.name_lower.indexOf(e),r=-1!==n.name_lower.indexOf(e);return a&&r?n.subscribers.full-t.subscribers.full:a?-1:r?1:n.subscribers.full-t.subscribers.full})),n})).then((function(e){t({type:"search_subreddits",payload:e})}))}}(e)}};J.defaultProps={subreddits:[],subscribed_map:{}};var Y=Object(s.b)((function(e){return{subreddits:e.search.subreddits,subscribed_map:e.subreddits.subscribed_map}}),V)(J),Z=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:G.a.sidemenu},r.a.createElement("div",{className:G.a.title},"Subreddits"),r.a.createElement(q,{subscribed:this.props.subscribed}),r.a.createElement(Y,null))}}]),t}(a.Component),H=Object(s.b)((function(e){return{subscribed:e.subreddits.subscribed}}),null)(Z),Q=n(7),$=n.n(Q),ee=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderComments",value:function(e){var t=this;if(e&&e.length)return e.map((function(e){return r.a.createElement("div",{key:e.key,className:"".concat($.a.comment," ").concat(e.even?$.a.comment_even:$.a.comment_odd)},r.a.createElement("div",{className:$.a.author},r.a.createElement("span",null,e.author),r.a.createElement("span",{className:$.a.score},e.score," points"),(e.awards||[]).map((function(e){return e.name.match(/gold|silver/)?r.a.createElement("div",{key:e.key,className:"".concat($.a.award," ").concat($.a[e.name])},e.count):r.a.createElement("div",{key:e.key,className:$.a.award},e.name)}))),r.a.createElement("div",{className:$.a.body},e.body),(e.replies||[]).length>0&&r.a.createElement("div",{className:$.a.comments},t.renderComments(e.replies)))}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderComments(this.props.comments))}}]),t}(a.Component),te=Object(s.b)(null,null)(ee),ne=n(8),ae=n.n(ne),re=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onExitClick=function(e,t){t.target.classList.value.match(/background/)&&n.props.dismissArticle()},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderMedia",value:function(e){switch(e.type){case"video":break;case"image":return r.a.createElement("img",{alt:"Parse for text",className:ae.a.media,src:e.media.image});case"text":break;case"link":return r.a.createElement("div",{className:ae.a.content},r.a.createElement("a",{className:ae.a.link,href:e.url,target:"_blank",rel:"noopener noreferrer"},"Go To Article"),r.a.createElement("a",{className:ae.a.link_address,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.url));default:return null}}},{key:"renderBody",value:function(e){return r.a.createElement("div",{className:ae.a.body},r.a.createElement("div",{className:ae.a.title},e.title),r.a.createElement("div",{className:ae.a.author},e.author),this.renderMedia(e))}},{key:"render",value:function(){var e=this.props.data;if(e)return r.a.createElement("div",{onClick:this.onExitClick.bind(this,"showDetails"),className:ae.a.background},r.a.createElement("div",{className:ae.a.article},this.renderBody(e.data),r.a.createElement(te,{key:"comments_".concat(e.key),comments:e.comments})))}}]),t}(a.Component),ie={dismissArticle:function(){return function(e){e({type:"article",payload:null})}}},ce=Object(s.b)(null,ie)(re),se=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchArticles({title:"best",url:"best"})}},{key:"renderArticle",value:function(){if(this.props.article)return r.a.createElement(ce,{data:this.props.article})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(x,null),r.a.createElement("div",{className:k.a.main_container},r.a.createElement(B,null),r.a.createElement(H,null)),this.renderArticle())}}]),t}(a.Component),oe=Object(s.b)((function(e){return{article:e.article.article}}),(function(e){return{fetchArticles:function(t){return e(y(t))}}}))(se),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(s.a,{store:Object(o.d)(u,Object(o.a)(l.a))},r.a.createElement(oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");le?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()}],[[27,1,2]]]);
//# sourceMappingURL=main.1f6fb288.chunk.js.map