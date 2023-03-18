// const inputs
const input_title = document.querySelector("#input_title");
const input_descrition = document.querySelector("#input_descrition");
const input_img = document.querySelector("#input_img");


// form and card container
const form_input = document.querySelector("#form_input");
const card_container = document.querySelector("#card_container");


// array cards
let cards = [];


let cards_storage = JSON.parse(localStorage.getItem("saved_cards"));

if (cards_storage != null) {
        cards = cards_storage;
 }

console.log(cards_storage);

udpateview ();

function btn_form() {
    if (form_input.style.display == "block") {
    
        form_input.style.display = "none";
        

    } else
    
        form_input.style.display = "block";
        card_container.style.display = "none";
}

function btn_saved() {
    
    if (card_container.style.display == "block") {
        
        card_container.style.display = "none";
    
    } else
        
        card_container.style.display = "block";
        form_input.style.display = "none";
    
}

function udpateview() {
    // clean in the card container
    card_container.innerHTML = "";


    // create cards
    for ( i = 0; i < cards.length; i++) {
        const card = cards[i];
        
        // create card elements
        const card_element = document.createElement("div");
        card_element.classList.add("card");

        const header_element = document.createElement("div");
        header_element.classList.add("header");

        const header_element_text = document.createElement("span");
        header_element_text.classList.add("header_text");
        header_element_text.innerText = card.title;

        header_element.appendChild(header_element_text);
        card_element.appendChild(header_element);

        const content_element = document.createElement("div");
        content_element.classList.add("content");

        const content_element_text = document.createElement("span");
        content_element_text.classList.add("content_text");
        content_element_text.innerText = card.descrition;

        content_element.appendChild(content_element_text);
        card_element.appendChild(content_element);

        const image_element = document.createElement("div");
        image_element.classList.add("image");

        const image_element_img = document.createElement("img");
        image_element_img.src = card.image;
        

        image_element.appendChild(image_element_img);
        card_element.appendChild(image_element);

        card_container.appendChild(card_element);

        
    }
}

// function add cards

function add_card() {
   
    event.preventDefault();

    const card = {
        title: input_title.value ,
        descrition: input_descrition.value,
        image: input_img.value
    }

    

    console.log(cards);
    
    // add card to the cards array
    cards.push(card);

    localStorage.setItem("saved_cards", JSON.stringify(cards));

    // update the card container
    udpateview();



}