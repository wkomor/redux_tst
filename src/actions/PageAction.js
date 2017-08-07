/**
 * Created by vitold on 12.07.17.
 */
import {SET_YEAR} from '../constants/Page'

export function setYear(year) {
		return	{
				type:	SET_YEAR,
				payload:	year
		}
}
