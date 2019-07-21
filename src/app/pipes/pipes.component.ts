import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  minLimit = 100;
  limitVal = 100;
  course = {
    title: 'angular Course',
    rating: 4.75232,
    rating1: 4.75282,
    rating2: 4.7,
    rating3: .7,
    students: 2000,
    price: 10000,
    discountedPrice: 9100,
    releaseDate: new Date(2019, 7, 6),
    details: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta tempore deserunt sunt, maiores impedit.
      Laudantium ex rem quis enim reprehenderit? Amet illum minima officia quia non tenetur quam similique, cupiditate
      sint excepturi exercitationem beatae quas rerum natus sit! Officiis omnis
      nulla aliquam iusto id necessitatibus ducimus repellendus impedit ab nostrum, obcaecati dicta labore repellat tempore.
      Quae deleniti esse rem quidem ipsum harum dignissimos deserunt veritatis
      provident minus libero consequuntur in non magni placeat officia assumenda
      praesentium neque saepe, a, eligendi fuga reiciendis. Deserunt ab sed, cupiditate, molestiae officia
      unde nemo libero mollitia laudantium ipsa delectus a nam facilis repudiandae!
    `
  };
  courseString = JSON.stringify(this.course);

  constructor() { }

  ngOnInit() {
  }

}
