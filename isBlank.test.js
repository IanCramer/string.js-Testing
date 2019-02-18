const strFuncs = require('./string');
const isBlank = strFuncs.isBlank;

describe('isBlank Function', () =>
{
	test('no arguments', () =>
	{
		expect(isBlank()).toBe(true);
	});

	test('undefined and null', () =>
	{
		expect(isBlank(undefined)).toBe(true);
		expect(isBlank(null)).toBe(true);
	});

	test('boolean', () =>
	{
		expect(isBlank(true)).toBe(false);
		expect(isBlank(false)).toBe(false);
	});

	test('number', () =>
	{
		expect(isBlank(0)).toBe(false);
		expect(isBlank(4)).toBe(false);
		expect(isBlank(2.7)).toBe(false);
		expect(isBlank(-3)).toBe(false);
	});

	test('string', () =>
	{
		expect(isBlank('')).toBe(true);
		expect(isBlank('a string')).toBe(false);
	});

	test('array', () =>
	{
		expect(isBlank( [] )).toBe(true);
		expect(isBlank( [true, 2, 'three'] )).toBe(false);
	});

	test('object', () =>
	{
		expect(isBlank( {} )).toBe(false); // Is this correct?
		expect(isBlank( {p1:true, p2:2, p3:'three'} )).toBe(false);
	});
});