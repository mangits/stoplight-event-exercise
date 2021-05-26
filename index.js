(function() {
  'use strict';


  const trafficControls = document.getElementById("controls");
  const trafficButtons = trafficControls.children;
  const trafficLights = document.getElementById("traffic-light");

  const changeLight = (event) => {
    const id = {stop:0, slow:1, go:2};
    const text = event.target.textContent.toLowerCase();
    const classList = trafficLights.children[id[text]].classList;
    if(classList.length === 2)
    {
      console.log(`${event.target.textContent} bulb off`);
      classList.remove(text);
    } else
    {
      console.log(`${event.target.textContent} bulb on`);
      classList.add(text);
    }
  }

  const logEnterButton = (event) => {
    console.log(`Entered ${event.target.textContent} button.`);
  }

  const logLeaveButton = (event) => {
    console.log(`Left ${event.target.textContent} button.`);
  }

  for(let i = 0; i < trafficButtons.length; i++)
  {
    trafficButtons[i].addEventListener("click", changeLight);
    trafficButtons[i].addEventListener("mouseenter", logEnterButton);
    trafficButtons[i].addEventListener("mouseleave", logLeaveButton);
  }
})();