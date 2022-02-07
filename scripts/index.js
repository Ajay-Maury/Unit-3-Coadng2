let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
async function show_menu()
{
    try{        
    let u_data = await fetch(url);
    let data = await u_data.json();
    // console.log(data.meals[0])
    display_data(data.meals);
    }
    catch(err)
    {
        console.log("er",err)
    }
}

show_menu();

function display_data(data)
{
    // console.log(data)
    data.forEach(element => {
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
        price.innerText = `${(Math.random()*500).toFixed(2)} ₹`;

        let btn = document.createElement("button")
        btn.setAttribute("id","addtocart")
        btn.innerText = "Add to Cart";
        btn.addEventListener("click",addCart)

        box.append(img_div,name,price,btn)
        document.getElementById("menu").append(box)
        

        c_cout();

        function addCart()
        {
            let c_data = JSON.parse(localStorage.getItem("cart")) || [];
            c_data.push(element)
            console.log(c_data)

            localStorage.setItem("cart",JSON.stringify(c_data))
            c_cout();
        }
    });

    function c_cout()
    {
        document.getElementById("count").innerText = `Items in cart ${(c_data = JSON.parse(localStorage.getItem("cart")) || []).length}`
    }
}


