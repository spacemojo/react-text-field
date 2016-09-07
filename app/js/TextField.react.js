'use strict'

var React = require('react');
var UUID = require('uuid');

var TextField = React.createClass({

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
      <div>
        <label htmlFor={this.id}>{this.props.name}</label>
        <input style={{color: "#000000"}} type="text" className="u-full-width" placeholder={this.props.name} id={this.id} defaultValue={this.currentValue} onChange={this.onChange} />
      </div>
    )

  }

});

module.exports = TextField;

