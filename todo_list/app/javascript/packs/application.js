
//= require jquery
//= require popper
//= require jquery_ujs
//= require tether
//= require bootstrap-sprockets
//= require turbolinks
//= require bootstrap
//= require chosen
//= require bootstrap-datepicker
//= require TasksController
//= require_tree.

//= require_new
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
