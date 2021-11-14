function gramophone(bandName, album, song) {
    let duration = (album.length * bandName.length) * song.length / 2;
    let rotation = Math.ceil(duration / 2.5);

    console.log(`The plate was rotated ${rotation} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')