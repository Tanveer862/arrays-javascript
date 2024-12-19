//An arcade game player wants to climb to the top of the leaderboard and track their ranking. 
//The game uses Dense Ranking, so its leaderboard works like this
//The player with the highest score is ranked number  on the leaderboard.
//Players who have equal scores receive the same ranking number,
//and the next player(s) receive the immediately following ranking number.
function climbingLeaderboard(ranked, player) {
    let finalArray = [];
    for (let i = 0; i<ranked.length; i++) {
      for (let j = i + 1; j<ranked.length; j++) {
        if (ranked[i]<ranked[j ]) {
          let temp = ranked[j];
          ranked[j] = ranked[i];
          ranked[i] = temp;
        }
      }
    }
    let uniqueRank=ranked;
    let index=uniqueRank.length-1;
    for(let score of player){
      while(index>=0 && score>=uniqueRank[index]){
          index--
      }
      finalArray.push(index+2)
    }
    console.log(finalArray)
  }
  climbingLeaderboard([100, 90, 90, 80], [70, 80,60,50, 105]);
  