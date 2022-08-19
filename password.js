let password = 'Money'
if(password.length = /^[0-9a-zA-Z]){
    console.log('success') 
} else if(password.length < 10){
    console.log('failure')
} else if(password.length > 10){
    console.log('success')
}