(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=()=>{const r=document.createElement("div");return r.className="container max-w-lg mx-auto p-3 sm:p-10",r.innerHTML=`
      <h1 class="text-2xl sm:text-3xl font-bold mb-0.5">
          <span class="text-slate-500 border-b-3 border-double"
            >Fun Alphabet</span
          >
          Reader
        </h1>
        <p class="text-sm sm:text-base">Click a letter to hear it!</p>
        <div class="flex justify-end my-5">
          <select
            class="text-sm focus:outline-none focus:ring-1 rounded-md"
            id="voice-select"
          ></select>
        </div>
        <div
          id="alphabet-container"
          class="alphabet-container grid grid-cols-8 gap-5 mt-5"
        ></div>
    `,r},f=()=>{const r=window.speechSynthesis;let s=[];const i=[{letter:"A",word:"Apple"},{letter:"B",word:"Banana"},{letter:"C",word:"Cat"},{letter:"D",word:"Dog"},{letter:"E",word:"Elephant"},{letter:"F",word:"Fish"},{letter:"G",word:"Giraffe"},{letter:"H",word:"Hat"},{letter:"I",word:"Ice Cream"},{letter:"J",word:"Jelly"},{letter:"K",word:"Kangaroo"},{letter:"L",word:"Lion"},{letter:"M",word:"Monkey"},{letter:"N",word:"Nose"},{letter:"O",word:"Orange"},{letter:"P",word:"Pineapple"},{letter:"Q",word:"Queen"},{letter:"R",word:"Rabbit"},{letter:"S",word:"Sun"},{letter:"T",word:"Tiger"},{letter:"U",word:"Umbrella"},{letter:"V",word:"Violin"},{letter:"W",word:"Whale"},{letter:"X",word:"Xylophone"},{letter:"Y",word:"Yak"},{letter:"Z",word:"Zebra"}],c=document.getElementById("alphabet-container"),e=document.getElementById("voice-select");function t(){if(s=r.getVoices(),s.length===0){setTimeout(t,100);return}e.innerHTML="",s.forEach((o,l)=>{const n=document.createElement("option");n.value=`${l}`,n.textContent=o.name+(o.default?" [Default]":""),o.voiceURI==="Google UK English Male"&&(n.selected=!0),e.append(n)})}function a(){i.forEach(o=>{const l=document.createElement("button");l.textContent=o.letter,l.classList.add("alphabet-btn"),l.setAttribute("aria-label",`Click to hear the letter ${o.letter}`),l.addEventListener("click",()=>u(o.letter,o.word)),c.appendChild(l)})}function u(o,l){const n=new SpeechSynthesisUtterance(`${o}, for ${l}.`);n.pitch=1.2,n.rate=1,n.volume=1;const d=s[+e.value];d&&(n.voice=d),r.speak(n)}if(!r){alert("Speech synthesis is not supported in your browser.");return}a(),r.onvoiceschanged=t,t()};(()=>{var r;(r=document.getElementById("app"))==null||r.appendChild(p()),f()})();
