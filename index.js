userName = prompt("enter your name");
console.log(userName);

age = prompt("enter your age");

newage = Number(age);
console.log( age +  typeof newage);



a = prompt("enter the starting value");
b = Number(a);
for( let i = a;  i<=100; i++){
    console.log(i , typeof b);
    
}

userOption = prompt("enter your number 1,2,3,4,5");
userOption = Number(userOption);
while (userOption <= 5) {
     userOption = prompt("enter your number 1,2,3,4,5");
userOption = Number(userOption);
}




cityName = prompt("enter your city name");
cityName = Number(cityName);
userCity = "lahore"
while (cityName != userCity) {
    
cityName = prompt("enter your city name");

}

users = ["ali", "mohtasham", "zeeshan", " ahmad", "wasif"]
console.log(users.slice(1,3));
