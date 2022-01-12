import { useState } from "react"

export const useUnits = () => {

	const [units, setUnits] = useState(1);

	const add = () => {
		setUnits(units + 1);
	}

	const less = () => {
		if (units <= 0) {
			setUnits(0);
		}else{

			setUnits(units - 1);
		}
	}

	return{
		units,
		add,
		less
	}
}

