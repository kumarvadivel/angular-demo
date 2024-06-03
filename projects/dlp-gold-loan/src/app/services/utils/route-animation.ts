import { animate, group, keyframes, query as q, style, transition, trigger } from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

const sharedStyles = {
    position: 'fixed',
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
};

const moveFromBottomKeyframes = keyframes([
    style({ transform: 'translateY(100%)', offset: 0, 'z-index': '9999' }),
    style({ transform: 'translateY(0%)', offset: 1 })
]);

const moveToTopKeyframes = keyframes([
    style({ transform: 'translateY(0%)', offset: 0 }),
    style({ transform: 'translateY(-100%)', opacity: '0', offset: 1 })
]);

export const moveFromBottom = trigger('moveFromBottom',[
    query(':enter, :leave', style(sharedStyles), { optional: true }),
    group([
        query(':enter', [
            animate('.6s 0s ease', moveFromBottomKeyframes)
        ], { optional: true }),
        query(':leave', [
            animate('0.6s 0s ease', moveToTopKeyframes)
        ], { optional: true }),
    ])
],);

// export const routerTransition = trigger('routerTransition', [
//   transition('* => *', [
//     query(':enter, :leave', style({ position: 'fixed', width:'100%',height:'100%' })),
//     query(':enter', style({ transform: 'translateX(100%)' })),
    
//     group([
//       query(':leave', [
//         style({ transform: 'translateX(0%)' }),
//         animate('1.0s ease-in-out', style({transform: 'translateX(-100%)'}))
//       ]),
//       query(':enter', [
//         animate('1.0s ease-in-out', style({transform: 'translateX(0%)'})),
//         animateChild()
//       ])
//     ]),
//   ]),
// ]);

export const pageAnimation = trigger('pageAnimation', [
  transition(':enter', [
    query('h1', [
      style({ transform: 'scale(0)' }),
      animate('1s', style('*'))
    ], {optional:true})
  ]),
]);

export const routerTransition = trigger('routerTransition', [
  transition('* => *', [
    query(':enter, :leave', style(sharedStyles), { optional: true }),
    group([
        query(':enter', [
            animate('0.8s ease-in-out', moveFromBottomKeyframes)
        ], { optional: true }),
        query(':leave', [
            animate('0.8s ease-in-out', moveToTopKeyframes)
        ], { optional: true }),
    ])
    //query(':enter', animateChild(), {optional:true}),
  ])
  
]);
