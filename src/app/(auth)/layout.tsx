import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AuthLayout{
    children: React.ReactNode
}

const AuthLayout=({children}:AuthLayout)=>{
return <div>
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">  
                 <Image src="/logo.svg" alt="logo" width={100}  height={50}/>
                 <div className="flex items-center gap-2">
                    <Button variant="secondary">
                        Sign Up
                    </Button>
                 </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">

        </div>
      </div>
    </main>

    {children}
</div>
}

export default AuthLayout;