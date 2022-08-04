let screen = document.getElementById("screen");
let buttons = Array.from(document.getElementsByClassName("buttons"))
buttons.map(button=>{
    button.addEventListener("click",(e)=>{
       switch(e.target.innerText){
        case "C":
             screen.innerText ="";
             break;
        case "←":
            if (screen.innerText){
                screen.innerText = screen.innerText.slice(0, -1);
            }
            break;
        case "=":
            if (screen.innerText){
                screen.innerText = eval(screen.innerText);
            }
            break;
              
        default:
            screen.innerText += e.target.innerText
       }

    })
})