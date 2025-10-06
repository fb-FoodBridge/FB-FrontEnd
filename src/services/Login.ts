import { api } from "./DATABASE_URL"

export function Login(){
    try{
        const response = api.post('/merchant',{
            
        })
    }catch(error){
        console.log(error)
    }
}