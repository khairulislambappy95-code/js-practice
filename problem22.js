let cartTotal = 800;
let userStatus = "member";

if(cartTotal >= 1000 && userStatus === "member"){
    console.log("Discount 20%")
}
else if(cartTotal >= 950){
    console.log("10% Discount")
}
else{
    console.log("No Discount")
}