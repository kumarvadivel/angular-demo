import { Component, Input, OnInit } from '@angular/core';
import { EnvironmentService } from '@sba-environments/environment.service';
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() data
  config={
    delays:5,
    activeCarouselIndex:0
  }
  timeout

  defaultCarouselData =[
    {
        image: 'assets/images/test/banner1.webp',
        title: '',
        description: ''
    },
    {
        image: 'assets/images/test/banner2.webp',
        title: '',
        description: ''
    },
    {
        image: 'assets/images/test/banner3.webp',
        title: '',
        description: ''
    },
    {
      image: 'assets/images/test/banner4.webp',
      title: '',
      description: ''
  }
    
]
  constructor(public environmentService:EnvironmentService) { 
    
  }

  ngOnInit(): void {
    this.initialiseCarousel()
  }

  ngOnDestroy(): void{
    clearInterval(this.timeout)
  }
  initialiseCarousel(){
    this.timeout=setInterval(() => {
      this.config.activeCarouselIndex +=1
      if(this.config.activeCarouselIndex==this.data.length){
        this.config.activeCarouselIndex=0
      }
    }, this.config.delays*1000);
  }

  setCurrentCarousel(index){
    clearInterval(this.timeout)
    
    this.config.activeCarouselIndex = index
  }
}
