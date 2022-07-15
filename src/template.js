
//my manager email and office number keeps breaking and I cannot figure out why. Is this the best format to use? Should I be using divs instead of list?
function buildTeam(team) {

    function buildManager(manager) {
        return `<div class='main'>
       <div class="name-header">
            <h2> ${manager.getName()}</h2>
        <div class="icon">
        <img src="../assets/css/images/boss.png"/> <h3> ${manager.getRole()}</h3>
        </div>
        </div>
        <ul>
        <li>ID: ${manager.getId()} </li>
        <li> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li> Office Number: ${manager.getOfficeNumber()}</li>
        <ul>
        </div>
        `}
    function buildEngineer(engineer) {
        return `<div class= "main">
        <div class="name-header">
            <h2>${engineer.getName()}</h2>
            <div class="icon">
            <img src="../assets/css/images/engineer.png"/> <h3> ${engineer.getRole()}</h3>
            </div>
        </div>
        <ul>
        <li> ID: ${engineer.getId()} </li>
        <li> Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li> GitHub: <a href= "https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
        </ul>
        </div>
    `}
    function buildIntern(intern) {
        return `<div class= 'main'>
        <img src="./assets/images/intern.png" alt="graduation cap">
        <h3>${intern.getName()}</h3>
        </div>
        <div>
        <ul>
        <li> "ID: " + ${intern.getId()} </li>
        <li> 
        <a href="mailto:${intern.getEmail()}>"Email: " + ${intern.getEmail()}</a></li>
        <li> "School: " + ${intern.getSchool()}</li>
        </ul>
        </div>
        `}


    const members = []

    members.push(team.filter(teamate => teamate.getRole() === 'Manager').map(manager => buildManager(manager)))

    members.push(team.filter(teamate => teamate.getRole() === 'Engineer').map(engineer => buildEngineer(engineer)))

    members.push(team.filter(teamate => teamate.getRole() === 'Intern').map(intern => buildIntern(intern)))

    return members.join('')
}

module.exports = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../assets/css/style.css">
        <title>Team Members</title>
    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <body>
        ${buildTeam(team)}
      
    </body>
    </html>
    `
}