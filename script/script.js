let nombrePlanetas = Array('Tierra','Marte')
let distancia = [6,3,'67']
const tamaño =[]


console.log(nombrePlanetas)
console.log(distancia)
console.log(tamaño)

let i=0;
while (i <= nombrePlanetas.length - 1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i + 1
}

for (let index =0; index < nombrePlanetas.length;index++){
    console.log(nombrePlanetas[index]);
}

for (const  key in object){
    if (Object.hasOwnProperty.call(Object,key)){
     const element = object[key];  
    }
    
}

for (const key in nombrePlanetas){
    console.log(nombrePlanetas)
}

for (const iterator of object){

}

for (const planeta of nombrePlanetas){
    console.log(planeta)
}

for (const key in distancia){

if(distancia[key] == '5'){
    console.log('se encontro la distancia')}

    else{ 
    console.log('no se encontro la distancia')
}

}