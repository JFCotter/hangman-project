import wordsList from "../data/words.js"

const pickRandomElementFromArray = (source) => {
    const randomIndex = Math.floor(Math.random() * source.length);
    const randomWord = source[randomIndex];
    return randomWord;
}

const getRandomWord = () => pickRandomElementFromArray(wordsList);

export default getRandomWord;