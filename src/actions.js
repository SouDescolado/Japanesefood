import store from "./store";

/**************************************************Inicio Haidy*********************************************************/
export const addCart = (index) =>{
 let newCart = [...store.getState().cart]

     for(let i in newCart) {
        let id = newCart[i].id;

        if(index===id){
            newCart[i].quantity = newCart[i].quantity + 1;
            store.setState({
                cart : newCart
           })
            return;
        } 
    }
        newCart.push({
            id : index,
            quantity : 1
        })

        store.setState({
             cart : newCart
        })
    console.log(store.getState().cart);
}



/**************************************************Fin Haidy*********************************************************/

/************************SOLI-inicio****************************/

export const getInfoProduct=(id)=>{
    let prod = store.getState().food[id];
    return prod;
}
export const addPrices=()=>{
    let sum=0;
    for(var i of store.getState().cart){
        let prod = store.getState().food[i.id];
        sum+=(prod.price*i.quantity);
    }
    return sum;
}
export const emptyCart=()=>{
    console.log("aaaaaaaa")
    store.setState({
        cart:[],
    })
}

/************************SOLI-fin****************************/

/* parte janeth-susy */


export const sumPrice = () =>{
    let c = 0;
    for(var i of store.getState().cart){
        let prod = store.getState().food[i.id];
        c +=(prod.price * i.quantity);
    }
    return c;
}

/****************************/
export const changeSelectedFood=(index)=>{
    console.log("sad",index)
    store.setState({
        selectedFood:index
    })
}

export const setQuantity = (id,value) =>{
    let newCart = [...store.getState().cart]
    for (var i of newCart){
        if (i.id == id){
            i.quantity = value;
            store.setState({
                cart : newCart
            })
            break;
        }
    }
} 