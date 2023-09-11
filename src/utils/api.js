export function sendData(data) {
    
    const apiUrl = process.env.REACT_APP_API_URL;

    const requestOptions = {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
    }

    return fetch(apiUrl, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo completar la solicitud');
        }
        return response.json();
    })
    .then(data => {
        return data; 
      })
    .catch(error => {
        throw new Error(error.message);
    });
};