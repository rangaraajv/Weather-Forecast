let button = document.getElementById('btn');

function forecast()
{
    let inputValue = document.getElementById("inputValue").value;
    let input = inputValue.charAt(0).toUpperCase() + inputValue.substr(1).toLowerCase();
    //console.log(inputValue);
    fetch("https://api.weatherapi.com/v1/current.json?key=7666e52c7f1444a8acd60102221904&q="+inputValue+"&aqi=no")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.error)
        {
            //console.log("Error");
            let err = data['error']['message'];

            document.getElementById("name").innerHTML = "";
            document.getElementById("country").innerHTML = "";
            document.getElementById("des").innerHTML = err;
            document.getElementById("tempf").innerHTML = "";
            document.getElementById("tempc").innerHTML = "";  

        }
        else
        {
            //console.log(data.location.name);
            if(data.location.name === input)
            {
                let name = data['location']['name']+","+data['location']['region'];
                let country = data['location']['country'];
                let des = data['current']['condition']['text'];
                let tempf = "Temperature (in fahrenheit): "+ data['current']['temp_f']+"°F";
                let tempc = "Temperature (in celsius): "+ data['current']['temp_c']+"°C";

                document.getElementById("name").innerHTML = name;
                document.getElementById("country").innerHTML = country;
                document.getElementById("des").innerHTML = des;
                document.getElementById("tempf").innerHTML = tempf;
                document.getElementById("tempc").innerHTML = tempc;
            }

        }
        
    })
        
}




