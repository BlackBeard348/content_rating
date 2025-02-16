
     import React, { Component } from 'react';
     import './ContentRating.css';

     class ContentRating extends Component {
       constructor() {
         super();
         this.state = {
             likes: 0,
             dislikes: 0,
             totalRatings: 0,
           handleLike:() => {
             this.setState((prevState) => ({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
               }));
           },
           handleDislike:() => {
             this.setState((prevState) => ({
                 dislikes: prevState.dislikes + 1,
                 totalRatings: prevState.totalRatings + 1
               }));
           }
           };
       }
       render() {
         return (
          <>
          <h1>Text Content Rating</h1>
          <div className='content-rating'>
             <p>React is a popular open-source JavaScript library used for building user interfaces, particularly single-page applications (SPAs). 
              It was developed by Facebook and focuses on creating reusable UI components. React makes it easier to build interactive and dynamic 
              web applications by efficiently updating and rendering the right components when data changes.At its core, React uses a concept called the 
              **Virtual DOM**, which is a lightweight copy of the actual DOM (Document Object Model). When changes occur in the app, React first updates the 
              Virtual DOM and then compares it with the actual DOM to determine the minimal set of changes needed, making the update process faster and more efficient.
              React's component-based architecture allows developers to break down complex UIs into smaller, manageable parts. These components can be stateful or stateless 
              and are written in a syntax called **JSX**, which combines JavaScript and HTML-like code in the same file.React also supports **unidirectional data flow**, 
              meaning data flows in one direction, making it easier to debug and understand how changes affect the app. It can be used alongside other libraries and frameworks 
              like Redux or React Router for advanced state management and navigation features, making React a powerful tool for modern web development.</p>
             <div className='rating-buttons'>
             <button className="like-button" onClick={this.state.handleLike}>
                 Like ({this.state.likes})
               </button>
               <button className="dislike-button" onClick={this.state.handleDislike}>
                 Dislike ({this.state.dislikes})
               </button>
             </div>
             <div className= "total-ratings"> 
                <p> Total Ratings = ({this.state.totalRatings}) 

                </p>
                  
             </div>

          </div>
          </>
         );
       }
     }

     export default ContentRating;
