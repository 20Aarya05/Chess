const tp = document.querySelector('.transforcontwhite'); // Transformation container
const element = document.getElementById('btn15'); // Button div
const tpp = document.querySelectorAll('.transformationpcs'); // Individual buttons inside the container

if (tp && element) {
    const elementRect = element.getBoundingClientRect(); // Get button's dimensions and position
    // Set the size of the container to match the button
    tp.style.width = `${elementRect.width}px`;
    tp.style.height = `${elementRect.height * tpp.length}px`; // Height for all buttons combined

    // Position the container to overlap the button
    tp.style.position = 'absolute';
    tp.style.top = `${elementRect.top + window.scrollY - 2}px`; // Align the top
    tp.style.left = `${elementRect.left + window.scrollX -2}px`; // Align the left

    // Set size for each individual button in the container
    tpp.forEach((button) => {
        button.style.width = `${elementRect.width}px`;
        button.style.height = `${elementRect.height}px`;
    });

    // Debugging information
    console.log('Button Rect:', elementRect);
    console.log('Transformation container and child buttons styled correctly!');
} else {
    console.error("Either '.transforcontwhite' or '#btn15' is missing!");
}
