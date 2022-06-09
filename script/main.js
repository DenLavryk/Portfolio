const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    mousewheel:{
        sensitivity: 1,
        eventsTarget: ".swiper"
    }
});
let typed = new Typed(".txt-main-second-red", {
    strings: ["DENIS LAVRYK", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
})
btn.onclick = function(){
    location.href="https://denlavryk.github.io/NFT_Landing_page/"
}
