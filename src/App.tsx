import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertData } from "./global/reduxState";
import { fetchCovidData } from "./api/API";
import { RootState } from "./global/store"; // Import your RootState type from your store setup

interface CovidData {
	state: string;
	name: string;
	covid19Site: string;
	covid19SiteOld: string;
	covid19SiteQuaternary: string;
	covid19SiteQuinary: string;
	twitter: string;
}

const data: CovidData[] = await fetchCovidData().then((res) => res);

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(insertData(data));
	}, [dispatch]);

	const covidData = useSelector(
		(state: RootState) => state.covidState
	);

	return (
		<div className="flex flex-wrap gap-5 w-full justify-center py-5">
			{covidData.length > 1 ? (
				covidData.map((el: CovidData) => (
					<div
						key={el.state}
						className="p-5 text-sm break-words rounded-md w-[300px] min-h-auto border space-y-5"
					>
						<div>
							<span className="font-bold">Covid19 State Name:</span>{" "}
							{el.name}
						</div>
						<div>
							<span className="font-bold">Covid19 Site: </span>
							{el.covid19Site}
						</div>
						<div>
							<span className="font-bold">Covid19 Site Old:</span>{" "}
							{el.covid19SiteOld}
						</div>
						<div>
							<span className="font-bold">
								Covid19 Site Quaternary:
							</span>{" "}
							{el.covid19SiteQuaternary}
						</div>
						<div>
							<span className="font-bold">Covid19 Site Quinary:</span>{" "}
							{el.covid19SiteQuinary}
						</div>
						<a>
							<span className="font-bold">Twitter Handle: </span>
							{el.twitter}
						</a>
					</div>
				))
			) : (
				<div>Reload</div>
			)}
		</div>
	);
};

export default App;
