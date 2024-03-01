const button  = document.querySelectorAll(".Bot");
const popUp = document.querySelector(".telaInteira")
const fecharPopUp = document.querySelector(".close")


    function openPopUp() {
        if(popUp.style.display == "none"){
            popUp.style.display = 'flex'
            
        }else{
            popUp.style.display = 'none'
        }
    }
    
    
    button.forEach((butto) =>
    butto.addEventListener("click", () => openPopUp())
    )
    


        

    fecharPopUp.addEventListener('click', () => {

        if(popUp.style.display == "flex"){
            popUp.style.display = 'none'
            
        }else{
            popUp.style.display = 'flex'
        }
        
    })




       

