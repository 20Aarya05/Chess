import { movechecker, checkPiece } from "./movechecker.js";
let tocheck_class;
export function currentlytargeted(chance) {
    tocheck_class = chance === "white" ? "fa-solid" : "fa-regular";

    const piece_btn = document.querySelectorAll(`.piece_btn`);
        for (const piece of piece_btn) {
            const icont = piece.querySelector(`i`);
            if (icont && icont.classList.contains(tocheck_class)) {
                if (checkPiece(icont, chance, piece.id)) {
                    return true;
                }
            }
        }
        return false;
}
