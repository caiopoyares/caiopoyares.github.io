class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.alert = document.createElement("div");
    this.userBox = document.createElement("div");
  }

  showProfile(data) {
    // remove alert if there is one
    if (this.alert) {
      this.alert.remove();
    }
    ui.removeErrorAlert();
    this.userBox.className = "user__box";
    this.userBox.innerHTML = `
        <div class="img__box">
          <img class="user__image" src="${
            data.profile.avatar_url
          }" alt="user avatar">
        </div>
        <div class="user__bio d-flex flex-column mr-3">
          <h2 class="h4 mb-0">${data.profile.name}</h2>
          <h3 class="m-1 h5 text-secondary font-weight-light">${
            data.profile.login
          }</h3>
          <table class="mt-auto">
            <tr>
              <th>Blog</th>
              <td>${data.profile.blog}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>${data.profile.email}</td>
            </tr>
            <tr>
              <th>Localização</th>
              <td>${data.profile.location}</td>
            </tr>
          </table>
        </div>
        <div class="ml-auto p-1">
            <button class="btn btn-primary d-flex friendsBtn" type="button"><i class="fas fa-user-friends mr-2"></i>Adicionar</button>
          </div>
        `;
    const title = document.createElement("h4");
    title.className = "mt-4";
    title.textContent = "Perfil";

    this.profile.appendChild(title);
    this.profile.appendChild(this.userBox);
  }

  showRepos(repositorie) {
    const repo = document.createElement("div");
    repo.className = "mt-4";

    let output = "";

    repositorie.forEach(rep => {
      output += `<li class="list-group-item">
      <h6><a href="${rep.html_url}" target="_blank">${rep.name}</a></h6>
      <p class="text-secondary mb-1">${rep.description}</p>`;
    });

    repo.innerHTML = `
    <h4>Repositórios recentes</h4>
    <ul class="list-group">
      ${output}
    </ul>
    `;
    this.profile.appendChild(repo);
  }

  showErrorAlert(className) {
    this.alert.innerHTML =
      '<i class="far fa-frown mr-2"></i>Desculpe, o usuário não foi encontrado. Tente novamente.';
    this.alert.className = `alert alert-${className}`;
    this.profile.appendChild(this.alert);
  }

  removeErrorAlert() {
    setTimeout(() => this.alert.remove(), 3000);
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
