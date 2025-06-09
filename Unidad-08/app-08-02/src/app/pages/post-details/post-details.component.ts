import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comments.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  imports:[CommonModule],
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  comments: Comment[] = [];

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.postService.getPostById(id).subscribe({
      next: data => this.post = data,
      error: err => console.error('Error al cargar post', err),
      complete: () => console.log('Post cargado')
    });

    this.postService.getCommentsByPostId(id).subscribe({
      next: data => this.comments = data,
      error: err => console.error('Error al cargar comentarios', err),
      complete: () => console.log('Comentarios cargados')
    });
  }
}
