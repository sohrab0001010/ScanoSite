import React, { useRef, useState } from 'react'

const AdminLogin = () => {

  const [loading,setLoading] = useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const passwordRef = useRef(null);
  const usernameRef = useRef(null);


  const focusPassword = e => {
    e.preventDefault()
    passwordRef.current.focus()
  }

  const focusUsername = () => {
    usernameRef.current.focus()
  }


  const handleLogin = async e => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost/scano/backend/api/login.php",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      )

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return
      }

      console.log("Logged in:", data.user);

    } 

    catch (error) {
      setError("ارتباط با سرور برقرار نشد");
      console.error(error)

    } finally {
      setLoading(false)
    }

  }




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
        onSubmit={handleLogin}
        dir='rtl' 
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
          <input 
          value={username}
          type="text" 
          className="
          w-full
          max-w-64
           bg-white
          text-[1.1rem]
           text-black
          outline-none
          py-2
          px-4
          border
           border-gray-300
          rounded-lg
          focus:border-[#0C2965]
          transition-colors
          duration-200
           placeholder:text-gray-400
          "
          placeholder='نام کاربری/شماره موبایل'
          autoFocus
          onChange={e => setUsername(e.target.value)}
          onKeyDown={e => {
            if (e.keyCode === 13 || e.keyCode === 40)
              focusPassword(e);
          }}
          />

          <input 
          ref={passwordRef}
          value={password}
          type="password" 
          className="
          w-full
          max-w-64
           bg-white
          text-[1.1rem]
           text-black
          outline-none
          py-2
          px-4
          border
           border-gray-300
          rounded-lg
          focus:border-[#0C2965]
          transition-colors
          duration-200
          "
          placeholder='رمز عبور را وارد کنید'
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => {
            e.keyCode === 38
            ?focusUsername()
            :""
          }}
          />

          <input 
          type="submit" 
          disabled={loading}
          value={loading ? "در حال بررسی..." : "ادامه و ورود"}
          className='
          w-full
          max-w-64
          py-2
          text-[1.1rem]
         text-white
          bg-[linear-gradient(135deg,#000000,#232526,#414345,#000000)]
          cursor-pointer
          rounded-lg
          transition-all
          duration-200
          hover:scale-[1.02]
          active:scale-[0.98]
          '
          />

        </form>

      </div>

    </div>
  )
}

export default AdminLogin