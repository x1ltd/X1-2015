module.exports = function(grunt) {

	grunt.initConfig({

		//	HTML Templating
		processhtml: {

			options: {
				includeBase: 'www.x1.ltd.uk/src/templates',
				recursive: true,
			},

			dist: {
				files: [{
					expand: true,

					cwd: 'www.x1.ltd.uk/src/pages/',
					src: '**/*.html',
					dest: 'www.x1.ltd.uk/temp/pages/compiled',
					ext: '.html',
				}],
			},

		},



		//	Change root URLs to be relative URLs
		relativeRoot: {
			yourTarget: {
				options: {
					root: 'www.x1.ltd.uk/temp/pages/compiled'
				},
				files: [{
					expand: true,
					cwd:  'www.x1.ltd.uk/temp/pages/compiled',
					src: [ '**/*.html' ],
					dest: 'www.x1.ltd.uk/temp/pages/relativeRoot'
				}],
			},
		},



		//	Minify the HTML
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true,
				conservativeCollapse: true,
				minifyJS: true,
			},

			dev: {
				files: [{
					expand: true,

					cwd: 'www.x1.ltd.uk/temp/pages/relativeRoot',
					src: '**/*.html',
					dest: 'www.x1.ltd.uk/build',
					ext: '.html',
				}],
			},
		},



		//	Minify the images
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'www.x1.ltd.uk/src/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'www.x1.ltd.uk/build/images'
				}],
			},
		},



		//	Render the css
		sass: {
			options: {
				//file: 'null',
				//data: 'null',
				//importer: 'undefined',
				//includePaths: '[]',
				//indentedSyntax: 'false',
				//omitSourceMapUrl: 'false',
				//outFile: 'null',
				outputStyle: 'compressed', //'nested'
				//precision: '5',
				//sourceComments: 'false',
				sourceMap: true,
				//sourceMapEmbed: 'false',
				//sourceMapContents: 'false',
			},

			dist: {
				files: [{
					expand: true,

					cwd: 'www.x1.ltd.uk/src/styles/',
					src: '**/*.scss',
					dest: 'www.x1.ltd.uk/temp/styles',
					ext: '.css',
				}],
			},
		},



		//	Make the CSS work with older browsers
		autoprefixer: {
			options: {
				browsers: ['last 10 versions', 'ie 8', 'ie 9'],
				map: true
			},
			dist: {
				files: [{
					expand: true,

					cwd: 'www.x1.ltd.uk/temp/styles/',
					src: '**/*.css',
					dest: 'www.x1.ltd.uk/build/css',
					ext: '.css',
				}],
			},
		},



		//	Copy files that aren't processed
		copy: {
			pdfs: {
				files: [
					// includes files within path
					{
						expand: true,
						cwd: 'www.x1.ltd.uk/src/pages/pdfs/',
						src: ['**/*.*'],
						dest: 'www.x1.ltd.uk/build/pdfs',
					},
				],
			},

			svgs: {
				files: [
					// includes files within path
					{
						expand: true,
						cwd: 'www.x1.ltd.uk/src/images/',
						src: ['**/*.svg'],
						dest: 'www.x1.ltd.uk/build/images',
					},
				],
			},
		},



		//	Update the above when required
		watch: {
			options: {
				reload: true,
				spawn: false,
			},

			docsAndScripts: {
				files: [ 'www.x1.ltd.uk/src/**/*.html' ],
				tasks: [ 'processhtml', 'htmlmin', 'relativeRoot' ]
			},

			styles: {
				files: [ 'www.x1.ltd.uk/src/**/*.scss' ],
				tasks: [ 'sass', 'autoprefixer' ]
			},

			images: {
				files: [ 'www.x1.ltd.uk/src/images/**/*.*' ],
				tasks: [ 'newer:imagemin' ]
			},
		},

	});



	require('load-grunt-tasks')(grunt);

	grunt.registerTask( 'default', [
			'processhtml', 'relativeRoot', 'htmlmin',
			'sass', 'autoprefixer',
			'copy', 'newer:imagemin',
			'watch'
		] );

};