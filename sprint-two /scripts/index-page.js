const formButton = document.querySelector(".form__button");

function captureValues() {
  event.preventDefault();

  const commentContainer = document.querySelector(".comment__container");
  const firstChildContainer = commentContainer.firstChild;
  const userPicture = document.querySelector(".user__picture").src;
  const formName = document.querySelector(".form__name").value;
  const formComment = document.querySelector(".form__comment").value;

  const commentBox = document.createElement("div");
  const userForm = document.createElement("div");
  const userInfo = document.createElement("div");
  const userName = document.createElement("h3");
  const userDate = document.createElement("p");
  const comment = document.createElement("p");
  const commentLine = document.createElement("hr");

  userName.innerText = formName;
  const date = new Date();
  userDate.innerText = date.toLocaleDateString();
  comment.innerText = formComment;

  if (userPicture != "") {
    const userImg = document.createElement("img");
    userImg.setAttribute("src", userPicture);
    userImg.className = "user__picture";
    commentBox.appendChild(userImg);
  } else {
    const userImg = document.createElement("p");
    userImg.className = "user__picture";
    commentBox.appendChild(userImg);
  }

  commentBox.className = "comment__box";
  userForm.className = "user__form";
  userInfo.className = "user__info";
  userName.className = "user__name";
  userDate.className = "user__date";
  comment.className = "user__comment";
  commentLine.className = "line";

  commentContainer.insertBefore(commentBox, firstChildContainer);
  commentBox.appendChild(userForm);
  userForm.appendChild(userInfo);
  userInfo.appendChild(userName);
  userInfo.appendChild(userDate);
  userForm.appendChild(comment);
  commentContainer.appendChild(commentLine);

  const form = document.querySelector(".form");
  form.reset();
}

formButton.addEventListener("click", captureValues);