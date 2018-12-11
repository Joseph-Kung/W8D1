import React from 'react';

class MarkerManager extends React.Component {
  constructor(map) {
    console.log('Is this a map?', map);
    super(map);
    this.map = map;
    this.markers = {};
    this.createMarkerFromBench = this.createMarkerFromBench.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(benches) {
    const that = this;
    debugger;
    benches.forEach((bench) => {
      debugger;
      if (that.markers[bench.id] === undefined) {
        that.createMarkerFromBench(bench);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    this.markers[bench.id] = new google.maps.Marker({
      position,
      map: this.map,
      title: bench.description,
    });
    this.markers[bench.id].setMap(this.map);
  }
}


export default MarkerManager;
