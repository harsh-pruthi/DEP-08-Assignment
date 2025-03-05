//use when Interface is available 



abstract class TakeVideo{
    constructor(
        public cameraMode:string,
        public filter:string
    ){

    }

    abstract getSepia():void;   //abstract means you are not going to provide definition, someone else will give

    getReelTime() :number{
        return 8;
    }

}

//use this class into some other class (inheritance)

// Whenever you make it as abstract, now no new object can be created from the class
// const htesh = new TakeVideo("video", "normal");

//Sense?
//In world of abstract class -> This is like blueprint like interface
//Responsiblity of inheriting class


class Insta extends TakeVideo{
    constructor(public cameraMode: string, public filter: string, public burst: number){
        super(cameraMode, filter)   //we have to have super keyword
    }

    //Implement getSepia
    getSepia(): void {
        console.log("Sepia")
    }

}

const htesh = new Insta("video", "normal",3);
htesh.getReelTime(); //this is valid (You can override also)

