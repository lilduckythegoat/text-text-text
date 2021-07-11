function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(50, 60)

    canvas = createCanvas (550, 450);
    canvas.position(620,100);

    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
background('#779cf2')
}

function ModelLoaded() {
    console.log('poseNet is inziltioned')
}

function gotPoses() {
    if(results.length > 0)
    {
        console.log(results);
    }
}