var ffmpeg = require('ffmpeg'); 
const fs = require('fs');

var outputFolder = "./outputFolder/"
var inputFolder = './inputFolder/'


// ----------------------------------------------------------
// 
// ----------------------------------------------------------
function encodeVideo(input, output, file){


    try {

        var process = new ffmpeg(input + file);

        process.then((video) => {

            video
            .setVideoFormat('mp4')
            .save(output + file)
            .then(thefile => console.log(thefile))

        }, (error) => console.log(error));

    } catch (e) {
        console.log(e.code);
        console.log(e.msg);
    }

}



// ----------------------------------------------------------
// read all files in directory and get their names
// ----------------------------------------------------------
function convert2mp4(input, output) {
    
    fs.readdir(inputFolder, (err, files) => {

        if (err) return console.log(err);

        files.forEach(file => {
            encodeVideo(input, output, file)
        })

    });

}


// ----------------------------------------------------------
//
// ----------------------------------------------------------
convert2mp4(inputFolder, outputFolder);