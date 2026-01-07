let heroeName = "Rookie";
let experience = 1;
let mesage = "O Herói de nome "+heroeName+" está no nível de ";

for(var xp = 0; xp <=10001; xp++)
{
    if(experience <= 1000)
        console.log(mesage + "Ferro")
    else if( experience <=2000)
        console.log(mesage + "Bronze")
    else if( experience <=5000)
        console.log(mesage + "Prata")
    else if( experience <= 7000)
        console.log(mesage + "Gold")
    else if(experience <= 8000)
        console.log(mesage + "Platina")
    else if( experience <= 9000)
        console.log(mesage + "Ascendente")
    else if( experience <= 10000)
        console.log(mesage + "Imortal")                
    else 
     {
             console.log(mesage + "Radiante");
             break;
     }  

    experience += 500
}


