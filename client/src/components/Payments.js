import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import { handleToken } from '../actions';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout name='Emaily' description='$5 for 5 email credits' amount={500} token={(token) => this.props.handleToken(token)} stripeKey={process.env.REACT_APP_STRIPE_KEY}>
				<a className='ui   positive  button'>Add Credits</a>
			</StripeCheckout>
		);
	}
}

export default connect(
	null,
	{ handleToken }
)(Payments);
