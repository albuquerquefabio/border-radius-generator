import { Component } from "@angular/core";
import {
  faBorderStyle,
  faLink,
  faUnlink,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  faBorderStyle = faBorderStyle;
  faLink = faLink;
  faUnlink = faUnlink;
  faCopy = faCopy;

  topLeft = 20;
  topRight = 20;
  bottomLeft = 20;
  bottomRight = 20;

  link = true;
  unit = true;

  isSquare = false;

  css = "";

  constructor() {
    this.cssProps();
  }

  cssProps() {
    const unit = this.unit ? "px " : "% ";
    let value = !this.link
      ? `${this.topLeft} ${this.topRight} ${this.bottomLeft} ${this.bottomRight}`
      : "" + this.topRight;

    if (!/[0-9]/g.test(value)) return (this.css = "");

    value = value
      .split(/[^0-9]/g)
      .map((num) => num + unit)
      .join("")
      .trimEnd();
    this.css = `-webkit-border-radius: ${value};\n`;
    this.css += `-moz-border-radius: ${value};\n`;
    this.css += `border-radius: ${value};`;
  }

  changeValue(event: number) {
    // if (event == null)
    //   this.topLeft = this.topRight = this.bottomLeft = this.bottomRight = 0;
    if (this.link)
      this.topLeft = this.topRight = this.bottomLeft = this.bottomRight = event;

    this.cssProps();
  }
}
