import{a as u}from"./assets/vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d="https://books-backend.p.goit.global/books/";async function m(t,o){try{return(await u.get(d+t,{params:o})).data}catch(r){console.error(r)}}const i=document.getElementById("books-list"),f=async()=>{try{const t=await m("top-books"),o=p(t,4);g(o)}catch(t){console.error(t)}finally{}};f();function p(t,o){const r=[];for(;r.length<o;){const n=Math.floor(Math.random()*t.length);r.includes(n)||r.push(n)}return r.map(n=>t[n])}function g(t){const o=h(t);i.innerHTML="",i.appendChild(o)}function h(t){const o=document.createDocumentFragment();return t.forEach(({list_name:r,books:n})=>{const e=document.createElement("li");e.className="sellers-category",e.innerHTML=`
      <h2 class="sellers-category-title">${r}</h2>
      <ul class="sellers-category-list">
        ${b(n)}
      </ul>
      <button class="sellers-button" type="button">see more</button>
    `,o.appendChild(e)}),o}function b(t){let o="";const r=y(),n=r==="desktop"?5:r==="tablet"?3:1;for(let e=0;e<n&&e<t.length;e++){const{book_image:s,title:c,author:a,_id:l}=t[e];o+=`
      <li class="sellers-item" data-id="${l}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${s}"
          alt="${c}"
          >
        </div>
        <h3 class="book-title">${c}</h3>
        <p class="book-author">${a}</p>
      </li>
    `}return o}function y(){const t=window.innerWidth;return t<768?"mobile":t<1200?"tablet":"desktop"}
//# sourceMappingURL=commonHelpers.js.map
