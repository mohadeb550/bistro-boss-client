

export default function MenuItem({menu}) {

  const { name , image, price ,recipe } = menu || {};

  return (
    <section className="flex gap-3">
       
        <img src={image} className="w-28 h-28 object-cover " style={{borderRadius: '0 200px 200px 200px'}} />
       
       <div>
          <div className="flex justify-between" >
            <h2 className="text-xl uppercase font-thin mb-2"> {name}--------------- </h2>
            <p className="text-yellow-600" >${price} </p>
          </div>
          <p>{recipe}</p>
       </div>
    </section>
  )
}
