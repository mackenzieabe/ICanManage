function buildTeam(team) {

    function buildEngineer(engineer) {
        return `<div>
            <h1>${engineer.getName()}</h1>
        </div>`
    }
    function buildIntern(intern) {

    }
    function buildManager(manager) {
        return `<div>
            <h1>${manger.getName()}</h1>
        </div>`
    }

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