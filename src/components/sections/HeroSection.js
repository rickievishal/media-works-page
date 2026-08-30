import Button from '../ui/Button';
import video from "../../assets/videos/hero.mp4"
import hero_img from "../../assets/images/hero-bg.png"
import crazy from "../../assets/images/crazy.png"
function HeroSection() {
  return (
    <section
      className={`relative min-h-[calc(70vh-40px)] md:min-h-[calc(100vh-40px)] py-4 `}
      aria-labelledby="hero-title"
    >
      <div className="z-0 absolute bottom-0 left-0 w-full h-[30vh] md:h-[40vh] bg-black overflow-hidden">
          <img className='w-full h-full object-cover ' src={hero_img} alt="" />
      </div>
     <div className='z-10 absolute w-full h-full flex flex-col justify-start md:justify-center items-center pt-8'>
      <div className='flex  flex-col justify-center items-center pb-4'>
        <h1 className="text-4xl font-bold tracking-tighter flex items-center">We Build <span><img className="max-w-[100px]" src={crazy} alt="" /></span> websites!</h1>
        <p className="py-4">
          The one stop for making your business goo prrrrr...
        </p>
        <Button className="min-w-30 gap-4 justify-self-start lg:justify-self-end" >Build Now <span aria-hidden="true">→</span></Button>
      </div>
      <div className="w-[calc(80vw)] md:max-w-[800px] border-black border-2 rounded-2xl overflow-hidden shadow-[7px_08px_0px_rgba(0,0,0,0.8)]">
          <video className="w-full h-full object-cover " muted autoPlay loop src={video}/>
      </div>
     </div>
    </section>
  );
}

export default HeroSection;
