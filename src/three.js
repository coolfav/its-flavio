import * as THREE from 'three';
import galaxy from './imgs/agalxy2.jpg';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );


scene.background = new THREE.TextureLoader().load( galaxy );
// scene.backgroundBlurriness = 0.2;
scene.backgroundRotation = (0,0,0);
const javapokevideo = document.getElementById( 'javapokevid' );
const javapoketexture = new THREE.VideoTexture( javapokevideo );

javapoketexture.minFilter = THREE.LinearFilter;
javapoketexture.magFilter = THREE.LinearFilter;

var movieMaterial = new THREE.MeshBasicMaterial({
    map: javapoketexture,
    side: THREE.FrontSide,
    toneMapped: false
});

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x500072 } );
const cube = new THREE.Mesh( geometry, movieMaterial );
scene.add( cube );

camera.position.z = 2;

let rotating = false;
let counter = 0;


function animate() {
    javapokevideo.play();
    //use this premise to jumping to faces
    if (!rotating) {
        if (counter <= 100) {
           //cube.rotation.x += 0.0005;
           //cube.rotation.y += 0.0005; 
           //cube.rotation.z += 0.0005;
        } else {
            // cube.rotation.x += -0.0005;
            // cube.rotation.y += -0.0005;
            //cube.rotation.z += -0.0005;
        }
    }
    counter++;
    if (counter == 201) {
        counter = 0;
    }
    javapoketexture.needsUpdate = true;
	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );

export function Three () {
    document.body.appendChild( renderer.domElement );
}