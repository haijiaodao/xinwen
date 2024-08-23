const shapes = [
  {
    name: "Tetrahedron",
    color: 0xffb6c1,
    geometry: new THREE.TetrahedronGeometry(3.4, 0)
  },
  {
    name: "Octahedron",
    color: 0xb2d8d8,
    geometry: new THREE.OctahedronGeometry(3.2, 0)
  },
  {
    name: "Icosahedron",
    color: 0xc9a0dc,
    geometry: new THREE.IcosahedronGeometry(3.2, 0)
  }
];

const scenes = [];
const cameras = [];
const renderers = [];
var canvas = document.createElement("canvas");
canvas.width = 64;
canvas.height = 64;
var context = canvas.getContext("2d");
var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "#ffcccc");
gradient.addColorStop(0.2, "#ffe0cc");
gradient.addColorStop(0.4, "#fff3cc");
gradient.addColorStop(0.6, "#e6ffcc");
gradient.addColorStop(0.8, "#ccffeb");
gradient.addColorStop(1, "#ccccff");
context.fillStyle = gradient;
context.fillRect(0, 0, canvas.width, canvas.height);

shapes.forEach((shape) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(100, 340 / 170, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(`.card__canvas[data-shape="${shape.name}"]`),
    alpha: true,
    antialias: true
  });
  renderer.setSize(340, 170);
  renderer.setClearColor(0x000000, 0);

  const lineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
    linewidth: 1
  });

  var material = new THREE.MeshStandardMaterial({
    color: shape.color,
    map: new THREE.CanvasTexture(canvas),
    side: THREE.DoubleSide,
    envMapIntensity: 1,
    roughness: 0.9,
    metalness: 0.1
  });

  const mesh = new THREE.Mesh(shape.geometry, material);

  const meshLine = new THREE.Mesh(shape.geometry, lineMaterial);
  const meshLine1 = meshLine.clone();
  const meshLine2 = meshLine.clone();
  [meshLine, meshLine1, meshLine2].forEach((line) => {
    line.material = lineMaterial;
    line.rotation.set(0, 0, 0.6);
    line.scale.set(1.2, 1.2, 1.2);
    line.castShadow = true;
    line.receiveShadow = true;
    scene.add(line);
  });
  scene.add(mesh);

  const mesh1 = mesh.clone();
  mesh1.position.set(9, 3, -2);
  mesh1.rotation.set(1, 1, 0);
  scene.add(mesh1);

  const mesh2 = mesh.clone();
  mesh2.position.set(-8, -3, -2);
  mesh2.rotation.set(2, -1, 2);
  scene.add(mesh2);

  const light = new THREE.PointLight(0xffffff, 0.9);
  light.castShadow = true;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 100;
  light.position.set(0, 5, 5);
  scene.add(light);
  const light2 = new THREE.DirectionalLight(0xffffff, 1.5);
  light2.position.set(0, -1, 0);
  scene.add(light2);
  const light3 = new THREE.PointLight(0xffffff, 1, 100);
  light3.position.set(10, 10, 10);
  scene.add(light3);

  camera.aspect =
    renderer.domElement.clientWidth / renderer.domElement.clientHeight;
  camera.position.z = 5;
  camera.lookAt(mesh.position);

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const angleX = -Math.PI / 2 + y * Math.PI;
    const angleY = Math.PI * 2 * x;
    mesh.rotation.set(angleX, angleY, 0.6);
    [meshLine, meshLine1, meshLine2].forEach((line, index) => {
      const delayTimes = [300, 400, 500];
      setTimeout(() => {
        line.rotation.set(angleX, angleY, 0.6);
      }, delayTimes[index]);
    });
  });

  scenes.push(scene);
  cameras.push(camera);
  renderers.push(renderer);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});

const switchButtons = document.querySelectorAll(".card__button");

function switchCard(event) {
  const card = event.target.closest(".card");
  document
    .querySelectorAll(".card")
    .forEach((card) => card.classList.remove("selected"));
  card.classList.add("selected");
}

switchButtons.forEach((button) => button.addEventListener("click", switchCard));

var slider = new Swiper(".slider", {
  spaceBetween: 20,
  slidesPerView: 1.2,
  touchEventsTarget: "wrapper",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    700: {
      spaceBetween: 20,
      slidesPerView: 2
    },
    1024: {
      spaceBetween: 40,
      slidesPerView: 3
    }
  }
});

window.addEventListener("resize", function () {
  slider.update();
});