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
            if (value.length > 699) return 'ERROR';
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
            const regexPublishedBy = /^[A-Za-z0-9\s:]+([A-Za-z0-9\s:]+)*$/;
            if (!regexPublishedBy.test(value) || value.length > 39) return 'ERROR';
            break;

        case 'video':
            if (value.length < 5) return null;
            if (!value.includes('embed')) return 'ERROR';
            break;

        case 'image':
            if (value.length < 8) return null;
            break;

        case 'wallpaper':
            if (value.length < 8) return null;
            break;

        case 'capture':
            if (value.length < 8) return null;
            break;

        case 'size':
            if (isNaN(value)) return 'ERROR';
            break;

        case 'price':
            if (isNaN(value) || value > 149) return 'ERROR';
            break;

        default:
            break;
    }

};

