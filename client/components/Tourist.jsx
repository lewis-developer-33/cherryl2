import React from 'react'

const Tourist = () => {
    const spots = [
        {
            image:"https://plus.unsplash.com/premium_photo-1711390047540-a76d80a9620e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
            title:"Mermaid",
            desc:"WHat"
        }
    ]
  return (
    <>
        <header className='px-4 py-4 shadow-md rounded-b-md flex items-center justify-between font-semibold text-lg'>
            <div>
                Sagana State TBS
            </div>
            <div className='flex items-center gap-4'>
                <a href="/">Recommendations</a>
                <a href="/">Listings</a>
                <a href="/">Profile</a>
            </div>
            <div className='flex items-center justify-center p-2 rounded-full h-10 w-10 bg-slate-900 text-white'>
                L
            </div>
        </header>
        <section className='mx-auto max-w-[4xl] p-8 grid grid-cols-4'>
            {
                spots.map((d,i) => {
                    const {image,title,desc} = d
                    return (
                        <Card 
                        image={image}
                        title={title}
                        desc={desc}
                        key={i}/>
                    )
                })
            }
        </section>
    </>
  )
}

const Card = ({title,image,desc}) => {
    return(
        <div className={`border-2 rounded-sm shadow-sm w-[300px] h-[400px] relative bg-cover bg-[url('${image}')]`}>
            <div className='w-full h-full bg-slate-900/60 text-white font-semibold text-lg flex flex-col justify-end p-4'>
                <h2 className='text-xl'>
                    {title}
                </h2>
                <p className='text-sm'>
                    {desc}...
                </p>
            </div>
        </div>
    )
}

export default Tourist