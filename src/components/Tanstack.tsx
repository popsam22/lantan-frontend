import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import previous from "../assets/arrow-left.png";
import next from "../assets/arrow-right.png";
import { useState } from "react";
import { Property } from "../types";

const Tanstack = ({ rows, columns }: any) => {
  const [data] = useState<Property[]>(rows);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });
  return (
    <div className="p-3 pt-0">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-5 bg-white shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-[#F9FAFB]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-xs text-[#2E2E2E] p-4 text-left capitalize whitespace-nowrap"
                    style={{ width: `${header.getSize()}px` }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-[#EAECF0]">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-[#F9FAFB]">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-4 whitespace-nowrap text-sm text-[#475467]"
                    style={{ width: `${cell.column.getSize()}px` }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="flex p-2 border w-[115px] justify-evenly rounded-lg focus:outline-none transition duration-150 ease-in-out"
        >
          <img
            src={previous}
            alt="previous"
            width={20}
            height={20}
            className="object-contain"
          />
          <span className="text-sm text-[#2E2E2E] font-semibold">Previous</span>
        </button>
        {/* <span className="text-sm text-gray-700">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span> */}
        <div className="flex gap-9">
          <p className="text-[#5C5C5C] text-sm text-center">1</p>
          <p className="text-[#5C5C5C] text-sm text-center">2</p>
          <p className="text-[#5C5C5C] text-sm text-center">3</p>
          <p className="text-[#5C5C5C] text-sm text-center">...</p>
          <p className="text-[#5C5C5C] text-sm text-center">8</p>
          <p className="text-[#5C5C5C] text-sm text-center">9</p>
          <p className="text-[#5C5C5C] text-sm text-center">10</p>
        </div>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="flex p-2 border w-[88px] justify-evenly items-center rounded-lg focus:outline-none transition duration-150 ease-in-out"
        >
          <span className="text-sm text-[#2E2E2E] mr-2 font-semibold">
            Next
          </span>
          <img
            src={next}
            alt="next"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default Tanstack;
