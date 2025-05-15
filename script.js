const input = document.getElementById('inputText');
const output = document.getElementById('outputText');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const lineCount = document.getElementById('lineCount');

input.addEventListener('input', updateStats);

function updateStats() {
  const text = input.value;
  charCount.textContent = `Characters: ${text.length}`;
  wordCount.textContent = `Words: ${text.trim().split(/\s+/).filter(Boolean).length}`;
  lineCount.textContent = `Lines: ${text.split('\n').length}`;
}

function toUpperCase() {
  output.value = input.value.toUpperCase();
}

function toLowerCase() {
  output.value = input.value.toLowerCase();
}

function toSentenceCase() {
  const text = input.value.toLowerCase();
  output.value = text.charAt(0).toUpperCase() + text.slice(1);
}

function toCapitalizedCase() {
  output.value = input.value
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function toAlternatingCase() {
  output.value = input.value
    .split('')
    .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}

function toInverseCase() {
  output.value = input.value
    .split('')
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join('');
}

function copyText() {
  navigator.clipboard.writeText(output.value);
  alert('Copied to clipboard!');
}

function downloadText() {
  const blob = new Blob([output.value], { type: 'text/plain' });
  const link = document.createElement('a');
  link.download = 'converted-text.txt';
  link.href = URL.createObjectURL(blob);
  link.click();
}

function clearText() {
  input.value = '';
  output.value = '';
  updateStats();
}
