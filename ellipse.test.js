const strFuncs = require('./string');
const ellipse = strFuncs.ellipse;

describe('ellipse Function', () =>
{
	test('no arguments', () =>
	{
		expect(ellipse()).toBe('');
	});
});