let scene;
let camera;
let renderer;


function main()
{
const canvas = document.querySelector('#c');


scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;
scene.add(camera);

renderer = new THREE.WebGLRenderer({canva: canvas, antialias: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.autoClear = false;
renderer.setClearcolor(0x00000, 0.0);

// create earthgeometry

const earthgeometry = new THREE .SphereGeometry(0.6,32,32);

const earthmaterial = new THREE.MeshPhongMaterial({
    roughness : 1,
    metalness:0,
    map: THREE.ImageUtils.loadTexture('texture/earthmap.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('earthbump.webp'),
    bumpscale: 0.3,
});

const earthmesh = new THREE.Mesh(earthgeometry,earthmaterial);

scene.add(earthmesh);


// scene ambientlight

const ambientlight = new THREE.AmbientLight(0xfffff, 0.2);
scene.add(ambientlight);

// set point light 

const pointerlight = new THREE.PointLight(0xfffff,0.9);

// set light position 

pointerlight.position.set(5,3,5);
scene.add(pointerlight);




const animate = () =>{
    requestAnimationFrame(animate);
    earthmesh.rotation.y -= 0.00015;
    
    renderer();
}
const render = () => {
    renderer.render(scene,camera);
}
animate();


}

window.onload = main;
