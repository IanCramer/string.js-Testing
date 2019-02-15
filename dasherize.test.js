const strFuncs = require('./string');
const dasherize = strFuncs.dasherize;

describe('dasherize Function', () =>
{
	test('no arguments', () =>
	{
		expect(dasherize()).toBe('undefined');
	});

	test('null argument', () =>
	{
		expect(dasherize(null)).toBe('null');
	});

	test('Boolean argument', () =>
	{
		expect(dasherize(true)).toBe('true');
		expect(dasherize(false)).toBe('false');
	});

	test('number argument', () =>
	{
		expect(dasherize(3)).toBe('3');
		expect(dasherize(2.7)).toBe('2-7');
		expect(dasherize(-5)).toBe('-5');
	});

	test('Array argument', () =>
	{
		var emptyArr = [];
		expect(dasherize(emptyArr)).toBe('');
		var arr = [true, 2, 'three'];
		expect(dasherize(arr)).toBe('true-2-three');
	});

	test('Object argument', () =>
	{
		var emptyObj = {};
		expect(dasherize(emptyObj)).toBe("-object-Object-");

		var obj = {p1: true, p2: 2, p3: 'three'};
		expect(dasherize(emptyObj)).toBe('-object-Object-');
	});

	test('string arguments', () =>
	{
		var strings = [
		'',
		' ',
		'.',
		'String',
		'A string',
		'This string has punctuation.',
		'6',
		'5,6,7,8',
		'This string has the number 3 in it.',
		'`~1!2@3#4$5%6^7&8*9(0)-_=+qQwWeErRtTyYuUiIoOpP[{]}|aAsSdDfFgGhHjJkKlL;:\'"zZxXcCvVbBnNmM,<.>/?'];

		expect(dasherize( strings[0] )).toBe('');
		expect(dasherize( strings[1] )).toBe('-');
		expect(dasherize( strings[2] )).toBe('-');
		expect(dasherize( strings[3] )).toBe('String');
		expect(dasherize( strings[4] )).toBe('A-string');
		expect(dasherize( strings[5] )).toBe('This-string-has-punctuation-');
		expect(dasherize( strings[6] )).toBe('6');
		expect(dasherize( strings[7] )).toBe('5-6-7-8');
		expect(dasherize( strings[8] )).toBe('This-string-has-the-number-3-in-it-');
		expect(dasherize( strings[9] )).toBe("--1-2-3-4-5-6-7-8-9-0--_--qQwWeErRtTyYuUiIoOpP-----aAsSdDfFgGhHjJkKlL----zZxXcCvVbBnNmM------");
	});
});