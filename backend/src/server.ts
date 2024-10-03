import express from 'express';
import { PDFController } from './pdf/pdfController';
import { TeamService } from './services/team.service';
import { BlogPostService } from './services/blog-post.service';
import { errorHandler } from './middleware/error-handler';
import { sequelize } from './config/database';

const app = express();
app.use(express.json());

const pdfController = new PDFController();
const teamService = new TeamService();
const blogPostService = new BlogPostService();

// Team routes
app.get('/api/teams', async (req, res, next) => {
  try {
    const teams = await teamService.getAllTeams();
    res.json(teams);
  } catch (error) {
    next(error);
  }
});

app.get('/api/teams/:id', async (req, res, next) => {
  try {
    const team = await teamService.getTeamById(req.params.id);
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    next(error);
  }
});

app.put('/api/teams/:id', async (req, res, next) => {
  try {
    await teamService.updateTeam(req.params.id, req.body);
    res.json({ message: 'Team updated successfully' });
  } catch (error) {
    next(error);
  }
});

// Blog post routes
app.get('/api/blog-posts', async (req, res, next) => {
  try {
    const blogPosts = await blogPostService.getAllBlogPosts();
    res.json(blogPosts);
  } catch (error) {
    next(error);
  }
});

app.get('/api/blog-posts/:slug', async (req, res, next) => {
  try {
    const blogPost = await blogPostService.getBlogPostBySlug(req.params.slug);
    if (blogPost) {
      res.json(blogPost);
    } else {
      res.status(404).json({ error: 'Blog post not found' });
    }
  } catch (error) {
    next(error);
  }
});

app.post('/api/blog-posts', async (req, res, next) => {
  try {
    const newBlogPost = await blogPostService.createBlogPost(req.body);
    res.status(201).json(newBlogPost);
  } catch (error) {
    next(error);
  }
});

app.put('/api/blog-posts/:slug', async (req, res, next) => {
  try {
    const updatedBlogPost = await blogPostService.updateBlogPost(
      req.params.slug,
      req.body
    );
    res.json(updatedBlogPost);
  } catch (error) {
    next(error);
  }
});

app.delete('/api/blog-posts/:slug', async (req, res, next) => {
  try {
    await blogPostService.deleteBlogPost(req.params.slug);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });
