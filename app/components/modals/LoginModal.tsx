'use client';

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Button from "../Button";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {
    setIsLoading(true);

    signIn('credentials', { 
      ...data, 
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('You have Successfully Logged in');
        router.refresh();
        loginModal.onClose();
      }
      
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading 
        title="Welcome back to Esom School"
        subtitle="Login to you account"
      />
      
      <Input 
        id="email"
        label="Email Address"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
        <hr className='h-px bg-purple-500 border-0'/>
        <Button 
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
        />
       {/* <Button 
        outline
        label="Continue with Facebook"
        icon={BsFacebook}
        onClick={() => {}}
        />
         <Button 
        outline
        label="Continue with Twitter"
        icon={AiFillTwitterCircle}
        onClick={() => {}}
        />*/}
        <Button 
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
        />
        <div
        className="text-neutral-500 text-center mt-4 font-light"
        >
          <div className="justify-center flex flex-row items-center gap-2">
            <div>
            First time using Esom Talent?
            </div>
            <div 
            onClick={onToggle}
            className="cursor-pointer hover:underline text-purple-500">
            Create an account
            </div>
          </div>
        </div>
    </div>
  )
  
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login to Esom Talent"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;