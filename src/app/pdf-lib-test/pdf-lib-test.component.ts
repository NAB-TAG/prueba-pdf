import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-pdf-lib-test',
  templateUrl: './pdf-lib-test.component.html',
  styleUrls: ['./pdf-lib-test.component.css']
})
export class PdfLibTestComponent {
  pdfSrc: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.createPdf();
  }

  async createPdf() {
    
    var doc = new jsPDF();

    doc.setFontSize(40);
    doc.text("Octonyan loves jsPDF", 35, 25);
    doc.addImage("examples/images/Octonyan.jpg", "JPEG", 15, 40, 180, 180);
    doc.save('pedo.pdf');
    
    const blob = doc.output('blob');
    const pdfUrl: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
    this.pdfSrc = pdfUrl;

    // Aquí puedes hacer algo con pdfBytes, por ejemplo, guardar el archivo o enviarlo a través de una API.
  }
}
