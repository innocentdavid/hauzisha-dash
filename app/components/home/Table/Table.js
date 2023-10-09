
export default function TableDash() {
    return (
        <div className=" mt-[20px]">
            <h1> Top Listings </h1>
            <table className="h-[371px] w-[1096px] mx-auto text-[#818183] text-[14px]">
                <thead>
                    <tr>
                        <th className=" pl-[20px] pt-[14px] pb-[15px] ">
                            <div className="flex items-center">
                                Listings
                                <img src="assets/icons/arrow.svg" className="h-[5px] w-[10px] ml-[8px]" />
                            </div>
                        </th>
                        <th className="pl-[209px] pt-[14px] pb-[15px]">
                            <div className="flex items-center">
                                Contacts
                                <img src="assets/icons/arrow.svg" className="h-[5px] w-[10px] ml-[8px]" />
                            </div>

                        </th>
                        <th className="pl-[209px] pt-[14px] pb-[15px]">
                            <div className="flex items-center">
                                Listing Views
                                <img src="assets/icons/arrow.svg" className="h-[5px] w-[10px] ml-[2px]" />
                            </div>
                        </th>
                        <th className="pl-[209px] pr-[134px] pt-[14px] pb-[15px]">
                            <div className="flex items-center">
                                Searches
                                <img src="assets/icons/arrow.svg" className="h-[5px] w-[10px] ml-[8px]" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-[68px] w-[1096px]">

                        <td className=" pl-[20px] pt-[15px] pb-[17px] ">  <img src="assets/images/table-img.jpg" alt="table-image" className="w-[52.95px] h-[36px]" /> </td>
                        <td className="py-[25px] pl-[221px]"> 33 </td>
                        <td className="py-[25px] pl-[268px]"> 40000 </td>
                        <td className="py-[25px] pl-[255px] pr-[175px]"> 1009 </td>
                    </tr>
                    <tr className="h-[68px]">
                        <td className=" pl-[20px] pt-[15px] pb-[17px] "> <img src="assets/images/table-img.jpg" alt="table-image" className="w-[52.95px] h-[36px]" /> </td>
                        <td className="py-[25px] pl-[221px]"> 33 </td>
                        <td className="py-[25px] pl-[268px]"> 40000 </td>
                        <td className="py-[25px] pl-[255px] pr-[175px]"> 1009 </td>
                    </tr>
                    <tr className="h-[76px]">
                        <td className=" pl-[20px] pt-[15px] pb-[17px] "> <img src="assets/images/table-img.jpg" alt="table-image" className="w-[52.95px] h-[36px]" /> </td>
                        <td className="py-[25px] pl-[221px]"> 33 </td>
                        <td className="py-[25px] pl-[268px]"> 40000 </td>
                        <td className="py-[25px] pl-[255px] pr-[175px]"> 1009 </td>
                    </tr>
                    <tr className="h-[68px]">
                        <td className=" pl-[20px] pt-[15px] pb-[17px] "> <img src="assets/images/table-img.jpg" alt="table-image" className="w-[52.95px] h-[36px]" /> </td>
                        <td className="py-[25px] pl-[221px]"> 33 </td>
                        <td className="py-[25px] pl-[268px] "> 40000 </td>
                        <td className="py-[25px] pl-[255px] pr-[175px]"> 1009 </td>
                    </tr>
                    <tr className="h-[6px]">
                        <td className=" pl-[20px] pt-[15px] pb-[17px] "> <img src="assets/images/table-img.jpg" alt="table-image" className="w-[52.95px] h-[36px]" /> </td>
                        <td className="py-[25px] pl-[221px]"> 33 </td>
                        <td className="py-[25px] pl-[268px] "> 40000 </td>
                        <td className="py-[25px] pl-[255px] pr-[175px]"> 1009 </td>
                    </tr>
                </tbody>
            </table>
            <div className=" h-[55px] w-full  lg:flex sm:hidden justify-end">
                <div className=" h-11 w-fit flex mr-[45px]  ">
                    <button className="my-[17px]">
                        <img src="assets/icons/icon-left.svg" />
                    </button>
                    <div className=" text-[#818183] text-[14px] my-[22px]">
                        Rows Per Page -5 (1-5 of 45)
                    </div>
                    <button className="my-[17px]">
                        <img src="assets/icons/icon-next.svg" className="h-[27.41px] w-[28.1px]" />
                    </button>
                </div>
            </div>
        </div>
    )
}
