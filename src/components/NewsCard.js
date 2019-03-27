import React from 'react';


const NewsCard = ({ article }) => (
    <div style={{ border: '2px solid black', margin: '7px', padding: '5px' }}>
        <p>Title: {article.title}</p>
        <p>Description: {article.description}</p>
        <p>Author: {article.author}</p>
        <p>Content:</p>
        <div>
            {article.content}
        </div>

    </div>
);

export default NewsCard;
