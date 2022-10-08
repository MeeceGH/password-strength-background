const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
    const input = e.target.value.length;
    const blurValue = getBlurValue(input);
    background.style.filter = `blur(${blurValue})`;
})

function getBlurValue(l) {
    let result = 20 - l * 2;
    if (result < 0) {
        return '0px';
    } else {
        return result + 'px';
    }
}