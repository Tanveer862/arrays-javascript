//Maria plays college basketball and wants to go pro.
//Each season she maintains a record of her play.
//She tabulates the number of times she breaks her season record for most points and least points in a game.
//Points scored in the first game establish her record for the season, and she begins counting from there.
function breakingRecords(scores) {
    let minScore=scores[0];
    let maxScore=scores[0];
    let minCount=0;
    let maxCount=0;
    for(let i=1;i<scores.length;i++){
        if(scores[i]>maxScore){
            maxScore=scores[i];
            maxCount++;
        }else if(scores[i]<minScore){
            minScore=scores[i];
            minCount++;
        }
    }
console.log("Maximum:",maxCount);
console.log("Minimum:",minCount);
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
