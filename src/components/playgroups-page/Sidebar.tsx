import React, { useState } from "react";

function Sidebar() {
  const [remoteJob, setRemoteJob] = useState(false);

  return (
    <aside className="mb-8 md:order-1 md:mb-0 md:ml-12 md:w-64 md:shrink-0 lg:ml-20 lg:w-72">
      <div
        data-sticky=""
        data-margin-top="32"
        data-sticky-for="768"
        data-sticky-wrap=""
      >
        <div className="relative rounded-xl border border-gray-200 bg-gray-50 p-5">
          <div className="absolute right-5 top-5 leading-none">
            <button className="text-sm font-medium text-indigo-500 hover:underline">
              Clear
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            {/* Group 1 */}
            <div>
              <div className="mb-3 text-sm font-semibold text-gray-800">
                Format
              </div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">EDH</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">cEDH</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">Standard</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">Pioneer</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">Modern</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">Legacy</span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">Limited</span>
                  </label>
                </li>
              </ul>
            </div>
            {/* Group 2 */}
            <div>
              <div className="mb-3 text-sm font-semibold text-gray-800">
                Type of Group
              </div>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      defaultChecked
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Local Game Store
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">
                      Playgroup
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            {/* Group 3 */}
            <div>
              <div className="mb-3 text-sm font-semibold text-gray-800">
                Physical Only
              </div>
              <div className="flex items-center">
                <div className="form-switch">
                  <input
                    type="checkbox"
                    id="remote-toggle"
                    className="sr-only"
                    checked={remoteJob}
                    onChange={() => setRemoteJob(!remoteJob)}
                  />
                  <label className="bg-gray-300" htmlFor="remote-toggle">
                    <span className="bg-white shadow-sm" aria-hidden="true" />
                    <span className="sr-only">Remote Only</span>
                  </label>
                </div>
                <div className="ml-2 text-sm italic text-gray-400">
                  {remoteJob ? "On" : "Off"}
                </div>
              </div>
            </div>

            {/* Group 4 */}
            <div>
              <div className="mb-3 text-sm font-semibold text-gray-800">
                Location
              </div>
              <label className="sr-only">Location</label>
              <select className="form-select w-full">
                <option>Anywhere</option>
                <option>London</option>
                <option>San Francisco</option>
                <option>New York</option>
                <option>Berlin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
