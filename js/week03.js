const ourImage = document.getElementById('testImage');
const imageInput = document.getElementById('imageInput');
const imageButton = document.getElementById('imageButton');
const themeButton = document.getElementById('themeButton');

const awesomeFunction = () => {
  // Getting the value of the input field
  newImageUrl = imageInput.value;
  // Changing the src attribute of the image
  ourImage.src = newImageUrl;
};

const changeTheme = () => {
  // Getting the body element
  const body = document.querySelector('body');
  // change text if dark
  if (body.classList.contains('dark')) {
    themeButton.innerText = 'Change to Dark Theme';
  } else {
    themeButton.innerText = 'Change to Light Theme';
  }

  body.classList.toggle('dark');
};

imageButton.addEventListener('click', awesomeFunction);
themeButton.addEventListener('click', changeTheme);
