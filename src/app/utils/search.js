import { data } from "@/app/api/data";

const search = (letters) => {
    letters = letters.trim();
    letters = letters.split(' ').join('');
    const dataCopy = [...data];

    const finds = dataCopy.filter(
        game =>
            game.title.toLowerCase().includes(letters.toLowerCase()) ||
            game.title.toUpperCase().includes(letters.toUpperCase()) ||
            game.title.toLowerCase().split(' ').join('').includes(letters.toLowerCase()) ||
            game.title.toUpperCase().split(' ').join('').includes(letters.toUpperCase())
    );
    return finds;

}

export default search;