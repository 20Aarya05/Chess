import { getpiece, removehighlight, getrookpath, getknightpath, getbishoppath, getqueenpath, getkingpath, getpawnpath,canmove } from "./mainfunctions.js";
import { blackpcsidentify, whitepcsidentify } from "./loader.js";
const piece_btn = document.querySelectorAll('.piece_btn');
let chance="white";
let classlistcont=null;
if(chance==="white") classlistcont=whitepcsidentify;
else classlistcont=blackpcsidentify;
let lastclickedpiece=null;

function updateTurn() {
    removehighlight();
    chance = chance === "white" ? "black" : "white";
    classlistcont = chance === "white" ? whitepcsidentify : blackpcsidentify;
    lastclickedpiece = null;
    console.log(`Turn changed to ${chance}, using ${classlistcont}`);
}

piece_btn.forEach(element => {
        element.addEventListener('click', () => {
            const icon = element.querySelector("i");
            if(icon){
                console.log("icon");
                
                if(icon.classList.contains(classlistcont)){
                    lastclickedpiece=element;
                    removehighlight();
                    if(icon.classList.contains("fa-chess-rook")){
                        getrookpath(element, chance);
                    }else if(icon.classList.contains("fa-chess-knight")){
                        getknightpath(element, chance);
                    }else if(icon.classList.contains("fa-chess-bishop")){
                        getbishoppath(element, chance);
                    }else if(icon.classList.contains("fa-chess-queen")){
                        getqueenpath(element, chance);
                    }else if(icon.classList.contains("fa-chess-king")){
                        getkingpath(element, chance);
                    }else if(icon.classList.contains("fa-chess-pawn")){
                        getpawnpath(element, chance);
                    }
                    const piece = getpiece(element);
                    console.log(piece);
                }
            }else{
                if(lastclickedpiece!==null){
                    console.log("hii");
                    
                    canmove(element,lastclickedpiece);
                }
            }
        });
        console.log(lastclickedpiece);
        
    
});

piece_btn.forEach(element => {
    element.addEventListener('click', () => {
        if(element.style.backgroundColor!==""){
            if(element.style.backgroundColor==="yellow"){
                removehighlight();
                element.innerHTML=lastclickedpiece.innerHTML;
                console.log(element);
                
                piece_btn.forEach(elementi => {
                    if(elementi.id==lastclickedpiece.id){
                        elementi.innerHTML="";
                        console.log(elementi);
                    }
                })
            }else if(element.style.backgroundColor==="red"){
                if(chance==="white"){
                    let blackdeadpiece = document.querySelector('.blackdeadpcs');
                    blackdeadpiece.innerHTML += element.innerHTML;
                }else{
                    let whitedeadpiece = document.querySelector('.whitedeadpcs');
                    whitedeadpiece.innerHTML += element.innerHTML;
                }
                removehighlight();
                element.innerHTML=lastclickedpiece.innerHTML;
                console.log(element);
                
                piece_btn.forEach(elementi => {
                    if(elementi.id==lastclickedpiece.id){
                        elementi.innerHTML="";
                        console.log(elementi);
                    }
                })
            }

            updateTurn();
        }
    })
});