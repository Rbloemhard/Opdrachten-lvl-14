function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
    
}
//log i plus grade
for(i = 60; i <=100; i++){
console.log(`Je hebt ${i} punten, je krijgt een ${assignGrade(i)}`);
}