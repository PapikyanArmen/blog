export interface IBlog {
  actors: string[];
  desc: string;
  directors: string[];
  genre: string[];
  image_url: string;
  thumb_url: string;
  imdb_url: string;
  name: string;
  rating: number;
  year: number;
  id: string;
  index: number;
  comments?: {
    text: string;
    date: Date;
  }[];
}
