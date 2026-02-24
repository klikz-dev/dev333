import React, { useState } from 'react';
import './App.css';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import CreatePost from './CreatePost';

function App() {
  const [view, setView] = useState('list'); // 'list', 'post', 'create'
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setView('post');
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedPost(null);
  };

  const handleCreateNew = () => {
    setView('create');
  };

  const handlePostCreated = () => {
    setView('list');
    // Refresh will happen automatically in BlogList component
  };

  const handleCancelCreate = () => {
    setView('list');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
        {view === 'list' && (
          <button className="create-new-btn" onClick={handleCreateNew}>
            + New Post
          </button>
        )}
      </header>

      <main className="App-main">
        {view === 'list' && (
          <BlogList onSelectPost={handleSelectPost} />
        )}
        {view === 'post' && selectedPost && (
          <BlogPost post={selectedPost} onBack={handleBackToList} />
        )}
        {view === 'create' && (
          <CreatePost 
            onPostCreated={handlePostCreated}
            onCancel={handleCancelCreate}
          />
        )}
      </main>

      <footer className="App-footer">
        <p>&copy; 2026 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
