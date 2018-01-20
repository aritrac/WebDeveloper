var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		listTodos();
	}else if(input === "new"){
		addTodo();
	}else if(input === "delete"){
		deleteTodo();
	}
	//ask again for new input
	input = prompt("What would you like to do?");
}

console.log("OK. YOU QUIT THE APP");

function listTodos(){
	console.log("*****************");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("*****************");
}

function addTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("Todo added!");
}

function deleteTodo(){
	//ask for index of todo to be deleted
	var idx = prompt("Enter the index you would like to delete");
	//delete that todo
	if(idx >= 0 && idx < todos.length){
		todos.splice(idx,1);
		console.log("Todo deleted!");
	}else
		console.log("Invalid index");
}