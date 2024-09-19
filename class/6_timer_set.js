class Timer{
    startTimer(time){
          this.time=time
          console.log("Start  timer :",time)
    }
    stopTimer(time){
          this.time=time
          console.log("Stop timer :",time)
    }
    RestTime(time){
       this.time=time
       console.log("Rest timer :",time)

    }
    elips(time){
        this.time=time
        console.log("Elipse Time :",time)

    }
}
let Timer1=new Timer();
Timer1.startTimer("10:20");
Timer1.stopTimer("12:00");
Timer1.RestTime("3:00");
Timer1.elips("6:50")