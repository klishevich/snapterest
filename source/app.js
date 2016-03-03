var React = require('react');
var ReactDOM = require('react-dom');
var DateTimeField = require('react-bootstrap-datetimepicker');
// var moment = require('moment');
// require('moment/locale/ru');
// console.log(moment.locale()); 
var h1 = React.createElement('h1', {className: 'header', key: 'header'}, 'This is React');
var p = React.createElement('p', {className: 'content', key: 'content'}, "how it works!");
// var tempTime = moment("2015-01-01T10:00:00").format('DD-MM-YYYY');
// console.log(tempTime);
var dateTimeFieldEl = React.createElement(DateTimeField, {
	dateTime: "2015-01-01",
    format: "YYYY-MM-DD",
    viewMode: "date",
    inputFormat: "DD/MM/YYYY h:mm A",
    className: 'date1',
	key: 'date1'
	});
var reactFragment = [h1, p, dateTimeFieldEl];
var section = React.createElement('section', {className: 'container'}, reactFragment);

ReactDOM.render(section, document.getElementById('react-application'));