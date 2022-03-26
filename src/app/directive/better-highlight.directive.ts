import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
    @HostBinding('style.backgroundColor') myColor: string = 'transparent';

    constructor(private elementRef: ElementRef, private renderer: Renderer2){
        
    }
    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue")
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
        this.myColor = 'blue'
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
        this.myColor = 'red'
    }
}