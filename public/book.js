$(document).ready(function () {
  $.getJSON("data.json", function (json) {
    let html = "<table class='table table-striped table-dark'";
    html += `<thead>
              <tr>
                <th scope="col"> ID </th>
                <th scope="col"> Username </th>
                <th scope="col"> Country </th>
                <th scope="col"> Date </th>
                <th scope="col"> Message </th>
            </tr>
            </thead>
            <tbody>`;

    for (let i = 0; i < json.length; i++) {
      html += "<tr><td>" + json[i].id + "</td>";
      html += "<td>" + json[i].username + "</td>";
      html += "<td>" + json[i].country + "</td>";
      html += "<td>" + new Date(json[i].date).toLocaleString("fi") + "</td>";
      html += "<td>" + json[i].message + "</td></tr>";
    }

    html += "</tbody></table>";

    $("#message").html(html);
  });
});
