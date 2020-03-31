const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

minhaPromise().then(response => {
    console.log(response);
});







// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);   
//         console.log(this.data);
//     }
// }

// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'Jordan';
//     }

//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();


// Desestruturação

// const usuario = {
//     nome: 'Jordan',
//     idade: 23,
//     endereço: {
//         cidade: 'Juiz de Fora',
//         estado: 'MG'
//     },
// };

// const { nome, idade, endereço: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);



// // REST

// function soma(a, b, ...params){
//     return params;
// }

// console.log(soma(1,2,3,4,5,6,7));

// // SPREAD

// const usuario1 = {
//     nome: "Diego",
//     idade: 23,
//     empresa: "Rocketseat",
// };

// const usuario2 = { ...usuario1, nome: "Jordan" };

// console.log(usuario2);


// Template Literals

// const nome = 'Jordan';
// const idade = 29;

// console.log(`Meu nome é ${nome} e minha idade é ${idade}`);

// import { soma } from './funcoes';

// console.log(soma(1,2));