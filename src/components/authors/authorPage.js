"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorApi = require('./authorList');

var AuthorPage = React.createClass({

  getInitialState: function () {
    return {
      authors: []
    };
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.setState({ authors: AuthorApi.getAllAuthors() });
    }
  },

  render: function () {
    return (
      <div className="jumbotron">
        <h1>Authors</h1>
        <AuthorLists authors={this.state.authors} />
      </div>
    );
  }
}

module.exports = AuthorPage;