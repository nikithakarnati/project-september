import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Viewstory.css'; // Add necessary styles

const Viewstory = () => {
  const { index } = useParams(); // Get the story index from the URL
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch stories from localStorage and get the specific story by index
    const storedStories = JSON.parse(localStorage.getItem('stories')) || [];
    const selectedStory = storedStories[index];
    setStory(selectedStory);
  }, [index]);

  if (!story) {
    return <p>Loading...</p>;
  }

  return (
    <div className="view-story-container">
      <button className="close-btn" onClick={() => navigate('/dashboard')}>
        &times;
      </button>
      <div className="story-content">
        <img src={story.image} alt={story.heading} className="story-image" />
        <div className="story-details">
          <h2>{story.heading}</h2>
          <p>{story.description}</p>
          <div className="story-footer">
            <span>{story.category}</span>
            <button className="like-button">&#x2764; 1260</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewstory;