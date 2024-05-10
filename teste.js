let botao = document.querySelector('#btn-aviso') 

//botao.onclick = ()=>alert("Teste Click!")
botao.addEventListener("click", clicou)
botao.addEventListener("mouseenter", entrou)
botao.addEventListener("mouseout", saiu)

function saiu(){
    botao.innerHTML = "Saiu"
}

function entrou(){
    botao.innerHTML = "entrou"
}

function clicou(){
    botao.innerHTML = "Clicou, não entra nem sai mais!"
    botao.removeEventListener("mouseenter", entrou)
    botao.removeEventListener("mouseout", saiu)
}


//function({})
//()=>{}

let botoes = document.querySelectorAll(".item")

console.log(botoes[0]);

botoes.forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
    console.log("Clicou no botão"+(i+1))
    }
    )
}
)




