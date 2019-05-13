/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
        this.initMaterial();
    }

    initMaterial() {
        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0.17, 0.38, 0.15, 1.0);
        this.green.setDiffuse(0.17, 0.38, 0.15, 1.0);
        this.green.setSpecular(0.17, 0.38, 0.15, 1.0);
        this.green.setShininess(10.0);
    }

    initBuffers() {
        this.vertices = [
            -1, 1, 0,	//0
            -1, -1, 0,	//1
            1, -1, 0,	//2
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2,
            2, 1, 0
        ];
        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1
        ];
        this.texCoords = [
            0, 0.5,
            0, 1,
            0.5, 1
        ];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
    display(){
        this.green.apply();
        super.display(this.scene);

    }
}
