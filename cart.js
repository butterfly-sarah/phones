var cartproducts=document.getElementById("cartproducts");
var products=JSON.parse(localStorage.getItem("cart"))||[];
function deleteitem(item){
    products.forEach(product => {
        switch(item){
            case(product.name):
                var x=products.slice(0,products.indexOf("product"));
                var y=products.slice((products.indexOf("product")+1),products.length);
                products=x.concat(y);
                console.log(x);
                console.log(y);
                break;
        }
    }
)
}
products.forEach(element => {
    var div=document.createElement("div");
    div.className="cartproduct";
    var image=document.createElement("img");
    image.src="../"+element.img;
    var innerdiv=document.createElement("div");
    var h2=document.createElement("h2");
    h2.innerHTML=element.name;
    var p=document.createElement("p");
    p.innerHTML=element.description;
    var p2=document.createElement("p");
    p2.innerHTML=element.price;
    var delbtn=document.createElement("button");
    delbtn.innerHTML="delete";
    delbtn.className="del";
    delbtn.addEventListener("click",()=>deleteitem(element.name))
    innerdiv.appendChild(h2);
    innerdiv.appendChild(p);
    innerdiv.appendChild(p2);
    div.appendChild(image);
    div.appendChild(innerdiv);
    div.appendChild(delbtn);
    cartproducts.appendChild(div);
});
