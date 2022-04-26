var btnChangeData = document.getElementById("change-data");
var homePillsContainer = document.getElementById("v-pills-home-container");
var homeChangeData = document.getElementById("v-pills-home-change-data");
var returnToHomePills = document.getElementById('return-to-v-pills-home');
var returnToHomePillsByOK = document.getElementById('save-data-ok');

homeChangeData.style.display = "none";

btnChangeData.addEventListener("click", function(){

  homePillsContainer.style.display = "none";
  homeChangeData.style.display = "block";

});

returnToHomePills.addEventListener("click", function(){

  homeChangeData.style.display = "none";
  homePillsContainer.style.display = "block";

});

returnToHomePillsByOK.addEventListener("click", function(){

  homeChangeData.style.display = "none";
  homePillsContainer.style.display = "block";

});

var homeChangePassword = document.getElementById("v-pills-home-change-password");
var btnChangePassword = document.getElementById("change-password");

homeChangePassword.style.display = "none";

btnChangePassword.addEventListener("click", function(){

  homePillsContainer.style.display = "none";
  homeChangePassword.style.display = "block";

});


newPassword1 = document.getElementById("newPassword1")
newPassword2 = document.getElementById("newPassword2")
savePassword = document.getElementById("save-password")
invalidFeedbackPassword = document.getElementById("invalidFeedbackPassword")

invalidFeedbackPassword.style.display = "none";


savePassword.addEventListener("click", function(){

  if ( newPassword1.value == newPassword2.value ) {

    invalidFeedbackPassword.style.display = "none";
    newPassword2.style.color = "green";
    newPassword2.style.borderColor = "green";

  } else {

    event.preventDefault()
    event.stopPropagation()

    invalidFeedbackPassword.style.display = "block";
    newPassword2.style.color = "red";
    newPassword2.style.borderColor = "red";

  }

});

var returnToHomePillsByPasswordOk = document.getElementById('save-password-ok');

returnToHomePillsByPasswordOk.addEventListener("click", function(){

  homePillsContainer.style.display = "block";
  homeChangePassword.style.display = "none";

});

var returnToHomePillsByPassword = document.getElementById('return-to-v-pills-home-password');

returnToHomePillsByPassword.addEventListener("click", function(){

  homePillsContainer.style.display = "block";
  homeChangePassword.style.display = "none";

});

var addNewBranch = document.getElementById('add-new-branch');
var branchesContainer = document.getElementById('v-pills-branches-container');
var newBrnach = document.getElementById('v-pills-add-new-branches');

newBrnach.style.display = "none";

addNewBranch.addEventListener("click", function(){

  newBrnach.style.display = "block";
  branchesContainer.style.display = "none";

});

var saveNewBranch = document.getElementById('save-new-branches-ok');

saveNewBranch.addEventListener("click", function(){

  newBrnach.style.display = "none";
  branchesContainer.style.display = "block";

});

var returnToHomePillsForBranches = document.getElementById('return-to-v-pills-home-branches');

returnToHomePillsForBranches.addEventListener("click", function(){

  newBrnach.style.display = "none";
  branchesContainer.style.display = "block";

});