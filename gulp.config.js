module.exports = function() {
    var config = {
        root: './',
        client: './src/',
        sass: './src/sass/**/*.sass',
        dist: './dist/css/',
        html: './*.html',
        alljs: './src/**/*.js',
        cssfiles: './cons/**/*.+(sass|scss|css)',
        converterfolder: './cons/'
    };

    return config;

};
