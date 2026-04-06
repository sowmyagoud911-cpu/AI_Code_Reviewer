import {Fragment,useCallback,useContext,useEffect} from "react"
import {Badge as RadixThemesBadge,Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Text as RadixThemesText} from "@radix-ui/themes"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {Link as ReactRouterLink} from "react-router"
import {ReflexEvent} from "$/utils/state"
import {PrismAsyncLight as SyntaxHighlighter} from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import {jsx} from "@emotion/react"




function Button_08d68bfa2b488d2b1d33bc9c56a50d1a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)

const on_click_01c7c059f0280e8a4a107f4e2821ccdf = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.full__stack_reflex_project___state____state.toggle_theme", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{onClick:on_click_01c7c059f0280e8a4a107f4e2821ccdf},(reflex___state____state__full__stack_reflex_project___state____state.dark_mode_rx_state_ ? "\ud83c\udf19" : "\u2600\ufe0f"))
  )
}


function Flex_7396748e7c1652affb6cfebb4d50c14b () {
  const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)
const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "20px" }),direction:"column",gap:"3"},jsx(RadixThemesHeading,{size:"6"},"History"),Array.prototype.map.call(reflex___state____state__full__stack_reflex_project___state____state.history_rx_state_ ?? [],((item_rx_state_,index_046ebbae0c071840a2d128fdce46c50d)=>(jsx(RadixThemesBox,{css:({ ["padding"] : "15px", ["border"] : "1px solid #ddd", ["borderRadius"] : "10px", ["marginBottom"] : "10px" }),key:index_046ebbae0c071840a2d128fdce46c50d},jsx(RadixThemesText,{as:"p"},"Grade:"),jsx(RadixThemesBadge,{},item_rx_state_?.["grade"]),jsx(RadixThemesText,{as:"p"},"Issues:"),Array.prototype.map.call(item_rx_state_?.["issues"] ?? [],((i_rx_state_,index_9ba3c7dd5f424ba82282fd2976eaf2ea)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",key:index_9ba3c7dd5f424ba82282fd2976eaf2ea,gap:"3"},jsx(RadixThemesText,{as:"p"},"\u2022"),jsx(RadixThemesText,{as:"p"},i_rx_state_))))),jsx(RadixThemesText,{as:"p"},"Suggestions:"),Array.prototype.map.call(item_rx_state_?.["suggestions"] ?? [],((s_rx_state_,index_9ba3c7dd5f424ba82282fd2976eaf2ea)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",key:index_9ba3c7dd5f424ba82282fd2976eaf2ea,gap:"3"},jsx(RadixThemesText,{as:"p"},"\u2022"),jsx(RadixThemesText,{as:"p"},s_rx_state_))))),jsx(RadixThemesText,{as:"p"},"Improved Code:"),jsx(SyntaxHighlighter,{children:item_rx_state_?.["improved_code"],language:"python",style:((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? oneLight : oneDark)},))))))
  )
}


function Box_cb05c411cc294316f97f67120dc739c3 () {
  const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)



  return (
    jsx(RadixThemesBox,{css:({ ["background"] : (reflex___state____state__full__stack_reflex_project___state____state.dark_mode_rx_state_ ? "#0f172a" : "#ffffff"), ["color"] : (reflex___state____state__full__stack_reflex_project___state____state.dark_mode_rx_state_ ? "white" : "black"), ["minHeight"] : "100vh" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "1em", ["width"] : "100%", ["borderBottom"] : "1px solid #ddd" }),direction:"row",gap:"3"},jsx(RadixThemesHeading,{size:"6"},"\ud83d\ude80 AI Code Reviewer"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"4"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Analyze")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/history"},"History")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/about"},"About"))),jsx(Button_08d68bfa2b488d2b1d33bc9c56a50d1a,{},)),jsx(RadixThemesBox,{css:({ ["padding"] : "2em" })},jsx(Flex_7396748e7c1652affb6cfebb4d50c14b,{},)))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Box_cb05c411cc294316f97f67120dc739c3,{},),jsx("title",{},"FullStackReflexProject | History"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}