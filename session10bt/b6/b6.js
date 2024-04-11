"use strict";
class Song {
    constructor(id, name, length) {
        this.id4 = id;
        this.name4 = name;
        this.length = length;
    }
    getName() {
        return this.name4;
    }
    getLength() {
        return this.length;
    }
    setName(name) {
        this.name4 = name;
    }
    setLength(length) {
        this.length = length;
    }
}
let song = new Song(10, "song1", '180s');
console.log(song.getLength());
console.log(song.getName());
song.setName("song2");
song.setLength('300s');
console.log(song.getName());
console.log(song.getLength());
