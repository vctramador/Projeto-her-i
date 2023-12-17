let nome = victor

console.log(`Seja Ben vindo, ${nome}`)

console.log( `${nome}, Insira seu nível de XP para descobrir a sua classe!!`)

let nivelXp = 1500
switch(nivelXp){
    case  nivelXp < 1000:
         console.log("ferro")
    break

    case nivelXp >= 1000 && nivelXp < 2001:
        console.log("bronze")
        break

    case nivelXp > 2000 && nivelXp <= 6000:
        console.log("prata")
        break

    case nivelXp > 6000 && "nivelXp" <= 7000:
        console.log("ouro")
        break

    case nivelXp >= 7001 && nivelXp <= 8000:
        console.log("Platina")
        break

    case nivelXp >= 8001 && nivelXp <= 9000:
        console.log("Ascendente")
        break

    case nivelXp >= 9001 && nivelXp <= 10000:
        console.log("Imortal")
        break

    case nivelXp >= 10001:
        console.log("Radiante")
        break

    
}

console.log(`O herói de nome, ${nome}  esta no nivel ${nivelXp}`)