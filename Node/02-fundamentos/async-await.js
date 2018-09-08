/**
 * Async Await
 */


// let getNombre = async() => {
//     //throw new Error('No existe un usuario');
//     return 'David';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('David');
        }, 3000);
    });
}

let saludo = async() => {

    let nombre = await getNombre();

    return `Hola ${ nombre }`;
}

saludo().then((mensaje) => {
    console.log(mensaje);
    // }).catch((e) => {
    //     console.log('Error de ASYNC', e);
});