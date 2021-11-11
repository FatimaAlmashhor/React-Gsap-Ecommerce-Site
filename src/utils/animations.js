import { gsap, Power3 } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

gsap.registerPlugin(CSSRulePlugin);

export const menuHover = (elem1) => {
    // console.log('I am here ');
    // const titleRule = CSSRulePlugin.getRule(
    //     `${elem1}`
    // );
    // gsap.fromTo(elem1, {
    //     x: -10,
    //     opacity: 0
    // }, {
    //     opacity: 1
    // })
}
export const menuFedeIn = (elem1, elem2) => {
    const tl = gsap.timeline();
    tl.to([elem1, elem2], {
        height: '100%',
        duration: 0.8,
        ease: "power4.inOut",
        stagger: { // the time between the to element
            amount: 0.2,
        },
    })
        .to('.menu-items', {
            duration: 0.5,
            opacity: 1,
            ease: 'power4.in'
        })

}

export const menuFedeOut = (elem1, elem2) => {
    const tl = gsap.timeline();
    tl.to('.menu-items', {
        duration: 0.3,
        opacity: 0,
        ease: 'power4.in'
    })
        .to([elem1, elem2], {
            height: '0%',
            duration: 0.8,
            ease: "power4.out",
            stagger: { // the time between the to element
                amount: 0.2,
            },
        })

}

export const textIntro = (elem1, elem2) => {
    gsap.from([elem1, elem2], {
        yPercent: 70,
        opacity: 0,
        stagger: 0.4,
        duration: 1,
        ease: "power4.out",
    });
};

export const imageFedeIn = (cover, image) => {
    gsap.from(cover, {
        height: 0,
        duration: 1.4,
        stagger: 0.4,
        delay: 0.4,
        ease: 'power4.inOut'
    });
    gsap.from(image,
        {
            scale: 1.2,
            duration: 2,
            delay: 1,
            ease: 'back'
        })
}