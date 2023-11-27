const validation = (user) => {
    const userNameRegex = /^[a-zA-Z0-9]{6,25}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^[a-zA-Z0-9]{6,15}$/;

    if (!userNameRegex.test(user.userName) || !emailRegex.test(user.email) || !passwordRegex.test(user.password) || user.password !== user.repeatPassword) {
        return 'Error al crear usuario';
    }

    return '';
};

export default validation;
