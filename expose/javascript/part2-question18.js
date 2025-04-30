const intervalID = setInterval(currTime, 1000);

function currTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setTimeout(() =>{
    clearTimeout(intervalID);
}, 10000);