import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative   w-full">
                <img src={img1} className="w-full  rounded-xl" />
                <div className="absolute rounded-xl h-full bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]  flex items-center  w-1/3 left-0  px-5">

                    <div className='space-y-7'>
                        <h2 className='text-6xl font-bold text-white'>Affordable <br /> price  for car servicing </h2>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas non ut iste doloribus?</p>

                        <div className=''>
                            <button className="btn btn-error mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <button> <a href="#slide4" className="btn hover:text-white  border-none hover:bg-red-500  btn-circle mr-5">❮</a></button>
                    <button><a href="#slide2" className="btn hover:text-white  border-none hover:bg-red-500  btn-circle">❯</a></button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]  flex items-center  w-1/3 left-0  px-5">

                    <div className='space-y-7'>
                        <h2 className='text-6xl font-bold text-white'>Affordable <br /> price  for car servicing </h2>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas non ut iste doloribus?</p>

                        <div className=''>
                            <button className="btn btn-error mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <button> <a href="#slide1" className="btn hover:text-white  border-none hover:bg-red-500  btn-circle mr-5">❮</a></button>
                    <button><a href="#slide3" className="btn hover:text-white  border-none hover:bg-red-500  btn-circle">❯</a></button>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]  flex items-center  w-1/3 left-0  px-5">

                    <div className='space-y-7'>
                        <h2 className='text-6xl font-bold text-white'>Affordable <br /> price  for car servicing </h2>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas non ut iste doloribus?</p>

                        <div className=''>
                            <button className="btn btn-error mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <button> <a href="#slide2" className="btn hover:text-white  border-none hover:bg-red-500  btn-circle mr-5">❮</a></button>
                    <button><a href="#slide4" className="btn hover:text-white  border-none hover:bg-red-500  btn-circle">❯</a></button>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]  flex items-center  w-1/3 left-0  px-5">

                    <div className='space-y-7'>
                        <h2 className='text-6xl font-bold text-white'>Affordable <br /> price  for car servicing </h2>
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptas non ut iste doloribus?</p>

                        <div className=''>
                            <button className="btn btn-error mr-5 text-white">Discover More</button>
                            <button className="btn btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <button> <a href="#slide3" className="btn hover:text-white  border-none hover:bg-red-500  btn-circle mr-5">❮</a></button>
                    <button><a href="#slide1" className="btn hover:text-white  border-none hover:bg-red-500  btn-circle">❯</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;