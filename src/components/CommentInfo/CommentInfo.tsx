import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Omit<Comment, 'postId' | 'id'>;
};

export const CommentInfo: React.FC<Props> = ({
  comment: {
    name,
    email,
    body,
  },
}) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {name}
      </strong>
      {' by '}
      <a
        className="CommentInfo__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
    <div className="CommentInfo__body">
      {body}
    </div>
  </div>
);