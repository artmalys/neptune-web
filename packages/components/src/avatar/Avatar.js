import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import { Size, Theme } from '../common';

import './Avatar.css';

const Avatar = ({ size, type, outlined, theme, backgroundColor, ...htmlProps }) => (
  <div
    aria-label={htmlProps['aria-label']}
    className={classnames('avatar', htmlProps.className, `avatar--${size}`, `avatar--${type}`, {
      'avatar--outlined': outlined,
      'avatar--dark': theme === Theme.DARK,
    })}
  >
    <div className="avatar__content" style={{ backgroundColor: backgroundColor || undefined }}>
      {htmlProps.children}
    </div>
  </div>
);

Avatar.Size = Size;
Avatar.Theme = Theme;

Avatar.Type = {
  THUMBNAIL: 'thumbnail',
  ICON: 'icon',
  EMOJI: 'emoji',
  INITIALS: 'initials',
};

Avatar.propTypes = {
  size: Types.oneOf([Avatar.Size.SMALL, Avatar.Size.MEDIUM, Avatar.Size.LARGE]),
  type: Types.oneOf([
    Avatar.Type.THUMBNAIL,
    Avatar.Type.ICON,
    Avatar.Type.EMOJI,
    Avatar.Type.INITIALS,
  ]),
  outlined: Types.bool,
  theme: Types.oneOf([Theme.LIGHT, Theme.DARK]),
  backgroundColor: Types.string,
  'aria-label': Types.string.isRequired,
};

Avatar.defaultProps = {
  type: Avatar.Type.THUMBNAIL,
  size: Avatar.Size.MEDIUM,
  outlined: false,
  theme: Theme.LIGHT,
  backgroundColor: null,
};

export default Avatar;
