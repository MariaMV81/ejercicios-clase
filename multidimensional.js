const multi = [[1, 2, 3, 4],
                    [5, 6, 7, 8]];

let resultado = 0;


//  console.log(multi[0]);   
//  console.log(multi[1]);       
//  console.log(multi[0][0]);    
//  console.log(multi[0][1]);    
//  console.log(multi[1][0]);                 


 //Sumar todos los números


//  for (var i = 0; i < multi[0].length; i++) {
//    resultado= resultado + multi[i][1];
   
//  }
//  for (var i = 0; i < multi[1].length; i++) {
//    resultado = resultado + multi[i][1];
//  } 
 

for (let j = 0; j < multi.length; j++){
    for (let i = 0; i < multi[j].length; i++){
        resultado += multi[j][i]
    }
}

 console.log(`El resultado de la suma del array multidimensional será: ${resultado}`)