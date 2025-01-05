<script>
    export let href;
    export let width;
</script>

<a
    id="container"
    style:width
    class="link"
    href={href}
>
    <slot></slot>
</a>

<style>
    #container {
        font-weight: 300;
        margin: 2% 0%;
        padding: 0;
        border-radius: 8px;
        text-align: center;
        color: rgb(31, 31, 31);
        text-decoration: none;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none;
    }
    .link {
        border: 1.3px solid rgb(31, 31, 31);
        cursor: pointer;
        background-color: var(--base-color);
        transition:
            background-color 0.2s,
            border-color 0.2s;
    }
    #container:hover {
        background-color: hsl(from var(--base-color) h s 90%);
        border-color: hsl(from rgb(31, 31, 31) h s 60%);
    }
</style>
