/**
 * Created by vitold on 22.02.17.
 */
import 'babel-polyfill'
import React from 'react'
import {render}	from 'react-dom'
import	{createStore} from 'redux'
import	{Provider} from	'react-redux'
import	App	from './containers/App'

render(
		<App />,
		document.getElementById('root')
);
