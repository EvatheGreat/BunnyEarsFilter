function preload(){
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    vid=createCapture(VIDEO);
    vid.size(400,400);
    vid.hide();
    anam=ml5.poseNet(vid,modelLoaded);
    anam.on('pose',gotPoses);
}
function draw(){
    image(vid,0,0,500,400);
}
function snap(){
    save("FILTERZ 2.0.png");
}
function modelLoaded(){
    console.log("I ❤️ CODING 💻");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}