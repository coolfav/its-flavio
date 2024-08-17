import * as THREE from 'three';
import galaxy from './imgs/galaxbgS.jpg';
import { TBControls } from './TBcontrols.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OrbitControls } from './Orbit.js';
import { gsap } from "gsap";
/* 	'To actually be able to display anything with Three.js, we need three things:
    A scene, a camera, and a renderer so we can render the scene with the camera.' 
        
        - https://threejs.org/docs/#Manual/Introduction/Creating_a_scene 		*/

var scene, camera, renderer;

/* We need this stuff too */
var container, aspectRatio,
    HEIGHT, WIDTH, fieldOfView,
    nearPlane, farPlane, geometry,
    starStuff, materialOptions, stars;
    //mouseX, mouseY, windowHalfX, windowHalfY

//the function ran twice for some reason so i added this so it only runs once lmao
var ok = 0;

//gotta know if the button was freshly clicked
var last;

//we need pi for rotation
var pi = 3.14159265359;
var halfpi = 1.5915494309;

//used to determine if the camera still follows the cursor or not, ifempty then yes. once a button is clicked, this should set to whichever button was clicked
var clicken = '';

const javapokevideo = document.getElementById( 'javapokevid' );
const javapoketexture = new THREE.VideoTexture( javapokevideo );
javapoketexture.minFilter = THREE.LinearFilter;
javapoketexture.magFilter = THREE.LinearFilter;

const mariovideo = document.getElementById( 'marioluigi' );
const mariotext = new THREE.VideoTexture( mariovideo );
mariotext.minFilter = THREE.LinearFilter;
mariotext.magFilter = THREE.LinearFilter;

const pokecrossvideo = document.getElementById( 'pokercross' );
const pokectext = new THREE.VideoTexture( pokecrossvideo );
pokectext.minFilter = THREE.LinearFilter;
pokectext.magFilter = THREE.LinearFilter;

var movieMaterial = new THREE.MeshBasicMaterial({
    map: javapoketexture,
    side: THREE.FrontSide,
});

var movieMaterial2 = [
    new THREE.MeshBasicMaterial({
        map: javapoketexture,
        transparent: true, 
        side:THREE.DoubleSide 
    }),
    new THREE.MeshBasicMaterial({
        map: mariotext,
        transparent: true, 
        side:THREE.DoubleSide 
    }),
    new THREE.MeshBasicMaterial({
        map: pokectext,
        transparent: true, 
        side:THREE.DoubleSide 
    })
]

const cubegeometry = new THREE.BoxGeometry( 300, 300, 300 );
const cube = new THREE.Mesh( cubegeometry, movieMaterial2 );
cube.position.set(0,0,0);

var controls, orbitcontrols;

export function Stars ({clicked}) {
    clicken = clicked;
    init();
}

function init() {
    if (ok === 0) {
        container = document.createElement('div');
        document.body.appendChild( container );
        console.log("bg");
        document.body.style.overflow = 'hidden';

        HEIGHT = window.innerHeight;
        WIDTH = window.innerWidth;
        aspectRatio = WIDTH / HEIGHT;
        fieldOfView = 75;
        nearPlane = 1;
        farPlane = 1000;

        //windowHalfX = WIDTH / 2;
        //windowHalfY = HEIGHT / 2;

        camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        //Z positioning of camera

        camera.position.z = farPlane / 2;
        
        scene = new THREE.Scene({antialias:true});
        scene.fog = new THREE.FogExp2( 0x000000, 0.0003 );

        let loader = new THREE.TextureLoader()
        let bg = loader.load( galaxy );
        bg.minFilter = THREE.LinearFilter;
        bg.colorSpace = THREE.SRGBColorSpace;
        scene.background = bg;

        // The wizard's about to get busy.
        starForge();

        scene.add(cube);
    
        renderer = new THREE.WebGLRenderer({alpha: true});


        renderer.setClearColor(0x000011, 1);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( WIDTH, HEIGHT);
        container.appendChild(renderer.domElement);
        renderer.setAnimationLoop( animate );

        controls = new TBControls( camera, renderer.domElement);
        controls.noPan = true;
        controls.noZoom = true;
        controls.target.set( 0, 0, 0 );

        orbitcontrols = new OrbitControls( camera, renderer.domElement );
        orbitcontrols.enablePan = false;
        orbitcontrols.enableZoom = false;
        orbitcontrols.target.set(0,0,0);

        window.addEventListener( 'resize', onWindowResize, false );
        
    }
    ok++;
    
}

