import "./App.css"

import {
  UseStateMainComponent,
  UseEffectMainComponent,
  ConditionalRenderingMainComponent,
  List,
  FormsMainComponent,
  UseRefMain,
  CustomHooksMain,
  ContextApiMain,
  UseReducerMain,
  PerformanceMain,
} from "./index"

function App() {
  return (
    <section>
      <Utility />
      <UseStateMainComponent />
      <UseEffectMainComponent />
      <ConditionalRenderingMainComponent />
      <List />
      <FormsMainComponent />
      <UseRefMain />
      <CustomHooksMain />
      <ContextApiMain />
      <UseReducerMain />
      <PerformanceMain />
    </section>
  )
}


const Utility = () => {

const scroll = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  })
}

  return (
    <button className="go-down" id="scrollButton" onClick={scroll}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
      </svg>
    </button>
  )

}

export default App
