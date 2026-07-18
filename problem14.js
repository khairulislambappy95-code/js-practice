let age = 22;
let hasId = true;

if(age > 18 && hasId){
    console.log("Eligable to vote")
}
else if(age > 18 && hasId === false){
    console.log("Go Get Your ID")
}
else{
    console.log("You are liliput or too young")
}