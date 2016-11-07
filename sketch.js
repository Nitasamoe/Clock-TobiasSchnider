function setup() {
  createCanvas(800,600);
  setInterval(function(){sec += 1;

    if(sec === 60) {sec=0; minn+=1;}
    if(minn === 60) {minn=0; hou+=1;}
},1000);

  frameRate(1);
  }

var sec = 0;
var minn = 0;
var hou = 0;

function draw() {
  
        background(255,255,255);
        var mX = width/2;
        var mY = height/2;
        strokeWeight(1);
        ellipse(mX,mY,450);
        clockHand(mX,mY,220,sec,1);
        clockHand(mX,mY,170,minn,3);
        clockHand(mX,mY,100,hou,6);

        
        function clockHand(X,Y,len,inp,w){
          var inpu = inp -135;
          var pX = Math.cos(inpu*PI/30)*len;
          var pY = Math.sin(inpu*PI/30)*len;
          {
            strokeWeight(w)
          line(X,Y,pX+width/2,pY+height/2);
          }
        }
}