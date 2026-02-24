import React from 'react';
import './BlogPost.css';

const BlogPost = ({ post, onBack }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="blog-post">
      <button className="back-btn" onClick={onBack}>
        ← Back to All Posts
      </button>
      
      <article className="post-content">
        <h1>{post.title}</h1>
        
        <div className="post-info">
          <span className="author">By {post.author}</span>
          <span className="date">Published on {formatDate(post.createdAt)}</span>
          {post.updatedAt !== post.createdAt && (
            <span className="updated">Updated {formatDate(post.updatedAt)}</span>
          )}
        </div>

        <div className="post-body">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
