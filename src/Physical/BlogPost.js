import { padding } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Physical.css'
const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  useEffect(() => {
    fetch('/blog.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
       
        const post = data.find((post) => post.id.toString() === id);
        setBlogPost(post);
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
      });
  }, [id]); // Dependent on the id parameter

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="PhysicBG">
        <div className='w-full max-w-7xl mx-auto mt-6 ' style={{ backgroundColor: "#E0FFFF	", borderRadius: "30px", paddingBottom: "10px", backgroundColor: "#E0FFFF", background : "linear-gradient(to right, #E0FFFF, #FFD6E0)" }}>
            <h1 className="hl1">{blogPost.title}</h1>
            <h2 className="hl2">"{blogPost.start}"</h2>
            <h3 className="hl3">1: {blogPost.step1}</h3>
            <p className="hl5">{blogPost.step1d}</p>
            <h3 className="hl3">2: {blogPost.step2}</h3>
            <p className="hl5">{blogPost.step2d}</p>
            <h3 className="hl3">3: {blogPost.step3}</h3>
            <p className="hl5">{blogPost.step3d}</p>
            <h3 className="hl3">4: {blogPost.step4}</h3>
            <p className="hl5">{blogPost.step4d}</p>
            <h3 className="hl3">5: {blogPost.step5}</h3>
            <p className="hl5">{blogPost.step5d}</p>
            <h3 className="hl3">6: {blogPost.step6}</h3>
            <p className="hl5">{blogPost.step6d}</p>
            <h3 className="hl3">7: {blogPost.step7}</h3>
            <p className="hl5">{blogPost.step7d}</p>
            <h3 className="hl3">8: {blogPost.step8}</h3>
            <p className="hl5">{blogPost.step8d}</p>
            <h3 className="hl3">9: {blogPost.step9}</h3>
            <p className="hl5">{blogPost.step9d}</p>
            <h3 className="hl3">10: {blogPost.step10}</h3>
            <p className="hl5">{blogPost.step10d}</p>
            <h2 className="hl6">"{blogPost.end}"</h2>
            





        </div>
    </div>
  );
};

export default BlogPost;
