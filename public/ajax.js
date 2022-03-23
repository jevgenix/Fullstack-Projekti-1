window.onload = (event) => {
  var nappi = document.getElementById("nappi");
  console.log(event);

  nappi.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();

    let username = document.getElementById("username").value;
    let country = document.getElementById("country").value;
    let message = document.getElementById("message").value;

    if (!username.length || !country.length || !message.length)
      return alert("Some fields are missing!");

    fetch("/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `username=${username}&country=${country}&message=${message}`,
    });

    document.getElementById("status").innerHTML =
      "<br>" +
      "Username: " +
      username +
      "<br>" +
      "Country: " +
      country +
      "<br>" +
      "Message: " +
      message;
  });
};
