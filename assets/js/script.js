let pricing = document.querySelector('.pricing-modifier');
let views = document.querySelector('.views-modifier');
let switchInput = document.querySelector('#switch');
let inputRange = document.querySelector('.value-range');




let inputChange = () => {
    inputRange.style.background = `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${inputRange.value / 2}%, #cdd7ee ${inputRange.value / 2}%, #cdd7ee 100%)`;
    if (!switchInput.checked) {
        pricing.innerText = `$${parseFloat(inputRange.value / 6.25).toFixed(2)}`;
        views.innerText = inputRange.value;
    } else {
        pricing.innerText = `$${parseFloat((inputRange.value / 6.25) - ((inputRange.value / 6.25) * 0.25)).toFixed(2)}`;
        views.innerText = inputRange.value;
    }
}

inputRange.addEventListener('mousemove', inputChange)
switchInput.addEventListener('click', inputChange)


window.onload = () => {
    //pricing.innerText = inputRange.value / 6.25;
    inputChange();
    views.innerText = inputRange.value;
}