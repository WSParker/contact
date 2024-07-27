<script>
    import Announcement from "./lib/Announcement.svelte";
    import Link from "./lib/Link.svelte";
    const WParker_CV = new URL("./lib/assets/WParker_CV.pdf", import.meta.url);
    const WParker_Resume = new URL(
        "./lib/assets/WParker_Resume.pdf",
        import.meta.url,
    );
    const IMG_0280 = new URL("./lib/assets/IMG_0280.jpeg", import.meta.url)
        .href;
    let iH, iW;
    $: contentWidth = Math.min(500, iW);
    $: fontsize = 0.08 * contentWidth;
    const lowerColor = "#ebf5ee";
    const headerColor = "#283044";
    const backgroundColor = "#78a1bb";
    document.body.style.backgroundColor = backgroundColor;
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
    <div id="content" style="--base-color: {lowerColor}">
        <!-- <Announcement href="https://www.google.com">
            <p>M&M<br />2024<br />arXiv</p>
        </Announcement> -->
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
        <div id="elements" style="--numPerLine: 1;">
            <div class="elementRow" style="--numPerLine: 2;">
                <Link href={WParker_CV}>
                    <p class="hrefContent">Curriculum Vitae</p>
                </Link>
                <Link href={WParker_Resume}>
                    <p class="hrefContent">Resume</p>
                </Link>
            </div>
            <div class="elementRow">
                <Link href="https://www.github.com/WSParker">
                    <p class="hrefContent">GitHub</p>
                </Link>
            </div>
            <div class="elementRow">
                <Link href="https://www.linkedin.com/in/will-s-parker">
                    <p class="hrefContent">LinkedIn</p>
                </Link>
            </div>
            <div class="elementRow">
                <Link
                    href="https://scholar.google.com/citations?user=MfSiuHYAAAAJ&hl=en"
                >
                    <p class="hrefContent">Google Scholar</p>
                </Link>
            </div>
            <div class="elementRow">
                <Link href="https://orcid.org/0009-0008-8883-7724">
                    <p class="hrefContent">ORCiD</p>
                </Link>
            </div>
        </div>
    </div>
</div>

<style>
    .hrefContent {
        margin: calc(var(--numPerLine) * 3%) 0%;
    }
    .elementRow {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    #myEmail {
        margin-top: 0%;
        margin-bottom: 1%;
    }
    #myTitle,
    #myOrganization {
        margin-top: 0;
        margin-bottom: 1%;
    }
    #elements {
        padding-bottom: 2%;
        width: 100%;
        background-color: var(--lowerColor);
    }
    #myName {
        margin-top: 1%;
        margin-bottom: 1%;
        font-size: var(--fontsize);
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
        position: relative;
    }
    #container {
        font-size: calc(0.5 * var(--fontsize));
        margin: 0;
        margin-top: calc(var(--contentWidth) * 0.05);
        padding-bottom: calc(var(--contentWidth) * 0.05);
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
