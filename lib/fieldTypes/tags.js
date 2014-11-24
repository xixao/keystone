/*!
 * Module dependencies.
 */

var util = require('util'),
	super_ = require('../field');

/**
 * Text FieldType Constructor
 * @extends Field
 * @api public
 */

function tags(list, path, options) {
	this.delimeter = options.delimeter || ',';
	this._nativeType = [String];
	tags.super_.call(this, list, path, options);
};

/*!
 * Inherit from Field
 */

util.inherits(tags, super_);

tags.prototype.format = function(item){
	return item[this.path].join(this.delimeter)
}

tags.prototype.updateItem = function(item, data) {
	item.set(this.path, data[this.path].split(this.delimeter));
}

/*!
 * Export class
 */

exports = module.exports = tags;
