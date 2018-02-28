import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'sample'
})

export class SamplePipe implements PipeTransform {
    transform(value: string) {
        if (!value) {
            return value;
        }
    }
}
