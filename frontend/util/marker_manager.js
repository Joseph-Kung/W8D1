import React from 'react';

class MarkerManager extends React.Component {
  constructor(map) {
    super(map);
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    console.log('time to update');
  }

  render() {
    return null;
  }
}

export default MarkerManager;
