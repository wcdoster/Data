// create database
const HomeInventoryDatabase = {}

//create keys for the database
HomeInventoryDatabase.furniture = [];
HomeInventoryDatabase.electronics = [];
HomeInventoryDatabase.crafts = [];

// inventory items
const tv = {
    name: "Television",
    location:"living room",
    description:"I watch things on this"
}

const couch = {
    name:"Couch",
    location:"living room",
    description:"This is where I watch my TV"
}

const bed = {
    name:"Bed",
    location: "bedroom",
    description: "This is where I sleep"
}

const desk = {
    name: "Desk",
    location: "bedroom",
    description: "This is where I should be working, but it is mostly used as a place to put my things"
}

const kitchenTable = {
    name: "Kitchen Table",
    location: "kitchen",
    description: "This is where I should eat, but I mostly just do work here."
}

const xbox = {
    name: "Xbox",
    location: "living room",
    description: "This is my time waster"
}

const blender = {
    name: "Blender",
    locaiton: "kitchen",
    description: "This is the blender I stole from mom and never use"
}

const fryPan = {
    name: "Fry Pan",
    location: "kitchen",
    description: "This is what I use to cook everything"
}

const chefKnife = {
    name: "Chef's Knife",
    location: "kitchen",
    description: "This is what I use to prepare all of my food"
}

const cuttingBoard = {
    name: "Cutting Board",
    location: "kitchen",
    description: "This is what I prep all of my food on"
}

// push the items into the arrays
HomeInventoryDatabase.furniture.push(couch, bed, desk, kitchenTable);
HomeInventoryDatabase.electronics.push(tv, xbox, blender);
HomeInventoryDatabase.crafts.push(fryPan, chefKnife, cuttingBoard);

console.log(HomeInventoryDatabase);

const saveDatabase = (databaseObject, localStorageKey) => {
    //Turn my database it into a JSON string
    const stringifiedDatabase = JSON.stringify(databaseObject);
    //save to local storage
    localStorage.setItem(localStorageKey, stringifiedDatabase);
}

const loadDatabase = (localStorageKey) => {
    //get database from local storage
    const dataBaseString = localStorage.getItem(localStorageKey);
    //convert JSON string back into object
    return JSON.parse(dataBaseString);
}

saveDatabase(HomeInventoryDatabase, "HomeInventory");