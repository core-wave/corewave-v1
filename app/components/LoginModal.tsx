import React, { useState, useEffect } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Dialog, DialogTrigger, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import LoginForm from './LoginForm';

const LoginModal = () => {
  const [windowSize, setWindowSize] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    // Only add the event listener if window is defined
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Trigger resize event initially to set the window size
      handleResize();

      // Cleanup the event listener
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tailwind's default breakpoints (you can adjust these if you have custom breakpoints)
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  const [open, setOpen] = React.useState(false);

  return (
      windowSize < breakpoints.sm ? (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">Log in</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Log in</DrawerTitle>
              <DrawerDescription>
                Vul je gegevens in om in te loggen.
              </DrawerDescription>
            </DrawerHeader>
            <LoginForm />
            <DrawerFooter className="pt-2">
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Log in</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Log in</DialogTitle>
              <DialogDescription>
                Vul je gegevens in om in te loggen.
              </DialogDescription>
            </DialogHeader>
            <LoginForm />
          </DialogContent>
        </Dialog>
      )
  );
};

export default LoginModal;
