'use client';

import { useCallback, useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    if (currentUser.role === "ADMIN" || currentUser.role === "STUDENT") {
      rentModal.onOpen();
    } else {
      toast.error("You need more administrative privileges");
    }
  }, [loginModal, rentModal, currentUser]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClickOutside = (e: any) => {
    if (!e.target.closest(".menu")) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {currentUser && currentUser.role !== 'USER' && (
          <div 
            onClick={onRent}
            className="
              hidden
              md:block
              text-sm 
              font-semibold 
              py-3 
              px-4 
              rounded-full 
              hover:bg-neutral-100 
              transition 
              cursor-pointer
            "
          >
             Add Talent Listing
          </div>
        )}
        <div 
        onClick={toggleOpen}
        className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            menu
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
            min-w-[200px]
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                 <MenuItem label="My Booked Pros" onClick={()=> router.push("/gigs")} closeMenu={closeMenu} />
                 <MenuItem label="My favorites" onClick={()=> router.push('/favorites')} closeMenu={closeMenu} />
                 <MenuItem label="My Bookings" onClick={()=> router.push("/reservations")} closeMenu={closeMenu} />
                 {currentUser.role !== 'USER' && (
                  <>
                 <MenuItem label="My Lisitngs" onClick={() => router.push('/properties')}  closeMenu={closeMenu} />
                   <MenuItem label="Add Talent Listing" onClick={rentModal.onOpen} closeMenu={closeMenu} />
                   </>
                 )}
                 <hr className='h-px bg-purple-500 border-0'/>
                 <MenuItem label="Logout" onClick={()=> signOut({ callbackUrl: '/' })} closeMenu={closeMenu} />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen} closeMenu={closeMenu}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen} closeMenu={closeMenu}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
   );
}
 
export default UserMenu;
