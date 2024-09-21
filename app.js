document.querySelectorAll(".front i.flip").forEach((i)=> {
    i.addEventListener("mouseup", function(){
        this.closest(".card").classList.add("flipped")
    })
    })

document.querySelectorAll(".back i.flip").forEach((i)=> {
    i.addEventListener("mouseup", function(){
        this.closest(".card").classList.remove("flipped")
        
    })


})

translate={
    x: -17,
    y: -17
};
scale= 1.05;
opacity= 1.1;
cards= document.querySelectorAll(".card:not(.invisible)")
for(i=0; i<cards.length; i++){
translate={
    x: translate.x + 17,
    y: translate.y + 17,
}
scale-=0.05;
opacity-=0.1
cards[i].style.transform=`translate(${translate.x}px, ${translate.y}px) scale(${scale})`
cards[i].style.opacity=opacity
cards[i].style.zIndex=cards.length-i 
}
respuestas={
    card1:1,
    card2:1,
    card3:1
}
document.querySelectorAll(".next-card").forEach(
    (i)=>{
        i.addEventListener("click", function(e){
            card=this.closest(".card").getAttribute("number");
            
            answer= this.closest("section").querySelector("input:checked");
            console.log(answer)
            if(answer != null){
                user_answer= answer.getAttribute("number")
                if(respuestas[`card${card}`]== user_answer){
                    translate={
                        x: -17,
                        y: -17
                    };
                    scale= 1.05;
                    opacity= 1.1;
                    cards= document.querySelectorAll(".card:not(.invisible)")
                    cards[0].style.transform= "";
                    cards[0].classList.add("invisible");
                    cards= document.querySelectorAll(".card:not(.invisible)")
                    
                    for(i=0; i<cards.length; i++){
                    translate={
                        x: translate.x + 17,
                        y: translate.y + 17,
                    }
                    scale-=0.05;
                    opacity-=0.1
                    cards[i].style.transform=`translate(${translate.x}px, ${translate.y}px) scale(${scale})`
                    cards[i].style.opacity=opacity
                    cards[i].style.zIndex=cards.length-i 
                    }
                }else{
                    wrong= this.closest(".card").querySelector(".wrong")
                   wrong.classList.add("active")
                   setTimeout(function(){
                    wrong.classList.remove("active")
                   }, 300)
                }
            }else{
                cards= document.querySelectorAll(".card:not(.invisible)")
                cards[0].querySelectorAll("input").forEach((i)=>{
                    i.classList.add("highlighted")
                })
                setTimeout(function(){
                    cards[0].querySelectorAll("input").forEach((i)=>{
                        i.classList.remove("highlighted")
                    })
                }, 420)
            }
        })
    }
)
/*


*/