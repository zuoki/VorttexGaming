export const validations = (name, value) => {

    switch (name) {
        case 'title':
            const regexTitle = /^[A-Za-z0-9\s:]+([A-Za-z0-9\s:]+)*$/;
            if (!regexTitle.test(value) || value.length > 39) return 'ERROR';
            break;

        case 'platform':
            const regexPlatform = /^[A-Za-z0-9\s:]+([A-Za-z0-9\s:]+)*$/;
            if (!regexPlatform.test(value) || value.length > 39) return 'ERROR';
            break;

        case 'description':
            const regexDescription = /^[A-Za-z0-9\s:]+([A-Za-z0-9\s:]+)*$/;
            if (!regexDescription.test(value) || value.length > 399) return 'ERROR';
            break;

        case 'genre':
            const regexGenre = /^[A-Za-z0-9\s:]+([A-Za-z0-9\s:]+)*$/;
            if (!regexGenre.test(value) || value.length > 39) return 'ERROR';
            break;

        case 'developer':
            const regexDeveloper = /^[A-Za-z0-9\s:]+([A-Za-z0-9\s:]+)*$/;
            if (!regexDeveloper.test(value) || value.length > 39) return 'ERROR';
            break;

        case 'publishedBy':
            const regexPublishedBy= /^[A-Za-z0-9\s:]+([A-Za-z0-9\s:]+)*$/;
            if (!regexPublishedBy.test(value) || value.length > 39) return 'ERROR';
            break;

        case 'size':
            if(isNaN(value)) return 'ERROR';
            break;

        case 'price':
            if(isNaN(value) || value > 149) return 'ERROR';
            break;

        default:
            break;
    }

};

