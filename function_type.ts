type LyricsModel = {
  time: string,
  lyric: string
}

function lyricsAction(lyrics: string): LyricsModel[] {
  let lyricsList: LyricsModel[] = [];
  lyricsList.push({ "time": "2023-6-7", "lyric": lyrics })
  return lyricsList;
}

let lyricsList = lyricsAction("天青色等烟雨");
let items: LyricsModel;
for (items of lyricsList) {
  console.log(items.time + '====>' + items.lyric);
}

const name1 = ["1", "2", "2"];
console.log(...name1);