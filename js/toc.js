var tocPosition,toc=document.getElementById("sidebar-stoc"),HEADER_OFFSET=200,toclink=document.getElementsByClassName("toc-link"),headerlink=document.getElementsByClassName("headerlink");function scrollcatelogHandler(e){var e=e||window.event,t=(e.target||e.srcElement,document.documentElement.scrollTop||document.body.scrollTop);tocPosition-60<t?toc.classList.add("stoc-fixed"):toc.classList.remove("stoc-fixed");for(var o=0;o<toclink.length;o++){var l=headerlink[o].offsetTop-HEADER_OFFSET,c=o+1===toclink.length?1/0:headerlink[o+1].offsetTop-HEADER_OFFSET;l<t&&t<=c?toclink[o].classList.add("active"):toclink[o].classList.remove("active")}}null!=toc&&(window.addEventListener("scroll",scrollcatelogHandler),tocPosition=toc.offsetTop);