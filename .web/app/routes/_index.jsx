import {Fragment,useCallback,useContext,useEffect} from "react"
import {Button as RadixThemesButton,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Separator as RadixThemesSeparator,Text as RadixThemesText,TextArea as RadixThemesTextArea} from "@radix-ui/themes"
import {Cpu as LucideCpu} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import DebounceInput from "react-debounce-input"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent} from "$/utils/state"
import {PrismAsyncLight as SyntaxHighlighter} from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/esm/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import {jsx} from "@emotion/react"




function Debounceinput_4918ab6f1e98d0fac52eec57b9a05da7 () {
  const reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state = useContext(StateContexts.reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_27ec7c7939be689f98c385fe4145d648 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.ai__code__reviewer____ai__code__reviewer____code_state.set_code_input", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["height"] : "300px" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_27ec7c7939be689f98c385fe4145d648,placeholder:"Paste your Python code here...",value:reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state.code_input_rx_state_},)
  )
}


function Button_4876d3bf3b46b0192e4a066697412aa8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_a02aaaf9a51301b91d88676083794b09 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.ai__code__reviewer____ai__code__reviewer____code_state.analyze_code", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["marginTop"] : "10px" }),onClick:on_click_a02aaaf9a51301b91d88676083794b09},"Analyze Code")
  )
}


function Text_544ec32e4e422b06c88317b041ab0962 () {
  const reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state = useContext(StateContexts.reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state)



  return (
    jsx(RadixThemesText,{as:"p"},reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state.error_output_rx_state_)
  )
}


function Prismasynclight_9d666b0147274cda30e02ef7c1d20928 () {
  const { resolvedColorMode } = useContext(ColorModeContext)
const reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state = useContext(StateContexts.reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state)



  return (
    jsx(SyntaxHighlighter,{children:reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state.formatted_code_rx_state_,language:"python",style:((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? oneLight : oneDark)},)
  )
}


function Flex_eaeecec41d14fee55803380cdbff0cb2 () {
  const reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state = useContext(StateContexts.reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "20px" }),direction:"column",gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "20px", ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"2"},jsx(LucideCpu,{size:28},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "20px" })},"AI Code Reviewer")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"6"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Home")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/history"},"History")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/about"},"About")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/help"},"Help")))),jsx(RadixThemesHeading,{size:"8"},"AI-Driven Code Reviewer"),jsx(Debounceinput_4918ab6f1e98d0fac52eec57b9a05da7,{},),jsx(Button_4876d3bf3b46b0192e4a066697412aa8,{},),jsx(RadixThemesSeparator,{size:"4"},),jsx(RadixThemesHeading,{},"Errors"),jsx(Text_544ec32e4e422b06c88317b041ab0962,{},),jsx(RadixThemesHeading,{},"Formatted Code"),jsx(Prismasynclight_9d666b0147274cda30e02ef7c1d20928,{},),jsx(RadixThemesHeading,{},"Functions Found"),Array.prototype.map.call(reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state.functions_rx_state_ ?? [],((f_rx_state_,index_47f68dc0919767fffc2394c497e4daac)=>(jsx(RadixThemesText,{as:"p",key:index_47f68dc0919767fffc2394c497e4daac},f_rx_state_)))),jsx(RadixThemesHeading,{},"Imports Found"),Array.prototype.map.call(reflex___state____state__ai__code__reviewer____ai__code__reviewer____code_state.imports_rx_state_ ?? [],((i_rx_state_,index_47f68dc0919767fffc2394c497e4daac)=>(jsx(RadixThemesText,{as:"p",key:index_47f68dc0919767fffc2394c497e4daac},i_rx_state_)))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Flex_eaeecec41d14fee55803380cdbff0cb2,{},),jsx("title",{},"AiCodeReviewer | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}