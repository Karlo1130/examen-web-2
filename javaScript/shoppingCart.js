const buyButton = document.getElementById('buy');
const contendor= document.getElementById('whiteContainerDiv');

window.addEventListener('load', () => { 

    const userAccount = localStorage.getItem('User')
    if (userAccount) {
        user = JSON.parse(userAccount);
    }

    console.log(user);
    console.log(user.shoppingCart);

    printItems();

});

class ItemHistory{
    constructor(name, howMany){
        this.name = name;
        this.howMany = howMany;
    }
}

itemHistory = []

function uptdateUser(userStorage) {
    localStorage.setItem('User', JSON.stringify(userStorage));
}

function buyAll(){
    cart = user.shoppingCart;
    cart.forEach(item => {
        itemHistory.push(new ItemHistory(item, 1));
    });

    user.history = itemHistory;
    console.log(user)
    uptdateUser(user);
}

function printItems (){
    cart= user.shoppingCart;
    cart.forEach(element => {
       contendor.innerHTML=
            `<div class="shoppingItemDiv">
    
            <!--div para poner un div divisior dentro del item-->
            <div class="separatorDiv">

                <img src="assets/img/assetsHistory/${cart}.png">

                <!--div para la informacion de la compra y opciones-->
                <div class="itemInfoDiv">

                    <!--div para los elementos superiores-->
                    <div class="topInfoDiv">
                        <p>
                            ${cart}
                        </p>

                        <!--div para la caja del numero de items a comprar-->
                        <div class="itemsNumberDiv">
                            <p id="sign">-</p>
                            <p id="number">1</p>
                            <p id="sign">+</p>
                        </div>

                        <p>$money</p>
                    </div>

                    <!--div para los elementos inferiores-->
                    <div class="bottomInfoDiv">
                        <p id="redP">Eliminar</p>
                        <div id="VerticalLaneDiv"></div>
                        <p id="blueP">Comprar ahora</p>
                    </div>
                </div>
            </div>

            <div id="laneDiv"></div>

        </div>
            `
        
    });

}


buy.addEventListener('click', () => buyAll());