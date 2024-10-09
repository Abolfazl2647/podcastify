"use client";

import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Modal, { IModalProps } from "./modal";

interface IModalWrapperProps extends IModalProps {
  selector?: string;
}

export default function ModalWrapper({
  selector = "main-portals",
  children,
  isOpen,
}: IModalWrapperProps) {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.getElementById(selector);
  }, [selector]);

  return (
    ref.current &&
    typeof window !== "undefined" &&
    createPortal(
      <Modal isOpen={isOpen}>{children}</Modal>,
      ref.current as HTMLDivElement
    )
  );
}
