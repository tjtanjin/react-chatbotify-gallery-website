import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import i18n from "@/i18n";
import { createListCollection, useRecipe } from "@chakra-ui/react"
export default function ProfileSettings () {
  const supportedLangs =createListCollection({
    items:  [
      {label: 'English', value: 'en'}
    ]
  });


  const langChangeHandler = (input) => {
    const tag = input.value[0];
    i18n.changeLanguage(tag);
   
  }
	return (
		<div className="rounded-xl w-[95vw] grid gap-8 text-primary-white
     self-center my-5 p-10 bg-primary-darkForeground">
			<h2 className="font-extrabold text-xl ">Profile settings</h2>
			<div className="flex flex-row gap-14 flex-wrap">
				<div className="grid grid-flow-row gap-3">
          <SelectRoot onValueChange={langChangeHandler}  width='100px' collection={supportedLangs}>
            <SelectLabel className="font-extrabold">Language </SelectLabel>
            <SelectTrigger className="border-2 px-1 rounded-md border-primary-mutedForeground">
              <SelectValueText placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className="border-2 border-red-900" border='Highlight' >
              {supportedLangs.items.map((lang) => (
                <SelectItem item={lang} key={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
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