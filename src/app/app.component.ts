import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public amount: number = 0;

  public click(): void {
    this.amount++;
  }

  public reset(value: number): void {
    console.log(value);
    this.amount = 0;
  }
}
