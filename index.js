import{a as u,S as p,i}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function m(a){return u.get("https://pixabay.com/api/",{params:{key:"44929150-af2bf51de3b27508be12093c9",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const n=document.querySelector(".gallery"),c=document.querySelector("#loader");function g(a){n.insertAdjacentHTML("beforeend",a.map(({webformatURL:o,largeImageURL:r,tags:e,likes:s,views:l,comments:f,downloads:d})=>`<li class="gallery-item">
           <a class="gallery-link" href="${r}">
           <img class="gallery-image" src="${o}" alt="${e}"/>
           <div class="social-items">
              <div class="field">
              <span class="value" data-likes>Likes</span>
              <span class="label">${s}</span>
              </div>
              <div class="field">
              <span class="value" data-views>Views</span>
              <span class="label">${l}</span>
              </div>
              <div class="field">
              <span class="value" data-comments>Coments</span>
              <span class="label">${f}</span>
              </div>
              <div class="field">
              <span class="value" data-downloads>Downloads<span>
              <span class="label">${d}</span>
              </div>
           </div>
           </a>
           </li>`).join(""));let t=new p(".gallery li a",{captions:!0,captionSelector:"a img",captionType:"attr",captionsData:"alt",captionDelay:250});t.on("show.simplelightbox"),t.refresh("show.simplelightbox")}function h(){n.innerHTML=""}function y(){c.style.display="inline-block"}function b(){c.style.display="none"}const v=document.querySelector(".form");v.addEventListener("submit",w);function w(a){if(a.preventDefault(),a.target.elements[0].value===""){i.show({message:"Please, fill out thne form",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0});return}h(),y(),m(a.target.elements[0].value).then(t=>{t.hits.length>=1?g(t.hits):i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})}).catch(t=>i.show({message:t.message,position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})).finally(()=>b())}
//# sourceMappingURL=index.js.map
