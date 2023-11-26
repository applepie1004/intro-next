export default function Intro() {
  return (
    <>
      <div className=""></div>
      <div className="flex flex-row mb-4">
        <div className="basis-1/12 text-xl rounded-lg flex items-center justify-center bg-sky-500 shadow-lg">
          Nextjs
        </div>
        <div className="basis-11/12">
          <div className="flex flex-row">
            <div className="basis-1/12 text-lg flex items-center justify-center ">
              특징
            </div>
            <div className="basis-11/12">
              <p className="text-sm mb-2">
                1. 리액트에서 서버 사이드 렌더링을 간편하게 해주는 프레임워크
              </p>
              <p className="text-sm mb-2">
                2. 클라이언트 / 서버 렌더링을 동시에 사용가능하다
              </p>
              <p className="text-sm mb-2">3. 중첩된 라우터 가능</p>
              <p className="text-sm mb-2">
                4. API를 만들어 프론트와 연결할 수 있다
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mb-4">
        <div className="basis-1/12 text-xl"></div>
        <div className="basis-11/12">
          <div className="flex flex-row">
            <div className="basis-1/12 text-lg flex items-center justify-center ">
              장점
            </div>
            <div className="basis-11/12">
              <p className="text-sm mb-2">1. 초기 로딩 속도가 빠르다.</p>
              <p className="text-sm mb-2">
                2. 서버 사이드 렌더링이기 때문에 서치에 걸리기 좋다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="basis-1/12 text-xl"></div>
        <div className="basis-11/12">
          <div className="flex flex-row">
            <div className="basis-1/12 text-lg flex items-center justify-center ">
              단점
            </div>
            <div className="basis-11/12">
              <p className="text-sm mb-2">
                1. 모든 요청에 대해 필요한 부분을 수정하는게 아닌 새로운
                html페이지를 내려주기 때문에 속도 저하 및 새로고침이 발생함.
              </p>
              <p className="text-sm mb-2">
                2. 페이지를 요청할 때마다 새로고침되어 UX가 다소 떨어진다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
