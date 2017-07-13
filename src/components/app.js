"use strict";

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <RouteHandler />
      </div>
    );

  }
});

module.exports = App;