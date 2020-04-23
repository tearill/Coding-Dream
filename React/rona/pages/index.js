import styled, { createGlobalStyle } from 'styled-components' // 样式组件
import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
// 本质是 css in js 在 js 代码中写 css
// 生成的 class="sc-AxjAm kCqhDH"，作用于当前组件，不影响其他地方
const Wrapper = styled.div`
  color: blue;
`
// 全局的样式组件
const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;f
  }
`

export default function IndexPage() {
  return (
    <div>Next ssr in react
      <GlobalStyle />
      {/* <Wrapper>
        Hello
      </Wrapper> */}
      <Stats 
        url="https://covid19.mathdro.id/api">
      </Stats>
      <CountrySelector></CountrySelector>
    </div>
  )
}
