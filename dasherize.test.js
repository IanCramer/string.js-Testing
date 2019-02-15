const strFuncs = require('./string');
const dasherize = strFuncs.dasherize;

describe('dasherize Function', () =>
{
	test('no arguments', () =>
	{
		expect(dasherize()).toBe(undefined);
	});
});