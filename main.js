import { getpiece, removehighlight, getrookpath, getknightpath, getbishoppath, getqueenpath, getkingpath, getpawnpath } from "./mainfunctions.js";
import { blackpcsidentify, whitepcsidentify } from "./loader.js";
import { checkmatechecker } from "./checkmatechecker.js";

let run=true;
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
}

piece_btn.forEach(element => {
    element.addEventListener('click', () => {
        if(run){
            const icon = element.querySelector("i");
            if (icon) {
                if (icon.classList.contains(classlistcont)) {
                    lastclickedpiece = element;
                    removehighlight();
                    const pieceType = getpiece(element);

                    switch (pieceType) {
                        case "rook":
                            getrookpath(element, chance);
                            break;
                        case "knight":
                            getknightpath(element, chance);
                            break;
                        case "bishop":
                            getbishoppath(element, chance);
                            break;
                        case "queen":
                            getqueenpath(element, chance);
                            break;
                        case "king":
                            getkingpath(element, chance);
                            break;
                        case "pawn":
                            getpawnpath(element, chance);
                            break;
                    }
                }
            }
        }
    });
});


piece_btn.forEach(element => {
    element.addEventListener('click', () => {
        if (run) {
            if(element.style.backgroundColor!==""){
                if(element.style.backgroundColor==="yellow"){
                    if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-pawn")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }
                    removehighlight();
                    element.innerHTML=lastclickedpiece.innerHTML;
                    
                    piece_btn.forEach(elementi => {
                        if(elementi.id==lastclickedpiece.id){
                            elementi.innerHTML="";
                        }
                    })
                }else if(element.style.backgroundColor==="red"){
                    if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-pawn")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }
                    if(chance==="white"){
                        let blackdeadpiece = document.querySelector('.blackdeadpcs');
                        blackdeadpiece.innerHTML += element.innerHTML;
                    }else{
                        let whitedeadpiece = document.querySelector('.whitedeadpcs');
                        whitedeadpiece.innerHTML += element.innerHTML;
                    }
                    removehighlight();
                    element.innerHTML=lastclickedpiece.innerHTML;
                    
                    piece_btn.forEach(elementi => {
                        if(elementi.id==lastclickedpiece.id){
                            elementi.innerHTML="";
                        }
                    })
                }
                if(checkmatechecker(chance)){
                    const checkmatediv = document.querySelector('.checkmate');
                    let checktext = checkmatediv.querySelector('.winner_text');
                    const whitewint = document.querySelector('.white_win_text');
                    const blackwint = document.querySelector('.black_win_text');
                    if(chance==="white"){
                        whitewint.innerText="White wins!";
                        checktext.innerHTML="White wins!";
                    }else{
                        blackwint.innerText="Black wins!";
                        checktext.innerHTML="Black wins!";
                    }
                    checkmatediv.style.display = 'flex';
                    const body = document.querySelector('body');
                    setTimeout(() => {
                        body.addEventListener('click', () => {
                            checkmatediv.style.display = 'none';
                        });
                    },2000);
                }
                updateTurn();
            }
        }
    });

    const reset_btn = document.querySelector('.reset_button');
    reset_btn.addEventListener('click', () => {
        location.reload();
    });
});