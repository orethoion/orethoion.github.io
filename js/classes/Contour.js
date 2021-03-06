class Contour {
	constructor(count, space, items) {
		this.count = count
		this.space = space

		this.material = new THREE.ShaderMaterial({
			uniforms: {
				focus: {value: 17.5},
				time: {value: Math.random() * 100 * 0},
				scale: {value: 0.05},
				height: {value: 5.0},
				location: {value: 8.0},
				grid_size: {value: 2.0},
				grid_width: {value: 1.5},
			},
			side: THREE.DoubleSide,

			vertexShader: items['glsl/contour.vert'],
			fragmentShader: items['glsl/contour.frag'],

			transparent: true,
			depthWrite: false,
		})

		this.geometry = new THREE.PlaneBufferGeometry(this.space, this.space, this.count, this.count)
		this.geometry.rotateX(Math.PI / 2)
		this.geometry.rotateZ(Math.PI)
		this.mesh = new THREE.Mesh(this.geometry, this.material)
		this.mesh.position.set(0, 0, -12)

	}

	update() {
		this.material.uniforms.time.value += 0.025
	}
}

export default Contour
