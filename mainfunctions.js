import { movechecker } from "./movechecker.js";

//piece idntify
export function getpiece(element){
    const icon = element.querySelector('i');
    if(icon.classList.contains('fa-chess-rook')){
        return "rook";
    } else if(icon.classList.contains('fa-chess-knight')){
        return "knight";
    } else if(icon.classList.contains('fa-chess-bishop')){
        return "bishop";
    } else if(icon.classList.contains('fa-chess-queen')){
        return "queen";
    } else if(icon.classList.contains('fa-chess-king')){
        return "king";
    } else if(icon.classList.contains('fa-chess-pawn')){
        return "pawn";
    }
}


export function removehighlight(){
    const piece_btn = document.querySelectorAll('.piece_btn');
    piece_btn.forEach((piece) => {
        if (piece.style.backgroundColor!="") {
            piece.style.backgroundColor = "";
        }
    });
}

export function getrookpath(element, chance) {
    let ipos = element.id; 
    const values = ipos.slice(3).split('');
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

    highlightPath(chance, listbtnpx, element.id);
    highlightPath(chance, listbtnnx, element.id);
    highlightPath(chance, listbtnpy, element.id);
    highlightPath(chance, listbtnny, element.id);
}

export function getknightpath(element, chance) {
    let ipos = element.id; 
    const values = ipos.slice(3).split('');
    const x = parseInt(values[0], 10);
    const y = parseInt(values[1], 10);

    if(x+2<=8 && y+1<=8){
        highlightPath(chance, [`btn${x+2}${y+1}`], element.id);
    }
    if(x+2<=8 && y-1>=1){
        highlightPath(chance, [`btn${x+2}${y-1}`], element.id);
    }
    if(x-2>=1 && y+1<=8){
        highlightPath(chance, [`btn${x-2}${y+1}`], element.id);
    }
    if(x-2>=1 && y-1>=1){
        highlightPath(chance, [`btn${x-2}${y-1}`], element.id);
    }
    if(x+1<=8 && y+2<=8){
        highlightPath(chance, [`btn${x+1}${y+2}`], element.id);
    }
    if(x+1<=8 && y-2>=1){
        highlightPath(chance, [`btn${x+1}${y-2}`], element.id);
    }
    if(x-1>=1 && y+2<=8){
        highlightPath(chance, [`btn${x-1}${y+2}`], element.id);
    }
    if(x-1>=1 && y-2>=1){
        highlightPath(chance, [`btn${x-1}${y-2}`], element.id);
    }
}

export function getbishoppath(element, chance) {
    let ipos = element.id; 
    const values = ipos.slice(3).split('');
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
    highlightPath(chance, listbtnpxpy, element.id);
    let listbtnnxpy = [];
    a=c,b=d;
    while(a<=8 && b>=1){
        a++;
        b--;
        listbtnnxpy.push(`btn${a}${b}`);
    }
    highlightPath(chance, listbtnnxpy, element.id);
    let listbtnnxny = [];
    a=c,b=d;
    while(a>=1 && b>=1){
        a--;
        b--;
        listbtnnxny.push(`btn${a}${b}`);
    }
    highlightPath(chance, listbtnnxny, element.id);
    let listbtnpxny = [];
    a=c,b=d;
    while(a>=1 && b<=8){
        a--;
        b++;
        listbtnpxny.push(`btn${a}${b}`);
    }
    highlightPath(chance, listbtnpxny, element.id);
}

