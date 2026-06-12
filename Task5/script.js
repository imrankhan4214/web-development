let cart = 0;

function addToCart(){

    cart++;

    document.getElementById("cartCount")
    .innerText = cart;
}

function searchProduct(){

    let input =
    document.getElementById("search")
    .value.toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{

        let name =
        card.dataset.name.toLowerCase();

        if(name.includes(input)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });
}

function darkMode(){

    document.body.classList.toggle("dark");

    let btn =
    document.getElementById("darkBtn");

    if(document.body.classList.contains("dark")){
        btn.innerHTML="☀️ Light Mode";
    }
    else{
        btn.innerHTML="🌙 Dark Mode";
    }
}