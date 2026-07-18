/* 
* ! actually opposites the value of the variable
* !! makes that the right bollean
*/

const loggedIn = true;

if (!loggedIn){
    console.log("Thanks For Logged in")
}
else{
    console.log("Please Log In")
}


// Upper version
const loggedIn = true;

if (!!loggedIn){
    console.log("Thanks For Logged in")
}
else{
    console.log("Please Log In")
}
