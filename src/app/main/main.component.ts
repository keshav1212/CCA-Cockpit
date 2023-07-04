import { Component,ElementRef,Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { DataTableComponent } from '../data-table/data-table.component';
import { Main1Component } from '../main1/main1.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @ViewChild('picker') picker!:MatDatepicker<Date>;
  @ViewChild('hiddenInput') hiddenInput!:ElementRef;
  openCalendar(){
    this.hiddenInput.nativeElement.focus();
    this.picker.open();
  }
  
  @ViewChild('container', {read: ViewContainerRef, static: true})
  container!: ViewContainerRef;

  componentNames: any = {
    mus: 'data-table',
    fresher: 'main1',
  }

  createComponent(componentName: string){
    this.container.clear();
    const componentType = this.getComponentType(componentName);
    this.container.createComponent(componentType);
  }

  getComponentType(name: string): Type<any>{
    let type: Type<any> = DataTableComponent;
    switch(name){
      case this.componentNames.mus:{
        type=DataTableComponent;
        break;
      }
      case this.componentNames.fresher:{
        type=Main1Component;
        break;
    }
  }
    return type;
}
}