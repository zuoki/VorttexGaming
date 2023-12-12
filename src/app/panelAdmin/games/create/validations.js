export const validations = (name, value) => {

    switch (name) {
        case 'title':
            const regexTitle = /^[A-Za-z0-9:]+([A-Za-z0-9:]+)*$/;
            if(!regexTitle.test(value) || value.length > 39) return 'ERROR';
            break;

        case 'platform':
            break;

        case 'description':
            break;

        case 'genre':
            break;

        case 'releaseDate':
            break;

        case 'developer':
            break;

        case 'publishedBy':
            break;

        case 'size':
            break;

        case 'price':
            break;

        default:
            break;
    }

};

