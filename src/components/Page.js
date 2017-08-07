/**
 * Created by vitold on 12.07.17.
 */
import	React,	{PropTypes,	Component}	from 'react'


export default class Page extends Component {
        onYearBtnClick(e){
            this.setYear(+e.target.textContent)
        }
		render()	{
				const	{year,	photos}	=	this.props;
				return	<div>
						<p>
								<button	onClick={::this.onYearBtnClick}>2016</button>
								<button	onClick={::this.onYearBtnClick}>2015</button>
								<button	onClick={::this.onYearBtnClick}>2014</button>
						</p>
						<h3>{year}	год</h3>
						<p>У	тебя	{photos.length}	фото.</p>
				</div>
		}
}

Page.propTypes	=	{
		year:	PropTypes.number.isRequired,
		photos:	PropTypes.array.isRequired,
};
