const fs = require('fs');//file sistem - biblioteca que vai salvar os videos, ja vem instalda no NODE
const { Script } = require('vm');
const { downloadFromInfo } = require('ytdl-core');
const ytdl = require('ytdl-core');//

let link = 'https://www.youtube.com/watch?v=b2bHm9vZYpQ';
// let button = document.querySelector('#converter');
// button.addEventListener('click', () => {
//     let link = document.querySelector('#url').value
//     let format = document.querySelector('#formatos');
//     let valorFormat = format.options[format.selectedIndex].value;
//     console.log(link);
//     console.log(valorFormat);
let pathToSave = 'E:/JavaScript/Conversor Web/downloads/'
ytdl(link).pipe(fs.createWriteStream(pathToSave + 'download1.mp4'));
//     download()
// });

// function download() {
//     Node(Script.js)
// }
//node script.js