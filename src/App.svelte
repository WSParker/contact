<script>
    import Element from "./lib/Element.svelte";
    const WParker_CV = new URL("./lib/assets/WParker_CV.pdf", import.meta.url);
    const WParker_Resume = new URL(
        "./lib/assets/WParker_Resume.pdf",
        import.meta.url,
    );
    const IMG_0280 = new URL("./lib/assets/IMG_0280.png", import.meta.url).href;
    let iH, iW;
    $: contentWidth = Math.min(600, iW);
    $: fontsize = 0.08 * contentWidth;
    const lowerColor = "#edf2f4";
    const headerColor = "#2b2d42";
    const backgroundColor = "#8d99ae";
</script>

<svelte:body
    on:click={() => {
        console.log(iH, iW);
    }}
/>
<div
    bind:clientHeight={iH}
    bind:clientWidth={iW}
    id="container"
    style="--fontsize: {fontsize}px; 
    --lowerColor: {lowerColor}; --contentWidth: {contentWidth}px; 
    --headerColor: {headerColor}; --backgroundColor: {backgroundColor};"
>
    <div id="content">
        <div id="header">
            <img
                id="headshot"
                width={0.5 * contentWidth}
                height={0.5 * contentWidth}
                src={IMG_0280}
                alt="WSParker headshot"
            />
            <p id="myName">William Parker</p>
            <p id="myTitle">Physics PhD Candidate</p>
            <p id="myOrganization">University of Oregon</p>
            <p id="myEmail">
                <a href="mailto:wparker@uoregon.edu">wparker4@uoregon.edu</a>
            </p>
        </div>
        <div id="elements">
            <div class="element">
                <Element
                    contentTitle="Curriculum Vitae"
                    href={WParker_CV}
                    color={lowerColor}
                    numPerLine={2}
                ></Element>
                <Element
                    contentTitle="Resume"
                    href={WParker_Resume}
                    color={lowerColor}
                    numPerLine={2}
                ></Element>
            </div>
            <div class="element">
                <Element
                    contentTitle="GitHub"
                    href="https://www.github.com/WSParker"
                    color={lowerColor}
                    numPerLine={1}
                ></Element>
            </div>
            <div class="element">
                <Element
                    contentTitle="LinkedIn"
                    href="https://www.linkedin.com/in/will-s-parker"
                    color={lowerColor}
                    numPerLine={1}
                ></Element>
            </div>
            <div class="element">
                <Element
                    contentTitle="Google Scholar"
                    href="https://scholar.google.com/citations?user=MfSiuHYAAAAJ&hl=en"
                    color={lowerColor}
                    numPerLine={1}
                ></Element>
            </div>
            <div class="element">
                <Element
                    contentTitle="ORCiD"
                    href="https://orcid.org/0009-0008-8883-7724"
                    color={lowerColor}
                    numPerLine={1}
                ></Element>
            </div>
        </div>
    </div>
</div>

<style>
    .element {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #myEmail {
        margin-top: 0%;
        margin-bottom: 1%;
        font-size: calc(0.4 * var(--fontsize));
    }
    #myTitle,
    #myOrganization {
        margin-top: 0;
        margin-bottom: 1%;
        font-size: calc(0.5 * var(--fontsize));
    }
    #elements {
        width: 100%;
        background-color: var(--lowerColor);
        font-size: calc(0.4 * var(--fontsize));
    }
    #myName {
        margin-top: 1%;
        margin-bottom: 1%;
        font-size: var(--fontsize);
    }
    #elements {
        width: 100%;
        background-color: var(--lowerColor);
    }
    #headshot {
        border: 6px solid white;
        border-radius: 50%;
        justify-self: center;
        margin-top: 5%;
    }
    #header {
        background: linear-gradient(
            180deg,
            var(--headerColor) calc(0.42 * var(--contentWidth)),
            var(--lowerColor) 20px
        );
        width: 100%;
        color: black;
        height: fit-content;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #content {
        padding: 0;
        border: 1px solid black;

        width: calc(var(--contentWidth) * 0.9);
        display: flex;
        flex-direction: column;
    }
    #container {
        padding: 0;
        margin: 0;
        margin-top: calc(var(--contentWidth) * 0.05);
        display: flex;
        align-items: center;
        justify-content: center;
        height: fit-content;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--backgroundColor);
    }
</style>
