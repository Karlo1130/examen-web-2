window.addEventListener('load', () => { 

    const userAccount = localStorage.getItem('User')
    if (userAccount) {
        user = JSON.parse(userAccount);
        console.log(user);
    }
    printItems();


});

function printItems (){
    items= user.history;
    items.forEach(item => {
        document.getElementById('whiteContainerDiv').innerHTML=
            `<div class="shoppingItemDiv">
    
            <!--div para poner un div divisior dentro del item-->
            <div class="separatorDiv">

                <img src="assets/img/assetsHistory/${item.name}.png">

                <!--div para la informacion de la compra y opciones-->
                <div class="itemInfoDiv">

                    <!--div para los elementos superiores-->
                    <div class="topInfoDiv">
                        <p>
                            ${item.name}
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