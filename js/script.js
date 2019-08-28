const searchBar = document.querySelector('input');
searchBar.addEventListener("keyup", function (event) {
  const term = event.target.value.toLowerCase();
  const gallery = document.getElementsByClassName("gallery")[0]
  const photos = gallery.getElementsByTagName('a');
  Array.from(photos).forEach(function (photo) {
    const title = photo.getAttribute('data-title');
    console.log(title)
    if (title.toLowerCase().indexOf(term) != -1) {
      photo.style.display = 'block';
    } else {
      photo.style.display = 'none';
    }
  });
});
