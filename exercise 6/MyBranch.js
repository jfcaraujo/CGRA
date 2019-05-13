/**
 * MyCylinder
 * @constructor
 */
class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.slices = 4;
        this.height = 1;
        this.radius = 0.3;
        this.initBuffers();
        this.initMaterial();
    }

    initMaterial() {
        this.brown = new CGFappearance(this.scene);
        this.brown.setAmbient(0.30, 0.27, 0.08, 1.0);
        this.brown.setDiffuse(0.30, 0.27, 0.08, 1.0);
        this.brown.setSpecular(0.30, 0.27, 0.08, 1.0);
        this.brown.setShininess(10.0);
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = 0;
        var alphaAng = 2 * Math.PI / this.slices;

        for (var i = 0; i <= this.slices; i++) {
            this.vertices.push(this.radius * Math.cos(ang), 0, -Math.sin(ang) * this.radius);
            this.vertices.push(this.radius * Math.cos(ang), this.height, -Math.sin(ang) * this.radius);
            if (i != this.slices) {
                this.indices.push(i * 2, i * 2 + 2, i * 2 + 1);
                this.indices.push(i * 2 + 2, i * 2 + 3, i * 2 + 1);
            }
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.normals.push(Math.cos(ang), 0, -Math.sin(ang));
            this.texCoords.push(i / this.slices, 1);
            this.texCoords.push(i / this.slices, 0);
            ang += alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    display() {
        this.brown.apply();
        super.display(this.scene);

    }
}
