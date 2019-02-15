const strFuncs = require('./string');
const isBlank = strFuncs.isBlank;

describe('isBlank Function', () =>
{
	test('no arguments', () =>
	{
		expect(isBlank()).toBe(true);
	});
});