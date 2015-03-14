module.exports = function(grunt) {

	var __tasks = {};



	addTask( 'default', [
			'copy',
			'processhtml', 'relativeRoot', 'htmlmin',
			'sass', 'autoprefixer',
			'newer:imagemin',
			'watch'
		]);

	//addTask( 'refresh', ['clean'], 'default' );





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
					dest: 'www.x1.ltd.uk',
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
					dest: 'www.x1.ltd.uk/images'
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
					dest: 'www.x1.ltd.uk/temp/styles/compiled',
					ext: '.min.css',
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

					cwd: 'www.x1.ltd.uk/temp/styles/compiled',
					src: '**/*.css',
					dest: 'www.x1.ltd.uk/css',
					ext: '.min.css',
				}],
			},
		},



		//	Start fresh
		clean: {
			dump: [ "www.x1.ltd.uk/temp/", "www.x1.ltd.uk/build/", ],
		},



		//	Copy files that aren't processed
		copy: {
			dump: {
				files: [
					// includes files within path
					{
						expand: true,
						cwd: 'www.x1.ltd.uk/src/dump/',
						src: ['**/*.*'],
						dest: 'www.x1.ltd.uk/',
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
						dest: 'www.x1.ltd.uk/images',
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
				tasks: [ 'processhtml', 'relativeRoot', 'htmlmin', ]
			},

			styles: {
				files: [ 'www.x1.ltd.uk/src/**/*.scss' ],
				tasks: [ 'sass', 'autoprefixer', ]
			},

			images: {
				files: [ 'www.x1.ltd.uk/src/images/**/*.*' ],
				tasks: [ 'newer:imagemin', ]
			},

			dump: {
				files: [ 'www.x1.ltd.uk/src/dump/**/*.*' ],
				tasks: [ 'copy:dump', ]
			},
		},

	});



	require('load-grunt-tasks')(grunt);

	registerTasks();







	//	FUNCTIONS	//	FUNCTIONS	//

	function addTask ( taskName, prependTasks, appendTasks ) {

		var newTaskList = [];
		var i = 1;

		while ( !!arguments[i] ) {

			if ( typeof arguments[i] === 'string' && __tasks[ arguments[i] ] ) {
				newTaskList = newTaskList.concat( __tasks[ arguments[i] ] );
			} else {
				newTaskList = newTaskList.concat( arguments[i] );
			}

			i+=1;

		}

		__tasks[ taskName ] = newTaskList;

	}



	function registerTasks () {

		for ( var i in __tasks ) {
			grunt.registerTask( i, __tasks[i] );
		}

	}

};