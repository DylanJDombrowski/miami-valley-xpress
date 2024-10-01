import express from 'express';
import { PDFController } from './pdf/pdfController.js';
import { Team } from './models/team.model.js';
import BlogPost from './models/blog-post.model.js';
import { pool, sequelize } from './config/database.js';

const app = express();
app.use(express.json());

const pdfController = new PDFController();
const teamModel = new Team(pool);

// Team routes
app.get('/api/teams', async (req, res) => {
  try {
    const teams = await teamModel.getAllTeams();
    res.json(teams);
  } catch (error) {
    console.error('Error fetching teams:', error);
    res.status(500).json({ error: 'An error occurred while fetching teams' });
  }
});

app.get('/api/teams/:id', async (req, res) => {
  try {
    const team = await teamModel.getTeamById(req.params.id);
    if (team) {
      res.json(team);
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    console.error('Error fetching team:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the team' });
  }
});

app.put('/api/teams/:id', async (req, res) => {
  try {
    await teamModel.updateTeam(req.params.id, req.body);
    res.json({ message: 'Team updated successfully' });
  } catch (error) {
    console.error('Error updating team:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the team' });
  }
});

// Blog post routes
app.get('/api/blog-posts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll();
    res.json(blogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching blog posts' });
  }
});

app.get('/api/blog-posts/:slug', async (req, res) => {
  try {
    const blogPost = await BlogPost.findOne({
      where: { slug: req.params.slug },
    });
    if (blogPost) {
      res.json(blogPost);
    } else {
      res.status(404).json({ error: 'Blog post not found' });
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the blog post' });
  }
});

app.post('/api/blog-posts', async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create(req.body);
    res.status(201).json(newBlogPost);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the blog post' });
  }
});

app.put('/api/blog-posts/:slug', async (req, res) => {
  try {
    const [updated] = await BlogPost.update(req.body, {
      where: { slug: req.params.slug },
    });
    if (updated) {
      const updatedBlogPost = await BlogPost.findOne({
        where: { slug: req.params.slug },
      });
      res.json(updatedBlogPost);
    } else {
      res.status(404).json({ error: 'Blog post not found' });
    }
  } catch (error) {
    console.error('Error updating blog post:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while updating the blog post' });
  }
});

app.delete('/api/blog-posts/:slug', async (req, res) => {
  try {
    const deleted = await BlogPost.destroy({
      where: { slug: req.params.slug },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Blog post not found' });
    }
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while deleting the blog post' });
  }
});

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    server.on('error', (e: NodeJS.ErrnoException) => {
      if (e.code === 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(() => {
          server.close();
          server.listen(PORT);
        }, 1000);
      } else {
        console.error('Server error:', e);
      }
    });
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });
