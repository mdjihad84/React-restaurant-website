const Hero = () => {
    return (
        <div className="block">
            <div>
                <img 
                    className="w-full h-auto sm:h-[300px] md:mt-[80px] md:h-[500px] lg:h-[700px] xl:h-[804px]"
                    src="/Images/Hero.jpg" alt="Hero-img"/>
            </div>
            <div>
                <img className="mx-auto mt-2" src="/Images/Food.jpg" alt="Food"/>
            </div>
        </div>
    );
};

export default Hero;

