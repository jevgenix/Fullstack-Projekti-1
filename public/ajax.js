window.onload = (event) => {
  var nappi = document.getElementById("nappi");

  nappi.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let country = document.getElementById("country").value;
    let message = document.getElementById("message").value;
    console.log(username, country, message);

    if (username == "" || country == "" || message == "") {
      return alert("Some fields are missing!");
    } else {
      let xmlhttp = new xmlhttp.XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("status").innerHTML = this.responseText;
          console.log(this.responseText);
        }
      };

      xmlhttp.open("POST", "/message", true);
      xmlhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      xmlhttp.send(
        "name =" + username + "&country=" + country + "&message=" + message
      );
      document.getElementById("status").innerHTML =
        "name= " + username + "&country= " + country + "&message= " + message;
    }
  });
};
