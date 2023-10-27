 let num = 0 
 if (num > 0){
    console.log(`${num} is a positive number`);
 } else if (num < 0) {
    console.log(`${num} is a negative number`);
 } else {
    console.log(`${num} = 0`);
 }

    let score = 60
    if (0 <= score && score <40) {
        console.log(`${score} = DD`);
    } else if (40 <= score && score < 60) {
        console.log(`${score} = CC`);
    } else if (60 <= score && score < 85) {
        console.log(`${score} = BB`)
    } else if (85 <= score && score <= 100) {
        console.log(`${score} = AA`)
    } else {
        console.log("girilen not 0-100 arasında olmalidir");
    }