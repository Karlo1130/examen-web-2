const button = document.getElementById('button');

class User{
    
    constructor(names, lastnames, email, phoneNumber, addres, password){
        this.names       = names;
        this.lastnames   = lastnames;
        this.email       = email;
        this.phoneNumber = phoneNumber;
        this.addres      = addres;
        this.password    = password;
        
        this.shoppingCart = [];
        this.history = [];
    }
}

usersList = [];

function updateLocalStorage() {
    localStorage.setItem('usersList', JSON.stringify(usersList));
}

function saveUser(userStorage) {
    localStorage.setItem('User', JSON.stringify(userStorage));
}

function addUser(){
    const names = document.getElementById('names');
    const lastnames = document.getElementById('lastnames');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phoneNumber');
    const addres = document.getElementById('addres');
    const password = document.getElementById('password');
    const rPassword = document.getElementById('rPassword');

    let emailMatch;
    
    usersList.forEach(user => {
        if(user.email == email.value){
            alert('Ya existe una cuenta con este correo');
            emailMatch = true;
            return;
        }
        
    })

    if(emailMatch){
        emailMatch = false;
        return;
    }

    if(password.value == rPassword.value){
        const user = new User(
            names.value,
            lastnames.value,
            email.value,
            phoneNumber.value,
            addres.value,
            password.value,
        )

        usersList.push(user);

        
        saveUser(user)
        updateLocalStorage();
        alert('Cuenta correctamente registrada');
        window.location.href = "index.html";
    } else {
        alert('Las contraseÃ±as no coinciden');
    }

    console.log(usersList);

}


button.addEventListener('click', () => addUser());

window.addEventListener('load', () => {
    const storedUsersList = localStorage.getItem('usersList');
    if (storedUsersList) {
        usersList = JSON.parse(storedUsersList);
    }

    console.log(usersList);
});