import { useState } from "react";

const CopyEmailButton = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = "gskotipalli2005@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }

  return (
    <button className="relative px-1 py-4 text-sm text-center
    rounded-full font-extralight text-white bg-neutral-600 w-[12rem] cursor-pointer overflow-hidden"
    onClick={handleCopyEmail}
    >   
        
        <p className="flex items-center justify-center gap-2">
            {isCopied?(
                <>
                    <img className="w-5" src="assets/copy-done.svg" alt="copied icon"/>
                    Email Copied
                </>
            ):(
                <>
                    <img className="w-5" src="assets/copy.svg" alt="copy icon"/>
                    Copy Email
                </>
            )
            } 
        </p>
    </button>
  )
}

export default CopyEmailButton