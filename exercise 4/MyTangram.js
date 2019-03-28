/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initObjects(scene);
        this.initMaterials(scene);
    }

    //Initialize scene objects
    initObjects(scene) {
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.paralelogram = new MyParalelogram(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.objects = [this.diamond, this.triangle, this.paralelogram, this.triangleBig, this.triangleSmall];
    }

    initMaterials(scene) {
        //tangram material
        this.tangramMaterial = new CGFappearance(scene);
        this.tangramMaterial.setAmbient(1, 1, 1, 1.0);
        this.tangramMaterial.setDiffuse(1, 1, 1, 1.0);
        this.tangramMaterial.setSpecular(1, 1, 1, 1.0);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        // ---- BEGIN Primitive drawing section

        this.scene.pushMatrix();
        this.scene.scale(0.15, 0.15, 0.15);

        //quadrado
        this.scene.pushMatrix();
        var mtranslate = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            (3 * Math.sqrt(2) - 4), (5 - Math.sqrt(2)), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
        this.tangramMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();

        //triangulo grande esquerdo
        this.triangleBig.updateTexCoords([1, 0, 0, 0, 0.5, 0.5]);
        this.scene.pushMatrix();
        this.scene.translate(0.0, (2 - Math.sqrt(2)), 0.0);
        this.scene.rotate(Math.PI / 2, 0.0, 0.0, 1.0);
        this.triangleBig.display();
        this.scene.popMatrix();

        //triangulo grande direito
        this.triangleBig.updateTexCoords([1, 1, 1, 0, 0.5, 0.5]);
        this.scene.pushMatrix();
        this.scene.translate((Math.sqrt(2)), (Math.sqrt(2)), 0.0);
        this.scene.rotate(3 * Math.PI / 4, 0.0, 0.0, 1.0);
        this.triangleBig.display();
        this.scene.popMatrix();

        //paralelograma
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), -2 * (Math.sqrt(2)), 0.0);
        this.scene.rotate(Math.PI, 0.0, 1.0, 0.0)
        this.scene.rotate(Math.PI / 4, 0.0, 0.0, 1.0);
        this.paralelogram.display();
        this.scene.popMatrix();

        //triangulo medio
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(-3 * Math.PI / 4, 0.0, 0.0, 1.0);
        this.triangle.display();
        this.scene.popMatrix();

        //triangulo pequeno esquerdo
        this.triangleSmall.updateTexCoords([0, 0, 0, 0.5, 0.25, 0.25]);
        this.scene.pushMatrix();
        this.scene.translate(-2 * Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(Math.PI / 4, 0.0, 0.0, 1.0);
        this.triangleSmall.display();
        this.scene.popMatrix();

        //triangulo pequeno direito
        this.triangleSmall.updateTexCoords([0.25, 0.75, 0.75, 0.75, 0.5, 0.5]);
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), -2 * Math.sqrt(2), 0.0);
        this.scene.rotate(3 * Math.PI / 4, 0.0, 0.0, 1.0);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
    }
}