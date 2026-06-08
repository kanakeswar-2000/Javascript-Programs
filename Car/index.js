class Car{
    constructor(isRunning,speed){
        this.isRunning=isRunning;
        this.speed=speed
        this.accelerate=document.getElementById("accelerate")
        this.decelerate=document.getElementById("decelerate")

        this.button=document.getElementById("button");
        this.status=document.getElementById("status")
    }
    changeIsRunning(){
         
        this.isRunning=!this.isRunning
        let buttonText=this.isRunning?"Stop":"Start"
        this.button.textContent=buttonText
        let statusText=this.isRunning?"Running":"Stopped"
        this.status.textContent=statusText
        if (!this.isRunning){
            this.speed=0
            this.accelerate.style.backgroundColor="";
            this.decelerate.style.backgroundColor="";
            this.button.style.backgroundColor="green"
        }
        else{
            this.accelerate.style.backgroundColor="blue"
            this.button.style.backgroundColor="red"
        }
    }
    increaseSpeed(){
         
        if (this.isRunning) {
            let updatedspeed=this.speed + 10
            this.speed=updatedspeed
            this.status.textContent=`Running with speed at ${updatedspeed} kmph`
            this.decelerate.style.backgroundColor="blue"
        }
    }
    decreaseSpeed(){
        
        if (this.speed>=10){
            let updatedspeed=this.speed - 10
            this.speed=updatedspeed
            if (this.speed===0){
                this.status.textContent="Running"
                this.decelerate.style.backgroundColor=""
            }
            else {
                this.status.textContent=`Running with speed at ${updatedspeed} kmph`
            }
        }
    }
    
}

let carObj=new Car(false,0)

function pressAccelerator(){
    carObj.increaseSpeed()
}

function pressDecelerator(){
    carObj.decreaseSpeed()
}
function toggleStatus(){
    carObj.changeIsRunning()
}