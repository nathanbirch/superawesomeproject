const myDiv = document.getElementById('actionDiv');

myDiv.addEventListener('click', myFunction);

function myFunction() {
  const listItems = document.getElementsByClassName('beautifulListItem');
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = 'hello world';
  }
}
