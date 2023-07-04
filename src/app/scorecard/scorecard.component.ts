import { Component } from '@angular/core';


// interface Item{
//   title:string;
//   subtitle:string;
//   heading:string;
//   description:string;
//   icon:string;
// }


@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss'],
})
export class ScorecardComponent {

  // searchValue:string='';

  // getFilteredElements():HTMLElement[]{
  //   const elements:HTMLElement[]=Array.from(document.querySelectorAll('h1, span'));
  //   if(!this.searchValue){
  //     return elements;
  //   }

  //   const filterValue=this.searchValue.toLowerCase();
  //   return elements.filter(element=>{
  //     const textContent = element.textContent?.toLowerCase();
  //     return textContent && textContent.includes(filterValue);
  //   });
  // }

// items:Item[]=[
//   {title:'276(0)',subtitle:'Young Professionals', heading:'', description:'', icon:'supervisor_account'},
//   {title:'160(0)',subtitle:'Active Young Professionals', heading:'', description:'', icon:'how_to_reg'},
//   {title:'116(0)',subtitle:'Deployed Young Professionals', heading:'', description:'', icon:'center_focus_strong'},
//   {title:'25(0)',subtitle:'Solutions Created/Matured', heading:'', description:'', icon:'supervisor_account'}
// ];

// filteredItems:Item[]=[...this.items];
// searchText='';

// getDivClass(index:number):string{
//   if(index===0){
//     return 'widget left';
//   }else if (index===this.items.length-1){
//     return 'widget right';
//   }else {
//     return 'widget middle${index}';
//   }
// }
// getMatIcon(index:number):string{
//   return this.items[index].icon;
// }

// getButtonColor(index:number):string{
//   if(index===0){
//     return 'cadetblue';
//   }else if (index===1) {
//     return 'darkcyan';
//   }else if (index===2) {
//     return 'crimson';
// }else {
//   return 'chocolate';
// }
// }

// filterItems(){
//   const searchText=this.searchText.toLowerCase();
//   this.filteredItems=this.items.filter(item=>
//     item.title.toLowerCase().includes(searchText) ||
//     item.subtitle.toLowerCase().includes(searchText) ||
//     item.heading.toLowerCase().includes(searchText) ||
//     item.description.toLowerCase().includes(searchText)
//     );
// }
// navigateForward(index:number){
//   console.log('Navigate forward for item at index:', index);
// }

}