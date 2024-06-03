export class Comment {
  name: string;
  stars: number;
  description: string;
  constructor(
    name: string = '',
    stars: number = 5,
    description: string = ''
  ) {
    this.name = name;
    this.stars = stars;
    this.description = description;
  }
}
