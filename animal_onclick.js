function defaultCat(){
    document.getElementById("cat1").innerHTML = '                   ';
    document.getElementById("cat2").innerHTML = '                   ';
    document.getElementById("cat3").innerHTML = "      |\\ - /|      ";
    document.getElementById("cat4").innerHTML = "      | · · |      ";
    document.getElementById("cat5").innerHTML = "       (='=)       ";
    document.getElementById("cat6").innerHTML = "      /|   |\\      ";
    document.getElementById("cat7").innerHTML = "     / /   \\ \\     ";
    document.getElementById("cat8").innerHTML = '      (") (")      ';
    document.getElementById("cat9").innerHTML = '                   ';
    document.getElementById("cat0").innerHTML = '                   ';
}
function sadCat(){
    document.getElementById("cat4").innerHTML = "      |.- -.|      "
}
//////
function catHiWave(){
    defaultCat();
    setTimeout(function(){ document.getElementById("cat6").innerHTML="      /|   |\\__" }, 1000);
    setTimeout(function(){ document.getElementById("cat6").innerHTML="      /|   |\\/" }, 2000);
    setTimeout(function(){ document.getElementById("cat6").innerHTML="      /|   |\\" }, 3000);
    setTimeout(function(){ document.getElementById("cat7").innerHTML="     / /   \\" }, 1000);
    setTimeout(function(){ document.getElementById("cat7").innerHTML="     / /   \\     " }, 2000);
    setTimeout(function(){ document.getElementById("cat7").innerHTML="     / /   \\\\     " }, 3000);
    setTimeout(function(){ document.getElementById("cat4").innerHTML="      | > < |      "},1000);
    setTimeout(defaultCat,3000); 
}

function catByeWave() {
    defaultCat();
  setTimeout(function(){ document.getElementById("cat6").innerHTML="      /|   |\\__" }, 1000);
  setTimeout(function(){ document.getElementById("cat6").innerHTML="      /|   |\\/" }, 2000);
  setTimeout(function(){ document.getElementById("cat6").innerHTML="      /|   |\\" }, 3000);
  setTimeout(function(){ document.getElementById("cat7").innerHTML="     / /   \\" }, 1000);
  setTimeout(function(){ document.getElementById("cat7").innerHTML="     / /   \\     " }, 2000);
  setTimeout(function(){ document.getElementById("cat7").innerHTML="     / /   \\\\     " }, 3000);
  setTimeout(sadCat,1000);
  setTimeout(defaultCat,3000);
}
function catWink(){
    defaultCat();
    setTimeout(function(){ document.getElementById("cat4").innerHTML="      | ^ ^ |      " }, 1000);
    setTimeout(function(){ document.getElementById("cat4").innerHTML="      | · · |      " }, 2000);
}
function catBored(){
    defaultCat();
    setTimeout(function(){ document.getElementById("cat4").innerHTML="      | - - |      " }, 1000);
    setTimeout(function(){ document.getElementById("cat4").innerHTML="      | · · |      " }, 2000);
}
function catWin(){
    defaultCat();
    setTimeout(function(){ document.getElementById("cat8").innerHTML='      (") (")     |   ' }, 1000);
    setTimeout(function(){ document.getElementById("cat7").innerHTML="     / /   \\ \\    | " }, 2000);
    setTimeout(function(){ document.getElementById("cat6").innerHTML="      /|   |\\     o  " }, 3000);
    setTimeout(function(){ document.getElementById("cat8").innerHTML='      (") (")    \\|/   ' }, 3000);
    setTimeout(function(){ document.getElementById("cat6").innerHTML="      /|   |\\    {o} " }, 4000);

    setTimeout(function(){ document.getElementById("cat3").innerHTML="      |\\-*-/|      " }, 3000);
    setTimeout(function(){ document.getElementById("cat0").innerHTML=" Your skills are in full bloom! " }, 3000);
    setTimeout(function(){ document.getElementById("cat4").innerHTML="      | · · |      " }, 5000);
    setTimeout(function(){ document.getElementById("cat4").innerHTML = "      | > < |      "}, 2000)
}

