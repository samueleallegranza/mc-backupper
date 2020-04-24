
const fetchAccounts = async (path, body) => {
    const response = await fetch('/api/accounts' + path, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
    return await response;
}

//Get all accounts from database
const getAllAccounts = async () => {
    const path = '/list';
    const body = {};
    const response = await fetchAccounts(path, body);
    if(response.status === 200){
        return response.json();
    }else{
        return null;
    }
}

//Insert new account into database
const createNewAccount = async (email, password) => {
    const path = '/new';
    const body = {email: email, password: password};
    const response = await fetchAccounts(path, body);
    if (response.status === 200) {
        return response.json();
    } else {
        return null;
    }
}

//Edit an account of the database
const editAccount = async (id, new_email, new_password) => {
    const path = '/edit';
    const body = {id: id, email: new_email, password: new_password};
    const response = await fetchAccounts(path, body);
    if(response.status === 200){
        return response.json();
    } else {
        return null;
    }
}

//Delete an account from the database
const deleteAccount = async (id) => {
    const path = '/delete';
    const body = {id: id};
    const response = await fetchAccounts(path, body);
    if(response.status === 200){
        return response.json();
    } else {
        return null;
    }
}


export { getAllAccounts };
export { createNewAccount };
export { editAccount };
export { deleteAccount };
