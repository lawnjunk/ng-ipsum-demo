'use strict';

const angular = require('angular');
const app = angular.module('demoApp', []);

app.controller('IpsumController', ['$log', IpsumController]);
function IpsumController($log){
  this.$onInit = () => {
    $log.log('init IpsumController');
    // state
    this.vocabulary = {
      slang: ['bet', 'low key', 'word', 'slicky', 'dip', 'dang', 'shredz', 'aight', 'yee'],
      programmer: ['iterate', 'refactor', 'context', 'combine', 'hack', 'directory', 'brute force'],
      artist: ['bold', 'increadible', 'delightful', 'new', 'over done', 'copy'],
    };
    this.vocabularies = Object.keys(this.vocabulary);
    this.selected = this.vocabularies[0];
    this.content = '';

    // methods
    this.genorateIpsum = (vocab) => {
      let randomItem = (list) => {
        return list[Math.floor(Math.random() * list.length)];
      };

      let result = [];
      for(let i =0; i< 100; i++){
        result.push(randomItem(this.vocabulary[vocab]));
      }
      return result.join(' ');
    };

    this.handleSubmit = (e) => {
      this.content = this.genorateIpsum(this.selected);
    };
  };
};
