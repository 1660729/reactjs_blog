import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from "../../data/blog.json";
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {    
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return(
    <div className="sidebarContainer" style={{width: props.width}}>
      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>About us</span>
        </div>
        <div className="profileImageContainer">
          <img src={require("../../blogPostImages/about-us.jpg")} alt="about-us" />
        </div>
        <div className="cardBody">
          <p className="personalBio">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache 
            fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica.
          </p>
        </div>
      </Card>

      <Card style={{marginBottom: '20px', padding: '20px', boxSizing: 'border-box'}}>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card>
        <div className="cardHeader">
          <span>Recent Post</span>
        </div>
        <div className="recentPosts">

          {
            posts.map(post => {
              return (
                <NavLink key={post.id} to={`/post/${post.id}`}>
                  <div className="recentPost">  
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
      </Card>
    </div>
   )

 }

export default Sidebar