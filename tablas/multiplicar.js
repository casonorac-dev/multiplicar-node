const fs = require('fs');
var colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido para base: '${base}', no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para límite: '${limite}', no es un número`);
            return;
        }

        console.log('====================================='.green);
        console.log(`Tabla del ${base}`.green);
        console.log('====================================='.green);

        for (let i = 1; i <= limite; i++) {
            data+=(`${base} x ${i} = ${base*i}\n`);
        }
        resolve(data);
    });
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido para base: '${base}', no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido para límite: '${limite}', no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(colors.green(`tabla-del-${base}-hasta-${limite}.txt`));
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}