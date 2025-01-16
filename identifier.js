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
    let ipos = element.id; // Get the rook's current position (e.g., "btn45")
    const values = ipos.slice(3).split('');
    const x = parseInt(values[0], 10); // X-coordinate
    const y = parseInt(values[1], 10); // Y-coordinate

    let listbtnpx = []; // Rightward (positive X-direction)
    let listbtnnx = []; // Leftward (negative X-direction)
    let listbtnpy = []; // Upward (positive Y-direction)
    let listbtnny = []; // Downward (negative Y-direction)

    // Horizontal movement (right)
    for (let i = y + 1; i <= 8; i++) {
        listbtnpx.push(`btn${x}${i}`);
    }

    // Horizontal movement (left)
    for (let i = y - 1; i >= 1; i--) {
        listbtnnx.push(`btn${x}${i}`);
    }

    // Vertical movement (up)
    for (let i = x - 1; i >= 1; i--) {
        listbtnpy.push(`btn${i}${y}`);
    }

    // Vertical movement (down)
    for (let i = x + 1; i <= 8; i++) {
        listbtnny.push(`btn${i}${y}`);
    }

    highlightPath(chance, listbtnpx);
    highlightPath(chance, listbtnnx);
    highlightPath(chance, listbtnpy);
    highlightPath(chance, listbtnny);
}



function highlightPath(chance, listboxes) {
    for (let i = 0; i < listboxes.length; i++) {
        const piece = document.getElementById(listboxes[i]); // Directly get the element by ID
        
        if (piece) {
            const icon = piece.querySelector('i'); // Get the piece icon inside the box
            if (icon) {
                // Check the piece's color and highlight red if it's an opponent
                if (chance === "white" && icon.classList.contains("fa-solid")) {
                    piece.style.backgroundColor = "red";
                } else if (chance === "black" && icon.classList.contains("fa-regular")) {
                    piece.style.backgroundColor = "red";
                }
                break;
            } else {
                // Highlight yellow for empty squares
                piece.style.backgroundColor = "yellow";
            }
        }
    }
}

export function canmove(element,lastclickedpiece){
    console.log(lastclickedpiece.innerHTML);
    
    if(element.style.backgroundColor===""){
        return false;
    }
    if(element.style.backgroundColor==="yellow"){
        let itext= document.createElement("i");
        return true;
    }
}