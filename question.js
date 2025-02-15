// data start

let data = [
    {
        'question_no': 1,
        'question_sentence': 'What is the output of console.log(typeof NaN);?',
        'option': ["number", "NaN", "object", "undefined"],
        'correct': "number"
    },

    {
        'question_no': 2,
        'question_sentence': 'Which of the following is a correct way to create an array in JavaScript?',
        'option': ["var arr = (1, 2, 3);", "var arr = [1, 2, 3];", "var arr = {1, 2, 3};", "var arr = <1, 2, 3>;"],
        'correct': "var arr = [1, 2, 3];"
    },

    {
        'question_no': 3,
        'question_sentence': 'How can you add a comment in JavaScript?',
        'option': ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "Both b and c"],
        'correct': "Both b and c"
    },

    {
        'question_no': 4,
        'question_sentence': 'Which company developed JavaScript?',
        'option': ["Microsoft", "Netscape", "Sun Microsystems", "IBM"],
        'correct': "Netscape"
    },

    {
        'question_no': 5,
        'question_sentence': 'Which of the following methods is used to remove the last element from an array in JavaScript?',
        'option': ["shift()","slice()", "pop()", "remove()"],
        'correct': "pop()"
    },

    {
        'question_no': 6,
        'question_sentence': 'What will the following code output?\nconsole.log(0.1 + 0.2 === 0.3);',
        'option': ["true", "false", "undefined", "NaN"],
        'correct': "false"
    },

    {
        'question_no': 7,
        'question_sentence': 'Which of the following is the correct way to write a JavaScript array?',
        'option': ['var colors = ["red", "green", "blue"];', 'var colors = "red", "green", "blue";', 'var colors = (1:"red", 2:"green", 3:"blue");', 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue");'],
        'correct': 'var colors = ["red", "green", "blue"];'
    },

    {
        'question_no': 8,
        'question_sentence': 'What is the result of null == undefined?',
        'option': ["false", "undefined", "null","true"],
        'correct': "true"
    },

    {
        'question_no': 9,
        'question_sentence': 'Which built-in method returns the calling string value converted to lower case?',
        'option': ["toLower()", "toLowerCase()", "changeCase(case)", "None of the above"],
        'correct': "toLowerCase()"
    },

    {
        'question_no': 10,
        'question_sentence': 'How can you detect the client’s browser name in JavaScript?',
        'option': ["navigator.appName", "browser.name", "client.navName", "window.navigator"],
        'correct': "navigator.appName"
    },

    {
        'question_no': 11,
        'question_sentence': 'Which JavaScript keyword is used to declare a variable?',
        'option': ["var", "let", "const", "All of the above"],
        'correct': "All of the above"
    },

    {
        'question_no': 12,
        'question_sentence': 'Which operator is used to assign a value to a variable?',
        'option': ["*", "-", "=", "x"],
        'correct': "="
    },

    {
        'question_no': 13,
        'question_sentence': 'How do you create a function in JavaScript?',
        'option': ["function = myFunction()", "function myFunction()", "function:myFunction()", "function => myFunction()"],
        'correct': "function myFunction()"
    },

    {
        'question_no': 14,
        'question_sentence': 'How do you call a function named myFunction?',
        'option': ["call function myFunction()", "call myFunction()", "myFunction()", "Call.myFunction()"],
        'correct': "myFunction()"
    },

    {
        'question_no': 15,
        'question_sentence': 'What will the following code output?\nconsole.log(typeof []);',
        'option': ["object", "array", "function", "undefined"],
        'correct': "object"
    },

    {
        'question_no': 16,
        'question_sentence': 'Which of the following is the correct syntax to print a message in the console in JavaScript?',
        'option': ['console.print("Hello World");', 'console.write("Hello World");', 'console.log("Hello World");', 'console.output("Hello World");'],
        'correct': 'console.log("Hello World");'
    },

    {
        'question_no': 17,
        'question_sentence': 'What will be the output of the following code? console.log("5" + 5);',
        'option': ["10", "55", "NaN", "TypeError"],
        'correct': "55"
    },

    {
        'question_no': 18,
        'question_sentence': 'Which event occurs when the user clicks on an HTML element?',
        'option': ["onchange", "onclick", "onmouseover", "onmouseclick"],
        'correct': "onclick"
    },

    {
        'question_no': 19,
        'question_sentence': 'How do you declare a JavaScript variable?',
        'option': ["v carName;", "var carName;", "variable carName;", "carName var;"],
        'correct': "var carName;"
    },

    {
        'question_no': 20,
        'question_sentence': 'Which of the following is not a reserved word in JavaScript?',
        'option': ["interface", "throws", "program", "short"],
        'correct': "program"
    },

    {
        'question_no': 21,
        'question_sentence': 'What will the following code return?\nBoolean(10 > 9)',
        'option': ["true", "false", "NaN", "undefined"],
        'correct': "true"
    },

    {
        'question_no': 22,
        'question_sentence': 'Which operator is used to compare two values, but also checks the type of the values?',
        'option': ["==", "===", "!=", "<>"],
        'correct': "==="
    },

    {
        'question_no': 23,
        'question_sentence': 'Which method can be used to round a number to its nearest integer in JavaScript?',
        'option': ["Math.round()", "Math.ceil()", "Math.floor()", "Math.random()"],
        'correct': "Math.round()"
    },

    {
        'question_no': 24,
        'question_sentence': 'What will the following code output?\nconsole.log(5 == "5");',
        'option': ["true", "false", "NaN", "TypeError"],
        'correct': "true"
    },

    {
        'question_no': 25,
        'question_sentence': 'How do you find the minimum of a list of numbers in JavaScript?',
        'option': ["Math.min([10, 5, 3])", "Math.min(10, 5, 3)", "Math.minimum(10, 5, 3)", "minimum(10, 5, 3)"],
        'correct': "Math.min(10, 5, 3)"
    },

    {
        'question_no': 26,
        'question_sentence': 'Which of the following is true about JavaScript?',
        'option': ["JavaScript is a server-side scripting language.", "JavaScript is an object-based language.", "JavaScript is a compiled language.", "JavaScript can only run in a web browser."],
        'correct': "JavaScript is an object-based language."
    },

    {
        'question_no': 27,
        'question_sentence': 'What is the purpose of the isNaN() function?',
        'option': ["To check if a value is null.", "To check if a value is NaN.", "To check if a value is undefined.", "To check if a value is a number."],
        'correct': "To check if a value is NaN."
    },

    {
        'question_no': 28,
        'question_sentence': 'What is the correct way to write an if statement in JavaScript?',
        'option': ["if x = 5", "if (x == 5)", "if x == 5 then", "if x = 5 then"],
        'correct': "if (x == 5)"
    },

    {
        'question_no': 29,
        'question_sentence': 'What is the output of the following code?\nconsole.log(1 + "2" + "2");',
        'option': ["32", "122", "14", "112"],
        'correct': "122"
    },

    {
        'question_no': 30,
        'question_sentence': 'Which of the following is not a JavaScript data type?',
        'option': ["String", "Number", "Boolean", "Character"],
        'correct': "Character"
    }
];

