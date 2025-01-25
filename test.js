const tp = document.querySelector('.transforcontwhite'); 
const element = document.getElementById('btn15'); 
const tpp = document.querySelectorAll('.transformationpcs'); 

if (tp && element) {
    const elementRect = element.getBoundingClientRect(); 

    tp.style.width = `${elementRect.width}px`;
    tp.style.height = `${elementRect.height * tpp.length}px`;

    tp.style.position = 'absolute';
    tp.style.top = `${elementRect.top + window.scrollY - 2}px`; 
    tp.style.left = `${elementRect.left + window.scrollX -2}px`;

    tpp.forEach((button) => {
        button.style.width = `${elementRect.width}px`;
        button.style.height = `${elementRect.height}px`;
    });

    console.log('Button Rect:', elementRect);
    console.log('Transformation container and child buttons styled correctly!');
} else {
    console.error("Either '.transforcontwhite' or '#btn15' is missing!");
}
