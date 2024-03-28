import React,{useState} from 'react'

const LogIn = () => {
  const inputs = [
    {
      name:'email',
      type:'email',
      placeholder:"Email"
    },
    {
      name:'password',
      type:'password',
      placeholder:"Password"
    },
  ]

  const [user,setUser] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
        ...prevState,
        [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit} className='border-2 shadow-md rounded-sm p-5 grid gap font-semibold w-[400px]'>
        <h2 className='text-xl my-2'>TBS - Sign up</h2>
        <div className='grid gap-3 w-full'>
          {inputs.map((d,i) => {
            const {name,type,placeholder} = d
            return(
              <div key={i}>
                <p className='text-capitalize'>{placeholder}</p>
                <input
                onChange={handleChange}
                className='border-2 px-2 py-1 rounded-sm w-full'
                type={type}
                name={name}
                />
              </div>
            )
          })}
          
        </div>
        <div className='mt-4'>
          <button type='submit' className='border-2 px-4 py-2 rounded-md border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white '>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn