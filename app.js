/* Variable para almacenar los puntos */
let score = 0;

/* Función para actualizar el puntaje en la pantalla */
function updateScore() {
    document.querySelector(".score").innerText = `Score: ${score}`;
}

/* function to load current card contents */
currentCard = 0;
loadCard = function(){
    cards[0].querySelector(".front .contents").innerHTML = Cards[currentCard].front;
    cards[0].querySelector(".back .title").innerText = Cards[currentCard].title;
    cards[0].querySelector(".back .description").innerText = Cards[currentCard].description;
    cards[0].querySelector(".back .question").innerText = Cards[currentCard].question.title;
    questionAt = 0;
    questionsHTML = "";
    Cards[currentCard].question.questions.forEach((i) => {
        questionsHTML += `<label><input type="radio" name="card${0}" number="${questionAt}">${i}</label>`;
        questionAt++;
    });
    cards[0].querySelector(".questions").innerHTML = questionsHTML;
};
    
/* Lógica de las cartas */
Cards = [
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space?",
            questions: [
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front: `<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },{
        title: "Climate Change",
        description: "Climate change is primarily driven by greenhouse gas emissions from human activities, such as burning fossil fuels and deforestation. This leads to rising global temperatures, melting ice caps, and more extreme weather events.",
        question: {
            title: " Which human activity is a major contributor to climate change? ?",
            questions:[
                "Recycling",
                "Air Polution",
                "Deforestation."
                
            ],
            answer: 2
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/QG9ZcsL4lNc" title="How Climate Change Started - The Earth Story (Animation)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
       
    },
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space ?",
            questions:[
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        moreInfo: "https://theoceancleanup.com/great-pacific-garbage-patch/"
    },
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space ?",
            questions:[
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        moreInfo: "https://theoceancleanup.com/great-pacific-garbage-patch/"
    },
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space ?",
            questions:[
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        moreInfo: "https://theoceancleanup.com/great-pacific-garbage-patch/"
    },
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space ?",
            questions:[
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        moreInfo: "https://theoceancleanup.com/great-pacific-garbage-patch/"
    },
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space ?",
            questions:[
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        moreInfo: "https://theoceancleanup.com/great-pacific-garbage-patch/"
    },
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space ?",
            questions:[
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        moreInfo: "https://theoceancleanup.com/great-pacific-garbage-patch/"
    },
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space ?",
            questions:[
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        moreInfo: "https://theoceancleanup.com/great-pacific-garbage-patch/"
    },
    {
        title: "The Garbage Island",
        description: "In 1997 Captain Charles Moore was sailing from Hawaii to California when he noticed a steady stream of plastics bobbing in the ocean. He had discovered the Great Pacific Garbage Patch.",
        question: {
            title: "Is the island visible from the space ?",
            questions:[
                "Yes, it's completely visible from the space",
                "No, it's a myth."
            ],
            answer: 1
        },
        front:`<iframe width="326" height="auto" src="https://www.youtube.com/embed/vrPBYS5zzF8" title="How Big The Great Pacific Garbage Patch Really Is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        moreInfo: "https://theoceancleanup.com/great-pacific-garbage-patch/"
    }
    
];

cardsHTML = "";
for (i = 0; i < Cards.length; i++) {
    cardsHTML += ` <div class="card" number="10">
        <div class="face front">
            <div class="contents"></div>
            <i class="flip fa-solid fa-rotate"></i>
        </div>
        <div class="face back">
            <div class="wrong"></div>
            <h3 class="title"></h3>
            <p class="description"></p>
            <section>
                <h4 class="question"></h4>
                <br>
                <div class="questions"></div>
                <button class="next-card">SUBMIT</button>
            </section>
            <i class="flip fa-solid fa-rotate"></i>
        </div>
    </div>`;
}
document.querySelector(".cards").innerHTML = cardsHTML;

/* Agregar el puntaje en el HTML */
document.querySelector("body").insertAdjacentHTML("afterbegin", `<div class="score">Score: 0</div>`);

/* card flipper */
document.querySelectorAll(".front i.flip").forEach((i) => {
    i.addEventListener("mouseup", function() {
        this.closest(".card").classList.add("flipped");
    });
});

document.querySelectorAll(".back i.flip").forEach((i) => {
    i.addEventListener("mouseup", function() {
        this.closest(".card").classList.remove("flipped");
    });
});

/* deck stacking */
translate = {
    x: -17,
    y: -17
};
scale = 1.05;
opacity = 1.1;
cards = document.querySelectorAll(".card:not(.invisible)");
for (i = 0; i < cards.length; i++) {
    translate = {
        x: translate.x + 17,
        y: translate.y + 17,
    };
    scale -= 0.05;
    opacity -= 0.1;
    cards[i].style.transform = `translate(${translate.x}px, ${translate.y}px) scale(${scale})`;
    cards[i].style.opacity = opacity;
    cards[i].style.zIndex = cards.length - i;
}

/* Cargar datos de la primera carta */
loadCard();

/* Agregar event listener a cada botón de submit */
document.querySelectorAll(".next-card").forEach((i) => {
    i.addEventListener("click", function(e) {
        card = this.closest(".card").getAttribute("number");

        answer = this.closest("section").querySelector("input:checked");
        console.log(answer);
        if (answer != null) {
            user_answer = answer.getAttribute("number");
            if (Cards[currentCard].question.answer == user_answer) {
                
                score++; 
                updateScore(); 
                
                
                translate = {
                    x: -17,
                    y: -17
                };
                scale = 1.05;
                opacity = 1.1;
                cards = document.querySelectorAll(".card:not(.invisible)");
                cards[0].style.transform = "";
                cards[0].classList.add("invisible");
                cards = document.querySelectorAll(".card:not(.invisible)");

                for (i = 0; i < cards.length; i++) {
                    translate = {
                        x: translate.x + 17,
                        y: translate.y + 17,
                    };
                    scale -= 0.05;
                    opacity -= 0.1;
                    cards[i].style.transform = `translate(${translate.x}px, ${translate.y}px) scale(${scale})`;
                    cards[i].style.opacity = opacity;
                    cards[i].style.zIndex = cards.length - i;
                }
                currentCard++;
                loadCard();
            } else {
                wrong = this.closest(".card").querySelector(".wrong");
                wrong.classList.add("active");
                setTimeout(function() {
                    wrong.classList.remove("active");
                }, 300);
            }
        } else {
            cards = document.querySelectorAll(".card:not(.invisible)");
            cards[0].querySelectorAll("input").forEach((i) => {
                i.classList.add("highlighted");
            });
            setTimeout(function() {
                cards[0].querySelectorAll("input").forEach((i) => {
                    i.classList.remove("highlighted");
                });
            }, 420);
        }
    });
});