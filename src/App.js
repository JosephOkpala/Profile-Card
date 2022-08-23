import React from 'react';

function Avatar() {
  return (
    <img
      className="card-image"
      src="https://www.w3schools.com/howto/img_avatar.png"
      alt="Avatar"
      style={{ width: 80, height: 80 }}
    />
  );
}

function Socials() {
  return (
    <div className="socials">
      <a href="https://github.com/JosephOkpala">
        <img
          className="github"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt=""
        />
      </a>
      <a href="https://twitter.com/unorthodox__dev">
        <img
          className="twitter"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png"
          alt=""
        />
      </a>
      <a href="https://www.linkedin.com/in/joseph-okpala-1371351aa/">
        <img
          className="linkedin"
          src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw"
          alt=""
        />
      </a>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="card">
      <Avatar />
      <div className="me">
        <h1>Okpala Joseph</h1>
        <p className="dev">
          Web Developer <br /> and Software Engineer
        </p>
      </div>
      <p className="languages">
        I use HTML5, CSS, Javascript and React for web development
      </p>
      <Socials />
    </div>
  );
}

const App = () => {
  return (
    <section className="main">
      <UserProfile />
    </section>
  );
};

export default App;
