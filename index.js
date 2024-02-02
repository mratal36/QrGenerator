let input = document.querySelector("input");
let btn = document.querySelector("button");
let img = document.querySelector("img")
let box = document.querySelector(".imgBox")


function generateQr(){
    
    if(input.value.length > 0){
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        box.classList.add("show-img");
    }

    else{
        input.classList.add("error");
        input.placeholder = "Enter a value ?";
        input.style.border = "1px solid red";
        setTimeout(()=>{
            input.classList.remove("error")
            input.placeholder = "Text or URL"
            input.style.border = "1px solid #494eea";

        },800);
    }
}

btn.addEventListener("click",generateQr)