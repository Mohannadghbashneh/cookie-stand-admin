import { TotalCol } from "../custom_hooks/TotalCol";
export default function ReportTable({ allOutputs }) {
  const hours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
  ];
  const result = TotalCol(allOutputs);

  
  return (
    <section className=" flex justify-center ">
      {allOutputs.length < 1 ? (
        <div className=" text-center ">
          <h2 className=" text-xl  text-white  py-4 px-5 ">
            No Cookie Stands Available
          </h2> 
      </div>
 
      ) : (
        <table classNameclass="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Location
              </th>
              {hours.map((item) => (
                <th scope="col" class="px-6 py-3">
                  {item}
                </th>
              ))}
              <th scope="col" class="px-6 py-3">
                Totals
              </th>
            </tr>
          </thead>
          <tbody>
            {allOutputs.length > 0 &&
              allOutputs.map((item) => {
                return (
                  <tr key={item.keyValue}>
                    <td scope="col" class="px-6 py-3">
                      {item._location}
                    </td>
                    {item.hourlySales.map((hour) => (
                      <td scope="col" class="px-6 py-3">
                        {hour}
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td scope="col" class="px-6 py-3">
                Totals
              </td>
              {result.length > 0 &&
                result.map((item) => {
                  return (
                    <td scope="col" class="px-6 py-3">
                      {item}
                    </td>
                  );
                })}
            </tr>
          </tfoot>
        </table>
      )}
    </section>
  );
}