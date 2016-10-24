'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _pages = require('./components/pages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*--------------------------------------------------------------------------------------------------------------------*/
//  --- SITE MAP ---
/*--------------------------------------------------------------------------------------------------------------------*/
var publicSrc = _path2.default.join(__dirname, '../public/');
var appSrc = _path2.default.join(publicSrc, './app.js');

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _pages.PageWrapper },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _pages.Home }),
    _react2.default.createElement(_reactRouter.Route, { path: 'internal', component: _pages.Internal })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: '/app.js', src: appSrc })
);