import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/drawingsize',
    name: 'drawingsize',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DrawingSize.vue')
  },
  {
    path: '/blockanchor',
    name: 'blockanchor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockAnchor.vue')
  },
  {
    path: '/blockborderraduis',
    name: 'blockborderraduis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockBorderRaduis.vue')
  },
  {
    path: '/blockpadding',
    name: 'blockpadding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockPadding.vue')
  },
  {
    path: '/blockwidthheight',
    name: 'blockwidthheight',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockWidthHeight.vue')
  },
  {
    path: '/blocksprite',
    name: 'blocksprite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockSprite.vue')
  },
  {
    path: '/blocklabel',
    name: 'blocklabel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockLabel.vue')
  },
  {
    path: '/blockgroup',
    name: 'blockgroup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockGroup.vue')
  },
  {
    path: '/blockspritesvg',
    name: 'blockspritesvg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockSpriteSvg.vue')
  },
  {
    path: '/blockspritesvgpure',
    name: 'blockspritesvgpure',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BlockSpriteSvgPure.vue')
  },
  {
    path: '/pathpath',
    name: 'pathpath',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathPath.vue')
  },
  {
    path: '/pathclip',
    name: 'pathclip',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathClip.vue')
  },
  {
    path: '/pathrect',
    name: 'pathrect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathRect.vue')
  },
  {
    path: '/pathtriangleparallel',
    name: 'pathtriangleparallel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathTriangleParallel.vue')
  },
  {
    path: '/pathpolyline',
    name: 'pathpolyline',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathPolyline.vue')
  },
  {
    path: '/pathregularstar',
    name: 'pathregularstar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathRegularStar.vue')
  },
  {
    path: '/patharcellipse',
    name: 'patharcellipse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathArcEllipse.vue')
  },
  {
    path: '/pathring',
    name: 'pathring',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathRing.vue')
  },
  {
    path: '/effecttransition',
    name: 'effecttransition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EffectTransition.vue')
  },
  {
    path: '/effecttransitioncontrol',
    name: 'effecttransitioncontrol',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EffectTransitionControl.vue')
  },
  {
    path: '/effectanimate',
    name: 'effectanimate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EffectAnimate.vue')
  },
  {
    path: '/pathpolylinehover',
    name: 'pathpolylinehover',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PathPolylineHover.vue')
  },
  {
    path: '/effectanimatecontrol',
    name: 'effectanimatecontrol',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EffectAnimateControl.vue')
  },
  {
    path: '/effectfilter',
    name: 'effectfilter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EffectFilter.vue')
  },
  {
    path: '/effectgradient',
    name: 'effectgradient',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EffectGradient.vue')
  },
  {
    path: '/actionevent',
    name: 'actionevent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ActionEvent.vue')
  },
  {
    path: '/enginememory',
    name: 'enginememory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EngineMemory.vue')
  },
  {
    path: '/drawingsize',
    name: 'drawingsize',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DrawingSize.vue')
  },
  {
    path: '/preloadimage',
    name: 'preloadimage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreloadImage.vue')
  },
  {
    path: '/preloadsprite',
    name: 'preloadsprite',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreloadSprite.vue')
  },
  {
    path: '/preloadresource',
    name: 'preloadresource',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PreloadResource.vue')
  },
  {
    path: '/animationchange',
    name: 'animationchange',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnimationChange.vue')
  },
  {
    path: '/animationhover',
    name: 'animationhover',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnimationHover.vue')
  },
  {
    path: '/animationinfo',
    name: 'animationinfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnimationInfo.vue')
  },
  {
    path: '/animationtimeline',
    name: 'animationtimeline',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnimationTimeline.vue')
  },
  {
    path: '/externalclock',
    name: 'externalclock',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExternalClock.vue')
  },
  {
    path: '/eventlisteners',
    name: 'eventlisteners',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EventListeners.vue')
  },
  {
    path: '/extendelement',
    name: 'extendelement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExtendElement.vue')
  },
  {
    path: '/improveperformance',
    name: 'improveperformance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ImprovePerformance.vue')
  },
  {
    path: '/takesnapshot',
    name: 'takesnapshot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TakeSnapshot.vue')
  },
  {
    path: '/multithreading',
    name: 'multithreading',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MultiThreading.vue')
  },
  {
    path: '/useshade',
    name: 'useshade',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UseShade.vue')
  },
  {
    path: '/usethreed',
    name: 'usethreed',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UseThreeD.vue')
  },
  {
    path: '/tts',
    name: 'tts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TTS.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
