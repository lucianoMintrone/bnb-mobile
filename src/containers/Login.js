import { connect } from 'react-redux';
import LoginScreen from '../components/LoginScreen';

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = (dispatch) => ({
  addTodo: () => console.log(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
