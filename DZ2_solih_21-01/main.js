const box = document.querySelector(".box")

let positionX = 0
let positionY = 0

const cycle = () => {
    if(positionX <= 440 && positionY === 0 ){
        positionX += 14;
        box.style.left = `${positionX}px`;
        setTimeout(cycle, 50);
    }else if (positionX >= 440 && positionY <= 440) {
        positionY += 14;
        box.style.top = `${positionY}px`;
        setTimeout(cycle, 50);
    }else if (positionX >= 0 && positionY >= 440){
        positionX -= 14;
        box.style.left = `${positionX}px`;
        setTimeout(cycle, 50);
    }else if (positionX <= 440 && positionY >= 0) {
        positionY -= 14;
        box.style.top = `${positionY}px`;
        setTimeout(cycle, 50);
    }
};
cycle()



let timer = 0

function start () {
    timer++
    console.log(`Прошло ${timer} секунд!`)
    if(timer === 60) {
        console.log("Время вышло :)")
        clearInterval(interVall)
    }
}
interVall = setInterval(start, 1000)
