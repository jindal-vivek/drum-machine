const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];
var bank1 = true;
var power = true;
var audioVol = 1.0;
window.onload = function () {


  changeBank(bank1);

  //add a event listener to whole div of buttons and play respective DrumPad
  document.querySelector("#buttons").addEventListener("click", function (event) {
    console.log(event.target)
    if (event.target.tagName === "BUTTON" && power) {
      document.getElementById(event.target.innerHTML).play();
      console.log(event.target.parentNode.id.replace("-", " "))
      document.getElementById("display").innerText = event.target.parentNode.id.replace("-", " ");

    }
  });

  //add a event listener to whole div of buttons and play respective DrumPad
  document.addEventListener("keydown", function (event) {
    if (power) {
      let z = document.getElementById(event.key.toUpperCase());
      if (z) {
        z.play();
        document.getElementById("display").innerText = z.parentNode.id.replace("-", " ");
      }


      //document.getElementById().play();
      //console.log(event.target.parentNode.id.replace("-", " "))
      //document.getElementById("display").textContent = event.target.parentNode.id.replace("-", " ");

    }
  });


  //add event listener to functions and toggle buttons
  document.querySelector("#functions").addEventListener("click", function (event) {
    if (event.target.tagName === "I") {
      switch (event.target.id) {
        //power off toggle
        case 'power_icon':
          power = !power;
          if (power) {
            event.target.style.color = "green";
          }
          else {
            document.getElementById("display").innerText = "";
            event.target.style.color = "black";
          }
          break;
        //bank toggle
        case 'bank_icon':
          bank1 = !bank1;
          if (!bank1) {
            event.target.classList.remove("fa-toggle-on")
            event.target.classList.add("fa-toggle-off");
            changeBank(bank1);
          }
          else {
            event.target.classList.remove("fa-toggle-off")
            event.target.classList.add("fa-toggle-on");
            changeBank(bank1);
          }
          break;

        //volume buttons:
        case 'vol_inc_icon':
          audioVol = Math.min(1.0, audioVol + 0.1);
          changeVolume(audioVol);
          break;

        case 'vol_dec_icon':
          audioVol = Math.max(0, audioVol - 0.1);
          changeVolume(audioVol);

          break;
        case 'vol_mute_icon':
          audioVol = 0;
          changeVolume(audioVol);
          break;
      }
    }
  });
};



//add DrumPad element to each  tag depending upon bank
function changeBank(b) {
  let allDrumPadElements = document.querySelectorAll(".drum-pad");
  if (b) {
    for (let i = 0; i < allDrumPadElements.length; i++) {

      allDrumPadElements[i].querySelector("audio").src = bankOne[i].url;
      allDrumPadElements[i].id = bankOne[i].id;

    }
  }
  else {
    for (let i = 0; i < allDrumPadElements.length; i++) {
      allDrumPadElements[i].querySelector("audio").src = bankTwo[i].url;
      allDrumPadElements[i].id = bankTwo[i].id;
    }
  }
}

//function to change volume

function changeVolume(vol) {
  console.log(vol);
  let allDrumPadElements = document.querySelectorAll(".drum-pad");

  for (let i = 0; i < allDrumPadElements.length; i++) {

    allDrumPadElements[i].querySelector("audio").volume = vol;


  }


}
