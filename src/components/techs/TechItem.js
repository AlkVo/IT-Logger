import React from 'react';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techAction';
import { connect } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech: { firstName, lastName, id }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: `${firstName} ${lastName} 已被删除` });
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};
export default connect(null, { deleteTech })(TechItem);
