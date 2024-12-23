//HackerLand University has the following grading policy:

//Every student receives grade a  in the inclusive range from 0 to 100.
//Any grade less than 40 is a failing grade.
///Sam is a professor at the university and likes to round each student's grade  according to these rules:

//If the difference between the grade and the next multiple of 5  is less than 3 , round grade up to the next multiple of 5 .
//If the value of grade is less than 38 , no rounding occurs as the result will still be a failing grade.
function gradingStudents(grades) {
    let roundedGrade=[];
    for(let grade of grades){
        if(grade<38){
            roundedGrade.push(grade)
        }else{
            let nextMultipleOf5= Math.ceil(grade/5)*5;
            if(nextMultipleOf5-grade<3){
                roundedGrade.push(nextMultipleOf5)
            }else{
                roundedGrade.push(grade)
            }
        }
    }
   console.log (roundedGrade);
}
gradingStudents([73,38,68])