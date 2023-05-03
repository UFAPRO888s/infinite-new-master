import React from "react";

export default function WidgetWrapper() {
  return (
    <>
      <div className="fixed bottom-[8rem] md:bottom-5 lg:bottom-8 right-5">
        <div className="flex flex-col justify-center items-center text-center gap-2">
          <div className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 bg-infinite2-4 rounded-full p-1 shadow-lg">
            <a href="https://lin.ee/mlElpgq">
              <img
                src="../../assets/images/footer/icon-line.png"
                className="object-cover rounded-full w-full h-full"
              />
            </a>
          </div>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-infinite2-4 rounded-full p-1 shadow-lg">
            <a href="https://www.facebook.com/InfiniteDigitalConsultants/">
              <img
                src="../../assets/images/footer/icon-facebook.png"
                className="object-cover rounded-full w-full h-full"
              />
            </a>
          </div>
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-infinite2-4 rounded-full p-1 shadow-lg">
            <a href="tel:+66918166689">
              <img
                src="../../assets/images/footer/โทรศัพท์-mini.png"
                className="object-cover  w-full h-full"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
