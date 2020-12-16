let slideIndexHand = 1;
let slideIndex = 0;
let currentSliderHand;
let crestic;
let array2015 = ["_pollyspolly__20201107_230.png","_pollyspolly__20201107_231.png","_pollyspolly__20201107_232.png",
    "_pollyspolly__20201107_233.png","_pollyspolly__20201107_234.png"];
let array2016 = ["_pollyspolly__20201107_208.png", "_pollyspolly__20201107_188.png","_pollyspolly__20201107_226.png",
    "_pollyspolly__20201107_187.png","_pollyspolly__20201107_205.png"];
let array2017 = ["_pollyspolly__20201107_128.png","_pollyspolly__20201107_129.png","_pollyspolly__20201107_136.png",
    "_pollyspolly__20201107_133.png", "_pollyspolly__20201107_132.png","_pollyspolly__20201107_131.png"];
let array2018 = ["_pollyspolly__20201107_65.png","_pollyspolly__20201107_68.png","_pollyspolly__20201107_71.png",
    "_pollyspolly__20201107_74.png","_pollyspolly__20201107_78.png","_pollyspolly__20201107_82.png",
    "_pollyspolly__20201107_96.png"];
let array2019 = ["_pollyspolly__20201107_63.png","_pollyspolly__20201107_61.png","_pollyspolly__20201107_60.png",
    "_pollyspolly__20201107_55.png","_pollyspolly__20201107_49.png","_pollyspolly__20201107_46.png",
    "_pollyspolly__20201107_40.png"];
let array2020 = ["_pollyspolly__20201103_6.png","_pollyspolly__20201103_1.png","_pollyspolly__20201103_7.png",
    "_pollyspolly__20201103_2.png","_pollyspolly__20201103_3.png","_pollyspolly__20201103_5.png",
    "_pollyspolly__20201103_4.png","_pollyspolly__20201107_5.png"];
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

