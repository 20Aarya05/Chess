let tocheck_class;
let mainelementid;
let pieceelementid;
let ihtml;
let phtml;

export function movechecker(chance, elementid, posid){
    tocheck_class = chance === "white" ? "fa-solid" : "fa-regular";
    const currelement = document.getElementById(elementid);
    ihtml = currelement.innerHTML;
    const poselement = document.getElementById(posid);
    phtml = poselement.innerHTML;
    mainelementid = elementid;
    pieceelementid = posid;
    console.log(ihtml);
    currelement.innerHTML = "";
    poselement.innerHTML = ihtml;
    chance = chance === "white" ? "black" : "white";
    
    const piece_btn = document.querySelectorAll(`.piece_btn`);
    for (const piece of piece_btn) {
        const icont = piece.querySelector(`i`);
        if (icont && icont.classList.contains(tocheck_class)) {
            if (checkPiece(icont, chance, piece.id)) {
                rearrange();
                return true;
            }
        }
    }
    rearrange();
    return false;
}

function checkPiece(iconElement, chance, pieceId) {
    if (iconElement.classList.contains("fa-chess-rook")) {
        return checkrook(chance, pieceId);
    } else if (iconElement.classList.contains("fa-chess-knight")) {
        return checkknight(chance, pieceId);
    } else if (iconElement.classList.contains("fa-chess-bishop")) {
        return checkbishop(chance, pieceId);
    } else if (iconElement.classList.contains("fa-chess-queen")) {
        return checkqueen(chance, pieceId);
    } else if (iconElement.classList.contains("fa-chess-king")) {
        return checkking(chance, pieceId);
    } else if (iconElement.classList.contains("fa-chess-pawn")) {
        return checkpawn(chance, pieceId);
    }
    return false;
}

function checkrook(chance, eachpieceid){
    const [x, y] = eachpieceid.slice(3).split('').map(Number);
    console.log(x, y);
    let listbtnpx = [], listbtnnx = [], listbtnpy = [], listbtnny = [];

    for (let i = y + 1; i <= 8; i++) listbtnpx.push(`btn${x}${i}`);
    for (let i = y - 1; i >= 1; i--) listbtnnx.push(`btn${x}${i}`);
    for (let i = x + 1; i <= 8; i++) listbtnpy.push(`btn${i}${y}`);
    for (let i = x - 1; i >= 1; i--) listbtnny.push(`btn${i}${y}`);

    if(verifymove(chance, listbtnpx)) return true;
    if(verifymove(chance, listbtnnx)) return true;
    if(verifymove(chance, listbtnpy)) return true;
    if(verifymove(chance, listbtnny)) return true;
    return false;
}

function checkknight(chance, eachpieceid){
    const values = eachpieceid.slice(3).split('');
    const x = parseInt(values[0], 10);
    const y = parseInt(values[1], 10);

    if(x+2<=8 && y+1<=8){
        if(verifymove(chance, [`btn${x+2}${y+1}`])) return true;
    }
    if(x+2<=8 && y-1>=1){
        if(verifymove(chance, [`btn${x+2}${y-1}`])) return true;
    }
    if(x-2>=1 && y+1<=8){
        if(verifymove(chance, [`btn${x-2}${y+1}`])) return true;
    }
    if(x-2>=1 && y-1>=1){
        if(verifymove(chance, [`btn${x-2}${y-1}`])) return true;
    }
    if(x+1<=8 && y+2<=8){
        if(verifymove(chance, [`btn${x+1}${y+2}`])) return true;
    }
    if(x+1<=8 && y-2>=1){
        if(verifymove(chance, [`btn${x+1}${y-2}`])) return true;
    }
    if(x-1>=1 && y+2<=8){
        if(verifymove(chance, [`btn${x-1}${y+2}`])) return true;
    }
    if(x-1>=1 && y-2>=1){
        if(verifymove(chance, [`btn${x-1}${y-2}`])) return true;
    }
    return false;
}

function checkbishop(chance, eachpieceid){
    const values = eachpieceid.slice(3).split('');
    const x = parseInt(values[0], 10);
    const y = parseInt(values[1], 10);
    const c=x,d=y;
    let listbtnpxpy = [];
    let a=c,b=d;
    while(a<=8 && b<=8){
        a++;
        b++;
        listbtnpxpy.push(`btn${a}${b}`);
    }
    if(verifymove(chance, listbtnpxpy)) return true;
    let listbtnnxpy = [];
    a=c,b=d;
    while(a<=8 && b>=1){
        a++;
        b--;
        listbtnnxpy.push(`btn${a}${b}`);
    }
    if(verifymove(chance, listbtnnxpy)) return true;
    let listbtnnxny = [];
    a=c,b=d;
    while(a>=1 && b>=1){
        a--;
        b--;
        listbtnnxny.push(`btn${a}${b}`);
    }
    if(verifymove(chance, listbtnnxny)) return true;
    let listbtnpxny = [];
    a=c,b=d;
    while(a>=1 && b<=8){
        a--;
        b++;
        listbtnpxny.push(`btn${a}${b}`);
    }
    if(verifymove(chance, listbtnpxny)) return true;
    return false;
}

