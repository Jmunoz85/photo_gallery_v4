const searchBar = $('#search').querySelector('input');
searchBar.addEventListener(keyup, function (event) {
  const term = event.target.value.toLowerCase();
  const photos = list.getElementsByClassName('gallery');
  Array.from(photos).forEach(function (photo) {
    const title = photo.firstElementChild.text.content;
    if (title.toUpperCase().indexOf(term) != -1) {
      photo.style.display = 'block';
    } else {
      photo.style.display = 'none';
    }
  });
});
