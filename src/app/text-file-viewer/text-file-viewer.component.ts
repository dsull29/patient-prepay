import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text-file-viewer',
  templateUrl: './text-file-viewer.component.html',
  styleUrls: ['./text-file-viewer.component.css']
})
export class TextFileViewerComponent implements OnInit {

  fileContent: string = "";

  constructor(
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getFileContent();
  }

  getFileContent(): void {
    this.http.get('/assets/initial_gpt_transcript.txt', { responseType: 'text' }).subscribe(content => {
      this.fileContent = content;
    });
  }

  goBack(): void {
    this.location.back();
  }

}