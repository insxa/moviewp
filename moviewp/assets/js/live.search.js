jQuery(document).ready(function(i){let s;const e=(s=0,function(e,a){clearTimeout(s),s=setTimeout(e,a)});let a=!1;i('input[name="s"]').on("input",function(){var r=this.value;e(function(){return r.length<=2?(i(moviewpSearch.area).hide(),void i(moviewpSearch.form).find("#searchform > i").removeClass("fa fa-search").removeClass("")):void(a||(a=!0,i(moviewpSearch.form).find("#searchform > i").addClass("fa fa-refresh").addClass(""),i(moviewpSearch.area).find("ul").addClass("process").addClass("noselect"),i.ajax({type:"GET",url:moviewpSearch.api,data:"keyword="+r+"&nonce="+moviewpSearch.nonce,dataType:"json",success:function(e){if(e.error)i(moviewpSearch.area).hide();else{i(moviewpSearch.area).show();var a='<span class="icon-search-1">'+r+"</span>",a='<li class="ctsx"><a class="more" href="javascript:;" onclick="document.getElementById(\'searchform\').submit();">'+moviewpSearch.more.replace("%s",a)+"</a></li>";moreText2="";const s=[];i.each(e,function(e,a){name="",date="",imdb="",!1!==a.extra.date&&(date="<span class='release'>("+a.extra.date+")</span>"),!1!==a.extra.names&&(name=a.extra.names),!1!==a.extra.imdb&&(imdb="<div class='imdb'><span class='fa fa-star'></span> "+a.extra.imdb+"</div>"),s.push("<li id='"+e+"'><a href='"+a.url+"' class='clearfix'><div class='poster'><img src='"+a.img+"' /></div><div class='title'>"+a.title+"</div>"+imdb+"</a></li>")}),i(moviewpSearch.area).html("<ul>"+s.join("")+a+"</ul>")}},complete:function(){a=!1,i(moviewpSearch.form).find("#searchform > i").removeClass("fa fa-refresh").removeClass(""),i(moviewpSearch.area).find("ul").removeClass("process").removeClass("noselect")}})))},500)})});