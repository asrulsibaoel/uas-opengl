// import { THREE } from "../three";

let planeGeo = new THREE.PlaneGeometry(30, 50);
let planeMaterial = new THREE.MeshBasicMaterial({
    color: 0x8EC63F,
    side: THREE.DoubleSide
});

const plane = new THREE.Mesh(planeGeo, planeMaterial);

// export default plane;