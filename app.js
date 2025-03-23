let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg=document.querySelector(".winner")


const winpattern = [
    [0, 1, 2],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
const showwinner=(winer)=>{
    msg.innerHTML=`congratulations, ${winer} is WINNER`;
    msg.classList.remove("hide");
    // disablebox();
    
}
let turn0 = true;



const newgame=()=>{
    boxes.innerText="";
    msg.classList.add("hide");
    console.log("working reset btn");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked by shyam");
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        chekwinner();

    });
});
const chekwinner = () => {
    for (let pattern of winpattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let patvalue0=boxes[pattern[0]].innerHTML;
        let patvalue1=boxes[pattern[1]].innerHTML;
        let patvalue2=boxes[pattern[2]].innerHTML;
        // console.log(patvalue0,patvalue1,patvalue2);
        if(patvalue0 !=""&& patvalue1 !=""&& patvalue2!=""){
            if(patvalue0===patvalue1&&patvalue1===patvalue2){
                console.log("winner",patvalue1);
                boxes.disabled=true;
                showwinner(patvalue1);

                disablebox()
                
            }

            
        }
    };
};

reset.addEventListener("click",()=>{
    newgame();
    enablebox();
})