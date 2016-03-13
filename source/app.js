var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
	getInitialState: function() {
		return { 
			isHeaderHidden: false 
		} ;
	},
	handleClick: function (){
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},
	render: function () {
		var title = 'Statefull React Component'
		var headerElement = React.createElement('h1', {className: 'header', key: 'header'}, title);
		var buttonElement = React.createElement('button', {className: 'btn btn-default', key: 'button', 
			onClick: this.handleClick }, 'Toggle Header');
		if ( this.state.isHeaderHidden ) {
			return React.createElement('div', {className: 'container'}, buttonElement);
		}
		return React.createElement('div', {className: 'container'}, [buttonElement, headerElement]);
	}
});
// var tweets_array = ["first", "second", "third"];
var reactComponentElement = React.createElement(ReactClass, { isHidden: false});
// var listOfItems = <ul className="ul1">
//                     <li className="li1" key="li1">List Element JSX 1</li>
//                     <li className="li2" key="li2">List Element JSX 2</li>
//                     <li className="li3" key="li3">List Element JSX 3</li>
//                     <li className="li4" key="li4">List Element JSX 4</li>
//                   </ul>;

var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

