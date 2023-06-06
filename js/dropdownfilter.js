let allVideocards = document.getElementsByClassName("videocard");
let filters = document.getElementsByClassName("filter");

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}


//nvidia filters
let nvidiafilter = document.getElementById("checkbox-Nvidia");
nvidiafilter.onchange = function () {
    if(nvidiafilter.checked === true){
        for (let i = 0; i < allVideocards.length; i++) {
            if (allVideocards[i].dataset.category === "Nvidia") {
                allVideocards[i].style.display = "block";
            }
        }
    }
    else{
        for (let i = 0; i < allVideocards.length; i++) {
            if (allVideocards[i].dataset.category === "Nvidia") {
                console.log("Nvidia gone");
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
                console.log("AMD gone");
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
                console.log("Intel gone");
                allVideocards[i].style.display = "none";
            }
        }
    }
}