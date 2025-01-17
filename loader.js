const game_cont = document.querySelector('.game_cont');

for (let i = 0; i < 8; i++) {
    let main_parrent_row = document.createElement('div');
    main_parrent_row.classList.add('main_parent_cont');
    main_parrent_row.id = 'mpc' + (i + 1);
    game_cont.appendChild(main_parrent_row);
}

const main_parent_cont = document.querySelectorAll('.main_parent_cont');
let rowCount = 1;

main_parent_cont.forEach(element => {
    for (let i = 1; i <= 8; i++) {
        let piece_btn = document.createElement('button');
        piece_btn.classList.add('piece_btn');
        piece_btn.id = `btn${rowCount}${i}`;
        element.appendChild(piece_btn);
    }
    rowCount++;
});

const blackpcs = [`<i class="fa-solid fa-chess-rook"></i>`, `<i class="fa-solid fa-chess-knight"></i>`, `<i class="fa-solid fa-chess-bishop"></i>`, 
                  `<i class="fa-solid fa-chess-queen"></i>`, `<i class="fa-solid fa-chess-king"></i>`, `<i class="fa-solid fa-chess-pawn"></i>`];
const whitepcs = [`<i class="fa-regular fa-chess-rook"></i>`, `<i class="fa-regular fa-chess-knight"></i>`, `<i class="fa-regular fa-chess-bishop"></i>`, 
                  `<i class="fa-regular fa-chess-queen"></i>`, `<i class="fa-regular fa-chess-king"></i>`, `<i class="fa-regular fa-chess-pawn"></i>`];

const pieceButtons = document.querySelectorAll('.piece_btn');
pieceButtons.forEach(element => {
    if (element.id === "btn11" || element.id==="btn18") {
        element.innerHTML = blackpcs[0];
    } else if (element.id === "btn12" || element.id==="btn17") {
        element.innerHTML = blackpcs[1]; 
    } else if (element.id === "btn13" || element.id==="btn16") {
        element.innerHTML = blackpcs[2];
    } else if (element.id==="btn14"){
        element.innerHTML=blackpcs[3];
    } else if (element.id==="btn15"){
        element.innerHTML=blackpcs[4];
    } else if ( element.id==="btn21" || element.id==="btn22" || element.id==="btn23" || element.id==="btn24" || element.id==="btn25" || element.id==="btn26" || element.id==="btn27" || element.id==="btn28" ){
        element.innerHTML=blackpcs[5];
    } else if (element.id==="btn81" || element.id==="btn88") {
        element.innerHTML = whitepcs[0];
    } else if (element.id==="btn82" || element.id==="btn87") {
        element.innerHTML = whitepcs[1]; 
    } else if (element.id==="btn83" || element.id==="btn86") {
        element.innerHTML = whitepcs[2];
    } else if (element.id==="btn84"){
        element.innerHTML=whitepcs[3];
    } else if (element.id==="btn85"){
        element.innerHTML=whitepcs[4];
    } else if (element.id==="btn71" || element.id==="btn72" || element.id==="btn73" || element.id==="btn74" || element.id==="btn75" || element.id==="btn76" || element.id==="btn77" ||element.id==="btn78"  ){
        element.innerHTML=whitepcs[5];
    } 
});