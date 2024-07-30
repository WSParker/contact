<script>
    export let href;
    import { clickHandler, keyHandler } from "./link_functions.js";
</script>

<div
    on:click={(e) => {
        clickHandler(e, href);
    }}
    on:keyup={(e) => {
        keyHandler(e, href);
    }}
    role="link"
    tabindex="0"
    id="container"
    class="link"
>
    <slot></slot>
</div>

<style>
    @import "./link_styles.css";
    #container {
        text-align: center;
        position: absolute;
        left: 4%;
        top: 41%;
        /* width: calc(var(--contentWidth) * 0.18); */
        /* height: calc(var(--contentWidth) * 0.18); */
        width: 2.3rem;
        height: 2.3rem;
        font-size: 0.45rem;
        color: black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--backgroundColor);
    }
</style>
