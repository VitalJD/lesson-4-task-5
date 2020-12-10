import { Pipe, PipeTransform } from '@angular/core';
import { Lesson } from './lesson';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Lessons: Lesson[], searchValue: string): Lesson[] {
    if (!Lessons || !searchValue) {
      return Lessons;
    }
    return Lessons.filter(lesson => 
      lesson.id.toString().toLocaleLowerCase()
    .includes(searchValue.toLocaleLowerCase()));
  }

}
