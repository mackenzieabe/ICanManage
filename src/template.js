
//my manager email and office number keeps breaking and I cannot figure out why. Is this the best format to use? Should I be using divs instead of list?
function buildTeam(team) {

    function buildManager(manager) {
        return `<div class='main'>
        <div>
        <img src= "./assets/images/boss.png" alt="coffee cup with boss written on it">
        <h3>
        ${manager.getName()}</h3>
        </div>
        <div> ID:  ${manager.getId()} </div>
        <div> Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
        <div> Office Number: ${manager.getOfficeNumber()}</div>
        </div>
        `}
    function buildEngineer(engineer) {
        return `<div class= 'main'>
        <img src= "./assets/images/engineer.png" alt="pair of glasses">
            <h3>${engineer.getName()}</h3>
        </div>
        <div><img src='' alt=''> Engineer</div>
        <div>
        <ul>
        <li> "ID: " + ${engineer.getId()} </li>
        <li>  
        <a href="mailto:${engineer.getEmail()}>"Email: " + ${engineer.getEmail()}</a></li>
        <li><a href= "https://github.com/${engineer.getGitHub()}>"Github: " + ${engineer.getGitHub()}</a></li>
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
        <link rel="stylesheet" href="./dist/team.html/assets/css/style.css">
        <title>Team Members</title>
    </head>
    <header>
        <h1>My Team</h1>
    <body>
        ${buildTeam(team)}
    </body>
    </html>
    `
}