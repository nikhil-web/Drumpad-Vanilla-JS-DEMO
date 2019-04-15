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
    "sounds/kick.wav",
    "sounds/cymbal.wav",
    "sounds/snare.wav",
    "sounds/openhat.wav",
    "sounds/long-crash.wav",
    "sounds/hihat.wav"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      play_sound(index);
      createBubble(index);
      animate_pad(index);
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

for(let index = 0; index < sound_array.length; index++) {
var audio_var = sound_array[index];
var audio = new Audio(audio_var);
audio.load();
}


async function play_sound(ind){
  var audio_var = sound_array[ind];
  var audio = new Audio(audio_var);
  audio.load();
  audio.play();  
}

  function animate_pad(index){
    pads[index].style.animation = `dance 0.1s ease`;
    pads[index].addEventListener("animationend", function() {
      pads[index].style.animation = 'none';
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

