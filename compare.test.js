const strFuncs = require('./string');
const compare = strFuncs.compare;

describe('compare Function', () =>
{
	test('no arguments', () =>
	{
		expect(compare()).toBe(0);
	});
});