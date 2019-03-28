/**
 * MyParalelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParalelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 1, 0,	//1
			3, 1, 0,	//2
			2, 0, 0,	//3
			0, 0, 0,	//4
			1, 1, 0,	//5
			3, 1, 0,	//6
			2, 0, 0		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
            0, 3, 2,
            4, 5, 6,
            4, 6, 7
		];
		this.normals=[
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		]
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

