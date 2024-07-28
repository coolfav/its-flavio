import * as THREE from 'three';
import galaxy from './imgs/agalxy2.jpg';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x500072 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

scene.background = new THREE.TextureLoader().load( galaxy );

camera.position.z = 2;

let rotating = false;
let counter = 0;

function animate() {
    //use this premise to jumping to faces
    if (!rotating) {
        if (counter <= 100) {
           cube.rotation.x += 0.0005;
           cube.rotation.y += 0.0005; 
           //cube.rotation.z += 0.0005;
        } else {
            cube.rotation.x += -0.0005;
            cube.rotation.y += -0.0005;
            //cube.rotation.z += -0.0005;
        }
    }
    counter++;
    if (counter == 201) {
        counter = 0;
    }
	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );

export function Three () {
    document.body.appendChild( renderer.domElement );
}