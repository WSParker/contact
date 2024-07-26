<script>
    export let contentTitle;
    export let href;
    export let color;
    export let numPerLine = 1;
    $: containerWidth = (100 - 3 * (numPerLine + 1)) / numPerLine;
    let container;
    function clickHandler(e) {
        let theLink = document.createElement("a");
        theLink.href = href;
        theLink.click();
    }
    function keyHandler(e) {
        if (e.key == "Enter") {
            clickHandler(e);
        }
    }
</script>

<div
    bind:this={container}
    on:click={clickHandler}
    on:keyup={keyHandler}
    role="link"
    tabindex="0"
    id="container"
    style="width: {containerWidth}%; --numPerLine: {numPerLine}; --base-color: {color}"
>
    <p id="contentTitle">{contentTitle}</p>
    <p id="content"></p>
</div>

<style>
    #container {
        text-align: center;
        margin: 1.5%;
        border: 1px solid black;
        border-radius: 8px;
        cursor: pointer;
        background-color: var(--base-color);
        transition:
            background-color 0.2s,
            border-color 0.2s;
    }
    #container:hover {
        background-color: hsl(from var(--base-color) h s 90%);
        /* background-color: #fcfcee; */
        border-color: hsl(from black h s 60%);
    }
    p {
        /* margin-left: 3%; */
        margin-top: calc(var(--numPerLine) * 2%);
        margin-bottom: calc(var(--numPerLine) * 2%);
        /* margin-bottom: 2%; */
    }
</style>
