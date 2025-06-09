import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports:[CommonModule],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: data => {
        this.posts = data;
      },
      error: err => {
        console.error('Error cargando posts', err);
      },
      complete: () => {
        console.log('Carga de posts completada');
      }
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/posts', id]);
  }
}
