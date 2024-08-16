function toggleMode(){

    const html = document.documentElement;
    html.classList.toggle("light")


    const img = document.querySelector("#avatar img")

    if(html.classList.contains("light")){
        img.setAttribute('src', './src/img/foto-perfil-light.png')
    }else{
        img.setAttribute('src', './src/img/foto-perfil.jpg')
    }



}