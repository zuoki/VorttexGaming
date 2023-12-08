import { data } from "@/app/api/data";

const names = data.map(juego => juego.title);

export const validations = (inputName, inputValue) => {

    const foundRepeat = (title) => {
        let founds = [];

        const gamesFiltereds = names.filter(game => game !== title);

        gamesFiltereds.forEach(name => {
            if (name.toLowerCase().replace(/\s+/g, '') === title.toLowerCase().replace(/\s+/g, '')) {
                founds.push(name);
            }
        })
        if (founds.length > 0) return true;
        return false;
    }

    if (inputName === 'title') {

        const regexTitle = /^[a-zA-Z0-9\s:]+$/;

        if (
            inputValue.length < 1 ||
            inputValue.length > 40 ||
            !regexTitle.test(inputValue) ||
            foundRepeat(inputValue)
        ) return [inputName, true];
        return [inputName, false];

    }

    else if (inputName === 'description') {

        if (
            inputValue.length < 1 ||
            inputValue.length > 400 
        ) return [inputName, true];
        return [inputName, false];

    }

    else if (inputName === 'price') {


        if (
            parseInt(inputValue) < 1 ||
            parseInt(inputValue) > 150
        ) return [inputName, true];

        return [inputName, false]

    }


    //MANEJO DE OFERTAS
    else {
        return;
    }

}