$(document).ready(function(){
const products=[
{name:"New Balance 740",price:119,image :src="https://images.footlocker.com/is/image/FLEU/314216961004_01?wid=581&hei=581&fmt=png-alpha",genre:"homme"},
{name:"UGG Tasman Weather Hybrid",price:200,image: src="https://images.footlocker.com/is/image/FLEU/314626812904_01?wid=581&hei=581&fmt=png-alpha",genre:"homme"},
{name:"Nike Dunk Low",price:129,image: src="https://images.footlocker.com/is/image/FLEU/315347227902_01?wid=581&hei=581&fmt=png-alpha",genre:"femme"},
{name:"adidas Campus 00S",price:95,image:src="https://images.footlocker.com/is/image/FLEU/316705661904_01?wid=686&hei=686&fmt=png-alpha",genre:"femme"}
];

products.forEach(product => {
    $("#products").append(`
     <div class ="product">
     <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="addcart" name="${product.name}" data-price="${product.price}">Add to Cart</button>
                <button class="cancel" name="${product.name}" data-price="${product.price}">cancel</button>
            </div>
        `);
});
var total = 0
$(".addcart").click(function(){
    const price = parseFloat($(this).data("price"))
    total += price
    $(".add").text(total.toFixed(2));
})
$(".cart").click(function(){
    if(total===0){
        alert("buy something bro")
    }else {
        alert("our total is "+ total)
        total = 0 
    $(".add").text(total.toFixed(2))
    }
})
$(".cancel").click(function(){
    const price = parseFloat($(this).data("price"))
    if(total - price >0){
    total -=price
    $(".add").text(total.toFixed(2))
}else {
    total = 0
    $(".add").text(total.toFixed(2))
  
}
})














})