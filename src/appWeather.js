const request = require("request");


// London,United Kingdom
const appWeather = (url,callback)=>{
    request({url:url,json:true},

        (error,response,)=>{
console.log(error)
console.log(response.body)
            if(error){
                console.log("unable to connect")
            }else {
                //  const data = JSON.parse(response.body)
                if(!response.body.success) {
                    data = response.body.current.weather_descriptions[0] + ". it is currently " + response.body.current.temperature + " degress out. it feels like " + response.body.current.feelslike + " degress out."
                }
                else {
                    data ="error"
                }

                callback(data)
            }


        },)
}
// openW(url,(data)=>{
//     console.log(data)
// })

module.exports= appWeather