
// export default function myFunc(){
    
// }

export default function getDatafromLs (){
    let Data =  localStorage.getItem('books')
    return Data ?  JSON.parse(Data) : []
     
 }