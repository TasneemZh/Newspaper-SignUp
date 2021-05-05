require("dotenv").config();
//npm i @mailchimp/mailchimp_marketing
const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const app = express();

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("link"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

mailchimp.setConfig({
  apiKey: "4ab2841f32bd03f403820927c07a5fdd-us1", // Change this API key with your API key
  server: "us1" // Change this server number with your API server number
});

app.post("/", function(req, res) {
  /* Change this Audience key with your Audience ID through MailChimp ->
  Admin Site -> Audience -> Settings -> Audience name and defaults */
  const listId = "5bb40b69e8";

  async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: req.body.email,
      status: "subscribed",
      merge_fields: {
        FNAME: req.body.firstName,
        LNAME: req.body.lastName
      }
    });

    res.sendFile(__dirname + "/success.html")
    console.log("");
    console.log("Successfully added contact as an audience member.");
    console.log("The contact's id is" + (response.id));
  };

  run().catch(e => res.sendFile(__dirname + "/failure.html"));
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});

// Old server configuration
// app.listen(process.env.PORT || 3000, function() {
//   console.log("Server is running at port 3000");
// });

// Server configuration
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

let server = app.listen(port, function() {
  console.log("The server is running successfully!")
});

server.on("clientError", (err, socket) => {
  console.error(err);
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});
