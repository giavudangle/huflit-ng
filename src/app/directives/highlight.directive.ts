import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: 'app-highlight',
    
})
export class HighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef){

    }

    ngOnInit(): void {
        console.log(this.elementRef);
    }
    
}