const Form = () => {
    return (
        <div>
            <div className="mx-auto mt-20 relative mb-20">
                <img src="/public/Images/LatestNews.jpg" className="w-full" alt="Latest News" />
                <div className="">
                    <div className="absolute mx-auto ml-[36%] mt-[-65%]">
                        <p className="text-yellow-400 text-center mt-10">---Should Try---</p>
                        <hr className="w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]" />
                        <h2 className="text-center text-4xl text-black">CHEF RECOMMENDS</h2>
                        <hr className="w-[424px] h-[4px] mx-auto mt-10 mb-8 bg-[#E8E8E8]" />
                    </div>
                    <div className="w-full max-w-[1096px] h-[300px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-center">
                        <div className="w-full md:w-[648px] h-[300px]">
                            <img src="/public/Images/LatestNews.jpg" alt="Bistro Boss" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-[740px] mt-4 md:mt-0 md:ml-6">
                            <h3 className="text-[45px] md:text-4xl font-normal text-white">Bistro Boss</h3>
                            <p className="text-white font-normal text-base md:text-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                                libero accusamus laborum deserunt ratione dolor officiis praesentium!
                                Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
                                quibusdam nemo.
                            </p>
                            <button className="btn mt-4 border-none bg-transparent text-base md:text-xl text-white border border-2 border-solid">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
