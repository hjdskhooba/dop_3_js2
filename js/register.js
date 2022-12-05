let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    let userData = {
        email: e.target[0].value,
        login: e.target[1].value,
        password: e.target[2].value
    }
    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then((res) => {
        if(res.ok){
            alert('You have successfuly created an accaunt')
        }else{
            alert('Error creating account');
        }
        res.json()
    }).catch(err => console.log(err))
})