// data end

//i for track current question number
var i = 0;

//j for total question
var j = data.length;

let u = JSON.parse(localStorage.getItem('user'));
u.totalnoq = j;
u = JSON.stringify(u);
localStorage.setItem('user', u);



// its keep track of score
let currentscore = 0;


// select required element
const backgroundMusic = document.getElementById('background-music');
const toggleMusic = document.getElementById('toggle-music');
const dS = document.querySelector('.d-s');
const play_icon= '<i class="fa-solid fa-volume-high" id="toggle-music"></i>'
const stop_song_icon ='<i class="fa-solid fa-volume-xmark" id="toggle-music"></i>'
const body_element = document.querySelector('.bg')
const next_button = document.querySelector('.next-button')
const option_box_1 = document.querySelector('.option1')
const option_box_2 = document.querySelector('.option2')
const option_box_3 = document.querySelector('.option3')
const option_box_4 = document.querySelector('.option4')
let oldtimerinterval
let submit = document.querySelector('#n-b-h1')
const end_test = document.querySelector('#end-test-button')

//function for show answer in the end of time if user not select any option
function showanswer(){
    let backgroundMusic2 = document.querySelector('#background-music1')

    if (backgroundMusic2.paused) {

        backgroundMusic2.play();
       
    }
    let alloption = document.querySelectorAll('.option')


    alloption = Array.from(alloption)
    let correct = data[i-1].correct;

    for(let o = 0; o<alloption.length; o++){
        let optiondata = document.querySelector(`#option-${o+1}`)
        let useranswer = optiondata.textContent;

        if(useranswer == correct){
            let optiondiv = document.querySelector(`.option${o+1}`);
           optiondiv.classList.add('border-green')
           let icon  = document.querySelector(`#o-${o+1}`);
           icon.innerHTML = '<i class="fa-solid fa-circle-check icon-d-r"></i>'
           icon.classList.remove('hidde-visibility')
        }

        else{
            let optiondiv = document.querySelector(`.option${o+1}`);
            optiondiv.classList.add('border-red')
            let icon  = document.querySelector(`#o-${o+1}`);
            icon.innerHTML = '<i class="fa-solid fa-circle-xmark icon-d-w"></i'
            icon.classList.remove('hidde-visibility')
         }
        }
    }


