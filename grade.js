let score = prompt("enter your score out of 100: ");
let grade;

if (score >= 90 && score <= 100){
    grade="O"
} else if (score >= 80 && score <= 89){
    grade="A+"
}else if (score >= 70 && score <= 79){
    grade="A"
}else if (score >= 60 && score <= 69){
    grade="B+"
}else if (score >= 50 && score <= 59){
    grade="B"
}else if (score >= 40 && score <= 49){
    grade="C"
}else if (score >= 0 && score <= 39){
    grade="F"
}
console.log("According to your marks your grade is ", grade)