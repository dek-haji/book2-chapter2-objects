console.log("its working");
 
const cake = {
    color : ["brown", "red", "yellow"], 
    flavor : "chocolate",
    size: "mini",
    calories: 0,
    icing : true
}
console.table(cake)
console.log(cake.color)
//using IF statement to change some values of the cake object
if(cake.icing === true){
    cake.calories = 12;
}
console.log(cake.calories)


//using forEach to check the colors of the cupcake, also using string intereplation and string concatenation
cake.color.forEach(taco => {
    console.table("what is the colors", taco);
    console.log(`show me the colors ${taco} and it's beautiful`)
    console.log( "another way to show the colors is " + taco + " and some more.")
})


