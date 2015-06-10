module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	var steam = require('gateways/steam');
	
	grunt.initConfig({
		// Nothing yet
	});

	grunt.registerTask('default', ['fetch-data']);

	grunt.registerTask('fetch-data', 'Fetch the data from Steam only', function() {
		steam.fetchData();
	});
};
