import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  newPost = 'NO CONTENT';
  Test = 'NO CONTENT2';
  onAddPost() {
    alert('post function ! ');
  }
}
