/**
 * MyLSystem
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
    constructor(scene) {
        super(scene);
    }

    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }

    generate(_axiom, _productions, _angle, _iterations, _scale) {
        this.productions = {
            "F": "FF",
            "X": [
                "F[-X][X]F[-X]+X",
                "F[-X][x]+X",
                "F[+X]-X",
                "F[/X][X]F[\\X]+X",
                "F[\X][X]/X",
                "F[/X]\X",
                "F[^X][X]F[&X]^X",
                "F[^X]&X",
                "F[&X]^X"]
        };
        super.generate(_axiom, this.productions, _angle, _iterations, _scale);
    }
}