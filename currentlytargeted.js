import { movechecker, checkPiece } from "./movechecker.js";
export function currentlytargeted(chance) {
    let pcs;
    if (chance==="white"){
        chance="black";
    }else{
        chance="white";
    }
    if (chance === "white") {
        const piece_btn = document.querySelectorAll('.piece_btn');
        piece_btn.forEach(element => {
            const elei=element.querySelector('i');
            if (elei&&elei.classList.contains('fa-regular')&&elei.classList.contains('fa-chess-king')) {
                pcs = element;
            }
        })
    }else if (chance === "black") {
        const piece_btn = document.querySelectorAll('.piece_btn');
        piece_btn.forEach(element => {
            const elei=element.querySelector('i');
            if (elei&&elei.classList.contains('fa-solid')&&elei.classList.contains('fa-chess-king')) {
                pcs = element;
            }
        })
    }
    if(movechecker(chance, pcs.id, pcs.id)===false){
        return false;
    }
    return true;
}
