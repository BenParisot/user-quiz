const test = QUnit.test;

import rateScorecardAlt from '../src/eval/calculate/rate-scorecard-alt.js';

test('if apple has highest score return apple', function(assert) {
    const scorecard = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };

    const expected = 'apple'
    const result = rateScorecardAlt(scorecard);
    
    assert.equal(result, expected);

});

