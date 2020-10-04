import {connect} from 'react-redux';
import {RootState} from '../../index';
import Tariffs from './Tariffs';

const mapStateToProps = (state: RootState) => ({
	tariffs: state.card.tariffs,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Tariffs);
