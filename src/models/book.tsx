class Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  series?: string; // optional property
  image?: string; // optional property

  constructor(id:number,title: string, author: string, year: number, genre: string, series?: string, image?: string) {
    
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.series = series;
    this.image = image;
  }
}
export default Book;