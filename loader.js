const game_cont = document.querySelector('.game_cont');
for(let i = 0; i < 8; i++){
    let main_parrent_row=document.createElement('div');
    main_parrent_row.classList.add('main_parent_cont');
    main_parrent_row.id='mpc'+i+1;
    game_cont.appendChild(main_parrent_row);
}

const main_parent_cont = document.querySelectorAll('.main_parent_cont');
let rowount=1;
main_parent_cont.forEach(element => {
    for(let i=1;i<=8;i++){
        let piece_btn = document.createElement('button');
        piece_btn.classList.add('piece_btn');
        piece_btn.id=`btn${rowount}${i}`;
        element.appendChild(piece_btn);
    }
    rowount++;
})

const piece_btn = document.querySelectorAll('.piece_btn');
piece_btn.forEach(element => {
    element.addEventListener('click',function(){
        console.log(element.id);
    });
});
     