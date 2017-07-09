module.exports = function (grunt) {

	// Project confirguration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jade:{
			compile:{
				options:{
					pretty: true,
				},
				files:{
					"build/index.html":"build/index.jade"
				}
			}
		},
		sass: {
			dist: {
				files: {
					'style/style.css' : 'sass/style.sass'
				}
			}
		},
		watch:{
			grunt:{ files:['Gruntfile.js'] },
			jade:{
				files: ['build/*.jade'],
				tasks: ['jade']
			},
			sass:{
				files: ['**/*.scss'],
				tasks: ['sass']
			}
		}
	});

	//Tasks
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass')

	//default
	grunt.registerTask('default',['jade','sass','watch']);


};