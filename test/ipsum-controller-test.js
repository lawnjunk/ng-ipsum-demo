'use strict'

require('angular');
require('angular-mocks');

describe('testing IpsumController', function(){
  beforeEach(() => {
    angular.mock.module('demoApp')
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.ipsumCtrl = new $controller('IpsumController');
      this.ipsumCtrl.$onInit();
    })
  });
  afterEach(() => this.$rootScope.$apply());

  it('should pass', () => {
    let ctrl = this.ipsumCtrl;
    console.log('ctrl', ctrl)
    expect(ctrl.selected).toEqual('slang')
    expect(true).toEqual(true);
  });

  it('should have three vocabularies', () => {
    let ctrl = this.ipsumCtrl;
    expect(ctrl.vocabularies).toEqual(['slang', 'programmer', 'artist'])
  })
});
