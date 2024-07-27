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
        margin: 2% 0%;
        padding: 0;
        border-radius: 8px;
        width: calc((100% - 4% * (var(--numPerLine) + 1)) / var(--numPerLine));
        text-align: center;
    }
</style>
