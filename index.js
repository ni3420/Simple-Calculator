const AC=document.getElementById("AC");
    const del=document.getElementById("delete");
    const para=document.getElementById("para");
    const main=document.getElementById("main");
    const button=document.querySelectorAll(".button");
    const input=document.querySelector("#input");

    button.forEach(b=>{
        b.addEventListener("click",()=>{
            input.value+=b.innerHTML;
            para.innerHTML=math.evaluate(input.value);
            para.addEventListener("click",()=>{
                input.value=para.innerHTML;
                
            });
            
        });
    });
      main.addEventListener("click",()=>{
        let check=/[a-zA-Z]/;
        if(check.test(input.value))
      {
        console.log(input.value);
        para.innerHTML="syntax error";
      }
        input.value=para.innerHTML;
        if(para.innerHTML==="syntax error")
      {
        input.value="";
      }
});
AC.addEventListener("click",()=>{
    
    input.value="";
    para.innerHTML="";
});


del.addEventListener("click",()=>{
input.value=input.value.slice(0,-1);
    
    para.innerHTML=math.evaluate(input.value);
    if(para.innerHTML==="undefined")
    {
    para.innerHTML="";
       }
       
    
});