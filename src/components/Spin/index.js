import React from 'react';
import { bool } from 'prop-types';
import cn from 'classnames';

import './spin.scss';

const Spin = ({ show = true }) => (
  <div className={cn('spinner-ellipsis', { show })}>
    <div /><div /><div /><div />
  </div>
);

Spin.propTypes = {
  show: bool
};

export default Spin;
