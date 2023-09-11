const patternsEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const patternsString = /^[A-Za-z\u00C0-\u017F\s]+$/;
const patternsCellphone = /^[0-9]*$/;

export const formValidation = (full_name, email, cellphone, subject, message) => {
    if (full_name.trim().length <= 5 || full_name.trim().length >= 30 || !patternsString.test(full_name.trim())) {
        return {error: true, message: 'Nombre inválido.'};
    }
    if (email.trim().length <= 5 || email.trim().length >= 40 ||!patternsEmail.test(email.trim())) {
        return {error: true, message: 'Correo electrónico inválido.'};
    }
    if (String(cellphone).trim().length <= 6 || String(cellphone).trim().length >= 10 || !patternsCellphone.test(cellphone)) {
        return {error: true, message: 'Número de teléfono inválido.'};
    }
    if (subject.trim().length <= 4 || subject.trim().length >= 40) {
        return {error: true, message: 'Asunto inválido.'};
    }
    if (message.trim().length <= 30) {
        return {error: true, message: 'Mensaje inválido.'};
    }

    return {error: false};
};