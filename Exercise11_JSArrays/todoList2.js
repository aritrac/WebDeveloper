var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		var i = 0;
		console.log("*****************");
		todos.forEach(function(todo){
			console.log(i + ": " + todo);
			i++;
		});
		console.log("*****************");
	}else if(input === "new"){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
	}else if(input === "delete"){
		var idx = prompt("Enter the index you would like to delete");
		console.log("Todo deleted!");
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK. YOU QUIT THE APP");