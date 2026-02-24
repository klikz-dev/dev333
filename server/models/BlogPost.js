// In-memory blog post storage (replace with database in production)
let blogPosts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    content: "This is my first blog post! I'm excited to share my thoughts and ideas with you.",
    author: "Admin",
    createdAt: new Date("2026-02-20"),
    updatedAt: new Date("2026-02-20")
  },
  {
    id: 2,
    title: "Getting Started with Node.js",
    content: "Node.js is a powerful JavaScript runtime that allows you to build scalable server-side applications. In this post, we'll explore the basics of Node.js and how to get started.",
    author: "Admin",
    createdAt: new Date("2026-02-21"),
    updatedAt: new Date("2026-02-21")
  }
];

let nextId = 3;

class BlogPost {
  static getAll() {
    return blogPosts.sort((a, b) => b.createdAt - a.createdAt);
  }

  static getById(id) {
    return blogPosts.find(post => post.id === parseInt(id));
  }

  static create(postData) {
    const newPost = {
      id: nextId++,
      title: postData.title,
      content: postData.content,
      author: postData.author || "Anonymous",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    blogPosts.push(newPost);
    return newPost;
  }

  static update(id, postData) {
    const index = blogPosts.findIndex(post => post.id === parseInt(id));
    if (index === -1) return null;

    blogPosts[index] = {
      ...blogPosts[index],
      title: postData.title || blogPosts[index].title,
      content: postData.content || blogPosts[index].content,
      author: postData.author || blogPosts[index].author,
      updatedAt: new Date()
    };
    return blogPosts[index];
  }

  static delete(id) {
    const index = blogPosts.findIndex(post => post.id === parseInt(id));
    if (index === -1) return false;
    
    blogPosts.splice(index, 1);
    return true;
  }
}

module.exports = BlogPost;
