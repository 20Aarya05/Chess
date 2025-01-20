import { getpiece, getrookpath, getknightpath, getbishoppath, getqueenpath, getkingpath, getpawnpath } from "./mainfunctions.js";
import { blackpcsidentify, whitepcsidentify } from "./loader.js";
import { removehighlight } from "./mainfunctions.js";


export function checkmatechecker(chance1) {
    const piece_btn = document.querySelectorAll('.piece_btn');
    
    // Determine opponent's turn
    let opponent = chance1 === "white" ? "black" : "white";
    let opponentPieces = opponent === "white" ? whitepcsidentify : blackpcsidentify;
    let kingPosition = null;
    let moveFound = false;

    // Find the king's position
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

    // Check if any move is possible to protect the king
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

            // If any valid move exists (highlighted), set flag
            piece_btn.forEach(btn => {
                if (btn.style.backgroundColor === "yellow" || btn.style.backgroundColor === "red") {
                    moveFound = true;
                }
            });
            removehighlight(); // Remove highlights after checking
        }
    });

    return !moveFound;  // Return true if no legal moves found (checkmate)
}
