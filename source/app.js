var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
	render: function () {
		if ( this.props.isHidden ) {
			return null;
		}
		header = this.props.tweets.length + ' Latest tweets';
		return React.createElement('h1', {className: 'header'}, header);
	}
});
var tweets_array = ["first", "second", "third"];
var reactComponentElement = React.createElement(ReactClass, { tweets: tweets_array, isHidden: false});
// var listOfItems = <ul className="ul1">
//                     <li className="li1" key="li1">List Element JSX 1</li>
//                     <li className="li2" key="li2">List Element JSX 2</li>
//                     <li className="li3" key="li3">List Element JSX 3</li>
//                     <li className="li4" key="li4">List Element JSX 4</li>
//                   </ul>;

var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

