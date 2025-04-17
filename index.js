let heroName = "Mario" 
let xpQuantity = 1000
let level = ""

switch (true){
  case xpQuantity < 1000:
  level = "Ferro"
  break
  case xpQuantity <= 2000:
  level = "Bronze"
  break
  case xpQuantity <= 5000:
  level = "Prata"
  break
  case xpQuantity <= 7000:
  level = "Ouro"
  break
  case xpQuantity <= 8000:
  level = "Platina"
  break
  case xpQuantity <= 9000:
  level = "Ascendente"
  break
  case xpQuantity <= 10000:
  level = "Imortal"
  break
  case xpQuantity >= 10001:
  level = "Radiante"
  break
}
console.log("O Herói de nome " + heroName +  " está no nível de " + level)