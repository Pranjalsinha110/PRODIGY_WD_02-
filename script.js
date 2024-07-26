const playButton = document.getElementsByClassName("btn-2")[0];
const lapButton = document.getElementsByClassName("btn-3")[0];
const resetButton = document.getElementsByClassName("btn-1")[0];
const clearButton = document.getElementsByClassName("clear-button")[0];
const minute = document.getElementsByClassName("min")[0];
const second = document.getElementsByClassName("sec")[0];
const centisecond = document.getElementsByClassName("ms")[0];
const laps= document.getElementsByClassName("lap")[0];
let isPlay = false;
let seccounter = 0;
let min ;
let sec;
let centisec;
let centicounter=0;
let mincounter = 0;
let isreset = false;
let lapitem = 0

const toggleButton =()=>{
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}
const play = () => {
    if (!isPlay && !isreset) {
        playButton.innerHTML= 'pause';
        min=  setInterval(()=>{
            minute.innerText= ++mincounter + " :";
             }, 60*1000);
       sec=  setInterval(()=>{
            if (seccounter  === 60) {
                seccounter = 0;
            }

            second.innerText= ++seccounter + " :";
             }, 1000);
        centisec=  setInterval(()=>{
                if (centicounter===100) {
                    centicounter= 0;
                    
                }
                centisecond.innerText= ++centicounter + " ";
                 }, 10);
        isPlay = true;
        isreset =  true ;
        
    }else{
        playButton.innerHTML = 'play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centisec);
        isreset = false;
        isPlay = false;
    }
    toggleButton();
}



const reset  = () => {
    isreset = true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    minute.innerHTML= "0 :";
    second.innerHTML= "0 :";
    centisecond.innerHTML = '0';
}
const lap = () => {
    const li =  document.createElement("li");
    const number  = document.createElement("span");
    const timestamp  = document.createElement("span");
    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "num");
    timestamp.setAttribute("class", "time-stamp");
    number.innerText = "#" + ++lapitem;
    timestamp.innerHTML = mincounter + " : " + seccounter + " : " +  centicounter;
    li.append(number, timestamp);
    laps.append(li);
    clearButton.classList.remove( "hidden");
}
const clearall = () => {
    laps.innerHTML = " ";
    laps.append(clearButton);
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap );
clearButton.addEventListener("click", clearall);
