module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine_node: {
            specNameMatcher: ".Spec", // load only specs containing specNameMatcher
            projectRoot: "spec",
            requirejs: false,
            forceExit: true,
            jUnit: {
                report: false,
                savePath : "./build/reports/jasmine/",
                useDotNotation: true,
                consolidate: true
            }
        },
        typescript: {
            base: {
                src: ['src/**/*.ts', 'spec/**/*.ts'],
                options: {
                    module: 'commonjs', //or commonjs
                    target: 'es5', //or es3
//                    base_path: 'path/to/typescript/files',
                    sourcemap: true,
//                    declaration: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-typescript');

    grunt.registerTask('default', ['typescript', 'jasmine_node']);

};
