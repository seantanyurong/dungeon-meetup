import React from "react";

import { api } from "~/utils/api";
import PlaygroupItem from "./PlaygroupItem";
import Newsletter from "./Newsletter";
// import type { StaticImageData } from "next/image";
// import Image01 from "public/images/temp/author-01.jpg";

function JobList() {
  const { data } = api.playgroup.getAll.useQuery();

  return (
    <div className="pb-8 md:pb-16">
      <h2 className="mb-10 text-3xl font-bold">Playgroups</h2>
      {/* List container */}
      <div className="flex flex-col">
        {data?.map((playgroup) => {
          return (
            <PlaygroupItem
              key={playgroup.id}
              id={playgroup.id}
              currentSize={playgroup.currentSize}
              maxSize={playgroup.maxSize}
              formats={playgroup.formats}
              title={playgroup.title}
              city={playgroup.city}
              lgs={playgroup.lgs}
              physical={playgroup.physical}
              sticky={playgroup.sticky}
              image={playgroup.image}
            />
          );
        })}

        {/* Newletter CTA */}
        <div className="-order-1 border-b border-gray-200 py-8">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

export default JobList;
