import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
   if (title) {
    document.title = `${title} - Al Jaami Technology`
   }else{
    document.title = `Al Jaami Technology`
   }
  },[title])
}

export default useTitle;