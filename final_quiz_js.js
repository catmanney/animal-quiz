
    var pos = 0, test, choice, correct = 0, feedback = "blank";

    let answered = "DID NOT ANSWER";
      var questions = [
      {
          question: "English translation for 熊 (Xióng)",
          options: [ 
          "Bear*",
          "Goat",
          "Fish"
        ],
          answer: 0
        },
      {
          question: "English translation for 鳥 (Niǎo)",
          options: [
          "Elephant",
          "Bird*",
          "Pig"  
          ],
          answer: 1
        },
      {
          question: "English translation for 蝴蝶 (Húdié)",
          options: [
          "Monkey",
          "Duck",
          "Butterfly*",  
          ],
          answer: 2
        },
      {
          question: "English translation for 貓 (Māo)",
          options: [
          "Cat*",
          "Deer",
          "Snake",
          "Dragon"  
          ],
          answer: 0
        },
      {
          question: "English translation for 毛蟲 (Máochóng)",
          options:[
          "Tiger",
          "Horse",
          "Lion",
          "Caterpillar*"
          ],
          answer: 3
        },
        {
            question: "English translation for 奶牛 (Nǎiniú)",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Cow*"
            ],
            answer: 3
          },/*
        {
            question: "English translation for Deer 鹿 Lù ",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Deer"
            ],
            answer: 3
          },
        {
            question: "English translation for Dog 狗 Gǒu",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Dog"
            ],
            answer: 3
          },
        {
            question: "English translation for Dragon 龍 Lóng",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Dragon"
            ],
            answer: 3
          },
          {
            question: "English translation for Duck 鴨 Yā",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Duck"
            ],
            answer: 3
          },
          {
            question: "English translation for Elephant 大象 Dà xiàng",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Elephant"
            ],
            answer: 3
          },
          {
            question: "English translation for Fish 魚 Yú",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Fish"
            ],
            answer: 3
          },
          {
            question: "English translation for Frog 青蛙 Qīngwā",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Frog"
            ],
            answer: 3
          },
          {
            question: "English translation for Goat 山羊 Shānyáng",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Goat"
            ],
            answer: 3
          },
          {
            question: "English translation for Horse 馬 Mǎ",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Horse"
            ],
            answer: 3
          },
          {
            question: "English translation for Lion 獅子 Shīzi",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Lion"
            ],
            answer: 3
          },
          {
            question: "English translation for Monkey 猴 Hóu",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Monkey"
            ],
            answer: 3
          },
          {
            question: "English translation for Mouse 老鼠 Lǎoshǔ",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Mouse"
            ],
            answer: 3
          },
          {
            question: "English translation for Pig 豬 Zhū",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Pig"
            ],
            answer: 3
          },
          {
            question: "English translation for Rabbit 兔子 Tùzǐ",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Rabbit"
            ],
            answer: 3
          },
          {
            question: "English translation for Snake 蛇 Shé",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Snake"
            ],
            answer: 3
          },
          {
            question: "English translation for Tiger 老虎 Lǎohǔ",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Tiger"
            ],
            answer: 3
          },  
          {
            question: "English translation for Turtle 龜 Guī",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Turtle"
            ],
            answer: 3
          },
          {
            question: "English translation for Wolf 狼 Láng",
            options:[
            "Dog",
            "Mouse",
            "Bear",
            "Wolf"
            ],
            answer: 3
          }
          */
      ];

    function displayQuiz(){//
      if(pos >= questions.length){//
        document.getElementById("test").innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";//
        if (correct==questions.length){
          console.log(correct + questions.length+"you win");
          catWin();
          fishWin();
          birdWin();
          dogWin();
        }
        pos = 0;//
        correct = 0;
        return false;//
      }

      document.getElementById("test").innerHTML = "<h3>"+questions[pos].question+"</h3>";//

      document.getElementById("test").innerHTML += "<button onclick='checkResponse()'>Submit Answer</button>";//

var radio_home = document.getElementById("radio_home");

      for (var s=0; s<questions[pos].options.length; s++){
        var radio_home = document.getElementById("radio_home");
function makeRadioButton(name, value, text, chk) {
    var label = document.createElement("label");
    var radio = document.createElement("input");
    var ln_break = document.createElement("br");
    radio.type = "radio";
    radio.name = name;
    radio.value = value + chk;
    radio.just_value = value;
    if (chk == "true") {
        radio.checked = true;
    }        
    label.appendChild(radio);
    label.appendChild(document.createTextNode(text));
    label.appendChild(ln_break);
    return label;
}
values = [0,1,2,3]
         radio_home.appendChild(makeRadioButton("rbtbutton", values[s], questions[pos].options[s]/* + values[s]*/, "false"));
      }
}
    function checkResponse(){
        for(var i=0; i<document.getElementsByName("rbtbutton").length; i++){//not quite
        if(document.getElementsByName("rbtbutton")[i].checked){//not quite
          choice = document.getElementsByName("rbtbutton")[i].just_value;//not quite
          answered = "ANSWERED"
          console.log(choice +"first");
        }
      }
      if (answered == "ANSWERED"){
        if(choice == questions[pos].answer){
          correct++;
          console.log("correct" + choice +"---"+ questions[pos].answer + answered);
          document.getElementById("feedback").innerHTML = "Nice work! "+questions[pos].options[questions[pos].answer] +" is the correct answer.";
          catWink();
          fishWink();
          birdWink();
          dogWink();
        }else{
          console.log("looks incorrect to me"+choice+"---"+questions[pos].answer + answered);
          document.getElementById("feedback").innerHTML = "Sorry friend. " + questions[pos].options[questions[pos].answer] 
          + " is the correct answer.";
          catBored();
          fishBored();
          birdBored();
          dogBored();
        }
      }else{
        console.log("I think this is blank" + choice + "---"+ questions[pos].answer+answered);
        document.getElementById("feedback").innerHTML = "Please select an option.";
        pos--
      }

      document.getElementById("radio_home").innerHTML = "";
      answered = "DID NOT ANSWER";
      pos++;
      displayQuiz();
    }