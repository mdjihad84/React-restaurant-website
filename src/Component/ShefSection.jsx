const Shef = () => {
    return (
        <div>
            <div>
                <p className="text-yellow-400 text-center mt-10">---Should Try---</p>
                <hr className="w-[424px] h-[8px] mx-auto mt-8" />
                <h2 className="text-center text-4xl text-black">CHEF RECOMMENDS</h2>
                <hr className="w-[424px] h-[8px] mx-auto mt-10 mb-8" />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className="card w-full max-w-[350px] h-[541px] bg-[#F3F3F3]">
                    <div>
                        <img src="/public/Images/Slide1.jpg" className="w-full h-[300px] object-cover" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black font-semibold text-2xl font-enter">Caeser Salad</h2>
                        <p className="text-black font-normal text-base font-enter">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-[#E8E8E8] border-none border-b-2 border-[#BB8506] text-xl text-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full max-w-[350px] h-[541px] bg-[#F3F3F3]">
                    <div>
                        <img src="/public/Images/Slide1.jpg" className="w-full h-[300px] object-cover" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black font-semibold text-2xl font-enter">Caeser Salad</h2>
                        <p className="text-black font-normal text-base font-enter">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-[#1F2937] border-none border-b-2 border-[#BB8506] text-[#BB8506] text-xl hover:bg-gray-300">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full max-w-[350px] h-[541px] bg-[#F3F3F3]">
                    <div>
                        <img src="/public/Images/Slide1.jpg" className="w-full h-[300px] object-cover" alt="" />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black font-semibold text-2xl font-enter">Caeser Salad</h2>
                        <p className="text-black font-normal text-base font-enter">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn bg-[#E8E8E8] border-b-2 text-xl border-none border-[#BB8506] text-[#BB8506]">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shef;
