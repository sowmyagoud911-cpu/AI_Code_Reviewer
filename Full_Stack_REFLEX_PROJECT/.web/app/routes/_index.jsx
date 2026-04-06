import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Heading as RadixThemesHeading,Link as RadixThemesLink,Select as RadixThemesSelect,Text as RadixThemesText,TextArea as RadixThemesTextArea} from "@radix-ui/themes"
import {ColorModeContext,EventLoopContext,StateContexts} from "$/utils/context"
import {Link as ReactRouterLink} from "react-router"
import {ReflexEvent} from "$/utils/state"
import DebounceInput from "react-debounce-input"
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


function Select__root_743d39f200f14105764c10f9c77cb93c () {
  const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_e4658992c122a53607ae8975f3319de0 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.full__stack_reflex_project___state____state.set_language", ({ ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesSelect.Root,{onValueChange:on_change_e4658992c122a53607ae8975f3319de0,value:reflex___state____state__full__stack_reflex_project___state____state.language_rx_state_},jsx(RadixThemesSelect.Trigger,{},),jsx(RadixThemesSelect.Content,{},jsx(RadixThemesSelect.Group,{},"",jsx(RadixThemesSelect.Item,{value:"Python"},"Python"),jsx(RadixThemesSelect.Item,{value:"Java"},"Java"),jsx(RadixThemesSelect.Item,{value:"C++"},"C++"),jsx(RadixThemesSelect.Item,{value:"JavaScript"},"JavaScript"))))
  )
}


function Debounceinput_cd59cacb11172c6645e6fccfe3f56664 () {
  const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_5816ac00082bd7b5a0373729525218e6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.full__stack_reflex_project___state____state.set_code", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["height"] : "200px" }),debounceTimeout:300,element:RadixThemesTextArea,onChange:on_change_5816ac00082bd7b5a0373729525218e6,placeholder:"Paste your code here...",value:reflex___state____state__full__stack_reflex_project___state____state.code_rx_state_},)
  )
}


function Button_b4a6ec39a7d2dfed273b69e211e1ba5e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_880df7c4fdbd3ee4bc89975dd6f1c432 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.full__stack_reflex_project___state____state.analyze_code", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{onClick:on_click_880df7c4fdbd3ee4bc89975dd6f1c432},"Analyze")
  )
}


function Button_d1fe5e7663569da92343f9a8bb3412f4 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_0ab19d41724a762f892fa19b55624d88 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.full__stack_reflex_project___state____state.download_report", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{onClick:on_click_0ab19d41724a762f892fa19b55624d88},"Download Report")
  )
}


function Text_21b257c748cb3996d43a4d3d26267d6d () {
  const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)



  return (
    jsx(RadixThemesText,{as:"p"},("Grade: "+reflex___state____state__full__stack_reflex_project___state____state.result_rx_state_?.["grade"]))
  )
}


function Prismasynclight_ac67f87e5b9dc20c92d64be1d7c03aca () {
  const { resolvedColorMode } = useContext(ColorModeContext)
const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)



  return (
    jsx(SyntaxHighlighter,{children:reflex___state____state__full__stack_reflex_project___state____state.result_rx_state_?.["improved_code"],language:"python",style:((resolvedColorMode?.valueOf?.() === "light"?.valueOf?.()) ? oneLight : oneDark)},)
  )
}


function Box_8ea76183964b526e251617b484316dd1 () {
  const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)



  return (
    jsx(RadixThemesBox,{css:({ ["marginTop"] : "20px" })},jsx(RadixThemesHeading,{size:"4"},"Results"),jsx(Text_21b257c748cb3996d43a4d3d26267d6d,{},),jsx(RadixThemesHeading,{size:"3"},"Issues:"),Array.prototype.map.call(reflex___state____state__full__stack_reflex_project___state____state.result_rx_state_?.["issues"] ?? [],((i_rx_state_,index_ca78229484cfcd94acfe89477503d966)=>(jsx(RadixThemesText,{as:"p",key:index_ca78229484cfcd94acfe89477503d966},("\u2022 "+i_rx_state_))))),jsx(RadixThemesHeading,{size:"3"},"Suggestions:"),Array.prototype.map.call(reflex___state____state__full__stack_reflex_project___state____state.result_rx_state_?.["suggestions"] ?? [],((s_rx_state_,index_ca78229484cfcd94acfe89477503d966)=>(jsx(RadixThemesText,{as:"p",key:index_ca78229484cfcd94acfe89477503d966},("\u2022 "+s_rx_state_))))),jsx(RadixThemesHeading,{size:"3"},"Improved Code:"),jsx(Prismasynclight_ac67f87e5b9dc20c92d64be1d7c03aca,{},))
  )
}


function Box_7a82b05728b33383bff583271b5bc600 () {
  const reflex___state____state__full__stack_reflex_project___state____state = useContext(StateContexts.reflex___state____state__full__stack_reflex_project___state____state)



  return (
    jsx(RadixThemesBox,{css:({ ["background"] : (reflex___state____state__full__stack_reflex_project___state____state.dark_mode_rx_state_ ? "#0f172a" : "#ffffff"), ["color"] : (reflex___state____state__full__stack_reflex_project___state____state.dark_mode_rx_state_ ? "white" : "black"), ["minHeight"] : "100vh" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "1em", ["width"] : "100%", ["borderBottom"] : "1px solid #ddd" }),direction:"row",gap:"3"},jsx(RadixThemesHeading,{size:"6"},"\ud83d\ude80 AI Code Reviewer"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"4"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Analyze")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/history"},"History")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/about"},"About"))),jsx(Button_08d68bfa2b488d2b1d33bc9c56a50d1a,{},)),jsx(RadixThemesBox,{css:({ ["padding"] : "2em" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesHeading,{size:"5"},"Analyze Your Code"),jsx(Select__root_743d39f200f14105764c10f9c77cb93c,{},),jsx(Debounceinput_cd59cacb11172c6645e6fccfe3f56664,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(Button_b4a6ec39a7d2dfed273b69e211e1ba5e,{},),jsx(Button_d1fe5e7663569da92343f9a8bb3412f4,{},)),jsx(Box_8ea76183964b526e251617b484316dd1,{},))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(Box_7a82b05728b33383bff583271b5bc600,{},),jsx("title",{},"FullStackReflexProject | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}