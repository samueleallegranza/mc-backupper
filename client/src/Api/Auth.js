// ----------------------------------------------------------------------------
//      Cookies

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
} 

// ----------------------------------------------------------------------------



// ----------------------------------------------------------------------------
//      Auth

const fetchLogin = async (username, password) => {
    // Default options are marked with *
    const response = await fetch('/api/auth/login', {
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
        body: JSON.stringify({ username: username, password: password }) // body data type must match "Content-Type" header
    });
    return await response.status;
}


//Converts status into boolean 
const parseStatus = (status) => {
    if (status === 200) {
        return true;        //Logged in correctly
    } else {
        return false;       //Not logged in!
    }
}


// Check for someone already logged in
const checkLogin = () => {
    return fetchLogin(getCookie('username'), getCookie('password'));
};


// Login check for the first time
const newLogin = (username, password) => {
    const status = fetchLogin(username, password);
    return status;
}

// ----------------------------------------------------------------------------

export { checkLogin };
export { newLogin };
export { parseStatus };
export { getCookie };