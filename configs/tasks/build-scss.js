module.exports = (gulp, plugins, config) => () => {
    return gulp.src(config.paths.sass)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer({browsers: config.sass.version, cascade: false}))
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(`${config.paths.dist}/css`));
};
