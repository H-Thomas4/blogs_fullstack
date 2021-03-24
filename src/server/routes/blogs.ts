import { Router } from 'express';
import db from '../db';

const router = Router();

/*GET / api/blogs */
router.get('/:blogid?', async (req, res) => {
    const blogid = Number(req.params.blogid); 
    try {
        if (blogid) {
            const [blog]= await db.blogs.one(blogid);
            res.json(blog);
        } else {
            const blogs = await db.blogs.all();
            res.json(blogs);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'YOU F$%ked UP!', error });
    }
});


/*POST / api/blogs */
//Requst Body { title: string, content: string,}/
router.post('/:blogid', async (req, res) => {
    const newBlog =  req.body; 
    newBlog.authorid = 1; 

    try {
        const results = await db.blogs.insert(newBlog);
        res.json({ msg: 'Blog created', id: results.insertId });  
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'YOU F$%ked UP!', error }); 
    }
});

// PUT/api/blogs/1 */
//Requst Body { title: string, content: string,}/
router.put('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    const editedBlog =  req.body;

    try {
        const results = await db.blogs.update(editedBlog, blogid);
        res.json(results);  
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'YOU F$%ked UP!', error }); 
    }
});


// Delete/api/blogs/1 */
router.delete('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    try {
        const results = await db.blogs.destroy(blogid);
        res.json(results);  
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'YOU F$%ked UP!', error }); 
    }
});

export default router;