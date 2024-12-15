    function checkVowels() {
      let inputText = document.getElementById('inputText').value;
      let resultDiv = document.getElementById('result');
      let errorDiv = document.getElementById('error');
      resultDiv.textContent = '';
      errorDiv.textContent = '';

      if (!inputText) {
        errorDiv.textContent = 'Please enter some text.';
        return;
      }

      let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
      let count = 0;

      for (let i = 0; i < inputText.length; i++) {
        if (vowels.includes(inputText[i])) {
          count++;
        }
      }

      resultDiv.textContent = 'Number of vowels: ' + count;
    }
