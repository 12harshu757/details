import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  public emps=[];
  public emp;
  public headers=["Id","First Name","Last Name","Email","Gender","Gross Salary","Designation","Working Days"];
   public headers1=["InTime","OutTime"];
  closeResult: string;

  
  constructor(private _var:EmpService,private router:Router,private modalService: NgbModal) { }
  
  ngOnInit(){
    console.log("hii");
    this._var.get().subscribe(
      res=>this.emps=res,
      err=>console.log(err))
  
    }
    
    open(content,value) {
      
            // console.log(id);
             this._var.get2(value).subscribe(
              res=>this.emp=res,
              err=>console.log(err));
              
             
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  
        this.closeResult = `Closed with: ${result}`;
  
      }, (reason) => {
  
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  
      });
  
    }
  
    
  
    private getDismissReason(reason: any): string {
  
      if (reason === ModalDismissReasons.ESC) {
  
        return 'by pressing ESC';
  
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  
        return 'by clicking on a backdrop';
  
      } else {
  
        return  `with: ${reason}`;
  
      }
  
    }

}
