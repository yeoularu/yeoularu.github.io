(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/d1K":function(e,a,t){"use strict";t.d(a,"a",(function(){return w}));var c=t("q1tI"),n=t.n(c),l=t("Wbzz"),i=t("iSRb"),s=t.n(i),r=function(e){var a=e.author,t=e.isIndex;return n.a.createElement("div",{className:s.a.author},n.a.createElement(l.Link,{to:"/"},n.a.createElement("img",{src:Object(l.withPrefix)(a.photo),className:s.a.author__photo,width:"75",height:"75",alt:a.name})),!0===t?n.a.createElement("h1",{className:s.a.author__title},n.a.createElement(l.Link,{className:s.a["author__title-link"],to:"/"},a.name)):n.a.createElement("h2",{className:s.a.author__title},n.a.createElement(l.Link,{className:s.a["author__title-link"],to:"/"},a.name)),n.a.createElement("p",{className:s.a.author__subtitle},a.bio))},o=t("WlAH"),m=function(e){var a;switch(e){case"twitter":a=o.a.TWITTER;break;case"github":a=o.a.GITHUB;break;case"vkontakte":a=o.a.VKONTAKTE;break;case"telegram":a=o.a.TELEGRAM;break;case"email":a=o.a.EMAIL;break;case"rss":a=o.a.RSS;break;case"linkedin":a=o.a.LINKEDIN;break;case"instagram":a=o.a.INSTAGRAM;break;case"line":a=o.a.LINE;break;case"facebook":a=o.a.FACEBOOK;break;case"gitlab":a=o.a.GITLAB;break;case"weibo":a=o.a.WEIBO;break;case"codepen":a=o.a.CODEPEN;break;case"youtube":a=o.a.YOUTUBE;break;case"soundcloud":a=o.a.SOUNDCLOUD;break;case"medium":a=o.a.MEDIUM;break;default:a={}}return a},u=function(e,a){var t;switch(e){case"github":t="https://github.com/"+a;break;case"youtube":t="https://www.youtube.com/channel/"+a;break;case"email":t="mailto:"+a;break;default:t=a}return t},C=t("euHg"),h=t.n(C),_=function(e){var a=e.name,t=e.icon;return n.a.createElement("svg",{className:h.a.icon,viewBox:t.viewBox},n.a.createElement("title",null,a),n.a.createElement("path",{d:t.path}))},v=t("aU/I"),E=t.n(v),p=function(e){var a=e.contacts;return n.a.createElement("div",{className:E.a.contacts},n.a.createElement("ul",{className:E.a.contacts__list},Object.keys(a).map((function(e){return a[e]?n.a.createElement("li",{className:E.a["contacts__list-item"],key:e},n.a.createElement("a",{className:E.a["contacts__list-item-link"],href:u(e,a[e]),rel:"noopener noreferrer",target:"_blank"},n.a.createElement(_,{name:e,icon:m(e)}))):null}))))},d=t("Nrk+"),b=t.n(d),L=function(e){var a=e.copyright;return n.a.createElement("div",{className:b.a.copyright},a)},M=t("je8k"),k=t.n(M),N=function(e){var a=e.menu;return n.a.createElement("nav",{className:k.a.menu},n.a.createElement("ul",{className:k.a.menu__list},a.map((function(e){return n.a.createElement("li",{className:k.a["menu__list-item"],key:e.path},n.a.createElement(l.Link,{to:e.path,className:k.a["menu__list-item-link"],activeClassName:k.a["menu__list-item-link--active"]},e.label))}))))},z=t("SySy"),g=t.n(z),f=t("gGy4"),w=function(e){var a=e.isIndex,t=Object(f.b)(),c=t.author,l=t.copyright,i=t.menu;return n.a.createElement("div",{className:g.a.sidebar},n.a.createElement("div",{className:g.a.sidebar__inner},n.a.createElement(r,{author:c,isIndex:a}),n.a.createElement(N,{menu:i}),n.a.createElement(p,{contacts:c.contacts}),n.a.createElement(L,{copyright:l})))}},"Nrk+":function(e,a,t){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,a,t){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var c=t("q1tI"),n=t.n(c),l=t("RBgx"),i=t.n(l),s=function(e){var a=e.title,t=e.children,l=Object(c.useRef)();return Object(c.useEffect)((function(){l.current.scrollIntoView()})),n.a.createElement("div",{ref:l,className:i.a.page},n.a.createElement("div",{className:i.a.page__inner},a&&n.a.createElement("h1",{className:i.a.page__title},a),n.a.createElement("div",{className:i.a.page__body},t)))}},SySy:function(e,a,t){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},WlAH:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return n}));var c={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},TELEGRAM:{path:"M27.563 0.172c0.328 0.234 0.484 0.609 0.422 1l-4 24c-0.047 0.297-0.234 0.547-0.5 0.703-0.141 0.078-0.313 0.125-0.484 0.125-0.125 0-0.25-0.031-0.375-0.078l-7.078-2.891-3.781 4.609c-0.187 0.234-0.469 0.359-0.766 0.359-0.109 0-0.234-0.016-0.344-0.063-0.391-0.141-0.656-0.516-0.656-0.938v-5.453l13.5-16.547-16.703 14.453-6.172-2.531c-0.359-0.141-0.594-0.469-0.625-0.859-0.016-0.375 0.172-0.734 0.5-0.922l26-15c0.156-0.094 0.328-0.141 0.5-0.141 0.203 0 0.406 0.063 0.562 0.172z",viewBox:"0 0 28 28"},VKONTAKTE:{path:"M29.953 8.125c0.234 0.641-0.5 2.141-2.344 4.594-3.031 4.031-3.359 3.656-0.859 5.984 2.406 2.234 2.906 3.313 2.984 3.453 0 0 1 1.75-1.109 1.766l-4 0.063c-0.859 0.172-2-0.609-2-0.609-1.5-1.031-2.906-3.703-4-3.359 0 0-1.125 0.359-1.094 2.766 0.016 0.516-0.234 0.797-0.234 0.797s-0.281 0.297-0.828 0.344h-1.797c-3.953 0.25-7.438-3.391-7.438-3.391s-3.813-3.938-7.156-11.797c-0.219-0.516 0.016-0.766 0.016-0.766s0.234-0.297 0.891-0.297l4.281-0.031c0.406 0.063 0.688 0.281 0.688 0.281s0.25 0.172 0.375 0.5c0.703 1.75 1.609 3.344 1.609 3.344 1.563 3.219 2.625 3.766 3.234 3.437 0 0 0.797-0.484 0.625-4.375-0.063-1.406-0.453-2.047-0.453-2.047-0.359-0.484-1.031-0.625-1.328-0.672-0.234-0.031 0.156-0.594 0.672-0.844 0.766-0.375 2.125-0.391 3.734-0.375 1.266 0.016 1.625 0.094 2.109 0.203 1.484 0.359 0.984 1.734 0.984 5.047 0 1.062-0.203 2.547 0.562 3.031 0.328 0.219 1.141 0.031 3.141-3.375 0 0 0.938-1.625 1.672-3.516 0.125-0.344 0.391-0.484 0.391-0.484s0.25-0.141 0.594-0.094l4.5-0.031c1.359-0.172 1.578 0.453 1.578 0.453z",viewBox:"0 0 31 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"},RSS:{path:"M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z",viewBox:"0 0 22 28"},LINKEDIN:{path:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",viewBox:"0 0 24 24"},INSTAGRAM:{path:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",viewBox:"0 0 24 24"},LINE:{path:"M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065l-.001-.001-.002-.002-.001-.001-.003-.003c-.04-.042-.065-.099-.065-.161v-5.229c0-.129.104-.234.233-.234h.842zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065l-.003-.004-.003-.003c-.04-.042-.066-.099-.066-.161v-5.229c0-.062.025-.119.065-.161l.004-.004.003-.003c.042-.04.099-.066.162-.066h3.363zm-10.442.001c.129 0 .234.104.234.233v5.229c0 .128-.105.233-.234.233h-.842c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.842zm2.127 0h.008l.012.001.013.001.01.001.013.003.008.003.014.004.008.003.013.006.007.003.013.007.007.004.012.009.006.004.013.011.004.004.014.014.002.002.018.023 2.396 3.236v-3.106c0-.129.105-.233.234-.233h.841c.13 0 .234.104.234.233v5.229c0 .128-.104.233-.234.233h-.841l-.06-.008-.004-.001-.015-.005-.007-.003-.012-.004-.011-.006-.007-.003-.014-.009-.002-.002-.06-.058-2.399-3.24v3.106c0 .128-.104.233-.234.233h-.841c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.841z",viewBox:"0 0 24 24"},GITLAB:{path:"M 38.011719 4 C 37.574219 3.996094 37.183594 4.273438 37.046875 4.691406 L 32.074219 20 L 17.925781 20 L 12.953125 4.691406 C 12.820313 4.289063 12.449219 4.011719 12.023438 4 C 11.597656 3.992188 11.214844 4.25 11.0625 4.648438 L 5.070313 20.640625 C 5.066406 20.640625 5.066406 20.644531 5.0625 20.648438 L 2.0625 28.648438 C 1.90625 29.070313 2.046875 29.542969 2.414063 29.808594 L 24.40625 45.800781 L 24.410156 45.808594 C 24.414063 45.808594 24.414063 45.808594 24.414063 45.8125 C 24.425781 45.820313 24.441406 45.828125 24.453125 45.835938 C 24.46875 45.84375 24.480469 45.855469 24.496094 45.863281 C 24.5 45.863281 24.5 45.867188 24.503906 45.867188 C 24.503906 45.867188 24.507813 45.871094 24.511719 45.871094 C 24.515625 45.875 24.519531 45.878906 24.527344 45.878906 C 24.53125 45.882813 24.539063 45.886719 24.542969 45.890625 C 24.5625 45.898438 24.585938 45.910156 24.609375 45.917969 C 24.609375 45.917969 24.609375 45.917969 24.609375 45.921875 C 24.632813 45.929688 24.65625 45.9375 24.675781 45.945313 C 24.679688 45.945313 24.679688 45.945313 24.683594 45.949219 C 24.699219 45.953125 24.714844 45.957031 24.734375 45.964844 C 24.742188 45.964844 24.75 45.96875 24.761719 45.96875 C 24.761719 45.972656 24.761719 45.972656 24.761719 45.96875 C 24.78125 45.976563 24.800781 45.980469 24.820313 45.984375 C 24.847656 45.988281 24.871094 45.992188 24.898438 45.996094 C 24.9375 45.996094 24.980469 46 25.019531 46 C 25.058594 45.996094 25.09375 45.996094 25.128906 45.988281 C 25.144531 45.988281 25.15625 45.988281 25.171875 45.984375 C 25.171875 45.984375 25.175781 45.984375 25.179688 45.984375 C 25.1875 45.980469 25.191406 45.980469 25.199219 45.980469 C 25.203125 45.980469 25.207031 45.976563 25.214844 45.976563 C 25.222656 45.972656 25.234375 45.972656 25.242188 45.96875 C 25.257813 45.964844 25.269531 45.960938 25.28125 45.957031 C 25.289063 45.957031 25.292969 45.957031 25.296875 45.953125 C 25.300781 45.953125 25.304688 45.953125 25.308594 45.953125 C 25.324219 45.945313 25.34375 45.9375 25.359375 45.933594 C 25.378906 45.925781 25.394531 45.917969 25.410156 45.910156 C 25.414063 45.910156 25.414063 45.910156 25.417969 45.90625 C 25.421875 45.90625 25.425781 45.90625 25.429688 45.902344 C 25.4375 45.898438 25.445313 45.894531 25.453125 45.890625 C 25.476563 45.878906 25.496094 45.867188 25.515625 45.855469 C 25.523438 45.851563 25.527344 45.847656 25.53125 45.84375 C 25.535156 45.84375 25.539063 45.839844 25.542969 45.839844 C 25.558594 45.828125 25.574219 45.820313 25.589844 45.808594 L 25.597656 45.796875 L 47.589844 29.808594 C 47.953125 29.542969 48.09375 29.070313 47.9375 28.648438 L 44.945313 20.675781 C 44.941406 20.667969 44.9375 20.65625 44.9375 20.648438 L 38.9375 4.648438 C 38.789063 4.261719 38.425781 4.003906 38.011719 4 Z M 8.066406 22 L 16.472656 22 L 22.328125 40.015625 Z M 33.527344 22 L 41.933594 22 L 27.671875 40.015625 Z M 6.3125 23.007813 L 19.6875 39.902344 L 4.203125 28.640625 Z M 43.6875 23.007813 L 45.796875 28.640625 L 30.3125 39.902344 Z",viewBox:"0 0 50 50"},WEIBO:{path:"M 16.28125 3.8125 C 16.054688 3.828125 15.816406 3.859375 15.59375 3.90625 C 15.179688 3.996094 14.910156 4.402344 15 4.8125 C 15.085938 5.226563 15.492188 5.496094 15.90625 5.40625 C 17.179688 5.136719 18.566406 5.53125 19.5 6.5625 C 20.433594 7.597656 20.679688 9.011719 20.28125 10.25 C 20.152344 10.652344 20.378906 11.089844 20.78125 11.21875 C 21.183594 11.347656 21.617188 11.121094 21.75 10.71875 C 22.3125 8.976563 21.96875 7.015625 20.65625 5.5625 C 19.671875 4.46875 18.296875 3.875 16.9375 3.8125 C 16.710938 3.800781 16.507813 3.796875 16.28125 3.8125 Z M 10.0625 6.09375 C 8.667969 6.242188 6.699219 7.332031 4.96875 9.0625 C 3.082031 10.949219 2 12.957031 2 14.6875 C 2 17.996094 6.226563 20 10.375 20 C 15.8125 20 19.4375 16.820313 19.4375 14.3125 C 19.4375 12.796875 18.179688 11.949219 17.03125 11.59375 C 16.75 11.507813 16.539063 11.464844 16.6875 11.09375 C 17.007813 10.289063 17.066406 9.589844 16.71875 9.09375 C 16.070313 8.164063 14.253906 8.210938 12.21875 9.0625 C 12.21875 9.0625 11.585938 9.351563 11.75 8.84375 C 12.0625 7.835938 12.019531 6.988281 11.53125 6.5 C 11.1875 6.152344 10.695313 6.027344 10.0625 6.09375 Z M 16.8125 6.5 C 16.589844 6.488281 16.375 6.515625 16.15625 6.5625 C 15.800781 6.636719 15.578125 7.019531 15.65625 7.375 C 15.734375 7.730469 16.082031 7.953125 16.4375 7.875 C 16.863281 7.785156 17.34375 7.902344 17.65625 8.25 C 17.96875 8.597656 18.042969 9.054688 17.90625 9.46875 C 17.792969 9.816406 17.964844 10.199219 18.3125 10.3125 C 18.660156 10.421875 19.046875 10.253906 19.15625 9.90625 C 19.429688 9.058594 19.265625 8.085938 18.625 7.375 C 18.144531 6.84375 17.476563 6.53125 16.8125 6.5 Z M 10.8125 10.90625 C 13.582031 11.003906 15.8125 12.378906 16 14.28125 C 16.214844 16.457031 13.71875 18.484375 10.40625 18.8125 C 7.09375 19.140625 4.214844 17.640625 4 15.46875 C 3.785156 13.292969 6.316406 11.265625 9.625 10.9375 C 10.039063 10.898438 10.417969 10.890625 10.8125 10.90625 Z M 8.9375 13 C 7.804688 13.101563 6.734375 13.75 6.25 14.6875 C 5.589844 15.964844 6.242188 17.378906 7.75 17.84375 C 9.308594 18.324219 11.140625 17.597656 11.78125 16.21875 C 12.410156 14.871094 11.605469 13.472656 10.0625 13.09375 C 9.691406 13 9.316406 12.964844 8.9375 13 Z M 8.21875 15.0625 C 8.351563 15.066406 8.472656 15.109375 8.59375 15.15625 C 9.082031 15.355469 9.234375 15.878906 8.9375 16.34375 C 8.632813 16.804688 7.988281 17.027344 7.5 16.8125 C 7.019531 16.601563 6.882813 16.074219 7.1875 15.625 C 7.414063 15.289063 7.824219 15.058594 8.21875 15.0625 Z",viewBox:"2 2 19 19"},CODEPEN:{path:"M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z",viewBox:"0 0 24 24"},YOUTUBE:{path:"M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z",viewBox:"0 0 24 24"},SOUNDCLOUD:{path:"M 14.5 6 C 12.601563 6 11 6.90625 10 8.40625 L 10 17 L 20.5 17 C 22.398438 17 24 15.398438 24 13.5 C 24 11.601563 22.398438 10 20.5 10 C 20.300781 10 20.011719 9.992188 19.8125 10.09375 C 19.210938 7.695313 17 6 14.5 6 Z M 8 8 L 8 17 L 9 17 L 9 8.09375 C 8.699219 7.992188 8.300781 8 8 8 Z M 7 8.09375 C 6.601563 8.195313 6.300781 8.398438 6 8.5 L 6 17 L 7 17 Z M 5 9.40625 C 4.5 9.90625 4.195313 10.488281 4.09375 11.1875 L 4 11.1875 L 4 17 L 5 17 Z M 3 11 C 2.601563 11 2.300781 11.085938 2 11.1875 L 2 16.8125 C 2.300781 16.914063 2.601563 17 3 17 Z M 1 11.8125 C 0.398438 12.3125 0 13.101563 0 14 C 0 14.898438 0.398438 15.6875 1 16.1875 Z",viewBox:"0 0 24 24"},MEDIUM:{path:"M2.846 6.887a.928.928 0 00-.303-.784l-2.24-2.7V3h6.958l5.378 11.795L17.367 3H24v.403L22.084 5.24a.561.561 0 00-.213.538v13.498a.56.56 0 00.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537V8.321l-5.389 13.688h-.728L4.28 8.321v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V6.887z",viewBox:"0 0 24 24"}},n={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"}},"aU/I":function(e,a,t){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,a,t){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,a,t){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,a,t){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}}}]);
//# sourceMappingURL=20e19934c602d69589a9213124171ceb5d7986a3-6441973d3fd9aed12dad.js.map