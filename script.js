document.getElementById('check-btn').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value.trim();
    const result = document.getElementById('result');

    if (!textInput) {
        alert('Please input a value');
        return;
    }

    
    const cleanedText = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    const isPalindrome = cleanedText === cleanedText.split('').reverse().join('');

    if (isPalindrome) {
        result.textContent = `${textInput} is a palindrome`;
    } else {
        result.textContent = `${textInput} is not a palindrome`;
    }
});
