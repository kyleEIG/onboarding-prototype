// Click start button

GetStarted = function() {
    bluebox.className += ' click-button';
};

setTimeout(GetStarted, 1000);

Unclick = function() {
  bluebox.className = bluebox.className.replace(/\bheart\b/g, "");
};

setTimeout(Unclick, 1300);

// Transition to "Select a Template"

let subtext = document.getElementById('gator-sub-text');
let text = document.getElementById('gator-text');

SubTextChange = function() {
  subtext.innerHTML = "Choose a Template";
};

setTimeout(SubTextChange, 1600);

// Present Templates

let redbox = document.getElementById('red-box');
let bluebox = document.getElementById('blue-box');
let greenbox = document.getElementById('green-box');
let purplebox = document.getElementById('purple-box');
let yellowbox = document.getElementById('yellow-box');
let redboxtwo = document.getElementById('red-box-two');
let blueboxtwo = document.getElementById('blue-box-two');
let purpleboxtwo = document.getElementById('purple-box-two');
let greenboxtwo = document.getElementById('green-box-two');
let whiteboxtwo = document.getElementById('white-box-two');
let sidebar = document.getElementById('sidebar');
let templates = document.getElementsByClassName('gator-template');

Move = function(elem, translate) {
  elem.style.transform = translate;
};

ChangeHeight = function(elem, height) {
  elem.style.height = height;
};

ChangeWidth = function(elem, width) {
    elem.style.width = width;
};

ChangeColor = function(elem, color) {
    elem.style.backgroundColor = color;
};

setTimeout(function() {
    whiteboxtwo.className += ' full-white-box';
    ChangeHeight(bluebox, '60px');
    ChangeColor(purpleboxtwo, '#897ec4');
    Move(subtext, 'translate(121px, -5px)');
    Move(bluebox, 'translate(33px, 43px)');
    Move(blueboxtwo, 'translate(259px, 116px)');
    Move(greenbox, 'translate(259px, 43px)');
    Move(greenboxtwo, 'translate(146px, 189px)');
    Move(redbox, 'translate(146px, 116px)');
    Move(redboxtwo, 'translate(259px, 189px)');
    Move(yellowbox, 'translate(33px, 189px)');
    Move(purplebox, 'translate(146px, 43px)');
    Move(purpleboxtwo, 'translate(33px, 116px)');
}, 1400);

// Select a Template

SelectTemplate = function() {
    blueboxtwo.className += ' click-template';
};

setTimeout(SelectTemplate, 3200);

// Create template elements

CreateHeader = function() {

  blueboxtwo.style.transform = 'translate(146px, -26px) scale(4.36, 1.7) ';
  blueboxtwo.style.borderRadius = '0';
    bluebox.style.opacity = '0';
    yellowbox.style.opacity = '0';
    purplebox.style.opacity = '0';
    purpleboxtwo.style.opacity = '0';
    greenbox.style.opacity = '0';
    greenboxtwo.style.opacity = '0';
    redbox.style.opacity = '0';
    redboxtwo.style.opacity = '0';
  //for (let i = 0; i < templates.length; i++) {
   // templates[i].style.opacity = '0';
  //}
};

setTimeout(CreateHeader, 3600);

let elements = document.getElementsByClassName('gator-element');
let outlines = document.getElementsByClassName('gator-element-outline');

let CreateBox = function() {
    whiteboxtwo.className += ' snapped-white-box';
    whiteboxtwo.style.zIndex = '2';
    whiteboxtwo.style.boxShadow = '0 2px 4px 0 rgba(0,0,0,.1)';
    whiteboxtwo.style.borderRadius = '3px';
    text.innerHTML = 'My Site';
    text.style.zIndex = '3';
    text.style.color = '#fff';
    text.style.marginLeft = '220px';
    text.style.fontWeight = '700';
    sidebar.style.width = '78px';
    sidebar.style.boxShadow = '2px 0 4px 0 rgba(0,0,0,.1)';
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.width = '46px';
      outlines[i].style.width = '60px';
    }

};

setTimeout(CreateBox, 3900);

let photo = document.getElementById('draggable');

let DisplayContent = function() {
  let text = document.getElementsByClassName('template-text');
      setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                setTimeout(function() {
                    setTimeout(function() {
                        setTimeout(function() {
                            document.getElementsByClassName('template-image') [0].style.opacity = '1';
                            photo.style.opacity = '.6';
                        }, 200);
                        text[4].style.opacity = '1';
                    }, 160);
                    text[3].style.opacity = '1';
                }, 120);
                text[2].style.opacity = '1';
            }, 90);
          text[1].style.opacity = '1';
        }, 60);
          text[0].style.opacity = '1';
      }, 30)

};

setTimeout(DisplayContent, 4800);

let dragtwo = document.getElementById('draggable-two');

let DragPhoto = function() {
  setTimeout(function() {
    photo.className += ' dropped';
    photo.style.borderRadius = '2px';
    document.getElementById('details').style.opacity = '1';
    dragtwo.style.opacity = '.6';

  }, 1000);
  photo.style.transform = 'translate(302px, 100px)';
};

setTimeout(DragPhoto, 6700);

let columns = document.getElementsByClassName('template-column');

let DragColumns = function() {
    dragtwo.className += ' drag-y';
    document.getElementById('drag-wrapper').className += ' drag-x';
    setTimeout(function () {
        dragtwo.style.opacity = '1';
    }, 400);
    setTimeout(function() {
        for(let i = 0, n = columns.length; i < n; i++) {
            columns[i].style.opacity = '1';
        }
        Move(columns[0], 'translate(135px, 192px) scale(1)');
        Move(columns[1], 'translate(314px, 192px) scale(1)');
        Move(columns[2], 'translate(224px, 192px) scale(1)');
    }, 650);

};

setTimeout(DragColumns, 9400);
/*
let navboxes = document.getElementsByClassName('gator-nav-box');

let LaunchSite = function() {
    sidebar.style.width = '0';
    for (let i = 0, n = elements.length; i < n; i++) {
        elements[i].style.width = '0';
        outlines[i].style.width = '0';
    }
    document.getElementById('gator-nav').style.height = '0';
    for (let i = 0, n = navboxes.length; i < n; i++) {
        navboxes[i].style.height = '0';
    }

};

setTimeout(LaunchSite, 10000);*/