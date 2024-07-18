document.getElementById('dataform').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const responseMessage = document.getElementById('responseMessage');
    const formDiv = document.getElementById('formDiv');
    const messageDiv = document.getElementById('messageDiv');
    const msgImg = document.getElementById('msgImg');
    
    const data = {name,email,phone,password}
    
    try{
        const response = await fetch("http://localhost:5000/api/user",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        if(response.ok){
            const data = await response.json()
            formDiv.style.display="none"
            messageDiv.style.display="block"
            msgImg.src="./assets/images/check.png"
            responseMessage.innerText=data.message
            console.log("user added successfully")
            document.getElementById('dataform').reset()
        }
        else{
            const data = await response.json()
            formDiv.style.display="none"
            messageDiv.style.display="block"
            console.log("Failed to add user")
            msgImg.src="./assets/images/warning.png"
            responseMessage.innerText=data.message
            /* document.getElementById('dataform').reset() */
        }
    }
    catch(err){
        console.log("Error",err)
    }
})

document.getElementById('proceedBtn').addEventListener('click',()=>{
    const formDiv = document.getElementById('formDiv');
    const messageDiv = document.getElementById('messageDiv');

    formDiv.style.display="block"
    messageDiv.style.display="none"

})

document.getElementById('showPwd').addEventListener('click',()=>{
    const password = document.getElementById('password');
    const showPwd = document.getElementById('showPwd');
    if(password.type === "password"){
        password.type = "text"
       /*  showPwd.innerText = "Hide" */
        }
        else{
            password.type = "password"
         /*    showPwd.innerText = "Show" */
            }
            
})