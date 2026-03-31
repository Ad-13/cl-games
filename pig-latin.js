const text = process.argv[2];

if (!text) {
  console.log("Please provide a text to translate.");
  process.exit(1);
}

if (typeof text !== "string") {
  console.log("Input must be a string.");
  process.exit(1);
}

const vowels = ["a", "e", "i", "o", "u"];

const handleConsonant = (word) => word.slice(1) + word[0] + "ay";

const handleVowel = (word) => word + "way";

const handle2Consonants = (word) => word.slice(2) + word[0] + word[1] + "ay";

const translate = (word) => {
  if (vowels.includes(word[0])) {
    return handleVowel(word);
  } else if (vowels.includes(word[1])) {
    return handleConsonant(word);
  } else {
    return handle2Consonants(word);
  }
};

const translated = text.split(" ").map(translate).join(" ");
console.log(translated);
process.exit(0);
