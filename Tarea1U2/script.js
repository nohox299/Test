//Login Function 

function getForm(){
    const user = document.querySelector("#user")
    const password = document.querySelector("#password")

    if(user.value.trim() === "" || password.value.trim() === ""){
        alert("Complete los campos")
        return ;
    }

    const data = {
        usuario: user.value, 
        contrasenia: password.value
    }

    connectionApi(data)

}

function connectionApi(data){
    const p = document.querySelector("#message")
    const btn = document.querySelector("#btnlogin")
    btn.style.display = "none"
    p.textContent = "Validando usuario..."
    p.style.color = "black"
    p.style.fontSize = "30px"
    p.style.marginTop = "20px"


    fetch('https://dummyjson.com/auth/login',{
        "method": "POST",
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify({
            "username": data.usuario,
            "password": data.contrasenia
        })
    })
        .then(response => response.json())
        .then((e) =>{
            console.log(e)

            if(!e?.token){
                setTimeout(() => {
                    p.style.color = "red"
                    p.textContent = "Usuario o contraseña incorrectos"
                    p.style.fontSize = "30px"
                    p.style.marginTop = "20px"
                    p.style.display = "block"
                    btn.style.display = "inline-block"
                }, 3000)

                return
            }
            
            location.href = window.open("https://www.google.com")

            console.log(e)
        })
        .catch(err =>{
            console.log(err)
        })
    }