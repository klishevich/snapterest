var React = require('react');
var ReactDOM = require('react-dom');
var DateTimeField = require('react-bootstrap-datetimepicker');

var DateTimeField2 = require('react-datetime');
// var moment = require('moment');
// require('moment/locale/ru');
// console.log(moment.locale());

DateTimeField3 = require('react-widgets/lib/DateTimePicker');
var Moment = require('moment');
require('moment/locale/ru');
var momentLocalizer = require('react-widgets/lib/localizers/moment');
momentLocalizer(Moment);

 

var h1 = React.createElement('h1', {className: 'header', key: 'header'}, 'React');
var p = React.createElement('p', {className: 'content', key: 'content'}, "This is datapicker");
var br = React.createElement('br', { key: 'br'});
var br2 = React.createElement('br', { key: 'br2'});

var dateTimeFieldEl = React.createElement(DateTimeField, {
  dateTime: "2015-01-01",
  format: "YYYY-MM-DD",
  viewMode: "date",
  inputFormat: "DD/MM/YYYY hh:mm",
  className: 'date1',
  key: 'date1'
});

var dateTimeFieldEl2 = React.createElement(DateTimeField2, {
  className: 'date2',
  key: 'date2'
});

var dateTimeFieldEl3 = React.createElement(DateTimeField3, {
  className: 'date3',
  key: 'date3'
});
var reactFragment = [h1, p, dateTimeFieldEl, br, dateTimeFieldEl2, br2, dateTimeFieldEl3];
var col = React.createElement('div', {className: 'col-md-3', key: 'col'}, reactFragment);
var row = React.createElement('div', {className: 'row', key: 'row'}, col);
var section = React.createElement('div', {className: 'container'}, row);
ReactDOM.render(section, document.getElementById('react-application'));