//npm i @mailchimp/mailchimp_marketing
const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const app = express();

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("link"));

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running at port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

mailchimp.setConfig({
  apiKey: "2d84e7565991cc8aee5565dc1704e69e-us1",
  /* Change this API key with
   your OWN API key in MailChimp -> Admin site -> Account -> Extras -> API keys*/
  server: "us1" // Change this server number with your API server number
});

app.post("/", function(req, res) {
  const listId = "5bb40b69e8";
  /* Change this Audience ID with your OWN Audience
   ID through MailChimp -> Admin Site -> Audience -> Settings -> Audience name
   and defaults */

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