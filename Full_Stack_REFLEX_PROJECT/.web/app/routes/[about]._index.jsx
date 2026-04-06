import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Text as RadixThemesText} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {Link as ReactRouterLink} from "react-router"
import {ReflexEvent} from "$/utils/state"
import {jsx} from "@emotion/react"




function Button_08d68bfa2b488d2b1d33bc9c56a50d1a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)

const on_click_01c7c059f0280e8a4a107f4e2821ccdf = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.full__stack_reflex_project___state____state.toggle_theme", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{onClick:on_click_01c7c059f0280e8a4a107f4e2821ccdf},(reflex___state____state__full__stack_reflex_project___state____state.dark_mode_rx_state_ ? "\ud83c\udf19" : "\u2600\ufe0f"))
  )
}


function Box_2691c42173971480ae94b7cffb9d8e94 () {
  const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)



  return (
    jsx(RadixThemesBox,{css:({ ["background"] : (reflex___state____state__full__stack_reflex_project___state____state.dark_mode_rx_state_ ? "#0f172a" : "#ffffff"), ["color"] : (reflex___state____state__full__stack_reflex_project___state____state.dark_mode_rx_state_ ? "white" : "black"), ["minHeight"] : "100vh" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "1em", ["width"] : "100%", ["borderBottom"] : "1px solid #ddd" }),direction:"row",gap:"3"},jsx(RadixThemesHeading,{size:"6"},"\ud83d\ude80 AI Code Reviewer"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"4"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Analyze")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/history"},"History")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/about"},"About"))),jsx(Button_08d68bfa2b488d2b1d33bc9c56a50d1a,{},)),jsx(RadixThemesBox,{css:({ ["padding"] : "2em" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"4"},jsx(RadixThemesHeading,{size:"7"},"About"),jsx(RadixThemesText,{as:"p"},"AI Code Reviewer built using FastAPI + Reflex."))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Box_2691c42173971480ae94b7cffb9d8e94,{},),jsx("title",{},"FullStackReflexProject | About"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}