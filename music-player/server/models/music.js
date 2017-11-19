/**
 * 音乐模型
 */
class Music {
  /**
   * 构造音乐对象
   * @param  {number} id       标识
   * @param  {string} name     歌曲名
   * @param  {string} artist   艺术家
   * @param  {number} duration 时长
   * @param  {string} music    歌曲文件名
   * @param  {string} poster   海报文件名
   * @param  {string} lyric    歌词文件名
   * @return {Music}           音乐对象
   */
  constructor(id, name, artist, duration, music, poster, lyric) {
    this.id = id
    this.name = name
    this.artist = artist
    this.duration = duration
    this.music = music
    this.poster = poster
    this.lyric = lyric
  }

  static find() {
    return storage
  }

  static findOne(id) {
    return storage.find(s => s.id === id)
  }

  delete() {
    return storage.splice(storage.indexOf(this), 1)
  }

  save() {
    storage.indexOf(this) === -1 && storage.push(this)
    return true
  }

  update() {
    return true
  }
}

const storage = [
  new Music(1,    '林俊杰 - 崇拜',             '林俊杰',     342,    '林俊杰 - 崇拜.mp3',         '林俊杰 - 崇拜.jpg',           '林俊杰 - 崇拜.lrc'     ),
  new Music(2,    '回音哥 - 你的配角',         '回音哥',     342,    '回音哥 - 你的配角.mp3',     '回音哥 - 你的配角.jpg',       '回音哥 - 你的配角.lrc'     )
]

module.exports = Music
