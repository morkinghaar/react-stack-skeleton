'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListPage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _list = require('../../list');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A page that display the todo list.
 */
function ListPage(_ref) {
  var indexes = _ref.indexes,
      editingItemIndex = _ref.editingItemIndex,
      otherProps = _objectWithoutProperties(_ref, ['indexes', 'editingItemIndex']);

  var hasTodos = indexes.length > 0;

  return _react2.default.createElement(
    'section',
    { className: 'todoapp' },
    _react2.default.createElement(_list.ListHeader, null),
    hasTodos ? _react2.default.createElement(
      _list.ListBody,
      null,
      indexes.map(function (itemIndex) {
        return _react2.default.createElement(_list.ListItem, { itemIndex: itemIndex, editing: editingItemIndex === itemIndex, key: itemIndex });
      })
    ) : null,
    hasTodos ? _react2.default.createElement(_list.ListFooter, null) : null
  );
}