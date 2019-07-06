Car = function() {

    //THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
		let torus = new THREE.Mesh(
			new THREE.TorusGeometry(2, 1, 12, 18),
			new THREE.MeshLambertMaterial({
				color: 0x00000
			})
		);
		// scene.add(torus);

		var torus2 = new THREE.Mesh(
			new THREE.TorusGeometry(2, 1, 12, 18),
			new THREE.MeshLambertMaterial({
				color: 0x222222
			})
		);
		//Move geometry to other coordinates.
		torus2.position.set(10, 0, 0);

		//THREE.CubeGeometry(width, height, depth, widthSegments, heightSegments, depthSegments)
		var box = new THREE.Mesh(new THREE.BoxGeometry(18, 10, 9), new THREE.MeshLambertMaterial({
			color: 0xff0000
		}));

		var boxMoncong = new THREE.Mesh(new THREE.BoxGeometry(25, 5, 10), new THREE.MeshLambertMaterial({
			color: 0xffffff
		}));

		box.position.set(5, 5, -5);
		boxMoncong.position.set(8.5, 2, -5);

		let singleGeo = new THREE.Geometry();
		box.updateMatrix();
		singleGeo.merge(box.geometry, box.matrix);

		boxMoncong.updateMatrix();
		singleGeo.merge(boxMoncong.geometry, boxMoncong.matrix);

		torus.updateMatrix();
		singleGeo.merge(torus.geometry, torus.matrix);

		torus2.updateMatrix();
		singleGeo.merge(torus2.geometry, torus2.matrix);

		const colorIndex = [
            0xFF0000, // merah
            0x00FFFF, // kuning
            0x00FF00, // hijau
            0x0000FF, // biru
        ];
        
        const color = colorIndex[Math.floor(Math.random() * 4)];
        const material = new THREE.MeshPhongMaterial({color});
        const finalMesh = new THREE.Mesh(singleGeo, material);

        finalMesh.position.x = Math.floor( Math.random() * 200 - 100 ) * 15;
		finalMesh.position.z = Math.floor( Math.random() * 200 - 100 ) * 15;

        return finalMesh;
}