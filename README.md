# liri-node-app

LIRI is a command line node app that takes in parameters and gives you back data based off the following parameters: 

-	concert-this
-	Spotify-this-song
-	movie-this
-	do-what-it-says

## concert-this: 

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

-	Name of the venue
-	Venue location
-	Date of the Event (use moment to format this as "MM/DD/YYYY")

![Screen shot](images/concert-this.png)

## Spotify-this-song:

This will show the following information about the song in your terminal/bash window

-	Artist(s)
-	The song's name
-	A preview link of the song from Spotify
-	The album that the song is from

If no parameter is given for song search the default song is Ice Ice Baby by Vanilla Ice.

![Screen shot](images/spotify.png)

## movie-this:

This will output the following information to your terminal/bash window:
-	Title of the movie.
-	Year the movie came out.
-	IMDB Rating of the movie.
-	Rotten Tomatoes Rating of the movie.
-	Country where the movie was produced.
-	Language of the movie.
-	Plot of the movie.
-	Actors in the movie.

If no movie title is searched for the default search is for the movie, Mr. Nobody.

![Screen shot](images/movie.png)

## do-what-it-says:

LIRI will use the text from “random.txt” and call on of LIRI’s commands. 
It should run Spotify-this-song for “I want it That way”, by the Backstreet Boys.

![Screen shot](images/do.png)

## Technologies used:
* JavaScript
* Node.js
* NPM Packages

## API's Used
* Spotify API
* OMDB API
* Bands in Town API