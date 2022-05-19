import { Component } from '@angular/core';
import { TrafficDeathService } from './traffic-death.service';
import { Chart } from 'chart.js';
import { Traffic } from './traffic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

canvas: any;
ctx: any;
list_Burgenland:Array<any>=[];
list_Niederösterreich: Array<any>=[];
list_Kärnten:Array<any>=[];
list_Oberösterreich:Array<any>=[];
list_Salzburg:Array<any>=[];
list_Steiermark:Array<any>=[];
list_Tirol:Array<any>=[];
list_Vorarlberg:Array<any>=[];
list_Wien:Array<any>=[];



endyear=2020;
years= this.generateYearsBetween(2000, 2020);
myChart:Chart;
data: Array<Traffic>;
filter_country:string[]


    constructor( private service: TrafficDeathService) {}
   

    ngOnInit() {
      this.service.getData()
        .subscribe((res:any) => {
            this.data=res['verkehrstote'];
            console.log(this.data);
           
             
    

     for(let i=0; i<this.years.length; i++){
      var y=this.years[i].toString();
      this.list_Niederösterreich.push(this.countOccurences(this.data,y,"Niederösterreich"));
      this.list_Oberösterreich.push(this.countOccurences(this.data,y,"Oberösterreich"));
      this.list_Salzburg.push(this.countOccurences(this.data,y,"Salzburg"));
      this.list_Steiermark.push(this.countOccurences(this.data,y,"Steiermark"));
      this.list_Tirol.push(this.countOccurences(this.data,y,"Tirol")); 
      this.list_Vorarlberg.push(this.countOccurences(this.data,y,"Vorarlberg")); 
      this.list_Wien.push(this.countOccurences(this.data,y,"Wien")); 
      this.list_Burgenland.push(this.countOccurences(this.data,y,"Burgenland")); 
      this.list_Kärnten.push(this.countOccurences(this.data,y,"Kärnten")); 

      

      


  }
            


            this.canvas = document.getElementById('myChart');
            this.ctx = this.canvas.getContext('2d');
            this.myChart = new Chart(this.ctx, {
            type: 'line',
            data: {
              labels:this.years,
              datasets: [
                
                {
                  label: 'Burgenland',
                  data: this.list_Burgenland,
                  borderWidth: 1,
                  backgroundColor:"#8B008B"
                  
                },
                
                {
                label: 'Niederösterreich',
                data: this.list_Niederösterreich,
                borderWidth: 1
                
              },
              {
                label: 'Kärnten',
                data: this.list_Kärnten,
                borderWidth: 1,
                backgroundColor:"##C71585"
                
              },
              

              {
                label: 'Oberösterreich',
                data: this.list_Oberösterreich,
                borderWidth: 1,
                borderColor:"#3CB371"
              },

              {
                label: 'Salzburg',
                data: this.list_Salzburg,
                borderWidth: 1,
                borderColor:"#1B4F72"
              },
              {
                label: 'Steiermark',
                data: this.list_Steiermark,
                borderWidth: 1,
                borderColor:"#1B4F72" 
              },
              {
                label: 'Tirol',
                data: this.list_Tirol,
                borderWidth: 1,
                borderColor:"#FFFF00"
                 
              },
              {
                label: 'Vorarlberg',
                data: this.list_Vorarlberg,
                borderWidth: 1,
                borderColor:"#FF0000"
                 
              },
              {
                label: 'Wien',
                data: this.list_Wien,
                borderWidth: 1,
                borderColor:"#6495ED" 
                 
              },
           
            ]
            },
            options: {
              
                responsive: false,
                scales: {
                 y: {
                    title: {
                      display: true,
                      text: 'Getoetete'
                    },
                    min: 0,
                    max: 500,

                    ticks: {
                      stepSize: 100
                    }
                  },
             

                }
            }
            });


        })
 
        
}   

countOccurences(data:any[],year:string, country: string): number{
  var count=data.filter((obj) => obj.Berichtsjahr.toString()=== year && obj.Bundesland===country).length;
 return count;
}
 generateYearsBetween(startYear = 2000, endYear: number) {
  const endDate = endYear || new Date().getFullYear();
  let years = [];
  for (var i = startYear; i <= endDate; i++) {
    years.push(startYear);
    startYear++;
  }
  return years;
}

changeYear(endyear:number){
  this.myChart.data.labels=this.generateYearsBetween(2000,endyear);
  this.myChart.update();
}
        
}
