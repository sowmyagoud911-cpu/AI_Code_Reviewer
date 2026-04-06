import {Fragment,useEffect} from "react"
import {Flex as RadixThemesFlex,Heading as RadixThemesHeading} from "@radix-ui/themes"
import {jsx} from "@emotion/react"





export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["height"] : "80vh" })},jsx(RadixThemesHeading,{},"History Page Coming Soon...")),jsx("title",{},"AiCodeReviewer | History"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}