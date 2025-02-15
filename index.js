const registerbutton = document.querySelector('.register');
const maindiv = document.querySelector('.main-div ')
const input_box = document.querySelector('.box')
const input_box_input = document.querySelector('#input_for_name')
const input_submit = document.querySelector('.input_submit')
var button = document.querySelector('.r-b')
let compliment  = document.querySelector('.s-p1 ')
let backgroundMusic=document.querySelector('#background-music')








const userdata = {
    username:'empty',
    highstScore:0,
    currentScor:0,
    totalnoq:0
    
}

function resetdata(){
    localStorage.clear();
    location.reload()
}

function reverseinput(){
    let username = input_box_input.value;

    userdata.username = username;
    userdata.highstScore = 0;
    username = JSON.stringify(userdata)
    localStorage.setItem('user', username);
    input_box.classList.remove('box-open') 
    maindiv.classList.remove('hidde-visibility')

    location.reload()
}

function forinput(){
    registerbutton.classList.add('hidde-visibility')
    maindiv.classList.add('hidde-visibility')
    input_box.classList.add('box-open') 
    
    input_submit.addEventListener('click' , ()=>{
                reverseinput();
    })
    
    
}



if(localStorage.getItem('user')){
   button.textContent = 'RESET'

   let data = JSON.parse(localStorage.getItem('user'));

   if(data.highstScore > 0){
      compliment.textContent = `Welcome Back " ${data.username} " Your Highest Score is ${data.highstScore}`;


        compliment.classList.remove('hidde-visibility')
   
   }

   else{
    
    if( !compliment.classList.contains('hidde-visibility')){
         compliment.classList.add('hidde-visibility')
    }
   }

}




const mediaQuery = window.matchMedia('(max-width: 600px)');




if (mediaQuery.matches) {
    
    registerbutton.addEventListener('click' , () =>{
        if(button.textContent == 'RESET'){

            let c = confirm('Would You Ready to Reset Your Data ')
            if(c == true){
            resetdata();
            }
        }

        else{
            forinput()
        }
   })

}




else{

    registerbutton.addEventListener('click' , () =>{
        if(button.textContent == 'RESET'){
            let c = confirm('Would You Ready to Reset Your Data ')
            if(c == true){
            resetdata();
            }
        }

        else{
            forinput()
        }
   })
}








