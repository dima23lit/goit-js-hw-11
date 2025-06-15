import{a as u,S as p,i as m}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();function y(s){return u.get("https://pixabay.com/api/",{params:{key:"44929150-af2bf51de3b27508be12093c9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(l=>l.data)}const r=document.querySelector(".gallery"),n=document.querySelector("#loader");function g(s){r.insertAdjacentHTML("beforeend",s.map(({webformatURL:l,largeImageURL:i,tags:e,likes:a,views:o,comments:d,downloads:f})=>`<li class="gallery-item">
           <a class="gallery-link" href="${i}">
           <img class="gallery-image" src="${l}" alt="${e}"/>
           <div class="social-items">
              <div class="field">
              <span class="value" data-likes>Likes</span>
              <span class="label">${a}</span>
              </div>
              <div class="field">
              <span class="value" data-views>Views</span>
              <span class="label">${o}</span>
              </div>
              <div class="field">
              <span class="value" data-comments>Coments</span>
              <span class="label">${d}</span>
              </div>
              <div class="field">
              <span class="value" data-downloads>Downloads<span>
              <span class="label">${f}</span>
              </div>
           </div>
           </a>
           </li>`).join(""));let t=new p(".gallery li a",{captions:!0,captionSelector:"a img",captionType:"attr",captionsData:"alt",captionDelay:250});t.on("show.simplelightbox"),t.refresh("show.simplelightbox")}function h(){r.innerHTML=""}function b(){n.style.display="inline-block"}function v(){n.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",L);function L(s){if(s.preventDefault(),s.target.elements[0].value===""){alert("Please, fill out the form");return}h(),b(),y(s.target.elements[0].value).then(t=>{t.hits.length>=1?(console.log(t.hits),g(t.hits)):m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",close:!0})}).catch(t=>t).finally(()=>v()),c.reset()}
//# sourceMappingURL=index.js.map
