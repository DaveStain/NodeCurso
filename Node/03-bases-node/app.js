const { crearArchivo } = require('./multiplicar/multiplicar')


// let base = '7';

// for (let i = 1; i <= 10; i++) {
//     data += `${ base } * ${ i } = ${ base * i }\n`;
// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${ base }.txt ha sido creado`);
// });

// console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));