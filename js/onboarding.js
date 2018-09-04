
function addEvent(element, evnt, funct){
    if (element.attachEvent)
        return element.attachEvent('on'+evnt, funct);
    else
        return element.addEventListener(evnt, funct, false);
}


// start survey

let welcome = document.getElementById('welcome');
let q1 = document.getElementById('question-one');
let progBar = document.getElementById('progress-bar');
let progress = 0;

addEvent(
    document.getElementById('start'),
    'click',
    function () {
        if (progress === 0) {
            welcome.style.transform = 'translate(-140%,0)';
            welcome.style.opacity = '.2';
            q1.style.position = 'static';
            welcome.style.position = 'absolute';
            q1.style.transform = 'translate(0,0)';
            q1.style.opacity = '1';
            progBar.style.display = 'block';
            progress = 1;
          showProgress();
        }

    }
);

// move between questions

let q2 = document.getElementById('question-two');


var answerOne = document.getElementsByClassName("answer-one");

let NextQuestion = function () {
        if (progress === 1) {
            q1.style.transform = 'translate(-140%,0)';
            q1.style.opacity = '.2';
            q2.style.position = 'static';
            q1.style.position = 'absolute';
            q2.style.transform = 'translate(0,0)';
            q2.style.opacity = '1';
          document.getElementById('beginner').style.transform = "translate(0,0)";
                    document.getElementById('intermediate').style.transform = "translate(0,0)";
                    document.getElementById('expert').style.transform = "translate(0,0)";
            progress = 2;
          showProgress();
        }

    };

for (var i = 0, n = answerOne.length; i < n; i++) {
    answerOne[i].addEventListener('click', NextQuestion, false);
}


/*addEvent(
    document.getElementsByClassName('answer-one'),
    'click',
    function () {
        if (progress === 1) {
            q1.style.transform = 'translate(-140%,0)';
            q1.style.opacity = '.2';
            q2.style.position = 'static';
            q1.style.position = 'absolute';
            q2.style.transform = 'translate(0,0)';
            q2.style.opacity = '1';
          document.getElementById('beginner').style.transform = "translate(0,0)";
                    document.getElementById('intermediate').style.transform = "translate(0,0)";
                    document.getElementById('expert').style.transform = "translate(0,0)";
            progress = 2;
          showProgress();
        }

    }
);*/



addEvent(
document.getElementById('first'),
'click',
function() {x 
  progress = 0;
  showProgress();
}
);

	let full = document.getElementById('full-bar');
	let first = document.getElementById('first');
	let second = document.getElementById('second');
	let third = document.getElementById('third');
	let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');


let showProgress = function() {
            if( progress === 1 ) {
                function DisplayProgress() {
                    document.getElementById('progress-header').style.display = 'block';
                    one.style.visibility = 'visible';
                    one.style.color = '#fff';
                }
                setTimeout(DisplayProgress, 300);
            }
            else if( progress === 2 ) {
                full.style.marginRight = '-300px';
                full.style.width = '300px';
                first.className += ' done';
                function UpdateCircle() {
                    second.className += ' heart';
                }
                first.className = first.className.replace(/\bheart\b/g, "");
                setTimeout(UpdateCircle, 300);
                document.getElementById('check-one').style.visibility = 'visible';
                one.style.visibility = 'hidden';
                setTimeout(function() {
                    two.style.color = '#fff';
				}, 300);
            }
            else if( progress === 3) {
                full.style.marginRight = '-600px';
                full.style.width = '600px';
                full.style.backgroundImage = 'linear-gradient(to right, #4cafff, #4cafff, #0071ff)';
                second.className += ' done';
                function UpdateCircle() {
                    third.className += ' heart';
                }
                second.className = second.className.replace(/\bheart\b/g, "");
                setTimeout(UpdateCircle, 300);
                document.getElementById('check-two').style.visibility = 'visible';
                two.style.visibility = 'hidden';
                setTimeout(function () {
                    three.style.color = '#fff';
                }, 300);
            }

}