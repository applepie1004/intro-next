export default function DataFetching() {
  return (
    <>
      <div className="flex flex-row mb-4">
        <div className="basis-1/2 p-2 flex-row items-center justify-center">
          <div className="p-2 text-center text-xl mb-5 shadow-lg rounded-lg">
            servers side
          </div>
          <div className="p-2 text-sm">
            <ul>
              <li>
                Nextjs 13에서부턴 서버사이드에서는 기본적으로 fetch를 사용해서
                서버에서 데이터를 가져올 수 있다.
              </li>
              <li>
                각 fetch 요청에 캐싱(caching) 및 재검증(revalidating)을 구성할
                수 있다.
              </li>
              <li>
                서버 컴포넌트, 라우트 핸들러, 서버액션에서 async/await와 같이
                사용할 수 있다.
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/2 p-2 flex-row items-center justify-center">
          <div className="p-2 text-center text-xl mb-5 shadow-lg rounded-lg">
            client side
          </div>
          <div className="p-2 text-sm">
            <ul>
              <li>
                useEffect 또는 SWR(적극 권장), React Query를 사용해 Data
                Fetching할 수 있다.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
