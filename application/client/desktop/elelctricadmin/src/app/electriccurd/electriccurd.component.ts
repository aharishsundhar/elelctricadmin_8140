import { Component, OnInit } from '@angular/core';
import { ElectriccurdService } from './electriccurd.service';

@Component({
  selector: 'app-electriccurd',
  templateUrl: './electriccurd.component.html',
  styleUrls: ['./electriccurd.component.scss'],
})

export class ElectriccurdComponent implements OnInit {
    queryId: any;
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },];
    public curd = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        tag: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private electriccurdService: ElectriccurdService,
    ) { }

    ngOnInit() {
        this.curd.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.electriccurdService.GpCreate(this.curd).subscribe(data => {
            this.curd.name = ''
 	 	this.curd.description = ''
 	 	this.curd.tag = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.electriccurdService.GpUpdate(this.curd).subscribe(data => {
            this.curd.name = ''
 	 	this.curd.description = ''
 	 	this.curd.tag = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.electriccurdService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
}