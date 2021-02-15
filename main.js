status = " ";
function preload()
{
initial_img = loadImage('dog_cat.jpg');
}
function setup()
{
canvas = createCanvas(400,300);
canvas.center();
object_detector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status_btn").innerHTML = "Status : Detecting Objects";
}
function draw()
{
image(initial_img ,0,0,400,300);
fill('#eb0000');
noFill();
stroke('#eb0000');
rect(50,40,150,250);
text("Doggy", 60,50);

fill('#eb0000');
noFill();
stroke('#eb0000');
rect(180,50,180,230);
text("Cat", 200,60);
}
function modelLoaded()
{
    console.log("coco intialized");
    status = true;
    object_detector.detect(initial_img , gotResults);
}
function gotResults(error , results)
{ if(error)
    {
    console.error(error);
    }
    else{
        console.log(results);
    }
}