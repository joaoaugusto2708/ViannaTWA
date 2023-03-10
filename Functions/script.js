
//function eTrue(valor){
//   if(valor)
//       return true;
//}

//function perimetroQuadrado(lado) {
//    return lado * 4;
//}

//console.log(perimetroQuadrado(4));

function elefantesIncomodam(numElefantes){
    let letra = '1 elefante incomoda muita gente \n';
    for(var i = 2; i <= 10 ; i++){
        if(i % 2 == 0){
            letra += `${i} elefantes incomodam`;
            for(var j = 0; j < i; j++){
                letra += `, incomodam`;
            }
            letra += ` muito mais \n`;
        }
       else{
        letra += `${i} elefantes incomodam muita gente \n`;
       }
    }
    console.log(letra);
    for(var i = 10; i >= 0 ; i--){
        if(i % 2 != 0){
            letra += `${i} elefantes incomodam`;
            for(var j = 0; j < i; j++){
                letra += `, incomodam`;
            }
            letra += ` muito mais \n`;
        }
       else{
        letra += `${i} elefantes incomodam muita gente \n`;
       }
    }
    console.log(letra);
}
elefantesIncomodam(10);