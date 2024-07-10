const temperature = 43

if(temperature >=35 && temperature <=50 ){
    console.log("Heat wave ALERT");
}
else if(temperature >=20 && temperature<35){
    console.log("Temperature is Normal");
}
else if(temperature>0 && temperature<20){
    console.log("Its very coold");
}
else{
    console.log("Please enter correct temperature");
}