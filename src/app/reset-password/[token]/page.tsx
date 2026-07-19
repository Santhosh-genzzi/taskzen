"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { resetPassword } from "@/api/authApi";


export default function ResetPasswordPage() {


  const router = useRouter();

  const { token } = useParams() as {
    token:string;
  };


  const [newPassword,setNewPassword] = useState("");

  const [confirmPassword,setConfirmPassword] = useState("");

  const [loading,setLoading] = useState(false);



  const handleReset = async()=>{


    if(!newPassword || !confirmPassword){

      alert("Please fill all fields");

      return;

    }



    if(newPassword !== confirmPassword){

      alert("Passwords do not match");

      return;

    }
    try{
      setLoading(true);
      const res = await resetPassword(
        token,
        {
          newPassword,
          confirmPassword
        }

      );
      alert(res.data.message);
      router.push("/login");
    }catch(error:any){
      alert(

        error.response?.data?.message ||
        "Password reset failed"

      );
    }finally{
      setLoading(false);
    }
  };
  return (

    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
    ">

      <div className="
        w-full
        max-w-md
        bg-white
        rounded-2xl
        shadow-xl
        p-8
      ">
        <h1 className="
          text-3xl
          font-bold
          text-center
          text-black
        ">
          Reset Password
        </h1>
        <p className="
          text-center
          text-gray-500
          mt-2
          mb-8
        ">
          Create your new password
        </p>
        <div className="space-y-5">
          <input
            type="password"

            placeholder="New Password"

            value={newPassword}

            onChange={(e)=>
              setNewPassword(e.target.value)
            }

            className="
              w-full
              border
              rounded-lg
              p-3
              text-black
            "
          />
          <input

            type="password"

            placeholder="Confirm Password"

            value={confirmPassword}

            onChange={(e)=>
              setConfirmPassword(e.target.value)
            }

            className="
              w-full
              border
              rounded-lg
              p-3
              text-black
            "
          />
          <button

          onClick={handleReset}

            disabled={loading}

            className="
              w-full
              bg-green-600
              text-white
              py-3
              rounded-lg
              font-semibold
            "

          >

            {
              loading
              ? "Updating..."
              : "Reset Password"
            }


          </button>



        </div>


      </div>


    </main>

  );

}