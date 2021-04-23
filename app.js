var senha = 22092019
var happy = '<center><img src="https://media.tenor.com/images/79dbfe16e324f53a3035309619fc8052/tenor.gif"></center>'
var erro = '<center><img src="https://media2.giphy.com/media/xHwqspaBmfUMU/200.gif"></center>'
var tentativas = 3


while (tentativas > 0) {
  var login = parseInt(prompt("Digite a senha:"))

  if (login == senha) {
    document.write(happy)
    document.write("<h2>Acertou!!!</h2>")
    break
  } else if (login != senha) {    
    tentativas = tentativas - 1 
    alert("Senha invalida, tente novamente.")
  }
} 
if (login != senha) {
document.write(erro)
document.write("<h2>Acesso negado</h2>")
  }