function catTap(){
    defaultCat();
    document.getElementById("cat4").innerHTML = "      | ~ ~ |      "
    document.getElementById("cat0").innerHTML = " Aww! This feline seems to enjoy attention."
};
/////////////////////////////////FISH
function defaultFish(){
    document.getElementById("fish1").innerHTML = "                    "
    document.getElementById("fish2").innerHTML = "                    "
    document.getElementById("fish3").innerHTML = "         |\\         "
    document.getElementById("fish4").innerHTML = "     |\\  |^^\\       "
    document.getElementById("fish5").innerHTML = "     |>\\/ · · \\     "
    document.getElementById("fish6").innerHTML = "     |>/\\     /     "
    document.getElementById("fish7").innerHTML = "     |/  |-/ /      "
    document.getElementById("fish8").innerHTML = "         |/         "
    document.getElementById("fish9").innerHTML = "                    "
    document.getElementById("fish0").innerHTML = "                    "
}
function sadFish(){
    document.getElementById("fish5").innerHTML = "     |>\\/.- -.\\     "
}
///
function fishHiWave(){
    defaultFish();
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /     " }, 1000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /      " }, 2000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /     " }, 3000);
    setTimeout(function(){ document.getElementById("fish7").innerHTML="     |/  |-/ |        " }, 1000);
    setTimeout(function(){ document.getElementById("fish7").innerHTML="     |/  |-/  \\      " }, 2000);
    setTimeout(function(){ document.getElementById("fish7").innerHTML="     |/  |-/ /      " }, 3000);
    setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ > < \\     "},1000);
    setTimeout(defaultFish,3000);
}

function fishByeWave() {
    defaultFish();
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /     " }, 1000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /      " }, 2000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /     " }, 3000);
    setTimeout(function(){ document.getElementById("fish7").innerHTML="     |/  |-/ |        " }, 1000);
    setTimeout(function(){ document.getElementById("fish7").innerHTML="     |/  |-/  \\      " }, 2000);
    setTimeout(function(){ document.getElementById("fish7").innerHTML="     |/  |-/ /      " }, 3000);
    setTimeout(sadFish,1000);
    setTimeout(defaultFish,3000);
  }
  function fishWink(){
      defaultFish();
      setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ ^ ^ \\     " }, 1000);
      setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ · · \\     " }, 2000);
  }
  function fishBored(){
      defaultFish();
      setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ - - \\     " }, 1000);
      setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ · · \\     " }, 2000);
  }
  function fishWin(){
      defaultFish();
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     / o   " }, 1000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /  o  " }, 2000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     / o   " }, 3000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /  o  " }, 4000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     / o   " }, 5000);
    setTimeout(function(){ document.getElementById("fish6").innerHTML="     |>/\\     /  o  " }, 6000);
    setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ > < \\ o o  " }, 2000);
    setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ > < \\  o o    " }, 3000);
    setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ > < \\ o o   " }, 4000);
    setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ > < \\  o o   " }, 5000);
    setTimeout(function(){ document.getElementById("fish5").innerHTML="     |>\\/ · · \\ o o    " }, 6000);
    setTimeout(function(){ document.getElementById("fish4").innerHTML="     |\\  |^^\\  o o o     " }, 3000);
    setTimeout(function(){ document.getElementById("fish4").innerHTML="     |\\  |^^\\   o o o     " }, 4000);
    setTimeout(function(){ document.getElementById("fish4").innerHTML="     |\\  |^^\\  o o o     " }, 5000);
    setTimeout(function(){ document.getElementById("fish4").innerHTML="     |\\  |^^\\   o o o     " }, 6000);
    setTimeout(function(){ document.getElementById("fish3").innerHTML="         |\\     o o o o    " }, 4000);
    setTimeout(function(){ document.getElementById("fish3").innerHTML="         |\\      o o o o   " }, 5000);
    setTimeout(function(){ document.getElementById("fish3").innerHTML="         |\\     o o o o    " }, 6000);
    setTimeout(function(){ document.getElementById("fish0").innerHTML=" You're blowing my mind! " }, 3000);
    //setTimeout(function(){ document.getElementById("fish5").innerHTML = "     |>\\/ > < \\     "}, 2000); 
            /*.li {
                font-family: monospace;
                white-space: pre;
                font-size: 2.5em;
            }
            span {
                color:red;
            }*/
  }
  function fishTap(){
      defaultFish();
    document.getElementById("fish5").innerHTML = "     |>\\/ o O \\     "
    document.getElementById("fish0").innerHTML = " The glass is there for a reason... "
  }
