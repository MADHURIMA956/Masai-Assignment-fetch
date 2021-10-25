
    //--------------log in and sign up scripts ------------------------

    // sign up

    
    //https://github.com/masai-school/api-mocker/wiki/Authentication-API --link
    
    function signup(e) {
        e.preventDefault();

        let form = document.getElementById("signup-form")
        
        let user_data = {
            name : form.name.value,
            email : form.email.value,
            password : form.password.value,
            username : form.username.value,
            mobile : form.mobile.value,
            description : form.description.value,
        };
        console.log( user_data);

        user_data = JSON.stringify(user_data);

        fetch("https://masai-api-mocker.herokuapp.com/auth/register" ,{
            method : 'POST',
            body:user_data,
            headers:{
                'Content-Type' : 'application/json',
            },
        })
        .then((res)=>{
            return res.json();

        })
        .then((res)=>{
           console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        });


    }

// login -------------

function login(e) {
    e.preventDefault();

    let form = document.getElementById("login_form")

    let user_data = {
    
        password : form.pass.value,
        username : form.user.value,
        
    };


 let data_to_send = JSON.stringify(user_data);
 //console.log(data_to_send)

 fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
    
    method:'POST',
    body: data_to_send,
    headers:{
            'Content-Type' : 'application/json',
    },
 })
 .then((res)=>{
        return res.json();

    })
    .then((res)=>{
       console.log(res);
       fetchmyData(user_data.username,res.token);
    })
    .catch((err)=>{
        console.log(err)
    });

}


function fetchmyData(username,token) {
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
    
    headers:{
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`,
    },
 })
 .then((res)=>{
        return res.json();

    })
    .then((res)=>{
       console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    });

}