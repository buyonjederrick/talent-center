'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
        justify-center 
        items-center 
        overflow-x-hidden 
        fixed 
        inset-0 
        top-0 
        left-0 
        right-0 
        w-full 
        h-screen 
        max-h-full
        z-50 
        outline-none 
        focus:outline-none
        bg-neutral-800/70
      "
      >
        <div className="
        w-full
        h-screen
        flex 
        flex-col 
        items-center 
        justify-center
        p-4
        ">
          <div className="
            w-full
            sm:w-3/4
            md:w-2/3
            lg:w-1/2
            xl:w-2/5
            2xl:w-1/3
            my-6
            max-w-2xl 
            max-h-full
            mx-auto 
            relative
          ">
            {/*content*/}
            <div className={`
              translate
              duration-300
              ${showModal ? 'translate-y-0' : 'translate-y-full'}
              ${showModal ? 'opacity-100' : 'opacity-0'}
            `}>
              <div className="
                translate
                border-0 
                rounded-lg 
                shadow-lg 
                relative 
                flex 
                flex-col 
                w-full
                bg-white 
                outline-none 
                focus:outline-none
              ">
                {/*header*/}
                <div className="
                  flex 
                  items-start 
                  p-6
                  rounded-t
                  justify-between
                  relative
                  border-b-[1px]
                ">
                  <div className="text-lg font-semibold">
                    {title}
                  </div>
                  <button
                    className="
                      p-1
                      border-0 
                      hover:opacity-70
                      transition
                    "
                    onClick={handleClose}
                  >
                    <IoMdClose size={18} />
                  </button>
                </div>
                {/*body*/}
                <div
                  className="relative p-6 flex-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400"
                  style={{ maxHeight: '60vh' }}
                >
                  {body}
                </div>
                {/*footer*/}
                <div className="flex flex-col gap-2 p-6">
                  <div
                    className="
                      flex 
                      flex-row 
                      items-center 
                      gap-4 
                      w-full
                    "
                  >
                    {secondaryAction && secondaryActionLabel && (
                      <Button
                        disabled={disabled}
                        label={secondaryActionLabel}
                        onClick={handleSecondaryAction}
                        outline
                      />
                    )}
                    <Button
                      disabled={disabled}
                      label={actionLabel}
                      onClick={handleSubmit}
                    />
                  </div>
                  {footer}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
