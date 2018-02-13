class Elevator {
  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = '';
    this.intervalId;
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.intervalId = setInterval(() => { this.update(); }, 1000);
  }

  stop() { 
   clearInterval(this.intervalId);
  }

  update() { 
    this.log();
    this._passengersEnter();
    this._passengersLeave();
  }

  _passengersEnter() { 
    if(this.waitingList.length !== 0) {
        let personEntering = this.waitingList.filter(
          passenger => passenger.originFloor === this.floor
        )};
  }

  _passengersLeave() { 

  }

  floorUp() { 
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
      this.direction = "up";
    }else{
      console.log("you can't go higher");
    }
  }

  floorDown() { 
    if (this.floor > 0) {
      this.floor -= 1;
      this.direction = "down";
    }else{
      console.log("you can't go lower");
    }
  }

  call(person) { 
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() { 
    console.log(`Direction: ${this.direction}, | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;

