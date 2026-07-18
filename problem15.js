let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin){
    console.log("Admin Dashboard")
}
else if(isLoggedIn && isAdmin === false){
    console.log("User Dashboard")
}
else if(isLoggedIn === false && isAdmin === false){
    console.log("Please Log In")
}