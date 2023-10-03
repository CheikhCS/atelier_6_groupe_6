//  Script pour faire apparaitre le menu apres clic sur le menu hamburger
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");           

    banierre = document.querySelector(".banierre")
    banierre.classList.toggle("active");
}

        // changer l'atat avec apres scroll 
    navbar1 = document.querySelector(".top_bar")
    navbar2 = document.querySelector(".second-bar");
        // navbar3 = document.querySelector(".nav-bar");

    window.addEventListener('scroll', () => {
        console.log('scroll')
        if (window.scrollY > 500){
            navbar1.classList.add("top-bar-scroll")
            navbar2.classList.add("second-bar-scroll");
        }
            
            // if (window.scrollY > 1500){
            //     navbar3.classList.add(".nav-bar.scroll")

            // }

        else{
            navbar1.classList.remove("top-bar-scroll")
            navbar2.classList.remove("second-bar-scroll");
        }

            

        })