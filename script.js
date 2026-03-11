document.querySelectorAll(".slider").forEach(slider => {

let scrollAmount = 0;

setInterval(() => {

scrollAmount += 350;

if(scrollAmount >= slider.scrollWidth){
scrollAmount = 0;
}

slider.scrollTo({
left: scrollAmount,
behavior: "smooth"
});

},3000);

});
