import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender  />

      <Post
        profilePic="https://avatars1.githubusercontent.com/u/56230124?s=460&u=1c295ece39899c7858f67ada3ac6671d9aac39dd&v=4"
        message="Wow this it works!"
        timestamp="this is a timstamp"
        username="Eduardo Talavera"
        image="https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg"
      />

      <Post
        profilePic="https://avatars1.githubusercontent.com/u/56230124?s=460&u=1c295ece39899c7858f67ada3ac6671d9aac39dd&v=4"
        message="Wow this it works!"
        timestamp="this is a timstamp"
        username="Eduardo Talavera"
        image="https://cdn.pixabay.com/photo/2016/03/09/11/49/man-1246233_960_720.jpg"
      />
    </div>
  )
}

export default Feed
