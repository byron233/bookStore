var carBtn = document.getElementById('carBtn');
var shopMenu = document.getElementById('shopMenu');


//Los siguientes enventos corresponden al menu del carrito de compras
carBtn.addEventListener('click', () =>{
    shopMenu.style.display = 'block';
    shopMenu.style.cursor = 'pointer';
});

shopMenu.addEventListener('click', () =>{
    shopMenu.style.display = 'none';
});