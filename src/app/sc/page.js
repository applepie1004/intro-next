import Link from "next/link";

export default function ServerClient() {
  return (
    <>
      <div className="flex flex-row mb-4">
        <div className="basis-1/2 p-2 flex-row items-center justify-center">
          <div className="p-2 text-center text-xl mb-5 shadow-lg rounded-lg">
            SSR(Server Side Rendering)
          </div>
          <div className="p-2 text-sm">
            <ul>
              <li>
                서버에서 사용자에게 보여줄 페이지를 모두 미리 구성한 뒤 페이지를
                렌더링
              </li>
              <li>
                SSR의 경우 브라우저에 대한 서버의 응답은 렌더링할 준비가 된
                페이지의 HTML
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/2 p-2 flex-row items-center justify-center">
          <div className="p-2 text-center text-xl mb-5 shadow-lg rounded-lg">
            CSR(Client Side Rendering)
          </div>
          <div className="p-2 text-sm">
            <ul>
              <li>
                CSR의 경우 브라우저는 자바스크립트에 대한 링크가 포함된 꽤 빈
                문서를 가져옵니다. 즉, 모든 JavaScript가 다운로드되어 실행될
                때까지 기다리지 않고도 브라우저가 서버에서 HTML 렌더링을
                시작한다는 의미다.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="basis-full p-2 items-center justify-center flex bg-sky-300 rounded-xl">
        넥스트의 경우 서버 사이드가 메인이지만 컴포넌트에 따라 클라이언트
        사이드를 사용할 수 있어 적절히 섞어서 사용할 수 있다.
      </div>
      <div className="basis-full p-2 items-center justify-center flex bg-sky-300 rounded-xl mt-4">
        <Link href="https://medium.com/walmartglobaltech/the-benefits-of-server-side-rendering-over-client-side-rendering-5d07ff2cefe8">
          참고 사이트
        </Link>
      </div>
    </>
  );
}
