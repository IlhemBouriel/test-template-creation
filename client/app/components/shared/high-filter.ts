import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highligh'
})

export class HighlightSearch implements PipeTransform {

    transform(value: string, args: string): any {
    if (args != null) {
    let endLength = args.length;
    let startIndex = 0;
    let index ;
    while(index = value.toLowerCase().indexOf(args.toLowerCase(),startIndex) > -1)
    {
            let matchingString = value.substr(index, endLength);
            value.replace(matchingString, "<mark>" + matchingString + "</mark>");
            startIndex = index + endLength;

    }
    return value;
    }
}
}