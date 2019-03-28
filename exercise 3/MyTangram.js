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
        this.displayDiamond = true;
        this.displayTriangle = true;
        this.displayParalelogram = true;
        this.displayTriangleBig = true;
        this.displayTriangleSmall = true;
        this.objects = [this.diamond, this.triangle, this.paralelogram, this.triangleBig, this.triangleSmall];
    }
    initMaterials(scene) {
        //green color
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0,1*0.5,0,1.0);
        this.green.setDiffuse(0,1*0.7,0,1.0);
        this.green.setSpecular(0,1,0,1.0);
        this.green.setShininess(10.0);

        //orange color
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(1*0.5,0.647*0.5,0,1.0);
        this.orange.setDiffuse(1*0.7,0.647*0.7,0,1.0);
        this.orange.setSpecular(1,0.647,0,1.0);
        this.orange.setShininess(10.0);

        //light blue color
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0,0.749*0.5,1*0.5,1.0);
        this.blue.setDiffuse(0,0.749*0.7,1*0.7,1.0);
        this.blue.setSpecular(0,0.749,1,1.0);
        this.blue.setShininess(10.0);

        //yellow color
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(1*0.5,1*0.5,0,1.0);
        this.yellow.setDiffuse(1*0.7,1*0.7,0,1.0);
        this.yellow.setSpecular(1,1,0,1.0);
        this.yellow.setShininess(10.0);

        //purple color
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.58*0.5,0,0.827*0.5,1.0);
        this.purple.setDiffuse(0.58*0.7,0,0.827*0.7,1.0);
        this.purple.setSpecular(0.58,0,0.827,1.0);
        this.purple.setShininess(10.0);

        //pink color
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(1*0.5,0.714*0.5,0.757*0.5,1.0);
        this.pink.setDiffuse(1*0.7,0.714*0.7,0.757*0.7,1.0);
        this.pink.setSpecular(1,0.714,0.757,1.0);
        this.pink.setShininess(10.0);

        //red color
        this.red = new CGFappearance(scene);
        this.red.setAmbient(1*0.5,0,0,1.0);
        this.red.setDiffuse(1*0.7,0,0,1.0);
        this.red.setSpecular(1,0,0,1.0);
        this.red.setShininess(10.0);
    }

    display() {
        // ---- BEGIN Primitive drawing section

        //quadrado
        this.scene.pushMatrix();
        var mtranslate = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            (3 * Math.sqrt(2) - 4), (5 - Math.sqrt(2)), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
        this.scene.customMaterial.apply();
        if (this.displayDiamond)
            this.diamond.display();
        this.scene.popMatrix();

        //triangulo grande laranja
        this.scene.pushMatrix();/*
        mtranslate = [1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, (2-Math.sqrt(2)), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
        var mrotate = [Math.cos(Math.PI/2), Math.sin(Math.PI/2), 0.0, 0.0,
                    -Math.sin(Math.PI/2), Math.cos(Math.PI/2), 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.scene.multMatrix(mrotate);*/
        this.scene.translate(0.0, (2 - Math.sqrt(2)), 0.0);
        this.scene.rotate(Math.PI / 2, 0.0, 0.0, 1.0);
        this.orange.apply();
        if (this.displayTriangleBig)
            this.triangleBig.display();
        this.scene.popMatrix();

        //triangulo grande azul
        this.scene.pushMatrix();/*
        mtranslate = [1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                (Math.sqrt(2)), (Math.sqrt(2)), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
        mrotate = [Math.cos(3*Math.PI/4), Math.sin(3*Math.PI/4), 0.0, 0.0,
                -Math.sin(3*Math.PI/4), Math.cos(3*Math.PI/4), 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0]; 
        this.scene.multMatrix(mrotate);*/
        this.scene.translate((Math.sqrt(2)), (Math.sqrt(2)), 0.0);
        this.scene.rotate(3 * Math.PI / 4, 0.0, 0.0, 1.0);
        this.blue.apply();
        if (this.displayTriangleBig)
            this.triangleBig.display();
        this.scene.popMatrix();

        //paralelograma
        this.scene.pushMatrix();/*
        mtranslate = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            (Math.sqrt(2)), -2*(Math.sqrt(2)), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
        mrotate = [Math.cos(Math.PI), 0.0, -Math.sin(Math.PI), 0.0,
                0.0, 1.0, 0.0, 0.0,
                Math.sin(Math.PI), 0.0, Math.cos(Math.PI), 0.0,
                0.0, 0.0, 0.0, 1.0]; 
        this.scene.multMatrix(mrotate);
        mrotate = [Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0.0, 0.0,
            -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0]; 
        this.scene.multMatrix(mrotate);*/
        this.scene.translate(Math.sqrt(2), -2 * (Math.sqrt(2)), 0.0);
        this.scene.rotate(Math.PI, 0.0, 1.0, 0.0)
        this.scene.rotate(Math.PI / 4, 0.0, 0.0, 1.0);
        this.yellow.apply();
        if (this.displayParalelogram)
            this.paralelogram.display();
        this.scene.popMatrix();

        //triangulo medio
        this.scene.pushMatrix();
        /*mtranslate = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -Math.sqrt(2), -Math.sqrt(2), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
        mrotate = [Math.cos(-3*Math.PI/4), Math.sin(-3*Math.PI/4), 0.0, 0.0,
                -Math.sin(-3*Math.PI/4), Math.cos(-3*Math.PI/4), 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0]; 
        this.scene.multMatrix(mrotate);*/
        this.scene.translate(-Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(-3 * Math.PI / 4, 0.0, 0.0, 1.0);
        this.pink.apply();
        if (this.displayTriangle)
            this.triangle.display();
        this.scene.popMatrix();

        //triangulo pequeno vermelho
        this.scene.pushMatrix();
        /*mtranslate = [1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                -2*Math.sqrt(2), -Math.sqrt(2), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
        mrotate = [Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0.0, 0.0,
                -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0]; 
        this.scene.multMatrix(mrotate);*/
        this.scene.translate(-2 * Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(Math.PI / 4, 0.0, 0.0, 1.0);
        this.red.apply();
        if (this.displayTriangleSmall)
            this.triangleSmall.display();
        this.scene.popMatrix();

        //triangulo pequeno roxo
        this.scene.pushMatrix();
        /*mtranslate = [1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                Math.sqrt(2), -2*Math.sqrt(2), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
        mrotate = [Math.cos(3*Math.PI/4), Math.sin(3*Math.PI/4), 0.0, 0.0,
                -Math.sin(3*Math.PI/4), Math.cos(3*Math.PI/4), 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0]; 
        this.scene.multMatrix(mrotate);*/
        this.scene.translate(Math.sqrt(2), -2 * Math.sqrt(2), 0.0);
        this.scene.rotate(3 * Math.PI / 4, 0.0, 0.0, 1.0);
        this.purple.apply();
        if (this.displayTriangleSmall)
            this.triangleSmall.display();
        this.scene.popMatrix();

        // ---- END Primitive drawing section
    }

    updateBuffers(complexity) {
    }
}