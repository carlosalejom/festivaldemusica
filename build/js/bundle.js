function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".sobre-festival"))}function scrollNav(){document.querySelectorAll(".navegacion-principal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(i=1;i<=12;i++){const t=document.createElement("IMG");t.src=`build/img/thumb/${i}.webp`,t.dataset.imagenId=i,t.onclick=mostrarImagen;const n=document.createElement("LI");n.appendChild(t),e.appendChild(n)}}function mostrarImagen(e){const t=parseInt(e.target.dataset.imagenId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const o=document.createElement("DIV");o.appendChild(n),o.classList.add("overlay"),o.onclick=function(){o.remove(),a.classList.remove("fijar-body")};const c=document.createElement("P");c.textContent="X",c.classList.add("btn-cerrar"),c.onclick=function(){o.remove(),a.classList.remove("fijar-body")},o.appendChild(c);const a=document.querySelector("body");a.appendChild(o),a.classList.add("fijar-body")}document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()}));
//# sourceMappingURL=bundle.js.map
