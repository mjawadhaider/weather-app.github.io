# Weather Application (Web Worker Implementation)

Description: A simple application that fetches the current weather of the city "Lahore" along with a 14-day forecast.

How to run locally?
 -> git clone https://github.com/mjawadhaider/webworker.github.io.git
 -> Use Live Server extension on VS Code or directly load index.html into the browser

Benefits: 
  Web Workers are beneficial where large and complex calculations are used, they provide a very smooth way of the working app by handling the tasks at the backend without disturbing the client side.

Challenges:
  I faced some issues with how to send back the response from the API call, I found the solution on https://javascript.plainenglish.io/understanding-web-workers-in-js-with-real-world-example-1629a283aeec#:~:text=Real%2DWorld%20Example%3A&text=On%20clicking%20this%20button%20we,calculation%20from%200%20to%201000000000.&text=The%20result%20is%20shown%20in,web%20worker%20in%20the%20background. 
