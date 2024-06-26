//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

arr = [null,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

const sheepCount = (x) => {
    let count = x.reduce((acc,val)=>{
        return val ? acc+1 : acc
    },0)
    return count

}
console.log(sheepCount(arr))