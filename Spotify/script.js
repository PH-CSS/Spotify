// pop up playlist
const buttonPlaylist = document.querySelectorAll(".Bot");
const popUp = document.querySelector(".telaInteira");
const fecharPopUp = document.querySelector(".close");
// pop up incriçoes formulario
const buttonInscreverSe = document.querySelector(".subscribe");
const buttonInscreverSeFooter = document.querySelector(".footer__button");
const Form = document.querySelector(".BlackOut");
const fecharForm = document.querySelector(".formEnd");

// mudar o "entrar"
const bntEntrarOutropop = document.querySelector(".Enter");
const bntEntrarOutropopOprimeiro = document.querySelector(".EnterOnOther");
const bntEntrar = document.querySelector(".login");
const MudarTexto = document.querySelector(".changeText");
const P = document.querySelector(".ix");

// botão de confirmação do formulario
const ConfirmacaoFormulario = document.querySelector(".Confirmed");
let confiForm = false;

// 3* botao de formulario
const formDasPlaylists = document.querySelector(".login-free");

// botao acesso das playlists
const playlistsTrue = document.querySelectorAll(".music-sections");

// botao confirmação de email e usuario
const btn = document.querySelector(".Confirmed");

// imagem de usuario depois da retirada do inscrever-se
const imgUsuarioTrue = document.querySelector(".imgUsuarioTrue");
const welcomeOrBack = document.querySelector(".welcomeOrBack");




// Parte do pop up inicial de inscrição ao clicar na playlist


// função  para abrir o pop-up 


function openPopUp() {

    if (!confiForm) {
        console.log(popUp.style.display)
        // console.log(confiForm)

        if (popUp.style.display === "none" || popUp.style.display === '') {
            popUp.style.display = 'flex';

        } else {
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

    if (popUp.style.display == "flex") {
        popUp.style.display = 'none';

    } else {
        popUp.style.display = 'flex';
    }

})


// fim da seção do pop up das playlist



// Seção do Formulário de login


// se o popUp estiver aberto feche ele

function openForm() {
    if (Form.style.display == "none" || Form.style.display === '') {
        Form.style.display = 'flex';

    } else {
        Form.style.display = 'none';
    }


    if (popUp.style.display == "flex") {
        popUp.style.display = 'none';

    } else {
        popUp.style.display = 'none';
    }

    MudarTexto.innerHTML = "<h1>Comece com <br>uma conta gratuita do <br>Spotify</h1>"



}

buttonInscreverSe.addEventListener("click", function () {
    openForm()
    P.innerHTML = " Já tem uma conta? <a >Entrar</a> </h3> ";

});
buttonInscreverSeFooter.addEventListener("click", function () {
    openForm()
    P.style.display = " Já tem uma conta? <a >Entrar</a> </h3> ";

});
//    formulario "já cadastrado"



bntEntrarOutropop.addEventListener("click", function () {
    openForm()

    MudarTexto.textContent = "Entrar no Spotify"


});

bntEntrar.addEventListener("click", function () {
    openForm()

    MudarTexto.textContent = "Entrar no Spotify"

});





// abrir e fechar
formDasPlaylists.addEventListener("click", () => openForm());




// fechar Form
function fecharFormulario() {
    if (Form.style.display == "flex") {
        Form.style.display = 'none';

    } else {
        Form.style.display = 'flex';
    }
}
fecharForm.addEventListener('click', () => fecharFormulario());









// se incrição form estiver concluida possiblita abertura de link playlist



function playlisttrue() {


    if (confiForm === true) {
        // console.log(confiForm)

        playlistsTrue.forEach((butto) =>
            butto.addEventListener("click", () => {
                console.log("clic");

                const win = window.open("Spotify/inside-playlist.htm", "_self");
            })
        );


    }

}

// parte mais dificult

// quando botão de confirmar for clicado as playlist nao irmao mais puxar o popUp

ConfirmacaoFormulario.addEventListener("click", () => {
    confiForm = true;


    fecharFormulario()

    playlisttrue()
});



// receber valor de Nome do usuario 

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector("#name");

    const valuer = name.value;


    // retirada do inscrever-se
    buttonInscreverSe.style.display = 'none'
    bntEntrar.style.display = 'none'
    // usuario
    imgUsuarioTrue.style.display = 'block';
    // nome usuario

    welcomeOrBack.innerHTML = "Bem  vindo, " + name.value + "!";


    // console.log (value);

})



        //Abrir perfil de usuario e tirar "entrar, login"