///////////////////////////////////////////
function defaultBird(){
    document.getElementById("bird1").innerHTML = '                 ';
    document.getElementById("bird2").innerHTML = '                 ';
    document.getElementById("bird3").innerHTML = '        /\\_/\\         ';
    document.getElementById("bird4").innerHTML = "       ( · · )       ";
    document.getElementById("bird5").innerHTML = "      //  '  \\\\      ";
    document.getElementById("bird6").innerHTML = "     //\\     /\\\\   ";
    document.getElementById("bird7").innerHTML = "     ///\\   /\\\\\\  ";
    document.getElementById("bird8").innerHTML = '         """     ';
    document.getElementById("bird9").innerHTML = '                 ';
    document.getElementById("bird0").innerHTML = '                 ';
}
function sadBird(){
    document.getElementById("bird4").innerHTML = "       (.- -.)       "
}
/////
function birdHiWave() {
    defaultBird();
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  '  \\\\__      " }, 1000);
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  '  \\\\/      " }, 2000);
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  '  \\\\      " }, 3000);
    setTimeout(function(){ document.getElementById("bird6").innerHTML="     //\\     /\\     " }, 1000);
    setTimeout(function(){ document.getElementById("bird6").innerHTML="     //\\     /\\     " }, 2000);
    setTimeout(function(){ document.getElementById("bird6").innerHTML="     //\\     /\\\\     " }, 3000);
    setTimeout(function(){ document.getElementById("bird4").innerHTML="       ( > < )       " },1000);
    setTimeout(defaultBird,3000);
  }
function birdByeWave() {
    defaultBird();
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  '  \\\\__      " }, 1000);
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  '  \\\\/      " }, 2000);
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  '  \\\\      " }, 3000);
    setTimeout(function(){ document.getElementById("bird6").innerHTML="     //\\     /\\     " }, 1000);
    setTimeout(function(){ document.getElementById("bird6").innerHTML="     //\\     /\\     " }, 2000);
    setTimeout(function(){ document.getElementById("bird6").innerHTML="     //\\     /\\\\     " }, 3000);
    setTimeout(sadBird,1000);
    setTimeout(defaultBird,3000);
  }
  function birdWink(){
      defaultBird();
      setTimeout(function(){ document.getElementById("bird4").innerHTML="       ( ^ ^ )       " }, 1000);
      setTimeout(function(){ document.getElementById("bird4").innerHTML="       ( · · )       " }, 2000);
  }
  function birdBored(){
      defaultBird();
      setTimeout(function(){ document.getElementById("bird4").innerHTML="       ( - - )       " }, 1000);
      setTimeout(function(){ document.getElementById("bird4").innerHTML="       ( · · )       " }, 2000);
  }
  function birdWin(){
      defaultBird();
    setTimeout(function(){ document.getElementById("bird4").innerHTML="       ( · · )    @=_   " }, 1000);
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  '  \\\\    |   " }, 1000);
    setTimeout(function(){ document.getElementById("bird6").innerHTML="     //\\     /\\\\   |   " }, 1000);
    setTimeout(function(){ document.getElementById("bird7").innerHTML="     ///\\   /\\\\\\  /|\\   " }, 1000);
    setTimeout(function(){ document.getElementById("bird8").innerHTML='         """     / | \\    ' }, 1000);
    setTimeout(function(){ document.getElementById("bird8").innerHTML='        " ""     / | \\    ' }, 2000);
    setTimeout(function(){ document.getElementById("bird8").innerHTML='         "" "    / | \\    ' }, 3000);
    setTimeout(function(){ document.getElementById("bird8").innerHTML='        " ""     / | \\    ' }, 4000);
    setTimeout(function(){ document.getElementById("bird8").innerHTML='         "" "    / | \\    ' }, 5000);
    setTimeout(function(){ document.getElementById("bird8").innerHTML='         """     / | \\    ' }, 6000);
    setTimeout(function(){ document.getElementById("bird4").innerHTML="       ( > < )    @=_   " }, 2000);
    setTimeout(function(){ document.getElementById("bird4").innerHTML="       ( · · )    @=_   " }, 6000); 
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  <  \\\\    |   " }, 2000);
    setTimeout(function(){ document.getElementById("bird5").innerHTML="      //  '  \\\\    |   " }, 6000);
    setTimeout(function(){ document.getElementById("bird0").innerHTML=" Your success makes my heart sing! " }, 3000);
  }
