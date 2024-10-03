import { BaseRepository } from './base.repository';
import BlogPost from '../models/blog-post.model';

export class BlogPostRepository extends BaseRepository<BlogPost> {
  constructor() {
    super(BlogPost);
  }

  async findBySlug(slug: string): Promise<BlogPost | null> {
    return this.model.findOne({ where: { slug } });
  }
}
