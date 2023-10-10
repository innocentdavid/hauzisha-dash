import Link from "next/link";
import ChartCompoent from "./components/home/Chart/Chart";
import TableDash from "./components/home/Table/Table";
import { FaAngleRight } from "react-icons/fa"


export default function Home() {
  return (
    <div className='bg-[#f9f9f9] p-[20px] '>
      <h1 className='font-bold'>Dashboard</h1>
      <div className="bg-white lg:p-[21px] rounded-[8px]">
        <div className="">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px]">Perfomance</h2>
            <Link href="#" className="flex items-center gap-2 text-sm">Full Report <FaAngleRight /></Link>
          </div>
          <div className="flex justify-between  w-full h-fit space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="min-w-[29px] min-h-[18px] bg-primary rounded-[3px]"></div>
              <span>46 Contact Requests</span>
            </div>
            <div className=" items-center gap-2 justify-end ml-2 ">
              <div className="flex pl-11">
                <div className="min-w-[29px] max-h-[18px] bg-accent1 rounded-[3px] "></div>
                <span className="lg:text-[14px] sm:text-sm">14 Callback Requests</span>
              </div>
            </div>




          </div>
        </div>
        <ChartCompoent />
      </div>
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="rounded-[8px] bg-white">
          <div className="border-b border-b-[#bfbfbf66] overflow-hidden py-3 px-[15px] flex items-center justify-between">
            <div className="">Rental Listings</div>
            <div className="flex rounded-[8px] bg-[#F9FAFB] text-[#6B7280] p-2">
              <div className="rounded-[8px] py-[7px] px-[22px] cursor-pointer bg-primary text-white">Month</div>
              <div className="rounded-[8px] py-[7px] px-[22px] cursor-pointer">Week</div>
            </div>
          </div>
          <div className="flex justify-between gap-2 items-center py-[22px] px-[15px]">
            <div className=""><CircleChart /></div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent2"></div>
                  <div className="">Vacant</div>
                </div>

                <div className="flex items-center gap-2 text-accent2 whitespace-nowrap">
                  <div className="">30</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><UpTrend /></div>
                  <div className="whitespace-nowrap">66% (+10)</div>
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent1"></div>
                  <div className="">Private</div>
                </div>

                <div className="flex justify-start items-center gap-2 text-accent3 whitespace-nowrap">
                  <div className="">22</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><DownTrend /></div>
                  <div className="whitespace-nowrap">10% (-2)</div>
                </div>
              </div>

              <div className="flex justify-between gap-2 whitespace-normal">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent4"></div>
                  <div className="whitespace-normal">Rented Out</div>
                </div>

                <div className="flex items-center gap-2 text-accent2 whitespace-nowrap">
                  <div className="">30</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><UpTrend /></div>
                  <div className="whitespace-nowrap">66% (+10)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[8px] bg-white">
          <div className="border-b border-b-[#bfbfbf66] overflow-hidden py-3 px-[15px] flex items-center justify-between">
            <div className="">Sale Listings</div>
            <div className="flex rounded-[8px] bg-[#F9FAFB] text-[#6B7280] p-2">
              <div className="rounded-[8px] py-[7px] px-[22px] cursor-pointer bg-primary text-white">Month</div>
              <div className="rounded-[8px] py-[7px] px-[22px] cursor-pointer">Week</div>
            </div>
          </div>
          <div className="flex justify-between gap-2 items-center py-[22px] px-[15px]">
            <div className=""><CircleChart /></div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent2"></div>
                  <div className="">For Sale</div>
                </div>

                <div className="flex items-center gap-2 text-accent2 whitespace-nowrap">
                  <div className="">30</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><UpTrend /></div>
                  <div className="whitespace-nowrap">66% (+10)</div>
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent1"></div>
                  <div className="">Private</div>
                </div>

                <div className="flex items-center gap-2 text-accent3 whitespace-nowrap">
                  <div className="">22</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><DownTrend /></div>
                  <div className="whitespace-nowrap">10% (-2)</div>
                </div>
              </div>

              <div className="flex justify-between gap-2 whitespace-normal">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent4"></div>
                  <div className="whitespace-normal">Sold Out</div>
                </div>

                <div className="flex items-center gap-2 text-accent2 whitespace-nowrap">
                  <div className="">30</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><UpTrend /></div>
                  <div className="whitespace-nowrap">66% (+10)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[8px] bg-white">
          <div className="border-b border-b-[#bfbfbf66] overflow-hidden py-3 px-[15px] flex items-center justify-between">
            <div className="">Rental Listings</div>
            <div className="flex rounded-[8px] bg-[#F9FAFB] text-[#6B7280] p-2">
              <div className="rounded-[8px] py-[7px] px-[22px] cursor-pointer bg-primary text-white">Month</div>
              <div className="rounded-[8px] py-[7px] px-[22px] cursor-pointer">Week</div>
            </div>
          </div>
          <div className="flex justify-between gap-2 items-center py-[22px] px-[15px]">
            <div className=""><CircleChart /></div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent2"></div>
                  <div className="">For Sale</div>
                </div>

                <div className="flex items-center gap-2 text-accent2 whitespace-nowrap">
                  <div className="">30</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><UpTrend /></div>
                  <div className="whitespace-nowrap">66% (+10)</div>
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent1"></div>
                  <div className="">Private</div>
                </div>

                <div className="flex items-center gap-2 text-accent3 whitespace-nowrap">
                  <div className="">22</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><DownTrend /></div>
                  <div className="whitespace-nowrap">10% (-2)</div>
                </div>
              </div>

              <div className="flex justify-between gap-2 whitespace-normal">
                <div className="flex items-center gap-3">
                  <div className="min-w-[10px] min-h-[10px] rounded-full bg-accent4"></div>
                  <div className="whitespace-normal">Sold Out</div>
                </div>

                <div className="flex items-center gap-2 text-accent2 whitespace-nowrap">
                  <div className="">30</div>
                  <div className="min-h-[15px] min-w-[1.5px] bg-[#E0E0E0]"></div>
                  <div className="min-w-[14px] min-h-[14px]"><UpTrend /></div>
                  <div className="whitespace-nowrap">66% (+10)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TableDash />
    </div >
  )
}

