import Image from 'next/image';
import React from 'react';

export default function BlogCard() {
    return (
        <div className="container mx-auto px-4">
            {/* Blog Card 1 */}
            <div className="w-[872px] h-[830px] ml-[300px] md:flex-row border rounded-lg shadow-lg overflow-hidden mb-6">
                <Image
                    src="/blogpic1.png"
                    alt="Food Blog"
                    width={871}
                    height={520}
                    
                />
                
                <div>
                    <h2 className=" w-[504px] h-[32px] text-xl font-bold text-orange-500 mb-8 mt-8">10 Reasons To Do A Digital Detox Challenge</h2>
                    <p className="w-[647.2px] h-[96px] text-gray-700 mb-4 font-normal ml-1 ">
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                    </p>
                    <a href="#" className='w-[172px] h-[52px] mt-14 flex border-[1px] ml-1 border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]'>Read More</a>
                </div>
            </div>

            {/* Blog Card 2 */}
            <div className="w-[872px] h-[830px] ml-[300px] md:flex-row border rounded-lg shadow-lg overflow-hidden mb-6">
                <Image
                    src="/blogpic2.png"
                    alt="Food Blog"
                    width={871}
                    height={520}
                    
                />
                
                <div>
                    <h2 className=" w-[504px] h-[32px] text-xl font-bold text-orange-500 mb-8 mt-8">10 Reasons To Do A Digital Detox Challenge</h2>
                    <p className="w-[647.2px] h-[96px] text-gray-700 mb-4 font-normal ml-1 ">
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                    </p>
                    <a href="#" className='w-[172px] h-[52px] mt-14 flex border-[1px] ml-1 border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]'>Read More</a>
                </div>
            </div>

            {/* Blog Card 3 */}
            <div className="w-[872px] h-[830px] ml-[300px] md:flex-row border rounded-lg shadow-lg overflow-hidden mb-6">
                <Image
                    src="/blogpic3.png"
                    alt="Food Blog"
                    width={871}
                    height={520}
                    
                />
                
                <div>
                    <h2 className=" w-[504px] h-[32px] text-xl font-bold text-orange-500 mb-8 mt-8">10 Reasons To Do A Digital Detox Challenge</h2>
                    <p className="w-[647.2px] h-[96px] text-gray-700 mb-4 font-normal ml-1 ">
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                    </p>
                    <a href="#" className='w-[172px] h-[52px] mt-14 flex border-[1px] ml-1 border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]'>Read More</a>
                </div>
            </div>

            {/* Blog Card 4 */}
            <div className="w-[872px] h-[830px] ml-[300px] md:flex-row border rounded-lg shadow-lg overflow-hidden mb-6">
                <Image
                    src="/blogpic4.png"
                    alt="Food Blog"
                    width={871}
                    height={520}
                    
                />
                
                <div>
                    <h2 className=" w-[504px] h-[32px] text-xl font-bold text-orange-500 mb-8 mt-8">10 Reasons To Do A Digital Detox Challenge</h2>
                    <p className="w-[647.2px] h-[96px] text-gray-700 mb-4 font-normal ml-1 ">
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                    </p>
                    <a href="#" className='w-[172px] h-[52px] mt-14 flex border-[1px] ml-1 border-[#FF9F0D] p-2 rounded-md items-center text-[14px] md:text-[16px] font-normal leading-[24px] text-[#FF9F0D]'>Read More</a>
                </div>
            </div>

            {/* Pagination */}
            <div className="pagination flex justify-center mt-8 mb-8">
            <Image src="/aero.png" alt='' width={50} height={50} className='border border-gray-300'/>

                <a className="w-[50px] h-[50px] text-center py-3 border border-gray-300 text-orange-500 mx-1">1</a>
                <a className="w-[50px] h-[50px] text-center py-3 border border-gray-300 text-white mx-1 bg-orange-500 ">2</a>
                <a className="w-[50px] h-[50px] text-center py-3 border border-gray-300 text-orange-500 mx-1">3</a>
                <Image src="/aero1.png" alt='' width={50} height={50} className='border border-gray-300'/>
            </div>
        </div>
    );
}




