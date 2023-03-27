export default function Skills() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24  justify-center flex flex-wrap  ">
        <div class="flex   gap-2 ">
          <div class="border-2 rounded-lg border-gray-200 border-opacity-50 p-4 lg:w-1/2 md:w-full">
            <div class="flex  p-4  sm:flex-row flex-col">
              <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-200 text-lg title-font font-medium mb-3">Technical Skills</h2>
                <p class="leading-relaxed text-base">C++ , Python, C, Javascript, CSS, TypeScript, Node(Express),Java , TypeScript ,
               </p>

                <p> JQuery, MongoDB , Github , Git , Rust , Linux , MySQL, LaTeX</p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 md:w-full border-2 rounded-lg border-gray-200 border-opacity-50">
            <div class="flex  p-8 sm:flex-row flex-col">
              <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-200 text-lg title-font font-medium mb-3">Soft Skills</h2>
                <p class="leading-relaxed text-base">Leadership, Communication, Adaptability , Problem-solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}