const CircleChart = () => {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48ZM19.9891 48C19.9891 63.47 32.53 76.0109 48 76.0109C63.47 76.0109 76.0109 63.47 76.0109 48C76.0109 32.53 63.47 19.9891 48 19.9891C32.53 19.9891 19.9891 32.53 19.9891 48Z" fill="#4A5566" />
      <circle cx="48.2842" cy="48.2842" r="15.9053" fill="#4A5566" />
      <path d="M48 0C54.8142 8.12586e-08 61.5503 1.45086 67.7603 4.25609C73.9703 7.06132 79.5119 11.1566 84.0164 16.2696C88.5209 21.3826 91.8852 27.3961 93.8855 33.9101C95.8857 40.4241 96.4761 47.2894 95.6173 54.0492C94.7585 60.8091 92.4703 67.3087 88.9048 73.1156C85.3393 78.9226 80.5783 83.9039 74.9384 87.7281C69.2985 91.5524 62.909 94.1319 56.1948 95.2953C49.4806 96.4587 42.5957 96.1791 35.998 94.4753L40.9961 75.1211C44.8463 76.1154 48.864 76.2785 52.7822 75.5996C56.7003 74.9207 60.4289 73.4154 63.7202 71.1837C67.0114 68.952 69.7897 66.0452 71.8704 62.6565C73.9511 59.2678 75.2864 55.4749 75.7875 51.5301C76.2887 47.5853 75.9442 43.579 74.7769 39.7777C73.6096 35.9764 71.6464 32.4672 69.0177 29.4834C66.3891 26.4997 63.1552 24.1098 59.5313 22.4728C55.9074 20.8358 51.9765 19.9891 48 19.9891V0Z" fill="#0CAF60" />
      <path d="M36.652 94.6393C26.5732 92.187 17.5601 86.5358 10.9621 78.5319C4.36421 70.528 0.536546 60.6022 0.0523284 50.2407L20.0197 49.3076C20.3022 55.3541 22.5359 61.1465 26.3862 65.8172C30.2365 70.4879 35.4962 73.7857 41.3778 75.2168L36.652 94.6393Z" fill="#FFC857" />
      <path d="M46.5792 53.9638H49.9875C52.8278 53.9638 53.9639 52.8277 53.9639 49.9875V46.5792C53.9639 43.739 52.8278 42.6029 49.9875 42.6029H46.5792C43.739 42.6029 42.6029 43.739 42.6029 46.5792V49.9875C42.6029 52.8277 43.739 53.9638 46.5792 53.9638Z" stroke="#E7F1FF" stroke-width="1.02857" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M45.6306 49.6978L46.9826 47.9425C47.1757 47.6926 47.5336 47.6472 47.7835 47.8403L48.823 48.6583C49.073 48.8514 49.4309 48.806 49.624 48.5617L50.9362 46.8689" stroke="#E7F1FF" stroke-width="1.02857" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  )
}

const UpTrend = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.75 9.91667L5.25 6.41667L7.58333 8.75L12.25 4.08334" stroke="#0CAF60" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.16666 4.08334H12.25V8.16667" stroke="#0CAF60" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

const DownTrend = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.75 4.08333L5.25 7.58333L7.58333 5.25L12.25 9.91667" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.16666 9.91667L12.25 9.91667L12.25 5.83333" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}