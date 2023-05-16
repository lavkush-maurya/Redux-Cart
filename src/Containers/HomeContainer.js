import { connect } from "react-redux";
import Home from "../Components/Home";
import { addToCart, removeToCart } from "../Services/Actions/Action";


const mapStateToProps = state => ({
    cardData:state.cardItems
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;