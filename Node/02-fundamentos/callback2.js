let empleados = [{
    id: 1,
    nombre: 'David'
}, {
    id: 2,
    nombre: 'Paulina'
}, {
    id: 3,
    nombre: 'Benja'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}

// let getSalario = (id, callback) => {

//     let empleadoDB = empleados.find(empleado => empleado.id === id);
//     let salarioDB = salarios.find(empleado => empleado.id === id);
//     let empleadoTarea = {
//         nombre: empleadoDB.nombre,
//         salario: salarioDB.salario
//     }
//     if (!empleadoDB) {
//         callback(`No existe un empleado con el ID ${ id }`);
//     } else {
//         callback(null, empleadoTarea);
//     }
// }

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No de encontró un salario para el empleado ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        })
    }
}

// getSalario(1, (err, empleado) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(empleado);
// });
getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El salario de ${ resp.nombre } es de $${ resp.salario }`);
    });
});