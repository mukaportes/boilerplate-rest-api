const StringModule = function(inputString) {
  this.string = inputString;
};

StringModule.prototype.toCamelCase = function() {
  return this.string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};

module.exports = StringModule;
