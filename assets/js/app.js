document.querySelector("#burger").onmousedown=e=>{console.log(document.activeElement),document.activeElement==e.target&&(document.activeElement.blur(),e.preventDefault())},(()=>{const e=document.querySelector("#file"),t=document.querySelector("#file-label");e.addEventListener("change",(e=>{const n=e.target.files[0].name;t.textContent=n}))})(),(()=>{const e=document.querySelector("#thumb"),t=document.querySelector("#range"),n=document.querySelector("#range-value");let o=null,c=null;e.onmousedown=l=>{o=+l.pageX,c=parseInt(e.style.left),document.onmousemove=l=>{const s=e.offsetWidth,u=t.clientWidth-s,r=+l.pageX,a=c+(r-o);if(a>=0&&a<=u){e.style.left=`${a}px`;const t=Math.round(a/u*100);n.value=`${t}%`}},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}},e.addEventListener("touchstart",(t=>{o=+t.changedTouches[0].clientX,c=parseInt(e.style.left)})),e.addEventListener("touchmove",(l=>{const s=e.offsetWidth,u=t.clientWidth-s,r=+l.changedTouches[0].clientX,a=c+(r-o);if(a>=0&&a<=u){e.style.left=`${a}px`;const t=Math.round(a/u*100);n.value=`${t}%`}})),e.ondragstart=()=>!1,(()=>{const o=e.offsetWidth,c=(t.clientWidth-o)*(parseInt(n.value)/100)-o;e.style.left=`${c}px`})()})(),(()=>{const e=document.querySelector("#type-system"),t=document.querySelectorAll("[data-option]"),n=t=>{"click"==t.type&&(e.classList.contains("form__select--open")?e.classList.remove("form__select--open"):e.classList.add("form__select--open")),"blur"==t.type&&e.classList.remove("form__select--open")},o=t=>{const n=t.target.innerText;e.value=n};e.addEventListener("blur",n),e.addEventListener("click",n),t.forEach((e=>e.addEventListener("click",o)))})();