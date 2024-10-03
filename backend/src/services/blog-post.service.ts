import { BlogPostRepository } from '../repositories/blog-post.repository.js';
import BlogPost from '../models/blog-post.model.js';

export class BlogPostService {
  private blogPostRepository: BlogPostRepository;

  constructor() {
    this.blogPostRepository = new BlogPostRepository();
  }

  async getAllBlogPosts() {
    return this.blogPostRepository.findAll();
  }

  async getBlogPostBySlug(slug: string) {
    return this.blogPostRepository.findBySlug(slug);
  }

  async createBlogPost(data: Partial<BlogPost>) {
    return this.blogPostRepository.create(data);
  }

  async updateBlogPost(slug: string, data: Partial<BlogPost>) {
    const post = await this.blogPostRepository.findBySlug(slug);
    if (!post) {
      throw new Error('Blog post not found');
    }
    return this.blogPostRepository.update(post.id, data);
  }

  async deleteBlogPost(slug: string) {
    const post = await this.blogPostRepository.findBySlug(slug);
    if (!post) {
      throw new Error('Blog post not found');
    }
    return this.blogPostRepository.delete(post.id);
  }
}
