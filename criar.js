const createElement = (elementName, attributes) => {
const element = document.createElement(elementName)
const attributesArray = Object.entries(attributes)

attributesArray.forEach (( [ key, value ] ) => { //((arr)=> {
element.setAttribute( key, value ); //(arr[0], arr[1]);
})

return element;

};
const input = createElement('input', {
type: 'radio' ,
id: 'input1' ,
name: 'main' ,
value: 'principaal' ,
for: 'input1' ,
'data-js': 'input1' ,

});
console.log(input);

// Criando element array e forEach...
//metodos precisos com [key, value]

// code cursos
class Fone {
constructor() {
this.cor = " Blue "
this.marca = " Apple "

}

   audio() {
        console.log("audio");
        return "Som"
        
    };
        
    bluthth() {
        console.log("Estereo");
        return "Saida 5.1"
        
    };
    
};

let object = new Fone();
console.log(object.cor);
console.log(object.audio());
console.log(object.bluthth());
console.log(object.marca);
    
