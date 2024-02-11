const button=document.querySelector("#button");
button.addEventListener("click",(e)=>
{
    const na=document.querySelector("#name");
    const cont=document.querySelector("#content");
    const n=na.value;
    const c=cont.value;
    const str=n.concat(" : ",c);
    const list=document.querySelector("#List");
    const Item = document.createElement("li");
    Item.textContent = str;
    const del=document.createElement("button");
    del.innerHTML = '<i class="fa fa-trash-alt"></i>';
    del.addEventListener("click",(e)=>{
        list.removeChild(Item);

    })
    Item.appendChild(del);
    list.appendChild(Item);
    

}

)
