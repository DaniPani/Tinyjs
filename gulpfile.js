const gulp = require('gulp')
const concat = require('gulp-concat')
const util = require('gulp-util')
const print = require('gulp-print')
const minimist = require('minimist')(process.argv.slice(2))
const gif = require('gulp-if')
const uglify = require('gulp-uglify-es').default;
const beautify = require('gulp-beautify');

components = {
    'addClass': 'src/components/addClass.js',
    'removeClass': 'src/components/removeClass.js',
    'allClass': 'src/components/allClass.js',
    'on': 'src/components/on.js',
    'once': 'src/components/once.js',
    'off': 'src/components/off.js',
    'text': 'src/components/text.js',
    'val': 'src/components/val.js',
    'width': 'src/components/width.js',
    'height': 'src/components/height.js',
    'show': 'src/components/show.js',
    'hide': 'src/components/hide.js',
    'css': 'src/components/css.js'
}

helpers = {
    'style': 'src/helpers/style.js',
    'undefined': 'src/helpers/undefined.js'
}

src = ['src/core.js']

gulp.task('default', () => {
    if (typeof minimist.all !== 'undefined' || typeof minimist.a !== 'undefined') {
        for (const iterator in components) {
            src.push(components[iterator])
        }
        for (const iterator in helpers) {
            src.push(helpers[iterator])
        }
    }
    if (typeof minimist.modules !== 'undefined' || typeof minimist.m !== 'undefined') {
        modules = minimist.modules || minimist.m
        modules = modules.split('\,')
        for (const iterator of modules) {
            if (iterator == 'text' || iterator == 'val' || iterator == 'css' || iterator == 'height' || iterator == 'width') {
                if (!src.includes(helpers['undefined'])) {
                    src.push(helpers['undefined'])
                }
            }
            if (iterator == 'css' || iterator == 'height'|| iterator == 'width') {
                if (!src.includes(helpers['style'])) {
                    src.push(helpers['style'])
                }
            }
            if (typeof components[iterator] !== "undefined") {
                src.push(components[iterator])
            }
        }
    } else {
        modules = src
    }
    gulp.src(src).pipe(concat('tiny.js')).pipe(gif(typeof minimist.env == 'undefined', beautify(), uglify())).on('error', function (err) {
        util.log(err.toString());
    }).pipe(gulp.dest('dist/'))
});