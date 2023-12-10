/* import { data } from '../api/data'; */

const filter = (data, types) => {

    if(types.includes('all')) return data;

    const gamesFiltered = data.filter(game => types.some(type => game.genre.includes(type)));
    return gamesFiltered;
};

export default filter;
