/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        this.gui.add(this.scene.tangram, 'displayDiamond').name('Diamond');
        this.gui.add(this.scene.tangram, 'displayParalelogram').name('Paralelogram');
        this.gui.add(this.scene.tangram, 'displayTriangleBig').name('Big Triangles');
        this.gui.add(this.scene.tangram, 'displayTriangle').name('Medium Triangle');
        this.gui.add(this.scene.tangram, 'displayTriangleSmall').name('Small Triangles');
        

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}