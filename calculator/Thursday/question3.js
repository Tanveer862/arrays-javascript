

function countCharacters(str) {
    let str1=str.split("");
    let counter=1;
    for(let i=0;i<str.length;i++){
        if(str1[i]==str1[i+1]){
            counter++;
        } 
        else
        {

            console.log(str1[i] + " " + counter);
           counter=1;
        }
    }
    console.log(counter)
}
countCharacters("tanveer")

// let person={
//         name:'Tanveer',
//         age:25,
//         city:'Rawalpindi',
//         greet:function(){
//             console.log('Hello, my nameis '+ this.name)
//         }
//     };
//     person.greet();
//     console.log(person.name);
//     console.log(person['age']);
//     person.job='Developer';
//     person.age=26;
//     console.log(person['age']);
//     delete person .city;
//     for(let key in person){
//         console.log(key +':'+person[key])
//     }