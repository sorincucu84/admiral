import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements AfterViewInit {
  private opened: boolean;

  private projectForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      icon: new FormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.opened = true;
    });
  }

  private toggleModal(open) {
    this.opened = open;
    if (!open) {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  private saveProject() {
    if (this.projectForm.valid) {
      // this.projectForm.value
      this.toggleModal(false);
    }
  }
}
