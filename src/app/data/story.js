/**
 * A story represents an ordered grouping of chapters along with some meta data
 * about the story itself.
 */
class Story {
  constructor(id, title, blurb, chapters) {
    this.id = id;
    this.title = title;
    this.blurb = blurb;
    this.chapters = chapters;
  }
}