const e=document.querySelector(".feedback__form");e.addEventListener("submit",(a=>{a.preventDefault();const t=a.currentTarget.elements,s=t.name.value,l=t.email.value,m=t.message.value;var n;n={name:s,email:l,message:m},console.log("form data",n),window.alert("Feedback submitted successfully!"),e.reset()}));
//# sourceMappingURL=index.e0c5e8b9.js.map
