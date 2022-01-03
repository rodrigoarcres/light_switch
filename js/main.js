var light = false;
function switcher(){
    if(light == false){
        light = true;
        document.getElementById("name").innerHTML = "ON";
        document.body.style.background = "rgb(233, 233, 233)";
        document.documentElement.style.setProperty('--borda-switch', '#000');
        document.documentElement.style.setProperty('--background-switch', '#505050');
        
    } else {
        light = false;
        document.getElementById("name").innerHTML = "OFF";
        document.body.style.background = "rgb(29, 29, 29)";
        document.documentElement.style.setProperty('--borda-switch', '#8f8f8f');
        document.documentElement.style.setProperty('--background-switch', '#FFF');
    }
}