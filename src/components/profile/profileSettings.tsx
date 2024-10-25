export default function ProfileSettings () {
	return (
		<div className="rounded-xl w-[95vw] grid gap-8 text-primary-white
     self-center my-5 p-10 bg-primary-darkForeground">
			<h2 className="font-extrabold text-xl ">Profile settings</h2>
			<div className="flex flex-row gap-14 flex-wrap">
				<div className="grid grid-flow-row gap-3">
					<h3 className="text-sm font-extrabold">Language</h3>
					<Select >
						<option>English</option>
					</Select>
				</div>
				<div className="grid grid-flow-row gap-3">
					<h3 className="text-sm font-extrabold">Color theme</h3>
					<Select>
						<option>Browser default</option>
						<option>Dark</option>
						<option>Light</option>
					</Select>
				</div>
			</div>
		</div>
	)
}

const Select = ({children, onchangefunc} : any) => (
	<select onChange={onchangefunc} className="bg-transparent border-accent-500 border-2 rounded-lg px-5 py-1">
		{children}
	</select>
)

//im writing type to any temporarily, until we use a cmpnt library