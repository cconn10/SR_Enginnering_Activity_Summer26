// Load the data
const response = await fetch("./data.json");
const data = await response.json();

// Get table header and body elements
let header = document.getElementById("h2h-table-header").children[0];
let body = document.getElementById("h2h-table-body");

let dataList = Object.entries(data); // Get data as list
let teams = dataList.map((r) => r[0]); // Get list of team names

// Create rows and cells for each head-to-head
teams.forEach((team) => {
    //Add table rows
    header.innerHTML += "<th>" + team + "</th>";
    body.innerHTML += '<tr id="row-' + team + '">' + "</tr>";
    let teamRow = document.getElementById("row-" + team);

    teamRow.innerHTML += "<td id='header-col-" + team + "'>" + team + "</td>"; // Create row headers for each team

    teams.forEach((team2) => {
        teamRow.innerHTML += "<td id='cell-" + team + "-" + team2 + "'></td>"; // Create cell for each team head-to-head
    });
});

// Loop through each record to fill table cells
for (let i = 0; i < teams.length; i++) {
    let teamRecords = dataList[i];
    let teamName = teamRecords[0];

    // Fill cells where a team lines up with itself
    document.getElementById("cell-" + teamName + "-" + teamName).innerText +=
        "--";

    // Loop through teams to get their head to head win/loss
    Object.entries(teamRecords[1]).forEach((teamAgainst) => {
        // Only fill cells that don't have data yet
        if (
            document.getElementById("cell-" + teamName + "-" + teamAgainst[0])
                .innerText == ""
        )
            document.getElementById(
                "cell-" + teamName + "-" + teamAgainst[0]
            ).innerText += teamAgainst[1].W;
        if (
            document.getElementById("cell-" + teamAgainst[0] + "-" + teamName)
                .innerText == ""
        )
            document.getElementById(
                "cell-" + teamAgainst[0] + "-" + teamName
            ).innerText += teamAgainst[1].L;
    });
}
