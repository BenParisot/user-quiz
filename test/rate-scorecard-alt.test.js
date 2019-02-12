const test = QUnit.test;

function rateScorecardAlt(scorecard) {
    const apple = scorecard.apple;
    const banana = scorecard.banana;
    const kiwi = scorecard.kiwi;
    const blueberry = scorecard.blueberry;

    let scoreNameArray = ['apple', 'banana', 'blueberry', 'kiwi'];
    let scoreNumArray = [];

    scoreNumArray.push(apple, banana, blueberry, kiwi);
    const winner = Math.max(...scoreNumArray);

    const position = scoreNumArray.indexOf(winner);
    const result = scoreNameArray[position];

    return result;
}

test('if apple has highest score return apple', function(assert) {
    const scorecard = { apple: 1, banana: 0, blueberry: 0, kiwi: 0 };

    const expected = 'apple'
    const result = rateScorecardAlt(scorecard);
    
    assert.equal(result, expected);

});

