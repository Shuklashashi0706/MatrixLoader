import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube setup
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./OIP.jpg'); // Replace with your texture path
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White directional light
directionalLight.position.set(0, 1, 1);
scene.add(ambientLight);
scene.add(directionalLight);

// Camera position
camera.position.z = 5;

// Animation loop
function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}

animate();
