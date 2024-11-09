
calculator(67, 5);

function calculator(victories, losses, level){
    victories = victories - losses;
    if(victories <= 10){
        level = "Ferro";
        console.log("O Herói tem de saldo de: ", victories, " e está no nível de: ", level);
    }else if(victories >= 11 && victories <= 20){
        level = "Bronze";
        console.log("O Herói tem de saldo de ", victories, " e está no nível de: ", level);
    }else if(victories >= 21 && victories <= 50){
        level = "Prata";
        console.log("O Herói tem de saldo de ", victories, " e está no nível de: ", level);
    }else if(victories >= 51 && victories <= 80){
        level = "Ouro";
        console.log("O Herói tem de saldo de ", victories, " e está no nível de: ", level);
    }else if(victories >= 81 && victories <=90){
        level = "Diamante";
        console.log("O Herói tem de saldo de ", victories, " e está no nível de: ", level);
    }else if(victories >=91 && victories <= 100){
        level = "Lendario";
        console.log("O Herói tem de saldo de ", victories, " e está no nível de: ", level);
    }else if(victories > 101){
        level= "Imortal";
        console.log("O Herói tem de saldo de ", victories, " e está no nível de: ", level);
    }
}

/*Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal*/

"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"