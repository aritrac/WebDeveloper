var moviesArr = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}
];

function processMovies(movArr){
	movArr.forEach(function(movie){
		buildOutput(movie);
	});
}
function buildOutput(movie){
	var watched = "";
	if(movie.hasWatched)
		watched = "watched";
	else
		watched = "not seen";
	console.log("You have " + watched + " \"" + movie.title + "\" - " + movie.rating + " stars" );
}
processMovies(moviesArr);