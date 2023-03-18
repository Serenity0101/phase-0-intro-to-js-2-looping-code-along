
   const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names, event) { 
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}
console.log(writeCards(names, "birthday"))
        
for (let countDown = 0; countDown < 10; countDown = countDown + 1) {
    console.log("This for a for loop");
}