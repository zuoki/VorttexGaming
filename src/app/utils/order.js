import { data } from '../api/data';

const order = (op, dataToRender) => {
    const dataCopy = [...dataToRender];

    if (op === "CLEAN") return data;
    if (op === 'PD') {
        const mayorAMenor = dataCopy.sort((a, b) => b.price - a.price);
        return mayorAMenor;
    }
    else if (op === 'PA') {
        const menorAMayor = dataCopy.sort((a, b) => a.price - b.price);
        return menorAMayor;
    }
    else if (op === 'FD') {
        const masReciente = dataCopy.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        return masReciente;
    }
    else if (op === 'FA') {
        const masAntiguo = dataCopy.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
        return masAntiguo;
    }
}

export default order;
