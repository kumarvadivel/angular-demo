import { Component, OnInit } from '@angular/core';
import { constitutions, importPopupPageSection, pageSectionConfig } from '../../shared/utils/pageSequenceConfig';
import { CommonCommonService } from '@config-app/services/common-common.service';
import { Subject } from 'rxjs';
import { SharedService } from '@config-app/shared/services/utils/shared.service';
import { DropResult } from 'ynt-smooth-dnd';
import {MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '@config-app/shared/components/popup/popup.component';

@Component({
  selector: 'app-page-sequence-configuration-console',
  templateUrl: './page-sequence-configuration-console.component.html',
  styleUrls: ['./page-sequence-configuration-console.component.scss']
})
export class PageSequenceConfigurationConsoleComponent implements OnInit {

  constructor(private commonService:CommonCommonService,
    private sharedService:SharedService,
    private dialog:MatDialog) { }

  constitutions = constitutions
  mainConfig={}
  pageSectionConfig:any
  pagesData = []
  currentPageSequence = {}
  hierarchyNode =[]
  journeyPages = []
  strigfi
  otherPages = []
  jsonPreview
  previewRefresh = new Subject<void>();
  listStyle = {
    width:'300px', //width of the list defaults to 300,
    height: '250px', //height of the list defaults to 250,
    dropZoneHeight: '50px' // height of the dropzone indicator defaults to 50
    }
  ngOnInit(): void {
  this.pageSectionConfig = JSON.parse(JSON.stringify(pageSectionConfig))
  }


  pageConfigurerEmitter($event){
    if($event.TriggerSection=='BUTTON'){
      if($event.data=='ADD_PAGE'){
        if(this.commonService.sectionValidationSystem(this.pageSectionConfig)){
          this.currentPageSequence['pageCode']=this.pageSectionConfig[1].sectionContent?.formValue.pageCode
          this.currentPageSequence['url']=this.pageSectionConfig[1].sectionContent?.formValue.url
          this.currentPageSequence['entryjourneyEventCode'] = this.pageSectionConfig[1].sectionContent?.formValue.entryjourneyEventCode
          this.currentPageSequence['exitjourneyEventCode'] = this.pageSectionConfig[1].sectionContent?.formValue.exitjourneyEventCode
          this.currentPageSequence['resumeJourneySequences'] = this.pageSectionConfig[1].sectionContent?.formValue.resumeJourneySequences.map(obj => Object.values(obj))
          this.currentPageSequence['isjourneyPage'] = this.pageSectionConfig[1].sectionContent?.formValue.isjourneyPage
          
          this.pagesData.push(this.currentPageSequence)
          
          //this.previewRefresh.next()
         
          if(this.pageSectionConfig[1].sectionContent?.formValue.isjourneyPage){
            this.journeyPages.push(this.currentPageSequence)
          }else{
            this.otherPages.push(this.currentPageSequence)
          }
          this.pageSectionConfig = JSON.parse(JSON.stringify(pageSectionConfig))
          this.pageSectionConfig = this.commonService.ParseConfig(this.pageSectionConfig)
          this.currentPageSequence = {}
        }
      }
    }
  }

  clearConfig(){
    this.pagesData = []
    this.journeyPages = []
    this.otherPages = []
    this.mainConfig = {}
  }

  exportConfig(){
    this.journeyPages[this.journeyPages.length-1].lastPage = true
    this.mainConfig = {
      journeyPages:{
        "individual":this.journeyPages
      },
     otherPages:{
        "individual":this.otherPages
      },
    }

    window.navigator.clipboard.writeText(JSON.stringify(this.mainConfig))
    this.jsonPreview = this.mainConfig
    this.sharedService.openSnackBar("configuration copied to clipboard successfully")
  }

  page(){
    return JSON.stringify(this.pageSectionConfig)
  }
  onDrop(dropResult: DropResult) {
    // update item list according to the @dropResult
    this.journeyPages = this.applyDrag(this.journeyPages, dropResult);
  }
  applyDrag = (arr, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
  
    const result = [...arr];
    let itemToAdd = payload;
  
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }
  
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
  
    return result;
  };

  deletepage(i){
    let finded = this.pagesData[i]
    this.pagesData.splice(i,1)
    if(finded.isjourneyPage){
        let indx = this.journeyPages.findIndex(f=>f.pageCode == finded.pageCode)
        this.journeyPages.splice(indx,1)
    }else{
        let indx = this.otherPages.findIndex(f=>f.pageCode == finded.pageCode)
        this.otherPages.splice(indx,1)
    }
  }


  importConfig(){
    let dialogRef = this.dialog.open(PopupComponent, {
      panelClass: ['w-50', 'mob-w-100'],
      height: '60%',
      disableClose: true,
      data: {
          title: 'Import Config',
          popupContent: JSON.parse(JSON.stringify(importPopupPageSection)),
          showBtns: true,
        
      }
  })
  dialogRef.afterClosed().subscribe(result => {
      if (result.action == "submit") {
        this.parseImportData(result.config)
      }
  })
  } 

  parseImportData(config){
    try{
      let pageseq = JSON.parse(config[0].sectionContent.formValue.pageSequence)
      if(pageseq.journeyPages){
        pageseq.journeyPages.individual.forEach(p=>p.isjourneyPage = true)
        this.journeyPages = pageseq.journeyPages.individual
        if(pageseq.otherPages){
          pageseq.otherPages.individual.forEach(p=>p.isjourneyPage = false)
          this.otherPages = pageseq.otherPages.individual
        }
        this.pagesData = [...this.journeyPages,...this.otherPages]
      }else{
        this.showError()
      }
    }catch(e){
      this.showError()
    }
  }

  showError(){
    this.sharedService.openSnackBar("invalid page sequence data")

  }
  
}
