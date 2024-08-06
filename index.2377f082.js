const e=document.querySelector(".feedback__form");document.querySelector(".feedback__button");e.addEventListener("submit",(t=>{t.preventDefault();const a={name:e.querySelector("#name").value,email:e.querySelector("#email").value,message:e.querySelector("#message")};localStorage.setItem("feedback",JSON.stringify(a))}));
//# sourceMappingURL=index.2377f082.js.map
