// var assert = require("chai").assert;
// var quixote = require("quixote");
// define(['../node_modules/chai/chai', '../node_modules/quixote/dist/quixote.js', 'HomePage'], function(chai, quixote, HomePage) {

  // var assert = chai.assert();
  // var should = chai.should();

  describe('Home Page', function() {

      var frame;

      var WHITE = "rgb(255, 255, 255)";
      var BACKGROUND_BLUE = "rgb(0, 114, 198)";

      before(function(done) {
          frame = quixote.createFrame({
            src: "/",     // the server under test must be proxied to localhost
            width: 800
          }, done);
        });
        
      after(function() {
        frame.remove();
      });
      
      beforeEach(function(done) {
        frame.reload(done);
      });

      describe('#indexOf()', function() {
          it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
          });

          it('should return 0 when value is in the first index', function(){
            assert.equal([1,2,3].indexOf(1), 0);
          });
      });

      describe('backgroundColor', function(){
        // it('background color should be white', function(){
        //   assert.equal(frame.body().getRawStyle("background-color"), WHITE, "page background");
        // });

        it('background color should be blue-ish', function(){
          assert.equal(frame.body().getRawStyle("background-color"), BACKGROUND_BLUE, "page background");
        });
      });
  });
// });