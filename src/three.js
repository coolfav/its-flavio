import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x500072 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

scene.background = new THREE.Color(0x101421);

camera.position.z = 2;

function animate() {
    if (cube.rotation.x < 1.0) {
        cube.rotation.x += 0.001;
    }
    cube.rotation.y += 0.001;
    cube.rotation.z += 0.001;
	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );

export function Three () {
    document.body.appendChild( renderer.domElement );
}