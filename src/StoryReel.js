import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyReel" >
     <Story
        image="https://cdn.pixabay.com/photo/2015/06/03/07/07/chicago-796121__340.jpg"
        profileSrc="https://avatars1.githubusercontent.com/u/56230124?s=460&u=1c295ece39899c7858f67ada3ac6671d9aac39dd&v=4"
        title="Eduardo"
     />
      <Story
        image="https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714__340.jpg"
        profileSrc="https://cdn.pixabay.com/photo/2018/06/27/07/45/student-3500990_960_720.jpg"
        title="John"
     />
     <Story
        image="https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__340.jpg"
        profileSrc="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849817_1280.jpg"
        title="Sara"
     />
      <Story
        image="https://cdn.pixabay.com/photo/2014/12/06/19/46/girl-559307_960_720.jpg"
        profileSrc="https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056_1280.jpg"
        title="Jane"
     />
    </div>
  )
}

export default StoryReel;
