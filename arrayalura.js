const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];
            //Filter
const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));
console.log( anoDeCriacao );

    //Map
    const exibeInformacoes = empresas.map( empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);
 console.log( exibeInformacoes )

            //Reducs
    const total = empresas.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valorDeMercado);
     }, 0);
            console.log(total) 
            1840

     const materials = [
     'Beryllium', 'Lithium', 'Hydrogen',  'Helium', 
              ];       
      console.log(materials.map(material => material.length));
              // expected output: Array [8, 6, 7, 9]
              class A {
                constructor() {
                  console.log(new.target.name);
                }
              }
              
              class B extends A { constructor() { super(); } }
              
              var a = new A(); // logs "A"
              var b = new B(); // logs "B"
              
              class C { constructor() { console.log(new.target); } }
              class D extends C { constructor() { super(); } }
              
              var c = new C(); // logs class C{constructor(){console.log(new.target);}}
              var d = new D(); // logs class D extends C{constructor(){super();}}
// array callback =>
const number  = [ 1, 2, 3, 4, 5, 8 ];
const sum = number.reduce((sum, number) => sum + number, 0);
 console.log(sum);

 const produto = { id : 1, nome : 'Grampo', preco : 34.6 }

const descricao = `${produto.nome} por apenas R$ ${produto.preco}`

console.log(descricao) // Grampo por apenas R$ 34.6


/*
// obj //
let obj = {
nome: "FLAYER PENTECOSTE",
end: "Pq Sub",
age: function(year) {
return 2021 -year;
},
city: "São Paulo",
country: "Brasil",

};
console.log(obj.end);
console.log(obj.age(1980));// pode por só (obj)

// hcode cursos
class Cell {
constructor() {
this.color = "Red";

}

peso() {
  console.log("100g");
  return "Muito peso"
  , "testando",
   "Node JS", "Teste";
}

};

let objeto = new Cell();
console.log(objeto.color);
console.log(objeto.peso());
*/
// Rafaela Alura top
class Pessoa {
constructor(nome, sobrenome, endereco) {
this.nome = nome
this.sobrenome = sobrenome
this.endereco = endereco

}
cargo() {
console.log("Encarregado");
return "Servo de DEUS!"


}


};

  let antonio = new Pessoa("Antonio",
 "SILVA",
"Rua dos Cariocas");
console.log(antonio);
console.log(antonio.cargo());


let Person ={
Nome: "Rosemeire",
Idade: "49 Anos",
feliz: true,
Pets: ["cachorro", "gato", "gata"],

Carros: {
  camaro: {
    Motor: 2.1,
    Freios: "Abs autmatic",
    Ano: 2020,
placa: 123456,
cor: " Verde",

  },

uno: {
  Combustivel: "Flex Power",
  Marca: "Fiat",
  Modelo: "Esport 2.2",
placa: "231456",
cor: "Branco",

},


}

}; // final da função.
console.log(Person.Carros.camaro.Ano);
console.log(Person.Idade);

