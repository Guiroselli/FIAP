let texto = document.querySelector('#idTexto')

texto.addEventListener('kaydown', ()=>{
   let resultado = document.querySelector('#res')
   resultado.innerHTML = ''
   texto.value = ''
})


//Mostras o codigo da tecla
texto.addEventListener('kayup', ()=>{
    let resultado = document.querySelector('#res')
    resultado.innerHTML = `A tecal ${texto.value} = ${e.keyCode}`
})