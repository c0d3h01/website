import type { Metadata } from "next"
import HomePage from "@/components/home/HomePage"
import MainScreen from "@/layout/MainScreen"

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
}

const HomePageRoute = () => {
  return (
    <MainScreen>
      <HomePage />
    </MainScreen>
  )
}

export default HomePageRoute
