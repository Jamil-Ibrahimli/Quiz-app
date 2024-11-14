'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const MotionBox = motion(Box);

interface SlideAnimationProps {
    children: React.ReactNode;
    id: string | number;
}

export const SlideAnimation = ({ children, id }: SlideAnimationProps) => {
    const variants = {
        enter: {
            x: -1000,
            opacity: 0
        },
        center: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: 1000,
            opacity: 0
        }
    };

    return (
        <AnimatePresence mode="wait" initial={false}>
            <MotionBox
                key={id}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }}
                style={{ position: 'relative' }} 
            >
                {children}
            </MotionBox>
        </AnimatePresence>
    );
};