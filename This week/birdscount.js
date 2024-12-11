//Given an array of bird sightings where every element represents a //bird type id, determine the id of the most frequently sighted type. 
//If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
function mostFrequentBird(birds) {
    mostFrequent = birds[0];
    for(let i=0;i<birds.length;i++){
        for(let j=i+1;j<birds.length;j++){
            if(birds[i]>birds[j+1]){
                let temp;
                temp=birds[i];
                birds[i]=birds[j+1];
                birds[j+1]=temp;
        }
    }
    
    let maxCount = 0, currentCount = 1 ;
    for (let i = 1; i < birds.length; i++) {

        if (birds[i] === birds[i - 1]) {
            currentCount++; 
        } else {
            currentCount = 1; 
        }
        if (currentCount > maxCount) {
            maxCount = currentCount; 
            mostFrequent = birds[i]; 
        }
    }
}
console.log(mostFrequent);
}

mostFrequentBird([1, 1, 2, 2, 3, 3, 3, 3,2, 2,1,1]); 