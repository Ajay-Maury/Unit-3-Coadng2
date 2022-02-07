function display_data(data)
{
    let total = 0;
    document.getElementById("cart").innerHTML="";
    // console.log(data)
    data.map(function (element,index,arr) {
        // console.log(element)      

        let box = document.createElement("div")
        let img_div = document.createElement("div")
        let image = document.createElement("img");
        image.src = element.strMealThumb
        img_div.setAttribute("class","img_div")
        img_div.append(image)

        let name = document.createElement("p")
        name.innerText= element.strMeal;

        let price = document.createElement("p")
        let p = (Math.random()*500).toFixed(2);
        total = total + Number(p);
        price.innerText = `${p} ₹`

        let btn = document.createElement("button")
        btn.setAttribute("id","remove")
        btn.innerText = "Remove";
        btn.addEventListener("click",function()
        {
            console.log(index,data)
            data.splice(index,1)
            console.log(data)
            display_data(data);
        })

        box.append(img_div,name,price,btn)
        document.getElementById("cart").append(box)

        // console.log(index,arr)
        
    })
    document.getElementById("total").innerText = `Total Price  ${total.toFixed(2)}`
}


let data = JSON.parse(localStorage.getItem("cart")) || [];
display_data(data);