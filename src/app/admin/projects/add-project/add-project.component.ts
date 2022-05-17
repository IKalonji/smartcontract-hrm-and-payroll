import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
@Component({
  selector: "app-add-project",
  templateUrl: "./add-project.component.html",
  styleUrls: ["./add-project.component.sass"],
})
export class AddprojectsComponent {
  projectForm: FormGroup;
  hide3 = true;
  agree3 = false;
  public Editor = ClassicEditor;
  teamList: string[] = [
    "Sarah Smith",
    "John Deo",
    "Pankaj Patel",
    "Pooja Sharma",
  ];
  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectID: ["", [Validators.required]],
      projectTitle: ["", [Validators.required]],
      department: ["", [Validators.required]],
      priority: ["", [Validators.required]],
      client: ["", [Validators.required]],
      price: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      team: ["", [Validators.required]],
      status: ["", [Validators.required]],
      fileUpload: [""],
    });
  }
  onSubmit() {
    console.log("Form Value", this.projectForm.value);
  }
}
