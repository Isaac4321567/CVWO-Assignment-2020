
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

//$(document).ajaxSend(function(event, request, settings) {
//  if (typeof(AUTH_TOKEN) == "undefined") return;
  // settings.data is a serialized string like "foo=bar&baz=boink" (or null)
//  settings.data = settings.data || "";
//  settings.data += (settings.data ? "&" : "") + "authenticity_token=" + encodeURIComponent(AUTH_TOKEN);
//});
