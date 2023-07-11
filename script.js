fetch('projects.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (projects) {
    projects.forEach(function (project) {
      const cardProject = document.createElement('div');
      cardProject.classList.add('card');

      const projectName = document.createElement('h3');
      projectName.textContent = project.name + ' Dia: ' + project.day + '/30'
      projectName.classList.add('project-name');

      const imageProject = document.createElement('img');
      imageProject.src = project.image;
      imageProject.classList.add('project-image');

      const githubLogo = document.createElement('img');
      githubLogo.src = 'images/github.png';
      githubLogo.classList.add('github-logo');

      const projectRepository = document.createElement('a');
      projectRepository.href = project.repository;
      projectRepository.target = '_blank'
      projectRepository.appendChild(githubLogo);

      cardProject.appendChild(projectName);
      cardProject.appendChild(imageProject);
      cardProject.appendChild(projectRepository);

      document.getElementById('projects-container').appendChild(cardProject);
    });
  })
  .catch(function (error) {
    console.log('Error al cargar el archivo JSON:', error);
  });

