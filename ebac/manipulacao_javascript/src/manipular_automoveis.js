var imprimir = (str) => {
    document.getElementById('main').innerHTML = document.getElementById('main').innerHTML + str + "<br>" + "<br>";
}

const CONST_PORTAS_4 = 4
const CONST_PORTAS_2 = 2


let carro_gol       = ['VOLKSWAGEN', 'Gol', CONST_PORTAS_4, 100000];
let carro_paleo     = ['FIAT', 'Paleo', CONST_PORTAS_2, 120000];
let carro_a3        = ['AUDI', 'A3', CONST_PORTAS_4, 140000];
let carro_passat    = ['VOLKSWAGEN', 'Passat', CONST_PORTAS_4, 150000];
let carro_vectra    = ['CHEVROLET', 'Vectra', CONST_PORTAS_4, 160000];
let carro_astra     = ['CHEVROLET', 'Astra', CONST_PORTAS_4, 107000];

let moto_suzuki     = ['SUZUKI', 'Suziki', 103000];
let moto_honda      = ['HONDA', 'Honda', 105000];
let moto_ninja      = ['HONDA', 'Ninja', 170000];
let moto_XR3        = ['HONDA', 'XR3', 109000];


let todosCarros = [
    carro_gol,
    carro_paleo,
    carro_a3,
    carro_passat,
    carro_vectra,
    carro_astra
]

let todasMotos = [
    moto_suzuki,
    moto_honda,
    moto_ninja,
    moto_XR3
]

imprimir('<strong>TODOS:</strong>----------------------')
todosCarros.forEach(carro => imprimir(carro))

let todosChevrolet = todosCarros.filter((carro) => carro[0] == 'CHEVROLET');
let todosChevroletFormatados = todosChevrolet.map((carro) => carro[1] + ' ' + carro[2] + " portas R$: " + carro[3])
imprimir('<strong>SOMENTE CHEVROLET:</strong>----------')
imprimir(todosChevroletFormatados);

let somaValoresChevrolet = todosChevrolet.reduce((v1, v2) => v1[3] + v2[3]);
imprimir("<strong>TOTAL (CHEVROLET):</strong> R$ " + somaValoresChevrolet);

let todosFiat = todosCarros.filter((carro) => carro[0] == 'FIAT');
let todosFiatFormatados = todosFiat.map((carro) => carro[1] + ' ' + carro[2] + " portas R$: " + carro[3])
imprimir('<strong>SOMENTE FIAT:</strong>--------------------------')
imprimir(todosFiatFormatados);

let somaValoresFiat = todosFiat.reduce((v1, v2) => v1[3] + v2[3]);
imprimir("<strong>TOTAL (FIAT):</strong> R$ " + somaValoresFiat);


