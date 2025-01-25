import { getpiece, removehighlight, getrookpath, getknightpath, getbishoppath, getqueenpath, getkingpath, getpawnpath } from "./mainfunctions.js";
import { blackpcsidentify, whitepcsidentify } from "./loader.js";
import { checkmatechecker } from "./checkmatechecker.js";
import { currentlytargeted } from "./currentlytargeted.js";
const tpw = document.querySelector('.transforcontwhite');
const tppw = document.querySelectorAll('.transformationpcswhite');
const tpb = document.querySelector('.transforcontblack');
const tppb = document.querySelectorAll('.transformationpcsblack');
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
                    }else if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-rook")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }else if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-king")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }
                    removehighlight();
                    element.innerHTML=lastclickedpiece.innerHTML;
                    
                    piece_btn.forEach(elementi => {
                        if(elementi.id==lastclickedpiece.id){
                            elementi.innerHTML="";
                        }
                    })     
                    if(element.querySelector('i').classList.contains("fa-chess-pawn")){
                        if(chance == "white"){
                            if(element.id=='btn11' || element.id=='btn12' || element.id=='btn13' || element.id=='btn14' || element.id=='btn15' || element.id=='btn16' || element.id=='btn17' || element.id=='btn18'){
                                run=false;
                                tpw.style.display = 'flex';
                                if (tpw && element) {
                                    const elementRect = element.getBoundingClientRect(); 
                                
                                    tpw.style.width = `${elementRect.width}px`;
                                    tpw.style.height = `${elementRect.height * tppw.length}px`;
                                
                                    tpw.style.position = 'absolute';
                                    tpw.style.top = `${elementRect.top + window.scrollY - 2}px`; 
                                    tpw.style.left = `${elementRect.left + window.scrollX -2}px`;
                                
                                    tppw.forEach((button) => {
                                        button.style.width = `${elementRect.width}px`;
                                        button.style.height = `${elementRect.height}px`;
                                    });
                                } else {
                                    console.error("Either '.transforcontwhite' or '#btn15' is missing!");
                                }                                
                                tppw.forEach(elementi => {
                                    elementi.addEventListener('click', () => {
                                        element.innerHTML=elementi.innerHTML;
                                        tpw.style.display = 'none';
                                        run=true;
                                    })
                                })
                            }
                        }else if(chance == "black"){
                            if(element.id=='btn81' || element.id=='btn82' || element.id=='btn83' || element.id=='btn84' || element.id=='btn85' || element.id=='btn86' || element.id=='btn87' || element.id=='btn88'){
                                run=false;
                                tpb.style.display = 'flex';
                                if (tpb && element) {
                                    const elementRect = element.getBoundingClientRect(); 

                                    tpb.style.width = `${elementRect.width}px`;
                                    tpb.style.height = `${elementRect.height * tppb.length}px`; 

                                    tpb.style.position = 'absolute';
                                    tpb.style.top = `${elementRect.top + window.scrollY - elementRect.height * 3-2}px`; 
                                    tpb.style.left = `${elementRect.left + window.scrollX - 2}px`; 

                                    tppb.forEach((button) => {
                                        button.style.width = `${elementRect.width}px`;
                                        button.style.height = `${elementRect.height}px`;
                                    });
                                } else {
                                    console.error("Either '.transforcontwhite' or the clicked button is missing!");
                                }

                                tppb.forEach(elementi => {
                                    elementi.addEventListener('click', () => {
                                        element.innerHTML = elementi.innerHTML;
                                        tpb.style.display = 'none';
                                        run = true;
                                    });
                                });

                            }
                        }
                    }   
                }else if(element.style.backgroundColor==="red"){
                    if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-pawn")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }else if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-rook")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }else if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-king")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }
                    if(chance==="white"){
                        let blackdeadpiece = document.querySelector('.whitedeadpcs');
                        blackdeadpiece.innerHTML += element.innerHTML;
                    }else{
                        let whitedeadpiece = document.querySelector('.blackdeadpcs');
                        whitedeadpiece.innerHTML += element.innerHTML;
                    }
                    removehighlight();
                    element.innerHTML=lastclickedpiece.innerHTML;
                    
                    piece_btn.forEach(elementi => {
                        if(elementi.id==lastclickedpiece.id){
                            elementi.innerHTML="";
                        }
                    })
                    if(element.querySelector('i').classList.contains("fa-chess-pawn")){
                        if(chance == "white"){
                            if(element.id=='btn11' || element.id=='btn12' || element.id=='btn13' || element.id=='btn14' || element.id=='btn15' || element.id=='btn16' || element.id=='btn17' || element.id=='btn18'){
                                run=false;
                                tpw.style.display = 'flex';
                                if (tpw && element) {
                                    const elementRect = element.getBoundingClientRect(); 
                                    
                                    tpw.style.width = `${elementRect.width}px`;
                                    tpw.style.height = `${elementRect.height * tppw.length}px`; 
                                
                                    tpw.style.position = 'absolute';
                                    tpw.style.bottom = `${elementRect.top + window.scrollY - 2}px`; 
                                    tpw.style.left = `${elementRect.left + window.scrollX - 2}px`; 
                                
                                    tppw.forEach((button) => {
                                        button.style.width = `${elementRect.width}px`;
                                        button.style.height = `${elementRect.height}px`;
                                    });
                                
                                    console.log('Button Rect:', elementRect);
                                    console.log('Transformation container and child buttons styled correctly!');
                                } else {
                                    console.error("Either '.transforcontwhite' or '#btn15' is missing!");
                                }
                                tppw.forEach(elementi => {
                                    elementi.addEventListener('click', () => {
                                        console.log(elementi);
                                        console.log(element);
                                        
                                        element.innerHTML=elementi.innerHTML;
                                        tpw.style.display = 'none';
                                        run=true;
                                    })
                                })
                            }
                        }else if(chance == "black"){
                            if(element.id=='btn81' || element.id=='btn82' || element.id=='btn83' || element.id=='btn84' || element.id=='btn85' || element.id=='btn86' || element.id=='btn87' || element.id=='btn88'){
                                run=false;
                                tpb.style.display = 'flex';
                                if (tpb && element) {
                                    const elementRect = element.getBoundingClientRect(); 

                                    tpb.style.width = `${elementRect.width}px`;
                                    tpb.style.height = `${elementRect.height * tppb.length}px`; 

                                    tpb.style.position = 'absolute';
                                    tpb.style.top = `${elementRect.top + window.scrollY - elementRect.height * 3-2}px`; 
                                    tpb.style.left = `${elementRect.left + window.scrollX - 2}px`; 

                                    tppb.forEach((button) => {
                                        button.style.width = `${elementRect.width}px`;
                                        button.style.height = `${elementRect.height}px`;
                                    });

                                    console.log('Button Rect:', elementRect);
                                    console.log('Transformation container placed 3 boxes above successfully!');
                                } else {
                                    console.error("Either '.transforcontwhite' or the clicked button is missing!");
                                }

                                tppb.forEach(elementi => {
                                    elementi.addEventListener('click', () => {
                                        console.log(elementi);
                                        console.log(element);
                                        
                                        element.innerHTML = elementi.innerHTML;
                                        tpb.style.display = 'none';
                                        run = true;
                                    });
                                });

                            }
                        }
                    }
                }else if(element.style.backgroundColor==="skyblue"){
                    if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-pawn")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }else if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-rook")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }else if(lastclickedpiece.querySelector('i').classList.contains("fa-chess-king")&& !(lastclickedpiece.querySelector('i').classList.contains("firstmovedone"))){
                        lastclickedpiece.querySelector('i').classList.add("firstmovedone");
                    }
                    removehighlight();
                    element.innerHTML=lastclickedpiece.innerHTML;
                    
                    piece_btn.forEach(elementi => {
                        if(elementi.id==lastclickedpiece.id){
                            elementi.innerHTML="";
                        }
                    })
                    let elementih=element.querySelector('i');
                    if(chance==="white"){
                        if(lastclickedpiece.id=="btn85" && 
                            elementih.classList.contains("fa-chess-king") &&
                            element.id=="btn87" ){
                            let moverook=document.getElementById("btn86");
                            let currrook=document.getElementById("btn88");
                            moverook.innerHTML=currrook.innerHTML;
                            currrook.innerHTML="";
                            moverook.querySelector('i').classList.add("firstmovedone");  
                        }else if(lastclickedpiece.id=="btn85" && 
                            elementih.classList.contains("fa-chess-king") &&
                            element.id=="btn83" ){
                            let moverook=document.getElementById("btn84");
                            let currrook=document.getElementById("btn81");
                            moverook.innerHTML=currrook.innerHTML;
                            currrook.innerHTML="";
                            moverook.querySelector('i').classList.add("firstmovedone");  
                        }
                    }else{
                        if(lastclickedpiece.id=="btn15" && 
                            elementih.classList.contains("fa-chess-king") &&
                            element.id=="btn17" ){
                            let moverook=document.getElementById("btn16");
                            let currrook=document.getElementById("btn18");
                            moverook.innerHTML=currrook.innerHTML;
                            currrook.innerHTML="";
                            moverook.querySelector('i').classList.add("firstmovedone");  
                        }else if(lastclickedpiece.id=="btn15" && 
                            elementih.classList.contains("fa-chess-king") &&
                            element.id=="btn13" ){
                            let moverook=document.getElementById("btn14");
                            let currrook=document.getElementById("btn11");
                            moverook.innerHTML=currrook.innerHTML;
                            currrook.innerHTML="";
                            moverook.querySelector('i').classList.add("firstmovedone");  
                        }
                    }
                }

                if(checkmatechecker(chance)&&currentlytargeted(chance)){
                    const checkmatediv = document.querySelector('.checkmate');
                    const checkmatetext = checkmatediv.querySelector('.checkmate_text');
                    let checktext = checkmatediv.querySelector('.winner_text');
                    const whitewint = document.querySelector('.white_win_text');
                    const blackwint = document.querySelector('.black_win_text');
                    checkmatetext.innerText="Checkmate";
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
                }else if(checkmatechecker(chance)&&!currentlytargeted(chance)){
                    const checkmatediv = document.querySelector('.checkmate');
                    const checkmatetext = checkmatediv.querySelector('.checkmate_text');
                    let checktext = checkmatediv.querySelector('.winner_text');
                    const whitewint = document.querySelector('.white_win_text');
                    const blackwint = document.querySelector('.black_win_text');
                    checkmatetext.innerText="Stalemate";
                    checktext.innerText="It's a draw!";
                    whitewint.innerText="It's a draw!";
                    blackwint.innerText="It's a draw!";
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