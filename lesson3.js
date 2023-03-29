// question #1

  
function basketBallTotalScore(qtyTwoPointers1, qtyThreePointers2){
    let totalScore = qtyTwoPointers1 * 2 + qtyThreePointers2* 3;
    return totalScore
}


let result = basketBallTotalScore(4,5);

console.log('Total score:',result);
