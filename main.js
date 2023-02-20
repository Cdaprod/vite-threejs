import './style.css'

import * as THREE from 'three';

// 1:3 scene
const scene = new THREE.Scene();

// 2:3 cam
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// 3:3 render
const renderer = new THREE.WebGLRenderer{(
    canvas: document.querySelector('#bg'),
}); 
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

// move camera
camera.position.setZ(30);


document.body.appendChild( renderer.domElement );


// 
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;