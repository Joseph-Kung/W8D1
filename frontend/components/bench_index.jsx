import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    console.log('benches', this.props.benches);
    const benches = this.props.benches.map(bench => <BenchIndexItem key={bench.id} bench={bench} />);
    return (
      <ul>
        {benches}
      </ul>
    );
  }
}

export default BenchIndex;