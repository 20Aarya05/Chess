import { getpiece, removehighlight, getrookpath,canmove } from "./identifier.js";

const piece_btn = document.querySelectorAll('.piece_btn');
let chance="white";
let classlistcont=null;
if(chance==="white") classlistcont="fa-regular";
else classlistcont="fa-solid";
let lastclickedpiece=null;

piece_btn.forEach(element => {
    const icon = element.querySelector("i");
    if(icon){
        element.addEventListener('click', () => {
            lastclickedpiece=icon.classList;
            
            if(icon.classList.contains(classlistcont)){
                removehighlight();
                if(icon.classList.contains("fa-chess-rook")){
                    getrookpath(element, chance);
                }
                const piece = getpiece(element);
                console.log(piece);
            }
        });
        console.log(lastclickedpiece);
        
    }else{
        if(lastclickedpiece!==null){
            console.log("hii");
            
            canmove(element,lastclickedpiece);
        }
    }
});