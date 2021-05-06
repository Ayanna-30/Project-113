function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    fill(0, 255, 0);
    stroke(0, 255, 0);
    rectangle1 = rect(130, 70, 340, 60);
    rectangle2 = rect(130, 370, 340, 60);
    rectangle3 = rect(130, 70, 60, 340);
    rectangle4 = rect(430, 70, 60, 340);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle1 = circle(100, 100, 60);
    circle2 = circle(100, 400, 60);
    circle3 = circle(500, 100, 60);
    circle4 = circle(500, 400, 60);
}

function draw()
{
    image(video, 190, 150, 240, 180);
}

function take_snapshot()
{
    save('item.png');
}