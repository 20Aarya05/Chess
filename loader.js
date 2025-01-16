const game_cont = document.querySelector('.game_cont');

// Create rows with buttons
for (let i = 0; i < 8; i++) {
    let main_parrent_row = document.createElement('div');
    main_parrent_row.classList.add('main_parent_cont');
    main_parrent_row.id = 'mpc' + (i + 1); // Fix concatenation
    game_cont.appendChild(main_parrent_row);
}

const main_parent_cont = document.querySelectorAll('.main_parent_cont');
let rowCount = 1;

// Add buttons to each row
main_parent_cont.forEach(element => {
    for (let i = 1; i <= 8; i++) {
        let piece_btn = document.createElement('button');
        piece_btn.classList.add('piece_btn');
        piece_btn.id = `btn${rowCount}${i}`;
        element.appendChild(piece_btn);
    }
    rowCount++;
});

// Chess piece icons
const blackpcs = ["fa-solid fa-chess-rook", "fa-solid fa-chess-knight", "fa-solid fa-chess-bishop", 
                  "fa-solid fa-chess-queen", "fa-solid fa-chess-king", "fa-solid fa-chess-pawn"];
const whitepcs = ["fa-regular fa-chess-rook", "fa-regular fa-chess-knight", "fa-regular fa-chess-bishop", 
                  "fa-regular fa-chess-queen", "fa-regular fa-chess-king", "fa-regular fa-chess-pawn"];

// Add event listeners to buttons
const pieceButtons = document.querySelectorAll('.piece_btn');
pieceButtons.forEach(element => {
        let btntext = document.createElement('i');
        
        // Check ID and assign a piece
        if (element.id === "btn11") {
            btntext.className = blackpcs[0]; // Black rook
        } else if (element.id === "btn12") {
            btntext.className = blackpcs[1]; // Black knight
        }
        
        // Prevent duplicate icons
        if (!element.querySelector('i')) {
            element.appendChild(btntext);
        }
});