// function for timer

function timerstart() {
    let timeLeft = 60; // 1 minute in seconds
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');
    
    
  
    function updateCountdown() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = (timeLeft % 60);

        if (seconds !=0 && seconds <= 30) {
            if (seconds <= 15) {
                body_element.classList.remove('background-color-medium')
                body_element.classList.add('background-color-low')
            } 
            else {
                body_element.classList.remove('background-color-high')
                body_element.classList.add('background-color-medium')
            }
        }

        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;

        timeLeft--;

        if (timeLeft >= 0) {
           oldtimerinterval= setTimeout(()=>{
                updateCountdown()
            }, 1000);
        } 

        else {

            let timer = document.querySelector('.timier').style.color = 'red'
           
            minutesElement.innerHTML = "00";
            secondsElement.innerHTML = "00";

           
            setTimeout(()=>{
                clearInterval(oldtimerinterval)
                next_button.click();
            },5000)
            
            showanswer();
        }
    }
    
    let timer = document.querySelector('.timier').style.color = '#F6F4F0'

    if(body_element.classList.contains('background-color-low')){
        body_element.classList.remove('background-color-low')
    }
    else if(body_element.classList.contains('background-color-medium')){
        body_element.classList.remove('background-color-medium')
    }
    body_element.classList.add('background-color-high')
    updateCountdown();
}



// function for change question number

function changeQuestionNumber(){
    const currentno = document.querySelector('#i');
    const totalno = document.querySelector('#j');
    currentno.textContent = i
    totalno.textContent = j;
}


//function for change question and option

function questionChange(){

    

    let question_h1 = document.querySelector('#question-h1')
    let option1 = document.querySelector('#option-1')
    let option2 = document.querySelector('#option-2')
    let option3 = document.querySelector('#option-3')
    let option4 = document.querySelector('#option-4')

  

    question_h1.textContent = data[i].question_sentence;
    option1.textContent = data[i].option[0];
    option2.textContent = data[i].option[1];
    option3.textContent = data[i].option[2];
    option4.textContent = data[i].option[3];
    i++
    if(i === j){
        
        submit.textContent ='Submit > > >'
     }
    changeQuestionNumber()
   
    
}

//function for check whether student select correct option or not

function Validit(option_number){
   let optiondata = document.querySelector(`#option-${option_number}`)
   let useranswer = optiondata.textContent;
   let alloption = document.querySelectorAll('.option')

        alloption = Array.from(alloption)
       

   if(useranswer == data[i-1].correct){

    currentscore++;

    let userdata = JSON.parse(localStorage.getItem('user'));
    userdata.currentScor = currentscore;
    let prvscore = userdata.highstScore;

    if(currentscore > prvscore){
        userdata.highstScore = currentscore;
    }

    userdata = JSON.stringify(userdata);
    localStorage.setItem('user', userdata);

    let backgroundMusic3 = document.querySelector('#background-music2')

    if (backgroundMusic3.paused) {

        backgroundMusic3.play();
       
    } 
   
        startConfetti();
      
        for(let o =0; o<alloption.length; o++){

            if(alloption[o].classList.contains(`option${option_number}`)){
                  alloption[o].classList.add('border-green')

                  let icon  = document.querySelector(`#o-${option_number}`);
                  icon.innerHTML = '<i class="fa-solid fa-circle-check icon-d-r"></i>'
                  icon.classList.remove('hidde-visibility')
            }

            else{
                alloption[o].classList.add('border-red')

                let icon  = document.querySelector(`#o-${o+1}`);
                icon.innerHTML = ' <i class="fa-solid fa-circle-xmark icon-d-w"></i>'
                icon.classList.remove('hidde-visibility')
            }
        }
        setTimeout(() => {
            stopConfetti()
        }, 1000);
        
   }
  

   else{

    

    let backgroundMusic2 = document.querySelector('#background-music1')

    if (backgroundMusic2.paused) {

        backgroundMusic2.play();
       
    } 

    for(let o = 0; o<alloption.length; o++){
        let a = document.querySelector(`#option-${o+1}`).textContent;

        if(a == data[i-1].correct){
            alloption[o].classList.add('border-green')
            let icon  = document.querySelector(`#o-${o+1}`);
                  icon.innerHTML = ' <i class="fa-solid fa-circle-check icon-d-r"></i>'
                  icon.classList.remove('hidde-visibility')
        }

        else{
            
            if(useranswer == a){
                alloption[o].classList.add('border-red')
                let icon  = document.querySelector(`#o-${o+1}`);
                  icon.innerHTML = '<p>You Chose</p> <i class="fa-solid fa-circle-xmark icon-d-w"></i'
                  icon.classList.remove('hidde-visibility')
            }

            else{
                alloption[o].classList.add('border-red')
                let icon  = document.querySelector(`#o-${o+1}`);
                  icon.innerHTML = '<i class="fa-solid fa-circle-xmark icon-d-w"></i'
                  icon.classList.remove('hidde-visibility')
            }
  
        }

       
    }

   
}
}

