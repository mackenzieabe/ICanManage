
//add in icons?
//how do I add an href for the email? 
function buildTeam(team) {
    
    function buildManager(manager) {
        return `<div>
        <h1>${manager.getName()}</h1>
        </div>
        <div>
        <ul>
        <li> "ID: " + ${manager.getId()} </li>
        <li> 
        <a href="mailto:${manager.getEmail()}> "Email: " + ${manager.getEmail()}</a></li>
        <li> "Office Number: " + ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        `}
    function buildEngineer(engineer) {
        return `<div>
            <h1>${engineer.getName()}</h1>
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
        return `<div>
        <h1>${intern.getName()}</h1>
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
        <link rel='stylesheet' href ='style.css'>
        <title>Team Members</title>
    </head>
    <body>
        ${buildTeam(team)}
    </body>
    </html>
    `
}