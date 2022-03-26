import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

    constructor(private elementRef: ElementRef, private renderer: Renderer2){
        
    }
    @HostBinding('style.backgroundColor') myColor: string = 'transparent';
    @Input() defaultColor: string = 'transparent';
    @Input("appBetterHighlight") highlightColor : string = 'red';


    ngOnInit(): void {
        //this.renderer.setStyle(this.elementRef.nativeElement,"background-color","blue")
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red');
        //this.myColor = 'blue'
        this.myColor = this.defaultColor;
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
        //this.myColor = 'red'
       this.myColor =  this.highlightColor ;
    }
}