require("dotenv").config();
var keys = require("./keys.js");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var secondCommand = process.argv[3];

switch (command) {
    case "concert-this":
        showConcert();
        break;

    case "spotify-this-song":
        if (secondCommand) {
            spotifyThisSong(secondCommand)
        } else {
            spotifyThisSong("The sign");
        }
        break;

    case "movie-this":
        if (secondCommand) {
            ombd (secondCommand);
        } else {
            ombd("Mr. Nobody");
        }
        break;
    
        case "do-what-it-says":
            doThing();
            break;
            default:
                console.log("Try again")
};