import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PersonneModule { 
  id: number;
  name: string;
  

  path: string;
  cin: number;
  job: string;
  email : string ="test@test.test";
  password : string = "passwordtest";
  constructor(@Inject(Number)id: number = 0,
  @Inject(String) name: string = 'test',
    @Inject(String)path: string = 'test',
    @Inject(Number)cin: number = 0,
    @Inject(String)job: string = 'test'
) {
this.id = id;
this.name = name;
this.path = path;
this.cin = cin;
this.job = job;
}



}
