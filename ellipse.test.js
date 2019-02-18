const strFuncs = require('./string');
const ellipse = strFuncs.ellipse;

// if first paramter is falsey it becomes an empty string
// if second arguement is not a number the first arguement is returned as is
//

describe('ellipse Function', () =>
{
	test('no arguments', () =>
	{
		expect(ellipse()).toBe('');
	});

	// If truthy, the arguement is returned, else it is an empty string.
	describe('one agrument', () =>
	{
		test('undefined and null', () =>
		{
			expect(ellipse(undefined)).toBe('');
			expect(ellipse(null)).toBe('');
		});

		test('boolean', () =>
		{
			expect(ellipse(true)).toBe(true);
			expect(ellipse(false)).toBe('');
		});

		test('number', () =>
		{
			expect(ellipse(0)).toBe('');
			expect(ellipse(4)).toBe(4);
			expect(ellipse(2.7)).toBe(2.7);
			expect(ellipse(-3)).toBe(-3);
		});

		test('string', () =>
		{
			expect(ellipse('')).toBe('');
			expect(ellipse('a string')).toBe('a string');
		});

		test('array', () =>
		{
			expect(ellipse( [] )).toEqual( [] );
			expect(ellipse( [true, 2, 'three'] )).toEqual( [true, 2, 'three'] );
			expect(ellipse( [false, false, false] )).toEqual( [false, false, false] );
			expect(ellipse( [false, 0, ''] )).toEqual( [false, 0, ''] );
		});

		test('object', () =>
		{
			expect(ellipse( {} )).toEqual( {} );
			expect(ellipse( {p1:true, p2:2, p3:'three'} )).toEqual( {p1:true, p2:2, p3:'three'} );
		});
	});

	// All non number second arguments should act like one arguement
	describe('two arguments', () =>
	{
		describe('bad second argument', () =>
		{
			/*
			undefined, undefined
			bool, undefined
			number, undefined
			string undefined
			array, undefined
			object, undefined

			undefined, bool
			bool, bool
			number, bool
			string, bool
			array, bool
			object, bool

			undefined, string
			bool, string
			number, string
			string, string
			array, string
			object, string

			undefined, array
			bool, array
			number, array
			string, array
			array, array
			object, array

			undefined, object
			bool, object
			number, object
			string, object
			array, object
			object, object
			*/
		});

		describe('bad first, good second argument', () =>
		{
			test('undefined/null, number', () =>
			{
				expect(ellipse(undefined, -2)).toBe('..');
				expect(ellipse(undefined, -1)).toBe('..');
				expect(ellipse(undefined, 0)).toBe('');
				expect(ellipse(undefined, 1)).toBe('');
				expect(ellipse(undefined, 2)).toBe('');
				expect(ellipse(undefined, 3)).toBe('');

				expect(ellipse(null, -2)).toBe('..');
				expect(ellipse(null, -1)).toBe('..');
				expect(ellipse(null, 0)).toBe('');
				expect(ellipse(null, 1)).toBe('');
				expect(ellipse(null, 2)).toBe('');
				expect(ellipse(null, 3)).toBe('');
			});

			test('bool, number', () =>
			{
				for(let i = -2; i < 3; i++)
					expect(ellipse(true, i)).toBe(true);

				expect(ellipse(false, -2)).toBe('..');
				expect(ellipse(false, -1)).toBe('..');
				expect(ellipse(false, 0)).toBe('');
				expect(ellipse(false, 1)).toBe('');
				expect(ellipse(false, 2)).toBe('');
				expect(ellipse(false, 3)).toBe('');			});

			test('number, number', () =>
			{
				for(let i = -2; i < 3; i++)
					expect(ellipse(4, i)).toBe(4);

				for(let i = -2; i < 3; i++)
					expect(ellipse(2.7, i)).toBe(2.7);

				for(let i = -2; i < 3; i++)
					expect(ellipse(-3, i)).toBe(-3);

				expect(ellipse(0, -2)).toBe('..');
				expect(ellipse(0, -1)).toBe('..');
				expect(ellipse(0, 0)).toBe('');
				expect(ellipse(0, 1)).toBe('');
				expect(ellipse(0, 2)).toBe('');
				expect(ellipse(0, 3)).toBe('');
			});

			test('array, number', () =>
			{
				var arr = [];
				for (let i = -2; i < 3; i++)
					expect(ellipse(arr, i)).toEqual(arr);

				arr = [true, 2, 'three'];
				for (let i = -2; i < 3; i++)
					expect(ellipse(arr, i)).toEqual(arr);		
			});

			test('object, number', () =>
			{
				var obj = {};
				for (let i = -2; i < 3; i++)
					expect(ellipse(obj, i)).toEqual(obj);

				obj = {p1:true, p2:2, p3:'three'};
				for (let i = -2; i < 3; i++)
					expect(ellipse(obj, i)).toEqual(obj);
			});
		});

		describe('good first, good second argument', () =>
		{
			test('string and number', () =>
			{
				expect(ellipse('', 0)).toBe('');
				expect(ellipse('', 4)).toBe('');

				expect(ellipse('a string', 50)).toBe('a string');
				expect(ellipse('a string', 0)).toBe('a string');

				for (let i = -3; i < 0; i++)
					expect(ellipse('a string', i)).toBe('..');

				expect(ellipse('a string', 3)).toBe('a s..');
				expect(ellipse('Strings get two dots attached to the end of the trimmed string', 21)).toBe('Strings get two dots ..');
			});
		});
	});
});