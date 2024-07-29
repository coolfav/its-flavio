import * as THREE from 'three';
import galaxy from './imgs/agalxy2.jpg';
import { TBControls } from './TBcontrols.js';
/* 	'To actually be able to display anything with Three.js, we need three things:
    A scene, a camera, and a renderer so we can render the scene with the camera.' 
        
        - https://threejs.org/docs/#Manual/Introduction/Creating_a_scene 		*/

var scene, camera, renderer;

/* We need this stuff too */
var container, aspectRatio,
    HEIGHT, WIDTH, fieldOfView,
    nearPlane, farPlane,
    mouseX, mouseY, windowHalfX,
    windowHalfY, stats, geometry,
    starStuff, materialOptions, stars;

//the function ran twice for some reason so i added this so it only runs once lmao
var ok = 0;

//used to determine if the camera still follows the cursor or not, if false then yes. once a button is clicked, this should set to true.
var clicked = false;

const javapokevideo = document.getElementById( 'javapokevid' );
const javapoketexture = new THREE.VideoTexture( javapokevideo );

javapoketexture.minFilter = THREE.LinearFilter;
javapoketexture.magFilter = THREE.LinearFilter;

var movieMaterial = new THREE.MeshBasicMaterial({
    map: javapoketexture,
    side: THREE.FrontSide,
});

const cubegeometry = new THREE.BoxGeometry( 300, 300, 300 );
const cube = new THREE.Mesh( cubegeometry, movieMaterial );
cube.position.set(0,0,0);

var controls;

export function Stars () {
    init();
}

function init() {
    if (ok == 0) {
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
        mouseX = 0;
        mouseY = 0;

        windowHalfX = WIDTH / 2;
        windowHalfY = HEIGHT / 2;

        camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        //Z positioning of camera

        camera.position.z = farPlane / 2;
        
        scene = new THREE.Scene({antialias:true});
        scene.fog = new THREE.FogExp2( 0x000000, 0.0003 );

        scene.background = new THREE.TextureLoader().load( galaxy );

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

        window.addEventListener( 'resize', onWindowResize, false );
        document.addEventListener( 'mousemove', onMouseMove, false );
    }
    ok++;
    
}

function animate() {
    javapokevideo.play();
    //camera.position.x += ( mouseX - camera.position.x ) * 0.005;
    //camera.position.y += ( - mouseY - camera.position.y ) * 0.005;
    javapoketexture.needsUpdate = true;
    if (!clicked) {
        controls.update();
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


function onMouseMove(e) {
    //mouseX = e.clientX - windowHalfX;
    //mouseY = e.clientY - windowHalfY;

}	


