// import { THREE } from "../three";

const sphereGeo = new THREE.SphereGeometry(30, 50);
const sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x8EC63F,
    side: THREE.DoubleSide
});

const sphere = new THREE.Mesh(sphereGeo, sphereMaterial);

// export default plane;