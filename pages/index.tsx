import { cards } from "./cards";

export default function Home() {
  const rows = cards.map((row, key) => (
    <div key={key} className="flex w-1/2 min-w-max mt-5">
      {Object.entries(row).map((v) =>
        [...Array(v[1].num)].map((_, i) => {
          return (
            <div
              key={`${v[0]}_${i}`}
              className="flex flex-1 justify-center p-2 bg-white rounded-lg shadow-xs ml-5 bg-gradient-to-r from-green-400 to-blue-500"
            >
              <div>
                <span className="text-lg font-bold">{v[0]}</span>
                <div className="flex items-center justify-center w-full mb-2">
                  <label
                    htmlFor={`${v[0]}_${i}`}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id={`${v[0]}_${i}`}
                        className="sr-only"
                      />
                      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-blue-50">
        <h1 className="text-4xl font-bold mt-6">Welcome to Coyote</h1>
        {rows}
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://arkth.co.jp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Arkth Inc.
        </a>
      </footer>
    </div>
  );
}
