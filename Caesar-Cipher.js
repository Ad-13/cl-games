const alphabet = "abcdefghijklmnopqrstuvwxyz";
const text = process.argv[2];
const shift = parseInt(process.argv[3]) % 26;

if (!text || isNaN(shift)) {
  console.log("Please provide a text and a shift number.");
  process.exit(1);
}

const result = [];

for (let i = 0; i < text.length; i++) {
  const char = text[i];
  const charIndex = alphabet.indexOf(char.toLowerCase());
  const isUpperCase = char === char.toUpperCase();
  let newCharIndex = charIndex + shift;

  if (charIndex === -1) {
    result.push(char);
    continue;
  }

  if (newCharIndex >= alphabet.length) {
    newCharIndex = newCharIndex - alphabet.length;
  }

  if (newCharIndex < 0) {
    newCharIndex = newCharIndex + alphabet.length;
  }

  const newChar = alphabet[newCharIndex];
  result.push(isUpperCase ? newChar.toUpperCase() : newChar);
}

console.log(result.join(""));
process.exit(0);
