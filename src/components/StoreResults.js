import React from 'react';
import { connect } from 'react-redux';

import StoreResult from './StoreResult';

class StoreResults extends React.Component {
  render() {
    return (
      <div id='results'>
        <h1>Nearby Stores</h1>
        <div className='results-list'>
          {this.props.stores.map((obj, index) => (
            <StoreResult key={obj.id} index={index} obj={obj} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stores: state.stores
  };
};

export default connect(mapStateToProps, null)(StoreResults);
