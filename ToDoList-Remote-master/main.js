let addButton = $("#add-btn");

let clearButton = $("#clear-btn");

let textValue = $("#add");

let listItems = [];

let listContainer = $("#cont");

window.onload = function() {
  let list = JSON.parse(localStorage.getItem("items")); //loads our array from local storage
  if (list.title == "") {
    listItems = []; //if there is nothing in local storage, we will just init an empty array
  } else {
    listItems = list; //if there is something in storage, we will overwrite our old array.
  }
  console.log(list);
}; //so everything we add something, the array gets updated!

addButton.click(e => {
  e.preventDefault;

  let id = Date.now(); //gets unique id for our div

  listItems.push({
    title: textValue.val(),
    date: "",
    info: "",
    id: id //sets id as property so we can reuse it
  });

  listContainer.append(`<div class="container row p-1" id="${id}">
  <!-- OK ICONS -->

  <button type="button" class="btn btn-success btn-sm" disabled>
    <i class="fa fa-check"></i>
  </button>
  <!-- TOOGLE TASK LIST -->
  <button
    type="button"
    class="btn btn-light btn-sm"
    data-toggle="collapse"
    data-target="#task"
  >
    <i class="fa fa-list-alt"></i>
  </button>

  <!-- DELETE THE TASK [js neede to delete from local storage] -->
  <button
    type="button"
    class="btn btn-light btn-sm"
    data-target="#task"
  >
    <i class="fa fa-trash-o"></i>
  </button>
  <div class="container-item mt-1 ml-3" id="taskName">
    ${textValue.val()}
  </div>
</div>`);

  let button = $("#" + id + " " + "button:nth-child(3)");
  button.click(() => {
    $("#" + id).remove();
  });

  localStorage.setItem("items", JSON.stringify(listItems)); //pushes our array into local storage everytime we add something

  console.log(listItems);
});

clearButton.click(() => {
  localStorage.clear();
  listItems = [];
}); //clears local storage
