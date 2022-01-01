const { alias } = require('react-app-rewire-alias');
module.exports = function override(config, env) {
	alias({
		'@components': 'src/components',
		'@ui': 'src/components/Ui',
		'@constants': 'src/constants',
		'@context': 'src/context',
		'@containers': 'src/containers',
		'@hoc-helpers': 'src/hoc-helpers',
		'@routes': 'src/routes',
		'@services': 'src/services',
		'@static': 'src/static',
		'@styles': 'src/styles',
		'@hooks': 'src/hooks',
		'@store': 'src/store',
		'@utils': 'src/utils',
	})(config);

	return config;
};
