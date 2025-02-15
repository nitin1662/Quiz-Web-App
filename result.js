let userpercentage = document.querySelector('.g-div')
let rem = document.querySelector('#r-div')
let compliment = document.querySelector('.compliment');

let userdata = JSON.parse(localStorage.getItem('user'));
console.log(userdata)

let currentscore = userdata.currentScor;
let totalquestion = userdata.totalnoq

let d = (currentscore/totalquestion)

d = d*100
d = d.toFixed(0)

let remainpercentage = 100 - d;

userpercentage.style.width = `${d}%`;
userpercentage.textContent = `${d}%`;

if(remainpercentage != 0){
    rem.textContent = `${remainpercentage}%`
}

else{
    rem.style.display = 'none'
}


if(d>=90 && d <=100){
    compliment.textContent = "Outstanding! You’ve truly mastered the material. Keep up the incredible work!"
}

else if(d>=75 && d<=89){
    compliment.textContent  = "Great job! You’ve demonstrated strong understanding. Keep pushing for even higher results!"
}

else if(d>=50 && d <=74){
    compliment.textContent="Good effort! You’re on the right track. A little more practice, and you’ll ace it!"
}

else if(d>=10 && d <=49){
    compliment.textContent= "Don't worry, every step forward counts. Review the material and try again—you’ve got this!"
}

else{
    if(d == 0){
     userpercentage.style.display = 'none'
     userpercentage.textContent = ``;
    }
     compliment.textContent='This wasn’t your best, but it’s a wake-up call. Time to focus and improve!'
}