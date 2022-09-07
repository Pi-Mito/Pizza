    var canvas = new fabric.Canvas('myCanvas');
    playerX = 10;
    playerY = 10;
    blockImageWidth = 30;
    blockImageHeight = 30;
    var playerObject = "";
    var blockImageObject = "";
    function playerUpdate(){
        fabric.Image.fromURL("player.png", function (img) {
            playerObject = Img;
            playerObject.scaleToWidth(150);
            playerObject.scaleToHeight(140);
            playerObject.set({
                top:playerY,
                left:playerX
            })
            canvas.add(playerObject);
        });
    }
    function newImage(getImage){
        fabric.Image.fromURL(getImage, function(Img) {
            blockImageObject = Img;
            blockImageObject.scaleToWidth(blockImageWidth);
            blockImageHeight.scaleToHeight(blockImageHeight);
            blockImageObject.set({
                top:playerY,
                left:playerX
            })
            canvas.add(blockImageObject);
        });
    }
