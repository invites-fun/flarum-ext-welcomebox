module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=8)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["utils/formatNumber"]},function(e,t){e.exports=flarum.core.compat["common/helpers/username"]},function(e,t){e.exports=flarum.core.compat["helpers/listItems"]},function(e,t){e.exports=flarum.core.compat["components/AvatarEditor"]},function(e,t){e.exports=flarum.core.compat["components/SignUpModal"]},function(e,t,o){"use strict";o.r(t);var r=o(1),a=o(0),n=o.n(a),s=o(2),c=o.n(s),u=o(4),l=o.n(u),i=o(3),f=o.n(i),p=o(5),d=o.n(p),b=o(6),x=o.n(b),g=o(7),v=o.n(g);n.a.initializers.add("justoverclock/flarum-ext-welcomebox",(function(){Object(r.extend)(c.a.prototype,"sidebarItems",(function(e){var t=n.a.session.user,o=n.a.forum.attribute("baseUrl"),r=t.displayName(),a=o+"/settings";n.a.session.user&&e.add("welcomeBox",m("div",{className:"containerwb"},m("div",{className:"backgrwb"},[m("div",m("a",{href:n.a.route.user(t)},m("div",{className:"avatarwb"},x.a.component({user:t})))),m("div",{className:"contentwb"},m("div",{className:"textinfo"},n.a.translator.trans("flarum-ext-welcomebox.forum.wback"),m("br"),m("strong",l()(t))),m("a",{className:"proflink",href:o+"/u/"+r},n.a.translator.trans("flarum-ext-welcomebox.forum.goToProfile")),m("a",{className:"settinglink",href:a},n.a.translator.trans("flarum-ext-welcomebox.forum.SettingsLink"))),m("div",{className:"iconbadge"},d()(t.badges().toArray())),m(".ulwb",{className:"contentwb"},[m("li",[m("label",{className:"textinfo"},n.a.translator.trans("flarum-ext-welcomebox.forum.npost")),": ",m("strong",{className:"textinfo"},f()(t.commentCount()))]),m("li",[m("label",{className:"textinfo"},n.a.translator.trans("flarum-ext-welcomebox.forum.discussion")),": ",m("strong",{className:"textinfo"},f()(t.discussionCount()))])])])),20)}))})),Object(r.extend)(c.a.prototype,"sidebarItems",(function(e){var t=n.a.forum.attribute("baseUrl")+"/assets/extensions/justoverclock-welcomebox/reg-img.png";n.a.session.user||!0===n.a.forum.attribute("HideGuestBox")&&e.add("welcomeBoxGuest",m("div",{className:"containerwb"},m("div",{className:"backgrwbguest"},[m("div",{className:"guesttext"},n.a.translator.trans("flarum-ext-welcomebox.forum.welcomeguest")),m("p",{className:"guestdesc"},n.a.translator.trans("flarum-ext-welcomebox.forum.notregistered")),m("button",{className:".SplitDropdown-button Button Button--primary hasIcon",type:"button",onclick:function(){return n.a.modal.show(v.a)}},n.a.translator.trans("core.forum.header.sign_up_link")),m("div",{className:"contentwb"},m("div",m("img",{className:"ingwbox",src:t})))])),20)}))}]);
//# sourceMappingURL=forum.js.map