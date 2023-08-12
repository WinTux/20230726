//Primero importamos, de gulp: src, destination, watch y series
const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function haciendoestilos(){
    //acá usaremos las funciones src y dest que importamos:
    return src('Recursos/SASS/estilo-transpilado-2.scss')//dirección relativa
    .pipe(sass())
    .pipe(dest('Recursos/Estilos'))//transpilando a este folder 
}

function vigilanteDeCambios() {
    watch(['Recursos/SASS/estilo-transpilado-2.scss'],haciendoestilos)//vigila los cambios para transpilarlos
}

exports.default = series(haciendoestilos, vigilanteDeCambios)