
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const text = textElement.innerHTML.trim(); 
    textElement.innerHTML = ''; 

    let i = 0;
    const typingEffect = setInterval(function() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100); 
});
