// const URL = "http://localhost:8000"
const URL = "https://dfasalevels.pythonanywhere.com"

const LOGIN_URL = `${URL}/api/login`
const REGISTER_URL = `${URL}/api/register`
const HOME_URL = `${URL}/api/home`

function redirectToDashboard(){
    return true
}
console.log("hello")
var registerForm = document.getElementById("form")
var form = document.getElementById("formk")

async function sendRequest(url,formData){

    try{

       const response = await fetch(url,{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(formData)  
        })

        return response.json()
    }catch(err){
        console.log(err)

    }



}

if (form){

    form.addEventListener("submit",async function(evt){
    
        let invalue = {}
        evt.preventDefault()
        let inputElements = form.querySelectorAll("input, textarea");
        inputElements.forEach(function(input) {
            const vv = input.value
            const vn = input.name
            invalue[vn] =  vv
            
        });
        
         invalue = JSON.stringify(invalue)
         console.log(invalue) 
         await sendRequest(HOME_URL,invalue)
         window.location.replace("/");
        
     
    
    }
    
    )
}


if (registerForm){

    registerForm.addEventListener("submit",async function(evt){
    
        let invalue = {}
        evt.preventDefault()
        let inputElements = registerForm.querySelectorAll("input, textarea");
        inputElements.forEach(function(input) {
            const vv = input.value
            const vn = input.name
            invalue[vn] =  vv
            
        });
        
         invalue = JSON.stringify(invalue)
         console.log(invalue) 
         console.log("sending request...........") 
    
         await sendRequest(REGISTER_URL,invalue)
         alert("Registeration successful")
         window.location.replace("/");

    
        
     
    
    }
    
    )

    
} 







