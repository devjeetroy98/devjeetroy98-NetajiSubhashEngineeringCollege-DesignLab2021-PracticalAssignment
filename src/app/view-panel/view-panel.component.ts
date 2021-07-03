import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { PayloaddispatchService } from '../payloaddispatch.service'

@Component({
  selector: 'app-view-panel',
  templateUrl: './view-panel.component.html',
  styleUrls: ['./view-panel.component.css']
})
export class ViewPanelComponent implements OnInit{

  constructor(private _payloadservice: PayloaddispatchService) { }

  @ViewChild('paginator') paginator: any;
  
  public dataSource:any = []
  public completePayload:any = []
  public ichecked: any = ""
  public temp:any = []
  public displayedColumns:any = []
  ngOnInit(): void {

    this._payloadservice.getPayload().subscribe((res:any)=>{
      this.completePayload = res
      for(let i = 0; i< 100; i++){
        var item = {
          "id": res[i]._id,
          "Year": res[i].Year,
          "Industry_aggregation_NZSIOC": res[i].Industry_aggregation_NZSIOC,
          "Variable_category" : res[i].Variable_category,
          "Variable_code" : res[i].Variable_code,
          "Value" : res[i].Value
        }
        this.temp.push(item)
      }
    this.dataSource = new MatTableDataSource(this.temp)  
    this.displayedColumns = ['check','year','aggregation','variable_category','variable_code','value']
    this.dataSource.paginator = this.paginator
    })   
    this.dataSource.paginator = this.paginator
  }

  public idx_container : any = []
  public data_container : any = []
  public manager:any = []

  public changeState(id:any){

     for(let i = 0; i<this.temp.length; i++){
      if(this.temp[i].id == id){
        if(this.idx_container.includes(i)){
          let index = this.idx_container.indexOf(i)
          this.idx_container = this.idx_container.filter((idx:any)=> idx!=i)
          for(let j = 0; j<this.data_container.length; j++){
            if(index == j){
              if(this.data_container.length == 1){
                this.data_container = []
              }else{
                continue
              }
            }
            else{
              this.manager = this.data_container
              this.data_container = []
              this.data_container.push(this.manager[j])
            }
          }
        }else{
          this.idx_container.push(i)
          this.data_container.push(this.temp[i])
        }
      }
    }
    console.log(this.data_container)
  }

  public alterCheck(){
    if(this.ichecked == ""){
      this.ichecked = "checked"
      this.data_container = this.temp
    }else{
      this.ichecked = ""
      this.data_container = []
    }
    console.log(this.data_container)
  }
}
