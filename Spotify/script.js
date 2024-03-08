// pop up playlist
const buttonPlaylist  = document.querySelectorAll(".Bot");
const popUp = document.querySelector(".telaInteira");
const fecharPopUp = document.querySelector(".close");
// pop up incriçoes formulario
const buttonInscreverSe  = document.querySelector(".subscribe");
const buttonInscreverSeFooter  = document.querySelector(".footer__button");
const buttonEntar  = document.querySelector(".login");
const Form = document.querySelector(".BlackOut");
const fecharForm = document.querySelector(".formEnd");

// botão de confirmação do formulario
const ConfirmacaoFormulario = document.querySelector(".Confirmed");
let confiForm = false;

// 3* botao de formulario
const formDasPlaylists = document.querySelector(".login-free");

// botao acesso das playlists
const playlistsTrue  = document.querySelectorAll(".music-sections");






// Parte do pop up inicial de inscrição ao clicar na playlist


// função  para abrir o pop-up 

    
function openPopUp() {

            if (confiForm === false) {

                // console.log(confiForm)

                if(popUp.style.display == "none"){
                                    popUp.style.display = 'flex';
                
                                }else{
                                    popUp.style.display = 'none';
                                }
                            
            }
                    

}

    
    
        // escutar o evento e efetuar função
    buttonPlaylist.forEach((butto) =>
    butto.addEventListener("click", () => openPopUp())
    );

    
    


        // fechar pop-up

        
    fecharPopUp.addEventListener('click', () => {

        if(popUp.style.display == "flex"){
            popUp.style.display = 'none';
            
        }else{
            popUp.style.display = 'flex';
        }
        
    })


// fim da seção do pop up das playlist



    // Seção do Formulário de login


// se o popUp estiver aberto feche ele

    function openForm() {
        if(Form.style.display == "none" ){
            Form.style.display = 'flex';
            
        }else{
            Form.style.display = 'none';
        }


                if(popUp.style.display == "flex"){
            popUp.style.display = 'none';
            
                    }else{
            popUp.style.display = 'none';
        }
        

                
    }
    
       buttonInscreverSe.addEventListener ("click", () => openForm());
       buttonInscreverSeFooter.addEventListener ("click", () => openForm());

        // abrir e fechar
formDasPlaylists.addEventListener ("click", () => openForm());




             // fechar Form
function fecharFormulario() {
    if(Form.style.display == "flex"){
            Form.style.display = 'none';
            
        }else{
            Form.style.display = 'flex';
        }
}
             fecharForm.addEventListener('click', () => fecharFormulario() );



                
        

        


        // se incrição form estiver concluida possiblita abertura de link playlist


        
function playlisttrue() {
    

        if (confiForm === true) {
            console.log(confiForm)

            playlistsTrue.forEach((butto) =>
    butto.addEventListener("click", () => {
        console.log("clic");

        const win = window.open("Spotify/inside-playlist.htm","_self");
    })
    );


        }
            
}

// parte mais dificult

        // quando botão de confirmar for clicado as playlist nao irmao mais puxar o popUp

ConfirmacaoFormulario.addEventListener ("click", () => {
            confiForm = true;
            

                fecharFormulario()

                playlisttrue()
        })

   