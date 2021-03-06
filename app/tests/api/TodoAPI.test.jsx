var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});


	describe('filterTodos', () => {
		var todos = [{
			id: 1,
			text: 'some text',
			completed: true
		},
		{
			id: 2,
			text: 'other text',
			completed: false
		},
		{
			id: 3,
			text: 'some text here',
			completed: true
		}];


		it('should return all item if showCompleted is true', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos.length).toEqual(3);
		});

		it('should return non-completed item when showCompleted is false', () => {
			var filterTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filterTodos.length).toEqual(1);
		});

		it('should sort by completed status', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos[0].completed).toBe(false);
		});

		it('should filter todos by searchText', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, 'some');
			expect(filterTodos.length).toEqual(2);
		});

		it('should filter todos by searchText if uppercase', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, 'Some');
			expect(filterTodos.length).toEqual(2);
		});

		it('should return all todos if searchText empty', () => {
			var filterTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filterTodos.length).toEqual(3);
		});



	});


});
