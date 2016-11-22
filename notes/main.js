function save() {
  localStorage.setItem('list', $('.list').html());
}

function setList() {
  if (localStorage.list !== undefined) {
    $('.list').html(localStorage.list);
  }
}
