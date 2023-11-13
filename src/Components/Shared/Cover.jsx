import { Parallax } from 'react-parallax';

export default function Cover({img, title, subTitle}) {

  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={img} bgImageAlt="the cat" strength={200}>

    <section className='h-[500px] flex justify-center items-center'>
    <div className="hero  bg-black/50 w-[60%] h-[50%]" >
  
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> {title}</h1>
      <p className="mb-5"> {subTitle} </p>
    </div>
  </div>
</div>
    </section>

</Parallax>
  )
}