function animate() {
    javapokevideo.play();
    mariovideo.play();
    pokecrossvideo.play();
    javapoketexture.needsUpdate = true;
    if (clicken === '') {
        controls.update();
    } else if (clicken === 'javamon' && last != 'javamon') {
        move2(0, 0, 0, (1 * halfpi), 0);
        last = 'javamon';
    } else if (clicken == 'mario' && last != 'mario') {
        move2(180, 0, 0, (-1 * halfpi), 0);
        last = 'mario';
    } else if (clicken === 'pokecross' && last != 'pokecross') {
        move2(90, 0, (-1 * halfpi), 0, 0);
        last = 'pokecross';
    }
    renderer.render(scene, camera);
}

function onWindowResize() {

    // Everything should resize nicely if it needs to!
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
    renderer.setSize(WIDTH, HEIGHT);
}

function starForge() {
    /* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
        are you really surprised at this point? 
                                                */
    var starQty = 45000;
        geometry = new THREE.SphereGeometry(1000, 100, 50);

        materialOptions = {
            size: 1.0, //I know this is the default, it's for you.  Play with it if you want.
            transparency: true, 
            opacity: 0.7
        };

        starStuff = new THREE.PointsMaterial(materialOptions);

    // The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

    const vertices = [];

    for (var i = 0; i < starQty; i++) {		

        var starVertex = {};
        starVertex.x = Math.random() * 2000 - 1000;
        starVertex.y = Math.random() * 2000 - 1000;
        starVertex.z = Math.random() * 2000 - 1000;

        vertices.push(starVertex.x, starVertex.y, starVertex.z);

    }

    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );


    stars = new THREE.Points(geometry, starStuff);
    scene.add(stars);
}

function moveTheCamera(posx, posy, posz, rotx, roty, rotz) {
    if (camera.position.x < posx - 1) {
        console.log('potingx+');
        camera.position.x += 1;
    } else if (camera.position.x > posx + 1) {
        console.log('potingx-');
        camera.position.x -= 1;
    }
    if (camera.position.y < posy - 1) {
        console.log('potingy+');
        camera.position.y += 1;
    } else if (camera.position.y > posy + 1) {
        console.log('potingy-');
        camera.position.y -= 1;
    }
    if (camera.position.z < posz - 1) {
        console.log('potingz+');
        camera.position.z += 1;
    } else if (camera.position.z > posz + 1) {
        console.log('potingz-');
        camera.position.z -= 1;
    }
    if (camera.rotation.x < (rotx - 0.001)) {
        camera.rotation.x += 0.001;
        console.log('rotingx+');
    } else if (camera.rotation.x > (rotx + 0.001)) {
        console.log('rotingx-');
        camera.rotation.x -= 0.001;
    }
    if (camera.rotation.y < (roty - 0.001)) {
        console.log('rotingy+');
        camera.rotation.y += 0.001;
    } else if (camera.rotation.y > (roty + 0.001)) {
        console.log('rotingy-');
        camera.rotation.y -= 0.001;
    }
    if (camera.rotation.z < (rotz - 0.001)) {
        console.log('rotingz+');
        camera.rotation.z += 0.001;
    } else if (camera.rotation.z > (rotz + 0.001)) {
        console.log('rotingz-');
        camera.rotation.z -= 0.001;
    } 
}


function calcPosFromLatLonRad(latitude, longitude, radius) {
  
    const phi   = (90 - latitude) * (Math.PI / 180);
    const theta = (longitude + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi)*Math.cos(theta));
    const z = (radius * Math.sin(phi)*Math.sin(theta));
    const y = (radius * Math.cos(phi));
  
    return new THREE.Vector3(x, y, z);
}


function move2(lat, lon, rotx, roty, rotz) {
    const cameraDistance = 500;
    const rotateStartPositionVector = camera.position.clone();
    const rotateEndPositionVector = calcPosFromLatLonRad(lat, lon, cameraDistance);

    let okay2 = gsap.to(camera.rotation,
        {
        duration: 1,
        x: rotx,
        y: roty,
        z: rotz
        }
    );

    gsap.fromTo(camera.position,
        {
        x: rotateStartPositionVector.x,
        y: rotateStartPositionVector.y,
        z: rotateStartPositionVector.z,
        },
        {
        duration: 1,
        x: rotateEndPositionVector.x,
        y: rotateEndPositionVector.y,
        z: rotateEndPositionVector.z,
        onUpdate: () => {
            camera.position.normalize().multiplyScalar(cameraDistance);
            //camera.lookAt(new THREE.Vector3(0, 0, 0));
        },
        onComplete: () => {
            okay2.play();
            console.log('tweening my shit rn');
        }
        }
    );
}

