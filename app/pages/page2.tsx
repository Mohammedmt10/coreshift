import { LeftRotator } from "../components/leftRotator"
import { User } from "@/app/icons/user"
export const Page2 = () => {

return (
    <div className="pt-50 min-h-screen items-center">
        <LeftRotator />
        <div className=" w-fit mx-auto flex flex-col items-center gap-10 text-center">
            <div>
                <User />
            </div>
            <div className="font-bold text-7xl font-inter tracking-tighter">
                Core HR <br />
                solutions
            </div>
            <div className="text-neutral-400">
                Streamline HR processes in one centralized <br />
                platform enhancing team transparency
            </div>
            <button className="py-2 px-16 rounded-xl bg-[#865bf4] shadow-[inset_0px_-3px_5px_rgb(112, 52, 253,0.3)] shadow-[inset_0px_3px_3px_rgba(255,255,255,0.3)] text-white cursor-pointer">
                Learn more
            </button>
        </div>
    </div>
  )
}
