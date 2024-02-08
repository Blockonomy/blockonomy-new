import React from "react";
import { Button } from "../ui/button";

export default function ResultTable() {
  return (
    <div className="border-2 border-primary w-full flex items-center gap-6 justify-between">
      <div className="overflow-x-auto w-full">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-5" />
          </colgroup>
          <thead>
            <tr className="">
              <th className="p-3">
                <span className="sr-only">Photos</span>
              </th>
              <th className="p-3 text-center text-base">Name</th>
              <th className="p-3 text-center text-base">Fees</th>
              <th className="p-3 text-center text-base">Volume(24)</th>
              <th className="p-3 text-center text-base">Volume(1w)</th>
              <th className="p-3 text-center text-base">Total marlet caps</th>
              <th className="p-3 text-center text-base">ROI</th>
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {Array.from({ length: 10 }).map((_, _key) => (
            <tbody key={_key}>
              <tr>
                <td className="px-4 py-3 text-center text-2xl font-medium">
                  <div className="border w-14 h-11"></div>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="text-base">Setcode</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="text-base">34.901spr</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="text-base">$456k</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="text-base">$3M</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="text-base">$15M</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <p className="text-primary text-base">%13.17</p>
                </td>
                <td className="px-4 py-3 text-center">
                  <Button className="w-full">Trade</Button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
