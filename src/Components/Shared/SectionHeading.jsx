

export default function SectionHeading({ heading, subHeading}) {

  return (
    <div className="my-10 max-w-sm mx-auto">
        <p className='text-yellow-600 text-center italic'>---{subHeading}---</p>
        <h1 className='text-3xl font-semibold text-center my-7 border-y-2 py-3 text-gray-600'> {heading} </h1>
    </div>
  )
}
