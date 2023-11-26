import Image from "next/image";

export default function Routes() {
  return (
    <>
      <div className="flex flex-row mb-4">
        <div className="basis-full text-xl p-2 text-white rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
          Nextjs의 routes 구조
        </div>
      </div>
      <div className="flex flex-row mb-4">
        <Image
          className="basis-1/2 shadow-lg"
          src={"/img/route-segments-to-path-segments.png"}
          width={500}
          height={500}
          sizes="100%"
          alt=""
        ></Image>
        <ul className="basis-1/2 shadow-lg p-5">
          <li className="mb-2">폴더 구조로 페이지가 만들어진다</li>
          <li className="mb-2">
            Link Component 또는 useRouter(next/navigation)을 통해 페이지를
            이동할 수 있다
          </li>
          <li className="mb-2">page.js 에 UI/Component를 작성할 수 있다.</li>
          <li className="mb-2">
            layout.js 은 여러 page.js들과 공유되는 UI이다
          </li>
          <li className="mb-2">레이아웃은 중첩될 수 있다</li>
        </ul>
      </div>

      <div className="flex flex-row mb-4">
        <Image
          className="basis-1/2 shadow-lg"
          src={"/img/defining-routes.png"}
          width={500}
          height={300}
          sizes="100%"
          alt=""
        ></Image>
        <Image
          className="basis-1/2 shadow-lg"
          src={"/img/nested-layouts-ui.png"}
          width={500}
          height={300}
          sizes="100%"
          alt=""
        ></Image>
      </div>
    </>
  );
}
