import DP from "./assets/Dp2.png";
import Link from "./components/Link";
import NavBar from "./components/NavBar";
import Resume from "./assets/Resume.pdf";

function App() {
  return (
    <>
      <NavBar />
      <section class="bg-violet-700 w-screen">
        <div className="min-h-[30vh] flex flex-col-reverse items-center justify-between max-w-5xl px-4 mx-auto sm:flex-row">
          <div className="flex flex-col justify-center">
            <h2 class="text-2xl md:text-4xl font-bold mb-6 text-white  text-center sm:text-left">
              UX / UI DESIGNER
            </h2>
            <p class=" max-w-xl font-medium text-white text-base md:text-xl pb-8">
              Hi! I'm Shubham, a multifaceted creative with 4 years of
              experience in UI.
              <br />
            </p>
            <div>
            <Link
              href={Resume}
              target="_blank"
              className="px-4 flex bg-violet-100 shadow-md border hover:text-violet-900 text-black hover:border-black border-violet-900 text-base md:text-xl w-[fit-content] font-semibold hover:bg-white  transition-all focus:bg-white mb-8 !leading-none  justify-center items-center h-10 md:h-12"
            >
              VIEW RESUME
            </Link>
            </div>
          </div>
          <img
            src={DP}
            loading="lazy"
            alt="Shubham Mourya"
            class="w-72 rounded-xl mb-3 sm:mb-0"
          />
        </div>
      </section>
      <section class="bg-slate-100 py-10 w-screen  px-4 ring-slate-100 ring-1 min-h-[30vh] flex flex-col justify-center">
        <div className="max-w-5xl lg:mx-auto">
          <div class="w-full flex justify-between gap-4">
            <h2 class="text-3xl md:text-4xl font-bold md:mb-6 ">SKILLSET</h2>
          </div>
          <div class="grid grid-cols-12 gap-4 md:gap-6 lg:gap-20 w-full overflow-hidden">
            <div className="col-span-12 lg:col-span-4">
              <h3 class="text-lg font-bold pb-2.5 my-5 border-b border-gray-700">
                BREADTH
              </h3>
              <div class="flex flex-wrap gap-2 w-[calc(100vw-32px)] lg:w-auto max-w-xl">
                <div class="inline-block rounded-lg  text-white text-xs md:text-sm bg-gray-900 px-2.5 py-1.5">
                  Information architecture
                </div>
                <div class="inline-block rounded-lg  text-white text-xs md:text-sm bg-gray-900 px-2.5 py-1.5">
                  Interaction design
                </div>
                <div class="inline-block rounded-lg  text-white text-xs md:text-sm bg-gray-900 px-2.5 py-1.5">
                  Prototyping
                </div>
                <div class="inline-block rounded-lg  text-white text-xs md:text-sm bg-gray-900 px-2.5 py-1.5">
                  Visual design
                </div>
                <div class="inline-block rounded-lg  text-white text-xs md:text-sm bg-gray-900 px-2.5 py-1.5">
                  HTML /CSS
                </div>
                <div class="inline-block rounded-lg text-white text-xs md:text-sm bg-gray-900 px-2.5 py-1.5">
                  Illustration
                </div>
                <div class="inline-block rounded-lg  text-white text-xs md:text-sm bg-gray-900 px-2.5 py-1.5">
                  Animation
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h3 class="text-lg font-bold pb-2.5 my-5 border-b border-gray-700">
                DEPTH
              </h3>
              <div class="flex justify-between gap-4 flex-col sm:flex-row w-[calc(100vw-32px)] lg:w-auto max-w-xl lg:max-w-none">
                <div class="flex sm:flex-col gap-4 items-center">
                  <svg
                    class="w-20 sm:w-auto sm:h-24 lg:h-36 fill-gray-900"
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160.69 150"
                  >
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g>
                        <path d="m80.27,0C103.92,0,127.58,0,151.23.01c1.05,0,2.11.14,3.15.3,3.76.61,5.91,4.15,6.15,6.85.09,1,.15,2,.15,3,0,32.73.01,65.45-.01,98.18,0,1.24-.1,2.52-.4,3.73-.76,3.06-3.43,5.27-6.59,5.6-1.02.11-2.06.17-3.09.17-47.09,0-94.18,0-141.27,0-2.44,0-4.7-.46-6.59-2.16-1.86-1.68-2.61-3.82-2.73-6.26-.01-.31-.01-.61-.01-.92C0,75.32,0,42.12,0,8.92c0-3.37,1.23-6.07,4.21-7.85C5.39.37,6.7.14,8.04.05c.56-.04,1.11-.05,1.67-.05C33.23,0,56.75,0,80.27,0Zm.08,10.71c-22.21,0-44.41,0-66.62,0-2.04,0-3.02.98-3.02,3.01,0,26.51,0,53.01,0,79.52,0,.22,0,.45,0,.67.08,1.46,1.14,2.48,2.6,2.51.56.01,1.12,0,1.67,0,43.55,0,87.1,0,130.64,0,.61,0,1.24.09,1.84-.02.55-.1,1.13-.31,1.58-.64.82-.59.93-1.53.93-2.48,0-8.65,0-17.3,0-25.95,0-17.77,0-35.55,0-53.32,0-2.35-.92-3.31-3.18-3.31-22.15,0-44.3,0-66.45,0Zm.01,96.43h0c1.81,0,3.62.02,5.43,0,1.57-.02,2.62-1.16,2.6-2.75-.02-1.54-1.1-2.6-2.65-2.6-3.57,0-7.13,0-10.7,0-1.59,0-2.72,1.09-2.73,2.63-.02,1.62,1.05,2.71,2.71,2.73,1.78.02,3.57,0,5.35,0Z" />
                        <path d="m80.31,150c-11.24,0-22.48,0-33.73,0-.22,0-.45,0-.67,0-2.26-.07-3.4-1.51-2.99-3.72.57-3.07,3.05-6.72,7.89-6.94.47-.02.95-.05,1.42-.05,18.77,0,37.55,0,56.32,0,.86,0,1.73.06,2.58.21,3.55.61,6.25,3.49,6.69,7.09.23,1.85-1.01,3.27-2.95,3.4-.25.02-.5,0-.75,0-11.27,0-22.54,0-33.81,0Z" />
                        <path d="m105.23,133.89h-49.72c.67-.64,1.23-1.19,1.81-1.73,2.58-2.42,4.58-5.23,5.97-8.49.09-.21.42-.34.66-.46.11-.06.27-.01.41-.01,10.66,0,21.31,0,31.97-.02.66,0,.96.2,1.23.8,1.58,3.58,3.91,6.61,6.85,9.17.23.2.45.4.82.73Z" />
                        <path d="m144.59,16.13v74.9H16.14V16.13h128.45Zm-69.72,20.22c-.25-.32-.45-.58-.66-.84-7.39-9.12-17.01-12.79-28.49-10.95-13.93,2.23-23.3,14.07-24.2,26.35-.44,5.98.58,11.66,3.47,16.86,4.48,8.08,11.29,13.16,20.47,14.79,6.7,1.19,13.16.5,19.19-2.87,8.37-4.68,13.73-11.57,15.27-21.16.91-5.67.44-11.23-1.96-16.52-.25-.55-.11-.87.26-1.23.91-.87,1.76-1.79,2.72-2.6.41-.34,1.01-.63,1.52-.64,3.74-.05,7.47-.01,11.21-.02,1.66,0,2.75-1.1,2.74-2.7-.01-1.62-1.09-2.66-2.77-2.66-4.29,0-8.59.03-12.88-.02-1.16-.01-2.04.37-2.82,1.17-.99,1.02-2.02,2-3.08,3.06Zm48.34,31.87c0,4.02,0,8.03,0,12.05,0,1.6,1.02,2.74,2.52,2.76,3.68.03,7.36.04,11.05-.02.55,0,1.17-.35,1.63-.69.75-.56.87-1.44.87-2.34,0-7.76,0-15.51,0-23.27,0-.25,0-.5-.04-.75-.25-1.59-1.19-2.39-2.8-2.39-3.49,0-6.97,0-10.46,0-1.69,0-2.76,1.07-2.76,2.76,0,3.96,0,7.92,0,11.88Zm-21.43,3.98c0,2.62,0,5.24,0,7.87,0,1.98,1,2.97,2.98,2.98,3.35,0,6.69,0,10.04,0,2.02,0,3.03-.99,3.04-3.03.01-2.18,0-4.35,0-6.53,0-2.96.01-5.91,0-8.87-.01-2-1.03-3.01-2.97-3.01-3.46,0-6.92,0-10.38,0-1.64,0-2.72,1.08-2.72,2.72,0,2.62,0,5.24,0,7.87Zm-13.48,10.84h0c1.78,0,3.57.01,5.35,0,1.59-.01,2.71-.98,2.73-2.55.06-3.63.07-7.25,0-10.88-.03-1.74-1.14-2.65-2.89-2.65-3.51,0-7.03,0-10.54,0-1.48,0-2.6,1.11-2.61,2.58-.01,3.57-.01,7.14,0,10.71,0,1.71,1.06,2.76,2.76,2.78,1.73.01,3.46,0,5.19,0Zm33.62-45.54c-4.91,0-9.81,0-14.72,0-1.6,0-2.74,1.08-2.75,2.61-.01,1.63,1.05,2.75,2.69,2.75,9.78.01,19.57.01,29.35.01,1.68,0,2.79-1.08,2.79-2.66,0-1.67-1.07-2.71-2.81-2.71-4.85,0-9.7,0-14.55,0Zm-6.68-10.71c-2.73,0-5.46,0-8.19,0-1.49,0-2.6,1.16-2.6,2.67s1.06,2.67,2.59,2.68c5.41.02,10.81.02,16.22,0,1.59,0,2.65-1.14,2.63-2.72-.01-1.58-1.09-2.64-2.7-2.64-2.65,0-5.29,0-7.94,0Zm20.05,0c-.53,0-1.06-.01-1.59,0-1.35.04-2.45,1.18-2.48,2.54-.03,1.55.94,2.73,2.36,2.8,1.11.05,2.23.06,3.34,0,1.42-.07,2.39-1.28,2.34-2.82-.04-1.4-1.1-2.49-2.48-2.52-.5-.01-1,0-1.5,0Z" />
                        <path d="m65.9,72.19c-5.05,4.61-15.65,7.87-25.53,2.97-10.26-5.08-15.33-16.47-13.02-26.65,2.32-10.27,10.8-17.81,20.81-18.75.02.29.05.58.05.87,0,2.9-.03,5.8.02,8.7.02.8-.26,1.09-1,1.31-5.24,1.61-8.57,5.12-9.52,10.48-1.01,5.71.95,10.47,5.87,13.65,4.37,2.82,9.04,2.83,13.67.48.78-.4,1.22-.39,1.85.25,2.21,2.25,4.49,4.42,6.8,6.66Z" />
                        <path d="m73.53,45.52c2.83,8.48,1.19,15.94-3.79,23.01-1.12-1.09-2.14-2.07-3.15-3.06-1.31-1.29-2.59-2.61-3.93-3.88-.51-.48-.52-.84-.19-1.43,3.8-6.72,1.37-14.99-5.46-18.56-.9-.47-1.92-.71-2.87-1.1-.23-.09-.55-.35-.55-.54-.03-3.37-.02-6.74-.02-10.24.74.11,1.39.17,2.03.31,6.2,1.35,11.17,4.58,14.91,9.72.37.5.3.79-.13,1.18-.92.85-1.82,1.73-2.66,2.66-1.05,1.16-1.02,2.83,0,3.85,1.02,1.02,2.79,1.02,3.94-.03.61-.55,1.16-1.17,1.88-1.9Z" />
                        <path d="m58.92,53.62c-.02,4.37-3.71,8.01-8.12,7.99-4.19-.02-7.96-3.87-7.95-8.13.01-4.24,3.81-7.95,8.11-7.94,4.25.01,7.98,3.8,7.96,8.08Z" />
                        <path d="m128.61,58.97h5.26v18.64h-5.26v-18.64Z" />
                        <path d="m107.19,67h5.25v10.61h-5.25v-10.61Z" />
                        <path d="m91.03,72.38v5.25h-5.28v-5.25h5.28Z" />
                      </g>
                    </g>
                  </svg>
                  <h4 class="text-lg   font-semibold">Design systems</h4>
                </div>
                <div class="flex sm:flex-col gap-4 items-center">
                  <svg
                    class="w-20 sm:w-auto sm:h-24 lg:h-36"
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 225.06 150"
                  >
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g>
                        <path d="m101.22,97.48v29.99h-1.25c-29.06,0-58.12,0-87.18,0-5.02,0-9.07-1.76-11.5-6.39C.29,119.17.01,117.07.01,114.95,0,80.66,0,46.37.01,12.08.01,6.24,3.6,1.52,8.89.38,10.25.09,11.68.01,13.08.01,59.44,0,105.8-.01,152.16.04c1.92,0,3.94.26,5.74.9,4.01,1.42,6.29,4.61,6.75,8.68.48,4.2.33,8.48.45,12.8h-15.12c0-1.24.02-2.44,0-3.64-.04-2.29-1.56-3.79-3.86-3.79-42.46,0-84.91,0-127.37,0-2.21,0-3.75,1.54-3.75,3.75,0,24.92,0,49.83,0,74.75,0,2.59,1.51,4.01,4.24,4.01,21.29,0,42.57-.01,63.86-.02,5.59,0,11.17,0,16.76,0h1.37Zm-18.65,7.5c-1.36,0-2.73-.02-4.09,0-1.89.04-3.45,1.64-3.48,3.54-.04,2.17,1.31,3.87,3.3,3.93,2.8.08,5.61.08,8.42,0,1.98-.05,3.35-1.78,3.29-3.93-.05-1.97-1.53-3.5-3.46-3.54-1.32-.03-2.65,0-3.98,0Z" />
                        <path d="m101.24,89.93H22.56V22.65h93.92c-3.95.73-7.18,2.65-9.88,5.5-3.46,3.66-5.35,7.99-5.35,13.09,0,15.74,0,31.48,0,47.21,0,.46,0,.92,0,1.47Z" />
                        <path d="m108.8,112.39v-59.84h89.85v7.44c-.41,0-.82,0-1.23,0-4.34,0-8.67,0-13.01,0-9.45,0-16.59,5.5-18.96,14.66-.3,1.16-.43,2.39-.44,3.58-.03,10.9-.02,21.79-.02,32.69v1.48h-56.19Z" />
                        <path d="m172.54,127.39v-37.35h52.35v37.35h-52.35Z" />
                        <path d="m108.78,120.02h56.21v1.26c0,5.89.02,11.79,0,17.68-.02,3.79,1.06,7.22,3.2,10.33.1.15.19.32.36.61-.48.03-.85.07-1.22.07-15.34,0-30.69,0-46.03,0-4.99,0-9.03-1.84-11.28-6.5-.72-1.5-1.14-3.28-1.18-4.95-.14-6.12-.05-12.25-.05-18.5Zm45.07,7.46c-1.36,0-2.73-.02-4.09,0-1.95.04-3.5,1.65-3.52,3.62-.02,2.15,1.37,3.81,3.38,3.85,2.73.06,5.46.06,8.18,0,2.08-.04,3.49-1.71,3.44-3.91-.04-2.03-1.54-3.55-3.54-3.58-1.29-.02-2.57,0-3.86,0Z" />
                        <path d="m198.82,44.94h-89.9c-1.21-7.81,2.98-14.03,9.92-14.75,1.12-.12,2.26-.19,3.39-.19,21.08-.01,42.17-.02,63.25.01,1.47,0,2.95.2,4.42.41,4.99.74,8.26,5.58,8.61,9.7.13,1.55.2,3.11.31,4.81Z" />
                        <path d="m101.31,135.03c-.39,5.32.09,10.38,3.59,14.87-.61.03-1.02.07-1.42.07-17.89,0-35.78,0-53.67,0-1.97,0-3.65-.52-4.52-2.47-.86-1.93.35-4.33,2.62-4.74,1.82-.33,3.73-.29,5.59-.25,1.16.03,2.06-.26,2.78-1.13,1.52-1.83,2.99-3.69,4.56-5.47.38-.44,1.04-.89,1.58-.89,12.73-.05,25.47-.04,38.2-.04.15,0,.31.02.69.05Z" />
                        <path d="m172.26,82.4c.28-2.34.32-4.62.85-6.79,1.15-4.65,5.14-7.62,10.45-8.06.74-.06,1.48-.07,2.22-.07,8.71,0,17.41-.02,26.12.01,1.32,0,2.66.09,3.96.34,4.96.95,8.47,4.89,8.92,9.94.13,1.51.19,3.02.28,4.62h-52.8Z" />
                        <path d="m172.68,135.03h52.3c.03,3.14.1,6.24-1.43,9.05-2.32,4.28-6.23,5.83-10.83,5.86-9.45.06-18.89.08-28.34-.01-4.78-.05-8.47-2.14-10.7-6.51-1-1.96-1.54-6.56-1-8.4Z" />
                      </g>
                    </g>
                  </svg>
                  <h4 class="text-lg font-semibold">Responsive UI</h4>
                </div>
                <div class="flex sm:flex-col gap-4 items-center">
                  <svg
                    class="w-20 sm:w-auto sm:h-24 lg:h-36"
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                  >
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g>
                        <path d="m109.67,57.43c.13.42.23,1.05-.07,1.63-.28.52-.83.92-1.61,1.16-8.27,2.54-14.65,4.36-20.68,5.92-3.65.94-4.53,3.04-4.71,5.91-.59,9.28.95,17.7,4.73,25.75,1.52,3.26,2.76,6.79,3.96,10.2.36,1.02.72,2.04,1.09,3.06.69,1.94.08,2.73-.62,3.25-.67.5-1.39.68-2.05.51-.66-.18-1.22-.72-1.58-1.53-1.55-3.52-2.94-7.23-4.27-10.82l-.56-1.49c-1.37-3.65-2.7-7.32-4.02-10.99l-2.32-6.39-4.03.18-3.26,8.9c-2.44,6.64-4.88,13.28-7.29,19.94-.73,2.02-1.62,2.3-2.4,2.39-.49.07-1.66.1-2.08-.83-.49-1.08-.61-2.27-.45-2.75l.58-1.67c1.95-5.72,3.97-11.63,6.55-17.09,2.82-5.98,2.72-11.98,2.63-17.79-.02-1.49-.05-3.03-.02-4.52.05-2.23-2.46-3.47-3.34-3.73-4.05-1.2-8.1-2.36-12.16-3.52-2.34-.66-4.67-1.33-7.01-2.01l-.18-.05c-1.09-.31-2.12-.61-2.99-1.04-1.12-.56-1.56-1.68-1.16-2.91.28-.81.97-1.52,1.96-1.52.19,0,.39.02.6.08,2.54.67,5.13,1.41,7.63,2.14,3.25.94,6.61,1.91,9.97,2.74,3.06.75,6.18,1.12,9.2,1.47l1.31.15c10.62,1.27,20.43-1.87,29.92-4.92l.18-.06c1.62-.52,3.36-1,5.33-1.47,1.55-.37,2.76.27,3.22,1.72Z" />
                        <path d="m75,0C33.58,0,0,33.58,0,75s33.58,75,75,75,75-33.58,75-75S116.42,0,75,0Zm-11.76,37.81c.64-1.52,1.58-2.92,2.79-4.13,2.4-2.4,5.59-3.72,8.96-3.72h.05c3.28.01,6.54,1.41,8.93,3.82,2.37,2.4,3.73,5.62,3.71,8.86-.01,3.28-1.42,6.55-3.85,8.96-2.42,2.41-5.67,3.78-8.93,3.78h-.06c-6.93-.03-12.57-5.72-12.57-12.68,0-1.71.34-3.36.97-4.89Zm50.79,23.57c-.9,1.71-2.52,2.99-4.57,3.62-8.35,2.56-14.79,4.41-20.9,5.98-.67.17-.84.3-.84.31,0,.02-.07.25-.13,1.08-.54,8.41.86,16.04,4.27,23.31,1.63,3.48,2.91,7.13,4.15,10.66.35,1.01.71,2.02,1.07,3.03,1.3,3.61.45,6.87-2.33,8.95-1.89,1.4-4.18,1.89-6.31,1.33-2.17-.57-3.9-2.11-4.89-4.34-1.61-3.66-3.02-7.44-4.38-11.09l-.55-1.48c-1.25-3.32-2.45-6.65-3.66-9.98l-.6,1.64c-2.43,6.64-4.87,13.27-7.27,19.92-1.22,3.37-3.41,5.27-6.5,5.66-.36.04-.72.06-1.07.06-2.78,0-5.09-1.4-6.17-3.8-.78-1.72-1.35-4.32-.63-6.43l.57-1.67c2-5.85,4.07-11.89,6.76-17.61,2.33-4.92,2.25-10.09,2.16-15.57-.02-1.18-.04-2.4-.03-3.62-3.92-1.15-7.89-2.28-11.86-3.42-2.34-.67-4.69-1.34-7.03-2.01l-.17-.05c-1.26-.37-2.57-.74-3.84-1.38-3.36-1.68-4.87-5.36-3.67-8.96,1.22-3.65,4.9-5.66,8.57-4.7,2.6.69,5.22,1.44,7.75,2.17,3.2.93,6.52,1.89,9.78,2.7,2.75.67,5.71,1.02,8.58,1.35l1.32.16c9.54,1.14,18.41-1.71,27.8-4.72l.18-.06c1.74-.56,3.61-1.07,5.7-1.57,4.12-.98,7.88,1.09,9.14,5.05.6,1.89.46,3.83-.4,5.48Zm-39.16-11h.03c1.95,0,3.92-.84,5.41-2.32,1.5-1.49,2.36-3.48,2.37-5.45.01-1.91-.81-3.85-2.26-5.3-1.47-1.49-3.44-2.34-5.4-2.35h-.03c-2.04,0-3.97.8-5.43,2.26-1.48,1.47-2.29,3.41-2.29,5.48s.87,3.99,2.26,5.39c1.38,1.4,3.28,2.28,5.34,2.29Z" />
                      </g>
                    </g>
                  </svg>
                  <h4 class="text-lg font-semibold">Accessible Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
