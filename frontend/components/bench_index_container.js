import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';

const mapStateToProps = state => ({
  benches: Object.values(state.entities.benches),
}
);

const mapDispatchToPRops = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
});

export default connect(mapStateToProps, mapDispatchToPRops)(BenchIndex);
