"use client";
import CreateForm from "./components/CreateForm";
import ReportTable from "./components/ReportTable";
import { useState} from "react";
import { removeDuplicates } from "./custom_hooks/TotalCol";

export default function Home() {

  const [allOutputs, setAllOutputs] = useState([]);
  const [keyValue, setKeyValue] = useState(0);

  function getUserInput(userInput) {
    setKeyValue(keyValue + 1);
    const output = {
      key: keyValue,
      _location: userInput._location,
      hourlySales: userInput.hourlySales ,
    };
    setAllOutputs([...allOutputs, output]);
  }
  let Locations=removeDuplicates(allOutputs)
  console.log(allOutputs)

  return (
    <>
      <main className="flex-1 overflow-y-auto p-5">
        <CreateForm getUserInput={getUserInput} />
        <ReportTable allOutputs={allOutputs} />
      </main>
      <div className=" text-center">
        <p className="text-2xl  text-gray-500  py-4 px-5 ">
          {Locations.length>0 ? `${Locations.length} Locations world wide`:'0 Location world wide'}
        </p>
      </div>
    </>
  );
}