export function getqueenpath(element, chance) {
    let ipos = element.id; 
    const values = ipos.slice(3).split('');
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

    highlightPath(chance, listbtnpx, element.id);
    highlightPath(chance, listbtnnx, element.id);
    highlightPath(chance, listbtnpy, element.id);
    highlightPath(chance, listbtnny, element.id);

    const c=x,d=y;
    let listbtnpxpy = [];
    let a=c,b=d;
    while(a<=8 && b<=8){
        a++;
        b++;
        listbtnpxpy.push(`btn${a}${b}`);
    }
    highlightPath(chance, listbtnpxpy, element.id);
    let listbtnnxpy = [];
    a=c,b=d;
    while(a<=8 && b>=1){
        a++;
        b--;
        listbtnnxpy.push(`btn${a}${b}`);
    }
    highlightPath(chance, listbtnnxpy, element.id);
    let listbtnnxny = [];
    a=c,b=d;
    while(a>=1 && b>=1){
        a--;
        b--;
        listbtnnxny.push(`btn${a}${b}`);
    }
    highlightPath(chance, listbtnnxny, element.id);
    let listbtnpxny = [];
    a=c,b=d;
    while(a>=1 && b<=8){
        a--;
        b++;
        listbtnpxny.push(`btn${a}${b}`);
    }
    highlightPath(chance, listbtnpxny, element.id);
}

export function getkingpath(element, chance) {
    let ipos = element.id; 
    const values = ipos.slice(3).split('');
    const x = parseInt(values[0], 10);
    const y = parseInt(values[1], 10);
    highlightPath(chance, [`btn${x}${y+1}`], element.id);
    highlightPath(chance, [`btn${x}${y-1}`], element.id);
    highlightPath(chance, [`btn${x+1}${y}`], element.id);
    highlightPath(chance, [`btn${x-1}${y}`], element.id);
    highlightPath(chance, [`btn${x+1}${y+1}`], element.id);
    highlightPath(chance, [`btn${x+1}${y-1}`], element.id);
    highlightPath(chance, [`btn${x-1}${y+1}`], element.id);
    highlightPath(chance, [`btn${x-1}${y-1}`], element.id);
}

export function getpawnpath(element, chance) {
    
    const ipos = element.id; 
    const values = ipos.slice(3).split('');
    const x = parseInt(values[0], 10); 
    const y = parseInt(values[1], 10);

    const iofelement = element.querySelector('i');
    if (!iofelement) return; 


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
        highlightPath(chance, [`btn${forwardOne.id.slice(3)}`], element.id); 
        if (!iofelement.classList.contains("firstmovedone") && forwardTwo && !forwardTwo.querySelector('i')) {
            highlightPath(chance, [`btn${forwardTwo.id.slice(3)}`], element.id); 
        }
    }

    iofelement.classList.add("firstmovedone");

    const diagonalLeft = `btn${x + (chance === "white" ? -1 : 1)}${y - 1}`;
    const diagonalRight = `btn${x + (chance === "white" ? -1 : 1)}${y + 1}`;
    const diagonalSquares = [diagonalLeft, diagonalRight];

    diagonalSquares.forEach((square) => {
        const piece = document.getElementById(square);
        if (piece) {
            const icon = piece.querySelector('i');
            if (icon) {
                if (chance === "white" && icon.classList.contains("fa-solid")) {
                    piece.style.backgroundColor = "red";
                } else if (chance === "black" && icon.classList.contains("fa-regular")) {
                    piece.style.backgroundColor = "red";
                }
            }
        }
    });
}



function highlightPath(chance, listboxes, element) {
    for (let i = 0; i < listboxes.length; i++) {
        const piece = document.getElementById(listboxes[i]);
        
        if (piece) {
            const icon = piece.querySelector('i');
            if (icon) {
                if (chance === "white" && icon.classList.contains("fa-solid")) {
                    if (movechecker(chance, element, listboxes[i]) == false) {
                        piece.style.backgroundColor = "red";
                    }  
                } else if (chance === "black" && icon.classList.contains("fa-regular")) {
                    if (movechecker(chance, element, listboxes[i]) == false) {
                        piece.style.backgroundColor = "red";
                    }  
                }
                break;
            } else {
                if (movechecker(chance, element, listboxes[i]) == false) {
                    console.log("ok");
                    piece.style.backgroundColor = "yellow";
                }
                
            }
        }
    }
}