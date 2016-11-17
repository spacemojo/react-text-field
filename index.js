'use strict'

let React = require('react');
let UUID = require('uuid');

let TextField = React.createClass({displayName: "TextField",

  getInitialState: function() {
    this.id = UUID.v4();
    this.currentValue = (this.props.value == undefined) ? "" : this.props.value;
    return null;
  },

  onChange: function(event) {
    this.currentValue = event.nativeEvent.target.value;
    this.props.setValue(this.currentValue);
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("label", {htmlFor: this.id}, this.props.name), 
        React.createElement("input", {style: {color: "#000000"}, type: "text", className: "u-full-width", placeholder: this.props.name, id: this.id, defaultValue: this.currentValue, onChange: this.onChange})
      )
    )

  }

});

module.exports = TextField;
