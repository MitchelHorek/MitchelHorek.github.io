let slideIndexHand = 1;
let slideIndex = 0;
let currentSliderHand;
let crestic;
let array2015 = ["s1.png","s2.png","s3.png",
    "s4.png","s5.png"];
let array2016 = ["s1.png","s2.png","s3.png",
    "s4.png","s5.png"];
let array2017 = ["s1.png","s2.png","s3.png",
    "s4.png","s5.png","s6.png"];
let array2018 = ["s1.png","s2.png","s3.png",
    "s4.png","s5.png","s6.png", "s7.png"];
let array2019 = ["s1.png","s2.png","s3.png",
    "s4.png","s5.png","s6.png","s7.png"];
let array2020 = ["s1.png","s2.png","s3.png",
    "s4.png","s5.png","s6.png","s7.png", "s8.png"];
$(document).ready(
    function (){
        let urlstring = location.href;
        let urlclass = new URL(urlstring);
        if(urlclass.pathname.endsWith("index.html")){
            showSlides();
        }
        let year = urlclass.searchParams.get("year");
        let sketchImgs = document.getElementsByClassName("sketchImgs")[0];
        let id = "nav" + year;
        let currentNav = document.getElementById(id);
        if (currentNav != null){
            currentNav.className+=" active_nav";
            document.getElementById("button" + year).className += " classButtonBackground";
        }
        if(year==="2015"){
            for(let i=0;i<array2015.length;i++){
                let image=document.createElement("img");
                image.src="images/sketch/2015/" + array2015[i];
                image.addEventListener("click", function (e){
                    let imageslider = document.createElement("img");
                    imageslider.src = e.target.src;
                    console.log(e.target.src);
                    document.getElementsByClassName("modal-body")[0].appendChild(imageslider);
                    document.getElementsByClassName("modal")[0].style.display = "block";
                    crestic = document.querySelector(".close");
                    crestic.onclick = function() {
                        imageslider.remove();
                        document.getElementsByClassName("modal")[0].style.display = "none";
                    }
                });
                sketchImgs.appendChild(image);
            }
        }
        else if(year==="2016"){
            for(let i=0;i<array2016.length;i++){
                let image=document.createElement("img");
                image.src="images/sketch/2016/" + array2016[i];
                image.addEventListener("click", function (e){
                    let imageslider = document.createElement("img");
                    imageslider.src = e.target.src;
                    console.log(e.target.src);
                    document.getElementsByClassName("modal-body")[0].appendChild(imageslider);
                    document.getElementsByClassName("modal")[0].style.display = "block";
                    crestic = document.querySelector(".close");
                    crestic.onclick = function() {
                        imageslider.remove();
                        document.getElementsByClassName("modal")[0].style.display = "none";
                    }
                });
                sketchImgs.appendChild(image);
            }
        }
        else if(year==="2017"){
            for(let i=0;i<array2017.length;i++){
                let image=document.createElement("img");
                image.src="images/sketch/2017/" + array2017[i];
                image.addEventListener("click", function (e){
                    let imageslider = document.createElement("img");
                    imageslider.src = e.target.src;
                    console.log(e.target.src);
                    document.getElementsByClassName("modal-body")[0].appendChild(imageslider);
                    document.getElementsByClassName("modal")[0].style.display = "block";
                    crestic = document.querySelector(".close");
                    crestic.onclick = function() {
                        imageslider.remove();
                        document.getElementsByClassName("modal")[0].style.display = "none";
                    }
                });
                sketchImgs.appendChild(image);
            }
        }
        else if(year==="2018"){
            for(let i=0;i<array2018.length;i++){
                let image=document.createElement("img");
                image.src="images/sketch/2018/" + array2018[i];
                image.addEventListener("click", function (e){
                    let imageslider = document.createElement("img");
                    imageslider.src = e.target.src;
                    console.log(e.target.src);
                    document.getElementsByClassName("modal-body")[0].appendChild(imageslider);
                    document.getElementsByClassName("modal")[0].style.display = "block";
                    crestic = document.querySelector(".close");
                    crestic.onclick = function() {
                        imageslider.remove();
                        document.getElementsByClassName("modal")[0].style.display = "none";
                    }
                });
                sketchImgs.appendChild(image);
            }
        }
        else if(year==="2019"){
            for(let i=0;i<array2019.length;i++){
                let image=document.createElement("img");
                image.src="images/sketch/2019/" + array2019[i];
                image.addEventListener("click", function (e){
                    let imageslider = document.createElement("img");
                    imageslider.src = e.target.src;
                    console.log(e.target.src);
                    document.getElementsByClassName("modal-body")[0].appendChild(imageslider);
                    document.getElementsByClassName("modal")[0].style.display = "block";
                    crestic = document.querySelector(".close");
                    crestic.onclick = function() {
                        imageslider.remove();
                        document.getElementsByClassName("modal")[0].style.display = "none";
                    }
                });
                sketchImgs.appendChild(image);
            }
        }
        else if(year==="2020"){
            for(let i=0;i<array2020.length;i++){
                let image=document.createElement("img");
                image.src="images/sketch/2020/" + array2020[i];
                image.addEventListener("click", function (e){
                    let imageslider = document.createElement("img");
                    imageslider.src = e.target.src;
                    console.log(e.target.src);
                    document.getElementsByClassName("modal-body")[0].appendChild(imageslider);
                    document.getElementsByClassName("modal")[0].style.display = "block";
                    crestic = document.querySelector(".close");
                    crestic.onclick = function() {
                        imageslider.remove();
                        document.getElementsByClassName("modal")[0].style.display = "none";
                    }
                });
                sketchImgs.appendChild(image);
            }
        }
    }
);

function clickDigital(src){
    let imageslider = document.createElement("img");
    imageslider.src = src;
    console.log(src);
    document.getElementsByClassName("modal-body")[0].appendChild(imageslider);
    document.getElementsByClassName("modal")[0].style.display = "block";
    crestic = document.querySelector(".close");
    crestic.onclick = function() {
        imageslider.remove();
        document.getElementsByClassName("modal")[0].style.display = "none";
    }
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function showSlideshand(element){
    currentSliderHand = element.nextSibling.nextSibling;
    currentSliderHand.style.display = "block";
    crestic = currentSliderHand.querySelector(".close");
    crestic.onclick = function() {
        currentSliderHand.style.display = "none";
    }
    showSwitchSlides(slideIndexHand);
}




function plusSlides(n) {
    showSwitchSlides(slideIndexHand += n);
}

function showSwitchSlides(n) {
    let i;
    let slides = currentSliderHand.querySelectorAll(".mySlideshand");
    if (n > slides.length) {slideIndexHand = 1}
    if (n < 1) {slideIndexHand = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexHand-1].style.display = "block";
}

function tapTapMenu(element){
    let currentMenu = element.nextSibling.nextSibling;

    if(currentMenu.style.display==="none" || currentMenu.style.display===""){
        currentMenu.style.display="block";
    }
    else currentMenu.style.display="none";
}

