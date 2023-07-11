import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  @Output() newItemEvent = new EventEmitter<boolean>();

  fly:string="icon";
  sysImage = '';
  ngOnInit() {}
  public getSnapshot(): void {
    this.fly="isTaken";
    this.trigger.next(void 0);
    this.newItemEvent.emit(true);

  }
  openCamera(){
    this.fly="open";
    this.clickOutput(false,"open");
  }
  public captureImg(webcamImage: WebcamImage): void {
    
    
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);

  }
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  clickOutput(value: boolean,fly:string) {
    this.newItemEvent.emit(value);
    this.fly='open';
  }
}







