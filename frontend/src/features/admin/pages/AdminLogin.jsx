import React from 'react'

const AdminLogin = () => {
  return (
    
    <div
    className="
    relative
    min-h-screen
    overflow-hidden
    flex
    flex-col
    items-center
    justify-center
    gap-6
    px-4
    py-8
    bg-[linear-gradient(235deg,rgba(0,221,255,0.381),rgba(255,255,255),rgba(0,217,255,0.221))]
    "
    >

      <div
      className='
      relative
      w-full
      max-w-sm
      '
      >

      {/* circle1 */}

      <div className="
      circle1
      absolute
      -top-12
      -left-10
      sm:-left-14
      h-28
      w-28
      sm:h-32
      sm:w-32
      rounded-full
      bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
      "></div>

        {/* circle2 */}
        <div className="
        circle2
        absolute
        -bottom-12
        -right-10
        sm:-right-14
        h-28
        w-28
        sm:h-32
        sm:w-32
        rounded-full
        bg-[linear-gradient(135deg,#071A4A,#123B87,#174EA6,#0B1F55)]
        "></div>


        {/* Form */}
        <form 
        action=""
        className="
        relative
        z-10
        w-full
        min-h-80
        flex
        flex-col
        items-center
        justify-center
        gap-7
        px-6
        py-8
        sm:px-8
        rounded-lg
        bg-[rgba(0,114,244,0.05)]
        backdrop-blur-xl
        select-none
        border
        border-white/20
        "
        >

        </form>

      </div>

    </div>
  )
}

export default AdminLogin