import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logAction';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs == null) {
    return <Preloader />;
  }

  return (
    <ul className='collection-with-header'>
      <li className='collection-header'>
        <h4 className='center'>系统 Logs </h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>没有 Logs 可以被显示</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
