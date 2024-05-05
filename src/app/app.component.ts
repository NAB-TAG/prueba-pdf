import { Component, OnInit } from '@angular/core';
// import PSPDFKit from "pspdfkit";
import PSPDFKit from "pspdfkit";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
		PSPDFKit.load({
			// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
			baseUrl: location.protocol + "//" + location.host + "/assets/",
			document: "/assets/example2.pdf",
			container: "#pspdfkit-container",
      licenseKey: "-Vh5I5JO42CD8tcm4YM8v6iITpKHBHaO66RyK1d2ahB9Dgeiaj1gxjUegBIC0IqAv3f6eXjlwo79T2068_9RBPmW15V-bazMfcdcajVLq-a2myKx_iyb25SrDQ9RpA9iAZXoYnstSkq3eih5ql8KKqW2yuusjYTJqbjgcLjJ3GMwFuGo_UpAx38mteUw5OO38IRXU3QWq1_j6ng"
		}).then(instance => {
			// For the sake of this demo, store the PSPDFKit for Web instance
			// on the global object so that you can open the dev tools and
			// play with the PSPDFKit API.
			(window as any).instance = instance;
		});
	}

 
}
