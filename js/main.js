const btnSwtch = document.querySelector('#switch');

btnSwtch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwtch.classList.toggle('active');

    //Guardamos el modo nocturno en localstorage
    //para que cuando se actualice la pagina no 
    //no se quite el modo nocturno
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode","true");
    }else{
        localStorage.setItem("dark-mode","false");
    }
});

//obtener el modo actual
if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwtch.classList.add('active');
}else{
    document.body.classList.remove("dark");
    btnSwtch.classList.remove('active');
}