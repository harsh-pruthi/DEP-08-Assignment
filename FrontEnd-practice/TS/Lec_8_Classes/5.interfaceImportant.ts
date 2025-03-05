//say mobile app using a camera 

interface TakePhoto{
    cameraMode: string
    filter: string 
    burstMode: number
    
}

interface Story{
    createStory() :void
}


//Interface was implemented by a class not extends

//Interface never have implementations/definitions
//They just tell must have things to have 

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burstMode: number
    ){

    }
}

//Same Function different app
class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burstMode: number, 
        public short: string    //you can add more but not less than the specified fields in interface
    ){

    }
    //you would have to create methods for createStory()
    createStory(): void {
        console.log("Story was created")
    }

}