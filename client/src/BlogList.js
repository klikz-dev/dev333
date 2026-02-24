import React, { useState, useEffect } from 'react';
import './BlogList.css';

const BlogList = ({ onSelectPost }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/blog');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/blog/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete post');
      fetchPosts();
    } catch (err) {
      alert('Failed to delete post: ' + err.message);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) return <div className="loading"><span>Loading posts...</span></div>;
  if (error) return <div className="error">⚠️ Error: {error}</div>;

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      {posts.length === 0 ? (
        <p className="no-posts">📝 No blog posts yet. Create your first post!</p>
      ) : (
        <div className="posts-grid">
          {posts.map(post => (
            <div 
              key={post.id} 
              className="post-card"
              onClick={() => onSelectPost(post)}
            >
              <h3>{post.title}</h3>
              <div className="post-meta">
                <span className="author">By {post.author}</span>
                <span className="date">{formatDate(post.createdAt)}</span>
              </div>
              <p className="post-excerpt">
                {post.content.substring(0, 150)}
                {post.content.length > 150 ? '...' : ''}
              </p>
              <button 
                className="delete-btn"
                onClick={(e) => handleDelete(post.id, e)}
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
