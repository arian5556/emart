const storeData=(id)=>{
    const storage=localStorage.getItem("shopping-cart")
    let cartObj={};
    if(storage){
       cartObj=JSON.parse(storage)
       if(cartObj[id]){
          cartObj[id]+=1
       }
       else{
           cartObj[id]=1
       }
    }
    else{
        cartObj[id]=1
    }
    localStorage.setItem("shopping-cart",JSON.stringify(cartObj))
}

const displayData=()=>{
    const storage=localStorage.getItem("shopping-cart")
    return storage?JSON.parse(storage):{};
}
export{storeData,displayData}