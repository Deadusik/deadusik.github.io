const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// функція для компіляції з scss у css
function buildStyles() {
    // встановлюємо шлях 
    // кажемо що шукаємо будь які 
    // файли scss (/*.scss)
    // у папці scss з вкладеннями 
    // будь якого рівня (/**/)
    return src('scss/**/*.scss')
        .pipe(sass())
        // куди будемо компілювати scss
        // (буде компілювати у css папку в корні)
        .pipe(dest('css'))
}

// функція, яка перевіряє зміни,
// і при наявності автоматично 
// робить компіляцію з scss у css
function watchTask() {
    // встановлюємо, у яких файлах
    // будемо слідкувати за змінами
    // також функцію, яка буде 
    // відпрацьовувати при змінах 
    watch(['scss/**/*.scss'], buildStyles)
}

// gulp виконає послідовно вказані функції,
// коли його запустять
exports.default = series(buildStyles, watchTask)