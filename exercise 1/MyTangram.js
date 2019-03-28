/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
		super(scene);
    
        //Initialize scene objects
       
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
    }
    display(){
        // ---- BEGIN Primitive drawing section

        //quadrado
        this.scene.pushMatrix();
        var mtranslate = [1.0, 0.0, 0.0, 0.0,
                        0.0, 1.0, 0.0, 0.0,
                        0.0, 0.0, 1.0, 0.0,
                        (3*Math.sqrt(2)-4), (5-Math.sqrt(2)), 0.0, 1.0];
        this.scene.multMatrix(mtranslate);
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
        this.scene.translate(0.0, (2-Math.sqrt(2)), 0.0);
        this.scene.rotate(Math.PI/2, 0.0, 0.0, 1.0);
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
        this.scene.rotate(3*Math.PI/4, 0.0, 0.0, 1.0);
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
        this.scene.translate(Math.sqrt(2), -2*(Math.sqrt(2)), 0.0);
        this.scene.rotate(Math.PI, 0.0, 1.0, 0.0)
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
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
        this.scene.rotate(-3*Math.PI/4, 0.0, 0.0, 1.0);
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
        this.scene.translate(-2*Math.sqrt(2), -Math.sqrt(2), 0.0);
        this.scene.rotate(Math.PI/4, 0.0, 0.0, 1.0);
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
        this.scene.translate( Math.sqrt(2), -2*Math.sqrt(2), 0.0);
        this.scene.rotate(3*Math.PI/4, 0.0, 0.0, 1.0);
        if (this.displayTriangleSmall)
            this.triangleSmall.display();
        this.scene.popMatrix();
        
        // ---- END Primitive drawing section
    }
}