// Search input
const searchUser = document.getElementById("searchUser");
const submitBtn = document.getElementById("submitBtn");

//Initializing objects
const github = new GitHub();
const ui = new UI();

// Search input event listener
submitBtn.addEventListener("click", e => {
  e.preventDefault();

  //Clear profile
  ui.clearProfile();

  // Get input text
  let userText = searchUser.value;

  if (userText !== "") {
    github.getUser(userText).then(data => {
      console.log(data);
      if (data.profile.message !== "Não encontrado") {
        //Show profile in the UI
        ui.showProfile(data);

        //Show latest repositories
        ui.showRepos(data.repos);

        //clear input field
        searchUser.value = "";
      } else {
        //Show error
        ui.showErrorAlert("danger");
      }
    });
  }
});
