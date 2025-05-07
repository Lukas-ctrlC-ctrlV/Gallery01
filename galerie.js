let animace = document.querySelector("#ch123")
let obrazek1 = document.querySelectorAll(".prvni-obrazek")
let obrazek2 = document.querySelectorAll(".druhy-obrazek")

animace.addEventListener("change",function(e){

    if(animace.checked){
        obrazek1.forEach(function(obrazek){
            obrazek.classList.add("prvni-obrazek-active")
            
        })

        obrazek2.forEach(function(obrazek){
            obrazek.classList.add("druhy-obrazek-active")
            
        })
    } else {
        obrazek1.forEach(function(obrazek){
            obrazek.classList.remove("prvni-obrazek-active")
            
        })

        obrazek2.forEach(function(obrazek){
            obrazek.classList.remove("druhy-obrazek-active")
            
        })
    }
})