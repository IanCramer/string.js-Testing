const strFuncs = require('./string');
const compare = strFuncs.compare;

describe('compare Function', () =>
{
	test('no arguments', () =>
	{
		expect(compare()).toBe(0);
	});

	describe('one (not enough) argument', () =>
	{
		test('null', () =>
		{
			expect(compare(null)).toBe(0);
		});

		test('boolean', () =>
		{
			expect(compare(true)).toBe(0);
			expect(compare(false)).toBe(0);
		});

		test('number', () =>
		{
			expect(compare(4)).toBe(0);
			expect(compare(3.5)).toBe(0);
			expect(compare(-2)).toBe(0);
		});

		test('string', () =>
		{
			expect(compare('')).toBe(0);
			expect(compare('a string')).toBe(0);
		});

		test('Array', () =>
		{
			expect(compare( [] )).toBe(0);
			expect(compare( [true, 2, 'three'] )).toBe(0);
		});

		test('Object', () =>
		{
			expect(compare( {} )).toBe(0);
			expect(compare( {p1: true, p2: 2, p3: 'three'} )).toBe(0);
		});
	});

	describe('Two arguments, same type', () =>
	{
		test('null', () =>
		{
			expect(compare(null, null)).toBe(0);
		});


		test('boolean', () =>
		{
			expect(compare(true, false)).toBe(1);
			expect(compare(false, true)).toBe(-1);
			expect(compare(true, true)).toBe(0);
			expect(compare(false,false)).toBe(0);
		});

		test('number', () =>
		{
			expect(compare(4,3)).toBe(1);
			expect(compare(3.5,7.6)).toBe(-1);
			expect(compare(-2, -2)).toBe(0);
			expect(compare(-3, 1.9)).toBe(-1);
		});

		test('string', () =>
		{
			expect(compare('', 'a string')).toBe(-1);
			expect(compare('a string', '')).toBe(1);
			expect(compare('string', 'string')).toBe(0);
			expect(compare('one string', 'to another')).toBe(-1);
			expect(compare('a string', 'a longer string')).toBe(1);
		});

		test('Array', () =>
		{
			expect(compare( [true, 2, 'three'], [] )).toBe(1);
			expect(compare( [true, 2, 'three'], [true, 2, 'tree'] )).toBe(-1); // Interesting, shouldn't these two be equal?
			expect(compare( [1,2,3,4], [5,6,7,8] )).toBe(-1);
			expect( compare( [1,2,3,4,5], [3,6,9] )).toBe(-1);
		});

		test('Object', () =>
		{
			expect(compare( {}, {p1: true, p2: 2, p3: 'three'} )).toBe(0); // Shouldn't the empty object be less than the filled object?
			expect(compare( {p1: true, p2: 2, p3: 'three'}, {p1: true, p2: 2, p3: 'three'} )).toBe(0);
			expect(compare( {p1:1, p2:2, p3:3}, {p1:4, p2:5} )).toBe(0);
		});
	});

	describe('Two arguments, differnt types', () =>
	{
		test('null and bool', () =>
		{
			expect(compare(null, true)).toBe(-1);
			expect(compare(null, false)).toBe(0);
			expect(compare(true, null)).toBe(1);
			expect(compare(false, null)).toBe(0);
		});

		test('null and number', () =>
		{
			expect(compare(4, null)).toBe(1);
			expect(compare(null, 2.9)).toBe(-1);
			expect(compare(-3, null)).toBe(-1);
			expect(compare(0, null)).toBe(0);
		});

		test('null and string', () => 
		{
			expect(compare(null, '')).toBe(0);
			expect(compare(null, 'a string')).toBe(0);
			expect(compare('a string', null)).toBe(0);
			expect(compare('', null)).toBe(0);
		});

		test('null and array', () =>
		{
			expect(compare(null, [] )).toBe(0);
			expect(compare(null, [true, 2, 'three'] )).toBe(0);
			expect(compare( [], null )).toBe(0);
			expect(compare( [true, 2, 'three'], null )).toBe(0);
		});

		test('null and object', () =>
		{
			expect(compare(null, {} )).toBe(0);
			expect(compare(null, {p1: true, p2: 2, p3: 'three'} )).toBe(0);
			expect(compare( {}, null )).toBe(0);
			expect(compare( {p1:true, p2:2, p3:'three'}, null )).toBe(0);
		});

		test('bool and number', () =>
		{
			expect(compare(true, 0)).toBe(1);
			expect(compare(true, 1)).toBe(0);
			expect(compare(true, 2.5)).toBe(-1);
			expect(compare(-1, false)).toBe(-1);
			expect(compare(0, false)).toBe(0);
			expect(compare(2.4, false)).toBe(1);
		});

		test('bool and string', () =>
		{
			expect(compare(true, '')).toBe(1);
			expect(compare(true, 'string')).toBe(0);
			expect(compare('', false)).toBe(0);
			expect(compare('a string', false)).toBe(0);
		});

		test('bool and array', () =>
		{
			expect(compare(true, [] )).toBe(1);
			expect(compare(true, [true, 2, 'three'] )).toBe(0);
			expect(compare( [], false)).toBe(0);
			expect(compare( [true, 2, 'three'], false)).toBe(0);
		});

		test('bool and object', () =>
		{
			expect(compare(true, {} )).toBe(0);
			expect(compare(true, {p1:true,p2:2,p3:'three'} )).toBe(0);
			expect(compare( {}, false)).toBe(0);
			expect(compare( {p1:true,p2:2,p3:'three'}, false)).toBe(0);
		});

		test('number and string', () =>
		{
			expect(compare(4, '')).toBe(1);
			expect(compare(-3, '')).toBe(-1);
			expect(compare(0, '')).toBe(0);

			expect(compare(2.7, 'a string')).toBe(0);
			expect(compare(0, 'a string')).toBe(0);
			expect(compare(-5, 'a string')).toBe(0);
		});

		test('number and array', () =>
		{
			expect(compare(0, [] )).toBe(0);
			expect(compare(6, [] )).toBe(1);
			expect(compare(-2, [] )).toBe(-1);

			expect(compare(0, [1,2,3] )).toBe(0);
			expect(compare(25, [4,5,6] )).toBe(0);
			expect(compare(10, [7,8,9] )).toBe(0);
			expect(compare( [1,5,7], 13)).toBe(0);

			expect(compare(0, [true, 2, 'three'] )).toBe(0);
			expect(compare(20, [true, 2, 'three'] )).toBe(0);
			expect(compare(-5, [true, 2, 'three'] )).toBe(0);
		});

		test('number and object', () =>
		{
			expect(compare(0, {} )).toBe(0);
			expect(compare(-3, {} )).toBe(0);
			expect(compare(5, {} )).toBe(0);

			expect(compare(0, {p1:true, p2:2, p3:'three'} )).toBe(0);
			expect(compare(-5, {p1:true, p2:2, p3:'three'} )).toBe(0);
			expect(compare(12, {p1:true, p2:2, p3:'three'} )).toBe(0);
		});

		test('string and array', () =>
		{
			expect(compare('', [] )).toBe(0);
			expect(compare('a string', [] )).toBe(1);

			expect(compare('', [true, 2, 'three'] )).toBe(-1);
			expect(compare('a string', [true, 2, 'three'] )).toBe(-1); // Interesting?
		});

		test('string and object', () =>
		{
			expect(compare('', {} )).toBe(-1);
			expect(compare('a string', {} )).toBe(1);

			expect(compare('', {p1:true, p2:2, p3:'three'} )).toBe(-1);
			expect(compare('a string', {p1:true, p2:2, p3:'three'} )).toBe(1); // Interesting?
		});

		test('array and object', () =>
		{
			expect(compare( [], {} )).toBe(-1);
			expect(compare( [true, 2, 'three'], {} )).toBe(1);

			expect(compare( [], {p1:true, p2:2, p3:'three'} )).toBe(-1);
			expect(compare([true, 2, 'three'], {p1:true, p2:2, p3:'three'} )).toBe(1); // Interesting?
		});
	});
});