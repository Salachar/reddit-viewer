(this["webpackJsonpredux-cra"]=this["webpackJsonpredux-cra"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={post:"Post_post__1ZCkS",bar:"Post_bar__2ytou",score:"Post_score__3J9Go",thumbnail:"Post_thumbnail__2Mv8T",thumbnail_image:"Post_thumbnail_image__aAX9N",thumbnail_subreddit:"Post_thumbnail_subreddit__2Qpjq",thumbnail_icon:"Post_thumbnail_icon__3_07y",body:"Post_body__1tjlH",body_empty:"Post_body_empty__1ZIC6",title:"Post_title__1sUIr",icon:"Post_icon__2-AFI",submission:"Post_submission__2PLyZ",comments:"Post_comments__1eQ7f",load_comments:"Post_load_comments__3QYMw",comments_wrapper:"Post_comments_wrapper__14RNb",hide:"Post_hide__q3vp2",content_wrapper:"Post_content_wrapper__3IKz1",subreddit_link:"Post_subreddit_link__3RnEj"}},,function(e,t,a){e.exports={video:"Video_video__dTNKK",controls:"Video_controls__2OmsP",control:"Video_control__2X_9_",playpause_icon:"Video_playpause_icon__1NxKN",progress_bar_wrapper:"Video_progress_bar_wrapper__3-sIX",volume_icon:"Video_volume_icon__1AJ08",volume_bar_wrapper:"Video_volume_bar_wrapper__3MFfq",bar_wrapper:"Video_bar_wrapper__f9bSt",bar:"Video_bar__1-hGg",progress:"Video_progress__1rbCl",volume_progress:"Video_volume_progress__1yTqi",current_time:"Video_current_time__3h2EC",duration:"Video_duration__36FOi",media:"Video_media__2ghAf"}},,function(e,t,a){e.exports={main_links:"Header_main_links__3lpuR",listing:"Header_listing__3drQY",disabled:"Header_disabled__3V8xT",search_label:"Header_search_label__1_-nu",search:"Header_search__1zI1g",subreddit_current:"Header_subreddit_current__3kx1v",subreddit_icon:"Header_subreddit_icon__2OO0L",subreddit_title:"Header_subreddit_title__zjJCE",subreddit_search_error:"Header_subreddit_search_error__1-kBW"}},function(e,t,a){e.exports={wrapper:"Comments_wrapper__h6tw3",comments:"Comments_comments__3NgER",comment_even:"Comments_comment_even__2U9nK",comment_odd:"Comments_comment_odd__3wItb",comment:"Comments_comment__3MfqI",author_info:"Comments_author_info__2FkxD",author_is_op:"Comments_author_is_op__wYCnL",score:"Comments_score__1gShr",body:"Comments_body__1B94B",award:"Comments_award__yjfLH",gold:"Comments_gold__6PfTT",silver:"Comments_silver__3ggsF"}},function(e,t,a){e.exports={sidemenu:"SideMenu_sidemenu__2GrsV",title:"SideMenu_title__rRgxI",section:"SideMenu_section__3Wl6k",section_title:"SideMenu_section_title__3EIq3"}},,function(e,t,a){e.exports={thumbnails:"Gallery_thumbnails__3PGUn",thumbnail:"Gallery_thumbnail__2pPAD",selected:"Gallery_selected__x-JBu",selected_image:"Gallery_selected_image__8Pk5t",full_size:"Gallery_full_size__3cThD"}},,function(e,t,a){e.exports={subreddit:"Subreddit_subreddit__2lgPg",checkbox:"Subreddit_checkbox__2UDbU",title:"Subreddit_title__3_NX6",subscribers:"Subreddit_subscribers__2uqEG",checked:"Subreddit_checked__1MytN"}},,function(e,t,a){e.exports={wrapper:"App_wrapper__2CBHV",header:"App_header__SZGgc",articleList:"App_articleList__1F2Yd",sideMenu:"App_sideMenu__3EQTh"}},,function(e,t,a){e.exports={content:"Link_content__10cBw",link:"Link_link__2vhKr",link_address:"Link_link_address__15p7b"}},,,,function(e,t,a){e.exports={media:"Image_media__2V2Pq",media_max:"Image_media_max__99lxE"}},function(e,t,a){e.exports={wrapper:"Posts_wrapper__11-4S",load_more:"Posts_load_more__1Ku_9"}},,,,,function(e,t,a){e.exports={search:"Search_search__19ult"}},function(e,t,a){e.exports={view_subscribed:"Subreddits_view_subscribed__3IgSK"}},function(e,t,a){e.exports={content:"Text_content__1lINs"}},,function(e,t,a){e.exports=a(47)},,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(20),i=a.n(s),c=a(8),o=a(14),d=a(29),u={byID:{}},l=a(6),m={current:{}},_={subscribed:[],subscribed_map:{},search_list:[],data:{},subreddit_search_error:!1},b=Object(o.c)({comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"post":var a=e.byID,r=void 0===a?{}:a;return r[t.payload.data.id]=t.payload.comments,{byID:r};default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"posts":return t.payload.list_append?Object(l.a)(Object(l.a)({},e),{},{current:Object(l.a)(Object(l.a)({},e.current),{},{list_append:!0,list:e.current.list.concat(t.payload.list)})}):Object(l.a)(Object(l.a)({},e),{},{current:t.payload});default:return e}},subreddits:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"subscribe_subreddit":var a={};return(t.payload||[]).forEach((function(e){a[e.id]=e})),Object(l.a)(Object(l.a)({},e),{},{subscribed:t.payload,subscribed_map:a});case"subreddit_data":var r=e.data,n=t.payload;return r[n.name]=n,Object(l.a)(Object(l.a)({},e),{},{data:r});case"search_subreddits":var s=e.data,i=t.payload;return i.forEach((function(e){s[e.name]=e})),Object(l.a)(Object(l.a)({},e),{},{search_list:i,data:s});case"clear_search":return Object(l.a)(Object(l.a)({},e),{},{search_list:[]});case"subreddit_search_error":return Object(l.a)(Object(l.a)({},e),{},{subreddit_search_error:!0});case"subreddit_search_clear":return Object(l.a)(Object(l.a)({},e),{},{subreddit_search_error:!1});case"set_subreddits":return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}}});a(46);var p=a(2),h=a(3),f=a(5),v=a(4);function y(e){return JSON.parse(JSON.stringify(e))}function g(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}function k(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value}function O(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,n){try{fetch(e,a).then((function(e){return e.json()})).then((function(e){try{r(t(e))}catch(a){n(a)}})).catch((function(e){n(e)}))}catch(s){n(s)}}))}var j=a(30),E=a.n(j);function x(e){return e.replace(/&amp;/g,"&")}function N(e){try{!e.author&&e.kind&&(e=e.data.children[0].data);var t=function(e){return Object(l.a)(Object(l.a)({},e),{},{title:(e.title||"").replace(/&amp;/g,"&"),empty:!1,type:"none",content:{},media:{},thumbnail:e.thumbnail.match(/self|spoiler|default/)?null:e.thumbnail,score_display:(t=e.score,t>1e5?Math.floor(t/1e3)+"K":t>1e4?(t/1e3).toFixed(1)+"K":t),submitted_at:function(e){var t=(new Date).getTime()-new Date(1e3*e).getTime();return(t=t/1e3/60)>60?Math.floor(t/60)+" hours":Math.floor(t)+" minutes"}(e.created_utc),awards:(e.all_awardings||[]).map((function(e){return{name:e.name.toLowerCase(),count:e.count,key:"".concat(e.id,"-").concat(g())}}))});var t}(e);if(function(e){return e.is_self}(e))t.type="text",t.content.body=e.selftext,t.content.body_html=e.selftext_html,t.content.body||t.content.body_html||(t.empty=!0);else if(function(e){return!(!e.post_hint||-1===e.post_hint.indexOf("video"))||(!(!e.url||!e.url.match(/.gifv/))||!!(e.url&&e.is_video&&e.is_reddit_media_domain))}(e))t.type="video";else if(function(e){return!(!e.post_hint||-1===e.post_hint.indexOf("image"))||!(!e.url||!e.url.match(/.jpg|.jpeg|.png|.bmp|.gif/))}(e))t.type="image",t.media.image=e.url;else if(function(e){return!!e.is_gallery||!(-1===e.url.indexOf("gallery")||!e.gallery_data)}(e)){t.type="gallery",t.media.images=[];var a=t.media_metadata||{};t.media.images=t.gallery_data.items.map((function(e){return{id:a[e.media_id].id,mime_type:a[e.media_id].m,resolutions:a[e.media_id].p.map((function(e){return{width:e.x,height:e.y,source:x(e.u)}})),thumbnail:{source:x(a[e.media_id].p[0].u)},width:a[e.media_id].s.x,height:a[e.media_id].s.y,source:x(a[e.media_id].s.u)}}))}else e.url&&(t.type="link");return t}catch(r){return console.error(r),null}}function C(e){var t={id:e.name,description:e.public_description,name:e.display_name.toLowerCase(),display_name:e.display_name,url:e.url,banner:e.banner_img,icon:e.icon_img,subscribers:{display:e.subscribers,full:e.subscribers},full_data:e},a=t.subscribers.full;return a>1e6?t.subscribers.display=(a/1e5).toFixed(1)+"M":a>1e5?t.subscribers.display=Math.floor(a/1e3)+"K":a>1e4&&(t.subscribers.display=(a/1e3).toFixed(1)+"K"),t}var w=function(e){return function(t){O("https://www.reddit.com/r/".concat(e.name,"/about.json"),(function(e){return C(e.data)})).then((function(e){t({type:"subreddit_data",payload:e})}))}},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(a,r){var n=t.limit,s=void 0===n?25:n,i=t.count,c=t.after;e.name=e.name||e.title.toLowerCase(),e.type=e.type||"subreddit";var o=y(r().posts.current.subreddit||{}),d=o&&o.name===e.name;if("subreddit"===e.type){var u=y((r().subreddits||{}).data||{})[e.name];u?e=u:a(w(e))}var l="https://www.reddit.com/".concat(e.url,".json?limit=").concat(s);i&&(l+="&count=".concat(i)),c&&(l+="&after=".concat(c)),O(l,(function(t){return{title:e.title||e.name,subreddit:e,list_append:d&&Boolean(c),list:t.data.children.map((function(e){return N(e.data)}))}})).then((function(e){a({type:"posts",payload:e})})).catch((function(e){}))}},P=a(10),T=a(1),M=a.n(T),I=a(11),L=a.n(I),H=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).searchCollection=function(t){var a=e.props,r=a.subscribed,n=a.fetchPosts;r.length&&n({title:"Subscribed",type:"listing",url:"/r/"+r.map((function(e){return e.name})).join("+")})},e.onClick=function(t){e.props.fetchPosts({title:t.currentTarget.dataset.listing,type:"listing",url:t.currentTarget.dataset.listing})},e.onSearch=function(t){var a=e.props,r=a.clearSubredditSearchError,n=a.fetchSubreddit;if(r(),"enter"===t.key.toLowerCase()){var s=t.currentTarget.value;n({title:t.currentTarget.value,type:"subreddit",url:"/r/"+s})}},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.posts,r=void 0===a?{}:a,s=e.subscribed,i=e.subreddits_data,c=e.subreddit_search_error,o=r.title,d=r.subreddit,u=i[(void 0===d?{}:d).name]||{},l=M()(L.a.listing,Object(P.a)({},L.a.disabled,!s.length));return n.a.createElement("header",{className:M()(L.a.listings,t)},n.a.createElement("div",{className:L.a.main_links},n.a.createElement("span",{onClick:this.onClick,"data-listing":"best",className:L.a.listing},"Best"),n.a.createElement("span",{onClick:this.onClick,"data-listing":"top",className:L.a.listing},"Top"),n.a.createElement("span",{onClick:this.onClick,"data-listing":"new",className:L.a.listing},"New"),n.a.createElement("span",{onClick:this.onClick,"data-listing":"hot",className:L.a.listing},"Hot"),n.a.createElement("span",{onClick:this.searchCollection,"data-listing":"subscribed",className:l},"Subscribed"),n.a.createElement("span",{className:L.a.search_label},"/r/"),n.a.createElement("input",{className:L.a.search,spellCheck:"false",onKeyDown:this.onSearch,placeholder:"subreddit"}),c&&n.a.createElement("span",{className:L.a.subreddit_search_error},"SUBREDDIT NOT FOUND")),n.a.createElement("div",{className:L.a.subreddit_current},u.icon&&n.a.createElement("img",{className:L.a.subreddit_icon,src:u.icon,alt:"Subreddit Icon"}),n.a.createElement("span",{className:L.a.subreddit_title},o||"")))}}]),a}(r.Component),D={fetchPosts:S,fetchSubreddit:function(e){return function(t,a){if(e.name=e.title.toLowerCase(),"subreddit"===e.type){var r=y((a().subreddits||{}).data||{})[e.name];r?e=r:t(w(e))}O("https://www.reddit.com/".concat(e.url,".json?limit=25"),(function(t){return{title:e.title||e.name,subreddit:e,list:t.data.children.map((function(e){return N(e.data)}))}})).then((function(e){t({type:"posts",payload:e}),t({type:"subreddit_search_clear"})})).catch((function(e){t({type:"subreddit_search_error"})}))}},clearSubredditSearchError:function(){return function(e){e({type:"subreddit_search_clear"})}}},V=Object(c.b)((function(e){return{subreddits_data:e.subreddits.data,subscribed:e.subreddits.subscribed||[],subreddit_search_error:e.subreddits.subreddit_search_error||!1,posts:e.posts.current}}),D)(H),A=a(13),K=a.n(A),B=a(31),G=a.n(B),R=a(17),F=a.n(R),J=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).onClick=function(t){e.props.fetchPosts(e.props.subreddit)},e.onSubscribe=function(t){var a=t.currentTarget.checked;e.props.subscribeSubreddit(e.props.subreddit,a?"add":"remove")},e}return Object(h.a)(a,[{key:"onCheckboxClick",value:function(e){this.props.subscribeSubreddit(this.props.subreddit,e?"add":"remove")}},{key:"render",value:function(){var e=this,t=this.props,a=t.checked,r=t.subreddit;return n.a.createElement("div",{className:F.a.subreddit},n.a.createElement("div",{className:M()(F.a.checkbox,Object(P.a)({},F.a.checked,a)),onClick:function(){e.onCheckboxClick(!a)}}),n.a.createElement("span",{onClick:this.onClick,className:F.a.title},r.display_name),n.a.createElement("span",{className:F.a.subscribers},r.subscribers.display))}}]),a}(r.Component),q={fetchPosts:S,subscribeSubreddit:function(e,t){return function(a,r){var n=y((r().subreddits||{}).subscribed||[]);"add"===t&&n.push(e),"remove"===t&&(n=n.filter((function(t){return t.id!==e.id}))),a({type:"subscribe_subreddit",payload:n})}}},U=Object(c.b)(null,q)(J),z=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).search=function(e){var t=r.props,a=t.searchSubreddits,n=t.clearSearch,s=e.currentTarget.value;if(!s)return clearTimeout(r.search_timer),r.search_timer=null,void n();"enter"!==e.key.toLowerCase()?(clearTimeout(r.search_timer),r.search_timer=null,r.search_timer=setTimeout((function(){a(s)}),300)):a(s)},r.search_timer=null,r}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.search_list,a=e.subscribed_map;return n.a.createElement("div",{className:K.a.section},n.a.createElement("div",{className:K.a.section_title},"Search:"),n.a.createElement("input",{className:G.a.search,spellCheck:"false",onKeyUp:this.search,placeholder:"subreddit name"}),(t||[]).map((function(e){return n.a.createElement(U,{key:"search_".concat(e.id),checked:!!a[e.id],subreddit:e})})))}}]),a}(r.Component),W={searchSubreddits:function(e){return function(t){var a="https://www.reddit.com/subreddits/search.json?q=".concat(e);O(a,(function(t){return function(e,t){return e.sort((function(e,a){var r=-1!==e.name.indexOf(t),n=-1!==a.name.indexOf(t);return r&&n?a.subscribers.full-e.subscribers.full:r?-1:n?1:a.subscribers.full-e.subscribers.full})),e}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.data;return C(void 0===t?{}:t)}))}(t.data.children),e)})).then((function(e){t({type:"search_subreddits",payload:e})}))}},clearSearch:function(){return function(e){e({type:"clear_search"})}}};z.defaultProps={subreddits:[],subscribed_map:{}};var X=Object(c.b)((function(e){return{search_list:e.subreddits.search_list,subscribed_map:e.subreddits.subscribed_map}}),W)(z),Q=a(32),Y=a.n(Q),Z=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.subscribed,a=e.fetchPosts,r=M()(K.a.section_title,Object(P.a)({},Y.a.view_subscribed,t.length));return n.a.createElement("div",{className:K.a.section},n.a.createElement("div",{className:r,onClick:function(){t.length&&a({title:"Subscribed",type:"listing",url:"/r/"+t.map((function(e){return e.name})).join("+")})}},"Subscribed:"),(this.props.subscribed||[]).map((function(e){return n.a.createElement(U,{key:"subbed_".concat(e.id),checked:!0,subreddit:e})})))}}]),a}(r.Component),$={fetchPosts:S},ee=Object(c.b)((function(e){return{subscribed:e.subreddits.subscribed}}),$)(Z),te=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.className;return n.a.createElement("div",{className:M()(K.a.sidemenu,e)},n.a.createElement("div",{className:K.a.title},"Subreddits"),n.a.createElement(ee,{subscribed:this.props.subscribed}),n.a.createElement(X,null))}}]),a}(r.Component),ae=Object(c.b)((function(e){return{subscribed:e.subreddits.subscribed}}),null)(te),re=a(16),ne=a(34),se=a(25),ie=a.n(se),ce=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={is_media_max:!1},r}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.post,a=this.state.is_media_max;return n.a.createElement("img",{alt:"Parse for text",className:M()(ie.a.media,Object(P.a)({},ie.a.media_max,a)),src:t.media.image,onClick:function(){e.setState({is_media_max:!a})}})}}]),a}(r.Component),oe=a(33),de=a.n(oe),ue=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.post;return n.a.createElement("div",{className:de.a.content,dangerouslySetInnerHTML:{__html:k(e.content.body_html)}})}}]),a}(r.Component),le=a(21),me=a.n(le),_e=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.post;return n.a.createElement("div",{className:me.a.content},n.a.createElement("a",{className:me.a.link,href:e.url,target:"_blank",rel:"noopener noreferrer"},"Go To Article"),n.a.createElement("a",{className:me.a.link_address,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.url))}}]),a}(r.Component),be=a(18);var pe=a(9),he=a.n(pe),fe=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).ref_video=n.a.createRef(),r.ref_audio=n.a.createRef(),r.state={controls_ready:!1,paused:!0,muted:!1,duration:null,current_time:null,volume:.5},r.ready_to_play={video:!1,audio:!1,complete:!1},r.ref_embedded_media=n.a.createRef(),r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){if(this.ref_embedded_media&&this.ref_embedded_media.current){var e=this.ref_embedded_media.current.getElementsByTagName("iframe")[0],t=e.width/e.height;e.width=this.ref_embedded_media.current.clientWidth,e.height=this.ref_embedded_media.current.clientWidth/t}}},{key:"onCanPlay",value:function(e){var t=this.state.volume;this.ready_to_play[e]=!0,this.ready_to_play.video&&this.ready_to_play.audio&&!this.ready_to_play.complete&&(this.ready_to_play.complete=!0,this.ref_audio.current.volume=t,this.setState({controls_ready:!0,duration:this.ref_video.current.duration,current_time:0}))}},{key:"render",value:function(){var e=this,t=this.props.post,a=void 0===t?{}:t,s=this.state,i=s.controls_ready,c=s.paused,o=s.muted,d=s.current_time,u=s.duration,l=s.volume,m=a.secure_media,_=void 0===m?{}:m,b=a.secure_media_embed,p=void 0===b?{}:b;if(_.reddit_video){var h=_.reddit_video.fallback_url,f=function(e){var t=e.split("DASH");return"".concat(t[0],"DASH_audio.mp4")}(h);return n.a.createElement(r.Fragment,null,n.a.createElement("video",{className:he.a.video,ref:this.ref_video,src:h,onCanPlay:function(){e.onCanPlay("video")},onTimeUpdate:function(){e.setState({current_time:e.ref_video.current.currentTime})},onClick:function(){e.ref_video.current.paused?(e.ref_video.current.play(),e.ref_audio.current.play(),e.setState({paused:!1})):(e.ref_video.current.pause(),e.ref_audio.current.pause(),e.setState({paused:!0}))}}),n.a.createElement("audio",{className:he.a.audio,ref:this.ref_audio,src:f,volume:l,onCanPlay:function(){e.onCanPlay("audio")}}),i&&n.a.createElement("div",{className:he.a.controls},n.a.createElement("i",{className:M()(he.a.control,he.a.playpause_icon,{"fas fa-pause":!c,"fas fa-play":c}),onClick:function(){e.ref_video.current.paused?(e.ref_video.current.play(),e.ref_audio.current.play(),e.setState({paused:!1})):(e.ref_video.current.pause(),e.ref_audio.current.pause(),e.setState({paused:!0}))}}),n.a.createElement("div",{className:M()(he.a.bar_wrapper,he.a.progress_bar_wrapper)},n.a.createElement("div",{className:he.a.bar,onClick:function(t){var a=t.currentTarget.getBoundingClientRect().left,r=(t.pageX-a)/t.currentTarget.clientWidth,n=u*r;n<0&&(Object(be.a)("new_time"),n=0),n>e.duration&&(Object(be.a)("new_time"),n=e.duration),e.ref_video.current.currentTime=n,e.ref_audio.current.currentTime=n,e.setState({current_time:n})}},n.a.createElement("div",{className:he.a.progress,style:{width:"".concat(d/u*100,"%")}})),n.a.createElement("div",{className:he.a.current_time},Math.round(d)),n.a.createElement("div",{className:he.a.duration},Math.round(u))),n.a.createElement("i",{className:M()(he.a.control,he.a.volume_icon,{"fas fa-volume-off":!o,"fas fa-volume-mute":o}),onClick:function(){e.ref_audio.current.muted=!e.ref_audio.current.muted,e.setState({muted:e.ref_audio.current.muted})}}),n.a.createElement("div",{className:M()(he.a.bar_wrapper,he.a.volume_bar_wrapper)},n.a.createElement("div",{className:he.a.bar,onClick:function(t){var a=t.currentTarget.getBoundingClientRect().left,r=(t.pageX-a)/t.currentTarget.clientWidth;r<0&&(Object(be.a)("per"),r=0),r>1&&(Object(be.a)("per"),r=1),e.ref_audio.current.volume=r,e.setState({volume:r})}},n.a.createElement("div",{className:M()(he.a.progress,he.a.volume_progress),style:{width:"".concat(100*l,"%")}})))))}if(p.content)return n.a.createElement("div",{className:he.a.media,dangerouslySetInnerHTML:{__html:k(a.secure_media_embed.content)},ref:this.ref_embedded_media})}}]),a}(r.Component),ve=a(15),ye=a.n(ve),ge=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).state={is_media_max:!1,selected_image:null},r}return Object(h.a)(a,[{key:"renderSelectedImage",value:function(){var e=this,t=this.state,a=t.is_media_max,r=t.selected_image;if(!r)return null;var s=r.source;return a||r.resolutions.forEach((function(e){e.height<=window.innerHeight&&(s=e.source)})),n.a.createElement("img",{alt:"Main",className:M()(ye.a.selected_image,Object(P.a)({},ye.a.full_size,a)),src:s,onClick:function(){e.setState({is_media_max:!a})}})}},{key:"render",value:function(){var e=this,t=this.props.post,a=this.state.selected_image;return n.a.createElement("div",{className:ye.a.wrapper},n.a.createElement("div",{className:ye.a.thumbnails},t.media.images.map((function(t,r){console.log(a);var s=M()(ye.a.thumbnail,Object(P.a)({},ye.a.selected,t.id===(a||{}).id));return n.a.createElement("img",{alt:"Thumnbnail ".concat(r),key:"image_key_".concat(t.id),className:s,src:t.thumbnail.source,onClick:function(){e.setState({is_media_max:!1,selected_image:t})}})}))),this.renderSelectedImage())}}]),a}(r.Component),ke=a(12),Oe=a.n(ke),je=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"renderComments",value:function(e){var t=this;if(e&&e.length){var a=this.props.post;return e.map((function(e){return n.a.createElement("div",{key:e.key,className:"".concat(Oe.a.comment," ").concat(e.even?Oe.a.comment_even:Oe.a.comment_odd)},n.a.createElement("div",{className:Oe.a.author_info},n.a.createElement("span",{className:M()(Oe.a.author,Object(P.a)({},Oe.a.author_is_op,a.author===e.author))},e.author),n.a.createElement("span",{className:Oe.a.score},e.score," points"),(e.awards||[]).map((function(e){return e.name.match(/gold|silver/)?n.a.createElement("div",{key:e.key,className:"".concat(Oe.a.award," ").concat(Oe.a[e.name])},e.count):n.a.createElement("div",{key:e.key,className:Oe.a.award},e.name)}))),n.a.createElement("div",{className:Oe.a.body,dangerouslySetInnerHTML:{__html:e.body}}),(e.replies||[]).length>0&&n.a.createElement("div",{className:Oe.a.comments},t.renderComments(e.replies)))}))}}},{key:"render",value:function(){return n.a.createElement("div",{className:Oe.a.wrapper},this.renderComments(this.props.comments))}}]),a}(r.Component),Ee=Object(c.b)(null,null)(je),xe=a(7),Ne=a.n(xe),Ce={link:"far fa-newspaper",text:"far fa-comment-alt",image:"far fa-image",video:"fas fa-video",gallery:"far fa-images"},we={text:"fas fa-align-left",image:"far fa-image",video:"fas fa-video",link:"fas fa-external-link-alt",gallery:"far fa-images",default:"fa-question-circle"},Se=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).onClick=function(){var e=r.state,t=e.is_media_expanded,a=e.is_comments_expanded;r.setState({is_media_expanded:!t,is_comments_expanded:!t&&a})},r.state={is_media_expanded:!1,is_comments_expanded:!1},r.onCommentsClick=r.onCommentsClick.bind(Object(re.a)(r)),r}return Object(h.a)(a,[{key:"onCommentsClick",value:function(){var e=this.props,t=e.post,a=e.fetchPost,r=this.state.is_comments_expanded;r||a(t),this.setState({is_comments_expanded:!r})}},{key:"renderMedia",value:function(e){var t=this.state.is_media_expanded;if(!t)return null;console.log(e);var a=null;switch(e.type){case"video":a=n.a.createElement(fe,{post:e});break;case"image":a=n.a.createElement(ce,{post:e});break;case"text":a=n.a.createElement(ue,{post:e});break;case"link":a=n.a.createElement(_e,{post:e});break;case"gallery":a=n.a.createElement(ge,{post:e});break;default:a=null}return n.a.createElement("div",{className:M()(Ne.a.content_wrapper,Object(P.a)({},Ne.a.hide,!t))},a)}},{key:"renderComments",value:function(e){var t=this,a=this.props.post,r=this.state,s=r.is_media_expanded,i=r.is_comments_expanded;return s&&!i?n.a.createElement("div",{className:Ne.a.comments_wrapper},n.a.createElement("div",{className:Ne.a.load_comments,onClick:function(){t.setState({is_comments_expanded:!i}),t.props.fetchPost(t.props.post)}},"LOAD COMMENTS")):e&&e.length?n.a.createElement("div",{className:M()(Ne.a.comments_wrapper,Object(P.a)({},Ne.a.hide,!i))},n.a.createElement(Ee,{comments:e,post:a})):null}},{key:"renderIcon",value:function(){var e=this.props.post,t=we[e.type]||we.default;return"text"===e.type&&e.empty&&(t=""),n.a.createElement("i",{onClick:this.onClick,className:M()(Ne.a.icon,t)})}},{key:"renderThumbnail",value:function(){var e=this.props,t=e.subreddit,a=void 0===t?{}:t,r=e.post,s=Ne.a.thumbnail;(r.thumbnail||r.media.image)&&(s=M()(s,Ne.a.thumbnail_image));var i=r.thumbnail||r.media.image||a.icon;return i?(i===a.icon&&(s=M()(s,Ne.a.thumbnail_subreddit)),n.a.createElement("div",{className:s,style:{backgroundImage:'url("'.concat(i,'")')}})):n.a.createElement("i",{className:M()(Ne.a.thumbnail_icon,Ce[r.type])})}},{key:"render",value:function(){var e=this.props,t=e.post,a=e.comments,r=e.fetchPosts;if(t){var s=M()(Ne.a.body,Object(P.a)({},Ne.a.body_empty,t.empty));return n.a.createElement("div",{className:Ne.a.post},n.a.createElement("div",{className:Ne.a.bar},n.a.createElement("div",{className:Ne.a.score},t.score_display),this.renderThumbnail(),n.a.createElement("div",{className:s},n.a.createElement("div",{className:Ne.a.title},t.title),this.renderIcon(),n.a.createElement("div",{className:Ne.a.submission},"Submitted ".concat(t.submitted_at," ago by ").concat(t.author," to "),n.a.createElement("span",{className:Ne.a.subreddit_link,onClick:function(){r({title:t.subreddit,type:"subreddit",name:t.subreddit,url:"/r/".concat(t.subreddit)})}},"/r/".concat(t.subreddit))),n.a.createElement("div",{className:Ne.a.comments,onClick:this.onCommentsClick},t.num_comments," comments"))),this.renderMedia(t),this.renderComments(a.byID[t.id]))}}}]),a}(r.Component),Pe={fetchPost:function(e){return function(t){O("https://www.reddit.com/r/".concat(e.subreddit,"/comments/").concat(e.id,".json"),(function(e){var t=Object(ne.a)(e,2),a=t[0],r=t[1],n={data:N(a),comments:[]};return(r=r.data.children).forEach((function(e){!function e(t,a,r){if(t.body){var n={id:t.id,key:"".concat(t.id,"_").concat(g()),author:t.author,body:E()(k(t.body_html)),score:t.score,awards:(t.all_awardings||[]).map((function(e){return{name:e.name.toLowerCase(),count:e.count,key:"".concat(e.id,"-").concat(g())}})),even:r};a.push(n),t.replies&&t.replies.data.children&&(n.replies=[],t.replies.data.children.forEach((function(t){e(t.data,n.replies,!r)})))}}(e.data,n.comments,!0)})),n})).then((function(e){t({type:"post",payload:e})}))}},fetchPosts:S},Te=Object(c.b)((function(e){return{comments:e.comments}}),Pe)(Se),Me=a(26),Ie=a.n(Me),Le=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var r;return Object(p.a)(this,a),(r=t.call(this,e)).onScroll=r.onScroll.bind(Object(re.a)(r)),r}return Object(h.a)(a,[{key:"onScroll",value:function(e){var t=this.props,a=t.posts,r=t.fetchPosts,n=a.list,s=void 0===n?[]:n,i=a.subreddit,c=void 0===i?{}:i,o=e.currentTarget;Math.ceil(o.clientHeight+o.scrollTop+0)>=Math.floor(o.scrollHeight)&&(console.log("END"),r(c,{count:s.length,after:s[s.length-1].name}))}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.posts,r=e.subreddits_data,s=e.fetchPosts,i=a.list,c=void 0===i?[]:i,o=a.subreddit,d=void 0===o?{}:o,u=r[d.name]||{};return n.a.createElement("div",{className:M()(Ie.a.wrapper,t),onScroll:this.onScroll},c.map((function(e){return e&&e.id?n.a.createElement(Te,{key:e.id,subreddit:u,post:e}):null})),c.length&&n.a.createElement("div",{className:Ie.a.load_more,onClick:function(){s(d,{count:c.length,after:c[c.length-1].name})}},"LOAD MORE"))}}]),a}(r.Component),He={fetchPosts:S},De=Object(c.b)((function(e){return{subreddits_data:e.subreddits.data,posts:e.posts.current}}),He)(Le),Ve=a(19),Ae=a.n(Ve),Ke={title:"best",type:"listing",url:"best"},Be=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Ke;try{var t=localStorage.getItem("saved_state");e=(t=JSON.parse(t)).current||Ke}catch(r){console.log(r),e=Ke}this.props.fetchPosts(e);try{var a=localStorage.getItem("saved_state")||null;a=JSON.parse(a),this.props.setSubreddits(a.subreddits)}catch(r){console.log(r)}}},{key:"render",value:function(){return n.a.createElement("div",{className:Ae.a.wrapper},n.a.createElement(V,{className:Ae.a.header}),n.a.createElement(De,{className:Ae.a.articleList}),n.a.createElement(ae,{className:Ae.a.sideMenu}))}}]),a}(r.Component),Ge={fetchPosts:S,setSubreddits:function(e){return function(t){t({type:"set_subreddits",payload:e})}}},Re=Object(c.b)(null,Ge)(Be),Fe=Object(o.d)(b,Object(o.a)(d.a));Fe.subscribe((function(e){var t=Fe.getState(),a=t.posts,r=void 0===a?{}:a,n=t.subreddits,s=void 0===n?{}:n,i=r.current,c=void 0===i?{}:i,o=s.subscribed,d=void 0===o?[]:o,u=s.subscribed_map,l=void 0===u?{}:u,m=JSON.stringify({current:c.subreddit||null,subreddits:{subscribed:d,subscribed_map:l}});localStorage.setItem("saved_state",m)})),i.a.render(n.a.createElement(c.a,{store:Fe},n.a.createElement(Re,null)),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.214e514a.chunk.js.map