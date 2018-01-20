//Arrays have indices with specific ordering
//While Objects are key-value pairs without any specific ordering

var dogs = ["Rusty","Lucky","Bubba"];
console.log(dogs);

console.log(dogs[1]);

var dog = {
	name: "Bubba",
	breed: "Lab"
}

console.log(dog);
console.log(dog["name"]);
console.log(dog.name);

//Array is a special version of an Object

//Adding an element to the Array at the end with specific ordering
dogs.push("Wyatt");
console.log(dogs);

//Adding a new property to the Object called age without specific ordering
dog.age = 6;
console.log(dog);

//Update item in array
dogs[1] = "Lucy"
console.log(dogs);

//Update object property in Object
dog.breed = "Black Lab";
console.log(dog);

//Array of objects
var posts = [
	{
		title: "Cats are mediocre",
		author: "Colt",
		comments: ["Awesome post","Terrible post"]
	},
	{
		title: "Cats are actually awesome",
		author: "Cat Luvr",
		comments: ["<3","Go to hell I hate you"]
	}
];

console.log(posts);
console.log(posts[0].title);
console.log(posts[1]);
console.log(posts[1].comments);
console.log(posts[1].comments[1]);