// make original changes

function reversevalid(){

    let alloption = document.querySelectorAll('.option')
    alloption = Array.from(alloption)
    
    for(let o = 0; o<alloption.length; o++){

        if(alloption[o].classList.contains('border-green')){
            alloption[o].classList.remove('border-green')
        }

        else{
            alloption[o].classList.remove('border-red')
        }
    }

    for(let o=0; o<alloption.length; o++){
        let icon = document.querySelector(`#o-${o+1}`)
        icon.innerHTML=' '
        icon.classList.add('hidde-visibility')
    }

}


// event listener for song button

dS.addEventListener('click', function () {
    if (backgroundMusic.paused) {

        backgroundMusic.play();
        dS.innerHTML = play_icon
       
    } 
    else {

        backgroundMusic.pause();
        dS.innerHTML = stop_song_icon
    }
});


// event listener for next button
next_button.addEventListener('click', ()=>{

   
   if(submit.textContent == 'Next > > >'){

    clearInterval(oldtimerinterval)

    
    questionChange();
    timerstart()
    reversevalid()
    
    }

    else{
        location.pathname ='/result.html';
    }
    
})

end_test.addEventListener('click', ()=>{
    location.pathname ='/result.html';
})


option_box_1.addEventListener('click', ()=>{
    Validit(1)
})

option_box_2.addEventListener('click', ()=>{
    Validit(2)
})


option_box_3.addEventListener('click', ()=>{
    Validit(3)
})


option_box_4.addEventListener('click', ()=>{
    Validit(4)
})


questionChange()
timerstart()







































































var maxParticleCount = 150; //set max confetti count
var particleSpeed = 2; //set the particle animation speed
var startConfetti; //call to start confetti animation
var stopConfetti; //call to stop adding confetti
var toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running
var removeConfetti; //call to stop the confetti animation and remove all confetti immediately

(function() {
	startConfetti = startConfettiInner;
	stopConfetti = stopConfettiInner;
	toggleConfetti = toggleConfettiInner;
	removeConfetti = removeConfettiInner;
	var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"]
	var streamingConfetti = false;
	var animationTimer = null;
	var particles = [];
	var waveAngle = 0;
	
	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = 0;
		return particle;
	}

	function startConfettiInner() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
			document.body.appendChild(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (particles.length < maxParticleCount)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		if (animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (particles.length === 0)
					animationTimer = null;
				else {
					updateParticles();
					drawParticles(context);
					animationTimer = requestAnimFrame(runAnimation);
				}
			})();
		}
	}

	function stopConfettiInner() {
		streamingConfetti = false;
	}

	function removeConfettiInner() {
		stopConfetti();
		particles = [];
	}

	function toggleConfettiInner() {
		if (streamingConfetti)
			stopConfettiInner();
		else
			startConfettiInner();
	}

	function drawParticles(context) {
		var particle;
		var x;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			context.strokeStyle = particle.color;
			x = particle.x + particle.tilt;
			context.moveTo(x + particle.diameter / 2, particle.y);
			context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle);
				particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= maxParticleCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();


