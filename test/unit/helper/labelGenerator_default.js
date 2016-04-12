
var generator = require('../../../helper/labelGenerator');

module.exports.tests = {};

module.exports.tests.interface = function(test, common) {
  test('interface', function(t) {
    t.equal(typeof generator, 'function', 'valid function');
    t.end();
  });
};

module.exports.tests.default_country = function(test, common) {
  test('venue', function(t) {
    var doc = {
      'name': 'venue name',
      'layer': 'venue',
      'housenumber': '1',
      'street': 'Main St',
      'neighbourhood': 'neighbourhood name',
      'locality': 'locality name',
      'localadmin': 'localadmin name',
      'county': 'county name',
      'macrocounty': 'macrocounty name',
      'region': 'region name',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'venue name, locality name, country name');
    t.end();
  });

  test('street', function(t) {
    var doc = {
      'name': 'address',
      'layer': 'address',
      'housenumber': '1',
      'street': 'Main St',
      'neighbourhood': 'neighbourhood name',
      'locality': 'locality name',
      'localadmin': 'localadmin name',
      'county': 'county name',
      'macrocounty': 'macrocounty name',
      'region': 'region name',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'address, locality name, country name');
    t.end();
  });

  test('neighbourhood', function(t) {
    var doc = {
      'name': 'neighbourhood name',
      'layer': 'neighbourhood',
      'neighbourhood': 'neighbourhood name',
      'locality': 'locality name',
      'localadmin': 'localadmin name',
      'county': 'county name',
      'macrocounty': 'macrocounty name',
      'region': 'region name',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'neighbourhood name, locality name, country name');
    t.end();
  });

  test('locality', function(t) {
    var doc = {
      'name': 'locality name',
      'layer': 'locality',
      'locality': 'locality name',
      'localadmin': 'localadmin name',
      'county': 'county name',
      'macrocounty': 'macrocounty name',
      'region': 'region name',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'locality name, country name');
    t.end();
  });

  test('localadmin', function(t) {
    var doc = {
      'name': 'localadmin name',
      'layer': 'localadmin',
      'localadmin': 'localadmin name',
      'county': 'county name',
      'macrocounty': 'macrocounty name',
      'region': 'region name',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'localadmin name, country name');
    t.end();
  });

  test('county', function(t) {
    var doc = {
      'name': 'county name',
      'layer': 'county',
      'county': 'county name',
      'macrocounty': 'macrocounty name',
      'region': 'region name',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'county name, country name');
    t.end();
  });

  test('macrocounty', function(t) {
    var doc = {
      'name': 'macrocounty name',
      'layer': 'macrocounty',
      'macrocounty': 'macrocounty name',
      'region': 'region name',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'macrocounty name, country name');
    t.end();
  });

  test('region', function(t) {
    var doc = {
      'name': 'region name',
      'layer': 'region',
      'region': 'region name',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'region name, country name');
    t.end();
  });

  test('macroregion', function(t) {
    var doc = {
      'name': 'macroregion name',
      'layer': 'macroregion',
      'macroregion': 'macroregion name',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'macroregion name, country name');
    t.end();
  });

  test('country', function(t) {
    var doc = {
      'name': 'country name',
      'layer': 'country',
      'country_a': 'country code',
      'country': 'country name'
    };
    t.equal(generator(doc),'country name');
    t.end();
  });

};

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('label generator: ' + name, testFunction);
  }

  for( var testCase in module.exports.tests ){
    module.exports.tests[testCase](test, common);
  }
};
