let minhaDiv = document.querySelector('#div1')

minhaDiv.addEventListener('mouseenter', entrar)
minhaDiv.addEventListener('mouseout', sair)
minhaDiv.addEventListener('click', clicar)
minhaDiv.addEventListener('contextmenu', clickDireito)
minhaDiv.addEventListener('dblclick', clickDuplo)
minhaDiv.addEventListener('mousemove', mover)
minhaDiv.addEventListener('mousedown', apertar)
minhaDiv.addEventListener('mouseup', soltar)




function entrar(){
    minhaDiv.innerHTML = 'Você entrou!'
    minhaDiv.style.backgroundColor = 'blue'
}

function sair(){
    minhaDiv.innerHTML = 'Você saiu!'
    minhaDiv.style.backgroundColor = 'green'
}

function clickDireito(e){
    e.preventDefault()
    minhaDiv.innerHTML = 'Click Direito!'
    minhaDiv.style.backgroundColor = 'pink'
}

function clicar(){
    minhaDiv.innerHTML = 'Você clicou!'
    minhaDiv.style.backgroundColor = 'orange'
}

function clickDuplo(){
    minhaDiv.innerHTML = 'Click duplo!'
    minhaDiv.style.backgroundColor = 'red'
}

function mover(e){
   let x = e.clientX - this.offsetLeft
   let y = e.clientY - this.offsetTop
   let res = document.querySelector('span')
   res.innerHTML = `Posição X: ${x} e Y: ${Y}`
}

function apertar(){
    minhaDiv.innerHTML = 'Você apertou!'
    minhaDiv.style.backgroundColor = 'orange'
}

function soltar(){
    minhaDiv.innerHTML = 'Você Soltou!'
    minhaDiv.style.backgroundColor = 'lime'
}