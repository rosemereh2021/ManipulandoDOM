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

