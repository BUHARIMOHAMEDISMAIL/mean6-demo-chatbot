import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


    @ViewChild('myDiv') myDiv: ElementRef;
    @ViewChild('stateDescription') stateDescription: ElementRef;
    @HostListener('document:mousemove', ['$event']) 


    public countryDetails: Array<any>;
    public jobofferDetails: Array<any>;
    public statefillColor: String;
    public descriptionText: String;


        const component: DashboardContentComponent = this;
        const tempValue = component.dashboardService.loadheatmap();

        setTimeout(() => {
            // console.log(this.myDiv.nativeElement.children[0].attributes.fill.value);
            // console.log(this.myDiv.nativeElement.getAttribute('fill'));
            // this.myDiv.nativeElement.setAttribute('fill', '#004040');
            for (const value of tempValue) {
                if ( value.job_offer_count > 90) {
                    for (const child of this.myDiv.nativeElement.children) {
                        if (value.code === child.attributes.id.value) {
                            child.setAttribute('fill', '#b8e994');
                        }
                    }
                } else if ( value.job_offer_count > 80) {
                    for (const child of this.myDiv.nativeElement.children) {
                        if (value.code === child.attributes.id.value) {
                            child.setAttribute('fill', '#1dd1a1');
                        }
                    }
                } else if ( value.job_offer_count > 70) {
                    for (const child of this.myDiv.nativeElement.children) {
                        if (value.code === child.attributes.id.value) {
                            child.setAttribute('fill', '#0abde3');
                        }
                    }
                } else if ( value.job_offer_count > 60) {
                    for (const child of this.myDiv.nativeElement.children) {
                        if (value.code === child.attributes.id.value) {
                            child.setAttribute('fill', '#3498db');
                        }
                    }
                } else if ( value.job_offer_count > 50) {
                    for (const child of this.myDiv.nativeElement.children) {
                        if (value.code === child.attributes.id.value) {
                            child.setAttribute('fill', '#78e08f');
                        }
                    }
                } else {
                    for (const child of this.myDiv.nativeElement.children) {
                        if (value.code === child.attributes.id.value) {
                            child.setAttribute('fill', '#60a3bc');
                        }
                    }
                }
            }
        }, 4000);

    onClick(event) {
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        // let value = idAttr.nodeValue;
        const component: DashboardContentComponent = this;
        const tempValue = component.dashboardService.loadheatmap();
        for (const value of tempValue) {
            if(idAttr.value == value.code) {
            //   alert("Currently We have "+value.job_offer_count+" jobs available in "+ value.country);
              this.jobofferDetails = value.position;
            }
          }
      }

     mouseLeave(event){
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        for (const child of this.myDiv.nativeElement.children) {
            if (idAttr.value === child.attributes.id.value) {
                console.log('color rechanged');
                child.setAttribute('fill', this.statefillColor);
            }
        }
     }

     mouseEnter(event){
        let target = event.target || event.srcElement || event.currentTarget;
        let idAttr = target.attributes.id;
        for (const child of this.myDiv.nativeElement.children) {
            if (idAttr.value === child.attributes.id.value) {
                // console.log('color changed');
                console.log(child)
                console.log(child.attributes.id.value);
                // this.statefillColor = child.getAttribute('fill');
                child.setAttribute('class', 'enabled heyo');
                // console.log(this.stateDescription);
                // console.log(this.stateDescription.nativeElement);
                // this.description.nativeElement.setAttribute('class', 'active');
                this.descriptionText = child.getAttribute('data-info');
                console.log(this.descriptionText);
            }
        }
     }

     onMouseMove(e) {
        console.log(e);
      }
