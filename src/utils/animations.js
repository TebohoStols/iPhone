//Since we always repeat using gsap.to... lets create a reusable animation template

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

//in here so that we can use it over and over again
export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps,
        }
    })
}

export const animateWithGsapTimeLine = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to( rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut'
    })
    timeline.to( firstTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    }, '<')
    timeline.to( secondTarget, {
        ...animationProps,
        ease: 'power2.inOut'
    }, '<')
}