!function(){var e=document.querySelector(".feedback__form");document.querySelector(".feedback__button");e.addEventListener("submit",(function(t){t.preventDefault();var a={name:e.querySelector("#name").value,email:e.querySelector("#email").value,message:e.querySelector("#message")};localStorage.setItem("feedback",JSON.stringify(a))}))}();
//# sourceMappingURL=index.555db4d6.js.map
