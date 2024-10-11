
const Form = () => {
    return (
        <div>
            <div className="mx-auto mt-20 relative mb-20">
                <img src="/public/Images/LatestNews.jpg" className="w-100" alt="Product 4" />
                <div className="">
                    <div className="absolute mx-auto ml-[32%] mt-[-65%]">
                        <p className="text-yellow-400 text-center mt-10">---Should Try---</p>
                        <hr className="w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]"/>
                        <h2 className="text-center text-4xl text-black">CHEF RECOMMENDS</h2>
                        <hr className="w-[424px] h-[4px] mx-auto mt-10 mb-8 bg-[#E8E8E8]"/>
                    </div>
                    <div className="w-[1096px] h-[300px] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className="w-[648px] h-[400px]">
                            <img src="/public/Images/LatestNews.jpg" alt="" />
                        </div>
                        <div className="w-[740px] ml-6">
                            <h3 className="text-4xl font-normal text-white">Bistro Boss</h3>
                            <p className="text-white fond-normal text-2xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                                libero accusamus laborum deserunt ratione dolor officiis praesentium!
                                Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
                                quibusdam nemo.
                            </p>
                            <button className="btn mt-4 border-none bg-transparent text-xl text-white border border-2 border-solid">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;