
setTimeout(() => {
    //Buttons 
    let scheduleButton = document.querySelector(".scheduleButton");
    let question1 = document.querySelector(".question1");
    //let question2 = document.querySelector(".");
    let submit = document.querySelector(".submit");
    //display for schedule only
    let displayWake = document.querySelector(".display-wakeTime");
    let displayNap = document.querySelector(".display-napTime");
    let displaySleep = document.querySelector(".display-sleepTime");
    //Inputs
    let wakeTime = document.querySelector(".wake-time");
    let napTime = document.querySelector(".nap-time");
    let sleepTime = document.querySelector(".sleep-time");
    let convo2 = document.querySelector(".convo2");
    let convo3 = document.querySelector(".convo3");
    let convo4 = document.querySelector(".convo4");
    let convo5 = document.querySelector(".convo5");
    let convo6 = document.querySelector(".convo6");
    //push new schedule to this array
    let schedules = [];

    question1.onclick = function () {
      convo2.style.visibility="visible";
    };
     convo2.onclick = function () {
     convo3.style.visibility="visible";
     };

    scheduleButton.onclick = function () {
      convo4.style.visibility="visible";
    };

  convo4.onclick = function () {
    convo5.style.visibility="visible";
      submit.onclick = function () {
        convo6.style.visibility="visible";
        addSchedule();  
        displaySchedule();
        };
  }
  console.log(displaySchedule);
    function addSchedule() {
        //input information to their own schedule
        let userWakeInput = wakeTime.value;
        let userNapInput = napTime.value;
        let userSleepInput = sleepTime.value;
        //create a new schedule for user
        let newSchedule = { wake_time: userWakeInput, nap_time: userNapInput, sleep_time: userSleepInput, };
        schedules.push(newSchedule);
    }

    function displaySchedule() {
      schedules.forEach(item => {
            displayWake.insertAdjacentHTML('beforeend', `<p>Wake Up: ${item.wake_time}</p>`);
            displayNap.insertAdjacentHTML('beforeend', `<p>Nap Time: ${item.nap_time}</p>`);
            displaySleep.insertAdjacentHTML('beforeend', `<p>Sleep Time: ${item.sleep_time}</p>`);
        });
    }

}, 100);