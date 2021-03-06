var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1, 1 );
var material = new THREE.MeshNormalMaterial( { color: "#FFFFFF"} );
var cube = new THREE.Mesh ( geometry, material );



scene.add( cube );



camera.position.z = 5;

var ambientLight = new THREE.AmbientLight(0xFF111F, 5);
scene.add(ambientLight) ;




function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x = 1;
    cube.rotation.y = 1;
 

  
    renderer.render(scene, camera ); 

}


animate(); 

