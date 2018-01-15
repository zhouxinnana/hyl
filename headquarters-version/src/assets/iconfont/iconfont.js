(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-santiaogang" viewBox="0 0 1024 1024">'+""+'<path d="M0 505.134792c0-0.722653 0.722653-2.16796 0.722653-2.890614 3.613267-18.788991 13.007763-33.242061 29.628793-42.636556 7.226535-4.335921 15.175723-5.781228 23.124912-6.503881 2.890614 0 5.781228 0 8.671842 0 299.9012 0 599.079746 0 898.980946 0 20.234298 0 35.410021 8.671842 46.972477 24.570219 8.671842 12.285109 12.285109 25.292872 10.839802 40.468596-2.890614 23.124912-18.788991 43.35921-42.636556 49.140438-6.503881 1.445307-13.007763 2.16796-20.234298 2.16796-161.151729 0-322.303458 0-483.455187 0-138.026817 0-276.053634 0-414.080452 0-23.847565 0-39.745942-11.562456-51.308398-31.0741-3.613267-5.781228-5.058574-12.285109-6.503881-18.788991 0-0.722653-0.722653-2.16796-0.722653-2.890614C0 512.361327 0 508.748059 0 505.134792L0 505.134792z"  ></path>'+""+'<path d="M0 205.233592c0-0.722653 0.722653-2.16796 0.722653-2.890614 3.613267-18.788991 13.007763-33.242061 29.628793-42.636556 7.226535-4.335921 15.175723-5.781228 23.124912-6.503881 2.890614 0 5.781228 0 8.671842 0 299.9012 0 599.079746 0 898.980946 0 20.234298 0 35.410021 8.671842 46.972477 24.570219 8.671842 12.285109 12.285109 25.292872 10.839802 40.468596-2.890614 23.124912-18.788991 43.35921-42.636556 49.140438-6.503881 1.445307-13.007763 2.16796-20.234298 2.16796-161.151729 0-322.303458 0-483.455187 0-138.026817 0-276.053634 0-414.080452 0-23.847565 0-39.745942-11.562456-51.308398-31.0741-3.613267-5.781228-5.058574-12.285109-6.503881-18.788991C0.722653 218.241355 0 216.796048 0 216.073394 0 212.460127 0 208.84686 0 205.233592L0 205.233592z"  ></path>'+""+'<path d="M51.308398 862.848271c-1.445307 0-2.16796-0.722653-3.613267-0.722653-16.62103-3.613267-28.183486-13.007763-36.855328-27.460833-6.503881-10.839802-9.394495-22.402258-8.671842-34.687368 2.16796-24.570219 19.511644-46.249824 44.804517-52.031052 5.058574-1.445307 10.839802-1.445307 16.62103-1.445307 67.206775 0 134.41355 0 200.897671 0 232.694425 0 466.111503 0 698.805928 0 19.511644 0 34.687368 8.671842 46.249824 23.847565 7.226535 10.117149 11.562456 22.402258 11.562456 34.687368 0 14.45307-5.058574 27.460833-14.45307 38.300635-9.394495 10.839802-21.679605 17.343684-36.132675 18.788991-0.722653 0-1.445307 0-2.16796 0.722653C662.673253 862.848271 356.990826 862.848271 51.308398 862.848271L51.308398 862.848271z"  ></path>'+""+'<path d="M1024 189.335215c-0.722653-2.16796-0.722653-5.058574-1.445307-7.226535L1024 189.335215z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-zhankai" viewBox="0 0 1024 1024">'+""+'<path d="M97.5 241.3c0 6.9 2.2 12.5 6.7 17s10.1 6.7 17 6.7h781.7c6.9 0 12.5-2.2 17-6.7s6.7-10.1 6.7-17v-51.5c0-6.9-2.2-12.5-6.7-17s-10.1-6.7-17-6.7H121.2c-6.9 0-12.5 2.2-17 6.7s-6.7 10.1-6.7 17v51.5z m822.4 228c-4.5-4.5-10.1-6.7-17-6.7H121.2c-6.9 0-12.5 2.2-17 6.7s-6.7 10.1-6.7 17v51.5c0 6.9 2.2 12.5 6.7 17s10.1 6.7 17 6.7h781.7c6.9 0 12.5-2.2 17-6.7s6.7-10.1 6.7-17v-51.5c-0.1-6.9-2.3-12.6-6.7-17z m6.6 313.4c0-6.9-2.2-12.5-6.7-17s-10.1-6.7-17-6.7H121.1c-6.9 0-12.5 2.2-17 6.7s-6.7 10.1-6.7 17v51.5c0 6.9 2.2 12.5 6.7 17s10.1 6.7 17 6.7h781.7c6.9 0 12.5-2.2 17-6.7s6.7-10.1 6.7-17v-51.5z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)