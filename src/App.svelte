<script>
    import Link from "./lib/Link.svelte";
    const WParker_CV = new URL("./lib/WParker_CV.pdf", import.meta.url);
    const WParker_Resume = new URL("./lib/WParker_Resume.pdf", import.meta.url);
    // const WParker_Dissertation = new URL("./lib/WParker_Dissertation.pdf", import.meta.url);
    const IMG_0280 = new URL("./lib/DSC_4721_bust.jpeg", import.meta.url)
        .href;
    let iH, iW;
    $: contentWidth = Math.min(500, iW);
    let linkWidth1 = 92; // (100 - 4 * (numPerLine + 1)) / numPerLine
    let linkWidth2 = 44;
    const backgroundColor = "hsl(223, 18%, 92%)";
    const lowerColor = "hsl(223, 18%, 92%)";
    const headerColor = "hsl(223, 18%, 92%)";
    document.body.style.backgroundColor = backgroundColor;
</script>

<div
    bind:clientHeight={iH}
    bind:clientWidth={iW}
    id="container"
    style="--lowerColor: {lowerColor}; --contentWidth: {contentWidth}px; 
    --headerColor: {headerColor}; --backgroundColor: {backgroundColor}; --numPerLine: 1;"
>
    <div id="content" style="--base-color: {lowerColor}">
        <!-- <Announcement href="https://arxiv.org/abs/2407.19085"
            >1/2-Int. <br />Hopfions <br />Preprint</Announcement
        > -->
        <div id="header">
            <img
                id="headshot"
                width={0.5 * contentWidth}
                height={0.5 * contentWidth}
                src={IMG_0280}
                alt="WSParker headshot"
            />
            <p id="myName">William Parker, PhD</p>
            <p id="myTitle">Recent Physics PhD graduate of <br/> University of Oregon.</p>
            <!-- <p id="myOrganization">University of Oregon</p> -->
            <p id="myEmail">
                <a href="mailto:will.parker0@gmail.com">will.parker0@gmail.com</a>
            </p>
            <div class="elementRow" style="--numPerLine: 2;">
                <Link href={WParker_CV} width="{linkWidth2}%">
                    <p class="hrefContent">Curriculum Vitae</p>
                </Link>
                <Link href={WParker_Resume} width="{linkWidth2}%">
                    <p class="hrefContent">Resume</p>
                </Link>
            </div>
            <div class="elementRow">
                <Link
                    href="https://www.github.com/WSParker"
                    width="{linkWidth1}%"
                >
                    <p class="hrefContent">GitHub</p>
                </Link>
            </div>
            <div class="elementRow">
                <Link
                    href="https://www.linkedin.com/in/will-s-parker"
                    width="{linkWidth1}%"
                >
                    <p class="hrefContent">LinkedIn</p>
                </Link>
            </div>
            <div class="elementRow">
                <Link
                    href="https://scholar.google.com/citations?user=MfSiuHYAAAAJ&hl=en"
                    width="{linkWidth1}%"
                >
                    <p class="hrefContent">Google Scholar</p>
                </Link>
            </div>
            <div class="elementRow">
                <Link
                    href="https://orcid.org/0009-0008-8883-7724"
                    width="{linkWidth1}%"
                >
                    <p class="hrefContent">ORCiD</p>
                </Link>
            </div>
            <!-- <div class="elementRow">
                <Link href={WParker_Dissertation} width="{linkWidth1}%">
                    <p class="hrefContent">Dissertation</p>
                </Link>
            </div> -->
        </div>
    </div>
</div>

<style>
    .hrefContent {
        margin: calc(var(--numPerLine) * 2.5%) 0%;
        font-size: 0.6rem;
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
        margin-bottom: 1.5%;
        font-size: 0.5rem;
        font-weight: 300;
    }
    #myTitle {
        margin-top: 0;
        margin-bottom: 1%;
        font-size: 0.5rem;
        font-weight: 300;
    }
    #myName {
        margin-top: 1%;
        margin-bottom: 1%;
        font-size: 1rem;
        font-weight: 800;
    }
    #headshot {
        background-color: var(--backgroundColor);
        border: 4px solid black;
        border-radius: 50%;
        justify-self: center;
        margin-top: 5%;
    }
    #header {
        width: 100%;
        height: fit-content;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
    }
    #content {
        padding: 0;
        border-right: 10px solid;
        border-left: 10px solid;
        border-image-slice: 1;
        border-width: 2px;
        border-image-source: linear-gradient(to bottom, var(--base-color), rgb(31, 31, 31), var(--base-color));
        background-color: var(--base-color);
        /* border-right: 1px solid #9CDCFE; */

        width: calc(var(--contentWidth) * 0.9);
        display: flex;
        flex-direction: column;
        position: relative;
    }
    #container {
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
        border-radius: 8px;
    }
</style>
