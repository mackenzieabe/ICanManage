
//add in icons?

function buildTeam(team) {

    function buildEngineer(engineer) {
        return `<div>
            <h1>${engineer.getName()}</h1>
        </div>
        <div>
        <ul>
        <li> "ID: " + ${engineer.getId} </li>
        <li> "Email: " + ${engineer.getEmail} </li>
        <li> "Github: " + ${engineer.getGitHub}</li>
        </ul>
        </div>
    `}
    function buildIntern(intern) {
        return `<div>
        <h1>${intern.getName()}</h1>
        </div>
        <div>
        <ul>
        <li> "ID: " + ${intern.getId} </li>
        <li> "Email: " + ${intern.getEmail} </li>
        <li> "School: " + ${intern.getSchool}</li>
        </ul>
        </div>
        `}
    function buildManager(manager) {
        return `<div>
            <h1>${manager.getName()}</h1>
        </div>
        <div>
        <ul>
        <li> "ID: " + ${manager.getId} </li>
        <li> "Email: " + ${manager.getEmail} </li>
        <li> "Office Number: " + ${manager.getOfficeNumber}</li>
        </ul>
        </div>
        `}

    const members = []

    members.push(team.filter(teamate => teamate.getRole() === 'Manager').map(manager => buildManager(manager)))



    return members.join('')
}

module.exports = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Document</title>
    </head>
    <body>
        ${buildTeam(team)}
    </body>
    </html>
    `
}