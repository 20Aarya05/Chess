import { getpiece, getrookpath, getknightpath, getbishoppath, getqueenpath, getkingpath, getpawnpath } from "./mainfunctions.js";
import { blackpcsidentify, whitepcsidentify } from "./loader.js";
import { removehighlight } from "./mainfunctions.js";


export function checkmatechecker(chance1) {
    const piece_btn = document.querySelectorAll('.piece_btn');
    
    let opponent = chance1 === "white" ? "black" : "white";
    let opponentPieces = opponent === "white" ? whitepcsidentify : blackpcsidentify;
    let kingPosition = null;
    let moveFound = false;

    piece_btn.forEach(element => {
        const icon = element.querySelector("i");
        if (icon && icon.classList.contains(opponentPieces) && icon.classList.contains("fa-chess-king")) {
            kingPosition = element;
        }
    });

    if (!kingPosition) {
        console.error("King not found, potential issue with the board setup.");
        return false;
    }

    piece_btn.forEach(element => {
        const icon = element.querySelector("i");
        if (icon && icon.classList.contains(opponentPieces)) {
            const pieceType = getpiece(element);

            switch (pieceType) {
                case "rook":
                    getrookpath(element, opponent);
                    break;
                case "knight":
                    getknightpath(element, opponent);
                    break;
                case "bishop":
                    getbishoppath(element, opponent);
                    break;
                case "queen":
                    getqueenpath(element, opponent);
                    break;
                case "king":
                    getkingpath(element, opponent);
                    break;
                case "pawn":
                    getpawnpath(element, opponent);
                    break;
            }

            piece_btn.forEach(btn => {
                if (btn.classList.contains("to-move") || btn.style.backgroundColor === "red") {
                    moveFound = true;
                }
            });
            removehighlight();
        }
    });

    return !moveFound; 
}
