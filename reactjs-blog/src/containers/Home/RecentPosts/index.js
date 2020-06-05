import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={require("../../../blogPostImages/fitness.jpg")} />
            </div>

            <div style={{textAlign: 'center'}}>
                <span>Featured</span>
                <h2>Fitness Mantra To Live Fit Life</h2>
                <span>posted on July 21, 2016 by Sora Blogging Tips</span>
                <p>Midst first it, you're multiply divided. There don't, second his 
                    one given the he one third rule fruit, very. Fill. Seed give firmament
                    doesn't land, isn't lesser creeping. Abundantly you called signs waters 
                    yielding he cattle greater were evenin...
                </p>
                <button>Read more</button>
            </div>
        </Card>
    </div>
   )

 }

export default RecentPosts