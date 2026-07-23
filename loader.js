window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").classList.add("hidden");

        document.querySelector(".star-fly").style.animationPlayState = "running";

        document.querySelector("h1").style.animationPlayState = "running";

        document.querySelector(".hero p").style.animationPlayState = "running";

        document.querySelector(".hero button").style.animationPlayState = "running";

    },1300);

});