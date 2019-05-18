'use strict';
const spotify = require('../lib/api');

class Spotifye {
  async getTrack(url) {
    const ID = await this.getID(url);
    this.extrTrack(ID);
    return ID;
  }
  async getAlbum(url) {
    const ID = await this.getID(url);
    return ID;
  }
  async getArtist(url) {
    const ID = await this.getID(url);
    return ID;
  }
  async getPlaylist(url) {
    const ID = await this.getID(url);
    return ID;
  }

  async getID(url) {
    var token = await spotify.setup();
    spotify.setToken(token);
    var id;
    for (let i = 0; i < url.length; i++) {
      if (i > 10 && url[i] == '/') {
        for (let j = i; j < url.length; j++) {
          if (url[j] == '/') {
            id = url.slice(++j);
          }
        }
      }
    }
    return id;
  }

  async extrTrack(trackId) {
    const trackData = await spotify.extractTrack(trackId);    
    console.log(trackData);
  }
}

module.exports = Spotifye;