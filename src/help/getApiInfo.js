const API_KEY = '8631c28fa310f08234ee3ecd691169fc'
const getApiInfo = async () =>{

    const data = await ( await fetch(`https://api.openweathermap.org/data/2.5/weather?q={'Mendoza'}&appid={API key}`).json()
        console.log(data)
    return data
    
}

   export default getApiInfo    