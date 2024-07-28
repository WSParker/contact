<script>
    export let href;
    export let width;
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
    style:width
    class="link"
>
    <slot></slot>
</div>

<style>
    @import "./link_styles.css";
    #container {
        margin: 2% 0%;
        padding: 0;
        border-radius: 8px;
        text-align: center;
    }
</style>
