import React from 'react';

function Service() {
  return (
    <div>
     <div className="flex flex-row justify-start gap-[20px] pb-[30px] w-[40%]   pl-[30px] max-[1080px]:w-full max-[1080px]:pl-0  max-[1080px]:gap-[20px]">
   
        <div className="h2">Our service</div>
      </div>
    
      <div className="h-full w-[60%] flex flex-col items-start justify-between pl-[30px] max-[1080px]:w-full max-[1080px]:pl-0  max-[1080px]:gap-[40px]">
          <div className="h1">Design and Engineering
</div>
          <div className="w-full h-[calc(100%-174px)] overflow-y-clip max-[1080px]:h-max">
            <div className="w-full h-full text-ellipsis text-wrap txt max-[1080px]:h-max">
            Tech Meeco Infra Pvt. Ltd. offers top-notch design and engineering services, 
            ensuring that each project meets the specific needs of our clients.
             Our team leverages cutting-edge technology to deliver innovative solutions.




            </div>
          </div>
          </div>
           
      <div className="h-full w-[60%] flex flex-col items-start justify-between pl-[30px] max-[1080px]:w-full max-[1080px]:pl-0  max-[1080px]:gap-[40px]">
          <div className="h1">Fabrication
</div>
          <div className="w-full h-[calc(100%-174px)] overflow-y-clip max-[1080px]:h-max">
            <div className="w-full h-full text-ellipsis text-wrap txt max-[1080px]:h-max">
            With four state-of-the-art fabrication shops, we provide high-quality manufacturing services, 
            ensuring precision and durability in every structure we produce.

            </div>
          </div>
          </div>
           
      <div className="h-full w-[60%] flex flex-col items-start justify-between pl-[30px] max-[1080px]:w-full max-[1080px]:pl-0  max-[1080px]:gap-[40px]">
          <div className="h1">Installation
</div>
          <div className="w-full h-[calc(100%-174px)] overflow-y-clip max-[1080px]:h-max">
            <div className="w-full h-full text-ellipsis text-wrap txt max-[1080px]:h-max">
            Our experienced team handles the complete installation process, 
            ensuring that all structures are erected safely and efficiently, 
            adhering to the highest standards of quality and safety.

            </div>
          </div>
          </div>
    </div>
  
  );
}

export default Service;
