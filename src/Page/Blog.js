import React from 'react';
import '../Style/Blog.css';
import img from '../Images/code4.webp';
import img1 from '../Images/code9.webp';
import img2 from '../Images/code12.jpg';




function Blog() {
    return (

        <div>
            <div className="container div2">
                <h1 className="divh1 underline ">From Code to Career </h1>
                <p>"Step into the Future of Programming with e-GURU: Your Ultimate Resource Hub"</p>
             
                <div className="container">
                    <section className="options">
                        <div className="row">
                            <div className="col">
                                <div className="pic">
                                    <img src={img} alt=" Learning" className="blog-image" />
                                </div>
                                <br />
                                <span className="title">Soft Skills</span>
                                <p className="desc" style={{ fontSize: '14px' }}>
                                5 Ways to Become an Authentic Leader
                                </p>
                            </div>


                            <div className="col">
                                <div className="pic">
                                    <img src={img1} alt=" Learning" className="blog-image" />
                                </div>
                                <br />
                                <span className="title">IT & Software</span>
                                <p className="desc" style={{ fontSize: '14px' }}>
                                Azure AI Fundamentals: How to Pass the AI-900 Exam
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="pic">
                                    <img src={img2} alt="Learning" className="blog-image" />
                                </div>
                                <br />
                                <span className="title">IT & Software</span>
                                <p className="desc" style={{ fontSize: '14px' }}>
                                Ethical Hacking for Beginners: Learn the Basics
                                </p>
                            </div>


                            <div className="col">
                                <div className="pic">
                                    <img src={img1} alt=" Learning" className="blog-image" />
                                </div>
                                <br />
                                <span className="title">Soft Skills</span>
                                <p className="desc" style={{ fontSize: '14px' }}>
                                Learn why these skills aren’t just nice-to-haves — they’re essential.
                                </p>
                            </div>
                        </div>
                    </section>

                  </div>
            </div>

            
        </div>
    )
}

export default Blog;