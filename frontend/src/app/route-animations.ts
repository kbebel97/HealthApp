import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate, keyframes
} from '@angular/animations'

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)'
        })
      ]),
      query(':enter, :leave', [
        animate('600ms ease'),
        style({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        })
      ])
    ])
  ]);

export const slider =
  trigger('routeAnimations', [
    transition('1 => 2', slideTo('right')),
    transition('2 => 3', slideTo('right')),
    transition('3 => 4', slideTo('right')),
    transition('2 => 1', slideTo('left')),
    transition('3 => 2', slideTo('left')),
    transition('4 => 3', slideTo('left')),

  ])


  function slideTo(direction){
    const optional = { optional: true};
    return [
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          [direction]: 0,
          width: '100%',
        })
      ], optional),
      query(':enter', [
        style({
          [direction]: '-100%'
        })
      ]),
      group([
        query(':leave', [
          animate('600ms ease', style({[direction]: '100%'}))
        ], optional),
        query(':enter', [
          animate('600ms ease', style({[direction]: '0%'}))
        ])
      ])
    ]
  }
  export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
