import { Component } from "@angular/core";

@Component({
  selector: "app-old-page",
  templateUrl: "./old-page.component.html",
  styleUrls: ["./old-page.component.scss"],
})
export class OldPageComponent {
  public amount: number = 0;
  public color: string = "#123456";
  public list: number[] = [0];

  public click(): void {
    this.amount++;
    this.list.push(this.amount + this.list[this.amount - 1]);
  }

  public reset(value: number): void {
    console.log(value);
    this.amount = 0;
    this.list.push(0);
  }
}
