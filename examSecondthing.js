function favoriteGenres(oldGenres, commands) {
  var genres = oldGenres.split(' | ');

  for (var i = 0; i < commands.length; i++) {
    var parts = commands[i].split(' ');
    var command = parts[0];
    var genre1 = parts[1];
    var genre2 = parts[2];

    if (command === 'Join') {
      if (!genres.includes(genre1)) {
        genres.push(genre1);
      }
    } else if (command === 'Drop') {
      if (genres.includes(genre1)) {
        genres.splice(genres.indexOf(genre1), 1);
      }
    } else if (command === 'Replace') {
      if (genres.includes(genre1) && !genres.includes(genre2)) {
        genres.splice(genres.indexOf(genre1), 1, genre2);
      }
    } else if (command === 'Prefer') {
      if (genres.includes(genre1) && genres.includes(genre2)) {
        var index1 = genres.indexOf(genre1);
        var index2 = genres.indexOf(genre2);
        var temp = genres[index1];
        genres[index1] = genres[index2];
        genres[index2] = temp;
      }
    }
  }
  // return genres.join(' ');
  return console.log(genres.join(' '));
}
// console.log(favoriteGenres('Poetry | Romance', ['Drop children', 'Replace Fantasy Crime', 'Stop!']));
favoriteGenres('Poetry | Romance', ['Drop children', 'Replace Fantasy Crime', 'Stop!']);
// favoriteGenres(["Romance | Fiction | Horror | Mystery",
// "Drop Romance",
// "Join Fantasy",
// "Prefer 1 2",
//  "Stop!"]);