function checkqueen(chance, eachpieceid){
    const values = eachpieceid.slice(3).split('');
    const x = parseInt(values[0], 10);
    const y = parseInt(values[1], 10);

    let listbtnpx = []; 
    let listbtnnx = []; 
    let listbtnpy = [];
    let listbtnny = []; 

    for (let i = y + 1; i <= 8; i++) {
        listbtnpx.push(`btn${x}${i}`);
    }

    for (let i = y - 1; i >= 1; i--) {
        listbtnnx.push(`btn${x}${i}`);
    }

    for (let i = x - 1; i >= 1; i--) {
        listbtnpy.push(`btn${i}${y}`);
    }

    for (let i = x + 1; i <= 8; i++) {
        listbtnny.push(`btn${i}${y}`);
    }

    if(verifymove(chance, listbtnpx)) return true;
    if(verifymove(chance, listbtnnx)) return true;
    if(verifymove(chance, listbtnpy)) return true;
    if(verifymove(chance, listbtnny)) return true;

    const c=x,d=y;
    let listbtnpxpy = [];
    let a=c,b=d;
    while(a<=8 && b<=8){
        a++;
        b++;
        listbtnpxpy.push(`btn${a}${b}`);
    }
    if(verifymove(chance, listbtnpxpy)) return true;
    let listbtnnxpy = [];
    a=c,b=d;
    while(a<=8 && b>=1){
        a++;
        b--;
        listbtnnxpy.push(`btn${a}${b}`);
    }
    if(verifymove(chance, listbtnnxpy)) return true;
    let listbtnnxny = [];
    a=c,b=d;
    while(a>=1 && b>=1){
        a--;
        b--;
        listbtnnxny.push(`btn${a}${b}`);
    }
    if(verifymove(chance, listbtnnxny)) return true;
    let listbtnpxny = [];
    a=c,b=d;
    while(a>=1 && b<=8){
        a--;
        b++;
        listbtnpxny.push(`btn${a}${b}`);
    }
    if(verifymove(chance, listbtnpxny)) return true;
    return false;
}

function checkking(chance, eachpieceid){
    const values = eachpieceid.slice(3).split('');
    const x = parseInt(values[0], 10);
    const y = parseInt(values[1], 10);
    if(verifymove(chance, [`btn${x}${y+1}`])) return true;
    if(verifymove(chance, [`btn${x}${y-1}`])) return true;
    if(verifymove(chance, [`btn${x+1}${y}`])) return true;
    if(verifymove(chance, [`btn${x-1}${y}`])) return true;
    if(verifymove(chance, [`btn${x+1}${y+1}`])) return true;
    if(verifymove(chance, [`btn${x+1}${y-1}`])) return true;
    if(verifymove(chance, [`btn${x-1}${y+1}`])) return true;
    if(verifymove(chance, [`btn${x-1}${y-1}`])) return true;
    return false;
}

function checkpawn(chance, eachpieceid){
    const values = eachpieceid.slice(3).split('');
    const x = parseInt(values[0], 10); 
    const y = parseInt(values[1], 10);

    const iofelement = document.getElementById(eachpieceid).querySelector('i');

    let forwardOne = null;
    let forwardTwo = null;

    if (iofelement.classList.contains("fa-solid")) {
        forwardOne = document.getElementById(`btn${x + 1}${y}`);
        forwardTwo = document.getElementById(`btn${x + 2}${y}`);
    } else if (iofelement.classList.contains("fa-regular")) {
        forwardOne = document.getElementById(`btn${x - 1}${y}`);
        forwardTwo = document.getElementById(`btn${x - 2}${y}`);
    }

    if (forwardOne && !forwardOne.querySelector('i')) {
        if(verifymove(chance, [`btn${forwardOne.id.slice(3)}`])) return true;
        if (!iofelement.classList.contains("firstmovedone") && forwardTwo && !forwardTwo.querySelector('i')) {
            if(verifymove(chance, [`btn${forwardTwo.id.slice(3)}`])) return true;
        }
    }


    const diagonalLeft = `btn${x + (chance === "white" ? -1 : 1)}${y - 1}`;
    const diagonalRight = `btn${x + (chance === "white" ? -1 : 1)}${y + 1}`;
    const diagonalSquares = [diagonalLeft, diagonalRight];

    diagonalSquares.forEach((square) => {
        const piece = document.getElementById(square);
        if (piece) {
            const icon = piece.querySelector('i');
            if (icon) {
                if (chance === "white" && icon.classList.contains("fa-solid")) {
                    if(icon.classList.contains("fa-chess-king")) return true;
                } else if (chance === "black" && icon.classList.contains("fa-regular")) {
                    if(icon.classList.contains("fa-chess-king")) return true;
                }
            }
        }
    });
    return false;
}

function verifymove(chance, listboxes) {
    for (let i = 0; i < listboxes.length; i++) {
        const piece = document.getElementById(listboxes[i]);
        if (piece) {
            const icon = piece.querySelector('i');
            if (icon) {
                if (chance === "white" && icon.classList.contains("fa-solid")) { 
                    if(icon.classList.contains("fa-chess-king")) return true;
                } else if (chance === "black" && icon.classList.contains("fa-regular")) {
                    if(icon.classList.contains("fa-chess-king")) return true;
                }
                break;
            }
        }
    }
    return false;
}

function rearrange(){
    document.getElementById(mainelementid).innerHTML = ihtml;
    document.getElementById(pieceelementid).innerHTML = phtml;
}
