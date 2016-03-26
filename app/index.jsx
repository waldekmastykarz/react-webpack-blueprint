var React = require('react');
var ReactDOM = require('react-dom');

require('../css/styles.css');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>My React app</h1>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));