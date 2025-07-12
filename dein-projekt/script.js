const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene'), antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 10;

const group = new THREE.Group();
const loader = new THREE.TextureLoader();
const imageUrls = [
  'images/bild1.jpg',
  'images/bild2.jpg',
  'images/bild3.jpg'
];

imageUrls.forEach((url, i) => {
  const tex = loader.load(url);
  const mat = new THREE.MeshBasicMaterial({ map: tex });
  const geo = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geo, mat);
  const angle = i * (2 * Math.PI / imageUrls.length);
  mesh.position.set(Math.cos(angle) * 5, Math.sin(angle) * 5, 0);
  mesh.lookAt(0, 0, 0);
  group.add(mesh);
});
scene.add(group);

function animate() {
  requestAnimationFrame(animate);
  group.rotation.z += 0.005;
  renderer.render(scene, camera);
}
animate();

// Doppelklick-Interaktion
window.addEventListener('dblclick', () => {
  alert("Doppelklick erkannt – hier könnte Musik starten!");
});
