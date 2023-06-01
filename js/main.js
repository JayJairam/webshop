let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";

for (let i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].onclick = function () {
        if (modus === "one-two-three") {
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modus = "four-five-six";
        }
        else{
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            modus = "one-two-three";
        }

    }
}

//Button read more
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");


readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
    } else {
        readMoreBtn.innerText = "Read More";
    }
});




//filter
let allVideocards = document.getElementsByClassName("videocard");
let filters = document.getElementsByClassName("filter");

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}


//Nvidia filter 
let NvidiaFilter = document.getElementById("checkbox-Nvidia");
NvidiaFilter.onchange = function () {
    if (NvidiaFilter.checked === true) {
        for (let i = 0; i < allVideocards.length; i++) {
            if (allVideocards[i].dataset.category === "Nvidia") {
                allVideocards[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allVideocards.length; i++) {
            if (allVideocards[i].dataset.category === "Nvidia") {
                allVideocards[i].style.display = "none";
            }
        }
    }
}


//AMD filter
let AMDFilter = document.getElementById("checkbox-AMD");
AMDFilter.onchange = function () {
    if (AMDFilter.checked === true) {
        for (let i = 0; i < allVideocards.length; i++) {
            if (allVideocards[i].dataset.category === "AMD") {
                allVideocards[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allVideocards.length; i++) {
            if (allVideocards[i].dataset.category === "AMD") {
                allVideocards[i].style.display = "none";
            }
        }
    }
}

//Intel filter
let IntelFilter = document.getElementById("checkbox-Intel");
IntelFilter.onchange = function () {
    if (IntelFilter.checked === true) {
        for (let i = 0; i < allVideocards.length; i++) {
            if (allVideocards[i].dataset.category === "Intel") {
                allVideocards[i].style.display = "block";
            }
        }
    }
    else {
        for (let i = 0; i < allVideocards.length; i++) {
            if (allVideocards[i].dataset.category === "Intel") {
                allVideocards[i].style.display = "none";
            }
        }
    }
}