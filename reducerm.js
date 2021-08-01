const reduce = (arr, func, initialValue) => {
let acc = initialValue

arr.forEach((item, index, array) => {
    acc = func(acc, item, index, array)

})
return acc

}

console.log(reduce([1, 2, 3], (acc, item) => acc + item, 0));
console.log(reduce([2, 3, 4], (acc, item) => acc + item, 0));
console.log(reduce([1, 2],
(acc, item) => {
acc["number-" + item] = item // string/objeto Gerado via reduce
return acc
// {"number-1": 1, "number-2: 2"}
},
{}
))
console.log(reduce([1, 2], (acc, item, index) => acc + index, 0 ));
console.log(reduce([1, 2, 3, 4], (acc, item, index, array) => acc + array[index], 0 ))


/* // Refaturado organizado
const reduce = (arr, func, initialValue) => {
let acc = initialValue;
const accumulateCallbackReturn = (item, index, array) => {
acc = func(acc, item, index, array)
}
arr.forEach(accumulateCallbackReturn)
return acc
}

 const createItemBaseProperties =  (acc, item) => {
    acc['number-' + item] = item;
    return acc
    }

const sumItems = (acc, item) => acc + item
const sumItemsPlusIndex = (acc, item , index) => acc + index
const sumItensUsingArrayParam = (acc, item , index, array) => acc + array[index];
console.log(reduce([1, 2, 3], sumItems, 0));
console.log(reduce([2, 3, 4], sumItems, 0));
console.log(reduce([1, 2], createItemBaseProperties, {}));
console.log(reduce( [1, 2], sumItemsPlusIndex , 0));
console.log(reduce([1, 2], sumItensUsingArrayParam, 0));
//{"number-1": 1, "number-2: 2"}



const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);// boa pratica 0
console.log(sum);

const name = ['Na', 'ta', 'lia'];
const nameOne = ['An', 'to', 'nio' , 'Sil', 'va'];
const name2 = ['Ra', 'fa', 'ela'];
const myName = ['Ro', 'ger'];
const getNameInPLanguage = name =>
    name.reduce((acc, syllable) => `${acc}P${syllable}`, '')
console.log(getNameInPLanguage(name));
console.log(getNameInPLanguage(nameOne));
console.log(getNameInPLanguage(name2));
console.log(getNameInPLanguage(myName));


    const rockets = [
    { país: "Rússia", launches: 32} ,
    { país: "EUA", launches: 23} ,
     { país : "Brasil" , launches : 22} ,
    { país: "China", launches: 16} ,
    { país: "Europa", launches: 7} ,
    { país: "Índia", launches: 4} ,
    { país: "Japão",  launches: 3},

    ];
  
  const  totalLaunches = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0);

  console.log (totalLaunches);
 */
// Array concat
  const Frutas = ["Abacate", "Ameixa", "Acerola"];
const removerFrutas = Frutas.pop();
console.log(removerFrutas);
/*
let Fruitas = ["tete", "Abacate", "Ameixa", "Acerola"," pintoo"];
let addFruitas = Fruitas.indexOf("Abacate");
console.log(addFruitas);


let Fruitas = ["Tete", "Abacate", "Ameixa", "Acerola", "Pintoo"];
let addFruitas = Fruitas.push("Jamelão", "Amora");
console.log(addFruitas);

 
//let Fruitas = ["tete", "Abacate", "Ameixa", "Acerola", "pintoo", "Pera", "Melão", "Jaca"];
// addFruitas = Fruitas.splice(3, 3, " Love rosemeire");
//console.log(addFruitas);
*/

  const Numberss = [5, 4, 3, 2, 1, 0];
Numberss.sort((a, b) => {
 if (a < b)  return -1;

});
Numberss.sort((a, b) => {
  //  if (a > b)  return 1;
    });  
console.log(Numberss);
// Arrow seta function
let sumonne = (x1, x2, x3) => {
return (x1 + x2 * x3);

};
console.log(sumonne(7, 7, 2));

