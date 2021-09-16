(function(l,d){function a(){this._state=[],this._defaults={classHolder:"sbHolder",classHolderDisabled:"sbHolderDisabled",classSelector:"sbSelector",classOptions:"sbOptions",classGroup:"sbGroup",classSub:"sbSub",classDisabled:"sbDisabled",classToggleOpen:"sbToggleOpen",classToggle:"sbToggle",classFocus:"sbFocus",speed:200,effect:"slide",onChange:null,onOpen:null,onClose:null}}l.extend(a.prototype,{_isOpenSelectbox:function(c){if(!c)return!1;const a=this._getInst(c);return a.isOpen},_isDisabledSelectbox:function(c){if(!c)return!1;const a=this._getInst(c);return a.isDisabled},_attachSelectbox:function(b,c){function e(){let b,e;const f=this.attr("id").split("_")[1];for(b in n._state)b!==f&&n._state.hasOwnProperty(b)&&(e=l("select[sb='"+b+"']")[0],e&&n._closeSelectbox(e))}function f(){const a=!!(arguments[1]&&arguments[1].sub),c=!!(arguments[1]&&arguments[1].disabled);arguments[0].each(function(e){let f;const g=l(this),j=l("<li>");g.is(":selected")&&(m.text(g.text()),s=!0),e===d-1&&j.addClass("last"),g.is(":disabled")||c?(f=l("<span>",{text:g.text()}).addClass(r.settings.classDisabled),a&&f.addClass(r.settings.classSub),f.appendTo(j)):(f=l("<a>",{href:"#"+g.val(),rel:g.val()}).text(g.text()).bind("click.sb",function(e){e&&e.preventDefault&&e.preventDefault();const a=h,c=l(this),d=a.attr("id").split("_")[1];n._changeSelectbox(b,c.attr("rel"),c.text()),n._closeSelectbox(b)}).bind("mouseover.sb",function(){const b=l(this);b.parent().siblings().find("a").removeClass(r.settings.classFocus),b.addClass(r.settings.classFocus)}).bind("mouseout.sb",function(){l(this).removeClass(r.settings.classFocus)}),a&&f.addClass(r.settings.classSub),g.is(":selected")&&f.addClass(r.settings.classFocus),f.appendTo(j)),j.appendTo(p)})}if(this._getInst(b))return!1;let g,m,h,p;const i=l(b);var n=this,r=n._newInst(i),s=!1;const j=i.find("optgroup"),o=i.find("option");var d=o.length;i.attr("sb",r.uid),l.extend(r.settings,n._defaults,c),n._state[r.uid]=!1,i.hide(),g=l("<div>",{id:"sbHolder_"+r.uid,class:r.settings.classHolder,tabindex:i.attr("tabindex")}),m=l("<a>",{id:"sbSelector_"+r.uid,href:"#",class:r.settings.classSelector,click:function(d){d.preventDefault(),e.apply(l(this),[]);const a=l(this).attr("id").split("_")[1];n._state[a]?n._closeSelectbox(b):n._openSelectbox(b)}}),h=l("<a>",{id:"sbToggle_"+r.uid,href:"#",class:r.settings.classToggle,click:function(d){d.preventDefault(),e.apply(l(this),[]);const a=l(this).attr("id").split("_")[1];n._state[a]?n._closeSelectbox(b):n._openSelectbox(b)}}),h.appendTo(g),p=l("<ul>",{id:"sbOptions_"+r.uid,class:r.settings.classOptions,css:{display:"none"}}),i.children().each(function(){let b;const e=l(this),c={};e.is("option")?f(e):e.is("optgroup")&&(b=l("<li>"),l("<span>",{text:e.attr("label")}).addClass(r.settings.classGroup).appendTo(b),b.appendTo(p),e.is(":disabled")&&(c.disabled=!0),c.sub=!0,f(e.find("option"),c))}),s||m.text(o.first().text()),l.data(b,"selectbox",r),g.data("uid",r.uid).bind("keydown.sb",function(b){const c=b.charCode?b.charCode:b.keyCode?b.keyCode:0,d=l(this),e=d.data("uid");var g=d.siblings("select[sb='"+e+"']").data("selectbox");const h=d.siblings(["select[sb='",e,"']"].join("")).get(0),j=d.find("ul").find("a."+g.settings.classFocus);switch(c){case 37:case 38:if(0<j.length){var a;l("a",d).removeClass(g.settings.classFocus),a=j.parent().prevAll("li:has(a)").eq(0).find("a"),0<a.length&&(a.addClass(g.settings.classFocus).focus(),l("#sbSelector_"+e).text(a.text()))}break;case 39:case 40:var a;l("a",d).removeClass(g.settings.classFocus),a=0<j.length?j.parent().nextAll("li:has(a)").eq(0).find("a"):d.find("ul").find("a").eq(0),0<a.length&&(a.addClass(g.settings.classFocus).focus(),l("#sbSelector_"+e).text(a.text()));break;case 13:0<j.length&&n._changeSelectbox(h,j.attr("rel"),j.text()),n._closeSelectbox(h);break;case 9:if(h){var g=n._getInst(h);g&&(0<j.length&&n._changeSelectbox(h,j.attr("rel"),j.text()),n._closeSelectbox(h))}var m=parseInt(d.attr("tabindex"),10);b.shiftKey?m--:m++,l("*[tabindex='"+m+"']").focus();break;case 27:n._closeSelectbox(h);}return b.stopPropagation(),!1}).delegate("a","mouseover",function(){l(this).addClass(r.settings.classFocus)}).delegate("a","mouseout",function(){l(this).removeClass(r.settings.classFocus)}),m.appendTo(g),p.appendTo(g),g.insertBefore(i),l("html").on("mousedown",function(b){b.stopPropagation(),l("select").selectbox("close")}),l([".",r.settings.classHolder,", .",r.settings.classSelector].join("")).mousedown(function(b){b.stopPropagation()})},_detachSelectbox:function(b){const a=this._getInst(b);return!!a&&void(l("#sbHolder_"+a.uid).remove(),l.data(b,"selectbox",null),l(b).show())},_changeSelectbox:function(b,a,g){let d;const h=this._getInst(b);h&&(d=this._get(h,"onChange"),l("#sbSelector_"+h.uid).text(g)),a=a.replace(/\'/g,"\\'"),l(b).find("option[value='"+a+"']").attr("selected",!0),h&&d?d.apply(h.input?h.input[0]:null,[a,h]):h&&h.input&&h.input.trigger("change")},_enableSelectbox:function(b){const a=this._getInst(b);return!!(a&&a.isDisabled)&&void(l("#sbHolder_"+a.uid).removeClass(a.settings.classHolderDisabled),a.isDisabled=!1,l.data(b,"selectbox",a))},_disableSelectbox:function(b){const a=this._getInst(b);return a&&!a.isDisabled&&void(l("#sbHolder_"+a.uid).addClass(a.settings.classHolderDisabled),a.isDisabled=!0,l.data(b,"selectbox",a))},_optionSelectbox:function(b,a,c){const d=this._getInst(b);return!!d&&void(d[a]=c,l.data(b,"selectbox",d))},_openSelectbox:function(b){const c=this._getInst(b);if(!(!c||c.isOpen||c.isDisabled)){const d=l("#sbOptions_"+c.uid),e=parseInt(l(window).height(),10),g=l("#sbHolder_"+c.uid).offset(),h=l(window).scrollTop(),i=d.prev().height(),a=e-(g.top-h)-i/2,f=this._get(c,"onOpen");d.css({top:i+"px",maxHeight:a-i+"px"}),"fade"===c.settings.effect?d.fadeIn(c.settings.speed):d.slideDown(c.settings.speed),l("#sbToggle_"+c.uid).addClass(c.settings.classToggleOpen),this._state[c.uid]=!0,c.isOpen=!0,f&&f.apply(c.input?c.input[0]:null,[c]),l.data(b,"selectbox",c)}},_closeSelectbox:function(b){const a=this._getInst(b);if(a&&a.isOpen){const c=this._get(a,"onClose");"fade"===a.settings.effect?l("#sbOptions_"+a.uid).fadeOut(a.settings.speed):l("#sbOptions_"+a.uid).slideUp(a.settings.speed),l("#sbToggle_"+a.uid).removeClass(a.settings.classToggleOpen),this._state[a.uid]=!1,a.isOpen=!1,c&&c.apply(a.input?a.input[0]:null,[a]),l.data(b,"selectbox",a)}},_newInst:function(c){const a=c[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:a,input:c,uid:Math.floor(99999999*Math.random()),isOpen:!1,isDisabled:!1,settings:{}}},_getInst:function(b){try{return l.data(b,"selectbox")}catch(b){throw"Missing instance data for this selectbox"}},_get:function(a,b){return a.settings[b]===d?this._defaults[b]:a.settings[b]}}),l.fn.selectbox=function(b){const a=Array.prototype.slice.call(arguments,1);return"string"==typeof b&&"isDisabled"==b?l.selectbox["_"+b+"Selectbox"].apply(l.selectbox,[this[0]].concat(a)):"option"==b&&2==arguments.length&&"string"==typeof arguments[1]?l.selectbox["_"+b+"Selectbox"].apply(l.selectbox,[this[0]].concat(a)):this.each(function(){"string"==typeof b?l.selectbox["_"+b+"Selectbox"].apply(l.selectbox,[this].concat(a)):l.selectbox._attachSelectbox(this,b)})},l.selectbox=new a,l.selectbox.version="0.2"})(jQuery),jQuery(document).ready(function(b){b(".moviewppanel-container select").selectbox({effect:"fade"})});