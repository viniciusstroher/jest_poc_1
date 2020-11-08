export default function(){
    return new Promise((resolve,reject) => {
        try{
            resolve(true)
        }catch(err){
            throw new Error(err)
        }
    })
}