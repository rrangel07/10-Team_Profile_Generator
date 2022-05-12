generateTeam = (team) =>{
    const render=[];
    //manager
    const manager = 
    `<div class="col-lg-3 col-md-6 col-12 mb-4 ">
    <div class="card customshadow">
        <div class="card-header">
            <h5 class="card-title">${team.manager.getName()}</h5>
            <h6 class="card-subtitle mb-2"><i class="fa-solid fa-briefcase"></i> ${team.manager.getRole()}</h6>
        </div>
        <div class="card-body">
            <div class="card justify-content-center">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fa-solid fa-id-card"></i> ID: ${team.manager.getId()}</li>
                    <li class="list-group-item"><i class="fa-solid fa-at"></i> Email: <a href="mailto:${team.manager.getEmail()}">${team.manager.getEmail()}</a></li>
                    <li class="list-group-item"><i class="fa-solid fa-door-open"></i> Office: ${team.manager.getOffice()}</li>
                </ul>
            </div>
        </div>
    </div>
</div>`
    render.push(manager);
    (team.engineers).forEach(eng => {
        const engineer =
        `<div class="col-lg-3 col-md-6 col-12 mb-4">
        <div class="card customshadow">
            <div class="card-header">
                <h5 class="card-title">${eng.getName()}</h5>
                <h6 class="card-subtitle mb-2"><i class="fa-solid fa-glasses"></i> ${eng.getRole()}</h6>
            </div>
            <div class="card-body">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i class="fa-solid fa-id-card"></i> ID: ${eng.getId()}</li>
                        <li class="list-group-item"><i class="fa-solid fa-at"></i> Email: <a href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></li>
                        <li class="list-group-item"><i class="fa-brands fa-github"></i> Github: <a href="https://www.github.com/${eng.getGitHub()}" target="_blank" rel="noopener noreferrer">${eng.getGitHub()}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    render.push(engineer);
    });
    (team.interns).forEach(int => {
        const intern =
        `<div class="col-lg-3 col-md-6 col-12 mb-4">
        <div class="card customshadow">
            <div class="card-header">
                <h5 class="card-title">${int.getName()}</h5>
                <h6 class="card-subtitle mb-2"><i class="fa-solid fa-graduation-cap"></i> ${int.getRole()}</h6>
            </div>
            <div class="card-body">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i class="fa-solid fa-id-card"></i> ID: ${int.getId()}</li>
                        <li class="list-group-item"><i class="fa-solid fa-at"></i> Email: <a href="mailto:${int.getEmail()}">${int.getEmail()}</a></li>
                        <li class="list-group-item"><i class="fa-solid fa-school-flag"></i> School: ${int.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    render.push(intern);
    });


return `
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./style.css" />

    <title>Team Builder</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid mb-4" style="height: 100px;">
        <div class="container">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>

        <div class="container">
            <div class="row justify-content-around">
            ${render}                
            </div>
        </div>
    </div>

    <script src="https://kit.fontawesome.com/57cca0be0e.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
`
}



module.exports = generateTeam;