$(document).ready(function () {
  $.getJSON("data.json", function (json) {
    let html = "<table border = '3'>";

    html += `<tr>
                <th> ID </th>
                <th> Username </th>
                <th> Country </th>
                <th> Date </th>
                <th> Message </th>
            </tr>`;

    for (let i = 0; i < json.length; i++) {
      html += "<tr><td>" + json[i].id + "</td>";
      html += "<td>" + json[i].username + "</td>";
      html += "<td>" + json[i].country + "</td>";
      html += "<td>" + json[i].date + "</td>";
      html += "<td>" + json[i].message + "</td></tr>";
    }

    html += "</table>";

    $("#message").html(html);
  });
});
