
//Podemos usar o recurso de interpolação de strings para formatar um texto utilizando Template Literals:
const data = new Date(1534342979126) // 15/08/2018 as 11:22:59
const mensagem = `O sistema foi iniciado as ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
console.log(mensagem) // O sistema foi iniciado as 11:22:59


// outro exemplo
  let str = `Template literal in ES6`;
  console.log(str);// Template literal in ES6
  console.log(str.length); // 23
  console.log(typeof str);// string

// objetos com $ {}
  let firstName = 'John',
  lastName = 'Doe';
let greeting = `Hi ${firstName}, ${lastName}`;
console.log(greeting); // Hi John, Doe

// novo exemplo a expansão de strings
let price = 8.99,
    tax = 0.1;
var netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;
console.log(netPrice); // netPrice:$9.89

// devpleno template string
function tag(strings, ...values) {
    console.log(strings, values)
    return 'opa'
  }
  tag`Hello ${'world'}`; // Hello world
  console.log(str) // Olá $ {10} mundo!
  
  // EXEMPLO
  const str1 = `teste`
  const strMultiLinha = 'linha1 \n linha2 \n linha3'
  console.log(strMultiLinha)


let name = "Antonio Flayer";
let profissão = "Programador";
let idNumber = 4784;
let end = "Rua dos Cariocas, nº 1244";
 // ${variavel}
console.log(`Meu name é ${name} e eu sou um Baita ${profissão}  ${idNumber} itapevi sp ${end}`);

    let = document.querySelector(".teste")
    .textContent = " Sabedoria Vem de DEUS!!! ";


   let sumone = (v1, v2) => {
     return v1 + v2;
   }
console.log(sumone(20,23));
