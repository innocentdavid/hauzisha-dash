import Image from 'next/image';
export default function TableDash() {
    return (
        <div className=" mt-[20px]">
            <h1> Top Listings </h1>
            <table className="lg:h-[371px] sm:h-[286px] lg:w-[1096px] sm:w-[344px] mx-auto text-[#818183] lg:text-[14px] sm:text-sm ">
                <thead>
                    <tr>
                        <th className=" lg:pl-[20px] sm:pl-[12.06px] pt-[14px] pb-[15px] ">
                            <div className="flex items-center">
                                Listings
                                <Image src="/assets/icons/arrow.svg" height={5} width={10} alt="arrow-icom" className="ml-[8px]" />
                            </div>
                        </th>
                        <th className="lg:pl-[209px] sm:pl-[33.12px] pt-[14px] pb-[15px]">
                            <div className="flex items-center">
                                Contacts
                                <Image src="/assets/icons/arrow.svg" height={5} width={10} alt="arrow-icom" className="ml-[8px]" />
                            </div>

                        </th>
                        <th className="lg:pl-[209px] sm:pl-[40.64px] lg:pt-[14px] sm:pt-[8.84px] lg:pb-[15px] sm:pb-[9.83px]">
                            <div className="flex items-center ">
                                Listing Views
                                <Image src="/assets/icons/arrow.svg" height={5} width={10} alt="arrow-icom" className="ml-[2px]" />
                            </div>
                        </th>
                        <th className="lg:pl-[209px] sm:pl-[41.52px] pr-[134px] pt-[14px] pb-[15px]">
                            <div className="flex items-center">
                                Searches
                                <Image src="/assets/icons/arrow.svg" height={5} width={10} alt="arrow-icom" className="ml-[8px]" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-[68px] w-[1096px]">

                        <td className=" lg:pl-[20px] sm:pl-[12.06px] lg:pt-[15px] sm:pt-[9.47] lg:pb-[17px] sm:pb-[10.73]">  
                        <Image src="/assets/images/table-img.jpg" alt="table-image" width={53} height={53} className="lg:w-[52.95px] sm:w-[33.42px] lg:h-[36px] sm:h-[22.72px]" /> </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[221px] sm:pl-[41px]"> 33 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[268px] sm:pl-[78px]"> 40000 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[255px] sm:pl-[70.52px] lg:pr-[175px] sm:pr-[43.38px]"> 1009 </td>
                    </tr>
                    <tr className="h-[68px]">
                        <td className=" lg:pl-[20px] sm:pl-[12.06px] lg:pt-[15px] sm:pt-[9.47] lg:pb-[17px] sm:pb-[10.73] "> <Image src="/assets/images/table-img.jpg" alt="table-image" width={53} height={53} className="lg:w-[52.95px] sm:w-[33.42px] lg:h-[36px] sm:h-[22.72px]" /> </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[221px] sm:pl-[41px]"> 33 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[268px] sm:pl-[78px]"> 40000 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[255px] sm:pl-[70.52px] lg:pr-[175px] sm:pr-[43.38px]"> 1009 </td>
                    </tr>
                    <tr className="h-[76px]">
                        <td className=" lg:pl-[20px] sm:pl-[12.06px] lg:pt-[15px] sm:pt-[9.47] lg:pb-[17px] sm:pb-[10.73] "> <Image src="/assets/images/table-img.jpg" alt="table-image" width={53} height={53} className="lg:w-[52.95px] sm:w-[33.42px] lg:h-[36px] sm:h-[22.72px]" /> </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[221px] sm:pl-[41px]"> 33 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[268px] sm:pl-[78px]"> 40000 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[255px] sm:pl-[70.52px]lg: pr-[175px sm:pr-[43.38px]]"> 1009 </td>
                    </tr>
                    <tr className="h-[68px]">
                        <td className="lg:pl-[20px] sm:pl-[12.06px] lg:pt-[15px] sm:pt-[9.47] lg:pb-[17px] sm:pb-[10.73] "> <Image src="/assets/images/table-img.jpg" alt="table-image" width={53} height={53} className="lg:w-[52.95px] sm:w-[33.42px] lg:h-[36px] sm:h-[22.72px]" /> </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[221px] sm:pl-[41px]"> 33 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[268px] sm:pl-[78px] "> 40000 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[255px] sm:pl-[70.52px] lg:pr-[175px] sm:pr-[43.38px]"> 1009 </td>
                    </tr>
                    <tr className="h-[6px]">
                        <td className="lg:pl-[20px] sm:pl-[12.06px] lg:pt-[15px] sm:pt-[9.47] lg:pb-[17px] sm:pb-[10.73] "> <Image src="/assets/images/table-img.jpg" alt="table-image" width={53} height={53} className="lg:w-[52.95px] sm:w-[33.42px] lg:h-[36px] sm:h-[22.72px]" /> </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[221px] sm:pl-[41px]"> 33 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[268px] sm:pl-[78px] "> 40000 </td>
                        <td className="lg:py-[25px] sm:py-[15px] lg:pl-[255px] sm:pl-[70.52px] lg:pr-[175px] sm:pr-[43.38px]"> 1009 </td>
                    </tr>
                </tbody>
            </table>
            <div className=" lg:flex sm:hidden lg:h-[55px] lg:w-full  lg:justify-end">
                <div className=" h-11 w-fit flex mr-[225px]  ">
                    <button className="my-[17px]">
                        <Image src="/assets/icons/icon-left.svg" width={53} height={53} alt='className="h-[27.41px] w-[28.1px]' />
                    </button>
                    <div className=" text-[#818183] text-[14px] my-[22px] mx-7">
                        Rows Per Page -5 (1-5 of 45)
                    </div>
                    <button className="my-[17px]">
                        <Image src="/assets/icons/icon-next.svg" alt='' width={53} height={53} className="h-[27.41px] w-[28.1px]" />
                    </button>
                </div>
            </div>
        </div>
    )
}
