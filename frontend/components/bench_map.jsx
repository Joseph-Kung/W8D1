import React from 'react';
import MarkerManager from '../util/marker_manager';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 13,
};

class BenchMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return (
      <div id="map-container" ref={map => this.mapNode = map} />
    );
  }
}

export default BenchMap;
