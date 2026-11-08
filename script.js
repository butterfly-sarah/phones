var phones=[
    {name:"samsung",description:"",price:"100$",img:"assets/samsung\ s26\ ultra.jpg"},
    {name:"iphone",description:"",price:"100$",img:"assets/iphone\ 17\ pro\ max.jpg"},
    {name:"vivo",description:"",price:"100$",img:"assets/vivo\ x300\ ultra.jpg"},
    {name:"oppo",description:"",price:"100$",img:"assets/oppo\ find\ x9\ ultra.jpg"},
    {name:"xiaomi",description:"",price:"100$",img:"assets/xiaomi\ 17\ ultra.jpg"},
    {name:"huawei",description:"",price:"100$",img:"assets/Huawei-Nova-16s-Pro-5G-Crystel-2.jpg"},
]
var cart=JSON.parse(localStorage.getItem(cart))||[];
function increase(phone){
    const num=document.getElementById("num");
    num.style.display="inline-block";
    num.innerHTML=parseInt(num.innerHTML)+1;
    cart.push(phone);
    localStorage.setItem("cart",JSON.stringify(cart));
}
var container=document.getElementById("container");
phones.forEach(phone => {
    let currentphone=phone;
    var div=document.createElement("div");
    div.className="phonediv";
    var img=document.createElement("img");
    img.className="phoneimg";
    img.src=phone.img;
    div.appendChild(img);
    var name=document.createElement("h3");
    name.className="phonename";
    name.innerHTML=phone.name;
    div.appendChild(name);
    var description=document.createElement("p");
    description.className="phonedescription";
    description.innerHTML=phone.description;
    div.appendChild(description)
    var price=document.createElement("h3");
    price.className="phoneprice";
    price.innerHTML=phone.price;
    div.appendChild(price);
    var btn=document.createElement("button");
    btn.addEventListener("click",()=>increase(currentphone));
    btn.className="addbtn";
    btn.innerHTML="Add To Cart";
    div.appendChild(btn);
    container.appendChild(div);
});
