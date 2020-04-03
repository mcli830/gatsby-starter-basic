import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html {
        font-size: 14px;
    }

    html, body {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }

    * {
        box-sizing: border-box;
    }
`