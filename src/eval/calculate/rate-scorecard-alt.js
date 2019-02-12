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

export default rateScorecardAlt;