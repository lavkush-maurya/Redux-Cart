import { connect } from "react-redux";
import Header from "../Components/Header";

const mapStateToProps = (state) => ({
  cardData: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
