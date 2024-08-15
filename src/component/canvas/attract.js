
import Victor from 'victor'

const WIDTH = 600

function constrainNumber(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


class Attract {
    constructor(x,y,m){
        this.pos = new Victor(x,y)
        this.m = m
        this.r = Math.sqrt(this.m) * 10
    }
    draw(ctx){
        ctx.beginPath()
        ctx.arc(this.pos.x , this.pos.y, this.r ,0, 2*Math.PI)
        ctx.fill()
    }
    attract(movepos,M , i){
        let FORCE = new Victor(this.pos.x , this.pos.y).subtract(movepos)
        let dis = Math.pow(FORCE.magnitude(),2)
        let G = 1
        let strength = (this.m * M * G)/constrainNumber(dis , dis , 25)
        FORCE.normalize()

        let force = new Victor(FORCE.x * strength , FORCE.y * strength)
        mover[i].applyForce(force)
    }
}

class Mover{
    constructor(x , y , m){
        this.pos = new Victor(x,y)
        this.m = m
        this.r = Math.sqrt(this.m) * 10
        this.acc = new Victor(0,0)
        this.vel = new Victor(getRandomInt(0,3), getRandomInt(0,3)).multiplyScalar(4)

    }

    draw(ctx) {
        ctx.clearRect(0,0,WIDTH,WIDTH)
  // Add the current position to the trail
  trail.push({ x: this.pos.x, y: this.pos.y });

  // Limit the length of the trail
  if (trail.length > maxTrailLength) {
    trail.shift();
  }

  // Draw the trail
  ctx.strokeStyle = '#3371FF'; // or any other color
  trail.forEach(pos => {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, this.r, 0, Math.PI * 2);
    ctx.stroke();
  });

    }
    applyForce(force){
        let f = force.divideScalar(this.m)
        this.acc = f
    }

    Update(){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
    }
}

let mover = []
let trail = []
let maxTrailLength = 20
function setup(){
    for(let i = 0 ; i < 9 ; i++){
        let x = getRandomInt(100,WIDTH)
        let y = getRandomInt(100,WIDTH)
        let m = getRandomInt(2,4)
        mover[i] = new Mover(x,y,m)
    }
}
setup()
let attractor = new Attract(300,300,5)
export {mover , attractor}
