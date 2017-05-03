var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () =>{
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({
			todos:[]
		});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);

	});

	it('should toggle completed value when handleAddTodo called', () => {
		var todoData = {
			id: 11,
			text: 'Test Text',
			completed: false
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({
			todos:[todoData]
		});		
		
		// check that todos first item has completed value of false
		expect(todoApp.state.todos[0].completed).toBe(false);
		// call handleToggle with 11
		todoApp.handleToggle(11);
		// Verify that value changed
		expect(todoApp.state.todos[0].completed).toBe(true);

	});
});