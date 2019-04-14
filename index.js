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

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });


  document.addEventListener("keypress", function(e){
    if(e.keyCode == 65){
      console.log("A");
      sounds[0].currentTime = 0;
      sounds[0].play();
      createBubble(0);
      animate_pad(0);
    }else if(e.keyCode == 83){
      console.log("s");
      sounds[1].currentTime = 0;
      sounds[1].play();
      createBubble(1);
      animate_pad(1);
    }else if(e.keyCode == 68){
      console.log("d");
      sounds[2].currentTime = 0;
      sounds[2].play();
      createBubble(2);
      animate_pad(2);
    }else if(e.keyCode == 70){
      console.log("f");
      sounds[3].currentTime = 0;
      sounds[3].play();
      createBubble(3);
      animate_pad(3);
    }else if(e.keyCode == 71){
      console.log("g");
      sounds[4].currentTime = 0;
      sounds[4].play();
      createBubble(4);
      animate_pad(4);
    }else if(e.keyCode == 72){
      console.log("h");
      sounds[5].currentTime = 0;
      sounds[5].play();
      createBubble(5);
      animate_pad(5);
    }else{
      console.log("none");
      
    }

  });


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
    bubble.style.animation = `jump 3s linear`;
    bubble.addEventListener("animationend", function() {
     visual.removeChild(this);
    });
  };
});
