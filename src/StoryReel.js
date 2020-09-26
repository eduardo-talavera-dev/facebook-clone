import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyReel" >
     <Story
        image="https://cdn.pixabay.com/photo/2015/06/03/07/07/chicago-796121__340.jpg"
        profileSrc="https://avatars1.githubusercontent.com/u/56230124?s=460&u=1c295ece39899c7858f67ada3ac6671d9aac39dd&v=4"
        title="Eduardo Talavera"
     />
      <Story
        image="https://cdn.pixabay.com/photo/2016/03/09/09/17/computer-1245714__340.jpg"
        profileSrc="https://instagram.fgdl5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/79293893_2718904481525761_5557126698165600256_n.jpg?_nc_ht=instagram.fgdl5-2.fna.fbcdn.net&_nc_ohc=o2KkVqGUaKsAX_wycs1&oh=d973d854e60176b0eb4e608d78dc9ca5&oe=5F9989C9"
        title="Paul Puga"
     />
     <Story
        image="https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074__340.jpg"
        profileSrc="https://instagram.fgdl5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/103631204_691824961642617_3519814577849611207_n.jpg?_nc_ht=instagram.fgdl5-2.fna.fbcdn.net&_nc_ohc=Tia3COTEkGEAX9NGbzW&oh=e7a3da5bd9e84df4e8663d2b85412606&oe=5F976067"
        title="Axel Ayala"
     />
      <Story
        image="https://cdn.pixabay.com/photo/2015/12/27/05/48/turntable-1109588__340.jpg"
        profileSrc="https://instagram.fgdl5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/117148646_694048927842716_3387378947671453157_n.jpg?_nc_ht=instagram.fgdl5-2.fna.fbcdn.net&_nc_ohc=MlqF03n2eQUAX-E9VSO&oh=787325e6ae57acba1e969c7eeae0f2b5&oe=5F9868E5"
        title="Luz"
     />
     <Story
        image="https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533__340.jpg"
        profileSrc="https://instagram.fgdl5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/105974178_3984744134931985_9051348416323953474_n.jpg?_nc_ht=instagram.fgdl5-2.fna.fbcdn.net&_nc_ohc=gh2ASaQMTPcAX8dFxFV&oh=b6834d851de8cd9a98c2e1271d7aabb6&oe=5F9957BE"
        title="Andrea"
     />



    </div>
  )
}

export default StoryReel;
