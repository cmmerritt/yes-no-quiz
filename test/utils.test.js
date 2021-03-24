import { countsAsYes } from './utils.js';

const test = QUnit.test;
    
test('take string and return true if it starts with y/Y, otherwise false', (expect) => {
    const expected = true;
    const actual = countsAsYes('yes');

    expect.equal(actual, expected, 'yes returns true');
    expect.equal(countsAsYes('yesss'), true, 'yesss returns true');
    expect.equal(countsAsYes('Nah'), false, 'Nah returns false');
});