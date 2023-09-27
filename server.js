const express = require("express"); /// express variable and require express package from express

const app = express();

// acces  through web browser
// app.get(url,callbackFunction) // callbackFunction two parameters request response
// request is what client sent to the server 
// response is what the server response back to the client 
app.get("", (req,res) => {
    res.send(`<h1>hello client</h1> `); // send to the client 
});

app.listen("3000", () => {
  // listen to port 3000
  console.log("node api"); // what will listen to
});
