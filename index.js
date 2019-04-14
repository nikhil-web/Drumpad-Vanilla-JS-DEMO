window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#f7444e",
    "#78bcc4",
    "#c050d2",
    "#d2d050",
    "#505bd2",
    "#50c1d2"
  ];


  const sound_array = [
    "sounds/bubbles.mp3",
    "sounds/clay.mp3",
    "sounds/confetti.mp3",
    "sounds/glimmer.mp3",
    "sounds/moon.mp3",
    "sounds/ufo.mp3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      play_sound(index);
      createBubble(index);
    });
  });


  document.addEventListener("keypress", function(e){
    if(e.keyCode == 65){
      play_sound(0);
      createBubble(0);
      animate_pad(0);
    }else if(e.keyCode == 83){
      play_sound(1);
      createBubble(1);
      animate_pad(1);
    }else if(e.keyCode == 68){
      play_sound(2);
      createBubble(2);
      animate_pad(2);
    }else if(e.keyCode == 70){
      play_sound(3);
      createBubble(3);
      animate_pad(3);
    }else if(e.keyCode == 71){
      play_sound(4);
      createBubble(4);
      animate_pad(4);
    }else if(e.keyCode == 72){
      play_sound(5);
      createBubble(5);
      animate_pad(5);
    }else{
      console.log("none");
      
    }

  });


async function play_sound(ind){
  var audio_var = sound_array[ind];
  var audio = new Audio(audio_var);
  audio.play();  
}

  function animate_pad(i){
    pads[i].style.animation = `dance 0.1s ease`;
    pads[i].addEventListener("animationend", function() {
      pads[i].style.animation = 'none';
    });
}


  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s linear`;
    bubble.addEventListener("animationend", function() {
     visual.removeChild(this);
    });
  };
});

