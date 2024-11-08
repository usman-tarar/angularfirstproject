import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserService } from './user.service';
import { usman2 } from './models/usman';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = "form";
  userform!: FormGroup;
  users: any;
  
  isSubmiited=true;
  isupdated=false;

  deleted=false;
  cancel=false;
  
  
  showbuttonid=0;
 

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userform = this.fb.group({
      id:[0],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      
      age: ['', [Validators.required, Validators.min(0)]],
      Date:['',[Validators.required]]
    });

    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
  onSubmit(): void { 
    debugger
    // let abc=this.userform.value

      const obj = new usman2();
        obj.usmanId=this.userform.value.id;
        obj.usmanName=this.userform.value.name;
        obj.usmanEmail=this.userform.value.email;
        obj.usmanAge=this.userform.value.age;
     
  //  usman2.UsmanId:this.userform.value.id;
  //    UsmanName:this.userform.value.name;
  //    usmanEmail:this.userform.value.email;
  //    usmanAge:this.userform.value.age;
      
    // console.log(this.userform.value)
     debugger
    this.userService.postData(obj).subscribe(
      (response: any) => {
        console.log('Data posted successfully', response);
      },
      error => {
        console.error('Error posting data', error);
      }
    );
}
editclick(xyz:any){
   this.isupdated=true;
   this.isSubmiited=false;
 
  this.userform.patchValue({
    id:xyz.id,
    name:xyz.name,
    email:xyz.email,
    age:xyz.age,
    Date:xyz.Date
    
  })
  
  console.log(xyz)
}

Updateform(){
  
  let userid=this.userform.value.id
 
  let userData=this.userform.value
 this.userService.updateUser(userid,userData).subscribe({
  
 })
  console.log(this.userform.value)
}
Deleteuser(id:any){
  this.deleted=true;
  this.cancel=true;

  this.showbuttonid=id;
 
this.userService.DeleteUser(id).subscribe({})

}

}
