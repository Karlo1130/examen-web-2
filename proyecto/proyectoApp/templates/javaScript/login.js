
const button = document.getElementById('buttonLogin');

usersList = [];

function isEqual(emailForm, passwordForm, userStorage){
    if(emailForm == userStorage.email
    && passwordForm == userStorage.password){
        updateLocalStorage(userStorage);
        return true;
    }else{
        return false;
    }
}

function updateLocalStorage(userStorage) {
    localStorage.setItem('User', JSON.stringify(userStorage));
}

function verification(){

    const email = document.getElementById('emailLogin');
    const password = document.getElementById('passwordLogin');

    let acceptation = false;

    for (let i = 0; i < usersList.length; i++) {
        const user = usersList[i];
        
        if(isEqual(email.value, password.value, user)){
            acceptation = true;
            break;
        }
    }

    return acceptation;
} 


function login(){

    (verification())
    ? window.location.href = "index.html"
    : alert('Correo o contraseña incorrectos');
}

button.addEventListener('click', () => login());

window.addEventListener('load', () => {
    const storedUsersList = localStorage.getItem('usersList');
    if (storedUsersList) {
        usersList = JSON.parse(storedUsersList);
    }

    console.log(usersList);
});