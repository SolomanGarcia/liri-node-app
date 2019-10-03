dotenv = require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var Spotify = require("node-spotify-api");
var moment = require('moment');
// var bandsintown = require('bandsintown')("codingbootcamp");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var secondCommand = process.argv[3];

switch (command) {
    case "concert-this":
        concertThis(secondCommand);
        break;

    case "spotify-this-song":
        if (secondCommand) {
            spotifyThisSong(secondCommand)
        } else {
            spotifyThisSong("Ice Ice Baby");
        }
        break;

    case "movie-this":
        if (secondCommand) {
            omdb(secondCommand);
        } else {
            omdb("Mr. Nobody");
        }
        break;

    case "do-what-it-says":
        doThing();
        break;
    default:
        console.log("Try again")
};

function concertThis(artist) {
    // var artist = value;

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log("Name of the venue:", response.data[0].venue.name);
            console.log("Venue location:", response.data[0].venue.city);
            var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
            console.log("Date of the Event:", eventDate);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function omdb(movie) {
    var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&apikey=" + "10d8c1c8" + "&plot=short&tomatoes=true";

    request(omdbURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var body = JSON.parse(body);

            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);


        } else {
            console.log("Error occurred.")
        }
        if (movie === "Mr. Nobody") {
            console.log("-----------------------");
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");

        }
    });

}



function spotifyThisSong(song) {
    spotify.search({ type: 'track', query: song, limit: 1 }, function (error, data) {
        if (!error) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var songData = data.tracks.items[i];

                console.log("Artist: " + songData.artists[0].name);

                console.log("Song: " + songData.name);

                console.log("Preview URL: " + songData.preview_url);

                console.log("Album: " + songData.album.name);
                console.log("-----------------------");
            }
        } else {
            console.log('Error occurred.');
        }
    });
}

function doThing() {
    fs.readFile('random.txt', "utf8", function (error, data) {
        var txt = data.split(',');

        spotifyThisSong(txt[1]);
    });
}

