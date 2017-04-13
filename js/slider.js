var canvas = document.getElementById('tutu');
var ctx = canvas.getContext('2d');

class Rectangle{
	constructor(height,width,x,y){
  	this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }
  
  get area(){
  	return this.calcArea();
  }
  get fill(){
  	return {h:this.height,
    				w:this.width,
            x:this.x,
            y:this.y};
  }
  
  calcarea(){
  	return this.height*this.width;
  }
}




class Drawer{
    
	constructor(canvas,ctx){
	    
  	this.canvas = canvas;
    this.ctx = ctx;
    this.PR = Math.round(window.devicePixelRatio || 1);
    
    
	this.width =this.canvas.width*this.PR;
	this.height = this.canvas.height*this.PR;
	
	this.poleH = 10;
	
	
  }
  
  drawline(object){
    
    var context = this.ctx;
      
    var numOfPoles = 15; 
    var baseWidth=this.width-20;
    var poleSteps=Math.round(baseWidth/numOfPoles);  
    
  	console.log(this.PR);
  	
  	this.ctx.fillStyle = 'rgb(200, 0, 0)';  
    this.ctx.fillRect(10,this.height/2,this.width-20,1);//Draw BAse line 
    
    for(var i=0; i<=numOfPoles; i++){
        
        this.ctx.fillRect(i*poleSteps+10,(this.height/2)-this.poleH,this.PR,this.poleH*2);//Draw each steps 
        

    }
    
    
  }
  
}


var square = new Rectangle(10,10,10,10);
var dr = new Drawer(canvas,ctx);
dr.drawline(square)
