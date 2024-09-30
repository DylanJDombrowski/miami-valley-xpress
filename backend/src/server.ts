import express from 'express';
import { PDFController } from './pdf/pdfController.js';
import { Team } from './models/team.model.js';
import BlogPost from './models/blog-post.model.js';
import { pool, sequelize } from './config/database.js';

const app = express();
app.use(express.json());

const pdfController = new PDFController();

const teamModel = new Team(pool);

app.get('/api/teams', async (req, res) => {
  try {
    const teams = await teamModel.getAllTeams();
    res.json(teams);
  } catch (error) {
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
    res
      .status(500)
      .json({ error: 'An error occurred while updating the team' });
  }
});

// app.post('/generate-pdf', pdfController.generateTeamPDF.bind(pdfController));

// app.get('/test-pdf', async (req, res) => {
//   const testTeam: Team = {
//     name: 'Test Team',
//     players: [
//       { name: 'John Doe', position: 'Forward', number: 10 },
//       { name: 'Jane Smith', position: 'Defender', number: 5 },
//       { name: 'Mike Johnson', position: 'Goalkeeper', number: 1 },
//     ],
//   };

//   try {
//     const pdf = await pdfController.pdfGenerator.generateTeamPDF(testTeam);
//     res.contentType('application/pdf');
//     res.setHeader(
//       'Content-Disposition',
//       `attachment; filename="${testTeam.name}-roster.pdf"`
//     );
//     res.send(pdf);
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     res.status(500).json({ error: 'Failed to generate PDF' });
//   }
// });

// Get all blog posts
app.get('/api/blog-posts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll();
    res.json(blogPosts);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetching blog posts' });
  }
});

// Get a single blog post by slug
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
    res
      .status(500)
      .json({ error: 'An error occurred while fetching the blog post' });
  }
});

// Create a new blog post
app.post('/api/blog-posts', async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create(req.body);
    res.status(201).json(newBlogPost);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while creating the blog post' });
  }
});

// Update a blog post
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
    res
      .status(500)
      .json({ error: 'An error occurred while updating the blog post' });
  }
});

// Delete a blog post
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
    res
      .status(500)
      .json({ error: 'An error occurred while deleting the blog post' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error('Unable to connect to the database:', error);
  });
