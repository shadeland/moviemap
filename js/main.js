var camera, scene, renderer;
var objects = []; 


function init(){
    
scene= new THREE.Scene();
camera= new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
renderer= new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


camera.position.z= 5;
}

function addCube(){
    
    var geometry= new THREE.BoxGeometry( 1, 1, 1 );
    var material= new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube= new THREE.Mesh( geometry, material );
    scene.add( cube );

    
}
 
 

var render= function () {
    
    requestAnimationFrame( render );

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

	renderer.render(scene, camera);
	
};

render();
