let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector (".nav-hamburger");
    let getSidebarUl = document.querySelector (".nav-hamburger ul");
    let getSidebarTitle = document.querySelector (".nav-hamburger span");
    let getSidebarLinks = document.querySelectorAll (".nav-hamburger a");

    if (toggleNavStatus === false) {
        getSidebar.style.width = "350px";
        getSidebar.style.background = "#0088e3"
        getSidebarUl.style.visibility = "visible";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "0px";
        getSidebar.style.background = "white"
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        getSidebarUl.style.visibility = "visible";

        toggleNavStatus = false;
    }

}

let changeColorWhite = function () {
    let getColor = document.querySelector ("body");
    let getSidebar = document.querySelector (".nav-hamburger");
    let getSidebarUl = document.querySelector (".nav-hamburger ul");
    let getSidebarTitle = document.querySelector (".nav-hamburger span");

    getColor.style.background = "white"
    getSidebar.style.width = "0px";
    getSidebar.style.background = "white"
    getSidebarTitle.style.opacity = "0";
    getSidebarUl.style.visibility = "visible";
    document.getElementById("color").innerHTML = "Wit";

    toggleNavStatus = true;

}

let changeColorRed = function () {
    let getColor = document.querySelector ("body");
    let getSidebar = document.querySelector (".nav-hamburger");
    let getSidebarUl = document.querySelector (".nav-hamburger ul");
    let getSidebarTitle = document.querySelector (".nav-hamburger span");

    getColor.style.background = "red"
    getSidebar.style.width = "0px";
    getSidebar.style.background = "white"
    getSidebarTitle.style.opacity = "0";
    getSidebarUl.style.visibility = "visible";
    document.getElementById("color").innerHTML = "Rood";

    toggleNavStatus = true;
}

let changeColorGreen = function () {
    let getColor = document.querySelector ("body");
    let getSidebar = document.querySelector (".nav-hamburger");
    let getSidebarUl = document.querySelector (".nav-hamburger ul");
    let getSidebarTitle = document.querySelector (".nav-hamburger span");

    getColor.style.background = "green"
    getSidebar.style.width = "0px";
    getSidebar.style.background = "white"
    getSidebarTitle.style.opacity = "0";
    getSidebarUl.style.visibility = "visible";
    document.getElementById("color").innerHTML = "Groen";

    toggleNavStatus = true;
}

let changeColorBlue = function () {
    let getColor = document.querySelector ("body");
    let getSidebar = document.querySelector (".nav-hamburger");
    let getSidebarUl = document.querySelector (".nav-hamburger ul");
    let getSidebarTitle = document.querySelector (".nav-hamburger span");

    getColor.style.background = "blue"
    getSidebar.style.width = "0px";
    getSidebar.style.background = "white"
    getSidebarTitle.style.opacity = "0";
    getSidebarUl.style.visibility = "visible";
    document.getElementById("color").innerHTML = "Blauw";

    toggleNavStatus = true;
}

let keyboard = document.getElementById('body');

keyboard.addEventListener('keydown', (e) => {
    if(e.key === "1") {
        keyboard.style.background = "white"
        document.getElementById("color").innerHTML = "Wit";
        document.getElementById("white").checked = "checked";
    }
})

keyboard.addEventListener('keydown', (e) => {
    if(e.key === "2") {
        keyboard.style.background = "red"
        document.getElementById("color").innerHTML = "Rood";
        document.getElementById("red").checked = "checked";
    }
})

keyboard.addEventListener('keydown', (e) => {
    if(e.key === "3") {
        keyboard.style.background = "green"
        document.getElementById("color").innerHTML = "Groen";
        document.getElementById("green").checked = "checked";
    }
})

keyboard.addEventListener('keydown', (e) => {
    if(e.key === "4") {
        keyboard.style.background = "blue"
        document.getElementById("color").innerHTML = "Blauw";
        document.getElementById("blue").checked = "checked";
    }
})