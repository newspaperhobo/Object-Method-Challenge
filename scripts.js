// START HERE
// STEP 1. A **hotel** with two properties called **totalRooms** and **bookedRooms**. The values for both properties can be any number. A **remainingRooms()** method (VERSION 2 - ES6) should return the remaining number of rooms that a hotel has. Console.log a message that says, "There are ## of rooms available for booking." The ## in this message should be referenced dynamically from the remainingRooms()method. 
console.log("-------------\n");
console.log("1. Can I book a room?");

const hotel = {
    totalRooms: 400,
    bookedRooms: 100,
    remainingRooms() {
        return this.totalRooms - this.bookedRooms
    }
}

console.log(`There are ${hotel.remainingRooms()} of rooms available for booking.`)


// STEP 2. A **Forest Gump** with the property called **"thing"**. The value should be set of chocolates. A **sayQuote()** method (VERSION 2 - Key/Value Pair) will result in a console.log that says "My momma always said, 'Life was like a box of `chocolates`. You never know what you're gonna get.'" The thing "chocolate" in this message should be referenced dynamically from the property. 
console.log("-------------\n");
console.log("2. Oh Forest!");

const ForestGump = {
    // thing: ["rubber ducks", "succulents", "bath bombs", "war heads", "nes games"],
    thing: "chocolates",
    sayQuote: function(){
        return this.thing
    }
}

console.log(`My momma always said, 'Life was like a box of ${ForestGump.sayQuote()}. You never know what you're gonna get.`)



// STEP 3. A **Instacart** with a property **"items"** initialized to an **empty array**. A method **addItem()** (VERSION 2 - ES6) with one parameter, that will eventually add one item to the items array. Console.log the items property to display the items that are currently in the shopping cart.
console.log("-------------\n");
console.log("3. Instacart");

const Instacart = {
    items:[],
    addItem(item){
        return this.items.push(item)
    }
}

Instacart.addItem("milk")
console.log(Instacart.items)


// STEP 4. A **rocket** with the property called **"name"**. The name of the rocket is called "Apollo 11". A **startLaunch()** method (VERSION 1) will result in a JavaScript **alert** that says, "ignition sequence start for the Apollo 11 ... 6, 5, 4, 3, 2, 1, 0 ..." This method will also console.log a message that says "launched". The name "Apollo 11" in this message should be referenced dynamically from the property. Remember to call the method.
console.log("-------------\n");
console.log("4. We have a liftoff");

const rocket = {
    name: "Apollo 11",
    }


rocket.startLaunch = function() {
        alert("ignition sequence start for the Apollo 11");
        for (let i = 6; i >= 0; i--) {
        alert(i)
        }
        console.log(`Launched ${this.name}`)
}

rocket.startLaunch()


// STEP 5. Create your own object and give it **at least one property** and **at least one method**. You can use any version to create the methods, Then call one of the methods you created. Use your imagination! 
console.log("-------------\n");
console.log("5. Create your own!");
