import './style.scss';
import Typed from 'typed.js';
import 'scrollreveal/dist/scrollreveal';
import ScrollReveal from "scrollreveal";
import 'waypoints/lib/noframework.waypoints.min';
import * as bootstrap from 'bootstrap';

const typed = new Typed('#element', {
    strings: ['Food...', 'Drink...'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 800,
    loop : true
});

let toDown = {
    distance: '50px',
    origin: 'top',
    duration: 800,
    interval: 300,
};

ScrollReveal().reveal('.to-down', toDown);





let toLeft = {
    distance: '50px',
    origin: 'right',
    duration: 800,
    interval: 300,
};

ScrollReveal().reveal('.to-left', toLeft);

new Waypoint({
    element: document.getElementById('home-content'),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".nav-link.active");
        if(oldNavLink != null){
            oldNavLink.classList.remove("active");
        }
        let currentNavLink = document.querySelector(`[href="#home"]`);

        currentNavLink.classList.add("active");
    },
    offset: "10%"
})

let sections = ['about','services','menus'];

sections.forEach(function (section){
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink = document.querySelector(".nav-link.active");
            oldNavLink.classList.remove("active");
            let currentNavLink = document.querySelector(`[href="#${section}"]`);
            currentNavLink.classList.add("active");
        },
        offset: "40%"
    })
})

new Waypoint({
    element: document.getElementById("contact"),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".nav-link.active");
        oldNavLink.classList.remove("active");
        let currentNavLink = document.querySelector(`[href="#contact"]`);
        currentNavLink.classList.add("active");
    },
    offset: "75%"
})

let menusRow = document.getElementById("menusRow");

let menusList = [
    {
        id:1,
        title: "Barbecue Salad",
        img: "/img/plate1.png",
        description:"Special Delicious Dish",
        currency: "$",
        price:20
    },
    {
        id:2,
        title: "Salad With Fish",
        img: "/img/plate2.png",
        description:"Special Delicious Dish",
        currency: "$",
        price:32.5
    },
    {
        id:3,
        title: "Spinach Salad",
        img: "/img/plate3.png",
        description:"Special Delicious Dish",
        currency: "$",
        price:40.2
    },
    {
        id:4,
        title: "Barbecue Salad",
        img: "/img/plate1.png",
        description:"Special Delicious Dish",
        currency: "$",
        price:20
    },
    {
        id:5,
        title: "Salad With Fish",
        img: "/img/plate2.png",
        description:"Special Delicious Dish",
        currency: "$",
        price:32.5
    },
    {
        id:6,
        title: "Spinach Salad",
        img: "/img/plate3.png",
        description:"Special Delicious Dish",
        currency: "$",
        price:40.2
    }
];

menusList.forEach(function (menu){
    let div = document.createElement("div");
    div.classList.add('col-8','col-md-4','col-lg-2');
    div.innerHTML=`
        <div class="card to-right plate-card mb-5">
                <img src="${menu.img}" class="card-img w-75 d-block mx-auto mb-4" alt="">
                <div class="card-body">
                    <h5 class="fw-semibold">${menu.title}</h5>
                    <p class="text-black-50">${menu.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="fw-semibold mb-0">${menu.currency} ${menu.price}</p>
                        <button class="btn btn-primary"><i class="bi bi-cart-fill"></i></button>
                    </div>
                </div>
            </div>
    `;
    menusRow.append(div);
})


let toRight = {
    distance: '50px',
    origin: 'left',
    duration: 800,
    interval: 300,
};

ScrollReveal().reveal('.to-right', toRight);




