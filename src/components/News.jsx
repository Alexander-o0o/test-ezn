/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './News.scss';

const POST_TEXT = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis
pariatur officiis eveniet quibusdam ut temporibus neque est. Tenetur culpa
qui iusto commodi amet molestiae harum officiis, adipisci quis ut.
`;

const NEWS = [
  { id: 1, title: 'Новость 1', text: POST_TEXT },
  { id: 2, title: 'Новость 2', text: POST_TEXT },
  { id: 3, title: 'Новость 3', text: POST_TEXT },
];

const News = () => (
  <div className="news">
    <h3 className="news__title">Новости</h3>
    <ul className="news__content">
      {
        NEWS.map((post) => (
          <li className="news__item" key={post.id}>
            <a href="#" className="news-post">
              <h4 className="news-post__title">{post.title}</h4>
              <p className="news-post__text">{post.text}</p>
            </a>
          </li>
        ))
      }
    </ul>
  </div>
);

export default News;
