const FormEl=document.getElementById("form")
const FoodName=document.getElementById("foodName")
const FoodSum=document.getElementById("foodSum")
const FoodCooker=document.getElementById("foodCooker")
const Restaurant=document.getElementById("restaurant")
const submitBtn=document.getElementById("submit")
const foodList=document.getElementById("foodList")
const imageUpload = document.getElementById("imageUpload")


function subFun(e) {
    e.preventDefault();
    if(FoodName.value.replace(/ /g, "").length>=3 && FoodSum.value.replace(/ /g, "").length>=1 &&  imageUpload.value.replace(/ /g, "").length>=5 && Restaurant.value.replace(/ /g, "").length>=2){
        const foodCard = document.createElement("div");
        foodCard.className = "foodCard"
        foodList.prepend(foodCard);

//Control Btns
{
        const foodControlWrapper = document.createElement("div")
        foodControlWrapper.className = "foodControlWrapper"
        foodCard.prepend(foodControlWrapper)

        const foodComplateRemove = document.createElement("button")
        foodComplateRemove.className = "foodComplateRemove"
        foodControlWrapper.prepend(foodComplateRemove)
        foodComplateRemove.innerHTML="Taom tugadi"
        foodComplateRemove.addEventListener("click",()=>{
            foodCard.style.backgroundColor=""
            foodComplate.style.display="block"
            foodComplateRemove.style.display="none"
        })

        const foodComplate = document.createElement("button")
        foodComplate.className = "foodComplate"
        foodControlWrapper.prepend(foodComplate)
        foodComplate.innerHTML="Taom tugadi"
        foodComplate.addEventListener("click",()=>{
            foodCard.style.backgroundColor="#C9F4A7"
            foodComplate.style.display="none"
            foodComplateRemove.style.display="block"
        })
        



        const foodDate = document.createElement("button")
        foodDate.className = "foodDate"
        foodControlWrapper.prepend(foodDate)
        const datee= new Date()
        foodDate.innerHTML=datee.getMonth() + 1 +"/"+datee.getDate()+"/"+datee.getFullYear()



        const foodRemove = document.createElement("button")
        foodRemove.className = "foodRemove"
        foodControlWrapper.prepend(foodRemove)
        foodRemove.innerHTML="Taomni o’chirish"
        foodRemove.addEventListener("click",()=>{
            let cheskRemove=confirm("Are you sure to delete ?")
            if(cheskRemove){
                foodCard.remove()
            }
        })
}
//END Control Btns

//foodDescription
{
        

        const foodDescription = document.createElement("div")
        foodDescription.className = "foodDescription"
        foodCard.prepend(foodDescription)

        //JOY

        const RestaurantWrapper=document.createElement("div")
        RestaurantWrapper.className="RestaurantWrapper"
        foodDescription.prepend(RestaurantWrapper)

        const RestaurantName=document.createElement("p")
        RestaurantName.className="RestaurantName"
        RestaurantWrapper.prepend(RestaurantName)
        RestaurantName.appendChild(document.createTextNode(Restaurant.value))


        const RestaurantNameEl=document.createElement("strong")
        RestaurantNameEl.className="RestaurantNameEl"
        RestaurantWrapper.prepend(RestaurantNameEl)
        RestaurantNameEl.appendChild(document.createTextNode("Taom restorani: "))


        //JOY

        //Oshpaz
        const foodcookerNameWrapper=document.createElement("div")
        foodcookerNameWrapper.className="foodcookerNameWrapper"
        foodDescription.prepend(foodcookerNameWrapper)

        const foodcookerName=document.createElement("p")
        foodcookerName.className="foodcookerName"
        foodcookerNameWrapper.prepend(foodcookerName)
        foodcookerName.appendChild(document.createTextNode(" " +FoodCooker.value))

        const foodcookerNameEl=document.createElement("strong")
        foodcookerNameEl.className="foodcookerNameEl"
        foodcookerNameWrapper.prepend(foodcookerNameEl)
        foodcookerNameEl.appendChild(document.createTextNode("Taom oshpazi: "+" "))

        //Oshpaz

        //Narxi

        const foodsumWrapper = document.createElement("div")
        foodsumWrapper.className = "foodsumWrapper"
        foodDescription.prepend(foodsumWrapper)
        
        const foodsumBold = document.createElement("strong")
        foodsumBold.className="foodsumBold"
        foodsumWrapper.prepend(foodsumBold)
        foodsumBold.appendChild(document.createTextNode("Taom narxi: $"+ FoodSum.value))

        //Narxi

        //Nomi
        const foodtitleWrapper = document.createElement("div")
        foodtitleWrapper.className = "foodtitleWrapper"
        foodDescription.prepend(foodtitleWrapper)

        const foodtitleEl = document.createElement("p");
        foodtitleEl.className = "foodtitleEl"
        foodtitleWrapper.prepend(foodtitleEl);
        foodtitleEl.appendChild(document.createTextNode(" " +FoodName.value))


        const foodtitleElBold=document.createElement("strong")
        foodtitleElBold.className="foodtitleElBold"
        foodtitleWrapper.prepend(foodtitleElBold);
        foodtitleElBold.appendChild(document.createTextNode("Taom nomi: "+ " "))

        //Nomi

    

}
//End foodDescription







{
        //IMG Upload

        imageUpload.accept="image/*"
        const dowloadImage=document.createElement("img")
        dowloadImage.className="dowloadImage"
        foodCard.prepend(dowloadImage)
        const [file] = imageUpload.files
        dowloadImage.src = URL.createObjectURL(file)

        //IMG Upload


        FoodName.value='';
        FoodSum.value=''
        FoodCooker.value=''
        Restaurant.value=''
}
    }
}

FormEl.addEventListener("submit",subFun)





























