export class PhotoInfo {
  numpeople: number;
  myid: string;
  timestamp: number;

  constructor (numpeople: number, myid: string, timestamp: number) {
    this.numpeople = numpeople;
    this.myid = myid;
    this.timestamp = timestamp;
  }
}
