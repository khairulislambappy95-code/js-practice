// Underweight, Normal, Overweight, Obese 

const bmi = 25.5;

if(bmi < 26 && bmi > 24){
    console.log("Normal")
}
else if (bmi <= 20){
    console.log("Underweight")
}
else if(bmi > 26 && bmi < 29){
        console.log("Overweight")
}
else if (bmi > 29){
    console.log("Obese")
}