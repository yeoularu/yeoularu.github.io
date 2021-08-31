// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

const Author = () => (
    <div>
      <p className={styles['copyright']}>
        © 2021. yeoularu all rights reserved.
      </p>
    </div>
);

export default Author;

/*
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong>
        </a>
      </p>
    </div>
  );
};
*/
