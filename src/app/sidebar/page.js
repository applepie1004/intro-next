"use client";
import { useState, useEffect, useRef } from "react";

import { Map as OlMap, View } from "ol";
import { defaults as defaultControls } from "ol/control";
import { fromLonLat, get as getProjection } from "ol/proj";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { XYZ, Vector as VectorSource } from "ol/source";
import "ol/ol.css";

export default function Page() {
  const [expend, setExpend] = useState(false);
  const [width, setWidth] = useState(150);
  const isResized = useRef(false);

  // OlMap 타겟 지정을 위해 사용 (id를 지정 대신)
  const mapContent = useRef(null);

  // 추후 객체를 추가하기 위한 레이어(점, 선, 도형)
  const initVectorLayer = new VectorLayer({
    source: new VectorSource(),
  });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }
      setWidth((previousWidth) => {
        let returnWidth = previousWidth + e.movementX / 2;
        if (returnWidth < 150) {
          setExpend(false);
        }
        return returnWidth;
      });
    });
    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });

    if (!mapContent.current) {
      return;
    }

    const map = new OlMap({
      controls: defaultControls({ zoom: false, rotate: false }).extend([]),
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png",
          }),
        }),
        initVectorLayer,
      ],
      view: new View({
        projection: getProjection("EPSG:3857"),
        center: fromLonLat([127.296364, 37.503429]),
        zoom: 15,
        minZoom: 7,
        maxZoom: 20,
      }),
      target: mapContent.current,
    });

    return () => map.setTarget(undefined);
  }, []);
  return (
    <div className="flex">
      <aside className="flex">
        <div
          style={{ width: `${width}px` }}
          className={`h-[calc(100vh-154px-4.5rem)]  overflow-x-hidden ${
            !isResized.current ? "duration-1000 tansition-all easy-linear" : ""
          } `}
        >
          <ul className="list-none">
            <li className="p-3 flex">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="ms-3 font-bold">Contact</p>
            </li>
            <li className="p-3 flex">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"
                />
              </svg>
              <p className="ms-3 font-bold">BookMark</p>
            </li>
            <li className="p-3 flex">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
              </svg>
              <p className="ms-3 font-bold">Calendar</p>
            </li>
          </ul>
        </div>

        <div
          className="w-1 cursor-col-resize"
          onMouseDown={() => {
            isResized.current = true;
          }}
        />
      </aside>
      <main className="h-full w-full">
        <header
          className={`h-[calc(50px+1.5rem)] bg-slate-100 w-full transition-all duration-700 ease-linear`}
        >
          <button
            className="m-3 rounded-lg border bg-slate-200 p-3"
            onClick={(e) => {
              setExpend(!expend);
              setWidth(expend ? 0 : 150);
            }}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h14M1 6h14M1 11h7"
              />
            </svg>
          </button>
        </header>
        <article className="h-[calc(100vh-156px-9rem)] bg-white">
          <div className="h-full w-full" ref={mapContent}></div>
        </article>
      </main>
    </div>
  );
}
