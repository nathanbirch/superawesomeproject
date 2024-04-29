console.log('Hello, World!');

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('nameForm');
  const input = document.getElementById('nameInput');
  const list = document.getElementById('nameList');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    if (input.value.trim() !== '') {
      // Check if the input is not empty
      const listItem = document.createElement('li'); // Create a new list item
      listItem.textContent = input.value; // Set the text of the list item to the input value
      list.appendChild(listItem); // Add the list item to the list
      input.value = ''; // Clear the input for new entries
      document.getElementById('nameInputError').classList.add('hidden');
    } else {
      document.getElementById('nameInputError').classList.remove('hidden');
    }
  });
});
