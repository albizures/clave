module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  var port  = process.env.PORT || 9002;

  grunt.initConfig({
    watch : {
      options : {
        //spawn: false,
        //nospawn: true,
        livereload: true
      },
      "babel_build" : {
        files : [
          'public/game.js',
          'public/index.html'
        ],
        options : {
          //spawn: false,
          //nospawn: true,
          livereload: true
        }
      },
      /*babel : {
        files : [
          'src/init.js'
        ],
        tasks : ['babel'],
        options : {
          debounceDelay: 250,
          spawn: false
          //nospawn: true
        }
      },*/
      server : {
          files : ['.rebooted'],
          options : {
            livereload : true
          }
      }
    },
    concurrent : {
      dev : {
        tasks : ['nodemon','watch'],
        options : {
          logConcurrentOutput : true
        }
      }
    },
    nodemon : {
      dev : {
        script : 'server.js',
        options : {
          ignore:[
            "public/**",
            "client/**",
            "src/**",
            "dist/**"
          ],
          watch : [
            "server.js",
            "router/*"
          ],
          verbose : true,
          execMap : {
            "js": "iojs"
          },
          env: {
            PORT: port
          },
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
            nodemon.on('config:update', function () {
               // Delay before server listens on port
               setTimeout(function() {
                 require('open')('http://localhost:'+port);
               }, 1000);
             });
              nodemon.on('restart', function () {
              // Delay before server listens on port
              console.log('########################## restart');
              setTimeout(function() {
                require('fs').writeFileSync('.rebooted', 'rebooted');
              }, 1000);
            });
          }
        }
      }
    },
    babel : {
    	options : {
    		sourceMap : true
    	},
    	dist : {
    		files : {
    			'public/game.js' : 'src/init.js'
    		}
    	}
    }
  });
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',[
    'babel',
    'watch'
  ]);
}
