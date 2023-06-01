import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex justify-center py-12 flex-col items-center">
      <h2 className="text-center text-4xl font-black text-slate-800 pb-11">
        Front End
        <br />
        Developer
      </h2>
      <div className="rounded-full overflow-hidden">
        <Image src="/assets/blog/profile/profile.jpg" alt="profile" width="300" height="300" />
      </div>
      <h3 className="text-center text-2xl font-black text-slate-800 pt-5 tracking-widest">이푸름</h3>
      <p className="text-sm text-slate-400 tracking-tight">Lee Pureum</p>
      <ul className="pt-10 w-56 text-slate-700">
        <li className="flex justify-start items-center text-sm border-b py-3">
          <span className="w-5 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill="currentColor" fill-rule="evenodd" d="M5 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5zM7.625 8.22a1 1 0 1 0-1.25 1.56l3.75 3.001a3 3 0 0 0 3.75 0l3.75-3a1 1 0 1 0-1.25-1.562l-3.75 3a1 1 0 0 1-1.25 0l-3.75-3z" clip-rule="evenodd" />
            </svg>
          </span>
          leepuu001@gmail.com
        </li>
        <li className="flex justify-start items-center text-sm border-b py-3">
          <span className="w-5 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 16.016c1.245.529 2 1.223 2 1.984 0 1.657-3.582 3-8 3s-8-1.343-8-3c0-.76.755-1.456 2-1.984" />
              <path fill="currentColor" fill-rule="evenodd" d="M11.262 17.675 12 17l-.738.675zm1.476 0 .005-.005.012-.014.045-.05.166-.186a38.19 38.19 0 0 0 2.348-2.957c.642-.9 1.3-1.92 1.801-2.933.49-.99.885-2.079.885-3.086C18 4.871 15.382 2 12 2S6 4.87 6 8.444c0 1.007.395 2.096.885 3.086.501 1.013 1.16 2.033 1.8 2.933a38.153 38.153 0 0 0 2.515 3.143l.045.05.012.014.005.005a1 1 0 0 0 1.476 0zM12 17l.738.674L12 17zm0-11a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" clip-rule="evenodd" />
            </svg>
          </span>
          경기도 광주시
        </li>
        <li className="flex justify-start items-center text-sm  py-3">
          <span className="w-5 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <g data-name="Layer 2">
                <g data-name="phone">
                  <rect width="24" height="24" opacity="0" />
                  <path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22z" />
                </g>
              </g>
            </svg>
          </span>
          010.7121.4363
        </li>
      </ul>

      <p className="text-sm p-5 mt-5 bg-yellow-50 text-yellow-800">
        gatsby에서 next.js로 옮겨가는 중이라 아직은 부족한 점이 많습니다~ <br />
        계속 보충하여 발전할테니 기대해주세요 （ゝ。∂）
      </p>
    </div>
  );
};

export default Profile;
