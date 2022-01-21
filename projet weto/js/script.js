var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.cube = new THREE.Mesh ( geometry, material );

scene.add( cube );var geometry = new THREE.BoxGeometry( 1, 2, 1 );
var material = new THREE.MeshNormalMaterial( { color: "#3b5998"} );
va

camera.position.z = 5;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.5);
scene.add(ambientLight) ;



function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x =+ 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera ); 
}

animate(); 