function birdTap(){
    defaultBird();
    document.getElementById("bird4").innerHTML = "       ( ·V· )       "
    document.getElementById("bird0").innerHTML = " Look, but don't touch! "
}
///////////////////////////////////////////////////////////////
function defaultDog(){
    document.getElementById("dog1").innerHTML = "                    ";
    document.getElementById("dog2").innerHTML = "                    ";
    document.getElementById("dog3").innerHTML = "      /^\\ - _      ";
    document.getElementById("dog4").innerHTML = "      \\ · · \\/     ";
    document.getElementById("dog5").innerHTML = "       \\(*)/       ";
    document.getElementById("dog6").innerHTML = "       /   \\       ";
    document.getElementById("dog7").innerHTML = "      / | | \\      ";
    document.getElementById("dog8").innerHTML = "     (m)   (m)      ";
    document.getElementById("dog9").innerHTML = "                    ";
    document.getElementById("dog0").innerHTML = "                    ";
}
function sadDog(){
    document.getElementById("dog4").innerHTML = "      \\.- -.\\/     "
}
/////
function dogHiWave() {
    defaultDog();
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      / | \\ \\      " }, 1000);
    setTimeout(function(){ document.getElementById("dog6").innerHTML="       /  _\\       " }, 2000);
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      / |   \\      " }, 2000);
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      / | | \\      " }, 3000);
    setTimeout(function(){ document.getElementById("dog8").innerHTML="     (m)   (m)     " }, 1000);
    setTimeout(function(){ document.getElementById("dog8").innerHTML="     (m)   (m)     " }, 2000);
    setTimeout(function(){ document.getElementById("dog8").innerHTML="     (m)   (m)     " }, 3000);
    setTimeout(function(){ document.getElementById("dog4").innerHTML="      \\ > < \\/     "},1000);
    setTimeout(defaultDog,3000);
  }
function dogByeWave() {
    defaultDog();
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      / | \\ \\      " }, 1000);
    setTimeout(function(){ document.getElementById("dog6").innerHTML="       /  _\\       " }, 2000);
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      / |   \\      " }, 2000);
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      / | | \\      " }, 3000);
    setTimeout(function(){ document.getElementById("dog8").innerHTML="     (m)   (m)     " }, 1000);
    setTimeout(function(){ document.getElementById("dog8").innerHTML="     (m)   (m)     " }, 2000);
    setTimeout(function(){ document.getElementById("dog8").innerHTML="     (m)   (m)     " }, 3000);
    setTimeout(sadDog,1000);
    setTimeout(defaultDog,3000);
  }
  function dogWink(){
      defaultDog();
      setTimeout(function(){ document.getElementById("dog4").innerHTML="      \\ ^ ^ \\/     " }, 1000);
      setTimeout(function(){ document.getElementById("dog4").innerHTML="      \\ · · \\/     " }, 2000);
  }
  function dogBored(){
      defaultDog();
      setTimeout(function(){ document.getElementById("dog4").innerHTML="      \\ - - \\/     " }, 1000);
      setTimeout(function(){ document.getElementById("dog4").innerHTML="      \\ · · \\/     " }, 2000);
  }
  function dogWin(){
      defaultDog();
    setTimeout(function(){ document.getElementById("dog6").innerHTML="       /| |\\       " }, 1000);
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      / === \\      " }, 1000);
    setTimeout(function(){ document.getElementById("dog8").innerHTML="     (m)===(m)     " }, 1000);
    setTimeout(function(){ document.getElementById("dog6").innerHTML="       /  |\\       " }, 2000);
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      / |== \\      " }, 2000);
    setTimeout(function(){ document.getElementById("dog7").innerHTML="      /  == \\      " }, 3000);
    setTimeout(function(){ document.getElementById("dog8").innerHTML="     (m)|==(m)     " }, 3000);
    setTimeout(function(){ document.getElementById("dog0").innerHTML=" You chopped through the competion! " }, 3000);
    setTimeout(function(){ document.getElementById("dog4").innerHTML = "      \\ > < \\/     "}, 2000);
    setTimeout(function(){ document.getElementById("dog4").innerHTML = "      \\ · · \\/     "}, 4000)
  }
  function dogTap(){
      defaultDog();
    document.getElementById("dog4").innerHTML = "      \\ @ @ \\/     "
    document.getElementById("dog0").innerHTML = " Oops. R.I.P. your finger... "
}