const phoneButton = document.getElementById('addPhoneButton');
const shoesButton = document.getElementById('addShoesButton');
const televisionButton = document.getElementById('addTelevisionButton');
const blenderButton = document.getElementById('addBlenderButton');
const mattresButton = document.getElementById('addMattressButton');

window.addEventListener('load', () => { 

    const userAccount = localStorage.getItem('User')
    if (userAccount) {
        user = JSON.parse(userAccount);
    }

    console.log(user);

});

function updateLocalStorage() {
    localStorage.setItem('User', JSON.stringify(user));
}

function addPhoneToShoppingCart(){
    shoppingCartList = user.shoppingCart;

    (shoppingCartList.includes('phone'))
    ?alert('Este item ya se encuentra en tu carrito')
    :shoppingCartList.push('phone');

    updateLocalStorage()
    console.log(shoppingCartList);
}
phoneButton.addEventListener('click', () => addPhoneToShoppingCart());


function addItemToShoppingCart(item){
    shoppingCartList = user.shoppingCart;

    (shoppingCartList.includes(item))
    ?alert('Este item ya se encuentra en tu carrito')
    :shoppingCartList.push(item);

    updateLocalStorage()
    console.log(shoppingCartList);
}

phoneButton.addEventListener('click', () => addItemToShoppingCart('phone'));
shoesButton.addEventListener('click', () => addItemToShoppingCart('shoes'));
televisionButton.addEventListener('click', () => addItemToShoppingCart('television'));
blenderButton.addEventListener('click', () => addItemToShoppingCart('blender'));
mattresButton.addEventListener('click', () => addItemToShoppingCart('mattres'));

