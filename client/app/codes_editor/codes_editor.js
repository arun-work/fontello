/*global $, _, ko, N*/


'use strict';


var render = require('../../../lib/render/client');


function CodesEditorModel() {
  this.glyphs = ko.observableArray();

  this.addGlyph = function (glyph) {
    this.glyphs.push(glyph);
  }.bind(this);

  this.removeGlyph = function (glyph) {
    this.glyphs.remove(glyph);
  }.bind(this);
}


var model = new CodesEditorModel();


//
// Bind event handlers
//

N.on('glyph:selected',    model.addGlyph);
N.on('glyph:unselected',  model.removeGlyph);


N.once('page:loaded', function () {
  var $view = $(render('app.codes_editor')).appendTo('#codes-editor');

  //
  // Bind model and view
  //

  ko.applyBindings(model, $view.get(0));
});
