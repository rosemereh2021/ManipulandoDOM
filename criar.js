const createElement = (elementName, attributes) => {
const element = document.createElement(elementName)
const attattributesArray = Object.entries(attributes)

attattributesArray.forEach (( [ key, value ] ) => { //((arr)=> {
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



