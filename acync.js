// creating an ice cream business using async await callBack
let stock = {
    fruits : ["strawberry", "banana", "grapes", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "strick"],
    toppings : ["chocolate", "peanuts"]
}
    


// arrow function
let order = (fruit_name,call_production)=>{  
    setTimeout(()=>{
        console.log(`${stock.fruits[fruit_name]} was seleted`);
        call_production()
    },2000)
    
};
        // callBack hell
let production = ()=>{
   setTimeout(()=>{
    console.log("production has started");

    setTimeout(()=>{
        console.log("the friut has been chopped")

        setTimeout(()=>{
            console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`)

            setTimeout(()=>{
                console.log("the  machine was started")

                setTimeout(()=>{
                    console.log(`ice cream placed on ${stock.holder[0]}`)

                    setTimeout(()=>{
                        console.log(`${stock.toppings[0]} was added as topping`)

                        setTimeout(()=>{
                            console.log("ice cream has being done  ")
                            console.log("you can have ur ice cream")
                        },2000)
                    },3000)
                },2000)
            },1000)
        },1000)
    },2000)
   }); 

};
order(2,production)



// Promises

let is_shop_open = true;

let orderP = (time,work) =>{
    return new Promise ((resolve, reject)=>{
        if(is_shop_open){
            setTimeout( ()=>{
                resolve( work() )
            },time)
            
        }
        else{
            reject(console.log("our shop is closed"))
        }
    })

}
orderP(2000,()=>console.log(`${stock.fruits[0]} was selected`))

// Promise chining
.then(()=>{
    return orderP(0, ()=>console.log("production has started"))
})

.then(()=>{
    return orderP(2000, ()=>console.log("the fruit was chopped"))
})

.then(()=>{
    return orderP(1000, ()=>console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`))
})

.then(()=>{
    return orderP(1000, ()=>console.log("start the machine"))
})

.then(()=>{
    return orderP(2000, ()=>console.log(`the ice was place on a ${stock.holder[0]}`))
})

.then(()=>{
    return orderP(3000, ()=>console.log(`${stock.toppings[1]} was added as topping`))
})

.then(()=>{
    return orderP(2000, ()=>console.log("the ice is done"))
})

// Error handling
.catch(()=>(console.log("sorry for the inconvinece")))


// finally handler: it will run weather the shop is open or close
.finally(()=>console.log("they end it shop is closed"))

// welcome to async await 

// first we need to known the different between Promise and async await


let shop_open = true;

function time(ms){
    return new Promise((resolve, reject)=>{
        if(shop_open){
            setTimeout(resolve,ms)
        }else{
           reject(console.log("shop is closed")) 
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stock.fruits[0]}`)

        console.log("Start the production")

        await time (2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`)

        await time (1000)
        console.log("start the machine")

        await time(2000)
        console.log(`was placed on ${stock.holder[1]}`)

        await time(3000)
        console.log(`${stock.toppings[1]} was added as toppings`)

        await time(2000)
        console.log("serve ice cream")
    }
    catch(error){
        console.log("customer left", error)
    }
    finally{
        console.log("they are close for today")
    }
}

kitchen();