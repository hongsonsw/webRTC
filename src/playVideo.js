function playVideo(stream, idVideo) {
    const video = document.getElementById(idVideo);
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
        video.play();
        console.log('zzz');
    }
}

module.exports = playVideo;