var path = require('path');

function pattern(file, exclude) {
	return {pattern: file, included: !exclude, served: true, watched: false};
}

var frameworks = {
	'chai': function (name, files) {
		var filePath = path.resolve(require.resolve('chai'), '../chai.js');
		files.unshift(pattern(path.join(__dirname, 'chai-adapter.js')));
		files.unshift(pattern(filePath));
	},
	'chai-lodash': function (name, files) {
		var lodashPath = require.resolve('lodash');
		var filePath = require.resolve(name);
		files.push(pattern(filePath));
		files.unshift(pattern(lodashPath))
	}
};

function generateInjects(plugins) {
	var $inject = ['config.files'];
	var exports = {};
	var plugin;

	for (var label in plugins) {
		plugin = plugins[label].bind(null, label);
		plugin.$inject = $inject;

		exports['framework:' + label] = ['factory', plugin];
	}

	return exports;
}

module.exports = generateInjects(frameworks);
