function preload(){
noseX="";
noseY="";
leftWristX="";
rightWristX="";
difference="";
}

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(100,100);
    canvas=createCanvas(550,550);
    canvas.position(600,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
  background("#969A97");
  stroke("orange");
  fill("black");
  textSize(difference);
  text("GANESH",noseX,noseY);
}

function modelLoaded(){
    console.log("poseNet is intialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=Math.floor(leftWristX-rightWristX);
    }
}

