import SectionHeading from "./Shared/SectionHeading";


export default function FeaturedSection() {

  return (
    <section className= "h-[800px] md:h-[570px] my-24 bg-[url(https://i.ibb.co/SsCsNzD/featured.jpg)] bg-cover bg-fixed">
      <div className="bg-black/70 h-full py-9">
        <SectionHeading heading={'FROM OUR MENU'} subHeading={'Check it out'} />

        <div className="flex flex-col md:flex-row gap-7 justify-center items-center w-[70%] mx-auto">
          <img src="https://i.ibb.co/SsCsNzD/featured.jpg" className=" w-[250px] md:w-[370px]" />
          <div className="text-white/80">
            <span>March 20, 2023</span>
            <h2>Where can i get some?</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in enim minima ipsam possimus, odio quis tempora ea, maiores blanditiis facilis aut nobis sint numquam curepudiandae iste vero quos corrupti dolorum consequatur, at alias voluptas explicabo.</p>

            <button className="p-2 border-b-2 rounded-md"> Read More </button>
          </div>
        </div>
      </div>
    </section>
  )
}
