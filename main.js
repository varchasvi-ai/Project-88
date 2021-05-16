var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;
var block_image_width = 50;
var block_image_height = 50;

var player_object = "";
var block_image_object = "";

function up()
{
    if(player_y>=0)
    {
        player_y = player_y - block_image_height;
        console.log("Block image height =" + block_image_height);
        console.log("When up arrow key is pressed X=" + player_x + "Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y<=500)
    {
        player_y = player_y + block_image_height;
        console.log("Block image height =" + block_image_height);
        console.log("When down arrow key is pressed X=" + player_x + "Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x>=0)
    {
        player_x = player_x - block_image_width;
        console.log("Block image width =" + block_image_width);
        console.log("When left arrow key is pressed X=" + player_x + "Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x<=500)
    {
        player_x = player_x + block_image_width;
        console.log("Block image width =" + block_image_width);
        console.log("When right key is pressed X=" + player_x + "Y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function player_update()
{
    fabric.Image.fromURL( "player.png" , function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL( get_image , function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
    var keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed=="80")
    {
        console.log("P and Shift key pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keypressed=="77")
    {
        console.log("M and Shift key pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keypressed=="37")
    {
        left();
        console.log("left");
    }
    if(keypressed=="38")
    {
        up();
        console.log("up");
    }
    if(keypressed=="39")
    {
        right();
        console.log("right");
    }
    if(keypressed=="40")
    {
        down();
        console.log("down");
    }
    if(keypressed=="65")
    {
        new_image("hulk_face.png");
        console.log("A");
    }
    if(keypressed=="66")
    {
        new_image("hulk_left_hand.png");
        console.log("B");
    }
    if(keypressed=="67")
    {
        new_image("hulk_right_hand.png");
        console.log("C");
    }
    if(keypressed=="68")
    {
        new_image("hulk_legs.png");
        console.log("D");
    }
    if(keypressed=="69")
    {
        new_image("hulkd_body.png");
        console.log("E");
    }
    if(keypressed=="70")
    {
        new_image("ironman_face.png");
        console.log("F");
    }
    if(keypressed=="71")
    {
        new_image("ironman_left_hand.png");
        console.log("G");
    }
    if(keypressed=="72")
    {
        new_image("ironman_right_hand.png");
        console.log("H");
    }
    if(keypressed=="73")
    {
        new_image("ironman_legs.png");
        console.log("I");
    }
    if(keypressed=="74")
    {
        new_image("ironman_body.png");
        console.log("J");
    }
    if(keypressed=="75")
    {
        new_image("spiderman_face.png");
        console.log("K");
    }
    if(keypressed=="76")
    {
        new_image("spiderman_left_hand.png");
        console.log("L");
    }
    if(keypressed=="84")
    {
        new_image("spiderman_right_hand.png");
        console.log("T");
    }
    if(keypressed=="78")
    {
        new_image("spiderman_legs.png");
        console.log("N");
    }
    if(keypressed=="79")
    {
        new_image("spiderman_body.png");
        console.log("O");
    }
    if(keypressed=="83")
    {
        new_image("thor_face.png");
        console.log("S");
    }
    if(keypressed=="81")
    {
        new_image("thor_left_hand.png");
        console.log("Q");
    }
    if(keypressed=="82")
    {
        new_image("thor_right_hand.png");
        console.log("R");
    }
}