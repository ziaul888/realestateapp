import axios from "axios"


 export const baseUrl="https://bayut.p.rapidapi.com"


// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '8ed04a4cb1mshdaf9218b383c39ap1bece1jsn161012946b6d'
//   }

export const fetchApi =async (url)=>{
 const {data}= await axios.get((url),{
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '8ed04a4cb1mshdaf9218b383c39ap1bece1jsn161012946b6d'
      }
 })
 return data
}