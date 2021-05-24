class Snow{

        constructor(x,y){
            var options = {
                friction: 0.01,
                restitution:0.1,    
                density: 1     
            }
            this.rain = Bodies.circle(x,y,5,options)
            this.radius = 5;
            this.img = loadImage("Snow_2_Final.png");
            this.img.resize(500, 500);
            World.add(world, this.rain);
        }
    
        updateY(){     
            if(this.rain.position.y > height){
    
                Matter.Body.setPosition(this.rain, {x:random(0,1280), y:random(0,720)})
            }
        }
    
        showFlake(){
            imageMode(CENTER);
            image(this.img,this.rain.position.x,this.rain.position.y,this.radius+30,this.radius+30);
        }
    }
